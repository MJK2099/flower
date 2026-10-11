/* ==========================================================
   A Universe That Blooms for You — script.js
   Pure vanilla JavaScript. No libraries, no build step.

   ✏️  EDIT EVERYTHING YOU WANT IN THE "CONFIG" BELOW:
       names, messages, the letter, the game, the finale.
   ========================================================== */
'use strict';

const CONFIG = {
  /* ---------- names ---------- */
  herName: 'Thirandee',
  herFullName: 'Thirandee Piyara',
  hisName: 'Janaka',
  hisFullName: 'Janaka Herath',

  /* ---------- first screen ---------- */
  intro: {
    line1: 'Somewhere between a million stars and a thousand flowers...',
    line2: 'I made a little universe just for you, Thirandee. 💜',
    button: 'Enter My Little World ✨'
  },

  /* ---------- the garden ---------- */
  garden: {
    title: 'A Universe That Blooms for You, Thirandee 💜',
    subtitle: 'Touch the glowing flower. It has been waiting for you. 🌙',
    heroHint: 'tap me',
    bouquetNote: 'I wish I could hand you these flowers in person. Until then, I made a little garden that blooms whenever you touch it.',
    bloomButton: 'Make My Bouquet Bloom 🌸',
    letterButton: '💌 Open My Letter',
    gameButton: '🎀 Sweetness Test',
    finaleButton: '✨ Look up at the sky ✨',
    unlockHint: 'Discover 5 flowers (or open the letter) and something will bloom in the sky…',
    unlockedToast: 'Something is blooming in the sky… ✨ Tap the glowing button!',
    unlockAfter: 5                      // how many flowers unlock the finale
  },

  /* ---------- messages inside the bouquet flowers (7 of them) ---------- */
  bouquetMessages: [
    'Every petal here is a thing I adore about you. I ran out of petals before I ran out of reasons.',
    'Your laugh is my favourite sound — on any device, across any distance.',
    "A tiny voice in me says 'text her' about forty times a day. I obey.",
    'Thirandee: 10 out of 10, would think about again. Constantly. Without stopping.',
    'You make ordinary days feel like someone sprinkled glitter on them.',
    "I'm saving a seat for you in every future I imagine.",
    'Gentle reminder: you are loved — today, tomorrow, and in every time zone.'
  ],

  /* ---------- secret flowers in the meadow (x = % across, h = stem height px, size = flower px) ---------- */
  secretFlowers: [
    { x: 7,  h: 120, size: 66, palette: 'violet', msg: 'You are officially my favourite notification.' },
    { x: 20, h: 175, size: 74, palette: 'pink',   msg: 'If hugs travelled through Wi-Fi, you would never escape me.' },
    { x: 33, h: 100, size: 62, palette: 'lilac',  msg: 'You deserve flowers even on completely ordinary days.' },
    { x: 46, h: 155, size: 78, palette: 'moon',   msg: 'Warning: dangerously adorable girl detected. 💜' },
    { x: 58, h: 112, size: 64, palette: 'deep',   msg: 'This flower belongs to you. No refunds, no exchanges.' },
    { x: 70, h: 178, size: 72, palette: 'pink',   msg: 'Distance is just love taking the scenic route.' },
    { x: 83, h: 105, size: 62, palette: 'violet', msg: "I asked the stars who's the brightest thing I know. They pointed at you." },
    { x: 94, h: 150, size: 70, palette: 'lilac',  msg: "Plot twist: you're my favourite person AND my favourite place to be." }
  ],

  /* ---------- the antique love letter (each string = one paragraph) ---------- */
  letter: {
    first: 'My dearest Thirandee,',
    paragraphs: [
      "I've tried to write this letter so many times, and every time I start, I smile too hard to finish.",
      "Being apart is the hardest part of us. There are days I would give anything to simply sit beside you doing nothing at all — because with you, 'nothing' becomes my favourite thing to do.",
      "But even from different places, you find a way to arrive in my day. A message, a laugh, a thought of you out of nowhere — and suddenly everything feels lighter, softer, and more hopeful.",
      "You are kind in a quiet and real way. You are beautiful without even trying. And you have a heart I am honestly grateful to be trusted with.",
      "I can't promise distance will always be easy. But I can promise I will keep choosing you — on the easy days, on the tired days, and on the ordinary days that deserve flowers too.",
      "So I built you this little universe, because a girl who blooms like you deserves a whole garden. Until I can hand you real flowers, let these ones stay with you."
    ],
    closing: 'Always yours,',
    signature: 'Janaka 💜'
  },

  /* ---------- the sweetness game ---------- */
  game: {
    intro: 'Sweetness Test 🍯',
    questions: [
      { q: "It's 2 AM and Janaka texts: “you awake?” You…",
        options: [
          { t: "Reply instantly: “Always for you 💜”", p: 3, r: "Instant reply. He is now smiling at his phone like a fool." },
          { t: "Send a sleepy “mhm” and a sticker",    p: 2, r: "Sleepy-Thirandee is also adorable. Rude." },
          { t: "Pretend to be asleep (but you saw it)", p: 1, r: "He knows. He will wait. He is very patient." }
        ] },
      { q: "Which flower are you most like?",
        options: [
          { t: "Lavender — calm and sweet",          p: 3, r: "Soothing everyone around you. Typical." },
          { t: "Orchid — elegant and rare",          p: 2, r: "Rare is correct. One of one." },
          { t: "Wildflower — chaotic but beautiful", p: 3, r: "Chaotic AND beautiful. Dangerous combo." }
        ] },
      { q: "Janaka teleports to you right now. First thing you do?",
        options: [
          { t: "Hug him and refuse to let go",       p: 3, r: "Hug accepted. Release date: never." },
          { t: "Check if he brought snacks",         p: 2, r: "Priorities. Respect." },
          { t: "Take 47 selfies together",           p: 2, r: "Evidence for the scrapbook. Smart girl." }
        ] },
      { q: "Pick the perfect date night:",
        options: [
          { t: "Stargazing on a quiet rooftop",             p: 3, r: "Stars first, then you. He'd still look at you." },
          { t: "Same movie, long video call, shared snacks", p: 3, r: "Long-distance classic. 10/10." },
          { t: "Midnight snacks and terrible jokes",         p: 2, r: "The jokes will be terrible. The night will be perfect." }
        ] },
      { q: "How often do you think Janaka thinks about you?",
        options: [
          { t: "About a hundred times a day",      p: 2, r: "Rounding down, but nice try." },
          { t: "Too many to count. He gave up.",   p: 3, r: "Correct. He lost count in 2019." },
          { t: "Zero. (Don't tell him I said that.)", p: 1, r: "Nice try. The system has detected lies. 💜" }
        ] }
    ],
    results: [
      { min: 0,  title: 'Certified Sweetheart 🍬',        text: "You scored high enough to melt a small iceberg. The research is clear: you're lovely." },
      { min: 9,  title: 'Dangerously Adorable 🌷',        text: "Scientists are alarmed. Janaka is not — he has been fully, happily doomed for a while now." },
      { min: 13, title: 'Maximum Sugar · Moonlit Sweetheart 🌙', text: "The scale only goes to 100%. It has been broken. Please do not ask Janaka to fix it." }
    ],
    rewardButton: 'Open your secret reward 🎁',
    reward: {
      title: '🎟️ One Magic Coupon',
      text: 'Valid for one surprise voice note from Janaka, one long “I miss you” call, and one virtual hug of unlimited duration. Redeem any time, no expiry, no refunds (see: the flower rule).'
    }
  },

  /* ---------- the final scene ---------- */
  finale: {
    main: "If I could give you one thing in this world, it would be the ability to see yourself through my eyes, even for a moment. Maybe then you'd understand how special you are to me.",
    sub: 'Different places. One little universe. You and me. 💜',
    sign: 'Made with love, just for you.<br>— Janaka'
  }
};

