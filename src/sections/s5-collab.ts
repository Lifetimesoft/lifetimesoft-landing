export const css: string = /* css */ `
    /* ── S5: AGENT COLLABORATION ── */
    #s5-communicate {
      overflow: hidden;
      padding: 7rem 2rem 6rem;
    }

    .collab-headline {
      text-align: center;
      font-size: clamp(1.9rem, 4.5vw, 3.2rem);
      font-weight: 800;
      letter-spacing: -1.5px;
      line-height: 1.15;
      max-width: 700px;
      margin: 0 auto 1rem;
      opacity: 0;
      transform: translateY(20px);
    }
    .collab-headline .hi {
      background: linear-gradient(135deg, var(--accent), var(--accent2));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    .collab-sub {
      text-align: center;
      color: var(--muted);
      font-size: 1rem;
      margin-bottom: 3.5rem;
      opacity: 0;
    }

    /* ── flow column (left) ── */
    .collab-body {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 3rem 4rem;
      max-width: 960px;
      width: 100%;
      margin: 0 auto;
      align-items: start;
    }
    @media (max-width: 700px) {
      .collab-body { grid-template-columns: 1fr; }
    }

    /* vertical flow */
    .collab-flow {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0;
    }
    .collab-flow-line {
      position: absolute;
      left: 50%;
      top: 28px;
      bottom: 28px;
      width: 2px;
      background: rgba(255,255,255,.07);
      transform: translateX(-50%);
      z-index: 0;
      overflow: hidden;
    }
    .collab-flow-fill {
      position: absolute;
      top: 0; left: 0; right: 0;
      height: 0%;
      background: linear-gradient(to bottom, var(--accent), var(--accent2));
      transition: none;
    }

    /* flow node */
    .cf-node {
      position: relative;
      z-index: 2;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: .3rem;
      padding: .5rem 0;
      width: 100%;
      opacity: 0;
      transform: translateY(16px);
    }
    .cf-bubble {
      display: flex;
      align-items: center;
      gap: .55rem;
      padding: .55rem 1.1rem;
      border-radius: 999px;
      font-size: .82rem;
      font-weight: 700;
      background: var(--surface);
      border: 1.5px solid rgba(124,92,252,.3);
      white-space: nowrap;
      position: relative;
    }
    .cf-bubble.user   { border-color: rgba(34,197,94,.5);  color: #86efac; }
    .cf-bubble.agentA { border-color: rgba(124,92,252,.6); color: var(--accent2); }
    .cf-bubble.agentB { border-color: rgba(192,132,252,.5);color: var(--accent2); }
    .cf-bubble.agentC { border-color: rgba(139,92,246,.5); color: #c4b5fd; }
    .cf-bubble.agentD { border-color: rgba(99,102,241,.5); color: #a5b4fc; }
    .cf-bubble.result { border-color: rgba(34,197,94,.6);  color: #86efac; background: rgba(34,197,94,.07); }

    .cf-dot {
      width: 8px; height: 8px;
      border-radius: 50%;
      flex-shrink: 0;
    }
    .cf-dot.green  { background: #22c55e; }
    .cf-dot.purple { background: var(--accent); }
    .cf-dot.indigo { background: #818cf8; }

    /* message label below bubble */
    .cf-msg {
      font-size: .7rem;
      color: var(--muted);
      letter-spacing: .5px;
    }

    /* arrow between nodes */
    .cf-arrow {
      font-size: .75rem;
      color: var(--muted);
      opacity: 0;
      margin: .1rem 0;
    }

    /* travelling packet on flow line */
    .cf-packet {
      position: absolute;
      left: 50%;
      width: 10px; height: 10px;
      border-radius: 50%;
      background: var(--accent);
      box-shadow: 0 0 8px 3px rgba(124,92,252,.7);
      transform: translateX(-50%);
      z-index: 4;
      opacity: 0;
      pointer-events: none;
    }

    /* ── network canvas (right) ── */
    .collab-net {
      position: relative;
      height: 420px;
      width: 100%;
    }
    .collab-net-svg {
      position: absolute;
      inset: 0;
      width: 100%; height: 100%;
      overflow: visible;
    }
    .net-edge {
      stroke: rgba(124,92,252,.25);
      stroke-width: 1.5;
      stroke-dasharray: 5 4;
      fill: none;
      opacity: 0;
    }
    .net-edge.active {
      stroke: rgba(124,92,252,.7);
      stroke-dasharray: none;
      animation: netFlow 1.6s linear infinite;
    }
    @keyframes netFlow {
      to { stroke-dashoffset: -20; }
    }
    .net-pkt {
      r: 4;
      fill: #a78bfa;
      opacity: 0;
    }

    /* network nodes */
    .net-node {
      position: absolute;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: .3rem;
      transform: translate(-50%, -50%);
      opacity: 0;
    }
    .net-node-circle {
      width: 52px; height: 52px;
      border-radius: 50%;
      background: var(--surface);
      border: 2px solid rgba(124,92,252,.3);
      display: flex; align-items: center; justify-content: center;
      font-size: 1.25rem;
      transition: border-color .3s, box-shadow .3s;
    }
    .net-node-circle.lit {
      border-color: var(--accent);
      box-shadow: 0 0 18px rgba(124,92,252,.5);
    }
    .net-node-name {
      font-size: .68rem;
      font-weight: 700;
      color: var(--muted);
      text-transform: uppercase;
      letter-spacing: 1px;
    }
`

