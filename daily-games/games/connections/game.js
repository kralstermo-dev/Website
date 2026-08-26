// ============================================================
// CONNECTIONS - find four groups of four related words
// A puzzle is picked deterministically each day (seeded, like the
// other dailies) or freshly for a random round. Select 4 words and
// submit; a full match peels that category off the top as a colored
// banner. 4 wrong guesses and it's over.
// ============================================================

const MAX_MISTAKES = 4;
const GROUP_SIZE = 4;
const CATEGORY_COUNT = 4;

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

function seededShuffle(arr, rng) {
  const out = arr.slice();
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

function wordCategoryMap(puzzle) {
  const map = {};
  puzzle.categories.forEach((cat, i) => {
    cat.words.forEach((w) => { map[w] = i; });
  });
  return map;
}

function getTodaysSetup() {
  const rng = mulberry32(dayIndex(3190));
  const puzzle = PUZZLES[Math.floor(rng() * PUZZLES.length)];
  const order = seededShuffle(puzzle.categories.flatMap((c) => c.words), rng);
  return { puzzle, order };
}

function randomSetup() {
  const puzzle = PUZZLES[Math.floor(Math.random() * PUZZLES.length)];
  const order = seededShuffle(puzzle.categories.flatMap((c) => c.words), Math.random);
  return { puzzle, order };
}

// ---------- state ----------

const state = {
  puzzle: null,
  catMap: null,
  order: [], // remaining, unsolved words in current grid order
  solved: [], // category indices, in the order they were solved
  selected: [], // words currently selected (max GROUP_SIZE)
  mistakes: 0,
  gameOver: false,
};

const solvedEl = document.getElementById("conn-solved");
const gridEl = document.getElementById("conn-grid");
const mistakesEl = document.getElementById("conn-mistakes");
const statusEl = document.getElementById("status");
const shuffleBtn = document.getElementById("conn-shuffle");
const deselectBtn = document.getElementById("conn-deselect");
const submitBtn = document.getElementById("conn-submit");
const playAgainBtn = document.getElementById("play-again");

function showStatus(msg, isError = false) {
  statusEl.textContent = msg;
  statusEl.classList.toggle("error", isError);
}

function loadSetup(setup) {
  state.puzzle = setup.puzzle;
  state.catMap = wordCategoryMap(setup.puzzle);
  state.order = setup.order;
  state.solved = [];
  state.selected = [];
  state.mistakes = 0;
  state.gameOver = false;
  playAgainBtn.classList.remove("show");
  showStatus("Select four words that share a connection");
  render();
}

function toggleSelect(word) {
  if (state.gameOver) return;
  const i = state.selected.indexOf(word);
  if (i >= 0) {
    state.selected.splice(i, 1);
  } else {
    if (state.selected.length >= GROUP_SIZE) return;
    state.selected.push(word);
  }
  render();
}

function submitGuess() {
  if (state.gameOver || state.selected.length !== GROUP_SIZE) return;

  const counts = {};
  state.selected.forEach((w) => {
    const c = state.catMap[w];
    counts[c] = (counts[c] || 0) + 1;
  });
  const [bestCat, bestCount] = Object.entries(counts).reduce((a, b) => (b[1] > a[1] ? b : a));

  if (bestCount === GROUP_SIZE) {
    const catIdx = Number(bestCat);
    state.solved.push(catIdx);
    state.order = state.order.filter((w) => !state.selected.includes(w));
    state.selected = [];
    showStatus("");
    render();
    if (state.solved.length === CATEGORY_COUNT) {
      endGame(true);
    }
  } else {
    state.mistakes++;
    showStatus(bestCount === GROUP_SIZE - 1 ? "One away..." : "Not quite - try again", true);
    render();
    triggerShake();
    if (state.mistakes >= MAX_MISTAKES) {
      endGame(false);
    }
  }
}

function triggerShake() {
  document.querySelectorAll(".conn-tile.selected").forEach((el) => {
    el.classList.add("shake");
    setTimeout(() => el.classList.remove("shake"), 400);
  });
}

function endGame(won) {
  state.gameOver = true;
  playAgainBtn.classList.add("show");
  if (won) {
    showStatus("Solved it!");
  } else {
    // reveal whatever's left, in category order
    for (let i = 0; i < CATEGORY_COUNT; i++) {
      if (!state.solved.includes(i)) state.solved.push(i);
    }
    state.order = [];
    showStatus("Out of guesses - here's the full grid");
    render();
  }
}

function render() {
  renderSolved();
  renderGrid();
  renderMistakes();
  submitBtn.disabled = state.selected.length !== GROUP_SIZE || state.gameOver;
  deselectBtn.disabled = state.selected.length === 0 || state.gameOver;
  shuffleBtn.disabled = state.gameOver || state.order.length === 0;
}

function renderSolved() {
  solvedEl.innerHTML = state.solved
    .map((catIdx) => {
      const cat = state.puzzle.categories[catIdx];
      return `
        <div class="conn-solved-row conn-cat-${catIdx + 1}">
          <span class="conn-solved-name">${cat.name}</span>
          <span class="conn-solved-words">${cat.words.join(", ")}</span>
        </div>
      `;
    })
    .join("");
}

function renderGrid() {
  gridEl.innerHTML = state.order
    .map((word) => {
      const isSelected = state.selected.includes(word);
      return `<button type="button" class="conn-tile${isSelected ? " selected" : ""}" data-word="${word}">${word}</button>`;
    })
    .join("");
}

function renderMistakes() {
  const dots = Array.from({ length: MAX_MISTAKES })
    .map((_, i) => `<span class="conn-dot${i < state.mistakes ? " used" : ""}"></span>`)
    .join("");
  mistakesEl.innerHTML = `<span>Mistakes remaining:</span> ${dots}`;
}

gridEl.addEventListener("click", (e) => {
  const btn = e.target.closest(".conn-tile");
  if (!btn) return;
  toggleSelect(btn.dataset.word);
});

submitBtn.addEventListener("click", submitGuess);
deselectBtn.addEventListener("click", () => {
  state.selected = [];
  render();
});
shuffleBtn.addEventListener("click", () => {
  state.order = seededShuffle(state.order, Math.random);
  render();
});
playAgainBtn.addEventListener("click", () => {
  loadSetup(randomSetup());
});

loadSetup(getTodaysSetup());
