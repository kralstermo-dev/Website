// ============================================================
// CUTLE - slice a random shape into two equal halves
// A convex "blob" is generated each day (seeded, like the other
// dailies) or freshly for a random round. Drag a straight line across
// it - starting and ending outside the shape, like a real knife
// stroke - and the game clips the shape along that line to report
// what percentage of the area landed on each side. Get as close to a
// 50/50 split as you can within 5 cuts.
// ============================================================

const MAX_GUESSES = 5;
const CX = 150, CY = 150;
const SHAPE_R = 110;
const SLICE_OFFSET = 14; // px the two halves pop apart on a committed cut

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

// Ray-casting point-in-polygon test, used to require that a cut starts
// and ends outside the shape - like an actual knife stroke that
// enters and exits, rather than a partial cut stranded inside it.
function pointInPolygon(p, poly) {
  let inside = false;
  for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
    const xi = poly[i].x, yi = poly[i].y, xj = poly[j].x, yj = poly[j].y;
    const intersects = (yi > p.y) !== (yj > p.y) &&
      p.x < ((xj - xi) * (p.y - yi)) / (yj - yi) + xi;
    if (intersects) inside = !inside;
  }
  return inside;
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
  lastCut: null, // { a, b, halfA, halfB, settled } after a committed cut
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
  if (pointInPolygon(start, state.shape) || pointInPolygon(end, state.shape)) {
    showStatus("Start and end the drag outside the shape", true);
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
    // Only the literal segment the person is dragging - no extension.
    const { start, current } = dragState;
    lineSvg = `<line x1="${start.x.toFixed(1)}" y1="${start.y.toFixed(1)}" x2="${current.x.toFixed(1)}" y2="${current.y.toFixed(1)}" stroke="var(--ink-dim)" stroke-width="2" stroke-dasharray="6 5" />`;
  } else if (state.lastCut) {
    const { a, b, halfA, halfB, settled } = state.lastCut;
    // Perpendicular to the cut, so the two halves pop apart sideways.
    const dx = b.x - a.x, dy = b.y - a.y;
    const len = Math.hypot(dx, dy) || 1;
    const px = -dy / len, py = dx / len;
    const offA = settled ? { x: px * SLICE_OFFSET, y: py * SLICE_OFFSET } : { x: 0, y: 0 };
    const offB = settled ? { x: -px * SLICE_OFFSET, y: -py * SLICE_OFFSET } : { x: 0, y: 0 };

    // Each half carries its own stroke (including the fresh cut edge,
    // which is already part of its boundary from the clip) so the
    // outline travels with the piece instead of staying behind.
    halvesSvg = `
      <polygon id="cutle-half-a" points="${pointsAttr(halfA)}" fill="var(--accent)" opacity="0.55" stroke="var(--ink)" stroke-width="2"
        style="transition: transform 0.45s cubic-bezier(0.34,1.56,0.64,1); transform: translate(${offA.x.toFixed(2)}px, ${offA.y.toFixed(2)}px);" />
      <polygon id="cutle-half-b" points="${pointsAttr(halfB)}" fill="var(--accent-2)" opacity="0.55" stroke="var(--ink)" stroke-width="2"
        style="transition: transform 0.45s cubic-bezier(0.34,1.56,0.64,1); transform: translate(${offB.x.toFixed(2)}px, ${offB.y.toFixed(2)}px);" />
    `;
  }

  contentEl.innerHTML = `
    ${state.lastCut ? "" : `<polygon points="${shapePts}" fill="var(--bg-panel-hover)" stroke="var(--ink)" stroke-width="2" />`}
    ${halvesSvg}
    ${lineSvg}
  `;

  // First render after a fresh cut: the halves were just drawn at
  // translate(0,0) - nudge them apart on the next frame so the CSS
  // transition actually animates the "slice open" pop.
  if (state.lastCut && !state.lastCut.settled) {
    state.lastCut.settled = true;
    requestAnimationFrame(() => requestAnimationFrame(renderContent));
  }
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

  state.lastCut = { a, b, halfA, halfB, settled: false };
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
    showStatus("Sliced it clean!");
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
