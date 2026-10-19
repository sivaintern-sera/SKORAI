-- ====================================================================
-- INSTITUTIONAL AI INTELLIGENCE PLATFORM
-- Database Schema Migration (Supabase PostgreSQL)
-- Target: General Four-Year University (United States)
-- Tenant Isolation: institution_id
-- ====================================================================

-- 1. Enable Extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- 2. Institutions
CREATE TABLE IF NOT EXISTS public.institutions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(255) NOT NULL,
    short_code VARCHAR(20) NOT NULL UNIQUE,
    carnegie_classification VARCHAR(100) DEFAULT 'Doctoral/High Research Activity (R2)',
    accreditation_body VARCHAR(100) DEFAULT 'Higher Learning Commission (HLC)',
    location VARCHAR(255) NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. Campuses
CREATE TABLE IF NOT EXISTS public.campuses (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    institution_id UUID NOT NULL REFERENCES public.institutions(id) ON DELETE CASCADE,
    name VARCHAR(255) NOT NULL,
    is_main_campus BOOLEAN DEFAULT TRUE,
    address TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. Colleges
CREATE TABLE IF NOT EXISTS public.colleges (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    institution_id UUID NOT NULL REFERENCES public.institutions(id) ON DELETE CASCADE,
    campus_id UUID REFERENCES public.campuses(id) ON DELETE SET NULL,
    name VARCHAR(255) NOT NULL,
    code VARCHAR(50) NOT NULL,
    dean_name VARCHAR(255),
    annual_budget NUMERIC(14,2) DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 5. Departments
CREATE TABLE IF NOT EXISTS public.departments (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    institution_id UUID NOT NULL REFERENCES public.institutions(id) ON DELETE CASCADE,
    college_id UUID NOT NULL REFERENCES public.colleges(id) ON DELETE CASCADE,
    name VARCHAR(255) NOT NULL,
    code VARCHAR(50) NOT NULL,
    chair_name VARCHAR(255),
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 6. Academic Programs
CREATE TABLE IF NOT EXISTS public.programs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    institution_id UUID NOT NULL REFERENCES public.institutions(id) ON DELETE CASCADE,
    department_id UUID NOT NULL REFERENCES public.departments(id) ON DELETE CASCADE,
    name VARCHAR(255) NOT NULL,
    degree_level VARCHAR(50) NOT NULL CHECK (degree_level IN ('Undergraduate', 'Graduate', 'Doctorate', 'Certificate')),
    cip_code VARCHAR(20),
    total_credit_hours INT DEFAULT 120,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 7. User Profiles & Roles
CREATE TABLE IF NOT EXISTS public.profiles (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    institution_id UUID NOT NULL REFERENCES public.institutions(id) ON DELETE CASCADE,
    email VARCHAR(255) NOT NULL UNIQUE,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    role VARCHAR(50) NOT NULL,
    avatar_url TEXT,
    department_id UUID REFERENCES public.departments(id) ON DELETE SET NULL,
    college_id UUID REFERENCES public.colleges(id) ON DELETE SET NULL,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 8. Students
CREATE TABLE IF NOT EXISTS public.students (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    institution_id UUID NOT NULL REFERENCES public.institutions(id) ON DELETE CASCADE,
    profile_id UUID REFERENCES public.profiles(id) ON DELETE SET NULL,
    student_id_number VARCHAR(50) NOT NULL UNIQUE, -- e.g. NSU-2024-1001
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL,
    college_id UUID REFERENCES public.colleges(id) ON DELETE SET NULL,
    department_id UUID REFERENCES public.departments(id) ON DELETE SET NULL,
    program_id UUID REFERENCES public.programs(id) ON DELETE SET NULL,
    degree_level VARCHAR(50) DEFAULT 'Undergraduate',
    academic_standing VARCHAR(50) DEFAULT 'Good Standing',
    enrollment_status VARCHAR(50) DEFAULT 'Full-Time',
    gpa NUMERIC(3,2) DEFAULT 0.00,
    credit_hours_completed INT DEFAULT 0,
    credit_hours_enrolled INT DEFAULT 15,
    retention_risk_score INT DEFAULT 15,
    retention_risk_level VARCHAR(20) DEFAULT 'Low',
    financial_aid_status VARCHAR(50) DEFAULT 'Awarded',
    attendance_rate NUMERIC(5,2) DEFAULT 95.0,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 9. Faculty
CREATE TABLE IF NOT EXISTS public.faculty (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    institution_id UUID NOT NULL REFERENCES public.institutions(id) ON DELETE CASCADE,
    profile_id UUID REFERENCES public.profiles(id) ON DELETE SET NULL,
    faculty_id_number VARCHAR(50) NOT NULL UNIQUE,
    name VARCHAR(255) NOT NULL,
    title VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL,
    college_id UUID REFERENCES public.colleges(id) ON DELETE SET NULL,
    department_id UUID REFERENCES public.departments(id) ON DELETE SET NULL,
    tenure_status VARCHAR(50) DEFAULT 'Tenured',
    teaching_load_fte NUMERIC(3,2) DEFAULT 1.00,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 10. Courses
CREATE TABLE IF NOT EXISTS public.courses (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    institution_id UUID NOT NULL REFERENCES public.institutions(id) ON DELETE CASCADE,
    department_id UUID NOT NULL REFERENCES public.departments(id) ON DELETE CASCADE,
    course_code VARCHAR(50) NOT NULL,
    title VARCHAR(255) NOT NULL,
    credit_hours INT DEFAULT 3,
    description TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 11. Course Sections
CREATE TABLE IF NOT EXISTS public.course_sections (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    institution_id UUID NOT NULL REFERENCES public.institutions(id) ON DELETE CASCADE,
    course_id UUID NOT NULL REFERENCES public.courses(id) ON DELETE CASCADE,
    faculty_id UUID REFERENCES public.faculty(id) ON DELETE SET NULL,
    section_number VARCHAR(10) NOT NULL,
    academic_term VARCHAR(50) NOT NULL,
    capacity INT DEFAULT 35,
    enrolled_count INT DEFAULT 0,
    schedule_slot VARCHAR(100),
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 12. Enrollments & Grades
CREATE TABLE IF NOT EXISTS public.enrollments (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    institution_id UUID NOT NULL REFERENCES public.institutions(id) ON DELETE CASCADE,
    student_id UUID NOT NULL REFERENCES public.students(id) ON DELETE CASCADE,
    section_id UUID NOT NULL REFERENCES public.course_sections(id) ON DELETE CASCADE,
    midterm_grade VARCHAR(5),
    final_grade VARCHAR(5),
    grade_points NUMERIC(3,2),
    attendance_rate NUMERIC(5,2) DEFAULT 95.0,
    academic_alert_status BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    UNIQUE(student_id, section_id)
);

-- 13. Institutional Metrics & KPIs
CREATE TABLE IF NOT EXISTS public.institutional_metrics (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    institution_id UUID NOT NULL REFERENCES public.institutions(id) ON DELETE CASCADE,
    fiscal_year INT NOT NULL,
    academic_term VARCHAR(50) NOT NULL,
    total_enrollment INT NOT NULL,
    retention_rate_first_year NUMERIC(5,2) NOT NULL,
    six_year_graduation_rate NUMERIC(5,2) NOT NULL,
    tuition_revenue NUMERIC(14,2) NOT NULL,
    state_appropriations NUMERIC(14,2) NOT NULL,
    operating_expenses NUMERIC(14,2) NOT NULL,
    cyber_risk_score INT DEFAULT 20,
    accreditation_readiness_score INT DEFAULT 95,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 14. Audit Logs (FERPA & AI Compliance)
CREATE TABLE IF NOT EXISTS public.audit_logs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    institution_id UUID NOT NULL REFERENCES public.institutions(id) ON DELETE CASCADE,
    user_id UUID REFERENCES public.profiles(id) ON DELETE SET NULL,
    actor_email VARCHAR(255) NOT NULL,
    action VARCHAR(100) NOT NULL,
    target_resource VARCHAR(100) NOT NULL,
    details JSONB DEFAULT '{}'::jsonb,
    ip_address INET,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 15. Demo Sessions (Isolated synthetic sandbox sessions)
CREATE TABLE IF NOT EXISTS public.demo_sessions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    role VARCHAR(50) NOT NULL,
    user_email VARCHAR(255) NOT NULL,
    expires_at TIMESTAMPTZ NOT NULL,
    metadata JSONB DEFAULT '{}'::jsonb,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ====================================================================
-- INDEXES FOR HIGH-PERFORMANCE ANALYTICS
-- ====================================================================
CREATE INDEX IF NOT EXISTS idx_students_institution ON public.students(institution_id);
CREATE INDEX IF NOT EXISTS idx_students_retention_risk ON public.students(retention_risk_level);
CREATE INDEX IF NOT EXISTS idx_students_department ON public.students(department_id);
CREATE INDEX IF NOT EXISTS idx_enrollments_student ON public.enrollments(student_id);
CREATE INDEX IF NOT EXISTS idx_enrollments_section ON public.enrollments(section_id);
CREATE INDEX IF NOT EXISTS idx_audit_institution ON public.audit_logs(institution_id, created_at DESC);

-- ====================================================================
-- ROW LEVEL SECURITY (RLS) POLICIES
-- ====================================================================
ALTER TABLE public.institutions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.colleges ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.departments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.students ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.faculty ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.enrollments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.audit_logs ENABLE ROW LEVEL SECURITY;

-- Students can read only their own personal student record
CREATE POLICY student_self_view ON public.students
    FOR SELECT
    USING (profile_id = auth.uid());

-- Faculty can read students enrolled in their assigned sections
CREATE POLICY faculty_view_enrolled ON public.students
    FOR SELECT
    USING (
        EXISTS (
            SELECT 1 FROM public.enrollments e
            JOIN public.course_sections s ON e.section_id = s.id
            JOIN public.faculty f ON s.faculty_id = f.id
            WHERE e.student_id = public.students.id
              AND f.profile_id = auth.uid()
        )
    );

-- Deans can view students within their designated college
CREATE POLICY dean_view_college_students ON public.students
    FOR SELECT
    USING (
        EXISTS (
            SELECT 1 FROM public.profiles p
            WHERE p.id = auth.uid()
              AND p.role = 'dean'
              AND p.college_id = public.students.college_id
        )
    );

-- Institutional Leaders (President, Admin) can view institution records
CREATE POLICY admin_president_view_all ON public.students
    FOR ALL
    USING (
        EXISTS (
            SELECT 1 FROM public.profiles p
            WHERE p.id = auth.uid()
              AND p.role IN ('president', 'admin')
              AND p.institution_id = public.students.institution_id
        )
    );
