"use client";

import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import {
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Cpu,
  BarChart3,
  Users,
  Compass,
} from "lucide-react";

export default function FeaturesPage() {
  const featureMatrix = [
    {
      category: "Predictive Retention & Student Success",
      items: [
        { name: "Multi-Cohort Retention Modeling", desc: "Forecasts sophomore persistence rates based on course completion, LMS interaction, and GPA trajectories." },
        { name: "Early Alert Automation", desc: "Automates notifications to assigned academic advisors when attendance or quiz scores fall below established thresholds." },
        { name: "Degree Audit Milestone Tracking", desc: "Verifies student progress towards major, general education, and elective requirements." },
      ],
    },
    {
      category: "Admissions & Enrollment Intelligence",
      items: [
        { name: "Territory & Funnel Velocity", desc: "Tracks prospect-to-applicant-to-admit conversion rates across geographic recruitment territories." },
        { name: "Yield Forecasting Engine", desc: "Predicts final matriculation counts based on deposit dates, financial aid packages, and campus visit history." },
        { name: "Net Tuition Revenue Optimization", desc: "Models out-of-state and international enrollment shares to maximize institutional gross margin." },
      ],
    },
    {
      category: "Academic & Course Analytics",
      items: [
        { name: "DFW Bottleneck Discovery", desc: "Identifies prerequisite gateway courses causing curriculum bottlenecks across 24 academic departments." },
        { name: "Instructional Workload Balancing", desc: "Analyzes faculty teaching FTE loads and student-to-faculty ratios across all 6 colleges." },
        { name: "Learning Outcomes Assessment", desc: "Catalogs assessment rubrics and student artifacts for departmental review and accreditation." },
      ],
    },
    {
      category: "Financial Aid & Fiduciary Planning",
      items: [
        { name: "FAFSA Verification Acceleration", desc: "Automates document matching to clear financial aid holds before registration deadlines." },
        { name: "Interactive Decision Simulator", desc: "Simulates the budgetary impact of enrollment shocks, state appropriation changes, and tuition policies." },
        { name: "Pell Grant Recipient Persistence", desc: "Tracks retention and completion rates for high-need undergraduates receiving federal student aid." },
      ],
    },
    {
      category: "Cybersecurity & AI Governance",
      items: [
        { name: "FERPA PII Sanitization", desc: "Automated filters prevent student personally identifiable information from entering prompt logs." },
        { name: "PostgreSQL Row Level Security", desc: "Least-privilege data access enforcement at the database layer across 14 institutional roles." },
        { name: "Cryptographic Audit Trails", desc: "Immutable 7-year event logging for all data queries, modifications, and executive report downloads." },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans flex flex-col">
      <Navbar />

      <main className="flex-1 py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-purple-50 text-purple-800 border border-purple-200/60">
            <BarChart3 className="w-3.5 h-3.5 text-purple-700" />
            <span>Comprehensive Feature Matrix</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-display font-bold text-slate-900 tracking-tight">
            SKORAI Platform Features
          </h1>
          <p className="text-slate-600 text-base leading-relaxed">
            Explore the comprehensive feature matrix engineered to unify analytics, prediction, and governance across four-year universities.
          </p>
        </div>

        <div className="space-y-12">
          {featureMatrix.map((section) => (
            <div key={section.category} className="space-y-4">
              <h3 className="text-xl font-display font-bold text-slate-900 border-b border-slate-200 pb-3">
                {section.category}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {section.items.map((item) => (
                  <div
                    key={item.name}
                    className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow space-y-2"
                  >
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-purple-700 shrink-0" />
                      <h4 className="text-sm font-display font-bold text-slate-900">{item.name}</h4>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed pl-6">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="p-10 rounded-3xl bg-slate-50 border border-slate-200/80 text-center space-y-4">
          <h3 className="text-2xl font-display font-bold text-slate-900">Experience All Features with 10,000 Synthetic Records</h3>
          <p className="text-sm text-slate-600 max-w-xl mx-auto leading-relaxed">
            Test the live platform with Northbridge State University&apos;s realistic four-year institution data.
          </p>
          <div className="pt-2">
            <Link
              href="/demo"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-purple-700 hover:bg-purple-500 text-white font-semibold text-sm shadow-sm transition-colors"
            >
              <span>Launch Demo Environment</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

