export const css: string = /* css */ `
    /* S10: FINAL CTA */
    #s10-cta {
      min-height: 100vh;
      padding: 8rem 2rem 7rem;
      overflow: hidden;
      border-bottom: none;
      background:
        radial-gradient(ellipse 55% 45% at 50% 52%, rgba(124,92,252,.22), transparent 65%),
        linear-gradient(rgba(255,255,255,.035) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,.035) 1px, transparent 1px),
        #ffffff;
      background-size: auto, 48px 48px, 48px 48px, auto;
    }

    #s10-cta::before {
      content: "";
      position: absolute;
      inset: 0;
      pointer-events: none;
      background:
        linear-gradient(to bottom, rgba(5,5,7,.35), transparent 22%, transparent 72%, rgba(5,5,7,.9)),
        radial-gradient(circle at center, transparent 0 48%, rgba(5,5,7,.76) 100%);
      z-index: 1;
    }

    .cta-network {
      position: absolute;
      inset: 0;
      z-index: 0;
      overflow: hidden;
      opacity: .95;
    }

    .cta-network-lines {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
    }

    .cta-network-line {
      stroke: rgba(124,92,252,.32);
      stroke-width: 1.2;
      stroke-dasharray: 8 10;
      animation: ctaLineFlow 2.8s linear infinite;
    }

    .cta-network-line.green {
      stroke: rgba(21,128,61,.28);
      animation-duration: 3.4s;
    }

    @keyframes ctaLineFlow {
      to { stroke-dashoffset: -36; }
    }

    .cta-node {
      position: absolute;
      width: 14px;
      height: 14px;
      border-radius: 50%;
      background: #ffffff;
      border: 1px solid rgba(255,255,255,.24);
      box-shadow:
        0 0 0 5px rgba(124,92,252,.08),
        0 0 22px rgba(124,92,252,.34);
      transform: translate(-50%, -50%);
      animation: ctaNodePulse 2.8s ease-in-out infinite;
    }

    .cta-node.green {
      box-shadow:
        0 0 0 5px rgba(21,128,61,.08),
        0 0 22px rgba(21,128,61,.28);
    }

    .cta-node:nth-of-type(2) { animation-delay: .4s; }
    .cta-node:nth-of-type(3) { animation-delay: .8s; }
    .cta-node:nth-of-type(4) { animation-delay: 1.2s; }
    .cta-node:nth-of-type(5) { animation-delay: 1.6s; }
    .cta-node:nth-of-type(6) { animation-delay: 2s; }

    @keyframes ctaNodePulse {
      0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: .68; }
      50% { transform: translate(-50%, -50%) scale(1.22); opacity: 1; }
    }

    .cta-agent {
      position: absolute;
      width: 34px;
      height: 34px;
      border-radius: 10px;
      border: 1px solid rgba(21,128,61,.55);
      background: #ffffff;
      box-shadow: 0 0 28px rgba(124,92,252,.34);
      backdrop-filter: blur(8px);
      transform: translate(-50%, -50%);
    }

    .cta-agent::before {
      content: "";
      position: absolute;
      inset: 9px;
      border-radius: 50%;
      background: linear-gradient(135deg, var(--accent), var(--accent2));
      box-shadow: none;
    }

    .cta-agent::after {
      content: "";
      position: absolute;
      left: 50%;
      top: 50%;
      width: 64px;
      height: 1px;
      background: linear-gradient(90deg, rgba(21,128,61,.8), transparent);
      transform: translateY(-50%);
      opacity: .85;
    }

    .cta-agent.a1 {
      offset-path: path("M 160 470 C 320 160, 570 170, 740 290 S 1090 470, 1240 180");
      animation: ctaAgentMove 8.5s linear infinite;
    }

    .cta-agent.a2 {
      offset-path: path("M 1180 610 C 970 390, 770 540, 610 330 S 300 170, 130 340");
      animation: ctaAgentMove 10.5s linear infinite reverse;
      border-color: rgba(74,222,128,.5);
      box-shadow: none;
    }

    .cta-agent.a2::before {
      background: var(--accent);
      box-shadow: none;
    }

    @keyframes ctaAgentMove {
      to { offset-distance: 100%; }
    }

    .cta-content {
      position: relative;
      z-index: 2;
      width: min(900px, 100%);
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .cta-kicker {
      margin-bottom: 1rem;
      color: var(--accent2);
      font-size: .75rem;
      font-weight: 800;
      letter-spacing: 3px;
      text-transform: uppercase;
      opacity: 0;
      transform: translateY(16px);
    }

    .cta-title {
      max-width: 860px;
      font-size: clamp(2.8rem, 7vw, 6.5rem);
      font-weight: 900;
      letter-spacing: -3px;
      line-height: .96;
      opacity: 0;
      transform: translateY(24px);
    }

    .cta-title .hi {
      display: inline-block;
      background: var(--accent);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .cta-sub {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      gap: .75rem;
      margin-top: 1.5rem;
      color: var(--muted);
      font-size: clamp(.95rem, 2vw, 1.2rem);
      font-weight: 600;
      opacity: 0;
      transform: translateY(18px);
    }

    .cta-sub span {
      white-space: nowrap;
    }

    .cta-sub-dot {
      width: 5px;
      height: 5px;
      border-radius: 50%;
      background: rgba(255,255,255,.22);
    }

    .cta-actions {
      display: flex;
      justify-content: center;
      margin-top: 2.4rem;
      opacity: 0;
      transform: translateY(18px);
    }

    .cta-actions .btn {
      min-width: 150px;
      text-align: center;
    }

    .cta-runtime {
      position: absolute;
      left: 50%;
      bottom: 3rem;
      z-index: 2;
      display: flex;
      align-items: center;
      gap: .55rem;
      transform: translateX(-50%);
      color: rgba(226,226,240,.72);
      font-size: .72rem;
      font-weight: 700;
      letter-spacing: 1.7px;
      text-transform: uppercase;
      opacity: 0;
    }

    .cta-runtime-mark {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: var(--accent);
      box-shadow: none;
      animation: ctaRuntimePulse 1.7s ease-in-out infinite;
    }

    @keyframes ctaRuntimePulse {
      0%, 100% { opacity: .45; transform: scale(.8); }
      50% { opacity: 1; transform: scale(1.15); }
    }

    @media (max-width: 720px) {
      #s10-cta {
        padding: 7rem 1.25rem 6rem;
        background-size: auto, 34px 34px, 34px 34px, auto;
      }

      .cta-title {
        letter-spacing: -1.8px;
      }

      .cta-sub {
        flex-direction: column;
        gap: .45rem;
      }

      .cta-sub-dot {
        display: none;
      }

      .cta-agent {
        transform: translate(-50%, -50%) scale(.82);
      }
    }
`

