import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, Check, ChevronDown, CheckCircle, ChevronRight, User, BookOpen, Users, Lightbulb, Code, Globe, Clock, Trophy, Shield, Rocket, Loader2 } from 'lucide-react';
import { supabase } from '../lib/supabase';

// --- Types ---
type ParticipationType = 'Solo' | 'Team';
type IdeaStatus = 'Yes' | 'No';
type CommitmentStatus = 'Yes' | 'No';
type VoiceStatus = 'Yes' | 'Maybe' | 'No';

interface FormData {
    // 1. Basic Details
    fullName: string;
    email: string;
    mobile: string;
    age: string;
    gender: string;
    city: string;
    state: string;
    country: string;

    // 2. Education
    status: string;
    organization: string;
    experienceLevel: string;

    // 3. Team
    participationType: ParticipationType;
    teamName: string;
    teamSize: string;
    teamLeaderName: string;
    teamLeaderEmail: string;
    teamLeaderPhone: string;

    // 4. Project
    hasIdea: IdeaStatus;
    projectTitle: string;
    ideaDescription: string;
    problemStatement: string;
    targetUsers: string;
    proposedSolution: string;
    techStack: string[];

    // 5. Skills
    skills: string[];

    // 6. Online Presence
    github: string;
    linkedin: string;
    portfolio: string;

    // 7. Availability
    fullCommitment: CommitmentStatus;
    voiceSessions: VoiceStatus;

    // 8. Motivation
    motivation: string;
    expectations: string;

    // 9. Rules
    agreedToRules: boolean;
    originalWork: boolean;
    allowShowcase: boolean;
}

const INITIAL_DATA: FormData = {
    fullName: '', email: '', mobile: '', age: '', gender: '', city: '', state: '', country: '',
    status: '', organization: '', experienceLevel: '',
    participationType: 'Solo', teamName: '', teamSize: '2', teamLeaderName: '', teamLeaderEmail: '', teamLeaderPhone: '',
    hasIdea: 'No', projectTitle: '', ideaDescription: '', problemStatement: '', targetUsers: '', proposedSolution: '', techStack: [],
    skills: [],
    github: '', linkedin: '', portfolio: '',
    fullCommitment: 'Yes', voiceSessions: 'Yes',
    motivation: '', expectations: '',
    agreedToRules: false, originalWork: false, allowShowcase: false
};

// --- Options Constants ---
const STATUS_OPTIONS = ["Student", "Working Professional", "Freelancer", "Self-taught", "Other"];
const EXP_LEVELS = ["Beginner", "Intermediate", "Advanced"];
const SKILL_OPTIONS = ["Frontend", "Backend", "AI / ML", "UI / UX", "DevOps / Cloud", "Data Science", "Cybersecurity", "Product / Idea"];
const TECH_STACK_OPTIONS = ["Web", "Mobile", "AI / ML", "Blockchain", "IoT", "Open Source", "Other"];

// --- Components ---

const StepIndicator = ({ currentStep, totalSteps }: { currentStep: number; totalSteps: number }) => {
    return (
        <div className="flex gap-2 mb-8">
            {Array.from({ length: totalSteps }).map((_, i) => (
                <div key={i} className="h-1 flex-1 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: i <= currentStep ? '100%' : '0%' }}
                        className={`h-full ${i < currentStep ? 'bg-primary' : i === currentStep ? 'bg-white' : 'bg-transparent'}`}
                    />
                </div>
            ))}
        </div>
    );
};

