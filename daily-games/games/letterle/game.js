const ALPHABET = "abcdefghijklmnopqrstuvwxyz".split("");

function getTodaysLetter() {
  const start = new Date(2024, 0, 1);
  const today = new Date();
  const dayIndex = Math.floor((today - start) / (1000 * 60 * 60 * 24)) + 529;
  return ALPHABET[dayIndex % ALPHABET.length];
}

const state = {
  answer: getTodaysLetter(),
  row: 0,
  gameOver: false,
  submittedLetters: [],
};

const gridEl = document.getElementById("grid");
const statusEl = document.getElementById("status");
const playAgainBtn = document.getElementById("play-again");

function buildGrid() {
  gridEl.innerHTML = "";
  addRow(0);
}

function addRow(r) {
  const rowEl = document.createElement("div");
  rowEl.className = "grid-row";
  const cell = document.createElement("div");
  cell.className = "cell";
  cell.id = `cell-${r}-0`;
  rowEl.appendChild(cell);
  gridEl.appendChild(rowEl);
}

function scrollToBottom() {
  window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
}
buildGrid();

const KEY_ROWS = [
  ["q","w","e","r","t","y","u","i","o","p"],
  ["a","s","d","f","g","h","j","k","l"],
  ["enter","z","x","c","v","b","n","m","back"],
];

function buildKeyboard() {
  const kb = document.getElementById("keyboard");
  kb.innerHTML = "";
  KEY_ROWS.forEach(row => {
    const rowEl = document.createElement("div");
    rowEl.className = "key-row";
    row.forEach(k => {
      const btn = document.createElement("button");
      btn.className = "key" + (k === "enter" || k === "back" ? " wide" : "");
      btn.textContent = k === "back" ? "⌫" : (k === "enter" ? "Enter" : k);
      btn.dataset.key = k;
      btn.addEventListener("click", () => handleKey(k));
      rowEl.appendChild(btn);
    });
    kb.appendChild(rowEl);
  });
}
buildKeyboard();

let pendingLetter = "";

function handleKey(key) {
  if (state.gameOver) return;

  if (key === "back") {
    if (pendingLetter) {
      pendingLetter = "";
      setCellLetter(state.row, "");
    }
    return;
  }

  if (key === "enter") {
    submitGuess();
    return;
  }

  if (/^[a-z]$/.test(key) && !pendingLetter) {
    pendingLetter = key;
    setCellLetter(state.row, key);
  }
}

function setCellLetter(r, letter) {
  const cellEl = document.getElementById(`cell-${r}-0`);
  cellEl.textContent = letter;
  cellEl.classList.toggle("filled", letter !== "");
  if (letter) {
    cellEl.classList.add("pop");
    setTimeout(() => cellEl.classList.remove("pop"), 150);
  }
}

function showStatus(msg, isError = false) {
  statusEl.textContent = msg;
  statusEl.classList.toggle("error", isError);
}

function shake(row) {
  document.getElementById(`cell-${row}-0`).animate(
    [{ transform: "translateX(0)" }, { transform: "translateX(-4px)" },
     { transform: "translateX(4px)" }, { transform: "translateX(0)" }],
    { duration: 200 }
  );
}

function submitGuess() {
  if (!pendingLetter) {
    showStatus("Pick a letter first", true);
    shake(state.row);
    return;
  }

  const guess = pendingLetter;

  if (state.submittedLetters.includes(guess)) {
    showStatus("Already guessed that letter", true);
    shake(state.row);
    return;
  }

  const result = scoreGuess(guess, state.answer);
  state.submittedLetters.push(guess);
  revealCell(state.row, result[0], guess);

  if (guess === state.answer) {
    state.gameOver = true;
    const count = state.submittedLetters.length;
    const guessWord = count === 1 ? "guess" : "guesses";
    setTimeout(() => showStatus(`Solved! 🎉 (${count} ${guessWord})`), 500);
    endGame();
    scrollToBottom();
    return;
  }

  state.row++;
  pendingLetter = "";
  addRow(state.row);
  scrollToBottom();
}

function scoreGuess(guess, answer) {
  return guess === answer ? ["correct"] : ["absent"];
}

function revealCell(row, result, guess) {
  const cell = document.getElementById(`cell-${row}-0`);
  cell.classList.add("flip");
  cell.style.setProperty("--tile-color", result === "correct" ? "var(--correct)" : "#2a2e38");
  cell.classList.add(result);
  updateKeyboardKey(guess, result);
}

const keyStatus = {};
function updateKeyboardKey(letter, status) {
  const rank = { correct: 3, present: 2, absent: 1 };
  if (!keyStatus[letter] || rank[status] > rank[keyStatus[letter]]) {
    keyStatus[letter] = status;
    const btn = document.querySelector(`.key[data-key="${letter}"]`);
    if (btn) {
      btn.classList.remove("correct", "present", "absent");
      btn.classList.add(status);
    }
  }
}

function endGame() {
  playAgainBtn.classList.add("show");
}

document.addEventListener("keydown", (e) => {
  const key = e.key.toLowerCase();
  if (key === "backspace") handleKey("back");
  else if (key === "enter") handleKey("enter");
  else if (/^[a-z]$/.test(key)) handleKey(key);
});

playAgainBtn.addEventListener("click", () => {
  state.answer = ALPHABET[Math.floor(Math.random() * ALPHABET.length)];
  state.row = 0;
  state.gameOver = false;
  state.submittedLetters = [];
  pendingLetter = "";
  Object.keys(keyStatus).forEach(k => delete keyStatus[k]);
  document.querySelectorAll(".key").forEach(k => k.classList.remove("correct", "present", "absent"));
  playAgainBtn.classList.remove("show");
  showStatus("");
  buildGrid();
  window.scrollTo({ top: 0, behavior: "smooth" });
});
