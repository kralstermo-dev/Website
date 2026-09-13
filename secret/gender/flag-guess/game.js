// ============================================================
// FLAG GUESS - guess the pride/identity flag.
// Flags are rendered as CSS color stripes instead of images, so
// there's nothing to download and any flag can be added just by
// adding a color array to pride-flags-data.js. Unlike the main
// site's Flagle, the flag is shown at full size right away (these
// flags are mostly simple stripes, so zooming in on a crop just
// shows a solid color rather than a useful clue) - guessing is
// about matching the colors and their meaning, not deduction from
// a partial image. Wrong guesses get a "shared colors" hint.
// ============================================================

const MAX_GUESSES = 6;

function getTodaysFlag() {
  const start = new Date(2024, 0, 1);
  const today = new Date();
  const dayIndex = Math.floor((today - start) / (1000 * 60 * 60 * 24)) + 11; // offset so it doesn't sync with other games
  return PRIDE_FLAGS[dayIndex % PRIDE_FLAGS.length];
}

function sharedColorCount(a, b) {
  const setA = new Set(a.colors.map(c => c.toLowerCase()));
  let count = 0;
  new Set(b.colors.map(c => c.toLowerCase())).forEach(c => { if (setA.has(c)) count++; });
  return count;
}

function renderFlagDiv(flag) {
  return `<div class="pride-flag-render">${flag.colors.map(c => `<span style="background:${c}"></span>`).join("")}</div>`;
}

const state = {
  answer: getTodaysFlag(),
  guesses: [],
  gameOver: false,
};

const flagViewport = document.getElementById("flag-viewport");
const guessInput = document.getElementById("guess-input");
const guessForm = document.getElementById("guess-form");
const guessList = document.getElementById("guess-list");
const statusEl = document.getElementById("status");
const attemptsEl = document.getElementById("attempts-left");
const playAgainBtn = document.getElementById("play-again");
const winBadgeEl = document.getElementById("win-badge");
const autocompleteList = document.getElementById("autocomplete-list");

function showStatus(msg, isError = false) {
  statusEl.textContent = msg;
  statusEl.classList.toggle("error", isError);
}

function showFlagFullSize() {
  flagViewport.style.setProperty("--zoom", 1);
  flagViewport.style.setProperty("--ox", "50%");
  flagViewport.style.setProperty("--oy", "50%");
}

function setup() {
  flagViewport.innerHTML = renderFlagDiv(state.answer);
  showFlagFullSize();
  attemptsEl.textContent = `${MAX_GUESSES - state.guesses.length} guesses left`;
  buildAutocomplete();
}

function resetRound() {
  state.answer = PRIDE_FLAGS[Math.floor(Math.random() * PRIDE_FLAGS.length)];
  state.guesses = [];
  state.gameOver = false;
  guessInput.disabled = false;
  guessInput.value = "";
  guessList.innerHTML = "";
  playAgainBtn.classList.remove("show");
  winBadgeEl.classList.add("hidden");
  showStatus("");
  setup();
}
playAgainBtn.addEventListener("click", resetRound);

function renderGuess(flag, isCorrect) {
  const row = document.createElement("div");
  row.className = "flagle-row";

  if (isCorrect) {
    row.innerHTML = `
      <div class="flag-thumb-mini">${renderFlagDiv(flag)}</div>
      <span class="flagle-name">${flag.name}</span>
      <span class="flagle-correct">Correct! \u{1F389}</span>
    `;
    guessList.prepend(row);
    return;
  }

  const shared = sharedColorCount(flag, state.answer);
  const hint = shared === 0 ? "No shared colors" : `${shared} shared color${shared === 1 ? "" : "s"}`;
  row.innerHTML = `
    <div class="flag-thumb-mini">${renderFlagDiv(flag)}</div>
    <span class="flagle-name">${flag.name}</span>
    <span class="flag-hint">${hint}</span>
  `;
  guessList.prepend(row);
}

function endGame(won) {
  state.gameOver = true;
  guessInput.disabled = true;
  playAgainBtn.classList.add("show");
  if (won) {
    winBadgeEl.classList.remove("hidden");
  } else {
    showStatus(`The flag was the ${state.answer.name}`);
  }
}

guessForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (state.gameOver) return;

  const typed = guessInput.value.trim();
  const flag = PRIDE_FLAGS.find(f => f.name.toLowerCase() === typed.toLowerCase());

  if (!flag) {
    showStatus("Not a recognized flag name - pick from the suggestions", true);
    return;
  }
  if (state.guesses.some(g => g.id === flag.id)) {
    showStatus("Already guessed that one", true);
    return;
  }

  showStatus("");
  state.guesses.push(flag);
  guessInput.value = "";
  autocompleteList.classList.add("hidden");

  const isCorrect = flag.id === state.answer.id;
  renderGuess(flag, isCorrect);

  if (isCorrect) { endGame(true); return; }

  attemptsEl.textContent = `${MAX_GUESSES - state.guesses.length} guesses left`;

  if (state.guesses.length >= MAX_GUESSES) endGame(false);
});

// ---------- autocomplete (mirrors Flagle's, simplified) ----------

let currentOptions = [];
let activeIndex = -1;

function buildAutocomplete() {
  renderAutocompleteOptions("");
}

function renderAutocompleteOptions(query) {
  const q = query.trim().toLowerCase();
  currentOptions = q ? PRIDE_FLAGS.filter(f => f.name.toLowerCase().includes(q)) : [];
  activeIndex = -1;

  if (currentOptions.length === 0) {
    autocompleteList.classList.add("hidden");
    autocompleteList.innerHTML = "";
    return;
  }

  autocompleteList.innerHTML = currentOptions.map((f, i) => `
    <div class="autocomplete-option" data-index="${i}">
      <span class="flag-thumb-mini" style="margin-right:8px;">${renderFlagDiv(f)}</span>
      <span>${f.name}</span>
    </div>
  `).join("");
  autocompleteList.classList.remove("hidden");

  autocompleteList.querySelectorAll(".autocomplete-option").forEach(opt => {
    opt.addEventListener("mousedown", (e) => {
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

guessInput.addEventListener("keydown", (e) => {
  if (autocompleteList.classList.contains("hidden")) return;
  const opts = autocompleteList.querySelectorAll(".autocomplete-option");
  if (e.key === "ArrowDown") { e.preventDefault(); activeIndex = Math.min(activeIndex + 1, opts.length - 1); updateActiveOption(opts); }
  else if (e.key === "ArrowUp") { e.preventDefault(); activeIndex = Math.max(activeIndex - 1, 0); updateActiveOption(opts); }
  else if (e.key === "Enter" && activeIndex >= 0) { e.preventDefault(); guessInput.value = currentOptions[activeIndex].name; autocompleteList.classList.add("hidden"); }
  else if (e.key === "Escape") { autocompleteList.classList.add("hidden"); }
});

document.addEventListener("click", (e) => {
  if (!e.target.closest(".autocomplete")) autocompleteList.classList.add("hidden");
});

try {
  setup();
} catch (err) {
  console.error("Flag Guess setup failed:", err);
  showStatus("Something went wrong loading today's flag - try refreshing.", true);
}
