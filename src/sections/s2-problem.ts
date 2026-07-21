export const css: string = /* css */ `
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
      color: var(--accent);
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
      border: 1.5px solid rgba(21, 128, 61, 0);
      transition: border-color .3s;
    }
    .prob-node.active .prob-node-icon::after {
      border-color: rgba(21, 128, 61, .5);
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
      stroke: rgba(21, 128, 61, .55);
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
      fill: var(--accent);
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
      border: 1px solid rgba(21, 128, 61, .3);
      color: rgba(21, 128, 61, .8);
      font-size: .78rem;
      font-weight: 600;
    }
`

export const html: string = /* html */ `
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
`

export const js: string = /* js */ `
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
`
