import { DemoAccount, UserRole } from "@/types";
import { getDemoAccountByRole, getDemoAccountById } from "./demo-accounts";

export interface DemoSessionData {
  role: UserRole;
  accountId: string;
  name: string;
  email: string;
  institution: string;
  department?: string;
  college?: string;
  title: string;
  expiresAt: number;
}

const DEMO_STORAGE_KEY = "nsu_active_demo_session";

export function createDemoSession(account: DemoAccount): DemoSessionData {
  return {
    role: account.role,
    accountId: account.id,
    name: account.name,
    email: account.email,
    institution: account.institution,
    department: account.department,
    college: account.college,
    title: account.title,
    expiresAt: Date.now() + 24 * 60 * 60 * 1000, // 24 hours
  };
}

export function saveClientDemoSession(session: DemoSessionData): void {
  if (typeof window !== "undefined") {
    localStorage.setItem(DEMO_STORAGE_KEY, JSON.stringify(session));
    document.cookie = `nsu_demo_role=${session.role}; path=/; max-age=86400; SameSite=Lax`;
  }
}

export function getClientDemoSession(): DemoSessionData | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(DEMO_STORAGE_KEY);
    if (!raw) return null;
    const session = JSON.parse(raw) as DemoSessionData;
    if (session.expiresAt < Date.now()) {
      clearClientDemoSession();
      return null;
    }
    return session;
  } catch {
    return null;
  }
}

export function clearClientDemoSession(): void {
  if (typeof window !== "undefined") {
    localStorage.removeItem(DEMO_STORAGE_KEY);
    document.cookie = "nsu_demo_role=; path=/; max-age=0";
  }
}

// Role Authorization Matrix (Section 15 & Section 25)
const ROLE_DASHBOARD_PERMISSIONS: Record<UserRole, string[]> = {
  president: ["/dashboard/president", "/dashboard/board", "/dashboard/institutional-effectiveness"],
  dean: ["/dashboard/dean", "/dashboard/department-chair"],
  "department-chair": ["/dashboard/department-chair"],
  faculty: ["/dashboard/faculty"],
  advisor: ["/dashboard/advisor"],
  student: ["/dashboard/student"],
  admissions: ["/dashboard/admissions"],
  "financial-aid": ["/dashboard/financial-aid"],
  "career-services": ["/dashboard/career-services"],
  "institutional-effectiveness": ["/dashboard/institutional-effectiveness"],
  accreditation: ["/dashboard/accreditation"],
  executive: ["/dashboard/executive"],
  board: ["/dashboard/board"],
  admin: [
    "/dashboard/admin",
    "/dashboard/president",
    "/dashboard/dean",
    "/dashboard/department-chair",
    "/dashboard/faculty",
    "/dashboard/advisor",
    "/dashboard/student",
    "/dashboard/admissions",
    "/dashboard/financial-aid",
    "/dashboard/career-services",
    "/dashboard/institutional-effectiveness",
    "/dashboard/accreditation",
    "/dashboard/executive",
    "/dashboard/board",
  ],
};

export function isAuthorizedForPath(role: UserRole, pathname: string): boolean {
  if (pathname.startsWith("/dashboard/profile")) return true;
  if (role === "admin") return true;
  const allowed = ROLE_DASHBOARD_PERMISSIONS[role] || [];
  return allowed.some((prefix) => pathname.startsWith(prefix));
}
