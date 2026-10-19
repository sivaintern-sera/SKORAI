export type UserRole =
  | "president"
  | "dean"
  | "department-chair"
  | "faculty"
  | "advisor"
  | "student"
  | "admissions"
  | "financial-aid"
  | "career-services"
  | "institutional-effectiveness"
  | "accreditation"
  | "executive" // CFO/CIO/CISO
  | "board"
  | "admin";

export interface DemoAccount {
  id: string;
  role: UserRole;
  roleTitle: string;
  category: "Executive & Governance" | "Academic Leadership" | "Faculty & Advising" | "Student" | "Operational & Compliance" | "Administration";
  name: string;
  title: string;
  email: string;
  institution: string;
  avatarUrl?: string;
  accessDescription: string;
  dashboardRoute: string;
  department?: string;
  college?: string;
  statsPreview: {
    label: string;
    value: string;
    change?: string;
  }[];
}

export interface College {
  id: string;
  name: string;
  code: string;
  deanName: string;
  departmentCount: number;
  totalStudents: number;
  totalFaculty: number;
  retentionRate: number;
  graduationRate: number;
  annualBudget: number;
}

export interface Department {
  id: string;
  collegeId: string;
  name: string;
  code: string;
  chairName: string;
  totalStudents: number;
  totalFaculty: number;
  programs: string[];
  averageGpa: number;
  retentionRate: number;
}

export interface StudentRecord {
  id: string;
  studentId: string; // e.g. "NSU-2024-8192"
  firstName: string;
  lastName: string;
  email: string;
  college: string;
  department: string;
  degreeProgram: string;
  degreeLevel: "Undergraduate" | "Graduate";
  academicStanding: "Good Standing" | "Academic Warning" | "Academic Probation" | "Dean's List";
  academicTerm: string;
  enrollmentStatus: "Full-Time" | "Part-Time";
  gpa: number;
  creditHoursCompleted: number;
  creditHoursEnrolled: number;
  retentionRiskScore: number; // 0 - 100
  retentionRiskLevel: "Low" | "Medium" | "High" | "Critical";
  financialAidStatus: "Awarded" | "Pending Verification" | "FAFSA Missing" | "Self-Pay";
  attendanceRate: number;
  advisorName: string;
}

export interface FacultyRecord {
  id: string;
  facultyId: string; // e.g. "FAC-0492"
  name: string;
  title: string;
  email: string;
  college: string;
  department: string;
  coursesAssigned: string[];
  totalStudentsTaught: number;
  averageCourseEvaluation: number;
  officeHours: string;
}

export interface CourseSection {
  id: string;
  courseCode: string;
  title: string;
  department: string;
  credits: number;
  instructorName: string;
  enrolledStudents: number;
  capacity: number;
  averageGrade: string;
  attendanceAvg: number;
  atRiskCount: number;
  schedule: string;
}

export interface InstitutionalMetrics {
  totalStudents: number;
  undergraduateCount: number;
  graduateCount: number;
  totalFaculty: number;
  studentFacultyRatio: string;
  firstYearRetentionRate: number;
  sixYearGraduationRate: number;
  fourYearGraduationRate: number;
  averageGpa: number;
  totalAnnualRevenue: number;
  tuitionRevenue: number;
  stateAppropriations: number;
  researchGrants: number;
  operatingExpenses: number;
  campusClimateIndex: number;
  cyberRiskScore: number; // 0 - 100
  accreditationReadinessScore: number; // 0 - 100
}

export interface AIInsight {
  id: string;
  title: string;
  category: "Retention" | "Enrollment" | "Financial Aid" | "Academic Outcomes" | "Cybersecurity" | "Accreditation";
  riskLevel: "Low" | "Medium" | "High" | "Critical";
  description: string;
  impactMetric: string;
  supportingData: string;
  suggestedAction: string;
  explanation: string;
  isSimulated: boolean;
  dateGenerated: string;
}

export interface ScenarioSimulationParams {
  enrollmentChangePct: number; // e.g. -10 for -10%
  retentionChangePct: number;  // e.g. +5 for +5%
  stateAppropriationChangePct: number;
  facultyStaffingChangePct: number;
  financialAidBudgetChangePct: number;
}

export interface ScenarioSimulationResult {
  params: ScenarioSimulationParams;
  projectedEnrollment: number;
  enrollmentDifference: number;
  projectedGrossRevenue: number;
  grossRevenueDifference: number;
  projectedNetMargin: number;
  retentionRateProjected: number;
  facultyFteImpact: number;
  institutionalRiskRating: "Stable" | "Moderate Risk" | "Severe Risk" | "Favorable Opportunity";
  summaryBrief: string;
  resourceRecommendations: string[];
}
