"use client";

import React from "react";
import { SplitTextReveal } from "@/components/animations/SplitTextReveal";

const HUBS = [
  {
    city: "Kinshasa, RDC",
    role: "Quartier Général & Atelier d'Ingénierie",
    coords: "4.3224° S, 15.3070° E",
    status: "Actif / Production",
    color: "#fdb913",
  },
  {
    city: "Paris & Bruxelles",
    role: "Relais Stratégique & Cadrage Grands Comptes",
    coords: "48.8566° N, 2.3522° E",
    status: "Synchronisé",
    color: "#3dbcc7",
  },
  {
    city: "Montréal & Québec",
    role: "Partenariats Technologiques & Cloud",
    coords: "45.5017° N, 73.5673° W",
    status: "Synchronisé",
    color: "#0089d0",
  },
  {
    city: "Réseau Upwork Global",
    role: "Séquestre Garanti & Projets Internationaux",
    coords: "Escrow Tiers de Confiance",
    status: "Protection 100%",
    color: "#f37021",
  },
];

export function KinshasaDiasporaMap() {
  return (
    <section className="py-24 px-6 bg-[#040507] text-white border-t border-b border-white/5 relative overflow-hidden">
      {/* Blueprint grid subtle effect */}
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-[#3dbcc7] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#3dbcc7] animate-ping" />
            <span>COUVERTURE MULTIZONE & ANCRAGE SOUVERAIN</span>
          </div>
          <SplitTextReveal
            as="h2"
            trigger="scroll"
            stagger={0.03}
            duration={0.6}
            flavor="clockwork"
            className="text-3xl md:text-5xl font-black tracking-tight mb-6 leading-tight font-sora"
          >
            Nés à Kinshasa. Déployés à l&apos;Échelle Mondiale.
          </SplitTextReveal>
          <p className="text-slate-400 text-base md:text-lg leading-relaxed">
            Nous combinons la créativité vive et la résilience de l&apos;écosystème tech congolais avec l&apos;exigence stricte des standards d&apos;ingénierie de la diaspora internationale.
          </p>
        </div>

        {/* Hubs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {HUBS.map((hub, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all group backdrop-blur-md relative"
            >
              <div
                className="w-2.5 h-2.5 rounded-full mb-4 shadow-lg"
                style={{ backgroundColor: hub.color, boxShadow: `0 0 10px ${hub.color}` }}
              />
              <h3 className="text-xl font-bold font-sora text-white mb-1 group-hover:text-[#fdb913] transition-colors">
                {hub.city}
              </h3>
              <p className="text-xs font-mono text-slate-400 mb-3">{hub.role}</p>
              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-mono">
                <span className="text-slate-500">{hub.coords}</span>
                <span className="text-emerald-400 font-semibold">{hub.status}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
