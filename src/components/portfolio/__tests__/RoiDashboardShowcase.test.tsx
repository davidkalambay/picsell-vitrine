import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { RoiDashboardShowcase } from "../RoiDashboardShowcase";

// Mock SettingsContext and GSAP
vi.mock("@/context/SettingsContext", () => ({
  useSiteSettings: () => ({
    settings: {
      splitTextReveal: true,
      dataLiveCounter: true,
      magneticButtons: true,
      extremeTypography: true,
      reducedMotion: false,
    },
  }),
}));

describe("RoiDashboardShowcase Component", () => {
  it("renders section title and simulator tab by default", () => {
    render(<RoiDashboardShowcase />);
    expect(screen.getByText(/TÉLÉMÉTRIE ROI/i)).toBeInTheDocument();
    expect(screen.getByRole("tab", { name: /1\. Simulateur ROI Prédictif/i })).toBeInTheDocument();
  });

  it("switches tabs between Simulateur, Cockpit Live and Vidéo Démo", async () => {
    const user = userEvent.setup();
    render(<RoiDashboardShowcase />);

    const cockpitTab = screen.getByRole("tab", { name: /2\. Cockpit Télémétrie Live/i });
    await user.click(cockpitTab);
    expect(cockpitTab).toHaveAttribute("aria-selected", "true");

    const demoTab = screen.getByRole("tab", { name: /3\. Démo Vidéo Interactive/i });
    await user.click(demoTab);
    expect(demoTab).toHaveAttribute("aria-selected", "true");
  });
});
