"use client";

import React from "react";

export type BadgeVariant =
  | "hero" // px-3.5 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/5 text-[var(--pic-blue,#0089d0)]
  | "hud" // font-mono tracking-widest bg-slate-100 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10
  | "marketing" // Orange #f37021 with shimmer sweep
  | "automation" // Turquoise #3dbcc7 with shimmer sweep
  | "development" // Blue #0089d0 with shimmer sweep
  | "data" // Gold #fdb913 with shimmer sweep
  | "glass" // bg-white/5 border-white/10 text-white
  | "default";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  shimmer?: boolean;
  pulseDot?: boolean;
  leftIcon?: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  className = "",
  variant = "default",
  shimmer = true,
  pulseDot = false,
  leftIcon,
  ...props
}) => {
  // Exact styling from ScrollytellingSection.tsx and page.tsx
  if (variant === "hero") {
    return (
      <span
        className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/5 ${className}`}
        {...props}
      >
        <span className="w-2 h-2 rounded-full bg-[var(--pic-blue,#0089d0)] animate-pulse" />
        <span className="text-xs font-bold tracking-[0.14em] uppercase text-[var(--pic-blue,#0089d0)] font-sora">
          {children}
        </span>
      </span>
    );
  }

  if (variant === "hud") {
    return (
      <span
        className={`inline-flex items-center gap-2 sm:gap-4 px-4 py-1.5 rounded-full bg-slate-100 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 font-mono text-[10px] sm:text-[11px] tracking-widest text-slate-500 dark:text-slate-400 uppercase select-none ${className}`}
        {...props}
      >
        {children}
      </span>
    );
  }

  // Service Module Badges with micro-interactions & shimmer wave
  const moduleColors = {
    marketing: {
      hex: "#f37021",
      var: "var(--pic-orange,#f37021)",
    },
    automation: {
      hex: "#3dbcc7",
      var: "var(--pic-turquoise,#3dbcc7)",
    },
    development: {
      hex: "#0089d0",
      var: "var(--pic-blue,#0089d0)",
    },
    data: {
      hex: "#fdb913",
      var: "var(--pic-gold,#fdb913)",
    },
    glass: {
      hex: "#ffffff",
      var: "#ffffff",
    },
    default: {
      hex: "#94a3b8",
      var: "#94a3b8",
    },
  }[variant];

  return (
    <span
      className={`group/badge relative overflow-hidden text-[11px] font-bold tracking-wider uppercase px-4 py-2 rounded-full border backdrop-blur-md transition-all duration-300 select-none inline-flex items-center cursor-pointer hover:scale-105 hover:-translate-y-0.5 hover:shadow-lg hover:border-white/60 hover:text-white font-sora ${className}`}
      style={{
        borderColor: `${moduleColors.hex}66`,
        backgroundColor: `${moduleColors.hex}18`,
        color: moduleColors.hex,
        boxShadow: `0 0 12px ${moduleColors.hex}33`,
        willChange: "transform",
      }}
      {...props}
    >
      {/* Light Sweep / Shimmer Wave on Hover */}
      {shimmer && (
        <span
          className="absolute inset-0 -translate-x-full group-hover/badge:translate-x-full transition-transform duration-700 ease-out bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none"
          aria-hidden="true"
        />
      )}

      <span className="relative z-10 flex items-center gap-1.5">
        <span
          className={`w-1.5 h-1.5 rounded-full transition-all duration-300 group-hover/badge:scale-150 group-hover/badge:shadow-[0_0_8px_white] ${
            pulseDot ? "animate-pulse" : ""
          }`}
          style={{ backgroundColor: moduleColors.var }}
        />
        {leftIcon && <span className="shrink-0">{leftIcon}</span>}
        <span>{children}</span>
      </span>
    </span>
  );
};

Badge.displayName = "Badge";
