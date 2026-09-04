"use client";

import React from "react";
import { useSiteSettings } from "@/context/SettingsContext";

export const NoiseOverlay: React.FC = () => {
    const { settings } = useSiteSettings();

    if (!settings.noiseOverlay) return null;

    // Mapping opacity by intensity mode
    const opacityClass =
        settings.noiseIntensity === "cinema"
            ? "opacity-[0.08]"
            : settings.noiseIntensity === "medium"
            ? "opacity-[0.05]"
            : "opacity-[0.028]";

    return (
        <div
            className={`fixed inset-0 pointer-events-none z-30 ${opacityClass} mix-blend-overlay contrast-125 select-none overflow-hidden transition-opacity duration-500`}
            aria-hidden="true"
        >
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <filter id="picsell-film-noise">
                    <feTurbulence
                        type="fractalNoise"
                        baseFrequency="0.8"
                        numOctaves="4"
                        stitchTiles="stitch"
                    />
                    <feColorMatrix type="saturate" values="0" />
                </filter>
                <rect width="100%" height="100%" filter="url(#picsell-film-noise)" />
            </svg>
        </div>
    );
};
