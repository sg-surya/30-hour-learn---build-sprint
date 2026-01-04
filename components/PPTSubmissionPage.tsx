import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, CheckCircle, Loader2, Rocket, Link as LinkIcon, Github, Youtube, FileText, User, Users, Mail, ChevronDown, ChevronRight, Check, XCircle, AlertCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface PPTFormData {
    teamName: string;
    teamLeaderName: string;
    teamLeaderEmail: string;
    projectTitle: string;
    problemStatement: string;
    customProblem: string;
    proposedSolution: string;
    pptLink: string;
    videoLink: string;
    githubLink: string;
}

const PROBLEM_STATEMENTS = [
    "EdTech - Learning, skills, access",
    "FinTech - Fraud, payments, inclusion",
    "MedTech - Healthcare access, data",
    "AgriTech - Small farmers, climate risk",
    "AI & DeepTech - Deepfakes, trust, agents",
    "DevTools - Productivity, automation",
    "Smart Cities - Urban infra, sanitation",
    "ClimateTech - Carbon, energy, waste",
    "E-Commerce - Retail, logistics, payment",
    "Logistics - Supply chain, tracking",
    "Cybersecurity - Safety, privacy, fraud",
    "Social Impact - Inclusion, livelihood",
    "Media & Creator - IP rights, misinformation",
    "Open Innovation - Heritage, governance"
];

const INITIAL_DATA: PPTFormData = {
    teamName: '',
    teamLeaderName: '',
    teamLeaderEmail: '',

    projectTitle: '',
    problemStatement: '',
    customProblem: '',
    proposedSolution: '',
    pptLink: '',
    videoLink: '',
    githubLink: ''
};

