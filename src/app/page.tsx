"use client";

import React, { useRef } from "react";
import Navbar from "@/components/Navbar";
import { HeroMechanicalEngine } from "@/components/animations/HeroMechanicalEngine";
import { HeroTagline } from "@/components/brand/HeroTagline";
import { SiteFooter } from "@/components/brand/SiteFooter";
import { CodeSignature } from "@/components/brand/CodeSignature";

/** Distance de scroll pour piloter les engrenages (FR1 scroll-bound). */
const SCROLL_TRACK_VH = 280;

export default function Home() {
  const scrollTrackRef = useRef<HTMLDivElement>(null);

  return (
    <main className="relative bg-pic-bg-light">
      <div
        ref={scrollTrackRef}
        className="relative w-full"
        style={{ minHeight: `${SCROLL_TRACK_VH}vh` }}
        aria-label="Parcours de découverte Picsell"
      >
        <div className="sticky top-0 flex h-screen w-full flex-col overflow-hidden">
          <Navbar />
          <HeroTagline />
          <HeroMechanicalEngine scrollTrackRef={scrollTrackRef} />
          <div
            className="pointer-events-none absolute bottom-[12vh] left-1/2 z-10 -translate-x-1/2"
            aria-hidden
          >
            <CodeSignature />
          </div>
          <SiteFooter />
        </div>
      </div>
      <p className="sr-only">
        Faites défiler la page pour animer le mécanisme d&apos;engrenages.
      </p>
    </main>
  );
}
