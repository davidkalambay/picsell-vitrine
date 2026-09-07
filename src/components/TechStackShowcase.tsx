'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';

interface TechItem {
  category: 'Framework' | 'Language' | 'Animations' | 'State' | 'Styling' | 'Content' | 'Deployment';
  name: string;
  version: string;
  role: string;
  docs?: string;
}

const TECH_STACK: TechItem[] = [
  {
    category: 'Framework',
    name: 'Next.js',
    version: '16.1.5',
    role: 'App Router, SSR, Image Optimization',
    docs: 'https://nextjs.org',
  },
  {
    category: 'Framework',
    name: 'React',
    version: '19.2.3',
    role: 'UI Components, Server Components',
    docs: 'https://react.dev',
  },
  {
    category: 'Language',
    name: 'TypeScript',
    version: '5.x',
    role: 'Strict Typing, noImplicitAny',
    docs: 'https://www.typescriptlang.org',
  },
  {
    category: 'Animations',
    name: 'GSAP',
    version: '3.14.2',
    role: 'ScrollTrigger, 60 FPS Animations',
    docs: 'https://gsap.com',
  },
  {
    category: 'Animations',
    name: '@gsap/react',
    version: '2.1.2',
    role: 'useGSAP Hook, Auto Cleanup',
    docs: 'https://gsap.com/react',
  },
  {
    category: 'Animations',
    name: 'Lenis',
    version: '1.3.26',
    role: 'Smooth Scroll, GSAP Sync',
    docs: 'https://lenis.strolisia.com',
  },
  {
    category: 'Animations',
    name: 'Framer Motion',
    version: '12.29.2',
    role: 'UI Transitions, Drawers, Modals',
    docs: 'https://www.framer.com/motion',
  },
  {
    category: 'State',
    name: 'Zustand',
    version: '5.0.10',
    role: 'Atomic State Stores',
    docs: 'https://github.com/pmndrs/zustand',
  },
  {
    category: 'Styling',
    name: 'Tailwind CSS',
    version: '4.x',
    role: '@tailwindcss/postcss, Theme Variables',
    docs: 'https://tailwindcss.com',
  },
  {
    category: 'Content',
    name: '@next/mdx',
    version: '16.1.6',
    role: 'Local MDX, Integrated Docs',
    docs: 'https://nextjs.org/docs/app/building-your-application/configuring/mdx',
  },
  {
    category: 'Deployment',
    name: 'Vercel',
    version: 'Latest',
    role: 'Hosting, CI/CD, Analytics',
    docs: 'https://vercel.com',
  },
  {
    category: 'Deployment',
    name: 'GitHub',
    version: 'N/A',
    role: 'Monorepo, PR Workflows, VCS',
    docs: 'https://github.com/davidkalambay/picsell-vitrine',
  },
];

const CATEGORY_COLORS: Record<string, string> = {
  Framework: 'bg-blue-500/20 border-blue-500/50 text-blue-300',
  Language: 'bg-purple-500/20 border-purple-500/50 text-purple-300',
  Animations: 'bg-pink-500/20 border-pink-500/50 text-pink-300',
  State: 'bg-amber-500/20 border-amber-500/50 text-amber-300',
  Styling: 'bg-emerald-500/20 border-emerald-500/50 text-emerald-300',
  Content: 'bg-cyan-500/20 border-cyan-500/50 text-cyan-300',
  Deployment: 'bg-orange-500/20 border-orange-500/50 text-orange-300',
};

interface TechCardProps {
  tech: TechItem;
  index: number;
}

const TechCard: React.FC<TechCardProps> = ({ tech, index }) => {
  const categoryColor = CATEGORY_COLORS[tech.category];

  return (
    <div
      className="tech-card group relative border border-zinc-700 rounded-lg p-6 bg-zinc-900/50 hover:bg-zinc-900/80 transition-all duration-300 hover:border-zinc-600 cursor-pointer"
      data-index={index}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 rounded-lg transition-opacity duration-300" />

      <div className="relative z-10">
        {/* Category Badge */}
        <div className={`inline-block px-2 py-1 rounded text-xs font-mono ${categoryColor} border mb-2`}>
          {tech.category}
        </div>

        {/* Tech Name */}
        <h4 className="text-lg font-bold text-white mb-1">{tech.name}</h4>

        {/* Version */}
        <div className="text-sm text-zinc-400 font-mono mb-3">
          v<span className="text-cyan-400 font-bold">{tech.version}</span>
        </div>

        {/* Role */}
        <p className="text-sm text-zinc-300 mb-4 leading-relaxed">{tech.role}</p>

        {/* Link */}
        {tech.docs && (
          <a
            href={tech.docs}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            Documentation
            <span>→</span>
          </a>
        )}
      </div>
    </div>
  );
};

export default function TechStackShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      const cards = containerRef.current.querySelectorAll('.tech-card');
      gsap.fromTo(
        cards,
        { opacity: 0, scale: 0.9, y: 20 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.08,
          ease: 'back.out(1.5)',
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
          Modern Tech Stack
        </h2>
        <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
          Battle-tested technologies, production-validated versions
        </p>
      </div>

      {/* Tech Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {TECH_STACK.map((tech, index) => (
          <TechCard key={`${tech.category}-${tech.name}`} tech={tech} index={index} />
        ))}
      </div>

      {/* Performance Commitments */}
      <div className="mt-20 pt-16 border-t border-zinc-700">
        <h3 className="text-2xl font-bold text-white mb-8 text-center">Quality Commitments</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 border border-zinc-700 rounded-lg bg-zinc-900/30 text-center">
            <div className="text-3xl font-bold text-cyan-400 mb-2">60</div>
            <div className="text-sm text-zinc-400">FPS Target</div>
          </div>
          <div className="p-4 border border-zinc-700 rounded-lg bg-zinc-900/30 text-center">
            <div className="text-3xl font-bold text-cyan-400 mb-2">≥95</div>
            <div className="text-sm text-zinc-400">Lighthouse Score</div>
          </div>
          <div className="p-4 border border-zinc-700 rounded-lg bg-zinc-900/30 text-center">
            <div className="text-3xl font-bold text-cyan-400 mb-2">0</div>
            <div className="text-sm text-zinc-400">TypeScript Errors</div>
          </div>
          <div className="p-4 border border-zinc-700 rounded-lg bg-zinc-900/30 text-center">
            <div className="text-3xl font-bold text-cyan-400 mb-2">AA</div>
            <div className="text-sm text-zinc-400">WCAG Compliance</div>
          </div>
        </div>
      </div>
    </section>
  );
}
