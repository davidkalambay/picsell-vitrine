"use client";

import React, { useState } from "react";
import { SplitTextReveal } from "@/components/animations/SplitTextReveal";

const TYPOGRAPHY_FAMILIES = [
  {
    name: "Sora",
    role: "Titres Majeurs & Rigueur Horlogère",
    weights: "Bold 700 / Black 800",
    sample: "Precision in every pixel",
    fontClass: "font-sora",
    color: "#fdb913",
  },
  {
    name: "Montserrat",
    role: "Titres H1 & Architecture de Marque",
    weights: "Bold 700",
    sample: "L'IMAGE QUI VEND.",
    fontClass: "font-sans",
    color: "#0089d0",
  },
  {
    name: "Geist Sans",
    role: "Corps de Texte & Lisibilité Maximale",
    weights: "Regular 400 / Medium 500",
    sample: "L'ingénierie visuelle et la performance commerciale assemblées dans un mouvement perpétuel.",
    fontClass: "font-sans",
    color: "#3dbcc7",
  },
  {
    name: "Geist Mono",
    role: "Spécifications Techniques, Télémétrie & Code",
    weights: "Medium 500 / Bold 700",
    sample: "</> P99 < 100ms // 0_LEGACY_DEBT // SLA: 99.9%",
    fontClass: "font-mono",
    color: "#f37021",
  },
];

export function TypographySpecimenSection() {
  const [customText, setCustomText] = useState("");

  return (
    <section id="typographie" className="py-24 md:py-36 px-6 bg-[#040507] text-white border-b border-white/5 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-[#3dbcc7] mb-4">
            <span>SYSTÈME TYPOGRAPHIQUE OFFICIEL</span>
          </div>
          <SplitTextReveal
            as="h2"
            trigger="scroll"
            stagger={0.03}
            duration={0.6}
            flavor="clockwork"
            className="text-3xl md:text-5xl font-black tracking-tight mb-6 leading-tight font-sora"
          >
            Spécimens Typographiques Vivants
          </SplitTextReveal>
          <p className="text-slate-400 text-base md:text-lg leading-relaxed">
            La hiérarchie typographique structure le regard et reflète l&apos;exigence technique de l&apos;agence.
          </p>
        </div>

        {/* Interactive Custom Text Tester */}
        <div className="max-w-2xl mx-auto mb-16">
          <label htmlFor="custom-specimen-input" className="block text-xs font-mono text-slate-400 mb-2 uppercase tracking-wider text-center">
            Testeur de texte personnalisé :
          </label>
          <input
            id="custom-specimen-input"
            type="text"
            value={customText}
            onChange={(e) => setCustomText(e.target.value)}
            placeholder="Tapez une phrase pour la prévisualiser dans toutes les polices..."
            className="w-full px-6 py-4 rounded-2xl bg-white/[0.03] border border-white/15 focus:border-[#fdb913] text-white text-sm placeholder:text-slate-500 focus:outline-none transition-all shadow-inner backdrop-blur-md text-center"
          />
        </div>

        {/* Specimen Cards */}
        <div className="space-y-6">
          {TYPOGRAPHY_FAMILIES.map((font, idx) => (
            <div
              key={idx}
              className="p-8 md:p-10 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all group"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <span
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: font.color }}
                  />
                  <h3 className="text-2xl font-bold font-sora text-white">
                    {font.name}
                  </h3>
                </div>
                <div className="flex items-center gap-4 text-xs font-mono text-slate-400">
                  <span>{font.role}</span>
                  <span>&bull;</span>
                  <span className="text-slate-500">{font.weights}</span>
                </div>
              </div>

              {/* Sample Live Display */}
              <div className="py-4 overflow-x-auto">
                <p
                  className={`text-2xl md:text-4xl text-white ${font.fontClass} leading-relaxed transition-colors group-hover:text-[#fdb913]`}
                >
                  {customText || font.sample}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
