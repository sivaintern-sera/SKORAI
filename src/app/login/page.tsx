"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  GraduationCap,
  Eye,
  EyeOff,
  Lock,
  Mail,
  ShieldCheck,
  ArrowRight,
  User,
  AlertCircle,
  CheckCircle2,
} from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");

    if (!email || !password) {
      setErrorMessage("Please enter both your institutional email and password.");
      return;
    }

    if (!email.includes("@")) {
      setErrorMessage("Please provide a valid institutional email address.");
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      if (email.includes("president")) {
        router.push("/dashboard/president");
      } else if (email.includes("dean")) {
        router.push("/dashboard/dean");
      } else if (email.includes("chair")) {
        router.push("/dashboard/department-chair");
      } else if (email.includes("faculty")) {
        router.push("/dashboard/faculty");
      } else if (email.includes("advisor")) {
        router.push("/dashboard/advisor");
      } else if (email.includes("student")) {
        router.push("/dashboard/student");
      } else if (email.includes("admin")) {
        router.push("/dashboard/admin");
      } else {
        setSuccessMessage("Authentication verified. Redirecting to your authorized institutional dashboard...");
        setTimeout(() => {
          router.push("/dashboard");
        }, 800);
      }
    }, 900);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between text-slate-900 font-sans selection:bg-blue-600 selection:text-white">
      {/* Top Header Bar */}
      <header className="px-6 lg:px-12 py-5 flex items-center justify-between border-b border-slate-200/80 bg-white/80 backdrop-blur-sm">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:bg-blue-500 transition-colors">
            <GraduationCap className="w-5 h-5" />
          </div>
          <div>
            <span className="font-display font-bold text-slate-900 tracking-tight text-base sm:text-lg">
              SKORAI
            </span>
            <span className="hidden sm:inline-block ml-2 text-xs text-slate-500 font-normal">
              | Northbridge State University
            </span>
          </div>
        </Link>

        <div className="flex items-center gap-3">
          <Link
            href="/demo"
            className="group inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-full bg-blue-50 text-blue-700 ring-1 ring-inset ring-blue-700/10 hover:bg-blue-100 transition-all"
          >
            <span className="hidden sm:inline">Explore</span> 14 Demo Roles
          </Link>
          <Link
            href="/"
            className="text-xs font-medium text-slate-600 hover:text-slate-900 transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </header>

      {/* Main Split-Screen Container */}
      <main className="flex-1 flex items-center justify-center p-4 sm:p-6 lg:p-12">
        <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* LEFT PANEL */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 ring-1 ring-inset ring-blue-700/10">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
                Institutional Single Sign-On &amp; Decision Portal
              </div>
              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-slate-900 leading-tight">
                Intelligence That Powers{" "}
                <span className="text-blue-600">Higher Education.</span>
              </h1>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-xl">
                Access university intelligence, institutional analytics, predictive retention modeling, and AI-powered executive decision support for Northbridge State University.
              </p>
            </div>

            {/* University Students Image */}
            <div className="relative rounded-3xl overflow-hidden border border-slate-200/80 shadow-xl group bg-white p-2">
              <div className="aspect-[16/10] sm:aspect-[16/9] relative rounded-2xl overflow-hidden">
                <Image
                  src="/images/university-students.jpg"
                  alt="Northbridge State University students collaborating in modern campus library"
                  fill
                  priority
                  className="object-cover group-hover:scale-102 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
              </div>

              {/* Overlay Stat Pill */}
              <div className="absolute bottom-6 left-6 right-6 sm:right-auto bg-white/95 backdrop-blur-md border border-slate-200 p-3 sm:p-4 rounded-2xl flex items-center gap-4 text-xs shadow-lg">
                <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 ring-1 ring-blue-700/10 flex items-center justify-center shrink-0">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-display font-semibold text-slate-900">Northbridge State University</div>
                  <div className="text-slate-500">10,000 Students &bull; 6 Colleges &bull; 24 Departments</div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT LOGIN PANEL */}
          <div className="lg:col-span-5 w-full">
            <div className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-10 shadow-xl shadow-slate-900/5 relative">
              {/* User Avatar Circle */}
              <div className="flex flex-col items-center text-center space-y-2 mb-6">
                <div className="w-14 h-14 rounded-full bg-blue-50 text-blue-600 ring-1 ring-inset ring-blue-700/10 flex items-center justify-center mb-1">
                  <User className="w-7 h-7" />
                </div>
                <h2 className="font-display text-2xl font-bold text-slate-900 tracking-tight">
                  Welcome Back
                </h2>
                <p className="text-xs text-slate-500">
                  Sign in with your institutional credentials or enter the demo platform.
                </p>
              </div>

              {/* Feedback messages */}
              {errorMessage && (
                <div className="mb-4 p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0 text-rose-500" />
                  <span>{errorMessage}</span>
                </div>
              )}
              {successMessage && (
                <div className="mb-4 p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-600" />
                  <span>{successMessage}</span>
                </div>
              )}

              {/* Form */}
              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-semibold text-slate-700 mb-1.5"
                  >
                    Institutional Email Address
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. president@northbridge.edu"
                      required
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50/70 border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label
                      htmlFor="password"
                      className="block text-xs font-semibold text-slate-700"
                    >
                      Password
                    </label>
                    <a
                      href="#forgot"
                      onClick={(e) => {
                        e.preventDefault();
                        alert("For demo evaluation, you can enter any password or click 'Explore the Demo Platform' below.");
                      }}
                      className="text-[11px] text-blue-600 hover:text-blue-700 transition-colors font-medium"
                    >
                      Forgot password?
                    </a>
                  </div>
                  <div className="relative">
                    <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••••••"
                      required
                      className="w-full pl-10 pr-10 py-2.5 rounded-xl bg-slate-50/70 border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                      aria-label={showPassword ? "Hide password" : "Show password"}
                    >
                      {showPassword ? (
                        <EyeOff className="w-4 h-4" />
                      ) : (
                        <Eye className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs text-slate-600 pt-1">
                  <label className="flex items-center gap-2 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span>Remember institutional device</span>
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full mt-2 py-3 px-4 rounded-full bg-blue-600 hover:bg-blue-500 active:bg-blue-800 text-white text-sm font-semibold shadow-md shadow-blue-500/20 transition-all flex items-center justify-center gap-2 disabled:opacity-60 cursor-pointer"
                >
                  {isLoading ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>Sign In to Institutional Portal</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>

              {/* Divider */}
              <div className="relative my-6 text-center">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-slate-200" />
                </div>
                <span className="relative px-3 bg-white text-xs font-medium text-slate-500 uppercase tracking-wider">
                  or explore live demo
                </span>
              </div>

              {/* Demo Button */}
              <Link
                href="/demo"
                className="w-full py-3 px-4 rounded-full bg-slate-900 hover:bg-slate-800 text-white text-sm font-semibold transition-all flex items-center justify-center gap-2 group shadow-sm"
              >
                <span>Explore the Demo Platform (14 Roles)</span>
                <ArrowRight className="w-4 h-4 text-slate-300" />
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* Footer / Privacy Policy */}
      <footer className="py-4 text-center text-xs text-slate-500 border-t border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>
            Authorized access only. Protected by SKORAI Multi-Factor Security.
          </span>
          <div className="flex items-center gap-4">
            <Link href="/security" className="hover:text-blue-600 transition-colors">
              FERPA &amp; Data Privacy Policy
            </Link>
            <span>&bull;</span>
            <Link href="/security" className="hover:text-blue-600 transition-colors">
              Terms of Institutional Use
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
