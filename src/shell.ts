export function buildPage(sections: Array<{ css: string; html: string; js: string }>): string {
  const allCss  = sections.map(s => s.css).join('\n')
  const allHtml = sections.map(s => s.html).join('\n')
  const allJs   = sections.map(s => s.js).join('\n')

  return /* html */ `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Lifetimesoft</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600;700&display=swap" rel="stylesheet" />
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    :root {
      --bg: #ffffff;
      --surface: #fafafa;
      --surface2: #f3f4f6;
      --accent: #5b5fef;
      --accent2: #5b5fef;
      --text: #111111;
      --muted: #666666;
      --line: #e5e7eb;
      --line-strong: #d1d5db;
    }

    html { scroll-behavior: smooth; }

    body {
      background: var(--bg);
      color: var(--text);
      font-family: 'Inter', system-ui, sans-serif;
      overflow-x: hidden;
    }

    h1, h2, h3, h4,
    .hero-line1,
    .hero-line2,
    .nav-logo {
      font-family: 'Inter', system-ui, sans-serif;
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
      background: rgba(255,255,255,0.82);
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

    /* ── BTN ── */
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

${allCss}

    /* DESIGN SYSTEM OVERRIDE: light, line-driven, single accent */
    body {
      background:
        linear-gradient(rgba(17,17,17,.035) 1px, transparent 1px),
        linear-gradient(90deg, rgba(17,17,17,.035) 1px, transparent 1px),
        var(--bg);
      background-size: 42px 42px;
    }

    nav {
      background: rgba(255,255,255,.82);
      border-bottom: 1px solid var(--line);
      box-shadow: none;
    }
    .nav-links a { color: var(--muted); }
    .nav-links a:hover { color: var(--accent); }

    .section {
      background: transparent;
      border-bottom: 1px solid var(--line);
    }

    .btn {
      border-radius: 999px;
      box-shadow: none;
      transition: transform .2s, border-color .2s, background .2s, color .2s;
    }
    .btn:hover {
      transform: scale(1.03);
      box-shadow: none;
    }
    .btn-primary {
      background: var(--accent);
      color: #ffffff;
      border: 1px solid var(--accent);
      box-shadow: none;
    }
    .btn-primary:hover { box-shadow: none; }
    .btn-outline {
      background: #ffffff;
      border: 1px solid var(--line-strong);
      color: var(--text);
    }

    footer {
      background: #ffffff;
      border-top: 1px solid var(--line);
      color: var(--muted);
    }

    .hero-bg-glow,
    .mkt-bg-glow,
    .arch-bg,
    #s10-cta::before {
      background: none !important;
    }

    .hero-line2,
    .intro-headline .green,
    .run-headline .hi,
    .collab-headline .hi,
    .mkt-headline .grad,
    .cap-headline .hi,
    .cli-headline .hi,
    .arch-top-label h2 .hi,
    .cta-title .hi {
      background: none !important;
      color: var(--accent) !important;
      -webkit-text-fill-color: currentColor !important;
    }

    .agent-pill,
    .runtime-box,
    .prob-node-icon,
    .intro-node-box,
    .run-card,
    .run-stop-dot,
    .cf-bubble,
    .net-node-circle,
    .cap-install-row,
    .cap-agent-body,
    .cap-slot,
    .cap-skill-badge,
    .arch-layer,
    .arch-layer-badge,
    .arch-detail,
    .cli-terminal,
    .cli-env-card,
    .mkt-card,
    .cta-agent,
    .cta-node {
      background: #ffffff !important;
      border-color: var(--line-strong) !important;
      color: var(--text) !important;
      box-shadow: none !important;
    }

    .intro-runtime-orb {
      background: #ffffff !important;
      border: 2px solid var(--accent);
      color: var(--accent);
      box-shadow: none !important;
    }

    .mkt-card {
      border: 1px solid var(--line-strong) !important;
      border-left: 4px solid var(--accent) !important;
    }
    .mkt-card-icon,
    .arch-tag,
    .cli-status {
      background: var(--surface2) !important;
      color: var(--text) !important;
    }
    .mkt-card-title,
    .mkt-card-count,
    .mkt-card-arrow {
      color: var(--text) !important;
    }

    .cli-screen,
    .cli-titlebar {
      background: #ffffff !important;
      border-color: var(--line) !important;
      color: var(--text) !important;
    }
    .cli-screen,
    .cli-env-url,
    .cli-cmd,
    code,
    pre {
      font-family: 'JetBrains Mono', ui-monospace, monospace !important;
    }
    .cli-cmd,
    .cli-cursor {
      color: var(--text) !important;
      background: var(--text) !important;
    }

    .dot,
    .cf-dot,
    .arch-detail-dot,
    .cta-runtime-mark,
    .prob-x,
    .intro-packet,
    .run-packet,
    .cf-packet,
    .net-pkt {
      background: var(--accent) !important;
      fill: var(--accent) !important;
      color: var(--accent) !important;
      box-shadow: none !important;
    }

    .prob-line,
    .prob-line-heal,
    .intro-beam,
    .run-track-fill,
    .net-edge,
    .net-edge.active,
    .cli-beam-path,
    .cta-network-line,
    .cta-network-line.green {
      stroke: var(--accent) !important;
    }
    .run-track-line {
      stroke: var(--line-strong) !important;
    }

    .prob-tag,
    .intro-env,
    .cap-install-btn,
    .cap-install-btn.done,
    .cap-skill-badge.active,
    .cli-env-card.live,
    .arch-layer.active {
      background: rgba(91,95,239,.06) !important;
      border-color: var(--accent) !important;
      color: var(--accent) !important;
      box-shadow: none !important;
    }

    #s10-cta {
      background:
        linear-gradient(rgba(17,17,17,.05) 1px, transparent 1px),
        linear-gradient(90deg, rgba(17,17,17,.05) 1px, transparent 1px),
        #ffffff !important;
      background-size: 48px 48px !important;
      color: var(--text);
    }
    .cta-runtime { color: var(--muted) !important; }
    .cta-sub-dot { background: var(--line-strong) !important; }

    [class*="headline"],
    .cta-title,
    .arch-top-label h2 {
      color: var(--text);
      letter-spacing: -1px;
    }

    .section-placeholder {
      border-color: var(--line-strong);
      color: var(--muted);
    }

    /* Floating Network Bar */
    .platform-network-bar {
      position: fixed;
      top: 4.8rem;
      left: 50%;
      z-index: 99;
      width: min(1180px, calc(100vw - 2rem));
      transform: translate(-50%, -14px) scaleY(.94);
      transform-origin: top center;
      clip-path: inset(0 0 100% 0 round 18px);
      visibility: hidden;
      display: grid;
      grid-template-columns: minmax(430px, 1.4fr) minmax(250px, .8fr) 180px;
      gap: 1rem;
      align-items: center;
      padding: .75rem .9rem;
      border: 1px solid var(--line-strong);
      border-radius: 18px;
      background: rgba(255,255,255,.92);
      backdrop-filter: blur(14px);
      box-shadow: 0 18px 50px rgba(17,17,17,.08);
      transition: transform .35s ease, clip-path .35s ease, visibility .35s;
    }

    .platform-network-bar.is-live {
      transform: translate(-50%, 0) scaleY(1);
      clip-path: inset(0 0 0 0 round 18px);
      visibility: visible;
    }

    .pnb-runtimes,
    .pnb-stats {
      display: flex;
      align-items: center;
      gap: .45rem;
      flex-wrap: wrap;
    }

    .pnb-runtime {
      display: inline-flex;
      align-items: center;
      gap: .38rem;
      min-height: 30px;
      padding: .3rem .55rem;
      border: 1px solid var(--line);
      border-radius: 999px;
      background: #ffffff;
      color: var(--text);
      font-size: .68rem;
      font-weight: 700;
      white-space: nowrap;
    }

    .pnb-dot {
      width: 7px;
      height: 7px;
      border-radius: 50%;
      background: var(--accent);
      transform: scale(.9);
      animation: pnbNodePulse 1.8s ease-in-out infinite;
    }

    .pnb-runtime:nth-child(2) .pnb-dot { animation-delay: .2s; }
    .pnb-runtime:nth-child(3) .pnb-dot { animation-delay: .4s; }
    .pnb-runtime:nth-child(4) .pnb-dot { animation-delay: .6s; }
    .pnb-runtime:nth-child(5) .pnb-dot { animation-delay: .8s; }

    @keyframes pnbNodePulse {
      0%, 100% { transform: scale(.78); }
      50% { transform: scale(1.25); }
    }

    .pnb-status {
      color: var(--muted);
      font-weight: 600;
    }

    .pnb-stat {
      min-width: 78px;
      padding: .35rem .55rem;
      border-left: 2px solid var(--accent);
      background: var(--surface);
      border-radius: 10px;
    }

    .pnb-stat-value {
      display: block;
      font-family: 'JetBrains Mono', ui-monospace, monospace;
      font-size: .82rem;
      font-weight: 800;
      line-height: 1.1;
      color: var(--text);
    }

    .pnb-stat-label {
      display: block;
      margin-top: .1rem;
      color: var(--muted);
      font-size: .58rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: .4px;
    }

    .pnb-map {
      width: 100%;
      height: 52px;
      overflow: visible;
    }

    .pnb-edge {
      stroke: var(--line-strong);
      stroke-width: 1.6;
      stroke-dasharray: 9 7;
      stroke-dashoffset: 64;
      fill: none;
      transition: stroke .25s;
    }

    .pnb-edge.is-on {
      stroke: var(--accent);
      animation: pnbLineFlow 1.6s linear infinite;
    }

    @keyframes pnbLineFlow {
      to { stroke-dashoffset: 0; }
    }

    .pnb-node {
      fill: #ffffff;
      stroke: var(--accent);
      stroke-width: 1.6;
      transform-box: fill-box;
      transform-origin: center;
      transition: transform .25s;
    }

    .pnb-node.is-hot {
      transform: scale(1.22);
    }

    @media (max-width: 980px) {
      .platform-network-bar {
        top: 4.4rem;
        grid-template-columns: 1fr;
        gap: .6rem;
      }
      .pnb-map {
        display: none;
      }
    }

    @media (max-width: 640px) {
      .platform-network-bar {
        width: calc(100vw - 1rem);
        padding: .6rem;
      }
      .pnb-runtime {
        font-size: .62rem;
      }
      .pnb-stat {
        flex: 1 1 30%;
      }
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
      <li><a href="#s3-runtime">Runtime</a></li>
      <li><a href="#s4-run">Run Anywhere</a></li>
      <li><a href="#s5-collab">Collaboration</a></li>
      <li><a href="#s6-marketplace">Marketplace</a></li>
      <li><a href="#s7-scale">Capability</a></li>
      <li><a href="#s8-how">CLI</a></li>
      <li><a href="#s9-architecture">Architecture</a></li>
      <li><a href="#s10-cta">Get Started</a></li>
    </ul>
  </nav>

  <div class="platform-network-bar" id="platform-network-bar" aria-label="Live platform network status">
    <div class="pnb-runtimes">
      <div class="pnb-runtime"><span class="pnb-dot"></span>Cloud Runtime <span class="pnb-status" id="pnb-cloud">Connected</span></div>
      <div class="pnb-runtime"><span class="pnb-dot"></span>Browser Runtime <span class="pnb-status" id="pnb-browser">Connected</span></div>
      <div class="pnb-runtime"><span class="pnb-dot"></span>Mobile Runtime <span class="pnb-status" id="pnb-mobile">Connected</span></div>
      <div class="pnb-runtime"><span class="pnb-dot"></span>Desktop Runtime <span class="pnb-status" id="pnb-desktop">Connected</span></div>
      <div class="pnb-runtime"><span class="pnb-dot"></span>Edge Runtime <span class="pnb-status" id="pnb-edge-runtime">Connected</span></div>
    </div>

    <div class="pnb-stats">
      <div class="pnb-stat"><span class="pnb-stat-value" id="pnb-agents">237</span><span class="pnb-stat-label">Agents Online</span></div>
      <div class="pnb-stat"><span class="pnb-stat-value" id="pnb-caps">58</span><span class="pnb-stat-label">Capabilities</span></div>
      <div class="pnb-stat"><span class="pnb-stat-value" id="pnb-tools">19</span><span class="pnb-stat-label">Tool Links</span></div>
    </div>

    <svg class="pnb-map" viewBox="0 0 180 52" aria-hidden="true">
      <path class="pnb-edge" id="pnb-line-0" d="M18 27 C48 8, 78 8, 90 27" />
      <path class="pnb-edge" id="pnb-line-1" d="M90 27 C106 10, 138 10, 162 27" />
      <path class="pnb-edge" id="pnb-line-2" d="M18 27 C52 48, 128 48, 162 27" />
      <path class="pnb-edge" id="pnb-line-3" d="M54 14 C70 31, 110 31, 126 14" />
      <circle class="pnb-node" id="pnb-node-0" cx="18" cy="27" r="5" />
      <circle class="pnb-node" id="pnb-node-1" cx="54" cy="14" r="5" />
      <circle class="pnb-node" id="pnb-node-2" cx="90" cy="27" r="6" />
      <circle class="pnb-node" id="pnb-node-3" cx="126" cy="14" r="5" />
      <circle class="pnb-node" id="pnb-node-4" cx="162" cy="27" r="5" />
    </svg>
  </div>

${allHtml}

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
    gsap.from('#navbar', {
      y: -60,
      scaleY: 0.96,
      transformOrigin: 'top center',
      duration: 0.8,
      ease: 'power3.out',
    });

    // ── Section scale reveal on scroll ───────────────────────────────
    gsap.utils.toArray('.section').forEach((el) => {
      gsap.from(el, {
        scrollTrigger: { trigger: el, start: 'top 80%' },
        scale: 0.985,
        transformOrigin: 'center center',
        duration: 0.6,
        ease: 'power3.out',
      });
    });

    // ── Floating Network Bar ────────────────────────────────────────
    (function platformNetworkBarInit() {
      const bar = document.getElementById('platform-network-bar');
      if (!bar) return;

      const statusEls = {
        cloud: document.getElementById('pnb-cloud'),
        browser: document.getElementById('pnb-browser'),
        mobile: document.getElementById('pnb-mobile'),
        desktop: document.getElementById('pnb-desktop'),
        edge: document.getElementById('pnb-edge-runtime'),
      };
      const valueEls = {
        agents: document.getElementById('pnb-agents'),
        caps: document.getElementById('pnb-caps'),
        tools: document.getElementById('pnb-tools'),
      };
      const liveValues = { agents: 237, caps: 58, tools: 19 };

      const sectionStates = {
        's2-problem': {
          agents: 84, caps: 18, tools: 6, links: 1,
          statuses: { cloud:'Partial', browser:'Seeking', mobile:'Queued', desktop:'Queued', edge:'Syncing' },
        },
        's3-runtime': {
          agents: 156, caps: 31, tools: 11, links: 2,
          statuses: { cloud:'Connected', browser:'Connected', mobile:'Joining', desktop:'Joining', edge:'Connected' },
        },
        's4-run': {
          agents: 237, caps: 58, tools: 19, links: 3,
          statuses: { cloud:'Connected', browser:'Connected', mobile:'Connected', desktop:'Connected', edge:'Connected' },
        },
        's5-collab': {
          agents: 412, caps: 73, tools: 24, links: 4,
          statuses: { cloud:'Routing', browser:'Connected', mobile:'Connected', desktop:'Connected', edge:'Routing' },
        },
        's6-marketplace': {
          agents: 520, caps: 860, tools: 1200, links: 4,
          statuses: { cloud:'Connected', browser:'Connected', mobile:'Connected', desktop:'Connected', edge:'Connected' },
        },
        's7-scale': {
          agents: 588, caps: 916, tools: 1284, links: 4,
          statuses: { cloud:'Connected', browser:'Connected', mobile:'Installed', desktop:'Installed', edge:'Connected' },
        },
        's8-how': {
          agents: 640, caps: 932, tools: 1306, links: 3,
          statuses: { cloud:'Deploying', browser:'Deploying', mobile:'Ready', desktop:'Deploying', edge:'Ready' },
        },
        's9-architecture': {
          agents: 712, caps: 948, tools: 1340, links: 4,
          statuses: { cloud:'Connected', browser:'Connected', mobile:'Connected', desktop:'Connected', edge:'Connected' },
        },
        's10-cta': {
          agents: 768, caps: 960, tools: 1375, links: 4,
          statuses: { cloud:'Live', browser:'Live', mobile:'Live', desktop:'Live', edge:'Live' },
        },
      };

      function setLiveBar(on) {
        bar.classList.toggle('is-live', on);
      }

      function drawNetwork(linkCount) {
        for (let i = 0; i < 4; i++) {
          document.getElementById('pnb-line-' + i)?.classList.toggle('is-on', i < linkCount);
        }
        for (let i = 0; i < 5; i++) {
          document.getElementById('pnb-node-' + i)?.classList.toggle('is-hot', i <= linkCount);
        }
      }

      function applyState(state) {
        gsap.killTweensOf(liveValues);
        gsap.to(liveValues, {
          agents: state.agents,
          caps: state.caps,
          tools: state.tools,
          duration: 0.65,
          ease: 'power2.out',
          onUpdate() {
            valueEls.agents.textContent = String(Math.round(liveValues.agents));
            valueEls.caps.textContent = String(Math.round(liveValues.caps));
            valueEls.tools.textContent = String(Math.round(liveValues.tools));
          },
          onComplete() {
            liveValues.agents = state.agents;
            liveValues.caps = state.caps;
            liveValues.tools = state.tools;
            valueEls.agents.textContent = String(state.agents);
            valueEls.caps.textContent = String(state.caps);
            valueEls.tools.textContent = String(state.tools);
          },
        });
        Object.entries(state.statuses).forEach(([key, value]) => {
          if (statusEls[key]) statusEls[key].textContent = value;
        });
        drawNetwork(state.links);
      }

      ScrollTrigger.create({
        trigger: '#s2-problem',
        start: 'top 90px',
        endTrigger: 'footer',
        end: 'bottom bottom',
        onEnter: () => setLiveBar(true),
        onEnterBack: () => setLiveBar(true),
        onLeaveBack: () => setLiveBar(false),
      });

      Object.entries(sectionStates).forEach(([id, state]) => {
        ScrollTrigger.create({
          trigger: '#' + id,
          start: 'top center',
          end: 'bottom center',
          onEnter: () => applyState(state),
          onEnterBack: () => applyState(state),
        });
      });
    })();

${allJs}
  </script>
</body>
</html>`
}
