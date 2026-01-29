"use client";

import React, { useRef } from "react";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap-config";

/**
 * Phase 1: First Principles Thinking - Diaphragm Geometry
 * Brainstorming playground for the mechanical Lens/Iris.
 */
export const HeroLens: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const bladesRef = useRef<(SVGGElement | null)[]>([]);

    const BLADE_COUNT = 8;

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: 1.5,
                },
            });

            // Pattern: Each blade rotates and translates to form the iris hole
            bladesRef.current.forEach((blade, i) => {
                if (blade) {
                    tl.to(blade, {
                        rotation: -45, // Rotate outward/inward
                        x: 10,
                        y: 10,
                        ease: "power2.inOut",
                    }, 0);
                }
            });
        },
        { scope: containerRef }
    );

    return (
        <div ref={containerRef} className="relative w-full h-[200vh] bg-[#050505]">
            <div className="sticky top-0 h-screen flex flex-col items-center justify-center">

                <h2 className="absolute top-20 font-mono text-zinc-600 text-[10px] tracking-[0.5em] uppercase">
                    Mechanical_Ref: 01_Iris_Prototype
                </h2>

                <svg
                    viewBox="0 0 200 200"
                    className="w-[60vmin] h-[60vmin] drop-shadow-[0_0_30px_rgba(212,175,55,0.05)]"
                >
                    {/* Inner support ring */}
                    <circle cx="100" cy="100" r="75" stroke="#1A1A1A" strokeWidth="0.5" fill="none" />

                    <g id="iris-assembly">
                        {[...Array(BLADE_COUNT)].map((_, i) => (
                            <g
                                key={i}
                                ref={(el) => { if (el) bladesRef.current[i] = el; }}
                                transform={`rotate(${(360 / BLADE_COUNT) * i} 100 100)`}
                                style={{ transformOrigin: '100px 100px' }}
                            >
                                {/* A simple lens blade path */}
                                <path
                                    d="M 100,30 Q 140,30 140,100 L 100,100 Z"
                                    fill="none"
                                    stroke="#D4AF37"
                                    strokeWidth="0.3"
                                    className="opacity-60"
                                />
                            </g>
                        ))}
                    </g>

                    {/* Outer structural rings */}
                    <circle cx="100" cy="100" r="90" stroke="#1A1A1A" strokeWidth="0.2" fill="none" />
                    <circle cx="100" cy="100" r="95" stroke="#1A1A1A" strokeWidth="0.1" fill="none" strokeDasharray="2 2" />
                </svg>

                <div className="absolute bottom-20 font-mono text-zinc-500 text-[9px] uppercase tracking-widest text-center">
                    ( Scroll to actuate mechanism )
                </div>
            </div>
        </div>
    );
};
