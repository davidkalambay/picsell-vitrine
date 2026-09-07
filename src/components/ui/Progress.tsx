"use client";

import React from "react";

export type ProgressColor = "blue" | "orange" | "cyan" | "yellow" | "gradient";

export interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number;
  max?: number;
  label?: string;
  showValue?: boolean;
  color?: ProgressColor;
  size?: "sm" | "md" | "lg";
  ticks?: boolean;
}

export const Progress: React.FC<ProgressProps> = ({
  value,
  max = 100,
  label,
  showValue = true,
  color = "blue",
  size = "md",
  ticks = false,
  className = "",
  ...props
}) => {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

  const heightStyles = {
    sm: "h-1.5",
    md: "h-2.5",
    lg: "h-4",
  }[size];

  const colorStyles = {
    blue: "bg-[#0089D0]",
    orange: "bg-[#F37021]",
    cyan: "bg-[#3DBCC7]",
    yellow: "bg-[#FDB913]",
    gradient: "bg-gradient-to-r from-[#0089D0] via-[#3DBCC7] to-[#F37021]",
  }[color];

  return (
    <div className={`w-full space-y-1.5 ${className}`} {...props}>
      {(label || showValue) && (
        <div className="flex justify-between items-center text-xs font-mono">
          {label && (
            <span className="font-semibold text-neutral-700 dark:text-neutral-300 uppercase tracking-wider">
              {label}
            </span>
          )}
          {showValue && (
            <span className="text-neutral-500 dark:text-neutral-400 tabular-nums">
              {percentage.toFixed(0)}%
            </span>
          )}
        </div>
      )}

      <div
        className={`w-full bg-black/10 dark:bg-white/10 rounded-[2px] overflow-hidden relative ${heightStyles}`}
      >
        <div
          className={`h-full transition-all duration-500 ease-out rounded-[2px] ${colorStyles}`}
          style={{ width: `${percentage}%` }}
        />

        {/* Optional Technical Watchmaking Ticks */}
        {ticks && (
          <div className="absolute inset-0 flex justify-between pointer-events-none px-1">
            {[...Array(10)].map((_, i) => (
              <div
                key={i}
                className="w-0.5 h-full bg-black/20 dark:bg-white/20"
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

Progress.displayName = "Progress";