/* ==========================================================
   Small helpers
   ========================================================== */
const $  = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
const rand = (a, b) => a + Math.random() * (b - a);
const pick = a => a[Math.floor(Math.random() * a.length)];
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const TAU = Math.PI * 2;

function el(tag, cls, html) {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (html != null) e.innerHTML = html;
  return e;
}
function centerOf(node) {
  const r = node.getBoundingClientRect();
  return { x: r.left + r.width / 2, y: r.top + r.height / 2 };
}

/* ==========================================================
   FLOWER ILLUSTRATIONS (SVG, built in code)
   ========================================================== */
const GRADIENTS = {            // [outer petal base→tip], [inner petal base→tip]
  violet: [['#4a1fa8', '#a97bff'], ['#8a5bff', '#e6d4ff']],
  lilac:  [['#7d52e8', '#d7b8ff'], ['#b898ff', '#f6ecff']],
  pink:   [['#b83f93', '#ff9fd8'], ['#e86cb8', '#ffe0f3']],
  deep:   [['#2c1066', '#7a4be0'], ['#5b34b8', '#b79aff']],
  moon:   [['#a58ff0', '#ffffff'], ['#d6c9ff', '#ffffff']]
};
(function injectGradients() {
  const g = (id, [a, b]) => `<linearGradient id="${id}" x1="0" y1="1" x2="0" y2="0"><stop offset="0" stop-color="${a}"/><stop offset="1" stop-color="${b}"/></linearGradient>`;
  let s = '<svg width="0" height="0" style="position:absolute" aria-hidden="true"><defs>';
  for (const [name, [o, i]] of Object.entries(GRADIENTS)) s += g(name + '-o', o) + g(name + '-i', i);
  s += '<radialGradient id="core"><stop offset="0" stop-color="#fffbe8"/><stop offset=".55" stop-color="#ffe3a3"/><stop offset="1" stop-color="#d9a441"/></radialGradient>';
  s += '</defs></svg>';
  document.body.insertAdjacentHTML('afterbegin', s);
})();

const PETAL = 'M50 50 C36 40 34 16 50 4 C66 16 64 40 50 50Z';
function flowerSVG(palette = 'violet', petals = 10) {
  let g = '';
  for (let i = 0; i < petals; i++) {
    g += `<g class="p" style="--r:${(i * 360 / petals).toFixed(1)}deg;--i:${i}"><path d="${PETAL}" fill="url(#${palette}-o)"/></g>`;
  }
  for (let i = 0; i < petals; i++) {
    g += `<g class="p" style="--r:${((i + 0.5) * 360 / petals).toFixed(1)}deg;--i:${i + Math.round(petals * 0.5)}"><path d="${PETAL}" fill="url(#${palette}-i)" transform="translate(50 50) scale(.62) translate(-50 -50)"/></g>`;
  }
  let dots = '';
  for (let i = 0; i < 8; i++) {
    const a = i / 8 * TAU;
    dots += `<circle cx="${(50 + Math.cos(a) * 9.5).toFixed(1)}" cy="${(50 + Math.sin(a) * 9.5).toFixed(1)}" r="1.5" fill="#ffe3a3"/>`;
  }
  return `<svg class="flower-svg" viewBox="0 0 100 100" aria-hidden="true">${g}<circle class="core" cx="50" cy="50" r="7" fill="url(#core)"/>${dots}</svg>`;
}

/* ==========================================================
   CANVAS PARTICLE ENGINE
   layers: stars · bokeh (parallax) · petals · fireflies · bursts
   ========================================================== */
