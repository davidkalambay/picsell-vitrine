"use client";

import React, { useState, useMemo } from "react";
import { DataLiveCounter } from "@/components/DataLiveCounter";
import { SplitTextReveal } from "@/components/animations/SplitTextReveal";
import { MagneticButton } from "@/components/interactions/MagneticButton";
import {
  Sliders,
  Play,
  Pause,
  Gauge,
  Sparkles,
  TrendingUp,
  Clock,
  Maximize2,
  CheckCircle2,
  Cpu,
} from "lucide-react";

export function RoiDashboardShowcase() {
  // Simulator state
  const [monthlyBudget, setMonthlyBudget] = useState<number>(15000);
  const [monthlyDossiers, setMonthlyDossiers] = useState<number>(650);
  const [activeTab, setActiveTab] = useState<"simulator" | "cockpit" | "demo">("simulator");
  const [isPlayingDemo, setIsPlayingDemo] = useState<boolean>(true);

  // Dynamic ROI Calculations
  const calculatedMetrics = useMemo(() => {
    // Hours saved: ~0.35h per dossier automated
    const hoursSaved = Math.round(monthlyDossiers * 0.35);
    // Value created per year: (budget * 2.8 average uplift) + (hoursSaved * 25$/h * 12)
    const revenueUplift = Math.round(monthlyBudget * 12 * 0.38);
    const operationalSavings = Math.round(hoursSaved * 28 * 12);
    const totalAnnualValue = revenueUplift + operationalSavings;
    const efficiencyFactor = ((monthlyBudget * 1.8 + operationalSavings) / (monthlyBudget * 0.8 || 1)).toFixed(1);

    return {
      hoursSaved,
      totalAnnualValue,
      efficiencyFactor,
      paybackWeeks: Math.max(3, Math.round(18 - monthlyDossiers / 200)),
    };
  }, [monthlyBudget, monthlyDossiers]);

  return (
    <section
      id="roi-dashboard-showcase"
      className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#040508] text-[#f4f4f6] border-t border-white/5 overflow-hidden"
    >
      {/* Blueprint Grid Overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-15"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-[var(--pic-turquoise,#3dbcc7)]/30 bg-[var(--pic-turquoise,#3dbcc7)]/10 font-mono text-[11px] uppercase tracking-widest text-[var(--pic-turquoise,#3dbcc7)] mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--pic-turquoise,#3dbcc7)] animate-pulse" />
            <span>TÉLÉMÉTRIE ROI // SHOWCASE DU DASHBOARD DE PILOTAGE</span>
          </div>

          <SplitTextReveal
            as="h2"
            trigger="scroll"
            stagger={0.03}
            duration={0.7}
            flavor="clockwork"
            className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight font-sora mb-6 text-white"
          >
            Chaque seconde compte. Chaque dollar aussi.
          </SplitTextReveal>

          <p className="text-base sm:text-lg text-slate-400 font-normal leading-relaxed">
            Évaluez l&apos;impact concret de l&apos;ingénierie Picsell sur votre activité.
            Simulez votre rentabilité ou explorez le flux télémétrique temps réel de notre cockpit de pilotage.
          </p>
        </div>

        {/* Mode Switcher Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1 rounded-2xl bg-white/[0.03] border border-white/10 font-mono text-xs">
            <button
              id="tab-roi-simulator"
              onClick={() => setActiveTab("simulator")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold tracking-wider transition-all cursor-pointer ${
                activeTab === "simulator"
                  ? "bg-white text-slate-950 shadow-lg"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Sliders className="w-4 h-4" />
              <span>1. Simulateur ROI Prédictif</span>
            </button>
            <button
              id="tab-roi-cockpit"
              onClick={() => setActiveTab("cockpit")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold tracking-wider transition-all cursor-pointer ${
                activeTab === "cockpit"
                  ? "bg-white text-slate-950 shadow-lg"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Gauge className="w-4 h-4" />
              <span>2. Cockpit Télémétrie Live</span>
            </button>
            <button
              id="tab-roi-demo"
              onClick={() => setActiveTab("demo")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold tracking-wider transition-all cursor-pointer ${
                activeTab === "demo"
                  ? "bg-white text-slate-950 shadow-lg"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Play className="w-4 h-4" />
              <span>3. Démo Vidéo Interactive</span>
            </button>
          </div>
        </div>

        {/* TAB 1: INTERACTIVE ROI SIMULATOR */}
        {activeTab === "simulator" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Input Controls (5 Cols) */}
            <div className="lg:col-span-5 p-6 sm:p-8 rounded-3xl bg-[#090a10] border border-white/10 flex flex-col justify-between shadow-xl">
              <div>
                <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-slate-400 mb-6 pb-4 border-b border-white/10">
                  <Sliders className="w-4 h-4 text-[var(--pic-turquoise,#3dbcc7)]" />
                  <span className="text-white font-bold">PARAMÈTRES DE VOTRE STRUCTURE</span>
                </div>

                {/* Slider 1: Monthly Budget */}
                <div className="mb-8">
                  <div className="flex justify-between items-baseline mb-3">
                    <label
                      htmlFor="slider-budget"
                      className="font-mono text-xs text-slate-300 font-semibold"
                    >
                      Budget Marketing / Tech mensuel :
                    </label>
                    <span className="font-mono text-base font-bold text-[var(--pic-gold,#fdb913)]">
                      {monthlyBudget.toLocaleString("fr-FR")} $ / mois
                    </span>
                  </div>
                  <input
                    id="slider-budget"
                    type="range"
                    min="3000"
                    max="100000"
                    step="1000"
                    value={monthlyBudget}
                    onChange={(e) => setMonthlyBudget(Number(e.target.value))}
                    className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[var(--pic-gold,#fdb913)]"
                  />
                  <div className="flex justify-between text-[10px] font-mono text-slate-500 mt-2">
                    <span>3 000 $</span>
                    <span>50 000 $</span>
                    <span>100 000 $</span>
                  </div>
                </div>

                {/* Slider 2: Monthly Dossiers / Operations */}
                <div className="mb-8">
                  <div className="flex justify-between items-baseline mb-3">
                    <label
                      htmlFor="slider-dossiers"
                      className="font-mono text-xs text-slate-300 font-semibold"
                    >
                      Volume de dossiers / processus / mois :
                    </label>
                    <span className="font-mono text-base font-bold text-[var(--pic-turquoise,#3dbcc7)]">
                      {monthlyDossiers.toLocaleString("fr-FR")} opérations
                    </span>
                  </div>
                  <input
                    id="slider-dossiers"
                    type="range"
                    min="100"
                    max="5000"
                    step="50"
                    value={monthlyDossiers}
                    onChange={(e) => setMonthlyDossiers(Number(e.target.value))}
                    className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[var(--pic-turquoise,#3dbcc7)]"
                  />
                  <div className="flex justify-between text-[10px] font-mono text-slate-500 mt-2">
                    <span>100 dossiers</span>
                    <span>2 500</span>
                    <span>5 000 dossiers</span>
                  </div>
                </div>

                {/* Model Assumptions Note */}
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 font-mono text-[11px] text-slate-400 space-y-1.5">
                  <div className="text-white font-bold text-[10px] uppercase tracking-wider">
                    HYPOTHÈSES HORLOGÈRES CALCULÉES :
                  </div>
                  <div>• Gain moyen d&apos;efficacité automatisée : ~21 minutes par dossier</div>
                  <div>• Taux de conversion cookieless & CAPI : +38% de surplus de marge</div>
                  <div>• Coût moyen horaire administratif estimé : 28 $/heure</div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-white/10">
                <MagneticButton
                  href="#footer-contact"
                  strength={0.25}
                  textStrength={0.12}
                  className="w-full py-3.5 px-6 rounded-xl font-mono text-xs uppercase font-bold tracking-wider text-center bg-white text-slate-950 hover:bg-[var(--pic-gold,#fdb913)] transition-all flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Verrouiller cette estimation par audit</span>
                </MagneticButton>
              </div>
            </div>

            {/* Calculated Outcomes (7 Cols) */}
            <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-[#0a0b14] border border-white/10 flex flex-col justify-between shadow-xl relative overflow-hidden">
              <div
                className="absolute top-0 right-0 w-80 h-80 rounded-full blur-3xl opacity-10 pointer-events-none"
                style={{ backgroundColor: "var(--pic-gold,#fdb913)" }}
              />

              <div className="relative z-10">
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10 font-mono text-xs uppercase tracking-wider text-slate-400">
                  <span className="text-white font-bold flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-emerald-400" />
                    PROJECTION DU RETOUR SUR INVESTISSEMENT
                  </span>
                  <span className="text-emerald-400 font-bold bg-emerald-500/10 px-2.5 py-1 rounded border border-emerald-500/20 text-[10px]">
                    PAYBACK ESTIMÉ // {calculatedMetrics.paybackWeeks} SEMAINES
                  </span>
                </div>

                {/* Hero Metric: Total Annual Value Created */}
                <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-white/[0.06] to-white/[0.01] border border-white/15 mb-6">
                  <span className="font-mono text-xs text-slate-400 uppercase tracking-widest block mb-2">
                    VALEUR FINANCIÈRE BRUTE GÉNÉRÉE / AN
                  </span>
                  <div className="font-sora text-4xl sm:text-6xl font-black text-white tracking-tight flex items-baseline gap-2">
                    <span className="text-[var(--pic-gold,#fdb913)]">
                      +{calculatedMetrics.totalAnnualValue.toLocaleString("fr-FR")} $
                    </span>
                    <span className="text-xs font-mono text-slate-400 uppercase tracking-normal">
                      / an de gain net
                    </span>
                  </div>
                </div>

                {/* 3 Grid Pillars Metrics */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                  <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
                    <div className="flex items-center gap-1.5 font-mono text-[10px] text-slate-400 uppercase tracking-wider mb-2">
                      <Clock className="w-3.5 h-3.5 text-[var(--pic-turquoise,#3dbcc7)]" />
                      Temps économisé
                    </div>
                    <div className="font-sora text-2xl font-bold text-white mb-1">
                      {calculatedMetrics.hoursSaved} h
                    </div>
                    <span className="text-[11px] text-slate-400 block">
                      Par mois libérées pour vos équipes
                    </span>
                  </div>

                  <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
                    <div className="flex items-center gap-1.5 font-mono text-[10px] text-slate-400 uppercase tracking-wider mb-2">
                      <Cpu className="w-3.5 h-3.5 text-[var(--pic-blue,#0089d0)]" />
                      Efficacité globale
                    </div>
                    <div className="font-sora text-2xl font-bold text-white mb-1">
                      x{calculatedMetrics.efficiencyFactor}
                    </div>
                    <span className="text-[11px] text-slate-400 block">
                      Multiplicateur de rendement opérationnel
                    </span>
                  </div>

                  <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
                    <div className="flex items-center gap-1.5 font-mono text-[10px] text-slate-400 uppercase tracking-wider mb-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      Disponibilité SLA
                    </div>
                    <div className="font-sora text-2xl font-bold text-emerald-400 mb-1">
                      99.99%
                    </div>
                    <span className="text-[11px] text-slate-400 block">
                      Architecture Edge résiliente multi-zone
                    </span>
                  </div>
                </div>
              </div>

              {/* Data Live Counter Embedded */}
              <div className="relative z-10 pt-2">
                <DataLiveCounter isActive={true} />
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: LIVE TELEMETRY COCKPIT */}
        {activeTab === "cockpit" && (
          <div className="p-6 sm:p-10 rounded-3xl bg-[#08090f] border border-white/10 shadow-2xl">
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-white/10">
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_12px_#34d399]" />
                <h3 className="font-mono text-sm sm:text-base font-bold text-white tracking-wider">
                  FLUX TÉLÉMÉTRIQUE DU MOTEUR PICSELL // COCKPIT CENTRAL
                </h3>
              </div>
              <div className="flex items-center gap-3 font-mono text-xs text-slate-400">
                <span className="px-2.5 py-1 rounded bg-white/[0.05] border border-white/10">
                  NODE: CD-KIN-01
                </span>
                <span className="px-2.5 py-1 rounded bg-white/[0.05] border border-white/10">
                  LATENCE: 14ms
                </span>
              </div>
            </div>

            {/* Top Metrics Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                <span className="font-mono text-[10px] text-slate-400 uppercase block mb-1">
                  Événements / Seconde
                </span>
                <span className="font-sora text-2xl font-black text-white font-mono">
                  48 520
                </span>
              </div>
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                <span className="font-mono text-[10px] text-slate-400 uppercase block mb-1">
                  Taux de Réussite CAPI
                </span>
                <span className="font-sora text-2xl font-black text-emerald-400 font-mono">
                  99.98%
                </span>
              </div>
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                <span className="font-mono text-[10px] text-slate-400 uppercase block mb-1">
                  Queue n8n En Attente
                </span>
                <span className="font-sora text-2xl font-black text-[var(--pic-turquoise,#3dbcc7)] font-mono">
                  0 msgs
                </span>
              </div>
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                <span className="font-mono text-[10px] text-slate-400 uppercase block mb-1">
                  Inférence OCR Gemini
                </span>
                <span className="font-sora text-2xl font-black text-[var(--pic-gold,#fdb913)] font-mono">
                  182 ms
                </span>
              </div>
            </div>

            {/* Mock Live Pipeline Log Stream */}
            <div className="p-4 rounded-xl bg-black/60 border border-white/10 font-mono text-xs text-slate-300 space-y-2 mb-6 max-h-56 overflow-y-auto">
              <div className="flex items-center gap-2 text-emerald-400">
                <span className="text-slate-500">[14:02:18.421]</span>
                <span className="font-bold">✓ CAPI_EVENT_DISPATCHED</span>
                <span className="text-slate-400">-- cart_id=NG-9842 value=420.00$ status=200_OK</span>
              </div>
              <div className="flex items-center gap-2 text-[var(--pic-turquoise,#3dbcc7)]">
                <span className="text-slate-500">[14:02:19.012]</span>
                <span className="font-bold">⚡ N8N_WORKFLOW_TRIGGERED</span>
                <span className="text-slate-400">-- manifest_pdf_ocr payload_size=2.4MB routing=kolwezi_hub</span>
              </div>
              <div className="flex items-center gap-2 text-white">
                <span className="text-slate-500">[14:02:19.198]</span>
                <span className="font-bold">⚙ GEMINI_VISION_PARSED</span>
                <span className="text-slate-400">-- 44 items extracted with 99.8% confidence match</span>
              </div>
              <div className="flex items-center gap-2 text-[var(--pic-gold,#fdb913)]">
                <span className="text-slate-500">[14:02:19.450]</span>
                <span className="font-bold">📊 DUCKDB_TELEMETRY_AGGREGATED</span>
                <span className="text-slate-400">-- metrics updated in memory, latency delta -4ms</span>
              </div>
            </div>

            {/* Embedded Live Counter */}
            <DataLiveCounter isActive={true} />
          </div>
        )}

        {/* TAB 3: VIDEO DEMO & WALKTHROUGH (FR15) */}
        {activeTab === "demo" && (
          <div className="p-6 sm:p-10 rounded-3xl bg-[#090a12] border border-white/10 shadow-2xl relative">
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10 font-mono text-xs">
              <div className="flex items-center gap-2 text-white font-bold">
                <Play className="w-4 h-4 text-[var(--pic-gold,#fdb913)]" />
                <span>APERÇU DU COCKPIT CLIENT // WALKTHROUGH VIDÉO DU DASHBOARD</span>
              </div>
              <button
                id="btn-toggle-demo-play"
                onClick={() => setIsPlayingDemo(!isPlayingDemo)}
                className="flex items-center gap-1.5 px-3 py-1 rounded bg-white/10 text-slate-200 hover:text-white transition-all cursor-pointer"
              >
                {isPlayingDemo ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                <span>{isPlayingDemo ? "Pause" : "Lecture"}</span>
              </button>
            </div>

            {/* Simulated Dashboard Video Player Container */}
            <div className="relative aspect-video rounded-2xl bg-black border border-white/10 overflow-hidden flex flex-col justify-between p-6 sm:p-8">
              {/* Cockpit Top Bar */}
              <div className="flex items-center justify-between font-mono text-[11px] text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500" />
                  <span className="ml-2 font-bold text-white">Picsell ROI Dashboard v2.4</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-emerald-400 font-bold">LIVE STREAM // 60 FPS</span>
                  <Maximize2 className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Central Graphic Simulation */}
              <div className="flex flex-col items-center justify-center text-center my-auto">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border border-[var(--pic-gold,#fdb913)]/40 flex items-center justify-center mb-4 relative">
                  <div
                    className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full border border-[var(--pic-turquoise,#3dbcc7)]/60 ${
                      isPlayingDemo ? "animate-spin" : ""
                    }`}
                    style={{ animationDuration: "8s" }}
                  />
                  <Gauge className="w-8 h-8 text-[var(--pic-gold,#fdb913)] absolute" />
                </div>
                <h4 className="font-sora text-xl sm:text-2xl font-bold text-white mb-2">
                  Cockpit de Pilotage Centralisé
                </h4>
                <p className="font-mono text-xs text-slate-400 max-w-md">
                  Visualisez en continu vos 4 piliers d&apos;activité, vos flux de conversions et vos économies de temps calculées en millisecondes.
                </p>
              </div>

              {/* Cockpit Bottom Controls */}
              <div className="flex items-center justify-between pt-4 border-t border-white/10 font-mono text-xs text-slate-400">
                <span>PILIER ACTIF : MULTI-PILLARS ENGINE</span>
                <span className="text-[var(--pic-gold,#fdb913)]">SURVEILLANCE CONTINUE 24/7</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
