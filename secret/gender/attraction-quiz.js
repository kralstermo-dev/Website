// ============================================================
// ATTRACTION QUIZ - shared engine
// Used by both /sexual-quiz/ and /romantic-quiz/. Each of those
// pages sets `const QUIZ_AXIS = "sexual"` (or "romantic") in a
// tiny inline script *before* loading this file - everything
// else (the question tree, wording, labels, umbrellas) adapts
// automatically based on that one variable.
//
// ------------------------------------------------------------
// HOW TO EDIT
// ------------------------------------------------------------
// EASY:
//   - Reword any question text in NODES (the {sexual|romantic}
//     placeholder gets swapped for the right word automatically)
//   - Reword any entry in LABELS or UMBRELLA text
// MEDIUM:
//   - Add a new "who" outcome: add an option with
//     `set: { who: "yourKey" }` in NODES, then add matching
//     entries to LABELS.sexual and LABELS.romantic
// ADVANCED:
//   - The full/gray/demi/recip/lith/flux/aego/none scoring and
//     hetero/homo
//     relative-gender logic lives in buildResult() below
// ============================================================

function word(base) {
  // "attraction" -> "sexual attraction" / "romantic attraction"
  return `${QUIZ_AXIS} ${base}`;
}

const NODES = {
  presence: {
    text: `Do you experience ${word("attraction")} to other people?`,
    options: [
      { label: "Yes, pretty regularly", set: { presence: "full" }, next: "count" },
      { label: "It happens, but not simply or consistently", next: "presenceDetail" },
      { label: "Rarely or never, in any circumstance", set: { presence: "none" }, next: "cupioCheck" },
      { label: "Honestly not sure yet", set: { presence: "questioning" }, next: "fluid" },
    ],
  },
  presenceDetail: {
    text: "Which of these best describes when or how it happens?",
    options: [
      { label: "Only sometimes, and it's often faint or hard to pin down", set: { presence: "gray" }, next: "count" },
      { label: "Only once I've formed a really close emotional bond with someone", set: { presence: "demi" }, next: "count" },
      { label: "Only once I know the other person is already interested in me", set: { presence: "recip" }, next: "count" },
      { label: "It fades fast once it's reciprocated", set: { presence: "lith" }, next: "count" },
      { label: "It fluctuates - sometimes little to none, other times more", set: { presence: "flux" }, next: "count" },
      { label: "I find the idea appealing in a general or fictional sense, but don't personally want it", set: { presence: "aego" }, next: "fluid" },
    ],
  },
  cupioCheck: {
    text: `Even without that attraction, do you still want a ${QUIZ_AXIS} relationship or partnership?`,
    options: [
      { label: "Yes", set: { cupio: true }, next: "fluid" },
      { label: "No", next: "fluid" },
    ],
  },
  count: {
    text: "Are you attracted to more than one gender (or presentation)?",
    options: [
      { label: "Yes", next: "multiAll" },
      { label: "Mostly one gender, but I'm somewhat open to others too", set: { flex: true }, next: "presentationCheck" },
      { label: "No", next: "presentationCheck" },
    ],
  },
  presentationCheck: {
    text: "Is your attraction based entirely on how someone presents - their vibe, clothing, aesthetic - regardless of their actual gender identity?",
    options: [
      { label: "Yes", next: "presFem" },
      { label: "No", next: "singleWomen" },
    ],
  },
  presFem: {
    text: "Are you attracted exclusively to femininity?",
    options: [
      { label: "Yes", set: { who: "gyno" }, next: "fluid" },
      { label: "No", next: "presMasc" },
    ],
  },
  presMasc: {
    text: "Are you attracted exclusively to masculinity?",
    options: [
      { label: "Yes", set: { who: "andro" }, next: "fluid" },
      { label: "No", set: { who: "cetero" }, next: "fluid" },
    ],
  },
  singleWomen: {
    text: "Are you attracted exclusively to women?",
    options: [
      { label: "Yes", next: "genderIsMan1" },
      { label: "No", next: "singleMen" },
    ],
  },
  genderIsMan1: {
    text: "Are you a man?",
    options: [
      { label: "Yes", set: { who: "hetero" }, next: "fluid" },
      { label: "No", next: "genderIsWoman1" },
    ],
  },
  genderIsWoman1: {
    text: "Are you a woman?",
    options: [
      { label: "Yes", set: { who: "homoWomen" }, next: "fluid" },
      { label: "No", set: { who: "trixic" }, next: "fluid" },
    ],
  },
  singleMen: {
    text: "Are you attracted exclusively to men?",
    options: [
      { label: "Yes", next: "genderIsWoman2" },
      { label: "No", next: "singleNonbinary" },
    ],
  },
  singleNonbinary: {
    text: "Are you attracted exclusively to non-binary or genderqueer people, based on their gender identity rather than how they present?",
    options: [
      { label: "Yes", set: { who: "skolio" }, next: "fluid" },
      { label: "No", next: "multiAll" },
    ],
  },
  genderIsWoman2: {
    text: "Are you a woman?",
    options: [
      { label: "Yes", set: { who: "hetero" }, next: "fluid" },
      { label: "No", next: "genderIsMan2" },
    ],
  },
  genderIsMan2: {
    text: "Are you a man?",
    options: [
      { label: "Yes", set: { who: "homoMen" }, next: "fluid" },
      { label: "No", next: "genderIsEnby" },
    ],
  },
  genderIsEnby: {
    text: "Are you non-binary?",
    options: [
      { label: "Yes", set: { who: "toric" }, next: "fluid" },
      { label: "No", next: "recheck" },
    ],
  },
  recheck: {
    text: "That combination of answers doesn't quite line up - let's double check the last couple.",
    options: [
      { label: "Go back and re-check", next: "count" },
    ],
  },
  multiAll: {
    text: "Are you attracted to all genders?",
    options: [
      { label: "Yes", next: "genderBlind" },
      { label: "No", next: "multiSome" },
    ],
  },
  genderBlind: {
    text: "Is gender completely irrelevant to your attraction - sometimes called being \"gender-blind\"?",
    options: [
      { label: "Yes", set: { who: "pan" }, next: "fluid" },
      { label: "No", next: "genderFactors" },
    ],
  },
  genderFactors: {
    text: "When you picture being with different people, does their gender still shape the attraction at all - or does it feel completely identical either way?",
    options: [
      { label: "It still shapes it somewhat", set: { who: "omni" }, next: "fluid" },
      { label: "Completely identical either way", set: { who: "bi" }, next: "fluid" },
    ],
  },
  multiSome: {
    text: "Are you attracted to multiple genders, but explicitly not all genders?",
    options: [
      { label: "Yes", set: { who: "poly" }, next: "fluid" },
      { label: "No", next: "multiTwo" },
    ],
  },
  multiTwo: {
    text: "Are you attracted to two or more genders?",
    options: [
      { label: "Yes", set: { who: "bi" }, next: "fluid" },
      { label: "No", next: "recheck" },
    ],
  },
  fluid: {
    text: `Does your ${QUIZ_AXIS} attraction naturally fluctuate or change over time?`,
    options: [
      { label: "Yes", set: { fluid: true }, next: "end" },
      { label: "No", next: "end" },
    ],
  },
};

