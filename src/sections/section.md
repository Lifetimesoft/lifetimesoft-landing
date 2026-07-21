# Lifetimesoft Landing Sections

This document is the source spec for the landing page sections in `src/sections`.
Each section has one TypeScript file that exports `css`, `html`, and `js`.

## Design System

Animation style:
- Prefer morphing, line draw, scale, network movement, node activation, SVG paths, and packet motion.
- Avoid using fade as the primary animation language.
- Fade may still be used sparingly for small supporting reveals, but the main visual action should come from scale, drawn paths, moving packets, or active node states.

Visual style:
- Background: `#ffffff` or `#fafafa`.
- Text: `#111111`.
- Muted text: neutral gray.
- Accent: one primary color only, Lifetime Soft green `#15803d`.
- Avoid multi-color gradients as the dominant visual language.
- Prefer thin lines, outlined cards, clean nodes, and SVG paths over heavy glow.

Typography:
- Heading/body font: Inter.
- Code/terminal font: JetBrains Mono.

## Section Map

| Section | File | Main anchor | Nav label | Purpose |
| --- | --- | --- | --- | --- |
| 1 | `s1-hero.ts` | `#s1-hero` | Hero | Opening pinned hero |
| 2 | `s2-problem.ts` | `#s2-problem` | Problem | Fragmented agent ecosystem |
| 3 | `s3-runtime.ts` | `#s3-runtime` | Runtime | Introducing Lifetime Runtime |
| 4 | `s4-run.ts` | `#s4-run` | Run Anywhere | Multi-runtime deployment |
| 5 | `s5-collab.ts` | `#s5-collab` | Collaboration | Agent collaboration network |
| 6 | `s6-marketplace.ts` | `#s6-marketplace` | Marketplace | Marketplace wallet stack |
| 7 | `s7-scale.ts` | `#s7-scale` | Capability | Install capabilities instead of rebuilding |
| 8 | `s8-how.ts` | `#s8-how` | CLI | `lifectl` workflow |
| 9 | `s9-architecture.ts` | `#s9-architecture` | Architecture | Platform architecture layers |
| 10 | `s10-cta.ts` | `#s10-cta` | Get Started | Final call to action |

## Section 1: Hero

File: `s1-hero.ts`

Height:
- 100vh pinned viewport.
- About 2500px scroll room.

Animation:
- Start from a blank dark screen.
- Type `Run Any AI Agent.` word by word.
- Reveal `Anywhere.` as the larger second line.
- Show six agent pills floating around the screen:
  - OpenAI SDK
  - Anthropic SDK
  - Gemini SDK
  - CrewAI
  - LangGraph
  - Your SDK
- Agents converge into `Lifetime Runtime`, like packages entering a runtime container.
- Final copy and buttons appear.

Copy:
- Headline: `Run Any AI Agent. Anywhere.`
- Sub: `The Autonomous Agent Platform that connects every runtime, framework and capability.`
- Buttons:
  - `Start Building` -> `#s10-cta`
  - `Explore Marketplace` -> `#s6-marketplace`

## Section 2: Problem

File: `s2-problem.ts`

Purpose:
- Show that AI agents are everywhere, but disconnected.

Animation:
- Agent/environment nodes appear apart from each other:
  - Cloud
  - Browser
  - Desktop
  - Mobile
- Red broken connection lines and X marks communicate fragmentation.
- On scroll, lines begin to connect.

Copy:
- Headline: `AI Agents are everywhere. But they can't work together.`
- Tags:
  - Different frameworks.
  - Different runtimes.
  - Different protocols.
  - Different tools.

## Section 3: Runtime

File: `s3-runtime.ts`

Purpose:
- Introduce `Lifetime Runtime` as the center that connects all agents.

Animation:
- Runtime orb appears in the center.
- Agent nodes connect into the runtime.
- Green lines and packets travel from agents to runtime.
- Environment pills appear beneath the headline.

Copy:
- Label: `Lifetime Runtime`
- Headline: `One Runtime. Every Agent. Every Environment.`
- Environments:
  - Cloud
  - Browser
  - Desktop
  - Mobile
  - Edge

## Section 4: Run Anywhere

File: `s4-run.ts`

Purpose:
- Show one deployment travelling across multiple runtimes.

Animation:
- A packet travels down a vertical pipeline:
  - Cloud
  - Browser
  - Desktop
  - Mobile
  - Edge
- Runtime cards light up as the packet reaches each stop.

Copy:
- Headline: `Deploy once. Run everywhere.`
- Cards:
  - Cloud Runtime
  - Browser Runtime
  - Desktop Runtime
  - Mobile Runtime
  - Edge Runtime

## Section 5: Collaboration

File: `s5-collab.ts`

Purpose:
- Highlight autonomous multi-agent collaboration.

Animation:
- User asks for research.
- Agent A orchestrates the task.
- Agent B, Agent C, and Agent D do specialized work.
- Result returns to the user.
- A network diagram on the side lights up with moving packets.

Copy:
- Headline: `Autonomous Multi-Agent Collaboration`
- Flow:
  - User
  - Agent A: Orchestrator
  - Agent B: Researcher
  - Agent C: Analyst
  - Agent D: Writer
  - Result delivered to User

## Section 6: Marketplace

File: `s6-marketplace.ts`

Purpose:
- Present the marketplace as a full-screen wallet-style stack.

Animation:
- Marketplace cards bounce up from the bottom.
- On scroll, cards open like Apple Wallet.

Cards:
- Agent Marketplace
- Capability Marketplace
- Tool Marketplace
- Workflow Marketplace
- Runtime Marketplace

Copy:
- Headline: `Marketplace`
- Sub: `Everything your agent needs - one place to find, publish and compose.`

## Section 7: Capability

File: `s7-scale.ts`

Purpose:
- Show that agents can install capabilities instead of rebuilding integrations.

Animation:
- Agent starts with no skills installed.
- Capabilities install one by one:
  - Google Drive
  - Shopee
  - Slack
  - OCR
- The agent fills with capability icons, like a skill tree.

Copy:
- Headline: `Install capabilities. Don't rebuild them.`

## Section 8: CLI

File: `s8-how.ts`

Purpose:
- Show how developers build and deploy with `lifectl`.

Animation:
- Terminal types commands:
  - `lifectl create agent`
  - `lifectl install capability github`
  - `lifectl deploy`
- Deploy targets light up:
  - Cloud
  - Browser
  - Desktop

Copy:
- Headline: `lifectl - one CLI. All your agents.`
- Sub: `Create, install capabilities, and deploy to any environment in seconds.`

## Section 9: Architecture

File: `s9-architecture.ts`

Purpose:
- Show the platform architecture for technical visitors.

Animation:
- Pinned architecture diagram.
- Scroll zooms through each layer.
- Active layer glows and shows detail.

Layers:
- Framework Layer
- Lifetime Runtime
- Agent Bus
- Marketplace
- Capability Layer
- Tool Layer
- Business Layer

Copy:
- Headline: `Platform Architecture`
- Sub: `Scroll to zoom through each layer`

## Section 10: Final CTA

File: `s10-cta.ts`

Purpose:
- End the page with a strong build/get-started call to action.

Animation:
- Black grid background.
- Network lines animate continuously.
- Agent nodes pulse and agent packets move around the network.
- CTA copy fades in.

Copy:
- Kicker: `Lifetime Runtime`
- Headline: `Build the Future of Autonomous Agents.`
- Sub:
  - Run anywhere.
  - Connect everything.
  - Scale infinitely.
- Button:
  - `Get Started` -> `#s8-how`
