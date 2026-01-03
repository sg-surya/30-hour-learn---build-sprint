# 30-Hour Learn & Build Sprint - Hackathon Portal

This is the official registration and submission portal for the 30-Hour Learn & Build Sprint hackathon. It allows participants to register for the event and submit their final presentations.

## 🚀 Tech Stack

- **Frontend Framework**: React (Vite)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Database**: Supabase
- **Smooth Scrolling**: Lenis

## 🛠️ Setup Instructions

Follow these steps to set up the project locally:

### 1. Prerequisites
- Node.js (v18 or higher recommended)
- npm (comes with Node.js)

### 2. Installation

```bash
# Clone the repository
git clone <repository-url>

# Navigate to the project directory
cd 30-hour-learn---build-sprint

# Install dependencies
npm install
```

### 3. Environment Configuration

Create a `.env` file in the root directory. You can copy the structure from `.env.example` (if available) or use the following keys:

```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

> **⚠️ IMPORTANT**: Never commit your `.env` file to GitHub. It contains sensitive API keys.

### 4. Running Locally

Start the development server:

```bash
npm run dev
```

The app will be available at `http://localhost:5173` (or another port if 5173 is busy).

## 📂 Project Structure

- **`src/App.tsx`**: Main entry point, handles routing logic.
- **`src/components/`**:
  - `Hero.tsx`: Landing page hero section.
  - `RegistrationPage.tsx`: Multi-step registration form.
  - `PPTSubmissionPage.tsx`: PPT submission form with validation.
  - `LandingSections.tsx`: Other sections like "What to Submit", "Timeline", etc.
- **`src/lib/supabase.ts`**: Supabase client configuration.

## 🗄️ Database Schema (Supabase)

The project uses two main tables in Supabase:

1.  **`registrations`**: Stores participant details (Name, Email, Team, Skills, etc.).
2.  **`ppt_submissions`**: Stores final project submissions. Linked to `registrations` via email.

## 🚢 Building for Production

To create an optimized build for deployment:

```bash
npm run build
```

The output will be in the `dist` folder, which can be deployed to Vercel, Netlify, or any static hosting service.

## 📝 Git Workflow

- **Do not commit**: `.env`, `node_modules`, `dist` folder.
- **Branching**: Use feature branches for new changes (e.g., `feature/new-section`).
