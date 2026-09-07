"use client";

import React from "react";
import { SplitTextReveal } from "@/components/animations/SplitTextReveal";

const TONE_PILLARS = [
  {
    title: "Direct & Confiant",
    subtitle: "L'autorité par la preuve",
    color: "#fdb913",
    description:
      "Nous parlons comme des ingénieurs et des stratèges chevronnés. Pas d'hésitation, pas de faux-fuyants. Chaque promesse est mesurée, quantifiée et garantie.",
    example: "✓ 'Nous concevons des architectures sous les 100ms avec zéro dette technique.'",
  },
  {
    title: "Zéro Jargon Creux",
    subtitle: "La clarté radicale",
    color: "#0089d0",
    description:
      "Nous bannissons les buzzwords vides ('disruptif', 'synergie 360', 'ubérisation'). Nous employons les termes exacts : coût d'acquisition, ROAS, Core Web Vitals, webhooks.",
    example: "✓ 'Notre assistant IA WhatsApp qualifie vos prospects et réserve directement les créneaux.'",
  },
  {
    title: "Métaphore Horlogère Assumée",
    subtitle: "L'analogie de la haute manufacture",
    color: "#3dbcc7",
    description:
      "L'horlogerie incarne la précision mécanique, l'assemblage de pièces solidaires et le mouvement perpétuel de valeur pour nos clients.",
    example: "✓ 'Un seul moteur. Quatre expertises assemblées avec la précision d'un calibre suisse.'",
  },
  {
    title: "Orienté Vente & Décision",
    subtitle: "L'image qui vend",
    color: "#f37021",
    description:
      "La beauté sans résultat est une illusion. Chaque mot, chaque composant et chaque choix technique est justifié par son impact sur la conversion et le chiffre d'affaires.",
    example: "✓ 'L'image n'est pas de la décoration. L'image, c'est de la vente.'",
  },
];

export function VoiceAndToneSection() {
  return (
    <section className="py-24 md:py-36 px-6 bg-[#06070a] text-white relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-[#fdb913] mb-4">
            <span>VOIX, TONALITÉ &amp; COPYWRITING</span>
          </div>
          <SplitTextReveal
            as="h2"
            trigger="scroll"
            stagger={0.03}
            duration={0.6}
            flavor="clockwork"
            className="text-3xl md:text-5xl font-black tracking-tight mb-6 leading-tight font-sora"
          >
            La Posture Éditoriale de la Marque
          </SplitTextReveal>
          <p className="text-slate-400 text-base md:text-lg leading-relaxed">
            Comment s&apos;exprime Picsell Agency : les 4 règles d&apos;or de notre communication officielle.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {TONE_PILLARS.map((pillar, idx) => (
            <div
              key={idx}
              className="p-8 md:p-10 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-white/25 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span
                    className="font-mono text-xs font-bold px-3 py-1 rounded-full border"
                    style={{
                      color: pillar.color,
                      borderColor: `${pillar.color}40`,
                      backgroundColor: `${pillar.color}15`,
                    }}
                  >
                    RÈGLE 0{idx + 1}
                  </span>
                  <span className="text-xs font-mono text-slate-500">{pillar.subtitle}</span>
                </div>

                <h3 className="text-2xl font-bold font-sora text-white mb-3">
                  {pillar.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-6">
                  {pillar.description}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.03] border-l-2 border-[#fdb913] text-xs font-mono text-slate-200">
                {pillar.example}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
