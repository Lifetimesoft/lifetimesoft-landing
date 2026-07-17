export const css: string = /* css */ `
    /* ── S3: INTRODUCING RUNTIME ── */
    #s3-runtime {
      min-height: 100vh;
      overflow: hidden;
      padding: 7rem 2rem;
    }

    /* canvas that holds the whole visual */
    .intro-stage {
      position: relative;
      width: 100%;
      max-width: 860px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    /* centre runtime orb */
    .intro-runtime {
      position: relative;
      z-index: 4;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: .5rem;
      opacity: 0;
      transform: scale(0.4);
    }
    .intro-runtime-orb {
      width: 120px; height: 120px;
      border-radius: 50%;
      background: #ffffff;
      box-shadow: 0 0 0 0 rgba(124,92,252,.5);
      display: flex; align-items: center; justify-content: center;
      font-size: 2.4rem;
    }
    .intro-runtime.visible .intro-runtime-orb {
      animation: orbPulse 2.4s ease-in-out infinite;
    }
    @keyframes orbPulse {
      0%,100% { box-shadow: 0 0 20px 4px rgba(124,92,252,.35); }
      50%      { box-shadow: 0 0 48px 16px rgba(124,92,252,.6); }
    }
    .intro-runtime-label {
      font-size: .82rem;
      font-weight: 700;
      color: var(--accent2);
      text-transform: uppercase;
      letter-spacing: 2px;
    }

    /* SVG connection layer */
    .intro-svg {
      position: absolute;
      inset: 0;
      width: 100%; height: 100%;
      overflow: visible;
      pointer-events: none;
      z-index: 2;
    }
    .intro-beam {
      stroke: var(--accent);
      stroke-width: 1.8;
      stroke-dasharray: 600;
      stroke-dashoffset: 600;
      fill: none;
      opacity: 0;
    }
    /* animated dash travel along beam */
    .intro-packet {
      r: 3.5;
      fill: var(--accent);
      opacity: 0;
    }

    /* agent nodes arranged in a circle around the runtime */
    .intro-nodes {
      position: absolute;
      inset: 0;
      pointer-events: none;
      z-index: 3;
    }
    .intro-node {
      position: absolute;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: .4rem;
      opacity: 0;
      transform: scale(0.5);
    }
    .intro-node-box {
      width: 54px; height: 54px;
      border-radius: 14px;
      background: var(--surface);
      border: 1px solid rgba(91,95,239,.25);
      display: flex; align-items: center; justify-content: center;
      font-size: 1.3rem;
    }
    .intro-node-box.connected {
      border-color: rgba(91,95,239,.7);
      box-shadow: none;
    }
    .intro-node-lbl {
      font-size: .7rem;
      font-weight: 700;
      color: var(--muted);
      text-transform: uppercase;
      letter-spacing: 1px;
    }

    /* headline + tagline */
    .intro-headline {
      font-size: clamp(2rem, 4.5vw, 3.4rem);
      font-weight: 800;
      letter-spacing: -1.5px;
      line-height: 1.1;
      text-align: center;
      margin-top: 3rem;
      opacity: 0;
      transform: translateY(20px);
    }
    .intro-headline .green {
      background: var(--accent);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    /* environment pills row */
    .intro-envs {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: .6rem;
      margin-top: 1.8rem;
      opacity: 0;
    }
    .intro-env {
      padding: .35rem 1rem;
      border-radius: 999px;
      border: 1px solid rgba(91,95,239,.35);
      color: rgba(91,95,239,.85);
      font-size: .8rem;
      font-weight: 600;
      opacity: 0;
      transform: translateY(10px);
    }
`

