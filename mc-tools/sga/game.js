// ============================================================
// SGA TRAINER - flashcard-style quiz for the Standard Galactic
// Alphabet (the rune font shown around Minecraft's enchanting
// table, originally from Commander Keen). Two directions:
//   toLetter  - shown a symbol, pick the Latin letter
//   toSymbol  - shown a letter, pick the matching symbol
// Symbols are rendered with the real SGA-Regular font (CC0),
// mapped to the ConScript Unicode Registry's private-use block
// starting at U+EB40 for A.
// ============================================================

const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const SGA_BASE = 0xEB40;

function sgaChar(letter) {
  return String.fromCodePoint(SGA_BASE + ALPHABET.indexOf(letter));
}

// QWERTY layout so the answer grid always sits in the same shape
// as the other games' keyboards, whichever direction we're quizzing.
const KEY_ROWS = [
  ["Q","W","E","R","T","Y","U","I","O","P"],
  ["A","S","D","F","G","H","J","K","L"],
  ["Z","X","C","V","B","N","M"],
];

const state = {
  mode: "toLetter",
  answer: "",
  locked: false,
  correct: 0,
  total: 0,
  streak: 0,
};

const promptEl = document.getElementById("prompt");
const statusEl = document.getElementById("status");
const keyboardEl = document.getElementById("keyboard");
const revealBtn = document.getElementById("reveal-btn");
const chartToggle = document.getElementById("chart-toggle");
const chartPanel = document.getElementById("chart-panel");
const chartEl = document.getElementById("sga-chart");

function buildKeyboard() {
  keyboardEl.innerHTML = "";
  KEY_ROWS.forEach(row => {
    const rowEl = document.createElement("div");
    rowEl.className = "key-row";
    row.forEach(letter => {
      const btn = document.createElement("button");
      btn.className = "key" + (state.mode === "toSymbol" ? " sga-key" : "");
      btn.textContent = state.mode === "toSymbol" ? sgaChar(letter) : letter;
      btn.dataset.letter = letter;
      btn.addEventListener("click", () => handleAnswer(letter, btn));
      rowEl.appendChild(btn);
    });
    keyboardEl.appendChild(rowEl);
  });
}

function renderPrompt() {
  promptEl.classList.remove("correct", "wrong");
  if (state.mode === "toLetter") {
    promptEl.className = "sga-prompt sga-glyph";
    promptEl.textContent = sgaChar(state.answer);
  } else {
    promptEl.className = "sga-prompt sga-letter";
    promptEl.textContent = state.answer;
  }
}

function nextQuestion() {
  let pick = state.answer;
  while (pick === state.answer) {
    pick = ALPHABET[Math.floor(Math.random() * ALPHABET.length)];
  }
  state.answer = pick;
  renderPrompt();
  document.querySelectorAll(".sga-answers .key").forEach(k => {
    k.classList.remove("correct", "wrong");
  });
}

function updateStatus(msg) {
  const base = `Score: ${state.correct}/${state.total} &middot; Streak: ${state.streak}`;
  statusEl.innerHTML = msg ? `${msg} &mdash; ${base}` : base;
}

function handleAnswer(letter, btn) {
  if (state.locked) return;
  state.locked = true;

  const isCorrect = letter === state.answer;
  state.total++;
  if (isCorrect) {
    state.correct++;
    state.streak++;
    btn.classList.add("correct");
    updateStatus("Correct! ✅");
  } else {
    state.streak = 0;
    btn.classList.add("wrong");
    const rightBtn = document.querySelector(`.sga-answers .key[data-letter="${state.answer}"]`);
    if (rightBtn) rightBtn.classList.add("correct");
    updateStatus(`Not quite, that was ${state.answer}`);
  }

  setTimeout(() => {
    nextQuestion();
    state.locked = false;
  }, 900);
}

function buildChart() {
  chartEl.innerHTML = "";
  ALPHABET.forEach(letter => {
    const cell = document.createElement("div");
    cell.className = "sga-chart-cell";
    cell.innerHTML = `<span class="sga-chart-glyph">${sgaChar(letter)}</span><span class="sga-chart-letter">${letter}</span>`;
    chartEl.appendChild(cell);
  });
}

document.querySelectorAll(".mode-btn[data-mode]").forEach(btn => {
  btn.addEventListener("click", () => {
    if (btn.dataset.mode === state.mode) return;
    document.querySelectorAll(".mode-btn[data-mode]").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    state.mode = btn.dataset.mode;
    state.correct = 0;
    state.total = 0;
    state.streak = 0;
    state.answer = "";
    buildKeyboard();
    nextQuestion();
    updateStatus("");
  });
});

revealBtn.addEventListener("click", () => {
  if (state.locked) return;
  state.locked = true;
  const rightBtn = document.querySelector(`.sga-answers .key[data-letter="${state.answer}"]`);
  if (rightBtn) rightBtn.classList.add("correct");
  updateStatus(`That's ${state.answer}`);
  setTimeout(() => {
    nextQuestion();
    state.locked = false;
  }, 1100);
});

chartToggle.addEventListener("click", () => {
  const showing = !chartPanel.classList.contains("hidden");
  chartPanel.classList.toggle("hidden");
  chartToggle.textContent = showing ? "Show the full A-Z key" : "Hide the A-Z key";
});

buildChart();
buildKeyboard();
nextQuestion();
updateStatus("");
