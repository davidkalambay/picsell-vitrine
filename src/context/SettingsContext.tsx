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
    noiseOverlay: boolean;
    noiseIntensity: NoiseIntensity;
    scrubSpeed: number; // in seconds (e.g. 0.5 to 2.5)
    performanceMode: boolean;
}

const DEFAULT_SETTINGS: SiteSettings = {
    themeMode: "scroll-dynamic",
    glassmorphism: true,
    gearSize: "large",
    neonGlow: true,
    reactiveOutline: true,
    noiseOverlay: true,
    noiseIntensity: "subtle",
    scrubSpeed: 1.5,
    performanceMode: false,
};

const STORAGE_KEY = "picsell_site_settings_v1";

interface SettingsContextType {
    settings: SiteSettings;
    updateSetting: <K extends keyof SiteSettings>(key: K, value: SiteSettings[K]) => void;
    resetSettings: () => void;
    isDrawerOpen: boolean;
    setIsDrawerOpen: (open: boolean) => void;
}

const SettingsContext = createContext<SettingsContextType | undefined>(undefined);

export const SettingsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [settings, setSettings] = useState<SiteSettings>(DEFAULT_SETTINGS);
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

    return (
        <SettingsContext.Provider
            value={{
                settings,
                updateSetting,
                resetSettings,
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
