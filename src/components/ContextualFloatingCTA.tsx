"use client";

import React, { useEffect, useState } from "react";
import { useSiteSettings } from "@/context/SettingsContext";

interface SectionCTAInfo {
    title: string;
    sublabel: string;
    color: string;
    badge: string;
}

export const ContextualFloatingCTA: React.FC = () => {
    const { settings } = useSiteSettings();
    const [currentCta, setCurrentCta] = useState<SectionCTAInfo>({
        title: "Démarrer un projet",
        sublabel: "Kinshasa & Diaspora",
        color: "#0089d0",
        badge: "CONSEIL",
    });
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            // Only show after scrolling down 200px
            setIsVisible(scrollY > 200);

            const marketingEl = document.getElementById("story-marketing");
            const automationEl = document.getElementById("story-automation");
            const developmentEl = document.getElementById("story-development");
            const dataEl = document.getElementById("story-data");
            const footerEl = document.getElementById("footer-contact");

            const vhCenter = window.innerHeight / 2;

            if (footerEl && footerEl.getBoundingClientRect().top <= vhCenter) {
                setCurrentCta({
                    title: "Nous contacter",
                    sublabel: "contact@picsell.agency",
                    color: "#fdb913",
                    badge: "CONTACT",
                });
            } else if (dataEl && dataEl.getBoundingClientRect().top <= vhCenter && dataEl.getBoundingClientRect().bottom >= vhCenter) {
                setCurrentCta({
                    title: "Piloter par la Data",
                    sublabel: "ML & Reporting IA // 04",
                    color: "#fdb913",
                    badge: "DATA",
                });
            } else if (developmentEl && developmentEl.getBoundingClientRect().top <= vhCenter && developmentEl.getBoundingClientRect().bottom >= vhCenter) {
                setCurrentCta({
                    title: "Bâtir mon application",
                    sublabel: "Next.js & Cloud // 03",
                    color: "#0089d0",
                    badge: "DEV",
                });
            } else if (automationEl && automationEl.getBoundingClientRect().top <= vhCenter && automationEl.getBoundingClientRect().bottom >= vhCenter) {
                setCurrentCta({
                    title: "Automatiser mes process",
                    sublabel: "Workflows & CRM // 02",
                    color: "#3dbcc7",
                    badge: "AUTO",
                });
            } else if (marketingEl && marketingEl.getBoundingClientRect().top <= vhCenter && marketingEl.getBoundingClientRect().bottom >= vhCenter) {
                setCurrentCta({
                    title: "Booster mon acquisition",
                    sublabel: "Marketing de Précision // 01",
                    color: "#f37021",
                    badge: "MKT",
                });
            } else {
                setCurrentCta({
                    title: "Démarrer un projet",
                    sublabel: "Précision & Croissance",
                    color: "#0089d0",
                    badge: "BRIEF",
                });
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    if (!settings.floatingCta || !isVisible) return null;

    return (
        <aside aria-label="Action contextuelle" className="fixed bottom-6 left-6 z-40 animate-fade-in pointer-events-auto">
            <a
                href="#footer-contact"
                className="group flex items-center gap-3 px-4 py-2.5 sm:px-5 sm:py-3 rounded-full bg-slate-950/85 hover:bg-slate-900/95 text-white backdrop-blur-2xl border border-white/15 shadow-[0_12px_36px_rgba(0,0,0,0.5)] transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 active:scale-95"
                style={{
                    boxShadow: `0 10px 30px -5px ${currentCta.color}33`,
                    borderColor: `${currentCta.color}55`,
                }}
            >
                {/* Status Dot with Glow */}
                <span className="relative flex h-3 w-3 shrink-0">
                    <span
                        className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                        style={{ backgroundColor: currentCta.color }}
                    />
                    <span
                        className="relative inline-flex rounded-full h-3 w-3"
                        style={{ backgroundColor: currentCta.color }}
                    />
                </span>

                {/* Text Block */}
                <div className="flex flex-col text-left">
                    <div className="flex items-center gap-2">
                        <span
                            className="text-[9px] font-mono font-bold tracking-widest uppercase px-1.5 py-0.2 rounded"
                            style={{
                                backgroundColor: `${currentCta.color}25`,
                                color: currentCta.color,
                            }}
                        >
                            {currentCta.badge}
                        </span>
                        <span className="text-xs sm:text-sm font-extrabold font-sora tracking-tight text-white group-hover:text-white transition-colors">
                            {currentCta.title}
                        </span>
                    </div>
                    <span className="text-[10px] text-slate-400 font-mono tracking-wider hidden sm:inline-block">
                        {currentCta.sublabel}
                    </span>
                </div>

                {/* Arrow Icon */}
                <div
                    className="w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 group-hover:translate-x-1 group-hover:scale-110"
                    style={{
                        backgroundColor: `${currentCta.color}25`,
                        color: currentCta.color,
                    }}
                >
                    <svg
                        className="w-3.5 h-3.5"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                    </svg>
                </div>
            </a>
        </aside>
    );
};
