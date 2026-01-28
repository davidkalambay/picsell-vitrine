"use client";

import React, { useRef } from "react";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap-config";

export const HeroMechanicalEngine: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const gearLargeRef = useRef<SVGGElement>(null);
    const gearMediumRef = useRef<SVGGElement>(null);
    const gearSmallRef = useRef<SVGGElement>(null);

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: 1.5, // Smooth lag for a premium feel
                },
            });

            // Large Gear: Clockwise
            tl.to(gearLargeRef.current, {
                rotation: 360,
                ease: "none",
            }, 0);

            // Medium Gear (interlocking with Large): Counter-clockwise
            tl.to(gearMediumRef.current, {
                rotation: -720, // Turns faster due to smaller radius
                ease: "none",
            }, 0);

            // Small Gear (interlocking with Large): Counter-clockwise
            tl.to(gearSmallRef.current, {
                rotation: -900,
                ease: "none",
            }, 0);
        },
        { scope: containerRef }
    );

    return (
        <div ref={containerRef} className="relative w-full h-[120vh] sm:h-screen flex items-center justify-center overflow-hidden bg-[#0A0A0A]">
            <div className="absolute inset-0 opacity-10 sm:opacity-20 pointer-events-none">
                {/* Subtle grid pattern for Swiss Precision - Scaled for better density on mobile */}
                <div className="w-full h-full" style={{ backgroundImage: 'radial-gradient(#E5E4E2 0.5px, transparent 0.5px)', backgroundSize: 'clamp(20px, 5vw, 40px) clamp(20px, 5vw, 40px)' }} />
            </div>

            <div className="relative w-full h-full flex items-center justify-center p-4">
                <svg
                    viewBox="0 0 500 500"
                    className="w-full h-auto max-w-[90vw] sm:max-w-[70vw] md:max-w-[600px] drop-shadow-[0_0_15px_rgba(212,175,55,0.1)]"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="xMidYMid meet"
                >
                    {/* Gear Large (Master) */}
                    <g ref={gearLargeRef} style={{ transformOrigin: '200px 200px' }}>
                        <circle cx="200" cy="200" r="80" stroke="#D4AF37" strokeWidth="2" strokeDasharray="10 5" />
                        <circle cx="200" cy="200" r="20" stroke="#D4AF37" strokeWidth="1" />
                        {[...Array(12)].map((_, i) => (
                            <line
                                key={i}
                                x1="200"
                                y1="110"
                                x2="200"
                                y2="130"
                                stroke="#D4AF37"
                                strokeWidth="4"
                                transform={`rotate(${i * 30} 200 200)`}
                            />
                        ))}
                    </g>

                    {/* Gear Medium */}
                    <g ref={gearMediumRef} style={{ transformOrigin: '335px 200px' }}>
                        <circle cx="335" cy="200" r="50" stroke="#E5E4E2" strokeWidth="2" strokeDasharray="8 4" />
                        <circle cx="335" cy="200" r="15" stroke="#E5E4E2" strokeWidth="1" />
                        {[...Array(8)].map((_, i) => (
                            <line
                                key={i}
                                x1="335"
                                y1="145"
                                x2="335"
                                y2="155"
                                stroke="#E5E4E2"
                                strokeWidth="4"
                                transform={`rotate(${i * 45} 335 200)`}
                            />
                        ))}
                    </g>

                    {/* Gear Small */}
                    <g ref={gearSmallRef} style={{ transformOrigin: '200px 325px' }}>
                        <circle cx="200" cy="325" r="40" stroke="#E5E4E2" strokeWidth="1.5" strokeDasharray="6 3" />
                        <circle cx="200" cy="325" r="10" stroke="#E5E4E2" strokeWidth="1" />
                        {[...Array(6)].map((_, i) => (
                            <line
                                key={i}
                                x1="200"
                                y1="280"
                                x2="200"
                                y2="290"
                                stroke="#E5E4E2"
                                strokeWidth="3"
                                transform={`rotate(${i * 60} 200 325)`}
                            />
                        ))}
                    </g>
                </svg>
            </div>

            <div className="absolute bottom-6 sm:bottom-10 left-6 sm:left-10 font-mono text-[8px] sm:text-[10px] text-[#E5E4E2] uppercase tracking-[0.2em] opacity-30 sm:opacity-40">
                Mechanism_Status: Sync_Active <br />
                Precision: 60FPS_Standard
            </div>
        </div>
    );
};
