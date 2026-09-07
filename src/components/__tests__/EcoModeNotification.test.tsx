import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { EcoModeNotification } from "@/components/EcoModeNotification";
import * as SettingsContextModule from "@/context/SettingsContext";

describe("EcoModeNotification Component", () => {
    it("does not render when ecoMode is false or battery is normal", () => {
        const { container } = render(
            <SettingsContextModule.SettingsProvider>
                <EcoModeNotification />
            </SettingsContextModule.SettingsProvider>
        );

        expect(container.querySelector("#eco-mode-notification")).toBeNull();
    });

    it("renders and handles dismiss when low battery and ecoMode are active", () => {
        const updateSettingMock = vi.fn();
        vi.spyOn(SettingsContextModule, "useSiteSettings").mockReturnValue({
            settings: {
                ...SettingsContextModule.DEFAULT_SETTINGS,
                ecoMode: true,
            },
            batteryInfo: {
                level: 15,
                charging: false,
                isLowBattery: true,
                supported: true,
            },
            updateSetting: updateSettingMock,
            resetSettings: vi.fn(),
            drawSvgKey: 0,
            triggerDrawSvgReplay: vi.fn(),
            heroIntroKey: 0,
            triggerHeroIntroReplay: vi.fn(),
            isDrawerOpen: false,
            setIsDrawerOpen: vi.fn(),
        });

        render(<EcoModeNotification />);

        expect(screen.getByText("MODE ÉCO ACTIVÉ")).toBeInTheDocument();
        expect(screen.getByText("BATTERIE 15%")).toBeInTheDocument();

        // Click disable button
        const disableBtn = screen.getByRole("button", { name: "Désactiver le mode éco" });
        fireEvent.click(disableBtn);

        expect(updateSettingMock).toHaveBeenCalledWith("ecoMode", false);
    });
});
