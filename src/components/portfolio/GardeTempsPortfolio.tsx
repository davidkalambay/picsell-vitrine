"use client";

import React, { useState } from "react";
import { CASE_STUDIES } from "@/data/portfolioData";
import { SplitTextReveal } from "@/components/animations/SplitTextReveal";
import { MagneticButton } from "@/components/interactions/MagneticButton";
import {
  TrendingUp,
  Clock,
  ShieldCheck,
  Activity,
  Layers,
  CheckCircle2,
  Quote,
  ChevronRight,
  Code2,
} from "lucide-react";

export function GardeTempsPortfolio() {
  const [activeCaseId, setActiveCaseId] = useState<string>(CASE_STUDIES[0].id);
  const [expandedArchitecture, setExpandedArchitecture] = useState(false);

  const activeCase = CASE_STUDIES.find((c) => c.id === activeCaseId) || CASE_STUDIES[0];

  const getPillarIcon = (pillarId: string) => {
    switch (pillarId) {
      case "marketing":
        return <TrendingUp className="w-4 h-4 text-[var(--pic-orange,#f37021)]" />;
      case "automation":
        return <Clock className="w-4 h-4 text-[var(--pic-turquoise,#3dbcc7)]" />;
      case "development":
        return <ShieldCheck className="w-4 h-4 text-[var(--pic-blue,#0089d0)]" />;
      case "data":
        return <Activity className="w-4 h-4 text-[var(--pic-gold,#fdb913)]" />;
      default:
        return <Layers className="w-4 h-4 text-white" />;
    }
  };

  return (
    <section
      id="portfolio-garde-temps"
      className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#06070a] text-[#f4f4f6] border-t border-white/5 overflow-hidden"
    >
      {/* Blueprint Grid Watermark Background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-[var(--pic-gold,#fdb913)]/30 bg-[var(--pic-gold,#fdb913)]/10 font-mono text-[11px] uppercase tracking-widest text-[var(--pic-gold,#fdb913)] mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--pic-gold,#fdb913)] animate-pulse" />
            <span>PORTFOLIO GARDE-TEMPS // ÉTUDES DE CAS EMBLÉMATIQUES</span>
          </div>

          <SplitTextReveal
            as="h2"
            trigger="scroll"
            stagger={0.03}
            duration={0.7}
            flavor="clockwork"
            className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight font-sora mb-6 text-white"
          >
            La preuve par la mécanique.
          </SplitTextReveal>

          <p className="text-base sm:text-lg text-slate-400 font-normal leading-relaxed">
            Quatre complications horlogères appliquées à des défis d&apos;entreprise réels.
            Chaque projet est un mécanisme autonome conçu pour générer un retour sur investissement chiffré et pérenne.
          </p>
        </div>

        {/* 4 Complications Filter Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-12">
          {CASE_STUDIES.map((c) => {
            const isActive = c.id === activeCaseId;
            return (
              <button
                key={c.id}
                id={`btn-case-${c.id}`}
                onClick={() => {
                  setActiveCaseId(c.id);
                  setExpandedArchitecture(false);
                }}
                className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl font-mono text-xs tracking-wider transition-all duration-300 border ${
                  isActive
                    ? "bg-white/10 text-white border-white/30 shadow-[0_0_20px_rgba(255,255,255,0.1)] translate-y-[-1px]"
                    : "bg-white/[0.02] text-slate-400 border-white/5 hover:border-white/15 hover:text-white"
                }`}
              >
                {getPillarIcon(c.pillarId)}
                <span className="font-bold">{c.pillarName}</span>
                <span
                  className="text-[9px] px-1.5 py-0.5 rounded font-bold uppercase tracking-wider ml-1"
                  style={{
                    backgroundColor: isActive ? "rgba(255,255,255,0.15)" : "rgba(255,255,255,0.05)",
                    color: c.accentColor,
                  }}
                >
                  {c.badge}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Case Study Showcase (Midnight Luxury Card) */}
        <div className="relative rounded-3xl bg-[#0a0b12]/90 border border-white/10 p-6 sm:p-10 lg:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.6)] backdrop-blur-xl">
          {/* Subtle Ambient Accent Lamp */}
          <div
            className="absolute top-0 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-15 pointer-events-none transition-all duration-700"
            style={{ backgroundColor: activeCase.accentColor }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 relative z-10">
            {/* Left Column: Context, Challenge, Solution (7 Cols) */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                {/* Meta Header */}
                <div className="flex flex-wrap items-center gap-3 mb-4 font-mono text-[11px] uppercase tracking-wider text-slate-400">
                  <span
                    className="px-2.5 py-1 rounded-md font-bold text-white border border-white/10"
                    style={{ backgroundColor: "rgba(255,255,255,0.05)" }}
                  >
                    {activeCase.complication}
                  </span>
                  <span>•</span>
                  <span className="text-white font-semibold">{activeCase.client}</span>
                  <span>•</span>
                  <span>{activeCase.location}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black font-sora text-white mb-3 tracking-tight">
                  {activeCase.title}
                </h3>
                <p className="text-sm sm:text-base font-medium text-slate-300 mb-8 italic">
                  &ldquo;{activeCase.subtitle}&rdquo;
                </p>

                {/* Challenge & Solution Blocks */}
                <div className="space-y-6 mb-8">
                  <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.02] border border-white/5">
                    <div className="flex items-center gap-2 font-mono text-[10px] sm:text-[11px] uppercase tracking-widest text-rose-400 font-bold mb-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                      LE DÉFI STRATÉGIQUE INITIAL
                    </div>
                    <p className="text-sm text-slate-300 leading-relaxed font-normal">
                      {activeCase.challenge}
                    </p>
                  </div>

                  <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.02] border border-white/5">
                    <div className="flex items-center gap-2 font-mono text-[10px] sm:text-[11px] uppercase tracking-widest text-emerald-400 font-bold mb-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      LA SOLUTION D&apos;INGÉNIERIE DÉPLOYÉE
                    </div>
                    <p className="text-sm text-slate-300 leading-relaxed font-normal">
                      {activeCase.solution}
                    </p>
                  </div>
                </div>

                {/* Architecture Dropdown Toggle */}
                <div className="mb-6">
                  <button
                    id="btn-toggle-architecture"
                    onClick={() => setExpandedArchitecture(!expandedArchitecture)}
                    className="inline-flex items-center gap-2 font-mono text-xs text-[var(--pic-turquoise,#3dbcc7)] hover:underline cursor-pointer"
                  >
                    <Code2 className="w-3.5 h-3.5" />
                    <span>
                      {expandedArchitecture
                        ? "Masquer les détails d'architecture"
                        : "Inspecter les 4 piliers d'architecture déployée →"}
                    </span>
                  </button>

                  {expandedArchitecture && (
                    <div className="mt-4 p-4 rounded-xl bg-black/50 border border-white/10 font-mono text-xs space-y-2 animate-fadeIn">
                      <div className="text-slate-400 font-bold uppercase tracking-wider text-[10px] mb-2">
                        COMPOSANTS SYSTÈME // ARCHITECTURE STRICTE :
                      </div>
                      {activeCase.architecture.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Stack Badges */}
              <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-2 font-mono text-[11px]">
                <span className="text-slate-500 uppercase tracking-wider mr-2">STACK TECHNIQUE :</span>
                {activeCase.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/10 text-slate-300 font-semibold"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Column: Quantified ROI Dashboard Cards & Quote (5 Cols) */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
              {/* ROI Telemetry 4-Metric Grid (FR14) */}
              <div className="p-6 rounded-2xl bg-black/40 border border-white/10 shadow-inner">
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10 font-mono text-[11px] uppercase tracking-wider text-slate-400">
                  <span className="font-bold text-white flex items-center gap-2">
                    <TrendingUp className="w-3.5 h-3.5 text-[var(--pic-gold,#fdb913)]" />
                    TÉLÉMÉTRIE ROI CERTIFIÉE
                  </span>
                  <span className="text-emerald-400 font-bold text-[9px] bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                    AUDITÉ
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  {activeCase.metrics.map((metric, idx) => (
                    <div
                      key={idx}
                      className={`p-3.5 rounded-xl border flex flex-col justify-between transition-all ${
                        metric.isHighlight
                          ? "bg-white/[0.06] border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.05)]"
                          : "bg-white/[0.02] border-white/5"
                      }`}
                    >
                      <span className="font-mono text-[10px] text-slate-400 uppercase tracking-wider mb-1">
                        {metric.label}
                      </span>
                      <div className="font-sora text-2xl sm:text-3xl font-black tracking-tight mb-1 text-white">
                        <span
                          style={{
                            color: metric.isHighlight ? activeCase.accentColor : "white",
                          }}
                        >
                          {metric.value}
                        </span>
                      </div>
                      <span className="text-[11px] text-slate-400 font-normal">
                        {metric.subtext}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Client Testimonial Quote */}
              {activeCase.quote && (
                <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 relative">
                  <Quote className="w-6 h-6 text-white/10 absolute top-4 right-4 pointer-events-none" />
                  <p className="text-xs sm:text-sm text-slate-300 italic mb-3 leading-relaxed relative z-10">
                    &ldquo;{activeCase.quote.text}&rdquo;
                  </p>
                  <div className="font-mono text-[11px]">
                    <span className="text-white font-bold block">{activeCase.quote.author}</span>
                    <span className="text-slate-500">{activeCase.quote.role}</span>
                  </div>
                </div>
              )}

              {/* Call to action inside card */}
              <div className="pt-2">
                <MagneticButton
                  href="#roi-dashboard-showcase"
                  strength={0.25}
                  textStrength={0.12}
                  className="w-full py-3.5 px-6 rounded-xl font-mono text-xs uppercase font-bold tracking-wider text-center bg-white/10 hover:bg-white/20 text-white border border-white/15 transition-all flex items-center justify-center gap-2"
                >
                  <span>Simuler le ROI pour votre structure</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </MagneticButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
