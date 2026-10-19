"use client";

import React from "react";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import {
  Briefcase,
  DollarSign,
  TrendingUp,
  Building,
  Award,
  Users,
  CheckCircle,
} from "lucide-react";
import { formatCurrency } from "@/lib/utils";

export default function CareerServicesDashboardPage() {
  const employers = [
    { name: "Raytheon Technologies", industry: "Defense & Aerospace", hires: 42, avgSalary: "$78,500" },
    { name: "Liberty Mutual Insurance", industry: "Financial Services", hires: 38, avgSalary: "$72,000" },
    { name: "Mass General Brigham", industry: "Healthcare & Life Sciences", hires: 54, avgSalary: "$68,500" },
    { name: "Fidelity Investments", industry: "FinTech & Wealth", hires: 35, avgSalary: "$76,000" },
    { name: "Amazon Robotics", industry: "Autonomous Systems", hires: 28, avgSalary: "$89,000" },
  ];

  return (
    <DashboardLayout
      activeRole="career-services"
      title="Career Services &amp; Workforce Placement Outcomes"
      subtitle="Rachel Adams &bull; Post-graduate career outcomes, employer partnerships, and student internship tracking"
    >
      {/* Top Career KPIs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between text-slate-500 text-xs font-medium">
            <span>Career Placement Rate</span>
            <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600">
              <Briefcase className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-display font-bold text-emerald-600 mt-2">92.4%</div>
          <div className="text-xs text-emerald-600 font-semibold mt-1">
            6 Months Post-Graduation
          </div>
          <div className="text-xs text-slate-500 mt-1">
            Employed, Grad School, or Military Service
          </div>
        </div>

        <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between text-slate-500 text-xs font-medium">
            <span>Mean Starting Salary</span>
            <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">
              <DollarSign className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-display font-bold text-slate-900 mt-2">$64,800</div>
          <div className="text-xs text-emerald-600 font-semibold mt-1">
            +4.1% vs Class of 2025
          </div>
          <div className="text-xs text-slate-500 mt-1">
            STEM Average: $76,400 &bull; Business: $62,100
          </div>
        </div>

        <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between text-slate-500 text-xs font-medium">
            <span>Internship Participation</span>
            <div className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600">
              <Award className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-display font-bold text-blue-600 mt-2">71.8%</div>
          <div className="text-xs text-blue-600 font-semibold mt-1">
            Completed 1+ Experiential Term
          </div>
          <div className="text-xs text-slate-500 mt-1">
            Target: 75.0% by 2028 Strategic Plan
          </div>
        </div>

        <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between text-slate-500 text-xs font-medium">
            <span>Active Employer Partners</span>
            <div className="w-8 h-8 rounded-lg bg-purple-50 flex items-center justify-center text-purple-600">
              <Building className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-display font-bold text-slate-900 mt-2">340</div>
          <div className="text-xs text-purple-600 font-semibold mt-1">
            On-Campus &amp; Virtual Recruiting
          </div>
          <div className="text-xs text-slate-500 mt-1">
            Fall Career Fair: 1,850 Student Attendees
          </div>
        </div>
      </div>

      {/* Top Employer Hiring Partners Table */}
      <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm space-y-4">
        <div>
          <h4 className="text-base font-display font-bold text-slate-900 tracking-tight">
            Top Regional &amp; National Employer Hiring Partners
          </h4>
          <p className="text-xs text-slate-500">
            Strategic corporate co-op sponsors and employment pipelines
          </p>
        </div>

        <div className="overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full text-left text-xs text-slate-700">
            <thead className="bg-slate-50 text-slate-600 uppercase tracking-wider text-[11px] font-semibold border-b border-slate-200">
              <tr>
                <th className="p-3.5">Employer Name</th>
                <th className="p-3.5">Industry Domain</th>
                <th className="p-3.5">Annual NSU Hires</th>
                <th className="p-3.5">Mean Starting Salary</th>
                <th className="p-3.5">Internship Co-Op Sponsor</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {employers.map((emp) => (
                <tr key={emp.name} className="hover:bg-slate-50/70 transition-colors">
                  <td className="p-3.5 font-display font-bold text-slate-900">{emp.name}</td>
                  <td className="p-3.5 text-slate-600">{emp.industry}</td>
                  <td className="p-3.5 font-mono font-bold text-blue-600">{emp.hires} graduates</td>
                  <td className="p-3.5 font-mono font-bold text-emerald-600">{emp.avgSalary}</td>
                  <td className="p-3.5">
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                      Active Partner
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
