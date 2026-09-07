"use client";

import React from "react";
import { SplitTextReveal } from "@/components/animations/SplitTextReveal";
import { MagneticButton } from "@/components/interactions/MagneticButton";
import { trackEvent } from "@/lib/analytics";

export function AboutHero() {
  return (
    <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 px-6 overflow-hidden bg-radial-vignette text-white border-b border-white/5">
      {/* Background Subtle Gear Watermark */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[900px] md:h-[900px] pointer-events-none opacity-[0.03] select-none"
        aria-hidden="true"
      >
        <svg viewBox="0 0 200 200" className="w-full h-full animate-[spin_120s_linear_infinite]">
          <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="2" fill="none" strokeDasharray="4 4" />
          <circle cx="100" cy="100" r="50" stroke="currentColor" strokeWidth="1" fill="none" />
          <path d="M100,10 L100,190 M10,100 L190,100 M36,36 L164,164 M36,164 L164,36" stroke="currentColor" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Origin Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-[#fdb913] mb-8 backdrop-blur-md shadow-[0_0_20px_rgba(253,185,19,0.15)]">
          <span className="w-2 h-2 rounded-full bg-[#fdb913] animate-pulse" />
          <span>ATELIER D&apos;HORLOGERIE LOGICIELLE &bull; KINSHASA &bull; DIASPORA</span>
        </div>

        {/* Main Title */}
        <SplitTextReveal
          as="h1"
          trigger="mount"
          stagger={0.03}
          duration={0.7}
          flavor="clockwork"
          className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tight mb-8 leading-[1.1] font-sora"
        >
          L&apos;art de la haute précision appliqué aux systèmes numériques.
        </SplitTextReveal>

        {/* Subtitle / Narrative */}
        <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-12 font-normal leading-relaxed">
          Chez <strong className="text-white font-semibold">Picsell Agency</strong>, nous concevons le marketing, le code, l&apos;automatisation et la data non pas comme des silos éphémères, mais comme les rouages solidaires d&apos;une montre à complication : <span className="text-[#fdb913]">chaque seconde de fonctionnement doit générer une valeur mesurable et pérenne</span>.
        </p>

        {/* Action CTAs */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <MagneticButton
            href="#manifeste-calibre"
            strength={0.3}
            textStrength={0.15}
            className="px-7 py-3.5 rounded-full text-sm font-bold bg-[#fdb913] text-slate-950 hover:bg-[#e5a60e] hover:shadow-[0_0_25px_rgba(253,185,19,0.4)] hover:-translate-y-0.5 transition-all shadow-lg"
            onClick={() => {
              trackEvent("cta_click", { target: "manifesto", location: "about_hero" });
            }}
          >
            Découvrir notre Manifeste ↓
          </MagneticButton>
          <MagneticButton
            href="#leadership"
            strength={0.3}
            textStrength={0.15}
            className="px-7 py-3.5 rounded-full text-sm font-bold border border-white/20 bg-white/[0.03] text-white hover:bg-white/[0.08] hover:border-white/40 hover:-translate-y-0.5 transition-all backdrop-blur-sm"
            onClick={() => {
              trackEvent("cta_click", { target: "leadership", location: "about_hero" });
            }}
          >
            Rencontrer l&apos;Équipe Dirigeante
          </MagneticButton>
        </div>

        {/* Precision Telemetry Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-8 border-t border-white/10 text-left">
          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 backdrop-blur-sm">
            <span className="text-2xl md:text-3xl font-mono font-bold text-[#fdb913] block">&lt; 100ms</span>
            <span className="text-xs text-slate-400 font-mono uppercase tracking-wider">Temps de Réponse P99</span>
          </div>
          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 backdrop-blur-sm">
            <span className="text-2xl md:text-3xl font-mono font-bold text-[#3dbcc7] block">99.9%</span>
            <span className="text-xs text-slate-400 font-mono uppercase tracking-wider">Disponibilité Systèmes</span>
          </div>
          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 backdrop-blur-sm">
            <span className="text-2xl md:text-3xl font-mono font-bold text-[#0089d0] block">0 Dette</span>
            <span className="text-xs text-slate-400 font-mono uppercase tracking-wider">Tolérance Legacy</span>
          </div>
          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 backdrop-blur-sm">
            <span className="text-2xl md:text-3xl font-mono font-bold text-[#f37021] block">100%</span>
            <span className="text-xs text-slate-400 font-mono uppercase tracking-wider">Couverture de Tests</span>
          </div>
        </div>
      </div>
    </section>
  );
}
