"use client";

import React from "react";

export interface SegmentedControlOption<T extends string = string> {
  value: T;
  label: string;
  icon?: string | React.ReactNode;
  count?: number;
  color?: string;
}

export interface SegmentedControlProps<T extends string = string> {
  options: SegmentedControlOption<T>[];
  value: T;
  onChange: (value: T) => void;
  fullWidth?: boolean;
  className?: string;
}

export function SegmentedControl<T extends string = string>({
  options,
  value,
  onChange,
  fullWidth = true,
  className = "",
}: SegmentedControlProps<T>) {
  return (
    <div
      className={`grid gap-1.5 p-1.5 rounded-2xl bg-white/[0.04] border border-white/10 ${
        fullWidth ? "w-full" : "inline-grid"
      } ${className}`}
      style={{ gridTemplateColumns: `repeat(${options.length}, minmax(0, 1fr))` }}
    >
      {options.map((option) => {
        const isActive = option.value === value;
        return (
          <button
            key={option.value}
            type="button"
            onClick={() => onChange(option.value)}
            className={`py-2 px-1 rounded-xl text-[11px] font-bold font-sora flex flex-col items-center justify-center gap-1 transition-all select-none cursor-pointer ${
              isActive
                ? "bg-white/15 text-white shadow-lg border border-white/20"
                : "text-slate-400 hover:text-slate-200 hover:bg-white/5"
            }`}
          >
            <div className="flex items-center gap-1">
              {option.icon && <span>{option.icon}</span>}
              <span>{option.label}</span>
            </div>
            {typeof option.count === "number" && (
              <span
                className="text-[9px] font-mono px-1.5 py-0.2 rounded-full bg-black/30"
                style={{ color: option.color || "currentColor" }}
              >
                {option.count}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}

SegmentedControl.displayName = "SegmentedControl";
