"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Settings, ChevronRight } from "lucide-react";

/**
 * HorologicalCTA is a premium call-to-action button that features 
 * mechanical animations to simulate "winding up" or "unlocking" a mechanism.
 */
export const HorologicalCTA = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <section className="py-24 flex flex-col items-center">
            <div className="relative group">
                {/* Decorative Outer Rings */}
                <motion.div
                    animate={{ rotate: isHovered ? 180 : 0 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    className="absolute inset-0 -m-8 border border-brushed-gold/10 rounded-full pointer-events-none"
                />
                <motion.div
                    animate={{ rotate: isHovered ? -90 : 0 }}
                    transition={{ duration: 2, ease: "linear", repeat: isHovered ? Infinity : 0 }}
                    className="absolute inset-0 -m-12 border border-dashed border-white/5 rounded-full pointer-events-none"
                />

                {/* The Button */}
                <motion.button
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative z-10 flex items-center gap-4 bg-brushed-gold text-midnight-black px-10 py-5 rounded-full font-sans font-bold text-lg overflow-hidden group shadow-[0_0_30px_rgba(212,175,55,0.3)] transition-shadow hover:shadow-[0_0_50px_rgba(212,175,55,0.5)]"
                >
                    {/* Internal Gear Icon */}
                    <motion.div
                        animate={{ rotate: isHovered ? 360 : 0 }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    >
                        <Settings className="w-6 h-6" />
                    </motion.div>

                    <span className="relative z-10">Lancer mon projet</span>

                    <motion.div
                        animate={{ x: isHovered ? 5 : 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <ChevronRight className="w-6 h-6" />
                    </motion.div>

                    {/* Liquid-like Shine Effect */}
                    <motion.div
                        animate={{ x: isHovered ? "200%" : "-100%" }}
                        transition={{ duration: 1, ease: "easeInOut" }}
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 translate-x-[-100%]"
                    />
                </motion.button>

                {/* Label and Status */}
                <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 w-full opacity-60">
                    <span className="font-mono text-[9px] uppercase tracking-[0.3em]">Session_Ready_V1.2</span>
                    <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                            <motion.div
                                key={i}
                                animate={{ opacity: isHovered ? [0.2, 1, 0.2] : 1 }}
                                transition={{ delay: i * 0.1, duration: 1, repeat: Infinity }}
                                className="w-1 h-1 rounded-full bg-brushed-gold"
                            />
                        ))}
                    </div>
                </div>
            </div>

            <div className="mt-32 text-center">
                <p className="font-serif italic text-2xl text-gray-500">"Qui peut le plus, peut le moins."</p>
                <p className="font-mono text-[10px] text-gray-700 mt-4 tracking-widest uppercase">Picsell Agency | 2026 | Bureau de Conception Virtuelle</p>
            </div>
        </section>
    );
};
