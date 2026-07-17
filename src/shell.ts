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
      <li><a href="#s6-collaborate">Marketplace</a></li>
      <li><a href="#s7-scale">Capability</a></li>
      <li><a href="#s8-how">CLI</a></li>
      <li><a href="#s9-proof">Social Proof</a></li>
      <li><a href="#s10-cta">Get Started</a></li>
    </ul>
  </nav>

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
    gsap.from('#navbar', { y: -60, opacity: 0, duration: 0.8, ease: 'power3.out' });

    // ── Section placeholders fade in on scroll ───────────────────────
    gsap.utils.toArray('.section').forEach((el) => {
      gsap.from(el, {
        scrollTrigger: { trigger: el, start: 'top 80%' },
        opacity: 0,
        y: 30,
        duration: 0.7,
        ease: 'power3.out',
      });
    });

${allJs}
  </script>
</body>
</html>`
}
