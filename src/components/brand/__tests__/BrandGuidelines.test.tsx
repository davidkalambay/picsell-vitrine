import { describe, it, expect, vi, beforeAll } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import { SettingsProvider } from "@/context/SettingsContext";
import { BrandHero } from "@/components/brand/BrandHero";
import { InteractiveColorPalette } from "@/components/brand/InteractiveColorPalette";
import { LogoGuidelinesSection } from "@/components/brand/LogoGuidelinesSection";
import { TypographySpecimenSection } from "@/components/brand/TypographySpecimenSection";
import { VoiceAndToneSection } from "@/components/brand/VoiceAndToneSection";
import BrandPage from "@/app/brand/page";

// Mock matchMedia
beforeAll(() => {
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: vi.fn().mockImplementation((query: string) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    })),
  });

  // Mock clipboard
  Object.assign(navigator, {
    clipboard: {
      writeText: vi.fn().mockImplementation(() => Promise.resolve()),
    },
  });
});

describe("Brand Guidelines Page & Components", () => {
  it("renders BrandHero with title and download button", () => {
    render(
      <SettingsProvider>
        <BrandHero />
      </SettingsProvider>
    );

    expect(
      screen.getByRole("heading", {
        name: /L'Identité Visuelle & les Standards de la Marque\./i,
      })
    ).toBeInTheDocument();
    expect(screen.getByText(/Télécharger le Brand Kit \(JSON\)/i)).toBeInTheDocument();
  });

  it("renders InteractiveColorPalette with all 6 colors and handles copy click", () => {
    render(
      <SettingsProvider>
        <InteractiveColorPalette />
      </SettingsProvider>
    );

    expect(
      screen.getByRole("heading", {
        name: /La Palette Chromatique Interactive/i,
      })
    ).toBeInTheDocument();
    expect(screen.getByText("Bleu Picsell")).toBeInTheDocument();
    expect(screen.getByText("#0089D0")).toBeInTheDocument();
    expect(screen.getByText("Turquoise")).toBeInTheDocument();
    expect(screen.getByText("#3DBCC7")).toBeInTheDocument();
    expect(screen.getByText("Orange Énergie")).toBeInTheDocument();
    expect(screen.getByText("#F37021")).toBeInTheDocument();
    expect(screen.getByText("Jaune Doré")).toBeInTheDocument();
    expect(screen.getByText("#FDB913")).toBeInTheDocument();
    expect(screen.getByText("Noir Charbon")).toBeInTheDocument();
    expect(screen.getByText("#1A1A1A")).toBeInTheDocument();
    expect(screen.getByText("Blanc Cassé")).toBeInTheDocument();
    expect(screen.getByText("#F0F2F5")).toBeInTheDocument();

    // Click to copy
    const blueCard = screen.getByText("Bleu Picsell");
    fireEvent.click(blueCard);
    expect(navigator.clipboard.writeText).toHaveBeenCalledWith("#0089D0");
  });

  it("renders LogoGuidelinesSection with 4 variations and download button", () => {
    render(
      <SettingsProvider>
        <LogoGuidelinesSection />
      </SettingsProvider>
    );

    expect(
      screen.getByRole("heading", {
        name: /Déclinaisons & Règles d'Usage du Logo/i,
      })
    ).toBeInTheDocument();
    expect(screen.getByText("Version Fond Sombre")).toBeInTheDocument();
    expect(screen.getByText("Version Fond Clair")).toBeInTheDocument();
    expect(screen.getByText("Monochrome Blanc")).toBeInTheDocument();
    expect(screen.getByText("Monochrome Noir")).toBeInTheDocument();
    expect(screen.getByText(/Télécharger le Logo Officiel \(SVG Vectoriel\)/i)).toBeInTheDocument();
  });

  it("renders TypographySpecimenSection and allows custom text testing", () => {
    render(
      <SettingsProvider>
        <TypographySpecimenSection />
      </SettingsProvider>
    );

    expect(
      screen.getByRole("heading", {
        name: /Spécimens Typographiques Vivants/i,
      })
    ).toBeInTheDocument();
    expect(screen.getByText("Sora")).toBeInTheDocument();
    expect(screen.getByText("Montserrat")).toBeInTheDocument();
    expect(screen.getByText("Geist Sans")).toBeInTheDocument();
    expect(screen.getByText("Geist Mono")).toBeInTheDocument();

    const testerInput = screen.getByPlaceholderText(/Tapez une phrase pour la prévisualiser/i);
    fireEvent.change(testerInput, { target: { value: "Haute Précision" } });
    expect(screen.getAllByText("Haute Précision").length).toBeGreaterThanOrEqual(1);
  });

  it("renders VoiceAndToneSection with 4 editorial principles", () => {
    render(
      <SettingsProvider>
        <VoiceAndToneSection />
      </SettingsProvider>
    );

    expect(
      screen.getByRole("heading", {
        name: /La Posture Éditoriale de la Marque/i,
      })
    ).toBeInTheDocument();
    expect(screen.getByText("Direct & Confiant")).toBeInTheDocument();
    expect(screen.getByText("Zéro Jargon Creux")).toBeInTheDocument();
    expect(screen.getByText("Métaphore Horlogère Assumée")).toBeInTheDocument();
    expect(screen.getByText("Orienté Vente & Décision")).toBeInTheDocument();
  });

  it("renders full BrandPage within SettingsProvider", () => {
    render(
      <SettingsProvider>
        <BrandPage />
      </SettingsProvider>
    );

    expect(screen.getByRole("main")).toBeInTheDocument();
  });
});
