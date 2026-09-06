"use client";

import React, { useRef, useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import { SettingsDrawer } from "@/components/SettingsDrawer";
import { ContextualFloatingCTA } from "@/components/ContextualFloatingCTA";
import { CustomGearCursor } from "@/components/interactions/CustomGearCursor";
import { ScrollytellingSection } from "@/components/ScrollytellingSection";
import { SplitTextReveal } from "@/components/animations/SplitTextReveal";
import { MagneticButton } from "@/components/interactions/MagneticButton";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap-config";
import { useSiteSettings } from "@/context/SettingsContext";
import { useMobileGearsParallax } from "@/hooks/useMobileGearsParallax";

export default function Home() {
  const mainRef = useRef<HTMLElement>(null);
  const { settings, heroIntroKey } = useSiteSettings();
  const [isDarkMode, setIsDarkMode] = useState(false);
  useMobileGearsParallax();

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

  // Amelia's Idea 07: Clockwork Mechanical Entrance Sequence for the Hero
  useGSAP(() => {
    if (!mainRef.current) return;

    if (!settings.heroMechanicalIntro || settings.reducedMotion) {
      // Ensure static elements are visible if intro is disabled or reduced motion is active
      gsap.set(["#hero-badge", "#hero-hud", "#hero-cta", ".hero-gear-watermark"], {
        opacity: 1,
        y: 0,
        scale: 1,
      });
      return;
    }

    const heroTl = gsap.timeline({ defaults: { ease: "power2.out" } });

    // 1. Initial State
    heroTl.set("#hero-badge", { y: -20, opacity: 0, scale: 0.9 });
    heroTl.set("#hero-hud", { y: 15, opacity: 0 });
    heroTl.set("#hero-cta", { y: 25, opacity: 0, scale: 0.95 });
    heroTl.set(".hero-gear-watermark", { opacity: 0, scale: 0.8 });

    // 2. Background Watermark Gears materialize
    heroTl.to(".hero-gear-watermark", {
      opacity: 0.08,
      scale: 1,
      duration: 1.2,
      stagger: 0.2,
      ease: "power2.out",
    }, 0);

    // 3. Top Agency Badge Escapement Snap
    heroTl.to("#hero-badge", {
      y: 0,
      opacity: 1,
      scale: 1,
      duration: 0.5,
      ease: "back.out(1.8)",
    }, 0.1);

    // 4. Monospace Technical HUD calibration entry
    heroTl.to("#hero-hud", {
      y: 0,
      opacity: 1,
      duration: 0.55,
      ease: "power3.out",
    }, 0.7);

    // 5. Action CTA Buttons Kinetic Pop
    heroTl.to("#hero-cta", {
      y: 0,
      opacity: 1,
      scale: 1,
      duration: 0.6,
      ease: "back.out(2)",
    }, 0.85);

  }, { scope: mainRef, dependencies: [settings.heroMechanicalIntro, heroIntroKey] });

  // Continuous subtle watermark gears rotation
  useGSAP(() => {
    if (!mainRef.current || settings.reducedMotion) return;

    gsap.to("#hero-gear-left", {
      rotation: 360,
      duration: 35,
      repeat: -1,
      ease: "none",
      transformOrigin: "center center",
    });

    gsap.to("#hero-gear-right", {
      rotation: -360,
      duration: 45,
      repeat: -1,
      ease: "none",
      transformOrigin: "center center",
    });
  }, { scope: mainRef, dependencies: [settings.reducedMotion] });

  return (
    <main
      ref={mainRef}
      className={`relative w-full min-h-screen transition-colors duration-700 ${
        isDarkMode ? "text-[#f4f4f6]" : "text-[var(--pic-charcoal,#1a1a1a)]"
      }`}
      style={{ backgroundColor: settings.themeMode === "force-dark" ? "#06070a" : "#ffffff" }}
    >
      <CustomGearCursor />
      <Navbar isDark={isDarkMode} />
      <SettingsDrawer />
      <ContextualFloatingCTA />

      {/* Hero Section (Daylight / Sunlit Mode) */}
      <section id="hero-section" className="pt-36 pb-20 px-6 text-center max-w-4xl mx-auto relative z-10 overflow-visible">
        {/* Background Mechanical Blueprint Watermark Gears */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none -z-0">
          <svg
            id="hero-gear-left"
            className="hero-gear-watermark absolute -left-20 -top-10 w-96 h-96 text-slate-400 dark:text-white"
            viewBox="0 0 100 100"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.8"
            strokeDasharray="4 2"
          >
            <circle cx="50" cy="50" r="40" />
            <circle cx="50" cy="50" r="28" />
            <circle cx="50" cy="50" r="12" />
            {Array.from({ length: 12 }).map((_, i) => (
              <line
                key={i}
                x1="50" y1="10" x2="50" y2="2"
                transform={`rotate(${i * 30} 50 50)`}
                strokeWidth="2.5"
              />
            ))}
          </svg>
          <svg
            id="hero-gear-right"
            className="hero-gear-watermark absolute -right-24 top-20 w-80 h-80 text-[var(--pic-turquoise,#3dbcc7)]"
            viewBox="0 0 100 100"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.8"
            strokeDasharray="3 3"
          >
            <circle cx="50" cy="50" r="38" />
            <circle cx="50" cy="50" r="22" />
            <circle cx="50" cy="50" r="8" />
            {Array.from({ length: 10 }).map((_, i) => (
              <line
                key={i}
                x1="50" y1="12" x2="50" y2="4"
                transform={`rotate(${i * 36} 50 50)`}
                strokeWidth="2.5"
              />
            ))}
          </svg>
        </div>

        <div id="hero-badge" className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/5 mb-6 relative z-10">
          <span className="w-2 h-2 rounded-full bg-[var(--pic-blue,#0089d0)] animate-pulse"></span>
          <p className="text-xs font-bold tracking-[0.14em] uppercase text-[var(--pic-blue,#0089d0)]">
            Agence digitale — Kinshasa, RDC
          </p>
        </div>

        <SplitTextReveal
          as="h1"
          trigger="mount"
          delay={0.12}
          stagger={0.045}
          duration={0.7}
          flavor="clockwork"
          className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight mb-6 leading-[1.08] text-slate-900 font-sora relative z-10"
        >
          La précision, moteur de votre{" "}
          <span className="bg-gradient-to-r from-[var(--pic-blue,#0089d0)] via-[var(--pic-turquoise,#3dbcc7)] to-[var(--pic-orange,#f37021)] bg-clip-text text-transparent">
            croissance digitale.
          </span>
        </SplitTextReveal>

        <SplitTextReveal
          as="p"
          trigger="mount"
          delay={0.4}
          stagger={0.015}
          duration={0.6}
          flavor="smooth"
          className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto mb-8 leading-relaxed font-normal relative z-10"
        >
          Picsell Agency conçoit des systèmes marketing, techniques et data pilotés par l'IA, pensés pour les entreprises congolaises et le marché francophone.
        </SplitTextReveal>

        {/* Technical Monospace Metadata HUD (Sally's Idea 09) */}
        {settings.extremeTypography && (
          <div id="hero-hud" className="mb-10 inline-flex flex-wrap items-center justify-center gap-2 sm:gap-4 px-4 py-1.5 rounded-full bg-slate-100 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 font-mono text-[10px] sm:text-[11px] tracking-widest text-slate-500 uppercase select-none relative z-10">
            <span>SYS_ID // PICSELL_HQ</span>
            <span className="opacity-40">•</span>
            <span>GEO // KINSHASA (4.32°S 15.30°E)</span>
            <span className="opacity-40">•</span>
            <span className="text-[var(--pic-turquoise,#3dbcc7)] font-bold">PRECISION // 100%</span>
          </div>
        )}

        <div id="hero-cta" className="flex flex-wrap justify-center gap-4 relative z-10">
          <MagneticButton
            href="#scrollytelling-section"
            strength={0.35}
            textStrength={0.18}
            className="px-7 py-3.5 rounded-full text-sm font-bold bg-slate-900 text-white hover:bg-black hover:shadow-lg hover:-translate-y-0.5 transition-all shadow-[0_4px_20px_rgba(0,0,0,0.15)]"
          >
            Découvrir nos expertises ↓
          </MagneticButton>
          <MagneticButton
            href="#footer-contact"
            strength={0.3}
            textStrength={0.15}
            className="px-7 py-3.5 rounded-full text-sm font-bold border-2 border-slate-200 text-slate-900 hover:border-slate-900 hover:-translate-y-0.5 transition-all"
          >
            Nous écrire
          </MagneticButton>
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
          <SplitTextReveal
            as="h2"
            trigger="scroll"
            stagger={0.04}
            duration={0.7}
            flavor="clockwork"
            className="text-3xl md:text-5xl font-black tracking-tight mb-6 leading-tight font-sora"
          >
            Un seul moteur. Quatre expertises. Une seule agence.
          </SplitTextReveal>
          <SplitTextReveal
            as="p"
            trigger="scroll"
            delay={0.15}
            stagger={0.015}
            duration={0.6}
            flavor="smooth"
            className="text-base md:text-lg text-slate-400 mb-10 leading-relaxed max-w-xl mx-auto"
          >
            Marketing, automatisation, développement et data — assemblés pour faire avancer votre entreprise avec une précision horlogère.
          </SplitTextReveal>
          <MagneticButton
            href="#footer-contact"
            strength={0.4}
            textStrength={0.2}
            className="px-8 py-4 rounded-full text-sm font-bold bg-white text-slate-950 hover:bg-[var(--pic-gold,#fdb913)] hover:text-slate-950 hover:shadow-[0_0_30px_rgba(253,185,19,0.6)] hover:-translate-y-0.5 transition-all shadow-[0_8px_30px_rgba(255,255,255,0.15)]"
          >
            Démarrer un projet avec nous
          </MagneticButton>
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
