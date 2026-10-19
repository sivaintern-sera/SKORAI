import {
  College,
  Department,
  StudentRecord,
  FacultyRecord,
  CourseSection,
  InstitutionalMetrics,
  AIInsight,
  ScenarioSimulationParams,
  ScenarioSimulationResult,
} from "@/types";

export const INSTITUTION_INFO = {
  name: "Northbridge State University",
  abbreviation: "NSU",
  location: "Northbridge, MA, United States",
  founded: 1894,
  carnegieClassification: "Doctoral/High Research Activity (R2)",
  accreditation: "Higher Learning Commission (HLC)",
  academicTerms: ["Fall 2026 (Current)", "Spring 2026", "Fall 2025", "Spring 2025"],
  currentTerm: "Fall 2026",
  colors: {
    navy: "#0B1220",
    royalBlue: "#2563EB",
    purple: "#6D28D9",
  },
};

export const COLLEGES: College[] = [
  {
    id: "col-1",
    name: "College of Computing and Information Technology",
    code: "CCIT",
    deanName: "Dr. James Wilson",
    departmentCount: 4,
    totalStudents: 2150,
    totalFaculty: 88,
    retentionRate: 87.5,
    graduationRate: 72.4,
    annualBudget: 28500000,
  },
  {
    id: "col-2",
    name: "College of Engineering and Technology",
    code: "COET",
    deanName: "Dr. Marcus Vance",
    departmentCount: 4,
    totalStudents: 1980,
    totalFaculty: 95,
    retentionRate: 86.1,
    graduationRate: 69.8,
    annualBudget: 34200000,
  },
  {
    id: "col-3",
    name: "College of Business",
    code: "COB",
    deanName: "Dr. Elena Rostova",
    departmentCount: 4,
    totalStudents: 2100,
    totalFaculty: 82,
    retentionRate: 83.9,
    graduationRate: 66.5,
    annualBudget: 26800000,
  },
  {
    id: "col-4",
    name: "College of Arts and Sciences",
    code: "CAS",
    deanName: "Dr. Arthur Pendelton",
    departmentCount: 8,
    totalStudents: 2250,
    totalFaculty: 145,
    retentionRate: 81.4,
    graduationRate: 61.2,
    annualBudget: 38400000,
  },
  {
    id: "col-5",
    name: "College of Health Sciences",
    code: "CHS",
    deanName: "Dr. Patricia Gomez",
    departmentCount: 2,
    totalStudents: 920,
    totalFaculty: 52,
    retentionRate: 89.2,
    graduationRate: 74.8,
    annualBudget: 24600000,
  },
  {
    id: "col-6",
    name: "College of Education",
    code: "COE",
    deanName: "Dr. Walter Jenkins",
    departmentCount: 2,
    totalStudents: 600,
    totalFaculty: 38,
    retentionRate: 82.0,
    graduationRate: 64.0,
    annualBudget: 12000000,
  },
];

