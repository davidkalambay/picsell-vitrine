"use client";

import React, { useRef, useState, useEffect } from "react";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap-config";
import { useSiteSettings } from "@/context/SettingsContext";
import {
    CENTRAL_AI_GEAR,
    SATELLITE_GEAR_LIST,
    SATELLITE_GEARS,
    TOOTH_DEFINITION,
    ServiceModuleKey,
    calculateSatelliteRotation,
    resolveEngineViewBox,
} from "@/config/gears.config";

interface ScrollytellingEngineProps {
    activeSection: ServiceModuleKey | null;
}

const ScrollytellingEngineComponent: React.FC<ScrollytellingEngineProps> = ({ activeSection }) => {
    const container = useRef<SVGSVGElement>(null);
    const { settings, drawSvgKey } = useSiteSettings();
    const [viewBox, setViewBox] = useState("250 150 700 600");

    // Responsive Viewbox calculation
    useEffect(() => {
        const handleResize = () => {
            const isMobile = window.innerWidth < 768;
            setViewBox(resolveEngineViewBox(settings.gearSize, isMobile));
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
            introTl.fromTo(`#${CENTRAL_AI_GEAR.groupId}`, {
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
            playDrawAnimation();
        } else if (sectionTrigger) {
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

    // Synchronized Clockwork Rotation Scrubbing - Winston 03 & 06: GSAP MatchMedia + Modular Config
    useGSAP(() => {
        if (!container.current) return;
        
        const sectionTrigger = document.getElementById("scrollytelling-section");
        if (!sectionTrigger) return;

        // Winston 04: Respect prefers-reduced-motion accessibility
        if (settings.reducedMotion) {
            const allSpinIds = [CENTRAL_AI_GEAR.spinId, ...SATELLITE_GEAR_LIST.map((g) => g.spinId)];
            gsap.set(allSpinIds.map((id) => `#${id}`), {
                rotation: 0,
                transformOrigin: "center center",
            });
            return;
        }

        const totalDegrees = 900;
        const scrubValue = typeof settings.scrubSpeed === "number" ? settings.scrubSpeed : 1.5;

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionTrigger,
                start: "top bottom",
                end: "bottom bottom",
                scrub: scrubValue,
                invalidateOnRefresh: true,
            },
        });

        // AI Central Core
        tl.to(`#${CENTRAL_AI_GEAR.spinId}`, {
            rotation: totalDegrees,
            transformOrigin: "center center",
            ease: "none",
        }, 0);

        // Satellite Gears from Config
        SATELLITE_GEAR_LIST.forEach((gear) => {
            tl.to(`#${gear.spinId}`, {
                rotation: calculateSatelliteRotation(gear.teethCount, totalDegrees),
                transformOrigin: "center center",
                ease: "none",
            }, 0);
        });

        // Trigger safe calibration refresh
        requestAnimationFrame(() => {
            ScrollTrigger.refresh();
        });

        return () => {
            tl.kill();
        };
    }, { scope: container, dependencies: [settings.scrubSpeed, settings.matchMediaResponsive, settings.reducedMotion] });

    // Active state styles with dynamic neon glow
    const getStyle = (sectionKey: ServiceModuleKey) => {
        const isActive = activeSection === sectionKey;
        const gear = SATELLITE_GEARS[sectionKey];

        return {
            opacity: isActive ? 1 : 0.25,
            filter: isActive 
                ? (settings.neonGlow ? `drop-shadow(0 0 24px ${gear.glowColor})` : "none")
                : "grayscale(1) brightness(0.7)",
            transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)"
        };
    };

    const activeAuraColor = activeSection ? SATELLITE_GEARS[activeSection]?.accentHex : "rgba(255, 255, 255, 0.05)";

    return (
        <div className="w-full h-full flex justify-center items-center overflow-visible relative engine-aspect-ratio">
            {/* Ambient Background Aura based on active section */}
            {settings.neonGlow && (
                <div 
                    className="absolute w-[350px] h-[350px] md:w-[500px] md:h-[500px] rounded-full blur-[100px] pointer-events-none transition-all duration-700 opacity-40 -z-10"
                    style={{ backgroundColor: activeAuraColor }}
                />
            )}

            <svg
                ref={container}
                id="scrollytelling-gear-engine"
                viewBox={viewBox}
                width="700"
                height="600"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full max-w-[1000px] max-h-[80vh] overflow-visible"
                style={{
                    aspectRatio: "700/600",
                }}
            >
                <defs>
                    <path id={TOOTH_DEFINITION.pathId} d={TOOTH_DEFINITION.d} />
                    <filter id="ai-glow" x="-50%" y="-50%" width="200%" height="200%">
                        <feDropShadow dx="0" dy="0" stdDeviation="15" floodColor="#ffffff" floodOpacity="0.25" />
                    </filter>
                </defs>

                <g id="cluster" style={{ transformOrigin: `${CENTRAL_AI_GEAR.center.x}px ${CENTRAL_AI_GEAR.center.y}px` }}>
                    {/* DrawSVG Blueprint Axis Lines connecting Hub to Satellites */}
                    <g className="drawsvg-axes-group pointer-events-none">
                        {SATELLITE_GEAR_LIST.map((gear) => (
                            <line
                                key={gear.id}
                                x1={gear.axisLine.x1}
                                y1={gear.axisLine.y1}
                                x2={gear.axisLine.x2}
                                y2={gear.axisLine.y2}
                                className="drawsvg-axis"
                                pathLength="100"
                                strokeDasharray="100"
                                stroke={gear.color}
                                strokeWidth="1.5"
                                strokeDashoffset="0"
                                strokeOpacity="0.4"
                            />
                        ))}
                    </g>

                    {/* AI CORE ENGINE (Central Master Gear) */}
                    <g id={CENTRAL_AI_GEAR.groupId} transform={`translate(${CENTRAL_AI_GEAR.center.x}, ${CENTRAL_AI_GEAR.center.y})`} filter="url(#ai-glow)">
                        {/* DrawSVG Technical Guide Ring */}
                        <circle
                            r={CENTRAL_AI_GEAR.guideRingRadius}
                            fill="none"
                            stroke="rgba(255, 255, 255, 0.4)"
                            strokeWidth="1.5"
                            strokeDasharray="100"
                            pathLength="100"
                            className="drawsvg-ring"
                        />
                        <g id={CENTRAL_AI_GEAR.spinId}>
                            <circle
                                r={CENTRAL_AI_GEAR.radius}
                                fill={CENTRAL_AI_GEAR.fillColor}
                                stroke={CENTRAL_AI_GEAR.strokeColor}
                                strokeWidth="3"
                                pathLength="100"
                                strokeDasharray="100"
                                className="drawsvg-fill drawsvg-ring"
                            />
                            {Array.from({ length: CENTRAL_AI_GEAR.teethCount }).map((_, i) => (
                                <g key={i} transform={`rotate(${i * (360 / CENTRAL_AI_GEAR.teethCount)}) translate(0,-${CENTRAL_AI_GEAR.radius})`}>
                                    <use href={`#${TOOTH_DEFINITION.pathId}`} fill={CENTRAL_AI_GEAR.fillColor} className="drawsvg-tooth" />
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
                        <circle r={CENTRAL_AI_GEAR.coreRadius} fill="white" className="drawsvg-fill" />
                        <text className="font-sora font-extrabold tracking-wider drawsvg-text" textAnchor="middle" fontSize="28" dy="10" fill="#090a0f">
                            {CENTRAL_AI_GEAR.labels.main}
                        </text>
                        <text className="font-sora font-bold tracking-widest uppercase drawsvg-text" textAnchor="middle" fontSize="10" dy="25" fill="#4b5563">
                            {CENTRAL_AI_GEAR.labels.subtitle}
                        </text>
                    </g>

                    {/* SATELLITE GEARS (Iterative Modular Rendering) */}
                    {SATELLITE_GEAR_LIST.map((gear) => {
                        const degStep = 360 / gear.teethCount;

                        return (
                            <g
                                key={gear.id}
                                id={gear.groupId}
                                transform={`translate(${gear.center.x}, ${gear.center.y})`}
                                style={getStyle(gear.id)}
                            >
                                {/* Guide Ring */}
                                <circle
                                    r={gear.guideRingRadius}
                                    fill="none"
                                    stroke={gear.color}
                                    strokeWidth="1.5"
                                    strokeDasharray="100"
                                    pathLength="100"
                                    className="drawsvg-ring"
                                />

                                {/* Rotating Body & Teeth */}
                                <g id={gear.spinId}>
                                    <circle
                                        r={gear.radius}
                                        fill={gear.color}
                                        stroke={gear.color}
                                        strokeWidth="1"
                                        pathLength="100"
                                        strokeDasharray="100"
                                        className="drawsvg-fill drawsvg-ring"
                                    />
                                    {Array.from({ length: gear.teethCount }).map((_, i) => (
                                        <g
                                            key={i}
                                            transform={`rotate(${i * degStep + gear.initialToothOffsetDeg}) translate(0,-${gear.radius})`}
                                        >
                                            <use href={`#${TOOTH_DEFINITION.pathId}`} fill={gear.color} className="drawsvg-tooth" />
                                        </g>
                                    ))}
                                </g>

                                {/* Inner Pitch Hub */}
                                <circle
                                    r={gear.innerPitchRadius}
                                    fill="#0d0e12"
                                    stroke={gear.color}
                                    strokeWidth="3"
                                    pathLength="100"
                                    strokeDasharray="100"
                                    className="drawsvg-fill drawsvg-ring"
                                />

                                {/* Typography & Icons */}
                                {gear.labels.icon && (
                                    <text className="font-sora font-extrabold drawsvg-text" textAnchor="middle" fontSize="26" dy="-8" fill="white">
                                        {gear.labels.icon}
                                    </text>
                                )}
                                {gear.labels.top && (
                                    <text className="font-sora font-extrabold drawsvg-text" textAnchor="middle" fontSize={gear.id === "data" ? "13" : "12"} dy={gear.id === "data" ? "-2" : "-5"} fill="white">
                                        {gear.labels.top}
                                    </text>
                                )}
                                {gear.labels.main && (
                                    <text
                                        className="font-sora font-extrabold drawsvg-text"
                                        textAnchor="middle"
                                        fontSize={gear.id === "automation" ? "11" : gear.id === "development" ? "11" : gear.id === "data" ? "13" : "13"}
                                        dy={gear.id === "automation" ? "5" : gear.id === "development" ? "14" : gear.id === "data" ? "16" : "12"}
                                        fill={gear.id === "automation" ? gear.color : gear.id === "development" ? gear.color : gear.color}
                                    >
                                        {gear.labels.main}
                                    </text>
                                )}
                            </g>
                        );
                    })}
                </g>
            </svg>
        </div>
    );
};

export const ScrollytellingEngine = React.memo(
    ScrollytellingEngineComponent,
    (prevProps, nextProps) => prevProps.activeSection === nextProps.activeSection
);

