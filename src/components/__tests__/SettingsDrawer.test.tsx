import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { SettingsDrawer } from "../SettingsDrawer";

const mockUpdateSetting = vi.fn();
const mockResetSettings = vi.fn();
const mockTriggerDrawSvgReplay = vi.fn();
const mockTriggerHeroIntroReplay = vi.fn();
const mockSetIsDrawerOpen = vi.fn();

let mockIsDrawerOpen = false;

const defaultMockSettings = {
  themeMode: "scroll-dynamic",
  glassmorphism: true,
  reactiveOutline: true,
  noiseOverlay: true,
  noiseIntensity: "medium",
  blueprintGrid: true,
  badgeMicroInteractions: true,
  clippingMaskNumbers: true,
  codeTerminals: true,
  progressRing: true,
  extremeTypography: true,
  floatingCta: true,
  scrollSnap: true,
  splitTextReveal: true,
  drawSvgIntro: true,
  neonGlow: true,
  parallaxBadges: true,
  heroMechanicalIntro: true,
  dataLiveCounter: true,
  magneticButtons: true,
  gearCursor: true,
  scrubSpeed: 0.8,
  gearScale: "default",
  ecoMode: false,
  reducedMotion: false,
  fontSizeScale: 1,
  highContrast: false,
  monochrome: false,
  debugHud: false,
};

vi.mock("@/context/SettingsContext", () => ({
  useSiteSettings: () => ({
    settings: defaultMockSettings,
    updateSetting: mockUpdateSetting,
    resetSettings: mockResetSettings,
    triggerDrawSvgReplay: mockTriggerDrawSvgReplay,
    triggerHeroIntroReplay: mockTriggerHeroIntroReplay,
    isDrawerOpen: mockIsDrawerOpen,
    setIsDrawerOpen: mockSetIsDrawerOpen,
    batteryInfo: { isLowBattery: false, level: 85, charging: true },
  }),
}));

describe("SettingsDrawer Component", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    mockIsDrawerOpen = false;
  });

  it("renders floating settings trigger button", () => {
    render(<SettingsDrawer />);
    const openBtn = screen.getByRole("button", { name: /ouvrir les réglages du site/i });
    expect(openBtn).toBeInTheDocument();
  });

  it("opens the settings drawer when trigger button is clicked", async () => {
    const user = userEvent.setup();
    render(<SettingsDrawer />);

    const openBtn = screen.getByRole("button", { name: /ouvrir les réglages du site/i });
    await user.click(openBtn);
    expect(mockSetIsDrawerOpen).toHaveBeenCalledWith(true);
  });

  it("switches tabs between Sally, Amélia and Winston when open", async () => {
    mockIsDrawerOpen = true;
    const user = userEvent.setup();
    render(<SettingsDrawer />);

    expect(screen.getByText(/Studio de Réglages/i)).toBeInTheDocument();
    expect(screen.getByText(/Sally — Direction Artistique & UI\/UX/i)).toBeInTheDocument();

    const ameliaTab = screen.getByRole("button", { name: /amélia/i });
    await user.click(ameliaTab);
    expect(screen.getByText(/Amélia — Mouvements & Animations GSAP/i)).toBeInTheDocument();

    const winstonTab = screen.getByRole("button", { name: /winston/i });
    await user.click(winstonTab);
    expect(screen.getByText(/Winston — Architecture & Performance/i)).toBeInTheDocument();
  });

  it("triggers updateSetting when toggling feature checkboxes", async () => {
    mockIsDrawerOpen = true;
    const user = userEvent.setup();
    render(<SettingsDrawer />);

    const glassCheckbox = screen.getAllByRole("checkbox")[0];
    await user.click(glassCheckbox);
    expect(mockUpdateSetting).toHaveBeenCalled();
  });

  it("triggers resetSettings when clicking on the Reset button", async () => {
    mockIsDrawerOpen = true;
    const user = userEvent.setup();
    render(<SettingsDrawer />);

    const resetBtn = screen.getByRole("button", { name: /réinitialiser tous les réglages par défaut/i });
    await user.click(resetBtn);
    expect(mockResetSettings).toHaveBeenCalledTimes(1);
  });
});
