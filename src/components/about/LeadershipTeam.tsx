"use client";

import React from "react";
import { SplitTextReveal } from "@/components/animations/SplitTextReveal";
import { MagneticButton } from "@/components/interactions/MagneticButton";

const LEADERS = [
  {
    name: "David Kalambay",
    role: "CEO & Architecte Logiciel / IA",
    title: "Maître-Horloger des Systèmes & Automatisation",
    bio: "Ingénieur logiciel et architecte système passionné par la haute performance. David conçoit des architectures cloud résilientes (Next.js, Edge compute, n8n) et infuse l'intelligence artificielle générative dans les processus métiers pour éliminer la dette technique et automatiser la croissance.",
    quote: "Un système bien conçu ne doit pas simplement fonctionner : il doit délivrer de la valeur prévisible, sans nécessiter d'intervention humaine permanente.",
    skills: ["Architecture Next.js", "Modélisation IA & n8n", "Systèmes Distribués", "Performance Web (Core Web Vitals)"],
    badge: "Architecte Principal",
    badgeColor: "#fdb913",
  },
  {
    name: "Jean-Luc Mukendi",
    role: "Co-fondateur & Dir. Stratégie & Croissance",
    title: "Ingénieur d'Affaires & Stratégie Cookieless",
    bio: "Spécialiste de la monétisation numérique, du cadrage de valeur et de l'acquisition ciblée. Jean-Luc pilote les stratégies de rentabilité des actifs clients, l'optimisation des tunnels de conversion et la gouvernance d'affaires pour transformer chaque investissement technique en retour sur capital mesurable.",
    quote: "La technologie n'a de valeur que si elle sert un moteur économique implacable. Nous alignons l'ingénierie sur vos objectifs de chiffre d'affaires réels.",
    skills: ["Cadrage de Valeur", "Growth & Tunnels Cookieless", "Négociation & Escrow", "Stratégie Grands Comptes"],
    badge: "Directeur Stratégie",
    badgeColor: "#3dbcc7",
  },
];

export function LeadershipTeam() {
  return (
    <section id="leadership" className="py-24 md:py-36 px-6 bg-[#06070a] text-white relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-[#fdb913] mb-4">
            <span>LEADERSHIP & GUILDE TECHNIQUE</span>
          </div>
          <SplitTextReveal
            as="h2"
            trigger="scroll"
            stagger={0.03}
            duration={0.6}
            flavor="clockwork"
            className="text-3xl md:text-5xl font-black tracking-tight mb-6 leading-tight font-sora"
          >
            Les Maîtres-Horlogers de Picsell Agency
          </SplitTextReveal>
          <p className="text-slate-400 text-base md:text-lg leading-relaxed">
            Une direction bicéphale alliant rigueur d&apos;ingénierie logicielle pure et acuité stratégique de croissance commerciale.
          </p>
        </div>

        {/* Leaders Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {LEADERS.map((leader, index) => (
            <div
              key={index}
              className="p-8 md:p-10 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all duration-300 relative group overflow-hidden flex flex-col justify-between"
              style={{
                boxShadow: `0 0 50px rgba(0,0,0,0.5)`,
              }}
            >
              {/* Top Accent Line */}
              <div
                className="absolute top-0 left-0 right-0 h-1"
                style={{
                  background: `linear-gradient(90deg, transparent, ${leader.badgeColor}, transparent)`,
                }}
              />

              <div>
                <div className="flex items-center justify-between mb-6">
                  <span
                    className="font-mono text-xs font-bold px-3 py-1 rounded-full border"
                    style={{
                      color: leader.badgeColor,
                      borderColor: `${leader.badgeColor}40`,
                      backgroundColor: `${leader.badgeColor}15`,
                    }}
                  >
                    {leader.badge}
                  </span>
                  <span className="text-xs font-mono text-slate-500">Picsell Core Governance</span>
                </div>

                <h3 className="text-3xl font-black font-sora text-white mb-1 group-hover:text-[#fdb913] transition-colors">
                  {leader.name}
                </h3>
                <p className="text-sm font-mono text-slate-300 font-semibold mb-4" style={{ color: leader.badgeColor }}>
                  {leader.role} &bull; {leader.title}
                </p>

                <p className="text-sm text-slate-400 leading-relaxed mb-6">
                  {leader.bio}
                </p>

                {/* Quote Box */}
                <blockquote className="p-4 rounded-xl bg-white/[0.03] border-l-2 border-[#fdb913] text-xs text-slate-300 italic mb-8">
                  &ldquo;{leader.quote}&rdquo;
                </blockquote>
              </div>

              {/* Skills and Specialties */}
              <div className="pt-6 border-t border-white/10">
                <p className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">Domaines de Maîtrise :</p>
                <div className="flex flex-wrap gap-2">
                  {leader.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="text-xs font-mono px-3 py-1 rounded-full bg-white/[0.04] text-slate-300 border border-white/5"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Global Action CTA */}
        <div className="text-center p-8 rounded-2xl bg-white/[0.02] border border-white/10 max-w-2xl mx-auto backdrop-blur-sm">
          <p className="text-sm text-slate-300 mb-4 font-mono">
            Vous souhaitez échanger directement avec David ou Jean-Luc ?
          </p>
          <MagneticButton
            href="#footer-contact"
            strength={0.3}
            textStrength={0.15}
            className="px-8 py-3.5 rounded-full text-sm font-bold bg-[#fdb913] text-slate-950 hover:bg-[#e5a60e] hover:shadow-[0_0_25px_rgba(253,185,19,0.4)] transition-all shadow-md inline-block"
          >
            Réserver un entretien de cadrage stratégique →
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
