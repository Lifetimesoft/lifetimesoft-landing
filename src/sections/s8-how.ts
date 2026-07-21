export const css: string = /* css */ `
    /* ── S8: CLI ── */
    #s8-how {
      overflow: hidden;
      padding: 7rem 2rem 6rem;
    }

    .cli-headline {
      text-align: center;
      font-size: clamp(1.9rem, 4.5vw, 3.2rem);
      font-weight: 800;
      letter-spacing: -1.5px;
      line-height: 1.15;
      margin-bottom: .8rem;
      opacity: 0;
      transform: translateY(20px);
    }
    .cli-headline .hi {
      background: var(--accent);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    .cli-sub {
      text-align: center;
      color: var(--muted);
      font-size: 1rem;
      margin-bottom: 3.5rem;
      opacity: 0;
    }

    /* two-column layout */
    .cli-body {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2rem 3rem;
      max-width: 980px;
      width: 100%;
      align-items: start;
    }
    @media (max-width: 680px) {
      .cli-body { grid-template-columns: 1fr; }
    }

    /* ── LEFT: terminal window ── */
    .cli-terminal {
      border-radius: 16px;
      background: #ffffff;
      border: 1px solid rgba(255,255,255,.09);
      box-shadow: 0 24px 64px rgba(0,0,0,.6);
      overflow: hidden;
      opacity: 0;
      transform: translateY(24px);
    }
    /* titlebar */
    .cli-titlebar {
      display: flex;
      align-items: center;
      gap: .5rem;
      padding: .7rem 1rem;
      background: rgba(255,255,255,.04);
      border-bottom: 1px solid rgba(255,255,255,.06);
    }
    .cli-dot { width:10px;height:10px;border-radius:50%; }
    .cli-dot:nth-child(1),
    .cli-dot:nth-child(2),
    .cli-dot:nth-child(3){background:var(--accent);}
    .cli-title {
      margin-left:.5rem;
      font-size:.72rem;
      color:var(--muted);
      letter-spacing:.5px;
    }

    /* terminal body */
    .cli-screen {
      padding: 1.4rem 1.6rem;
      font-family: 'SF Mono', 'Fira Code', 'Cascadia Code', monospace;
      font-size: .82rem;
      line-height: 1.8;
      min-height: 300px;
    }
    .cli-prompt { color: var(--accent); }
    .cli-cmd    { color: var(--text); }
    .cli-cursor {
      display: inline-block;
      width: 8px; height: 1em;
      background: var(--text);
      vertical-align: text-bottom;
      animation: blink .9s step-end infinite;
    }
    @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }

    .cli-out-line {
      display: block;
      opacity: 0;
      transform: translateX(-6px);
    }
    .cli-out-line.ok    { color: var(--accent); }
    .cli-out-line.dim   { color: var(--muted); }
    .cli-out-line.info  { color: var(--accent); }
    .cli-out-line.warn  { color: var(--accent); }

    /* ── RIGHT: deploy visualisation ── */
    .cli-deploy {
      display: flex;
      flex-direction: column;
      gap: 1.2rem;
      padding-top: .5rem;
    }

    .cli-deploy-title {
      font-size: .72rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 2px;
      color: var(--muted);
      opacity: 0;
    }

    .cli-env-card {
      background: var(--surface);
      border: 1px solid rgba(255,255,255,.07);
      border-radius: 14px;
      padding: 1rem 1.2rem;
      display: flex;
      align-items: center;
      gap: 1rem;
      opacity: 0;
      transform: translateX(20px);
      transition: border-color .3s;
    }
    .cli-env-card.live {
      border-color: rgba(21,128,61,.45);
      box-shadow: none;
    }
    .cli-env-icon {
      font-size: 1.6rem;
      flex-shrink: 0;
    }
    .cli-env-info { flex: 1; }
    .cli-env-name {
      font-size: .9rem;
      font-weight: 700;
      color: var(--text);
    }
    .cli-env-url {
      font-size: .72rem;
      color: var(--muted);
      font-family: 'SF Mono','Fira Code',monospace;
      margin-top: .15rem;
    }

    /* status badge */
    .cli-status {
      padding: .2rem .7rem;
      border-radius: 999px;
      font-size: .68rem;
      font-weight: 700;
      background: rgba(255,255,255,.07);
      color: var(--muted);
      transition: background .3s, color .3s;
      white-space: nowrap;
    }
    .cli-env-card.live .cli-status {
      background: rgba(21,128,61,.15);
      color: var(--accent);
    }

    /* deploy beam SVG */
    .cli-beam-svg {
      position: absolute;
      pointer-events: none;
      overflow: visible;
      opacity: 0;
      transition: opacity .3s;
    }
    .cli-beam-path {
      stroke: rgba(21,128,61,.5);
      stroke-width: 1.5;
      stroke-dasharray: 6 4;
      fill: none;
      animation: beamFlow 1.2s linear infinite;
    }
    @keyframes beamFlow { to { stroke-dashoffset: -20; } }
`

