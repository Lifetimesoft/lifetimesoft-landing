export const css: string = /* css */ `
    /* ── S4: MULTI RUNTIME ── */
    #s4-run {
      overflow: hidden;
      padding: 7rem 2rem 5rem;
    }

    .run-headline {
      text-align: center;
      font-size: clamp(2rem, 4.5vw, 3.4rem);
      font-weight: 800;
      letter-spacing: -1.5px;
      line-height: 1.15;
      margin-bottom: .8rem;
      opacity: 0;
      transform: translateY(20px);
    }
    .run-sub {
      text-align: center;
      color: var(--muted);
      font-size: 1rem;
      margin-bottom: 4rem;
      opacity: 0;
    }

    /* vertical pipeline */
    .run-pipeline {
      position: relative;
      width: 100%;
      max-width: 560px;
      margin: 0 auto 4rem;
    }

    /* the vertical track line */
    .run-track-svg {
      position: absolute;
      left: 50%;
      top: 0;
      transform: translateX(-50%);
      width: 4px;
      height: 100%;
      overflow: visible;
      pointer-events: none;
      z-index: 0;
    }
    .run-track-line {
      stroke: rgba(255,255,255,.08);
      stroke-width: 2;
      stroke-dasharray: 8 6;
    }
    /* active fill — grows on scroll */
    .run-track-fill {
      stroke: var(--accent);
      stroke-width: 2.5;
      stroke-dasharray: 1000;
      stroke-dashoffset: 1000;
      filter: drop-shadow(0 0 4px rgba(124,92,252,.7));
    }

    /* packet that travels down the pipeline */
    .run-packet {
      position: absolute;
      left: 50%;
      top: 0;
      transform: translate(-50%, -50%);
      width: 18px; height: 18px;
      border-radius: 50%;
      background: var(--accent);
      box-shadow: 0 0 14px 4px rgba(124,92,252,.6);
      z-index: 5;
      opacity: 0;
    }

    /* runtime stop nodes on the pipeline */
    .run-stops {
      position: relative;
      z-index: 2;
      display: flex;
      flex-direction: column;
      gap: 0;
    }
    .run-stop {
      display: flex;
      align-items: center;
      gap: 1.4rem;
      padding: 1.4rem 0;
      opacity: 0;
      transform: translateX(-20px);
    }
    .run-stop:nth-child(even) {
      flex-direction: row-reverse;
      transform: translateX(20px);
    }
    .run-stop-dot {
      position: relative;
      flex-shrink: 0;
      width: 18px; height: 18px;
      border-radius: 50%;
      background: var(--surface);
      border: 2.5px solid rgba(124,92,252,.4);
      z-index: 3;
      transition: border-color .3s, box-shadow .3s;
    }
    .run-stop.lit .run-stop-dot {
      border-color: var(--accent);
      box-shadow: 0 0 12px rgba(124,92,252,.7);
    }
    .run-stop-label {
      font-size: .78rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 2px;
      color: var(--muted);
      transition: color .3s;
    }
    .run-stop.lit .run-stop-label { color: var(--text); }

    /* runtime cards grid */
    .run-cards {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
      gap: 1.2rem;
      max-width: 980px;
      width: 100%;
      margin: 0 auto;
    }
    .run-card {
      background: var(--surface);
      border: 1px solid rgba(255,255,255,.07);
      border-radius: 14px;
      padding: 1.4rem 1.2rem;
      display: flex;
      flex-direction: column;
      gap: .5rem;
      opacity: 0;
      transform: translateY(24px);
      transition: border-color .2s;
    }
    .run-card:hover { border-color: rgba(124,92,252,.4); }
    .run-card-icon { font-size: 1.6rem; }
    .run-card-title {
      font-size: .9rem;
      font-weight: 700;
      color: var(--text);
    }
    .run-card-sub {
      font-size: .78rem;
      color: var(--muted);
      line-height: 1.5;
    }
`

