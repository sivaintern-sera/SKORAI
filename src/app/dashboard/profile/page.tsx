"use client";

import React, { useState, useEffect } from "react";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { getClientDemoSession } from "@/lib/demo-session";
import { DEMO_ACCOUNTS, getDemoAccountByRole, getDemoAccountById } from "@/lib/demo-accounts";
import { DemoAccount } from "@/types";
import {
  User,
  ShieldCheck,
  Mail,
  Building,
  GraduationCap,
  Award,
  Key,
  Clock,
  CheckCircle2,
  Lock,
  Phone,
  MapPin,
  Calendar,
  FileText,
  Bell,
  Copy,
  Check,
  ExternalLink,
  Laptop,
  Fingerprint,
} from "lucide-react";

export default function ProfilePage() {
  const [currentAccount, setCurrentAccount] = useState<DemoAccount>(DEMO_ACCOUNTS[0]);
  const [activeTab, setActiveTab] = useState<"credentials" | "permissions" | "security" | "preferences">("credentials");
  const [copiedId, setCopiedId] = useState(false);
  const [notificationsSaved, setNotificationsSaved] = useState(false);
  const [prefWeeklyDigest, setPrefWeeklyDigest] = useState(true);
  const [prefRetentionAlerts, setPrefRetentionAlerts] = useState(true);
  const [prefYieldAlerts, setPrefYieldAlerts] = useState(true);
  const [prefFafsaAlerts, setPrefFafsaAlerts] = useState(false);

  useEffect(() => {
    const session = getClientDemoSession();
    if (session) {
      const acc = getDemoAccountById(session.accountId) || getDemoAccountByRole(session.role);
      if (acc) {
        setCurrentAccount(acc);
      }
    }
  }, []);

  const handleCopyId = () => {
    navigator.clipboard?.writeText?.(currentAccount.id);
    setCopiedId(true);
    setTimeout(() => setCopiedId(false), 2000);
  };

  const handleSavePreferences = () => {
    setNotificationsSaved(true);
    setTimeout(() => setNotificationsSaved(false), 2500);
  };

  // Role-specific education credentials dictionary
  const credentialsByRole: Record<string, { degrees: string[]; office: string; phone: string; bio: string }> = {
    president: {
      degrees: [
        "Ph.D. in Higher Education Policy & Governance — Stanford University",
        "M.Ed. in Education Leadership — Harvard Graduate School of Education",
        "B.A. in Political Science, Magna Cum Laude — Dartmouth College",
      ],
      office: "Founders Administration Hall, Suite 400",
      phone: "+1 (555) 234-5678 ext. 4001",
      bio: "Dr. Olivia Carter serves as University President and Chief Academic Officer at Northbridge State University, championing predictive analytics to support student completion, fiduciary sustainability, and research excellence.",
    },
    dean: {
      degrees: [
        "Ph.D. in Computer Science — Carnegie Mellon University",
        "M.S. in Software Systems — University of Illinois Urbana-Champaign",
        "B.S. in Electrical Engineering — Purdue University",
      ],
      office: "Turing Science Complex, Room 320",
      phone: "+1 (555) 234-5678 ext. 3201",
      bio: "Dr. James Wilson oversees the College of Computing & Information Technology, stewarding curriculum accreditation, faculty lines, and research initiatives.",
    },
    "department-chair": {
      degrees: [
        "Ph.D. in Computer Engineering — University of Michigan",
        "B.S. in Computer Science — Georgia Institute of Technology",
      ],
      office: "Lovelace Hall, Department Suite 210",
      phone: "+1 (555) 234-5678 ext. 2104",
      bio: "Dr. Robert Anderson leads the Department of Computer Science, focusing on DFW bottleneck reductions and gateway STEM course persistence.",
    },
    faculty: {
      degrees: [
        "Ph.D. in Data Science & Machine Learning — UC Berkeley",
        "B.S. in Mathematics — University of Washington",
      ],
      office: "Turing Science Complex, Room 415",
      phone: "+1 (555) 234-5678 ext. 4152",
      bio: "Dr. Emily Johnson is an Associate Professor of Computer Science specializing in algorithms, data structures, and instructional technology.",
    },
    advisor: {
      degrees: [
        "M.S. in Academic Advising & Student Affairs — Indiana University",
        "B.A. in Psychology — Northbridge State University",
      ],
      office: "Student Success Center, Desk 14",
      phone: "+1 (555) 234-5678 ext. 1409",
      bio: "Sarah Mitchell leads targeted student intervention caseloads, supporting degree audits and proactive early academic alerts.",
    },
    student: {
      degrees: [
        "Candidate for B.S. in Computer Science (Expected Spring 2027)",
        "Minor in Applied Statistics & Machine Learning",
      ],
      office: "Northbridge Resident Commons, Hall B",
      phone: "+1 (555) 234-5678 (Student Directory)",
      bio: "Michael Brown is a junior undergraduate majoring in Computer Science with a focus on data systems, maintainer of a 3.74 cumulative GPA.",
    },
  };

  const currentCreds = credentialsByRole[currentAccount.role] || {
    degrees: [
      "M.A. / M.S. in Institutional Administration — State University System",
      "B.S. in Business & Information Systems",
    ],
    office: "Northbridge University Administration Center",
    phone: "+1 (555) 234-5678",
    bio: `${currentAccount.name} serves as ${currentAccount.title} at ${currentAccount.institution}, managing institutional intelligence and compliance.`,
  };

  return (
    <DashboardLayout
      activeRole={currentAccount.role}
      title="User Profile & Institutional Credentials"
      subtitle={`Official account profile and security credentials for ${currentAccount.name} (${currentAccount.roleTitle})`}
    >
      <div className="space-y-8 max-w-6xl mx-auto">
        {/* ============================================================ */}
        {/* TOP HERO PROFILE HEADER */}
        {/* ============================================================ */}
        <div className="bg-white rounded-3xl border border-slate-200/80 shadow-sm overflow-hidden">
          {/* Cover Strip */}
          <div className="h-36 sm:h-44 bg-gradient-to-r from-slate-900 via-purple-950 to-slate-900 relative">
            <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px] opacity-25" />
            <div className="absolute top-4 right-4 flex items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-white backdrop-blur-xs border border-white/20">
                SSO Authenticated
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Active Session
              </span>
            </div>
          </div>

          {/* Profile Identity Bar */}
          <div className="px-6 sm:px-10 pb-8 pt-0 relative bg-white">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-6 border-b border-slate-100">
              <div className="flex flex-col sm:flex-row sm:items-end gap-5">
                {/* Avatar with negative top margin overlapping the cover banner */}
                <div className="-mt-14 sm:-mt-16 shrink-0">
                  <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-purple-700 text-white font-display font-extrabold text-3xl sm:text-4xl flex items-center justify-center ring-4 ring-white shadow-xl">
                    {currentAccount.name.charAt(0)}
                  </div>
                </div>

                {/* Name & Academic Title positioned cleanly on the white background */}
                <div className="space-y-1.5 pt-2 sm:pt-0">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <h1 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                      {currentAccount.name}
                    </h1>
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-purple-50 text-purple-800 ring-1 ring-inset ring-purple-800/10">
                      {currentAccount.roleTitle}
                    </span>
                  </div>
                  <p className="text-slate-700 text-sm font-semibold">
                    {currentAccount.title}
                  </p>
                  <p className="text-xs text-slate-500 flex items-center gap-2">
                    <span className="font-medium text-slate-600">{currentAccount.institution}</span>
                    {currentAccount.college && (
                      <>
                        <span>&bull;</span>
                        <span className="text-slate-600">{currentAccount.college}</span>
                      </>
                    )}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3 pt-2 sm:pt-0">
                <button
                  type="button"
                  onClick={handleCopyId}
                  className="px-3.5 py-2 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 font-semibold text-xs transition-colors flex items-center gap-1.5 shadow-2xs cursor-pointer"
                >
                  {copiedId ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedId ? "Copied ID" : "Copy Account ID"}</span>
                </button>
                <div className="px-3.5 py-2 rounded-full bg-slate-900 text-white font-semibold text-xs shadow-sm flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-purple-400" />
                  <span>FERPA Level-4 Clearance</span>
                </div>
              </div>
            </div>

            {/* Quick Stats Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-100">
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1">
                <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">Official Email</span>
                <p className="text-xs font-bold text-slate-900 truncate">{currentAccount.email}</p>
              </div>
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1">
                <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">Campus Office</span>
                <p className="text-xs font-bold text-slate-900 truncate">{currentCreds.office}</p>
              </div>
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1">
                <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">Authentication</span>
                <p className="text-xs font-bold text-slate-900 truncate">Okta SSO &bull; FIDO2 MFA</p>
              </div>
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1">
                <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">Platform Persona</span>
                <p className="text-xs font-bold text-purple-700 truncate">{currentAccount.category}</p>
              </div>
            </div>
          </div>
        </div>

        {/* ============================================================ */}
        {/* TABS NAVIGATION */}
        {/* ============================================================ */}
        <div className="flex items-center gap-2 border-b border-slate-200 pb-3">
          <button
            type="button"
            onClick={() => setActiveTab("credentials")}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
              activeTab === "credentials"
                ? "bg-purple-700 text-white shadow-sm"
                : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
            }`}
          >
            Academic Credentials &amp; Bio
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("permissions")}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
              activeTab === "permissions"
                ? "bg-purple-700 text-white shadow-sm"
                : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
            }`}
          >
            Role Permissions &amp; Data Access
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("security")}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
              activeTab === "security"
                ? "bg-purple-700 text-white shadow-sm"
                : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
            }`}
          >
            Active Session &amp; Security
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("preferences")}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
              activeTab === "preferences"
                ? "bg-purple-700 text-white shadow-sm"
                : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
            }`}
          >
            Alert Preferences
          </button>
        </div>

        {/* ============================================================ */}
        {/* TAB 1: ACADEMIC CREDENTIALS & BIO */}
        {/* ============================================================ */}
        {activeTab === "credentials" && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 space-y-6">
              {/* Bio Card */}
              <div className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-8 space-y-4 shadow-sm">
                <h3 className="font-display text-base font-bold text-slate-900 tracking-tight flex items-center gap-2">
                  <User className="w-4 h-4 text-purple-700" />
                  <span>Institutional Biography</span>
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {currentCreds.bio}
                </p>
                <div className="p-4 rounded-2xl bg-purple-50/60 border border-purple-200/70 text-xs text-slate-700 leading-relaxed">
                  <strong>Access Scope:</strong> {currentAccount.accessDescription}
                </div>
              </div>

              {/* Degrees & Appointments */}
              <div className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-8 space-y-4 shadow-sm">
                <h3 className="font-display text-base font-bold text-slate-900 tracking-tight flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-purple-700" />
                  <span>Degrees &amp; Formal Academic Appointments</span>
                </h3>
                <div className="space-y-3">
                  {currentCreds.degrees.map((degree, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-200/70">
                      <Award className="w-4 h-4 text-purple-700 shrink-0 mt-0.5" />
                      <span className="text-xs font-medium text-slate-800 leading-relaxed">
                        {degree}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar Contact Info Card */}
            <div className="space-y-6">
              <div className="bg-white border border-slate-200/80 rounded-3xl p-6 space-y-4 shadow-sm">
                <h3 className="font-display text-sm font-bold text-slate-900 tracking-tight">
                  Campus Directory Details
                </h3>
                <ul className="space-y-3.5 text-xs text-slate-600">
                  <li className="flex items-start gap-3">
                    <Mail className="w-4 h-4 text-purple-700 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-slate-900">Official Email</div>
                      <div className="text-slate-500 break-all">{currentAccount.email}</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Phone className="w-4 h-4 text-purple-700 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-slate-900">Direct Extension</div>
                      <div className="text-slate-500">{currentCreds.phone}</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-purple-700 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-slate-900">Office Location</div>
                      <div className="text-slate-500">{currentCreds.office}</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Building className="w-4 h-4 text-purple-700 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-slate-900">Institution</div>
                      <div className="text-slate-500">{currentAccount.institution}</div>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Status Indicator */}
              <div className="p-5 rounded-3xl bg-slate-900 text-white space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400">Account Status</span>
                  <span className="text-emerald-400 font-semibold flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    Active Verified
                  </span>
                </div>
                <div className="text-xs text-slate-300">
                  Assigned Route: <strong className="text-white font-mono">{currentAccount.dashboardRoute}</strong>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ============================================================ */}
        {/* TAB 2: ROLE PERMISSIONS & DATA ACCESS */}
        {/* ============================================================ */}
        {activeTab === "permissions" && (
          <div className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm">
            <div>
              <h3 className="font-display text-base font-bold text-slate-900 tracking-tight">
                Role-Based Access Control (RBAC) Entitlements
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Data access permissions enforced through PostgreSQL Row Level Security (RLS) policies for {currentAccount.roleTitle}.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-slate-900">SIS Student Demographic Records</span>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                    Granted (Aggregated)
                  </span>
                </div>
                <p className="text-slate-600 leading-relaxed text-[11px]">
                  Enables queries across active headcount, cohort year, in-state residency, and enrollment classification.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-slate-900">Predictive Retention ML Inference</span>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                    Full Access
                  </span>
                </div>
                <p className="text-slate-600 leading-relaxed text-[11px]">
                  Ability to view retention risk probabilities, anomaly flags, and run scenario simulation engines.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-slate-900">Financial Aid &amp; FAFSA Records</span>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-purple-50 text-purple-800 border border-purple-200">
                    Role-Restricted
                  </span>
                </div>
                <p className="text-slate-600 leading-relaxed text-[11px]">
                  Aggregate unmet financial need and Pell Grant counts visible; raw family financial tax documents obscured.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-slate-900">IPEDS Compliance Data Export</span>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                    Authorized
                  </span>
                </div>
                <p className="text-slate-600 leading-relaxed text-[11px]">
                  Full rights to generate and export official state and federal higher education reporting datasets.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900 text-white space-y-2 text-xs">
              <div className="flex items-center gap-2">
                <Lock className="w-4 h-4 text-purple-400" />
                <span className="font-semibold">Cryptographic RBAC Token</span>
              </div>
              <p className="text-slate-400 font-mono text-[11px] break-all">
                sha256:7b92f44a8e9102c019d45be87f1938b82e1c0d4a7f2390b21a8d4e9c702a412f
              </p>
            </div>
          </div>
        )}

        {/* ============================================================ */}
        {/* TAB 3: ACTIVE SESSION & SECURITY */}
        {/* ============================================================ */}
        {activeTab === "security" && (
          <div className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm">
            <div>
              <h3 className="font-display text-base font-bold text-slate-900 tracking-tight">
                Active Session &amp; Multi-Factor Security Credentials
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Security telemetry and enterprise identity provider details for this authenticated session.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1.5">
                <div className="flex items-center gap-2 text-purple-700 font-semibold">
                  <Fingerprint className="w-4 h-4" />
                  <span>Hardware MFA</span>
                </div>
                <div className="text-sm font-bold text-slate-900">FIDO2 WebAuthn</div>
                <div className="text-[11px] text-slate-500">Enforced by institutional policy</div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1.5">
                <div className="flex items-center gap-2 text-purple-700 font-semibold">
                  <Laptop className="w-4 h-4" />
                  <span>Device Trust</span>
                </div>
                <div className="text-sm font-bold text-slate-900">Institutional Managed</div>
                <div className="text-[11px] text-slate-500">CrowdStrike sensor verified</div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1.5">
                <div className="flex items-center gap-2 text-purple-700 font-semibold">
                  <Clock className="w-4 h-4" />
                  <span>Session Expiry</span>
                </div>
                <div className="text-sm font-bold text-slate-900">60 Minutes Idle</div>
                <div className="text-[11px] text-slate-500">Auto-lock on inactive state</div>
              </div>
            </div>

            {/* Recent Security Audits */}
            <div className="space-y-3 pt-4 border-t border-slate-100">
              <h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wider">
                Recent Security Audit Events for this Account
              </h4>
              <div className="divide-y divide-slate-100 text-xs">
                <div className="py-2.5 flex items-center justify-between">
                  <span className="text-slate-800 font-medium">SSO Login via Okta (SAML 2.0)</span>
                  <span className="text-slate-500 text-[11px]">Just now &bull; 192.168.1.42</span>
                </div>
                <div className="py-2.5 flex items-center justify-between">
                  <span className="text-slate-800 font-medium">Session token refreshed</span>
                  <span className="text-slate-500 text-[11px]">15 minutes ago &bull; TLS 1.3</span>
                </div>
                <div className="py-2.5 flex items-center justify-between">
                  <span className="text-slate-800 font-medium">Institutional report export authorized</span>
                  <span className="text-slate-500 text-[11px]">1 hour ago &bull; Verified</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ============================================================ */}
        {/* TAB 4: ALERT PREFERENCES */}
        {/* ============================================================ */}
        {activeTab === "preferences" && (
          <div className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm">
            <div>
              <h3 className="font-display text-base font-bold text-slate-900 tracking-tight">
                Notification &amp; Executive Briefing Subscriptions
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Customize automated alerts dispatched to your official institutional email ({currentAccount.email}).
              </p>
            </div>

            <div className="space-y-4">
              <label className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 border border-slate-200/80 cursor-pointer">
                <div>
                  <div className="text-xs font-semibold text-slate-900">Weekly Executive Briefing Digest</div>
                  <div className="text-[11px] text-slate-500">Curated weekly summary of campus retention, enrollment velocity, and fiduciary KPIs.</div>
                </div>
                <input
                  type="checkbox"
                  checked={prefWeeklyDigest}
                  onChange={(e) => setPrefWeeklyDigest(e.target.checked)}
                  className="w-4 h-4 text-purple-700 rounded focus:ring-purple-500"
                />
              </label>

              <label className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 border border-slate-200/80 cursor-pointer">
                <div>
                  <div className="text-xs font-semibold text-slate-900">Predictive Retention Anomaly Warnings</div>
                  <div className="text-[11px] text-slate-500">Real-time alerts when gateway STEM course withdrawal risks spike above 15%.</div>
                </div>
                <input
                  type="checkbox"
                  checked={prefRetentionAlerts}
                  onChange={(e) => setPrefRetentionAlerts(e.target.checked)}
                  className="w-4 h-4 text-purple-700 rounded focus:ring-purple-500"
                />
              </label>

              <label className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 border border-slate-200/80 cursor-pointer">
                <div>
                  <div className="text-xs font-semibold text-slate-900">Admissions Yield Variance Notifications</div>
                  <div className="text-[11px] text-slate-500">Dispatched when deposited student yield deviates &plusmn;3% from projected institutional targets.</div>
                </div>
                <input
                  type="checkbox"
                  checked={prefYieldAlerts}
                  onChange={(e) => setPrefYieldAlerts(e.target.checked)}
                  className="w-4 h-4 text-purple-700 rounded focus:ring-purple-500"
                />
              </label>

              <label className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 border border-slate-200/80 cursor-pointer">
                <div>
                  <div className="text-xs font-semibold text-slate-900">FAFSA Verification Acceleration Updates</div>
                  <div className="text-[11px] text-slate-500">Daily batch reports on cleared financial aid verification holds and Pell Grant processing.</div>
                </div>
                <input
                  type="checkbox"
                  checked={prefFafsaAlerts}
                  onChange={(e) => setPrefFafsaAlerts(e.target.checked)}
                  className="w-4 h-4 text-purple-700 rounded focus:ring-purple-500"
                />
              </label>
            </div>

            <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100">
              {notificationsSaved && (
                <span className="text-xs font-semibold text-emerald-600 flex items-center gap-1">
                  <Check className="w-3.5 h-3.5" />
                  Preferences updated successfully
                </span>
              )}
              <button
                type="button"
                onClick={handleSavePreferences}
                className="px-5 py-2.5 rounded-full bg-purple-700 hover:bg-purple-500 text-white text-xs font-semibold shadow-sm transition-colors cursor-pointer"
              >
                Save Preferences
              </button>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}

