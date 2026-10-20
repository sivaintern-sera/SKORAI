"use client";

import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import {
  GraduationCap,
  Users,
  Compass,
  DollarSign,
  Award,
  ShieldCheck,
  ArrowRight,
  TrendingUp,
} from "lucide-react";

export default function SolutionsPage() {
  const solutions = [
    {
      title: "Provost & Academic Affairs",
      desc: "University-wide academic health monitoring, faculty workload balance, degree completion analytics, and longitudinal retention trends.",
      kpis: ["84.2% 1st-Yr Retention", "66.4% 6-Yr Grad Rate", "18/20 Strategic Goals Met"],
      route: "/dashboard/president",
    },
    {
      title: "College Deans & Department Chairs",
      desc: "Department-by-department major counts, course bottleneck tracking, average DFW rate reductions, and instructional line allocations.",
      kpis: ["48 Active Sections", "11.2% DFW Rate", "96% Capacity Filled"],
      route: "/dashboard/dean",
    },
    {
      title: "Student Success & Academic Advising",
      desc: "Active caseload management, early warning flags, predictive retention risk scores, and automated intervention workflows.",
      kpis: ["185 Student Caseload", "14 High Risk Flags", "91% On-Track Progress"],
      route: "/dashboard/advisor",
    },
    {
      title: "Enrollment Management & Admissions",
      desc: "Application funnel velocity, out-of-state territory performance, yield forecasting, and demographic segmentation.",
      kpis: ["14,820 Applications", "68.4% Admit Rate", "32.1% Forecast Yield"],
      route: "/dashboard/admissions",
    },
    {
      title: "Institutional Research & Accreditation",
      desc: "IPEDS-compliant reporting, peer institution benchmarking, learning outcome assessment, and HLC 10-year evidence repositories.",
      kpis: ["99.8% Data Accuracy", "94/100 HLC Readiness", "482 Cataloged Artifacts"],
      route: "/dashboard/institutional-effectiveness",
    },
    {
      title: "CFO, Fiduciary Planning & Trustees",
      desc: "Annual operating budget tracking, tuition revenue forecasts, endowment returns, and fiduciary credit rating protection.",
      kpis: ["$174.5M Operating Budget", "+$8.4M Surplus", "A+ Moody's Rating"],
      route: "/dashboard/board",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans flex flex-col">
      <Navbar />

      <main className="flex-1 py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-purple-50 text-purple-800 border border-purple-200/60">
            <Compass className="w-3.5 h-3.5 text-purple-700" />
            <span>Targeted Institutional Outcomes</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-display font-bold text-slate-900 tracking-tight">
            Solutions Tailored to Every Institutional Leader
          </h1>
          <p className="text-slate-600 text-base leading-relaxed">
            From the university board room to the academic advising suite, our platform provides role-specific intelligence that empowers confident action.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((sol) => (
            <div
              key={sol.title}
              className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <h3 className="text-lg font-display font-bold text-slate-900">{sol.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{sol.desc}</p>
                <div className="pt-3 border-t border-slate-100 space-y-1.5">
                  <div className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider">Benchmark Proof Points</div>
                  <div className="flex flex-wrap gap-1.5">
                    {sol.kpis.map((kpi) => (
                      <span key={kpi} className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-purple-50 text-purple-800 border border-purple-100">
                        {kpi}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <Link
                href={sol.route}
                className="w-full py-2.5 px-4 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 hover:text-slate-900 text-xs font-semibold transition-colors flex items-center justify-center gap-1.5 group shadow-sm mt-2"
              >
                <span>Launch Persona Dashboard</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}

