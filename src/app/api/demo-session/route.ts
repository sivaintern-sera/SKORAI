import { NextRequest, NextResponse } from "next/server";
import { DEMO_ACCOUNTS } from "@/lib/demo-accounts";
import { UserRole } from "@/types";

export async function GET(request: NextRequest) {
  const roleCookie = request.cookies.get("nsu_demo_role")?.value;
  if (!roleCookie) {
    return NextResponse.json({ authenticated: false, session: null });
  }

  const account = DEMO_ACCOUNTS.find((a) => a.role === roleCookie);
  if (!account) {
    return NextResponse.json({ authenticated: false, session: null });
  }

  return NextResponse.json({
    authenticated: true,
    session: {
      role: account.role,
      name: account.name,
      email: account.email,
      institution: account.institution,
      roleTitle: account.roleTitle,
      dashboardRoute: account.dashboardRoute,
    },
  });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { role } = body as { role: UserRole };

    const account = DEMO_ACCOUNTS.find((a) => a.role === role);
    if (!account) {
      return NextResponse.json({ error: "Invalid demo role specified" }, { status: 400 });
    }

    const response = NextResponse.json({
      success: true,
      role: account.role,
      dashboardRoute: account.dashboardRoute,
    });

    response.cookies.set("nsu_demo_role", account.role, {
      path: "/",
      maxAge: 86400, // 24 hours
      sameSite: "lax",
      httpOnly: false,
    });

    return response;
  } catch {
    return NextResponse.json({ error: "Failed to create demo session" }, { status: 500 });
  }
}

export async function DELETE() {
  const response = NextResponse.json({ success: true });
  response.cookies.delete("nsu_demo_role");
  return response;
}
