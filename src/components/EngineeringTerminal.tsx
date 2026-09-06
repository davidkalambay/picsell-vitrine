'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef, useState } from 'react';

interface CodeTab {
  label: string;
  icon: string;
  language: string;
  code: string;
}

interface CodeLine {
  text: string;
}

const PRESET_CODE_EXAMPLES: CodeTab[] = [
  {
    label: 'schema.ts',
    icon: '📄',
    language: 'typescript',
    code: `export interface ServiceConfig {
  id: string;
  name: string;
  description: string;
  enabled: boolean;
  metadata: Record<string, unknown>;
}

export type ServiceModule =
  | 'development'
  | 'marketing'
  | 'automation'
  | 'data';

export interface ProjectScope {
  services: ServiceConfig[];
  timeline: string;
  budget: number;
  kpis: string[];
}`,
  },
  {
    label: 'workflow.json',
    icon: '📋',
    language: 'json',
    code: `{
  "version": "1.0",
  "name": "picsell-vitrine-deployment",
  "triggers": ["push:main", "schedule:daily"],
  "jobs": {
    "build": {
      "runs-on": "ubuntu-latest",
      "steps": [
        {
          "uses": "actions/checkout@v4"
        },
        {
          "name": "Install dependencies",
          "run": "npm ci"
        },
        {
          "name": "Build & validate",
          "run": "npm run build"
        }
      ]
    }
  }
}`,
  },
  {
    label: 'pipeline.yml',
    icon: '⚙️',
    language: 'yaml',
    code: `stages:
  - validate
  - build
  - test
  - deploy

variables:
  NODE_VERSION: "20.x"
  CACHE_DIR: ".cache"

before_script:
  - npm ci --cache .cache --prefer-offline

deploy:vercel:
  stage: deploy
  script:
    - npm run deploy:prod
  only: [main]`,
  },
];

const getTokenColor = (token: string, language: string): string => {
  if (['export', 'interface', 'type', 'const', 'let', 'var', 'function', 'class', 'import', 'from', 'default', 'return', 'if', 'else', 'for', 'while'].includes(token)) {
    return 'text-cyan-400';
  }
  if (token.startsWith('"') || token.startsWith("'") || token.startsWith('`')) {
    return 'text-emerald-400';
  }
  if (/^\d+/.test(token)) {
    return 'text-amber-400';
  }
  if (['true', 'false', 'null', 'undefined'].includes(token)) {
    return 'text-pink-400';
  }
  if (token.startsWith('//') || token.startsWith('#')) {
    return 'text-zinc-500';
  }
  if (['[', ']', '{', '}', '(', ')'].includes(token)) {
    return 'text-zinc-400';
  }
  return 'text-zinc-300';
};

interface HighlightedCodeProps {
  code: string;
  language: string;
  lines?: CodeLine[];
}

