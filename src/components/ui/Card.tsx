"use client";

import React from "react";
import { SERVICE_MODULES } from "@/lib/design-system/tokens";

export type CardModule = "marketing" | "automation" | "development" | "data" | "default";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  module?: CardModule;
  active?: boolean;
  blurBlob?: boolean;
  number?: string;
  subName?: string;
  badgeLabel?: string;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (
    {
      children,
      className = "",
      module = "default",
      active = true,
      blurBlob = true,
      number,
      subName,
      badgeLabel,
      ...props
    },
    ref
  ) => {
    const isServiceModule = module !== "default";
    const modConfig = isServiceModule ? SERVICE_MODULES[module] : null;

    // Matching exact class structure from ScrollytellingSection.tsx
    const moduleCardStyles = {
      marketing: active
        ? "bg-gradient-to-br from-[rgba(243,112,33,0.1)] via-white/[0.04] to-transparent border-[var(--pic-orange,#f37021)]/40 shadow-[0_20px_50px_rgba(243,112,33,0.15)] opacity-100"
        : "bg-white/[0.02] border-white/[0.06] opacity-40",
      automation: active
        ? "bg-gradient-to-br from-[rgba(61,188,199,0.1)] via-white/[0.04] to-transparent border-[var(--pic-turquoise,#3dbcc7)]/40 shadow-[0_20px_50px_rgba(61,188,199,0.15)] opacity-100"
        : "bg-white/[0.02] border-white/[0.06] opacity-40",
      development: active
        ? "bg-gradient-to-br from-[rgba(0,137,208,0.1)] via-white/[0.04] to-transparent border-[var(--pic-blue,#0089d0)]/40 shadow-[0_20px_50px_rgba(0,137,208,0.15)] opacity-100"
        : "bg-white/[0.02] border-white/[0.06] opacity-40",
      data: active
        ? "bg-gradient-to-br from-[rgba(253,185,19,0.1)] via-white/[0.04] to-transparent border-[var(--pic-gold,#fdb913)]/40 shadow-[0_20px_50px_rgba(253,185,19,0.15)] opacity-100"
        : "bg-white/[0.02] border-white/[0.06] opacity-40",
      default:
        "bg-white/[0.03] dark:bg-[#090a10]/80 border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)]",
    }[module];

    const displayNum = number || modConfig?.number;
    const displaySubName = subName || modConfig?.subName;
    const displayBadge = badgeLabel || modConfig?.name;
    const colorHex = modConfig?.color || "#0089d0";

    return (
      <div
        ref={ref}
        className={`relative overflow-hidden p-8 sm:p-10 rounded-3xl backdrop-blur-2xl border transition-all duration-700 ${moduleCardStyles} ${className}`}
        {...props}
      >
        {/* Ambient Glowing Aura Blob */}
        {blurBlob && isServiceModule && (
          <div
            className="absolute -top-24 -right-24 w-48 h-48 rounded-full blur-3xl pointer-events-none opacity-40"
            style={{ backgroundColor: colorHex }}
          />
        )}

        {/* Top Header with Module Pill & Reactive Large Number */}
        {(displayBadge || displayNum) && (
          <div className="flex items-center justify-between mb-6 relative z-10">
            {displayBadge && (
              <p
                className="text-xs font-bold tracking-[0.2em] uppercase flex items-center gap-2 font-sora"
                style={{ color: colorHex }}
              >
                <span
                  className="w-2 h-2 rounded-full animate-pulse"
                  style={{ backgroundColor: colorHex }}
                />
                {displayBadge}
              </p>
            )}

            {displayNum && (
              <div className="relative inline-block select-none group">
                <p
                  className="text-5xl sm:text-6xl font-black font-sora transition-all duration-700"
                  style={{
                    backgroundImage: modConfig?.gradient || "linear-gradient(135deg, #ffffff, #888888)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    color: "transparent",
                    WebkitTextStroke: `1.2px ${colorHex}`,
                    filter: `drop-shadow(0 0 25px ${colorHex}88)`,
                  }}
                >
                  {displayNum}
                </p>
                {displaySubName && (
                  <span
                    className="absolute -bottom-2 right-0 text-[8px] font-mono tracking-widest uppercase opacity-90"
                    style={{ color: colorHex }}
                  >
                    {displaySubName}
                  </span>
                )}
              </div>
            )}
          </div>
        )}

        <div className="relative z-10">{children}</div>
      </div>
    );
  }
);

Card.displayName = "Card";

export const CardTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className = "", ...props }, ref) => (
  <h3
    ref={ref}
    className={`text-2xl sm:text-3xl font-extrabold font-sora text-white mb-4 tracking-tight leading-tight ${className}`}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

export const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className = "", ...props }, ref) => (
  <p
    ref={ref}
    className={`text-sm sm:text-base text-slate-300 leading-relaxed font-quicksand font-normal mb-6 ${className}`}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";
