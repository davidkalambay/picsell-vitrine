"use client";

import React from "react";
import { useSiteSettings } from "@/context/SettingsContext";

const BlueprintGridComponent: React.FC = () => {
    const { settings } = useSiteSettings();

    if (!settings.blueprintGrid) return null;

    return (
        <div
            className="fixed inset-0 pointer-events-none z-10 select-none overflow-hidden transition-opacity duration-700"
            aria-hidden="true"
        >
            {/* SVG Precision Blueprint Grid Pattern */}
            <svg
                className="w-full h-full opacity-40 dark:opacity-60"
                xmlns="http://www.w3.org/2000/svg"
                style={{
                    maskImage: "radial-gradient(ellipse at 50% 50%, black 40%, rgba(0,0,0,0.2) 75%, transparent 100%)",
                    WebkitMaskImage: "radial-gradient(ellipse at 50% 50%, black 40%, rgba(0,0,0,0.2) 75%, transparent 100%)",
                }}
            >
                <defs>
                    {/* Small grid unit (16px) */}
                    <pattern id="smallGrid" width="16" height="16" patternUnits="userSpaceOnUse">
                        <path
                            d="M 16 0 L 0 0 0 16"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="0.5"
                            className="text-slate-400/10 dark:text-cyan-400/[0.04]"
                        />
                    </pattern>

                    {/* Main Blueprint grid unit (80px) with crosshairs */}
                    <pattern id="mainBlueprintGrid" width="80" height="80" patternUnits="userSpaceOnUse">
                        <rect width="80" height="80" fill="url(#smallGrid)" />
                        <path
                            d="M 80 0 L 0 0 0 80"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1"
                            className="text-slate-500/15 dark:text-[var(--pic-turquoise,#3dbcc7)]/[0.08]"
                        />
                        {/* Intersection Crosshair */}
                        <path
                            d="M -4 0 L 4 0 M 0 -4 L 0 4"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1"
                            className="text-slate-700/25 dark:text-[var(--pic-gold,#fdb913)]/[0.25]"
                        />
                    </pattern>
                </defs>

                <rect width="100%" height="100%" fill="url(#mainBlueprintGrid)" />
            </svg>

            {/* Architectural Lignes de Force (Vertical & Horizontal Guide Reticles) */}
            <div className="absolute inset-0 flex justify-between px-6 sm:px-16 md:px-24">
                {/* Left Guide Line */}
                <div className="w-px h-full bg-gradient-to-b from-transparent via-cyan-500/10 dark:via-cyan-400/[0.08] to-transparent relative">
                    <div className="absolute top-1/4 -left-1 font-mono text-[9px] tracking-widest text-cyan-500/30 dark:text-cyan-400/40 uppercase rotate-90 origin-left">
                        AXIS_L // 01
                    </div>
                </div>

                {/* Right Guide Line */}
                <div className="w-px h-full bg-gradient-to-b from-transparent via-cyan-500/10 dark:via-cyan-400/[0.08] to-transparent relative">
                    <div className="absolute top-3/4 -right-1 font-mono text-[9px] tracking-widest text-cyan-500/30 dark:text-cyan-400/40 uppercase -rotate-90 origin-right">
                        SYS_ALIGN // 80%
                    </div>
                </div>
            </div>

            {/* Subtle Horizon Line */}
            <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-400/10 dark:via-[var(--pic-blue,#0089d0)]/[0.08] to-transparent" />

            {/* Blueprint Corner Brackets */}
            <div className="absolute top-8 left-8 w-4 h-4 border-t border-l border-slate-400/20 dark:border-cyan-400/25" />
            <div className="absolute top-8 right-8 w-4 h-4 border-t border-r border-slate-400/20 dark:border-cyan-400/25" />
            <div className="absolute bottom-8 left-8 w-4 h-4 border-b border-l border-slate-400/20 dark:border-cyan-400/25" />
            <div className="absolute bottom-8 right-8 w-4 h-4 border-b border-r border-slate-400/20 dark:border-cyan-400/25" />
        </div>
    );
};

export const BlueprintGrid = React.memo(BlueprintGridComponent);

