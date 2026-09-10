// ============================================================
// MAGNITUDLE - daily estimation game.
// One question a day (picked deterministically from the date,
// like Wordle picks its word). Guess a number, optionally scale
// it with a magnitude button, lock it in, and get scored 0-100
// based on how many orders of magnitude away you were.
// ============================================================

const STORAGE_KEY = "magnitudle-progress";
const EPOCH = new Date(2025, 0, 1); // day 1 of the puzzle numbering
const MAX_ORDERS = 3; // being 1000x off (in either direction) scores 0

function getDayIndex() {
  const today = new Date();
  const startOfToday = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  return Math.floor((startOfToday - EPOCH) / (1000 * 60 * 60 * 24));
}

function getTodaysQuestion(dayIndex) {
  const i = ((dayIndex % MAGNITUDLE_QUESTIONS.length) + MAGNITUDLE_QUESTIONS.length) % MAGNITUDLE_QUESTIONS.length;
  return MAGNITUDLE_QUESTIONS[i];
}

function loadProgress() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  } catch (e) {
    return {};
  }
}
function saveProgress(p) {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(p)); } catch (e) {}
}

// ---------- formatting helpers ----------

function formatWithCommas(n) {
  return Math.round(n).toLocaleString("en-US");
}

function humanize(n) {
  const sign = n < 0 ? "-" : "";
  const abs = Math.abs(n);
  const scales = [
    [1e15, "quadrillion"],
    [1e12, "trillion"],
    [1e9, "billion"],
    [1e6, "million"],
    [1e3, "thousand"],
  ];
  for (const [val, name] of scales) {
    if (abs >= val) {
      const num = abs / val;
      const rounded = Math.round(num * 10) / 10;
      const str = rounded % 1 === 0 ? rounded.toFixed(0) : rounded.toFixed(1);
      return `${sign}${str} ${name}`;
    }
  }
  return `${sign}${formatWithCommas(abs)}`;
}

// Same as humanize(), but always shows one decimal place at million+
// scale (e.g. "20.0 million" instead of "20 million") - used in the
// result screen's guess-vs-answer comparison, to match figures up
// precisely digit-for-digit even when they land on a round number.
function humanizeFixed(n) {
  const sign = n < 0 ? "-" : "";
  const abs = Math.abs(n);
  const scales = [
    [1e15, "quadrillion"],
    [1e12, "trillion"],
    [1e9, "billion"],
    [1e6, "million"],
    [1e3, "thousand"],
  ];
  for (const [val, name] of scales) {
    if (abs >= val) {
      return `${sign}${(abs / val).toFixed(1)} ${name}`;
    }
  }
  return `${sign}${formatWithCommas(abs)}`;
}

// ---------- scoring ----------

function scoreGuess(guess, answer) {
  const safeGuess = Math.max(guess, 1e-9);
  const safeAnswer = Math.max(answer, 1e-9);
  const ordersOff = Math.abs(Math.log10(safeGuess) - Math.log10(safeAnswer));
  const score = Math.max(0, Math.min(100, Math.round(100 - (ordersOff / MAX_ORDERS) * 100)));
  return { score, ordersOff };
}

function verdictFor(score) {
  if (score >= 95) return "Unbelievable!";
  if (score >= 80) return "Excellent!";
  if (score >= 60) return "Great job!";
  if (score >= 40) return "Not bad!";
  if (score >= 20) return "Way off!";
  return "Yikes...";
}

function ringColorFor(score) {
  if (score >= 70) return "var(--correct)";
  if (score >= 40) return "var(--present)";
  return "var(--danger)";
}

function magnitudeBadgeText(guess, answer, ordersOff) {
  if (ordersOff < 0.05) return "Nailed it!";
  const direction = guess < answer ? "under" : "over";
  return `${ordersOff.toFixed(1)} orders of magnitude ${direction}`;
}

// ---------- state ----------

const dayIndex = getDayIndex();
const question = getTodaysQuestion(dayIndex);
const questionNumber = dayIndex + 1;

let progress = loadProgress();

// The user's raw typed digits, kept as the single source of truth for
// "what number did they actually type." The input box's *displayed*
// text gets overwritten with the scaled-up value once a magnitude
// button is pressed (e.g. "100" -> "100,000,000"), so re-reading the
// base number from the DOM after that point would double-apply the
// multiplier. Everything reads/writes rawValue instead.
let rawValue = "";
let multiplier = 1;

const RING_CIRCUMFERENCE = 2 * Math.PI * 88;

const els = {
  meta: document.getElementById("meta-row"),
  questionText: document.getElementById("question-text"),
  questionSub: document.getElementById("question-sub"),
  helpBtn: document.getElementById("help-btn"),
  helpPanel: document.getElementById("help-panel"),
  inputPhase: document.getElementById("input-phase"),
  resultPhase: document.getElementById("result-phase"),
  input: document.getElementById("estimate-input"),
  preview: document.getElementById("estimate-preview"),
  previewValue: document.getElementById("estimate-preview-value"),
  lockBtn: document.getElementById("lock-btn"),
  verdict: document.getElementById("verdict"),
  scoreValue: document.getElementById("score-value"),
  scoreRingFill: document.getElementById("score-ring-fill"),
  guessValue: document.getElementById("guess-value"),
  answerValue: document.getElementById("answer-value"),
  magBadge: document.getElementById("magnitude-badge"),
  shareBtn: document.getElementById("share-btn"),
  funFact: document.getElementById("fun-fact"),
  sourceText: document.getElementById("source-text"),
};

