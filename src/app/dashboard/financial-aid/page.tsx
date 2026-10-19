"use client";

import React from "react";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { AIInsightsList } from "@/components/dashboard/AIInsightsList";
import {
  DollarSign,
  FileText,
  AlertTriangle,
  CheckCircle,
  Users,
  PieChart,
  TrendingUp,
} from "lucide-react";
import { formatCurrency, formatNumber } from "@/lib/utils";

export default function FinancialAidDashboardPage() {
  return (
    <DashboardLayout
      activeRole="financial-aid"
      title="Financial Aid Intelligence &amp; FAFSA Operations"
      subtitle="Daniel Thompson &bull; Federal Title IV compliance, institutional grant distribution, and verification queues"
    >
      {/* Financial Aid KPIs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between text-slate-500 text-xs font-medium">
            <span>Total Aid Disbursed</span>
            <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600">
              <DollarSign className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-display font-bold text-slate-900 mt-2">$48.2M</div>
          <div className="text-xs text-emerald-600 font-semibold mt-1">
            Fall 2026 Term Disbursed
          </div>
          <div className="text-xs text-slate-500 mt-1">
            Institutional: $18.4M &bull; Federal/State: $29.8M
          </div>
        </div>

        <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between text-slate-500 text-xs font-medium">
            <span>Pell Grant Recipients</span>
            <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">
              <Users className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-display font-bold text-slate-900 mt-2">34.5%</div>
          <div className="text-xs text-blue-600 font-semibold mt-1">
            3,450 Eligible Undergraduates
          </div>
          <div className="text-xs text-slate-500 mt-1">
            Average Pell Award: $6,895/yr
          </div>
        </div>

        <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between text-slate-500 text-xs font-medium">
            <span>Pending FAFSA Verifications</span>
            <div className="w-8 h-8 rounded-lg bg-red-50 flex items-center justify-center text-red-600">
              <AlertTriangle className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-display font-bold text-red-600 mt-2">320</div>
          <div className="text-xs text-red-600 font-semibold mt-1">
            Backlog Exceeds 14-day SLA
          </div>
          <div className="text-xs text-slate-500 mt-1">
            Requires Document Processing Automation
          </div>
        </div>

        <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between text-slate-500 text-xs font-medium">
            <span>Unmet Financial Need</span>
            <div className="w-8 h-8 rounded-lg bg-amber-50 flex items-center justify-center text-amber-600">
              <PieChart className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-display font-bold text-amber-600 mt-2">$4,120</div>
          <div className="text-xs text-amber-600 font-semibold mt-1">
            Mean Gap per Full-Time Student
          </div>
          <div className="text-xs text-slate-500 mt-1">
            Emergency Micro-Grant Fund: $450k Available
          </div>
        </div>
      </div>

      {/* Verification Queue & Award Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm space-y-4">
          <h4 className="text-base font-display font-bold text-slate-900 tracking-tight">
            Financial Aid Award Distribution by Source
          </h4>
          <div className="space-y-4 text-xs">
            <div>
              <div className="flex justify-between text-slate-600 mb-1.5">
                <span className="font-medium">Institutional Merit &amp; Need Scholarships</span>
                <span className="font-bold text-slate-900">$18.4M (38.2%)</span>
              </div>
              <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
                <div className="bg-blue-600 h-full rounded-full" style={{ width: "38.2%" }} />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-slate-600 mb-1.5">
                <span className="font-medium">Federal Direct Loans (Subsidized &amp; Unsub)</span>
                <span className="font-bold text-slate-900">$14.2M (29.5%)</span>
              </div>
              <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
                <div className="bg-indigo-600 h-full rounded-full" style={{ width: "29.5%" }} />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-slate-600 mb-1.5">
                <span className="font-medium">Federal Pell Grants &amp; FSEOG</span>
                <span className="font-bold text-slate-900">$11.6M (24.1%)</span>
              </div>
              <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
                <div className="bg-purple-600 h-full rounded-full" style={{ width: "24.1%" }} />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-slate-600 mb-1.5">
                <span className="font-medium">State Need Grants &amp; Work Study</span>
                <span className="font-bold text-slate-900">$4.0M (8.2%)</span>
              </div>
              <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
                <div className="bg-emerald-600 h-full rounded-full" style={{ width: "8.2%" }} />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="text-base font-display font-bold text-slate-900 tracking-tight">
              FAFSA Verification Processing Queue
            </h4>
            <button
              type="button"
              onClick={() => alert("Simulated AI Optical Document Verification running on 320 pending files...")}
              className="text-xs px-3.5 py-1.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-colors shadow-sm"
            >
              Run AI Auto-Verification
            </button>
          </div>
          <div className="space-y-3 text-xs">
            <div className="p-3.5 rounded-xl bg-slate-50/80 border border-slate-200/80 flex items-center justify-between">
              <div>
                <div className="font-bold text-slate-900">Federal Tax Return Transcripts (V1)</div>
                <div className="text-[11px] text-slate-500">184 files in queue</div>
              </div>
              <span className="text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200 font-mono font-bold text-xs">14.2 Days Wait</span>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-50/80 border border-slate-200/80 flex items-center justify-between">
              <div>
                <div className="font-bold text-slate-900">Identity &amp; Statement of Educational Purpose (V4/V5)</div>
                <div className="text-[11px] text-slate-500">76 files in queue</div>
              </div>
              <span className="text-blue-700 bg-blue-50 px-2 py-0.5 rounded-full border border-blue-200 font-mono font-bold text-xs">8.1 Days Wait</span>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-50/80 border border-slate-200/80 flex items-center justify-between">
              <div>
                <div className="font-bold text-slate-900">Unusual Enrollment History (UEH) Reviews</div>
                <div className="text-[11px] text-slate-500">60 files in queue</div>
              </div>
              <span className="text-purple-700 bg-purple-50 px-2 py-0.5 rounded-full border border-purple-200 font-mono font-bold text-xs">18.5 Days Wait</span>
            </div>
          </div>
        </div>
      </div>

      {/* Financial Aid AI Insights */}
      <AIInsightsList filterCategory="Financial Aid" />
    </DashboardLayout>
  );
}
