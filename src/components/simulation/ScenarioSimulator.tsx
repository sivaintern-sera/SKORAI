"use client";

import React, { useState, useMemo } from "react";
import {
  Sliders,
  TrendingDown,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  HelpCircle,
  RefreshCw,
  Lightbulb,
  DollarSign,
  Users,
  ShieldCheck,
  ChevronRight,
} from "lucide-react";
import { simulateScenario } from "@/lib/demo-data";
import { formatCurrency, formatNumber } from "@/lib/utils";

export function ScenarioSimulator() {
  const [enrollmentChangePct, setEnrollmentChangePct] = useState<number>(-5);
  const [retentionChangePct, setRetentionChangePct] = useState<number>(2);
  const [stateAppropriationChangePct, setStateAppropriationChangePct] = useState<number>(0);
  const [facultyStaffingChangePct, setFacultyStaffingChangePct] = useState<number>(0);
  const [financialAidBudgetChangePct, setFinancialAidBudgetChangePct] = useState<number>(5);

  const presets = [
    {
      name: "Enrollment Drop (-10%)",
      desc: "Simulate demographic cliff impact",
      params: { enrollment: -10, retention: 0, state: 0, faculty: -3, aid: 0 },
    },
    {
      name: "Retention Surge (+5 pts)",
      desc: "High-yield advisor intervention model",
      params: { enrollment: 0, retention: 5, state: 2, faculty: 0, aid: 10 },
    },
    {
      name: "State Funding Cut (-5%)",
      desc: "Legislative budget reduction scenario",
      params: { enrollment: -2, retention: -1, state: -5, faculty: -4, aid: -5 },
    },
    {
      name: "Strategic Growth (+6%)",
      desc: "Expanded online & STEM enrollment",
      params: { enrollment: 6, retention: 3, state: 3, faculty: 5, aid: 8 },
    },
  ];

  const applyPreset = (preset: (typeof presets)[0]) => {
    setEnrollmentChangePct(preset.params.enrollment);
    setRetentionChangePct(preset.params.retention);
    setStateAppropriationChangePct(preset.params.state);
    setFacultyStaffingChangePct(preset.params.faculty);
    setFinancialAidBudgetChangePct(preset.params.aid);
  };

  const resetToBaseline = () => {
    setEnrollmentChangePct(0);
    setRetentionChangePct(0);
    setStateAppropriationChangePct(0);
    setFacultyStaffingChangePct(0);
    setFinancialAidBudgetChangePct(0);
  };

  const result = useMemo(() => {
    return simulateScenario({
      enrollmentChangePct,
      retentionChangePct,
      stateAppropriationChangePct,
      facultyStaffingChangePct,
      financialAidBudgetChangePct,
    });
  }, [
    enrollmentChangePct,
    retentionChangePct,
    stateAppropriationChangePct,
    facultyStaffingChangePct,
    financialAidBudgetChangePct,
  ]);

  return (
    <div className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6 text-slate-900 font-sans">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg bg-blue-50 text-blue-700 ring-1 ring-blue-700/10 flex items-center justify-center font-bold text-xs">
              <Sliders className="w-4 h-4" />
            </span>
            <h3 className="font-display text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
              Institutional Decision Intelligence Simulator
            </h3>
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-blue-50 text-blue-700 ring-1 ring-inset ring-blue-700/10">
              Decision Intelligence Tier
            </span>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Simulate institutional budget, enrollment volume, retention rates, and resource implications in real time.
          </p>
        </div>

        <button
          type="button"
          onClick={resetToBaseline}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-xs font-semibold text-slate-700 hover:text-slate-900 transition-colors self-start sm:self-auto cursor-pointer"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          <span>Reset to Baseline</span>
        </button>
      </div>

      {/* Preset Scenarios Buttons */}
      <div>
        <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2 font-display">
          Pre-Configured Institutional Scenarios
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
          {presets.map((preset) => (
            <button
              key={preset.name}
              type="button"
              onClick={() => applyPreset(preset)}
              className="text-left p-3.5 rounded-xl bg-slate-50 hover:bg-blue-50/60 border border-slate-200/80 hover:border-blue-400 transition-all group cursor-pointer shadow-2xs"
            >
              <div className="text-xs font-bold text-slate-900 group-hover:text-blue-600 transition-colors flex items-center justify-between font-display">
                <span>{preset.name}</span>
                <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
              </div>
              <div className="text-[11px] text-slate-500 mt-0.5 line-clamp-1">
                {preset.desc}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Interactive Sliders Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 rounded-2xl bg-slate-50 border border-slate-200/80">
        {/* Slider 1: Enrollment Change */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs">
            <span className="font-semibold text-slate-800">Total Enrollment Shock</span>
            <span
              className={`font-mono font-bold ${
                enrollmentChangePct > 0
                  ? "text-emerald-600"
                  : enrollmentChangePct < 0
                  ? "text-rose-600"
                  : "text-slate-600"
              }`}
            >
              {enrollmentChangePct > 0 ? "+" : ""}
              {enrollmentChangePct}%
            </span>
          </div>
          <input
            type="range"
            min="-20"
            max="15"
            step="1"
            value={enrollmentChangePct}
            onChange={(e) => setEnrollmentChangePct(Number(e.target.value))}
            className="w-full accent-blue-600 bg-slate-200 h-2 rounded-lg cursor-pointer"
          />
          <div className="flex justify-between text-[10px] text-slate-400">
            <span>-20% (Severe contraction)</span>
            <span>+15% (Aggressive growth)</span>
          </div>
        </div>

        {/* Slider 2: Retention Change */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs">
            <span className="font-semibold text-slate-800">1st-Year Retention Shift</span>
            <span
              className={`font-mono font-bold ${
                retentionChangePct > 0
                  ? "text-emerald-600"
                  : retentionChangePct < 0
                  ? "text-rose-600"
                  : "text-slate-600"
              }`}
            >
              {retentionChangePct > 0 ? "+" : ""}
              {retentionChangePct} pts
            </span>
          </div>
          <input
            type="range"
            min="-10"
            max="10"
            step="0.5"
            value={retentionChangePct}
            onChange={(e) => setRetentionChangePct(Number(e.target.value))}
            className="w-full accent-blue-600 bg-slate-200 h-2 rounded-lg cursor-pointer"
          />
          <div className="flex justify-between text-[10px] text-slate-400">
            <span>-10 pts</span>
            <span>+10 pts</span>
          </div>
        </div>

        {/* Slider 3: State Appropriations */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs">
            <span className="font-semibold text-slate-800">State Appropriations</span>
            <span
              className={`font-mono font-bold ${
                stateAppropriationChangePct > 0
                  ? "text-emerald-600"
                  : stateAppropriationChangePct < 0
                  ? "text-rose-600"
                  : "text-slate-600"
              }`}
            >
              {stateAppropriationChangePct > 0 ? "+" : ""}
              {stateAppropriationChangePct}%
            </span>
          </div>
          <input
            type="range"
            min="-15"
            max="10"
            step="1"
            value={stateAppropriationChangePct}
            onChange={(e) => setStateAppropriationChangePct(Number(e.target.value))}
            className="w-full accent-blue-600 bg-slate-200 h-2 rounded-lg cursor-pointer"
          />
          <div className="flex justify-between text-[10px] text-slate-400">
            <span>-15% (Budget cut)</span>
            <span>+10% (Expansion)</span>
          </div>
        </div>

        {/* Slider 4: Faculty Staffing Change */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs">
            <span className="font-semibold text-slate-800">Faculty Lines (FTE)</span>
            <span
              className={`font-mono font-bold ${
                facultyStaffingChangePct > 0
                  ? "text-blue-600"
                  : facultyStaffingChangePct < 0
                  ? "text-amber-600"
                  : "text-slate-600"
              }`}
            >
              {facultyStaffingChangePct > 0 ? "+" : ""}
              {facultyStaffingChangePct}%
            </span>
          </div>
          <input
            type="range"
            min="-10"
            max="10"
            step="1"
            value={facultyStaffingChangePct}
            onChange={(e) => setFacultyStaffingChangePct(Number(e.target.value))}
            className="w-full accent-blue-600 bg-slate-200 h-2 rounded-lg cursor-pointer"
          />
          <div className="flex justify-between text-[10px] text-slate-400">
            <span>-10% (Attrition/freeze)</span>
            <span>+10% (New faculty)</span>
          </div>
        </div>

        {/* Slider 5: Financial Aid Budget */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs">
            <span className="font-semibold text-slate-800">Institutional Aid Budget</span>
            <span
              className={`font-mono font-bold ${
                financialAidBudgetChangePct > 0
                  ? "text-emerald-600"
                  : financialAidBudgetChangePct < 0
                  ? "text-rose-600"
                  : "text-slate-600"
              }`}
            >
              {financialAidBudgetChangePct > 0 ? "+" : ""}
              {financialAidBudgetChangePct}%
            </span>
          </div>
          <input
            type="range"
            min="-15"
            max="20"
            step="1"
            value={financialAidBudgetChangePct}
            onChange={(e) => setFinancialAidBudgetChangePct(Number(e.target.value))}
            className="w-full accent-blue-600 bg-slate-200 h-2 rounded-lg cursor-pointer"
          />
          <div className="flex justify-between text-[10px] text-slate-400">
            <span>-15% (Restricted aid)</span>
            <span>+20% (Scholarship boost)</span>
          </div>
        </div>

        {/* Risk Assessment Indicator Pill */}
        <div className="flex flex-col justify-center items-center p-4 rounded-xl bg-white border border-slate-200 text-center shadow-xs">
          <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-1 font-display">
            Simulated Risk Status
          </div>
          <div
            className={`text-sm font-bold px-3.5 py-1 rounded-full border ${
              result.institutionalRiskRating === "Severe Risk"
                ? "bg-rose-50 text-rose-700 border-rose-200"
                : result.institutionalRiskRating === "Moderate Risk"
                ? "bg-amber-50 text-amber-700 border-amber-200"
                : result.institutionalRiskRating === "Favorable Opportunity"
                ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                : "bg-blue-50 text-blue-700 border-blue-200"
            }`}
          >
            {result.institutionalRiskRating}
          </div>
        </div>
      </div>

      {/* Simulated Outcomes Metrics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Metric 1: Projected Revenue Impact */}
        <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200/80">
          <div className="flex items-center justify-between text-slate-500 text-xs mb-1">
            <span>Est. Gross Revenue Impact</span>
            <DollarSign className="w-4 h-4 text-slate-400" />
          </div>
          <div
            className={`font-display text-2xl font-bold ${
              result.grossRevenueDifference >= 0
                ? "text-emerald-600"
                : "text-rose-600"
            }`}
          >
            {result.grossRevenueDifference >= 0 ? "+" : ""}
            {formatCurrency(result.grossRevenueDifference)}
          </div>
          <div className="text-[11px] text-slate-500 mt-1">
            Projected: {formatCurrency(result.projectedGrossRevenue)}
          </div>
        </div>

        {/* Metric 2: Projected Student Enrollment */}
        <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200/80">
          <div className="flex items-center justify-between text-slate-500 text-xs mb-1">
            <span>Projected Headcount</span>
            <Users className="w-4 h-4 text-slate-400" />
          </div>
          <div className="font-display text-2xl font-bold text-slate-900">
            {formatNumber(result.projectedEnrollment)}
          </div>
          <div
            className={`text-[11px] mt-1 font-semibold ${
              result.enrollmentDifference >= 0
                ? "text-emerald-600"
                : "text-rose-600"
            }`}
          >
            {result.enrollmentDifference >= 0 ? "+" : ""}
            {formatNumber(result.enrollmentDifference)} students vs baseline
          </div>
        </div>

        {/* Metric 3: Projected Retention */}
        <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200/80">
          <div className="flex items-center justify-between text-slate-500 text-xs mb-1">
            <span>Projected 1st-Yr Retention</span>
            <TrendingUp className="w-4 h-4 text-blue-600" />
          </div>
          <div className="font-display text-2xl font-bold text-slate-900">
            {result.retentionRateProjected}%
          </div>
          <div className="text-[11px] text-slate-500 mt-1">
            Baseline: 84.2% &bull; Net {retentionChangePct >= 0 ? "+" : ""}{retentionChangePct} pts
          </div>
        </div>

        {/* Metric 4: Faculty FTE Impact */}
        <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200/80">
          <div className="flex items-center justify-between text-slate-500 text-xs mb-1">
            <span>Instructional Staffing Delta</span>
            <Users className="w-4 h-4 text-blue-600" />
          </div>
          <div className="font-display text-2xl font-bold text-slate-900">
            {result.facultyFteImpact >= 0 ? "+" : ""}
            {result.facultyFteImpact} FTE
          </div>
          <div className="text-[11px] text-slate-500 mt-1">
            Based on 500 total faculty baseline
          </div>
        </div>
      </div>

      {/* Narrative Synthesis & Resource Recommendations */}
      <div className="bg-blue-50/70 border border-blue-200/70 rounded-2xl p-6 space-y-3">
        <div className="flex items-center gap-2">
          <Lightbulb className="w-4 h-4 text-blue-600" />
          <h4 className="font-display text-xs font-bold text-blue-900 uppercase tracking-wider">
            Simulated Executive Synthesis
          </h4>
          <span className="text-[10px] font-semibold text-blue-700 bg-white px-2.5 py-0.5 rounded-full border border-blue-200">
            Simulated Forecast — Not Certified Financial Advice
          </span>
        </div>
        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
          {result.summaryBrief}
        </p>

        <div className="pt-3 border-t border-blue-200/60">
          <div className="text-xs font-semibold text-blue-900 mb-2 font-display">
            AI Recommended Strategic Actions:
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2.5 text-xs text-slate-700">
            {result.resourceRecommendations.map((rec, i) => (
              <li key={i} className="flex items-start gap-2 bg-white p-3 rounded-xl border border-blue-200/70 shadow-2xs">
                <CheckCircle className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <span>{rec}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
