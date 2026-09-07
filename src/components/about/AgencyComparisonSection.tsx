"use client";

import React from "react";
import { SplitTextReveal } from "@/components/animations/SplitTextReveal";
import { MagneticButton } from "@/components/interactions/MagneticButton";

const COMPARISON_ROWS = [
  {
    topic: "Finalité & Mission",
    classicAgency: "Crée des campagnes éphémères et recommence chaque mois",
    picsellAgency: "Construit des systèmes logiciels & marketing autonomes qui vendent en continu",
  },
  {
    topic: "Modèle Économique",
    classicAgency: "Facturation au volume horaire (plus vous avez de problèmes, plus ils facturent)",
    picsellAgency: "Orientation résultat & jalons sécurisés par séquestre (Upwork Escrow)",
  },
  {
    topic: "Méthode d'Exécution",
    classicAgency: "Recettes standardisées et templates génériques répliqués",
    picsellAgency: "Ingénierie sur-mesure adaptée à la micro-niche et aux spécificités de votre marché",
  },
  {
    topic: "Métriques de Réussite",
    classicAgency: "Métriques de vanité : likes, impressions, clics non qualifiés",
    picsellAgency: "Métriques d'affaires : leads qualifiés, coût d'acquisition, taux de conversion, ROI net",
  },
  {
    topic: "Dette & Dépendance",
    classicAgency: "Opacité technique créant une dépendance perpétuelle",
    picsellAgency: "Code propre documenté, 0 dette technique, propriété intégrale de vos actifs",
  },
];

export function AgencyComparisonSection() {
  return (
    <section className="py-24 md:py-36 px-6 bg-[#06070a] text-white border-b border-white/5 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-[#3dbcc7] mb-4">
            <span>MATRICE DE POSITIONNEMENT</span>
          </div>
          <SplitTextReveal
            as="h2"
            trigger="scroll"
            stagger={0.03}
            duration={0.6}
            flavor="clockwork"
            className="text-3xl md:text-5xl font-black tracking-tight mb-6 leading-tight font-sora"
          >
            Ce Que Nous Sommes &bull; Et Ce Que Nous Refusons d&apos;Être
          </SplitTextReveal>
          <p className="text-slate-400 text-base md:text-lg leading-relaxed">
            Nous ne sommes pas une agence de publicité traditionnelle. Nous sommes un bureau d&apos;ingénierie et un accélérateur de vente qui élimine les approximations.
          </p>
        </div>

        {/* Comparison Matrix Table */}
        <div className="rounded-3xl border border-white/10 overflow-hidden bg-white/[0.01] backdrop-blur-md mb-12 shadow-2xl">
          {/* Table Header */}
          <div className="grid grid-cols-1 md:grid-cols-2 text-left border-b border-white/10 bg-white/[0.03]">
            <div className="p-6 md:p-8 border-b md:border-b-0 md:border-r border-white/10 flex items-center gap-3">
              <span className="w-7 h-7 rounded-full bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-400 font-bold text-sm">
                ✕
              </span>
              <div>
                <h3 className="font-sora font-bold text-lg text-slate-300">
                  Agence Marketing Classique
                </h3>
                <p className="text-xs font-mono text-slate-500">Volume & Décoration Éphémère</p>
              </div>
            </div>

            <div className="p-6 md:p-8 bg-gradient-to-r from-transparent to-[#fdb913]/[0.03] flex items-center gap-3">
              <span className="w-7 h-7 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-bold text-sm">
                ✓
              </span>
              <div>
                <h3 className="font-sora font-bold text-lg text-white flex items-center gap-2">
                  Picsell Agency
                  <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded bg-[#fdb913]/20 text-[#fdb913] border border-[#fdb913]/30">
                    Accélérateur de Vente
                  </span>
                </h3>
                <p className="text-xs font-mono text-[#3dbcc7]">Ingénierie, Systèmes & ROI Mesuré</p>
              </div>
            </div>
          </div>

          {/* Table Rows */}
          <div className="divide-y divide-white/5">
            {COMPARISON_ROWS.map((row, idx) => (
              <div key={idx} className="grid grid-cols-1 md:grid-cols-2 hover:bg-white/[0.02] transition-colors">
                {/* Classic Agency column */}
                <div className="p-6 md:p-8 border-b md:border-b-0 md:border-r border-white/10 text-slate-400 text-sm leading-relaxed flex flex-col justify-center">
                  <span className="text-[11px] font-mono text-slate-500 uppercase tracking-widest mb-1">
                    {row.topic}
                  </span>
                  <p className="line-through decoration-red-500/40 text-slate-400 font-medium">
                    {row.classicAgency}
                  </p>
                </div>

                {/* Picsell column */}
                <div className="p-6 md:p-8 text-white text-sm leading-relaxed bg-[#fdb913]/[0.01] flex flex-col justify-center">
                  <span className="text-[11px] font-mono text-[#3dbcc7] uppercase tracking-widest mb-1">
                    Le Standard Picsell
                  </span>
                  <p className="font-semibold text-slate-200">
                    {row.picsellAgency}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Closing Quote Banner */}
        <div className="p-8 md:p-10 rounded-2xl bg-gradient-to-r from-white/[0.03] via-white/[0.05] to-white/[0.03] border border-white/10 text-center max-w-4xl mx-auto">
          <p className="text-base md:text-xl font-sora font-semibold text-white mb-2">
            &ldquo;Vous avez la substance. Nous vous donnons la précision.&rdquo;
          </p>
          <p className="text-xs md:text-sm font-mono text-slate-400">
            &lt;/&gt; Precision in every pixel &bull; L&apos;image qui vend
          </p>
        </div>
      </div>
    </section>
  );
}
