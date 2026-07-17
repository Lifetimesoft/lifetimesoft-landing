export const css: string = /* css */ `
    /* ── S9: ARCHITECTURE ── */
    #s9-arch-wrap {
      height: 5600px; /* pin + scroll room for 7 layers */
    }
    #s9-proof {
      min-height: unset;
      height: 100vh;
      padding: 0;
      overflow: hidden;
      border-bottom: none;
      display: block;
    }
    .arch-sticky {
      position: relative;
      width: 100%;
      height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      overflow: hidden;
    }

    /* ambient bg */
    .arch-bg {
      position: absolute;
      inset: 0;
      pointer-events: none;
      background: radial-gradient(ellipse 80% 70% at 50% 50%,
        rgba(124,92,252,.10) 0%, transparent 65%);
    }

    /* ── top label ── */
    .arch-top-label {
      position: absolute;
      top: 5rem;
      left: 50%;
      transform: translateX(-50%);
      text-align: center;
      z-index: 10;
      opacity: 0;
    }
    .arch-top-label h2 {
      font-size: clamp(1.6rem, 3.5vw, 2.6rem);
      font-weight: 800;
      letter-spacing: -1px;
      line-height: 1.1;
    }
    .arch-top-label h2 .hi {
      background: linear-gradient(135deg, var(--accent), var(--accent2));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    .arch-top-label p {
      color: var(--muted);
      font-size: .85rem;
      margin-top: .4rem;
    }

    /* ── active layer name ── */
    .arch-layer-name {
      position: absolute;
      bottom: 3.5rem;
      left: 50%;
      transform: translateX(-50%);
      z-index: 10;
      text-align: center;
      opacity: 0;
      transition: opacity .3s;
    }
    .arch-layer-name-text {
      font-size: 1.1rem;
      font-weight: 700;
      color: var(--text);
      letter-spacing: -.3px;
    }
    .arch-layer-name-desc {
      font-size: .78rem;
      color: var(--muted);
      margin-top: .2rem;
    }

    /* ── diagram container (perspective zoom) ── */
    .arch-diagram {
      position: relative;
      width: min(760px, 92vw);
      display: flex;
      flex-direction: column;
      gap: 0;
      z-index: 5;
      transform-style: preserve-3d;
    }

    /* ── each layer card ── */
    .arch-layer {
      width: 100%;
      border-radius: 14px;
      padding: 1rem 1.6rem;
      display: flex;
      align-items: center;
      gap: 1.2rem;
      border: 1px solid rgba(255,255,255,.07);
      background: var(--surface);
      position: relative;
      overflow: hidden;
      opacity: 0;
      transform: translateY(20px);
      transition: border-color .35s, box-shadow .35s, background .35s;
      margin-bottom: 6px;
    }
    /* active glow state */
    .arch-layer.active {
      border-color: var(--accent);
      box-shadow: 0 0 0 1px rgba(124,92,252,.25), 0 8px 32px rgba(124,92,252,.25);
      background: rgba(124,92,252,.07);
    }
    /* dim state for non-active layers */
    .arch-layer.dim {
      opacity: .3;
    }

    /* left badge */
    .arch-layer-badge {
      width: 44px; height: 44px;
      border-radius: 12px;
      background: rgba(255,255,255,.06);
      border: 1px solid rgba(255,255,255,.1);
      display: flex; align-items: center; justify-content: center;
      font-size: 1.3rem;
      flex-shrink: 0;
    }
    .arch-layer.active .arch-layer-badge {
      background: rgba(124,92,252,.15);
      border-color: rgba(124,92,252,.4);
    }

    /* text block */
    .arch-layer-info { flex: 1; }
    .arch-layer-title {
      font-size: .9rem;
      font-weight: 700;
      color: var(--text);
      letter-spacing: -.2px;
    }
    .arch-layer-desc {
      font-size: .72rem;
      color: var(--muted);
      margin-top: .15rem;
      line-height: 1.5;
    }

    /* right tech tags */
    .arch-layer-tags {
      display: flex;
      flex-wrap: wrap;
      gap: .3rem;
      justify-content: flex-end;
      max-width: 200px;
    }
    .arch-tag {
      padding: .18rem .55rem;
      border-radius: 6px;
      font-size: .65rem;
      font-weight: 700;
      background: rgba(255,255,255,.07);
      color: var(--muted);
      letter-spacing: .3px;
      white-space: nowrap;
    }
    .arch-layer.active .arch-tag {
      background: rgba(124,92,252,.15);
      color: var(--accent2);
    }

    /* left connector line between layers */
    .arch-connector {
      position: absolute;
      left: 2.55rem;
      width: 2px;
      height: 6px;
      background: rgba(255,255,255,.1);
      top: -6px;
      transition: background .3s;
    }
    .arch-layer.active .arch-connector { background: var(--accent); }

    /* zoom-in detail panel — appears when layer is active */
    .arch-detail {
      position: absolute;
      right: -300px;
      top: 50%;
      transform: translateY(-50%);
      width: 240px;
      background: rgba(13,13,18,.95);
      border: 1px solid rgba(124,92,252,.35);
      border-radius: 12px;
      padding: .9rem 1rem;
      opacity: 0;
      pointer-events: none;
      transition: opacity .3s, right .3s;
      z-index: 8;
    }
    .arch-layer.active .arch-detail {
      opacity: 1;
      right: -260px;
    }
    .arch-detail-title {
      font-size: .72rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 1.5px;
      color: var(--accent2);
      margin-bottom: .6rem;
    }
    .arch-detail-item {
      font-size: .72rem;
      color: var(--muted);
      padding: .25rem 0;
      border-bottom: 1px solid rgba(255,255,255,.05);
      display: flex;
      align-items: center;
      gap: .4rem;
    }
    .arch-detail-item:last-child { border-bottom: none; }
    .arch-detail-dot {
      width: 5px; height: 5px;
      border-radius: 50%;
      background: var(--accent);
      flex-shrink: 0;
    }

    /* progress bar at bottom */
    .arch-progress {
      position: absolute;
      bottom: 1.8rem;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      gap: 5px;
      z-index: 10;
    }
    .arch-prog-dot {
      width: 6px; height: 6px;
      border-radius: 50%;
      background: rgba(255,255,255,.15);
      transition: background .3s, transform .3s;
    }
    .arch-prog-dot.on {
      background: var(--accent);
      transform: scale(1.3);
    }
`

