"use client";

import React from "react";
import { Gears } from "@/components/Gears";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Home() {
  useGSAP(() => {
    // Entrance animations
    const tl = gsap.timeline();
    tl.fromTo(".hero-title",
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" }
    )
      .fromTo(".hero-content",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
        "-=0.5"
      );
  }, []);

  return (
    <main className="relative w-full h-screen overflow-hidden bg-white flex flex-col items-center justify-between pt-24 pb-8">

      {/* 1. Header Title */}
      <div className="z-10 px-4 text-center hero-title">
        <h1 className="font-sora font-extrabold text-[2.5rem] md:text-[4.5rem] lg:text-[5rem] text-[#1A1A1A] leading-[1.1] tracking-tight uppercase">
          SERVICES_<br />ENGINE
        </h1>
        <p className="font-sora text-[#666] text-lg md:text-xl font-medium mt-4">
          Driven by Intelligence.
        </p>
      </div>

      {/* 2. Gears (Flexible space) */}
      <div className="flex-1 w-full max-w-[1400px] flex items-center justify-center min-h-0 my-4 md:my-0">
        <div className="w-full h-full max-h-[55vh] md:max-h-[60vh] relative z-0">
          <Gears />
        </div>
      </div>

      {/* 3. Text & CTA */}
      <div className="z-10 flex flex-col items-center gap-6 md:gap-8 text-center hero-content px-6">
        <p className="font-sora text-[#1A1A1A] text-base md:text-xl font-medium max-w-3xl leading-relaxed">
          Picsell Agency est un accélérateur de croissance piloté par l&apos;Intelligence Artificielle. <br className="hidden md:block" />
          La puissance du pixel, la précision d&apos;un mouvement d&apos;horlogerie. <br className="hidden md:block" />
          <span className="font-bold text-[#0089D0] block mt-2">Prêt pour l&apos;ajustement final ?</span>
        </p>

        <a href="mailto:contact@picsell.agency"
          className="relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-sora font-bold text-white transition-all duration-300 bg-[#0089D0] rounded-full group hover:bg-[#0077B5] hover:scale-105 hover:shadow-[0_0_20px_rgba(0,137,208,0.4)]">
          <span className="relative">Start Project</span>
        </a>
      </div>

      {/* 4. Footer */}
      <div className="mt-4 font-quicksand text-[0.65rem] md:text-xs text-gray-400 tracking-[0.2em] uppercase opacity-60">
        picsell agency — precision in progress
      </div>

      <style jsx>{`
        ::selection {
          background: rgba(0, 137, 208, 0.2);
        }
      `}</style>
    </main>
  );
}
