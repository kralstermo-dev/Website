// ============================================================
// GLOBLE - guess the country. Every guess plots on a simple lat/lng
// map, colored by how close it is to the answer (blue = far,
// red/gold = close), so the heat pattern builds up around the real
// location as you narrow in. No guess cap - keep going until you find it.
//
// Note: this uses a plain lat/lng grid, not an actual world map with
// country borders (no map dataset bundled here) - countries are plotted
// as dots at their approximate center, reusing the same coordinates
// Flagle already has in ../flagle/countries.js.
// ============================================================

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
  const lat1 = toRad(a.lat);
  const lat2 = toRad(b.lat);
  const h = Math.sin(dLat / 2) ** 2 + Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLng / 2) ** 2;
  return Math.round(R * 2 * Math.atan2(Math.sqrt(h), Math.sqrt(1 - h)));
}

function bearingDeg(a, b) {
  const lat1 = toRad(a.lat), lat2 = toRad(b.lat);
  const dLng = toRad(b.lng - a.lng);
  const y = Math.sin(dLng) * Math.cos(lat2);
  const x = Math.cos(lat1) * Math.sin(lat2) - Math.sin(lat1) * Math.cos(lat2) * Math.cos(dLng);
  return (toDeg(Math.atan2(y, x)) + 360) % 360;
}

function proximityPct(km) {
  const HALF_EARTH = 20015; // km, half the circumference - max possible distance
  return Math.max(0, Math.round(100 - (km / HALF_EARTH) * 100));
}

function lerp(a, b, t) { return Math.round(a + (b - a) * t); }
function heatColor(pct) {
  const cold = { r: 61, g: 107, b: 224 };  // blue - far
  const hot = { r: 232, g: 17, b: 75 };    // crimson - close
  const t = Math.max(0, Math.min(1, pct / 100));
  return `rgb(${lerp(cold.r, hot.r, t)},${lerp(cold.g, hot.g, t)},${lerp(cold.b, hot.b, t)})`;
}

const MAP_W = 720, MAP_H = 360;
function project(lat, lng) {
  return {
    x: (lng + 180) / 360 * MAP_W,
    y: (90 - lat) / 180 * MAP_H,
  };
}

function arrowSvg(deg) {
  return `<svg viewBox="0 0 24 24" width="18" height="18" style="transform:rotate(${deg}deg)">
    <path d="M12 2 L19 21 L12 17 L5 21 Z" fill="currentColor"/>
  </svg>`;
}

const state = {
  answer: getTodaysCountry(),
  guesses: [],
  gameOver: false,
};

const mapEl = document.getElementById("globle-map");
const attemptsEl = document.getElementById("attempts-left");
const statusEl = document.getElementById("status");
const guessForm = document.getElementById("guess-form");
const guessInput = document.getElementById("guess-input");
const autocompleteList = document.getElementById("autocomplete-list");
const guessList = document.getElementById("guess-list");
const playAgainBtn = document.getElementById("play-again");

function showStatus(msg, isError = false) {
  statusEl.textContent = msg;
  statusEl.classList.toggle("error", isError);
}

// ---------- map rendering ----------

function renderMap() {
  const gridLines = [];
  for (let lng = -180; lng <= 180; lng += 30) {
    const x = project(0, lng).x;
    gridLines.push(`<line x1="${x}" y1="0" x2="${x}" y2="${MAP_H}" stroke="var(--line)" stroke-width="1" />`);
  }
  for (let lat = -90; lat <= 90; lat += 30) {
    const y = project(lat, 0).y;
    gridLines.push(`<line x1="0" y1="${y}" x2="${MAP_W}" y2="${y}" stroke="var(--line)" stroke-width="1" />`);
  }

  const dots = state.guesses.map(g => {
    const p = project(g.country.lat, g.country.lng);
    const color = g.isCorrect ? "var(--correct)" : heatColor(g.pct);
    return `
      <circle cx="${p.x.toFixed(1)}" cy="${p.y.toFixed(1)}" r="7" fill="${color}" stroke="#14171c" stroke-width="1.5" opacity="0.9">
        <title>${g.country.name}</title>
      </circle>
    `;
  }).join("");

  mapEl.innerHTML = `
    <svg viewBox="0 0 ${MAP_W} ${MAP_H}" width="100%" height="100%">
      <rect x="0" y="0" width="${MAP_W}" height="${MAP_H}" fill="var(--bg-panel)" />
      ${gridLines.join("")}
      ${dots}
    </svg>
  `;
}
renderMap();
attemptsEl.textContent = `${state.guesses.length} guesses`;