export const html: string = /* html */ `
  <!-- ── S9: ARCHITECTURE ── -->
  <div id="s9-arch-wrap">
    <section id="s9-proof">
      <div class="arch-sticky" id="arch-sticky">

        <div class="arch-bg"></div>

        <!-- top label -->
        <div class="arch-top-label" id="arch-top-label">
          <h2>Platform <span class="hi">Architecture</span></h2>
          <p>Scroll to zoom through each layer</p>
        </div>

        <!-- diagram stack -->
        <div class="arch-diagram" id="arch-diagram">

          <div class="arch-layer" id="al-0">
            <div class="arch-layer-badge">🧩</div>
            <div class="arch-layer-info">
              <div class="arch-layer-title">Framework Layer</div>
              <div class="arch-layer-desc">OpenAI SDK · Anthropic SDK · Gemini · CrewAI · LangGraph · custom</div>
            </div>
            <div class="arch-layer-tags">
              <span class="arch-tag">TypeScript</span>
              <span class="arch-tag">Python</span>
              <span class="arch-tag">Go</span>
            </div>
            <div class="arch-detail">
              <div class="arch-detail-title">Framework Layer</div>
              <div class="arch-detail-item"><span class="arch-detail-dot"></span>Any LLM provider</div>
              <div class="arch-detail-item"><span class="arch-detail-dot"></span>Bring your own SDK</div>
              <div class="arch-detail-item"><span class="arch-detail-dot"></span>Protocol-agnostic adapter</div>
              <div class="arch-detail-item"><span class="arch-detail-dot"></span>Multi-language support</div>
            </div>
          </div>

          <div class="arch-layer" id="al-1">
            <div class="arch-connector"></div>
            <div class="arch-layer-badge">⬡</div>
            <div class="arch-layer-info">
              <div class="arch-layer-title">Lifetime Runtime</div>
              <div class="arch-layer-desc">Universal execution engine — normalises all frameworks into one interface</div>
            </div>
            <div class="arch-layer-tags">
              <span class="arch-tag">WASM</span>
              <span class="arch-tag">V8 Isolate</span>
              <span class="arch-tag">Edge</span>
            </div>
            <div class="arch-detail">
              <div class="arch-detail-title">Runtime</div>
              <div class="arch-detail-item"><span class="arch-detail-dot"></span>Sub-ms cold start</div>
              <div class="arch-detail-item"><span class="arch-detail-dot"></span>Memory-safe isolation</div>
              <div class="arch-detail-item"><span class="arch-detail-dot"></span>Auto-scaling workers</div>
              <div class="arch-detail-item"><span class="arch-detail-dot"></span>300+ edge locations</div>
            </div>
          </div>

          <div class="arch-layer" id="al-2">
            <div class="arch-connector"></div>
            <div class="arch-layer-badge">🚌</div>
            <div class="arch-layer-info">
              <div class="arch-layer-title">Agent Bus</div>
              <div class="arch-layer-desc">Event mesh for agent-to-agent communication, routing and orchestration</div>
            </div>
            <div class="arch-layer-tags">
              <span class="arch-tag">Pub/Sub</span>
              <span class="arch-tag">gRPC</span>
              <span class="arch-tag">WebSocket</span>
            </div>
            <div class="arch-detail">
              <div class="arch-detail-title">Agent Bus</div>
              <div class="arch-detail-item"><span class="arch-detail-dot"></span>Topic-based routing</div>
              <div class="arch-detail-item"><span class="arch-detail-dot"></span>Guaranteed delivery</div>
              <div class="arch-detail-item"><span class="arch-detail-dot"></span>End-to-end encryption</div>
              <div class="arch-detail-item"><span class="arch-detail-dot"></span>Dead-letter queues</div>
            </div>
          </div>

          <div class="arch-layer" id="al-3">
            <div class="arch-connector"></div>
            <div class="arch-layer-badge">🏪</div>
            <div class="arch-layer-info">
              <div class="arch-layer-title">Marketplace</div>
              <div class="arch-layer-desc">Registry for agents, capabilities, tools, workflows and runtimes</div>
            </div>
            <div class="arch-layer-tags">
              <span class="arch-tag">OCI</span>
              <span class="arch-tag">semver</span>
              <span class="arch-tag">signed</span>
            </div>
            <div class="arch-detail">
              <div class="arch-detail-title">Marketplace</div>
              <div class="arch-detail-item"><span class="arch-detail-dot"></span>Signed packages</div>
              <div class="arch-detail-item"><span class="arch-detail-dot"></span>Semantic versioning</div>
              <div class="arch-detail-item"><span class="arch-detail-dot"></span>Private registry</div>
              <div class="arch-detail-item"><span class="arch-detail-dot"></span>Dependency resolver</div>
            </div>
          </div>

          <div class="arch-layer" id="al-4">
            <div class="arch-connector"></div>
            <div class="arch-layer-badge">⚡</div>
            <div class="arch-layer-info">
              <div class="arch-layer-title">Capability Layer</div>
              <div class="arch-layer-desc">Pre-built integrations: Google Drive, Shopee, Slack, OCR, 860+ more</div>
            </div>
            <div class="arch-layer-tags">
              <span class="arch-tag">OAuth2</span>
              <span class="arch-tag">REST</span>
              <span class="arch-tag">GraphQL</span>
            </div>
            <div class="arch-detail">
              <div class="arch-detail-title">Capabilities</div>
              <div class="arch-detail-item"><span class="arch-detail-dot"></span>Sandboxed execution</div>
              <div class="arch-detail-item"><span class="arch-detail-dot"></span>Credential vault</div>
              <div class="arch-detail-item"><span class="arch-detail-dot"></span>Rate-limit aware</div>
              <div class="arch-detail-item"><span class="arch-detail-dot"></span>Auto-retry with backoff</div>
            </div>
          </div>

          <div class="arch-layer" id="al-5">
            <div class="arch-connector"></div>
            <div class="arch-layer-badge">🔧</div>
            <div class="arch-layer-info">
              <div class="arch-layer-title">Tool Layer</div>
              <div class="arch-layer-desc">Code execution, file system, web scraping, databases, APIs</div>
            </div>
            <div class="arch-layer-tags">
              <span class="arch-tag">MCP</span>
              <span class="arch-tag">OpenAPI</span>
              <span class="arch-tag">WASM</span>
            </div>
            <div class="arch-detail">
              <div class="arch-detail-title">Tool Layer</div>
              <div class="arch-detail-item"><span class="arch-detail-dot"></span>MCP protocol native</div>
              <div class="arch-detail-item"><span class="arch-detail-dot"></span>OpenAPI auto-import</div>
              <div class="arch-detail-item"><span class="arch-detail-dot"></span>Secure sandboxing</div>
              <div class="arch-detail-item"><span class="arch-detail-dot"></span>Streaming results</div>
            </div>
          </div>

          <div class="arch-layer" id="al-6">
            <div class="arch-connector"></div>
            <div class="arch-layer-badge">🏢</div>
            <div class="arch-layer-info">
              <div class="arch-layer-title">Business Layer</div>
              <div class="arch-layer-desc">Billing, IAM, audit logs, SLA monitoring and compliance</div>
            </div>
            <div class="arch-layer-tags">
              <span class="arch-tag">SOC 2</span>
              <span class="arch-tag">GDPR</span>
              <span class="arch-tag">RBAC</span>
            </div>
            <div class="arch-detail">
              <div class="arch-detail-title">Business</div>
              <div class="arch-detail-item"><span class="arch-detail-dot"></span>Role-based access</div>
              <div class="arch-detail-item"><span class="arch-detail-dot"></span>Full audit trail</div>
              <div class="arch-detail-item"><span class="arch-detail-dot"></span>Usage metering</div>
              <div class="arch-detail-item"><span class="arch-detail-dot"></span>SOC 2 Type II ready</div>
            </div>
          </div>

        </div>

        <!-- active layer name at bottom -->
        <div class="arch-layer-name" id="arch-layer-name">
          <div class="arch-layer-name-text" id="arch-ln-text"></div>
          <div class="arch-layer-name-desc" id="arch-ln-desc"></div>
        </div>

        <!-- progress dots -->
        <div class="arch-progress" id="arch-progress">
          <div class="arch-prog-dot on" id="ap-0"></div>
          <div class="arch-prog-dot" id="ap-1"></div>
          <div class="arch-prog-dot" id="ap-2"></div>
          <div class="arch-prog-dot" id="ap-3"></div>
          <div class="arch-prog-dot" id="ap-4"></div>
          <div class="arch-prog-dot" id="ap-5"></div>
          <div class="arch-prog-dot" id="ap-6"></div>
        </div>

      </div>
    </section>
  </div>
`

