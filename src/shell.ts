export function buildPage(sections: Array<{ css: string; html: string; js: string }>): string {
  const allCss  = sections.map(s => s.css).join('\n')
  const allHtml = sections.map(s => s.html).join('\n')
  const allJs   = sections.map(s => s.js).join('\n')

  return /* html */ `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Lifetime Soft - Autonomous Agent Platform</title>
  <meta name="description" content="Lifetime Soft is an autonomous agent platform for running AI agents anywhere, connecting every runtime, marketplace, capability, and tool." />
  <meta name="theme-color" content="#15803d" />
  <meta name="google-site-verification" content="cE-1qQu9LP4wdCogIneieuAx9MDrYJxQxCjKNX-2C-8" />
  <meta name="facebook-domain-verification" content="23xbapwwaxnb8x5ryndn8ml1rmbv80" />
  <meta property="og:type" content="website" />
  <meta property="og:title" content="Lifetime Soft - Autonomous Agent Platform" />
  <meta property="og:description" content="Run any AI agent anywhere. Connect every runtime, marketplace, capability, and tool with Lifetime Soft." />
  <meta property="og:url" content="https://www.lifetimesoft.com" />
  <meta property="og:image" content="https://static.lifetimesoft.com/img/favicon.png" />
  <link rel="canonical" href="https://www.lifetimesoft.com" />
  <link rel="shortcut icon" type="image/x-icon" href="https://static.lifetimesoft.com/img/favicon.ico" />
  <link rel="icon" type="image/png" href="https://static.lifetimesoft.com/img/favicon.png" />
  <link rel="apple-touch-icon" href="https://static.lifetimesoft.com/img/favicon.png" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600;700&display=swap" rel="stylesheet" />
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    :root {
      --bg: #ffffff;
      --surface: #f7fdf9;
      --surface2: #dcfce7;
      --accent: #15803d;
      --accent2: #15803d;
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
    .hero-line2 {
      font-family: 'Inter', system-ui, sans-serif;
    }

    .site-footer {
      position: fixed;
      left: 50%;
      bottom: 1rem;
      z-index: 90;
      width: min(1120px, calc(100vw - 2rem));
      transform: translate(-50%, 18px) scale(.98);
      transform-origin: bottom center;
      opacity: 0;
      pointer-events: none;
      padding: .7rem .9rem;
      border: 1px solid var(--line);
      border-radius: 999px;
      background: rgba(255,255,255,.9);
      color: var(--muted);
      box-shadow: 0 16px 44px rgba(17,17,17,.08);
      backdrop-filter: blur(14px);
      transition: opacity .28s ease, transform .28s ease;
    }

    .site-footer.is-visible {
      transform: translate(-50%, 0) scale(1);
      opacity: 1;
      pointer-events: auto;
    }

    .footer-inner {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: .8rem;
      flex-wrap: wrap;
    }

    .footer-brand {
      color: var(--text);
      font-weight: 800;
      letter-spacing: -.3px;
    }

    .footer-brand span {
      color: var(--accent);
    }

    .footer-link {
      color: var(--muted);
      font-size: .78rem;
      font-weight: 700;
      text-decoration: none;
      transition: color .2s, transform .2s;
    }

    .footer-link:hover {
      color: var(--accent);
      transform: scale(1.04);
    }

    .footer-copy {
      color: var(--muted);
      font-size: .72rem;
      font-weight: 600;
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

    .site-footer {
      background: #ffffff;
      border-color: var(--line);
      color: var(--muted);
    }

    @media (max-width: 780px) {
      .site-footer {
        bottom: .7rem;
        width: calc(100vw - 1rem);
        border-radius: 18px;
      }
      .footer-inner {
        gap: .55rem .7rem;
      }
      .footer-brand,
      .footer-copy {
        flex: 1 1 100%;
        text-align: center;
      }
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
      background: rgba(21,128,61,.06) !important;
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

  </style>
</head>
<body>

${allHtml}

  <!-- FOOTER LINKS -->
  <footer class="site-footer" id="site-footer" aria-label="Lifetime Soft links">
    <div class="footer-inner">
      <span class="footer-brand">lifetime<span>soft</span></span>
      <a class="footer-link" href="https://app.lifetimesoft.com/">App</a>
      <a class="footer-link" href="https://docs.lifetimesoft.com/" target="_blank" rel="noopener noreferrer">Docs</a>
      <a class="footer-link" href="https://docs.lifetimesoft.com/cli?lang=en" target="_blank" rel="noopener noreferrer">CLI</a>
      <a class="footer-link" href="https://registry.lifetimesoft.com/" target="_blank" rel="noopener noreferrer">Registry</a>
      <a class="footer-link" href="https://www.youtube.com/@LifeTimeSoft" target="_blank" rel="noopener noreferrer">YouTube</a>
      <a class="footer-link" href="https://www.facebook.com/lifetimesoftservice" target="_blank" rel="noopener noreferrer">Facebook</a>
      <a class="footer-link" href="https://www.tiktok.com/@lifetimesoftservice" target="_blank" rel="noopener noreferrer">TikTok</a>
      <a class="footer-link" href="https://x.com/lifetimesoftctl" target="_blank" rel="noopener noreferrer">X</a>
      <a class="footer-link" href="/privacy-policy?lang=en">Privacy</a>
      <a class="footer-link" href="mailto:admin@lifetimesoft.com">Contact</a>
      <span class="footer-copy">© 2026</span>
    </div>
  </footer>

  <!-- GSAP + ScrollTrigger via CDN -->
  <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.7/dist/gsap.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.7/dist/ScrollTrigger.min.js"></script>

  <script>
    gsap.registerPlugin(ScrollTrigger);

    const footer = document.getElementById('site-footer');
    if (footer) {
      ScrollTrigger.create({
        trigger: '#s2-problem',
        start: 'top top',
        end: 'max',
        onEnter: () => footer.classList.add('is-visible'),
        onEnterBack: () => footer.classList.add('is-visible'),
        onLeaveBack: () => footer.classList.remove('is-visible'),
      });
    }

    // â”€â”€ Section scale reveal on scroll â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
    gsap.utils.toArray('.section').forEach((el) => {
      gsap.from(el, {
        scrollTrigger: { trigger: el, start: 'top 80%' },
        scale: 0.985,
        transformOrigin: 'center center',
        duration: 0.6,
        ease: 'power3.out',
      });
    });

${allJs}
  </script>
</body>
</html>`
}

