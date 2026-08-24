// ============================================================
// CUTLE - slice a random shape into two equal halves
// A convex "blob" is generated each day (seeded, like the other
// dailies) or freshly for a random round. Drag a straight line across
// it and the game clips the shape along that line to report what
// percentage of the area landed on each side. Get as close to a
// 50/50 split as you can within 5 cuts.
// ============================================================

const MAX_GUESSES = 5;
const CX = 150, CY = 150;
const SHAPE_R = 110;
// Box the drawn line gets extended to, purely for drawing a full cut
// across the diagram - a little inset from the 300x300 viewBox.
const BOX = { minX: 10, minY: 10, maxX: 290, maxY: 290 };

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

// ---------- geometry helpers ----------

function cross(o, a, b) {
  return (a.x - o.x) * (b.y - o.y) - (a.y - o.y) * (b.x - o.x);
}

// Monotone-chain convex hull - turns a cloud of sample points into the
// convex polygon around them, so any straight cut always produces
// exactly two clean pieces (no weird multi-part slices).
function convexHull(points) {
  const pts = points.slice().sort((a, b) => (a.x === b.x ? a.y - b.y : a.x - b.x));
  const n = pts.length;
  if (n < 3) return pts;
  const lower = [];
  for (const p of pts) {
    while (lower.length >= 2 && cross(lower[lower.length - 2], lower[lower.length - 1], p) <= 0) lower.pop();
    lower.push(p);
  }
  const upper = [];
  for (let i = n - 1; i >= 0; i--) {
    const p = pts[i];
    while (upper.length >= 2 && cross(upper[upper.length - 2], upper[upper.length - 1], p) <= 0) upper.pop();
    upper.push(p);
  }
  lower.pop(); upper.pop();
  return lower.concat(upper);
}

function polygonArea(poly) {
  let a = 0;
  for (let i = 0; i < poly.length; i++) {
    const p1 = poly[i], p2 = poly[(i + 1) % poly.length];
    a += p1.x * p2.y - p2.x * p1.y;
  }
  return Math.abs(a) / 2;
}

// Which side of the infinite line through a->b a point falls on.
function side(p, a, b) {
  return (b.x - a.x) * (p.y - a.y) - (b.y - a.y) * (p.x - a.x);
}

function lineIntersect(p1, p2, p3, p4) {
  const d1x = p2.x - p1.x, d1y = p2.y - p1.y;
  const d2x = p4.x - p3.x, d2y = p4.y - p3.y;
  const denom = d1x * d2y - d1y * d2x;
  if (Math.abs(denom) < 1e-9) return p1;
  const t = ((p3.x - p1.x) * d2y - (p3.y - p1.y) * d2x) / denom;
  return { x: p1.x + t * d1x, y: p1.y + t * d1y };
}

// Sutherland-Hodgman clip of a convex polygon against the half-plane
// on one side of the cutting line a->b.
function clipHalf(poly, a, b, keepPositive) {
  const out = [];
  const n = poly.length;
  for (let i = 0; i < n; i++) {
    const cur = poly[i], nxt = poly[(i + 1) % n];
    const curSide = keepPositive ? side(cur, a, b) : -side(cur, a, b);
    const nxtSide = keepPositive ? side(nxt, a, b) : -side(nxt, a, b);
    if (curSide >= 0) out.push(cur);
    if ((curSide >= 0) !== (nxtSide >= 0)) {
      out.push(lineIntersect(cur, nxt, a, b));
    }
  }
  return out;
}

// Extends the drawn line out to the edges of the diagram box, purely
// so the cut is drawn all the way across the canvas.
function lineToBoxSegment(a, b) {
  const dx = b.x - a.x, dy = b.y - a.y;
  let t0 = -Infinity, t1 = Infinity;
  if (dx !== 0) {
    let tx1 = (BOX.minX - a.x) / dx, tx2 = (BOX.maxX - a.x) / dx;
    if (tx1 > tx2) [tx1, tx2] = [tx2, tx1];
    t0 = Math.max(t0, tx1); t1 = Math.min(t1, tx2);
  } else if (a.x < BOX.minX || a.x > BOX.maxX) {
    return null;
  }
  if (dy !== 0) {
    let ty1 = (BOX.minY - a.y) / dy, ty2 = (BOX.maxY - a.y) / dy;
    if (ty1 > ty2) [ty1, ty2] = [ty2, ty1];
    t0 = Math.max(t0, ty1); t1 = Math.min(t1, ty2);
  } else if (a.y < BOX.minY || a.y > BOX.maxY) {
    return null;
  }
  if (t0 > t1) return null;
  return {
    p1: { x: a.x + t0 * dx, y: a.y + t0 * dy },
    p2: { x: a.x + t1 * dx, y: a.y + t1 * dy },
  };
}

