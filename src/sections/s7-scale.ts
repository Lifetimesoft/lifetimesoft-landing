export const css: string = /* css */ `
    /* ── S7: CAPABILITY ── */
    #s7-scale {
      overflow: hidden;
      padding: 7rem 2rem 6rem;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .cap-headline {
      text-align: center;
      font-size: clamp(1.9rem, 4.5vw, 3.2rem);
      font-weight: 800;
      letter-spacing: -1.5px;
      line-height: 1.15;
      margin-bottom: .8rem;
      opacity: 0;
      transform: translateY(20px);
    }
    .cap-headline .hi {
      background: linear-gradient(135deg, var(--accent), var(--accent2));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    .cap-sub {
      text-align: center;
      color: var(--muted);
      font-size: 1rem;
      margin-bottom: 4rem;
      opacity: 0;
    }

    /* ── stage: agent body + skill tree ── */
    .cap-stage {
      display: grid;
      grid-template-columns: 1fr auto 1fr;
      gap: 0 3rem;
      align-items: center;
      max-width: 900px;
      width: 100%;
    }
    @media (max-width: 640px) {
      .cap-stage {
        grid-template-columns: 1fr;
        grid-template-rows: auto auto auto;
        gap: 2rem;
      }
    }

    /* ── LEFT: install feed ── */
    .cap-feed {
      display: flex;
      flex-direction: column;
      gap: .75rem;
      align-items: flex-end;
    }
    .cap-install-row {
      display: flex;
      align-items: center;
      gap: .65rem;
      opacity: 0;
      transform: translateX(-24px);
    }
    .cap-install-icon {
      width: 40px; height: 40px;
      border-radius: 12px;
      background: var(--surface);
      border: 1px solid rgba(255,255,255,.1);
      display: flex; align-items: center; justify-content: center;
      font-size: 1.2rem;
      flex-shrink: 0;
    }
    .cap-install-label {
      font-size: .82rem;
      font-weight: 600;
      color: var(--text);
    }
    .cap-install-btn {
      padding: .25rem .75rem;
      border-radius: 999px;
      border: 1px solid rgba(124,92,252,.5);
      color: var(--accent2);
      font-size: .72rem;
      font-weight: 700;
      background: rgba(124,92,252,.08);
      flex-shrink: 0;
      transition: background .2s;
    }
    .cap-install-btn.done {
      border-color: rgba(34,197,94,.5);
      color: #86efac;
      background: rgba(34,197,94,.08);
    }
    /* connector line from row to agent */
    .cap-install-line {
      flex: 1;
      height: 1px;
      background: linear-gradient(to right, rgba(124,92,252,.5), transparent);
      opacity: 0;
      min-width: 20px;
    }

    /* ── CENTRE: agent body ── */
    .cap-agent {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: .5rem;
      position: relative;
    }
    .cap-agent-body {
      width: 100px; height: 100px;
      border-radius: 28px;
      background: var(--surface);
      border: 2px solid rgba(255,255,255,.1);
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: repeat(3, 1fr);
      gap: 4px;
      padding: 10px;
      position: relative;
      transition: border-color .4s;
    }
    .cap-agent-body.powered {
      border-color: var(--accent);
      box-shadow: 0 0 28px rgba(124,92,252,.4);
    }
    /* skill slots inside agent */
    .cap-slot {
      border-radius: 6px;
      background: rgba(255,255,255,.06);
      display: flex; align-items: center; justify-content: center;
      font-size: .75rem;
      opacity: 0;
      transform: scale(0);
      transition: background .3s;
    }
    .cap-slot.filled {
      background: rgba(124,92,252,.2);
      border: 1px solid rgba(124,92,252,.35);
    }
    .cap-agent-label {
      font-size: .75rem;
      font-weight: 700;
      color: var(--muted);
      text-transform: uppercase;
      letter-spacing: 1.5px;
    }
    /* empty state label */
    .cap-empty-label {
      position: absolute;
      top: 50%; left: 50%;
      transform: translate(-50%,-50%);
      font-size: .55rem;
      color: rgba(255,255,255,.25);
      text-align: center;
      line-height: 1.4;
      pointer-events: none;
      transition: opacity .3s;
    }
    .cap-agent-body.powered .cap-empty-label { opacity: 0; }

    /* ── RIGHT: skill tree badges ── */
    .cap-tree {
      display: flex;
      flex-direction: column;
      gap: .75rem;
      align-items: flex-start;
    }
    .cap-skill-badge {
      display: flex;
      align-items: center;
      gap: .55rem;
      padding: .4rem .9rem .4rem .5rem;
      border-radius: 999px;
      background: var(--surface);
      border: 1px solid rgba(255,255,255,.07);
      opacity: 0;
      transform: translateX(24px);
      transition: border-color .3s;
    }
    .cap-skill-badge.active {
      border-color: rgba(124,92,252,.45);
      box-shadow: 0 0 12px rgba(124,92,252,.18);
    }
    .cap-skill-dot {
      width: 8px; height: 8px;
      border-radius: 50%;
      background: rgba(255,255,255,.2);
      flex-shrink: 0;
      transition: background .3s;
    }
    .cap-skill-badge.active .cap-skill-dot { background: var(--accent); }
    .cap-skill-name {
      font-size: .8rem;
      font-weight: 600;
      color: var(--muted);
      transition: color .3s;
    }
    .cap-skill-badge.active .cap-skill-name { color: var(--text); }
`

