"use client";

import React from "react";
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  PieChart,
  Pie,
  Cell,
} from "recharts";

// 1. Retention & Graduation Longitudinal Trends
const RETENTION_DATA = [
  { year: "2021", retention: 81.2, graduation: 62.4, nationalAvg: 78.5 },
  { year: "2022", retention: 82.0, graduation: 63.8, nationalAvg: 78.9 },
  { year: "2023", retention: 82.9, graduation: 64.9, nationalAvg: 79.2 },
  { year: "2024", retention: 83.5, graduation: 65.5, nationalAvg: 79.5 },
  { year: "2025", retention: 84.0, graduation: 66.1, nationalAvg: 79.8 },
  { year: "2026", retention: 84.2, graduation: 66.4, nationalAvg: 80.0 },
];

export function RetentionTrendChart() {
  return (
    <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm space-y-3 font-sans">
      <div className="flex items-center justify-between">
        <div>
          <h4 className="font-display text-sm font-bold text-slate-900 tracking-tight">
            Longitudinal Retention &amp; Graduation Rates (%)
          </h4>
          <p className="text-[11px] text-slate-500">
            Northbridge State University vs. National Four-Year Benchmark
          </p>
        </div>
        <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full ring-1 ring-inset ring-emerald-600/20">
          +1.8 pts (5-yr)
        </span>
      </div>

      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={RETENTION_DATA} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="colorRetention" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#2563EB" stopOpacity={0.25} />
                <stop offset="95%" stopColor="#2563EB" stopOpacity={0.0} />
              </linearGradient>
              <linearGradient id="colorGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#4F46E5" stopOpacity={0.2} />
                <stop offset="95%" stopColor="#4F46E5" stopOpacity={0.0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#F1F5F9" />
            <XAxis dataKey="year" stroke="#94A3B8" fontSize={11} />
            <YAxis domain={[50, 95]} stroke="#94A3B8" fontSize={11} />
            <Tooltip
              contentStyle={{
                backgroundColor: "#FFFFFF",
                borderColor: "#E2E8F0",
                borderRadius: "12px",
                fontSize: "12px",
                color: "#0F172A",
                boxShadow: "0 10px 15px -3px rgba(15, 23, 42, 0.08)",
              }}
            />
            <Legend wrapperStyle={{ fontSize: "11px", paddingTop: "8px" }} />
            <Area type="monotone" dataKey="retention" name="1st-Year Retention Rate (%)" stroke="#2563EB" strokeWidth={2.5} fillOpacity={1} fill="url(#colorRetention)" />
            <Area type="monotone" dataKey="graduation" name="6-Year Graduation Rate (%)" stroke="#4F46E5" strokeWidth={2.5} fillOpacity={1} fill="url(#colorGrad)" />
            <Line type="monotone" dataKey="nationalAvg" name="National Benchmark" stroke="#CBD5E1" strokeDasharray="4 4" strokeWidth={1.5} dot={false} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

// 2. College Enrollment Breakdown Bar Chart
const COLLEGE_ENROLLMENT_DATA = [
  { name: "Computing & IT", students: 2150, faculty: 88 },
  { name: "Engineering", students: 1980, faculty: 95 },
  { name: "Business", students: 2100, faculty: 82 },
  { name: "Arts & Sciences", students: 2250, faculty: 145 },
  { name: "Health Sciences", students: 920, faculty: 52 },
  { name: "Education", students: 600, faculty: 38 },
];

export function CollegeEnrollmentChart() {
  return (
    <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm space-y-3 font-sans">
      <div className="flex items-center justify-between">
        <div>
          <h4 className="font-display text-sm font-bold text-slate-900 tracking-tight">
            Enrollment by Academic College (Headcount)
          </h4>
          <p className="text-[11px] text-slate-500">
            Fall 2026 distribution across 6 academic colleges
          </p>
        </div>
        <span className="text-xs text-blue-700 font-semibold bg-blue-50 px-2.5 py-0.5 rounded-full ring-1 ring-inset ring-blue-700/10">10,000 Total</span>
      </div>

      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={COLLEGE_ENROLLMENT_DATA} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#F1F5F9" />
            <XAxis dataKey="name" stroke="#94A3B8" fontSize={10} tickFormatter={(val) => val.split(" ")[0]} />
            <YAxis stroke="#94A3B8" fontSize={11} />
            <Tooltip
              contentStyle={{
                backgroundColor: "#FFFFFF",
                borderColor: "#E2E8F0",
                borderRadius: "12px",
                fontSize: "12px",
                color: "#0F172A",
                boxShadow: "0 10px 15px -3px rgba(15, 23, 42, 0.08)",
              }}
            />
            <Legend wrapperStyle={{ fontSize: "11px", paddingTop: "8px" }} />
            <Bar dataKey="students" name="Enrolled Students" fill="#2563EB" radius={[4, 4, 0, 0]} />
            <Bar dataKey="faculty" name="Full-Time Faculty" fill="#4F46E5" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

// 3. Institutional Risk Radar Chart
const RISK_RADAR_DATA = [
  { subject: "Enrollment Velocity", score: 86, fullMark: 100 },
  { subject: "Freshman Retention", score: 84, fullMark: 100 },
  { subject: "Operating Margin", score: 78, fullMark: 100 },
  { subject: "Accreditation Readiness", score: 94, fullMark: 100 },
  { subject: "Cyber Defense", score: 82, fullMark: 100 },
  { subject: "Faculty Retention", score: 88, fullMark: 100 },
];

export function InstitutionalRiskRadar() {
  return (
    <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm space-y-3 font-sans">
      <div className="flex items-center justify-between">
        <div>
          <h4 className="font-display text-sm font-bold text-slate-900 tracking-tight">
            Institutional Health &amp; Risk Radar
          </h4>
          <p className="text-[11px] text-slate-500">
            Multi-dimensional institutional readiness score (0-100)
          </p>
        </div>
        <span className="text-xs font-semibold text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-full ring-1 ring-inset ring-blue-700/10">
          Composite: 85.3
        </span>
      </div>

      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart cx="50%" cy="50%" outerRadius="75%" data={RISK_RADAR_DATA}>
            <PolarGrid stroke="#E2E8F0" />
            <PolarAngleAxis dataKey="subject" stroke="#64748B" fontSize={10} />
            <PolarRadiusAxis angle={30} domain={[0, 100]} stroke="#CBD5E1" fontSize={9} />
            <Radar name="Northbridge Health Index" dataKey="score" stroke="#2563EB" fill="#2563EB" fillOpacity={0.25} />
            <Tooltip
              contentStyle={{
                backgroundColor: "#FFFFFF",
                borderColor: "#E2E8F0",
                borderRadius: "12px",
                fontSize: "12px",
                color: "#0F172A",
                boxShadow: "0 10px 15px -3px rgba(15, 23, 42, 0.08)",
              }}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

// 4. Financial Aid & Tuition Revenue Flow
const REVENUE_DATA = [
  { category: "Tuition & Fees", amount: 104.2, fill: "#2563EB" },
  { category: "State Appropriations", amount: 48.5, fill: "#3B82F6" },
  { category: "Research Grants", amount: 21.8, fill: "#6366F1" },
  { category: "Endowment Draw", amount: 12.4, fill: "#0EA5E9" },
  { category: "Auxiliary Services", amount: 18.2, fill: "#F59E0B" },
];

export function RevenueBreakdownChart() {
  return (
    <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm space-y-3 font-sans">
      <div className="flex items-center justify-between">
        <div>
          <h4 className="font-display text-sm font-bold text-slate-900 tracking-tight">
            Annual Revenue Composition ($ Millions)
          </h4>
          <p className="text-[11px] text-slate-500">
            FY2026 Operating Budget Sources ($174.5M Operating Baseline)
          </p>
        </div>
      </div>

      <div className="h-64 w-full flex items-center justify-center">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={REVENUE_DATA}
              dataKey="amount"
              nameKey="category"
              cx="50%"
              cy="50%"
              innerRadius={55}
              outerRadius={80}
              paddingAngle={4}
            >
              {REVENUE_DATA.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.fill} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                backgroundColor: "#FFFFFF",
                borderColor: "#E2E8F0",
                borderRadius: "12px",
                fontSize: "12px",
                color: "#0F172A",
                boxShadow: "0 10px 15px -3px rgba(15, 23, 42, 0.08)",
              }}
              formatter={(val) => [`$${val} Million`, "Revenue"]}
            />
            <Legend wrapperStyle={{ fontSize: "10px" }} />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