// ---------- autocomplete (reused pattern from Flagle, text-only) ----------

let currentOptions = [];
let activeIndex = -1;

function renderAutocompleteOptions(query) {
  const q = query.trim().toLowerCase();
  currentOptions = q
    ? COUNTRIES.filter(c => c.name.toLowerCase().includes(q))
    : COUNTRIES.slice();

  activeIndex = -1;

  if (currentOptions.length === 0) {
    autocompleteList.classList.add("hidden");
    autocompleteList.innerHTML = "";
    return;
  }

  autocompleteList.innerHTML = currentOptions.map((c, i) =>
    `<div class="autocomplete-option" data-index="${i}"><span>${c.name}</span></div>`
  ).join("");
  autocompleteList.classList.remove("hidden");

  autocompleteList.querySelectorAll(".autocomplete-option").forEach(opt => {
    opt.addEventListener("mousedown", (e) => {
      e.preventDefault();
      const country = currentOptions[Number(opt.dataset.index)];
      guessInput.value = country.name;
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

guessInput.addEventListener("keydown", (e) => {
  if (autocompleteList.classList.contains("hidden")) return;
  const opts = autocompleteList.querySelectorAll(".autocomplete-option");
  if (e.key === "ArrowDown") {
    e.preventDefault();
    activeIndex = Math.min(activeIndex + 1, opts.length - 1);
    updateActiveOption(opts);
  } else if (e.key === "ArrowUp") {
    e.preventDefault();
    activeIndex = Math.max(activeIndex - 1, 0);
    updateActiveOption(opts);
  } else if (e.key === "Enter" && activeIndex >= 0) {
    e.preventDefault();
    guessInput.value = currentOptions[activeIndex].name;
    autocompleteList.classList.add("hidden");
  } else if (e.key === "Escape") {
    autocompleteList.classList.add("hidden");
  }
});

document.addEventListener("click", (e) => {
  if (!e.target.closest(".autocomplete")) {
    autocompleteList.classList.add("hidden");
  }
});

// ---------- guess rows ----------

function renderGuessRow(g) {
  const row = document.createElement("div");
  row.className = "globle-row" + (g.isCorrect ? " correct" : "");
  if (g.isCorrect) {
    row.innerHTML = `
      <span class="flagle-name">${g.country.name}</span>
      <span class="flagle-correct">Correct! 🎉</span>
    `;
  } else {
    row.innerHTML = `
      <span class="flagle-name">${g.country.name}</span>
      <span class="flagle-arrow" title="direction">${arrowSvg(g.deg)}</span>
      <span class="flagle-pct" style="--pct:${g.pct}%">${g.pct}% match</span>
    `;
  }
  guessList.prepend(row);
}

// ---------- guess submission ----------

guessForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (state.gameOver) return;

  const typed = guessInput.value.trim();
  const country = COUNTRIES.find(c => c.name.toLowerCase() === typed.toLowerCase());

  if (!country) {
    showStatus("Not a recognized country name - pick from the suggestions", true);
    return;
  }
  if (state.guesses.some(g => g.country.code === country.code)) {
    showStatus("Already guessed that one", true);
    return;
  }

  showStatus("");
  guessInput.value = "";
  autocompleteList.classList.add("hidden");

  const isCorrect = country.code === state.answer.code;
  const km = distanceKm(country, state.answer);
  const deg = bearingDeg(country, state.answer);
  const pct = isCorrect ? 100 : proximityPct(km);

  const g = { country, isCorrect, km, deg, pct };
  state.guesses.push(g);
  renderGuessRow(g);
  renderMap();
  attemptsEl.textContent = `${state.guesses.length} guesses`;

  if (isCorrect) {
    endGame();
  }
});

function endGame() {
  state.gameOver = true;
  playAgainBtn.classList.add("show");
  const guessWord = state.guesses.length === 1 ? "guess" : "guesses";
  showStatus(`Solved in ${state.guesses.length} ${guessWord}! 🎉`);
}

playAgainBtn.addEventListener("click", () => {
  state.answer = COUNTRIES[Math.floor(Math.random() * COUNTRIES.length)];
  state.guesses = [];
  state.gameOver = false;
  guessList.innerHTML = "";
  playAgainBtn.classList.remove("show");
  showStatus("");
  attemptsEl.textContent = "0 guesses";
  renderMap();
});