const FX = (() => {
  const cv = $('#fx');
  const c = cv.getContext('2d');
  let W = 0, H = 0, dpr = 1, raf = 0, last = 0, running = false, rising = false, riseAcc = 0;
  const ptr = { x: 0, y: 0, px: -999, py: -999 };       // x,y smoothed (-.5….5) · px,py in pixels
  const target = { x: 0, y: 0 };
  const SP = reduceMotion ? 0.35 : 1;                     // global speed multiplier
  const COLORS = ['190,140,255', '225,200,255', '255,170,222', '160,120,250', '255,226,170', '235,235,255'];
  const cache = {};
  const stars = [], bokeh = [], flies = [], petals = [], parts = [];
  const MAXP = 900;

  /* ----- pre-rendered sprites keep drawing fast ----- */
  function glowSprite(rgb, s = 64) {
    const k = 'g' + rgb + s;
    if (cache[k]) return cache[k];
    const cn = document.createElement('canvas'); cn.width = cn.height = s;
    const g = cn.getContext('2d'), r = s / 2;
    const gr = g.createRadialGradient(r, r, 0, r, r, r);
    gr.addColorStop(0, `rgba(${rgb},1)`); gr.addColorStop(0.25, `rgba(${rgb},.55)`); gr.addColorStop(1, `rgba(${rgb},0)`);
    g.fillStyle = gr; g.fillRect(0, 0, s, s);
    return (cache[k] = cn);
  }
  function bokehSprite(rgb, s = 128) {
    const k = 'b' + rgb + s;
    if (cache[k]) return cache[k];
    const cn = document.createElement('canvas'); cn.width = cn.height = s;
    const g = cn.getContext('2d'), r = s / 2;
    const gr = g.createRadialGradient(r, r, 0, r, r, r);
    gr.addColorStop(0, `rgba(${rgb},.10)`); gr.addColorStop(0.7, `rgba(${rgb},.22)`);
    gr.addColorStop(0.93, `rgba(${rgb},.55)`); gr.addColorStop(1, `rgba(${rgb},0)`);
    g.fillStyle = gr; g.beginPath(); g.arc(r, r, r, 0, TAU); g.fill();
    return (cache[k] = cn);
  }
  function petalPath(s) {
    c.beginPath();
    c.moveTo(0, -s);
    c.bezierCurveTo(s * 0.9, -s * 0.7, s * 0.7, s * 0.6, 0, s);
    c.bezierCurveTo(-s * 0.7, s * 0.6, -s * 0.9, -s * 0.7, 0, -s);
    c.closePath();
  }
  function heartPath(s) {
    c.beginPath();
    c.moveTo(0, s * 0.35);
    c.bezierCurveTo(-s, -s * 0.3, -s * 0.5, -s, 0, -s * 0.45);
    c.bezierCurveTo(s * 0.5, -s, s, -s * 0.3, 0, s * 0.35);
    c.closePath();
  }

  /* ----- seeding ----- */
  function seed() {
    const small = W < 700;
    stars.length = bokeh.length = flies.length = petals.length = 0;
    const nS = small ? 70 : 140;
    const nB = reduceMotion ? 10 : (small ? 15 : 28);
    const nF = reduceMotion ? 8 : (small ? 12 : 22);
    const nP = reduceMotion ? 10 : (small ? 18 : 32);
    for (let i = 0; i < nS; i++) stars.push({ x: rand(0, W), y: rand(0, H), r: rand(0.4, 1.5), ph: rand(0, TAU), sp: rand(0.6, 2.2), d: rand(0.2, 1) });
    for (let i = 0; i < nB; i++) bokeh.push({ x: rand(0, W), y: rand(0, H), r: rand(18, 90), d: rand(0.15, 1), vx: rand(-6, 6), vy: rand(-10, -2), ph: rand(0, TAU), sp: rand(0.3, 1), a: rand(0.25, 0.8), rgb: pick(COLORS) });
    for (let i = 0; i < nF; i++) flies.push({ x: rand(0, W), y: rand(0, H), a: rand(0, TAU), v: rand(14, 36), s: rand(16, 34), ph: rand(0, TAU), rgb: pick(['255,226,170', '255,200,240', '210,180,255']) });
    for (let i = 0; i < nP; i++) petals.push(newPetal(true));
  }
  function newPetal(anywhere) {
    return { x: rand(0, W), y: anywhere ? rand(-20, H) : -20, s: rand(5, 13), rot: rand(0, TAU), rs: rand(-1.2, 1.2), vy: rand(14, 42), vx: rand(-8, 8),
             ph: rand(0, TAU), sw: rand(10, 28), fl: rand(0, TAU), fs: rand(1, 2.5), rgb: pick(['200,160,255', '235,205,255', '255,185,230', '170,130,250']), al: rand(0.35, 0.8) };
  }

  function resize() {
    const oldW = W;
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    W = window.innerWidth; H = window.innerHeight;
    cv.width = Math.round(W * dpr); cv.height = Math.round(H * dpr);
    if (!oldW || Math.abs(W - oldW) > 120) seed();
  }

  /* ----- layer drawing ----- */
  function drawStars(t) {
    c.globalCompositeOperation = 'source-over';
    c.fillStyle = '#f2eaff';
    for (const s of stars) {
      c.globalAlpha = (0.3 + 0.7 * (0.5 + 0.5 * Math.sin(t * s.sp + s.ph))) * 0.9;
      c.beginPath(); c.arc(s.x - ptr.x * 14 * s.d, s.y - ptr.y * 10 * s.d, s.r, 0, TAU); c.fill();
    }
  }
  function drawBokeh(dt, t) {
    c.globalCompositeOperation = 'lighter';
    for (const b of bokeh) {
      b.x += b.vx * dt * SP; b.y += b.vy * dt * SP;
      const m = b.r * 2;
      if (b.y < -m) b.y = H + m;
      if (b.x < -m) b.x = W + m; else if (b.x > W + m) b.x = -m;
      const pulse = 0.5 + 0.5 * Math.sin(t * b.sp + b.ph);
      const sz = b.r * 2 * (0.92 + 0.12 * pulse);
      c.globalAlpha = b.a * (0.55 + 0.45 * pulse);
      c.drawImage(bokehSprite(b.rgb), b.x - ptr.x * 70 * b.d - sz / 2, b.y - ptr.y * 50 * b.d - sz / 2, sz, sz);
    }
  }
  function drawPetals(dt) {
    c.globalCompositeOperation = 'source-over';
    for (let i = 0; i < petals.length; i++) {
      const p = petals[i];
      p.ph += dt * 0.9 * SP; p.fl += dt * p.fs * SP;
      p.y += p.vy * dt * SP;
      p.x += (Math.sin(p.ph) * p.sw + p.vx) * dt * SP;
      p.rot += p.rs * dt * SP;
      const dx = p.x - ptr.px, dy = p.y - ptr.py, d2 = dx * dx + dy * dy;      // gentle push away from pointer
      if (d2 < 14400 && d2 > 1) { const d = Math.sqrt(d2), f = (120 - d) * dt * 2.2; p.x += dx / d * f; p.y += dy / d * f; }
      if (p.y > H + 30 || p.x < -40 || p.x > W + 40) { petals[i] = newPetal(false); continue; }
      c.save();
      c.translate(p.x, p.y); c.rotate(p.rot); c.scale(Math.cos(p.fl), 1);
      c.globalAlpha = p.al; c.fillStyle = `rgba(${p.rgb},1)`;
      petalPath(p.s); c.fill();
      c.restore();
    }
  }
  function drawFlies(dt, t) {
    c.globalCompositeOperation = 'lighter';
    for (const f of flies) {
      f.a += (Math.random() - 0.5) * dt * 8;
      f.x += Math.cos(f.a) * f.v * dt * SP; f.y += Math.sin(f.a) * f.v * dt * SP;
      const dx = ptr.px - f.x, dy = ptr.py - f.y, d = Math.hypot(dx, dy);        // curious fireflies drift toward you
      if (d < 220 && d > 40) { f.x += dx / d * 20 * dt * SP; f.y += dy / d * 20 * dt * SP; }
      if (f.x < -30) f.x = W + 30; else if (f.x > W + 30) f.x = -30;
      if (f.y < -30) f.y = H + 30; else if (f.y > H + 30) f.y = -30;
      const pulse = 0.35 + 0.65 * (0.5 + 0.5 * Math.sin(t * 2 + f.ph));
      const px = f.x - ptr.x * 30, py = f.y - ptr.y * 20;
      c.globalAlpha = pulse;
      c.drawImage(glowSprite(f.rgb), px - f.s / 2, py - f.s / 2, f.s, f.s);
      c.globalAlpha = pulse * 0.9; c.fillStyle = '#fff';
      c.beginPath(); c.arc(px, py, 1.3, 0, TAU); c.fill();
    }
  }
  function stepParts(dt) {
    for (let i = parts.length - 1; i >= 0; i--) {
      const p = parts[i];
      p.life -= dt;
      if (p.life <= 0) { parts[i] = parts[parts.length - 1]; parts.pop(); continue; }
      const k = p.life / p.max;
      if (p.type === 'spark') {
        p.vy += p.g * dt; p.x += p.vx * dt; p.y += p.vy * dt; p.vx *= 0.985;
        const sz = p.s * (0.4 + 0.6 * k);
        c.globalCompositeOperation = 'lighter'; c.globalAlpha = k;
        c.drawImage(glowSprite(p.rgb), p.x - sz / 2, p.y - sz / 2, sz, sz);
      } else if (p.type === 'heart') {
        p.x += (p.vx + Math.sin((p.max - p.life) * 3 + p.ph) * 18) * dt; p.y += p.vy * dt;
        c.globalCompositeOperation = 'source-over'; c.globalAlpha = Math.min(1, k * 1.6);
        c.save(); c.translate(p.x, p.y); c.rotate(Math.sin(p.ph + p.life * 2) * 0.35);
        c.fillStyle = `rgba(${p.rgb},1)`; heartPath(p.s); c.fill(); c.restore();
      } else if (p.type === 'swirl') {
        p.ang += p.av * dt; p.rad += p.rv * dt; p.cy -= p.up * dt;
        p.x = p.cx + Math.cos(p.ang) * p.rad; p.y = p.cy + Math.sin(p.ang) * p.rad * 0.6;
        c.globalCompositeOperation = 'lighter'; c.globalAlpha = k * 0.7;
        c.drawImage(glowSprite(p.rgb), p.x - p.s * 1.6, p.y - p.s * 1.6, p.s * 3.2, p.s * 3.2);
        c.globalCompositeOperation = 'source-over'; c.globalAlpha = Math.min(1, k * 1.5);
        c.save(); c.translate(p.x, p.y); c.rotate(p.ang + 1.2); c.fillStyle = `rgba(${p.rgb},1)`; petalPath(p.s); c.fill(); c.restore();
      } else if (p.type === 'rise') {
        p.x += (p.vx + Math.sin(p.life * 2 + p.ph) * 14) * dt; p.y += p.vy * dt; p.rot += p.rs * dt;
        const a = Math.min(1, (p.max - p.life) * 1.5, p.life * 1.2) * 0.9;
        c.globalCompositeOperation = 'lighter'; c.globalAlpha = a * 0.7;
        c.drawImage(glowSprite(p.rgb), p.x - p.s * 1.5, p.y - p.s * 1.5, p.s * 3, p.s * 3);
        c.globalCompositeOperation = 'source-over'; c.globalAlpha = a;
        c.save(); c.translate(p.x, p.y); c.rotate(p.rot); c.fillStyle = `rgba(${p.rgb},1)`; petalPath(p.s * 0.8); c.fill(); c.restore();
      }
    }
  }
  function spawnRise(dt) {
    const rate = reduceMotion ? 18 : (W < 700 ? 55 : 90);
    riseAcc += dt * rate;
    while (riseAcc >= 1) {
      riseAcc -= 1;
      if (parts.length > MAXP) return;
      const vy = -rand(70, 210);
      parts.push({ type: 'rise', x: rand(0, W), y: H + 12, vx: rand(-12, 12), vy, life: Math.min(9, (H + 40) / -vy), max: 9, s: rand(6, 14), rot: rand(0, TAU), rs: rand(-2, 2), ph: rand(0, TAU), rgb: pick(COLORS) });
      parts[parts.length - 1].max = parts[parts.length - 1].life;
    }
  }

  /* ----- main loop (requestAnimationFrame; paused when tab is hidden) ----- */
  function frame(ts) {
    if (!running) return;
    raf = requestAnimationFrame(frame);
    const dt = Math.min(0.05, (ts - last) / 1000 || 0.016); last = ts;
    ptr.x += (target.x - ptr.x) * 0.05; ptr.y += (target.y - ptr.y) * 0.05;
    c.setTransform(dpr, 0, 0, dpr, 0, 0);
    c.globalAlpha = 1; c.globalCompositeOperation = 'source-over';
    c.clearRect(0, 0, W, H);
    const t = ts / 1000;
    drawStars(t); drawBokeh(dt, t); drawPetals(dt); drawFlies(dt, t); stepParts(dt);
    if (rising) spawnRise(dt);
  }
  function start() { if (running) return; running = true; last = performance.now(); raf = requestAnimationFrame(frame); }
  function stop()  { running = false; cancelAnimationFrame(raf); }

  /* ----- public effects ----- */
  function burst(x, y, n = 30, list = COLORS) {
    n = Math.round(n * (reduceMotion ? 0.4 : 1));
    for (let i = 0; i < n && parts.length < MAXP; i++) {
      const a = rand(0, TAU), sp = rand(60, 260);
      parts.push({ type: 'spark', x, y, vx: Math.cos(a) * sp, vy: Math.sin(a) * sp - 30, g: 70, life: 0, max: rand(0.7, 1.6), s: rand(12, 30), rgb: pick(list) });
      parts[parts.length - 1].life = parts[parts.length - 1].max;
    }
  }
  function hearts(x, y, n = 6) {
    n = Math.round(n * (reduceMotion ? 0.5 : 1));
    for (let i = 0; i < n && parts.length < MAXP; i++) {
      const m = rand(1.6, 2.8);
      parts.push({ type: 'heart', x: x + rand(-14, 14), y, vx: rand(-20, 20), vy: -rand(40, 120), life: m, max: m, s: rand(5, 11), ph: rand(0, TAU), rgb: pick(['255,170,222', '200,150,255', '255,205,235', '255,226,170']) });
    }
  }
  function swirl(x, y, n = 30) {
    n = Math.round(n * (reduceMotion ? 0.4 : 1));
    for (let i = 0; i < n && parts.length < MAXP; i++) {
      const m = rand(1.8, 3.2);
      parts.push({ type: 'swirl', cx: x, cy: y, x, y, ang: rand(0, TAU), rad: rand(4, 24), rv: rand(30, 120), av: rand(2.2, 4.2) * (Math.random() < 0.5 ? 1 : -1), up: rand(10, 50), life: m, max: m, s: rand(5, 11), rgb: pick(COLORS) });
    }
  }
  function sparkAt(x, y) {
    if (parts.length > MAXP) return;
    parts.push({ type: 'spark', x, y, vx: rand(-14, 14), vy: rand(-26, -4), g: 18, life: 0.8, max: 0.8, s: rand(10, 18), rgb: pick(COLORS) });
  }
  function setRising(v) { rising = v; riseAcc = 0; }

  /* ----- input ----- */
  let lastTrail = 0, idleT = 0;
  window.addEventListener('pointermove', e => {
    ptr.px = e.clientX; ptr.py = e.clientY;
    target.x = e.clientX / W - 0.5; target.y = e.clientY / H - 0.5;
    clearTimeout(idleT); idleT = setTimeout(() => { ptr.px = ptr.py = -999; }, 2500);
    if (reduceMotion) return;
    const now = performance.now();
    if (now - lastTrail > 45) { lastTrail = now; sparkAt(e.clientX, e.clientY); }
  }, { passive: true });
  window.addEventListener('pointerdown', e => { ptr.px = e.clientX; ptr.py = e.clientY; }, { passive: true });
  window.addEventListener('resize', () => { clearTimeout(resize.t); resize.t = setTimeout(resize, 150); });
  document.addEventListener('visibilitychange', () => {
    document.body.classList.toggle('paused', document.hidden);
    document.hidden ? stop() : start();
  });

  resize(); start();
  return { burst, hearts, swirl, setRising };
})();

