export const css: string = /* css */ `
    /* ── S6: MARKETPLACE ── */
    #s6-marketplace-wrap {
      height: 4200px; /* pin height = 100vh + scroll room */
    }
    #s6-marketplace {
      min-height: unset;
      height: 100vh;
      padding: 0;
      overflow: hidden;
      border-bottom: none;
      display: block;
    }
    .mkt-sticky {
      position: relative;
      width: 100%;
      height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      overflow: hidden;
    }

    /* ambient glow */
    .mkt-bg-glow {
      position: absolute;
      inset: 0;
      pointer-events: none;
      background: radial-gradient(ellipse 70% 60% at 50% 50%,
        rgba(124,92,252,.14) 0%, transparent 70%);
    }

    /* ── headline ── */
    .mkt-headline {
      position: relative;
      z-index: 6;
      text-align: center;
      font-size: clamp(2.4rem, 6vw, 5rem);
      font-weight: 900;
      letter-spacing: -2px;
      line-height: 1;
      opacity: 0;
      transform: translateY(30px);
      margin-bottom: 1rem;
    }
    .mkt-headline .grad {
      background: linear-gradient(135deg, var(--accent), var(--accent2));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    .mkt-sub {
      position: relative;
      z-index: 6;
      color: var(--muted);
      font-size: 1rem;
      text-align: center;
      opacity: 0;
      margin-bottom: 3rem;
    }

    /* ── wallet stack ── */
    .mkt-stack {
      position: relative;
      z-index: 5;
      width: min(480px, 90vw);
      height: 320px; /* visible stack area */
    }

    /* each card */
    .mkt-card {
      position: absolute;
      left: 0; right: 0;
      height: 88px;
      border-radius: 22px;
      padding: 0 1.8rem;
      display: flex;
      align-items: center;
      gap: 1.2rem;
      cursor: default;
      will-change: transform, opacity;
      /* initial stacked — all at bottom, slightly scaled down */
      bottom: 0;
      transform: translateY(0px) scale(1);
      opacity: 0;
      box-shadow: 0 8px 32px rgba(0,0,0,.5);
    }
    /* card colour themes */
    .mkt-card:nth-child(1),
    .mkt-card:nth-child(2),
    .mkt-card:nth-child(3),
    .mkt-card:nth-child(4),
    .mkt-card:nth-child(5) {
      background: #ffffff;
      border: 1px solid var(--line-strong);
      border-left: 4px solid var(--accent);
    }

    .mkt-card-icon {
      font-size: 2rem;
      flex-shrink: 0;
      width: 48px; height: 48px;
      border-radius: 14px;
      background: rgba(255,255,255,.1);
      display: flex; align-items: center; justify-content: center;
    }
    .mkt-card-text { flex: 1; }
    .mkt-card-title {
      font-size: 1rem;
      font-weight: 700;
      color: var(--text);
      letter-spacing: -.3px;
    }
    .mkt-card-count {
      font-size: .75rem;
      color: rgba(255,255,255,.55);
      margin-top: .15rem;
    }
    .mkt-card-arrow {
      font-size: 1.1rem;
      color: rgba(255,255,255,.4);
    }

    /* scroll hint */
    .mkt-scroll-hint {
      position: relative;
      z-index: 6;
      margin-top: 2rem;
      color: var(--muted);
      font-size: .75rem;
      text-transform: uppercase;
      letter-spacing: 2px;
      opacity: 0;
      display: flex;
      align-items: center;
      gap: .4rem;
    }
    .mkt-scroll-hint::before {
      content: '';
      display: inline-block;
      width: 16px; height: 28px;
      border: 1.5px solid var(--muted);
      border-radius: 8px;
      position: relative;
    }
    .mkt-scroll-dot {
      position: absolute;
      width: 4px; height: 4px;
      background: var(--muted);
      border-radius: 50%;
      left: 6px; top: 6px;
      animation: scrollBounce 1.4s ease-in-out infinite;
    }
    @keyframes scrollBounce {
      0%,100% { transform: translateY(0); }
      50%      { transform: translateY(10px); }
    }
`

