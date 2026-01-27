"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

/**
 * HeroEngine displays a complex arrangement of SVG gears that rotate in sync with the page scroll.
 * This reinforces the "Mechanical Swiss Mastery" theme.
 */
export const HeroEngine = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    // Smooth out the scroll value
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    // Transformation for rotations
    const rotateClockwise = useTransform(smoothProgress, [0, 1], [0, 360]);
    const rotateCounterClockwise = useTransform(smoothProgress, [0, 1], [0, -720]);
    const rotateSlow = useTransform(smoothProgress, [0, 1], [0, 180]);

    return (
        <section ref={containerRef} className="relative min-h-[80vh] flex flex-col items-center justify-center overflow-hidden py-24">
            {/* Background Decorative Gears */}
            <div className="absolute inset-0 pointer-events-none opacity-5 overflow-hidden">
                <motion.div
                    style={{ rotate: rotateClockwise }}
                    className="absolute -top-24 -left-24 w-[600px] h-[600px]"
                >
                    <GearSVG />
                </motion.div>
                <motion.div
                    style={{ rotate: rotateCounterClockwise }}
                    className="absolute -bottom-48 -right-48 w-[800px] h-[800px]"
                >
                    <GearSVG />
                </motion.div>
            </div>

            <div className="relative z-10 text-center max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brushed-gold/30 bg-brushed-gold/5 font-mono text-[10px] tracking-[0.2em] text-brushed-gold uppercase"
                >
                    <span className="w-1 h-1 rounded-full bg-brushed-gold animate-pulse" />
                    Maison de Haute Horlogerie Digitale
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                    className="text-6xl md:text-8xl font-serif text-white mb-8 leading-[1.1]"
                >
                    Vitesse <br />
                    <span className="text-brushed-gold italic">Maîtrisée.</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12"
                >
                    Picsell Agency fusionne l'IA de pointe avec la rigueur artisanale de la méthode BMAD pour transformer votre business.
                </motion.p>

                {/* Central Interlocking Gears */}
                <div className="flex justify-center gap-4 py-8">
                    <motion.div style={{ rotate: rotateClockwise }} className="w-16 h-16 text-brushed-gold">
                        <GearSVG />
                    </motion.div>
                    <motion.div style={{ rotate: rotateCounterClockwise }} className="w-24 h-24 text-polished-steel">
                        <GearSVG />
                    </motion.div>
                    <motion.div style={{ rotate: rotateSlow }} className="w-12 h-12 text-brushed-gold/50">
                        <GearSVG />
                    </motion.div>
                </div>
            </div>

            {/* Downward Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute bottom-12 flex flex-col items-center gap-4 opacity-30"
            >
                <span className="font-mono text-[9px] uppercase tracking-widest">Scroll pour remonter le mécanisme</span>
                <div className="w-px h-12 bg-gradient-to-b from-brushed-gold to-transparent" />
            </motion.div>
        </section>
    );
};

const GearSVG = () => (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <path
            d="M50 35c-8.3 0-15 6.7-15 15s6.7 15 15 15 15-6.7 15-15-6.7-15-15-15zm0 25c-5.5 0-10-4.5-10-10s4.5-10 10-10 10 4.5 10 10-4.5 10-10 10zM92.5 45H85c-.6-3.8-1.8-7.3-3.6-10.6l5.3-5.3c.4-.4.4-1.1 0-1.5l-5.7-5.7c-.4-.4-1.1-.4-1.5 0l-5.3 5.3c-3-1.8-6.4-3-10.1-3.6V12.5c0-.6-.4-1.1-1-1.1h-8c-.6 0-1.1.4-1.1 1.1V16c-3.8.6-7.3 1.8-10.6 3.6l-5.3-5.3c-.4-.4-1.1-.4-1.5 0l-5.7 5.7c-.4.4-.4 1.1 0 1.5l5.3 5.3c-1.8 3.3-3 6.8-3.6 10.6H17.5c-.6 0-1.1.4-1.1 1v8c0 .6.4 1.1 1.1 1.1H25c.6 3.8 1.8 7.3 3.6 10.6l-5.3 5.3c-.4.4-.4 1.1 0 1.5l5.7 5.7c.4.4 1.1.4 1.5 0l5.3-5.3c3.3 1.8 6.8 3 10.6 3.6v8.5c0 .6.4 1.1 1.1 1.1h8c.6 0 1-.4 1.1-1.1V84c3.8-.6 7.3-1.8 10.6-3.6l5.3 5.3c.4.4 1.1.4 1.5 0l5.7-5.7c.4-.4.4-1.1 0-1.5l-5.3-5.3c1.8-3.3 3-6.8 3.6-10.6h8.5c.6 0 1.1-.4 1.1-1.1v-8c.1-.6-.4-1.1-1-1.1z"
            fill="currentColor"
        />
    </svg>
);
