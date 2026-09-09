// ============================================================
// MORSE CODE TRAINER - flashcard-style quiz for International
// Morse Code. Two directions:
//   toMorse   - shown a letter, tap out the dot/dash pattern
//   toLetter  - shown (and hearable) a pattern, pick the letter
// Patterns are drawn as little dot/dash shapes (see symbolHTML)
// so they read clearly at any size, and can be played as real
// beeps via the Web Audio API.
// ============================================================

const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

const KEY_ROWS = [
  ["Q","W","E","R","T","Y","U","I","O","P"],
  ["A","S","D","F","G","H","J","K","L"],
  ["Z","X","C","V","B","N","M"],
];

const state = {
  mode: "toMorse",
  answer: "",
  built: "",
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
const playBtn = document.getElementById("play-btn");
const buildArea = document.getElementById("build-area");
const buildDisplay = document.getElementById("build-display");
const dotBtn = document.getElementById("dot-btn");
const dashBtn = document.getElementById("dash-btn");
const backBtn = document.getElementById("back-btn");
const clearBtn = document.getElementById("clear-btn");
const chartToggle = document.getElementById("chart-toggle");
const chartPanel = document.getElementById("chart-panel");
const chartEl = document.getElementById("morse-chart");

// ---------- rendering helpers ----------

function symbolHTML(sym) {
  return `<span class="morse-symbol ${sym === "." ? "dot" : "dash"}"></span>`;
}

function codeHTML(code) {
  return code.split("").map(symbolHTML).join("");
}

function buildDisplayHTML(target, built) {
  let html = "";
  for (let i = 0; i < target.length; i++) {
    html += i < built.length ? symbolHTML(built[i]) : `<span class="morse-symbol slot"></span>`;
  }
  return html;
}

// ---------- audio ----------

let audioCtx = null;
function ensureAudio() {
  if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  return audioCtx;
}

function beep(ctx, startTime, duration) {
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.frequency.value = 600;
  osc.type = "sine";
  gain.gain.setValueAtTime(0, startTime);
  gain.gain.linearRampToValueAtTime(0.3, startTime + 0.008);
  gain.gain.setValueAtTime(0.3, Math.max(startTime + 0.008, startTime + duration - 0.008));
  gain.gain.linearRampToValueAtTime(0, startTime + duration);
  osc.connect(gain).connect(ctx.destination);
  osc.start(startTime);
  osc.stop(startTime + duration + 0.02);
}

function playCode(code) {
  const ctx = ensureAudio();
  const unit = 0.09;
  let t = ctx.currentTime + 0.05;
  code.split("").forEach(sym => {
    const dur = sym === "-" ? unit * 3 : unit;
    beep(ctx, t, dur);
    t += dur + unit;
  });
}

// ---------- keyboard (toLetter mode) ----------

function buildKeyboard() {
  keyboardEl.innerHTML = "";
  KEY_ROWS.forEach(row => {
    const rowEl = document.createElement("div");
    rowEl.className = "key-row";
    row.forEach(letter => {
      const btn = document.createElement("button");
      btn.className = "key";
      btn.textContent = letter;
      btn.dataset.letter = letter;
      btn.addEventListener("click", () => handleLetterAnswer(letter, btn));
      rowEl.appendChild(btn);
    });
    keyboardEl.appendChild(rowEl);
  });
}

// ---------- question flow ----------

function nextQuestion() {
  let pick = state.answer;
  while (pick === state.answer) {
    pick = ALPHABET[Math.floor(Math.random() * ALPHABET.length)];
  }
  state.answer = pick;
  state.built = "";
  renderPrompt();
  document.querySelectorAll(".morse-answers .key").forEach(k => k.classList.remove("correct", "wrong"));
}

function renderPrompt() {
  promptEl.classList.remove("correct", "wrong");
  if (state.mode === "toMorse") {
    promptEl.className = "morse-prompt morse-prompt-letter";
    promptEl.textContent = state.answer;
    buildDisplay.innerHTML = buildDisplayHTML(MORSE[state.answer], state.built);
  } else {
    promptEl.className = "morse-prompt morse-prompt-code";
    promptEl.innerHTML = codeHTML(MORSE[state.answer]);
  }
}

function updateStats() {
  statsEl.textContent = `Score: ${state.correct}/${state.total} \u00b7 Streak: ${state.streak}`;
}

function registerResult(isCorrect) {
  state.total++;
  if (isCorrect) {
    state.correct++;
    state.streak++;
  } else {
    state.streak = 0;
  }
  updateStats();
}

// ---------- toLetter mode ----------

function handleLetterAnswer(letter, btn) {
  if (state.locked) return;
  state.locked = true;

  const isCorrect = letter === state.answer;
  if (isCorrect) {
    btn.classList.add("correct");
    feedbackEl.textContent = "Correct";
  } else {
    btn.classList.add("wrong");
    const rightBtn = document.querySelector(`.morse-answers .key[data-letter="${state.answer}"]`);
    if (rightBtn) rightBtn.classList.add("correct");
    feedbackEl.textContent = `Not quite, that was ${state.answer}`;
  }
  registerResult(isCorrect);

  setTimeout(() => {
    nextQuestion();
    state.locked = false;
  }, 900);
}

// ---------- toMorse mode ----------

function addSymbol(sym) {
  if (state.locked) return;
  const target = MORSE[state.answer];
  if (state.built.length >= target.length) return;
  state.built += sym;
  buildDisplay.innerHTML = buildDisplayHTML(target, state.built);
  if (state.built.length === target.length) {
    submitMorse();
  }
}

function removeSymbol() {
  if (state.locked || !state.built.length) return;
  state.built = state.built.slice(0, -1);
  buildDisplay.innerHTML = buildDisplayHTML(MORSE[state.answer], state.built);
}

function clearBuild() {
  if (state.locked) return;
  state.built = "";
  buildDisplay.innerHTML = buildDisplayHTML(MORSE[state.answer], state.built);
}

function submitMorse() {
  if (state.locked) return;
  state.locked = true;
  const target = MORSE[state.answer];
  const isCorrect = state.built === target;

  if (isCorrect) {
    buildDisplay.classList.add("correct");
    feedbackEl.textContent = "Correct";
  } else {
    buildDisplay.classList.add("wrong");
    feedbackEl.textContent = `Not quite, ${state.answer} is ${target}`;
  }
  registerResult(isCorrect);

  setTimeout(() => {
    buildDisplay.classList.remove("correct", "wrong");
    nextQuestion();
    state.locked = false;
  }, 1100);
}

// ---------- reveal / play ----------

revealBtn.addEventListener("click", () => {
  if (state.locked) return;
  state.locked = true;
  const target = MORSE[state.answer];
  if (state.mode === "toMorse") {
    state.built = target;
    buildDisplay.innerHTML = buildDisplayHTML(target, state.built);
    feedbackEl.textContent = `That's ${target}`;
  } else {
    const rightBtn = document.querySelector(`.morse-answers .key[data-letter="${state.answer}"]`);
    if (rightBtn) rightBtn.classList.add("correct");
    feedbackEl.textContent = `That's ${state.answer}`;
  }
  setTimeout(() => {
    nextQuestion();
    state.locked = false;
  }, 1300);
});

playBtn.addEventListener("click", () => {
  playCode(MORSE[state.answer]);
});

// ---------- input wiring ----------

dotBtn.addEventListener("click", () => addSymbol("."));
dashBtn.addEventListener("click", () => addSymbol("-"));
backBtn.addEventListener("click", removeSymbol);
clearBtn.addEventListener("click", clearBuild);

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
    state.locked = false;

    buildArea.classList.toggle("hidden", state.mode !== "toMorse");
    keyboardEl.classList.toggle("hidden", state.mode !== "toLetter");
    playBtn.classList.toggle("hidden", state.mode !== "toLetter");

    nextQuestion();
    feedbackEl.textContent = "";
    updateStats();
  });
});