export const DEPARTMENTS: Department[] = [
  // CCIT (4)
  { id: "dept-1", collegeId: "col-1", name: "Computer Science", code: "CS", chairName: "Dr. Robert Anderson", totalStudents: 980, totalFaculty: 38, programs: ["B.S. in Computer Science", "M.S. in Computer Science"], averageGpa: 3.32, retentionRate: 88.2 },
  { id: "dept-2", collegeId: "col-1", name: "Information Systems", code: "IS", chairName: "Dr. Laura Chang", totalStudents: 490, totalFaculty: 20, programs: ["B.S. in Information Systems", "M.S. in IT Management"], averageGpa: 3.25, retentionRate: 86.4 },
  { id: "dept-3", collegeId: "col-1", name: "Cybersecurity", code: "CYB", chairName: "Dr. Victor Morales", totalStudents: 410, totalFaculty: 18, programs: ["B.S. in Cybersecurity"], averageGpa: 3.28, retentionRate: 87.9 },
  { id: "dept-4", collegeId: "col-1", name: "Data Science & AI", code: "DSAI", chairName: "Dr. Sunita Patel", totalStudents: 270, totalFaculty: 12, programs: ["B.S. in Data Science", "M.S. in Artificial Intelligence"], averageGpa: 3.44, retentionRate: 90.1 },

  // Engineering (4)
  { id: "dept-5", collegeId: "col-2", name: "Mechanical Engineering", code: "ME", chairName: "Dr. Frank Wright", totalStudents: 640, totalFaculty: 30, programs: ["B.S. in Mechanical Engineering"], averageGpa: 3.19, retentionRate: 85.5 },
  { id: "dept-6", collegeId: "col-2", name: "Electrical Engineering", code: "EE", chairName: "Dr. Samuel Harris", totalStudents: 520, totalFaculty: 26, programs: ["B.S. in Electrical Engineering"], averageGpa: 3.22, retentionRate: 86.0 },
  { id: "dept-7", collegeId: "col-2", name: "Civil Engineering", code: "CE", chairName: "Dr. Brenda Miller", totalStudents: 440, totalFaculty: 21, programs: ["B.S. in Civil Engineering"], averageGpa: 3.15, retentionRate: 84.8 },
  { id: "dept-8", collegeId: "col-2", name: "Biomedical Engineering", code: "BME", chairName: "Dr. Cynthia Cole", totalStudents: 380, totalFaculty: 18, programs: ["B.S. in Biomedical Engineering"], averageGpa: 3.38, retentionRate: 88.5 },

  // Business (4)
  { id: "dept-9", collegeId: "col-3", name: "Business Administration", code: "BA", chairName: "Dr. Gregory Scott", totalStudents: 820, totalFaculty: 28, programs: ["B.B.A. in Management", "M.B.A."], averageGpa: 3.18, retentionRate: 83.1 },
  { id: "dept-10", collegeId: "col-3", name: "Accounting", code: "ACCT", chairName: "Dr. Martha Stewart", totalStudents: 480, totalFaculty: 20, programs: ["B.S. in Accounting", "Master of Accountancy"], averageGpa: 3.31, retentionRate: 85.2 },
  { id: "dept-11", collegeId: "col-3", name: "Finance", code: "FIN", chairName: "Dr. Douglas Reed", totalStudents: 460, totalFaculty: 19, programs: ["B.S. in Finance"], averageGpa: 3.26, retentionRate: 84.7 },
  { id: "dept-12", collegeId: "col-3", name: "Marketing & Strategy", code: "MKT", chairName: "Dr. Karen Bell", totalStudents: 340, totalFaculty: 15, programs: ["B.S. in Marketing"], averageGpa: 3.22, retentionRate: 83.0 },

  // Arts & Sciences (8)
  { id: "dept-13", collegeId: "col-4", name: "Mathematics & Statistics", code: "MATH", chairName: "Dr. Alan Stone", totalStudents: 280, totalFaculty: 24, programs: ["B.S. in Mathematics"], averageGpa: 3.12, retentionRate: 80.5 },
  { id: "dept-14", collegeId: "col-4", name: "Physics", code: "PHYS", chairName: "Dr. Howard Bell", totalStudents: 160, totalFaculty: 16, programs: ["B.S. in Physics"], averageGpa: 3.21, retentionRate: 81.2 },
  { id: "dept-15", collegeId: "col-4", name: "Chemistry & Biochemistry", code: "CHEM", chairName: "Dr. Kimberly Foster", totalStudents: 310, totalFaculty: 20, programs: ["B.S. in Chemistry"], averageGpa: 3.17, retentionRate: 82.1 },
  { id: "dept-16", collegeId: "col-4", name: "Biological Sciences", code: "BIOL", chairName: "Dr. Stephen Thorne", totalStudents: 560, totalFaculty: 32, programs: ["B.S. in Biology"], averageGpa: 3.29, retentionRate: 83.4 },
  { id: "dept-17", collegeId: "col-4", name: "Psychology", code: "PSYC", chairName: "Dr. Diane Hayes", totalStudents: 440, totalFaculty: 22, programs: ["B.A. in Psychology"], averageGpa: 3.30, retentionRate: 82.5 },
  { id: "dept-18", collegeId: "col-4", name: "English & Literature", code: "ENG", chairName: "Dr. Charles Wood", totalStudents: 190, totalFaculty: 15, programs: ["B.A. in English"], averageGpa: 3.36, retentionRate: 79.8 },
  { id: "dept-19", collegeId: "col-4", name: "History & Political Science", code: "HIST", chairName: "Dr. George Bailey", totalStudents: 180, totalFaculty: 14, programs: ["B.A. in History"], averageGpa: 3.24, retentionRate: 78.9 },
  { id: "dept-20", collegeId: "col-4", name: "Communication & Media", code: "COMM", chairName: "Dr. Nancy Drew", totalStudents: 130, totalFaculty: 10, programs: ["B.A. in Communication"], averageGpa: 3.27, retentionRate: 80.2 },

  // Health Sciences (2)
  { id: "dept-21", collegeId: "col-5", name: "Nursing", code: "NURS", chairName: "Dr. Rebecca Vance", totalStudents: 620, totalFaculty: 34, programs: ["B.S. in Nursing (BSN)", "M.S. in Nursing"], averageGpa: 3.52, retentionRate: 91.5 },
  { id: "dept-22", collegeId: "col-5", name: "Public Health", code: "PUBH", chairName: "Dr. Anthony Rivers", totalStudents: 300, totalFaculty: 18, programs: ["B.S. in Public Health", "M.P.H."], averageGpa: 3.35, retentionRate: 87.2 },

  // Education (2)
  { id: "dept-23", collegeId: "col-6", name: "Teacher Education", code: "EDUC", chairName: "Dr. Beverly King", totalStudents: 390, totalFaculty: 24, programs: ["B.S. in Elementary Education"], averageGpa: 3.42, retentionRate: 83.8 },
  { id: "dept-24", collegeId: "col-6", name: "Educational Leadership", code: "EDLD", chairName: "Dr. Kenneth Moore", totalStudents: 210, totalFaculty: 14, programs: ["M.Ed. in Educational Leadership"], averageGpa: 3.61, retentionRate: 88.0 },
];