export const html: string = /* html */ `
  <!-- ── S7: CAPABILITY ── -->
  <section id="s7-scale" class="section">

    <h2 class="cap-headline" id="cap-headline">
      Install capabilities.<br/>
      <span class="hi">Don't rebuild them.</span>
    </h2>
    <p class="cap-sub" id="cap-sub">
      Drop any capability into your agent in one line. No boilerplate. No SDK wrangling.
    </p>

    <div class="cap-stage">

      <!-- LEFT: install feed -->
      <div class="cap-feed" id="cap-feed">
        <div class="cap-install-row" id="cir-0">
          <div class="cap-install-icon">📁</div>
          <span class="cap-install-label">Google Drive</span>
          <span class="cap-install-btn" id="cib-0">Install</span>
          <div class="cap-install-line"></div>
        </div>
        <div class="cap-install-row" id="cir-1">
          <div class="cap-install-icon">🛒</div>
          <span class="cap-install-label">Shopee</span>
          <span class="cap-install-btn" id="cib-1">Install</span>
          <div class="cap-install-line"></div>
        </div>
        <div class="cap-install-row" id="cir-2">
          <div class="cap-install-icon">💬</div>
          <span class="cap-install-label">Slack</span>
          <span class="cap-install-btn" id="cib-2">Install</span>
          <div class="cap-install-line"></div>
        </div>
        <div class="cap-install-row" id="cir-3">
          <div class="cap-install-icon">🔍</div>
          <span class="cap-install-label">OCR</span>
          <span class="cap-install-btn" id="cib-3">Install</span>
          <div class="cap-install-line"></div>
        </div>
      </div>

      <!-- CENTRE: agent body -->
      <div class="cap-agent" id="cap-agent">
        <div class="cap-agent-body" id="cap-agent-body">
          <span class="cap-empty-label">No skills<br/>installed</span>
          <div class="cap-slot" id="cs-0"></div>
          <div class="cap-slot" id="cs-1"></div>
          <div class="cap-slot" id="cs-2"></div>
          <div class="cap-slot" id="cs-3"></div>
          <div class="cap-slot" id="cs-4"></div>
          <div class="cap-slot" id="cs-5"></div>
          <div class="cap-slot" id="cs-6"></div>
          <div class="cap-slot" id="cs-7"></div>
          <div class="cap-slot" id="cs-8"></div>
        </div>
        <span class="cap-agent-label" id="cap-agent-label">Agent</span>
      </div>

      <!-- RIGHT: skill tree -->
      <div class="cap-tree" id="cap-tree">
        <div class="cap-skill-badge" id="csb-0">
          <div class="cap-skill-dot"></div>
          <span class="cap-skill-name">📁 Read &amp; write files</span>
        </div>
        <div class="cap-skill-badge" id="csb-1">
          <div class="cap-skill-dot"></div>
          <span class="cap-skill-name">🛒 Browse &amp; purchase</span>
        </div>
        <div class="cap-skill-badge" id="csb-2">
          <div class="cap-skill-dot"></div>
          <span class="cap-skill-name">💬 Send messages</span>
        </div>
        <div class="cap-skill-badge" id="csb-3">
          <div class="cap-skill-dot"></div>
          <span class="cap-skill-name">🔍 Extract text from images</span>
        </div>
        <div class="cap-skill-badge" id="csb-4">
          <div class="cap-skill-dot"></div>
          <span class="cap-skill-name">✨ +856 more capabilities</span>
        </div>
      </div>

    </div>
  </section>
`

