"use client";

import React from "react";
import { SplitTextReveal } from "@/components/animations/SplitTextReveal";

export function BrandStorySection() {
  return (
    <section id="storytelling-fondateur" className="py-24 md:py-36 px-6 bg-[#040507] text-white border-b border-white/5 relative overflow-hidden">
      {/* Background Decorative Grids */}
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-[#f37021] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#f37021] animate-pulse" />
            <span>GENÈSE & ADN DE MARQUE</span>
          </div>
          <SplitTextReveal
            as="h2"
            trigger="scroll"
            stagger={0.03}
            duration={0.6}
            flavor="clockwork"
            className="text-3xl md:text-5xl font-black tracking-tight mb-6 leading-tight font-sora"
          >
            L&apos;Image n&apos;est pas de la Décoration. L&apos;Image, c&apos;est de la Vente.
          </SplitTextReveal>
          <p className="text-slate-300 text-base md:text-lg leading-relaxed">
            Aujourd&apos;hui, votre client ne vous rencontre pas dans la rue. Il vous juge sur un écran en 3 secondes. Il décide d&apos;acheter ou de partir sur la base d&apos;une phrase, d&apos;une fraction de seconde, d&apos;un pixel.
          </p>
        </div>

        {/* PIC + SELL Dual Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {/* PIC Card */}
          <div className="p-8 md:p-12 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-[#3dbcc7]/40 transition-all duration-300 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#3dbcc7]/10 blur-3xl group-hover:bg-[#3dbcc7]/20 transition-all pointer-events-none" />
            <div className="flex items-baseline justify-between mb-6">
              <span className="text-5xl md:text-6xl font-black font-sora tracking-tighter text-[#3dbcc7]">
                PIC
              </span>
              <span className="font-mono text-xs text-slate-400 uppercase tracking-widest px-3 py-1 rounded bg-white/5 border border-white/10">
                Picture &bull; Se lit Pixel
              </span>
            </div>
            <h3 className="text-xl font-bold font-sora text-white mb-3">
              Picture &bull; L&apos;Image &bull; Se lit comme Pixel
            </h3>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-6">
              Vient de <strong>Picture</strong> (l&apos;image) et se lit comme <strong>Pixel</strong> (le plus petit élément irréductible d&apos;une image). Il incarne la haute ingénierie visuelle, la rigueur esthétique et la précision d&apos;assemblage au micromètre.
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-[#3dbcc7]">
              <span>&lt;/&gt; Précision d&apos;assemblage</span>
              <span>&bull;</span>
              <span>L&apos;unité fondamentale</span>
            </div>
          </div>

          {/* SELL Card */}
          <div className="p-8 md:p-12 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-[#f37021]/40 transition-all duration-300 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#f37021]/10 blur-3xl group-hover:bg-[#f37021]/20 transition-all pointer-events-none" />
            <div className="flex items-baseline justify-between mb-6">
              <span className="text-5xl md:text-6xl font-black font-sora tracking-tighter text-[#f37021]">
                SELL
              </span>
              <span className="font-mono text-xs text-slate-400 uppercase tracking-widest px-3 py-1 rounded bg-white/5 border border-white/10">
                Vendre &bull; Performance
              </span>
            </div>
            <h3 className="text-xl font-bold font-sora text-white mb-3">
              Sell &bull; Vendre &bull; La Décision d&apos;Achat
            </h3>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-6">
              Vendre. Convaincre. Convertir l&apos;attention d&apos;un visiteur en décision d&apos;achat mesurable. La contraction <strong>Picture + Sell</strong> donne <strong>Picsell</strong> : littéralement <em>l&apos;image qui vend</em>.
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-[#f37021]">
              <span>▲ Taux de conversion</span>
              <span>&bull;</span>
              <span>Impact mesurable sur le chiffre d&apos;affaires</span>
            </div>
          </div>
        </div>

        {/* Logo Anatomy & Fibonacci Geometry */}
        <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-b from-white/[0.03] to-white/[0.01] border border-white/10 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            {/* Chromatic Shutter Emblem */}
            <div className="flex flex-col items-center justify-center p-8 rounded-2xl bg-black/40 border border-white/5 relative">
              <div className="w-28 h-28 relative flex items-center justify-center mb-6">
                {/* 4 Quadrants Graphic */}
                <div className="absolute inset-0 rounded-full border border-white/10 animate-[spin_60s_linear_infinite]" />
                <div className="grid grid-cols-2 gap-1.5 w-20 h-20">
                  <div className="rounded-tl-2xl bg-[#3dbcc7] shadow-[0_0_15px_rgba(61,188,199,0.5)]" />
                  <div className="rounded-tr-2xl bg-[#0089d0] shadow-[0_0_15px_rgba(0,137,208,0.5)]" />
                  <div className="rounded-bl-2xl bg-white/20" />
                  <div className="rounded-br-2xl bg-[#f37021] shadow-[0_0_15px_rgba(243,112,33,0.5)]" />
                </div>
              </div>
              <span className="font-mono text-xs text-[#fdb913] tracking-widest uppercase">
                Emblème Calibre Picsell
              </span>
              <span className="text-[11px] font-mono text-slate-400 mt-1">
                Obturateur & Spirale de Fibonacci
              </span>
            </div>

            {/* Explanatory Content */}
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold font-sora text-white mb-4">
                La Géométrie du Mouvement Perpétuel
              </h3>
              <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-6">
                Le logo Picsell n&apos;est pas une simple lettre &ldquo;P&rdquo;. Il est construit sur les proportions sacrées de la <strong className="text-white">spirale de Fibonacci</strong> et la mécanique d&apos;un <strong className="text-white">obturateur photographique</strong>. Il symbolise la capacité à cadrer ce que les autres ne voient pas et à focaliser l&apos;énergie commerciale là où le ROI est maximal.
              </p>

              {/* 4 Brand Colors Palette Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-white/10">
                <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/5">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#0089d0]" />
                    <span className="text-xs font-mono font-bold text-white">#0089D0</span>
                  </div>
                  <span className="text-[11px] font-mono text-slate-400">Bleu Picsell (Structure)</span>
                </div>
                <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/5">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#3dbcc7]" />
                    <span className="text-xs font-mono font-bold text-white">#3DBCC7</span>
                  </div>
                  <span className="text-[11px] font-mono text-slate-400">Turquoise (Tech & IA)</span>
                </div>
                <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/5">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#f37021]" />
                    <span className="text-xs font-mono font-bold text-white">#F37021</span>
                  </div>
                  <span className="text-[11px] font-mono text-slate-400">Orange (Action & CTA)</span>
                </div>
                <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/5">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#fdb913]" />
                    <span className="text-xs font-mono font-bold text-white">#FDB913</span>
                  </div>
                  <span className="text-[11px] font-mono text-slate-400">Jaune Doré (Optimisme)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
