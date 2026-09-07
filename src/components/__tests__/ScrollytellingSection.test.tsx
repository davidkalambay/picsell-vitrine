import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { ScrollytellingSection } from "../ScrollytellingSection";

// Mock SettingsContext and GSAP
vi.mock("@/context/SettingsContext", () => ({
  useSiteSettings: () => ({
    settings: {
      splitTextReveal: true,
      extremeTypography: true,
      scrollSnap: true,
      reactiveOutline: true,
      clippingMaskNumbers: true,
      codeTerminals: true,
      progressRing: true,
      reducedMotion: false,
    },
  }),
}));

// Mock GSAP config
vi.mock("@/lib/gsap-config", () => ({
  gsap: {
    to: vi.fn(),
    fromTo: vi.fn(),
    set: vi.fn(),
  },
  ScrollTrigger: {
    create: vi.fn(() => ({ kill: vi.fn() })),
  },
  useGSAP: vi.fn(),
}));

describe("ScrollytellingSection Component", () => {
  it("renders the 4 service pillar cards in DOM with active action verbs", () => {
    render(<ScrollytellingSection />);

    expect(screen.getByText(/01 \/ ACQUÉRIR/i)).toBeInTheDocument();
    expect(screen.getByText(/02 \/ ACCÉLÉRER/i)).toBeInTheDocument();
    expect(screen.getByText(/03 \/ BÂTIR/i)).toBeInTheDocument();
    expect(screen.getByText(/04 \/ PILOTER/i)).toBeInTheDocument();
  });

  it("renders pillar badges and technical spec indices", () => {
    render(<ScrollytellingSection />);

    expect(screen.getAllByText("Workflows").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Intégrations").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Gain de temps").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Web & Mobile").length).toBeGreaterThan(0);

    expect(screen.getByText("// SPEC_01: ACQUISITION_ROAS // CHANNEL_GROWTH")).toBeInTheDocument();
    expect(screen.getByText("// SPEC_02: WORKFLOW_SYNC // ZERO_HUMAN_ERROR")).toBeInTheDocument();
    expect(screen.getByText("// SPEC_03: SAAS_CORE_ENGINE // POSTGRES_OPTIMIZED")).toBeInTheDocument();
    expect(screen.getByText("// SPEC_04: PREDICTIVE_ANALYTICS // DECISION_ENGINE")).toBeInTheDocument();
  });
});
