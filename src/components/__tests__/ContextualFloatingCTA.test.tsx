import React from "react";
import { render, screen, fireEvent, act } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { SettingsProvider } from "@/context/SettingsContext";
import { ContextualFloatingCTA } from "@/components/ContextualFloatingCTA";

describe("ContextualFloatingCTA Component", () => {
    it("is hidden initially when scroll position is at the top", () => {
        const { container } = render(
            <SettingsProvider>
                <ContextualFloatingCTA />
            </SettingsProvider>
        );

        const ctaElement = container.querySelector("aside");
        expect(ctaElement).toBeNull();
    });

    it("becomes visible on scroll down past threshold", () => {
        const { container } = render(
            <SettingsProvider>
                <ContextualFloatingCTA />
            </SettingsProvider>
        );

        Object.defineProperty(window, "scrollY", { value: 300, writable: true, configurable: true });
        act(() => {
            fireEvent.scroll(window);
        });

        const ctaElement = container.querySelector("aside");
        expect(ctaElement).toBeInTheDocument();
        expect(ctaElement).toHaveAttribute("aria-label", "Action contextuelle");
    });

    it("updates context label when scrolling over marketing section", () => {
        // Create mock DOM section for story-marketing
        const section = document.createElement("div");
        section.id = "story-marketing";
        section.getBoundingClientRect = vi.fn().mockReturnValue({
            top: 100,
            bottom: 600,
            height: 500,
        });
        document.body.appendChild(section);

        render(
            <SettingsProvider>
                <ContextualFloatingCTA />
            </SettingsProvider>
        );

        Object.defineProperty(window, "scrollY", { value: 400, writable: true, configurable: true });
        act(() => {
            fireEvent.scroll(window);
        });

        expect(screen.getByText("Booster mon acquisition")).toBeInTheDocument();
        expect(screen.getByText("MKT")).toBeInTheDocument();

        document.body.removeChild(section);
    });
});