const START_NODE = "presence";

// Per-axis display name + description for each "who"/presence result.
const LABELS = {
  sexual: {
    hetero: ["Heterosexual", "You're attracted to a different gender than your own. Also called straight."],
    heteroFlex: ["Heteroflexible", "You're mostly attracted to a different gender than your own, but somewhat open to other genders too."],
    homoMen: ["Gay", "You're a man attracted to men."],
    homoWomen: ["Lesbian", "You're a woman attracted to women."],
    homoFlex: ["Homoflexible", "You're mostly attracted to the same gender as your own, but somewhat open to other genders too."],
    trixic: ["Trixic", "A term some non-binary people use to describe being attracted to women."],
    toric: ["Toric", "A term some non-binary people use to describe being attracted to men."],
    skolio: ["Skoliosexual", "You're attracted primarily to non-binary or genderqueer people, based on their gender identity rather than their presentation."],
    gyno: ["Gynosexual", "You're attracted to femininity itself, regardless of the other person's gender identity. Also called finsexual."],
    andro: ["Androsexual", "You're attracted to masculinity itself, regardless of the other person's gender identity. Also called minsexual."],
    cetero: ["Ceterosexual", "You're attracted to androgyny or non-binary presentation, typically not to strictly masculine or feminine presentation."],
    pan: ["Pansexual", "You're attracted to people regardless of gender - it isn't a factor for you at all."],
    omni: ["Omnisexual", "You're attracted to all genders, but gender still plays a role in how that attraction feels."],
    bi: ["Bisexual", "You're attracted to two or more genders."],
    poly: ["Polysexual", "You're attracted to multiple genders, but not all of them."],
    gray: ["Graysexual", "You experience sexual attraction rarely, faintly, or inconsistently - somewhere between sexual and asexual."],
    demi: ["Demisexual", "You only feel sexual attraction after forming a strong emotional bond with someone first."],
    lith: ["Lithsexual", "You can feel sexual attraction, but it tends to fade once it's reciprocated or acted on. Also called akoisexual."],
    recip: ["Reciprosexual", "You only develop sexual attraction once you know the other person is already interested in you."],
    flux: ["Aceflux", "Your experience of sexual attraction fluctuates - sometimes you feel little to none, other times noticeably more."],
    aego: ["Aegosexual", "You can find the idea of sex appealing in a general or fictional sense, but don't feel a personal desire to be involved yourself. Also called autochorissexual."],
    cupio: ["Cupiosexual", "You experience little to no sexual attraction, but still want a sexual and/or romantic relationship or partnership."],
    none: ["Asexual", "You experience little to no sexual attraction toward others. Asexual people can still want romance, intimacy, and relationships - sex just isn't something you're drawn to."],
    questioning: ["Questioning", "You're still figuring this one out, and that's completely fine."],
  },
  romantic: {
    hetero: ["Heteroromantic", "You feel romantic attraction primarily toward a different gender than your own."],
    homoMen: ["Homoromantic", "You're a man who feels romantic attraction toward men."],
    homoWomen: ["Homoromantic", "You're a woman who feels romantic attraction toward women."],
    trixic: ["Trixiromantic", "A term some non-binary people use to describe romantic attraction to women."],
    toric: ["Toriromantic", "A term some non-binary people use to describe romantic attraction to men."],
    skolio: ["Skolioromantic", "You feel romantic attraction primarily toward non-binary or genderqueer people, based on their gender identity rather than their presentation."],
    gyno: ["Gyneromantic", "You feel romantic attraction toward femininity itself, regardless of the other person's gender identity."],
    andro: ["Androromantic", "You feel romantic attraction toward masculinity itself, regardless of the other person's gender identity."],
    cetero: ["Ceteroromantic", "You feel romantic attraction toward androgyny or non-binary presentation."],
    pan: ["Panromantic", "You feel romantic attraction toward people regardless of gender - it isn't a factor for you at all."],
    omni: ["Omniromantic", "You feel romantic attraction toward all genders, but gender still plays a role in how that attraction feels."],
    bi: ["Biromantic", "You feel romantic attraction toward two or more genders."],
    poly: ["Polyromantic", "You feel romantic attraction toward multiple genders, but not all of them."],
    gray: ["Grayromantic", "You experience romantic attraction rarely, faintly, or inconsistently - somewhere between romantic and aromantic."],
    demi: ["Demiromantic", "You only feel romantic attraction after forming a strong emotional bond with someone first."],
    lith: ["Lithromantic", "You can feel romantic attraction, but it tends to fade once it's reciprocated. Also called akoiromantic."],
    recip: ["Recipromantic", "You only develop romantic attraction once you know the other person is already interested in you."],
    flux: ["Aroflux", "Your experience of romantic attraction fluctuates - sometimes you feel little to none, other times noticeably more."],
    aego: ["Aegoromantic", "You can find the idea of romance appealing in a general or fictional sense, but don't feel a personal desire to be involved yourself. Also called autochorisromantic."],
    cupio: ["Cupioromantic", "You experience little to no romantic attraction, but still want a committed or partnership-like relationship."],
    none: ["Aromantic", "You experience little to no romantic attraction toward others. Aromantic people can still form deep, meaningful relationships - romance just isn't a need or a draw."],
    questioning: ["Questioning", "You're still figuring this one out, and that's completely fine."],
  },
};

