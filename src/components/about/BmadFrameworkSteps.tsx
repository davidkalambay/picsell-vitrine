"use client";

import React, { useState } from "react";
import { SplitTextReveal } from "@/components/animations/SplitTextReveal";

const BMAD_STEPS = [
  {
    step: "01",
    phase: "Démontage & Audit Micrométrique",
    timeframe: "Jour 1 à 7",
    color: "#f37021",
    description:
      "Nous disséquons l'ensemble de votre écosystème numérique : fuites de conversion, goulots d'étranglement de performance, dettes techniques accumulées et silos de données.",
    deliverables: [
      "Audit d'architecture logicielle & sécurité",
      "Cartographie des processus automatisables",
      "Rapport d'attribution cookieless & CAC",
      "Matrice de rentabilité d'investissement",
    ],
  },
  {
    step: "02",
    phase: "Conception & Calibrage de Précision",
    timeframe: "Semaine 2 à 3",
    color: "#3dbcc7",
    description:
      "Nous traçons les plans d'ingénierie (Blueprints) : choix de la stack moderne (Next.js, Tailwind, TypeScript), modélisation des flux n8n et rédaction des spécifications UX horlogères.",
    deliverables: [
      "Schémas d'architecture sans dette",
      "Wireframes haute fidélité & charte de marque",
      "Contrats d'API & modèles de données",
      "Planning d'assemblage jalonné",
    ],
  },
  {
    step: "03",
    phase: "Assemblage en Chambre d'Épreuve",
    timeframe: "Semaine 4 à 7",
    color: "#0089d0",
    description:
      "Développement itératif sous pipelines d'intégration continue stricts. Chaque ligne de code subit une batterie de tests unitaires, d'intégration et de stress thermique avant mise en production.",
    deliverables: [
      "100% de tests automatisés validés",
      "Score Google Core Web Vitals 95+",
      "Intégration passerelles de paiement & CRM",
      "Audit d'accessibilité WCAG 2.1 AA",
    ],
  },
  {
    step: "04",
    phase: "Remontage Perpétuel & Télémétrie",
    timeframe: "Production & Croissance",
    color: "#fdb913",
    description:
      "Votre système tourne en autonomie. Nos sondes télémétriques surveillent les temps de réponse en continu tandis que nous optimisons les performances commerciales en direct.",
    deliverables: [
      "Cockpit de monitoring en temps réel",
      "Garantie de disponibilité SLA 99.9%",
      "Itérations marketing & A/B testing",
      "Séquestre Upwork & support dédié",
    ],
  },
];

export function BmadFrameworkSteps() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="py-24 md:py-36 px-6 bg-[#040507] text-white border-t border-white/5 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-[#0089d0] mb-4">
            <span>MÉTHODOLOGIE D&apos;INGÉNIERIE BMAD</span>
          </div>
          <SplitTextReveal
            as="h2"
            trigger="scroll"
            stagger={0.03}
            duration={0.6}
            flavor="clockwork"
            className="text-3xl md:text-5xl font-black tracking-tight mb-6 leading-tight font-sora"
          >
            Le Protocole d&apos;Épreuve en 4 Temps
          </SplitTextReveal>
          <p className="text-slate-400 text-base md:text-lg leading-relaxed">
            Comme une montre de haute manufacture éprouvée dans les conditions les plus extrêmes, chaque projet suit un protocole de fabrication non négociable.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {BMAD_STEPS.map((stepItem, idx) => {
            const isSelected = activeStep === idx;
            return (
              <button
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={`p-6 rounded-2xl text-left transition-all border relative overflow-hidden flex flex-col justify-between ${
                  isSelected
                    ? "bg-white/[0.04] border-white/30 shadow-[0_0_30px_rgba(255,255,255,0.05)]"
                    : "bg-white/[0.01] border-white/5 hover:border-white/15 opacity-75 hover:opacity-100"
                }`}
              >
                {/* Step indicator */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className="font-mono text-2xl font-black"
                      style={{ color: stepItem.color }}
                    >
                      {stepItem.step}
                    </span>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-400">
                      {stepItem.timeframe}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold font-sora text-white mb-2 leading-snug">
                    {stepItem.phase}
                  </h3>
                </div>

                <div className="pt-4 border-t border-white/5 mt-4">
                  <span className="text-xs font-mono text-slate-400">
                    {isSelected ? "● Affichage actif" : "○ Cliquer pour inspecter"}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Detailed Focus Card on Active Step */}
        <div className="p-8 md:p-12 rounded-3xl bg-white/[0.02] border border-white/10 relative overflow-hidden backdrop-blur-md">
          <div
            className="absolute top-0 right-0 w-80 h-80 blur-3xl opacity-10 pointer-events-none"
            style={{ backgroundColor: BMAD_STEPS[activeStep].color }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start relative z-10">
            <div className="lg:col-span-1">
              <span
                className="text-xs font-mono font-bold px-3 py-1 rounded-full border mb-4 inline-block"
                style={{
                  color: BMAD_STEPS[activeStep].color,
                  borderColor: `${BMAD_STEPS[activeStep].color}40`,
                  backgroundColor: `${BMAD_STEPS[activeStep].color}15`,
                }}
              >
                ÉTAPE {BMAD_STEPS[activeStep].step} &bull; {BMAD_STEPS[activeStep].timeframe}
              </span>
              <h3 className="text-2xl md:text-3xl font-black font-sora text-white mb-4">
                {BMAD_STEPS[activeStep].phase}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {BMAD_STEPS[activeStep].description}
              </p>
            </div>

            <div className="lg:col-span-2 bg-white/[0.02] p-6 md:p-8 rounded-2xl border border-white/5">
              <h4 className="text-xs font-mono uppercase tracking-widest text-[#fdb913] mb-4">
                Livrables Certifiés de l&apos;Étape :
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {BMAD_STEPS[activeStep].deliverables.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span
                      className="w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5"
                      style={{
                        backgroundColor: `${BMAD_STEPS[activeStep].color}20`,
                        color: BMAD_STEPS[activeStep].color,
                      }}
                    >
                      ✓
                    </span>
                    <span className="text-sm text-slate-300 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
