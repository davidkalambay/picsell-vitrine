"use client";

import React, { useState, useEffect } from "react";
import { SplitTextReveal } from "@/components/animations/SplitTextReveal";
import { MagneticButton } from "@/components/interactions/MagneticButton";
import { trackEvent } from "@/lib/analytics";
import {
  ShieldCheck,
  ExternalLink,
  Award,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  Briefcase,
  Mail,
  Building2,
  User,
  Phone,
  ArrowRight,
  RefreshCw,
} from "lucide-react";

interface FormState {
  name: string;
  company: string;
  email: string;
  phone: string;
  pillar: "marketing" | "automation" | "development" | "data" | "multi";
  budget: "< $5k" | "$5k - $15k" | "$15k - $50k" | "> $50k";
  urgency: "immediate" | "1_month" | "quarter";
  details: string;
}

const INITIAL_FORM: FormState = {
  name: "",
  company: "",
  email: "",
  phone: "",
  pillar: "development",
  budget: "$5k - $15k",
  urgency: "1_month",
  details: "",
};

export function ConversionHub() {
  const [activeTunnel, setActiveTunnel] = useState<"both" | "upwork" | "consultation">("both");
  const [formData, setFormData] = useState<FormState>(INITIAL_FORM);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [successReceipt, setSuccessReceipt] = useState<{
    auditId: string;
    message: string;
    company: string;
    timestamp: string;
  } | null>(null);

  // Kinshasa Local Time Live Clock (GMT+1)
  const [kinshasaTime, setKinshasaTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      try {
        const now = new Date();
        const formatter = new Intl.DateTimeFormat("fr-FR", {
          timeZone: "Africa/Kinshasa",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        });
        setKinshasaTime(formatter.format(now));
      } catch {
        setKinshasaTime("Kinshasa GMT+1");
      }
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (fieldErrors[name]) {
      setFieldErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handlePillarSelect = (pillar: FormState["pillar"]) => {
    setFormData((prev) => ({ ...prev, pillar }));
    trackEvent("view_pillar", { pillar_id: pillar, pillar_name: pillar });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);
    setFieldErrors({});

    try {
      const res = await fetch("/api/consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        if (data.details) {
          setFieldErrors(data.details);
        }
        setSubmitError(data.error || "Impossible d'enregistrer la demande. Veuillez vérifier les champs.");
        return;
      }

      // Success
      setSuccessReceipt({
        auditId: data.auditId,
        message: data.message,
        company: formData.company,
        timestamp: new Date().toLocaleTimeString("fr-FR"),
      });

      trackEvent("submit_consultation", {
        pillar: formData.pillar,
        budget: formData.budget,
        urgency: formData.urgency,
      });

      setFormData(INITIAL_FORM);
    } catch {
      setSubmitError("Une erreur de communication est survenue. Veuillez réessayer ou nous contacter directement.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="footer-contact"
      className="relative bg-gradient-to-b from-[#06070a] via-[#040406] to-[#020204] text-[#f4f4f6] pt-32 pb-16 px-6 border-t border-white/10 overflow-hidden"
    >
      {/* Background radial glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-b from-[#fdb913]/10 to-transparent blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#fdb913] mb-4">
            <span className="w-2 h-2 rounded-full bg-[#fdb913] animate-pulse" />
            DISPONIBILITÉ ACTIVE // Q3-Q4 2026
          </div>
          <SplitTextReveal
            as="h2"
            trigger="scroll"
            stagger={0.03}
            duration={0.7}
            flavor="clockwork"
            className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-6 font-sora"
          >
            Deux passerelles. Zéro friction. Précision garantie.
          </SplitTextReveal>
          <p className="text-base md:text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto font-sans">
            Que vous soyez un Tech Lead international cherchant une contractualisation Upwork sécurisée,
            ou un dirigeant d&apos;entreprise en Afrique souhaitant un cadrage stratégique direct.
          </p>

          {/* Filter switcher buttons */}
          <div
            className="flex items-center justify-center gap-2 mt-8 p-1.5 rounded-full bg-black/40 border border-white/10 max-w-md mx-auto"
            role="tablist"
            aria-label="Sélection du tunnel de conversion"
          >
            <button
              id="tab-all-tunnels"
              role="tab"
              aria-selected={activeTunnel === "both"}
              onClick={() => setActiveTunnel("both")}
              className={`flex-1 py-2 px-4 rounded-full text-xs font-mono transition-all ${
                activeTunnel === "both"
                  ? "bg-white/15 text-white shadow-sm"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Les Deux Tunnels
            </button>
            <button
              id="tab-upwork-tunnel"
              role="tab"
              aria-selected={activeTunnel === "upwork"}
              onClick={() => setActiveTunnel("upwork")}
              className={`flex-1 py-2 px-4 rounded-full text-xs font-mono transition-all ${
                activeTunnel === "upwork"
                  ? "bg-[#3dbcc7]/20 text-[#3dbcc7] border border-[#3dbcc7]/30"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Tunnel Upwork
            </button>
            <button
              id="tab-consultation-tunnel"
              role="tab"
              aria-selected={activeTunnel === "consultation"}
              onClick={() => setActiveTunnel("consultation")}
              className={`flex-1 py-2 px-4 rounded-full text-xs font-mono transition-all ${
                activeTunnel === "consultation"
                  ? "bg-[#fdb913]/20 text-[#fdb913] border border-[#fdb913]/30"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Consultation Directe
            </button>
          </div>
        </div>

        {/* Dual Conversion Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-24">
          {/* TUNNEL 1: JAMES (UPWORK INTERNATIONAL) */}
          {(activeTunnel === "both" || activeTunnel === "upwork") && (
            <div
              id="tunnel-james-upwork"
              className={`${
                activeTunnel === "upwork" ? "lg:col-span-12 max-w-3xl mx-auto" : "lg:col-span-5"
              } rounded-2xl bg-[#090b14]/90 border border-[#3dbcc7]/30 p-8 relative overflow-hidden backdrop-blur-md shadow-[0_20px_50px_rgba(0,0,0,0.6)] flex flex-col justify-between`}
            >
              {/* Corner badge */}
              <div className="absolute top-0 right-0 bg-[#3dbcc7]/15 border-b border-l border-[#3dbcc7]/30 px-4 py-1.5 rounded-bl-xl text-[10px] font-mono tracking-widest text-[#3dbcc7] uppercase">
                Profil Vérifié
              </div>

              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#3dbcc7]/10 border border-[#3dbcc7]/30 flex items-center justify-center text-[#3dbcc7]">
                    <Briefcase className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs font-mono tracking-wider text-[#3dbcc7] uppercase">
                      Passerelle Internationale // James
                    </div>
                    <h3 className="text-2xl font-bold text-white font-sora">
                      Contrat Sécurisé Upwork
                    </h3>
                  </div>
                </div>

                <p className="text-sm text-slate-300 mb-6 leading-relaxed">
                  Idéal pour les entreprises technologiques, les CTOs et donneurs d&apos;ordre internationaux
                  exigeant une contractualisation conforme aux standards US/UK, avec protection escrow intégrée
                  et NDA immédiat.
                </p>

                {/* Proof & Credentials Badges */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10">
                    <div className="flex items-center gap-2 text-[#3dbcc7] mb-1">
                      <Award className="w-4 h-4" />
                      <span className="text-xs font-bold font-mono">TOP RATED PLUS</span>
                    </div>
                    <div className="text-[11px] text-slate-400">Top 3% des talents mondiaux sur la plateforme</div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10">
                    <div className="flex items-center gap-2 text-emerald-400 mb-1">
                      <ShieldCheck className="w-4 h-4" />
                      <span className="text-xs font-bold font-mono">100% SUCCESS</span>
                    </div>
                    <div className="text-[11px] text-slate-400">Score de satisfaction client vérifié</div>
                  </div>
                </div>

                {/* Key Benefits */}
                <ul className="space-y-2.5 mb-8 text-xs text-slate-300 font-sans">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#3dbcc7] shrink-0" />
                    <span>Facturation horaire certifiée ou forfaits par jalons (Milestones)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#3dbcc7] shrink-0" />
                    <span>Intégration directe Slack, Jira, GitHub & téléconférence instantanée</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#3dbcc7] shrink-0" />
                    <span>Démarrage rapide en 48h ouvrées après accord sur le scope</span>
                  </li>
                </ul>
              </div>

              {/* Direct Upwork CTA */}
              <div className="pt-6 border-t border-white/10">
                <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-3">
                  <span>Architecte Principal :</span>
                  <span className="text-white font-bold">David Kalambay</span>
                </div>
                <MagneticButton
                  id="btn-hire-upwork"
                  href="https://www.upwork.com/freelancers/~017c699933b93f7734"
                  target="_blank"
                  rel="noopener noreferrer"
                  strength={0.3}
                  className="w-full py-4 px-6 rounded-xl font-bold text-sm bg-gradient-to-r from-[#3dbcc7] to-[#1aa1ad] text-slate-950 hover:shadow-[0_0_30px_rgba(61,188,199,0.5)] transition-all flex items-center justify-center gap-2"
                  onClick={() => {
                    trackEvent("cta_click", { target: "upwork", location: "conversion_hub" });
                  }}
                >
                  <span>Engager David sur Upwork</span>
                  <ExternalLink className="w-4 h-4" />
                </MagneticButton>
                <div className="text-center mt-3 text-[11px] text-slate-500 font-mono">
                  Lien direct officiel vérifié // Aucun intermédiaire
                </div>
              </div>
            </div>
          )}

          {/* TUNNEL 2: JEAN-LUC (CONSULTATION DIRECTE PME) */}
          {(activeTunnel === "both" || activeTunnel === "consultation") && (
            <div
              id="tunnel-jeanluc-consultation"
              className={`${
                activeTunnel === "consultation" ? "lg:col-span-12 max-w-3xl mx-auto" : "lg:col-span-7"
              } rounded-2xl bg-[#0a0b12]/95 border border-[#fdb913]/30 p-8 relative overflow-hidden backdrop-blur-md shadow-[0_20px_50px_rgba(0,0,0,0.6)]`}
            >
              {/* Corner badge */}
              <div className="absolute top-0 right-0 bg-[#fdb913]/15 border-b border-l border-[#fdb913]/30 px-4 py-1.5 rounded-bl-xl text-[10px] font-mono tracking-widest text-[#fdb913] uppercase">
                Audit Gratuit 30 Min
              </div>

              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#fdb913]/10 border border-[#fdb913]/30 flex items-center justify-center text-[#fdb913]">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-mono tracking-wider text-[#fdb913] uppercase">
                    Cadrage Stratégique // Jean-Luc
                  </div>
                  <h3 className="text-2xl font-bold text-white font-sora">
                    Demander une Consultation Directe
                  </h3>
                </div>
              </div>

              {/* SUCCESS RECEIPT STATE */}
              {successReceipt ? (
                <div
                  id="consultation-success-receipt"
                  className="p-8 rounded-xl bg-emerald-950/30 border border-emerald-500/40 text-left animate-in fade-in zoom-in-95 duration-500"
                >
                  <div className="flex items-center gap-3 text-emerald-400 mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                    <div>
                      <h4 className="text-lg font-bold text-white">Demande d&apos;Audit Enregistrée</h4>
                      <div className="text-xs font-mono text-emerald-400">
                        RÉFÉRENCE D&apos;AUDIT : {successReceipt.auditId}
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-slate-200 mb-6 leading-relaxed">
                    {successReceipt.message}
                  </p>

                  <div className="p-4 rounded-lg bg-black/40 border border-white/10 font-mono text-xs space-y-2 mb-6 text-slate-300">
                    <div className="flex justify-between">
                      <span className="text-slate-500">Entreprise :</span>
                      <span className="text-white font-bold">{successReceipt.company}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Horodatage de synchronisation :</span>
                      <span className="text-white">{successReceipt.timestamp} (GMT+1)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Statut :</span>
                      <span className="text-emerald-400 font-bold">En file prioritaire</span>
                    </div>
                  </div>

                  <button
                    id="btn-reset-consultation"
                    onClick={() => setSuccessReceipt(null)}
                    className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-white transition-colors"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    <span>Soumettre un autre dossier de cadrage</span>
                  </button>
                </div>
              ) : (
                /* CONSULTATION FORM */
                <form id="consultation-direct-form" onSubmit={handleSubmit} className="space-y-6">
                  {submitError && (
                    <div
                      role="alert"
                      className="p-4 rounded-xl bg-red-950/50 border border-red-500/50 flex items-center gap-3 text-red-200 text-xs font-mono"
                    >
                      <AlertCircle className="w-5 h-5 text-red-400 shrink-0" />
                      <span>{submitError}</span>
                    </div>
                  )}

                  {/* Step 1: Pillar Selection */}
                  <div>
                    <label
                      id="label-pillar-select"
                      className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-3"
                    >
                      1. Pilier d&apos;intervention prioritaire *
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5" role="group" aria-labelledby="label-pillar-select">
                      {[
                        { id: "marketing", label: "Marketing", desc: "ROAS & CAPI", color: "#fdb913" },
                        { id: "automation", label: "Automatisation", desc: "n8n & OCR", color: "#3dbcc7" },
                        { id: "development", label: "Développement", desc: "Next.js & APIs", color: "#ffffff" },
                        { id: "data", label: "Data Intelligence", desc: "DuckDB & IA", color: "#fdb913" },
                      ].map((item) => (
                        <button
                          key={item.id}
                          type="button"
                          id={`pillar-btn-${item.id}`}
                          aria-pressed={formData.pillar === item.id}
                          onClick={() => handlePillarSelect(item.id as FormState["pillar"])}
                          className={`p-3 rounded-xl border text-left transition-all ${
                            formData.pillar === item.id
                              ? "bg-white/10 border-[#fdb913] shadow-[0_0_15px_rgba(253,185,19,0.2)]"
                              : "bg-white/[0.02] border-white/10 hover:border-white/20"
                          }`}
                        >
                          <div className="text-xs font-bold text-white truncate">{item.label}</div>
                          <div className="text-[10px] text-slate-400 truncate mt-0.5">{item.desc}</div>
                        </button>
                      ))}
                    </div>
                    {fieldErrors.pillar && (
                      <p className="text-[11px] text-red-400 font-mono mt-1.5">{fieldErrors.pillar}</p>
                    )}
                  </div>

                  {/* Step 2: Contact Information */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="field-name" className="block text-xs font-mono text-slate-400 mb-1.5">
                        Nom complet *
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                        <input
                          id="field-name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Jean-Luc Mukendi"
                          className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white placeholder-slate-600 text-sm focus:border-[#fdb913] focus:outline-none focus:ring-1 focus:ring-[#fdb913] transition-all"
                        />
                      </div>
                      {fieldErrors.name && (
                        <p className="text-[11px] text-red-400 font-mono mt-1">{fieldErrors.name}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="field-company" className="block text-xs font-mono text-slate-400 mb-1.5">
                        Entreprise ou Projet *
                      </label>
                      <div className="relative">
                        <Building2 className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                        <input
                          id="field-company"
                          name="company"
                          type="text"
                          required
                          value={formData.company}
                          onChange={handleInputChange}
                          placeholder="Katanga TransLog"
                          className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white placeholder-slate-600 text-sm focus:border-[#fdb913] focus:outline-none focus:ring-1 focus:ring-[#fdb913] transition-all"
                        />
                      </div>
                      {fieldErrors.company && (
                        <p className="text-[11px] text-red-400 font-mono mt-1">{fieldErrors.company}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="field-email" className="block text-xs font-mono text-slate-400 mb-1.5">
                        Email professionnel *
                      </label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                        <input
                          id="field-email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="direction@translog.cd"
                          className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white placeholder-slate-600 text-sm focus:border-[#fdb913] focus:outline-none focus:ring-1 focus:ring-[#fdb913] transition-all"
                        />
                      </div>
                      {fieldErrors.email && (
                        <p className="text-[11px] text-red-400 font-mono mt-1">{fieldErrors.email}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="field-phone" className="block text-xs font-mono text-slate-400 mb-1.5">
                        Téléphone / WhatsApp (facultatif)
                      </label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                        <input
                          id="field-phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+243 89 000 0000"
                          className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white placeholder-slate-600 text-sm focus:border-[#fdb913] focus:outline-none focus:ring-1 focus:ring-[#fdb913] transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Step 3: Budget & Timeline */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="field-budget" className="block text-xs font-mono text-slate-400 mb-1.5">
                        Enveloppe budgétaire estimée *
                      </label>
                      <select
                        id="field-budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white text-sm focus:border-[#fdb913] focus:outline-none focus:ring-1 focus:ring-[#fdb913] transition-all"
                      >
                        <option value="< $5k" className="bg-[#0a0b12]">&lt; 5 000 $ (Diagnostic / MVP rapide)</option>
                        <option value="$5k - $15k" className="bg-[#0a0b12]">5 000 $ – 15 000 $ (Projet standard)</option>
                        <option value="$15k - $50k" className="bg-[#0a0b12]">15 000 $ – 50 000 $ (Transformation complète)</option>
                        <option value="> $50k" className="bg-[#0a0b12]">&gt; 50 000 $ (Partenariat annuel / Plateforme)</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="field-urgency" className="block text-xs font-mono text-slate-400 mb-1.5">
                        Échéance souhaitée *
                      </label>
                      <select
                        id="field-urgency"
                        name="urgency"
                        value={formData.urgency}
                        onChange={handleInputChange}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white text-sm focus:border-[#fdb913] focus:outline-none focus:ring-1 focus:ring-[#fdb913] transition-all"
                      >
                        <option value="immediate" className="bg-[#0a0b12]">Immédiat (&lt; 2 semaines)</option>
                        <option value="1_month" className="bg-[#0a0b12]">Sous 1 mois</option>
                        <option value="quarter" className="bg-[#0a0b12]">Ce trimestre (Q3/Q4)</option>
                      </select>
                    </div>
                  </div>

                  {/* Step 4: Brief description */}
                  <div>
                    <label htmlFor="field-details" className="block text-xs font-mono text-slate-400 mb-1.5">
                      Défi technique ou opérationnel en quelques mots (facultatif)
                    </label>
                    <textarea
                      id="field-details"
                      name="details"
                      rows={3}
                      value={formData.details}
                      onChange={handleInputChange}
                      placeholder="Ex: Nous souhaitons automatiser l'extraction des bordereaux logistiques et interconnecter notre ERP avec un tableau de bord en direct..."
                      className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white placeholder-slate-600 text-sm focus:border-[#fdb913] focus:outline-none focus:ring-1 focus:ring-[#fdb913] transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <MagneticButton
                    id="btn-submit-consultation"
                    as="button"
                    type="submit"
                    strength={0.3}
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 rounded-xl font-bold text-sm bg-gradient-to-r from-[#fdb913] to-[#e5a60d] text-slate-950 hover:shadow-[0_0_30px_rgba(253,185,19,0.5)] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <RefreshCw className="w-4 h-4 animate-spin" />
                        <span>Synchronisation de l&apos;audit...</span>
                      </>
                    ) : (
                      <>
                        <span>Confirmer ma demande de consultation (30 min)</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </MagneticButton>
                  <p className="text-center text-[11px] text-slate-500 font-mono">
                    Validation instantanée // Réponse sous 24h avec plan d&apos;action
                  </p>
                </form>
              )}
            </div>
          )}
        </div>

        {/* Global Footer & Direct Signals */}
        <footer
          id="global-agency-footer"
          aria-label="Informations légales et télémétrie de l'agence"
          className="pt-12 border-t border-white/10 grid grid-cols-1 md:grid-cols-4 gap-8 text-xs font-mono text-slate-400"
        >
          {/* Col 1: Identity */}
          <div>
            <div className="text-base font-bold text-white font-sora mb-2 tracking-tight">
              PICSELL AGENCY
            </div>
            <p className="text-[11px] text-slate-500 leading-relaxed font-sans mb-3">
              Moteur logiciel horloger, automatisation d&apos;élite &amp; marketing de précision.
            </p>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-white/5 border border-white/10 text-[10px] text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              Kinshasa : {kinshasaTime || "15:42:10 GMT+1"}
            </div>
          </div>

          {/* Col 2: The 4 Complications */}
          <div>
            <div className="text-slate-200 font-bold uppercase tracking-wider mb-3 text-[11px]">
              Complications
            </div>
            <ul className="space-y-1.5 text-slate-400 text-[11px]">
              <li><a href="#story-marketing" className="hover:text-[#fdb913] transition-colors">Calendrier Perpétuel // Marketing</a></li>
              <li><a href="#story-automation" className="hover:text-[#3dbcc7] transition-colors">Tourbillon // Automatisation IA</a></li>
              <li><a href="#story-development" className="hover:text-white transition-colors">Chronographe // Plateformes Web</a></li>
              <li><a href="#story-data" className="hover:text-[#fdb913] transition-colors">Grande Sonnerie // Data Intelligence</a></li>
            </ul>
          </div>

          {/* Col 3: Direct Coordinates */}
          <div>
            <div className="text-slate-200 font-bold uppercase tracking-wider mb-3 text-[11px]">
              Points de Contact
            </div>
            <ul className="space-y-1.5 text-[11px]">
              <li className="text-slate-300">
                <a href="mailto:contact@picsell.agency" className="hover:text-white transition-colors">
                  contact@picsell.agency
                </a>
              </li>
              <li className="text-slate-400">Kinshasa, République Démocratique du Congo</li>
              <li className="text-slate-400">Intervention globale remote & astreinte 24/7</li>
            </ul>
          </div>

          {/* Col 4: Standards & Compliance */}
          <div>
            <div className="text-slate-200 font-bold uppercase tracking-wider mb-3 text-[11px]">
              Certifications
            </div>
            <ul className="space-y-1.5 text-slate-400 text-[11px]">
              <li className="text-emerald-400">✓ WCAG 2.1 AA Compliant</li>
              <li className="text-[#3dbcc7]">✓ Battery Saver API Native</li>
              <li className="text-[#fdb913]">✓ AEO & JSON-LD Structured</li>
              <li className="text-slate-500 mt-2">© 2026 Picsell Agency. Tous droits réservés.</li>
            </ul>
          </div>
        </footer>
      </div>
    </section>
  );
}
