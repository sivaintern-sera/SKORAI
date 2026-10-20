"use client";

import React, { useState, useMemo } from "react";
import {
  Search,
  Filter,
  ChevronLeft,
  ChevronRight,
  ArrowUpDown,
  AlertCircle,
  CheckCircle,
  ExternalLink,
  Download,
} from "lucide-react";
import { DETAILED_STUDENTS } from "@/lib/demo-data";
import { StudentRecord } from "@/types";

interface StudentDataTableProps {
  maxRecords?: number;
  filterDepartment?: string;
  filterRiskOnly?: boolean;
}

export function StudentDataTable({
  maxRecords,
  filterDepartment,
  filterRiskOnly,
}: StudentDataTableProps) {
  const [search, setSearch] = useState("");
  const [selectedCollege, setSelectedCollege] = useState("All");
  const [selectedRisk, setSelectedRisk] = useState(filterRiskOnly ? "High" : "All");
  const [sortField, setSortField] = useState<keyof StudentRecord>("retentionRiskScore");
  const [sortAsc, setSortAsc] = useState(false);
  const [page, setPage] = useState(1);
  const pageSize = 10;

  const filteredData = useMemo(() => {
    return DETAILED_STUDENTS.filter((stu) => {
      if (filterDepartment && stu.department !== filterDepartment) return false;
      if (selectedCollege !== "All" && !stu.college.includes(selectedCollege)) return false;
      if (selectedRisk === "Critical" && stu.retentionRiskLevel !== "Critical") return false;
      if (selectedRisk === "High" && stu.retentionRiskLevel !== "High" && stu.retentionRiskLevel !== "Critical") return false;

      const q = search.toLowerCase();
      return (
        stu.firstName.toLowerCase().includes(q) ||
        stu.lastName.toLowerCase().includes(q) ||
        stu.studentId.toLowerCase().includes(q) ||
        stu.department.toLowerCase().includes(q) ||
        stu.degreeProgram.toLowerCase().includes(q)
      );
    }).sort((a, b) => {
      const valA = a[sortField];
      const valB = b[sortField];
      if (typeof valA === "number" && typeof valB === "number") {
        return sortAsc ? valA - valB : valB - valA;
      }
      return sortAsc
        ? String(valA).localeCompare(String(valB))
        : String(valB).localeCompare(String(valA));
    });
  }, [search, selectedCollege, selectedRisk, sortField, sortAsc, filterDepartment]);

  const totalPages = Math.ceil(filteredData.length / pageSize) || 1;
  const paginatedData = filteredData.slice((page - 1) * pageSize, page * pageSize);

  const handleSort = (field: keyof StudentRecord) => {
    if (sortField === field) {
      setSortAsc(!sortAsc);
    } else {
      setSortField(field);
      setSortAsc(false);
    }
  };

  return (
    <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm space-y-4 font-sans text-slate-900">
      {/* Header & Controls */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h4 className="font-display text-sm font-bold text-slate-900 tracking-tight">
            Institutional Student Success &amp; Risk Roster
          </h4>
          <p className="text-[11px] text-slate-500">
            Showing {filteredData.length} records out of 500 detailed sample students (representative sample)
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Search */}
          <div className="relative">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setPage(1);
              }}
              placeholder="Search students..."
              className="pl-8 pr-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-1 focus:ring-purple-700 shadow-2xs"
            />
          </div>

          {/* Risk Level Filter */}
          <select
            value={selectedRisk}
            onChange={(e) => {
              setSelectedRisk(e.target.value);
              setPage(1);
            }}
            className="bg-slate-50 border border-slate-200 text-xs text-slate-700 rounded-xl px-3 py-1.5 focus:bg-white focus:outline-none focus:ring-1 focus:ring-purple-700 shadow-2xs"
          >
            <option value="All">All Risk Levels</option>
            <option value="Critical">Critical Risk Only</option>
            <option value="High">High &amp; Critical Risk</option>
          </select>
        </div>
      </div>

      {/* Responsive Table */}
      <div className="overflow-x-auto rounded-xl border border-slate-200">
        <table className="w-full text-left text-xs text-slate-700">
          <thead className="bg-slate-50 text-slate-500 font-semibold uppercase tracking-wider text-[10px] border-b border-slate-200 font-display">
            <tr>
              <th
                className="p-3 cursor-pointer hover:text-slate-900"
                onClick={() => handleSort("studentId")}
              >
                <div className="flex items-center gap-1">
                  <span>Student ID</span>
                  <ArrowUpDown className="w-3 h-3" />
                </div>
              </th>
              <th
                className="p-3 cursor-pointer hover:text-slate-900"
                onClick={() => handleSort("lastName")}
              >
                <div className="flex items-center gap-1">
                  <span>Student Name</span>
                  <ArrowUpDown className="w-3 h-3" />
                </div>
              </th>
              <th className="p-3">Program &amp; Department</th>
              <th
                className="p-3 cursor-pointer hover:text-slate-900"
                onClick={() => handleSort("gpa")}
              >
                <div className="flex items-center gap-1">
                  <span>GPA</span>
                  <ArrowUpDown className="w-3 h-3" />
                </div>
              </th>
              <th
                className="p-3 cursor-pointer hover:text-slate-900"
                onClick={() => handleSort("creditHoursCompleted")}
              >
                <div className="flex items-center gap-1">
                  <span>Credits</span>
                  <ArrowUpDown className="w-3 h-3" />
                </div>
              </th>
              <th
                className="p-3 cursor-pointer hover:text-slate-900"
                onClick={() => handleSort("retentionRiskScore")}
              >
                <div className="flex items-center gap-1">
                  <span>Risk Score</span>
                  <ArrowUpDown className="w-3 h-3" />
                </div>
              </th>
              <th className="p-3">Aid Status</th>
              <th className="p-3">Academic Standing</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 bg-white">
            {paginatedData.map((stu) => {
              const isCrit = stu.retentionRiskLevel === "Critical";
              const isHigh = stu.retentionRiskLevel === "High";

              return (
                <tr key={stu.id} className="hover:bg-slate-50/80 transition-colors">
                  <td className="p-3 font-mono font-semibold text-purple-700">
                    {stu.studentId}
                  </td>
                  <td className="p-3 font-medium text-slate-900">
                    <div>{stu.firstName} {stu.lastName}</div>
                    <div className="text-[10px] text-slate-500 font-mono">{stu.email}</div>
                  </td>
                  <td className="p-3">
                    <div className="text-slate-800">{stu.degreeProgram}</div>
                    <div className="text-[10px] text-slate-500">{stu.department}</div>
                  </td>
                  <td className="p-3 font-mono font-bold text-slate-900">
                    {stu.gpa.toFixed(2)}
                  </td>
                  <td className="p-3 font-mono text-slate-600">
                    {stu.creditHoursCompleted} hrs
                  </td>
                  <td className="p-3">
                    <div className="flex items-center gap-2">
                      <span
                        className={`inline-block w-2 h-2 rounded-full ${
                          isCrit
                            ? "bg-rose-500 animate-pulse"
                            : isHigh
                            ? "bg-amber-500"
                            : "bg-emerald-500"
                        }`}
                      />
                      <span
                        className={`font-mono font-bold text-[11px] ${
                          isCrit
                            ? "text-rose-600"
                            : isHigh
                            ? "text-amber-600"
                            : "text-emerald-600"
                        }`}
                      >
                        {stu.retentionRiskScore}/100 ({stu.retentionRiskLevel})
                      </span>
                    </div>
                  </td>
                  <td className="p-3">
                    <span
                      className={`px-2.5 py-0.5 rounded-full text-[10px] font-semibold border ${
                        stu.financialAidStatus === "Awarded"
                          ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                          : stu.financialAidStatus === "FAFSA Missing"
                          ? "bg-rose-50 text-rose-700 border-rose-200"
                          : "bg-amber-50 text-amber-700 border-amber-200"
                      }`}
                    >
                      {stu.financialAidStatus}
                    </span>
                  </td>
                  <td className="p-3 text-[11px] text-slate-600">
                    {stu.academicStanding}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between text-xs text-slate-500 pt-2">
        <div>
          Showing page <strong className="text-slate-900">{page}</strong> of{" "}
          <strong className="text-slate-900">{totalPages}</strong>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            disabled={page === 1}
            onClick={() => setPage(page - 1)}
            className="p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 disabled:opacity-40 text-slate-700 cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            type="button"
            disabled={page === totalPages}
            onClick={() => setPage(page + 1)}
            className="p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 disabled:opacity-40 text-slate-700 cursor-pointer"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

