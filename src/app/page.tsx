"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import {
  GraduationCap,
  ArrowRight,
  TrendingUp,
  ShieldCheck,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  Sliders,
  DollarSign,
  AlertTriangle,
  Database,
  Lock,
  Workflow,
  Cpu,
  BrainCircuit,
  Award,
  Search,
  FileText,
  Users,
  Building,
  Check,
} from "lucide-react";
import { DEMO_ACCOUNTS } from "@/lib/demo-accounts";
import { formatCurrency, formatNumber } from "@/lib/utils";

export default function LandingPage() {
  const [selectedRoleIndex, setSelectedRoleIndex] = useState(0);
  const [scenarioEnrollmentPct, setScenarioEnrollmentPct] = useState(-10);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const selectedRole = DEMO_ACCOUNTS[selectedRoleIndex];

  const simulatedRevenueImpact = Math.round(
    104200000 * (scenarioEnrollmentPct / 100)
  );

  const faqs = [
    {
      q: "What is the primary purpose of the SKORAI Platform?",
      a: "The platform is engineered specifically for general four-year universities in the United States. It connects fragmented university data systems (SIS, LMS, ERP, CRM) into a unified institutional decision intelligence engine that powers predictive retention modeling, enrollment forecasting, financial sustainability simulations, and executive leadership briefings.",
    },
    {
      q: "How does the platform ensure student data privacy and FERPA compliance?",
      a: "Our architecture enforces strict multi-tenant database isolation, PostgreSQL Row Level Security (RLS) policies, and role-based access control. All AI inference processes operate with automated Personally Identifiable Information (PII) sanitizers, and governance audit logs record every sensitive data query for compliance reporting.",
    },
    {
      q: "What systems does the platform integrate with?",
      a: "The platform connects seamlessly to standard higher education enterprise applications including Student Information Systems (Ellucian Banner, Colleague, PeopleSoft), Learning Management Systems (Canvas, Blackboard, D2L Brightspace), Admissions CRMs (Slate, Salesforce Education Cloud), and Financial ERPs (Workday).",
    },
    {
      q: "How long does institutional deployment and integration typically take?",
      a: "A typical four-year university deployment follows a structured 7-stage implementation process spanning 8 to 12 weeks, ensuring comprehensive data schema validation, historical data ingestion, governance review, and role-based training before full campus launch.",
    },
    {
      q: "How does the annual pricing model work?",
      a: "The platform is licensed via an institutional annual subscription based on the chosen tier (Visibility, Intelligence, or Decision Intelligence) and total institution enrollment. Unlike per-seat licensing, our model encourages campus-wide collaboration without penalizing headcount.",
    },
    {
      q: "Can the platform simulate hypothetical institutional scenarios?",
      a: "Yes. Our Decision Intelligence tier includes real-time scenario simulation engines that allow university leaders to model the financial, staffing, and retention consequences of demographic shifts, state appropriation changes, tuition adjustments, and student aid increases before executing policies.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      {/* 01. NAVIGATION BAR */}
      <Navbar />

      <main className="flex-1 space-y-24 sm:space-y-32">
        {/* ============================================================ */}
        {/* 02. HERO SECTION */}
        {/* ============================================================ */}
        <section className="relative overflow-hidden pt-16 pb-16 lg:pt-24 lg:pb-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 ring-1 ring-inset ring-blue-700/10 mb-8">
              <span>Higher Education Decision Intelligence</span>
            </div>

            {/* Main Headline with TaxPal signature wavy highlighter */}
            <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl leading-[1.1]">
              One Intelligent Platform.{" "}
              <span className="relative whitespace-nowrap text-blue-600">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 418 42"
                  className="absolute left-0 top-2/3 h-[0.58em] w-full fill-blue-300/70"
                  preserveAspectRatio="none"
                >
                  <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.9 0-5.8 0-8.7 0" />
                </svg>
                <span className="relative">Every Institutional Decision.</span>
              </span>
            </h1>

            {/* Subheading */}
            <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-700">
              Transform campus data into actionable intelligence, predictive retention insights, and confident executive governance for American general four-year universities.
            </p>

            {/* Pill Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/demo"
                className="group inline-flex items-center justify-center rounded-full py-3 px-7 text-sm font-semibold bg-blue-600 text-white hover:bg-blue-500 active:bg-blue-800 shadow-md shadow-blue-500/20 transition-all"
              >
                <span>Explore Live Demo (14 Roles)</span>
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/contact"
                className="group inline-flex ring-1 items-center justify-center rounded-full py-3 px-7 text-sm font-medium ring-slate-200 text-slate-700 hover:text-slate-900 hover:ring-slate-300 active:bg-slate-100 transition-all bg-white"
              >
                Request Institutional Demo
              </Link>
            </div>

            {/* Hero Dashboard Preview Card */}
            <div className="mt-14 max-w-5xl mx-auto">
              <div className="rounded-3xl p-3 bg-slate-100 ring-1 ring-slate-900/10 shadow-2xl">
                <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-7 text-left space-y-6">
                  {/* Top Bar of Preview */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-100 gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold text-sm shadow-sm">
                        NSU
                      </div>
                      <div>
                        <div className="font-display font-semibold text-slate-900 text-sm">
                          Northbridge State University &bull; Executive Command Center
                        </div>
                        <div className="text-xs text-slate-500">
                          Fall 2026 Term &bull; 10,000 Headcount &bull; Continuous Predictive Monitoring
                        </div>
                      </div>
                    </div>
                    <span className="self-start sm:self-auto px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 ring-1 ring-inset ring-emerald-600/20 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      Live Decision Intelligence Active
                    </span>
                  </div>

                  {/* 4 Preview Metric Tiles */}
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                      <div className="text-xs text-slate-500 font-medium">Total Enrollment</div>
                      <div className="text-2xl font-bold font-display text-slate-900 mt-1">10,000</div>
                      <div className="text-xs text-emerald-600 font-semibold mt-1">+2.4% YoY Growth</div>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                      <div className="text-xs text-slate-500 font-medium">1st-Year Retention</div>
                      <div className="text-2xl font-bold font-display text-blue-600 mt-1">84.2%</div>
                      <div className="text-xs text-emerald-600 font-semibold mt-1">+1.8 pts Benchmark</div>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                      <div className="text-xs text-slate-500 font-medium">Annual Revenue</div>
                      <div className="text-2xl font-bold font-display text-slate-900 mt-1">$174.5M</div>
                      <div className="text-xs text-emerald-600 font-semibold mt-1">+$8.4M Operating Margin</div>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                      <div className="text-xs text-slate-500 font-medium">Institutional Risk</div>
                      <div className="text-2xl font-bold font-display text-slate-900 mt-1">18 / 100</div>
                      <div className="text-xs text-blue-600 font-semibold mt-1">Low Cyber &amp; Fiduciary Risk</div>
                    </div>
                  </div>

                  {/* Preview AI Alert Strip */}
                  <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-200/70 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                    <div className="flex items-center gap-2.5">
                      <div>
                        <strong className="text-blue-900 font-semibold">AI Early Alert:</strong>{" "}
                        <span className="text-slate-700">
                          Gateway STEM course retention risk flagged for 142 freshmen &bull; Automated advisor intervention queue triggered
                        </span>
                      </div>
                    </div>
                    <Link
                      href="/demo"
                      className="text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-1 shrink-0"
                    >
                      <span>Inspect in Demo</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Trusted higher education universities */}
            <div className="mt-20 pt-10 border-t border-slate-100">
              <p className="font-display text-sm font-medium text-slate-600">
                Engineered for American general four-year higher education institutions
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-8 sm:gap-14 text-slate-400 font-semibold text-sm">
                <span className="hover:text-slate-600 transition-colors">Northbridge State University</span>
                <span className="hover:text-slate-600 transition-colors">Midwest Tech Institute</span>
                <span className="hover:text-slate-600 transition-colors">Pacific Coast University</span>
                <span className="hover:text-slate-600 transition-colors">Eastern Commonwealth</span>
                <span className="hover:text-slate-600 transition-colors">Great Lakes University</span>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 03. ABOUT THE PLATFORM (PRIMARY BLUE FEATURE SECTION) */}
        {/* ============================================================ */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-600 rounded-3xl py-16 px-6 sm:px-12 lg:py-24 lg:px-16 text-white shadow-xl relative overflow-hidden">
            <div className="max-w-3xl space-y-4 mb-14">
              <h2 className="font-display text-xs font-bold uppercase tracking-widest text-blue-200">
                Institutional Intelligence Redefined
              </h2>
              <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white">
                A Unified Nervous System for the Modern University
              </h3>
              <p className="text-blue-100 text-base leading-relaxed">
                American universities operate on dozens of disconnected software silos. Our platform connects registrar data, institutional analytics, predictive modeling, and executive governance into a single intelligence hub.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm border border-white/15 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-white text-blue-600 flex items-center justify-center font-bold">
                  <Database className="w-5 h-5" />
                </div>
                <h4 className="font-display text-lg font-semibold text-white">Unified Institutional Visibility</h4>
                <p className="text-xs text-blue-100 leading-relaxed">
                  Break down campus silos across registrar, financial aid, admissions, academic colleges, and HR. Gain a single source of institutional truth for every dean and provost.
                </p>
              </div>

              <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm border border-white/15 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-white text-blue-600 flex items-center justify-center font-bold">
                  <BrainCircuit className="w-5 h-5" />
                </div>
                <h4 className="font-display text-lg font-semibold text-white">Predictive Early Warning AI</h4>
                <p className="text-xs text-blue-100 leading-relaxed">
                  Anticipate student attrition, enrollment yield fluctuations, and FAFSA verification hurdles weeks before they appear on end-of-term institutional reports.
                </p>
              </div>

              <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm border border-white/15 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-white text-blue-600 flex items-center justify-center font-bold">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h4 className="font-display text-lg font-semibold text-white">Governance &amp; FERPA Privacy</h4>
                <p className="text-xs text-blue-100 leading-relaxed">
                  Built-in Row Level Security, least-privilege role segregation, and immutable audit logging ensure that institutional governance and student privacy compliance are guaranteed.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 04. INSTITUTIONAL CHALLENGES */}
        {/* ============================================================ */}
        <section className="bg-slate-50 py-20 sm:py-28 border-y border-slate-200/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
              <h2 className="font-display text-xs font-bold text-blue-600 uppercase tracking-widest">
                The Reality Facing Higher Education
              </h2>
              <h3 className="font-display text-3xl sm:text-4xl font-medium text-slate-900 tracking-tight">
                Six Critical Challenges Confronting American Universities
              </h3>
              <p className="text-slate-600 text-sm">
                Disconnected systems and demographic pressures threaten long-term university sustainability.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Fragmented Data Systems", desc: "SIS, LMS, ERP, and CRM records reside in disconnected databases with no real-time synchronization.", tag: "Operational Silos" },
                { title: "Student Retention Cliff", desc: "Average freshman attrition costs universities millions in unrecovered four-year tuition revenue.", tag: "Persistence Crisis" },
                { title: "Enrollment Volatility", desc: "Shifting demographic patterns and yield unpredictability make enrollment forecasting increasingly precarious.", tag: "Demographic Shift" },
                { title: "Financial & Fiduciary Pressures", desc: "Fluctuating state appropriations and fixed operational costs require proactive scenario simulation.", tag: "Fiduciary Health" },
                { title: "Accreditation Complexity", desc: "Scrambling every decade to compile hundreds of assessment rubrics and evidence artifacts manually.", tag: "Compliance Burden" },
                { title: "Cybersecurity & AI Risk", desc: "Escalating credential phishing attacks and unmonitored shadow AI usage threaten campus data privacy.", tag: "Threat Exposure" },
              ].map((c) => (
                <div key={c.title} className="bg-white border border-slate-200/80 rounded-2xl p-7 space-y-3 shadow-sm hover:shadow-md transition-shadow">
                  <span className="inline-block text-[10px] font-bold text-rose-700 bg-rose-50 px-2.5 py-1 rounded-full ring-1 ring-inset ring-rose-600/20 uppercase tracking-wider">
                    {c.tag}
                  </span>
                  <h4 className="font-display text-base font-semibold text-slate-900 pt-1">{c.title}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 05. OUR SOLUTION: THE INTELLIGENCE PIPELINE */}
        {/* ============================================================ */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 rounded-3xl p-8 sm:p-14 text-white shadow-xl">
            <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
              <h2 className="font-display text-xs font-bold text-blue-400 uppercase tracking-widest">
                End-to-End Decision Architecture
              </h2>
              <h3 className="font-display text-2xl sm:text-3xl font-medium text-white">
                The Institutional Intelligence Pipeline
              </h3>
              <p className="text-xs sm:text-sm text-slate-400">
                How university raw operational signals are transformed into confident leadership actions
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 text-center text-xs">
              {[
                { step: "01", name: "Data Sources", desc: "SIS, LMS, ERP, CRM" },
                { step: "02", name: "Integration", desc: "Real-time Connectors" },
                { step: "03", name: "Unified Lake", desc: "PostgreSQL Warehouse" },
                { step: "04", name: "Analytics", desc: "Descriptive KPIs" },
                { step: "05", name: "AI Engine", desc: "Predictive Models" },
                { step: "06", name: "Recommendations", desc: "Actionable Interventions" },
                { step: "07", name: "Action", desc: "Executive Decisions" },
              ].map((p) => (
                <div key={p.step} className="p-4 rounded-xl bg-slate-800/80 border border-slate-700/60 flex flex-col justify-between space-y-2">
                  <div className="text-blue-400 font-mono font-bold text-xs">{p.step}</div>
                  <div className="font-display font-semibold text-white text-xs">{p.name}</div>
                  <div className="text-[10px] text-slate-400">{p.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 06. CORE PLATFORM FEATURES */}
        {/* ============================================================ */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <h2 className="font-display text-xs font-bold text-blue-600 uppercase tracking-widest">
              Comprehensive Capabilities
            </h2>
            <h3 className="font-display text-3xl sm:text-4xl font-medium text-slate-900 tracking-tight">
              Eleven Core Pillars of Institutional Excellence
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { id: 1, title: "Student Success Intelligence", desc: "Automated early warning flags, attendance tracking, and degree audit milestone monitoring." },
              { id: 2, title: "Retention Risk Modeling", desc: "Machine learning algorithms pinpointing at-risk cohorts across gateway STEM and humanities courses." },
              { id: 3, title: "Admissions & Yield Analytics", desc: "Application funnel velocity, out-of-state territory performance, and deposit yield forecasting." },
              { id: 4, title: "Academic Outcomes & DFW Rates", desc: "Granular course bottleneck discovery and grade distribution analytics across 24 departments." },
              { id: 5, title: "Financial Aid Optimization", desc: "FAFSA verification workflows, Pell Grant persistence analytics, and unmet need mitigation." },
              { id: 6, title: "Career Readiness & Outcomes", desc: "6-month post-grad placement tracking, internship co-op sponsors, and employer hiring metrics." },
              { id: 7, title: "Institutional KPI Reporting", desc: "IPEDS-compliant datasets, longitudinal trend reports, and strategic plan milestones." },
              { id: 8, title: "Accreditation Evidence Engine", desc: "Cataloging syllabi, assessment rubrics, and automated compliance gap analysis for HLC reviews." },
              { id: 9, title: "Simulated AI Insights & Alerts", desc: "Continuous anomaly detection delivering contextual explanations and recommended interventions." },
              { id: 10, title: "Cybersecurity Threat Defense", desc: "MFA enforcement, credential harvesting defense, and real-time security incident response." },
              { id: 11, title: "AI Model Governance", desc: "Audited guardrails preventing PII leakage and maintaining algorithmic fairness across all models." },
            ].map((feat) => (
              <div key={feat.id} className="bg-white border border-slate-200/80 rounded-2xl p-7 hover:border-blue-500/50 hover:shadow-md transition-all space-y-2">
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center font-bold text-xs ring-1 ring-inset ring-blue-700/10">
                  {feat.id}
                </div>
                <h4 className="font-display text-base font-semibold text-slate-900 pt-1">{feat.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ============================================================ */}
        {/* 08. ROLE-BASED INTELLIGENCE: INTERACTIVE ROLE SELECTOR */}
        {/* ============================================================ */}
        <section className="bg-slate-50 py-20 sm:py-28 border-y border-slate-200/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <h2 className="font-display text-xs font-bold text-blue-600 uppercase tracking-widest">
                Tailored Personas
              </h2>
              <h3 className="font-display text-3xl sm:text-4xl font-medium text-slate-900 tracking-tight">
                Fourteen Specialized Institutional Dashboards
              </h3>
              <p className="text-xs sm:text-sm text-slate-600">
                Click any university role below to preview their dedicated intelligence view
              </p>
            </div>

            {/* Role selector carousel buttons */}
            <div className="flex items-center gap-2 overflow-x-auto pb-3 scrollbar-none">
              {DEMO_ACCOUNTS.map((acc, index) => (
                <button
                  key={acc.id}
                  type="button"
                  onClick={() => setSelectedRoleIndex(index)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                    selectedRoleIndex === index
                      ? "bg-blue-600 text-white shadow-sm"
                      : "bg-white text-slate-700 hover:text-slate-900 border border-slate-200 shadow-sm"
                  }`}
                >
                  {acc.roleTitle}
                </button>
              ))}
            </div>

            {/* Role Dashboard Preview Showcase Card */}
            <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-lg grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 space-y-4">
                <span className="text-xs font-semibold text-blue-700 bg-blue-50 px-3 py-1 rounded-full ring-1 ring-inset ring-blue-700/10 uppercase tracking-wider">
                  {selectedRole.category}
                </span>
                <h4 className="font-display text-2xl font-bold text-slate-900">
                  {selectedRole.roleTitle}
                </h4>
                <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 text-xs">
                  <div className="font-semibold text-slate-900">{selectedRole.name}</div>
                  <div className="text-slate-500">{selectedRole.title}</div>
                  <div className="text-blue-600 font-mono mt-1 font-medium">{selectedRole.email}</div>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {selectedRole.accessDescription}
                </p>

                <div className="pt-2">
                  <Link
                    href={selectedRole.dashboardRoute}
                    className="group inline-flex items-center justify-center rounded-full py-2.5 px-5 text-sm font-semibold bg-blue-600 text-white hover:bg-blue-500 active:bg-blue-800 transition-colors shadow-sm"
                  >
                    <span>Launch {selectedRole.roleTitle} Dashboard</span>
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-7 bg-slate-50 rounded-2xl border border-slate-200 p-6 space-y-4">
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center justify-between">
                  <span>Key Intelligence Metrics</span>
                  <span className="text-emerald-700 font-semibold text-xs bg-emerald-50 px-2.5 py-0.5 rounded-full ring-1 ring-emerald-600/20">Real-Time Sync</span>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  {selectedRole.statsPreview.map((stat, i) => (
                    <div key={i} className="p-3.5 rounded-xl bg-white border border-slate-200 text-center shadow-sm">
                      <div className="text-[10px] text-slate-500 truncate">{stat.label}</div>
                      <div className="font-display text-base sm:text-lg font-bold text-slate-900 mt-0.5">{stat.value}</div>
                      <div className="text-[10px] text-emerald-600 font-semibold mt-0.5 truncate">{stat.change}</div>
                    </div>
                  ))}
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200 text-xs text-slate-600 leading-relaxed shadow-sm">
                  <strong className="text-slate-900 font-semibold">Role Authorization Scope:</strong> Access to sensitive student records, financial ledger lines, and institutional risk metrics is strictly partitioned by this role&apos;s least-privilege policy.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 10. DECISION INTELLIGENCE: SCENARIO SIMULATION PREVIEW */}
        {/* ============================================================ */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-12 shadow-xl space-y-8">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 ring-1 ring-inset ring-blue-700/10">
                <Sliders className="w-3.5 h-3.5" />
                <span>Executive Scenario Simulation</span>
              </div>
              <h3 className="font-display text-2xl sm:text-4xl font-medium text-slate-900 tracking-tight">
                &ldquo;What Happens If Enrollment Changes by {scenarioEnrollmentPct}%?&rdquo;
              </h3>
              <p className="text-xs sm:text-sm text-slate-600">
                Interactive mathematical scenario simulator showing dynamic budget and headcount implications in real time.
              </p>
            </div>

            {/* Slider control */}
            <div className="max-w-xl mx-auto space-y-2">
              <div className="flex justify-between text-xs text-slate-700 font-medium">
                <span>Select Enrollment Shock:</span>
                <span className="font-mono font-bold text-blue-600 text-sm">{scenarioEnrollmentPct}%</span>
              </div>
              <input
                type="range"
                min="-20"
                max="10"
                step="1"
                value={scenarioEnrollmentPct}
                onChange={(e) => setScenarioEnrollmentPct(Number(e.target.value))}
                className="w-full accent-blue-600 bg-slate-200 h-2 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-slate-400 font-medium">
                <span>-20% Severe Drop</span>
                <span>0% Baseline</span>
                <span>+10% Growth</span>
              </div>
            </div>

            {/* Result Tiles */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-center">
                <div className="text-xs text-slate-500 font-medium">Estimated Tuition Impact</div>
                <div
                  className={`font-display text-2xl font-bold mt-1 ${
                    simulatedRevenueImpact >= 0 ? "text-emerald-600" : "text-rose-600"
                  }`}
                >
                  {simulatedRevenueImpact >= 0 ? "+" : ""}
                  {formatCurrency(simulatedRevenueImpact)}
                </div>
                <div className="text-[10px] text-slate-400 mt-1">Simulated Annual Variance</div>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-center">
                <div className="text-xs text-slate-500 font-medium">Simulated Headcount</div>
                <div className="font-display text-2xl font-bold text-slate-900 mt-1">
                  {formatNumber(10000 + Math.round(10000 * (scenarioEnrollmentPct / 100)))}
                </div>
                <div className="text-[10px] text-slate-400 mt-1">
                  {scenarioEnrollmentPct >= 0 ? "+" : ""}{Math.round(10000 * (scenarioEnrollmentPct / 100))} Students
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-center">
                <div className="text-xs text-slate-500 font-medium">Resource Strategy</div>
                <div className="font-display text-base font-bold text-blue-700 mt-1">
                  {scenarioEnrollmentPct < -5
                    ? "Targeted Regional Marketing"
                    : scenarioEnrollmentPct < 0
                    ? "Maintain Reserve Cushion"
                    : "Expand Dormitory Allocation"}
                </div>
                <div className="text-[10px] text-slate-400 mt-1">Automated Recommendation</div>
              </div>
            </div>

            <div className="text-center text-xs text-slate-400">
              * Clearly labeled as a simulated mathematical projection. Does not represent audited financial advice.
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 13. PRICING & COMMERCIAL ANCHORS */}
        {/* ============================================================ */}
        <section id="pricing" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <h2 className="font-display text-xs font-bold text-blue-600 uppercase tracking-widest">
              Institutional Licensing
            </h2>
            <h3 className="font-display text-3xl sm:text-4xl font-medium text-slate-900 tracking-tight">
              Simple, Predictable Higher Ed Licensing
            </h3>
            <p className="text-xs sm:text-sm text-slate-600">
              Illustrative pricing anchors for general four-year institutions. Final pricing depends on institution enrollment and configuration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* BASIC TIER */}
            <div className="bg-white rounded-3xl p-8 ring-1 ring-slate-200 space-y-6 flex flex-col justify-between shadow-sm">
              <div className="space-y-4">
                <h4 className="font-display text-lg font-bold text-slate-900">SKORAI Visibility</h4>
                <div className="flex items-baseline gap-1">
                  <span className="font-display text-4xl font-extrabold text-slate-900">$59,500</span>
                  <span className="text-xs text-slate-500">/ year</span>
                </div>
                <p className="text-xs text-slate-600">
                  Essential unified reporting, descriptive analytics dashboards, and student retention visibility.
                </p>

                <ul className="space-y-3 text-xs text-slate-600 pt-5 border-t border-slate-100">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>SIS &amp; LMS Read-Only Connectors</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>College &amp; Department Visibility Dashboards</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>IPEDS Reporting Datasets</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>Standard Business Hours Support</span>
                  </li>
                </ul>
              </div>

              <Link
                href="/contact"
                className="group inline-flex ring-1 items-center justify-center rounded-full py-2.5 px-4 text-sm font-semibold ring-slate-200 text-slate-700 hover:text-slate-900 hover:ring-slate-300 active:bg-slate-100 transition-colors text-center w-full"
              >
                Request Quote
              </Link>
            </div>

            {/* PROFESSIONAL TIER (Featured with TaxPal style Blue container) */}
            <div className="bg-blue-600 text-white rounded-3xl p-8 space-y-6 flex flex-col justify-between relative shadow-xl ring-1 ring-blue-600">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="font-display text-lg font-bold text-white">SKORAI Intelligence</h4>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-white text-blue-600 uppercase">
                    Popular
                  </span>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="font-display text-4xl font-extrabold text-white">$135,000</span>
                  <span className="text-xs text-blue-100">/ year</span>
                </div>
                <p className="text-xs text-blue-100">
                  Predictive modeling, early retention alert pipelines, and automated advisor interventions.
                </p>

                <ul className="space-y-3 text-xs text-blue-100 pt-5 border-t border-blue-500/60">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-white shrink-0" />
                    <span>Everything in Basic, plus:</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-white shrink-0" />
                    <span>Predictive Retention &amp; DFW Algorithms</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-white shrink-0" />
                    <span>Admissions Yield Forecasting</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-white shrink-0" />
                    <span>FAFSA Verification Workflow Engine</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-white shrink-0" />
                    <span>24/7 Priority Institutional SLA</span>
                  </li>
                </ul>
              </div>

              <Link
                href="/contact"
                className="group inline-flex items-center justify-center rounded-full py-2.5 px-4 text-sm font-semibold bg-white text-blue-600 hover:bg-blue-50 transition-colors shadow-sm text-center w-full"
              >
                Request Consultation
              </Link>
            </div>

            {/* PREMIUM TIER */}
            <div className="bg-white rounded-3xl p-8 ring-1 ring-slate-200 space-y-6 flex flex-col justify-between shadow-sm">
              <div className="space-y-4">
                <h4 className="font-display text-lg font-bold text-slate-900">Institutional Decision Intelligence</h4>
                <div className="flex items-baseline gap-1">
                  <span className="font-display text-4xl font-extrabold text-slate-900">$295,000</span>
                  <span className="text-xs text-slate-500">/ year</span>
                </div>
                <p className="text-xs text-slate-600">
                  Real-time scenario simulation, executive strategic briefings, and custom SKORAI agents.
                </p>

                <ul className="space-y-3 text-xs text-slate-600 pt-5 border-t border-slate-100">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>Everything in Professional, plus:</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>Interactive Decision Simulator</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>Executive AI Briefings for Provost &amp; Board</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>Dedicated Higher Ed AI Solutions Architect</span>
                  </li>
                </ul>
              </div>

              <Link
                href="/contact"
                className="group inline-flex ring-1 items-center justify-center rounded-full py-2.5 px-4 text-sm font-semibold ring-slate-200 text-slate-700 hover:text-slate-900 hover:ring-slate-300 active:bg-slate-100 transition-colors text-center w-full"
              >
                Request Custom Proposal
              </Link>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 16. FAQ */}
        {/* ============================================================ */}
        <section className="bg-slate-50 py-20 sm:py-28 border-y border-slate-200/60">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            <div className="text-center space-y-3">
              <h2 className="font-display text-xs font-bold text-blue-600 uppercase tracking-widest">
                Common Questions
              </h2>
              <h3 className="font-display text-3xl sm:text-4xl font-medium text-slate-900 tracking-tight">
                Frequently Asked Questions
              </h3>
            </div>

            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className="rounded-2xl bg-white border border-slate-200 shadow-sm overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(openFaqIndex === i ? null : i)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-slate-50/60 transition-colors"
                  >
                    <span className="font-display font-semibold text-sm text-slate-900">{faq.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-400 transition-transform ${
                        openFaqIndex === i ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openFaqIndex === i && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 17. FINAL CTA (SaaS Kit Dark Contrast Banner) */}
        {/* ============================================================ */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="bg-slate-900 rounded-3xl p-10 sm:p-20 text-center space-y-6 shadow-2xl relative overflow-hidden">
            <h3 className="font-display text-3xl sm:text-5xl font-medium text-white tracking-tight max-w-3xl mx-auto leading-tight">
              Transform Institutional Data Into Confident Decisions.
            </h3>
            <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
              Empower your provost, deans, department chairs, and advisors with higher education decision intelligence.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link
                href="/demo"
                className="group inline-flex items-center justify-center rounded-full py-3.5 px-8 text-sm font-semibold bg-white text-slate-900 hover:bg-blue-50 active:bg-blue-100 transition-colors shadow-sm"
              >
                Explore 14 Live Demo Dashboards
              </Link>
              <Link
                href="/contact"
                className="group inline-flex ring-1 items-center justify-center rounded-full py-3.5 px-8 text-sm font-semibold ring-slate-700 text-white hover:ring-slate-500 active:ring-slate-700 transition-colors"
              >
                Schedule an Institutional Presentation
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