// ---------- shape generation ----------

// Convex hull of a scatter of points sampled uniformly inside a disk -
// gives an irregular, organic-looking "blob" that's always convex.
function shapeFromRng(rng) {
  const pts = [];
  const SAMPLES = 26;
  for (let i = 0; i < SAMPLES; i++) {
    const angle = rng() * Math.PI * 2;
    const r = SHAPE_R * Math.sqrt(rng());
    pts.push({ x: CX + r * Math.cos(angle), y: CY + r * Math.sin(angle) });
  }
  return convexHull(pts);
}

function getTodaysShape() {
  const rng = mulberry32(dayIndex(2113));
  return shapeFromRng(rng);
}

function randomShape() {
  return shapeFromRng(Math.random);
}

function tierFor(diff) {
  if (diff < 0.5) return "correct";
  if (diff <= 3) return "close";
  if (diff <= 8) return "warm";
  return "cold";
}

// ---------- state ----------

const state = {
  shape: getTodaysShape(),
  area: 0,
  guesses: [],
  gameOver: false,
  lastCut: null, // { seg, halfA, halfB } drawn after a committed cut
};
state.area = polygonArea(state.shape);

const diagramEl = document.getElementById("cutle-diagram");
const attemptsEl = document.getElementById("attempts-left");
const statusEl = document.getElementById("status");
const guessList = document.getElementById("guess-list");
const playAgainBtn = document.getElementById("play-again");

let svgEl = null;
let dragState = null; // { start, current }

function showStatus(msg, isError = false) {
  statusEl.textContent = msg;
  statusEl.classList.toggle("error", isError);
}