export const html: string = /* html */ `
  <!-- ── S4: MULTI RUNTIME ── -->
  <section id="s4-run" class="section">

    <h2 class="run-headline" id="run-headline">Deploy once.<br/><span style="color:var(--accent2)">Run everywhere.</span></h2>
    <p class="run-sub" id="run-sub">One agent. Five environments. Zero reconfiguration.</p>

    <!-- vertical pipeline with packet animation -->
    <div class="run-pipeline" id="run-pipeline">

      <!-- track SVG -->
      <svg class="run-track-svg" id="run-track-svg" viewBox="0 0 4 500" preserveAspectRatio="none" style="height:100%">
        <line class="run-track-line" x1="2" y1="0" x2="2" y2="500"/>
        <line class="run-track-fill" id="run-track-fill" x1="2" y1="0" x2="2" y2="500"/>
      </svg>

      <!-- travelling packet -->
      <div class="run-packet" id="run-packet"></div>

      <!-- 5 stops -->
      <div class="run-stops">
        <div class="run-stop" id="rs-0">
          <div class="run-stop-dot"></div>
          <span class="run-stop-label">☁️ Cloud</span>
        </div>
        <div class="run-stop" id="rs-1">
          <div class="run-stop-dot"></div>
          <span class="run-stop-label">🌐 Browser</span>
        </div>
        <div class="run-stop" id="rs-2">
          <div class="run-stop-dot"></div>
          <span class="run-stop-label">🖥️ Desktop</span>
        </div>
        <div class="run-stop" id="rs-3">
          <div class="run-stop-dot"></div>
          <span class="run-stop-label">📱 Mobile</span>
        </div>
        <div class="run-stop" id="rs-4">
          <div class="run-stop-dot"></div>
          <span class="run-stop-label">⚡ Edge</span>
        </div>
      </div>
    </div>

    <!-- runtime cards -->
    <div class="run-cards">
      <div class="run-card" id="rc-0">
        <span class="run-card-icon">☁️</span>
        <span class="run-card-title">Cloud Runtime</span>
        <span class="run-card-sub">Scale horizontally on any cloud provider with zero-config deployment.</span>
      </div>
      <div class="run-card" id="rc-1">
        <span class="run-card-icon">🌐</span>
        <span class="run-card-title">Browser Runtime</span>
        <span class="run-card-sub">Run agents in-browser via WebAssembly — no server required.</span>
      </div>
      <div class="run-card" id="rc-2">
        <span class="run-card-icon">🖥️</span>
        <span class="run-card-title">Desktop Runtime</span>
        <span class="run-card-sub">Native desktop agents with full filesystem and OS access.</span>
      </div>
      <div class="run-card" id="rc-3">
        <span class="run-card-icon">📱</span>
        <span class="run-card-title">Mobile Runtime</span>
        <span class="run-card-sub">Lightweight on-device inference for iOS and Android.</span>
      </div>
      <div class="run-card" id="rc-4">
        <span class="run-card-icon">⚡</span>
        <span class="run-card-title">Edge Runtime</span>
        <span class="run-card-sub">Sub-millisecond cold starts at 300+ Cloudflare edge locations.</span>
      </div>
    </div>

  </section>
`

export const js: string = /* js */ `
    // ── S4: MULTI RUNTIME ───────────────────────────────────────────
    (function multiRuntimeInit() {
      const st = { trigger: '#s4-run', start: 'top 72%' };

      // headline + sub
      gsap.to('#run-headline', {
        scrollTrigger: st, opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
      });
      gsap.to('#run-sub', {
        scrollTrigger: st, opacity: 1, duration: 0.6, delay: 0.2, ease: 'power3.out',
      });

      // stop rows slide in alternating directions
      ['#rs-0','#rs-1','#rs-2','#rs-3','#rs-4'].forEach((id, i) => {
        gsap.to(id, {
          scrollTrigger: st,
          opacity: 1,
          x: 0,
          duration: 0.55,
          delay: 0.3 + i * 0.13,
          ease: 'power3.out',
        });
      });

      // track fill draws down + packet travels — scrubbed
      gsap.to('#run-track-fill', {
        scrollTrigger: {
          trigger: '#run-pipeline',
          start: 'top 70%',
          end: 'bottom 60%',
          scrub: 1,
        },
        strokeDashoffset: 0,
        ease: 'none',
      });

      // packet bounces down the pipeline scrubbed to scroll
      const pkt = document.getElementById('run-packet');
      const pipeline = document.getElementById('run-pipeline');
      const stops = ['#rs-0','#rs-1','#rs-2','#rs-3','#rs-4'];

      gsap.to(pkt, { opacity: 1, duration: 0.01, delay: 0.4,
        scrollTrigger: { trigger: '#run-pipeline', start: 'top 70%' } });

      const prog = { v: 0 };
      gsap.to(prog, {
        scrollTrigger: {
          trigger: '#run-pipeline',
          start: 'top 65%',
          end: 'bottom 55%',
          scrub: 0.8,
          onUpdate(self) {
            const p = self.progress;
            const pipeH = pipeline.offsetHeight;
            pkt.style.top = (p * pipeH) + 'px';

            // light up stops as packet passes them
            const segment = 1 / stops.length;
            stops.forEach((id, i) => {
              const el = document.querySelector(id);
              if (el) {
                if (p >= i * segment) el.classList.add('lit');
              }
            });
          },
        },
        v: 1,
        ease: 'none',
      });

      // cards stagger in
      ['#rc-0','#rc-1','#rc-2','#rc-3','#rc-4'].forEach((id, i) => {
        gsap.to(id, {
          scrollTrigger: { trigger: '.run-cards', start: 'top 80%' },
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: i * 0.1,
          ease: 'power3.out',
        });
      });
    })();
`
