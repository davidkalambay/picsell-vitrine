'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';

interface PillarProps {
  number: number;
  title: string;
  subtitle: string;
  points: string[];
  icon: React.ReactNode;
}

const Pillar: React.FC<PillarProps> = ({ number, title, subtitle, points, icon }) => (
  <div className="relative group">
    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-transparent opacity-0 group-hover:opacity-100 rounded-lg blur-xl transition-opacity duration-500" />
    <div className="relative p-6 border border-zinc-700 rounded-lg bg-zinc-900/50 backdrop-blur-sm hover:bg-zinc-900/80 transition-colors duration-300">
      <div className="flex items-start gap-4 mb-4">
        <div className="text-3xl">{icon}</div>
        <div className="flex-1">
          <div className="text-sm font-mono text-cyan-400">Pillar {number}</div>
          <h3 className="text-lg font-bold text-white mt-1">{title}</h3>
          <p className="text-sm text-zinc-400 mt-2">{subtitle}</p>
        </div>
      </div>
      <ul className="space-y-2 mt-4">
        {points.map((point, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-zinc-300">
            <span className="text-cyan-400 mt-1">→</span>
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default function BmadManifesto() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      const pillars = containerRef.current.querySelectorAll('.pillar-item');
      gsap.fromTo(
        pillars,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: 'power2.out',
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <section ref={containerRef} className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Header */}
      <div className="mb-16 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
          Inside the Engine
        </h2>
        <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
          Engineering Excellence Without the Black Box
        </p>
        <p className="text-sm text-zinc-500 mt-3">
          Picsell Agency builds with human oversight at every stage
        </p>
      </div>

      {/* Manifesto Statement */}
      <div className="bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900 border border-zinc-700 rounded-lg p-8 mb-12">
        <p className="text-center text-zinc-300 text-base leading-relaxed">
          <span className="text-cyan-400 font-semibold">No magic, no shortcuts, no black boxes.</span>
          {' '}Every deliverable passes through rigorous human expert oversight, automated quality checks, and final certification.
          We measure success by <span className="text-cyan-400 font-semibold">standards, not promises.</span>
        </p>
      </div>

      {/* 3 Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        <div className="pillar-item">
          <Pillar
            number={1}
            title="Human Expert Supervision"
            subtitle="Vetted engineering with personal accountability"
            icon="👤"
            points={[
              'Client discovery & requirements validation',
              'Architecture review & competitive analysis',
              'Final QA handoff & knowledge transfer',
              '100% responsibility on human expert',
            ]}
          />
        </div>

        <div className="pillar-item">
          <Pillar
            number={2}
            title="AI Quality Chain"
            subtitle="Augmentation without replacement"
            icon="⚙️"
            points={[
              'Automated code analysis (TypeScript strict)',
              'Performance & security scanning (OWASP)',
              'Compliance & accessibility verification',
              'All AI reasoning is traceable & documented',
            ]}
          />
        </div>

        <div className="pillar-item">
          <Pillar
            number={3}
            title="Validation & Certification"
            subtitle="Measured quality, not promises"
            icon="✅"
            points={[
              'Build strictness: Zero TypeScript errors',
              'Test coverage: 100% critical paths',
              'Performance: Lighthouse ≥ 95, 60 FPS',
              'Accessibility: WCAG 2.1 AA compliance',
            ]}
          />
        </div>
      </div>

      {/* Quality Promise */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 border border-zinc-700 rounded-lg bg-zinc-900/30">
          <h4 className="text-white font-bold mb-3">What You Get</h4>
          <ul className="space-y-2 text-sm text-zinc-300">
            <li className="flex items-center gap-2">
              <span className="text-emerald-400">✓</span>
              <span>Maintainable, documented code</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-emerald-400">✓</span>
              <span>Performance-first architecture</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-emerald-400">✓</span>
              <span>Complete transparency on tech choices</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-emerald-400">✓</span>
              <span>Scalable, future-proof solutions</span>
            </li>
          </ul>
        </div>

        <div className="p-6 border border-zinc-700 rounded-lg bg-zinc-900/30">
          <h4 className="text-white font-bold mb-3">Our Standards</h4>
          <ul className="space-y-2 text-sm text-zinc-300">
            <li className="flex items-center gap-2">
              <span className="text-cyan-400">→</span>
              <span>TypeScript strict mode (noImplicitAny)</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-cyan-400">→</span>
              <span>60 FPS animations with GSAP</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-cyan-400">→</span>
              <span>LCP &lt; 1.2s, CLS = 0</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-cyan-400">→</span>
              <span>WCAG 2.1 AA accessible to all</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
