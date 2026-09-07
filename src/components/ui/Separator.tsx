"use client";

import React from "react";

export interface SeparatorProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: "horizontal" | "vertical";
  variant?: "solid" | "dashed" | "blueprint";
  label?: string;
}

export const Separator: React.FC<SeparatorProps> = ({
  orientation = "horizontal",
  variant = "solid",
  label,
  className = "",
  ...props
}) => {
  const isHorizontal = orientation === "horizontal";

  if (label && isHorizontal) {
    return (
      <div
        className={`flex items-center gap-3 w-full my-4 select-none ${className}`}
        {...props}
      >
        <div className="flex-1 h-px bg-black/10 dark:bg-white/10" />
        <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 dark:text-neutral-500">
          {label}
        </span>
        <div className="flex-1 h-px bg-black/10 dark:bg-white/10" />
      </div>
    );
  }

  const variantStyles = {
    solid: "bg-black/10 dark:bg-white/10",
    dashed:
      "bg-transparent border-t border-dashed border-black/20 dark:border-white/20",
    blueprint:
      "bg-transparent border-t border-dashed border-[#0089D0]/30 dark:border-[#0089D0]/40",
  }[variant];

  return (
    <div
      role="separator"
      aria-orientation={orientation}
      className={`${
        isHorizontal ? "w-full h-px" : "h-full w-px"
      } ${variantStyles} ${className}`}
      {...props}
    />
  );
};

Separator.displayName = "Separator";
