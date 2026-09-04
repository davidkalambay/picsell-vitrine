"use client";

import React from "react";
import { useSiteSettings } from "@/context/SettingsContext";

type SectionType = "marketing" | "automation" | "development" | "data" | null;

interface CircularProgressRingProps {
    activeSection: SectionType;
}

export const CircularProgressRing: React.FC<CircularProgressRingProps> = ({ activeSection }) => {
    const { settings } = useSiteSettings();

    if (!settings.progressRing) {
        // Fallback to simple textual pill if progress ring setting is disabled
        return (
            <div className="mt-6 inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-white/[0.04] backdrop-blur-xl border border-white/10 shadow-[0_8px_24px_rgba(0,0,0,0.4)]">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span className="text-xs font-bold tracking-[0.18em] uppercase text-slate-300 font-sora">
                    {activeSection ? `${['marketing', 'automation', 'development', 'data'].indexOf(activeSection) + 1}/4 modules engagés` : "0/4 modules engagés"}
                </span>
            </div>
        );
    }

    // Progression values
    const progressMap: Record<string, { percent: number; label: string; color: string; step: string }> = {
        marketing: { percent: 25, label: "25% engagé", color: "#f37021", step: "01/04" },
        automation: { percent: 50, label: "50% engagé", color: "#3dbcc7", step: "02/04" },
        development: { percent: 75, label: "75% engagé", color: "#0089d0", step: "03/04" },
        data: { percent: 100, label: "100% synchronisé", color: "#fdb913", step: "04/04" },
    };

    const current = activeSection && progressMap[activeSection]
        ? progressMap[activeSection]
        : { percent: 0, label: "En attente de défilement", color: "#64748b", step: "00/04" };

    const radius = 28;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (current.percent / 100) * circumference;

    return (
        <div className="mt-6 flex items-center gap-4 px-6 py-3 rounded-full bg-black/40 backdrop-blur-2xl border border-white/10 shadow-[0_12px_36px_rgba(0,0,0,0.5)] transition-all duration-500 hover:border-white/20">
            {/* Circular Progress Gauge */}
            <div className="relative w-12 h-12 flex items-center justify-center shrink-0">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 64 64">
                    {/* Background Ring */}
                    <circle
                        cx="32"
                        cy="32"
                        r={radius}
                        fill="none"
                        stroke="rgba(255, 255, 255, 0.08)"
                        strokeWidth="3.5"
                    />
                    {/* Quarter Tick Marks */}
                    <circle
                        cx="32"
                        cy="32"
                        r={radius}
                        fill="none"
                        stroke="rgba(255, 255, 255, 0.25)"
                        strokeWidth="4"
                        strokeDasharray="1.5 42.4"
                    />
                    {/* Active Animated Progress Arc */}
                    <circle
                        cx="32"
                        cy="32"
                        r={radius}
                        fill="none"
                        stroke={current.color}
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeDasharray={circumference}
                        strokeDashoffset={strokeDashoffset}
                        className="transition-all duration-700 ease-out"
                        style={{
                            filter: current.percent > 0 ? `drop-shadow(0 0 8px ${current.color})` : "none",
                        }}
                    />
                </svg>

                {/* Center Percentage Display */}
                <span className="absolute text-[10px] font-mono font-black text-white select-none">
                    {current.percent}%
                </span>
            </div>

            {/* Readout Status Label */}
            <div className="flex flex-col">
                <div className="flex items-center gap-2">
                    <span
                        className="w-2 h-2 rounded-full animate-pulse"
                        style={{ backgroundColor: current.color }}
                    />
                    <span className="text-xs font-bold tracking-[0.14em] uppercase text-white font-sora">
                        {current.step} — {current.label}
                    </span>
                </div>
                <div className="flex items-center gap-1.5 mt-0.5">
                    {["marketing", "automation", "development", "data"].map((secKey, idx) => {
                        const isReached =
                            activeSection &&
                            ['marketing', 'automation', 'development', 'data'].indexOf(activeSection) >= idx;
                        return (
                            <span
                                key={secKey}
                                className={`h-1 rounded-full transition-all duration-500 ${
                                    isReached
                                        ? "w-4"
                                        : "w-1.5 bg-white/10"
                                }`}
                                style={{
                                    backgroundColor: isReached ? current.color : undefined,
                                }}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
};
