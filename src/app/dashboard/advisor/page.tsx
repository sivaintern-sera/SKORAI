"use client";

import React, { useState } from "react";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { StudentDataTable } from "@/components/dashboard/StudentDataTable";
import { AIInsightsList } from "@/components/dashboard/AIInsightsList";
import {
  Users,
  AlertTriangle,
  CheckCircle,
  Calendar,
  MessageSquare,
  Lightbulb,
  GraduationCap,
  TrendingDown,
  ArrowRight,
} from "lucide-react";

export default function AdvisorDashboardPage() {
  const [selectedStudentForNotes, setSelectedStudentForNotes] = useState<string | null>(null);

  return (
    <DashboardLayout
      activeRole="advisor"
      title="Academic Advisor Caseload &amp; Intervention Portal"
      subtitle="Sarah Mitchell &bull; Assigned undergraduate caseload, retention risk scores, and appointment interventions"
    >
      {/* Caseload KPI Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between text-slate-500 text-xs font-medium">
            <span>Assigned Caseload</span>
            <div className="w-8 h-8 rounded-lg bg-purple-50 flex items-center justify-center text-purple-700">
              <Users className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-display font-bold text-slate-900 mt-2">185</div>
          <div className="text-xs text-emerald-600 font-semibold mt-1">
            91% Degree Audit On-Track
          </div>
          <div className="text-xs text-slate-500 mt-1">
            Freshmen &bull; Sophomores &bull; Transfer Students
          </div>
        </div>

        <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between text-slate-500 text-xs font-medium">
            <span>High Retention Risk Flags</span>
            <div className="w-8 h-8 rounded-lg bg-amber-50 flex items-center justify-center text-amber-600">
              <AlertTriangle className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-display font-bold text-amber-600 mt-2">14</div>
          <div className="text-xs text-amber-600 font-semibold mt-1">
            Requires Intervention Workflow
          </div>
          <div className="text-xs text-slate-500 mt-1">
            Midterm Grade &lt; 2.0 or Attendance &lt; 80%
          </div>
        </div>

        <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between text-slate-500 text-xs font-medium">
            <span>Advising Appointments</span>
            <div className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600">
              <Calendar className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-display font-bold text-slate-900 mt-2">8 Today</div>
          <div className="text-xs text-purple-700 font-semibold mt-1">
            100% Fall Registration Cleared
          </div>
          <div className="text-xs text-slate-500 mt-1">
            Next: Michael Brown (2:30 PM)
          </div>
        </div>

        <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between text-slate-500 text-xs font-medium">
            <span>Intervention Success Rate</span>
            <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600">
              <GraduationCap className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-display font-bold text-emerald-600 mt-2">88.4%</div>
          <div className="text-xs text-emerald-600 font-semibold mt-1">
            +4.1 pts Persistence Boost
          </div>
          <div className="text-xs text-slate-500 mt-1">
            Tutoring &amp; Academic Recovery Plans
          </div>
        </div>
      </div>

      {/* Advisor Workflow Card */}
      <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Lightbulb className="w-4 h-4 text-purple-700" />
            <h4 className="text-base font-display font-bold text-slate-900 tracking-tight">
              Recommended Advisor Intervention Actions
            </h4>
          </div>
          <span className="text-xs text-purple-700 bg-purple-50 font-semibold px-2.5 py-1 rounded-full">Automated AI Queue</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
          <div className="p-4 rounded-xl bg-slate-50/80 border border-slate-200/80 space-y-2.5 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between">
                <span className="font-display font-bold text-slate-900 text-sm">FAFSA Verification Holds</span>
                <span className="px-2 py-0.5 rounded-full text-[10px] bg-red-50 text-red-700 border border-red-200 font-semibold">
                  Urgent
                </span>
              </div>
              <p className="text-slate-600 text-xs mt-1.5 leading-relaxed">
                6 advisees have uncompleted federal aid documents preventing spring enrollment priority registration.
              </p>
            </div>
            <button
              type="button"
              onClick={() => alert("Simulated batch SMS/Email reminder dispatched to 6 students with Financial Aid Office cc'd.")}
              className="w-full py-2 rounded-full bg-purple-700 hover:bg-purple-500 text-white font-semibold transition-colors text-center text-xs shadow-sm"
            >
              Batch Outreach Reminder
            </button>
          </div>

          <div className="p-4 rounded-xl bg-slate-50/80 border border-slate-200/80 space-y-2.5 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between">
                <span className="font-display font-bold text-slate-900 text-sm">Sophomore Slump Risk</span>
                <span className="px-2 py-0.5 rounded-full text-[10px] bg-amber-50 text-amber-700 border border-amber-200 font-semibold">
                  Monitoring
                </span>
              </div>
              <p className="text-slate-600 text-xs mt-1.5 leading-relaxed">
                4 engineering advisees struggling with Statics and Calculus II gateway milestones.
              </p>
            </div>
            <button
              type="button"
              onClick={() => alert("Peer tutoring matched and schedule invite sent to all 4 students.")}
              className="w-full py-2 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-semibold transition-colors text-center text-xs shadow-sm"
            >
              Schedule Supplemental Tutoring
            </button>
          </div>

          <div className="p-4 rounded-xl bg-slate-50/80 border border-slate-200/80 space-y-2.5 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between">
                <span className="font-display font-bold text-slate-900 text-sm">Graduation Check In</span>
                <span className="px-2 py-0.5 rounded-full text-[10px] bg-emerald-50 text-emerald-700 border border-emerald-200 font-semibold">
                  On-Track
                </span>
              </div>
              <p className="text-slate-600 text-xs mt-1.5 leading-relaxed">
                28 seniors have completed 105+ credit hours and are ready for official degree audit verification.
              </p>
            </div>
            <button
              type="button"
              onClick={() => alert("Batch Degree Audit Certification Submitted to Registrar.")}
              className="w-full py-2 rounded-full border border-slate-200 bg-white hover:bg-slate-100 text-slate-700 font-semibold transition-colors text-center text-xs shadow-sm"
            >
              Certify Degree Audits
            </button>
          </div>
        </div>
      </div>

      {/* At-Risk Advisee Roster */}
      <StudentDataTable filterRiskOnly={true} />
    </DashboardLayout>
  );
}

