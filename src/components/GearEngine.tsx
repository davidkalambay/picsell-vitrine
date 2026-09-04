"use client";

import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const GearEngine = () => {
    const container = useRef<SVGSVGElement>(null);
    const [viewBox, setViewBox] = useState("0 0 1200 900");

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                // Mobile: Tight zoom on the gears (Center 600,450. Box approx 700x700)
                setViewBox("250 100 700 700");
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

        const rads = { ai: 18, marketing: 12, automation: 10, development: 14, data: 16 };
        const duration = 20; // Seconds for one full AI rotation

        // AI Engine Rotation (Base)
        gsap.to("#spin_ai", {
            rotation: 360,
            transformOrigin: "center center",
            ease: "none",
            repeat: -1,
            duration: duration,
        });

        // Marketing Rotation
        gsap.to("#spin_marketing", {
            rotation: -(rads.ai / rads.marketing) * 360,
            transformOrigin: "center center",
            ease: "none",
            repeat: -1,
            duration: duration,
        });

        // Automation Rotation
        gsap.to("#spin_automation", {
            rotation: -(rads.ai / rads.automation) * 360,
            transformOrigin: "center center",
            ease: "none",
            repeat: -1,
            duration: duration,
        });

        // Data Rotation
        gsap.to("#spin_data", {
            rotation: -(rads.ai / rads.data) * 360,
            transformOrigin: "center center",
            ease: "none",
            repeat: -1,
            duration: duration,
        });

        // Development Rotation
        gsap.to("#spin_dev", {
            rotation: -(rads.ai / rads.development) * 360,
            transformOrigin: "center center",
            ease: "none",
            repeat: -1,
            duration: duration,
        });
    }, { scope: container });

    return (
        <div className="w-screen h-screen flex justify-center items-center z-1">
            <svg
                ref={container}
                viewBox={viewBox}
                xmlns="http://www.w3.org/2000/svg"
                className="w-[90%] md:w-[80%] h-[90%] max-w-[1000px] overflow-visible"
            >
                <defs>
                    <path id="tooth-v23" d="M-9,-12 L9,-12 L12,0 L-12,0 Z" />
                </defs>

                <g id="cluster" style={{ transformOrigin: "600px 450px" }}>
                    {/* AI ENGINE */}
                    <g id="g_ai" transform="translate(600, 450)">
                        <g id="spin_ai">
                            <circle r="120" fill="var(--black)" />
                            {Array.from({ length: 18 }).map((_, i) => (
                                <g key={i} transform={`rotate(${i * 20}) translate(0,-120)`}>
                                    <use href="#tooth-v23" fill="var(--black)" />
                                </g>
                            ))}
                        </g>
                        <circle r="90" fill="white" stroke="var(--black)" strokeWidth="4" />
                        <text className="gear-text font-sora font-extrabold" textAnchor="middle" fontSize="28" dy="10" fill="var(--black)">
                            AI
                        </text>
                        <text className="gear-text font-sora font-extrabold" textAnchor="middle" fontSize="10" dy="25" fill="var(--black)">
                            ENGINE
                        </text>
                    </g>

                    {/* DIGITAL MARKETING */}
                    <g id="g_marketing" transform="translate(438, 305)">
                        <g id="spin_marketing">
                            <circle r="85" fill="var(--orange)" />
                            {Array.from({ length: 12 }).map((_, i) => (
                                <g key={i} transform={`rotate(${i * 30 + 15}) translate(0,-85)`}>
                                    <use href="#tooth-v23" fill="var(--orange)" />
                                </g>
                            ))}
                        </g>
                        <circle r="60" fill="white" stroke="var(--orange)" strokeWidth="4" />
                        <text className="gear-text font-sora font-extrabold" textAnchor="middle" fontSize="12" dy="-5" fill="var(--orange)">
                            DIGITAL
                        </text>
                        <text className="gear-text font-sora font-extrabold" textAnchor="middle" fontSize="14" dy="12" fill="var(--orange)">
                            MARKETING
                        </text>
                    </g>

                    {/* AUTOMATION */}
                    <g id="g_automation" transform="translate(743, 307)">
                        <g id="spin_automation">
                            <circle r="70" fill="var(--cyan)" />
                            {Array.from({ length: 10 }).map((_, i) => (
                                <g key={i} transform={`rotate(${i * 36}) translate(0,-70)`}>
                                    <use href="#tooth-v23" fill="var(--cyan)" />
                                </g>
                            ))}
                        </g>
                        <circle r="50" fill="white" stroke="var(--cyan)" strokeWidth="4" />
                        <text className="gear-text font-sora font-extrabold" textAnchor="middle" fontSize="11" dy="5" fill="var(--cyan)">
                            AUTOMATION
                        </text>
                    </g>

                    {/* DATA INTELLIGENCE */}
                    <g id="g_data" transform="translate(786, 591)">
                        <g id="spin_data">
                            <circle r="100" fill="var(--yellow)" />
                            {Array.from({ length: 16 }).map((_, i) => (
                                <g key={i} transform={`rotate(${i * 22.5 + 11.25}) translate(0,-100)`}>
                                    <use href="#tooth-v23" fill="var(--yellow)" />
                                </g>
                            ))}
                        </g>
                        <circle r="75" fill="white" stroke="var(--yellow)" strokeWidth="4" />
                        <text className="gear-text font-sora font-extrabold" textAnchor="middle" fontSize="13" dy="-2" fill="var(--yellow)">
                            DATA
                        </text>
                        <text className="gear-text font-sora font-extrabold" textAnchor="middle" fontSize="13" dy="16" fill="var(--yellow)">
                            INTELLIGENCE
                        </text>
                    </g>

                    {/* DEVELOPMENT */}
                    <g id="g_dev" transform="translate(428, 592)">
                        <g id="spin_dev">
                            <circle r="90" fill="var(--blue)" />
                            {Array.from({ length: 14 }).map((_, i) => (
                                <g key={i} transform={`rotate(${i * 25.7}) translate(0,-90)`}>
                                    <use href="#tooth-v23" fill="var(--blue)" />
                                </g>
                            ))}
                        </g>
                        <circle r="65" fill="white" stroke="var(--blue)" strokeWidth="4" />
                        <text className="gear-text font-sora font-extrabold" textAnchor="middle" fontSize="28" dy="-10" fill="var(--blue)">
                            &lt;/&gt;
                        </text>
                        <text className="gear-text font-sora font-extrabold" textAnchor="middle" fontSize="11" dy="15" fill="var(--blue)">
                            DEVELOPMENT
                        </text>
                    </g>
                </g>
            </svg>
        </div>
    );
};

export default GearEngine;
