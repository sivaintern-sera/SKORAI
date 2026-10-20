"use client";

import React from "react";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import {
  RetentionTrendChart,
  InstitutionalRiskRadar,
  RevenueBreakdownChart,
} from "@/components/dashboard/InteractiveCharts";
import {
  ShieldCheck,
  TrendingUp,
  Award,
  DollarSign,
  FileText,
  Lock,
} from "lucide-react";
import { INSTITUTIONAL_METRICS } from "@/lib/demo-data";
import { formatCurrency, formatNumber } from "@/lib/utils";

export default function BoardDashboardPage() {
  return (
    <DashboardLayout
      activeRole="board"
      title="Board of Trustees &amp; Regents Governance Oversight"
      subtitle="Patricia Lewis &bull; Strategic fiduciary performance, institutional risk radar, and university scorecard"
    >
      {/* Privacy Notice Alert */}
      <div className="p-4 rounded-2xl bg-purple-50/70 border border-purple-200/70 flex items-center gap-2 text-xs text-purple-950 font-sans">
        <Lock className="w-4 h-4 text-purple-700 shrink-0" />
        <span>
          <strong>FERPA Governance Privacy Notice:</strong> This dashboard renders macro-institutional aggregates only. Individual student personally identifiable information (PII) is strictly restricted in accordance with university bylaws.
        </span>
      </div>

      {/* Governance Scorecard KPIs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all">
          <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider font-display">Total University Headcount</div>
          <div className="font-display text-3xl font-extrabold text-slate-900 mt-2">
            {formatNumber(INSTITUTIONAL_METRICS.totalStudents)}
          </div>
          <div className="text-xs text-emerald-600 font-semibold mt-1">+2.4% Strategic Target Met</div>
          <div className="text-[11px] text-slate-500 mt-1">Four-Year Cohort Persistence: 84.2%</div>
        </div>

        <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all">
          <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider font-display">University Endowment</div>
          <div className="font-display text-3xl font-extrabold text-slate-900 mt-2">$184.2M</div>
          <div className="text-xs text-emerald-600 font-semibold mt-1">+7.2% Net Annual Return</div>
          <div className="text-[11px] text-slate-500 mt-1">Endowment Spending Policy: 4.5%</div>
        </div>

        <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all">
          <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider font-display">Fiduciary Credit Rating</div>
          <div className="font-display text-3xl font-extrabold text-emerald-600 mt-2">A+ Stable</div>
          <div className="text-xs text-emerald-600 font-semibold mt-1">Moody&apos;s Investors Service</div>
          <div className="text-[11px] text-slate-500 mt-1">Debt Service Coverage Ratio: 2.4x</div>
        </div>

        <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all">
          <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider font-display">Strategic Plan Execution</div>
          <div className="font-display text-3xl font-extrabold text-purple-700 mt-2">85%</div>
          <div className="text-xs text-purple-700 font-semibold mt-1">18 of 20 Goals on Schedule</div>
          <div className="text-[11px] text-slate-500 mt-1">Next Board Review: Dec 14, 2026</div>
        </div>
      </div>

      {/* Governance Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RetentionTrendChart />
        <InstitutionalRiskRadar />
        <RevenueBreakdownChart />

        {/* Board Resolution & Governance Brief */}
        <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm space-y-4 flex flex-col justify-between font-sans">
          <div>
            <h4 className="font-display text-sm font-bold text-slate-900 tracking-tight">
              Executive Committee Governance Briefing
            </h4>
            <p className="text-[11px] text-slate-500 mt-1">
              Quarterly fiduciary memorandum prepared for the Northbridge State University Board of Trustees
            </p>
            <div className="mt-4 p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 space-y-2 leading-relaxed">
              <p>
                <strong>1. Enrollment Sustainability:</strong> Fall 2026 undergraduate applications reached a record 14,820, driven by expanded regional reputation in Computing and Health Sciences.
              </p>
              <p>
                <strong>2. Fiduciary Health:</strong> Operating expenses remain well within the $166.1M envelope, yielding an estimated operating surplus of $8.4M to augment capital reserves.
              </p>
              <p>
                <strong>3. Accreditation Reaffirmation:</strong> The Higher Learning Commission readiness index stands at 94/100 ahead of the 2028 comprehensive visit.
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between pt-2 border-t border-slate-100">
            <span className="text-xs text-slate-500 font-medium">Resolution 2026-B4: Approved Unanimously</span>
            <button
              type="button"
              onClick={() => alert("Downloading Official Board Dossier (PDF)...")}
              className="px-4 py-2 rounded-full bg-purple-700 hover:bg-purple-500 text-white text-xs font-semibold shadow-xs cursor-pointer"
            >
              Download Board Dossier
            </button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