export const html: string = /* html */ `
  <!-- ── S6: MARKETPLACE ── -->
  <div id="s6-marketplace-wrap">
    <section id="s6-marketplace">
      <div class="mkt-sticky" id="mkt-sticky">

        <div class="mkt-bg-glow"></div>

        <h2 class="mkt-headline" id="mkt-headline">
          <span class="grad">Marketplace</span>
        </h2>
        <p class="mkt-sub" id="mkt-sub">
          Everything your agent needs — one place to find, publish and compose.
        </p>

        <!-- wallet card stack -->
        <div class="mkt-stack" id="mkt-stack">
          <div class="mkt-card" id="mc-0">
            <div class="mkt-card-icon">🤖</div>
            <div class="mkt-card-text">
              <div class="mkt-card-title">Agent Marketplace</div>
              <div class="mkt-card-count">2,400+ agents</div>
            </div>
            <span class="mkt-card-arrow">›</span>
          </div>
          <div class="mkt-card" id="mc-1">
            <div class="mkt-card-icon">⚡</div>
            <div class="mkt-card-text">
              <div class="mkt-card-title">Capability Marketplace</div>
              <div class="mkt-card-count">860+ capabilities</div>
            </div>
            <span class="mkt-card-arrow">›</span>
          </div>
          <div class="mkt-card" id="mc-2">
            <div class="mkt-card-icon">🔧</div>
            <div class="mkt-card-text">
              <div class="mkt-card-title">Tool Marketplace</div>
              <div class="mkt-card-count">1,200+ tools</div>
            </div>
            <span class="mkt-card-arrow">›</span>
          </div>
          <div class="mkt-card" id="mc-3">
            <div class="mkt-card-icon">🔄</div>
            <div class="mkt-card-text">
              <div class="mkt-card-title">Workflow Marketplace</div>
              <div class="mkt-card-count">540+ workflows</div>
            </div>
            <span class="mkt-card-arrow">›</span>
          </div>
          <div class="mkt-card" id="mc-4">
            <div class="mkt-card-icon">⬡</div>
            <div class="mkt-card-text">
              <div class="mkt-card-title">Runtime Marketplace</div>
              <div class="mkt-card-count">120+ runtimes</div>
            </div>
            <span class="mkt-card-arrow">›</span>
          </div>
        </div>

        <!-- scroll hint -->
        <div class="mkt-scroll-hint" id="mkt-scroll-hint">
          <div style="position:relative;width:16px;height:28px;border:1.5px solid var(--muted);border-radius:8px;flex-shrink:0">
            <div class="mkt-scroll-dot"></div>
          </div>
          Scroll to expand
        </div>

      </div>
    </section>
  </div>
`

export const js: string = /* js */ `
    // ── S6: MARKETPLACE WALLET ───────────────────────────────────────
    (function marketplaceInit() {
      const CARDS   = 5;
      const CARD_H  = 88;   // px — card height
      const GAP_COL = 14;   // px — gap when collapsed (peek)
      const GAP_EXP = 56;   // px — gap when fully fanned open

      // ── Phase 0: entry — headline + sub fade in ──────────────────
      const entryST = { trigger: '#s6-marketplace-wrap', start: 'top 80%' };
      gsap.to('#mkt-headline', { scrollTrigger: entryST, opacity:1, y:0, duration:0.9, ease:'power3.out' });
      gsap.to('#mkt-sub',      { scrollTrigger: entryST, opacity:1, duration:0.7, delay:0.2, ease:'power3.out' });
      gsap.to('#mkt-scroll-hint', { scrollTrigger: entryST, opacity:1, duration:0.5, delay:0.8 });

      // ── Pin the sticky viewport ──────────────────────────────────
      ScrollTrigger.create({
        trigger: '#s6-marketplace-wrap',
        start: 'top top',
        end: '+=3200',
        pin: '#mkt-sticky',
        anticipatePin: 1,
      });

      // ── Phase 1 (0→0.25 of scroll): cards bounce up from bottom ──
      // Each card starts stacked at the same y, then fans into collapsed wallet
      const tlEntry = gsap.timeline({
        scrollTrigger: {
          trigger: '#s6-marketplace-wrap',
          start: 'top top',
          end: '+=800',
          scrub: 1,
        },
      });

      for (let i = 0; i < CARDS; i++) {
        const collapseY = (CARDS - 1 - i) * GAP_COL; // bottom card = 0, top card highest
        tlEntry.to('#mc-' + i, {
          opacity: 1,
          y: -collapseY,
          scale: 1 - (CARDS - 1 - i) * 0.018,
          duration: 0.3,
          ease: 'back.out(1.4)',
        }, i * 0.06);
      }

      // ── Phase 2 (0.25→1.0 of scroll): Apple Wallet fan open ──────
      // Cards spread vertically, each fully visible
      const tlFan = gsap.timeline({
        scrollTrigger: {
          trigger: '#s6-marketplace-wrap',
          start: '+=800',
          end: '+=2400',
          scrub: 1.2,
        },
      });

      for (let i = 0; i < CARDS; i++) {
        const collapseY  = -((CARDS - 1 - i) * GAP_COL);
        const expandedY  = -((CARDS - 1 - i) * (CARD_H + GAP_EXP));
        tlFan.to('#mc-' + i, {
          y: expandedY,
          scale: 1,
          duration: 0.4,
          ease: 'power2.inOut',
        }, i * 0.05);
      }

      // hide scroll hint once fanning starts
      tlFan.to('#mkt-scroll-hint', { opacity:0, duration:0.1 }, 0);

    })();
`
