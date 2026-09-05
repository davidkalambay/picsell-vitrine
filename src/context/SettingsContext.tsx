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
    dataLiveCounter: boolean;
    magneticButtons: boolean;
    gearCursor: boolean;
    lenisSmoothScroll: boolean;
    gpuAcceleration: boolean;
    matchMediaResponsive: boolean;
    reducedMotion: boolean;
    lazyHydration: boolean;
    noiseOverlay: boolean;
    noiseIntensity: NoiseIntensity;
    blueprintGrid: boolean;
    badgeMicroInteractions: boolean;
    scrubSpeed: number; // in seconds (e.g. 0.5 to 2.5)
    performanceMode: boolean;
    ecoMode: boolean; // Winston 10: Battery & Low-Power Saver Mode
}

export interface BatteryInfo {
    level: number | null;
    charging: boolean | null;
    isLowBattery: boolean;
    supported: boolean;
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
    dataLiveCounter: true,
    magneticButtons: true,
    gearCursor: true,
    lenisSmoothScroll: true,
    gpuAcceleration: true,
    matchMediaResponsive: true,
    reducedMotion: false,
    lazyHydration: true,
    noiseOverlay: true,
    noiseIntensity: "subtle",
    blueprintGrid: true,
    badgeMicroInteractions: true,
    scrubSpeed: 1.5,
    performanceMode: false,
    ecoMode: false,
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
    batteryInfo: BatteryInfo;
}

const SettingsContext = createContext<SettingsContextType | undefined>(undefined);

export const SettingsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [settings, setSettings] = useState<SiteSettings>(DEFAULT_SETTINGS);
    const [drawSvgKey, setDrawSvgKey] = useState<number>(0);
    const [heroIntroKey, setHeroIntroKey] = useState<number>(0);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const [batteryInfo, setBatteryInfo] = useState<BatteryInfo>({
        level: null,
        charging: null,
        isLowBattery: false,
        supported: false,
    });

    // Winston 10: Battery Status API listener & Hardware detection
    useEffect(() => {
        if (typeof window === "undefined") return;

        if ("getBattery" in navigator) {
            (navigator as any).getBattery().then((battery: any) => {
                const updateBatteryState = () => {
                    const level = Math.round(battery.level * 100);
                    const charging = battery.charging;
                    const isLow = !charging && battery.level <= 0.20;

                    setBatteryInfo({
                        level,
                        charging,
                        isLowBattery: isLow,
                        supported: true,
                    });

                    // Auto-enable Eco Mode if battery is low and not charging
                    if (isLow) {
                        setSettings((prev) => ({ ...prev, ecoMode: true }));
                    }
                };

                updateBatteryState();
                battery.addEventListener("levelchange", updateBatteryState);
                battery.addEventListener("chargingchange", updateBatteryState);
            }).catch(() => {
                setBatteryInfo((prev) => ({ ...prev, supported: false }));
            });
        }
    }, []);

    // Load from localStorage on mount & detect system prefers-reduced-motion
    useEffect(() => {
        try {
            const saved = localStorage.getItem(STORAGE_KEY);
            const systemPrefersReduced = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

            if (saved) {
                const parsed = JSON.parse(saved);
                setSettings((prev) => ({
                    ...prev,
                    ...parsed,
                    reducedMotion: parsed.reducedMotion !== undefined ? parsed.reducedMotion : systemPrefersReduced,
                }));
            } else if (systemPrefersReduced) {
                setSettings((prev) => ({ ...prev, reducedMotion: true }));
            }
        } catch (e) {
            console.error("Failed to load settings from localStorage", e);
        } finally {
            setIsLoaded(true);
        }

        // Listen for live system accessibility changes
        if (typeof window !== "undefined") {
            const motionMedia = window.matchMedia("(prefers-reduced-motion: reduce)");
            const handleMotionChange = (e: MediaQueryListEvent) => {
                setSettings((prev) => ({ ...prev, reducedMotion: e.matches }));
            };
            motionMedia.addEventListener("change", handleMotionChange);
            return () => motionMedia.removeEventListener("change", handleMotionChange);
        }
    }, []);

    // Winston 10: Apply Eco-mode root class & throttle GSAP Ticker frame rate
    useEffect(() => {
        if (typeof document === "undefined") return;

        if (settings.ecoMode) {
            document.documentElement.classList.add("eco-mode");
            import("@/lib/gsap-config").then(({ gsap }) => {
                gsap.ticker.fps(30); // Throttle ticker to 30 FPS to save power & battery
            });
        } else {
            document.documentElement.classList.remove("eco-mode");
            import("@/lib/gsap-config").then(({ gsap }) => {
                gsap.ticker.fps(60); // Restore full 60 FPS
            });
        }
    }, [settings.ecoMode]);

    // Apply reduced-motion root class to body
    useEffect(() => {
        if (typeof document !== "undefined") {
            if (settings.reducedMotion) {
                document.documentElement.classList.add("reduce-motion");
            } else {
                document.documentElement.classList.remove("reduce-motion");
            }
        }
    }, [settings.reducedMotion]);

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
                batteryInfo,
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
