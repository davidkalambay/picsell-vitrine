import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MagneticButton } from "../MagneticButton";

// Mock SettingsContext
vi.mock("@/context/SettingsContext", () => ({
  useSiteSettings: () => ({
    settings: {
      magneticButtons: true,
      reducedMotion: false,
    },
  }),
}));

describe("MagneticButton Component", () => {
  it("renders as button by default with children content", () => {
    render(<MagneticButton>Click me</MagneticButton>);
    const btn = screen.getByRole("button", { name: /click me/i });
    expect(btn).toBeInTheDocument();
  });

  it("renders as anchor tag when href is provided", () => {
    render(<MagneticButton href="#contact">Contact Us</MagneticButton>);
    const link = screen.getByRole("link", { name: /contact us/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "#contact");
  });

  it("handles user click events correctly", async () => {
    const handleClick = vi.fn();
    const user = userEvent.setup();
    render(<MagneticButton onClick={handleClick}>Submit Action</MagneticButton>);
    const btn = screen.getByRole("button", { name: /submit action/i });
    await user.click(btn);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
