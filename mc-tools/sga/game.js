// ============================================================
// SGA TRAINER - flashcard-style quiz for the Standard Galactic
// Alphabet (the rune font shown around Minecraft's enchanting
// table, originally from Commander Keen). Two directions:
//   toLetter  - shown a symbol, pick the Latin letter
//   toSymbol  - shown a letter, pick the matching symbol
// Symbols are drawn as inline SVGs from SGA_GLYPHS (sga-glyphs.js),
// traced from a reference chart, so no external font is needed.
// ============================================================

const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

function svgFor(letter, extraClass) {
  const g = SGA_GLYPHS[letter];
  if (!g) return "";
  const rects = g.r.map(([x, y, w, h]) => `<rect x="${x}" y="${y}" width="${w}" height="${h}"/>`).join("");
  return `<svg class="sga-svg${extraClass ? " " + extraClass : ""}" viewBox="0 0 ${g.w} ${g.h}" fill="currentColor" shape-rendering="crispEdges" aria-hidden="true">${rects}</svg>`;
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
const feedbackEl = document.getElementById("feedback");
const statsEl = document.getElementById("stats");
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
      btn.innerHTML = state.mode === "toSymbol" ? svgFor(letter) : letter;
      btn.dataset.letter = letter;
      btn.setAttribute("aria-label", letter);
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
    promptEl.innerHTML = svgFor(state.answer);
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

function updateStats() {
  statsEl.textContent = `Score: ${state.correct}/${state.total} \u00b7 Streak: ${state.streak}`;
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
    feedbackEl.textContent = "Correct";
  } else {
    state.streak = 0;
    btn.classList.add("wrong");
    const rightBtn = document.querySelector(`.sga-answers .key[data-letter="${state.answer}"]`);
    if (rightBtn) rightBtn.classList.add("correct");
    feedbackEl.textContent = `Not quite, that was ${state.answer}`;
  }
  updateStats();

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
    cell.innerHTML = `<span class="sga-chart-glyph">${svgFor(letter)}</span><span class="sga-chart-letter">${letter}</span>`;
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
    feedbackEl.textContent = "";
    updateStats();
  });
});

revealBtn.addEventListener("click", () => {
  if (state.locked) return;
  state.locked = true;
  const rightBtn = document.querySelector(`.sga-answers .key[data-letter="${state.answer}"]`);
  if (rightBtn) rightBtn.classList.add("correct");
  feedbackEl.textContent = `That's ${state.answer}`;
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

// Keyboard shortcut: typing a letter answers directly in Symbol -> Letter
// mode, where every A-Z key already corresponds to a visible answer key.
document.addEventListener("keydown", (e) => {
  if (state.mode !== "toLetter") return;
  if (e.metaKey || e.ctrlKey || e.altKey) return;
  const letter = e.key.toUpperCase();
  if (!/^[A-Z]$/.test(letter)) return;
  const btn = document.querySelector(`.sga-answers .key[data-letter="${letter}"]`);
  if (btn) handleAnswer(letter, btn);
});

buildChart();
buildKeyboard();
nextQuestion();
updateStats();