export const html: string = /* html */ `
  <!-- ── S5: AGENT COLLABORATION ── -->
  <section id="s5-communicate" class="section">

    <h2 class="collab-headline" id="collab-headline">
      Autonomous<br/><span class="hi">Multi-Agent Collaboration</span>
    </h2>
    <p class="collab-sub" id="collab-sub">
      Agents research, delegate, execute and synthesize — all without human intervention.
    </p>

    <div class="collab-body">

      <!-- LEFT: sequential flow -->
      <div class="collab-flow" id="collab-flow">
        <div class="collab-flow-line">
          <div class="collab-flow-fill" id="cf-fill"></div>
        </div>

        <!-- travelling packet -->
        <div class="cf-packet" id="cf-packet"></div>

        <!-- User -->
        <div class="cf-node" id="cfn-0">
          <div class="cf-bubble user"><span class="cf-dot green"></span>User</div>
          <span class="cf-msg">Research quantum computing trends</span>
        </div>
        <div class="cf-arrow" id="cfa-0">↓</div>

        <!-- Agent A -->
        <div class="cf-node" id="cfn-1">
          <div class="cf-bubble agentA"><span class="cf-dot purple"></span>Agent A — Orchestrator</div>
          <span class="cf-msg">Breaking task into subtasks…</span>
        </div>
        <div class="cf-arrow" id="cfa-1">↓ &nbsp; ↓ &nbsp; ↓</div>

        <!-- Agents B C D -->
        <div class="cf-node" id="cfn-2">
          <div class="cf-bubble agentB"><span class="cf-dot purple"></span>Agent B — Researcher</div>
          <span class="cf-msg">Fetching papers &amp; citations</span>
        </div>
        <div class="cf-arrow" id="cfa-2">↓</div>
        <div class="cf-node" id="cfn-3">
          <div class="cf-bubble agentC"><span class="cf-dot indigo"></span>Agent C — Analyst</div>
          <span class="cf-msg">Summarising key findings</span>
        </div>
        <div class="cf-arrow" id="cfa-3">↓</div>
        <div class="cf-node" id="cfn-4">
          <div class="cf-bubble agentD"><span class="cf-dot indigo"></span>Agent D — Writer</div>
          <span class="cf-msg">Drafting final report</span>
        </div>
        <div class="cf-arrow" id="cfa-4">↓</div>

        <!-- Result -->
        <div class="cf-node" id="cfn-5">
          <div class="cf-bubble result"><span class="cf-dot green"></span>✓ Result delivered to User</div>
          <span class="cf-msg">Full report in 4.2 s</span>
        </div>
      </div>

      <!-- RIGHT: network topology -->
      <div class="collab-net" id="collab-net">
        <svg class="collab-net-svg" id="collab-net-svg" viewBox="0 0 360 420">
          <!-- edges between nodes -->
          <!-- User ↔ A -->
          <line class="net-edge" id="ne-ua"  x1="180" y1="40"  x2="180" y2="130"/>
          <!-- A ↔ B -->
          <line class="net-edge" id="ne-ab"  x1="180" y1="130" x2="70"  y2="210"/>
          <!-- A ↔ C -->
          <line class="net-edge" id="ne-ac"  x1="180" y1="130" x2="180" y2="210"/>
          <!-- A ↔ D -->
          <line class="net-edge" id="ne-ad"  x1="180" y1="130" x2="290" y2="210"/>
          <!-- B C D ↔ Result -->
          <line class="net-edge" id="ne-br"  x1="70"  y1="210" x2="180" y2="340"/>
          <line class="net-edge" id="ne-cr"  x1="180" y1="210" x2="180" y2="340"/>
          <line class="net-edge" id="ne-dr"  x1="290" y1="210" x2="180" y2="340"/>
          <!-- B ↔ C ↔ D cross-talk -->
          <line class="net-edge" id="ne-bc"  x1="70"  y1="210" x2="180" y2="210"/>
          <line class="net-edge" id="ne-cd"  x1="180" y1="210" x2="290" y2="210"/>
          <!-- travelling packets -->
          <circle class="net-pkt" id="np-0"/>
          <circle class="net-pkt" id="np-1"/>
          <circle class="net-pkt" id="np-2"/>
        </svg>

        <!-- nodes -->
        <div class="net-node" id="nn-user"   style="left:50%;top:40px">
          <div class="net-node-circle" id="nnc-user">👤</div>
          <span class="net-node-name">User</span>
        </div>
        <div class="net-node" id="nn-a"      style="left:50%;top:130px">
          <div class="net-node-circle" id="nnc-a">🧠</div>
          <span class="net-node-name">Orchestrator</span>
        </div>
        <div class="net-node" id="nn-b"      style="left:70px;top:210px">
          <div class="net-node-circle" id="nnc-b">🔍</div>
          <span class="net-node-name">Researcher</span>
        </div>
        <div class="net-node" id="nn-c"      style="left:50%;top:210px">
          <div class="net-node-circle" id="nnc-c">📊</div>
          <span class="net-node-name">Analyst</span>
        </div>
        <div class="net-node" id="nn-d"      style="left:290px;top:210px">
          <div class="net-node-circle" id="nnc-d">✍️</div>
          <span class="net-node-name">Writer</span>
        </div>
        <div class="net-node" id="nn-result" style="left:50%;top:340px">
          <div class="net-node-circle" id="nnc-result">✅</div>
          <span class="net-node-name">Result</span>
        </div>
      </div>

    </div>
  </section>
`