/* ==========================================================
   SOFT AMBIENT MUSIC (generated with Web Audio — no files, never autoplays)
   ========================================================== */
const Music = (() => {
  let ctx = null, master = null, wet = null, chordT = 0, bellT = 0, on = false, step = 0;
  const CHORDS = [[130.81, 196.0, 261.63, 329.63], [110.0, 164.81, 220.0, 261.63], [87.31, 130.81, 174.61, 261.63], [98.0, 146.83, 196.0, 246.94]];
  const BELLS = [523.25, 587.33, 659.25, 783.99, 880.0, 1046.5];

  function pad(freqs) {
    const now = ctx.currentTime;
    freqs.forEach((f, i) => {
      const o = ctx.createOscillator(), g = ctx.createGain(), lp = ctx.createBiquadFilter();
      o.type = i % 2 ? 'triangle' : 'sine'; o.frequency.value = f; o.detune.value = rand(-7, 7);
      lp.type = 'lowpass'; lp.frequency.value = 900;
      g.gain.setValueAtTime(0.0001, now);
      g.gain.linearRampToValueAtTime(0.07, now + 2.4);
      g.gain.linearRampToValueAtTime(0.0001, now + 8);
      o.connect(lp); lp.connect(g); g.connect(master); g.connect(wet);
      o.start(now); o.stop(now + 8.2);
    });
  }
  function bell() {
    const now = ctx.currentTime, f = pick(BELLS);
    [1, 2.01].forEach((m, i) => {
      const o = ctx.createOscillator(), g = ctx.createGain();
      o.type = 'sine'; o.frequency.value = f * m;
      g.gain.setValueAtTime(0.0001, now);
      g.gain.exponentialRampToValueAtTime(i ? 0.015 : 0.05, now + 0.02);
      g.gain.exponentialRampToValueAtTime(0.0001, now + 3.2);
      o.connect(g); g.connect(master); g.connect(wet);
      o.start(now); o.stop(now + 3.3);
    });
  }
  function build() {
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return false;
    ctx = new AC();
    master = ctx.createGain(); master.gain.value = 0; master.connect(ctx.destination);
    const delay = ctx.createDelay(1); delay.delayTime.value = 0.42;
    const fb = ctx.createGain(); fb.gain.value = 0.4;
    wet = ctx.createGain(); wet.gain.value = 0.35;
    wet.connect(delay); delay.connect(fb); fb.connect(delay); delay.connect(master);
    return true;
  }
  function tickChord() { pad(CHORDS[step++ % CHORDS.length]); }
  function tickBell()  { bell(); bellT = setTimeout(tickBell, rand(1800, 4200)); }

  async function start() {
    if (!ctx && !build()) return false;
    await ctx.resume();
    master.gain.cancelScheduledValues(ctx.currentTime);
    master.gain.linearRampToValueAtTime(0.55, ctx.currentTime + 2);
    tickChord(); chordT = setInterval(tickChord, 6500);
    bellT = setTimeout(tickBell, 1200);
    on = true; return true;
  }
  function stop() {
    on = false; clearInterval(chordT); clearTimeout(bellT);
    if (ctx) {
      master.gain.cancelScheduledValues(ctx.currentTime);
      master.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.8);
      setTimeout(() => { if (!on && ctx) ctx.suspend(); }, 1000);
    }
  }
  document.addEventListener('visibilitychange', () => {
    if (!ctx) return;
    if (document.hidden) ctx.suspend(); else if (on) ctx.resume();
  });
  return { toggle: () => (on ? (stop(), false) : start()), get on() { return on; } };
})();

