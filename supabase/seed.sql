-- ====================================================================
-- NORTHBRIDGE STATE UNIVERSITY — SEED DATASET
-- Fictional Four-Year University (United States)
-- ====================================================================

-- 1. Insert Institution
INSERT INTO public.institutions (id, name, short_code, carnegie_classification, accreditation_body, location)
VALUES (
    '00000000-0000-0000-0000-000000000001',
    'Northbridge State University',
    'NSU',
    'Doctoral/High Research Activity (R2)',
    'Higher Learning Commission (HLC)',
    'Northbridge, MA, United States'
) ON CONFLICT (short_code) DO NOTHING;

-- 2. Insert Main Campus
INSERT INTO public.campuses (id, institution_id, name, is_main_campus, address)
VALUES (
    '00000000-0000-0000-0000-000000000010',
    '00000000-0000-0000-0000-000000000001',
    'Northbridge Main Campus',
    TRUE,
    '100 University Parkway, Northbridge, MA 01534'
) ON CONFLICT DO NOTHING;

-- 3. Insert 6 Colleges
INSERT INTO public.colleges (id, institution_id, campus_id, name, code, dean_name, annual_budget)
VALUES
('11111111-0000-0000-0000-000000000001', '00000000-0000-0000-0000-000000000001', '00000000-0000-0000-0000-000000000010', 'College of Computing and Information Technology', 'CCIT', 'Dr. James Wilson', 28500000),
('11111111-0000-0000-0000-000000000002', '00000000-0000-0000-0000-000000000001', '00000000-0000-0000-0000-000000000010', 'College of Engineering and Technology', 'COET', 'Dr. Marcus Vance', 34200000),
('11111111-0000-0000-0000-000000000003', '00000000-0000-0000-0000-000000000001', '00000000-0000-0000-0000-000000000010', 'College of Business', 'COB', 'Dr. Elena Rostova', 26800000),
('11111111-0000-0000-0000-000000000004', '00000000-0000-0000-0000-000000000001', '00000000-0000-0000-0000-000000000010', 'College of Arts and Sciences', 'CAS', 'Dr. Arthur Pendelton', 38400000),
('11111111-0000-0000-0000-000000000005', '00000000-0000-0000-0000-000000000001', '00000000-0000-0000-0000-000000000010', 'College of Health Sciences', 'CHS', 'Dr. Patricia Gomez', 24600000),
('11111111-0000-0000-0000-000000000006', '00000000-0000-0000-0000-000000000001', '00000000-0000-0000-0000-000000000010', 'College of Education', 'COE', 'Dr. Walter Jenkins', 12000000)
ON CONFLICT DO NOTHING;

-- 4. Insert Departments (Sample selection of the 24 departments)
INSERT INTO public.departments (id, institution_id, college_id, name, code, chair_name)
VALUES
('22222222-0000-0000-0000-000000000001', '00000000-0000-0000-0000-000000000001', '11111111-0000-0000-0000-000000000001', 'Computer Science', 'CS', 'Dr. Robert Anderson'),
('22222222-0000-0000-0000-000000000002', '00000000-0000-0000-0000-000000000001', '11111111-0000-0000-0000-000000000001', 'Cybersecurity', 'CYB', 'Dr. Victor Morales'),
('22222222-0000-0000-0000-000000000003', '00000000-0000-0000-0000-000000000001', '11111111-0000-0000-0000-000000000002', 'Mechanical Engineering', 'ME', 'Dr. Frank Wright'),
('22222222-0000-0000-0000-000000000004', '00000000-0000-0000-0000-000000000001', '11111111-0000-0000-0000-000000000003', 'Business Administration', 'BA', 'Dr. Gregory Scott'),
('22222222-0000-0000-0000-000000000005', '00000000-0000-0000-0000-000000000001', '11111111-0000-0000-0000-000000000005', 'Nursing', 'NURS', 'Dr. Rebecca Vance')
ON CONFLICT DO NOTHING;

-- 5. Insert Institutional Metrics (FY2026)
INSERT INTO public.institutional_metrics (
    institution_id, fiscal_year, academic_term, total_enrollment,
    retention_rate_first_year, six_year_graduation_rate, tuition_revenue,
    state_appropriations, operating_expenses, cyber_risk_score, accreditation_readiness_score
) VALUES (
    '00000000-0000-0000-0000-000000000001',
    2026,
    'Fall 2026',
    10000,
    84.2,
    66.4,
    104200000.00,
    48500000.00,
    166100000.00,
    18,
    94
) ON CONFLICT DO NOTHING;