export const INSTITUTIONAL_METRICS: InstitutionalMetrics = {
  totalStudents: 10000,
  undergraduateCount: 8200,
  graduateCount: 1800,
  totalFaculty: 500,
  studentFacultyRatio: "20:1",
  firstYearRetentionRate: 84.2,
  sixYearGraduationRate: 66.4,
  fourYearGraduationRate: 48.2,
  averageGpa: 3.28,
  totalAnnualRevenue: 174500000,
  tuitionRevenue: 104200000,
  stateAppropriations: 48500000,
  researchGrants: 21800000,
  operatingExpenses: 166100000,
  campusClimateIndex: 82.4,
  cyberRiskScore: 18, // 18/100 (Low risk)
  accreditationReadinessScore: 94, // 94/100 (Strong readiness)
};

// Deterministic generation of 500 student records for detailed demo tables
const FIRST_NAMES = ["Michael", "Emma", "Liam", "Olivia", "Noah", "Ava", "James", "Sophia", "Benjamin", "Isabella", "Lucas", "Mia", "Henry", "Evelyn", "Alexander", "Harper", "Sebastian", "Camila", "Jack", "Gianna", "Daniel", "Abigail", "Matthew", "Emily", "Samuel", "Ella", "David", "Avery", "Joseph", "Scarlett", "Carter", "Grace", "Owen", "Chloe", "Wyatt", "Victoria", "John", "Riley", "Jack", "Aria", "Luke", "Lily", "Jayden", "Aubrey", "Dylan", "Zoey", "Grayson", "Penelope", "Levi", "Lillian"];
const LAST_NAMES = ["Brown", "Johnson", "Smith", "Williams", "Jones", "Garcia", "Miller", "Davis", "Rodriguez", "Martinez", "Hernandez", "Lopez", "Gonzalez", "Wilson", "Anderson", "Thomas", "Taylor", "Moore", "Jackson", "Martin", "Lee", "Perez", "Thompson", "White", "Harris", "Sanchez", "Clark", "Ramirez", "Lewis", "Robinson", "Walker", "Young", "Allen", "King", "Wright", "Scott", "Torres", "Nguyen", "Hill", "Flores", "Green", "Adams", "Nelson", "Baker", "Hall", "Rivera", "Campbell", "Mitchell", "Carter", "Roberts"];

