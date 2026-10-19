"use client";

import React from "react";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import {
  RetentionTrendChart,
  CollegeEnrollmentChart,
  InstitutionalRiskRadar,
  RevenueBreakdownChart,
} from "@/components/dashboard/InteractiveCharts";
import { ScenarioSimulator } from "@/components/simulation/ScenarioSimulator";
import { AIInsightsList } from "@/components/dashboard/AIInsightsList";
import { StudentDataTable } from "@/components/dashboard/StudentDataTable";
import {
  Users,
  GraduationCap,
  TrendingUp,
  DollarSign,
  ShieldCheck,
  Award,
} from "lucide-react";
import { INSTITUTIONAL_METRICS } from "@/lib/demo-data";
import { formatCurrency, formatNumber } from "@/lib/utils";

export default function PresidentDashboardPage() {
  return (
    <DashboardLayout
      activeRole="president"
      title="President &amp; Provost Institutional Intelligence"
      subtitle="University-wide strategic visibility, predictive analytics, and executive decision intelligence"
    >
      {/* KPI Cards Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* KPI 1: Total Enrollment */}
        <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-blue-500/40 transition-all relative overflow-hidden group">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider font-display">
              Total Enrollment
            </span>
            <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-700 ring-1 ring-blue-700/10 flex items-center justify-center">
              <Users className="w-4 h-4" />
            </div>
          </div>
          <div className="font-display text-3xl font-extrabold text-slate-900 mt-2">
            {formatNumber(INSTITUTIONAL_METRICS.totalStudents)}
          </div>
          <div className="flex items-center gap-1.5 text-xs text-emerald-600 font-semibold mt-2">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>+2.4% vs Previous Academic Year</span>
          </div>
          <div className="text-[11px] text-slate-500 mt-1">
            8,200 Undergrad &bull; 1,800 Graduate
          </div>
        </div>

        {/* KPI 2: First-Year Retention */}
        <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-blue-500/40 transition-all relative overflow-hidden group">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider font-display">
              1st-Year Retention
            </span>
            <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-700 ring-1 ring-blue-700/10 flex items-center justify-center">
              <GraduationCap className="w-4 h-4" />
            </div>
          </div>
          <div className="font-display text-3xl font-extrabold text-slate-900 mt-2">
            {INSTITUTIONAL_METRICS.firstYearRetentionRate}%
          </div>
          <div className="flex items-center gap-1.5 text-xs text-emerald-600 font-semibold mt-2">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>+1.8 pts (Above 80.0% National Benchmark)</span>
          </div>
          <div className="text-[11px] text-slate-500 mt-1">
            6-Year Graduation Rate: {INSTITUTIONAL_METRICS.sixYearGraduationRate}%
          </div>
        </div>

        {/* KPI 3: Operating Revenue */}
        <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-blue-500/40 transition-all relative overflow-hidden group">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider font-display">
              Annual Operating Budget
            </span>
            <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-700 ring-1 ring-blue-700/10 flex items-center justify-center">
              <DollarSign className="w-4 h-4" />
            </div>
          </div>
          <div className="font-display text-3xl font-extrabold text-slate-900 mt-2">
            {formatCurrency(INSTITUTIONAL_METRICS.totalAnnualRevenue)}
          </div>
          <div className="flex items-center gap-1.5 text-xs text-emerald-600 font-semibold mt-2">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>+$8.4M Net Operating Margin</span>
          </div>
          <div className="text-[11px] text-slate-500 mt-1">
            Moody&apos;s Rating: A+ Stable
          </div>
        </div>

        {/* KPI 4: Institutional Health Index */}
        <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-blue-500/40 transition-all relative overflow-hidden group">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider font-display">
              Health &amp; Risk Index
            </span>
            <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-700 ring-1 ring-blue-700/10 flex items-center justify-center">
              <ShieldCheck className="w-4 h-4" />
            </div>
          </div>
          <div className="font-display text-3xl font-extrabold text-slate-900 mt-2">
            85.3 <span className="text-sm font-normal text-slate-400">/ 100</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-blue-600 font-semibold mt-2">
            <Award className="w-3.5 h-3.5" />
            <span>HLC Readiness: 94 / 100</span>
          </div>
          <div className="text-[11px] text-slate-500 mt-1">
            Cyber Threat Index: 18 / 100 (Low Risk)
          </div>
        </div>
      </div>

      {/* Analytics Charts Grid */}
      <section id="analytics" className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RetentionTrendChart />
        <CollegeEnrollmentChart />
        <InstitutionalRiskRadar />
        <RevenueBreakdownChart />
      </section>

      {/* Decision Intelligence Simulator Section */}
      <section id="simulator">
        <ScenarioSimulator />
      </section>

      {/* AI Intelligence & Early Warnings Section */}
      <section id="insights">
        <AIInsightsList limit={4} />
      </section>

      {/* Student Roster Section */}
      <section id="roster">
        <StudentDataTable />
      </section>
    </DashboardLayout>
  );
}
