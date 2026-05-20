"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, registerGsapPlugins } from "@/lib/gsap-config";

/** Dentées par engrenage — vitesses relatives au scroll (interlock). */
const GEAR_TEETH = {
  ai: 18,
  marketing: 12,
  automation: 10,
  development: 14,
  data: 16,
} as const;

type HeroMechanicalEngineProps = {
  /** Élément dont la hauteur définit la distance de scroll (scrub). */
  scrollTrackRef: React.RefObject<HTMLElement | null>;
};

/**
 * Moteur d'engrenages SVG — rotation liée au scroll (GSAP ScrollTrigger).
 * FR1 — couleurs logo uniquement. Isolé dans src/components/animations/.
 */
export function HeroMechanicalEngine({ scrollTrackRef }: HeroMechanicalEngineProps) {
  const svgRef = useRef<SVGSVGElement>(null);

  useGSAP(
    () => {
      registerGsapPlugins();

      const track = scrollTrackRef.current;
      if (!track || !svgRef.current) return;

      const ctx = gsap.context(() => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: track,
            start: "top top",
            end: "bottom bottom",
            scrub: 1,
            invalidateOnRefresh: true,
          },
        });

        const baseTeeth = GEAR_TEETH.ai;
        const fullTurn = 360;

        tl.to(
          "#spin_ai",
          { rotation: fullTurn, transformOrigin: "50% 50%", ease: "none" },
          0
        );
        tl.to(
          "#spin_marketing",
          {
            rotation: -(baseTeeth / GEAR_TEETH.marketing) * fullTurn,
            transformOrigin: "50% 50%",
            ease: "none",
          },
          0
        );
        tl.to(
          "#spin_automation",
          {
            rotation: -(baseTeeth / GEAR_TEETH.automation) * fullTurn,
            transformOrigin: "50% 50%",
            ease: "none",
          },
          0
        );
        tl.to(
          "#spin_data",
          {
            rotation: -(baseTeeth / GEAR_TEETH.data) * fullTurn,
            transformOrigin: "50% 50%",
            ease: "none",
          },
          0
        );
        tl.to(
          "#spin_dev",
          {
            rotation: -(baseTeeth / GEAR_TEETH.development) * fullTurn,
            transformOrigin: "50% 50%",
            ease: "none",
          },
          0
        );
      }, svgRef);

      return () => ctx.revert();
    },
    { scope: svgRef }
  );

  return (
    <div className="relative w-full flex-1 flex justify-center items-center min-h-0">
      <svg
        ref={svgRef}
        viewBox="0 0 1200 900"
        xmlns="http://www.w3.org/2000/svg"
        className="w-[80%] h-[min(80vh,720px)] max-w-[1000px] overflow-visible"
        aria-hidden
      >
        <defs>
          <path id="tooth-v23" d="M-9,-12 L9,-12 L12,0 L-12,0 Z" />
        </defs>

        <g id="cluster">
          <g id="g_ai" transform="translate(600, 450)">
            <g id="spin_ai">
              <circle r="120" fill="var(--black)" />
              {Array.from({ length: GEAR_TEETH.ai }).map((_, i) => (
                <g key={i} transform={`rotate(${i * 20}) translate(0,-120)`}>
                  <use href="#tooth-v23" fill="var(--black)" />
                </g>
              ))}
            </g>
            <circle r="90" fill="white" stroke="var(--black)" strokeWidth="4" />
            <text className="gear-text" textAnchor="middle" fontSize="28" dy="10" fill="var(--black)">
              AI
            </text>
            <text className="gear-text" textAnchor="middle" fontSize="10" dy="25" fill="var(--black)">
              ENGINE
            </text>
          </g>

          <g id="g_marketing" transform="translate(438, 305)">
            <g id="spin_marketing">
              <circle r="85" fill="var(--orange)" />
              {Array.from({ length: GEAR_TEETH.marketing }).map((_, i) => (
                <g key={i} transform={`rotate(${i * 30 + 15}) translate(0,-85)`}>
                  <use href="#tooth-v23" fill="var(--orange)" />
                </g>
              ))}
            </g>
            <circle r="60" fill="white" stroke="var(--orange)" strokeWidth="4" />
            <text className="gear-text" textAnchor="middle" fontSize="12" dy="-5" fill="var(--orange)">
              DIGITAL
            </text>
            <text className="gear-text" textAnchor="middle" fontSize="14" dy="12" fill="var(--orange)">
              MARKETING
            </text>
          </g>

          <g id="g_automation" transform="translate(743, 307)">
            <g id="spin_automation">
              <circle r="70" fill="var(--cyan)" />
              {Array.from({ length: GEAR_TEETH.automation }).map((_, i) => (
                <g key={i} transform={`rotate(${i * 36}) translate(0,-70)`}>
                  <use href="#tooth-v23" fill="var(--cyan)" />
                </g>
              ))}
            </g>
            <circle r="50" fill="white" stroke="var(--cyan)" strokeWidth="4" />
            <text className="gear-text" textAnchor="middle" fontSize="11" dy="5" fill="var(--cyan)">
              AUTOMATION
            </text>
          </g>

          <g id="g_data" transform="translate(786, 591)">
            <g id="spin_data">
              <circle r="100" fill="var(--yellow)" />
              {Array.from({ length: GEAR_TEETH.data }).map((_, i) => (
                <g key={i} transform={`rotate(${i * 22.5 + 11.25}) translate(0,-100)`}>
                  <use href="#tooth-v23" fill="var(--yellow)" />
                </g>
              ))}
            </g>
            <circle r="75" fill="white" stroke="var(--yellow)" strokeWidth="4" />
            <text className="gear-text" textAnchor="middle" fontSize="13" dy="-2" fill="var(--yellow)">
              DATA
            </text>
            <text className="gear-text" textAnchor="middle" fontSize="13" dy="16" fill="var(--yellow)">
              INTELLIGENCE
            </text>
          </g>

          <g id="g_dev" transform="translate(428, 592)">
            <g id="spin_dev">
              <circle r="90" fill="var(--blue)" />
              {Array.from({ length: GEAR_TEETH.development }).map((_, i) => (
                <g key={i} transform={`rotate(${i * 25.7}) translate(0,-90)`}>
                  <use href="#tooth-v23" fill="var(--blue)" />
                </g>
              ))}
            </g>
            <circle r="65" fill="white" stroke="var(--blue)" strokeWidth="4" />
            <text className="gear-text" textAnchor="middle" fontSize="28" dy="-10" fill="var(--blue)">
              &lt;/&gt;
            </text>
            <text className="gear-text" textAnchor="middle" fontSize="11" dy="15" fill="var(--blue)">
              DEVELOPMENT
            </text>
          </g>
        </g>
      </svg>
    </div>
  );
}

export default HeroMechanicalEngine;