export const DETAILED_STUDENTS: StudentRecord[] = Array.from({ length: 500 }, (_, index) => {
  const dept = DEPARTMENTS[index % DEPARTMENTS.length];
  const col = COLLEGES.find((c) => c.id === dept.collegeId)!;
  const firstName = FIRST_NAMES[index % FIRST_NAMES.length];
  const lastName = LAST_NAMES[(index * 7 + 3) % LAST_NAMES.length];
  const isGrad = index % 6 === 0;

  // Realistic GPA distribution
  const gpa = Number((2.2 + ((index * 37) % 180) / 100).toFixed(2));
  const retentionScore = Math.min(100, Math.max(10, Math.round(100 - (gpa - 2.0) * 35 + ((index * 13) % 25))));
  
  let riskLevel: "Low" | "Medium" | "High" | "Critical" = "Low";
  if (retentionScore > 75) riskLevel = "Critical";
  else if (retentionScore > 55) riskLevel = "High";
  else if (retentionScore > 35) riskLevel = "Medium";

  let standing: "Good Standing" | "Academic Warning" | "Academic Probation" | "Dean's List" = "Good Standing";
  if (gpa >= 3.75) standing = "Dean's List";
  else if (gpa < 2.0) standing = "Academic Probation";
  else if (gpa < 2.5) standing = "Academic Warning";

  const aidStatuses: StudentRecord["financialAidStatus"][] = ["Awarded", "Awarded", "Pending Verification", "FAFSA Missing", "Self-Pay"];
  const aidStatus = aidStatuses[index % aidStatuses.length];

  return {
    id: `stu-${index + 1}`,
    studentId: `NSU-2024-${String(1000 + index).padStart(4, "0")}`,
    firstName,
    lastName,
    email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}@students.northbridge.edu`,
    college: col.name,
    department: dept.name,
    degreeProgram: dept.programs[0],
    degreeLevel: isGrad ? "Graduate" : "Undergraduate",
    academicStanding: standing,
    academicTerm: "Fall 2026",
    enrollmentStatus: index % 12 === 0 ? "Part-Time" : "Full-Time",
    gpa,
    creditHoursCompleted: Math.min(128, 15 + ((index * 17) % 105)),
    creditHoursEnrolled: index % 12 === 0 ? 6 : 15,
    retentionRiskScore: retentionScore,
    retentionRiskLevel: riskLevel,
    financialAidStatus: aidStatus,
    attendanceRate: Math.round(82 + ((index * 19) % 18)),
    advisorName: "Sarah Mitchell",
  };
});

// Detailed sample Faculty (30 faculty members)
export const DETAILED_FACULTY: FacultyRecord[] = Array.from({ length: 30 }, (_, index) => {
  const dept = DEPARTMENTS[index % DEPARTMENTS.length];
  const col = COLLEGES.find((c) => c.id === dept.collegeId)!;
  const firstName = FIRST_NAMES[(index * 3) % FIRST_NAMES.length];
  const lastName = LAST_NAMES[(index * 5 + 2) % LAST_NAMES.length];

  return {
    id: `fac-${index + 1}`,
    facultyId: `FAC-${String(100 + index).padStart(4, "0")}`,
    name: `Dr. ${firstName} ${lastName}`,
    title: index % 3 === 0 ? "Professor" : index % 2 === 0 ? "Associate Professor" : "Assistant Professor",
    email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}@northbridge.edu`,
    college: col.name,
    department: dept.name,
    coursesAssigned: [`${dept.code} 101`, `${dept.code} 302`, `${dept.code} 485`],
    totalStudentsTaught: 90 + ((index * 17) % 65),
    averageCourseEvaluation: Number((3.8 + ((index * 7) % 12) / 10).toFixed(1)),
    officeHours: "MWF 2:00 PM - 4:00 PM (Hall 312)",
  };
});

