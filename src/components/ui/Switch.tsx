"use client";

import React from "react";

export interface SwitchProps {
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
  label?: string;
  description?: string;
  disabled?: boolean;
  color?: "orange" | "turquoise" | "blue" | "gold" | "green";
  id?: string;
}

export const Switch: React.FC<SwitchProps> = ({
  checked,
  onCheckedChange,
  label,
  description,
  disabled = false,
  color = "orange",
  id,
}) => {
  const generatedId = React.useId();
  const switchId = id || generatedId;

  const colorStyles = {
    orange: "bg-[var(--pic-orange,#f37021)]",
    turquoise: "bg-[var(--pic-turquoise,#3dbcc7)]",
    blue: "bg-[var(--pic-blue,#0089d0)]",
    gold: "bg-[var(--pic-gold,#fdb913)]",
    green: "bg-[#10b981]",
  }[color];

  return (
    <div className="flex items-center justify-between gap-4 select-none py-2">
      {(label || description) && (
        <div className="flex flex-col">
          {label && (
            <label
              htmlFor={switchId}
              className={`text-xs font-bold font-sora cursor-pointer ${
                disabled ? "opacity-50 cursor-not-allowed" : "text-white"
              }`}
            >
              {label}
            </label>
          )}
          {description && (
            <span className="text-[11px] text-slate-400 font-quicksand mt-0.5">
              {description}
            </span>
          )}
        </div>
      )}

      <button
        id={switchId}
        type="button"
        role="switch"
        aria-checked={checked}
        disabled={disabled}
        onClick={() => !disabled && onCheckedChange(!checked)}
        className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-white/20 disabled:opacity-50 disabled:cursor-not-allowed ${
          checked ? colorStyles : "bg-white/10"
        }`}
      >
        <span
          className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-md ring-0 transition duration-200 ease-in-out ${
            checked ? "translate-x-5" : "translate-x-0"
          }`}
        />
      </button>
    </div>
  );
};

Switch.displayName = "Switch";
