import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Navbar from "@/components/Navbar";
import { SettingsProvider } from "@/context/SettingsContext";

// Mock analytics
vi.mock("@/lib/analytics", () => ({
    trackEvent: vi.fn(),
}));

const renderNavbar = (isDark = false) => {
    return render(
        <SettingsProvider>
            <Navbar isDark={isDark} />
        </SettingsProvider>
    );
};

describe("Navbar Component", () => {
    it("renders the agency brand logo and link to home", () => {
        renderNavbar(false);
        const brandText = screen.getByText("Picsell Agency");
        expect(brandText).toBeInTheDocument();
        const brandLink = screen.getByLabelText("Picsell Agency — Retour à l'accueil");
        expect(brandLink).toHaveAttribute("href", "/");
    });

    it("renders desktop navigation links (Expertises, Preuves, Simulateur, Insights, À Propos)", () => {
        renderNavbar(false);
        expect(screen.getByRole("button", { name: /Expertises/i })).toBeInTheDocument();
        expect(screen.getByText("Preuves d'Exécution")).toBeInTheDocument();
        expect(screen.getByText("Simulateur ROI")).toBeInTheDocument();
        expect(screen.getByText("Insights")).toBeInTheDocument();
        expect(screen.getByText("À Propos")).toBeInTheDocument();
    });

    it("opens and closes the Expertises mega-dropdown on click", () => {
        renderNavbar(false);
        const expertisesBtn = screen.getByRole("button", { name: /Expertises/i });

        // Open dropdown
        fireEvent.click(expertisesBtn);
        expect(screen.getByRole("menu", { name: "Sous-menu des expertises" })).toBeInTheDocument();
        expect(screen.getByText("01 // ACQUÉRIR")).toBeInTheDocument();
        expect(screen.getByText("02 // ACCÉLÉRER")).toBeInTheDocument();
        expect(screen.getByText("03 // BÂTIR")).toBeInTheDocument();
        expect(screen.getByText("04 // PILOTER")).toBeInTheDocument();

        // Close dropdown
        fireEvent.click(expertisesBtn);
        expect(screen.queryByRole("menu", { name: "Sous-menu des expertises" })).toBeNull();
    });

    it("opens mobile navigation drawer when clicking burger toggle", () => {
        renderNavbar(false);
        const burgerBtn = screen.getByLabelText("Ouvrir le menu de navigation");

        fireEvent.click(burgerBtn);
        expect(screen.getByRole("dialog", { name: "Menu de navigation mobile" })).toBeInTheDocument();
        expect(screen.getByText("00. Accueil")).toBeInTheDocument();
        expect(screen.getByText("04. Insights & Blog")).toBeInTheDocument();
        expect(screen.getByText("05. À Propos de l'Agence")).toBeInTheDocument();
    });

    it("renders quick consultation CTA button in desktop navbar", () => {
        renderNavbar(true);
        const consultationBtn = screen.getByText("Cadrage Stratégique");
        expect(consultationBtn).toBeInTheDocument();
    });
});
