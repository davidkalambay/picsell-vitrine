'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef, useState } from 'react';

interface GlassEngineProps {
  children?: React.ReactNode;
  technicalContent?: React.ReactNode;
  title?: string;
  defaultMode?: 'ui' | 'technical';
  animationDuration?: number;
}

interface GlassEngineToggleProps {
  isActive: boolean;
  onChange: (active: boolean) => void;
  title?: string;
}

const GlassEngineToggle: React.FC<GlassEngineToggleProps> = ({ isActive, onChange, title = 'Glass Mode' }) => {
  return (
    <button
      onClick={() => onChange(!isActive)}
      onKeyDown={(e) => {
        if (e.key === ' ' || e.key === 'Enter') {
          e.preventDefault();
          onChange(!isActive);
        }
      }}
      className="group flex items-center gap-3 px-4 py-2 rounded-lg border border-zinc-700 bg-zinc-900/50 hover:bg-zinc-800/50 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-cyan-400"
      aria-pressed={isActive}
      aria-label={`${title}: ${isActive ? 'On' : 'Off'}`}
      type="button"
    >
      <span className="text-sm font-medium text-zinc-300">{title}</span>
      
      {/* Toggle Switch */}
      <div className={`relative w-12 h-6 rounded-full transition-colors duration-300 ${
        isActive ? 'bg-cyan-600' : 'bg-zinc-700'
      }`}>
        <div
          className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform duration-300 ${
            isActive ? 'translate-x-6' : 'translate-x-0'
          }`}
        />
      </div>
      
      <span className={`text-xs font-mono transition-colors duration-300 ${
        isActive ? 'text-cyan-400' : 'text-zinc-500'
      }`}>
        {isActive ? 'ON' : 'OFF'}
      </span>
    </button>
  );
};

export default function GlassEngine({
  children,
  technicalContent,
  title = 'Glass Engine',
  defaultMode = 'ui',
  animationDuration = 0.4,
}: GlassEngineProps) {
  const [isGlassMode, setIsGlassMode] = useState(defaultMode === 'technical');
  const containerRef = useRef<HTMLDivElement>(null);
  const uiLayerRef = useRef<HTMLDivElement>(null);
  const technicalLayerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!uiLayerRef.current || !technicalLayerRef.current) return;

      gsap.to(uiLayerRef.current, {
        opacity: isGlassMode ? 0 : 1,
        duration: animationDuration,
        ease: 'power2.inOut',
      });

      gsap.to(technicalLayerRef.current, {
        opacity: isGlassMode ? 1 : 0,
        duration: animationDuration,
        ease: 'power2.inOut',
      });
    },
    { scope: containerRef, dependencies: [isGlassMode] }
  );

  return (
    <div ref={containerRef} className="w-full">
      {/* Header with Toggle */}
      <div className="mb-4 flex items-center justify-between">
        {title && <h4 className="text-sm font-semibold text-white">{title}</h4>}
        <GlassEngineToggle
          isActive={isGlassMode}
          onChange={setIsGlassMode}
          title="Transparent Mode"
        />
      </div>

      {/* Content Container */}
      <div className="relative w-full overflow-hidden rounded-lg border border-zinc-700 bg-zinc-950">
        {/* UI Layer */}
        <div
          ref={uiLayerRef}
          className="absolute inset-0 z-10 w-full"
          style={{ willChange: 'opacity' }}
        >
          <div className="absolute top-0 left-0 px-3 py-2 text-xs font-mono text-zinc-500 pointer-events-none">
            UI Layer
          </div>
          <div className="pt-8">
            {children}
          </div>
        </div>

        {/* Technical Layer */}
        <div
          ref={technicalLayerRef}
          className="relative w-full opacity-0 z-0"
          style={{ willChange: 'opacity' }}
        >
          <div className="absolute top-0 left-0 px-3 py-2 text-xs font-mono text-cyan-400 pointer-events-none">
            Technical Layer
          </div>
          <div className="pt-8">
            {technicalContent || (
              <div className="p-6 text-zinc-400 text-sm">
                <div className="bg-zinc-900/50 rounded p-4 border border-zinc-800 font-mono">
                  <div className="text-zinc-500">{'{/* Technical architecture diagram */}'}</div>
                  <div className="text-emerald-400 mt-2">✓ Service architecture</div>
                  <div className="text-emerald-400">✓ Data flow diagram</div>
                  <div className="text-emerald-400">✓ Technology stack</div>
                  <div className="text-emerald-400">✓ Integration points</div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Fallback: Ensure min-height for empty state */}
        {!children && !technicalContent && (
          <div className="p-12 text-center text-zinc-500 text-sm">
            Add children or technicalContent to GlassEngine
          </div>
        )}
      </div>

      {/* Accessibility: Live region for mode announcements */}
      <div
        role="status"
        aria-live="polite"
        aria-atomic="true"
        className="sr-only"
      >
        {isGlassMode ? 'Technical layer visible' : 'UI layer visible'}
      </div>
    </div>
  );
}
