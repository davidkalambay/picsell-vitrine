"use client";

import React, { useRef } from "react";
import Navbar from "@/components/Navbar";
import { SettingsDrawer } from "@/components/SettingsDrawer";
import { ContextualFloatingCTA } from "@/components/ContextualFloatingCTA";
import { CustomGearCursor } from "@/components/interactions/CustomGearCursor";
import { AboutHero } from "@/components/about/AboutHero";
import { HorologicalManifesto } from "@/components/about/HorologicalManifesto";
import { KinshasaDiasporaMap } from "@/components/about/KinshasaDiasporaMap";
import { LeadershipTeam } from "@/components/about/LeadershipTeam";
import { BmadFrameworkSteps } from "@/components/about/BmadFrameworkSteps";
import { ConversionHub } from "@/components/conversion/ConversionHub";
import { useSiteSettings } from "@/context/SettingsContext";

export default function AboutPage() {
  const mainRef = useRef<HTMLElement>(null);
  const { settings } = useSiteSettings();

  return (
    <main
      ref={mainRef}
      id="main-content"
      className="min-h-screen bg-[#06070a] text-[#f4f4f6] font-sans selection:bg-[#fdb913] selection:text-slate-950 transition-colors duration-500 relative"
    >
      {/* Custom Horological Interactive Cursor */}
      <CustomGearCursor />

      {/* Shared Escapement Navbar */}
      <Navbar />

      {/* Floating Persona & Settings Drawer */}
      <SettingsDrawer />

      {/* Contextual Floating CTA Trigger */}
      <ContextualFloatingCTA />

      {/* 1. About Hero & Precision Telemetry */}
      <AboutHero />

      {/* 2. The 4 Organ Horological Manifesto */}
      <HorologicalManifesto />

      {/* 3. Geostrategic Kinshasa & Diaspora Hubs */}
      <KinshasaDiasporaMap />

      {/* 4. Leadership & Watchmaker Guild (David Kalambay & Jean-Luc Mukendi) */}
      <LeadershipTeam />

      {/* 5. The BMAD 4-Phase Testing Protocol */}
      <BmadFrameworkSteps />

      {/* 6. Dual Conversion Hub (Upwork Escrow + Strategic Consultation) */}
      <ConversionHub />
    </main>
  );
}
