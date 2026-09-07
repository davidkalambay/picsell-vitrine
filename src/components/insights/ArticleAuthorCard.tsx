"use client";

import React from "react";
import { MagneticButton } from "@/components/interactions/MagneticButton";

interface AuthorProps {
  author: {
    name: string;
    role: string;
    avatarBadge: string;
    bio: string;
  };
}

export function ArticleAuthorCard({ author }: AuthorProps) {
  return (
    <div className="p-8 md:p-10 rounded-3xl bg-white/[0.02] border border-white/10 my-16 backdrop-blur-md relative overflow-hidden">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div className="flex items-start gap-4">
          <div className="w-14 h-14 rounded-2xl bg-white/[0.05] border border-white/10 flex items-center justify-center font-sora font-black text-xl text-[#fdb913] shrink-0">
            {author.name.charAt(0)}
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="font-mono text-xs font-bold px-2.5 py-0.5 rounded bg-[#fdb913]/15 text-[#fdb913] border border-[#fdb913]/30">
                {author.avatarBadge}
              </span>
              <span className="text-xs font-mono text-slate-500">Picsell Core Guild</span>
            </div>
            <h4 className="text-xl font-bold font-sora text-white">{author.name}</h4>
            <p className="text-xs font-mono text-slate-400">{author.role}</p>
            <p className="text-sm text-slate-300 mt-2 max-w-xl leading-relaxed">
              {author.bio}
            </p>
          </div>
        </div>

        <div className="shrink-0 w-full sm:w-auto">
          <MagneticButton
            href="#footer-contact"
            strength={0.3}
            textStrength={0.15}
            className="w-full sm:w-auto px-6 py-3 rounded-full text-xs font-bold bg-white/[0.05] border border-white/20 text-white hover:bg-[#fdb913] hover:text-slate-950 transition-all text-center"
          >
            Échanger avec l&apos;auteur →
          </MagneticButton>
        </div>
      </div>
    </div>
  );
}
