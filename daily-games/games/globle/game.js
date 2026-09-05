// ============================================================
// GLOBLE - 3D rotating globe
// Three.js renders a textured Earth sphere. Guesses plot as
// colored dots on the surface (blue = far, red = close, green =
// correct). The globe auto-spins until the first guess is made,
// then stops - player can drag to rotate manually.
// ============================================================

// ---------- geo math (shared with Flagle) ----------

function dayIndex(offset) {
  const start = new Date(2024, 0, 1);
  const today = new Date();
  return Math.floor((today - start) / (1000 * 60 * 60 * 24)) + offset;
}

function getTodaysCountry() {
  return COUNTRIES[dayIndex(603) % COUNTRIES.length];
}

function toRad(deg) { return (deg * Math.PI) / 180; }
function toDeg(rad) { return (rad * 180) / Math.PI; }

function distanceKm(a, b) {
  const R = 6371;
  const dLat = toRad(b.lat - a.lat);
  const dLng = toRad(b.lng - a.lng);
  const lat1 = toRad(a.lat), lat2 = toRad(b.lat);
  const h = Math.sin(dLat/2)**2 + Math.cos(lat1)*Math.cos(lat2)*Math.sin(dLng/2)**2;
  return Math.round(R * 2 * Math.atan2(Math.sqrt(h), Math.sqrt(1-h)));
}

function bearingDeg(a, b) {
  const lat1 = toRad(a.lat), lat2 = toRad(b.lat);
  const dLng = toRad(b.lng - a.lng);
  const y = Math.sin(dLng) * Math.cos(lat2);
  const x = Math.cos(lat1)*Math.sin(lat2) - Math.sin(lat1)*Math.cos(lat2)*Math.cos(dLng);
  return (toDeg(Math.atan2(y, x)) + 360) % 360;
}

function proximityPct(km) {
  return Math.max(0, Math.round(100 - (km / 20015) * 100));
}

// Convert lat/lng to 3D point on a unit sphere.
// Three.js convention: Y up, Z toward viewer.
function latLngTo3D(lat, lng, r) {
  const phi   = toRad(90 - lat);
  const theta = toRad(lng + 180);
  return new THREE.Vector3(
    -(r * Math.sin(phi) * Math.cos(theta)),
     (r * Math.cos(phi)),
     (r * Math.sin(phi) * Math.sin(theta))
  );
}

// Heat color: blue (far) -> red (close), green for correct.
function heatColor(pct) {
  const cold = new THREE.Color(0x3d6be0);
  const hot  = new THREE.Color(0xe8114b);
  return cold.clone().lerp(hot, pct / 100);
}

// ---------- state ----------

const state = {
  answer: getTodaysCountry(),
  guesses: [],
  gameOver: false,
  spinning: true,
};

// ---------- DOM refs ----------

const canvasContainer = document.getElementById("globle-map");
const attemptsEl      = document.getElementById("attempts-left");
const statusEl        = document.getElementById("status");
const guessForm       = document.getElementById("guess-form");
const guessInput      = document.getElementById("guess-input");
const autocompleteList= document.getElementById("autocomplete-list");
const guessList       = document.getElementById("guess-list");
const playAgainBtn    = document.getElementById("play-again");

function showStatus(msg, isError = false) {
  statusEl.textContent = msg;
  statusEl.classList.toggle("error", isError);
}

// ---------- Three.js globe ----------

const GLOBE_RADIUS = 1;
const DOT_RADIUS = 0.035;

let renderer, scene, camera, globe, dotGroup;
let isDragging = false, prevMouse = { x: 0, y: 0 };
let rotVel = { x: 0, y: 0 }; // momentum for flick-drag

