import { describe, it, expect, vi, beforeAll } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import { SettingsProvider } from "@/context/SettingsContext";
import { AboutHero } from "@/components/about/AboutHero";
import { BrandStorySection } from "@/components/about/BrandStorySection";
import { AgencyComparisonSection } from "@/components/about/AgencyComparisonSection";
import { HorologicalManifesto } from "@/components/about/HorologicalManifesto";
import { KinshasaDiasporaMap } from "@/components/about/KinshasaDiasporaMap";
import { LeadershipTeam } from "@/components/about/LeadershipTeam";
import { BmadFrameworkSteps } from "@/components/about/BmadFrameworkSteps";
import AboutPage from "@/app/a-propos/page";

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
});

describe("About Page & Components", () => {
  it("renders AboutHero with title, badge and precision telemetry counters", () => {
    render(
      <SettingsProvider>
        <AboutHero />
      </SettingsProvider>
    );

    expect(screen.getByText(/ATELIER D'HORLOGERIE LOGICIELLE/i)).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        name: /L'art de la haute précision appliqué aux systèmes numériques/i,
      })
    ).toBeInTheDocument();
    expect(screen.getByText(/< 100ms/i)).toBeInTheDocument();
    expect(screen.getByText(/99.9%/i)).toBeInTheDocument();
    expect(screen.getByText(/0 Dette/i)).toBeInTheDocument();
    expect(screen.getByText(/100%/i)).toBeInTheDocument();
  });

  it("renders BrandStorySection with PIX, SELL, Fibonacci logo anatomy and hex colors", () => {
    render(
      <SettingsProvider>
        <BrandStorySection />
      </SettingsProvider>
    );

    expect(
      screen.getByRole("heading", {
        name: /L'Image n'est pas de la Décoration\. L'Image, c'est de la Vente\./i,
      })
    ).toBeInTheDocument();
    expect(screen.getByText("PIX")).toBeInTheDocument();
    expect(screen.getByText("SELL")).toBeInTheDocument();
    expect(screen.getByText(/Le Pixel • L'Unité Irréductible/i)).toBeInTheDocument();
    expect(screen.getByText(/Vendre • Convertir l'Attention en Décision/i)).toBeInTheDocument();
    expect(screen.getByText("#0089D0")).toBeInTheDocument();
    expect(screen.getByText("#3DBCC7")).toBeInTheDocument();
    expect(screen.getByText("#F37021")).toBeInTheDocument();
    expect(screen.getByText("#FDB913")).toBeInTheDocument();
  });

  it("renders AgencyComparisonSection with positioning matrix", () => {
    render(
      <SettingsProvider>
        <AgencyComparisonSection />
      </SettingsProvider>
    );

    expect(
      screen.getByRole("heading", {
        name: /Ce Que Nous Sommes • Et Ce Que Nous Refusons d'Être/i,
      })
    ).toBeInTheDocument();
    expect(screen.getByText(/Agence Marketing Classique/i)).toBeInTheDocument();
    expect(screen.getAllByText(/Accélérateur de Vente/i).length).toBeGreaterThanOrEqual(1);
    expect(screen.getByText(/Crée des campagnes éphémères et recommence chaque mois/i)).toBeInTheDocument();
    expect(screen.getByText(/Construit des systèmes logiciels & marketing autonomes qui vendent en continu/i)).toBeInTheDocument();
  });

  it("renders HorologicalManifesto with 4 clockwork organs", () => {
    render(
      <SettingsProvider>
        <HorologicalManifesto />
      </SettingsProvider>
    );

    expect(
      screen.getByRole("heading", {
        name: /Le Manifeste du Calibre Numérique/i,
      })
    ).toBeInTheDocument();
    expect(screen.getByText(/Le Balancier-Spiral/i)).toBeInTheDocument();
    expect(screen.getByText(/L'Échappement à Ancre/i)).toBeInTheDocument();
    expect(screen.getByText(/Les Rouages Intermédiaires/i)).toBeInTheDocument();
    expect(screen.getByText(/Le Barillet & Ressort/i)).toBeInTheDocument();
  });

  it("renders KinshasaDiasporaMap with multi-zone hubs", () => {
    render(
      <SettingsProvider>
        <KinshasaDiasporaMap />
      </SettingsProvider>
    );

    expect(
      screen.getByRole("heading", {
        name: /Nés à Kinshasa\. Déployés à l'Échelle Mondiale\./i,
      })
    ).toBeInTheDocument();
    expect(screen.getByText(/Kinshasa, RDC/i)).toBeInTheDocument();
    expect(screen.getByText(/Paris & Bruxelles/i)).toBeInTheDocument();
    expect(screen.getByText(/Montréal & Québec/i)).toBeInTheDocument();
    expect(screen.getByText(/Réseau Upwork Global/i)).toBeInTheDocument();
  });

  it("renders LeadershipTeam with David Kalambay and Jean-Luc Mukendi", () => {
    render(
      <SettingsProvider>
        <LeadershipTeam />
      </SettingsProvider>
    );

    expect(
      screen.getByRole("heading", {
        name: /Les Maîtres-Horlogers de Picsell Agency/i,
      })
    ).toBeInTheDocument();
    expect(screen.getByText(/David Kalambay/i)).toBeInTheDocument();
    expect(screen.getByText(/Jean-Luc Mukendi/i)).toBeInTheDocument();
    expect(screen.getByText(/Architecte Principal/i)).toBeInTheDocument();
    expect(screen.getByText(/Directeur Stratégie/i)).toBeInTheDocument();
  });

  it("renders BmadFrameworkSteps and allows switching between protocol steps", () => {
    render(
      <SettingsProvider>
        <BmadFrameworkSteps />
      </SettingsProvider>
    );

    expect(
      screen.getByRole("heading", {
        name: /Le Protocole d'Épreuve en 4 Temps/i,
      })
    ).toBeInTheDocument();
    expect(screen.getAllByText(/Démontage & Audit Micrométrique/i).length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText(/Conception & Calibrage de Précision/i).length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText(/Assemblage en Chambre d'Épreuve/i).length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText(/Remontage Perpétuel & Télémétrie/i).length).toBeGreaterThanOrEqual(1);

    // Click on step 02 button
    const step2Btn = screen.getByRole("button", { name: /Conception & Calibrage de Précision/i });
    fireEvent.click(step2Btn);
    expect(screen.getByText(/ÉTAPE 02/i)).toBeInTheDocument();
  });

  it("renders complete AboutPage within SettingsProvider", () => {
    render(
      <SettingsProvider>
        <AboutPage />
      </SettingsProvider>
    );

    expect(screen.getByRole("main")).toBeInTheDocument();
  });
});