/* ==========================================================
   THE EXPERIENCE
   ========================================================== */
(() => {
  /* ----- fill in all texts from CONFIG ----- */
  const G = CONFIG.garden;
  document.title = G.title;
  $('#introLine1').textContent = CONFIG.intro.line1;
  $('#introLine2').textContent = CONFIG.intro.line2;
  $('#enterBtn').textContent = CONFIG.intro.button;
  $('#gTitle').textContent = G.title;
  $('#gSub').textContent = G.subtitle;
  $('#heroHint').textContent = G.heroHint;
  $('#bouquetNote').textContent = G.bouquetNote;
  $('#bloomBtn').textContent = G.bloomButton;
  $('#letterBtn').textContent = G.letterButton;
  $('#gameBtn').textContent = G.gameButton;
  $('#finaleBtn').textContent = G.finaleButton;
  $('#unlockHint').textContent = G.unlockHint;
  $('#fLine1').textContent = CONFIG.finale.main;
  $('#fLine2').textContent = CONFIG.finale.sub;
  $('#fSign').innerHTML = CONFIG.finale.sign;

  const garden = $('#garden'), intro = $('#intro'), meadow = $('#meadow'), finale = $('#finale');
  const discovered = new Set();
  let unlocked = false, pendingUnlockToast = false, activeModal = null, lastFocus = null;

  /* ---------- INTRO SEQUENCE ---------- */
  const introItems = ['#introLine1', '#introLine2', '#enterBtn'].map(s => $(s));
  const introTimers = [600, 3400, 6200].map((ms, i) => setTimeout(() => introItems[i].classList.add('show'), ms));
  intro.addEventListener('click', e => {                      // tap anywhere to skip the wait
    if (e.target.closest('#enterBtn')) return;
    introTimers.forEach(clearTimeout); introItems.forEach(i => i.classList.add('show'));
  });

  $('#enterBtn').addEventListener('click', e => {
    const btn = e.currentTarget; btn.disabled = true;
    const { x, y } = centerOf(btn);
    FX.burst(x, y, 70); FX.swirl(x, y, 44); FX.hearts(x, y, 14);
    bloomRing(x, y); floatHearts(reduceMotion ? 6 : 16);
    intro.classList.add('leaving');
    setTimeout(() => {
      intro.classList.add('hidden');
      garden.classList.remove('hidden');
      requestAnimationFrame(() => requestAnimationFrame(() => {
        garden.classList.add('in');
        bloomMeadow();
      }));
    }, 1500);
  });

  function bloomRing(x, y) {
    const n = 9, dist = Math.min(window.innerWidth, window.innerHeight) * 0.34;
    for (let i = 0; i < n; i++) {
      const a = i / n * TAU + rand(-0.2, 0.2), d = dist * rand(0.7, 1.2);
      const f = el('div', 'ringflower', flowerSVG(pick(Object.keys(GRADIENTS)), 9));
      f.style.left = x + 'px'; f.style.top = y + 'px';
      f.style.setProperty('--dx', Math.cos(a) * d + 'px'); f.style.setProperty('--dy', Math.sin(a) * d + 'px');
      f.style.animationDelay = i * 70 + 'ms';
      document.body.appendChild(f);
      f.addEventListener('animationend', () => f.remove());
    }
  }
  function floatHearts(n) {
    for (let i = 0; i < n; i++) {
      const h = el('span', 'fheart', pick(['💜', '💜', '🌸', '💖', '✨']));
      h.style.left = rand(4, 96) + 'vw'; h.style.fontSize = rand(18, 40) + 'px';
      h.style.setProperty('--dur', rand(3.2, 5.5) + 's'); h.style.setProperty('--sx', rand(-60, 60) + 'px'); h.style.setProperty('--rot', rand(-30, 30) + 'deg');
      h.style.animationDelay = rand(0, 1.2) + 's';
      document.body.appendChild(h);
      h.addEventListener('animationend', () => h.remove());
    }
  }

  /* ---------- HERO FLOWER + BOUQUET ---------- */
  const hero = $('#hero'), heroBtn = $('#heroBtn'), stage = $('#stage'), bouquetEl = $('#bouquet'), stems = $('#stems');
  heroBtn.innerHTML = flowerSVG('violet', 12);
  const BQ = [
    { x: 27, y: 34, sz: 76, pal: 'pink' },  { x: 73, y: 34, sz: 76, pal: 'lilac' }, { x: 50, y: 13, sz: 64, pal: 'moon' },
    { x: 14, y: 56, sz: 66, pal: 'deep' },  { x: 86, y: 56, sz: 66, pal: 'violet' }, { x: 33, y: 68, sz: 62, pal: 'lilac' },
    { x: 67, y: 68, sz: 62, pal: 'pink' }
  ];
  let bloomed = false, bouquetBuilt = false;
  const bqNodes = [];

  function buildBouquet() {
    if (bouquetBuilt) return; bouquetBuilt = true;
    let paths = `<path pathLength="1" d="M50 50 L50 96"/>`;
    BQ.forEach((b, i) => {
      paths += `<path pathLength="1" d="M${b.x} ${b.y} Q ${(b.x + 50) / 2} ${(b.y + 96) / 2 + 8} 50 96"/>`;
      const btn = el('button', 'bq pre closed', flowerSVG(b.pal, 9));
      btn.type = 'button'; btn.setAttribute('aria-label', `Bouquet flower ${i + 1}`);
      btn.style.cssText = `left:${b.x}%;top:${b.y}%;--sz:${b.sz}`;
      btn.addEventListener('click', () => onFlower(btn, CONFIG.bouquetMessages[i % CONFIG.bouquetMessages.length], 'b' + i));
      bouquetEl.appendChild(btn); bqNodes.push(btn);
    });
    stems.innerHTML = paths;
  }
  function playBouquetBloom() {
    buildBouquet();
    stems.classList.remove('grow'); void stems.getBoundingClientRect(); stems.classList.add('grow');
    $('#bow').classList.add('show');
    const sc = centerOf(stage);
    FX.swirl(sc.x, sc.y, 60); FX.burst(sc.x, sc.y, 40);
    bqNodes.forEach((n, i) => {
      n.classList.add('closed');
      setTimeout(() => {
        n.classList.remove('pre', 'closed');
        const p = centerOf(n); FX.burst(p.x, p.y, 14); FX.hearts(p.x, p.y, 2);
      }, 500 + i * 220);
    });
    $('#bouquetNote').classList.add('show');
  }
  function bloomHero() {
    if (bloomed) return; bloomed = true;
    hero.classList.remove('closed');
    const p = centerOf(hero);
    FX.burst(p.x, p.y, 60); FX.swirl(p.x, p.y, 40); FX.hearts(p.x, p.y, 8);
    setTimeout(playBouquetBloom, 1100);
  }
  heroBtn.addEventListener('click', bloomHero);
  $('#bloomBtn').addEventListener('click', () => {
    if (!bloomed) { bloomHero(); return; }
    FX.swirl(innerWidth / 2, innerHeight * 0.5, 50); floatHearts(reduceMotion ? 4 : 10);
    playBouquetBloom();
  });

  /* ---------- MEADOW OF SECRET FLOWERS ---------- */
  const heads = [];
  CONFIG.secretFlowers.forEach((f, i) => {
    const w = el('div', 'mf', '<i class="stem"></i><i class="leaf l1"></i><i class="leaf l2"></i>');
    w.style.cssText = `left:${f.x}%;--h:${f.h}px;--sz:${f.size}px;--sw:${4 + i % 3}s;--sd:-${(i * 0.7).toFixed(1)}s`;
    const b = el('button', 'head closed', flowerSVG(f.palette, f.petals || 10));
    b.type = 'button'; b.setAttribute('aria-label', `Secret flower ${i + 1}. Tap to read its message.`);
    b.addEventListener('click', () => onFlower(b, f.msg, 's' + i));
    w.appendChild(b); meadow.appendChild(w); heads.push(b);
  });
  for (let i = 0; i < 24; i++) {                                   // decorative background flowers for depth
    const w = el('div', 'mf');
    w.style.cssText = `left:${rand(1, 99)}%;--h:${rand(28, 95)}px;--sz:${rand(32, 50)}px;--sw:${rand(4, 7)}s;--sd:-${rand(0, 6)}s`;
    w.innerHTML = '<i class="stem"></i>';
    const h = el('span', 'head deco closed', flowerSVG(pick(Object.keys(GRADIENTS)), 9));
    w.appendChild(h); meadow.insertBefore(w, meadow.firstChild); heads.push(h);
  }
  function bloomMeadow() {
    heads.forEach((h, i) => setTimeout(() => h.classList.remove('closed'), 500 + i * 110));
  }

  /* ---------- flower click → message ---------- */
  function onFlower(node, msg, id) {
    const p = centerOf(node);
    FX.burst(p.x, p.y, 28); FX.hearts(p.x, p.y, 5);
    node.classList.add('found');
    showToast(msg);
    discover(id);
  }
  function discover(id) {
    if (discovered.has(id)) return;
    discovered.add(id);
    $('#countNum').textContent = discovered.size;
    if (discovered.size >= G.unlockAfter) unlockFinale();
  }
  function unlockFinale() {
    if (unlocked) return; unlocked = true;
    $('#finaleBtn').classList.remove('hidden');
    $('#unlockHint').classList.add('gone');
    pendingUnlockToast = true;
    setTimeout(flushUnlockToast, 2600);
  }
  function flushUnlockToast() {
    if (!pendingUnlockToast || activeModal) return;
    pendingUnlockToast = false; showToast(G.unlockedToast);
  }

  /* ---------- toast ---------- */
  const toast = $('#toast'); let toastT = 0;
  function showToast(text) {
    $('#toastText').textContent = text;
    toast.classList.add('show');
    clearTimeout(toastT); toastT = setTimeout(hideToast, Math.max(4500, text.length * 80));
  }
  function hideToast() { toast.classList.remove('show'); }
  toast.addEventListener('click', hideToast);

  /* ---------- generic modals ---------- */
  function openModal(m) {
    hideToast();
    activeModal = m; lastFocus = document.activeElement;
    m.classList.add('open'); m.setAttribute('aria-hidden', 'false');
    setTimeout(() => { const f = $('[data-focus]', m); if (f) f.focus(); }, 80);
  }
  function closeModal() {
    if (!activeModal) return;
    const m = activeModal; activeModal = null;
    m.classList.remove('open'); m.setAttribute('aria-hidden', 'true');
    if (m.id === 'letterModal') clearLetterTimers();
    if (lastFocus && lastFocus.focus) lastFocus.focus();
    setTimeout(flushUnlockToast, 700);
  }
  document.addEventListener('click', e => { if (e.target.closest('[data-close]')) closeModal(); });
  document.addEventListener('keydown', e => {
    if (e.key !== 'Escape') return;
    if (activeModal) closeModal(); else if (finale.classList.contains('on')) leaveFinale();
  });

  /* ---------- THE LETTER ---------- */
  const env = $('#envelope'), paper = $('#letterPaper'), envHint = $('#envHint'), letterBody = $('#letterBody');
  let letterTimers = [];
  const L = CONFIG.letter;
  letterBody.innerHTML =
    `<p class="first">${L.first}</p>` +
    L.paragraphs.map(t => `<p>${t}</p>`).join('') +
    `<p>${L.closing}</p><p class="sig">${L.signature}</p>`;

  function clearLetterTimers() { letterTimers.forEach(clearTimeout); letterTimers = []; }
  function resetLetter() {
    clearLetterTimers();
    env.className = 'envelope'; paper.classList.remove('show'); envHint.classList.remove('gone');
    $$('p', letterBody).forEach(p => p.classList.remove('in'));
    paper.scrollTop = 0;
  }
  function unseal() {
    if (env.classList.contains('open')) return;
    env.classList.add('open'); envHint.classList.add('gone');
    const p = centerOf(env); FX.hearts(p.x, p.y, 8); FX.burst(p.x, p.y, 24);
    letterTimers.push(setTimeout(() => {
      env.classList.add('done'); paper.classList.add('show');
      $$('p', letterBody).forEach((para, i) => letterTimers.push(setTimeout(() => para.classList.add('in'), 500 + i * 850)));
      const q = centerOf(paper); FX.swirl(q.x, q.y, 30);
      discover('letter'); unlockFinale();
    }, 1900));
  }
  env.addEventListener('click', unseal);
  env.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); unseal(); } });
  $('#letterBtn').addEventListener('click', () => { resetLetter(); openModal($('#letterModal')); });

  /* ---------- THE SWEETNESS GAME ---------- */
  const gameBody = $('#gameBody'), GM = CONFIG.game;
  let qi = 0, score = 0;
  function startGame() { qi = 0; score = 0; renderQuestion(); openModal($('#gameModal')); }
  function renderQuestion() {
    const q = GM.questions[qi];
    const dots = GM.questions.map((_, i) => `<i class="${i <= qi ? 'on' : ''}"></i>`).join('');
    gameBody.innerHTML = `<div class="g-dots">${dots}</div><h3>${q.q}</h3>
      <div class="opts">${q.options.map((o, i) => `<button type="button" class="opt" data-i="${i}">${o.t}</button>`).join('')}</div>
      <p class="react" aria-live="polite"></p>`;
    $$('.opt', gameBody).forEach(b => b.addEventListener('click', () => answer(b, q)));
  }
  function answer(btn, q) {
    const o = q.options[+btn.dataset.i];
    $$('.opt', gameBody).forEach(b => (b.disabled = true));
    btn.classList.add('chosen'); score += o.p;
    $('.react', gameBody).textContent = o.r;
    const p = centerOf(btn); FX.burst(p.x, p.y, 16); FX.hearts(p.x, p.y, 3);
    setTimeout(() => { if (++qi < GM.questions.length) renderQuestion(); else renderResult(); }, 1700);
  }
  function renderResult() {
    const res = [...GM.results].reverse().find(r => score >= r.min) || GM.results[0];
    const maxScore = GM.questions.reduce((s, q) => s + Math.max(...q.options.map(o => o.p)), 0);
    const pct = Math.round(78 + (score / maxScore) * 27);                // always gloriously high
    gameBody.innerHTML = `<h3>${GM.intro}</h3>
      <div class="pct" id="pct">0%</div>
      <div class="meter"><i id="meterFill"></i></div>
      <div class="res-title">${res.title}</div>
      <p class="res-text">${res.text}</p>
      <div id="rewardArea"><button type="button" class="gift" id="giftBtn" aria-label="${GM.rewardButton}">🎁</button><p class="react">${GM.rewardButton}</p></div>
      <button type="button" class="btn" id="againBtn">Play again ↻</button>`;
    requestAnimationFrame(() => { $('#meterFill').style.width = Math.min(pct, 100) + '%'; });
    const t0 = performance.now();
    (function count(now) {                                                // animated percentage
      const k = Math.min(1, (now - t0) / 2400), eased = 1 - Math.pow(1 - k, 3);
      const node = $('#pct'); if (!node) return;
      node.textContent = Math.round(pct * eased) + '%';
      if (k < 1) requestAnimationFrame(count);
    })(t0);
    $('#giftBtn').addEventListener('click', openReward);
    $('#againBtn').addEventListener('click', startGame);
  }
  function openReward() {
    const area = $('#rewardArea'), g = $('#giftBtn'); if (!area) return;
    const p = centerOf(g); FX.burst(p.x, p.y, 60); FX.swirl(p.x, p.y, 36); FX.hearts(p.x, p.y, 10);
    area.innerHTML = `<div class="coupon"><b>${GM.reward.title}</b>${GM.reward.text}</div>`;
    discover('game');
  }
  $('#gameBtn').addEventListener('click', startGame);

  /* ==========================================================
     THE FINALE
     ========================================================== */
  let finaleTimers = [];
  const later = (fn, ms) => finaleTimers.push(setTimeout(fn, ms));

  function buildConstellation() {
    const svg = $('#constellation'); const N = 22, pts = [];
    for (let i = 0; i < N; i++) {                                         // classic heart curve
      const t = i / N * TAU;
      pts.push([100 + 5.6 * 16 * Math.pow(Math.sin(t), 3),
                78 - 5.6 * (13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t))]);
    }
    let s = `<path class="line" pathLength="1" d="M${pts.map(p => p[0].toFixed(1) + ' ' + p[1].toFixed(1)).join(' L')} Z"/>`;
    pts.forEach((p, i) => { s += `<circle class="${i % 5 === 0 ? 'big' : ''}" cx="${p[0].toFixed(1)}" cy="${p[1].toFixed(1)}" r="${i % 5 === 0 ? 2.8 : 1.8}" style="--d:${(i * 0.17 + 0.2).toFixed(2)}s"/>`; });
    for (let i = 0; i < 16; i++) s += `<circle cx="${rand(14, 186).toFixed(1)}" cy="${rand(8, 172).toFixed(1)}" r="${rand(0.5, 1.1).toFixed(2)}" style="--d:${rand(1, 5).toFixed(2)}s"/>`;
    svg.innerHTML = s;
  }
  function buildField() {
    const field = $('#fField'); field.innerHTML = '';
    const n = innerWidth < 600 ? 15 : 30, nodes = [];
    for (let i = 0; i < n; i++) {
      const x = (i + rand(0.1, 0.9)) / n * 100;
      const wrap = el('div', 'ff'); wrap.style.left = x + '%';
      const mf = el('div', 'mf', '<i class="stem"></i><i class="leaf l1"></i><i class="leaf l2"></i>');
      mf.style.cssText = `--h:${rand(70, 230)}px;--sz:${rand(52, 92)}px;--sw:${rand(4, 7)}s;--sd:-${rand(0, 6)}s`;
      const head = el('span', 'head closed', flowerSVG(pick(Object.keys(GRADIENTS)), pick([9, 10, 12])));
      mf.appendChild(head); wrap.appendChild(mf); field.appendChild(wrap);
      nodes.push({ wrap, head, delay: Math.abs(x - 50) / 50 });
    }
    return nodes;
  }

  function runFinale() {
    finaleTimers.forEach(clearTimeout); finaleTimers = [];
    hideToast();
    finale.classList.remove('hidden');
    $$('#finale .reveal').forEach(n => n.classList.remove('show'));
    finale.scrollTop = 0;
    buildConstellation();
    const nodes = buildField();
    void finale.offsetWidth;
    finale.classList.add('on');
    garden.classList.add('dim');
    FX.setRising(true);

    // flowers bloom in waves outward from the centre
    nodes.forEach(n => {
      const d = n.delay * 3200 + 600;
      later(() => n.wrap.classList.add('up'), d);
      later(() => n.head.classList.remove('closed'), d + 500);
    });
    for (let i = 0; i < 5; i++) later(() => { FX.swirl(rand(0.15, 0.85) * innerWidth, innerHeight * rand(0.55, 0.9), 34); FX.burst(rand(0.1, 0.9) * innerWidth, innerHeight * rand(0.5, 0.9), 26); }, 800 + i * 1100);

    // words appear one by one
    later(() => $('#fLine1').classList.add('show'), 5200);
    later(() => $('#fLine2').classList.add('show'), 12500);
    later(() => $('#fSign').classList.add('show'), 16500);
    later(() => $('#fActions').classList.add('show'), 19500);
    later(() => FX.hearts(innerWidth / 2, innerHeight * 0.35, 12), 12600);
  }
  function leaveFinale() {
    finaleTimers.forEach(clearTimeout); finaleTimers = [];
    finale.classList.remove('on');
    FX.setRising(false);
    garden.classList.remove('dim');
    setTimeout(() => finale.classList.add('hidden'), 2000);
  }
  $('#finaleBtn').addEventListener('click', runFinale);
  $('#replayBtn').addEventListener('click', runFinale);
  $('#backBtn').addEventListener('click', leaveFinale);

  /* ---------- Music toggle ---------- */
  const musicBtn = $('#musicBtn');
  musicBtn.addEventListener('click', async () => {
    const isOn = await Music.toggle();
    musicBtn.setAttribute('aria-pressed', String(!!isOn));
    $('#musicTxt').textContent = isOn ? 'Music on' : 'Music off';
    $('#musicIco').textContent = isOn ? '🎶' : '🎵';
  });
})();
