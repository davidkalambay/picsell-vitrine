"use client";

import React, { createContext, useContext, useState, useEffect, useCallback, useMemo } from "react";
import { gsap } from "@/lib/gsap-config";

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

export const DEFAULT_SETTINGS: SiteSettings = {
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

interface BatteryManager extends EventTarget {
    level: number;
    charging: boolean;
    chargingTime: number;
    dischargingTime: number;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject): void;
}

interface NavigatorWithBattery extends Navigator {
    getBattery?: () => Promise<BatteryManager>;
}

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

    // FR26: Battery Status API listener with auto ecoMode activation
    useEffect(() => {
        if (typeof window === "undefined" || !("getBattery" in navigator)) return;

        let batteryObj: BatteryManager | null = null;
        let updateBatteryState: (() => void) | null = null;

        const handleBattery = (battery: BatteryManager) => {
            batteryObj = battery;
            updateBatteryState = () => {
                const level = Math.round(battery.level * 100);
                const charging = battery.charging;
                const isLow = !charging && battery.level <= 0.20;

                setBatteryInfo({
                    level,
                    charging,
                    isLowBattery: isLow,
                    supported: true,
                });

                // Auto-enable eco-mode on low battery
                if (isLow) {
                    setSettings((prev) => ({ ...prev, ecoMode: true }));
                }
            };

            updateBatteryState();
            battery.addEventListener("levelchange", updateBatteryState);
            battery.addEventListener("chargingchange", updateBatteryState);
        };

        const nav = navigator as NavigatorWithBattery;
        if (nav.getBattery) {
            nav.getBattery().then(handleBattery).catch(() => {
                setBatteryInfo((prev) => ({ ...prev, supported: false }));
            });
        }

        return () => {
            if (batteryObj && updateBatteryState) {
                batteryObj.removeEventListener("levelchange", updateBatteryState);
                batteryObj.removeEventListener("chargingchange", updateBatteryState);
            }
        };
    }, []);

    // FR27: Native prefers-reduced-motion media query auto-detection
    useEffect(() => {
        if (typeof window === "undefined") return;

        const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
        const handleReducedMotionChange = (e: MediaQueryListEvent | MediaQueryList) => {
            if (e.matches) {
                setSettings((prev) => ({ ...prev, reducedMotion: true }));
            }
        };

        handleReducedMotionChange(mediaQuery);

        try {
            mediaQuery.addEventListener("change", handleReducedMotionChange);
            return () => mediaQuery.removeEventListener("change", handleReducedMotionChange);
        } catch {
            // Fallback for older browsers
            mediaQuery.addListener(handleReducedMotionChange);
            return () => mediaQuery.removeListener(handleReducedMotionChange);
        }
    }, []);

    // Load from localStorage on mount & detect low-spec hardware
    useEffect(() => {
        try {
            const saved = localStorage.getItem(STORAGE_KEY);
            if (saved) {
                const parsed = JSON.parse(saved);
                setSettings((prev) => ({
                    ...prev,
                    ...parsed,
                }));
            } else if (typeof navigator !== "undefined") {
                // ISSUE-03: Proactive Low-Spec Hardware detection (<= 4 CPU cores or <= 4GB RAM)
                const isLowCpu = typeof navigator.hardwareConcurrency === "number" && navigator.hardwareConcurrency <= 4;
                const navMemory = (navigator as unknown as { deviceMemory?: number }).deviceMemory;
                const isLowMemory = typeof navMemory === "number" && navMemory <= 4;

                if (isLowCpu || isLowMemory) {
                    setSettings((prev) => ({
                        ...prev,
                        performanceMode: true,
                        glassmorphism: false,
                    }));
                }
            }
        } catch (e) {
            console.error("Failed to load settings from localStorage", e);
        } finally {
            setIsLoaded(true);
        }
    }, []);

    // Winston 10: Apply Eco-mode root class & throttle GSAP Ticker frame rate
    useEffect(() => {
        if (typeof document === "undefined") return;

        if (settings.ecoMode) {
            document.documentElement.classList.add("eco-mode");
            if (typeof window !== "undefined") {
                gsap.ticker.fps(30); // Throttle ticker to 30 FPS
            }
        } else {
            document.documentElement.classList.remove("eco-mode");
            if (typeof window !== "undefined") {
                gsap.ticker.fps(60); // Restore standard 60 FPS
            }
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

    const updateSetting = useCallback(<K extends keyof SiteSettings>(key: K, value: SiteSettings[K]) => {
        setSettings((prev) => ({ ...prev, [key]: value }));
    }, []);

    const resetSettings = useCallback(() => {
        setSettings(DEFAULT_SETTINGS);
    }, []);

    const triggerDrawSvgReplay = useCallback(() => {
        setDrawSvgKey((prev) => prev + 1);
    }, []);

    const triggerHeroIntroReplay = useCallback(() => {
        setHeroIntroKey((prev) => prev + 1);
    }, []);

    const contextValue = useMemo(() => ({
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
    }), [
        settings,
        updateSetting,
        resetSettings,
        drawSvgKey,
        triggerDrawSvgReplay,
        heroIntroKey,
        triggerHeroIntroReplay,
        isDrawerOpen,
        batteryInfo,
    ]);

    return (
        <SettingsContext.Provider value={contextValue}>
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
