// ============================================================
// GLOBLE - 3D globe with country highlighting
// Features:
// - Slow auto-spin until first guess, then stops
// - Camera smoothly pans to each guessed country
// - Shows distance in km or miles (settings toggle)
// - Detects and announces when a guess borders the answer
// - Highlights the guessed country's polygon on the globe
// ============================================================

// ---------- settings ----------

const SETTINGS_KEY = "globle-settings";
function loadSettings() {
  try { return JSON.parse(localStorage.getItem(SETTINGS_KEY)) || {}; }
  catch { return {}; }
}
function saveSettings(s) { localStorage.setItem(SETTINGS_KEY, JSON.stringify(s)); }

let settings = { units: "km", ...loadSettings() };

// ---------- geo math ----------

function dayIndex(offset) {
  const start = new Date(2024, 0, 1);
  const today  = new Date();
  return Math.floor((today - start) / (1000 * 60 * 60 * 24)) + offset;
}

function getTodaysCountry() {
  return COUNTRIES[dayIndex(603) % COUNTRIES.length];
}

function toRad(d) { return d * Math.PI / 180; }
function toDeg(r) { return r * 180 / Math.PI; }

function distanceKm(a, b) {
  const R = 6371;
  const dLat = toRad(b.lat - a.lat), dLng = toRad(b.lng - a.lng);
  const h = Math.sin(dLat/2)**2 + Math.cos(toRad(a.lat))*Math.cos(toRad(b.lat))*Math.sin(dLng/2)**2;
  return Math.round(R * 2 * Math.atan2(Math.sqrt(h), Math.sqrt(1-h)));
}

function formatDist(km) {
  if (settings.units === "miles") return `${Math.round(km * 0.621371).toLocaleString()} mi`;
  return `${km.toLocaleString()} km`;
}

function bearingDeg(a, b) {
  const lat1 = toRad(a.lat), lat2 = toRad(b.lat), dLng = toRad(b.lng - a.lng);
  const y = Math.sin(dLng)*Math.cos(lat2);
  const x = Math.cos(lat1)*Math.sin(lat2) - Math.sin(lat1)*Math.cos(lat2)*Math.cos(dLng);
  return (toDeg(Math.atan2(y, x)) + 360) % 360;
}

function isBordering(nameA, nameB) {
  const neighbors = BORDERS[nameA] || [];
  return neighbors.includes(nameB);
}

// Convert lat/lng to a 3D position on the sphere (Three.js Y-up convention)
function latLngTo3D(lat, lng, r) {
  const phi   = toRad(90 - lat);
  const theta = toRad(lng + 180);
  return new THREE.Vector3(
    -(r * Math.sin(phi) * Math.cos(theta)),
     (r * Math.cos(phi)),
     (r * Math.sin(phi) * Math.sin(theta))
  );
}

// Build a THREE.js quaternion that rotates the globe so that lat/lng
// faces the camera (i.e., is centered on screen).
function quaternionForLatLng(lat, lng) {
  const phi   = toRad(90 - lat);
  const theta = toRad(lng + 180);
  // Target: the point on sphere faces -Z (toward camera at +Z)
  const q1 = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0,1,0), Math.PI - toRad(lng+180));
  const q2 = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(1,0,0), toRad(lat));
  return q1.multiply(q2);
}

// ---------- state ----------

const state = {
  answer: getTodaysCountry(),
  guesses: [],
  gameOver: false,
  spinning: true,
  panTarget: null,    // quaternion to animate toward
  panProgress: 0,
  panFrom: null,
};

// ---------- DOM ----------

const canvasContainer  = document.getElementById("globle-map");
const attemptsEl       = document.getElementById("attempts-left");
const statusEl         = document.getElementById("status");
const guessForm        = document.getElementById("guess-form");
const guessInput       = document.getElementById("guess-input");
const autocompleteList = document.getElementById("autocomplete-list");
const guessList        = document.getElementById("guess-list");
const playAgainBtn     = document.getElementById("play-again");
const settingsBtn      = document.getElementById("settings-btn");
const settingsPanel    = document.getElementById("settings-panel");
const unitsSelect      = document.getElementById("units-select");

unitsSelect.value = settings.units;
unitsSelect.addEventListener("change", () => {
  settings.units = unitsSelect.value;
  saveSettings(settings);
  // Rerender existing rows with the new unit
  rebuildGuessList();
});

settingsBtn.addEventListener("click", () => {
  settingsPanel.classList.toggle("hidden");
});

function showStatus(msg, isError = false) {
  statusEl.textContent = msg;
  statusEl.classList.toggle("error", isError);
}

// ---------- Three.js scene ----------

const GLOBE_R = 1;
const DOT_R   = 0.032;

let renderer, scene, camera, globe, dotGroup, highlightGroup;
let isDragging = false, prevMouse = { x: 0, y: 0 };
let rotVel = { x: 0, y: 0 };

