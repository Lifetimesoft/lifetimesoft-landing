const html = /* html */ `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Lifetimesoft</title>
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    :root {
      --bg: #0a0a0f;
      --surface: #13131a;
      --accent: #7c5cfc;
      --accent2: #c084fc;
      --text: #e2e2f0;
      --muted: #6b6b8a;
    }

    html { scroll-behavior: smooth; }

    body {
      background: var(--bg);
      color: var(--text);
      font-family: 'Segoe UI', system-ui, sans-serif;
      overflow-x: hidden;
    }

    /* ── NAV ── */
    nav {
      position: fixed;
      top: 0; left: 0; right: 0;
      z-index: 100;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 1.25rem 3rem;
      background: rgba(10, 10, 15, 0.7);
      backdrop-filter: blur(12px);
      border-bottom: 1px solid rgba(255,255,255,0.06);
    }
    .nav-logo { font-size: 1.2rem; font-weight: 700; letter-spacing: -.5px; }
    .nav-logo span { color: var(--accent); }
    .nav-links { display: flex; gap: 2rem; list-style: none; }
    .nav-links a { color: var(--muted); text-decoration: none; font-size: .9rem; transition: color .2s; }
    .nav-links a:hover { color: var(--text); }

    /* ── SECTION BASE ── */
    .section {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 8rem 2rem;
      position: relative;
      border-bottom: 1px solid rgba(255,255,255,0.04);
    }
    .section-badge {
      font-size: .75rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 3px;
      color: var(--accent);
      margin-bottom: .75rem;
    }
    .section-placeholder {
      color: var(--muted);
      font-size: .85rem;
      margin-top: 1rem;
      border: 1px dashed rgba(255,255,255,0.1);
      padding: .5rem 1rem;
      border-radius: 6px;
    }

    /* ── S1: HERO ── */
    #s1-hero-wrap {
      height: 3500px; /* 100vh sticky + 2500px scroll room */
    }
    #s1-hero {
      min-height: unset;
      height: 100vh;
      padding: 0;
      overflow: hidden;
      border-bottom: none;
    }

    /* sticky viewport that GSAP pins */
    .hero-sticky {
      position: relative;
      width: 100%;
      height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      overflow: hidden;
    }

    /* ambient radial glow */
    .hero-bg-glow {
      position: absolute;
      inset: 0;
      pointer-events: none;
      background:
        radial-gradient(ellipse 60% 55% at 50% 50%, rgba(124,92,252,.18) 0%, transparent 70%);
    }

    /* ── typewriter headline ── */
    .hero-headline-wrap {
      text-align: center;
      z-index: 2;
    }
    .hero-line1 {
      display: block;
      font-size: clamp(2.2rem, 5vw, 4.2rem);
      font-weight: 800;
      letter-spacing: -1.5px;
      line-height: 1.1;
      white-space: nowrap;
      overflow: hidden;
      color: var(--text);
    }
    .hero-line2 {
      display: block;
      font-size: clamp(3rem, 8vw, 7rem);
      font-weight: 900;
      letter-spacing: -3px;
      line-height: 1;
      background: linear-gradient(135deg, var(--accent), var(--accent2));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      opacity: 0;
      transform: scale(0.7);
      transform-origin: center;
      margin-top: .2rem;
    }

    /* ── agent pills (phase 1 — floating) ── */
    .hero-agents {
      position: absolute;
      inset: 0;
      pointer-events: none;
      z-index: 1;
    }
    .agent-pill {
      position: absolute;
      display: flex;
      align-items: center;
      gap: .5rem;
      padding: .45rem 1rem;
      border-radius: 999px;
      background: rgba(19,19,26,.85);
      border: 1px solid rgba(124,92,252,.3);
      backdrop-filter: blur(8px);
      font-size: .82rem;
      font-weight: 600;
      color: var(--text);
      white-space: nowrap;
      opacity: 0;
    }
    .agent-pill .dot {
      width: 7px; height: 7px;
      border-radius: 50%;
      background: var(--accent);
      flex-shrink: 0;
    }
    /* initial spread positions (will be overridden by JS for convergence) */
    .agent-pill:nth-child(1) { top: 18%;  left: 6%; }
    .agent-pill:nth-child(2) { top: 12%;  left: 38%; }
    .agent-pill:nth-child(3) { top: 18%;  right: 6%; }
    .agent-pill:nth-child(4) { bottom: 22%; left: 4%; }
    .agent-pill:nth-child(5) { bottom: 18%; left: 36%; }
    .agent-pill:nth-child(6) { bottom: 22%; right: 4%; }

    /* ── Lifetime Runtime target ── */
    .hero-runtime {
      position: absolute;
      bottom: 30%;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: .5rem;
      z-index: 3;
      opacity: 0;
    }
    .runtime-box {
      padding: .7rem 1.6rem;
      border-radius: 14px;
      background: rgba(124,92,252,.12);
      border: 1.5px solid rgba(124,92,252,.5);
      font-size: .9rem;
      font-weight: 700;
      color: var(--accent2);
      letter-spacing: .5px;
      box-shadow: 0 0 30px rgba(124,92,252,.2);
    }
    .runtime-label {
      font-size: .7rem;
      color: var(--muted);
      text-transform: uppercase;
      letter-spacing: 2px;
    }

    /* ── final hero content (sub + buttons) ── */
    .hero-final {
      position: absolute;
      bottom: 6%;
      left: 50%;
      transform: translateX(-50%);
      text-align: center;
      width: 100%;
      max-width: 640px;
      z-index: 4;
      opacity: 0;
    }
    .hero-sub {
      color: var(--muted);
      font-size: 1.05rem;
      line-height: 1.7;
      margin-bottom: 2rem;
    }
    .hero-btns {
      display: flex;
      gap: 1rem;
      justify-content: center;
      flex-wrap: wrap;
    }
    .btn {
      padding: .8rem 2rem;
      border-radius: 8px;
      font-size: .95rem;
      font-weight: 600;
      cursor: pointer;
      text-decoration: none;
      transition: transform .15s, box-shadow .15s;
    }
    .btn:hover { transform: translateY(-2px); }
    .btn-primary {
      background: var(--accent);
      color: #fff;
      box-shadow: 0 4px 20px rgba(124,92,252,.4);
    }
    .btn-primary:hover { box-shadow: 0 8px 30px rgba(124,92,252,.6); }
    .btn-outline {
      border: 1px solid rgba(255,255,255,.15);
      color: var(--text);
    }

    /* ── S2: PROBLEM ── */
    #s2-problem {
      overflow: hidden;
      padding: 7rem 2rem;
    }
    .prob-headline {
      text-align: center;
      font-size: clamp(1.9rem, 4.5vw, 3.4rem);
      font-weight: 800;
      letter-spacing: -1.5px;
      line-height: 1.15;
      max-width: 720px;
      margin: 0 auto 4rem;
      opacity: 0;
      transform: translateY(24px);
    }
    .prob-headline em {
      font-style: normal;
      color: #ff4d4d;
    }

    /* grid of 4 environment nodes */
    .prob-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr;
      gap: 2.5rem 6rem;
      max-width: 820px;
      width: 100%;
      margin: 0 auto;
      position: relative;
    }

    .prob-node {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: .6rem;
      opacity: 0;
      transform: translateY(20px);
    }
    .prob-node-icon {
      width: 64px; height: 64px;
      border-radius: 18px;
      background: var(--surface);
      border: 1px solid rgba(255,255,255,.09);
      display: flex; align-items: center; justify-content: center;
      font-size: 1.7rem;
      position: relative;
    }
    /* red "disconnected" pulse ring */
    .prob-node-icon::after {
      content: '';
      position: absolute;
      inset: -5px;
      border-radius: 22px;
      border: 1.5px solid rgba(255, 77, 77, 0);
      transition: border-color .3s;
    }
    .prob-node.active .prob-node-icon::after {
      border-color: rgba(255, 77, 77, .5);
      animation: redPulse 1.8s ease-in-out infinite;
    }
    @keyframes redPulse {
      0%, 100% { opacity: 1; transform: scale(1); }
      50%       { opacity: .4; transform: scale(1.15); }
    }
    .prob-node-label {
      font-size: .8rem;
      font-weight: 700;
      color: var(--muted);
      text-transform: uppercase;
      letter-spacing: 1.5px;
    }

    /* SVG canvas for broken lines */
    .prob-svg {
      position: absolute;
      inset: 0;
      width: 100%; height: 100%;
      overflow: visible;
      pointer-events: none;
    }
    .prob-line {
      stroke: rgba(255, 77, 77, .55);
      stroke-width: 1.5;
      stroke-dasharray: 6 5;
      fill: none;
      opacity: 0;
    }
    /* healing line — drawn on scroll */
    .prob-line-heal {
      stroke: rgba(124, 92, 252, .7);
      stroke-width: 2;
      stroke-dasharray: 800;
      stroke-dashoffset: 800;
      fill: none;
      opacity: 0;
    }

    /* X markers */
    .prob-x {
      font-size: 1.1rem;
      fill: #ff4d4d;
      font-weight: 900;
      opacity: 0;
    }

    /* scroll-reveal sub-labels */
    .prob-tags {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: .6rem;
      max-width: 680px;
      margin: 3.5rem auto 0;
      opacity: 0;
    }
    .prob-tag {
      padding: .35rem .9rem;
      border-radius: 999px;
      border: 1px solid rgba(255, 77, 77, .3);
      color: rgba(255, 77, 77, .8);
      font-size: .78rem;
      font-weight: 600;
    }

    /* ── FOOTER ── */
    footer {
      border-top: 1px solid rgba(255,255,255,.06);
      padding: 2rem 3rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: var(--muted);
      font-size: .85rem;
      flex-wrap: wrap;
      gap: 1rem;
    }
  </style>
</head>
<body>

  <!-- NAV -->
  <nav id="navbar">
    <div class="nav-logo">lifetime<span>soft</span></div>
    <ul class="nav-links">
      <li><a href="#s1-hero">Hero</a></li>
      <li><a href="#s2-problem">Problem</a></li>
      <li><a href="#s3-turning">Turning Point</a></li>
      <li><a href="#s4-run">Run Anywhere</a></li>
      <li><a href="#s5-communicate">Communicate</a></li>
      <li><a href="#s6-collaborate">Collaborate</a></li>
      <li><a href="#s7-scale">Scale</a></li>
      <li><a href="#s8-how">How It Works</a></li>
      <li><a href="#s9-proof">Social Proof</a></li>
      <li><a href="#s10-cta">Get Started</a></li>
    </ul>
  </nav>

  <!-- ── S1: HERO ── -->
  <!-- outer wrapper gives the 2500px scroll distance for the pin -->
  <div id="s1-hero-wrap">
    <section id="s1-hero">
      <div class="hero-sticky" id="hero-sticky">

        <div class="hero-bg-glow"></div>

        <!-- agent pills floating around -->
        <div class="hero-agents" id="hero-agents">
          <div class="agent-pill" id="pill-0"><span class="dot"></span>OpenAI SDK</div>
          <div class="agent-pill" id="pill-1"><span class="dot"></span>Anthropic SDK</div>
          <div class="agent-pill" id="pill-2"><span class="dot"></span>Gemini SDK</div>
          <div class="agent-pill" id="pill-3"><span class="dot"></span>CrewAI</div>
          <div class="agent-pill" id="pill-4"><span class="dot"></span>LangGraph</div>
          <div class="agent-pill" id="pill-5"><span class="dot"></span>Your SDK</div>
        </div>

        <!-- Lifetime Runtime target box -->
        <div class="hero-runtime" id="hero-runtime">
          <div class="runtime-box">⬡ Lifetime Runtime</div>
          <span class="runtime-label">Any agent. Any framework.</span>
        </div>

        <!-- typewriter headline — centered -->
        <div class="hero-headline-wrap" id="hero-headline">
          <span class="hero-line1" id="hero-line1"></span>
          <span class="hero-line2" id="hero-line2">Anywhere.</span>
        </div>

        <!-- sub + buttons — revealed last -->
        <div class="hero-final" id="hero-final">
          <p class="hero-sub">
            The Autonomous Agent Platform that connects every runtime,<br />
            framework and capability.
          </p>
          <div class="hero-btns">
            <a href="#s10-cta" class="btn btn-primary">Start Building</a>
            <a href="#s8-how"  class="btn btn-outline">Explore Marketplace</a>
          </div>
        </div>

      </div>
    </section>
  </div>

  <!-- ── S2: THE PROBLEM ── -->
  <section id="s2-problem" class="section">

    <!-- headline -->
    <h2 class="prob-headline" id="prob-headline">
      AI Agents are everywhere.<br/>
      But they can't <em>work together.</em>
    </h2>

    <!-- node grid + SVG broken lines -->
    <div class="prob-grid" id="prob-grid">

      <!-- SVG layer (drawn behind nodes) -->
      <svg class="prob-svg" id="prob-svg" viewBox="0 0 820 320" preserveAspectRatio="none">
        <!-- broken red dashed lines — cross pattern -->
        <line class="prob-line" id="pl-h1" x1="160" y1="80"  x2="660" y2="80"/>
        <line class="prob-line" id="pl-h2" x1="160" y1="240" x2="660" y2="240"/>
        <line class="prob-line" id="pl-v1" x1="160" y1="80"  x2="160" y2="240"/>
        <line class="prob-line" id="pl-v2" x1="660" y1="80"  x2="660" y2="240"/>
        <line class="prob-line" id="pl-d1" x1="160" y1="80"  x2="660" y2="240"/>
        <line class="prob-line" id="pl-d2" x1="660" y1="80"  x2="160" y2="240"/>

        <!-- X markers at midpoints -->
        <text class="prob-x" id="px-1" x="400" y="88"  text-anchor="middle">✕</text>
        <text class="prob-x" id="px-2" x="400" y="252" text-anchor="middle">✕</text>
        <text class="prob-x" id="px-3" x="168" y="168" text-anchor="middle">✕</text>
        <text class="prob-x" id="px-4" x="652" y="168" text-anchor="middle">✕</text>

        <!-- healing purple line — drawn on scroll -->
        <path class="prob-line-heal" id="prob-heal"
          d="M160,80 Q410,160 660,80 Q820,160 660,240 Q410,160 160,240 Q0,160 160,80"/>
      </svg>

      <!-- 4 environment nodes -->
      <div class="prob-node" id="pn-cloud">
        <div class="prob-node-icon">☁️</div>
        <span class="prob-node-label">Cloud</span>
      </div>
      <div class="prob-node" id="pn-browser">
        <div class="prob-node-icon">🌐</div>
        <span class="prob-node-label">Browser</span>
      </div>
      <div class="prob-node" id="pn-desktop">
        <div class="prob-node-icon">🖥️</div>
        <span class="prob-node-label">Desktop</span>
      </div>
      <div class="prob-node" id="pn-mobile">
        <div class="prob-node-icon">📱</div>
        <span class="prob-node-label">Mobile</span>
      </div>

    </div>

    <!-- scroll-reveal problem tags -->
    <div class="prob-tags" id="prob-tags">
      <span class="prob-tag">Different frameworks.</span>
      <span class="prob-tag">Different runtimes.</span>
      <span class="prob-tag">Different protocols.</span>
      <span class="prob-tag">Different tools.</span>
    </div>

  </section>

  <!-- ── S3: THE TURNING POINT ── -->
  <section id="s3-turning" class="section">
    <p class="section-badge">Section 3 · The Turning Point</p>
    <p class="section-placeholder">— empty, waiting for content —</p>
  </section>

  <!-- ── S4: RUN ANYWHERE ── -->
  <section id="s4-run" class="section">
    <p class="section-badge">Section 4 · Run Anywhere</p>
    <p class="section-placeholder">— empty, waiting for content —</p>
  </section>

  <!-- ── S5: COMMUNICATE ── -->
  <section id="s5-communicate" class="section">
    <p class="section-badge">Section 5 · Communicate</p>
    <p class="section-placeholder">— empty, waiting for content —</p>
  </section>

  <!-- ── S6: COLLABORATE ── -->
  <section id="s6-collaborate" class="section">
    <p class="section-badge">Section 6 · Collaborate</p>
    <p class="section-placeholder">— empty, waiting for content —</p>
  </section>

  <!-- ── S7: SCALE ── -->
  <section id="s7-scale" class="section">
    <p class="section-badge">Section 7 · Scale</p>
    <p class="section-placeholder">— empty, waiting for content —</p>
  </section>

  <!-- ── S8: HOW IT WORKS ── -->
  <section id="s8-how" class="section">
    <p class="section-badge">Section 8 · How It Works</p>
    <p class="section-placeholder">— empty, waiting for content —</p>
  </section>

  <!-- ── S9: SOCIAL PROOF / STATS ── -->
  <section id="s9-proof" class="section">
    <p class="section-badge">Section 9 · Social Proof</p>
    <p class="section-placeholder">— empty, waiting for content —</p>
  </section>

  <!-- ── S10: CTA / WAITLIST ── -->
  <section id="s10-cta" class="section">
    <p class="section-badge">Section 10 · Get Started</p>
    <p class="section-placeholder">— empty, waiting for content —</p>
  </section>

  <!-- FOOTER -->
  <footer>
    <span>© 2026 Lifetimesoft. All rights reserved.</span>
    <span>Built on Cloudflare Workers</span>
  </footer>

  <!-- GSAP + ScrollTrigger via CDN -->
  <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.7/dist/gsap.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.7/dist/ScrollTrigger.min.js"></script>

  <script>
    gsap.registerPlugin(ScrollTrigger);

    // ── Navbar ──────────────────────────────────────────────────────
    gsap.from('#navbar', { y: -60, opacity: 0, duration: 0.8, ease: 'power3.out' });

    // ── S1: HERO ScrollPin timeline ─────────────────────────────────
    (function heroInit() {

      // 1. Pin the sticky viewport for 2500px of scroll
      ScrollTrigger.create({
        trigger: '#s1-hero-wrap',
        start: 'top top',
        end: '+=2500',
        pin: '#hero-sticky',
        anticipatePin: 1,
      });

      // Master timeline scrubbed by scroll progress
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '#s1-hero-wrap',
          start: 'top top',
          end: '+=2500',
          scrub: 1.2,
        },
      });

      // ── Phase 0 (0–0.08): blank screen ──────────────────────────
      // nothing — screen starts dark

      // ── Phase 1 (0.08–0.28): typewriter "Run Any AI Agent." ──────
      const line1El = document.getElementById('hero-line1');
      const fullText = 'Run Any AI Agent.';
      // We reveal the text via clip-path width trick using a counter obj
      const typer = { n: 0 };
      tl.to(typer, {
        n: fullText.length,
        duration: 0.2,
        ease: 'none',
        onUpdate() {
          if (line1El) line1El.textContent = fullText.slice(0, Math.round(typer.n));
        },
      }, 0.08);

      // ── Phase 2 (0.28–0.42): "Anywhere." scales in below ─────────
      tl.to('#hero-line2', {
        opacity: 1,
        scale: 1,
        duration: 0.14,
        ease: 'back.out(1.4)',
      }, 0.28);

      // ── Phase 3 (0.38–0.56): agent pills float in ─────────────────
      const pills = gsap.utils.toArray('.agent-pill');
      tl.to(pills, {
        opacity: 1,
        duration: 0.1,
        stagger: 0.025,
        ease: 'power2.out',
      }, 0.38);

      // ── Phase 4 (0.56–0.72): runtime target appears ───────────────
      tl.to('#hero-runtime', {
        opacity: 1,
        duration: 0.08,
        ease: 'power2.out',
      }, 0.56);

      // ── Phase 5 (0.62–0.82): pills converge to runtime ────────────
      // Get pill positions relative to viewport center at runtime
      const runtimeTarget = { x: 0, y: 0 }; // will resolve in px after DOM ready
      pills.forEach((pill) => {
        const el = pill as HTMLElement;
        // Each pill flies to the center-bottom of the screen (where runtime box is)
        tl.to(el, {
          x: () => {
            const pr = el.getBoundingClientRect();
            const rt = document.getElementById('hero-runtime')!.getBoundingClientRect();
            return rt.left + rt.width / 2 - (pr.left + pr.width / 2);
          },
          y: () => {
            const pr = el.getBoundingClientRect();
            const rt = document.getElementById('hero-runtime')!.getBoundingClientRect();
            return rt.top + rt.height / 2 - (pr.top + pr.height / 2);
          },
          scale: 0.5,
          opacity: 0,
          duration: 0.18,
          ease: 'power3.in',
        }, 0.62);
      });

      // runtime box pulses as pills arrive
      tl.to('#hero-runtime .runtime-box', {
        boxShadow: '0 0 60px rgba(124,92,252,.7)',
        scale: 1.08,
        duration: 0.06,
        yoyo: true,
        repeat: 1,
        ease: 'power2.inOut',
      }, 0.78);

      // ── Phase 6 (0.82–1.0): final sub + buttons reveal ───────────
      tl.to('#hero-final', {
        opacity: 1,
        y: 0,
        duration: 0.12,
        ease: 'power3.out',
      }, 0.84);

    })();

    // ── Section placeholders fade in on scroll ───────────────────────
    gsap.utils.toArray('.section').forEach((el) => {
      gsap.from(el as HTMLElement, {
        scrollTrigger: { trigger: el as HTMLElement, start: 'top 80%' },
        opacity: 0,
        y: 30,
        duration: 0.7,
        ease: 'power3.out',
      });
    });

    // ── S2: PROBLEM ─────────────────────────────────────────────────
    (function problemInit() {
      const st = { trigger: '#s2-problem', start: 'top 72%' };

      // headline
      gsap.to('#prob-headline', {
        scrollTrigger: st,
        opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
      });

      // nodes stagger in
      gsap.to(['#pn-cloud','#pn-browser','#pn-desktop','#pn-mobile'], {
        scrollTrigger: st,
        opacity: 1, y: 0, duration: 0.6, stagger: 0.12, ease: 'power3.out', delay: 0.3,
        onComplete() {
          document.querySelectorAll('.prob-node').forEach(n => n.classList.add('active'));
        },
      });

      // broken lines appear
      gsap.to('.prob-line', {
        scrollTrigger: st,
        opacity: 1, duration: 0.4, stagger: 0.08, delay: 0.6, ease: 'power2.out',
      });

      // X markers pop in
      gsap.to('.prob-x', {
        scrollTrigger: st,
        opacity: 1, duration: 0.25, stagger: 0.07, delay: 0.9,
        ease: 'back.out(2)',
      });

      // problem tags slide in
      gsap.to('#prob-tags', {
        scrollTrigger: st,
        opacity: 1, duration: 0.6, delay: 1.1, ease: 'power3.out',
      });

      // on further scroll — lines start healing (purple path draws in)
      gsap.to('#prob-heal', {
        scrollTrigger: {
          trigger: '#s2-problem',
          start: 'center 60%',
          end: 'bottom 30%',
          scrub: 1.5,
        },
        opacity: 1,
        strokeDashoffset: 0,
        ease: 'none',
        onStart() {
          // fade out the broken red lines as healing begins
          gsap.to('.prob-line', { opacity: 0, duration: 0.5 });
          gsap.to('.prob-x',    { opacity: 0, duration: 0.4 });
        },
      });
    })();
  </script>
</body>
</html>`

export default {
  fetch(): Response {
    return new Response(html, {
      headers: { 'Content-Type': 'text/html;charset=UTF-8' },
    })
  },
} satisfies ExportedHandler