function initGlobe() {
  const W = canvasContainer.clientWidth;
  const H = canvasContainer.clientHeight;

  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(W, H);
  canvasContainer.appendChild(renderer.domElement);

  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(45, W / H, 0.1, 100);
  camera.position.z = 2.8;

  // Lighting
  const ambient = new THREE.AmbientLight(0xffffff, 0.6);
  scene.add(ambient);
  const dirLight = new THREE.DirectionalLight(0xffffff, 0.8);
  dirLight.position.set(5, 3, 5);
  scene.add(dirLight);

  // Globe sphere with Earth texture
  const geo = new THREE.SphereGeometry(GLOBE_RADIUS, 64, 64);
  const loader = new THREE.TextureLoader();
  // Free NASA "Blue Marble" Earth texture via cdnjs-compatible URL
  const texture = loader.load(
    "https://raw.githubusercontent.com/turban/webgl-earth/master/images/2_no_clouds_4k.jpg",
    () => { /* loaded */ },
    undefined,
    () => {
      // Fallback: plain dark blue sphere if texture fails to load
      globe.material.color.set(0x1a3a6e);
    }
  );
  const mat = new THREE.MeshPhongMaterial({ map: texture, specular: 0x222222 });
  globe = new THREE.Mesh(geo, mat);
  scene.add(globe);

  // Group to hold all guess dots as children of the globe,
  // so they rotate with it when the player drags.
  dotGroup = new THREE.Group();
  globe.add(dotGroup);

  // Atmosphere glow (simple additive sphere slightly larger)
  const atmoGeo = new THREE.SphereGeometry(GLOBE_RADIUS * 1.015, 32, 32);
  const atmoMat = new THREE.MeshPhongMaterial({
    color: 0x4488ff,
    transparent: true,
    opacity: 0.08,
    side: THREE.FrontSide,
  });
  scene.add(new THREE.Mesh(atmoGeo, atmoMat));

  // Drag-to-rotate
  renderer.domElement.addEventListener("mousedown", onDragStart);
  renderer.domElement.addEventListener("mousemove", onDragMove);
  renderer.domElement.addEventListener("mouseup",   onDragEnd);
  renderer.domElement.addEventListener("mouseleave",onDragEnd);
  renderer.domElement.addEventListener("touchstart", e => onDragStart(e.touches[0]), { passive: true });
  renderer.domElement.addEventListener("touchmove",  e => { e.preventDefault(); onDragMove(e.touches[0]); }, { passive: false });
  renderer.domElement.addEventListener("touchend",   onDragEnd);

  window.addEventListener("resize", () => {
    const W2 = canvasContainer.clientWidth;
    const H2 = canvasContainer.clientHeight;
    renderer.setSize(W2, H2);
    camera.aspect = W2 / H2;
    camera.updateProjectionMatrix();
  });

  animate();
}

function onDragStart(e) {
  isDragging = true;
  prevMouse = { x: e.clientX, y: e.clientY };
  rotVel = { x: 0, y: 0 };
}

function onDragMove(e) {
  if (!isDragging) return;
  const dx = e.clientX - prevMouse.x;
  const dy = e.clientY - prevMouse.y;
  globe.rotation.y += dx * 0.005;
  globe.rotation.x += dy * 0.005;
  rotVel = { x: dy * 0.005, y: dx * 0.005 };
  prevMouse = { x: e.clientX, y: e.clientY };
}

function onDragEnd() {
  isDragging = false;
}

function animate() {
  requestAnimationFrame(animate);

  if (state.spinning && !isDragging) {
    // Auto-spin until first guess
    globe.rotation.y += 0.004;
  } else if (!isDragging) {
    // Momentum decay after a flick-drag
    globe.rotation.y += rotVel.y;
    globe.rotation.x += rotVel.x;
    rotVel.x *= 0.92;
    rotVel.y *= 0.92;
  }

  renderer.render(scene, camera);
}

function addDot(lat, lng, color) {
  const pos = latLngTo3D(lat, lng, GLOBE_RADIUS + DOT_RADIUS * 0.5);
  const geo = new THREE.SphereGeometry(DOT_RADIUS, 12, 12);
  const mat = new THREE.MeshPhongMaterial({ color });
  const dot = new THREE.Mesh(geo, mat);
  dot.position.copy(pos);
  dotGroup.add(dot);
}

// ---------- autocomplete ----------

let currentOptions = [];
let activeIndex = -1;

function renderAutocompleteOptions(query) {
  const q = query.trim().toLowerCase();
  currentOptions = q
    ? COUNTRIES.filter(c => c.name.toLowerCase().includes(q))
    : COUNTRIES.slice();
  activeIndex = -1;

  if (!currentOptions.length) {
    autocompleteList.classList.add("hidden");
    autocompleteList.innerHTML = "";
    return;
  }

  autocompleteList.innerHTML = currentOptions.map((c, i) =>
    `<div class="autocomplete-option" data-index="${i}"><span>${c.name}</span></div>`
  ).join("");
  autocompleteList.classList.remove("hidden");

  autocompleteList.querySelectorAll(".autocomplete-option").forEach(opt => {
    opt.addEventListener("mousedown", e => {
      e.preventDefault();
      guessInput.value = currentOptions[Number(opt.dataset.index)].name;
      autocompleteList.classList.add("hidden");
    });
  });
}

