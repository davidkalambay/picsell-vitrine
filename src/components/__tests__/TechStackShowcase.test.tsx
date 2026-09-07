import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import TechStackShowcase from "@/components/TechStackShowcase";

describe("TechStackShowcase Component", () => {
    it("renders the main heading and quality commitments", () => {
        render(<TechStackShowcase />);

        expect(screen.getByText("Modern Tech Stack")).toBeInTheDocument();
        expect(screen.getByText("Quality Commitments")).toBeInTheDocument();
        expect(screen.getByText("60")).toBeInTheDocument();
        expect(screen.getByText("FPS Target")).toBeInTheDocument();
        expect(screen.getByText("0")).toBeInTheDocument();
        expect(screen.getByText("TypeScript Errors")).toBeInTheDocument();
    });

    it("renders core technology items like Next.js, React, GSAP, and TypeScript", () => {
        render(<TechStackShowcase />);

        expect(screen.getByText("Next.js")).toBeInTheDocument();
        expect(screen.getByText("React")).toBeInTheDocument();
        expect(screen.getByText("TypeScript")).toBeInTheDocument();
        expect(screen.getByText("GSAP")).toBeInTheDocument();
        expect(screen.getByText("Lenis")).toBeInTheDocument();
    });

    it("renders external documentation links with proper security attributes", () => {
        render(<TechStackShowcase />);

        const docLinks = screen.getAllByText("Documentation");
        expect(docLinks.length).toBeGreaterThan(0);
        
        const firstLink = docLinks[0].closest("a");
        expect(firstLink).toHaveAttribute("target", "_blank");
        expect(firstLink).toHaveAttribute("rel", "noopener noreferrer");
    });
});
