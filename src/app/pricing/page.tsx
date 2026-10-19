"use client";

import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import {
  CheckCircle2,
  X,
  ArrowRight,
  ShieldCheck,
  HelpCircle,
} from "lucide-react";

export default function PricingPage() {
  const comparisonFeatures = [
    { name: "Descriptive Institutional Analytics & KPIs", basic: true, pro: true, premium: true },
    { name: "College & Department Visibility Dashboards", basic: true, pro: true, premium: true },
    { name: "SIS & LMS Standard Read Connectors", basic: true, pro: true, premium: true },
    { name: "IPEDS-Compliant Institutional Reporting", basic: true, pro: true, premium: true },
    { name: "Multi-Cohort Predictive Retention Modeling", basic: false, pro: true, premium: true },
    { name: "Admissions Yield Forecasting & Funnel Velocity", basic: false, pro: true, premium: true },
    { name: "Early Academic Alert & Advisor Intervention Queue", basic: false, pro: true, premium: true },
    { name: "FAFSA Verification Acceleration Engine", basic: false, pro: true, premium: true },
    { name: "Interactive Institutional Decision Simulator", basic: false, false: false, pro: false, premium: true },
    { name: "Executive Strategic AI Briefings for Board & Provost", basic: false, pro: false, premium: true },
    { name: "Dedicated Higher Ed AI Solutions Architect", basic: false, pro: false, premium: true },
    { name: "Custom SKORAI Model Guardrails", basic: false, pro: false, premium: true },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans flex flex-col">
      <Navbar />

      <main className="flex-1 py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200/60">
            <span>Higher Education Annual Institutional Licensing</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-display font-bold text-slate-900 tracking-tight">
            Transparent Institutional Pricing
          </h1>
          <p className="text-slate-600 text-base leading-relaxed">
            Predictable annual licensing tailored for American general four-year universities. No per-seat penalties, encouraging campus-wide collaboration.
          </p>
          <div className="text-xs text-amber-800 bg-amber-50 border border-amber-200 p-3 rounded-2xl max-w-2xl mx-auto font-medium">
            Illustrative pricing anchors. Final pricing depends on institution enrollment size, integration scope, implementation timeline, support tiers, and customized AI modules.
          </div>
        </div>

        {/* 3 Tier Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* BASIC */}
          <div className="bg-white border border-slate-200/80 rounded-3xl p-8 space-y-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
            <div className="space-y-4">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
                Basic Tier
              </span>
              <h3 className="text-2xl font-display font-bold text-slate-900">SKORAI Visibility</h3>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-display font-extrabold text-slate-900">$59,500</span>
                <span className="text-xs text-slate-500">/ year</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Replaces static reporting spreadsheets with live institutional dashboards, college performance tracking, and enrollment visibility.
              </p>
            </div>
            <Link
              href="/contact"
              className="w-full text-center py-2.5 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 font-semibold text-xs transition-colors shadow-sm"
            >
              Request Basic Quote
            </Link>
          </div>

          {/* PROFESSIONAL (Featured - TaxPal style highlighted dark container) */}
          <div className="bg-slate-900 text-white rounded-3xl p-8 space-y-6 flex flex-col justify-between relative shadow-xl">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full bg-blue-600 text-white text-[11px] font-bold uppercase tracking-wider shadow">
              Recommended for Universities
            </div>
            <div className="space-y-4">
              <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">
                Professional Tier
              </span>
              <h3 className="text-2xl font-display font-bold text-white">SKORAI Intelligence</h3>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-display font-extrabold text-white">$135,000</span>
                <span className="text-xs text-slate-400">/ year</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Adds predictive student retention algorithms, gateway course DFW risk detection, admissions yield forecasting, and FAFSA acceleration.
              </p>
            </div>
            <Link
              href="/contact"
              className="w-full text-center py-2.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-sm transition-colors"
            >
              Request Professional Quote
            </Link>
          </div>

          {/* PREMIUM */}
          <div className="bg-white border border-slate-200/80 rounded-3xl p-8 space-y-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
            <div className="space-y-4">
              <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">
                Premium Tier
              </span>
              <h3 className="text-2xl font-display font-bold text-slate-900">Decision Intelligence</h3>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-display font-extrabold text-slate-900">$295,000</span>
                <span className="text-xs text-slate-500">/ year</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Full institutional scenario simulation, executive AI briefings for the Provost &amp; Board of Trustees, and dedicated higher education consultants.
              </p>
            </div>
            <Link
              href="/contact"
              className="w-full text-center py-2.5 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 font-semibold text-xs transition-colors shadow-sm"
            >
              Request Premium Quote
            </Link>
          </div>
        </div>

        {/* Detailed Feature Comparison Table */}
        <div className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm">
          <h3 className="text-lg font-display font-bold text-slate-900 tracking-tight">
            Detailed Tier Feature Comparison
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-slate-700">
              <thead className="bg-slate-50 border-b border-slate-200 text-[11px] text-slate-600 uppercase font-semibold">
                <tr>
                  <th className="p-3.5">Platform Capability</th>
                  <th className="p-3.5 text-center">Basic ($59.5k)</th>
                  <th className="p-3.5 text-center">Professional ($135k)</th>
                  <th className="p-3.5 text-center">Premium ($295k)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {comparisonFeatures.map((f) => (
                  <tr key={f.name} className="hover:bg-slate-50/70 transition-colors">
                    <td className="p-3.5 font-medium text-slate-900">{f.name}</td>
                    <td className="p-3.5 text-center">
                      {f.basic ? (
                        <CheckCircle2 className="w-4 h-4 text-blue-600 mx-auto" />
                      ) : (
                        <X className="w-4 h-4 text-slate-300 mx-auto" />
                      )}
                    </td>
                    <td className="p-3.5 text-center">
                      {f.pro ? (
                        <CheckCircle2 className="w-4 h-4 text-blue-600 mx-auto" />
                      ) : (
                        <X className="w-4 h-4 text-slate-300 mx-auto" />
                      )}
                    </td>
                    <td className="p-3.5 text-center">
                      {f.premium ? (
                        <CheckCircle2 className="w-4 h-4 text-blue-600 mx-auto" />
                      ) : (
                        <X className="w-4 h-4 text-slate-300 mx-auto" />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