function updateActiveOption(opts) {
  opts.forEach((o, i) => o.classList.toggle("active", i === activeIndex));
  if (opts[activeIndex]) opts[activeIndex].scrollIntoView({ block: "nearest" });
}

guessInput.addEventListener("input", () => renderAutocompleteOptions(guessInput.value));
guessInput.addEventListener("focus", () => renderAutocompleteOptions(guessInput.value));
guessInput.addEventListener("keydown", e => {
  if (autocompleteList.classList.contains("hidden")) return;
  const opts = autocompleteList.querySelectorAll(".autocomplete-option");
  if (e.key === "ArrowDown") { e.preventDefault(); activeIndex = Math.min(activeIndex+1, opts.length-1); updateActiveOption(opts); }
  else if (e.key === "ArrowUp") { e.preventDefault(); activeIndex = Math.max(activeIndex-1, 0); updateActiveOption(opts); }
  else if (e.key === "Enter" && activeIndex >= 0) { e.preventDefault(); guessInput.value = currentOptions[activeIndex].name; autocompleteList.classList.add("hidden"); }
  else if (e.key === "Escape") { autocompleteList.classList.add("hidden"); }
});
document.addEventListener("click", e => {
  if (!e.target.closest(".autocomplete")) autocompleteList.classList.add("hidden");
});

// ---------- guess rows ----------

function arrowSvg(deg) {
  return `<svg viewBox="0 0 24 24" width="18" height="18" style="transform:rotate(${deg}deg)"><path d="M12 2 L19 21 L12 17 L5 21 Z" fill="currentColor"/></svg>`;
}

function renderGuessRow(g) {
  const row = document.createElement("div");
  row.className = "globle-row" + (g.isCorrect ? " correct" : "");
  row.innerHTML = g.isCorrect
    ? `<span class="flagle-name">${g.country.name}</span><span class="flagle-correct">Correct! 🎉</span>`
    : `<span class="flagle-name">${g.country.name}</span><span class="flagle-arrow">${arrowSvg(g.deg)}</span><span class="flagle-pct">${g.pct}% match</span>`;
  guessList.prepend(row);
}

// ---------- guess submission ----------

guessForm.addEventListener("submit", e => {
  e.preventDefault();
  if (state.gameOver) return;

  const typed = guessInput.value.trim();
  const country = COUNTRIES.find(c => c.name.toLowerCase() === typed.toLowerCase());

  if (!country) { showStatus("Not a recognized country - pick from the list", true); return; }
  if (state.guesses.some(g => g.country.code === country.code)) { showStatus("Already guessed that one", true); return; }

  showStatus("");
  guessInput.value = "";
  autocompleteList.classList.add("hidden");

  // Stop spinning on first guess
  if (state.guesses.length === 0) state.spinning = false;

  const isCorrect = country.code === state.answer.code;
  const km  = distanceKm(country, state.answer);
  const deg = bearingDeg(country, state.answer);
  const pct = isCorrect ? 100 : proximityPct(km);

  const dotColor = isCorrect ? 0x5fb87a : new THREE.Color().lerpColors(
    new THREE.Color(0x3d6be0),
    new THREE.Color(0xe8114b),
    pct / 100
  );
  addDot(country.lat, country.lng, dotColor);

  const g = { country, isCorrect, km, deg, pct };
  state.guesses.push(g);
  renderGuessRow(g);
  attemptsEl.textContent = `${state.guesses.length} ${state.guesses.length === 1 ? "guess" : "guesses"}`;

  if (isCorrect) endGame();
});

function endGame() {
  state.gameOver = true;
  playAgainBtn.classList.add("show");
  const n = state.guesses.length;
  showStatus(`Solved in ${n} ${n === 1 ? "guess" : "guesses"}! 🎉`);
}

playAgainBtn.addEventListener("click", () => {
  state.answer = COUNTRIES[Math.floor(Math.random() * COUNTRIES.length)];
  state.guesses = [];
  state.gameOver = false;
  state.spinning = true;
  // Clear all dots
  while (dotGroup.children.length) dotGroup.remove(dotGroup.children[0]);
  guessList.innerHTML = "";
  playAgainBtn.classList.remove("show");
  showStatus("");
  attemptsEl.textContent = "0 guesses";
});

// ---------- boot ----------
initGlobe();
