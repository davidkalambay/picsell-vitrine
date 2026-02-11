"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export const Gears = () => {
    const container = useRef<HTMLDivElement>(null);
    const spinAi = useRef<SVGGElement>(null);
    const spinMarketing = useRef<SVGGElement>(null);
    const spinAutomation = useRef<SVGGElement>(null);
    const spinData = useRef<SVGGElement>(null);
    const spinDev = useRef<SVGGElement>(null);

    const rads = { ai: 18, marketing: 12, automation: 10, development: 14, data: 16 };

    useGSAP(
        () => {
            const duration = 20;
            const baseRotation = 360;

            // Autonomous rotation
            gsap.to(spinAi.current, { rotation: baseRotation, transformOrigin: "center center", ease: "none", repeat: -1, duration: duration });
            gsap.to(spinMarketing.current, { rotation: -(rads.ai / rads.marketing) * baseRotation, transformOrigin: "center center", ease: "none", repeat: -1, duration: duration });
            gsap.to(spinAutomation.current, { rotation: -(rads.ai / rads.automation) * baseRotation, transformOrigin: "center center", ease: "none", repeat: -1, duration: duration });
            gsap.to(spinData.current, { rotation: -(rads.ai / rads.data) * baseRotation, transformOrigin: "center center", ease: "none", repeat: -1, duration: duration });
            gsap.to(spinDev.current, { rotation: -(rads.ai / rads.development) * baseRotation, transformOrigin: "center center", ease: "none", repeat: -1, duration: duration });
        },
        { scope: container }
    );

    return (
        <div ref={container} className="relative w-full h-full flex items-center justify-center">
            <svg viewBox="0 0 1200 900" xmlns="http://www.w3.org/2000/svg" className="w-[85%] h-[85%] max-w-[1000px] overflow-visible">
                <defs>
                    <path id="tooth-v23" d="M-9,-12 L9,-12 L12,0 L-12,0 Z" />
                </defs>

                <g id="cluster" transform="translate(350, 50) scale(0.9)">
                    {/* AI ENGINE - CENTER */}
                    <g transform="translate(600, 450)">
                        <g ref={spinAi}>
                            <circle r="120" fill="#0089D0" />
                            {[...Array(18)].map((_, i) => (
                                <g key={i} transform={`rotate(${i * 20}) translate(0,-120)`}>
                                    <use href="#tooth-v23" fill="#0089D0" />
                                </g>
                            ))}
                        </g>
                        <circle r="90" fill="white" stroke="#0089D0" strokeWidth="4" />
                        <text className="gear-text" textAnchor="middle" fontSize="28" dy="10" fill="#0089D0">AI</text>
                        <text className="gear-text" textAnchor="middle" fontSize="10" dy="25" fill="#0089D0">ENGINE</text>
                    </g>

                    {/* MARKETING */}
                    <g transform="translate(438, 305)">
                        <g ref={spinMarketing}>
                            <circle r="85" fill="#F37021" />
                            {[...Array(12)].map((_, i) => (
                                <g key={i} transform={`rotate(${i * 30 + 15}) translate(0,-85)`}>
                                    <use href="#tooth-v23" fill="#F37021" />
                                </g>
                            ))}
                        </g>
                        <circle r="60" fill="white" stroke="#F37021" strokeWidth="4" />
                        <text className="gear-text" textAnchor="middle" fontSize="12" dy="-5" fill="#F37021">DIGITAL</text>
                        <text className="gear-text" textAnchor="middle" fontSize="14" dy="12" fill="#F37021">MARKETING</text>
                    </g>

                    {/* AUTOMATION */}
                    <g transform="translate(743, 307)">
                        <g ref={spinAutomation}>
                            <circle r="70" fill="#3DBCC7" />
                            {[...Array(10)].map((_, i) => (
                                <g key={i} transform={`rotate(${i * 36}) translate(0,-70)`}>
                                    <use href="#tooth-v23" fill="#3DBCC7" />
                                </g>
                            ))}
                        </g>
                        <circle r="50" fill="white" stroke="#3DBCC7" strokeWidth="4" />
                        <text className="gear-text" textAnchor="middle" fontSize="11" dy="5" fill="#3DBCC7">AUTOMATION</text>
                    </g>

                    {/* DATA */}
                    <g transform="translate(786, 591)">
                        <g ref={spinData}>
                            <circle r="100" fill="#FDB913" />
                            {[...Array(16)].map((_, i) => (
                                <g key={i} transform={`rotate(${i * 22.5 + 11.25}) translate(0,-100)`}>
                                    <use href="#tooth-v23" fill="#FDB913" />
                                </g>
                            ))}
                        </g>
                        <circle r="75" fill="white" stroke="#FDB913" strokeWidth="4" />
                        <text className="gear-text" textAnchor="middle" fontSize="13" dy="-2" fill="#FDB913">DATA</text>
                        <text className="gear-text" textAnchor="middle" fontSize="13" dy="16" fill="#FDB913">INTELLIGENCE</text>
                    </g>

                    {/* DEV */}
                    <g transform="translate(428, 592)">
                        <g ref={spinDev}>
                            <circle r="90" fill="#1A1A1A" />
                            {[...Array(14)].map((_, i) => (
                                <g key={i} transform={`rotate(${i * 25.7}) translate(0,-90)`}>
                                    <use href="#tooth-v23" fill="#1A1A1A" />
                                </g>
                            ))}
                        </g>
                        <circle r="65" fill="white" stroke="#1A1A1A" strokeWidth="4" />
                        <text className="gear-text" textAnchor="middle" fontSize="28" dy="-10" fill="#1A1A1A">{"</>"}</text>
                        <text className="gear-text" textAnchor="middle" fontSize="11" dy="15" fill="#1A1A1A">DEVELOPMENT</text>
                    </g>
                </g>
            </svg>

            <style jsx>{`
        .gear-text {
          font-family: 'Sora', sans-serif;
          font-weight: 800;
          text-transform: uppercase;
          pointer-events: none;
        }
      `}</style>
        </div >
    );
};
