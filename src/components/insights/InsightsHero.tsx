"use client";

import React from "react";
import { SplitTextReveal } from "@/components/animations/SplitTextReveal";

interface InsightsHeroProps {
  searchQuery: string;
  onSearchChange: (q: string) => void;
  selectedCategory: string;
  onSelectCategory: (cat: string) => void;
  categories: string[];
}

export function InsightsHero({
  searchQuery,
  onSearchChange,
  selectedCategory,
  onSelectCategory,
  categories,
}: InsightsHeroProps) {
  return (
    <section className="relative pt-36 pb-16 md:pt-44 md:pb-24 px-6 bg-radial-vignette text-white border-b border-white/5">
      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Origin Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-[#3dbcc7] mb-8 backdrop-blur-md shadow-[0_0_20px_rgba(61,188,199,0.15)]">
          <span className="w-2 h-2 rounded-full bg-[#3dbcc7] animate-pulse" />
          <span>BIBLIOTHÈQUE D&apos;INGÉNIERIE & DE STRATÉGIE COMMERCIALE</span>
        </div>

        {/* Main Title */}
        <SplitTextReveal
          as="h1"
          trigger="mount"
          stagger={0.03}
          duration={0.7}
          flavor="clockwork"
          className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tight mb-6 leading-[1.1] font-sora"
        >
          Insights, Systèmes & Décisions de Haute Précision.
        </SplitTextReveal>

        <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-12 font-normal leading-relaxed">
          Analyses approfondies, retours d&apos;expérience de production, patterns d&apos;architecture logicielle et méthodologies de croissance cookieless rédigés par l&apos;équipe d&apos;ingénierie de Picsell Agency.
        </p>

        {/* Search Input */}
        <div className="max-w-xl mx-auto mb-10 relative">
          <div className="relative flex items-center">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Rechercher par mot-clé (Next.js, n8n, scrollytelling, ROI, IA...)"
              className="w-full px-6 py-4 rounded-2xl bg-white/[0.03] border border-white/15 focus:border-[#fdb913] text-white text-sm placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#fdb913]/30 transition-all shadow-inner backdrop-blur-md"
              aria-label="Rechercher un article"
            />
            {searchQuery && (
              <button
                onClick={() => onSearchChange("")}
                className="absolute right-4 text-xs font-mono text-slate-400 hover:text-white px-2 py-1"
                aria-label="Effacer la recherche"
              >
                Effacer
              </button>
            )}
          </div>
        </div>

        {/* Category Pills Filter */}
        <div className="flex flex-wrap justify-center gap-2.5">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => onSelectCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-mono font-semibold transition-all border ${
                  isSelected
                    ? "bg-[#fdb913] text-slate-950 border-[#fdb913] shadow-[0_0_15px_rgba(253,185,19,0.3)]"
                    : "bg-white/[0.03] text-slate-300 border-white/10 hover:border-white/30 hover:bg-white/[0.06]"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
