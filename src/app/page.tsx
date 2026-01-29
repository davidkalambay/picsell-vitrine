"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="relative flex h-screen w-full flex-col items-center justify-center bg-[#0A0A0A] overflow-hidden">
      {/* Subtle Grain Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }} />

      <div className="relative z-10 flex flex-col items-center text-center px-6">
        {/* Logo / Branding */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8"
        >
          <span className="text-4xl sm:text-6xl font-serif text-[#D4AF37] tracking-[0.5em] uppercase">
            Picsell
          </span>
          <div className="mt-2 h-[1px] w-full bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent" />
          <span className="mt-2 block text-xs sm:text-sm font-mono text-[#E5E4E2]/40 tracking-[0.8em] uppercase">
            Agency
          </span>
        </motion.div>

        {/* Coming Soon Message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 2 }}
          className="space-y-4"
        >
          <h1 className="text-[#E5E4E2] font-serif text-lg sm:text-xl tracking-[0.3em] uppercase opacity-80">
            Precision_In_Progress
          </h1>
          <p className="max-w-xs text-[10px] sm:text-xs text-[#E5E4E2]/30 font-mono leading-relaxed tracking-widest uppercase">
            Refining the mechanics of digital mastery. <br />
            Returning soon with absolute performance.
          </p>
        </motion.div>

        {/* Minimalist Indicator */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1.5, duration: 1, ease: "easeInOut" }}
          className="mt-16 w-12 h-[1px] bg-[#D4AF37]/30"
        />
      </div>

      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#D4AF37]/5 rounded-full blur-[120px] pointer-events-none" />
    </main>
  );
}
