import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { SettingsProvider } from "@/context/SettingsContext";
import { DataLiveCounter } from "@/components/DataLiveCounter";

describe("DataLiveCounter Component", () => {
    it("renders telemetry labels and live feed indicator", () => {
        render(
            <SettingsProvider>
                <DataLiveCounter isActive={true} />
            </SettingsProvider>
        );

        expect(screen.getByText("DATA_TELEMETRY // LIVE_FEED")).toBeInTheDocument();
        expect(screen.getByText("Précision ML")).toBeInTheDocument();
        expect(screen.getByText("Flux Événements")).toBeInTheDocument();
        expect(screen.getByText("Surplus ROAS")).toBeInTheDocument();
        expect(screen.getByText("Latence Inférence")).toBeInTheDocument();
    });

    it("displays initial metric values", () => {
        render(
            <SettingsProvider>
                <DataLiveCounter isActive={false} />
            </SettingsProvider>
        );

        expect(screen.getByText("STREAMING...")).toBeInTheDocument();
        expect(screen.getByText("00.0")).toBeInTheDocument();
        expect(screen.getByText("+0")).toBeInTheDocument();
        expect(screen.getByText("450")).toBeInTheDocument();
    });
});
