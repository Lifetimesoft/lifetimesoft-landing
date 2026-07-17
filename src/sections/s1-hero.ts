export const css: string = /* css */ `
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
`

export const html: string = /* html */ `
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
`

export const js: string = /* js */ `
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
      pills.forEach((pill) => {
        const el = pill;
        // Each pill flies to the center-bottom of the screen (where runtime box is)
        tl.to(el, {
          x: () => {
            const pr = el.getBoundingClientRect();
            const rt = document.getElementById('hero-runtime').getBoundingClientRect();
            return rt.left + rt.width / 2 - (pr.left + pr.width / 2);
          },
          y: () => {
            const pr = el.getBoundingClientRect();
            const rt = document.getElementById('hero-runtime').getBoundingClientRect();
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
`
