"use client";

import React, { useState } from "react";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { AIInsightsList } from "@/components/dashboard/AIInsightsList";
import {
  DollarSign,
  ShieldAlert,
  Server,
  Lock,
  TrendingUp,
  Cpu,
  Database,
  Activity,
  CheckCircle,
} from "lucide-react";

export default function ExecutiveDashboardPage() {
  const [activeTab, setActiveTab] = useState<"cfo" | "cio" | "ciso">("cfo");

  return (
    <DashboardLayout
      activeRole="executive"
      title="CFO / CIO / CISO Executive Operations Portal"
      subtitle="David Miller &bull; Role-authorized financial intelligence, technology infrastructure, and cybersecurity threat posture"
    >
      {/* Role Selection View Tabs */}
      <div className="flex flex-wrap items-center gap-2 border-b border-slate-200 pb-4">
        <button
          type="button"
          onClick={() => setActiveTab("cfo")}
          className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold transition-all ${
            activeTab === "cfo"
              ? "bg-blue-600 text-white shadow-sm"
              : "bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200"
          }`}
        >
          <DollarSign className="w-4 h-4" />
          <span>CFO: Financial Intelligence</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("cio")}
          className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold transition-all ${
            activeTab === "cio"
              ? "bg-blue-600 text-white shadow-sm"
              : "bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200"
          }`}
        >
          <Server className="w-4 h-4" />
          <span>CIO: Technology Infrastructure</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("ciso")}
          className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold transition-all ${
            activeTab === "ciso"
              ? "bg-blue-600 text-white shadow-sm"
              : "bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200"
          }`}
        >
          <ShieldAlert className="w-4 h-4" />
          <span>CISO: Cybersecurity &amp; AI Risk</span>
        </button>
      </div>

      {/* CFO Tab Content */}
      {activeTab === "cfo" && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-xs text-slate-500 font-medium">Annual Operating Budget</div>
              <div className="text-2xl font-display font-bold text-slate-900 mt-2">$174.5M</div>
              <div className="text-xs text-emerald-600 font-semibold mt-1">+$8.4M Operating Surplus</div>
            </div>
            <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-xs text-slate-500 font-medium">Tuition &amp; Fees Inflow</div>
              <div className="text-2xl font-display font-bold text-blue-600 mt-2">$104.2M</div>
              <div className="text-xs text-blue-600 font-semibold mt-1">60% Total Revenue Share</div>
            </div>
            <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-xs text-slate-500 font-medium">Endowment Market Value</div>
              <div className="text-2xl font-display font-bold text-purple-600 mt-2">$184.2M</div>
              <div className="text-xs text-emerald-600 font-semibold mt-1">+7.2% Annual Return</div>
            </div>
            <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-xs text-slate-500 font-medium">Days Cash on Hand</div>
              <div className="text-2xl font-display font-bold text-emerald-600 mt-2">182 Days</div>
              <div className="text-xs text-emerald-600 font-semibold mt-1">Liquidity Benchmark Met</div>
            </div>
          </div>
        </div>
      )}

      {/* CIO Tab Content */}
      {activeTab === "cio" && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-xs text-slate-500 font-medium">Enterprise Systems Uptime</div>
              <div className="text-2xl font-display font-bold text-emerald-600 mt-2">99.94%</div>
              <div className="text-xs text-emerald-600 font-semibold mt-1">Canvas, Banner, SIS, Email</div>
            </div>
            <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-xs text-slate-500 font-medium">Cloud Infrastructure Cost</div>
              <div className="text-2xl font-display font-bold text-slate-900 mt-2">$42,500/mo</div>
              <div className="text-xs text-blue-600 font-semibold mt-1">-8% Cost Optimization YoY</div>
            </div>
            <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-xs text-slate-500 font-medium">API Integration Health</div>
              <div className="text-2xl font-display font-bold text-slate-900 mt-2">100%</div>
              <div className="text-xs text-emerald-600 font-semibold mt-1">Zero Pipeline Failures</div>
            </div>
            <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-xs text-slate-500 font-medium">IT Helpdesk Mean SLA</div>
              <div className="text-2xl font-display font-bold text-blue-600 mt-2">2.4 hrs</div>
              <div className="text-xs text-emerald-600 font-semibold mt-1">94% First-Touch Resolution</div>
            </div>
          </div>
        </div>
      )}

      {/* CISO Tab Content */}
      {activeTab === "ciso" && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-xs text-slate-500 font-medium">Institutional Cyber Risk Score</div>
              <div className="text-2xl font-display font-bold text-emerald-600 mt-2">18 / 100</div>
              <div className="text-xs text-emerald-600 font-semibold mt-1">Low Threat Profile</div>
            </div>
            <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-xs text-slate-500 font-medium">MFA Enforced Users</div>
              <div className="text-2xl font-display font-bold text-slate-900 mt-2">100%</div>
              <div className="text-xs text-emerald-600 font-semibold mt-1">Faculty, Staff, Students</div>
            </div>
            <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-xs text-slate-500 font-medium">Blocked Security Incidents</div>
              <div className="text-2xl font-display font-bold text-purple-600 mt-2">4,820</div>
              <div className="text-xs text-purple-600 font-semibold mt-1">Past 30 Days (Zero Data Loss)</div>
            </div>
            <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-xs text-slate-500 font-medium">AI Model Risk Guardrails</div>
              <div className="text-2xl font-display font-bold text-blue-600 mt-2">Active</div>
              <div className="text-xs text-blue-600 font-semibold mt-1">FERPA PII Sanitization Enforced</div>
            </div>
          </div>

          <AIInsightsList filterCategory="Cybersecurity" />
        </div>
      )}
    </DashboardLayout>
  );
}
