"use client";

import React, { useState } from "react";
import {
  Lightbulb,
  AlertTriangle,
  CheckCircle2,
  ChevronRight,
  Info,
  ShieldCheck,
  TrendingDown,
  ArrowUpRight,
  HelpCircle,
  X,
} from "lucide-react";
import { AIInsight } from "@/types";
import { SIMULATED_AI_INSIGHTS } from "@/lib/demo-data";

interface AIInsightsListProps {
  filterCategory?: string;
  limit?: number;
}

export function AIInsightsList({ filterCategory, limit }: AIInsightsListProps) {
  const [selectedInsight, setSelectedInsight] = useState<AIInsight | null>(null);
  const [actionTriggeredId, setActionTriggeredId] = useState<string | null>(null);

  const insights = SIMULATED_AI_INSIGHTS.filter((ins) =>
    filterCategory ? ins.category === filterCategory : true
  ).slice(0, limit || 10);

  const handleTriggerAction = (id: string) => {
    setActionTriggeredId(id);
    setTimeout(() => {
      alert("Simulated Action Initiated: Automated notification and intervention workflow triggered for assigned institutional teams.");
      setActionTriggeredId(null);
    }, 500);
  };

  return (
    <div className="space-y-4 font-sans text-slate-900">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-700 ring-1 ring-blue-700/10 flex items-center justify-center">
            <Lightbulb className="w-4 h-4" />
          </div>
          <div>
            <h4 className="font-display text-sm font-bold text-slate-900 tracking-tight">
              SKORAI Insights &amp; Early Warnings
            </h4>
            <div className="text-[11px] text-slate-500">
              Machine learning anomaly detection across retention, budget, and academic outcomes
            </div>
          </div>
        </div>

        <span className="text-[10px] font-semibold text-blue-700 bg-blue-50 ring-1 ring-inset ring-blue-700/10 px-2.5 py-0.5 rounded-full">
          Simulated AI Engine
        </span>
      </div>

      <div className="grid grid-cols-1 gap-3">
        {insights.map((insight) => {
          const isCritical = insight.riskLevel === "Critical";
          const isHigh = insight.riskLevel === "High";
          const isMedium = insight.riskLevel === "Medium";

          return (
            <div
              key={insight.id}
              className="bg-white hover:bg-slate-50/50 border border-slate-200/80 rounded-2xl p-5 transition-all duration-150 shadow-xs"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                <div className="space-y-1.5 flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span
                      className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider border ${
                        isCritical
                          ? "bg-rose-50 text-rose-700 border-rose-200"
                          : isHigh
                          ? "bg-amber-50 text-amber-700 border-amber-200"
                          : isMedium
                          ? "bg-yellow-50 text-yellow-800 border-yellow-200"
                          : "bg-blue-50 text-blue-700 border-blue-200"
                      }`}
                    >
                      {insight.riskLevel} Risk
                    </span>
                    <span className="text-xs font-semibold text-blue-600">
                      {insight.category}
                    </span>
                    <span className="text-[11px] text-slate-400">
                      &bull; {insight.dateGenerated}
                    </span>
                  </div>

                  <h5 className="font-display text-sm font-bold text-slate-900">
                    {insight.title}
                  </h5>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {insight.description}
                  </p>

                  <div className="flex items-center gap-4 pt-1 text-xs">
                    <div className="text-slate-500">
                      <strong className="text-slate-700">Impact:</strong> {insight.impactMetric}
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex sm:flex-col items-center sm:items-end gap-2 shrink-0">
                  <button
                    type="button"
                    onClick={() => setSelectedInsight(insight)}
                    className="px-3 py-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-xs font-medium text-slate-700 transition-colors flex items-center gap-1 cursor-pointer"
                  >
                    <Info className="w-3.5 h-3.5" />
                    <span>Explain AI</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleTriggerAction(insight.id)}
                    disabled={actionTriggeredId === insight.id}
                    className="px-3.5 py-1.5 rounded-full bg-blue-600 hover:bg-blue-500 active:bg-blue-800 text-xs font-semibold text-white transition-colors flex items-center gap-1 shadow-xs cursor-pointer"
                  >
                    <span>{actionTriggeredId === insight.id ? "Triggering..." : "Act on Insight"}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Explainability Modal */}
      {selectedInsight && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs z-50 flex items-center justify-center p-4">
          <div className="bg-white border border-slate-200 w-full max-w-xl rounded-3xl p-6 shadow-2xl space-y-4 text-slate-900">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-blue-600" />
                <h3 className="font-display font-bold text-slate-900 text-base">
                  Model Explainability &amp; Verification
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedInsight(null)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3 text-xs">
              <div>
                <span className="text-slate-500 uppercase tracking-wider font-semibold">Insight Title:</span>
                <p className="font-display text-sm font-bold text-slate-900 mt-0.5">{selectedInsight.title}</p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                <span className="text-blue-700 font-semibold">Model Explanation &amp; Rationale:</span>
                <p className="text-slate-600 leading-relaxed">{selectedInsight.explanation}</p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                <span className="text-blue-700 font-semibold">Supporting Data Signals:</span>
                <p className="text-slate-600 leading-relaxed">{selectedInsight.supportingData}</p>
              </div>

              <div className="p-3.5 rounded-xl bg-emerald-50/70 border border-emerald-200 text-emerald-900 space-y-1">
                <span className="text-emerald-800 font-semibold">Suggested Institutional Intervention:</span>
                <p className="text-emerald-700 leading-relaxed">{selectedInsight.suggestedAction}</p>
              </div>

              <div className="pt-2 text-[11px] text-slate-500 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Deterministic synthetic model adhering to FERPA privacy principles.</span>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 flex justify-end">
              <button
                type="button"
                onClick={() => setSelectedInsight(null)}
                className="px-4 py-2 rounded-full bg-slate-900 text-xs text-white hover:bg-slate-800 font-semibold shadow-xs cursor-pointer"
              >
                Close Explanation
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
