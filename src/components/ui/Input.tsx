"use client";

import React from "react";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helperText?: string;
  error?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  mono?: boolean;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className = "",
      label,
      helperText,
      error,
      leftIcon,
      rightIcon,
      mono = false,
      disabled,
      id,
      ...props
    },
    ref
  ) => {
    const generatedId = React.useId();
    const inputId = id || generatedId;

    return (
      <div className="w-full space-y-2">
        {label && (
          <label
            htmlFor={inputId}
            className="block text-xs font-bold text-slate-300 font-sora tracking-wide"
          >
            {label}
          </label>
        )}

        <div className="relative flex items-center">
          {leftIcon && (
            <div className="absolute left-4 flex items-center pointer-events-none text-slate-400">
              {leftIcon}
            </div>
          )}

          <input
            ref={ref}
            id={inputId}
            disabled={disabled}
            className={`w-full bg-white/[0.04] text-white text-sm rounded-2xl border border-white/10 transition-all duration-300 py-3.5 outline-none placeholder:text-slate-500 disabled:opacity-50 disabled:cursor-not-allowed focus:border-[var(--pic-blue,#0089d0)] focus:bg-white/[0.07] focus:ring-1 focus:ring-[var(--pic-blue,#0089d0)]/50 ${
              leftIcon ? "pl-11" : "pl-4"
            } ${rightIcon ? "pr-11" : "pr-4"} ${
              mono ? "font-mono text-xs" : "font-quicksand"
            } ${
              error ? "border-[var(--pic-orange,#f37021)] focus:ring-[var(--pic-orange,#f37021)]" : ""
            } ${className}`}
            {...props}
          />

          {rightIcon && (
            <div className="absolute right-4 flex items-center pointer-events-none text-slate-400">
              {rightIcon}
            </div>
          )}
        </div>

        {error ? (
          <p className="text-xs text-[var(--pic-orange,#f37021)] font-medium">{error}</p>
        ) : helperText ? (
          <p className="text-xs text-slate-400">{helperText}</p>
        ) : null}
      </div>
    );
  }
);

Input.displayName = "Input";