// Sample course sections for Faculty, Chair, Dean views
export const SAMPLE_COURSE_SECTIONS: CourseSection[] = [
  { id: "cs-101-01", courseCode: "CS 101", title: "Introduction to Computer Science", department: "Computer Science", credits: 4, instructorName: "Dr. Emily Johnson", enrolledStudents: 45, capacity: 48, averageGrade: "B+", attendanceAvg: 92, atRiskCount: 3, schedule: "MWF 10:00 - 11:15 AM" },
  { id: "cs-220-01", courseCode: "CS 220", title: "Data Structures & Algorithms", department: "Computer Science", credits: 4, instructorName: "Dr. Emily Johnson", enrolledStudents: 42, capacity: 45, averageGrade: "B", attendanceAvg: 88, atRiskCount: 5, schedule: "TTh 1:00 - 2:30 PM" },
  { id: "cs-490-01", courseCode: "CS 490", title: "Senior Capstone & Software Architecture", department: "Computer Science", credits: 3, instructorName: "Dr. Emily Johnson", enrolledStudents: 28, capacity: 30, averageGrade: "A-", attendanceAvg: 96, atRiskCount: 1, schedule: "MW 3:00 - 4:30 PM" },
  { id: "cyb-210-01", courseCode: "CYB 210", title: "Network Security & Cryptography", department: "Cybersecurity", credits: 3, instructorName: "Dr. Victor Morales", enrolledStudents: 38, capacity: 40, averageGrade: "B-", attendanceAvg: 85, atRiskCount: 6, schedule: "MWF 1:00 - 2:00 PM" },
  { id: "dsai-310-01", courseCode: "DSAI 310", title: "Machine Learning Foundations", department: "Data Science & AI", credits: 4, instructorName: "Dr. Sunita Patel", enrolledStudents: 36, capacity: 36, averageGrade: "B+", attendanceAvg: 94, atRiskCount: 2, schedule: "TTh 10:30 AM - 12:00 PM" },
  { id: "me-201-01", courseCode: "ME 201", title: "Statics and Dynamics", department: "Mechanical Engineering", credits: 3, instructorName: "Dr. Frank Wright", enrolledStudents: 50, capacity: 55, averageGrade: "C+", attendanceAvg: 81, atRiskCount: 8, schedule: "MWF 9:00 - 10:00 AM" },
  { id: "nurs-310-01", courseCode: "NURS 310", title: "Clinical Pharmacology", department: "Nursing", credits: 4, instructorName: "Dr. Rebecca Vance", enrolledStudents: 40, capacity: 40, averageGrade: "A-", attendanceAvg: 98, atRiskCount: 1, schedule: "TTh 8:00 - 10:00 AM" },
];

