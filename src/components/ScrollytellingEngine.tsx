"use client";

import React, { useRef, useState, useEffect } from "react";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap-config";

interface ScrollytellingEngineProps {
    activeSection: "marketing" | "automation" | "development" | "data" | null;
}

export const ScrollytellingEngine: React.FC<ScrollytellingEngineProps> = ({ activeSection }) => {
    const container = useRef<SVGSVGElement>(null);
    const [viewBox, setViewBox] = useState("0 0 1200 900");

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                // Mobile: Tight zoom on the gears
                setViewBox("350 150 500 500");
            } else {
                // Desktop: Full view
                setViewBox("0 0 1200 900");
            }
        };

        handleResize(); // Initial check
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useGSAP(() => {
        if (!container.current) return;
        
        const sectionTrigger = document.getElementById("scrollytelling-section");
        if (!sectionTrigger) return;

        const rads = { ai: 18, marketing: 12, automation: 10, development: 14, data: 16 };
        
        // Use a timeline for the entire scroll container
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionTrigger,
                start: "top top", // When top of the scrollytelling section hits top of viewport
                end: "bottom bottom", // When bottom of the section hits bottom of viewport
                scrub: 1.5, // Smooth lag
            },
        });

        const totalDegrees = 900; // Total rotation over the section

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

    }, { scope: container });

    // Active state styles
    const getStyle = (section: string) => {
        const isActive = activeSection === section;
        // The HTML prototype sets inactive opacity to 0.34 and adds a grayscale/brightness filter
        return {
            opacity: isActive ? 1 : 0.34,
            filter: isActive ? "none" : "grayscale(1) brightness(1.2)",
            transition: "opacity 0.6s ease, filter 0.5s ease"
        };
    };

    return (
        <div className="w-full h-full flex justify-center items-center overflow-visible">
            <svg
                ref={container}
                viewBox={viewBox}
                xmlns="http://www.w3.org/2000/svg"
                className="w-full max-w-[1000px] max-h-[80vh] overflow-visible drop-shadow-2xl"
            >
                <defs>
                    <path id="tooth-v23" d="M-9,-12 L9,-12 L12,0 L-12,0 Z" />
                </defs>

                <g id="cluster" style={{ transformOrigin: "600px 450px" }}>
                    {/* AI ENGINE */}
                    <g id="g_ai" transform="translate(600, 450)">
                        <g id="spin_ai">
                            <circle r="120" fill="var(--pic-charcoal, #1a1a1a)" />
                            {Array.from({ length: 18 }).map((_, i) => (
                                <g key={i} transform={`rotate(${i * 20}) translate(0,-120)`}>
                                    <use href="#tooth-v23" fill="var(--pic-charcoal, #1a1a1a)" />
                                </g>
                            ))}
                        </g>
                        <circle r="90" fill="white" stroke="var(--pic-charcoal, #1a1a1a)" strokeWidth="4" />
                        <text className="font-sora font-extrabold" textAnchor="middle" fontSize="28" dy="10" fill="var(--pic-charcoal, #1a1a1a)">
                            AI
                        </text>
                        <text className="font-sora font-extrabold" textAnchor="middle" fontSize="10" dy="25" fill="var(--pic-charcoal, #1a1a1a)">
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
                        <circle r="60" fill="white" stroke="var(--pic-orange, #f37021)" strokeWidth="4" />
                        <text className="font-sora font-extrabold" textAnchor="middle" fontSize="12" dy="-5" fill="var(--pic-orange, #f37021)">
                            DIGITAL
                        </text>
                        <text className="font-sora font-extrabold" textAnchor="middle" fontSize="14" dy="12" fill="var(--pic-orange, #f37021)">
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
                        <circle r="50" fill="white" stroke="var(--pic-turquoise, #3dbcc7)" strokeWidth="4" />
                        <text className="font-sora font-extrabold" textAnchor="middle" fontSize="11" dy="5" fill="var(--pic-turquoise, #3dbcc7)">
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
                        <circle r="65" fill="white" stroke="var(--pic-blue, #0089d0)" strokeWidth="4" />
                        <text className="font-sora font-extrabold" textAnchor="middle" fontSize="28" dy="-10" fill="var(--pic-blue, #0089d0)">
                            &lt;/&gt;
                        </text>
                        <text className="font-sora font-extrabold" textAnchor="middle" fontSize="11" dy="15" fill="var(--pic-blue, #0089d0)">
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
                        <circle r="75" fill="white" stroke="var(--pic-gold, #fdb913)" strokeWidth="4" />
                        <text className="font-sora font-extrabold" textAnchor="middle" fontSize="13" dy="-2" fill="var(--pic-gold, #fdb913)">
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
