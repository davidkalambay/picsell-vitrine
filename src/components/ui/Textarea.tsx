"use client";

import React from "react";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  helperText?: string;
  error?: string;
  mono?: boolean;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      className = "",
      label,
      helperText,
      error,
      mono = false,
      disabled,
      id,
      rows = 4,
      ...props
    },
    ref
  ) => {
    const generatedId = React.useId();
    const textareaId = id || generatedId;

    return (
      <div className="w-full space-y-2">
        {label && (
          <label
            htmlFor={textareaId}
            className="block text-xs font-bold text-slate-300 font-sora tracking-wide"
          >
            {label}
          </label>
        )}

        <textarea
          ref={ref}
          id={textareaId}
          rows={rows}
          disabled={disabled}
          className={`w-full bg-white/[0.04] text-white text-sm rounded-2xl border border-white/10 transition-all duration-300 p-4 outline-none placeholder:text-slate-500 disabled:opacity-50 disabled:cursor-not-allowed resize-y focus:border-[var(--pic-blue,#0089d0)] focus:bg-white/[0.07] focus:ring-1 focus:ring-[var(--pic-blue,#0089d0)]/50 ${
            mono ? "font-mono text-xs" : "font-quicksand"
          } ${
            error ? "border-[var(--pic-orange,#f37021)] focus:ring-[var(--pic-orange,#f37021)]" : ""
          } ${className}`}
          {...props}
        />

        {error ? (
          <p className="text-xs text-[var(--pic-orange,#f37021)] font-medium">{error}</p>
        ) : helperText ? (
          <p className="text-xs text-slate-400">{helperText}</p>
        ) : null}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";