// SKORAI Insights
export const SIMULATED_AI_INSIGHTS: AIInsight[] = [
  {
    id: "ins-1",
    title: "Retention Risk Spiking in Second-Semester Gateway STEM Courses",
    category: "Retention",
    riskLevel: "High",
    description: "Predictive signals identify 142 first-time freshman displaying attendance declines exceeding 18% in MATH 102 and CS 101.",
    impactMetric: "Projected loss of $1.82M in 4-year tuition if unaddressed",
    supportingData: "Early midterm warning flags + LMS engagement drops below 3.5 hrs/week.",
    suggestedAction: "Trigger automated Advisor Outreach Workflow & Supplemental Instruction tutors.",
    explanation: "Historical institutional models indicate students completing fewer than 24 credit hours in year one have a 62% likelihood of non-return for sophomore fall.",
    isSimulated: true,
    dateGenerated: "October 19, 2026",
  },
  {
    id: "ins-2",
    title: "Undergraduate Out-of-State Yield Forecast Exceeds Budget Model",
    category: "Enrollment",
    riskLevel: "Low",
    description: "Deposit commitments from tri-state metropolitan areas are tracking +6.2% above the Fall 2026 baseline enrollment envelope.",
    impactMetric: "+$1.4M gross net-tuition margin opportunity",
    supportingData: "Deposit velocity index is 1.18 vs. 5-year historical average.",
    suggestedAction: "Authorize additional housing allocations in North Quad dormitory.",
    explanation: "Regional marketing campaign launched in February yielded a 24% increase in completed campus visit conversions.",
    isSimulated: true,
    dateGenerated: "October 18, 2026",
  },
  {
    id: "ins-3",
    title: "FAFSA Verification Backlog Affecting Pell Grant Recipient Retention",
    category: "Financial Aid",
    riskLevel: "Critical",
    description: "320 enrolled undergraduates have unverified federal tax transcripts holding back semester financial aid disbursements.",
    impactMetric: "320 students at risk of administrative registration hold",
    supportingData: "Mean days in pending queue: 28 days (SLA threshold is 14 days).",
    suggestedAction: "Deploy AI Financial Aid Document Processing Assistant to fast-track verification.",
    explanation: "Federal regulatory adjustments created increased verification criteria that human aid counselors have not cleared without automation.",
    isSimulated: true,
    dateGenerated: "October 17, 2026",
  },
  {
    id: "ins-4",
    title: "Accreditation Criterion 4.B Evidence Gap in General Education Outcomes",
    category: "Accreditation",
    riskLevel: "Medium",
    description: "Higher Learning Commission (HLC) standard for university-wide critical thinking assessment lacks rubrics from 3 humanities departments.",
    impactMetric: "Potential finding of conditional compliance during 2028 Comprehensive Evaluation",
    supportingData: "Department of English and Department of History missing FY25 learning artifact uploads.",
    suggestedAction: "Issue dean-level reminder and schedule curriculum assessment workshop.",
    explanation: "Accreditation guidelines require longitudinal evidence of student learning assessment across all general education domains.",
    isSimulated: true,
    dateGenerated: "October 15, 2026",
  },
  {
    id: "ins-5",
    title: "Cybersecurity Alert: Elevated Phishing Attacks Targeting Faculty Credentials",
    category: "Cybersecurity",
    riskLevel: "High",
    description: "Behavioral anomaly detection caught 48 credential harvesting attempts spoofing University Office365 and Canvas logins.",
    impactMetric: "Zero breaches detected; 4 compromised accounts quarantined within 180 seconds",
    supportingData: "Threat score 74/100 originating from known Tor exit nodes.",
    suggestedAction: "Enforce mandatory FIDO2 hardware token authentication for all payroll administrators.",
    explanation: "End-of-term payroll and grading cycles historically coincide with increased targeted social engineering attacks.",
    isSimulated: true,
    dateGenerated: "October 19, 2026",
  },
];