function heatColorHex(pct) {
  const cold = new THREE.Color(0x3d6be0);
  const hot  = new THREE.Color(0xe8114b);
  return cold.clone().lerp(hot, Math.max(0, Math.min(1, pct / 100)));
}

function initGlobe() {
  const W = canvasContainer.clientWidth;
  const H = canvasContainer.clientHeight;

  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(W, H);
  canvasContainer.appendChild(renderer.domElement);

  scene  = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(45, W/H, 0.1, 100);
  camera.position.z = 2.8;

  scene.add(new THREE.AmbientLight(0xffffff, 0.6));
  const dir = new THREE.DirectionalLight(0xffffff, 0.8);
  dir.position.set(5, 3, 5);
  scene.add(dir);

  // Globe
  const geo = new THREE.SphereGeometry(GLOBE_R, 64, 64);
  const loader = new THREE.TextureLoader();
  const tex = loader.load(
    "https://raw.githubusercontent.com/turban/webgl-earth/master/images/2_no_clouds_4k.jpg",
    undefined, undefined,
    () => { globe.material.color.set(0x1a3a6e); }
  );
  globe = new THREE.Mesh(geo, new THREE.MeshPhongMaterial({ map: tex, specular: 0x222222 }));
  scene.add(globe);

  // Atmosphere
  const atmoGeo = new THREE.SphereGeometry(GLOBE_R * 1.015, 32, 32);
  scene.add(new THREE.Mesh(atmoGeo, new THREE.MeshPhongMaterial({
    color: 0x4488ff, transparent: true, opacity: 0.08,
  })));

  // Groups parented to globe so they rotate with it
  dotGroup       = new THREE.Group();
  highlightGroup = new THREE.Group();
  globe.add(dotGroup);
  globe.add(highlightGroup);

  // Drag events
  renderer.domElement.addEventListener("mousedown",  onDragStart);
  renderer.domElement.addEventListener("mousemove",  onDragMove);
  renderer.domElement.addEventListener("mouseup",    onDragEnd);
  renderer.domElement.addEventListener("mouseleave", onDragEnd);
  renderer.domElement.addEventListener("touchstart", e => onDragStart(e.touches[0]), { passive: true });
  renderer.domElement.addEventListener("touchmove",  e => { e.preventDefault(); onDragMove(e.touches[0]); }, { passive: false });
  renderer.domElement.addEventListener("touchend",   onDragEnd);

  window.addEventListener("resize", () => {
    const W2 = canvasContainer.clientWidth, H2 = canvasContainer.clientHeight;
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
  state.panTarget = null; // cancel any ongoing pan
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

function onDragEnd() { isDragging = false; }

// Smoothly slerp the globe rotation to face a target lat/lng
function panTo(lat, lng) {
  state.panFrom     = globe.quaternion.clone();
  state.panTarget   = quaternionForLatLng(lat, lng);
  state.panProgress = 0;
}

function animate() {
  requestAnimationFrame(animate);

  if (state.spinning && !isDragging && !state.panTarget) {
    // Slow auto-spin before first guess
    globe.rotation.y += 0.001;
  } else if (state.panTarget) {
    // Smooth pan to guessed country
    state.panProgress += 0.03;
    if (state.panProgress >= 1) {
      state.panProgress = 1;
      globe.quaternion.copy(state.panTarget);
      state.panTarget = null;
    } else {
      globe.quaternion.slerpQuaternions(state.panFrom, state.panTarget, state.panProgress);
    }
    rotVel = { x: 0, y: 0 };
  } else if (!isDragging) {
    // Momentum decay
    globe.rotation.y += rotVel.y;
    globe.rotation.x += rotVel.x;
    rotVel.x *= 0.92;
    rotVel.y *= 0.92;
  }

  renderer.render(scene, camera);
}

// ---------- country highlight ----------

// Draw a country's polygon outline as a line on the globe surface
function highlightCountry(name, color) {
  if (!COUNTRY_POLYS[name]) return;
  const mat = new THREE.LineBasicMaterial({ color, linewidth: 2 });
  const R = GLOBE_R + 0.002; // just above surface

  COUNTRY_POLYS[name].forEach(polygon => {
    polygon.forEach(ring => {
      const pts = ring.map(([lng, lat]) => latLngTo3D(lat, lng, R));
      const geo = new THREE.BufferGeometry().setFromPoints(pts);
      highlightGroup.add(new THREE.Line(geo, mat));
    });
  });
}

function clearHighlights() {
  while (highlightGroup.children.length) {
    const c = highlightGroup.children[0];
    c.geometry.dispose();
    highlightGroup.remove(c);
  }
}

// ---------- dots ----------

function addDot(lat, lng, color) {
  const pos = latLngTo3D(lat, lng, GLOBE_R + DOT_R * 0.5);
  const dot = new THREE.Mesh(
    new THREE.SphereGeometry(DOT_R, 10, 10),
    new THREE.MeshPhongMaterial({ color })
  );
  dot.position.copy(pos);
  dotGroup.add(dot);
}

// ---------- guess list ----------

function arrowSvg(deg) {
  return `<svg viewBox="0 0 24 24" width="18" height="18" style="transform:rotate(${deg}deg)"><path d="M12 2 L19 21 L12 17 L5 21 Z" fill="currentColor"/></svg>`;
}

function buildGuessRow(g) {
  const row = document.createElement("div");
  row.className = "globle-row" + (g.isCorrect ? " correct" : "");
  row.dataset.code = g.country.code;
  if (g.isCorrect) {
    row.innerHTML = `<span class="flagle-name">${g.country.name}</span><span class="flagle-correct">Correct! 🎉</span>`;
  } else {
    const borders = isBordering(g.country.name, state.answer.name);
    const badge = borders ? `<span class="globle-borders">Borders!</span>` : "";
    row.innerHTML = `
      <span class="flagle-name">${g.country.name}</span>
      <span class="flagle-arrow">${arrowSvg(g.deg)}</span>
      <span class="globle-dist">${formatDist(g.km)}</span>
      ${badge}
    `;
  }
  return row;
}

function rebuildGuessList() {
  guessList.innerHTML = "";
  // Guesses are prepended so newest is at top - rebuild in reverse
  [...state.guesses].reverse().forEach(g => {
    guessList.appendChild(buildGuessRow(g));
  });
}

// ---------- autocomplete ----------

let currentOptions = [], activeIndex = -1;

function renderAutocompleteOptions(query) {
  const q = query.trim().toLowerCase();
  currentOptions = q ? COUNTRIES.filter(c => c.name.toLowerCase().includes(q)) : COUNTRIES.slice();
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

function updateActive(opts) {
  opts.forEach((o, i) => o.classList.toggle("active", i === activeIndex));
  if (opts[activeIndex]) opts[activeIndex].scrollIntoView({ block: "nearest" });
}

guessInput.addEventListener("input",  () => renderAutocompleteOptions(guessInput.value));
guessInput.addEventListener("focus",  () => renderAutocompleteOptions(guessInput.value));
guessInput.addEventListener("keydown", e => {
  if (autocompleteList.classList.contains("hidden")) return;
  const opts = autocompleteList.querySelectorAll(".autocomplete-option");
  if (e.key === "ArrowDown") { e.preventDefault(); activeIndex = Math.min(activeIndex+1, opts.length-1); updateActive(opts); }
  else if (e.key === "ArrowUp")  { e.preventDefault(); activeIndex = Math.max(activeIndex-1, 0); updateActive(opts); }
  else if (e.key === "Enter" && activeIndex >= 0) { e.preventDefault(); guessInput.value = currentOptions[activeIndex].name; autocompleteList.classList.add("hidden"); }
  else if (e.key === "Escape") autocompleteList.classList.add("hidden");
});
document.addEventListener("click", e => {
  if (!e.target.closest(".autocomplete")) autocompleteList.classList.add("hidden");
});

// ---------- guess submission ----------

guessForm.addEventListener("submit", e => {
  e.preventDefault();
  if (state.gameOver) return;

  const typed   = guessInput.value.trim();
  const country = COUNTRIES.find(c => c.name.toLowerCase() === typed.toLowerCase());
  if (!country) { showStatus("Not a recognized country - pick from the list", true); return; }
  if (state.guesses.some(g => g.country.code === country.code)) { showStatus("Already guessed that one", true); return; }

  showStatus("");
  guessInput.value = "";
  autocompleteList.classList.add("hidden");

  if (state.guesses.length === 0) state.spinning = false; // stop auto-spin

  const isCorrect = country.code === state.answer.code;
  const km  = distanceKm(country, state.answer);
  const deg = bearingDeg(country, state.answer);
  const pct = isCorrect ? 100 : Math.max(0, Math.round(100 - (km / 20015) * 100));

  const dotColor = isCorrect
    ? 0x5fb87a
    : new THREE.Color().lerpColors(new THREE.Color(0x3d6be0), new THREE.Color(0xe8114b), pct/100);

  addDot(country.lat, country.lng, dotColor);

  // Highlight the country border, then pan to it
  clearHighlights();
  const borderColor = isCorrect ? 0x5fb87a : dotColor.getHex ? dotColor.getHex() : dotColor;
  highlightCountry(country.name, borderColor);
  panTo(country.lat, country.lng);

  const g = { country, isCorrect, km, deg, pct };
  state.guesses.push(g);
  rebuildGuessList();
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
  state.answer   = COUNTRIES[Math.floor(Math.random() * COUNTRIES.length)];
  state.guesses  = [];
  state.gameOver = false;
  state.spinning = true;
  state.panTarget = null;
  while (dotGroup.children.length) {
    const c = dotGroup.children[0]; c.geometry.dispose(); dotGroup.remove(c);
  }
  clearHighlights();
  guessList.innerHTML = "";
  playAgainBtn.classList.remove("show");
  showStatus("");
  attemptsEl.textContent = "0 guesses";
});

// ---------- boot ----------
initGlobe();
