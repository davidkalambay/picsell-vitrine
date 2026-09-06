import { NextRequest, NextResponse } from "next/server";

export interface ConsultationSubmission {
  name: string;
  company: string;
  email: string;
  phone?: string;
  pillar: "marketing" | "automation" | "development" | "data" | "multi";
  budget: "< $5k" | "$5k - $15k" | "$15k - $50k" | "> $50k";
  urgency: "immediate" | "1_month" | "quarter";
  details?: string;
}

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as Partial<ConsultationSubmission>;

    const errors: Record<string, string> = {};

    if (!body.name || body.name.trim().length < 2) {
      errors.name = "Le nom du donneur d'ordre est requis (au moins 2 caractères).";
    }

    if (!body.company || body.company.trim().length < 2) {
      errors.company = "Le nom de l'entreprise ou du projet est requis.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!body.email || !emailRegex.test(body.email.trim())) {
      errors.email = "Une adresse email professionnelle valide est requise.";
    }

    const validPillars = ["marketing", "automation", "development", "data", "multi"];
    if (!body.pillar || !validPillars.includes(body.pillar)) {
      errors.pillar = "Veuillez sélectionner un pilier d'ingénierie prioritaire.";
    }

    const validBudgets = ["< $5k", "$5k - $15k", "$15k - $50k", "> $50k"];
    if (!body.budget || !validBudgets.includes(body.budget)) {
      errors.budget = "Veuillez spécifier une enveloppe budgétaire estimée.";
    }

    const validUrgencies = ["immediate", "1_month", "quarter"];
    if (!body.urgency || !validUrgencies.includes(body.urgency)) {
      errors.urgency = "Veuillez indiquer le délai de cadrage souhaité.";
    }

    if (Object.keys(errors).length > 0) {
      return NextResponse.json(
        {
          success: false,
          error: "Validation échouée",
          details: errors,
        },
        { status: 400 }
      );
    }

    // Generate unique Horological Audit ID
    const randomHex = Math.random().toString(36).substring(2, 6).toUpperCase();
    const auditId = `PA-AUDIT-2026-${randomHex}`;
    const timestamp = new Date().toISOString();

    const sanitizedData = {
      auditId,
      timestamp,
      name: body.name?.trim().slice(0, 100),
      company: body.company?.trim().slice(0, 100),
      email: body.email?.trim().toLowerCase().slice(0, 150),
      phone: body.phone ? body.phone.trim().slice(0, 30) : undefined,
      pillar: body.pillar,
      budget: body.budget,
      urgency: body.urgency,
      details: body.details ? body.details.trim().slice(0, 1000) : "",
    };

    // In a real production setup, this would be persisted to Firestore or dispatched to n8n / email webhook.
    console.info(`[Consultation Request Logged] ${auditId} for ${sanitizedData.company} (${sanitizedData.pillar})`);

    return NextResponse.json(
      {
        success: true,
        auditId,
        message: "Cadrage stratégique enregistré avec succès. David Kalambay vous contactera sous 24h avec un créneau dédié.",
        summary: {
          auditId,
          company: sanitizedData.company,
          pillar: sanitizedData.pillar,
          timestamp,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("[Consultation API Error]", error);
    return NextResponse.json(
      {
        success: false,
        error: "Erreur interne lors de la synchronisation de la demande.",
      },
      { status: 500 }
    );
  }
}