export const html: string = /* html */ `
  <!-- ── S8: CLI ── -->
  <section id="s8-how" class="section">

    <h2 class="cli-headline" id="cli-headline">
      <span class="hi">lifectl</span> — one CLI.<br/>All your agents.
    </h2>
    <p class="cli-sub" id="cli-sub">
      Create, install capabilities, and deploy to any environment in seconds.
    </p>

    <div class="cli-body">

      <!-- LEFT: terminal -->
      <div class="cli-terminal" id="cli-terminal">
        <div class="cli-titlebar">
          <div class="cli-dot"></div>
          <div class="cli-dot"></div>
          <div class="cli-dot"></div>
          <span class="cli-title">lifectl — zsh</span>
        </div>
        <div class="cli-screen" id="cli-screen">
          <!-- lines injected by JS -->
        </div>
      </div>

      <!-- RIGHT: deploy targets -->
      <div class="cli-deploy" id="cli-deploy">
        <div class="cli-deploy-title" id="cli-deploy-title">Deployed to</div>

        <div class="cli-env-card" id="cec-0">
          <div class="cli-env-icon">☁️</div>
          <div class="cli-env-info">
            <div class="cli-env-name">Cloud</div>
            <div class="cli-env-url">agent.lifetimesoft.cloud</div>
          </div>
          <span class="cli-status" id="ces-0">Pending</span>
        </div>

        <div class="cli-env-card" id="cec-1">
          <div class="cli-env-icon">🌐</div>
          <div class="cli-env-info">
            <div class="cli-env-name">Browser</div>
            <div class="cli-env-url">cdn.lifetimesoft.io/wasm</div>
          </div>
          <span class="cli-status" id="ces-1">Pending</span>
        </div>

        <div class="cli-env-card" id="cec-2">
          <div class="cli-env-icon">🖥️</div>
          <div class="cli-env-info">
            <div class="cli-env-name">Desktop</div>
            <div class="cli-env-url">localhost:3000/agent</div>
          </div>
          <span class="cli-status" id="ces-2">Pending</span>
        </div>
      </div>

    </div>
  </section>
`

