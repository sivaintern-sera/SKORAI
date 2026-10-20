"use client";

import React, { useState } from "react";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { SAMPLE_COURSE_SECTIONS } from "@/lib/demo-data";
import { StudentDataTable } from "@/components/dashboard/StudentDataTable";
import {
  BookOpen,
  Users,
  CheckCircle,
  AlertTriangle,
  Lightbulb,
  Clock,
  Send,
  Calendar,
  Award,
} from "lucide-react";

export default function FacultyDashboardPage() {
  const [activeCourse, setActiveCourse] = useState("CS 101");
  const facultySections = SAMPLE_COURSE_SECTIONS.filter(
    (s) => s.instructorName === "Dr. Emily Johnson"
  );

  return (
    <DashboardLayout
      activeRole="faculty"
      title="Faculty Course &amp; Teaching Dashboard"
      subtitle="Dr. Emily Johnson &bull; Department of Computer Science &bull; Assigned course sections and early alert interventions"
    >
      {/* Quick Stats Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between text-slate-500 text-xs font-medium">
            <span>Assigned Sections</span>
            <div className="w-8 h-8 rounded-lg bg-purple-50 flex items-center justify-center text-purple-700">
              <BookOpen className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-display font-bold text-slate-900 mt-2">3 Sections</div>
          <div className="text-xs text-purple-700 font-semibold mt-1">115 Total Enrolled</div>
          <div className="text-xs text-slate-500 mt-1">CS 101, CS 220, CS 490</div>
        </div>

        <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between text-slate-500 text-xs font-medium">
            <span>Average Course GPA</span>
            <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600">
              <Award className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-display font-bold text-emerald-600 mt-2">3.24</div>
          <div className="text-xs text-emerald-600 font-semibold mt-1">+0.15 vs Dept Baseline</div>
          <div className="text-xs text-slate-500 mt-1">Mean Attendance: 92%</div>
        </div>

        <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between text-slate-500 text-xs font-medium">
            <span>Early Academic Alerts</span>
            <div className="w-8 h-8 rounded-lg bg-amber-50 flex items-center justify-center text-amber-600">
              <AlertTriangle className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-display font-bold text-amber-600 mt-2">6 Students</div>
          <div className="text-xs text-amber-600 font-semibold mt-1">LMS Inactivity / Quiz 2</div>
          <div className="text-xs text-slate-500 mt-1">Advisor notified automatically</div>
        </div>

        <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between text-slate-500 text-xs font-medium">
            <span>Office Hours &amp; Tutoring</span>
            <div className="w-8 h-8 rounded-lg bg-purple-50 flex items-center justify-center text-purple-600">
              <Calendar className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-display font-bold text-slate-900 mt-2">MWF 2-4</div>
          <div className="text-xs text-purple-700 font-semibold mt-1">Hall 312 &amp; Zoom</div>
          <div className="text-xs text-slate-500 mt-1">2 Teaching Assistants Active</div>
        </div>
      </div>

      {/* Assigned Course Tabs & Active Roster */}
      <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
          <div>
            <h4 className="text-base font-display font-bold text-slate-900 tracking-tight">
              Assigned Fall 2026 Course Sections
            </h4>
            <p className="text-xs text-slate-500">
              Select a section to inspect roster attendance, grade distribution, and early alert recommendations
            </p>
          </div>

          {/* Course Selector Buttons */}
          <div className="flex items-center gap-2">
            {facultySections.map((sec) => (
              <button
                key={sec.id}
                type="button"
                onClick={() => setActiveCourse(sec.courseCode)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  activeCourse === sec.courseCode
                    ? "bg-purple-700 text-white shadow-sm"
                    : "bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200"
                }`}
              >
                {sec.courseCode} ({sec.enrolledStudents} students)
              </button>
            ))}
          </div>
        </div>

        {/* Selected Course Section Summary Card */}
        {facultySections
          .filter((s) => s.courseCode === activeCourse)
          .map((sec) => (
            <div key={sec.id} className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4 rounded-xl bg-slate-50/80 border border-slate-200/80">
              <div>
                <span className="text-[10px] text-slate-500 uppercase font-semibold">Course Title</span>
                <div className="text-sm font-display font-bold text-slate-900">{sec.title}</div>
                <div className="text-xs text-purple-700 font-medium">{sec.schedule}</div>
              </div>
              <div>
                <span className="text-[10px] text-slate-500 uppercase font-semibold">Enrollment &amp; Attendance</span>
                <div className="text-sm font-bold text-slate-900">{sec.enrolledStudents} Enrolled / {sec.capacity} Seats</div>
                <div className="text-xs text-emerald-600 font-semibold">{sec.attendanceAvg}% Avg Attendance</div>
              </div>
              <div>
                <span className="text-[10px] text-slate-500 uppercase font-semibold">Section Avg Grade</span>
                <div className="text-sm font-bold text-emerald-600">{sec.averageGrade} (3.30 GPA equivalent)</div>
                <div className="text-xs text-slate-500">Midterm Exam in 2 weeks</div>
              </div>
              <div className="flex flex-col justify-center">
                <button
                  type="button"
                  onClick={() => alert(`Simulated Early Alert Batch Sent: Academic advisor notified for flagged students in ${sec.courseCode}.`)}
                  className="px-4 py-2 rounded-full bg-purple-700 hover:bg-purple-500 text-white text-xs font-semibold transition-colors flex items-center justify-center gap-1.5 shadow-sm"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Issue Early Alert Batch</span>
                </button>
              </div>
            </div>
          ))}

        {/* AI Teaching Insights Card */}
        <div className="p-4 rounded-xl bg-purple-50/70 border border-purple-200/80 space-y-2">
          <div className="flex items-center gap-2">
            <Lightbulb className="w-4 h-4 text-purple-700" />
            <h5 className="text-xs font-bold text-purple-950 uppercase tracking-wider">
              AI Teaching &amp; Student Engagement Insight (Simulated)
            </h5>
          </div>
          <p className="text-xs text-slate-700 leading-relaxed">
            In <strong>{activeCourse}</strong>, homework 3 submissions dropped by 14% among sophomore non-majors. Predictive retention models suggest offering an optional lab review session on recursion concepts before Friday&apos;s quiz to prevent drop-off.
          </p>
        </div>
      </div>

      {/* Class Roster Table */}
      <StudentDataTable filterDepartment="Computer Science" />
    </DashboardLayout>
  );
}

