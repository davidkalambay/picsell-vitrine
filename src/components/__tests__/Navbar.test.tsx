import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Navbar from "@/components/Navbar";

describe("Navbar Component", () => {
    it("renders the agency brand name and link", () => {
        render(<Navbar isDark={false} />);
        const brandText = screen.getByText("Picsell Agency");
        expect(brandText).toBeInTheDocument();
        const brandLink = screen.getByRole("link");
        expect(brandLink).toHaveAttribute("href", "#");
    });

    it("applies light theme styles by default", () => {
        const { container } = render(<Navbar isDark={false} />);
        const nav = container.querySelector("nav");
        expect(nav?.className).toContain("bg-white/85");
        expect(nav?.className).toContain("text-slate-900");
    });

    it("applies dark theme styles when isDark is true", () => {
        const { container } = render(<Navbar isDark={true} />);
        const nav = container.querySelector("nav");
        expect(nav?.className).toContain("bg-[#090a0f]/80");
        expect(nav?.className).toContain("text-white");
    });
});
