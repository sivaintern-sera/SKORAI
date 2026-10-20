"use client";

import React from "react";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import {
  BarChart3,
  CheckCircle,
  FileCheck,
  TrendingUp,
  Award,
  Layers,
  ShieldCheck,
} from "lucide-react";

export default function InstitutionalEffectivenessPage() {
  const strategicGoals = [
    { goal: "Increase First-Year Retention above 85%", baseline: "82.4%", current: "84.2%", target: "85.0%", status: "On Track" },
    { goal: "Expand Undergrad Research Participation to 30%", baseline: "22.0%", current: "28.5%", target: "30.0%", status: "On Track" },
    { goal: "Reduce Gateway Course DFW Rates below 12%", baseline: "16.8%", current: "11.2%", target: "12.0%", status: "Achieved" },
    { goal: "Grow Out-of-State Matriculation to 25%", baseline: "21.5%", current: "28.4%", target: "25.0%", status: "Achieved" },
    { goal: "Attain Complete Accreditation Readiness by FY27", baseline: "80%", current: "94.0%", target: "100%", status: "On Track" },
  ];

  return (
    <DashboardLayout
      activeRole="institutional-effectiveness"
      title="Institutional Effectiveness &amp; Assessment"
      subtitle="Robert Harris &bull; IPEDS mandatory reporting, strategic plan benchmarks, and learning outcome assessments"
    >
      {/* Top KPIs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between text-slate-500 text-xs font-medium">
            <span>IPEDS Compliance Quality</span>
            <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600">
              <CheckCircle className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-display font-bold text-emerald-600 mt-2">99.8%</div>
          <div className="text-xs text-emerald-600 font-semibold mt-1">
            Audit-Verified Dataset
          </div>
          <div className="text-xs text-slate-500 mt-1">
            Fall Enrollment, Human Resources, Finance
          </div>
        </div>

        <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between text-slate-500 text-xs font-medium">
            <span>Strategic Goals Progress</span>
            <div className="w-8 h-8 rounded-lg bg-purple-50 flex items-center justify-center text-purple-700">
              <TrendingUp className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-display font-bold text-slate-900 mt-2">18 / 20</div>
          <div className="text-xs text-purple-700 font-semibold mt-1">
            Vision 2030 Milestones
          </div>
          <div className="text-xs text-slate-500 mt-1">
            2 Under Targeted Intervention
          </div>
        </div>

        <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between text-slate-500 text-xs font-medium">
            <span>6-Year Graduation Rate</span>
            <div className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600">
              <Award className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-display font-bold text-slate-900 mt-2">66.4%</div>
          <div className="text-xs text-emerald-600 font-semibold mt-1">
            +1.9 pts (Outperforming Peers)
          </div>
          <div className="text-xs text-slate-500 mt-1">
            Peer Group Median: 63.8%
          </div>
        </div>

        <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between text-slate-500 text-xs font-medium">
            <span>Program Learning Outcomes</span>
            <div className="w-8 h-8 rounded-lg bg-purple-50 flex items-center justify-center text-purple-600">
              <Layers className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-display font-bold text-purple-600 mt-2">96.2%</div>
          <div className="text-xs text-purple-700 font-semibold mt-1">
            24 Departments Assessed
          </div>
          <div className="text-xs text-slate-500 mt-1">
            Annual Assessment Repository
          </div>
        </div>
      </div>

      {/* Strategic Goals Table */}
      <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm space-y-4">
        <div>
          <h4 className="text-base font-display font-bold text-slate-900 tracking-tight">
            University Strategic Plan (Vision 2030) Scorecard
          </h4>
          <p className="text-xs text-slate-500">
            Institutional key results, multi-year progress, and benchmark targets
          </p>
        </div>

        <div className="overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full text-left text-xs text-slate-700">
            <thead className="bg-slate-50 text-slate-600 uppercase tracking-wider text-[11px] font-semibold border-b border-slate-200">
              <tr>
                <th className="p-3.5">Strategic Goal &amp; Objective</th>
                <th className="p-3.5">Baseline</th>
                <th className="p-3.5">Current Value</th>
                <th className="p-3.5">Target</th>
                <th className="p-3.5">Performance Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {strategicGoals.map((g) => (
                <tr key={g.goal} className="hover:bg-slate-50/70 transition-colors">
                  <td className="p-3.5 font-display font-bold text-slate-900">{g.goal}</td>
                  <td className="p-3.5 font-mono text-slate-500">{g.baseline}</td>
                  <td className="p-3.5 font-mono font-bold text-purple-700">{g.current}</td>
                  <td className="p-3.5 font-mono text-slate-700">{g.target}</td>
                  <td className="p-3.5">
                    <span
                      className={`px-2.5 py-0.5 rounded-full text-[11px] font-semibold border ${
                        g.status === "Achieved"
                          ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                          : "bg-purple-50 text-purple-800 border-purple-200"
                      }`}
                    >
                      {g.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </DashboardLayout>
  );
}

