"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

interface GearsProps {
    className?: string;
    synced?: boolean; // If true, rotation will be handled by external timeline
}

export const Gears: React.FC<GearsProps> = ({ className, synced = false }) => {
    const container = useRef<HTMLDivElement>(null);
    const spinAi = useRef<SVGGElement>(null);
    const spinMarketing = useRef<SVGGElement>(null);
    const spinAutomation = useRef<SVGGElement>(null);
    const spinData = useRef<SVGGElement>(null);
    const spinDev = useRef<SVGGElement>(null);

    const rads = { ai: 18, marketing: 12, automation: 10, development: 14, data: 16 };

    useGSAP(
        () => {
            if (synced) return; // Do nothing if synced, parent will control it

            // Standalone autonomous rotation for "Coming Soon" or landing fallback
            const duration = 20;
            const baseRotation = 360;

            gsap.to(spinAi.current, {
                rotation: baseRotation,
                transformOrigin: "center center",
                ease: "none",
                repeat: -1,
                duration,
            });

            gsap.to(spinMarketing.current, {
                rotation: -(rads.ai / rads.marketing) * baseRotation,
                transformOrigin: "center center",
                ease: "none",
                repeat: -1,
                duration,
            });

            gsap.to(spinAutomation.current, {
                rotation: -(rads.ai / rads.automation) * baseRotation,
                transformOrigin: "center center",
                ease: "none",
                repeat: -1,
                duration,
            });

            gsap.to(spinData.current, {
                rotation: -(rads.ai / rads.data) * baseRotation,
                transformOrigin: "center center",
                ease: "none",
                repeat: -1,
                duration,
            });

            gsap.to(spinDev.current, {
                rotation: -(rads.ai / rads.development) * baseRotation,
                transformOrigin: "center center",
                ease: "none",
                repeat: -1,
                duration,
            });
        },
        { scope: container, dependencies: [synced] }
    );

    return (
        <div ref={container} className={`stage relative w-full h-full flex items-center justify-center ${className}`}>
            <svg viewBox="0 0 1200 900" xmlns="http://www.w3.org/2000/svg" className="w-[80%] h-[80%] max-w-[1000px] overflow-visible">
                <defs>
                    <path id="tooth-v23" d="M-9,-12 L9,-12 L12,0 L-12,0 Z" />
                </defs>

                <g id="cluster" className="cluster-main">
                    {/* AI ENGINE - CENTER */}
                    <g id="g_ai" transform="translate(600, 450)">
                        <g id="spin_ai" ref={spinAi}>
                            <circle r="120" className="fill-blue" />
                            {[...Array(18)].map((_, i) => (
                                <g key={i} transform={`rotate(${i * 20}) translate(0,-120)`}>
                                    <use href="#tooth-v23" className="fill-blue" />
                                </g>
                            ))}
                        </g>
                        <circle r="90" fill="white" stroke="var(--blue)" strokeWidth="4" />
                        <text className="gear-text fill-blue" textAnchor="middle" fontSize="28" dy="10">AI</text>
                        <text className="gear-text fill-blue" textAnchor="middle" fontSize="10" dy="25">ENGINE</text>
                    </g>

                    {/* DIGITAL MARKETING */}
                    <g id="g_marketing" transform="translate(438, 305)">
                        <g id="spin_marketing" ref={spinMarketing}>
                            <circle r="85" className="fill-orange" />
                            {[...Array(12)].map((_, i) => (
                                <g key={i} transform={`rotate(${i * 30 + 15}) translate(0,-85)`}>
                                    <use href="#tooth-v23" className="fill-orange" />
                                </g>
                            ))}
                        </g>
                        <circle r="60" fill="white" stroke="var(--orange)" strokeWidth="4" />
                        <text className="gear-text fill-orange font-bold" textAnchor="middle" fontSize="12" dy="-5">DIGITAL</text>
                        <text className="gear-text fill-orange font-bold" textAnchor="middle" fontSize="14" dy="12">MARKETING</text>
                    </g>

                    {/* AUTOMATION */}
                    <g id="g_automation" transform="translate(743, 307)">
                        <g id="spin_automation" ref={spinAutomation}>
                            <circle r="70" className="fill-cyan" />
                            {[...Array(10)].map((_, i) => (
                                <g key={i} transform={`rotate(${i * 36}) translate(0,-70)`}>
                                    <use href="#tooth-v23" className="fill-cyan" />
                                </g>
                            ))}
                        </g>
                        <circle r="50" fill="white" stroke="var(--cyan)" strokeWidth="4" />
                        <text className="gear-text fill-cyan font-bold" textAnchor="middle" fontSize="11" dy="5">AUTOMATION</text>
                    </g>

                    {/* DATA INTELLIGENCE */}
                    <g id="g_data" transform="translate(786, 591)">
                        <g id="spin_data" ref={spinData}>
                            <circle r="100" className="fill-yellow" />
                            {[...Array(16)].map((_, i) => (
                                <g key={i} transform={`rotate(${i * 22.5 + 11.25}) translate(0,-100)`}>
                                    <use href="#tooth-v23" className="fill-yellow" />
                                </g>
                            ))}
                        </g>
                        <circle r="75" fill="white" stroke="var(--yellow)" strokeWidth="4" />
                        <text className="gear-text fill-yellow font-bold" textAnchor="middle" fontSize="13" dy="-2">DATA</text>
                        <text className="gear-text fill-yellow font-bold" textAnchor="middle" fontSize="13" dy="16">INTELLIGENCE</text>
                    </g>

                    {/* DEVELOPMENT */}
                    <g id="g_dev" transform="translate(428, 592)">
                        <g id="spin_dev" ref={spinDev}>
                            <circle r="90" className="fill-black" />
                            {[...Array(14)].map((_, i) => (
                                <g key={i} transform={`rotate(${i * 25.7}) translate(0,-90)`}>
                                    <use href="#tooth-v23" className="fill-black" />
                                </g>
                            ))}
                        </g>
                        <circle r="65" fill="white" stroke="var(--black)" strokeWidth="4" />
                        <text className="gear-text fill-black font-bold" textAnchor="middle" fontSize="28" dy="-10">{"</>"}</text>
                        <text className="gear-text fill-black font-bold" textAnchor="middle" fontSize="11" dy="15">DEVELOPMENT</text>
                    </g>
                </g>
            </svg>

            <style jsx>{`
        .fill-blue { fill: var(--blue); }
        .fill-cyan { fill: var(--cyan); }
        .fill-orange { fill: var(--orange); }
        .fill-yellow { fill: var(--yellow); }
        .fill-black { fill: var(--black); }
        .gear-text {
          font-family: 'Sora', sans-serif;
          font-weight: 800;
          text-transform: uppercase;
          pointer-events: none;
        }
      `}</style>
        </div>
    );
};
