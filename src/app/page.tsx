"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Navbar from "@/components/Navbar";
import GearEngine from "@/components/GearEngine";

export default function Home() {
    const textRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        // Pulsation effect for the coming soon text (Human Breathing Rhythm ~4s)
        gsap.to(textRef.current, {
            opacity: 0.2,
            duration: 4,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
        });
    });

    return (
        <main className="relative w-screen h-screen flex flex-col items-center justify-center">
            <Navbar />

            <GearEngine />

            <div
                ref={textRef}
                className="fixed bottom-[6vh] text-center w-full text-base text-[#999] uppercase tracking-[0.4em] font-bold z-10"
            >
                PRECISION IN PROGRESS — COMING SOON
            </div>
        </main>
    );
}
