"use client";

import React from "react";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { AIInsightsList } from "@/components/dashboard/AIInsightsList";
import {
  Award,
  CheckCircle2,
  AlertTriangle,
  FileText,
  Clock,
  Layers,
  ShieldCheck,
  Calendar,
} from "lucide-react";

export default function AccreditationDashboardPage() {
  const criteria = [
    { id: "Crit 1", name: "Criterion 1: Mission & Public Purpose", status: "Complete", files: 78, score: "100%" },
    { id: "Crit 2", name: "Criterion 2: Integrity, Ethical & Responsible Conduct", status: "Complete", files: 94, score: "98%" },
    { id: "Crit 3", name: "Criterion 3: Teaching and Learning — Quality, Resources & Support", status: "Near Complete", files: 142, score: "95%" },
    { id: "Crit 4", name: "Criterion 4: Teaching and Learning — Evaluation & Improvement", status: "Evidence Gap", files: 112, score: "88%" },
    { id: "Crit 5", name: "Criterion 5: Institutional Effectiveness, Resources & Planning", status: "Complete", files: 56, score: "96%" },
  ];

  return (
    <DashboardLayout
      activeRole="accreditation"
      title="University Accreditation &amp; Regulatory Compliance"
      subtitle="Amanda Clark &bull; Higher Learning Commission (HLC) 10-Year Comprehensive Evaluation Readiness"
    >
      {/* Top Accreditation KPIs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between text-slate-500 text-xs font-medium">
            <span>Accreditation Readiness Index</span>
            <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600">
              <ShieldCheck className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-display font-bold text-emerald-600 mt-2">94 / 100</div>
          <div className="text-xs text-emerald-600 font-semibold mt-1">
            Strong Reaffirmation Posture
          </div>
          <div className="text-xs text-slate-500 mt-1">
            Next HLC Site Visit: Spring 2028
          </div>
        </div>

        <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between text-slate-500 text-xs font-medium">
            <span>Evidence Artifacts Cataloged</span>
            <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">
              <FileText className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-display font-bold text-slate-900 mt-2">482 Files</div>
          <div className="text-xs text-blue-600 font-semibold mt-1">
            98% Core Component Coverage
          </div>
          <div className="text-xs text-slate-500 mt-1">
            Syllabi, Assessment Rubrics, Audits
          </div>
        </div>

        <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between text-slate-500 text-xs font-medium">
            <span>Identified Evidence Gaps</span>
            <div className="w-8 h-8 rounded-lg bg-amber-50 flex items-center justify-center text-amber-600">
              <AlertTriangle className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-display font-bold text-amber-600 mt-2">3 Items</div>
          <div className="text-xs text-amber-600 font-semibold mt-1">
            Under Active Resolution
          </div>
          <div className="text-xs text-slate-500 mt-1">
            Gen-Ed Rubrics in Humanities
          </div>
        </div>

        <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between text-slate-500 text-xs font-medium">
            <span>Specialized Program Accreditations</span>
            <div className="w-8 h-8 rounded-lg bg-purple-50 flex items-center justify-center text-purple-600">
              <Award className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-display font-bold text-purple-600 mt-2">8 / 8</div>
          <div className="text-xs text-emerald-600 font-semibold mt-1">
            100% In Good Standing
          </div>
          <div className="text-xs text-slate-500 mt-1">
            ABET, AACSB, CCNE, CAEP
          </div>
        </div>
      </div>

      {/* Criteria Breakdown Table */}
      <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm space-y-4">
        <div>
          <h4 className="text-base font-display font-bold text-slate-900 tracking-tight">
            HLC Criteria Readiness &amp; Evidence Repository
          </h4>
          <p className="text-xs text-slate-500">
            Assurance argument evidence dossiers mapped to accreditation criterion
          </p>
        </div>

        <div className="space-y-3">
          {criteria.map((c) => (
            <div
              key={c.id}
              className="p-4 rounded-xl bg-slate-50/80 border border-slate-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-slate-50 transition-colors"
            >
              <div>
                <span className="text-[10px] font-bold text-blue-600 uppercase tracking-wider">
                  {c.id}
                </span>
                <div className="text-sm font-display font-bold text-slate-900 mt-0.5">{c.name}</div>
                <div className="text-xs text-slate-500">{c.files} verified evidence files in repository</div>
              </div>

              <div className="flex items-center gap-4">
                <div className="text-right">
                  <div className="text-xs font-mono font-bold text-slate-900">{c.score}</div>
                  <div className="text-[10px] text-slate-500">Readiness</div>
                </div>

                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold border ${
                    c.status === "Complete"
                      ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                      : c.status === "Evidence Gap"
                      ? "bg-amber-50 text-amber-700 border-amber-200"
                      : "bg-blue-50 text-blue-700 border-blue-200"
                  }`}
                >
                  {c.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Accreditation AI Insights */}
      <AIInsightsList filterCategory="Accreditation" />
    </DashboardLayout>
  );
}