export const html: string = /* html */ `
  <!-- ── S3: INTRODUCING RUNTIME ── -->
  <section id="s3-runtime" class="section">

    <div class="intro-stage" id="intro-stage">

      <!-- SVG connection beams (drawn behind nodes) -->
      <svg class="intro-svg" id="intro-svg" viewBox="-430 -260 860 520" preserveAspectRatio="xMidYMid meet">
        <!-- beams from each agent to centre (0,0) -->
        <line class="intro-beam" id="ib-0" x1="-340" y1="-160" x2="0" y2="0"/>
        <line class="intro-beam" id="ib-1" x1="0"    y1="-210" x2="0" y2="0"/>
        <line class="intro-beam" id="ib-2" x1="340"  y1="-160" x2="0" y2="0"/>
        <line class="intro-beam" id="ib-3" x1="-340" y1="160"  x2="0" y2="0"/>
        <line class="intro-beam" id="ib-4" x1="0"    y1="210"  x2="0" y2="0"/>
        <line class="intro-beam" id="ib-5" x1="340"  y1="160"  x2="0" y2="0"/>
        <!-- travelling packets along each beam -->
        <circle class="intro-packet" id="ip-0"/>
        <circle class="intro-packet" id="ip-1"/>
        <circle class="intro-packet" id="ip-2"/>
        <circle class="intro-packet" id="ip-3"/>
        <circle class="intro-packet" id="ip-4"/>
        <circle class="intro-packet" id="ip-5"/>
      </svg>

      <!-- agent nodes (positioned via CSS absolute) -->
      <div class="intro-nodes" id="intro-nodes">
        <!-- top-left -->
        <div class="intro-node" id="in-0" style="top:3%;left:2%">
          <div class="intro-node-box" id="inb-0">🤖</div>
          <span class="intro-node-lbl">OpenAI</span>
        </div>
        <!-- top-centre -->
        <div class="intro-node" id="in-1" style="top:0%;left:50%;transform:translateX(-50%) scale(.5)">
          <div class="intro-node-box" id="inb-1">🧠</div>
          <span class="intro-node-lbl">Anthropic</span>
        </div>
        <!-- top-right -->
        <div class="intro-node" id="in-2" style="top:3%;right:2%">
          <div class="intro-node-box" id="inb-2">✨</div>
          <span class="intro-node-lbl">Gemini</span>
        </div>
        <!-- bottom-left -->
        <div class="intro-node" id="in-3" style="bottom:28%;left:2%">
          <div class="intro-node-box" id="inb-3">🐝</div>
          <span class="intro-node-lbl">CrewAI</span>
        </div>
        <!-- bottom-centre -->
        <div class="intro-node" id="in-4" style="bottom:24%;left:50%;transform:translateX(-50%) scale(.5)">
          <div class="intro-node-box" id="inb-4">🔗</div>
          <span class="intro-node-lbl">LangGraph</span>
        </div>
        <!-- bottom-right -->
        <div class="intro-node" id="in-5" style="bottom:28%;right:2%">
          <div class="intro-node-box" id="inb-5">🛠️</div>
          <span class="intro-node-lbl">Your SDK</span>
        </div>
      </div>

      <!-- centre Runtime orb -->
      <div class="intro-runtime" id="intro-runtime" style="margin-top:200px">
        <div class="intro-runtime-orb">⬡</div>
        <span class="intro-runtime-label">Lifetime Runtime</span>
      </div>

      <!-- headline -->
      <h2 class="intro-headline" id="intro-headline">
        <span class="green">One Runtime.</span><br/>
        Every Agent. Every Environment.
      </h2>

      <!-- environment pills -->
      <div class="intro-envs" id="intro-envs">
        <span class="intro-env" id="ie-0">☁️ Cloud</span>
        <span class="intro-env" id="ie-1">🌐 Browser</span>
        <span class="intro-env" id="ie-2">🖥️ Desktop</span>
        <span class="intro-env" id="ie-3">📱 Mobile</span>
        <span class="intro-env" id="ie-4">⚡ Edge</span>
      </div>

    </div>

  </section>
`

export const js: string = /* js */ `
    // ── S3: INTRODUCING RUNTIME ──────────────────────────────────────
    (function introInit() {
      const st = { trigger: '#s3-runtime', start: 'top 70%' };

      // 1. Runtime orb scales in from centre
      gsap.to('#intro-runtime', {
        scrollTrigger: st,
        opacity: 1,
        scale: 1,
        duration: 0.9,
        ease: 'elastic.out(1, 0.6)',
        onComplete() {
          document.getElementById('intro-runtime').classList.add('visible');
        },
      });

      // 2. Agent nodes pop in with stagger
      const nodes = ['#in-0','#in-1','#in-2','#in-3','#in-4','#in-5'];
      nodes.forEach((id, i) => {
        gsap.to(id, {
          scrollTrigger: st,
          opacity: 1,
          scale: 1,
          duration: 0.5,
          delay: 0.3 + i * 0.1,
          ease: 'back.out(1.6)',
        });
      });

      // 3. Beams draw from agents toward runtime, then packets travel
      const beamData = [
        { beam: '#ib-0', pkt: '#ip-0', x1: -340, y1: -160 },
        { beam: '#ib-1', pkt: '#ip-1', x1:    0, y1: -210 },
        { beam: '#ib-2', pkt: '#ip-2', x1:  340, y1: -160 },
        { beam: '#ib-3', pkt: '#ip-3', x1: -340, y1:  160 },
        { beam: '#ib-4', pkt: '#ip-4', x1:    0, y1:  210 },
        { beam: '#ib-5', pkt: '#ip-5', x1:  340, y1:  160 },
      ];

      beamData.forEach(({ beam, pkt, x1, y1 }, i) => {
        const delay = 0.7 + i * 0.12;

        // draw beam
        gsap.to(beam, {
          scrollTrigger: st,
          opacity: 1,
          strokeDashoffset: 0,
          duration: 0.7,
          delay,
          ease: 'power2.out',
          onComplete() {
            // mark node as connected
            const box = document.getElementById('inb-' + i);
            if (box) box.classList.add('connected');
          },
        });

        // travel packet along beam
        const pktEl = document.querySelector(pkt);
        if (pktEl) {
          const travel = { t: 0 };
          gsap.to(travel, {
            scrollTrigger: st,
            t: 1,
            duration: 0.9,
            delay: delay + 0.3,
            repeat: -1,
            repeatDelay: 1.4,
            ease: 'power1.inOut',
            onUpdate() {
              const t = travel.t;
              pktEl.setAttribute('cx', String(x1 + (0 - x1) * t));
              pktEl.setAttribute('cy', String(y1 + (0 - y1) * t));
              pktEl.setAttribute('opacity', t < 0.05 || t > 0.92 ? '0' : '1');
            },
          });
        }
      });

      // 4. Headline slides up
      gsap.to('#intro-headline', {
        scrollTrigger: st,
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: 1.3,
        ease: 'power3.out',
      });

      // 5. Environment pills stagger in
      const envIds = ['#ie-0','#ie-1','#ie-2','#ie-3','#ie-4'];
      gsap.to('#intro-envs', { scrollTrigger: st, opacity: 1, duration: 0.01, delay: 1.5 });
      envIds.forEach((id, i) => {
        gsap.to(id, {
          scrollTrigger: st,
          opacity: 1,
          y: 0,
          duration: 0.45,
          delay: 1.6 + i * 0.1,
          ease: 'power3.out',
        });
      });
    })();
`
