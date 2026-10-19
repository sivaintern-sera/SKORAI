"use client";

import React, { useState } from "react";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import {
  GraduationCap,
  Award,
  BookOpen,
  DollarSign,
  Briefcase,
  Lightbulb,
  Calendar,
  CheckCircle,
  Clock,
  ExternalLink,
  TrendingUp,
} from "lucide-react";

export default function StudentDashboardPage() {
  const [activeTab, setActiveTab] = useState<"courses" | "audit" | "career">("courses");

  const enrolledCourses = [
    { code: "CS 220", title: "Data Structures & Algorithms", credits: 4, instructor: "Dr. Emily Johnson", grade: "A-", attendance: "96%", status: "In Progress" },
    { code: "CS 310", title: "Computer Organization & Architecture", credits: 3, instructor: "Dr. Robert Anderson", grade: "B+", attendance: "92%", status: "In Progress" },
    { code: "MATH 240", title: "Linear Algebra & Applications", credits: 3, instructor: "Dr. Alan Stone", grade: "A", attendance: "98%", status: "In Progress" },
    { code: "CYB 210", title: "Fundamentals of Cyber Defense", credits: 3, instructor: "Dr. Victor Morales", grade: "A-", attendance: "94%", status: "In Progress" },
    { code: "COMM 210", title: "Technical Communication in Computing", credits: 2, instructor: "Dr. Nancy Drew", grade: "A", attendance: "100%", status: "In Progress" },
  ];

  return (
    <DashboardLayout
      activeRole="student"
      title="Personal Academic &amp; Career Intelligence"
      subtitle="Michael Brown &bull; Student ID: NSU-2024-1042 &bull; Junior, B.S. in Computer Science"
    >
      {/* Student Top KPIs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all">
          <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider font-display">Cumulative GPA</div>
          <div className="font-display text-3xl font-extrabold text-emerald-600 mt-2">3.58</div>
          <div className="text-xs text-emerald-600 font-semibold mt-1">
            Dean&apos;s Honor List Standing
          </div>
          <div className="text-[11px] text-slate-500 mt-1">
            Major GPA: 3.72 &bull; Top 15% of Class
          </div>
        </div>

        <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all">
          <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider font-display">Degree Progress</div>
          <div className="font-display text-3xl font-extrabold text-slate-900 mt-2">78 / 120</div>
          <div className="text-xs text-blue-600 font-semibold mt-1">
            65% Degree Requirement Complete
          </div>
          <div className="text-[11px] text-slate-500 mt-1">
            Anticipated Graduation: Spring 2028
          </div>
        </div>

        <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all">
          <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider font-display">Financial Aid Status</div>
          <div className="font-display text-3xl font-extrabold text-slate-900 mt-2">$8,500/yr</div>
          <div className="text-xs text-emerald-600 font-semibold mt-1">
            Awarded &bull; Zero Balance Hold
          </div>
          <div className="text-[11px] text-slate-500 mt-1">
            Dean&apos;s Merit Scholarship + Federal Grant
          </div>
        </div>

        <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all">
          <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider font-display">Career Readiness Score</div>
          <div className="font-display text-3xl font-extrabold text-blue-600 mt-2">92 / 100</div>
          <div className="text-xs text-blue-600 font-semibold mt-1">
            Internship Ready Portfolio
          </div>
          <div className="text-[11px] text-slate-500 mt-1">
            Handshake Profile Verified
          </div>
        </div>
      </div>

      {/* Progress Bar & Advisor Contact Pill */}
      <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1.5 flex-1 max-w-xl">
          <div className="flex items-center justify-between text-xs font-display">
            <span className="font-semibold text-slate-900">Degree Completion Milestone</span>
            <span className="font-mono text-blue-600 font-bold">65% (78 Credits)</span>
          </div>
          <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden border border-slate-200">
            <div className="bg-blue-600 h-full rounded-full transition-all duration-1000" style={{ width: "65%" }} />
          </div>
        </div>

        <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-3 shrink-0">
          <div className="w-9 h-9 rounded-full bg-blue-50 text-blue-700 ring-1 ring-blue-700/10 flex items-center justify-center font-bold text-xs">
            SM
          </div>
          <div className="text-xs">
            <div className="font-semibold text-slate-900">Advisor: Sarah Mitchell</div>
            <div className="text-slate-500">Next check-in: Oct 24, 2:30 PM</div>
          </div>
        </div>
      </div>

      {/* Interactive Tabs */}
      <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm space-y-6">
        <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
          <button
            type="button"
            onClick={() => setActiveTab("courses")}
            className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
              activeTab === "courses"
                ? "bg-blue-600 text-white shadow-sm"
                : "text-slate-600 hover:text-slate-900 bg-slate-50 hover:bg-slate-100"
            }`}
          >
            Fall 2026 Course Schedule (15 Credits)
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("audit")}
            className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
              activeTab === "audit"
                ? "bg-blue-600 text-white shadow-sm"
                : "text-slate-600 hover:text-slate-900 bg-slate-50 hover:bg-slate-100"
            }`}
          >
            Interactive Degree Audit
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("career")}
            className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
              activeTab === "career"
                ? "bg-blue-600 text-white shadow-sm"
                : "text-slate-600 hover:text-slate-900 bg-slate-50 hover:bg-slate-100"
            }`}
          >
            Career &amp; Internship Match
          </button>
        </div>

        {/* Tab 1: Current Courses */}
        {activeTab === "courses" && (
          <div className="space-y-4">
            <div className="overflow-x-auto rounded-xl border border-slate-200">
              <table className="w-full text-left text-xs text-slate-700">
                <thead className="bg-slate-50 text-slate-500 font-semibold uppercase tracking-wider text-[10px] border-b border-slate-200 font-display">
                  <tr>
                    <th className="p-3">Course Code</th>
                    <th className="p-3">Title</th>
                    <th className="p-3">Instructor</th>
                    <th className="p-3">Credits</th>
                    <th className="p-3">Current Grade</th>
                    <th className="p-3">Attendance</th>
                    <th className="p-3">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 bg-white">
                  {enrolledCourses.map((c) => (
                    <tr key={c.code} className="hover:bg-slate-50/80">
                      <td className="p-3 font-mono font-bold text-blue-600">{c.code}</td>
                      <td className="p-3 font-medium text-slate-900">{c.title}</td>
                      <td className="p-3 text-slate-600">{c.instructor}</td>
                      <td className="p-3 font-mono">{c.credits}</td>
                      <td className="p-3 font-mono font-bold text-emerald-600">{c.grade}</td>
                      <td className="p-3 font-mono">{c.attendance}</td>
                      <td className="p-3">
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-blue-50 text-blue-700 ring-1 ring-inset ring-blue-700/10">
                          {c.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* AI Recommendation Box */}
            <div className="p-5 rounded-2xl bg-blue-50/70 border border-blue-200/70 flex items-start gap-3">
              <Lightbulb className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
              <div className="space-y-1 text-xs">
                <div className="font-display font-bold text-blue-900">
                  AI Course Recommendation for Spring 2027 Registration
                </div>
                <p className="text-slate-700 leading-relaxed">
                  Based on your A- grade in Data Structures and strong interest in Machine Learning, our academic intelligence system recommends enrolling in <strong>DSAI 310: Machine Learning Foundations</strong> with Dr. Sunita Patel and <strong>CS 330: Operating Systems</strong> to fulfill Upper-Division Technical Elective requirements on schedule.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Degree Audit */}
        {activeTab === "audit" && (
          <div className="space-y-3 text-xs">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
              <div>
                <div className="font-semibold text-slate-900 font-display">General Education Core (36 Hours)</div>
                <div className="text-slate-500 text-[11px]">English, Natural Sciences, Humanities, Social Sciences</div>
              </div>
              <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 font-semibold">
                Completed (36/36)
              </span>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
              <div>
                <div className="font-semibold text-slate-900 font-display">Major Core Requirements (48 Hours)</div>
                <div className="text-slate-500 text-[11px]">Programming, Algorithms, Systems, Discrete Structures</div>
              </div>
              <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200 font-semibold">
                In Progress (30/48)
              </span>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
              <div>
                <div className="font-semibold text-slate-900 font-display">Upper-Division Technical Electives (24 Hours)</div>
                <div className="text-slate-500 text-[11px]">AI, Cybersecurity, Cloud Systems, Database Engineering</div>
              </div>
              <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200 font-semibold">
                Planned (12/24)
              </span>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
              <div>
                <div className="font-semibold text-slate-900 font-display">Senior Capstone Experience (12 Hours)</div>
                <div className="text-slate-500 text-[11px]">CS 490 Senior Project &amp; Professional Ethics</div>
              </div>
              <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-500 border border-slate-200 font-semibold">
                Upcoming (Senior Year)
              </span>
            </div>
          </div>
        )}

        {/* Tab 3: Career Match */}
        {activeTab === "career" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-display font-bold text-slate-900 text-sm">Software Engineering Intern</span>
                <span className="text-emerald-600 font-bold">96% Skill Match</span>
              </div>
              <div className="text-slate-500">Raytheon Technologies &bull; Waltham, MA</div>
              <p className="text-slate-600 text-[11px]">
                Seeking juniors in Computer Science with proficiency in TypeScript, Java, and Distributed Algorithms.
              </p>
              <button
                type="button"
                onClick={() => alert("Application routed through University Handshake Career Portal.")}
                className="w-full py-2.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-colors text-center shadow-xs cursor-pointer"
              >
                Apply via NSU Handshake
              </button>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-display font-bold text-slate-900 text-sm">Junior Cloud Security Analyst</span>
                <span className="text-emerald-600 font-bold">91% Skill Match</span>
              </div>
              <div className="text-slate-500">Liberty Mutual &bull; Boston, MA</div>
              <p className="text-slate-600 text-[11px]">
                Hybrid co-op role for computer science &amp; cybersecurity students.
              </p>
              <button
                type="button"
                onClick={() => alert("Application routed through University Handshake Career Portal.")}
                className="w-full py-2.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-semibold transition-colors text-center shadow-xs cursor-pointer"
              >
                Apply via NSU Handshake
              </button>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
