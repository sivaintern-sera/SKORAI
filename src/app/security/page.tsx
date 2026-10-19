"use client";

import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import {
  ShieldCheck,
  Lock,
  FileText,
  AlertCircle,
  Eye,
  Database,
  ArrowRight,
  Server,
} from "lucide-react";

export default function SecurityPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans flex flex-col">
      <Navbar />

      <main className="flex-1 py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200/60">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>Institutional Governance &amp; Compliance</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-display font-bold text-slate-900 tracking-tight">
            Security, Data Privacy &amp; AI Governance
          </h1>
          <p className="text-slate-600 text-base leading-relaxed">
            Higher education data requires rigorous privacy boundaries. Our platform is built from the ground up to protect student educational records and institutional data assets.
          </p>
        </div>

        {/* Legal & Compliance Notice Alert */}
        <div className="p-5 rounded-2xl bg-blue-50/70 border border-blue-200/70 flex items-start gap-3.5 text-xs text-slate-700 max-w-4xl mx-auto shadow-sm">
          <AlertCircle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
          <div className="space-y-1.5 leading-relaxed">
            <strong className="text-slate-900 font-display font-bold">FERPA Awareness &amp; Certification Transparency:</strong>
            <p>
              This platform is engineered to support university FERPA compliance protocols through strict role segregation, cryptographic auditing, and PII sanitization. In adherence to enterprise integrity standards, we do not claim automatic turn-key certification; institutional compliance requires coordinated university policy enforcement and authorized data steward oversight.
            </p>
          </div>
        </div>

        {/* Security Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow space-y-3">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
              <Lock className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-display font-bold text-slate-900">PostgreSQL Row Level Security (RLS)</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Every database transaction is evaluated through cryptographic user identity claims. A faculty member can query only students enrolled in their assigned sections, and a dean can query only departments in their college.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow space-y-3">
            <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
              <Eye className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-display font-bold text-slate-900">Automated PII Masking &amp; AI Guardrails</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Before data is processed by predictive models, all student Social Security Numbers, state IDs, home addresses, and phone numbers are stripped or hashed. Training models never retain unmasked student identifiers.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow space-y-3">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <FileText className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-display font-bold text-slate-900">Cryptographic Audit Logging</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Every data access request, CSV export, and model inference is permanently recorded in an append-only audit trail stored across redundant cloud regions and retained for up to 7 years for regulatory review.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow space-y-3">
            <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
              <Server className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-display font-bold text-slate-900">Zero Trust Network &amp; MFA</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              All platform endpoints require TLS 1.3 encryption in transit and AES-256 encryption at rest. Multi-factor authentication (MFA) via campus SAML SSO / FIDO2 tokens is mandatory for all administrative roles.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
