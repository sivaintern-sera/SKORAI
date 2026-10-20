import React from "react";
import Link from "next/link";
import { GraduationCap, ShieldCheck, Database, Award } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 text-slate-600 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-purple-700 flex items-center justify-center text-white shadow-md shadow-purple-500/20">
                <GraduationCap className="w-5 h-5" />
              </div>
              <span className="font-display font-bold text-slate-900 text-xl tracking-tight">
                SKORAI
              </span>
            </Link>
            <p className="text-slate-600 max-w-sm text-sm leading-relaxed">
              The premier higher education decision intelligence platform engineered specifically for American general four-year universities. Connecting data, analytics, predictive modeling, and executive governance.
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <div className="flex items-center gap-1.5 text-xs text-slate-700 bg-white px-3 py-1.5 rounded-full border border-slate-200 shadow-sm">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>FERPA-Aware Architecture</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-slate-700 bg-white px-3 py-1.5 rounded-full border border-slate-200 shadow-sm">
                <Database className="w-3.5 h-3.5 text-purple-700" />
                <span>PostgreSQL Cloud</span>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="font-display text-xs font-semibold text-slate-900 tracking-wider uppercase mb-4">
              Platform & Tech
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/platform" className="hover:text-purple-700 transition-colors">
                  Platform Architecture
                </Link>
              </li>
              <li>
                <Link href="/features" className="hover:text-purple-700 transition-colors">
                  Decision Intelligence
                </Link>
              </li>
              <li>
                <Link href="/features" className="hover:text-purple-700 transition-colors">
                  Predictive Analytics
                </Link>
              </li>
              <li>
                <Link href="/features" className="hover:text-purple-700 transition-colors">
                  AI Governance & Guardrails
                </Link>
              </li>
              <li>
                <Link href="/security" className="hover:text-purple-700 transition-colors">
                  Enterprise Security
                </Link>
              </li>
            </ul>
          </div>

          {/* Solutions by Role */}
          <div>
            <h4 className="font-display text-xs font-semibold text-slate-900 tracking-wider uppercase mb-4">
              Campus Solutions
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/solutions#president" className="hover:text-purple-700 transition-colors">
                  Presidents & Provosts
                </Link>
              </li>
              <li>
                <Link href="/solutions#deans" className="hover:text-purple-700 transition-colors">
                  Deans & Academic Chairs
                </Link>
              </li>
              <li>
                <Link href="/solutions#advisors" className="hover:text-purple-700 transition-colors">
                  Advisors & Student Success
                </Link>
              </li>
              <li>
                <Link href="/solutions#retention" className="hover:text-purple-700 transition-colors">
                  Institutional Effectiveness
                </Link>
              </li>
              <li>
                <Link href="/solutions#finance" className="hover:text-purple-700 transition-colors">
                  Chief Financial Officers
                </Link>
              </li>
            </ul>
          </div>

          {/* Demo & Access */}
          <div>
            <h4 className="font-display text-xs font-semibold text-slate-900 tracking-wider uppercase mb-4">
              Experience Platform
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/demo" className="text-purple-700 font-semibold hover:text-purple-800 transition-colors">
                  Explore 14 Demo Roles &rarr;
                </Link>
              </li>
              <li>
                <Link href="/login" className="hover:text-purple-700 transition-colors">
                  Institutional Login
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-purple-700 transition-colors">
                  Pricing & Tiers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-purple-700 transition-colors">
                  Schedule Demonstration
                </Link>
              </li>
              <li>
                <Link href="/security" className="hover:text-purple-700 transition-colors">
                  Compliance Certifications
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            &copy; 2026 SKORAI. All rights reserved. Fictional demo environment configured for Northbridge State University.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-slate-600 font-medium">United States Higher Education</span>
            <Link href="/security" className="hover:text-purple-700">
              Privacy Policy
            </Link>
            <Link href="/security" className="hover:text-purple-700">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

