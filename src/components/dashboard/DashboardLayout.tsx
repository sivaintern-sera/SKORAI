"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  GraduationCap,
  LayoutDashboard,
  BarChart3,
  FileText,
  Lightbulb,
  Bell,
  Settings,
  Search,
  LogOut,
  ChevronDown,
  Calendar,
  Download,
  ShieldAlert,
  Sliders,
  CheckCircle,
  Menu,
  X,
  UserCheck,
  TrendingUp,
  HelpCircle,
  ArrowRight,
  ExternalLink,
} from "lucide-react";
import { DEMO_ACCOUNTS } from "@/lib/demo-accounts";
import { getClientDemoSession, clearClientDemoSession, saveClientDemoSession, createDemoSession } from "@/lib/demo-session";
import { UserRole } from "@/types";

interface DashboardLayoutProps {
  children: React.ReactNode;
  activeRole: UserRole;
  title: string;
  subtitle: string;
}

export function DashboardLayout({
  children,
  activeRole,
  title,
  subtitle,
}: DashboardLayoutProps) {
  const pathname = usePathname();
  const router = useRouter();

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [roleSwitcherOpen, setRoleSwitcherOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [selectedTerm, setSelectedTerm] = useState("Fall 2026 (Current)");
  const [isExporting, setIsExporting] = useState(false);
  const [exportSuccess, setExportSuccess] = useState(false);

  // Active persona
  const currentAccount = DEMO_ACCOUNTS.find((a) => a.role === activeRole) || DEMO_ACCOUNTS[0];

  const handleExitDemo = () => {
    clearClientDemoSession();
    router.push("/demo");
  };

  const handleSwitchRole = (newRole: UserRole) => {
    const acc = DEMO_ACCOUNTS.find((a) => a.role === newRole);
    if (acc) {
      const session = createDemoSession(acc);
      saveClientDemoSession(session);
      setRoleSwitcherOpen(false);
      router.push(acc.dashboardRoute);
    }
  };

  const handleExportCsv = () => {
    setIsExporting(true);
    setTimeout(() => {
      setIsExporting(false);
      setExportSuccess(true);
      setTimeout(() => setExportSuccess(false), 3000);

      const csvData = `Institution,Term,ExportDate,Role,MetricsReport\n"Northbridge State University","${selectedTerm}","${new Date().toISOString()}","${currentAccount.roleTitle}","Official Institutional Intelligence Extract"`;
      const blob = new Blob([csvData], { type: "text/csv;charset=utf-8;" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.setAttribute("href", url);
      link.setAttribute("download", `NSU_${activeRole}_report_${Date.now()}.csv`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }, 600);
  };

  const navItems = [
    { name: "Overview", icon: LayoutDashboard, href: currentAccount.dashboardRoute },
    { name: "Analytics & KPIs", icon: BarChart3, href: `${currentAccount.dashboardRoute}#analytics` },
    { name: "AI Intelligence", icon: Lightbulb, href: `${currentAccount.dashboardRoute}#insights` },
    { name: "Decision Simulator", icon: Sliders, href: `${currentAccount.dashboardRoute}#simulator` },
    { name: "Institutional Reports", icon: FileText, href: `${currentAccount.dashboardRoute}#reports` },
    { name: "Security & Governance", icon: ShieldAlert, href: `${currentAccount.dashboardRoute}#governance` },
    { name: "Profile & Credentials", icon: UserCheck, href: "/dashboard/profile" },
  ];

  return (
    <div className="h-screen max-h-screen overflow-hidden bg-[#F8FAFC] text-slate-900 flex flex-col font-sans antialiased selection:bg-purple-700 selection:text-white">
      {/* Top Banner: Prominent DEMO ENVIRONMENT notice */}
      <div className="shrink-0 bg-slate-900 border-b border-slate-800 px-4 py-2 flex items-center justify-between text-xs text-white z-30">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full font-bold bg-purple-700 text-white text-[10px] tracking-wide uppercase shadow-sm">
            Demo Environment
          </span>
          <span className="hidden sm:inline text-slate-300">
            Isolated synthetic university sandbox &bull; Northbridge State University (10,000 Students)
          </span>
        </div>

        <div className="flex items-center gap-3">
          {/* Quick role switcher dropdown */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setRoleSwitcherOpen(!roleSwitcherOpen)}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs transition-colors border border-slate-700 shadow-sm cursor-pointer"
            >
              <span>Switch Role: <strong className="text-white font-semibold">{currentAccount.roleTitle}</strong></span>
              <ChevronDown className="w-3 h-3 text-slate-400" />
            </button>

            {roleSwitcherOpen && (
              <div className="absolute right-0 mt-2 w-72 bg-white border border-slate-200 rounded-2xl shadow-xl py-2 z-50 max-h-96 overflow-y-auto text-slate-900">
                <div className="px-3.5 py-2 text-[11px] font-bold text-slate-400 uppercase tracking-wider border-b border-slate-100">
                  Select Persona (14 Dashboards)
                </div>
                {DEMO_ACCOUNTS.map((acc) => (
                  <button
                    key={acc.id}
                    type="button"
                    onClick={() => handleSwitchRole(acc.role)}
                    className={`w-full text-left px-3.5 py-2 text-xs flex items-center justify-between hover:bg-slate-50 transition-colors ${
                      acc.role === activeRole ? "bg-purple-50 text-purple-800 font-semibold" : "text-slate-700"
                    }`}
                  >
                    <div>
                      <div className="font-semibold">{acc.roleTitle}</div>
                      <div className="text-[10px] text-slate-500 truncate">{acc.name}</div>
                    </div>
                    {acc.role === activeRole && (
                      <CheckCircle className="w-3.5 h-3.5 text-purple-700 shrink-0" />
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Exit Demo Button */}
          <button
            type="button"
            onClick={handleExitDemo}
            className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-slate-800 hover:bg-rose-950/60 text-slate-300 hover:text-rose-300 border border-slate-700 hover:border-rose-800 text-xs font-medium transition-colors cursor-pointer"
          >
            <LogOut className="w-3 h-3" />
            <span>Exit Demo</span>
          </button>
        </div>
      </div>

      <div className="flex-1 flex overflow-hidden min-h-0">
        {/* LEFT SIDEBAR (Desktop & Drawer) */}
        <aside
          className={`fixed inset-y-0 left-0 z-40 w-64 bg-slate-900 border-r border-slate-800 transition-transform duration-200 lg:static lg:translate-x-0 shrink-0 h-full flex flex-col overflow-hidden ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="h-full flex flex-col justify-between py-6 px-4 overflow-y-auto">
            <div className="space-y-6">
              {/* Institution Identity */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <Link href="/" className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-purple-700 flex items-center justify-center text-white shadow-md shadow-purple-500/20">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-display font-bold text-white text-sm tracking-tight leading-none">
                      NORTHBRIDGE
                    </div>
                    <div className="text-[10px] text-purple-400 font-semibold tracking-wider mt-0.5">
                      STATE UNIVERSITY
                    </div>
                  </div>
                </Link>
                <button
                  type="button"
                  onClick={() => setSidebarOpen(false)}
                  className="lg:hidden p-1 text-slate-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Active Role Card in Sidebar */}
              <Link
                href="/dashboard/profile"
                className="block bg-slate-800/80 hover:bg-slate-800 rounded-xl p-3.5 border border-slate-700/60 shadow-sm transition-all group cursor-pointer"
                title="View Profile & Credentials"
              >
                <div className="flex items-center gap-2.5 mb-1.5">
                  <div className="w-8 h-8 rounded-lg bg-purple-700/30 text-purple-400 border border-purple-500/40 flex items-center justify-center font-bold text-xs shrink-0 group-hover:bg-purple-700 group-hover:text-white transition-colors">
                    {currentAccount.name.charAt(0)}
                  </div>
                  <div className="overflow-hidden flex-1">
                    <div className="text-xs font-semibold text-white truncate flex items-center justify-between">
                      <span className="truncate">{currentAccount.name}</span>
                      <ArrowRight className="w-3 h-3 text-slate-500 group-hover:text-purple-400 group-hover:translate-x-0.5 transition-all" />
                    </div>
                    <div className="text-[10px] text-purple-300 font-medium truncate">
                      {currentAccount.roleTitle}
                    </div>
                  </div>
                </div>
                <div className="text-[10px] text-slate-400 line-clamp-1 flex items-center justify-between pt-1 border-t border-slate-700/40">
                  <span className="truncate">{currentAccount.institution}</span>
                  <span className="text-[9px] text-purple-400 font-medium shrink-0 ml-1">Profile &rarr;</span>
                </div>
              </Link>

              {/* Navigation Items */}
              <nav className="space-y-1">
                <div className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider px-3 mb-2 font-display">
                  Platform Views
                </div>
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setSidebarOpen(false)}
                      className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-medium transition-all ${
                        isActive
                          ? "bg-purple-700 text-white shadow-sm"
                          : "text-slate-300 hover:bg-slate-800 hover:text-white"
                      }`}
                    >
                      <Icon className="w-4 h-4 shrink-0" />
                      <span>{item.name}</span>
                    </Link>
                  );
                })}
              </nav>

              {/* Quick Jump to Other Dashboards */}
              <div className="pt-2 border-t border-slate-800">
                <div className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider px-3 mb-2 flex items-center justify-between font-display">
                  <span>Other Roles</span>
                  <Link href="/demo" className="text-purple-400 hover:underline">
                    All 14
                  </Link>
                </div>
                <div className="space-y-1">
                  {DEMO_ACCOUNTS.filter((a) => a.role !== activeRole)
                    .slice(0, 4)
                    .map((acc) => (
                      <button
                        key={acc.id}
                        type="button"
                        onClick={() => handleSwitchRole(acc.role)}
                        className="w-full text-left px-3 py-1.5 rounded-lg text-[11px] text-slate-400 hover:text-white hover:bg-slate-800 transition-colors truncate flex items-center justify-between cursor-pointer"
                      >
                        <span className="truncate">{acc.roleTitle}</span>
                        <ArrowRight className="w-3 h-3 text-slate-600" />
                      </button>
                    ))}
                </div>
              </div>
            </div>

            {/* Sidebar Bottom */}
            <div className="pt-4 border-t border-slate-800 space-y-2">
              <Link
                href="/platform"
                className="flex items-center gap-2 px-3 py-2 text-xs text-slate-400 hover:text-slate-200 transition-colors"
              >
                <HelpCircle className="w-4 h-4" />
                <span>Architecture Guide</span>
              </Link>
              <button
                type="button"
                onClick={handleExitDemo}
                className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-xs text-rose-400 hover:bg-rose-950/40 hover:text-rose-300 transition-colors cursor-pointer"
              >
                <LogOut className="w-4 h-4" />
                <span>Exit Demo Session</span>
              </button>
            </div>
          </div>
        </aside>

        {/* Backdrop for mobile drawer */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-slate-900/60 z-30 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* MAIN CONTENT AREA */}
        <div className="flex-1 flex flex-col min-w-0 min-h-0 overflow-y-auto">
          {/* Top Bar */}
          <header className="sticky top-0 z-20 shrink-0 bg-white/95 backdrop-blur-md border-b border-slate-200/80 px-4 sm:px-8 py-3.5 flex items-center justify-between gap-4 text-slate-900 shadow-xs">
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100"
              >
                <Menu className="w-5 h-5" />
              </button>
              <div>
                <h2 className="font-display text-base sm:text-lg font-bold text-slate-900 tracking-tight flex items-center gap-2">
                  <span>{title}</span>
                  <span className="hidden md:inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-purple-50 text-purple-800 ring-1 ring-inset ring-purple-800/10">
                    {currentAccount.roleTitle}
                  </span>
                </h2>
                <p className="text-xs text-slate-500 hidden sm:block truncate">
                  {subtitle}
                </p>
              </div>
            </div>

            {/* Actions: Search, Term selector, Notifications, Profile */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Search Toggle */}
              <button
                type="button"
                onClick={() => setSearchModalOpen(true)}
                className="p-2 sm:px-3 sm:py-1.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-100 text-xs flex items-center gap-2 transition-colors cursor-pointer"
                title="Search institutional data"
              >
                <Search className="w-4 h-4 text-slate-400" />
                <span className="hidden md:inline text-xs">Search records...</span>
                <kbd className="hidden lg:inline-block px-1.5 py-0.5 text-[9px] bg-white border border-slate-200 text-slate-400 rounded">
                  Ctrl+K
                </kbd>
              </button>

              {/* Term Selector */}
              <div className="relative hidden sm:block">
                <select
                  value={selectedTerm}
                  onChange={(e) => setSelectedTerm(e.target.value)}
                  className="bg-white border border-slate-200 text-slate-700 text-xs rounded-xl px-3 py-1.5 focus:outline-none focus:ring-1 focus:ring-purple-700 shadow-xs"
                >
                  <option>Fall 2026 (Current)</option>
                  <option>Spring 2026</option>
                  <option>Academic Year 2025-26</option>
                  <option>5-Year Longitudinal Trend</option>
                </select>
              </div>

              {/* CSV Export */}
              <button
                type="button"
                onClick={handleExportCsv}
                disabled={isExporting}
                className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold shadow-xs transition-colors cursor-pointer"
                title="Export role data report to CSV"
              >
                <Download className="w-3.5 h-3.5" />
                <span>{isExporting ? "Exporting..." : exportSuccess ? "Exported!" : "Export CSV"}</span>
              </button>

              {/* Notifications Bell */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setNotificationsOpen(!notificationsOpen)}
                  className="p-2 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-600 hover:text-slate-900 relative transition-colors cursor-pointer"
                  aria-label="Notifications"
                >
                  <Bell className="w-4 h-4" />
                  <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-purple-700 animate-pulse" />
                </button>

                {notificationsOpen && (
                  <div className="absolute right-0 mt-2 w-80 sm:w-96 bg-white border border-slate-200 rounded-2xl shadow-xl p-4 z-50 text-slate-900">
                    <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-3">
                      <div className="font-display font-semibold text-xs text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                        <Bell className="w-3.5 h-3.5 text-purple-700" />
                        <span>Institutional Alerts</span>
                      </div>
                      <span className="text-[10px] font-semibold text-purple-800 bg-purple-50 px-2 py-0.5 rounded-full ring-1 ring-inset ring-purple-800/10">
                        3 New Alerts
                      </span>
                    </div>

                    <div className="space-y-2.5 max-h-72 overflow-y-auto">
                      <div className="p-3 rounded-xl bg-amber-50/70 border border-amber-200/70 text-xs">
                        <div className="font-semibold text-amber-900 flex items-center justify-between">
                          <span>Retention Warning</span>
                          <span className="text-[10px] text-amber-700 font-medium">10m ago</span>
                        </div>
                        <p className="text-amber-800 text-[11px] mt-1">
                          14 first-time freshmen in College of Engineering flagged for LMS inactivity.
                        </p>
                      </div>

                      <div className="p-3 rounded-xl bg-purple-50/70 border border-purple-200/70 text-xs">
                        <div className="font-semibold text-purple-950 flex items-center justify-between">
                          <span>Admissions Yield Update</span>
                          <span className="text-[10px] text-purple-800 font-medium">1h ago</span>
                        </div>
                        <p className="text-purple-900 text-[11px] mt-1">
                          Deposit velocity for out-of-state applicants is +4.2% above baseline.
                        </p>
                      </div>

                      <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                        <div className="font-semibold text-slate-900 flex items-center justify-between">
                          <span>AI Intelligence Briefing</span>
                          <span className="text-[10px] text-slate-500 font-medium">3h ago</span>
                        </div>
                        <p className="text-slate-600 text-[11px] mt-1">
                          Simulated financial model updated with revised state appropriation formula.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* User Avatar & Info */}
              <Link
                href="/dashboard/profile"
                className="flex items-center gap-2 pl-2 border-l border-slate-200 hover:opacity-85 transition-opacity cursor-pointer group"
                title="View Profile & Credentials"
              >
                <div className="w-8 h-8 rounded-full bg-purple-700 group-hover:bg-purple-800 flex items-center justify-center font-bold text-white text-xs shadow-sm transition-colors">
                  {currentAccount.name.charAt(0)}
                </div>
                <div className="hidden xl:block text-left">
                  <div className="text-xs font-semibold text-slate-900 leading-tight group-hover:text-purple-700 transition-colors">
                    {currentAccount.name}
                  </div>
                  <div className="text-[10px] text-slate-500 truncate max-w-[130px]">
                    {currentAccount.email}
                  </div>
                </div>
              </Link>
            </div>
          </header>

          {/* Main Dashboard Body */}
          <main className="flex-1 p-4 sm:p-6 lg:p-8 space-y-8 max-w-7xl w-full mx-auto">
            {children}
          </main>
        </div>
      </div>

      {/* Global Search Modal */}
      {searchModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white border border-slate-200 rounded-3xl w-full max-w-2xl p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="font-display font-semibold text-sm text-slate-900 flex items-center gap-2">
                <Search className="w-4 h-4 text-purple-700" />
                <span>Search Institutional Data &amp; Student Records</span>
              </div>
              <button
                type="button"
                onClick={() => setSearchModalOpen(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <input
              type="text"
              autoFocus
              placeholder="Search students by name or ID, course codes, departments, retention flags..."
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-purple-700"
            />
            <div className="text-xs text-slate-500">
              Try searching: <span className="text-purple-700 font-semibold cursor-pointer">Michael Brown</span>, <span className="text-purple-700 font-semibold cursor-pointer">CS 220</span>, <span className="text-purple-700 font-semibold cursor-pointer">Pell Grant</span>, or <span className="text-purple-700 font-semibold cursor-pointer">Retention Risk &gt; 70</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

