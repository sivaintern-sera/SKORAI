"use client";

import React from "react";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { AIInsightsList } from "@/components/dashboard/AIInsightsList";
import {
  Users,
  TrendingUp,
  UserCheck,
  CheckCircle2,
  FileCheck,
  Compass,
  ArrowRight,
  Filter,
} from "lucide-react";
import { formatNumber } from "@/lib/utils";

export default function AdmissionsDashboardPage() {
  const funnelSteps = [
    { label: "Inquiries & Prospects", count: 42500, conversion: "34.8% inquiry-to-app", color: "bg-purple-700" },
    { label: "Completed Applications", count: 14820, conversion: "68.4% admit rate", color: "bg-indigo-600" },
    { label: "Admitted Students", count: 10137, conversion: "32.1% yield forecast", color: "bg-purple-600" },
    { label: "Enrolled & Deposited", count: 3254, conversion: "Target: 3,200", color: "bg-emerald-600" },
  ];

  return (
    <DashboardLayout
      activeRole="admissions"
      title="Admissions &amp; Enrollment Recruitment Intelligence"
      subtitle="Jessica Davis &bull; Application funnel velocity, yield forecasting, and recruitment territory analytics"
    >
      {/* Top Admissions KPIs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between text-slate-500 text-xs font-medium">
            <span>Total Applications</span>
            <div className="w-8 h-8 rounded-lg bg-purple-50 flex items-center justify-center text-purple-700">
              <Users className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-display font-bold text-slate-900 mt-2">14,820</div>
          <div className="text-xs text-emerald-600 font-semibold mt-1">
            +5.2% YoY Application Growth
          </div>
          <div className="text-xs text-slate-500 mt-1">
            Common App: 11,400 &bull; Institutional: 3,420
          </div>
        </div>

        <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between text-slate-500 text-xs font-medium">
            <span>Admit Rate</span>
            <div className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600">
              <UserCheck className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-display font-bold text-slate-900 mt-2">68.4%</div>
          <div className="text-xs text-purple-700 font-semibold mt-1">
            Selectivity Target Met
          </div>
          <div className="text-xs text-slate-500 mt-1">
            Mean Admitted GPA: 3.52 &bull; SAT: 1240
          </div>
        </div>

        <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between text-slate-500 text-xs font-medium">
            <span>Deposit Yield Forecast</span>
            <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600">
              <TrendingUp className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-display font-bold text-emerald-600 mt-2">32.1%</div>
          <div className="text-xs text-emerald-600 font-semibold mt-1">
            3,254 Projected Freshmen
          </div>
          <div className="text-xs text-slate-500 mt-1">
            Goal: 3,200 (+54 Headcount Surplus)
          </div>
        </div>

        <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between text-slate-500 text-xs font-medium">
            <span>Out-of-State Share</span>
            <div className="w-8 h-8 rounded-lg bg-purple-50 flex items-center justify-center text-purple-600">
              <Compass className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-display font-bold text-slate-900 mt-2">28.4%</div>
          <div className="text-xs text-purple-700 font-semibold mt-1">
            +3.1 pts Net Tuition Margin
          </div>
          <div className="text-xs text-slate-500 mt-1">
            Key Markets: NY, CT, NJ, CA
          </div>
        </div>
      </div>

      {/* Visual Admissions Funnel */}
      <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm space-y-4">
        <div>
          <h4 className="text-base font-display font-bold text-slate-900 tracking-tight">
            Fall 2026 Admissions Enrollment Funnel
          </h4>
          <p className="text-xs text-slate-500">
            Real-time pipeline progression from prospective inquiry to confirmed matriculation
          </p>
        </div>

        <div className="space-y-4 pt-2">
          {funnelSteps.map((step, i) => (
            <div key={step.label} className="space-y-1.5">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-slate-900">{step.label}</span>
                <span className="font-mono text-slate-700 font-bold">
                  {formatNumber(step.count)} ({step.conversion})
                </span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden border border-slate-200/60">
                <div
                  className={`${step.color} h-full rounded-full transition-all duration-700`}
                  style={{ width: `${100 - i * 22}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Admissions AI Insights */}
      <AIInsightsList filterCategory="Enrollment" />
    </DashboardLayout>
  );
}