const FormInput = ({ label, type = "text", value, onChange, placeholder, required = false }: any) => (
    <div className="space-y-2">
        <label className="text-xs font-bold text-muted uppercase tracking-wider flex items-center gap-1">
            {label} {required && <span className="text-red-500">*</span>}
        </label>
        <input
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all font-light [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
        />
    </div>
);

const FormSelect = ({ label, value, onChange, options, placeholder, required = false }: any) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="space-y-2 relative">
            <label className="text-xs font-bold text-muted uppercase tracking-wider flex items-center gap-1">
                {label} {required && <span className="text-red-500">*</span>}
            </label>
            <div className="relative">
                <button
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-left focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all font-light flex justify-between items-center"
                >
                    <span className={value ? "text-white" : "text-white/20"}>
                        {value || placeholder}
                    </span>
                    <ChevronDown className={`w-4 h-4 text-white/50 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                </button>

                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="absolute top-full left-0 w-full mt-2 bg-[#1A1A1A] border border-white/10 rounded-xl overflow-hidden shadow-xl z-50 max-h-60 overflow-y-auto"
                        >
                            {options.map((opt: string) => (
                                <button
                                    key={opt}
                                    type="button"
                                    onClick={() => {
                                        onChange(opt);
                                        setIsOpen(false);
                                    }}
                                    className="w-full text-left px-4 py-3 text-white/80 hover:bg-white/10 hover:text-white transition-colors flex items-center justify-between"
                                >
                                    {opt}
                                    {value === opt && <Check className="w-4 h-4 text-primary" />}
                                </button>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
            {isOpen && <div className="fixed inset-0 z-40 bg-transparent" onClick={() => setIsOpen(false)} />}
        </div>
    );
};

const FormTextarea = ({ label, value, onChange, placeholder, required = false }: any) => (
    <div className="space-y-2">
        <label className="text-xs font-bold text-muted uppercase tracking-wider flex items-center gap-1">
            {label} {required && <span className="text-red-500">*</span>}
        </label>
        <textarea
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            rows={4}
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all font-light resize-none"
        />
    </div>
);

const MultiSelect = ({ label, options, selected, onChange }: any) => {
    const toggle = (opt: string) => {
        if (selected.includes(opt)) {
            onChange(selected.filter((s: string) => s !== opt));
        } else {
            onChange([...selected, opt]);
        }
    };

    return (
        <div className="space-y-3">
            <label className="text-xs font-bold text-muted uppercase tracking-wider">{label}</label>
            <div className="flex flex-wrap gap-2">
                {options.map((opt: string) => (
                    <button
                        key={opt}
                        type="button"
                        onClick={() => toggle(opt)}
                        className={`px-4 py-2 rounded-lg text-sm border transition-all ${selected.includes(opt)
                            ? 'bg-primary/20 border-primary text-white font-medium'
                            : 'bg-white/5 border-white/10 text-muted hover:bg-white/10'
                            }`}
                    >
                        {opt}
                    </button>
                ))}
            </div>
        </div>
    );
};

// --- Main Component ---
export const RegistrationPage = ({ onBack }: { onBack: () => void }) => {
    const [step, setStep] = useState(0);
    const [data, setData] = useState<FormData>(INITIAL_DATA);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const updateData = (field: keyof FormData, value: any) => {
        setData(prev => ({ ...prev, [field]: value }));
    };

    const handleSubmit = async () => {
        if (!data.agreedToRules) {
            alert("Please agree to the Rules & Code of Conduct.");
            return;
        }
        setIsSubmitting(true);
        try {
            // Check if email already exists
            const { data: existingUser, error: checkError } = await supabase
                .from('registrations')
                .select('id')
                .eq('email', data.email)
                .maybeSingle();

            if (checkError) {
                console.error("Error checking email:", checkError);
                // We continue to try inserting if check fails, or you could stop. 
                // Usually better to fail safe or alert. Let's alert for now if critical.
            }

            if (existingUser) {
                alert("This email is already registered. Please use a different email or contact support.");
                setIsSubmitting(false);
                return;
            }

            const { error } = await supabase
                .from('registrations')
                .insert([
                    {
                        full_name: data.fullName,
                        email: data.email,
                        mobile: data.mobile,
                        age: parseInt(data.age) || 0,
                        gender: data.gender,
                        city: data.city,
                        state: data.state,
                        country: data.country,
                        education_status: data.status,
                        organization: data.organization,
                        experience_level: data.experienceLevel,
                        github: data.github,
                        linkedin: data.linkedin,
                        portfolio: data.portfolio,
                        skills: data.skills,
                        participation_type: data.participationType,
                        team_name: data.teamName,
                        team_size: parseInt(data.teamSize) || 1,
                        team_leader_name: data.teamLeaderName,
                        team_leader_email: data.teamLeaderEmail,
                        team_leader_phone: data.teamLeaderPhone,
                        has_idea: data.hasIdea === 'Yes',
                        project_title: data.projectTitle,
                        problem_statement: data.problemStatement,
                        idea_desc: data.ideaDescription,
                        tech_stack: data.techStack,
                        full_commitment: data.fullCommitment === 'Yes',
                        voice_sessions: data.voiceSessions,
                        motivation: data.motivation,
                        expectations: data.expectations
                    }
                ]);

            if (error) throw error;
            setIsSubmitted(true);
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('Failed to register. Please try again or contact support.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const steps = [
        { title: "Identity", icon: User },
        { title: "Background", icon: BookOpen },
        { title: "Team & Skills", icon: Users },
        { title: "Review", icon: CheckCircle }
    ];

    const handleNext = () => {
        // Basic Validation
        if (step === 0) {
            if (!data.fullName || !data.email || !data.mobile) return alert("Please fill in all required fields.");

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(data.email)) return alert("Please enter a valid email address.");

            const phoneRegex = /^\+?[0-9]{10,15}$/;
            if (!phoneRegex.test(data.mobile.replace(/[\s-]/g, ''))) return alert("Please enter a valid mobile number.");
        }
        if (step === 1 && (!data.status || !data.experienceLevel)) return alert("Please complete your background details.");

        setStep(prev => Math.min(prev + 1, steps.length - 1));
    };
    const handlePrev = () => setStep(prev => Math.max(prev - 1, 0));

    const renderStep = () => {
        const variants = {
            hidden: { opacity: 0, x: 20 },
            visible: { opacity: 1, x: 0 },
            exit: { opacity: 0, x: -20 }
        };

        const renderContent = () => {
            switch (step) {
                case 0: // Identity
                    return (
                        <>
                            <h2 className="text-2xl font-bold text-white mb-6">Basic Details</h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                <FormInput label="Full Name" required value={data.fullName} onChange={(e: any) => updateData('fullName', e.target.value)} placeholder="e.g. John Doe" />
                                <FormInput label="Age" type="number" required value={data.age} onChange={(e: any) => updateData('age', e.target.value)} placeholder="e.g. 21" />
                            </div>
                            <div className="grid md:grid-cols-2 gap-6">
                                <FormInput label="Email Address" type="email" required value={data.email} onChange={(e: any) => updateData('email', e.target.value)} placeholder="you@example.com" />
                                <FormInput label="Mobile Number" type="tel" required value={data.mobile} onChange={(e: any) => updateData('mobile', e.target.value)} placeholder="+91 98765 43210" />
                            </div>
                            <div className="grid md:grid-cols-2 gap-6">
                                <FormSelect label="Gender" value={data.gender} onChange={(val: string) => updateData('gender', val)} options={["Male", "Female", "Other", "Prefer not to say"]} placeholder="Select Gender" />
                            </div>
                            <div className="grid md:grid-cols-3 gap-6">
                                <FormInput label="City" required value={data.city} onChange={(e: any) => updateData('city', e.target.value)} placeholder="e.g. Bangalore" />
                                <FormInput label="State" required value={data.state} onChange={(e: any) => updateData('state', e.target.value)} placeholder="e.g. Karnataka" />
                                <FormInput label="Country" required value={data.country} onChange={(e: any) => updateData('country', e.target.value)} placeholder="e.g. India" />
                            </div>
                        </>
                    );
                case 1: // Background
                    return (
                        <>
                            <h2 className="text-2xl font-bold text-white mb-6">Education & Background</h2>
                            <FormSelect label="Current Status" required value={data.status} onChange={(val: string) => updateData('status', val)} options={STATUS_OPTIONS} placeholder="Select Status" />
                            <FormInput label="College / Organization Name" value={data.organization} onChange={(e: any) => updateData('organization', e.target.value)} placeholder="e.g. IIT Bombay / Google" />
                            <FormSelect label="Experience Level" required value={data.experienceLevel} onChange={(val: string) => updateData('experienceLevel', val)} options={EXP_LEVELS} placeholder="Select Level" />
                            <div className="grid md:grid-cols-2 gap-6 pt-4">
                                <FormInput label="GitHub Profile" value={data.github} onChange={(e: any) => updateData('github', e.target.value)} placeholder="github.com/username" />
                                <FormInput label="LinkedIn Profile" value={data.linkedin} onChange={(e: any) => updateData('linkedin', e.target.value)} placeholder="linkedin.com/in/username" />
                            </div>
                            <FormInput label="Portfolio / Website" value={data.portfolio} onChange={(e: any) => updateData('portfolio', e.target.value)} placeholder="yourwebsite.com" />
                        </>
                    );
                case 2: // Team & Skills
                    return (
                        <>
                            <h2 className="text-2xl font-bold text-white mb-6">Team & Skills</h2>
                            <MultiSelect label="Your Skill Set" options={SKILL_OPTIONS} selected={data.skills} onChange={(val: string[]) => updateData('skills', val)} />
                            <div className="pt-6 border-t border-white/5">
                                <label className="text-xs font-bold text-muted uppercase tracking-wider block mb-4">Participation Type</label>
                                <div className="flex gap-4">
                                    {['Solo', 'Team'].map((type) => (
                                        <button
                                            key={type}
                                            onClick={() => updateData('participationType', type)}
                                            className={`flex-1 py-4 rounded-xl border flex items-center justify-center gap-2 transition-all ${data.participationType === type
                                                ? 'bg-primary/20 border-primary text-white'
                                                : 'bg-white/5 border-white/10 text-muted hover:bg-white/10'
                                                }`}
                                        >
                                            {type === 'Solo' ? <User className="w-4 h-4" /> : <Users className="w-4 h-4" />}
                                            <span className="font-bold">{type}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>
                            {data.participationType === 'Team' && (
                                <div className="space-y-6 pt-4 p-6 bg-white/5 rounded-2xl border border-white/10">
                                    <h3 className="text-lg font-bold text-white">Team Details</h3>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <FormInput label="Team Name" required value={data.teamName} onChange={(e: any) => updateData('teamName', e.target.value)} placeholder="e.g. Code Warriors" />
                                        <FormSelect label="Team Size" value={data.teamSize} onChange={(val: string) => updateData('teamSize', val)} options={["2", "3", "4"]} placeholder="Size" />
                                    </div>
                                    <FormInput label="Team Leader Name" required value={data.teamLeaderName} onChange={(e: any) => updateData('teamLeaderName', e.target.value)} placeholder="e.g. You" />
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <FormInput label="Leader Email" required value={data.teamLeaderEmail} onChange={(e: any) => updateData('teamLeaderEmail', e.target.value)} placeholder="email@example.com" />
                                        <FormInput label="Leader Phone" required value={data.teamLeaderPhone} onChange={(e: any) => updateData('teamLeaderPhone', e.target.value)} placeholder="+91..." />
                                    </div>
                                </div>
                            )}
                        </>
                    );

                case 3: // Final
                    return (
                        <>
                            <h2 className="text-2xl font-bold text-white mb-6">Final Touch</h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-muted uppercase tracking-wider block">Commit Full Duration?</label>
                                    <div className="flex gap-2">
                                        {['Yes', 'No'].map(opt => (
                                            <button key={opt} onClick={() => updateData('fullCommitment', opt)} className={`flex-1 py-2 rounded border text-sm ${data.fullCommitment === opt ? 'bg-white text-black font-bold' : 'bg-transparent border-white/20 text-muted'}`}>{opt}</button>
                                        ))}
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-muted uppercase tracking-wider block">Join Voice Sessions?</label>
                                    <div className="flex gap-2">
                                        {['Yes', 'Maybe', 'No'].map(opt => (
                                            <button key={opt} onClick={() => updateData('voiceSessions', opt)} className={`flex-1 py-2 rounded border text-sm ${data.voiceSessions === opt ? 'bg-white text-black font-bold' : 'bg-transparent border-white/20 text-muted'}`}>{opt}</button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <FormTextarea label="Why participate? (Short)" value={data.motivation} onChange={(e: any) => updateData('motivation', e.target.value)} placeholder="Your motivation..." />
                            <FormTextarea label="Expectations" value={data.expectations} onChange={(e: any) => updateData('expectations', e.target.value)} placeholder="What do you want to learn?" />
                            <div className="pt-6 space-y-4">
                                {[
                                    { key: 'agreedToRules', label: 'I agree to the Hackathon Rules & Code of Conduct' },
                                    { key: 'originalWork', label: 'I confirm this is my original work' },
                                    { key: 'allowShowcase', label: 'I allow organizers to showcase my project' }
                                ].map((item) => (
                                    <label key={item.key} className="flex items-center gap-3 cursor-pointer group">
                                        <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${
                                            /* @ts-ignore */
                                            data[item.key] ? 'bg-primary border-primary' : 'border-white/20 group-hover:border-white/50'
                                            }`}>
                                            {/* @ts-ignore */
                                                data[item.key] && <Check className="w-3 h-3 text-white" />}
                                        </div>
                                        {/* @ts-ignore */}
                                        <input type="checkbox" className="hidden" checked={data[item.key]} onChange={(e) => updateData(item.key as any, e.target.checked)} />
                                        <span className="text-sm text-white/80 group-hover:text-white transition-colors">{item.label}</span>
                                    </label>
                                ))}
                            </div>
                        </>
                    );
                default: return null;
            }
        };

        return (
            <motion.div
                key={step}
                variants={variants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="space-y-6"
            >
                {renderContent()}
            </motion.div>
        );
    };

    return (
        <div className="min-h-screen bg-black p-[10px] font-sans text-white box-border">
            <div className="w-full min-h-[calc(100vh-20px)] bg-[#0F0F0F] rounded-[20px] border border-white/10 relative flex flex-col md:flex-row shadow-2xl">

                {/* Left Side: Context/Info */}
                <div className="hidden md:flex flex-col justify-between p-12 w-1/3 border-r border-white/5 relative z-10 bg-white/[0.02]">
                    <div>
                        <button
                            onClick={onBack}
                            className="flex items-center gap-2 text-muted hover:text-white transition-colors mb-12 group"
                        >
                            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                            <span className="text-sm font-medium uppercase tracking-wider">Back to Home</span>
                        </button>

                        <h1 className="text-4xl font-heading font-medium text-white mb-6 leading-tight">
                            Start Your <br /> <span className="text-primary">Sprint.</span>
                        </h1>
                        <p className="text-muted leading-relaxed mb-8 text-lg font-light">
                            Finish in 5 minutes. Build for 50 hours.
                        </p>

                        <div className="mb-8 inline-block px-4 py-2 rounded-lg bg-white/5 border border-white/10">
                            <div className="flex items-center gap-3 text-white/80">
                                <Clock className="w-4 h-4 text-accentPurple" />
                                <span className="text-xs font-bold uppercase tracking-widest">Date: TBA (To Be Announced)</span>
                            </div>
                        </div>

                        <div className="space-y-6">
                            {steps.map((s, i) => (
                                <div key={i} className={`flex items-center gap-4 text-sm transition-colors ${i === step ? 'text-white font-bold' : i < step ? 'text-primary' : 'text-white/30'}`}>
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center border ${i === step ? 'border-white bg-white/10' : i < step ? 'border-primary bg-primary/10 text-primary' : 'border-white/10'}`}>
                                        {i < step ? <Check className="w-4 h-4" /> : <s.icon className="w-4 h-4" />}
                                    </div>
                                    <span>{s.title}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="text-[10px] text-muted uppercase tracking-widest font-bold opacity-50">
                        Step {step + 1} of {steps.length}
                    </div>
                </div>

                {/* Right Side: Form */}
                <div className="flex-1 p-6 md:p-20 overflow-y-auto relative z-10 flex flex-col">
                    {/* Mobile Header */}
                    <div className="md:hidden w-full mb-8 flex justify-between items-center">
                        <button onClick={onBack} className="text-muted hover:text-white"><ArrowLeft className="w-5 h-5" /></button>
                        <span className="text-sm font-bold text-white/50">Step {step + 1}/{steps.length}</span>
                    </div>

                    <div className="max-w-xl mx-auto w-full flex-grow flex flex-col justify-center">
                        <StepIndicator currentStep={step} totalSteps={steps.length} />

                        <AnimatePresence mode="wait">
                            {isSubmitted ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="flex flex-col items-center justify-center h-full text-center space-y-6"
                                >
                                    <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-2 relative">
                                        <div className="absolute inset-0 bg-green-500/20 blur-xl rounded-full animate-pulse" />
                                        <CheckCircle className="w-10 h-10 text-green-500" />
                                    </div>

                                    <div>
                                        <h2 className="text-3xl font-bold text-white mb-2">Registration Confirmed!</h2>
                                        <p className="text-muted text-sm max-w-sm mx-auto">
                                            You've taken the first step. Now, let's get you ready for the sprint.
                                        </p>
                                    </div>

                                    <div className="p-1 rounded-2xl bg-gradient-to-br from-[#5865F2] to-accentPurple w-full max-w-sm">
                                        <div className="bg-[#0F0F0F] rounded-[14px] p-6 text-left relative overflow-hidden">
                                            <div className="absolute top-0 right-0 p-3 opacity-10">
                                                <Users className="w-24 h-24" />
                                            </div>

                                            <h3 className="text-xl font-bold text-white mb-2 pr-10">
                                                🚀 Vital Next Step
                                            </h3>
                                            <p className="text-sm text-gray-300 mb-6 leading-relaxed">
                                                The entire sprint happens on Discord.
                                                <ul className="list-disc list-inside mt-2 space-y-1 text-gray-400">
                                                    <li>Find teammates & discuss ideas</li>
                                                    <li>Get mentor support (24/7)</li>
                                                    <li>Submit your final project</li>
                                                </ul>
                                            </p>

                                            <button
                                                onClick={() => window.open('https://discord.gg/t9S8fznbpn', '_blank')}
                                                className="w-full py-3.5 rounded-xl bg-[#5865F2] hover:bg-[#4752C4] text-white font-bold transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(88,101,242,0.4)] group"
                                            >
                                                <img src="https://assets-global.website-files.com/6257adef93867e56f84d3092/636e0a6a49cf127bf92de1e2_icon_clyde_blurple_RGB.png" className="w-5 h-5 brightness-0 invert" alt="" />
                                                Join Sprint Server
                                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                            </button>
                                        </div>
                                    </div>

                                    <div className="space-y-4 pt-4">
                                        <p className="text-xs text-white/30 uppercase tracking-widest font-bold">What happens next?</p>
                                        <div className="flex gap-4 text-xs text-muted">
                                            <div className="flex items-center gap-2">
                                                <span className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center font-mono">1</span>
                                                Check Email
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center font-mono">2</span>
                                                Join Discord
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center font-mono">3</span>
                                                Start Building
                                            </div>
                                        </div>
                                    </div>

                                    <button onClick={onBack} className="text-muted hover:text-white text-xs underline pt-4">
                                        Back to Home
                                    </button>
                                </motion.div>
                            ) : (
                                <form className="flex-grow" onSubmit={(e) => e.preventDefault()}>
                                    <AnimatePresence mode="wait">
                                        {renderStep()}
                                    </AnimatePresence>
                                </form>
                            )}
                        </AnimatePresence>

                        {!isSubmitted && (
                            <div className="flex justify-between items-center pt-10 mt-auto">
                                <button
                                    type="button"
                                    onClick={handlePrev}
                                    className={`px-6 py-3 rounded-xl border border-white/10 text-white/70 hover:bg-white/5 hover:text-white transition-all flex items-center gap-2 ${step === 0 ? 'invisible' : ''}`}
                                >
                                    Back
                                </button>

                                {step < steps.length - 1 ? (
                                    <button
                                        type="button"
                                        onClick={handleNext}
                                        className="px-8 py-3 rounded-xl bg-white text-black font-bold hover:bg-primary hover:text-white transition-all shadow-lg flex items-center gap-2 group"
                                    >
                                        Next Step <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </button>
                                ) : (
                                    <button
                                        type="button"
                                        onClick={handleSubmit}
                                        disabled={isSubmitting}
                                        className="px-8 py-3 rounded-xl bg-gradient-to-r from-primary to-accentPurple text-white font-bold hover:shadow-[0_0_20px_rgba(109,124,255,0.4)] transition-all shadow-lg flex items-center gap-2 scale-105 disabled:opacity-50 disabled:grayscale disabled:pointer-events-none"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <Loader2 className="w-4 h-4 animate-spin" />
                                                Registering...
                                            </>
                                        ) : (
                                            <>
                                                Submit Application <Rocket className="w-4 h-4" />
                                            </>
                                        )}
                                    </button>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};


