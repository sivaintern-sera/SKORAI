"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { getClientDemoSession } from "@/lib/demo-session";
import { DEMO_ACCOUNTS } from "@/lib/demo-accounts";

export default function DashboardEntryPage() {
  const router = useRouter();

  useEffect(() => {
    const session = getClientDemoSession();
    if (session && session.role) {
      const acc = DEMO_ACCOUNTS.find((a) => a.role === session.role);
      if (acc) {
        router.replace(acc.dashboardRoute);
        return;
      }
    }
    // Default institutional dashboard entry is President / Provost
    router.replace("/dashboard/president");
  }, [router]);

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center text-slate-600 font-sans">
      <div className="flex flex-col items-center gap-3">
        <div className="w-8 h-8 border-3 border-blue-600 border-t-transparent rounded-full animate-spin" />
        <span className="text-sm font-medium tracking-wide text-slate-700">
          Verifying Institutional Authorization &amp; Routing...
        </span>
      </div>
    </div>
  );
}
