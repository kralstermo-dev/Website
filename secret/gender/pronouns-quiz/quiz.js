// ============================================================
// PRONOUNS QUIZ
// A short, linear reflection tool (not a branching tree like the
// attraction quizzes) - asks how a few pronoun sets feel, whether
// neopronouns are of interest, and whether it varies day to day,
// then suggests a starting combination. This is meant purely as
// a reflection prompt, not an authoritative answer.
// ============================================================

const QUESTIONS = [
  {
    id: "he",
    text: "How do 'he/him' pronouns feel when used for you?",
    options: [
      { label: "Feels right", value: "fits" },
      { label: "Neutral, I don't mind", value: "neutral" },
      { label: "Doesn't feel right", value: "no" },
    ],
  },
  {
    id: "she",
    text: "How do 'she/her' pronouns feel when used for you?",
    options: [
      { label: "Feels right", value: "fits" },
      { label: "Neutral, I don't mind", value: "neutral" },
      { label: "Doesn't feel right", value: "no" },
    ],
  },
  {
    id: "they",
    text: "How do 'they/them' pronouns feel when used for you?",
    options: [
      { label: "Feels right", value: "fits" },
      { label: "Neutral, I don't mind", value: "neutral" },
      { label: "Doesn't feel right", value: "no" },
    ],
  },
  {
    id: "neo",
    text: "Are you curious about or drawn to neopronouns - sets like xe/xem, ze/zir, fae/faer, or it/its?",
    options: [
      { label: "Yes, that's interesting to me", value: "yes" },
      { label: "Not really", value: "no" },
      { label: "Not sure / never considered it", value: "unsure" },
    ],
  },
  {
    id: "fluid",
    text: "Does how you feel about pronouns change depending on the day, mood, or who's asking?",
    options: [
      { label: "Yes, it varies", value: "yes" },
      { label: "No, it's pretty consistent", value: "no" },
    ],
  },
];

const state = { step: 0, answers: {} };

const els = {
  progress: document.getElementById("progress"),
  card: document.getElementById("quiz-card"),
  resultCard: document.getElementById("result-card"),
  backBtn: document.getElementById("back-btn"),
};

function renderProgress() {
  els.progress.innerHTML = "";
  QUESTIONS.forEach((_, i) => {
    const dot = document.createElement("span");
    dot.className = "quiz-dot" + (i < state.step ? " done" : i === state.step ? " active" : "");
    els.progress.appendChild(dot);
  });
}

function renderQuestion() {
  if (state.step >= QUESTIONS.length) { renderResults(); return; }
  const q = QUESTIONS[state.step];
  els.resultCard.classList.add("hidden");
  els.card.classList.remove("hidden");
  els.backBtn.classList.toggle("hidden", state.step === 0);
  renderProgress();

  els.card.innerHTML = `<p class="quiz-question">${q.text}</p><div class="quiz-options"></div>`;
  const optionsEl = els.card.querySelector(".quiz-options");
  q.options.forEach(opt => {
    const btn = document.createElement("button");
    btn.className = "quiz-option";
    btn.type = "button";
    btn.textContent = opt.label;
    btn.addEventListener("click", () => {
      state.answers[q.id] = opt.value;
      state.step++;
      renderQuestion();
    });
    optionsEl.appendChild(btn);
  });
}

els.backBtn.addEventListener("click", () => {
  if (state.step === 0) return;
  state.step--;
  renderQuestion();
});

function buildResult(answers) {
  const fits = ["he", "she", "they"].filter(p => answers[p] === "fits");
  const neutral = ["he", "she", "they"].filter(p => answers[p] === "neutral");
  const PRETTY = { he: "he/him", she: "she/her", they: "they/them" };

  let headline;
  let description;

  if (fits.length >= 2) {
    headline = "Any/All Pronouns";
    description = `${fits.map(p => PRETTY[p]).join(" and ")} all felt right to you - meaning you're comfortable being referred to with any of these, and nobody has to pick just one on your behalf.`;
  } else if (fits.length === 1) {
    headline = PRETTY[fits[0]];
    description = `${PRETTY[fits[0]]} was the one that clearly felt right. That's a perfectly complete answer on its own.`;
  } else if (neutral.length > 0) {
    headline = neutral.map(p => PRETTY[p]).join(" or ");
    description = `Nothing felt strongly right, but ${neutral.map(p => PRETTY[p]).join(" and ")} didn't feel wrong either. That's a fine place to sit - pronouns can be tried on rather than decided all at once.`;
  } else if (answers.neo === "yes") {
    headline = "Worth exploring neopronouns";
    description = "None of he/she/they felt like a fit, and neopronouns caught your interest - sets like xe/xem, ze/zir, or fae/faer might be worth trying on, or simply your name in place of any pronoun.";
  } else {
    headline = "Still figuring it out";
    description = "None of the common sets felt right yet, and that's completely okay. This can take time, and you don't owe anyone a settled answer before you're ready.";
  }

  if (answers.neo === "yes" && fits.length > 0) {
    description += " You also expressed interest in neopronouns - some people combine a common set with a neopronoun (like they/xe), so that could be worth exploring too.";
  }

  return { headline, description, fluid: answers.fluid === "yes" };
}

function renderResults() {
  els.card.classList.add("hidden");
  els.backBtn.classList.add("hidden");
  els.resultCard.classList.remove("hidden");
  renderProgress();

  const result = buildResult(state.answers);
  try {
    localStorage.setItem("gender-quiz-pronouns", JSON.stringify({ display: result.headline }));
  } catch (e) {}

  els.resultCard.innerHTML = `
    <p class="quiz-result-eyebrow">Based on your answers</p>
    <h2 class="quiz-result-headline">${result.headline}</h2>
    <p class="quiz-result-desc-main">${result.description}</p>

    ${result.fluid ? `
      <p class="quiz-result-callout">
        Your comfort with pronouns shifts depending on context - some people who feel this way
        describe themselves as <strong>pronoun-fluid</strong>, and are comfortable using multiple
        sets interchangeably.
      </p>
    ` : ""}

    <p class="quiz-result-note">
      This is a reflection prompt, not a rule - pronouns are allowed to change, combine, or stay
      undecided for as long as you need. See the <a href="../info.html">general info page</a> for
      more on gender terminology.
    </p>

    <button id="retake-btn" class="quiz-retake-btn" type="button">Take it again</button>
  `;

  document.getElementById("retake-btn").addEventListener("click", () => {
    state.step = 0;
    state.answers = {};
    renderQuestion();
  });
}

renderQuestion();
