"use client";

import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import {
  Database,
  BrainCircuit,
  ShieldCheck,
  Workflow,
  Cpu,
  Layers,
  ArrowRight,
  CheckCircle,
  Server,
  Lock,
} from "lucide-react";

export default function PlatformOverviewPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans flex flex-col">
      <Navbar />

      <main className="flex-1 py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-20">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200/60">
            <Cpu className="w-3.5 h-3.5 text-blue-600" />
            <span>Platform Technical Architecture</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-display font-bold text-slate-900 tracking-tight">
            Institutional Decision Intelligence Architecture
          </h1>
          <p className="text-slate-600 text-base leading-relaxed">
            Engineered exclusively for American four-year universities to connect disparate campus operational data into a unified, predictive intelligence layer.
          </p>
        </div>

        {/* 4 Architectural Layers */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow space-y-4">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
              <Database className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-display font-bold text-slate-900">1. Unified University Data Ingestion</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Real-time and batch ELT connectors harvest data across your Student Information System (Ellucian Banner, Workday Student, PeopleSoft), LMS (Canvas, Blackboard), and CRM (Slate). Data is mapped to standard higher education schemas.
            </p>
            <ul className="text-xs text-slate-500 space-y-2 pt-2 border-t border-slate-100">
              <li className="flex items-center gap-2 font-medium">&bull; Automated FERPA PII sanitization pipelines</li>
              <li className="flex items-center gap-2 font-medium">&bull; Incremental CDC (Change Data Capture) sync</li>
            </ul>
          </div>

          <div className="p-8 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow space-y-4">
            <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
              <BrainCircuit className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-display font-bold text-slate-900">2. Predictive Modeling &amp; Machine Learning</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Machine learning models continuously evaluate multi-dimensional signals—such as LMS interaction drops, gateway course midterm scores, and FAFSA verification holds—to forecast retention risks and admissions deposit yields.
            </p>
            <ul className="text-xs text-slate-500 space-y-2 pt-2 border-t border-slate-100">
              <li className="flex items-center gap-2 font-medium">&bull; Longitudinal multi-cohort training sets</li>
              <li className="flex items-center gap-2 font-medium">&bull; Explainable AI rationales for every flagged alert</li>
            </ul>
          </div>

          <div className="p-8 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow space-y-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <Workflow className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-display font-bold text-slate-900">3. Decision Simulation Engine</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Provides university leaders with sandbox simulation controls to model the budgetary and resource implications of enrollment declines, state funding cuts, retention improvements, and tuition changes before policy implementation.
            </p>
            <ul className="text-xs text-slate-500 space-y-2 pt-2 border-t border-slate-100">
              <li className="flex items-center gap-2 font-medium">&bull; Real-time recalculated operating margin curves</li>
              <li className="flex items-center gap-2 font-medium">&bull; Dynamic instructional staffing FTE calculations</li>
            </ul>
          </div>

          <div className="p-8 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow space-y-4">
            <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
              <Lock className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-display font-bold text-slate-900">4. Institutional RBAC &amp; Governance</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Enforces strict tenant isolation and PostgreSQL Row Level Security. 14 distinct institutional roles guarantee that students see only their own data, faculty see assigned courses, and board members see aggregated governance KPIs.
            </p>
            <ul className="text-xs text-slate-500 space-y-2 pt-2 border-t border-slate-100">
              <li className="flex items-center gap-2 font-medium">&bull; 7-year immutable audit log retention</li>
              <li className="flex items-center gap-2 font-medium">&bull; Single Sign-On (SSO) via SAML 2.0 / Okta / Azure AD</li>
            </ul>
          </div>
        </div>

        {/* Call to action */}
        <div className="p-10 rounded-3xl bg-blue-600 text-white text-center space-y-4 shadow-xl">
          <h3 className="text-3xl font-display font-bold text-white">Experience the Platform in Action</h3>
          <p className="text-sm text-blue-100 max-w-xl mx-auto leading-relaxed">
            Test the live platform loaded with Northbridge State University&apos;s 10,000-student synthetic dataset.
          </p>
          <div className="pt-2">
            <Link
              href="/demo"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-blue-600 font-semibold text-sm hover:bg-blue-50 transition-colors shadow-sm"
            >
              <span>Explore 14 Live Roles</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
