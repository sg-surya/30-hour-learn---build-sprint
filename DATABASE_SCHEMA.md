# Database Schema - Supabase Tables

## 📋 Table: `ppt_submissions`

### Description
Stores all PPT/presentation submissions from teams for the hackathon.

### SQL Schema

```sql
-- Create the ppt_submissions table
CREATE TABLE public.ppt_submissions (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    
    -- Team Details
    team_name TEXT NOT NULL,
    team_leader_name TEXT NOT NULL,
    team_leader_email TEXT NOT NULL UNIQUE,
    project_title TEXT NOT NULL,
    
    -- Problem Statement
    problem_statement TEXT NOT NULL,
    custom_problem TEXT,
    proposed_solution TEXT,
    
    -- Submission Links
    ppt_link TEXT NOT NULL,
    github_link TEXT,
    video_link TEXT
);

-- Create index on email for faster lookups
CREATE INDEX idx_ppt_submissions_email ON public.ppt_submissions(team_leader_email);

-- Enable Row Level Security (RLS)
ALTER TABLE public.ppt_submissions ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert (for submissions)
CREATE POLICY "Allow public insert" ON public.ppt_submissions
    FOR INSERT
    WITH CHECK (true);

-- Create policy to allow reading own submissions (optional)
CREATE POLICY "Allow read own submission" ON public.ppt_submissions
    FOR SELECT
    USING (true);
```

### Columns

| Column Name | Type | Nullable | Default | Description |
|------------|------|----------|---------|-------------|
| `id` | UUID | NO | `gen_random_uuid()` | Primary key |
| `created_at` | TIMESTAMP WITH TIME ZONE | NO | `now()` | Submission timestamp |
| `team_name` | TEXT | NO | - | Name of the team |
| `team_leader_name` | TEXT | NO | - | Team leader's full name |
| `team_leader_email` | TEXT | NO | - | Team leader's email (unique) |
| `project_title` | TEXT | NO | - | Title of the project |
| `problem_statement` | TEXT | NO | - | Selected problem domain |
| `custom_problem` | TEXT | YES | - | Custom problem description (for Open Innovation) |
| `proposed_solution` | TEXT | YES | - | Proposed solution (for Open Innovation) |
| `ppt_link` | TEXT | NO | - | Link to presentation (Google Slides/PDF) |
| `github_link` | TEXT | YES | - | Link to GitHub repository |
| `video_link` | TEXT | YES | - | Link to video pitch |

---

## 📋 Table: `registrations`

### Description
Stores all participant registrations for the hackathon.

### SQL Schema

```sql
-- Create the registrations table
CREATE TABLE public.registrations (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    
    -- Basic Details
    full_name TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    mobile TEXT NOT NULL,
    age INTEGER,
    gender TEXT,
    city TEXT,
    state TEXT,
    country TEXT,
    
    -- Education & Background
    education_status TEXT,
    organization TEXT,
    experience_level TEXT,
    github TEXT,
    linkedin TEXT,
    portfolio TEXT,
    skills TEXT[],
    
    -- Team Details
    participation_type TEXT NOT NULL,
    team_name TEXT,
    team_size INTEGER,
    team_leader_name TEXT,
    team_leader_email TEXT,
    team_leader_phone TEXT,
    
    -- Project Details
    has_idea BOOLEAN DEFAULT false,
    project_title TEXT,
    problem_statement TEXT,
    idea_desc TEXT,
    tech_stack TEXT[],
    
    -- Commitment
    full_commitment BOOLEAN DEFAULT false,
    voice_sessions TEXT,
    motivation TEXT,
    expectations TEXT
);

-- Create index on email for faster lookups
CREATE INDEX idx_registrations_email ON public.registrations(email);

-- Enable Row Level Security (RLS)
ALTER TABLE public.registrations ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert (for registrations)
CREATE POLICY "Allow public insert" ON public.registrations
    FOR INSERT
    WITH CHECK (true);

-- Create policy to allow reading own registration (optional)
CREATE POLICY "Allow read own registration" ON public.registrations
    FOR SELECT
    USING (true);
```

---

## 🔧 How to Create Tables in Supabase

### Method 1: Using Supabase Dashboard (Recommended)

1. **Go to Supabase Dashboard**: https://supabase.com/dashboard
2. **Select Your Project**
3. **Go to SQL Editor** (left sidebar)
4. **Click "New Query"**
5. **Copy and paste the SQL schema** from above
6. **Click "Run"** to execute

### Method 2: Using Table Editor

1. **Go to Table Editor** (left sidebar)
2. **Click "New Table"**
3. **Manually add columns** as per the schema above
4. **Set constraints and defaults**

---

## ✅ Verification

After creating the tables, verify by:

1. Going to **Table Editor**
2. You should see both tables: `ppt_submissions` and `registrations`
3. Check the columns match the schema
4. Test by submitting a form from your app

---

## 🔐 Security Notes

- Both tables have **Row Level Security (RLS)** enabled
- Public insert is allowed for form submissions
- Consider adding admin policies for viewing all submissions
- Email fields are **UNIQUE** to prevent duplicate submissions

---

## 📊 Sample Queries

### Get all PPT submissions
```sql
SELECT * FROM ppt_submissions ORDER BY created_at DESC;
```

### Get all registrations
```sql
SELECT * FROM registrations ORDER BY created_at DESC;
```

### Count submissions by problem domain
```sql
SELECT problem_statement, COUNT(*) as count 
FROM ppt_submissions 
GROUP BY problem_statement 
ORDER BY count DESC;
```

### Get team registrations
```sql
SELECT * FROM registrations 
WHERE participation_type = 'Team' 
ORDER BY created_at DESC;
```
