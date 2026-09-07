import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ConversionHub } from "../ConversionHub";

// Mock SettingsContext and Analytics
vi.mock("@/context/SettingsContext", () => ({
  useSiteSettings: () => ({
    settings: {
      splitTextReveal: true,
      magneticButtons: true,
      reducedMotion: false,
    },
  }),
}));

vi.mock("@/lib/analytics", () => ({
  trackEvent: vi.fn(),
}));

describe("ConversionHub Component", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it("renders Dual Conversion tunnels (Upwork and Strategic Consultation)", () => {
    render(<ConversionHub />);
    expect(screen.getByText(/Passerelle Internationale \/\/ James/i)).toBeInTheDocument();
    expect(screen.getByText(/Cadrage Stratégique \/\/ Jean-Luc/i)).toBeInTheDocument();
    expect(screen.getByText(/Contrat Sécurisé Upwork/i)).toBeInTheDocument();
    expect(screen.getByText(/Demander une Consultation Directe/i)).toBeInTheDocument();
  });

  it("filters tunnels using filter buttons", async () => {
    const user = userEvent.setup();
    render(<ConversionHub />);

    const upworkFilterBtn = screen.getByRole("tab", { name: /tunnel upwork/i });
    await user.click(upworkFilterBtn);
    expect(screen.getByText(/TOP RATED PLUS/i)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /engager david sur upwork/i })).toBeInTheDocument();
  });

  it("displays server validation errors when API rejects invalid fields", async () => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: false,
      json: async () => ({
        error: "Données de formulaire invalides.",
        details: {
          name: "Le nom est obligatoire.",
          company: "L'entreprise est obligatoire.",
          email: "L'email professionnel est obligatoire.",
        },
      }),
    });

    render(<ConversionHub />);

    const form = document.querySelector("#consultation-direct-form") as HTMLFormElement;
    fireEvent.submit(form);

    await waitFor(() => {
      expect(screen.getByText(/données de formulaire invalides/i)).toBeInTheDocument();
      expect(screen.getByText(/le nom est obligatoire/i)).toBeInTheDocument();
    });
  });

  it("displays success receipt modal after successful form submission", async () => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({
        auditId: "AUDIT-2026-TEST",
        message: "Demande enregistrée avec succès",
      }),
    });

    const user = userEvent.setup();
    render(<ConversionHub />);

    const nameInput = screen.getByLabelText(/nom complet \*/i);
    const companyInput = screen.getByLabelText(/entreprise ou projet \*/i);
    const emailInput = screen.getByLabelText(/email professionnel \*/i);

    await user.type(nameInput, "Jean-Luc Mukendi");
    await user.type(companyInput, "Katanga TransLog");
    await user.type(emailInput, "jeanluc@translog.cd");

    const form = document.querySelector("#consultation-direct-form") as HTMLFormElement;
    fireEvent.submit(form);

    await waitFor(() => {
      expect(screen.getByText(/Demande d'Audit Enregistrée/i)).toBeInTheDocument();
      expect(screen.getByText(/AUDIT-2026-TEST/i)).toBeInTheDocument();
    });
  });
});