const HighlightedCode: React.FC<HighlightedCodeProps> = ({ code, language, lines }) => {
  const displayLines = lines ? lines.map(l => l.text) : code.split('\n');
  
  return (
    <div className="font-mono text-sm leading-relaxed overflow-x-auto">
      <div className="bg-zinc-950 p-4">
        {displayLines.map((line, idx) => (
          <div key={idx} className="flex gap-3 hover:bg-zinc-900/50 transition-colors">
            <span className="w-8 text-right text-zinc-600 select-none flex-shrink-0">
              {idx + 1}
            </span>
            <span className="flex-1 text-zinc-300">
              {line.split(/(\s+|[{}[\]():",;])/).map((token, tokenIdx) => (
                token.trim() ? (
                  <span key={tokenIdx} className={getTokenColor(token, language)}>
                    {token}
                  </span>
                ) : (
                  <span key={tokenIdx}>{token}</span>
                )
              ))}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

interface EngineeringTerminalProps {
  title?: string;
  description?: string;
  defaultTab?: 0 | 1 | 2;
  filename?: string;
  language?: string;
  tagLabel?: string;
  accentColor?: string;
  lines?: CodeLine[];
}

export default function EngineeringTerminal({
  title = 'Engineering Terminal',
  description = 'Inspect real code from our architecture',
  defaultTab = 0,
  filename,
  language,
  tagLabel,
  accentColor = '#00F5FF',
  lines,
}: EngineeringTerminalProps) {
  const [activeTab, setActiveTab] = useState(defaultTab);
  const [showCopyFeedback, setShowCopyFeedback] = useState(false);
  const [showFullscreen, setShowFullscreen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const codeDisplayRef = useRef<HTMLDivElement>(null);

  const isCustomFormat = filename !== undefined;
  const codeExamples = isCustomFormat ? [] : PRESET_CODE_EXAMPLES;
  const currentCode = isCustomFormat
    ? { label: filename || '', icon: '📄', language: language || 'typescript', code: '' }
    : codeExamples[activeTab];

  useGSAP(
    () => {
      if (!codeDisplayRef.current) return;
      gsap.fromTo(
        codeDisplayRef.current,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' }
      );
    },
    { scope: containerRef, dependencies: [activeTab] }
  );

  const handleCopy = async () => {
    const textToCopy = isCustomFormat
      ? lines?.map(l => l.text).join('\n') || ''
      : currentCode.code;
    try {
      await navigator.clipboard.writeText(textToCopy);
      setShowCopyFeedback(true);
      setTimeout(() => setShowCopyFeedback(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <>
      <section ref={containerRef} className="py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {!isCustomFormat && (
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
            <p className="text-zinc-400">{description}</p>
          </div>
        )}

        <div className="border border-zinc-700 rounded-lg bg-zinc-950 overflow-hidden shadow-2xl">
          {!isCustomFormat ? (
            <>
              <div className="flex gap-4 border-b border-zinc-700 p-4 bg-zinc-900/50 backdrop-blur-sm overflow-x-auto">
                {codeExamples.map((tab, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveTab(idx as 0 | 1 | 2)}
                    className={`flex items-center gap-2 px-4 py-2 rounded transition-all duration-200 flex-shrink-0 ${
                      activeTab === idx
                        ? 'border-b-2 border-cyan-400 text-white font-semibold'
                        : 'text-zinc-400 hover:text-zinc-300 border-b-2 border-transparent'
                    }`}
                  >
                    <span className="text-lg">{tab.icon}</span>
                    <span className="text-sm font-mono">{tab.label}</span>
                  </button>
                ))}
              </div>

              <div ref={codeDisplayRef} className="overflow-hidden">
                <HighlightedCode code={currentCode.code} language={currentCode.language} />
              </div>
            </>
          ) : (
            <>
              {tagLabel && (
                <div className="px-4 py-3 border-b border-zinc-700 bg-zinc-900/30" style={{ borderLeftColor: accentColor, borderLeftWidth: '4px' }}>
                  <span className="text-xs font-mono" style={{ color: accentColor }}>
                    {tagLabel}
                  </span>
                </div>
              )}
              <div ref={codeDisplayRef} className="overflow-hidden">
                <HighlightedCode code="" language={language || 'typescript'} lines={lines} />
              </div>
            </>
          )}

          <div className="flex gap-2 p-4 bg-zinc-900/50 border-t border-zinc-700">
            <button
              onClick={handleCopy}
              className={`flex items-center gap-2 px-4 py-2 rounded transition-all duration-200 ${
                showCopyFeedback
                  ? 'bg-emerald-600/20 text-emerald-400 border border-emerald-500'
                  : 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700 border border-zinc-700'
              }`}
            >
              <span className="text-sm">📋</span>
              <span className="text-sm">{showCopyFeedback ? 'Copied!' : 'Copy'}</span>
            </button>

            {!isCustomFormat && (
              <button
                onClick={() => setShowFullscreen(true)}
                className="flex items-center gap-2 px-4 py-2 rounded bg-zinc-800 text-zinc-300 hover:bg-zinc-700 border border-zinc-700 transition-all duration-200"
              >
                <span className="text-sm">⛶</span>
                <span className="text-sm">Fullscreen</span>
              </button>
            )}
          </div>
        </div>
      </section>

      {showFullscreen && !isCustomFormat && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-zinc-950 rounded-lg border border-zinc-700 w-full max-h-[90vh] overflow-hidden flex flex-col max-w-5xl">
            <div className="flex items-center justify-between p-4 border-b border-zinc-700 bg-zinc-900/50">
              <div>
                <h4 className="text-white font-bold flex items-center gap-2">
                  <span className="text-lg">{currentCode.icon}</span>
                  {currentCode.label}
                </h4>
              </div>
              <button
                onClick={() => setShowFullscreen(false)}
                className="p-2 hover:bg-zinc-800 rounded transition-colors text-zinc-400 hover:text-white"
              >
                ✕
              </button>
            </div>

            <div className="overflow-auto flex-1">
              <HighlightedCode code={currentCode.code} language={currentCode.language} />
            </div>

            <div className="flex gap-2 p-4 border-t border-zinc-700 bg-zinc-900/50">
              <button
                onClick={handleCopy}
                className="flex items-center gap-2 px-4 py-2 rounded bg-zinc-800 text-zinc-300 hover:bg-zinc-700 border border-zinc-700 transition-all"
              >
                <span>📋</span>
                <span>Copy Code</span>
              </button>
              <button
                onClick={() => setShowFullscreen(false)}
                className="ml-auto px-4 py-2 rounded bg-cyan-600/20 text-cyan-400 hover:bg-cyan-600/30 border border-cyan-500 transition-all"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
