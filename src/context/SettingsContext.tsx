"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type ThemeMode = "scroll-dynamic" | "force-dark" | "force-light";
export type GearSize = "standard" | "large" | "max";
export type NoiseIntensity = "subtle" | "medium" | "cinema";

export interface SiteSettings {
    themeMode: ThemeMode;
    glassmorphism: boolean;
    gearSize: GearSize;
    neonGlow: boolean;
    reactiveOutline: boolean;
    clippingMaskNumbers: boolean;
    codeTerminals: boolean;
    progressRing: boolean;
    extremeTypography: boolean;
    floatingCta: boolean;
    scrollSnap: boolean;
    splitTextReveal: boolean;
    drawSvgIntro: boolean;
    parallaxBadges: boolean;
    heroMechanicalIntro: boolean;
    noiseOverlay: boolean;
    noiseIntensity: NoiseIntensity;
    blueprintGrid: boolean;
    badgeMicroInteractions: boolean;
    scrubSpeed: number; // in seconds (e.g. 0.5 to 2.5)
    performanceMode: boolean;
}

const DEFAULT_SETTINGS: SiteSettings = {
    themeMode: "scroll-dynamic",
    glassmorphism: true,
    gearSize: "large",
    neonGlow: true,
    reactiveOutline: true,
    clippingMaskNumbers: true,
    codeTerminals: true,
    progressRing: true,
    extremeTypography: true,
    floatingCta: true,
    scrollSnap: true,
    splitTextReveal: true,
    drawSvgIntro: true,
    parallaxBadges: true,
    heroMechanicalIntro: true,
    noiseOverlay: true,
    noiseIntensity: "subtle",
    blueprintGrid: true,
    badgeMicroInteractions: true,
    scrubSpeed: 1.5,
    performanceMode: false,
};

const STORAGE_KEY = "picsell_site_settings_v1";

interface SettingsContextType {
    settings: SiteSettings;
    updateSetting: <K extends keyof SiteSettings>(key: K, value: SiteSettings[K]) => void;
    resetSettings: () => void;
    drawSvgKey: number;
    triggerDrawSvgReplay: () => void;
    heroIntroKey: number;
    triggerHeroIntroReplay: () => void;
    isDrawerOpen: boolean;
    setIsDrawerOpen: (open: boolean) => void;
}

const SettingsContext = createContext<SettingsContextType | undefined>(undefined);

export const SettingsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [settings, setSettings] = useState<SiteSettings>(DEFAULT_SETTINGS);
    const [drawSvgKey, setDrawSvgKey] = useState<number>(0);
    const [heroIntroKey, setHeroIntroKey] = useState<number>(0);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);

    // Load from localStorage on mount
    useEffect(() => {
        try {
            const saved = localStorage.getItem(STORAGE_KEY);
            if (saved) {
                const parsed = JSON.parse(saved);
                setSettings((prev) => ({ ...prev, ...parsed }));
            }
        } catch (e) {
            console.error("Failed to load settings from localStorage", e);
        } finally {
            setIsLoaded(true);
        }
    }, []);

    // Save to localStorage when settings change
    useEffect(() => {
        if (!isLoaded) return;
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
        } catch (e) {
            console.error("Failed to save settings to localStorage", e);
        }
    }, [settings, isLoaded]);

    const updateSetting = <K extends keyof SiteSettings>(key: K, value: SiteSettings[K]) => {
        setSettings((prev) => ({ ...prev, [key]: value }));
    };

    const resetSettings = () => {
        setSettings(DEFAULT_SETTINGS);
    };

    const triggerDrawSvgReplay = () => {
        setDrawSvgKey((prev) => prev + 1);
    };

    const triggerHeroIntroReplay = () => {
        setHeroIntroKey((prev) => prev + 1);
    };

    return (
        <SettingsContext.Provider
            value={{
                settings,
                updateSetting,
                resetSettings,
                drawSvgKey,
                triggerDrawSvgReplay,
                heroIntroKey,
                triggerHeroIntroReplay,
                isDrawerOpen,
                setIsDrawerOpen,
            }}
        >
            {children}
        </SettingsContext.Provider>
    );
};

export const useSiteSettings = () => {
    const context = useContext(SettingsContext);
    if (!context) {
        throw new Error("useSiteSettings must be used within a SettingsProvider");
    }
    return context;
};