// Interactive Scenario Simulation Engine for Section 19
export function simulateScenario(params: ScenarioSimulationParams): ScenarioSimulationResult {
  const baseStudents = INSTITUTIONAL_METRICS.totalStudents;
  const baseRevenue = INSTITUTIONAL_METRICS.tuitionRevenue + INSTITUTIONAL_METRICS.stateAppropriations;
  const baseRetention = INSTITUTIONAL_METRICS.firstYearRetentionRate;

  // Enrollment impact
  const enrollmentMultiplier = 1 + params.enrollmentChangePct / 100;
  const projectedEnrollment = Math.round(baseStudents * enrollmentMultiplier);
  const enrollmentDifference = projectedEnrollment - baseStudents;

  // Revenue calculations
  const tuitionPerStudent = INSTITUTIONAL_METRICS.tuitionRevenue / baseStudents;
  const projectedTuition = projectedEnrollment * tuitionPerStudent;
  const stateAppropriations = INSTITUTIONAL_METRICS.stateAppropriations * (1 + params.stateAppropriationChangePct / 100);
  const projectedGrossRevenue = projectedTuition + stateAppropriations + INSTITUTIONAL_METRICS.researchGrants;
  const grossRevenueDifference = projectedGrossRevenue - INSTITUTIONAL_METRICS.totalAnnualRevenue;

  // Retention impact
  const retentionRateProjected = Math.min(99, Math.max(50, Number((baseRetention + params.retentionChangePct).toFixed(1))));

  // Faculty FTE impact
  const baseFaculty = INSTITUTIONAL_METRICS.totalFaculty;
  const facultyFteImpact = Math.round(baseFaculty * (params.facultyStaffingChangePct / 100));

  // Operating net margin
  const projectedExpenses = INSTITUTIONAL_METRICS.operatingExpenses * (1 + (params.facultyStaffingChangePct * 0.4 + params.financialAidBudgetChangePct * 0.2) / 100);
  const projectedNetMargin = projectedGrossRevenue - projectedExpenses;

  let institutionalRiskRating: ScenarioSimulationResult["institutionalRiskRating"] = "Stable";
  if (grossRevenueDifference < -8000000 || params.enrollmentChangePct <= -8) {
    institutionalRiskRating = "Severe Risk";
  } else if (grossRevenueDifference < -2000000 || params.enrollmentChangePct < 0) {
    institutionalRiskRating = "Moderate Risk";
  } else if (grossRevenueDifference > 5000000 && retentionRateProjected >= 86) {
    institutionalRiskRating = "Favorable Opportunity";
  }

  const recommendations: string[] = [];
  if (params.enrollmentChangePct < 0) {
    recommendations.push("Institute targeted yield rescue campaigns in high-retention regional markets.");
    recommendations.push("Implement hiring pause on non-instructional administrative vacancies.");
  }
  if (params.retentionChangePct > 0) {
    recommendations.push("Scale early warning AI advisor triggers to preserve positive sophomore persistence.");
  }
  if (params.financialAidBudgetChangePct > 0) {
    recommendations.push("Target additional institutional aid grants to first-generation Pell-eligible students.");
  }
  if (recommendations.length === 0) {
    recommendations.push("Maintain baseline institutional reserve allocations and monitor term-by-term IPEDS indicators.");
  }

  return {
    params,
    projectedEnrollment,
    enrollmentDifference,
    projectedGrossRevenue,
    grossRevenueDifference,
    projectedNetMargin,
    retentionRateProjected,
    facultyFteImpact,
    institutionalRiskRating,
    summaryBrief: `Simulated model with ${params.enrollmentChangePct >= 0 ? "+" : ""}${params.enrollmentChangePct}% enrollment, ${params.retentionChangePct >= 0 ? "+" : ""}${params.retentionChangePct}% retention results in ${projectedGrossRevenue >= INSTITUTIONAL_METRICS.totalAnnualRevenue ? "an estimated revenue gain of " : "an estimated revenue decline of "}$${Math.abs(Math.round(grossRevenueDifference / 1000000 * 10) / 10)}M annually.`,
    resourceRecommendations: recommendations,
  };
}
