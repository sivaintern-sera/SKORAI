"use client";

import React from "react";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { AIInsightsList } from "@/components/dashboard/AIInsightsList";
import { StudentDataTable } from "@/components/dashboard/StudentDataTable";
import {
  Users,
  GraduationCap,
  TrendingUp,
  Briefcase,
  Layers,
  Award,
  BookOpen,
  DollarSign,
  AlertTriangle,
  ArrowUpRight,
} from "lucide-react";
import { COLLEGES, DEPARTMENTS } from "@/lib/demo-data";
import { formatCurrency, formatNumber } from "@/lib/utils";

export default function DeanDashboardPage() {
  const college = COLLEGES[0]; // College of Computing & IT
  const ccitDepartments = DEPARTMENTS.filter((d) => d.collegeId === college.id);

  return (
    <DashboardLayout
      activeRole="dean"
      title="College Dean Academic Intelligence"
      subtitle="College of Computing and Information Technology &bull; Academic performance, department health, and resource oversight"
    >
      {/* College KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between text-slate-500 text-xs font-medium">
            <span>Enrolled Students</span>
            <div className="w-8 h-8 rounded-lg bg-purple-50 flex items-center justify-center text-purple-700">
              <Users className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-display font-bold text-slate-900 mt-2">
            {formatNumber(college.totalStudents)}
          </div>
          <div className="text-xs text-emerald-600 font-semibold mt-1">
            +6.1% YoY Enrollment Growth
          </div>
          <div className="text-xs text-slate-500 mt-1">
            4 Departments &bull; 7 Degree Programs
          </div>
        </div>

        <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between text-slate-500 text-xs font-medium">
            <span>1st-Year Retention</span>
            <div className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600">
              <GraduationCap className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-display font-bold text-slate-900 mt-2">
            {college.retentionRate}%
          </div>
          <div className="text-xs text-emerald-600 font-semibold mt-1">
            +2.2 pts vs College Target (85.0%)
          </div>
          <div className="text-xs text-slate-500 mt-1">
            6-Year Graduation Rate: {college.graduationRate}%
          </div>
        </div>

        <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between text-slate-500 text-xs font-medium">
            <span>Faculty Lines (FTE)</span>
            <div className="w-8 h-8 rounded-lg bg-purple-50 flex items-center justify-center text-purple-700">
              <Briefcase className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-display font-bold text-slate-900 mt-2">
            {college.totalFaculty} FTE
          </div>
          <div className="text-xs text-purple-700 font-semibold mt-1">
            4 Searches Active (AI &amp; Cyber)
          </div>
          <div className="text-xs text-slate-500 mt-1">
            Student/Faculty Ratio: 24:1
          </div>
        </div>

        <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between text-slate-500 text-xs font-medium">
            <span>College Annual Budget</span>
            <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600">
              <DollarSign className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-display font-bold text-slate-900 mt-2">
            {formatCurrency(college.annualBudget)}
          </div>
          <div className="text-xs text-emerald-600 font-semibold mt-1">
            +$6.2M Externally Funded Grants
          </div>
          <div className="text-xs text-slate-500 mt-1">
            NSF &amp; Industry Partnership Inflows
          </div>
        </div>
      </div>

      {/* Departments Performance Table */}
      <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="text-base font-display font-bold text-slate-900 tracking-tight">
              Department Academic Performance &amp; Chair Metrics
            </h4>
            <p className="text-xs text-slate-500">
              Comparative metrics across all 4 departments in the College of Computing &amp; IT
            </p>
          </div>
          <span className="text-xs text-purple-700 bg-purple-50 font-semibold px-2.5 py-1 rounded-full">College Dean View</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {ccitDepartments.map((dept) => (
            <div
              key={dept.id}
              className="bg-slate-50/80 rounded-xl p-4 border border-slate-200/80 space-y-3"
            >
              <div>
                <span className="text-[10px] font-bold text-purple-700 uppercase tracking-wider">
                  {dept.code}
                </span>
                <h5 className="text-base font-display font-bold text-slate-900">{dept.name}</h5>
                <div className="text-xs text-slate-600">Chair: {dept.chairName}</div>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs pt-2 border-t border-slate-200">
                <div>
                  <div className="text-slate-500 text-[10px]">Majors</div>
                  <div className="font-bold text-slate-900">{formatNumber(dept.totalStudents)}</div>
                </div>
                <div>
                  <div className="text-slate-500 text-[10px]">Faculty</div>
                  <div className="font-bold text-slate-900">{dept.totalFaculty} FTE</div>
                </div>
                <div>
                  <div className="text-slate-500 text-[10px]">Avg GPA</div>
                  <div className="font-bold text-emerald-600">{dept.averageGpa.toFixed(2)}</div>
                </div>
                <div>
                  <div className="text-slate-500 text-[10px]">Retention</div>
                  <div className="font-bold text-purple-700">{dept.retentionRate}%</div>
                </div>
              </div>

              <div className="text-xs text-slate-500 truncate">
                Programs: {dept.programs.join(", ")}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* College AI Insights */}
      <AIInsightsList filterCategory="Retention" />

      {/* College Student Success Roster */}
      <StudentDataTable />
    </DashboardLayout>
  );
}