export const js: string = /* js */ `
    // ── S5: AGENT COLLABORATION ──────────────────────────────────────
    (function collabInit() {
      const st = { trigger: '#s5-communicate', start: 'top 72%' };

      // headline + sub
      gsap.to('#collab-headline', { scrollTrigger: st, opacity:1, y:0, duration:0.8, ease:'power3.out' });
      gsap.to('#collab-sub',      { scrollTrigger: st, opacity:1, duration:0.6, delay:0.2, ease:'power3.out' });

      // ── LEFT: flow nodes stagger + fill + packet ──────────────────
      const flowNodes  = ['#cfn-0','#cfn-1','#cfn-2','#cfn-3','#cfn-4','#cfn-5'];
      const flowArrows = ['#cfa-0','#cfa-1','#cfa-2','#cfa-3','#cfa-4'];

      flowNodes.forEach((id, i) => {
        gsap.to(id, {
          scrollTrigger: st,
          opacity:1, y:0,
          duration:0.5, delay: 0.3 + i * 0.18,
          ease:'power3.out',
        });
      });
      flowArrows.forEach((id, i) => {
        gsap.to(id, {
          scrollTrigger: st,
          opacity:1, duration:0.3, delay: 0.45 + i * 0.18,
        });
      });

      // fill line grows as flow reveals
      gsap.to('#cf-fill', {
        scrollTrigger: { trigger:'#collab-flow', start:'top 70%', end:'bottom 60%', scrub:1 },
        height:'100%', ease:'none',
      });

      // packet travels the fill line scrubbed
      const pkt = document.getElementById('cf-packet');
      const flow = document.getElementById('collab-flow');
      gsap.to(pkt, { opacity:1, duration:0.01, scrollTrigger:{ trigger:'#collab-flow', start:'top 68%' } });
      const pp = { v:0 };
      gsap.to(pp, {
        v:1, ease:'none',
        scrollTrigger:{ trigger:'#collab-flow', start:'top 65%', end:'bottom 58%', scrub:0.8,
          onUpdate(self) {
            pkt.style.top = (self.progress * (flow.offsetHeight - 28)) + 'px';
          },
        },
      });

      // ── RIGHT: network nodes + edges ─────────────────────────────
      const netNodes = ['#nn-user','#nn-a','#nn-b','#nn-c','#nn-d','#nn-result'];
      const netEdges = ['#ne-ua','#ne-ab','#ne-ac','#ne-ad','#ne-br','#ne-cr','#ne-dr','#ne-bc','#ne-cd'];

      netNodes.forEach((id, i) => {
        gsap.to(id, {
          scrollTrigger: st,
          opacity:1, duration:0.5, delay: 0.2 + i * 0.12, ease:'back.out(1.4)',
        });
      });
      netEdges.forEach((id, i) => {
        gsap.to(id, {
          scrollTrigger: st,
          opacity:1, duration:0.4, delay: 0.5 + i * 0.08, ease:'power2.out',
          onComplete() {
            const el = document.querySelector(id);
            if (el) el.classList.add('active');
            // light up connected nodes
            const circMap = {
              '#ne-ua':['nnc-user','nnc-a'], '#ne-ab':['nnc-a','nnc-b'],
              '#ne-ac':['nnc-a','nnc-c'],   '#ne-ad':['nnc-a','nnc-d'],
              '#ne-br':['nnc-b','nnc-result'],'#ne-cr':['nnc-c','nnc-result'],
              '#ne-dr':['nnc-d','nnc-result'],'#ne-bc':['nnc-b','nnc-c'],
              '#ne-cd':['nnc-c','nnc-d'],
            };
            (circMap[id] || []).forEach(cid => {
              document.getElementById(cid)?.classList.add('lit');
            });
          },
        });
      });

      // travelling packets on network (looping)
      const routes = [
        { el:'#np-0', x1:180, y1:40,  x2:180, y2:130, delay:1.2 },
        { el:'#np-1', x1:180, y1:130, x2:70,  y2:210, delay:1.8 },
        { el:'#np-2', x1:70,  y1:210, x2:180, y2:340, delay:2.4 },
      ];
      routes.forEach(({ el, x1, y1, x2, y2, delay }) => {
        const circle = document.querySelector(el);
        if (!circle) return;
        const t = { v:0 };
        gsap.to(t, {
          v:1, duration:0.9, ease:'power1.inOut',
          delay,
          repeat:-1, repeatDelay:1.2,
          scrollTrigger:{ trigger:'#s5-communicate', start:'top 60%' },
          onUpdate() {
            const p = t.v;
            circle.setAttribute('cx', String(x1 + (x2-x1)*p));
            circle.setAttribute('cy', String(y1 + (y2-y1)*p));
            circle.setAttribute('opacity', p < 0.05 || p > 0.92 ? '0' : '1');
          },
        });
      });
    })();
`
