import React from "react";

/** FR20 + FR24 — Tagline hero et copy approuvée */
export function HeroTagline() {
  return (
    <header className="fixed top-[110px] left-0 right-0 z-20 flex flex-col items-center text-center px-6 pointer-events-none">
      <h1 className="font-heading font-bold text-pic-charcoal text-xl md:text-2xl tracking-tight m-0">
        Precision in every pixel
      </h1>
      <p className="font-sans text-pic-charcoal/80 text-sm md:text-base max-w-md mt-3 m-0 leading-relaxed">
        L&apos;image qui vend. Chaque pixel compte.
      </p>
    </header>
  );
}
