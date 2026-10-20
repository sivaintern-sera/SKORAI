"use client";

import React, { useState } from "react";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import {
  ShieldAlert,
  Server,
  Users,
  Settings,
  Database,
  CheckCircle,
  FileText,
  Activity,
  Lock,
  RefreshCw,
} from "lucide-react";

export default function AdminDashboardPage() {
  const [syncStatus, setSyncStatus] = useState("Healthy");
  const [isSyncing, setIsSyncing] = useState(false);

  const integrations = [
    { name: "Canvas LMS", type: "Learning Management System", status: "Connected", sync: "2 mins ago", latency: "42ms" },
    { name: "Ellucian Banner SIS", type: "Student Information System", status: "Connected", sync: "5 mins ago", latency: "65ms" },
    { name: "Slate CRM", type: "Admissions Recruitment", status: "Connected", sync: "12 mins ago", latency: "58ms" },
    { name: "Workday ERP", type: "Human Resources & Payroll", status: "Connected", sync: "15 mins ago", latency: "80ms" },
    { name: "Active Directory / Okta SSO", type: "Identity & Access Management", status: "Connected", sync: "Real-time", latency: "18ms" },
  ];

  const auditEvents = [
    { id: "aud-901", user: "president@demo.skorai.edu", action: "EXPORT_CSV", resource: "INSTITUTIONAL_METRICS", time: "3 mins ago", ip: "192.168.1.42" },
    { id: "aud-902", user: "dean@demo.skorai.edu", action: "VIEW_DEPARTMENT_REPORT", resource: "DEPT_CS", time: "14 mins ago", ip: "192.168.1.18" },
    { id: "aud-903", user: "financialaid@demo.skorai.edu", action: "BATCH_VERIFY_FAFSA", resource: "FINANCIAL_AID", time: "32 mins ago", ip: "192.168.1.77" },
    { id: "aud-904", user: "advisor@demo.skorai.edu", action: "UPDATE_INTERVENTION_NOTE", resource: "STUDENT_RECORD", time: "1 hour ago", ip: "192.168.1.91" },
  ];

  const handleManualSync = () => {
    setIsSyncing(true);
    setTimeout(() => {
      setIsSyncing(false);
      alert("Manual Active Directory & SIS Synchronization Completed: 10,000 student records verified.");
    }, 800);
  };

  return (
    <DashboardLayout
      activeRole="admin"
      title="Platform Administrator &amp; System Health Center"
      subtitle="Alex Morgan &bull; Enterprise tenant configurations, RBAC permissions, audit log tracking, and integration pipelines"
    >
      {/* Top Admin KPIs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between text-slate-500 text-xs font-medium">
            <span>Database &amp; Storage Health</span>
            <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600">
              <Database className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-display font-bold text-emerald-600 mt-2">100%</div>
          <div className="text-xs text-emerald-600 font-semibold mt-1">Supabase PostgreSQL</div>
          <div className="text-xs text-slate-500 mt-1">RLS Policies Active on 14 Tables</div>
        </div>

        <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between text-slate-500 text-xs font-medium">
            <span>Total Audit Log Events</span>
            <div className="w-8 h-8 rounded-lg bg-purple-50 flex items-center justify-center text-purple-700">
              <FileText className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-display font-bold text-slate-900 mt-2">142,480</div>
          <div className="text-xs text-purple-700 font-semibold mt-1">Retained for 7 Years</div>
          <div className="text-xs text-slate-500 mt-1">Immutable Cryptographic Trail</div>
        </div>

        <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between text-slate-500 text-xs font-medium">
            <span>Active Directory Sync</span>
            <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600">
              <CheckCircle className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-display font-bold text-emerald-600 mt-2">{syncStatus}</div>
          <div className="text-xs text-emerald-600 font-semibold mt-1">Zero Authentication Errors</div>
          <div className="text-xs text-slate-500 mt-1">10,500 Provisioned Identifiers</div>
        </div>

        <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between text-slate-500 text-xs font-medium">
            <span>AI Safety Guardrails</span>
            <div className="w-8 h-8 rounded-lg bg-purple-50 flex items-center justify-center text-purple-600">
              <ShieldAlert className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-display font-bold text-slate-900 mt-2">Enforced</div>
          <div className="text-xs text-purple-700 font-semibold mt-1">FERPA PII Sanitizer Active</div>
          <div className="text-xs text-slate-500 mt-1">Deterministic Model Fallback OK</div>
        </div>
      </div>

      {/* Enterprise System Integrations Status */}
      <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="text-base font-display font-bold text-slate-900 tracking-tight">
              Enterprise System Integration Pipelines
            </h4>
            <p className="text-xs text-slate-500">
              Live status of student information systems, LMS, and identity providers
            </p>
          </div>
          <button
            type="button"
            onClick={handleManualSync}
            disabled={isSyncing}
            className="px-4 py-2 rounded-full bg-purple-700 hover:bg-purple-500 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-sm"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${isSyncing ? "animate-spin" : ""}`} />
            <span>{isSyncing ? "Syncing..." : "Trigger Manual Re-Sync"}</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {integrations.map((item) => (
            <div key={item.name} className="p-4 rounded-xl bg-slate-50/80 border border-slate-200/80 space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-display font-bold text-slate-900 text-xs">{item.name}</span>
                <span className="flex items-center gap-1 text-[11px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200 font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                  {item.status}
                </span>
              </div>
              <div className="text-xs text-slate-500">{item.type}</div>
              <div className="flex items-center justify-between text-xs text-slate-500 pt-2 border-t border-slate-200/80">
                <span>Last Sync: {item.sync}</span>
                <span className="font-mono text-slate-700 font-medium">{item.latency}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Real-Time Immutable Audit Log Stream */}
      <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm space-y-4">
        <div>
          <h4 className="text-base font-display font-bold text-slate-900 tracking-tight">
            Recent Security &amp; Data Access Audit Logs
          </h4>
          <p className="text-xs text-slate-500">
            Immutable audit trail of authorized role actions and exports
          </p>
        </div>

        <div className="overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full text-left text-xs text-slate-700">
            <thead className="bg-slate-50 text-slate-600 uppercase tracking-wider text-[11px] font-semibold border-b border-slate-200">
              <tr>
                <th className="p-3.5">Event ID</th>
                <th className="p-3.5">Actor / Email</th>
                <th className="p-3.5">Action</th>
                <th className="p-3.5">Target Resource</th>
                <th className="p-3.5">Timestamp</th>
                <th className="p-3.5">Client IP</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-mono text-xs">
              {auditEvents.map((evt) => (
                <tr key={evt.id} className="hover:bg-slate-50/70 transition-colors">
                  <td className="p-3.5 text-purple-700 font-bold">{evt.id}</td>
                  <td className="p-3.5 text-slate-900 font-sans font-medium">{evt.user}</td>
                  <td className="p-3.5 text-purple-700 font-semibold">{evt.action}</td>
                  <td className="p-3.5 text-slate-600">{evt.resource}</td>
                  <td className="p-3.5 text-slate-500">{evt.time}</td>
                  <td className="p-3.5 text-slate-500">{evt.ip}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </DashboardLayout>
  );
}