function pointsAttr(poly) {
  return poly.map(p => `${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(" ");
}

// The outer <svg> + capture rect are created once and never replaced,
// so pointer capture survives every re-render while dragging - only
// the inner <g> content is rewritten per frame.
function initDiagram() {
  diagramEl.innerHTML = `
    <svg id="cutle-svg" viewBox="0 0 300 300" width="100%" height="100%" style="touch-action:none; display:block;">
      <rect x="0" y="0" width="300" height="300" fill="transparent" />
      <g id="cutle-content"></g>
    </svg>
  `;
  svgEl = document.getElementById("cutle-svg");
  svgEl.addEventListener("pointerdown", onPointerDown);
  svgEl.addEventListener("pointermove", onPointerMove);
  svgEl.addEventListener("pointerup", onPointerUp);
  svgEl.addEventListener("pointercancel", onPointerUp);
  renderContent();
}

function toSvgPoint(evt) {
  const pt = svgEl.createSVGPoint();
  pt.x = evt.clientX;
  pt.y = evt.clientY;
  return pt.matrixTransform(svgEl.getScreenCTM().inverse());
}

function onPointerDown(e) {
  if (state.gameOver) return;
  e.preventDefault();
  const p = toSvgPoint(e);
  dragState = { start: p, current: p };
  svgEl.setPointerCapture(e.pointerId);
  showStatus("");
  renderContent();
}

function onPointerMove(e) {
  if (!dragState) return;
  dragState.current = toSvgPoint(e);
  renderContent();
}

function onPointerUp(e) {
  if (!dragState) return;
  const start = dragState.start;
  const end = toSvgPoint(e);
  dragState = null;

  const dist = Math.hypot(end.x - start.x, end.y - start.y);
  if (dist < 8) {
    showStatus("Drag further across the shape to cut it", true);
    renderContent();
    return;
  }
  commitCut(start, end);
}

function renderContent() {
  const contentEl = document.getElementById("cutle-content");
  const shapePts = pointsAttr(state.shape);
  let halvesSvg = "";
  let lineSvg = "";

  if (dragState) {
    const seg = lineToBoxSegment(dragState.start, dragState.current);
    if (seg) {
      lineSvg = `<line x1="${seg.p1.x.toFixed(1)}" y1="${seg.p1.y.toFixed(1)}" x2="${seg.p2.x.toFixed(1)}" y2="${seg.p2.y.toFixed(1)}" stroke="var(--ink-dim)" stroke-width="2" stroke-dasharray="6 5" />`;
    }
  } else if (state.lastCut) {
    const { seg, halfA, halfB } = state.lastCut;
    halvesSvg = `
      <polygon points="${pointsAttr(halfA)}" fill="var(--accent)" opacity="0.55" />
      <polygon points="${pointsAttr(halfB)}" fill="var(--accent-2)" opacity="0.55" />
    `;
    lineSvg = `<line x1="${seg.p1.x.toFixed(1)}" y1="${seg.p1.y.toFixed(1)}" x2="${seg.p2.x.toFixed(1)}" y2="${seg.p2.y.toFixed(1)}" stroke="var(--danger)" stroke-width="3" stroke-linecap="round" />`;
  }

  contentEl.innerHTML = `
    <polygon points="${shapePts}" fill="${state.lastCut ? "none" : "var(--bg-panel-hover)"}" stroke="var(--ink)" stroke-width="2" />
    ${halvesSvg}
    ${lineSvg}
  `;
}

function commitCut(a, b) {
  const halfA = clipHalf(state.shape, a, b, true);
  const halfB = clipHalf(state.shape, a, b, false);
  const areaA = polygonArea(halfA);
  const areaB = polygonArea(halfB);
  const pctA = (areaA / state.area) * 100;
  const pctB = (areaB / state.area) * 100;
  const smaller = Math.min(pctA, pctB);
  const larger = Math.max(pctA, pctB);
  const diff = 50 - smaller;
  const tier = tierFor(diff);
  const isCorrect = diff < 0.5;
  const seg = lineToBoxSegment(a, b) || { p1: a, p2: b };

  state.lastCut = { seg, halfA, halfB };
  state.guesses.push({ smaller, larger, diff, tier, isCorrect });

  renderContent();
  renderGuessRow(smaller, larger, tier, isCorrect);
  attemptsEl.textContent = `${MAX_GUESSES - state.guesses.length} cuts left`;

  if (isCorrect) {
    endGame(true);
    return;
  }
  if (state.guesses.length >= MAX_GUESSES) {
    endGame(false);
  }
}

function renderGuessRow(smaller, larger, tier, isCorrect) {
  const row = document.createElement("div");
  row.className = "cutle-row" + (isCorrect ? " correct" : "");
  const tierLabel = tier.charAt(0).toUpperCase() + tier.slice(1);
  row.innerHTML = `
    <span class="cutle-value">${smaller.toFixed(1)}% / ${larger.toFixed(1)}%</span>
    <span class="cf-channel cf-${tier}">${isCorrect ? "Perfect!" : tierLabel}</span>
  `;
  guessList.prepend(row);
}

function endGame(won) {
  state.gameOver = true;
  playAgainBtn.classList.add("show");
  if (won) {
    showStatus("Sliced it clean! \uD83D\uDD2A");
  } else {
    const best = state.guesses.reduce((b, g) => (g.diff < b.diff ? g : b), state.guesses[0]);
    showStatus(`Out of cuts - your best split was ${best.smaller.toFixed(1)}% / ${best.larger.toFixed(1)}%`);
  }
}

playAgainBtn.addEventListener("click", () => {
  state.shape = randomShape();
  state.area = polygonArea(state.shape);
  state.guesses = [];
  state.gameOver = false;
  state.lastCut = null;
  dragState = null;
  guessList.innerHTML = "";
  playAgainBtn.classList.remove("show");
  showStatus("Drag across the shape to make your cut");
  attemptsEl.textContent = `${MAX_GUESSES - state.guesses.length} cuts left`;
  renderContent();
});

attemptsEl.textContent = `${MAX_GUESSES - state.guesses.length} cuts left`;
initDiagram();
