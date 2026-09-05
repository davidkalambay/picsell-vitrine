"use client";

import React, { useRef, useState, useEffect } from "react";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap-config";
import { useSiteSettings } from "@/context/SettingsContext";

interface ScrollytellingEngineProps {
    activeSection: "marketing" | "automation" | "development" | "data" | null;
}

export const ScrollytellingEngine: React.FC<ScrollytellingEngineProps> = ({ activeSection }) => {
    const container = useRef<SVGSVGElement>(null);
    const { settings, drawSvgKey } = useSiteSettings();
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

    // Amelia's Idea 04: DrawSVG Initial Engineering Assembly Reveal
    useGSAP(() => {
        if (!container.current) return;

        if (!settings.drawSvgIntro) {
            // Static mode: ensure all elements are visible immediately
            gsap.set([".drawsvg-axis", ".drawsvg-ring"], { strokeDashoffset: 0, opacity: 0.4 });
            gsap.set(".drawsvg-fill", { opacity: 1 });
            gsap.set(".drawsvg-tooth", { scale: 1, opacity: 1 });
            gsap.set(".drawsvg-text", { opacity: 1, scale: 1 });
            return;
        }

        const sectionTrigger = document.getElementById("scrollytelling-section");

        const playDrawAnimation = () => {
            const introTl = gsap.timeline({ defaults: { ease: "power2.inOut" } });

            // 1. Initial State: Hidden wireframe offsets & zero scale
            introTl.set(".drawsvg-axis", { strokeDashoffset: 100, opacity: 0 });
            introTl.set(".drawsvg-ring", { strokeDashoffset: 100, opacity: 0 });
            introTl.set(".drawsvg-fill", { opacity: 0 });
            introTl.set(".drawsvg-tooth", { scale: 0, opacity: 0, transformOrigin: "center center" });
            introTl.set(".drawsvg-text", { scale: 0.7, opacity: 0, transformOrigin: "center center" });

            // 2. Phase 1: Draw Blueprint Axis Lines connecting AI Engine to Satellites (0s - 0.7s)
            introTl.to(".drawsvg-axis", {
                strokeDashoffset: 0,
                opacity: 0.45,
                duration: 0.7,
                stagger: 0.08,
                ease: "power2.out",
            });

            // 3. Phase 2: Draw Technical Pitch Circles & Gear Perimeter Contours (0.4s - 1.5s)
            introTl.to(".drawsvg-ring", {
                strokeDashoffset: 0,
                opacity: 1,
                duration: 1.1,
                stagger: 0.1,
                ease: "power2.inOut",
            }, "-=0.4");

            // 4. Phase 3: Clockwork Teeth Escapement Radial Assembly (0.9s - 1.4s)
            introTl.to(".drawsvg-tooth", {
                scale: 1,
                opacity: 1,
                duration: 0.45,
                stagger: {
                    each: 0.012,
                    from: "center",
                },
                ease: "back.out(2.2)",
            }, "-=0.5");

            // 5. Phase 4: Solid Precision Body Fill-in (1.2s - 1.8s)
            introTl.to(".drawsvg-fill", {
                opacity: 1,
                duration: 0.6,
                stagger: 0.06,
                ease: "power2.out",
            }, "-=0.3");

            // 6. Phase 5: Technical Typography Ingress & Calibration Flash (1.4s - 1.9s)
            introTl.to(".drawsvg-text", {
                scale: 1,
                opacity: 1,
                duration: 0.4,
                stagger: 0.06,
                ease: "back.out(1.5)",
            }, "-=0.3");

            // Micro calibration pulse on AI Hub
            introTl.fromTo("#g_ai", {
                scale: 1,
            }, {
                scale: 1.04,
                duration: 0.2,
                yoyo: true,
                repeat: 1,
                ease: "power1.inOut",
            }, "-=0.1");
        };

        if (drawSvgKey > 0) {
            // Replay requested from settings drawer
            playDrawAnimation();
        } else if (sectionTrigger) {
            // First time entrance trigger
            ScrollTrigger.create({
                trigger: sectionTrigger,
                start: "top 75%",
                once: true,
                onEnter: () => playDrawAnimation(),
            });
        } else {
            playDrawAnimation();
        }

    }, { scope: container, dependencies: [settings.drawSvgIntro, drawSvgKey] });

    // Synchronized Clockwork Rotation Scrubbing - Winston 03: GSAP MatchMedia Responsive
    useGSAP(() => {
        if (!container.current) return;
        
        const sectionTrigger = document.getElementById("scrollytelling-section");
        if (!sectionTrigger) return;

        const rads = { ai: 18, marketing: 12, automation: 10, development: 14, data: 16 };

        // Winston 04: Respect prefers-reduced-motion accessibility
        if (settings.reducedMotion) {
            gsap.set(["#spin_ai", "#spin_marketing", "#spin_automation", "#spin_data", "#spin_dev"], {
                rotation: 0,
                transformOrigin: "center center",
            });
            return;
        }

        if (!settings.matchMediaResponsive) {
            // Fallback non-responsive timeline
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionTrigger,
                    start: "top top",
                    end: "bottom bottom",
                    scrub: settings.scrubSpeed,
                },
            });
            const totalDegrees = 900;
            tl.to("#spin_ai", { rotation: totalDegrees, transformOrigin: "center center", ease: "none" }, 0);
            tl.to("#spin_marketing", { rotation: -(rads.ai / rads.marketing) * totalDegrees, transformOrigin: "center center", ease: "none" }, 0);
            tl.to("#spin_automation", { rotation: -(rads.ai / rads.automation) * totalDegrees, transformOrigin: "center center", ease: "none" }, 0);
            tl.to("#spin_data", { rotation: -(rads.ai / rads.data) * totalDegrees, transformOrigin: "center center", ease: "none" }, 0);
            tl.to("#spin_dev", { rotation: -(rads.ai / rads.development) * totalDegrees, transformOrigin: "center center", ease: "none" }, 0);
            return;
        }

        const mm = gsap.matchMedia();

        mm.add({
            isDesktop: "(min-width: 1024px)",
            isTablet: "(min-width: 768px) and (max-width: 1023px)",
            isMobile: "(max-width: 767px)",
        }, (context) => {
            const { isDesktop, isTablet, isMobile } = context.conditions as {
                isDesktop: boolean;
                isTablet: boolean;
                isMobile: boolean;
            };

            // Responsive Rotation Profiles:
            // Desktop: 900° complete rotation over pinned section
            // Tablet: 720° rotation with adjusted scrub
            // Mobile: 540° rotation with tighter start/end offsets
            const totalDegrees = isDesktop ? 900 : isTablet ? 720 : 540;
            const scrubValue = isMobile ? Math.min(settings.scrubSpeed, 1.0) : settings.scrubSpeed;

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionTrigger,
                    start: isMobile ? "top 20%" : "top top",
                    end: isMobile ? "bottom 80%" : "bottom bottom",
                    scrub: scrubValue,
                },
            });

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
        });

        return () => mm.revert();
    }, { scope: container, dependencies: [settings.scrubSpeed, settings.matchMediaResponsive, settings.reducedMotion] });

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
                    {/* DrawSVG Blueprint Axis Lines connecting Hub to Satellites */}
                    <g className="drawsvg-axes-group pointer-events-none">
                        {/* Hub -> Marketing */}
                        <line
                            x1="600" y1="450" x2="438" y2="305"
                            className="drawsvg-axis"
                            pathLength="100"
                            strokeDasharray="100"
                            stroke="var(--pic-orange, #f37021)"
                            strokeWidth="1.5"
                            strokeDashoffset="0"
                            strokeOpacity="0.4"
                        />
                        {/* Hub -> Automation */}
                        <line
                            x1="600" y1="450" x2="743" y2="307"
                            className="drawsvg-axis"
                            pathLength="100"
                            strokeDasharray="100"
                            stroke="var(--pic-turquoise, #3dbcc7)"
                            strokeWidth="1.5"
                            strokeDashoffset="0"
                            strokeOpacity="0.4"
                        />
                        {/* Hub -> Development */}
                        <line
                            x1="600" y1="450" x2="428" y2="592"
                            className="drawsvg-axis"
                            pathLength="100"
                            strokeDasharray="100"
                            stroke="var(--pic-blue, #0089d0)"
                            strokeWidth="1.5"
                            strokeDashoffset="0"
                            strokeOpacity="0.4"
                        />
                        {/* Hub -> Data */}
                        <line
                            x1="600" y1="450" x2="786" y2="591"
                            className="drawsvg-axis"
                            pathLength="100"
                            strokeDasharray="100"
                            stroke="var(--pic-gold, #fdb913)"
                            strokeWidth="1.5"
                            strokeDashoffset="0"
                            strokeOpacity="0.4"
                        />
                    </g>

                    {/* AI ENGINE (Central Gear) */}
                    <g id="g_ai" transform="translate(600, 450)" filter="url(#ai-glow)">
                        {/* DrawSVG Technical Guide Ring */}
                        <circle
                            r="126"
                            fill="none"
                            stroke="rgba(255, 255, 255, 0.4)"
                            strokeWidth="1.5"
                            strokeDasharray="100"
                            pathLength="100"
                            className="drawsvg-ring"
                        />
                        <g id="spin_ai" className="gear-gpu-layer">
                            <circle
                                r="120"
                                fill="#1e212b"
                                stroke="#333846"
                                strokeWidth="3"
                                pathLength="100"
                                strokeDasharray="100"
                                className="drawsvg-fill drawsvg-ring"
                            />
                            {Array.from({ length: 18 }).map((_, i) => (
                                <g key={i} transform={`rotate(${i * 20}) translate(0,-120)`}>
                                    <use href="#tooth-v23" fill="#1e212b" className="drawsvg-tooth" />
                                </g>
                            ))}
                        </g>
                        <circle
                            r="90"
                            fill="#0d0e12"
                            stroke="#4b5563"
                            strokeWidth="4"
                            pathLength="100"
                            strokeDasharray="100"
                            className="drawsvg-fill drawsvg-ring"
                        />
                        <circle r="80" fill="white" className="drawsvg-fill" />
                        <text className="font-sora font-extrabold tracking-wider drawsvg-text" textAnchor="middle" fontSize="28" dy="10" fill="#090a0f">
                            AI
                        </text>
                        <text className="font-sora font-bold tracking-widest uppercase drawsvg-text" textAnchor="middle" fontSize="10" dy="25" fill="#4b5563">
                            ENGINE
                        </text>
                    </g>

                    {/* DIGITAL MARKETING */}
                    <g id="g_marketing" transform="translate(438, 305)" style={getStyle('marketing')}>
                        {/* DrawSVG Technical Guide Ring */}
                        <circle
                            r="91"
                            fill="none"
                            stroke="var(--pic-orange, #f37021)"
                            strokeWidth="1.5"
                            strokeDasharray="100"
                            pathLength="100"
                            className="drawsvg-ring"
                        />
                        <g id="spin_marketing" className="gear-gpu-layer">
                            <circle
                                r="85"
                                fill="var(--pic-orange, #f37021)"
                                stroke="var(--pic-orange, #f37021)"
                                strokeWidth="1"
                                pathLength="100"
                                strokeDasharray="100"
                                className="drawsvg-fill drawsvg-ring"
                            />
                            {Array.from({ length: 12 }).map((_, i) => (
                                <g key={i} transform={`rotate(${i * 30 + 15}) translate(0,-85)`}>
                                    <use href="#tooth-v23" fill="var(--pic-orange, #f37021)" className="drawsvg-tooth" />
                                </g>
                            ))}
                        </g>
                        <circle
                            r="60"
                            fill="#0d0e12"
                            stroke="var(--pic-orange, #f37021)"
                            strokeWidth="3"
                            pathLength="100"
                            strokeDasharray="100"
                            className="drawsvg-fill drawsvg-ring"
                        />
                        <text className="font-sora font-extrabold drawsvg-text" textAnchor="middle" fontSize="12" dy="-5" fill="white">
                            DIGITAL
                        </text>
                        <text className="font-sora font-extrabold drawsvg-text" textAnchor="middle" fontSize="13" dy="12" fill="var(--pic-orange, #f37021)">
                            MARKETING
                        </text>
                    </g>

                    {/* AUTOMATION */}
                    <g id="g_automation" transform="translate(743, 307)" style={getStyle('automation')}>
                        {/* DrawSVG Technical Guide Ring */}
                        <circle
                            r="76"
                            fill="none"
                            stroke="var(--pic-turquoise, #3dbcc7)"
                            strokeWidth="1.5"
                            strokeDasharray="100"
                            pathLength="100"
                            className="drawsvg-ring"
                        />
                        <g id="spin_automation" className="gear-gpu-layer">
                            <circle
                                r="70"
                                fill="var(--pic-turquoise, #3dbcc7)"
                                stroke="var(--pic-turquoise, #3dbcc7)"
                                strokeWidth="1"
                                pathLength="100"
                                strokeDasharray="100"
                                className="drawsvg-fill drawsvg-ring"
                            />
                            {Array.from({ length: 10 }).map((_, i) => (
                                <g key={i} transform={`rotate(${i * 36}) translate(0,-70)`}>
                                    <use href="#tooth-v23" fill="var(--pic-turquoise, #3dbcc7)" className="drawsvg-tooth" />
                                </g>
                            ))}
                        </g>
                        <circle
                            r="50"
                            fill="#0d0e12"
                            stroke="var(--pic-turquoise, #3dbcc7)"
                            strokeWidth="3"
                            pathLength="100"
                            strokeDasharray="100"
                            className="drawsvg-fill drawsvg-ring"
                        />
                        <text className="font-sora font-extrabold tracking-wide drawsvg-text" textAnchor="middle" fontSize="11" dy="5" fill="var(--pic-turquoise, #3dbcc7)">
                            AUTOMATION
                        </text>
                    </g>

                    {/* DEVELOPMENT */}
                    <g id="g_dev" transform="translate(428, 592)" style={getStyle('development')}>
                        {/* DrawSVG Technical Guide Ring */}
                        <circle
                            r="96"
                            fill="none"
                            stroke="var(--pic-blue, #0089d0)"
                            strokeWidth="1.5"
                            strokeDasharray="100"
                            pathLength="100"
                            className="drawsvg-ring"
                        />
                        <g id="spin_dev" className="gear-gpu-layer">
                            <circle
                                r="90"
                                fill="var(--pic-blue, #0089d0)"
                                stroke="var(--pic-blue, #0089d0)"
                                strokeWidth="1"
                                pathLength="100"
                                strokeDasharray="100"
                                className="drawsvg-fill drawsvg-ring"
                            />
                            {Array.from({ length: 14 }).map((_, i) => (
                                <g key={i} transform={`rotate(${i * 25.7}) translate(0,-90)`}>
                                    <use href="#tooth-v23" fill="var(--pic-blue, #0089d0)" className="drawsvg-tooth" />
                                </g>
                            ))}
                        </g>
                        <circle
                            r="65"
                            fill="#0d0e12"
                            stroke="var(--pic-blue, #0089d0)"
                            strokeWidth="3"
                            pathLength="100"
                            strokeDasharray="100"
                            className="drawsvg-fill drawsvg-ring"
                        />
                        <text className="font-sora font-extrabold drawsvg-text" textAnchor="middle" fontSize="26" dy="-8" fill="white">
                            &lt;/&gt;
                        </text>
                        <text className="font-sora font-extrabold tracking-wider drawsvg-text" textAnchor="middle" fontSize="11" dy="14" fill="var(--pic-blue, #0089d0)">
                            DEVELOPMENT
                        </text>
                    </g>

                    {/* DATA INTELLIGENCE */}
                    <g id="g_data" transform="translate(786, 591)" style={getStyle('data')}>
                        {/* DrawSVG Technical Guide Ring */}
                        <circle
                            r="106"
                            fill="none"
                            stroke="var(--pic-gold, #fdb913)"
                            strokeWidth="1.5"
                            strokeDasharray="100"
                            pathLength="100"
                            className="drawsvg-ring"
                        />
                        <g id="spin_data" className="gear-gpu-layer">
                            <circle
                                r="100"
                                fill="var(--pic-gold, #fdb913)"
                                stroke="var(--pic-gold, #fdb913)"
                                strokeWidth="1"
                                pathLength="100"
                                strokeDasharray="100"
                                className="drawsvg-fill drawsvg-ring"
                            />
                            {Array.from({ length: 16 }).map((_, i) => (
                                <g key={i} transform={`rotate(${i * 22.5 + 11.25}) translate(0,-100)`}>
                                    <use href="#tooth-v23" fill="var(--pic-gold, #fdb913)" className="drawsvg-tooth" />
                                </g>
                            ))}
                        </g>
                        <circle
                            r="75"
                            fill="#0d0e12"
                            stroke="var(--pic-gold, #fdb913)"
                            strokeWidth="3"
                            pathLength="100"
                            strokeDasharray="100"
                            className="drawsvg-fill drawsvg-ring"
                        />
                        <text className="font-sora font-extrabold drawsvg-text" textAnchor="middle" fontSize="13" dy="-2" fill="white">
                            DATA
                        </text>
                        <text className="font-sora font-extrabold drawsvg-text" textAnchor="middle" fontSize="13" dy="16" fill="var(--pic-gold, #fdb913)">
                            INTELLIGENCE
                        </text>
                    </g>
                </g>
            </svg>
        </div>
    );
};
