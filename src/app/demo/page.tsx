"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  GraduationCap,
  Search,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Users,
  Compass,
  Briefcase,
  Layers,
} from "lucide-react";
import { DEMO_ACCOUNTS } from "@/lib/demo-accounts";
import { DemoAccount } from "@/types";
import { createDemoSession, saveClientDemoSession } from "@/lib/demo-session";

export default function DemoSelectionPage() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All Roles");
  const [launchingId, setLaunchingId] = useState<string | null>(null);

  const categories = [
    "All Roles",
    "Executive & Governance",
    "Academic Leadership",
    "Faculty & Advising",
    "Student",
    "Operational & Compliance",
    "Administration",
  ];

  const filteredAccounts = useMemo(() => {
    return DEMO_ACCOUNTS.filter((acc) => {
      const matchesCategory =
        selectedCategory === "All Roles" || acc.category === selectedCategory;

      const q = searchQuery.toLowerCase();
      const matchesSearch =
        acc.name.toLowerCase().includes(q) ||
        acc.roleTitle.toLowerCase().includes(q) ||
        acc.email.toLowerCase().includes(q) ||
        acc.accessDescription.toLowerCase().includes(q) ||
        (acc.department && acc.department.toLowerCase().includes(q)) ||
        (acc.college && acc.college.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  const handleLaunchDemo = (account: DemoAccount) => {
    setLaunchingId(account.id);
    const session = createDemoSession(account);
    saveClientDemoSession(session);

    setTimeout(() => {
      router.push(account.dashboardRoute);
    }, 600);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col justify-between font-sans selection:bg-purple-700 selection:text-white">
      {/* Top Header */}
      <header className="px-6 lg:px-12 py-5 border-b border-slate-200 bg-white/90 backdrop-blur sticky top-0 z-40">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-purple-700 flex items-center justify-center text-white shadow-md shadow-purple-500/20 group-hover:bg-purple-500 transition-colors">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <span className="font-display font-bold text-slate-900 tracking-tight text-lg">
                SKORAI
              </span>
              <span className="hidden sm:inline-block ml-2 text-xs text-slate-500 font-normal">
                | Interactive Demo Account Selector
              </span>
            </div>
          </Link>

          <div className="flex items-center gap-3">
            <Link
              href="/login"
              className="text-xs font-medium text-slate-700 hover:text-slate-900 px-3.5 py-1.5 rounded-full ring-1 ring-slate-200 bg-white hover:bg-slate-50 transition-colors shadow-sm"
            >
              Sign In
            </Link>
            <Link
              href="/"
              className="text-xs font-medium text-slate-500 hover:text-slate-800 transition-colors"
            >
              Exit to Home
            </Link>
          </div>
        </div>
      </header>

      {/* Hero & Filter Section */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-purple-50 text-purple-800 ring-1 ring-inset ring-purple-800/10">
            <span>Interactive Demo Environment &bull; Northbridge State University</span>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium text-slate-900 tracking-tight">
            Select a University Role to Launch
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Experience role-specific institutional intelligence with pre-loaded synthetic university data. Select any of the 14 institutional personas below to launch an isolated demo session.
          </p>
        </div>

        {/* Search & Categories Bar */}
        <div className="space-y-4 max-w-4xl mx-auto">
          {/* Search Input */}
          <div className="relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by role title, person name, email, department, or keyword..."
              className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-purple-700 shadow-sm transition-all"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-slate-500 hover:text-slate-800 px-2 py-1 rounded-full bg-slate-100"
              >
                Clear
              </button>
            )}
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-150 ${
                  selectedCategory === category
                    ? "bg-purple-700 text-white shadow-sm"
                    : "bg-white text-slate-700 hover:text-slate-900 ring-1 ring-slate-200 hover:bg-slate-50 shadow-sm"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* 14 Role Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
          {filteredAccounts.map((account) => {
            const isLaunching = launchingId === account.id;

            return (
              <div
                key={account.id}
                className="group relative bg-white hover:bg-white border border-slate-200/80 hover:border-purple-500/50 rounded-2xl p-6 transition-all duration-200 flex flex-col justify-between shadow-sm hover:shadow-md"
              >
                <div className="space-y-4">
                  {/* Top Bar: Category badge & Role Title */}
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <span className="text-[11px] font-semibold text-purple-800 bg-purple-50 px-2.5 py-0.5 rounded-full ring-1 ring-inset ring-purple-800/10 uppercase tracking-wider inline-block">
                        {account.category}
                      </span>
                      <h3 className="font-display text-lg font-bold text-slate-900 group-hover:text-purple-700 transition-colors mt-2">
                        {account.roleTitle}
                      </h3>
                    </div>
                    <span className="shrink-0 w-8 h-8 rounded-lg bg-purple-50 text-purple-800 ring-1 ring-purple-800/10 flex items-center justify-center font-bold text-xs">
                      {account.roleTitle.substring(0, 2).toUpperCase()}
                    </span>
                  </div>

                  {/* Profile info */}
                  <div className="bg-slate-50 rounded-xl p-3.5 border border-slate-200/80 space-y-1">
                    <div className="text-sm font-semibold text-slate-900 flex items-center justify-between">
                      <span>{account.name}</span>
                      <span className="text-[10px] text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded-full ring-1 ring-emerald-600/20">
                        Active Demo
                      </span>
                    </div>
                    <div className="text-xs text-slate-500 truncate">
                      {account.title}
                    </div>
                    <div className="text-xs text-purple-700 font-mono font-medium truncate">
                      {account.email}
                    </div>
                  </div>

                  {/* Access Description */}
                  <p className="text-xs text-slate-600 leading-relaxed min-h-[3rem]">
                    {account.accessDescription}
                  </p>

                  {/* Metric previews */}
                  <div className="grid grid-cols-3 gap-2 pt-2 border-t border-slate-100">
                    {account.statsPreview.map((stat, i) => (
                      <div key={i} className="text-center p-2 rounded-lg bg-slate-50 border border-slate-100">
                        <div className="text-[10px] text-slate-500 truncate">{stat.label}</div>
                        <div className="font-display text-xs font-bold text-slate-900 mt-0.5">{stat.value}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Launch Action Button */}
                <div className="pt-6">
                  <button
                    type="button"
                    onClick={() => handleLaunchDemo(account)}
                    disabled={Boolean(launchingId)}
                    className="w-full py-2.5 px-4 rounded-full bg-purple-700 hover:bg-purple-500 active:bg-purple-900 text-white text-xs sm:text-sm font-semibold shadow-sm transition-all flex items-center justify-center gap-2 group/btn disabled:opacity-50 cursor-pointer"
                  >
                    {isLaunching ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Initializing Isolated Session...</span>
                      </div>
                    ) : (
                      <>
                        <span>Launch {account.roleTitle} Demo</span>
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {filteredAccounts.length === 0 && (
          <div className="text-center py-16 bg-white rounded-2xl border border-slate-200 shadow-sm">
            <p className="text-slate-500 text-sm">
              No demo accounts match your search query &quot;{searchQuery}&quot;.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All Roles");
              }}
              className="mt-3 text-xs text-purple-700 hover:text-purple-800 font-semibold"
            >
              Reset filters
            </button>
          </div>
        )}
      </main>

      {/* Footer info */}
      <footer className="mt-16 py-6 border-t border-slate-200 text-center text-xs text-slate-500 px-4 bg-white">
        <p>
          Demo environment isolation: Synthetic records for Northbridge State University are loaded exclusively in client memory &amp; session context. Real production data is never exposed.
        </p>
      </footer>
    </div>
  );
}

