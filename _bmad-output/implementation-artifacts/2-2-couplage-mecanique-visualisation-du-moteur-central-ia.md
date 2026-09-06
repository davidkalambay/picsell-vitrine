# Story 2.2: Couplage Mécanique & Visualisation du Moteur Central IA

Status: done

## Story

As a **Technical Decision Maker (James)**,
I want **to visualize how the central AI Engine mechanically couples with and accelerates each of the 4 satellite pillars**,
so that **I have concrete proof that AI is an integrated technological catalyst rather than empty marketing jargon.**

## Acceptance Criteria

1. **Central AI Engine Coupling Visualizer (`ScrollytellingEngine.tsx`):**
    - [x] Master central gear representing the AI Engine (`CENTRAL_AI_GEAR`) with dark titanium styling and subtle glow filter (`#ai-glow`).
    - [x] Dynamic Blueprint axis lines connecting the Central Hub to the active satellite gear.
    - [x] Active satellite axis line pulses with energy (`strokeDasharray="4 2"`, animated ping point, and matching neon glow).
2. **Kinematic Clockwork Interlocking:**
    - [x] Precise angular gear ratios: when the central AI gear rotates clockwise by $900^\circ$, each satellite gear counter-rotates dynamically based on tooth count ratio ($-\theta \times \frac{N_{central}}{N_{satellite}}$).
    - [x] Real-time scrub synchronization via GSAP ScrollTrigger ticker.
3. **Pillar-Specific AI Catalyst Descriptions (`ScrollytellingSection.tsx`):**
    - [x] Each card displays a dedicated "Couplage Moteur Central IA" telemetry block.
    - [x] Explicit description of the specific AI contribution:
        - *Digital Marketing*: Continuous semantic architecture and AEO optimization for ChatGPT, Perplexity, and Gemini.
        - *Automation*: Multi-step autonomous agents for document processing and CRM lead routing.
        - *Development*: BMAD AI generation supervision producing strictly typed TypeScript code and automated tests.
        - *Data Intelligence*: Automated regression models and real-time operational anomaly detection.

## Tasks / Subtasks

- [x] Task 1: Implement Dynamic Axis Line Energy Coupling (AC: 1)
  - [x] Update axis line render in `ScrollytellingEngine.tsx` with animated pulse indicators.
  - [x] Connect `activeSection` state to highlight the exact path between Central AI Core and active satellite.
- [x] Task 2: Synchronize Mechanical Kinematics (AC: 2)
  - [x] Verify mathematical ratios in `src/config/gears.config.ts`.
  - [x] Ensure smooth 60 FPS scrolling synchronization without layout thrashing.
- [x] Task 3: Implement AI Telemetry Blocks on Service Cards (AC: 3)
  - [x] Add "Couplage Moteur Central IA" telemetry readout to each card in `ScrollytellingSection.tsx`.

## Dev Notes

- **Components Modified:**
  - `src/components/ScrollytellingEngine.tsx`
  - `src/components/ScrollytellingSection.tsx`
  - `src/config/gears.config.ts`
