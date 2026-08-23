// ============================================================
// ANGLE - guess the degree measure of the angle shown
// Two rays from a shared vertex form an angle with no markings - you
// guess its measure in degrees. The pair can face any direction (not
// anchored to a fixed axis), and a small arc between them marks the
// swept angle. Feedback is a warmer/colder tier plus a direction hint
// (which way to adjust your next guess).
// ============================================================

const MAX_GUESSES = 6;

function mulberry32(seed) {
  return function () {
    seed |= 0; seed = (seed + 0x6D2B79F5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function dayIndex(offset) {
  const start = new Date(2024, 0, 1);
  const today = new Date();
  return Math.floor((today - start) / (1000 * 60 * 60 * 24)) + offset;
}

// angle: kept away from 0/360 (degenerate, rays overlap) so it always
// looks like a real angle. rotation: where the whole pair points, so
// the diagram isn't always anchored the same way.
function getTodaysAngle() {
  const rng = mulberry32(dayIndex(452));
  return {
    angle: 5 + Math.floor(rng() * 351), // 5..355
    rotation: Math.floor(rng() * 360),
  };
}

function randomAngle() {
  return {
    angle: 5 + Math.floor(Math.random() * 351),
    rotation: Math.floor(Math.random() * 360),
  };
}

function angularDiff(a, b) {
  const d = Math.abs(a - b) % 360;
  return d > 180 ? 360 - d : d;
}

// Which way (in guessed degrees) gets you to the answer fastest.
function angularDirection(guess, answer) {
  let d = (answer - guess) % 360;
  if (d > 180) d -= 360;
  if (d < -180) d += 360;
  return d; // positive = guess higher next time, negative = guess lower
}

function tierFor(diff) {
  if (diff === 0) return "correct";
  if (diff <= 10) return "close";
  if (diff <= 30) return "warm";
  return "cold";
}

const state = {
  answer: getTodaysAngle(),
  guesses: [],
  gameOver: false,
};

const diagramEl = document.getElementById("angle-diagram");
const attemptsEl = document.getElementById("attempts-left");
const statusEl = document.getElementById("status");
const guessForm = document.getElementById("guess-form");
const guessInput = document.getElementById("guess-input");
const guessList = document.getElementById("guess-list");
const playAgainBtn = document.getElementById("play-again");

function showStatus(msg, isError = false) {
  statusEl.textContent = msg;
  statusEl.classList.toggle("error", isError);
}

// Vertex centered in the viewBox so a ray can point in ANY direction
// without ever getting clipped by the box edges.
const CX = 150, CY = 150, R = 130;
const ARC_R = 42;

function rayEndpoint(deg, radius = R) {
  const rad = (deg * Math.PI) / 180;
  return { x: CX + radius * Math.cos(rad), y: CY - radius * Math.sin(rad) };
}

// A small arc between the two rays (not a full circle) marking the
// swept angle - matches how a protractor shows an angle.
function arcPath(ray1Deg, ray2Deg, angleDeg) {
  const p1 = rayEndpoint(ray1Deg, ARC_R);
  const p2 = rayEndpoint(ray2Deg, ARC_R);
  const largeArcFlag = angleDeg > 180 ? 1 : 0;
  return `M ${p1.x.toFixed(1)} ${p1.y.toFixed(1)} A ${ARC_R} ${ARC_R} 0 ${largeArcFlag} 1 ${p2.x.toFixed(1)} ${p2.y.toFixed(1)}`;
}

// The target angle's two rays are always visible - Angle is a visual
// estimation game, not a hidden-answer one like Wordle/Flagle, so
// there's nothing to reveal later. Past guesses are NOT drawn on the
// diagram - only the puzzle itself shows.
function renderDiagram() {
  const ray1Deg = state.answer.rotation;
  const ray2Deg = state.answer.rotation - state.answer.angle;
  const ray1 = rayEndpoint(ray1Deg);
  const ray2 = rayEndpoint(ray2Deg);

  diagramEl.innerHTML = `
    <svg viewBox="0 0 300 300" width="100%" height="100%">
      <path d="${arcPath(ray1Deg, ray2Deg, state.answer.angle)}" fill="none" stroke="var(--accent-2)" stroke-width="2" opacity="0.8" />
      <line x1="${CX}" y1="${CY}" x2="${ray1.x.toFixed(1)}" y2="${ray1.y.toFixed(1)}" stroke="var(--danger)" stroke-width="4" stroke-linecap="round" />
      <line x1="${CX}" y1="${CY}" x2="${ray2.x.toFixed(1)}" y2="${ray2.y.toFixed(1)}" stroke="var(--danger)" stroke-width="4" stroke-linecap="round" />
      <circle cx="${CX}" cy="${CY}" r="4" fill="var(--ink)" />
    </svg>
  `;
}
renderDiagram();
attemptsEl.textContent = `${MAX_GUESSES - state.guesses.length} guesses left`;

function renderGuessRow(value, tier, isCorrect, direction) {
  const row = document.createElement("div");
  row.className = "angle-row" + (isCorrect ? " correct" : "");
  const dirLabel = direction > 0 ? "Higher &uarr;" : "Lower &darr;";
  row.innerHTML = `
    <span class="angle-value">${value}&deg;</span>
    <span class="cf-channel cf-${tier}">${isCorrect ? "Correct!" : dirLabel}</span>
  `;
  guessList.prepend(row);
}

guessForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (state.gameOver) return;

  const raw = guessInput.value.trim();
  const value = Number(raw);
  if (!/^\d+$/.test(raw) || value < 0 || value > 360) {
    showStatus("Enter a whole number of degrees, 0 to 360", true);
    return;
  }

  if (state.guesses.some(g => g.value === value)) {
    showStatus("Already guessed that angle", true);
    return;
  }

  showStatus("");
  const diff = angularDiff(value, state.answer.angle);
  const direction = angularDirection(value, state.answer.angle);
  const tier = tierFor(diff);
  const isCorrect = diff === 0;

  state.guesses.push({ value, tier });
  guessInput.value = "";
  renderGuessRow(value, tier, isCorrect, direction);

  if (isCorrect) {
    endGame(true);
    return;
  }

  attemptsEl.textContent = `${MAX_GUESSES - state.guesses.length} guesses left`;
  if (state.guesses.length >= MAX_GUESSES) {
    endGame(false);
  }
});

function endGame(won) {
  state.gameOver = true;
  guessInput.disabled = true;
  playAgainBtn.classList.add("show");
  showStatus(won ? "Solved! 🎉" : `The angle was ${state.answer.angle}\u00b0`);
}

playAgainBtn.addEventListener("click", () => {
  state.answer = randomAngle();
  state.guesses = [];
  state.gameOver = false;
  guessInput.disabled = false;
  guessInput.value = "";
  guessList.innerHTML = "";
  playAgainBtn.classList.remove("show");
  showStatus("");
  attemptsEl.textContent = `${MAX_GUESSES - state.guesses.length} guesses left`;
  renderDiagram();
});
