# SKORAI — Academic Intelligence Platform

> AI-powered decision intelligence for higher education institutions

SKORAI is a multi-role SaaS platform that delivers real-time institutional analytics, AI-driven insights, and scenario simulation tools to every stakeholder in a university — from students and faculty to deans, board members, and the president.

---

## ✨ Features

### 🎓 Role-Based Dashboards
Each authenticated user lands on a dashboard tailored to their role:

| Role | Dashboard Focus |
|------|----------------|
| **President** | Institution-wide KPIs, enrollment, financials, strategic risks |
| **Provost / Executive** | Academic program health, faculty productivity, accreditation |
| **Dean** | College-level outcomes, resource allocation, faculty metrics |
| **Department Chair** | Course performance, student success, faculty load |
| **Faculty** | Course analytics, student engagement, grade distributions |
| **Advisor** | Student caseload, at-risk alerts, degree progress |
| **Student** | GPA trends, credits, financial aid status, advising |
| **Admissions** | Funnel analytics, yield rates, enrollment projections |
| **Financial Aid** | Aid disbursements, packaging, compliance |
| **Board Member** | Governance metrics, benchmarking, strategic scorecard |
| **Accreditation** | Standard compliance tracking, evidence collection |
| **Institutional Effectiveness** | Assessment cycles, survey results, reporting |
| **Career Services** | Employment outcomes, internship placements |
| **Admin** | User management, system configuration |

### 🤖 AI Insights Engine
- Predictive risk scoring for student retention
- Enrollment forecasting with scenario modeling
- Automated anomaly detection and threshold alerts
- Natural-language insight summaries per role

### 🔬 Scenario Simulator
- Adjust tuition, enrollment caps, financial aid levers
- Real-time financial impact recalculation
- Side-by-side scenario comparison

### 🔒 Enterprise Security
- Role-based access control (RBAC)
- FIDO2 / Passkey authentication support
- Okta SSO integration
- Session-level audit logging

---

## 🖥️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | [Next.js 16](https://nextjs.org) (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Charts | Recharts |
| Icons | Lucide React |
| Database | Supabase (PostgreSQL) |
| Auth | Supabase Auth + Okta SSO |
| Deployment | Vercel |

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/sivaintern-sera/SKORAI.git
cd SKORAI

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Fill in your Supabase URL and anon key
```

### Environment Variables

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### Running Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🎭 Demo Accounts

Visit `/demo` to explore the platform with pre-loaded demo accounts across all 14 roles — no sign-up required.

---

## 📁 Project Structure

```
src/
├── app/
│   ├── page.tsx              # Landing page
│   ├── demo/                 # Demo hub (role selector)
│   ├── login/                # Authentication
│   ├── pricing/              # Pricing page
│   ├── features/             # Features overview
│   ├── contact/              # Contact page
│   └── dashboard/
│       ├── president/        # President dashboard
│       ├── faculty/          # Faculty dashboard
│       ├── student/          # Student dashboard
│       ├── advisor/          # Advisor dashboard
│       ├── profile/          # User profile & credentials
│       └── ...               # Other role dashboards
├── components/
│   ├── dashboard/
│   │   ├── DashboardLayout.tsx     # Shared dashboard shell
│   │   ├── AIInsightsList.tsx      # AI insight cards
│   │   ├── InteractiveCharts.tsx   # Recharts wrappers
│   │   └── StudentDataTable.tsx    # Data table component
│   ├── layout/
│   │   ├── Navbar.tsx              # Public site navbar
│   │   └── Footer.tsx              # Public site footer
│   └── simulation/
│       └── ScenarioSimulator.tsx   # Financial scenario tool
├── lib/
│   ├── demo-accounts.ts      # Demo persona definitions
│   ├── demo-session.ts       # Session management + RBAC
│   └── demo-data.ts          # Seed data for dashboards
└── types/
    └── index.ts              # Shared TypeScript types
```

---

## 📜 License

MIT © SKORAI

---

<p align="center">Built with ❤️ for higher education</p>