export const html: string = /* html */ `
  <!-- S10: FINAL CTA -->
  <section id="s10-cta" class="section">
    <div class="cta-network" aria-hidden="true">
      <svg class="cta-network-lines" viewBox="0 0 1400 800" preserveAspectRatio="none">
        <path class="cta-network-line" d="M90 590 C280 360 430 460 560 260 S910 230 1080 430 S1260 590 1350 330" fill="none"/>
        <path class="cta-network-line green" d="M120 260 C330 150 440 340 630 420 S940 630 1280 190" fill="none"/>
        <path class="cta-network-line" d="M210 690 C410 520 520 610 720 470 S1040 260 1220 500" fill="none"/>
        <path class="cta-network-line green" d="M260 120 C480 280 680 150 820 310 S1030 440 1190 120" fill="none"/>
      </svg>

      <span class="cta-node" style="left:10%;top:68%"></span>
      <span class="cta-node green" style="left:24%;top:30%"></span>
      <span class="cta-node" style="left:41%;top:54%"></span>
      <span class="cta-node green" style="left:58%;top:34%"></span>
      <span class="cta-node" style="left:76%;top:58%"></span>
      <span class="cta-node green" style="left:90%;top:24%"></span>

      <span class="cta-agent a1"></span>
      <span class="cta-agent a2"></span>
    </div>

    <div class="cta-content">
      <p class="cta-kicker" id="cta-kicker">Lifetime Runtime</p>
      <h2 class="cta-title" id="cta-title">
        Build the Future<br/>
        of <span class="hi">Autonomous Agents.</span>
      </h2>
      <p class="cta-sub" id="cta-sub">
        <span>Run anywhere.</span>
        <i class="cta-sub-dot"></i>
        <span>Connect everything.</span>
        <i class="cta-sub-dot"></i>
        <span>Scale infinitely.</span>
      </p>
      <div class="cta-actions" id="cta-actions">
        <a href="#s8-how" class="btn btn-primary">Get Started</a>
      </div>
    </div>

    <div class="cta-runtime" id="cta-runtime">
      <span class="cta-runtime-mark"></span>
      Agent network online
    </div>
  </section>
`

export const js: string = /* js */ `
    // S10: FINAL CTA
    (function ctaInit() {
      const st = { trigger: '#s10-cta', start: 'top 68%' };

      gsap.to('#cta-kicker', {
        scrollTrigger: st,
        opacity: 1,
        y: 0,
        duration: 0.55,
        ease: 'power3.out',
      });

      gsap.to('#cta-title', {
        scrollTrigger: st,
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: 0.12,
        ease: 'power3.out',
      });

      gsap.to('#cta-sub', {
        scrollTrigger: st,
        opacity: 1,
        y: 0,
        duration: 0.65,
        delay: 0.28,
        ease: 'power3.out',
      });

      gsap.to('#cta-actions', {
        scrollTrigger: st,
        opacity: 1,
        y: 0,
        duration: 0.6,
        delay: 0.42,
        ease: 'power3.out',
      });

      gsap.to('#cta-runtime', {
        scrollTrigger: st,
        opacity: 1,
        duration: 0.7,
        delay: 0.58,
        ease: 'power2.out',
      });

      gsap.fromTo('.cta-network', {
        scale: 1.04,
      }, {
        scrollTrigger: {
          trigger: '#s10-cta',
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.2,
        },
        scale: 1,
        ease: 'none',
      });
    })();
`
