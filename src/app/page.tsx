"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import { ScrollytellingSection } from "@/components/ScrollytellingSection";

export default function Home() {
  return (
    <main className="relative w-full min-h-screen bg-[var(--bg-light,#f0f2f5)] text-[var(--pic-charcoal,#1a1a1a)]">
      <Navbar />

      {/* Hero Section */}
      <div className="pt-32 pb-12 px-6 text-center max-w-4xl mx-auto animate-fade-in-up">
        <p className="text-xs font-bold tracking-[0.14em] uppercase text-[var(--pic-blue,#0089d0)] mb-4">
          Agence digitale — Kinshasa, RDC
        </p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-[1.08]">
          La précision, moteur de votre croissance digitale.
        </h1>
        <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
          Picsell Agency conçoit des systèmes marketing, techniques et data pilotés par l'IA, pensés pour les entreprises congolaises et le marché francophone.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="#marketing" className="inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-semibold bg-[var(--pic-charcoal,#1a1a1a)] text-white hover:bg-black hover:-translate-y-0.5 transition-all">
            Découvrir nos expertises
          </a>
          <a href="#footer-contact" className="inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-semibold border-2 border-gray-300 text-[var(--pic-charcoal,#1a1a1a)] hover:border-[var(--pic-charcoal,#1a1a1a)] hover:-translate-y-0.5 transition-all">
            Nous écrire
          </a>
        </div>
      </div>

      <ScrollytellingSection />

      {/* Closing Section */}
      <section className="bg-[var(--bg-dark,#080810)] text-[#f4f4f6] py-28 px-6 text-center mt-10">
        <div className="max-w-3xl mx-auto">
          <div className="flex justify-center gap-2 mb-8">
            <span className="w-2.5 h-2.5 rounded-full bg-[var(--pic-orange,#f37021)]"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-[var(--pic-turquoise,#3dbcc7)]"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-white"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-[var(--pic-blue,#0089d0)]"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-[var(--pic-gold,#fdb913)]"></span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-5 leading-tight">
            Un seul moteur. Quatre expertises. Une seule agence.
          </h2>
          <p className="text-base md:text-lg text-[#c6c6cf] mb-8 leading-relaxed max-w-xl mx-auto">
            Marketing, automatisation, développement et data — assemblés pour faire avancer votre entreprise avec précision.
          </p>
          <a href="#footer-contact" className="inline-flex items-center justify-center px-7 py-3 rounded-full text-sm font-semibold bg-white text-[var(--pic-charcoal,#1a1a1a)] hover:bg-[var(--pic-gold,#fdb913)] hover:-translate-y-0.5 transition-all">
            Démarrer un projet
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer id="footer-contact" className="bg-[var(--bg-dark,#080810)] text-[#8d8d97] py-8 px-6 text-center border-t border-white/5">
        <div className="mb-2">[contact@picsell.agency] — Kinshasa, RDC</div>
        <div className="text-[10px] font-bold tracking-[0.14em] uppercase text-[#5c5c68] mt-2">
          © 2026 Picsell Agency — Precision in progress
        </div>
      </footer>
    </main>
  );
}