export const js: string = /* js */ `
    // ── S7: CAPABILITY ───────────────────────────────────────────────
    (function capabilityInit() {
      const st = { trigger: '#s7-scale', start: 'top 72%' };

      // headline + sub
      gsap.to('#cap-headline', { scrollTrigger: st, opacity:1, y:0, duration:0.8, ease:'power3.out' });
      gsap.to('#cap-sub',      { scrollTrigger: st, opacity:1, duration:0.6, delay:0.2, ease:'power3.out' });

      // agent body fades in first (empty/hollow)
      gsap.to('#cap-agent-body', {
        scrollTrigger: st,
        borderColor: 'rgba(255,255,255,.15)',
        duration: 0.5, delay: 0.3, ease: 'power2.out',
      });

      // empty slots fade in as pale boxes
      gsap.to('.cap-slot', {
        scrollTrigger: st,
        opacity: 1,
        scale: 1,
        duration: 0.3,
        stagger: 0.04,
        delay: 0.4,
        ease: 'back.out(1.4)',
      });

      // ── install sequence: each capability installs one by one ──
      const caps = [
        { row:'#cir-0', btn:'#cib-0', slots:[0,1], badge:'#csb-0', icon:'📁' },
        { row:'#cir-1', btn:'#cib-1', slots:[2,3], badge:'#csb-1', icon:'🛒' },
        { row:'#cir-2', btn:'#cib-2', slots:[4,5], badge:'#csb-2', icon:'💬' },
        { row:'#cir-3', btn:'#cib-3', slots:[6,7], badge:'#csb-3', icon:'🔍' },
      ];

      caps.forEach(({ row, btn, slots, badge, icon }, i) => {
        const delay = 0.6 + i * 0.55;

        // row slides in
        gsap.to(row, {
          scrollTrigger: st,
          opacity: 1, x: 0,
          duration: 0.5, delay,
          ease: 'power3.out',
        });

        // connector line extends
        gsap.to(row + ' .cap-install-line', {
          scrollTrigger: st,
          opacity: 1,
          duration: 0.3, delay: delay + 0.25,
          ease: 'power2.out',
        });

        // button flips to "✓ Done"
        gsap.to({}, {
          scrollTrigger: st,
          duration: 0.01,
          delay: delay + 0.4,
          onComplete() {
            const el = document.querySelector(btn);
            if (el) { el.textContent = '✓ Done'; el.classList.add('done'); }
          },
        });

        // slots in agent light up
        slots.forEach((si, j) => {
          gsap.to('#cs-' + si, {
            scrollTrigger: st,
            duration: 0.01,
            delay: delay + 0.4 + j * 0.08,
            onComplete() {
              const el = document.getElementById('cs-' + si);
              if (el) { el.textContent = icon; el.classList.add('filled'); }
            },
          });
        });

        // skill badge activates on right side
        gsap.to(badge, {
          scrollTrigger: st,
          opacity: 1, x: 0,
          duration: 0.45, delay: delay + 0.45,
          ease: 'power3.out',
          onComplete() {
            document.querySelector(badge)?.classList.add('active');
          },
        });
      });

      // after all installs — agent body goes fully powered
      gsap.to({}, {
        scrollTrigger: st,
        duration: 0.01,
        delay: 0.6 + caps.length * 0.55 + 0.4,
        onComplete() {
          document.getElementById('cap-agent-body')?.classList.add('powered');
          // last slot + "+more" badge
          const s8 = document.getElementById('cs-8');
          if (s8) { s8.textContent = '✨'; s8.classList.add('filled'); s8.style.opacity = '1'; }
        },
      });

      // "+856 more" badge slides in last
      gsap.to('#csb-4', {
        scrollTrigger: st,
        opacity: 1, x: 0,
        duration: 0.45,
        delay: 0.6 + caps.length * 0.55 + 0.6,
        ease: 'back.out(1.4)',
        onComplete() {
          document.getElementById('csb-4')?.classList.add('active');
        },
      });
    })();
`
