import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { ConversionHub } from "@/components/conversion/ConversionHub";

export default function ArticleNotFound() {
  return (
    <main className="min-h-screen bg-[#06070a] text-white flex flex-col justify-between">
      <Navbar />
      <div className="py-44 px-6 text-center max-w-lg mx-auto">
        <span className="text-6xl font-mono text-[#fdb913] mb-6 block font-bold">404</span>
        <h1 className="text-3xl font-black font-sora mb-4">Article Introuvable</h1>
        <p className="text-slate-400 text-sm mb-8 leading-relaxed">
          La publication demandée a peut-être été déplacée ou n&apos;existe plus dans notre registre.
        </p>
        <Link
          href="/insights"
          className="px-8 py-3.5 rounded-full text-xs font-mono font-bold bg-[#fdb913] text-slate-950 hover:bg-[#e5a60e] transition-all inline-block shadow-lg"
        >
          Retourner aux Insights →
        </Link>
      </div>
      <ConversionHub />
    </main>
  );
}