const UMBRELLA = {
  sexual: { allo: "Allosexual", spec: "Asexual spectrum (Ace-spec)" },
  romantic: { allo: "Alloromantic", spec: "Aromantic spectrum (Aro-spec)" },
};

const MULTI_KEYS = ["bi", "pan", "omni", "poly"];

// ---------- engine ----------

const state = { nodeId: START_NODE, answers: {}, history: [] };
const els = {
  progress: document.getElementById("progress"),
  card: document.getElementById("quiz-card"),
  resultCard: document.getElementById("result-card"),
  backBtn: document.getElementById("back-btn"),
};

function renderProgress() {
  els.progress.innerHTML = "";
  state.history.forEach(() => {
    const dot = document.createElement("span");
    dot.className = "quiz-dot done";
    els.progress.appendChild(dot);
  });
  if (state.nodeId !== "end") {
    const dot = document.createElement("span");
    dot.className = "quiz-dot active";
    els.progress.appendChild(dot);
  }
}

function renderQuestion() {
  if (state.nodeId === "end") { renderResults(); return; }
  const node = NODES[state.nodeId];
  els.resultCard.classList.add("hidden");
  els.card.classList.remove("hidden");
  els.backBtn.classList.toggle("hidden", state.history.length === 0);
  renderProgress();

  els.card.innerHTML = `<p class="quiz-question">${node.text}</p><div class="quiz-options"></div>`;
  const optionsEl = els.card.querySelector(".quiz-options");
  node.options.forEach(opt => {
    const btn = document.createElement("button");
    btn.className = "quiz-option";
    btn.type = "button";
    btn.textContent = opt.label;
    btn.addEventListener("click", () => {
      state.history.push({ nodeId: state.nodeId, answers: { ...state.answers } });
      if (opt.set) Object.assign(state.answers, opt.set);
      state.nodeId = opt.next;
      renderQuestion();
    });
    optionsEl.appendChild(btn);
  });
}

