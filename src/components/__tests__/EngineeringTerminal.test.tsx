import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import EngineeringTerminal from "../EngineeringTerminal";

describe("EngineeringTerminal Component", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it("renders preset mode with title and preset tab buttons", () => {
    render(<EngineeringTerminal />);
    expect(screen.getByText("Engineering Terminal")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /schema\.ts/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /workflow\.json/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /pipeline\.yml/i })).toBeInTheDocument();
  });

  it("switches code snippet when clicking tab buttons", async () => {
    const user = userEvent.setup();
    render(<EngineeringTerminal />);

    const workflowTab = screen.getByRole("button", { name: /workflow\.json/i });
    await user.click(workflowTab);

    expect(screen.getByText(/picsell-vitrine-deployment/i)).toBeInTheDocument();
  });

  it("copies code to clipboard when clicking copy button", async () => {
    const user = userEvent.setup();
    const writeTextMock = vi.fn().mockResolvedValue(undefined);
    Object.defineProperty(navigator, "clipboard", {
      value: {
        writeText: writeTextMock,
      },
      writable: true,
      configurable: true,
    });

    render(<EngineeringTerminal />);

    const copyBtn = screen.getByRole("button", { name: /copy/i });
    await user.click(copyBtn);

    expect(writeTextMock).toHaveBeenCalled();
    expect(await screen.findByText(/copied!/i)).toBeInTheDocument();
  });

  it("renders custom embedded format when filename and custom lines are supplied", () => {
    render(
      <EngineeringTerminal
        filename="custom_pipeline.ts"
        tagLabel="TS // CUSTOM"
        accentColor="#3dbcc7"
        lines={[
          { text: "// Custom testing pipeline" },
          { text: "export const isReady = true;" },
        ]}
      />
    );

    expect(screen.getByText("TS // CUSTOM")).toBeInTheDocument();
    expect(screen.getByText("isReady")).toBeInTheDocument();
    expect(screen.getByText("pipeline")).toBeInTheDocument();
  });
});