chartToggle.addEventListener("click", () => {
  const showing = !chartPanel.classList.contains("hidden");
  chartPanel.classList.toggle("hidden");
  chartToggle.textContent = showing ? "Show the full A-Z key" : "Hide the A-Z key";
});

function buildChart() {
  chartEl.innerHTML = "";
  ALPHABET.forEach(letter => {
    const cell = document.createElement("div");
    cell.className = "morse-chart-cell";
    cell.innerHTML = `<span class="morse-chart-code">${codeHTML(MORSE[letter])}</span><span class="morse-chart-letter">${letter}</span>`;
    chartEl.appendChild(cell);
  });
}

// Keyboard shortcuts:
//   toMorse mode:  . = dot, - / _ = dash, Backspace = undo, Esc = clear
//   toLetter mode: typing a letter answers directly
document.addEventListener("keydown", (e) => {
  if (e.metaKey || e.ctrlKey || e.altKey) return;

  if (state.mode === "toMorse") {
    if (e.key === "." ) { addSymbol("."); e.preventDefault(); }
    else if (e.key === "-" || e.key === "_") { addSymbol("-"); e.preventDefault(); }
    else if (e.key === "Backspace") { removeSymbol(); e.preventDefault(); }
    else if (e.key === "Escape") { clearBuild(); e.preventDefault(); }
  } else {
    const letter = e.key.toUpperCase();
    if (!/^[A-Z]$/.test(letter)) return;
    const btn = document.querySelector(`.morse-answers .key[data-letter="${letter}"]`);
    if (btn) handleLetterAnswer(letter, btn);
  }
});

buildChart();
buildKeyboard();
nextQuestion();
updateStats();
