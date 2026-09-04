"use client";

import React, { useRef, useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import { ScrollytellingSection } from "@/components/ScrollytellingSection";
import { SettingsDrawer } from "@/components/SettingsDrawer";
import { ContextualFloatingCTA } from "@/components/ContextualFloatingCTA";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap-config";
import { useSiteSettings } from "@/context/SettingsContext";

export default function Home() {
  const mainRef = useRef<HTMLElement>(null);
  const { settings } = useSiteSettings();
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Handle Forced Themes
  useEffect(() => {
    if (!mainRef.current) return;

    if (settings.themeMode === "force-dark") {
      setIsDarkMode(true);
      gsap.to(mainRef.current, { backgroundColor: "#06070a", duration: 0.4 });
    } else if (settings.themeMode === "force-light") {
      setIsDarkMode(false);
      gsap.to(mainRef.current, { backgroundColor: "#ffffff", duration: 0.4 });
    }
  }, [settings.themeMode]);

  useGSAP(() => {
    if (!mainRef.current || settings.themeMode !== "scroll-dynamic") return;

    // Day to Night smooth transition when scrolling into Scrollytelling Section
    const st = ScrollTrigger.create({
      trigger: "#scrollytelling-section",
      start: "top 70%",
      end: "bottom 30%",
      onEnter: () => {
        setIsDarkMode(true);
        gsap.to(mainRef.current, {
          backgroundColor: "#06070a",
          duration: 0.8,
          ease: "power2.out",
        });
      },
      onLeaveBack: () => {
        setIsDarkMode(false);
        gsap.to(mainRef.current, {
          backgroundColor: "#ffffff",
          duration: 0.8,
          ease: "power2.out",
        });
      },
    });

    return () => st.kill();
  }, { scope: mainRef, dependencies: [settings.themeMode] });

  return (
    <main
      ref={mainRef}
      className={`relative w-full min-h-screen transition-colors duration-700 ${
        isDarkMode ? "text-[#f4f4f6]" : "text-[var(--pic-charcoal,#1a1a1a)]"
      }`}
      style={{ backgroundColor: settings.themeMode === "force-dark" ? "#06070a" : "#ffffff" }}
    >
      <Navbar isDark={isDarkMode} />
      <SettingsDrawer />
      <ContextualFloatingCTA />

      {/* Hero Section (Daylight / Sunlit Mode) */}
      <section className="pt-36 pb-20 px-6 text-center max-w-4xl mx-auto relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/5 mb-6">
          <span className="w-2 h-2 rounded-full bg-[var(--pic-blue,#0089d0)] animate-pulse"></span>
          <p className="text-xs font-bold tracking-[0.14em] uppercase text-[var(--pic-blue,#0089d0)]">
            Agence digitale — Kinshasa, RDC
          </p>
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight mb-6 leading-[1.08] text-slate-900 font-sora">
          La précision, moteur de votre{" "}
          <span className="bg-gradient-to-r from-[var(--pic-blue,#0089d0)] via-[var(--pic-turquoise,#3dbcc7)] to-[var(--pic-orange,#f37021)] bg-clip-text text-transparent">
            croissance digitale.
          </span>
        </h1>

        <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto mb-8 leading-relaxed font-normal">
          Picsell Agency conçoit des systèmes marketing, techniques et data pilotés par l'IA, pensés pour les entreprises congolaises et le marché francophone.
        </p>

        {/* Technical Monospace Metadata HUD (Sally's Idea 09) */}
        {settings.extremeTypography && (
          <div className="mb-10 inline-flex flex-wrap items-center justify-center gap-2 sm:gap-4 px-4 py-1.5 rounded-full bg-slate-100 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 font-mono text-[10px] sm:text-[11px] tracking-widest text-slate-500 uppercase select-none">
            <span>SYS_ID // PICSELL_HQ</span>
            <span className="opacity-40">•</span>
            <span>GEO // KINSHASA (4.32°S 15.30°E)</span>
            <span className="opacity-40">•</span>
            <span className="text-[var(--pic-turquoise,#3dbcc7)] font-bold">PRECISION // 100%</span>
          </div>
        )}

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#scrollytelling-section"
            className="inline-flex items-center justify-center px-7 py-3.5 rounded-full text-sm font-bold bg-slate-900 text-white hover:bg-black hover:shadow-lg hover:-translate-y-0.5 transition-all"
          >
            Découvrir nos expertises ↓
          </a>
          <a
            href="#footer-contact"
            className="inline-flex items-center justify-center px-7 py-3.5 rounded-full text-sm font-bold border-2 border-slate-200 text-slate-900 hover:border-slate-900 hover:-translate-y-0.5 transition-all"
          >
            Nous écrire
          </a>
        </div>
      </section>

      {/* Scrollytelling Section (Immersive Midnight Mode) */}
      <ScrollytellingSection />

      {/* Closing Section (Deep Obsidian & Golden Accents) */}
      <section className="bg-gradient-to-b from-[#06070a] to-[#040406] text-[#f4f4f6] py-32 px-6 text-center border-t border-white/5 relative overflow-hidden">
        <div className="max-w-3xl mx-auto relative z-10">
          <div className="flex justify-center gap-2.5 mb-8">
            <span className="w-2.5 h-2.5 rounded-full bg-[var(--pic-orange,#f37021)] shadow-[0_0_12px_rgba(243,112,33,0.8)]"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-[var(--pic-turquoise,#3dbcc7)] shadow-[0_0_12px_rgba(61,188,199,0.8)]"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-white shadow-[0_0_12px_rgba(255,255,255,0.8)]"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-[var(--pic-blue,#0089d0)] shadow-[0_0_12px_rgba(0,137,208,0.8)]"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-[var(--pic-gold,#fdb913)] shadow-[0_0_12px_rgba(253,185,19,0.8)]"></span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-6 leading-tight font-sora">
            Un seul moteur. Quatre expertises. Une seule agence.
          </h2>
          <p className="text-base md:text-lg text-slate-400 mb-10 leading-relaxed max-w-xl mx-auto">
            Marketing, automatisation, développement et data — assemblés pour faire avancer votre entreprise avec une précision horlogère.
          </p>
          <a
            href="#footer-contact"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full text-sm font-bold bg-white text-slate-950 hover:bg-[var(--pic-gold,#fdb913)] hover:text-slate-950 hover:shadow-[0_0_25px_rgba(253,185,19,0.5)] hover:-translate-y-0.5 transition-all"
          >
            Démarrer un projet avec nous
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer id="footer-contact" className="bg-[#040406] text-slate-500 py-10 px-6 text-center border-t border-white/5">
        <div className="text-sm mb-2 text-slate-400 font-medium">contact@picsell.agency — Kinshasa, RDC</div>
        <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-slate-600 mt-3">
          © 2026 Picsell Agency — Precision in progress
        </div>
      </footer>
    </main>
  );
}