function renderMeta(streak) {
  const parts = [`S1`, `Q${String(questionNumber).padStart(2, "0")}`];
  if (streak > 0) parts.push(`${streak} DAY STREAK`);
  parts.push(question.unit.toUpperCase());
  els.meta.textContent = parts.join(" \u00b7 ");
}

function renderQuestion() {
  els.questionText.textContent = question.question;
  els.questionSub.textContent = `Enter an estimate in ${question.unit}.`;
}

// ---------- input phase ----------

// Reads the base number from `rawValue` (JS state), never from the
// input's current displayed text - see the comment on `rawValue` above
// for why that distinction matters.
function getRawNumber() {
  const raw = parseFloat(rawValue.replace(/,/g, ""));
  return isNaN(raw) || raw <= 0 ? null : raw;
}

function refreshInputDisplay() {
  const raw = getRawNumber();
  const final = raw !== null ? raw * multiplier : null;

  if (final !== null) {
    els.preview.classList.remove("hidden");
    els.previewValue.textContent = humanize(final);
  } else {
    els.preview.classList.add("hidden");
  }
  els.lockBtn.disabled = final === null;
}

els.input.addEventListener("input", () => {
  if (els.input.readOnly) return;
  rawValue = els.input.value;
  refreshInputDisplay();
});

els.input.addEventListener("click", () => {
  if (!els.input.readOnly) return;
  // Unlock: drop back to raw editing mode at the digits the person
  // originally typed (not the scaled-up number currently on screen).
  multiplier = 1;
  document.querySelectorAll(".magnitudle-mag-btn").forEach(b => b.classList.remove("active"));
  els.input.value = rawValue;
  els.input.readOnly = false;
  els.input.focus();
  refreshInputDisplay();
});

document.querySelectorAll(".magnitudle-mag-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const raw = getRawNumber();
    const mult = Number(btn.dataset.mult);
    const isActive = btn.classList.contains("active");

    document.querySelectorAll(".magnitudle-mag-btn").forEach(b => b.classList.remove("active"));

    if (isActive) {
      // toggled off - back to raw x1
      multiplier = 1;
      els.input.value = rawValue;
      els.input.readOnly = false;
    } else {
      if (raw === null) { els.input.focus(); return; }
      multiplier = mult;
      btn.classList.add("active");
      els.input.value = formatWithCommas(raw * multiplier);
      els.input.readOnly = true;
    }
    refreshInputDisplay();
  });
});

els.lockBtn.addEventListener("click", () => {
  const raw = getRawNumber();
  if (raw === null) return;
  const guess = raw * multiplier;
  submitGuess(guess);
});

// ---------- result phase ----------

function showResult(guess) {
  const { score, ordersOff } = scoreGuess(guess, question.answer);

  els.inputPhase.classList.add("hidden");
  els.resultPhase.classList.remove("hidden");

  els.verdict.textContent = verdictFor(score);
  els.scoreValue.textContent = score;
  els.scoreRingFill.style.stroke = ringColorFor(score);
  // Animate from empty: force a reflow so the browser registers the
  // dashoffset=full state before we transition it, or it just snaps.
  els.scoreRingFill.style.strokeDashoffset = RING_CIRCUMFERENCE;
  els.scoreRingFill.getBoundingClientRect();
  els.scoreRingFill.style.strokeDashoffset = String(RING_CIRCUMFERENCE * (1 - score / 100));

  els.guessValue.textContent = `${humanizeFixed(guess)} ${question.unit}`;
  els.answerValue.textContent = `${humanizeFixed(question.answer)} ${question.unit}`;
  els.magBadge.textContent = magnitudeBadgeText(guess, question.answer, ordersOff);

  els.funFact.textContent = question.funFact;
  els.sourceText.textContent = question.source;

  return score;
}

function submitGuess(guess) {
  const score = showResult(guess);

  let streak;
  if (progress.lastDayIndex === dayIndex - 1) streak = (progress.streak || 0) + 1;
  else if (progress.lastDayIndex === dayIndex) streak = progress.streak || 1;
  else streak = 1;

  progress = { lastDayIndex: dayIndex, streak, guess };
  saveProgress(progress);
  renderMeta(streak);
}

els.shareBtn.addEventListener("click", async () => {
  const scoreText = els.scoreValue.textContent;
  const shareText = `Magnitudle S1 \u00b7 Q${String(questionNumber).padStart(2, "0")}\n` +
    `${question.question}\n` +
    `My guess: ${els.guessValue.textContent} \u2192 Score: ${scoreText}/100`;

  if (navigator.share) {
    try { await navigator.share({ text: shareText }); } catch (e) {}
    return;
  }
  try {
    await navigator.clipboard.writeText(shareText);
    const original = els.shareBtn.innerHTML;
    els.shareBtn.textContent = "Copied to clipboard!";
    setTimeout(() => { els.shareBtn.innerHTML = original; }, 1600);
  } catch (e) {}
});

// ---------- help panel ----------

els.helpBtn.addEventListener("click", () => {
  els.helpPanel.classList.toggle("hidden");
});

// ---------- init ----------

renderQuestion();

if (progress.lastDayIndex === dayIndex && typeof progress.guess === "number") {
  // already played today - jump straight to the result
  renderMeta(progress.streak || 1);
  showResult(progress.guess);
} else {
  renderMeta(0);
  refreshInputDisplay();
}
