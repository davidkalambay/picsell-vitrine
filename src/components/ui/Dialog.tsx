"use client";

import React, { useEffect } from "react";

export interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
  maxWidth?: "sm" | "md" | "lg" | "xl";
}

export const Dialog: React.FC<DialogProps> = ({
  isOpen,
  onClose,
  title,
  description,
  children,
  footer,
  maxWidth = "md",
}) => {
  // ESC key listener to close dialog
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const maxWidthStyles = {
    sm: "max-w-sm",
    md: "max-w-lg",
    lg: "max-w-2xl",
    xl: "max-w-4xl",
  }[maxWidth];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Dynamic Glass Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-md transition-opacity duration-300 animate-in fade-in"
        onClick={onClose}
      />

      {/* Dialog Window */}
      <div
        className={`relative w-full ${maxWidthStyles} bg-white dark:bg-[#0E0F14] border border-black/15 dark:border-white/15 rounded-xl shadow-2xl z-10 overflow-hidden transform transition-all duration-300 animate-in zoom-in-95`}
      >
        {/* Technical Top Border Accent */}
        <div className="h-1 w-full bg-gradient-to-r from-[#0089D0] via-[#3DBCC7] to-[#F37021]" />

        {/* Header */}
        <div className="flex items-start justify-between p-6 border-b border-black/10 dark:border-white/10">
          <div className="space-y-1">
            {title && (
              <h2 className="text-lg font-bold font-sora text-neutral-900 dark:text-white">
                {title}
              </h2>
            )}
            {description && (
              <p className="text-xs font-quicksand text-neutral-500 dark:text-neutral-400">
                {description}
              </p>
            )}
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-neutral-400 hover:text-neutral-900 dark:hover:text-white rounded-[2px] transition-colors focus:outline-none focus:ring-1 focus:ring-[#0089D0]"
            aria-label="Fermer la boîte de dialogue"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="p-6">{children}</div>

        {/* Footer */}
        {footer && (
          <div className="flex items-center justify-end gap-3 p-4 px-6 bg-black/[0.02] dark:bg-white/[0.02] border-t border-black/10 dark:border-white/10">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
};

Dialog.displayName = "Dialog";