const FormInput = ({ label, type = "text", value, onChange, placeholder, required = false, icon: Icon }: any) => (
    <div className="space-y-2">
        <label className="text-xs font-bold text-muted uppercase tracking-wider flex items-center gap-1">
            {label} {required && <span className="text-red-500">*</span>}
        </label>
        <div className="relative">
            {Icon && (
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30">
                    <Icon className="w-4 h-4" />
                </div>
            )}
            <input
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className={`w-full bg-white/5 border border-white/10 rounded-xl ${Icon ? 'pl-10' : 'px-4'} pr-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all font-light`}
            />
        </div>
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
                            className="absolute top-full left-0 w-full mt-2 bg-[#1A1A1A] border border-white/10 rounded-xl overflow-hidden shadow-xl z-[100]"
                        >
                            <div className="max-h-60 overflow-y-auto overscroll-contain" data-lenis-prevent>
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
                            </div>
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

// Step Indicator Component
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

export const PPTSubmissionPage = ({ onBack }: { onBack: () => void }) => {
    const [step, setStep] = useState(0);
    const [data, setData] = useState<PPTFormData>(INITIAL_DATA);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'success' | 'error' | 'duplicate'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const updateData = (field: keyof PPTFormData, value: any) => {
        setData(prev => ({ ...prev, [field]: value }));
    };

    const steps = [
        { title: "Team Details", icon: Users },
        { title: "Problem", icon: FileText },
        { title: "Links", icon: LinkIcon },
        { title: "Review", icon: CheckCircle }
    ];

    const handleNext = () => {
        // Validation for each step
        if (step === 0) {
            if (!data.teamName || !data.teamLeaderName || !data.teamLeaderEmail || !data.projectTitle) {
                setSubmissionStatus('error');
                setErrorMessage("Please fill in all required team details.");
                setTimeout(() => setSubmissionStatus('idle'), 3000);
                return;
            }
        }
        if (step === 1) {
            if (!data.problemStatement) {
                setSubmissionStatus('error');
                setErrorMessage("Please select a problem statement.");
                setTimeout(() => setSubmissionStatus('idle'), 3000);
                return;
            }
        }
        if (step === 2) {
            if (!data.pptLink) {
                setSubmissionStatus('error');
                setErrorMessage("Please provide the presentation link.");
                setTimeout(() => setSubmissionStatus('idle'), 3000);
                return;
            }
        }
        setStep(prev => Math.min(prev + 1, steps.length - 1));
    };

    const handlePrev = () => setStep(prev => Math.max(prev - 1, 0));

    const handleSubmit = async (e?: React.FormEvent) => {
        if (e) e.preventDefault();

        if (!data.teamName || !data.teamLeaderName || !data.teamLeaderEmail || !data.projectTitle || !data.pptLink || !data.problemStatement) {
            setSubmissionStatus('error');
            setErrorMessage("Please fill in all required fields.");
            setTimeout(() => setSubmissionStatus('idle'), 3000);
            return;
        }

        if (data.problemStatement.includes("Open Innovation") && (!data.customProblem || !data.proposedSolution)) {
            setSubmissionStatus('error');
            setErrorMessage("Please provide Problem Description and Proposed Solution for Open Innovation.");
            setTimeout(() => setSubmissionStatus('idle'), 3000);
            return;
        }

        setIsSubmitting(true);
        try {
            // Check for duplicate email
            const { data: existing, error: checkError } = await supabase
                .from('ppt_submissions')
                .select('id')
                .eq('team_leader_email', data.teamLeaderEmail)
                .maybeSingle();

            if (checkError) {
                console.error('Check error:', checkError);
                throw new Error(`Database check failed: ${checkError.message}`);
            }

            if (existing) {
                setSubmissionStatus('duplicate');
                setErrorMessage("A submission with this email already exists.");
                setIsSubmitting(false);
                return;
            }

            const { error } = await supabase
                .from('ppt_submissions')
                .insert([
                    {
                        team_name: data.teamName,
                        team_leader_name: data.teamLeaderName,
                        team_leader_email: data.teamLeaderEmail,
                        project_title: data.projectTitle,
                        problem_statement: data.problemStatement,
                        custom_problem: data.customProblem,
                        proposed_solution: data.proposedSolution,
                        ppt_link: data.pptLink,
                        video_link: data.videoLink,
                        github_link: data.githubLink
                    }
                ]);

            if (error) {
                console.error('Insert error:', error);
                throw new Error(`Submission failed: ${error.message}`);
            }
            setSubmissionStatus('success');
        } catch (error: any) {
            console.error('Error submitting form:', error);
            setSubmissionStatus('error');
            setErrorMessage(error.message || 'Failed to submit. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    // Success/Error Modal
    if (submissionStatus !== 'idle') {
        return (
            <div className="fixed inset-0 z-[200] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="w-full max-w-md bg-[#0F0F0F] rounded-[20px] border border-white/10 p-8 text-center space-y-6 shadow-2xl relative overflow-hidden"
                >
                    {submissionStatus === 'success' && (
                        <>
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-emerald-500" />
                            <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4 relative">
                                <div className="absolute inset-0 bg-green-500/20 blur-xl rounded-full animate-pulse" />
                                <CheckCircle className="w-8 h-8 text-green-500" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-white mb-2">Congrats!</h2>
                                <p className="text-muted text-sm leading-relaxed">
                                    PPT submitted successfully. Good luck!
                                </p>
                            </div>
                            <button
                                onClick={onBack}
                                className="w-full py-3 rounded-xl bg-white text-black font-bold hover:bg-gray-200 transition-all"
                            >
                                Back to Home
                            </button>
                        </>
                    )}

                    {submissionStatus === 'duplicate' && (
                        <>
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-red-500" />
                            <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4 relative">
                                <AlertCircle className="w-8 h-8 text-orange-500" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-white mb-2">Already Submitted</h2>
                                <p className="text-muted text-sm leading-relaxed">
                                    {errorMessage}
                                </p>
                            </div>
                            <button
                                onClick={() => setSubmissionStatus('idle')}
                                className="w-full py-3 rounded-xl bg-white/10 text-white font-bold hover:bg-white/20 transition-all"
                            >
                                Try Again
                            </button>
                        </>
                    )}

                    {submissionStatus === 'error' && (
                        <>
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-pink-500" />
                            <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4 relative">
                                <XCircle className="w-8 h-8 text-red-500" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-white mb-2">Submission Failed</h2>
                                <p className="text-muted text-sm leading-relaxed">
                                    {errorMessage}
                                </p>
                            </div>
                            <button
                                onClick={() => setSubmissionStatus('idle')}
                                className="w-full py-3 rounded-xl bg-white/10 text-white font-bold hover:bg-white/20 transition-all"
                            >
                                Try Again
                            </button>
                        </>
                    )}
                </motion.div>
            </div>
        );
    }

    return (
        <div className="fixed inset-0 bg-black p-[10px] font-sans text-white box-border overflow-hidden">
            <div className="w-full h-full bg-[#0F0F0F] rounded-[20px] border border-white/10 relative flex flex-col md:flex-row shadow-2xl overflow-hidden">

                {/* Left Side: Info */}
                <div className="hidden md:flex flex-col justify-between p-12 w-1/3 border-r border-white/5 relative z-10 bg-white/[0.02] overflow-y-auto">
                    <div>
                        <button
                            onClick={onBack}
                            className="flex items-center gap-2 text-muted hover:text-white transition-colors mb-12 group"
                        >
                            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                            <span className="text-sm font-medium uppercase tracking-wider">Back to Home</span>
                        </button>

                        <h1 className="text-4xl font-heading font-medium text-white mb-6 leading-tight">
                            Submit Your <br /> <span className="text-primary">Presentation.</span>
                        </h1>
                        <p className="text-muted leading-relaxed mb-8 text-lg font-light">
                            Showcase your hard work. Make sure your links are accessible.
                        </p>

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
                <div className="flex-1 p-6 md:p-20 overflow-y-auto relative z-10 flex flex-col" data-lenis-prevent>
                    {/* Mobile Header */}
                    <div className="md:hidden w-full mb-8 flex justify-between items-center">
                        <button onClick={onBack} className="text-muted hover:text-white"><ArrowLeft className="w-5 h-5" /></button>
                        <span className="text-sm font-bold text-white/50">Step {step + 1}/{steps.length}</span>
                    </div>

                    <div className="max-w-xl mx-auto w-full flex-grow flex flex-col justify-center">
                        <StepIndicator currentStep={step} totalSteps={steps.length} />

                        <AnimatePresence mode="wait">
                            {submissionStatus === 'success' ? (
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
                                        <h2 className="text-3xl font-bold text-white mb-2">Submission Successful!</h2>
                                        <p className="text-muted text-sm max-w-sm mx-auto">
                                            Your presentation has been submitted. Good luck!
                                        </p>
                                    </div>
                                    <button onClick={onBack} className="w-full max-w-sm py-3 rounded-xl bg-white text-black font-bold hover:bg-gray-200 transition-all">
                                        Back to Home
                                    </button>
                                </motion.div>
                            ) : (
                                <>
                                    <form className="flex-grow" onSubmit={(e) => e.preventDefault()}>
                                        <AnimatePresence mode="wait">
                                            <motion.div
                                                key={step}
                                                initial={{ opacity: 0, x: 20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                exit={{ opacity: 0, x: -20 }}
                                                transition={{ duration: 0.3, ease: 'easeOut' }}
                                                className="space-y-6"
                                            >
                                                {step === 0 && (
                                                    <>
                                                        <h2 className="text-2xl font-bold text-white mb-6">Team Details</h2>
                                                        <div className="space-y-6 p-6 bg-white/5 rounded-2xl border border-white/10">
                                                            <h3 className="text-lg font-bold text-white flex items-center gap-2">
                                                                <Users className="w-5 h-5 text-primary" /> Team Details
                                                            </h3>
                                                            <div className="grid md:grid-cols-2 gap-6">
                                                                <FormInput
                                                                    label="Team Name"
                                                                    required
                                                                    value={data.teamName}
                                                                    onChange={(e: any) => updateData('teamName', e.target.value)}
                                                                    placeholder="e.g. Code Warriors"
                                                                    icon={Users}
                                                                />
                                                                <FormInput
                                                                    label="Project Title"
                                                                    required
                                                                    value={data.projectTitle}
                                                                    onChange={(e: any) => updateData('projectTitle', e.target.value)}
                                                                    placeholder="e.g. Agritech AI"
                                                                    icon={FileText}
                                                                />
                                                            </div>
                                                            <div className="grid md:grid-cols-2 gap-6">
                                                                <FormInput
                                                                    label="Leader Name"
                                                                    required
                                                                    value={data.teamLeaderName}
                                                                    onChange={(e: any) => updateData('teamLeaderName', e.target.value)}
                                                                    placeholder="e.g. John Doe"
                                                                    icon={User}
                                                                />
                                                                <FormInput
                                                                    label="Leader Email"
                                                                    type="email"
                                                                    required
                                                                    value={data.teamLeaderEmail}
                                                                    onChange={(e: any) => updateData('teamLeaderEmail', e.target.value)}
                                                                    placeholder="john@example.com"
                                                                    icon={Mail}
                                                                />
                                                            </div>
                                                        </div>
                                                    </>
                                                )}

                                                {step === 1 && (
                                                    <>
                                                        <h2 className="text-2xl font-bold text-white mb-6">Problem Statement</h2>
                                                        <div className="space-y-6 p-6 bg-white/5 rounded-2xl border border-white/10">
                                                            <h3 className="text-lg font-bold text-white flex items-center gap-2">
                                                                <FileText className="w-5 h-5 text-primary" /> Problem Statement
                                                            </h3>
                                                            <FormSelect
                                                                label="Select Problem Statement"
                                                                required
                                                                value={data.problemStatement}
                                                                onChange={(val: string) => updateData('problemStatement', val)}
                                                                options={PROBLEM_STATEMENTS}
                                                                placeholder="Choose a domain..."
                                                            />

                                                            {data.problemStatement === "Open Innovation - Heritage, governance" && (
                                                                <motion.div
                                                                    initial={{ opacity: 0, height: 0 }}
                                                                    animate={{ opacity: 1, height: 'auto' }}
                                                                    className="space-y-6 pt-2"
                                                                >
                                                                    <FormTextarea
                                                                        label="Problem Description"
                                                                        required
                                                                        value={data.customProblem}
                                                                        onChange={(e: any) => updateData('customProblem', e.target.value)}
                                                                        placeholder="Describe the problem you are solving..."
                                                                    />
                                                                    <FormTextarea
                                                                        label="Proposed Solution"
                                                                        required
                                                                        value={data.proposedSolution}
                                                                        onChange={(e: any) => updateData('proposedSolution', e.target.value)}
                                                                        placeholder="Explain your solution..."
                                                                    />
                                                                </motion.div>
                                                            )}
                                                        </div>
                                                    </>
                                                )}

                                                {step === 2 && (
                                                    <>
                                                        <h2 className="text-2xl font-bold text-white mb-6">Submission Links</h2>
                                                        <div className="space-y-6 p-6 bg-white/5 rounded-2xl border border-white/10">
                                                            <h3 className="text-lg font-bold text-white flex items-center gap-2">
                                                                <LinkIcon className="w-5 h-5 text-primary" /> Submission Links
                                                            </h3>
                                                            <FormInput
                                                                label="Presentation Link (PPT/Slides)"
                                                                required
                                                                value={data.pptLink}
                                                                onChange={(e: any) => updateData('pptLink', e.target.value)}
                                                                placeholder="https://docs.google.com/presentation/..."
                                                                icon={FileText}
                                                            />
                                                            <FormInput
                                                                label="GitHub Repository"
                                                                value={data.githubLink}
                                                                onChange={(e: any) => updateData('githubLink', e.target.value)}
                                                                placeholder="https://github.com/username/repo"
                                                                icon={Github}
                                                            />
                                                            <FormInput
                                                                label="Video Pitch (Optional)"
                                                                value={data.videoLink}
                                                                onChange={(e: any) => updateData('videoLink', e.target.value)}
                                                                placeholder="https://drive.google.com/..."
                                                                icon={Youtube}
                                                            />
                                                        </div>
                                                    </>
                                                )}

                                                {step === 3 && (
                                                    <>
                                                        <h2 className="text-2xl font-bold text-white mb-6">Review & Submit</h2>
                                                        <div className="space-y-4">
                                                            <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                                                                <h3 className="text-sm font-bold text-primary uppercase tracking-wider mb-4">Team Details</h3>
                                                                <div className="space-y-2 text-sm">
                                                                    <p><span className="text-muted">Team:</span> <span className="text-white font-medium">{data.teamName}</span></p>
                                                                    <p><span className="text-muted">Project:</span> <span className="text-white font-medium">{data.projectTitle}</span></p>
                                                                    <p><span className="text-muted">Leader:</span> <span className="text-white font-medium">{data.teamLeaderName}</span></p>
                                                                    <p><span className="text-muted">Email:</span> <span className="text-white font-medium">{data.teamLeaderEmail}</span></p>
                                                                </div>
                                                            </div>
                                                            <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                                                                <h3 className="text-sm font-bold text-primary uppercase tracking-wider mb-4">Problem Statement</h3>
                                                                <p className="text-white text-sm">{data.problemStatement}</p>
                                                            </div>
                                                            <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                                                                <h3 className="text-sm font-bold text-primary uppercase tracking-wider mb-4">Links</h3>
                                                                <div className="space-y-2 text-sm">
                                                                    <p><span className="text-muted">PPT:</span> <span className="text-white font-medium truncate block">{data.pptLink || 'Not provided'}</span></p>
                                                                    <p><span className="text-muted">GitHub:</span> <span className="text-white font-medium truncate block">{data.githubLink || 'Not provided'}</span></p>
                                                                    <p><span className="text-muted">Video:</span> <span className="text-white font-medium truncate block">{data.videoLink || 'Not provided'}</span></p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </>
                                                )}
                                            </motion.div>
                                        </AnimatePresence>
                                    </form>

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
                                                        Submitting...
                                                    </>
                                                ) : (
                                                    <>
                                                        Submit <Rocket className="w-4 h-4" />
                                                    </>
                                                )}
                                            </button>
                                        )}
                                    </div>
                                </>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </div>
    );
};