export const js: string = /* js */ `
    // ── S8: CLI ──────────────────────────────────────────────────────
    (function cliInit() {
      const st = { trigger: '#s8-how', start: 'top 70%' };

      gsap.to('#cli-headline', { scrollTrigger: st, opacity:1, y:0, duration:0.8, ease:'power3.out' });
      gsap.to('#cli-sub',      { scrollTrigger: st, opacity:1, duration:0.6, delay:0.2, ease:'power3.out' });

      // terminal window slides up
      gsap.to('#cli-terminal', {
        scrollTrigger: st,
        opacity:1, y:0, duration:0.7, delay:0.3, ease:'power3.out',
      });

      // deploy panel title
      gsap.to('#cli-deploy-title', {
        scrollTrigger: st,
        opacity:1, duration:0.5, delay:0.4, ease:'power2.out',
      });

      // deploy cards slide in
      ['#cec-0','#cec-1','#cec-2'].forEach((id, i) => {
        gsap.to(id, {
          scrollTrigger: st,
          opacity:1, x:0, duration:0.5, delay:0.5 + i * 0.12, ease:'power3.out',
        });
      });

      // ── typewriter sequence ──────────────────────────────────────
      const screen = document.getElementById('cli-screen');
      if (!screen) return;

      // helper: append a new line element
      function addLine(cls, text) {
        const el = document.createElement('span');
        el.className = 'cli-out-line ' + cls;
        el.textContent = text;
        screen.appendChild(el);
        return el;
      }

      // helper: typewriter into a <span> then call done()
      function typeInto(el, text, speed, done) {
        let i = 0;
        el.textContent = '';
        const id = setInterval(() => {
          el.textContent = text.slice(0, ++i);
          if (i >= text.length) { clearInterval(id); done(); }
        }, speed);
      }

      // cursor element persists
      const cursor = document.createElement('span');
      cursor.className = 'cli-cursor';

      let started = false;

      ScrollTrigger.create({
        trigger: '#s8-how',
        start: 'top 65%',
        onEnter() {
          if (started) return;
          started = true;

          // sequence of { cmd, outputs[], deployIdx? }
          const SEQ = [
            {
              cmd: 'lifectl create agent',
              outputs: [
                { cls:'ok',   t:'✓ Scaffolded my-agent/' },
                { cls:'dim',  t:'  src/index.ts  ·  lifectl.config.json' },
              ],
              delay: 0,
            },
            {
              cmd: 'lifectl install capability github',
              outputs: [
                { cls:'info', t:'→ Resolving capability@github…' },
                { cls:'ok',   t:'✓ Installed: read_repo, create_pr, push_commit' },
              ],
              delay: 0,
            },
            {
              cmd: 'lifectl deploy',
              outputs: [
                { cls:'info', t:'→ Building agent bundle…' },
                { cls:'ok',   t:'✓ Cloud       agent.lifetimesoft.cloud' },
                { cls:'ok',   t:'✓ Browser     cdn.lifetimesoft.io/wasm' },
                { cls:'ok',   t:'✓ Desktop     localhost:3000/agent' },
                { cls:'warn', t:'⚡ Deploy complete  3 targets  1.2s' },
              ],
              deployAfterOutput: 2, // start lighting cards after output index 2
              delay: 0,
            },
          ];

          let globalDelay = 600; // ms

          SEQ.forEach((step) => {
            // prompt + command line
            const cmdWrap = document.createElement('div');
            cmdWrap.style.cssText = 'display:flex;align-items:center;gap:4px;opacity:0';
            const promptEl = document.createElement('span');
            promptEl.className = 'cli-prompt';
            promptEl.textContent = '❯ ';
            const cmdEl = document.createElement('span');
            cmdEl.className = 'cli-cmd';
            cmdWrap.appendChild(promptEl);
            cmdWrap.appendChild(cmdEl);
            screen.appendChild(cursor); // move cursor to end
            screen.appendChild(cmdWrap);

            setTimeout(() => {
              cmdWrap.style.opacity = '1';
              typeInto(cmdEl, step.cmd, 42, () => {
                // after typing, show outputs
                step.outputs.forEach((out, oi) => {
                  setTimeout(() => {
                    const line = addLine(out.cls, out.t);
                    gsap.fromTo(line, { opacity:0, x:-4 }, { opacity:1, x:0, duration:0.25 });

                    // light up deploy cards when deploy cmd outputs arrive
                    if (step.deployAfterOutput !== undefined && oi >= step.deployAfterOutput) {
                      const cardIdx = oi - step.deployAfterOutput;
                      const card    = document.getElementById('cec-' + cardIdx);
                      const status  = document.getElementById('ces-' + cardIdx);
                      if (card && status) {
                        setTimeout(() => {
                          card.classList.add('live');
                          status.textContent = '✓ Live';
                        }, 200);
                      }
                    }
                  }, oi * 340);
                });

                // blank line spacer
                setTimeout(() => {
                  const br = document.createElement('br');
                  screen.appendChild(br);
                }, step.outputs.length * 340 + 100);
              });
            }, globalDelay);

            globalDelay += step.cmd.length * 42 + step.outputs.length * 340 + 600;
          });
        },
        once: true,
      });
    })();
`
