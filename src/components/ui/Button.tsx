"use client";

import React, { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap-config";
import { useSiteSettings } from "@/context/SettingsContext";

export type ButtonVariant =
  | "slate-dark" // Hero primary button: bg-slate-900 text-white
  | "slate-border" // Hero secondary button: border-2 border-slate-200 text-slate-900
  | "blue" // var(--pic-blue, #0089d0)
  | "orange" // var(--pic-orange, #f37021)
  | "turquoise" // var(--pic-turquoise, #3dbcc7)
  | "gold" // var(--pic-gold, #fdb913)
  | "glass" // Floating settings button style: bg-slate-950/80 backdrop-blur-xl
  | "ghost"; // bg-white/5 border border-white/10

export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  magnetic?: boolean;
  magneticStrength?: number;
  textStrength?: number;
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
  href?: string;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className = "",
      variant = "slate-dark",
      size = "md",
      magnetic = false,
      magneticStrength = 0.35,
      textStrength = 0.18,
      loading = false,
      leftIcon,
      rightIcon,
      fullWidth = false,
      disabled,
      href,
      onClick,
      ...props
    },
    forwardedRef
  ) => {
    const internalRef = useRef<HTMLButtonElement>(null);
    const contentRef = useRef<HTMLSpanElement>(null);
    const buttonRef = (forwardedRef as React.RefObject<HTMLButtonElement>) || internalRef;
    const { settings } = useSiteSettings();

    // GSAP Dual Magnetic Physics (copied from src/components/interactions/MagneticButton.tsx)
    useGSAP(() => {
      const isMagneticActive = magnetic || (settings?.magneticButtons && magnetic !== false);
      if (!buttonRef.current || !isMagneticActive || disabled || loading) return;

      const el = buttonRef.current;
      const content = contentRef.current;

      const xTo = gsap.quickTo(el, "x", { duration: 0.6, ease: "power3.out" });
      const yTo = gsap.quickTo(el, "y", { duration: 0.6, ease: "power3.out" });
      const xTextTo = content ? gsap.quickTo(content, "x", { duration: 0.5, ease: "power3.out" }) : null;
      const yTextTo = content ? gsap.quickTo(content, "y", { duration: 0.5, ease: "power3.out" }) : null;

      const handleMouseMove = (e: MouseEvent) => {
        const rect = el.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const deltaX = (e.clientX - centerX) * magneticStrength;
        const deltaY = (e.clientY - centerY) * magneticStrength;

        xTo(deltaX);
        yTo(deltaY);

        if (xTextTo && yTextTo) {
          xTextTo(deltaX * (textStrength / magneticStrength));
          yTextTo(deltaY * (textStrength / magneticStrength));
        }
      };

      const handleMouseLeave = () => {
        gsap.to(el, {
          x: 0,
          y: 0,
          duration: 0.75,
          ease: "elastic.out(1.1, 0.4)",
        });

        if (content) {
          gsap.to(content, {
            x: 0,
            y: 0,
            duration: 0.7,
            ease: "elastic.out(1.1, 0.4)",
          });
        }
      };

      el.addEventListener("mousemove", handleMouseMove);
      el.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        el.removeEventListener("mousemove", handleMouseMove);
        el.removeEventListener("mouseleave", handleMouseLeave);
      };
    }, { scope: buttonRef, dependencies: [settings?.magneticButtons, magnetic, magneticStrength] });

    // 100% Matching existing code button classes
    const baseStyles =
      "inline-flex items-center justify-center font-bold font-sora rounded-full select-none cursor-pointer transition-all duration-300 active:scale-95 disabled:opacity-50 disabled:pointer-events-none";

    const sizeStyles = {
      sm: "px-4 py-2 text-xs gap-1.5",
      md: "px-7 py-3.5 text-sm gap-2",
      lg: "px-9 py-4 text-base gap-2.5",
    }[size];

    const variantStyles = {
      "slate-dark":
        "bg-slate-900 text-white hover:bg-black hover:shadow-lg hover:-translate-y-0.5 shadow-[0_4px_20px_rgba(0,0,0,0.15)]",
      "slate-border":
        "border-2 border-slate-200 text-slate-900 dark:text-white dark:border-white/20 hover:border-slate-900 dark:hover:border-white hover:-translate-y-0.5 bg-transparent",
      blue:
        "bg-[var(--pic-blue,#0089d0)] text-white hover:brightness-110 shadow-[0_4px_20px_rgba(0,137,208,0.35)] hover:-translate-y-0.5",
      orange:
        "bg-[var(--pic-orange,#f37021)] text-white hover:brightness-110 shadow-[0_4px_20px_rgba(243,112,33,0.35)] hover:-translate-y-0.5",
      turquoise:
        "bg-[var(--pic-turquoise,#3dbcc7)] text-white hover:brightness-110 shadow-[0_4px_20px_rgba(61,188,199,0.35)] hover:-translate-y-0.5",
      gold:
        "bg-[var(--pic-gold,#fdb913)] text-slate-950 hover:brightness-110 shadow-[0_4px_20px_rgba(253,185,19,0.35)] hover:-translate-y-0.5",
      glass:
        "bg-slate-950/80 hover:bg-slate-900 text-white backdrop-blur-xl border border-white/20 shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:scale-105",
      ghost:
        "bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white border border-white/10 transition-colors",
    }[variant];

    return (
      <button
        ref={buttonRef}
        disabled={disabled || loading}
        onClick={onClick}
        className={`${baseStyles} ${sizeStyles} ${variantStyles} ${
          fullWidth ? "w-full" : ""
        } ${className}`}
        {...props}
      >
        <span ref={contentRef} className="inline-flex items-center gap-2">
          {loading ? (
            <>
              <svg
                className="animate-spin h-4 w-4 text-current"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              <span>Chargement...</span>
            </>
          ) : (
            <>
              {leftIcon && <span className="shrink-0">{leftIcon}</span>}
              <span>{children}</span>
              {rightIcon && <span className="shrink-0">{rightIcon}</span>}
            </>
          )}
        </span>
      </button>
    );
  }
);

Button.displayName = "Button";
