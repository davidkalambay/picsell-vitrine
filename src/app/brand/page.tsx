"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import { SettingsDrawer } from "@/components/SettingsDrawer";
import { ContextualFloatingCTA } from "@/components/ContextualFloatingCTA";
import { CustomGearCursor } from "@/components/interactions/CustomGearCursor";
import { BrandHero } from "@/components/brand/BrandHero";
import { InteractiveColorPalette } from "@/components/brand/InteractiveColorPalette";
import { LogoGuidelinesSection } from "@/components/brand/LogoGuidelinesSection";
import { TypographySpecimenSection } from "@/components/brand/TypographySpecimenSection";
import { VoiceAndToneSection } from "@/components/brand/VoiceAndToneSection";
import { ConversionHub } from "@/components/conversion/ConversionHub";

export default function BrandPage() {
  return (
    <main
      id="main-content"
      className="min-h-screen bg-[#06070a] text-[#f4f4f6] font-sans selection:bg-[#fdb913] selection:text-slate-950 relative"
    >
      <CustomGearCursor />
      <Navbar />
      <SettingsDrawer />
      <ContextualFloatingCTA />

      {/* 1. Brand Hero & Download Kit */}
      <BrandHero />

      {/* 2. Interactive Color Palette (1-click copy) */}
      <InteractiveColorPalette />

      {/* 3. Logo Guidelines & Prohibited Usages */}
      <LogoGuidelinesSection />

      {/* 4. Live Typography Specimens */}
      <TypographySpecimenSection />

      {/* 5. Voice & Tone Editorial Principles */}
      <VoiceAndToneSection />

      {/* 6. Global Conversion Hub & Footer */}
      <ConversionHub />
    </main>
  );
}
