"use client";

import React from "react";
import { SplitTextReveal } from "@/components/animations/SplitTextReveal";

const MANIFESTO_PILLARS = [
  {
    id: "balancier",
    index: "01",
    horologyName: "Le Balancier-Spiral",
    digitalDiscipline: "Architecture & Code Propre",
    color: "#0089d0",
    glowColor: "rgba(0,137,208,0.15)",
    tagline: "Le cœur oscillant régulant chaque battement du système",
    description:
      "Sans une architecture solide et imperturbable, toute accélération mène à la dérive. Nous bâtissons sur Next.js App Router, TypeScript strict et Cloudflare Edge pour garantir une stabilité à toute épreuve, sans dette technique cachée.",
    metrics: ["0 Dette Technique", "Type-safety stricte", "P99 < 100ms"],
  },
  {
    id: "echappement",
    index: "02",
    horologyName: "L'Échappement à Ancre",
    digitalDiscipline: "Marketing de Précision & Acquisition",
    color: "#f37021",
    glowColor: "rgba(243,112,33,0.15)",
    tagline: "La distribution millimétrée de l'énergie vers les marchés cibles",
    description:
      "Le trafic sans conversion n'est qu'une dispersion d'énergie. Notre approche marketing libère la bonne impulsion au bon moment via des tunnels de vente cookieless, du scrollytelling émotionnel et une personnalisation temps réel.",
    metrics: ["Attribution Cookieless", "Taux de transfo. x2.4", "CAC optimisé"],
  },
  {
    id: "rouages",
    index: "03",
    horologyName: "Les Rouages Intermédiaires",
    digitalDiscipline: "Automatisation IA & Orchestration",
    color: "#3dbcc7",
    glowColor: "rgba(61,188,199,0.15)",
    tagline: "La transmission sans perte entre vos opérations et vos clients",
    description:
      "Les frictions humaines répétitives freinent votre vélocité. Nous synchronisons vos CRM, ERP, passerelles de paiement et pipelines IA via des orchestrations n8n et webhooks sécurisés pour une exécution 24/7/365 sans faillir.",
    metrics: ["Orchestration n8n", "Zéro ressaisie manuelle", "Auto-healing"],
  },
  {
    id: "barillet",
    index: "04",
    horologyName: "Le Barillet & Ressort",
    digitalDiscipline: "Cockpit Data & Réserve de Marche",
    color: "#fdb913",
    glowColor: "rgba(253,185,19,0.15)",
    tagline: "L'accumulation d'énergie stratégique et la vision du futur",
    description:
      "Une entreprise aveugle s'arrête dès que le marché vacille. Nos cockpits data personnalisés unifient vos KPIs en direct pour vous donner la réserve de marche et la visibilité prédictive indispensables aux décisions de direction.",
    metrics: ["Télémétrie en direct", "Modèles prédictifs", "Gouvernance RGPD"],
  },
];

export function HorologicalManifesto() {
  return (
    <section id="manifeste-calibre" className="py-24 md:py-36 px-6 bg-[#06070a] text-white relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-[#fdb913] mb-4">
            <span>CALIBRE DE PRÉCISION P-01</span>
          </div>
          <SplitTextReveal
            as="h2"
            trigger="scroll"
            stagger={0.03}
            duration={0.6}
            flavor="clockwork"
            className="text-3xl md:text-5xl font-black tracking-tight mb-6 leading-tight font-sora"
          >
            Le Manifeste du Calibre Numérique
          </SplitTextReveal>
          <p className="text-slate-400 text-base md:text-lg leading-relaxed">
            Pourquoi avoir choisi la haute horlogerie comme étalon de nos réalisations ? Parce qu&apos;une ligne de code instable ou un entonnoir marketing mal ajusté agit exactement comme un grain de sable dans un rouage d&apos;échappement.
          </p>
        </div>

        {/* 4 Horological Pillars Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {MANIFESTO_PILLARS.map((pillar) => (
            <div
              key={pillar.id}
              className="p-8 md:p-10 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all duration-300 relative group overflow-hidden flex flex-col justify-between"
              style={{
                boxShadow: `0 0 40px ${pillar.glowColor}`,
              }}
            >
              {/* Corner Glow */}
              <div
                className="absolute top-0 right-0 w-32 h-32 blur-3xl opacity-20 group-hover:opacity-40 transition-opacity pointer-events-none"
                style={{ backgroundColor: pillar.color }}
              />

              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between mb-6">
                  <span
                    className="font-mono text-sm font-bold px-3 py-1 rounded-md border"
                    style={{
                      color: pillar.color,
                      borderColor: `${pillar.color}40`,
                      backgroundColor: `${pillar.color}15`,
                    }}
                  >
                    ORGANE {pillar.index}
                  </span>
                  <span className="text-xs font-mono text-slate-500 uppercase">Picsell Calibre Standard</span>
                </div>

                {/* Names */}
                <h3 className="text-2xl font-bold font-sora text-white mb-1 group-hover:text-[#fdb913] transition-colors">
                  {pillar.horologyName}
                </h3>
                <p className="text-sm font-mono text-slate-400 mb-4 font-semibold" style={{ color: pillar.color }}>
                  {pillar.digitalDiscipline}
                </p>

                {/* Tagline & Description */}
                <p className="text-sm font-medium text-slate-200 mb-4 italic">
                  &ldquo;{pillar.tagline}&rdquo;
                </p>
                <p className="text-sm text-slate-400 leading-relaxed mb-8">
                  {pillar.description}
                </p>
              </div>

              {/* Metrics Footer */}
              <div className="pt-6 border-t border-white/10 flex flex-wrap gap-2">
                {pillar.metrics.map((metric, i) => (
                  <span
                    key={i}
                    className="text-xs font-mono px-2.5 py-1 rounded bg-white/[0.04] text-slate-300 border border-white/5"
                  >
                    &bull; {metric}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
