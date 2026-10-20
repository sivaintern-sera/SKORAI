"use client";

import React from "react";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { StudentDataTable } from "@/components/dashboard/StudentDataTable";
import { AIInsightsList } from "@/components/dashboard/AIInsightsList";
import { SAMPLE_COURSE_SECTIONS } from "@/lib/demo-data";
import {
  Users,
  BookOpen,
  AlertTriangle,
  Award,
  CheckCircle,
  TrendingDown,
  Layers,
  Clock,
} from "lucide-react";

export default function DepartmentChairDashboardPage() {
  const csSections = SAMPLE_COURSE_SECTIONS.filter((s) => s.department === "Computer Science");

  return (
    <DashboardLayout
      activeRole="department-chair"
      title="Department Chair Management Dashboard"
      subtitle="Department of Computer Science &bull; Faculty teaching workload, course sections, and DFW rate analytics"
    >
      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between text-slate-500 text-xs font-medium">
            <span>Total CS Majors</span>
            <div className="w-8 h-8 rounded-lg bg-purple-50 flex items-center justify-center text-purple-700">
              <Users className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-display font-bold text-slate-900 mt-2">980</div>
          <div className="text-xs text-emerald-600 font-semibold mt-1">
            +8.4% YoY Major Growth
          </div>
          <div className="text-xs text-slate-500 mt-1">
            740 Undergrad &bull; 240 M.S.
          </div>
        </div>

        <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between text-slate-500 text-xs font-medium">
            <span>Active Course Sections</span>
            <div className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600">
              <BookOpen className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-display font-bold text-slate-900 mt-2">48</div>
          <div className="text-xs text-purple-700 font-semibold mt-1">
            96% Seat Capacity Filled
          </div>
          <div className="text-xs text-slate-500 mt-1">
            3 High-Demand Bottleneck Courses
          </div>
        </div>

        <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between text-slate-500 text-xs font-medium">
            <span>Department DFW Rate</span>
            <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600">
              <TrendingDown className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-display font-bold text-slate-900 mt-2">11.2%</div>
          <div className="text-xs text-emerald-600 font-semibold mt-1">
            -2.4 pts (Improved persistence)
          </div>
          <div className="text-xs text-slate-500 mt-1">
            National CS Average: 18.5%
          </div>
        </div>

        <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between text-slate-500 text-xs font-medium">
            <span>Department Faculty</span>
            <div className="w-8 h-8 rounded-lg bg-purple-50 flex items-center justify-center text-purple-600">
              <Award className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-display font-bold text-slate-900 mt-2">38 FTE</div>
          <div className="text-xs text-purple-700 font-semibold mt-1">
            2 Assistant Prof Searches
          </div>
          <div className="text-xs text-slate-500 mt-1">
            Average Teaching Load: 3.1 sections
          </div>
        </div>
      </div>

      {/* Course Sections & Workload Table */}
      <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="text-base font-display font-bold text-slate-900 tracking-tight">
              Gateway &amp; Core Course Section Health
            </h4>
            <p className="text-xs text-slate-500">
              Enrollment capacity, instructor assignment, and early academic alerts
            </p>
          </div>
          <span className="text-xs text-purple-700 bg-purple-50 font-semibold px-2.5 py-1 rounded-full">Fall 2026 Active Term</span>
        </div>

        <div className="overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full text-left text-xs text-slate-700">
            <thead className="bg-slate-50 text-slate-600 uppercase tracking-wider text-[11px] font-semibold border-b border-slate-200">
              <tr>
                <th className="p-3">Course Code</th>
                <th className="p-3">Course Title</th>
                <th className="p-3">Assigned Faculty</th>
                <th className="p-3">Enrollment / Cap</th>
                <th className="p-3">Schedule</th>
                <th className="p-3">Avg Grade</th>
                <th className="p-3">At-Risk Alerts</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {csSections.map((sec) => (
                <tr key={sec.id} className="hover:bg-slate-50/70 transition-colors">
                  <td className="p-3 font-mono font-bold text-purple-700">{sec.courseCode}</td>
                  <td className="p-3 font-medium text-slate-900">{sec.title}</td>
                  <td className="p-3 text-slate-600">{sec.instructorName}</td>
                  <td className="p-3 font-mono text-slate-700">
                    {sec.enrolledStudents} / {sec.capacity} ({Math.round((sec.enrolledStudents / sec.capacity) * 100)}%)
                  </td>
                  <td className="p-3 text-slate-500">{sec.schedule}</td>
                  <td className="p-3 font-mono font-bold text-emerald-600">{sec.averageGrade}</td>
                  <td className="p-3">
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-amber-50 text-amber-700 border border-amber-200">
                      {sec.atRiskCount} Flagged
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Department AI Insights */}
      <AIInsightsList limit={2} />

      {/* Department Students Roster */}
      <StudentDataTable filterDepartment="Computer Science" />
    </DashboardLayout>
  );
}