els.backBtn.addEventListener("click", () => {
  const prev = state.history.pop();
  if (!prev) return;
  state.nodeId = prev.nodeId;
  state.answers = prev.answers;
  renderQuestion();
});

function buildResult(answers) {
  const labels = LABELS[QUIZ_AXIS];
  const umbrella = UMBRELLA[QUIZ_AXIS];
  const { presence, who, fluid, cupio, flex } = answers;

  let key;
  if (presence === "full") key = who;
  else if (presence === "none" && cupio) key = "cupio";
  else key = presence;
  if (!key || !labels[key]) key = "questioning";

  let flexNoteNeeded = false;
  if (presence === "full" && flex && (key === "hetero" || key === "homoMen" || key === "homoWomen")) {
    if (QUIZ_AXIS === "sexual") {
      key = key === "hetero" ? "heteroFlex" : "homoFlex";
    } else {
      flexNoteNeeded = true;
    }
  }

  const [display, baseDescription] = labels[key];
  // These presence types still walk the "who" sub-tree, so fold that
  // answer in as a note rather than throwing it away.
  const foldsInWho = ["gray", "demi", "lith", "recip", "flux"].includes(presence);
  let description = baseDescription;
  if (foldsInWho && who && labels[who]) {
    description += ` When it does happen: ${labels[who][1].charAt(0).toLowerCase()}${labels[who][1].slice(1)}`;
  }
  if (flexNoteNeeded) {
    description += " You're also somewhat open to other genders too.";
  }

  const umbrellaText = presence === "questioning" ? null : (presence === "full" ? umbrella.allo : umbrella.spec);
  const multiTag = presence === "full" && MULTI_KEYS.includes(who) ? "multisexual / bi+ umbrella" : null;

  return { display, description, umbrellaText, multiTag, fluid: !!fluid };
}

function renderResults() {
  els.card.classList.add("hidden");
  els.backBtn.classList.add("hidden");
  els.resultCard.classList.remove("hidden");
  renderProgress();

  const result = buildResult(state.answers);
  try {
    localStorage.setItem(`gender-quiz-${QUIZ_AXIS}`, JSON.stringify({ display: result.display, umbrellaText: result.umbrellaText }));
  } catch (e) {}
  const fluidLabel = QUIZ_AXIS === "sexual" ? "Abrosexual" : "Abroromantic";

  els.resultCard.innerHTML = `
    <p class="quiz-result-eyebrow">Your ${QUIZ_AXIS} orientation</p>
    <h2 class="quiz-result-headline">${result.display}</h2>
    <p class="quiz-result-desc-main">${result.description}</p>

    <div class="quiz-result-tags">
      ${result.umbrellaText ? `<span class="quiz-tag">Umbrella: ${result.umbrellaText}</span>` : ""}
      ${result.multiTag ? `<span class="quiz-tag alt">${result.multiTag}</span>` : ""}
    </div>

    ${result.fluid ? `
      <p class="quiz-result-callout">
        Your attraction is fluid (also called <strong>${fluidLabel}</strong>) - this label may shift day to day, month to month, or over your lifetime.
      </p>
    ` : ""}

    <p class="quiz-result-note">
      This is a fun, informal self-reflection tool - not a diagnosis or a final answer. Labels are
      only useful if they feel useful to you. See the <a href="../info.html">general info page</a>
      for a plain-language glossary of these terms.
    </p>

    <button id="retake-btn" class="quiz-retake-btn" type="button">Take it again</button>
  `;

  document.getElementById("retake-btn").addEventListener("click", () => {
    state.nodeId = START_NODE;
    state.answers = {};
    state.history = [];
    renderQuestion();
  });
}

renderQuestion();