export const js: string = /* js */ `
    // ── S9: ARCHITECTURE ─────────────────────────────────────────────
    (function archInit() {
      const LAYERS = 7;
      const SCROLL_PER_LAYER = 600; // px per layer zoom
      const TOTAL_SCROLL = LAYERS * SCROLL_PER_LAYER + 400;

      const layerMeta = [
        { name: 'Framework Layer',    desc: 'Bring any SDK or LLM provider' },
        { name: 'Lifetime Runtime',   desc: 'Universal execution engine at the edge' },
        { name: 'Agent Bus',          desc: 'Encrypted event mesh for agent communication' },
        { name: 'Marketplace',        desc: 'Signed registry — agents, tools, workflows' },
        { name: 'Capability Layer',   desc: '860+ pre-built integrations, one-line install' },
        { name: 'Tool Layer',         desc: 'MCP-native tools — code, files, APIs, databases' },
        { name: 'Business Layer',     desc: 'IAM, billing, audit logs, SOC 2 compliance' },
      ];

      // ── Pin sticky ───────────────────────────────────────────────
      ScrollTrigger.create({
        trigger: '#s9-arch-wrap',
        start: 'top top',
        end: '+=' + (TOTAL_SCROLL + 200),
        pin: '#arch-sticky',
        anticipatePin: 1,
      });

      // ── Top label + initial layer fade-in ────────────────────────
      const entryST = { trigger: '#s9-arch-wrap', start: 'top 80%' };
      gsap.to('#arch-top-label', { scrollTrigger: entryST, opacity:1, duration:0.8, ease:'power3.out' });

      gsap.to('.arch-layer', {
        scrollTrigger: entryST,
        opacity: 1,
        y: 0,
        duration: 0.55,
        stagger: 0.07,
        ease: 'power3.out',
        delay: 0.2,
      });

      gsap.to('#arch-layer-name', { scrollTrigger: entryST, opacity:1, duration:0.5, delay:0.8 });

      // ── Scrub: zoom into each layer as user scrolls ───────────────
      ScrollTrigger.create({
        trigger: '#s9-arch-wrap',
        start: 'top top',
        end: '+=' + (TOTAL_SCROLL + 200),
        scrub: 0.6,
        onUpdate(self) {
          // which layer is active — each layer gets SCROLL_PER_LAYER px of scroll
          const offset     = Math.max(0, self.progress * (TOTAL_SCROLL + 200) - 200);
          const activeIdx  = Math.min(LAYERS - 1, Math.floor(offset / SCROLL_PER_LAYER));
          const layerProg  = (offset % SCROLL_PER_LAYER) / SCROLL_PER_LAYER; // 0-1 within layer

          // zoom the whole diagram: slight scale up as we dive in
          const zoom = 1 + activeIdx * 0.012;
          gsap.set('#arch-diagram', { scale: zoom });

          // update each layer's visual state
          for (let i = 0; i < LAYERS; i++) {
            const el = document.getElementById('al-' + i);
            if (!el) continue;

            if (i === activeIdx) {
              el.classList.add('active');
              el.classList.remove('dim');
            } else if (i < activeIdx) {
              el.classList.remove('active');
              el.classList.add('dim');
            } else {
              el.classList.remove('active', 'dim');
            }

            // progress dot
            const dot = document.getElementById('ap-' + i);
            if (dot) dot.classList.toggle('on', i <= activeIdx);
          }

          // update bottom layer name
          const meta = layerMeta[activeIdx];
          const nameEl = document.getElementById('arch-ln-text');
          const descEl = document.getElementById('arch-ln-desc');
          if (nameEl && descEl) {
            nameEl.textContent = meta.name;
            descEl.textContent = meta.desc;
          }
        },
      });
    })();
`
