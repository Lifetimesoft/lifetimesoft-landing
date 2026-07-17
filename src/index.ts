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

    /* ── HERO ── */
    #hero {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      padding: 6rem 2rem 4rem;
      position: relative;
      overflow: hidden;
    }
    .hero-glow {
      position: absolute;
      width: 600px; height: 600px;
      border-radius: 50%;
      background: radial-gradient(circle, rgba(124,92,252,.25) 0%, transparent 70%);
      pointer-events: none;
      top: 50%; left: 50%;
      transform: translate(-50%, -50%);
    }
    .hero-tag {
      display: inline-block;
      padding: .35rem 1rem;
      border: 1px solid rgba(124,92,252,.4);
      border-radius: 999px;
      font-size: .8rem;
      color: var(--accent2);
      margin-bottom: 1.5rem;
      opacity: 0;
    }
    .hero-title {
      font-size: clamp(2.5rem, 6vw, 5rem);
      font-weight: 800;
      line-height: 1.1;
      letter-spacing: -1.5px;
      margin-bottom: 1.5rem;
      opacity: 0;
    }
    .hero-title .gradient {
      background: linear-gradient(135deg, var(--accent), var(--accent2));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    .hero-sub {
      max-width: 540px;
      color: var(--muted);
      font-size: 1.1rem;
      line-height: 1.7;
      margin-bottom: 2.5rem;
      opacity: 0;
    }
    .hero-cta {
      display: flex; gap: 1rem; flex-wrap: wrap; justify-content: center;
      opacity: 0;
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

    /* ── FEATURES ── */
    #features {
      padding: 7rem 2rem;
      max-width: 1100px;
      margin: 0 auto;
    }
    .section-label {
      text-align: center;
      color: var(--accent);
      font-size: .8rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 3px;
      margin-bottom: 1rem;
    }
    .section-title {
      text-align: center;
      font-size: clamp(1.8rem, 4vw, 2.8rem);
      font-weight: 800;
      letter-spacing: -1px;
      margin-bottom: 4rem;
    }
    .cards {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 1.5rem;
    }
    .card {
      background: var(--surface);
      border: 1px solid rgba(255,255,255,.07);
      border-radius: 16px;
      padding: 2rem;
      transition: border-color .2s;
      opacity: 0;
      transform: translateY(40px);
    }
    .card:hover { border-color: rgba(124,92,252,.4); }
    .card-icon {
      width: 48px; height: 48px;
      border-radius: 12px;
      background: rgba(124,92,252,.15);
      display: flex; align-items: center; justify-content: center;
      font-size: 1.4rem;
      margin-bottom: 1.2rem;
    }
    .card h3 { font-size: 1.1rem; font-weight: 700; margin-bottom: .6rem; }
    .card p { color: var(--muted); font-size: .9rem; line-height: 1.65; }

    /* ── STATS ── */
    #stats {
      background: var(--surface);
      border-top: 1px solid rgba(255,255,255,.06);
      border-bottom: 1px solid rgba(255,255,255,.06);
      padding: 5rem 2rem;
    }
    .stats-grid {
      max-width: 900px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
      gap: 2rem;
      text-align: center;
    }
    .stat-num {
      font-size: 2.8rem;
      font-weight: 800;
      background: linear-gradient(135deg, var(--accent), var(--accent2));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      opacity: 0;
    }
    .stat-label { color: var(--muted); font-size: .85rem; margin-top: .4rem; }

    /* ── CTA SECTION ── */
    #cta {
      padding: 8rem 2rem;
      text-align: center;
    }
    .cta-box {
      max-width: 680px;
      margin: 0 auto;
      opacity: 0;
      transform: translateY(30px);
    }
    .cta-box h2 {
      font-size: clamp(1.8rem, 4vw, 2.8rem);
      font-weight: 800;
      letter-spacing: -1px;
      margin-bottom: 1rem;
    }
    .cta-box p { color: var(--muted); margin-bottom: 2rem; font-size: 1rem; line-height: 1.7; }

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
      <li><a href="#features">Features</a></li>
      <li><a href="#stats">Stats</a></li>
      <li><a href="#cta">Get Started</a></li>
    </ul>
  </nav>

  <!-- HERO -->
  <section id="hero">
    <div class="hero-glow"></div>
    <div class="hero-tag">Now in Public Beta</div>
    <h1 class="hero-title">
      Build smarter software<br />
      with <span class="gradient">Lifetimesoft</span>
    </h1>
    <p class="hero-sub">
      A modern platform for building, shipping, and scaling
      applications — powered by intelligent tooling and developer-first design.
    </p>
    <div class="hero-cta">
      <a href="#cta" class="btn btn-primary">Get Started</a>
      <a href="#features" class="btn btn-outline">Learn More</a>
    </div>
  </section>

  <!-- FEATURES -->
  <section id="features">
    <p class="section-label">What we offer</p>
    <h2 class="section-title">Everything you need to ship faster</h2>
    <div class="cards">
      <div class="card">
        <div class="card-icon">⚡</div>
        <h3>Edge-First Performance</h3>
        <p>Deploy globally on Cloudflare's edge network with sub-millisecond cold starts and automatic scaling.</p>
      </div>
      <div class="card">
        <div class="card-icon">🤖</div>
        <h3>AI-Powered Tooling</h3>
        <p>Integrated AI agents that help automate repetitive tasks, review code, and accelerate development workflows.</p>
      </div>
      <div class="card">
        <div class="card-icon">🔐</div>
        <h3>Identity & Access</h3>
        <p>Built-in authentication, authorization, and identity management — zero boilerplate required.</p>
      </div>
      <div class="card">
        <div class="card-icon">📦</div>
        <h3>Managed Registry</h3>
        <p>Publish, version, and distribute packages through a private registry designed for your organization.</p>
      </div>
      <div class="card">
        <div class="card-icon">📊</div>
        <h3>Real-Time Analytics</h3>
        <p>Monitor performance, errors, and user behavior in real time with a unified observability dashboard.</p>
      </div>
      <div class="card">
        <div class="card-icon">🔗</div>
        <h3>CLI Integration</h3>
        <p>A powerful CLI that integrates seamlessly into your existing workflow — from local dev to production deploy.</p>
      </div>
    </div>
  </section>

  <!-- STATS -->
  <section id="stats">
    <div class="stats-grid">
      <div>
        <div class="stat-num" data-target="99.9">0</div>
        <div class="stat-label">% Uptime SLA</div>
      </div>
      <div>
        <div class="stat-num" data-target="200">0</div>
        <div class="stat-label">Edge locations</div>
      </div>
      <div>
        <div class="stat-num" data-target="10">0</div>
        <div class="stat-label">ms median latency</div>
      </div>
      <div>
        <div class="stat-num" data-target="50">0</div>
        <div class="stat-label">k+ developers</div>
      </div>
    </div>
  </section>

  <!-- CTA -->
  <section id="cta">
    <div class="cta-box">
      <h2>Ready to get started?</h2>
      <p>Join thousands of developers building the next generation of software on Lifetimesoft.</p>
      <a href="#" class="btn btn-primary">Create Free Account</a>
    </div>
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

    // ── Navbar fade-in ──────────────────────────────────────────────
    gsap.from('#navbar', {
      y: -60, opacity: 0, duration: 0.8, ease: 'power3.out'
    });

    // ── Hero stagger ────────────────────────────────────────────────
    gsap.to(['.hero-tag', '.hero-title', '.hero-sub', '.hero-cta'], {
      opacity: 1,
      y: 0,
      duration: 0.9,
      stagger: 0.18,
      ease: 'power3.out',
      delay: 0.3,
    });

    // ── Feature cards (ScrollTrigger) ───────────────────────────────
    gsap.to('.card', {
      scrollTrigger: {
        trigger: '#features',
        start: 'top 75%',
      },
      opacity: 1,
      y: 0,
      duration: 0.7,
      stagger: 0.12,
      ease: 'power3.out',
    });

    // ── Stats counter ────────────────────────────────────────────────
    document.querySelectorAll('.stat-num').forEach((el) => {
      const target = parseFloat(el.dataset.target);
      const isDecimal = String(target).includes('.');

      ScrollTrigger.create({
        trigger: '#stats',
        start: 'top 80%',
        onEnter: () => {
          gsap.to(el, { opacity: 1, duration: 0.4 });
          gsap.to({ val: 0 }, {
            val: target,
            duration: 1.6,
            ease: 'power2.out',
            onUpdate: function () {
              el.textContent = isDecimal
                ? this.targets()[0].val.toFixed(1)
                : Math.floor(this.targets()[0].val);
            },
            onComplete: () => { el.textContent = isDecimal ? target.toFixed(1) : target; }
          });
        },
        once: true,
      });
    });

    // ── CTA box ──────────────────────────────────────────────────────
    gsap.to('.cta-box', {
      scrollTrigger: {
        trigger: '#cta',
        start: 'top 80%',
      },
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power3.out',
    });

    // ── Parallax hero glow ───────────────────────────────────────────
    document.addEventListener('mousemove', (e) => {
      const x = (e.clientX / window.innerWidth  - 0.5) * 40;
      const y = (e.clientY / window.innerHeight - 0.5) * 40;
      gsap.to('.hero-glow', { x, y, duration: 1.2, ease: 'power2.out' });
    });
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
