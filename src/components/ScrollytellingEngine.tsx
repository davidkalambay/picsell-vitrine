"use client";

import React, { useRef, useState, useEffect } from "react";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap-config";
import { useSiteSettings } from "@/context/SettingsContext";

interface ScrollytellingEngineProps {
    activeSection: "marketing" | "automation" | "development" | "data" | null;
}

export const ScrollytellingEngine: React.FC<ScrollytellingEngineProps> = ({ activeSection }) => {
    const container = useRef<SVGSVGElement>(null);
    const { settings } = useSiteSettings();
    const [viewBox, setViewBox] = useState("250 150 700 600");

    useEffect(() => {
        const handleResize = () => {
            const isMobile = window.innerWidth < 768;

            if (settings.gearSize === "standard") {
                setViewBox(isMobile ? "200 100 800 700" : "180 80 840 740");
            } else if (settings.gearSize === "max") {
                setViewBox(isMobile ? "300 200 600 500" : "280 180 640 540");
            } else {
                // "large" (default 80%)
                setViewBox(isMobile ? "280 180 640 540" : "250 150 700 600");
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [settings.gearSize]);

    useGSAP(() => {
        if (!container.current) return;
        
        const sectionTrigger = document.getElementById("scrollytelling-section");
        if (!sectionTrigger) return;

        const rads = { ai: 18, marketing: 12, automation: 10, development: 14, data: 16 };
        
        // Use a timeline for the entire scroll container
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionTrigger,
                start: "top top",
                end: "bottom bottom",
                scrub: settings.scrubSpeed,
            },
        });

        const totalDegrees = 900;

        // AI Engine Rotation (Base)
        tl.to("#spin_ai", {
            rotation: totalDegrees,
            transformOrigin: "center center",
            ease: "none",
        }, 0);

        // Marketing Rotation
        tl.to("#spin_marketing", {
            rotation: -(rads.ai / rads.marketing) * totalDegrees,
            transformOrigin: "center center",
            ease: "none",
        }, 0);

        // Automation Rotation
        tl.to("#spin_automation", {
            rotation: -(rads.ai / rads.automation) * totalDegrees,
            transformOrigin: "center center",
            ease: "none",
        }, 0);

        // Data Rotation
        tl.to("#spin_data", {
            rotation: -(rads.ai / rads.data) * totalDegrees,
            transformOrigin: "center center",
            ease: "none",
        }, 0);

        // Development Rotation
        tl.to("#spin_dev", {
            rotation: -(rads.ai / rads.development) * totalDegrees,
            transformOrigin: "center center",
            ease: "none",
        }, 0);

    }, { scope: container, dependencies: [settings.scrubSpeed] });

    // Active state styles with dynamic neon glow
    const getStyle = (section: string) => {
        const isActive = activeSection === section;
        const glowColors: Record<string, string> = {
            marketing: "rgba(243, 112, 33, 0.65)",
            automation: "rgba(61, 188, 199, 0.65)",
            development: "rgba(0, 137, 208, 0.65)",
            data: "rgba(253, 185, 19, 0.65)",
        };

        return {
            opacity: isActive ? 1 : 0.25,
            filter: isActive 
                ? (settings.neonGlow ? `drop-shadow(0 0 24px ${glowColors[section] || "transparent"})` : "none")
                : "grayscale(1) brightness(0.7)",
            transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)"
        };
    };

    return (
        <div className="w-full h-full flex justify-center items-center overflow-visible relative">
            {/* Ambient Background Aura based on active section */}
            {settings.neonGlow && (
                <div 
                    className="absolute w-[350px] h-[350px] md:w-[500px] md:h-[500px] rounded-full blur-[100px] pointer-events-none transition-all duration-700 opacity-40 -z-10"
                    style={{
                        backgroundColor: 
                            activeSection === "marketing" ? "var(--pic-orange, #f37021)" :
                            activeSection === "automation" ? "var(--pic-turquoise, #3dbcc7)" :
                            activeSection === "development" ? "var(--pic-blue, #0089d0)" :
                            activeSection === "data" ? "var(--pic-gold, #fdb913)" :
                            "rgba(255, 255, 255, 0.05)"
                    }}
                />
            )}

            <svg
                ref={container}
                viewBox={viewBox}
                xmlns="http://www.w3.org/2000/svg"
                className="w-full max-w-[1000px] max-h-[80vh] overflow-visible"
            >
                <defs>
                    <path id="tooth-v23" d="M-9,-12 L9,-12 L12,0 L-12,0 Z" />
                    <filter id="ai-glow" x="-50%" y="-50%" width="200%" height="200%">
                        <feDropShadow dx="0" dy="0" stdDeviation="15" floodColor="#ffffff" floodOpacity="0.25" />
                    </filter>
                </defs>

                <g id="cluster" style={{ transformOrigin: "600px 450px" }}>
                    {/* AI ENGINE (Central Gear) */}
                    <g id="g_ai" transform="translate(600, 450)" filter="url(#ai-glow)">
                        <g id="spin_ai">
                            <circle r="120" fill="#1e212b" stroke="#333846" strokeWidth="3" />
                            {Array.from({ length: 18 }).map((_, i) => (
                                <g key={i} transform={`rotate(${i * 20}) translate(0,-120)`}>
                                    <use href="#tooth-v23" fill="#1e212b" />
                                </g>
                            ))}
                        </g>
                        <circle r="90" fill="#0d0e12" stroke="#4b5563" strokeWidth="4" />
                        <circle r="80" fill="white" />
                        <text className="font-sora font-extrabold tracking-wider" textAnchor="middle" fontSize="28" dy="10" fill="#090a0f">
                            AI
                        </text>
                        <text className="font-sora font-bold tracking-widest uppercase" textAnchor="middle" fontSize="10" dy="25" fill="#4b5563">
                            ENGINE
                        </text>
                    </g>

                    {/* DIGITAL MARKETING */}
                    <g id="g_marketing" transform="translate(438, 305)" style={getStyle('marketing')}>
                        <g id="spin_marketing">
                            <circle r="85" fill="var(--pic-orange, #f37021)" />
                            {Array.from({ length: 12 }).map((_, i) => (
                                <g key={i} transform={`rotate(${i * 30 + 15}) translate(0,-85)`}>
                                    <use href="#tooth-v23" fill="var(--pic-orange, #f37021)" />
                                </g>
                            ))}
                        </g>
                        <circle r="60" fill="#0d0e12" stroke="var(--pic-orange, #f37021)" strokeWidth="3" />
                        <text className="font-sora font-extrabold" textAnchor="middle" fontSize="12" dy="-5" fill="white">
                            DIGITAL
                        </text>
                        <text className="font-sora font-extrabold" textAnchor="middle" fontSize="13" dy="12" fill="var(--pic-orange, #f37021)">
                            MARKETING
                        </text>
                    </g>

                    {/* AUTOMATION */}
                    <g id="g_automation" transform="translate(743, 307)" style={getStyle('automation')}>
                        <g id="spin_automation">
                            <circle r="70" fill="var(--pic-turquoise, #3dbcc7)" />
                            {Array.from({ length: 10 }).map((_, i) => (
                                <g key={i} transform={`rotate(${i * 36}) translate(0,-70)`}>
                                    <use href="#tooth-v23" fill="var(--pic-turquoise, #3dbcc7)" />
                                </g>
                            ))}
                        </g>
                        <circle r="50" fill="#0d0e12" stroke="var(--pic-turquoise, #3dbcc7)" strokeWidth="3" />
                        <text className="font-sora font-extrabold tracking-wide" textAnchor="middle" fontSize="11" dy="5" fill="var(--pic-turquoise, #3dbcc7)">
                            AUTOMATION
                        </text>
                    </g>

                    {/* DEVELOPMENT */}
                    <g id="g_dev" transform="translate(428, 592)" style={getStyle('development')}>
                        <g id="spin_dev">
                            <circle r="90" fill="var(--pic-blue, #0089d0)" />
                            {Array.from({ length: 14 }).map((_, i) => (
                                <g key={i} transform={`rotate(${i * 25.7}) translate(0,-90)`}>
                                    <use href="#tooth-v23" fill="var(--pic-blue, #0089d0)" />
                                </g>
                            ))}
                        </g>
                        <circle r="65" fill="#0d0e12" stroke="var(--pic-blue, #0089d0)" strokeWidth="3" />
                        <text className="font-sora font-extrabold" textAnchor="middle" fontSize="26" dy="-8" fill="white">
                            &lt;/&gt;
                        </text>
                        <text className="font-sora font-extrabold tracking-wider" textAnchor="middle" fontSize="11" dy="14" fill="var(--pic-blue, #0089d0)">
                            DEVELOPMENT
                        </text>
                    </g>

                    {/* DATA INTELLIGENCE */}
                    <g id="g_data" transform="translate(786, 591)" style={getStyle('data')}>
                        <g id="spin_data">
                            <circle r="100" fill="var(--pic-gold, #fdb913)" />
                            {Array.from({ length: 16 }).map((_, i) => (
                                <g key={i} transform={`rotate(${i * 22.5 + 11.25}) translate(0,-100)`}>
                                    <use href="#tooth-v23" fill="var(--pic-gold, #fdb913)" />
                                </g>
                            ))}
                        </g>
                        <circle r="75" fill="#0d0e12" stroke="var(--pic-gold, #fdb913)" strokeWidth="3" />
                        <text className="font-sora font-extrabold" textAnchor="middle" fontSize="13" dy="-2" fill="white">
                            DATA
                        </text>
                        <text className="font-sora font-extrabold" textAnchor="middle" fontSize="13" dy="16" fill="var(--pic-gold, #fdb913)">
                            INTELLIGENCE
                        </text>
                    </g>
                </g>
            </svg>
        </div>
    );
};
