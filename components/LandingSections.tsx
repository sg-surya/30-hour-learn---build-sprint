import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, Users, FileCheck, Zap, ChevronDown, Clock, Rocket, Star, Award, Layout, CheckCircle, Globe, Leaf, Briefcase, Gift, Code, PenTool, Megaphone } from 'lucide-react';
import { Reveal } from './Reveal';

export const WhatIsSprint = () => (
    <section className="relative py-16 md:py-24 bg-surface/5">
        <div className="px-8 max-w-[800px] mx-auto text-center md:text-left">
            <Reveal>
                <div className="md:text-center">
                    <h2 className="text-sm font-bold text-primary uppercase tracking-[0.4em] mb-6">WHAT IS THIS?</h2>
                    <h3 className="text-3xl md:text-5xl font-heading font-medium text-white mb-8 leading-tight">
                        <span className="md:hidden">A startup-first build sprint.<br />No pitching. No fluff.</span>
                        <span className="hidden md:inline">A startup-first build sprint.</span>
                    </h3>
                    <div className="space-y-4 text-xl text-muted font-light leading-relaxed mb-12">
                        <p className="hidden md:block">
                            Identify a real-world problem, validate it with users, and build a working solution in 50 hours — without quitting your job or college.
                        </p>

                        {/* Mobile Bullets */}
                        <div className="md:hidden space-y-4 text-left max-w-[280px] mx-auto">
                            <p className="text-white/90 text-lg">A startup-first build sprint where you identify a real problem and ship a solution.</p>
                            <div className="space-y-3 pt-4">
                                <div className="flex items-center gap-3 text-white font-medium"><div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />Real problems</div>
                                <div className="flex items-center gap-3 text-white font-medium"><div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />Real builds</div>
                                <div className="flex items-center gap-3 text-white font-medium"><div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />Real progress</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="hidden md:flex flex-wrap justify-center gap-6 md:gap-12 text-sm font-medium text-white/80">
                    <div className="flex items-center gap-3"><Clock className="w-5 h-5 text-primary" /> 50h Window · ~30h Effort</div>
                    <div className="flex items-center gap-3"><Users className="w-5 h-5 text-primary" /> Solo or Small Teams</div>
                    <div className="flex items-center gap-3"><Rocket className="w-5 h-5 text-primary" /> Build for Impact</div>
                </div>
            </Reveal>
        </div>
    </section>
);

export const HowItWorks = ({ onRegister }: { onRegister: () => void }) => (
    <section className="py-16 md:py-24 px-6 md:px-8 max-w-[1120px] mx-auto">
        <Reveal>
            <div className="mb-24 text-center">
                <h2 className="text-sm font-bold text-accentPurple uppercase tracking-[0.4em] mb-4">Process</h2>
                <h3 className="text-4xl md:text-5xl font-heading font-medium text-white">How It Works</h3>
            </div>

            <div className="flex md:grid md:grid-cols-4 gap-4 md:gap-8 relative mb-20 overflow-x-auto pb-8 md:pb-0 snap-x snap-mandatory px-4 md:px-0 -mx-6 md:mx-0 no-scrollbar">
                <div className="hidden md:block absolute top-[2.5rem] left-0 w-full h-px border-t-2 border-dashed border-white/10 -z-10" />

                {[
                    { icon: <Layout className="w-6 h-6" />, step: "01", title: "Choose Domain", desc: "Pick a real-world problem people actually struggle with." },
                    { icon: <Users className="w-6 h-6" />, step: "02", title: "Validate", desc: "Talk to 1-2 real users. Understand the pain first." },
                    { icon: <Zap className="w-6 h-6" />, step: "03", title: "Build", desc: "Spend ~30 hours building a simple, usable solution." },
                    { icon: <Rocket className="w-6 h-6" />, step: "04", title: "Submit", desc: "Show what you built, why it matters, and how it scales." }
                ].map((item, i) => (
                    <div key={i} className="relative grid place-items-center text-center group min-w-[80vw] md:min-w-0 snap-center">
                        <div className="w-20 h-20 bg-background border border-border rounded-3xl flex items-center justify-center text-muted group-hover:text-primary group-hover:border-primary/50 group-hover:shadow-[0_0_30px_-10px_rgba(109,124,255,0.3)] transition-all duration-500 mb-6 bg-gradient-to-br from-surface/50 to-background z-10 box-border">
                            {item.icon}
                        </div>

                        <div className="space-y-3">
                            <div className="text-[10px] font-bold text-accentPurple uppercase tracking-[0.2em] opacity-80">Step {item.step}</div>
                            <h4 className="text-xl font-bold text-white">{item.title}</h4>
                            <p className="text-sm text-muted font-light leading-relaxed max-w-[200px] mx-auto">{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="text-center w-full">
                <div className="inline-flex flex-col md:flex-row items-center gap-4 md:gap-6 px-6 md:px-8 py-6 md:py-4 rounded-3xl md:rounded-full bg-surface/10 border border-white/5 backdrop-blur-sm w-full md:w-auto">
                    <p className="text-lg text-white font-medium">We care about progress, not perfection.</p>
                    <div className="hidden md:block h-4 w-px bg-white/10"></div>
                    <button onClick={onRegister} className="w-full md:w-auto text-sm font-bold text-primary hover:text-white transition-colors uppercase tracking-widest py-2 md:py-0 border-t border-white/10 md:border-0 md:pt-0 pt-4 mt-2 md:mt-0">
                        Start Building →
                    </button>
                </div>
            </div>
        </Reveal>
    </section>
);

export const SprintRoadmap = () => {
    const steps = [
        {
            phase: "Phase 01",
            title: "The Registration",
            desc: "Secure your spot. Join the Discord community.",
            icon: <Users className="w-5 h-5" />,
            status: "active"
        },
        {
            phase: "Phase 02",
            title: "Team Formation",
            desc: "Find teammates. Lock your roster.",
            icon: <Users className="w-5 h-5" />,
            status: "upcoming"
        },
        {
            phase: "Phase 03",
            title: "Sprint Kickoff",
            desc: "Problem statements live. 50H timer starts.",
            icon: <Rocket className="w-5 h-5" />,
            status: "upcoming"
        },
        {
            phase: "Phase 04",
            title: "Build & Check-in",
            desc: "Deep work. Mentor guidance. Progress updates.",
            icon: <Code className="w-5 h-5" />,
            status: "upcoming"
        },
        {
            phase: "Phase 05",
            title: "The Submission",
            desc: "Code freeze. Video demo. GitHub repo.",
            icon: <FileCheck className="w-5 h-5" />,
            status: "upcoming"
        }
    ];

    return (
        <section className="py-16 md:py-24 px-6 md:px-8 max-w-[1280px] mx-auto border-t border-white/5">
            <Reveal>
                <div className="text-center mb-20">
                    <h2 className="text-[11px] font-bold text-accentPurple uppercase tracking-[0.6em] mb-6">The Timeline</h2>
                    <h3 className="section-headline text-4xl md:text-5xl font-medium text-white mb-6">From Idea to Ship.</h3>
                    <p className="text-xl text-muted font-light max-w-2xl mx-auto leading-relaxed">
                        A structured 50-hour window designed for maximum output.
                    </p>
                </div>

                <div className="relative">
                    {/* Horizontal Line (Desktop) */}
                    <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                    {/* Vertical Line (Mobile) */}
                    <div className="md:hidden absolute top-0 left-8 w-0.5 h-full bg-gradient-to-b from-transparent via-white/10 to-transparent" />

                    <div className="grid md:grid-cols-5 gap-12 md:gap-4 relative">
                        {steps.map((step, i) => (
                            <div key={i} className="relative flex flex-row md:flex-col items-start md:items-center gap-6 md:gap-0 group">
                                {/* Node */}
                                <div className="md:mb-8 relative shrink-0">
                                    <div className="w-16 h-16 rounded-full bg-[#0A0A0A] border border-white/10 flex items-center justify-center relative z-10 group-hover:border-primary/50 transition-colors duration-500">
                                        <div className={`text-white/40 group-hover:text-primary transition-colors duration-500 ${step.status === 'active' ? 'text-primary' : ''}`}>
                                            {step.icon}
                                        </div>
                                    </div>
                                    {/* Active Pulse */}
                                    {step.status === 'active' && (
                                        <div className="absolute inset-0 bg-primary/20 rounded-full animate-ping" />
                                    )}
                                </div>

                                {/* Content */}
                                <div className="pt-2 md:pt-0 md:text-center">
                                    <div className="text-[10px] font-bold text-primary uppercase tracking-widest mb-2 opacity-80">{step.phase}</div>
                                    <h4 className="text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors duration-300">{step.title}</h4>
                                    <p className="text-sm text-muted font-light leading-relaxed">{step.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Reveal>
        </section>
    );
};

export const Protocol5030 = () => (
    <section className="relative py-16 md:py-24 bg-surface/5 border-y border-white/5">
        <div className="px-8 max-w-[1120px] mx-auto">
            <Reveal x={-20}>
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div className="text-center md:text-left">
                        <h2 className="text-sm font-bold text-primary uppercase tracking-[0.4em] mb-6">BUILT FOR REAL BUILDERS</h2>

                        {/* Mobile Numbers Block */}
                        <div className="md:hidden mb-8">
                            <div className="grid grid-cols-2 gap-8 text-center border-b border-white/10 pb-8 mb-8">
                                <div>
                                    <div className="text-5xl font-heading font-bold text-white mb-2">50H</div>
                                    <div className="text-[10px] uppercase tracking-widest text-muted">Total Sprint</div>
                                </div>
                                <div>
                                    <div className="text-5xl font-heading font-bold text-primary mb-2">~30H</div>
                                    <div className="text-[10px] uppercase tracking-widest text-muted">Active Build</div>
                                </div>
                            </div>
                            <p className="text-white/80 font-medium">No pitches. No theory.<br />Only shipping.</p>
                        </div>

                        <h3 className="hidden md:block text-3xl md:text-4xl font-heading font-medium text-white mb-8">Built for real builders with real lives.</h3>
                        <div className="hidden md:block space-y-4 text-lg text-muted font-light">
                            <p>Flexible slots. Honest progress. High stakes delivery.</p>
                            <p className="opacity-80">We don't track your minutes with a stopwatch. We judge your commitment through daily check-ins and the quality of what you ship.</p>
                        </div>
                    </div>

                    <div className="hidden md:flex flex-col gap-4 mt-8">
                        <div className="p-8 border border-border bg-surface/10 rounded-[2.5rem] relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-8 opacity-5"><Clock className="w-32 h-32" /></div>
                            <h4 className="text-xs font-bold text-white/50 uppercase tracking-[0.2em] mb-8">The Balance</h4>
                            <div className="space-y-8">
                                <div className="flex flex-col md:flex-row justify-between items-center md:items-end border-b border-white/5 pb-4 text-center md:text-left gap-2 md:gap-0">
                                    <span className="text-white text-5xl md:text-4xl font-heading font-bold order-1 md:order-2">50H</span>
                                    <span className="text-muted text-sm uppercase tracking-widest order-2 md:order-1">Total Sprint Window</span>
                                </div>
                                <div className="flex flex-col md:flex-row justify-between items-center md:items-end border-b border-white/5 pb-4 text-center md:text-left gap-2 md:gap-0">
                                    <span className="text-primary text-5xl md:text-4xl font-heading font-bold order-1 md:order-2">~30H</span>
                                    <span className="text-muted text-sm uppercase tracking-widest order-2 md:order-1">Recommended Effort</span>
                                </div>
                                <p className="text-xs text-muted/60 italic">
                                    *We don't track hours. We evaluate output.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Reveal>
        </div>
    </section>
);

export const JudgingMindset = () => (
    <section className="py-16 md:py-24 px-6 md:px-8 max-w-[1120px] mx-auto bg-surface/5 rounded-[2rem] md:rounded-[3rem]">
        <Reveal>
            <div className="grid md:grid-cols-2 gap-16 items-center">
                <div>
                    <h2 className="text-sm font-bold text-accentPurple uppercase tracking-[0.4em] mb-8">What we're looking for</h2>
                    <h3 className="text-4xl md:text-5xl font-heading font-medium text-white mb-8">
                        Usefulness over Complexity.
                    </h3>
                    <p className="text-xl text-muted font-light leading-relaxed mb-8">
                        We don't care about your tech stack. We care if it works for a real user.
                    </p>
                    <ul className="space-y-6">
                        <li className="flex gap-4 items-start">
                            <div className="w-6 h-6 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center shrink-0 mt-0.5"><CheckCircle className="w-4 h-4" /></div>
                            <span className="text-white/90">Solves a real problem faced by real people</span>
                        </li>
                        <li className="flex gap-4 items-start">
                            <div className="w-6 h-6 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center shrink-0 mt-0.5"><CheckCircle className="w-4 h-4" /></div>
                            <span className="text-white/90">Simple, usable solution (not over-engineered)</span>
                        </li>
                        <li className="flex gap-4 items-start">
                            <div className="w-6 h-6 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center shrink-0 mt-0.5"><CheckCircle className="w-4 h-4" /></div>
                            <span className="text-white/90">Works in Indian constraints (cost, access)</span>
                        </li>
                    </ul>
                </div>
                <div className="p-10 border border-border bg-background rounded-[2rem] relative">
                    <h4 className="text-xl font-bold text-white mb-6">Evaluation Criteria</h4>
                    <div className="space-y-6">
                        <div>
                            <div className="flex justify-between mb-2 text-sm text-muted"><span>Usefulness & Simplicity</span> <span className="text-primary font-bold">40%</span></div>
                            <div className="h-1.5 bg-surface rounded-full overflow-hidden"><div className="h-full bg-primary w-[40%]" /></div>
                        </div>
                        <div>
                            <div className="flex justify-between mb-2 text-sm text-muted"><span>Problem Relevance</span> <span className="text-primary font-bold">30%</span></div>
                            <div className="h-1.5 bg-surface rounded-full overflow-hidden"><div className="h-full bg-primary w-[30%]" /></div>
                        </div>
                        <div>
                            <div className="flex justify-between mb-2 text-sm text-muted"><span>Startup Potential</span> <span className="text-primary font-bold">20%</span></div>
                            <div className="h-1.5 bg-surface rounded-full overflow-hidden"><div className="h-full bg-primary w-[20%]" /></div>
                        </div>
                        <div>
                            <div className="flex justify-between mb-2 text-sm text-muted"><span>Technical Execution</span> <span className="text-primary font-bold">10%</span></div>
                            <div className="h-1.5 bg-surface rounded-full overflow-hidden"><div className="h-full bg-primary w-[10%]" /></div>
                        </div>
                    </div>
                </div>
            </div>
        </Reveal>
    </section>
);

export const MentorSessions = () => (
    <section className="py-16 md:py-20 px-6 md:px-8 max-w-[1280px] mx-auto border-t border-white/5">
        <Reveal>
            <div className="mb-16">
                <h2 className="text-[11px] font-bold text-accentPurple uppercase tracking-[0.6em] mb-6">Live Learning</h2>
                <h3 className="section-headline text-4xl md:text-5xl font-medium text-white mb-6">Mentor Sessions</h3>
                <p className="text-muted max-w-2xl">Interactive sessions across categories during the sprint to help you unblock and accelerate.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                    {
                        category: "Development",
                        icon: <Code className="w-6 h-6 text-blue-400" />,
                        mentors: "Aman, Ashutosh, Surya, Bishwajit",
                        color: "from-blue-500/20 to-blue-900/10",
                        border: "border-blue-500/20"
                    },
                    {
                        category: "Design",
                        icon: <PenTool className="w-6 h-6 text-purple-400" />,
                        mentors: "Bishwajeet, Surya",
                        color: "from-purple-500/20 to-purple-900/10",
                        border: "border-purple-500/20"
                    },
                    {
                        category: "Marketing",
                        icon: <Megaphone className="w-6 h-6 text-pink-400" />,
                        mentors: "Svetlana Hanover",
                        color: "from-pink-500/20 to-pink-900/10",
                        border: "border-pink-500/20"
                    },
                    {
                        category: "Business",
                        icon: <Briefcase className="w-6 h-6 text-amber-400" />,
                        mentors: "Agrim Gupta, Svetlana",
                        color: "from-amber-500/20 to-amber-900/10",
                        border: "border-amber-500/20"
                    }
                ].map((session, i) => (
                    <div key={i} className={`p-5 md:p-8 rounded-3xl bg-gradient-to-br ${session.color} border ${session.border} hover:scale-[1.02] transition-transform w-full flex md:block items-center gap-5 md:gap-0`}>
                        <div className="mb-0 md:mb-6 bg-black/20 w-12 h-12 md:w-12 md:h-12 rounded-xl flex items-center justify-center backdrop-blur-sm shrink-0">
                            {session.icon}
                        </div>
                        <div>
                            <h4 className="text-lg md:text-xl font-bold text-white mb-1 md:mb-2">{session.category}</h4>
                            <p className="hidden md:block text-xs md:text-sm text-white/60 mb-4 md:mb-6 leading-relaxed">Mentored by {session.mentors}</p>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/20 border border-white/5 text-[10px] font-bold uppercase tracking-widest text-white/50">
                                <Clock className="w-3 h-3" />
                                <span>TBD</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Reveal>
    </section>
);

const JUDGES = [
    {
        name: "Surya Pratap Singh",
        role: "Jury",
        title: "Founder, Vasudev AI",
        focus: "AI & Product Strategy",
        image: "https://media.licdn.com/dms/image/v2/D5603AQH-YdkYsVqu0g/profile-displayphoto-scale_400_400/B56ZiWrmgjH0Ag-/0/1754874671600?e=1767830400&v=beta&t=4ihc1AXgz0Z4Kl4p-M2wIPHE-Gt-fTu7wTTIgnYhWpo",
        linkedin: "https://www.linkedin.com/in/sgsurya/"
    },
    {
        name: "Aman Dangi",
        role: "Jury",
        title: "Tech Lead",
        focus: "Scalability & Systems",
        image: "https://media.licdn.com/dms/image/v2/D4D03AQGRXv8guRVRnA/profile-displayphoto-scale_400_400/B4DZpuYCvoHwBo-/0/1762788470044?e=1767830400&v=beta&t=Dk7Wu7cB6TMFVTJ-0seG_ePkxxDFLYRPAYo0bCGeUmg",
        linkedin: "https://www.linkedin.com/in/aman-dangi26/"
    },
    {
        name: "Ashutosh K. Tripathi",
        role: "Mentor",
        title: "Product Leader",
        focus: "User Experience",
        image: "https://media.licdn.com/dms/image/v2/D5603AQGYCLuK_w70vw/profile-displayphoto-shrink_100_100/B56ZcI0d7jGoAY-/0/1748199662481?e=1767830400&v=beta&t=nRCNMdWNuSAlgguEMKExrSSrSFDItgDDM8-BhR5Jmos",
        linkedin: "https://www.linkedin.com/in/ashutosh-kumar-tripathi-926308237/"
    },
    {
        name: "Biswajit Kumar",
        role: "Mentor",
        title: "Senior Engineer",
        focus: "Design & Architecture",
        image: "https://media.licdn.com/dms/image/v2/D5603AQHVB2Ar2a4kjg/profile-displayphoto-scale_400_400/B56Zn2cyFgHIAk-/0/1760776366788?e=1767830400&v=beta&t=YQN9A6Yzg52lOdcr8qmF-8bL8ffAhskT1o50JeBbfdg",
        linkedin: "https://www.linkedin.com/in/biswajit-exe20/"
    },
    {
        name: "Udayy Sharma",
        role: "Jury & Mentor",
        title: "Tech & Market Lead",
        focus: "Business Viability",
        image: "https://indiancreators.com/wp-content/uploads/2025/02/Untitled-design.webp",
        linkedin: "https://in.linkedin.com/in/udaydotai"
    },
    {
        name: "Agrim Gupta",
        role: "Jury",
        title: "Founder",
        focus: "Product Market Fit",
        image: "https://media.licdn.com/dms/image/v2/D5635AQFmfw24J0Vcaw/profile-framedphoto-shrink_400_400/B56Zq6JN_0KsAc-/0/1764059570401?e=1767031200&v=beta&t=ONWZmnoVXvlKDzgTsiuBjcRI7cEWbp83SMGpir5c-1c",
        linkedin: "https://www.linkedin.com/in/agrim-choudhary-gupta-626807245/"
    }
];

export const JudgesSection = () => {
    const jury = JUDGES.filter(j => j.role.includes("Jury"));
    const mentors = JUDGES.filter(j => j.role.includes("Mentor"));

    const getFocusStyle = (focus: string) => {
        if (focus.includes("AI") || focus.includes("Product")) return "bg-blue-500/10 text-blue-400 border-blue-500/20";
        if (focus.includes("System") || focus.includes("Scalability")) return "bg-purple-500/10 text-purple-400 border-purple-500/20";
        if (focus.includes("Design") || focus.includes("User")) return "bg-green-500/10 text-green-400 border-green-500/20";
        if (focus.includes("Business") || focus.includes("Growth")) return "bg-amber-500/10 text-amber-400 border-amber-500/20";
        return "bg-white/10 text-white border-white/20";
    };

    return (
        <section className="py-20 md:py-[120px] px-6 md:px-8 max-w-[1280px] mx-auto relative cursor-default">
            {/* Background Gradients */}
            <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-primary/5 blur-[120px] rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2" />

            <Reveal x={-20}>
                <div className="mb-20 text-center">
                    <h2 className="text-[11px] font-bold text-accentPurple uppercase tracking-[0.6em] mb-6">Decision Makers</h2>
                    <h3 className="section-headline text-4xl md:text-7xl font-medium text-white mb-6">Built by Builders.</h3>
                    <p className="text-xl text-muted font-light max-w-2xl mx-auto leading-relaxed">
                        Your project will be reviewed by builders who have shipped real products — <span className="text-white font-medium">not theory</span>.
                    </p>
                </div>

                {/* JURY SECTION */}
                <div className="mb-20">
                    <div className="flex items-center justify-center gap-4 mb-10 opacity-80 hover:opacity-100 transition-opacity">
                        <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-amber-500/50" />
                        <h4 className="text-sm font-bold text-amber-500 uppercase tracking-[0.3em]">The Jury Panel</h4>
                        <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-amber-500/50" />
                    </div>

                    <div className="flex flex-wrap justify-center gap-8">
                        {jury.map((person, i) => (
                            <div key={i} className="group relative w-full md:w-[280px]">
                                <div className="absolute inset-0 bg-gradient-to-b from-amber-500/20 to-transparent rounded-[2rem] opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl" />
                                <div className="relative h-full p-6 pb-8 rounded-[2rem] bg-[#0A0A0A] border border-white/5 group-hover:border-amber-500/30 transition-all duration-500 flex flex-col items-center text-center group-hover:-translate-y-1 shadow-2xl">

                                    {/* Avatar */}
                                    <div className="relative mb-6">
                                        <div className="w-28 h-28 rounded-full p-1 bg-gradient-to-b from-amber-400/30 to-transparent">
                                            {/* @ts-ignore */}
                                            <div className="w-full h-full rounded-full overflow-hidden border-2 border-amber-500/20 group-hover:border-amber-500 transition-colors duration-500 bg-surface">
                                                {/* @ts-ignore */}
                                                {person.image ? (
                                                    /* @ts-ignore */
                                                    <img src={person.image} alt={person.name} className="w-full h-full object-cover" />
                                                ) : (
                                                    <div className="w-full h-full flex items-center justify-center text-3xl font-bold text-white/20">{person.name[0]}</div>
                                                )}
                                            </div>
                                        </div>
                                        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-amber-500 text-black text-[10px] font-bold uppercase tracking-widest shadow-[0_0_15px_rgba(245,158,11,0.4)]">
                                            Jury
                                        </div>
                                    </div>

                                    {/* Info */}
                                    <h5 className="text-lg font-bold text-white mb-1 group-hover:text-amber-400 transition-colors">{person.name}</h5>
                                    {/* @ts-ignore */}
                                    <p className="text-xs font-bold text-muted/60 uppercase tracking-wider mb-6">{person.title}</p>

                                    {/* Focus Badge */}
                                    <div className={`px-4 py-2 rounded-xl border text-xs font-bold ${getFocusStyle(person.focus)} w-full`}>
                                        <div className="text-[10px] uppercase tracking-widest opacity-60 mb-1">Evaluating</div>
                                        {person.focus}
                                    </div>

                                    {/* LinkedIn */}
                                    {/* @ts-ignore */}
                                    {person.linkedin && (
                                        /* @ts-ignore */
                                        <a href={person.linkedin} target="_blank" rel="noopener noreferrer" className="absolute top-4 right-4 text-white/10 hover:text-white transition-colors">
                                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                                        </a>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* MENTORS SECTION */}
                <div>
                    <div className="flex items-center justify-center gap-4 mb-10 opacity-60">
                        <div className="h-[1px] w-12 bg-white/20" />
                        <h4 className="text-sm font-bold text-white/60 uppercase tracking-[0.3em]">The Mentors</h4>
                        <div className="h-[1px] w-12 bg-white/20" />
                    </div>

                    <div className="flex flex-wrap justify-center gap-6">
                        {mentors.map((person, i) => (
                            <div key={i} className="group relative w-full md:w-[240px]">
                                <div className="relative h-full p-6 rounded-[1.8rem] bg-white/[0.02] border border-white/5 hover:border-white/10 hover:bg-white/[0.04] transition-all duration-300 flex flex-col items-center text-center">

                                    {/* Avatar */}
                                    <div className="relative mb-5">
                                        <div className="w-20 h-20 rounded-full bg-surface border border-white/10 p-0.5">
                                            {/* @ts-ignore */}
                                            {person.image ? (
                                                /* @ts-ignore */
                                                <img src={person.image} alt={person.name} className="w-full h-full rounded-full object-cover grayscale group-hover:grayscale-0 transition-all" />
                                            ) : (
                                                <div className="w-full h-full rounded-full bg-surface flex items-center justify-center text-xl font-bold text-white/20">{person.name[0]}</div>
                                            )}
                                        </div>
                                    </div>

                                    {/* Info */}
                                    <h5 className="text-base font-bold text-white mb-0.5">{person.name}</h5>
                                    {/* @ts-ignore */}
                                    <p className="text-[10px] font-bold text-muted/50 uppercase tracking-wider mb-4">{person.title}</p>

                                    {/* Focus */}
                                    <div className={`text-xs font-medium px-3 py-1 rounded-full ${getFocusStyle(person.focus).split(' ')[0]} ${getFocusStyle(person.focus).split(' ')[1]} opacity-80`}>
                                        {person.focus}
                                    </div>

                                    {/* LinkedIn */}
                                    {/* @ts-ignore */}
                                    {person.linkedin && (
                                        /* @ts-ignore */
                                        <a href={person.linkedin} target="_blank" rel="noopener noreferrer" className="absolute top-4 right-4 text-white/5 hover:text-white/40 transition-colors">
                                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                                        </a>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Reveal>
        </section>
    );
};

const RubricItem = ({ title, pts, criteria }: { title: string, pts: number, criteria: string[] }) => (
    <div className="p-8 md:p-10 border border-border bg-surface/5 rounded-3xl">
        <div className="flex justify-between items-center mb-6">
            <h4 className="text-2xl font-heading font-medium text-white">{title}</h4>
            <div className="px-4 py-1.5 rounded-full bg-primary/20 border border-primary/30 text-primary text-xs font-bold">{pts} PTS</div>
        </div>
        <ul className="space-y-3">
            {criteria.map((c, i) => (
                <li key={i} className="flex gap-3 text-muted text-sm font-light leading-relaxed">
                    <span className="text-primary mt-1 opacity-50">•</span>
                    {c}
                </li>
            ))}
        </ul>
    </div>
);

export const JudgingSection = () => (
    <section className="py-24 md:py-[160px] px-6 md:px-8 max-w-[1120px] mx-auto">
        <Reveal x={-20}>
            <div className="mb-20">
                <h2 className="text-[11px] font-bold text-accentPurple uppercase tracking-[0.6em] mb-10">Judging Criteria</h2>
                <h3 className="section-headline text-3xl md:text-6xl font-medium text-white mb-10">Usefulness &gt; Complexity</h3>
                <p className="text-xl text-muted font-light max-w-2xl leading-relaxed">
                    We reward solutions that can survive in the real world. Complex tech is optional. Real impact is mandatory.
                </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
                <RubricItem
                    title="Real-World Relevance"
                    pts={30}
                    criteria={["Does this solve a real problem?", "Have you validated with real users?", "Is the target user clearly defined?"]}
                />
                <RubricItem
                    title="Effectiveness & Simplicity"
                    pts={25}
                    criteria={["Does it actually work?", "Is it simple enough to be adopted?", "Avoids over-engineering?"]}
                />
                <RubricItem
                    title="Startup Potential"
                    pts={25}
                    criteria={["Can it scale beyond the hackathon?", "Is there a vision for growth?", "Financial feasibility?"]}
                />
                <RubricItem
                    title="Technical Execution"
                    pts={20}
                    criteria={["Working MVP / Prototype", "Handling of edge cases", "Clarity of vision & presentation"]}
                />
            </div>
        </Reveal>
    </section>
);

export const AwardsSection = ({ onRegister }: { onRegister: () => void }) => {
    return (
        <section className="py-24 md:py-[160px] px-6 md:px-8 max-w-[1120px] mx-auto">
            <Reveal x={-20}>
                <div className="mb-24 text-center">
                    <h2 className="text-[11px] font-bold text-accentPurple uppercase tracking-[0.6em] mb-6">Recognition & Rewards</h2>
                    <h3 className="section-headline text-3xl md:text-6xl font-medium text-white mb-8">We reward builders who ship.</h3>
                    <p className="text-xl text-muted font-light max-w-2xl mx-auto leading-relaxed">
                        This sprint is not about prize money. It’s about building something that deserves to exist.
                    </p>
                </div>

                {/* Desktop Grid Layout */}
                <div className="hidden md:grid md:grid-cols-3 gap-4 md:gap-8 items-end mb-24 max-w-5xl mx-auto">
                    {/* 1st Runner Up Card (Silver) - Left */}
                    <div className="order-2 md:order-1 p-8 border border-slate-400/30 bg-gradient-to-br from-slate-400/5 to-transparent rounded-[2rem] relative overflow-hidden group hover:border-slate-400/50 transition-all duration-500">
                        <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                            <Award className="w-24 h-24 text-slate-300 rotate-12" />
                        </div>

                        <div className="relative z-10 flex flex-col h-full">
                            <div className="inline-block px-3 py-1 rounded-full bg-slate-400/10 border border-slate-400/20 text-slate-300 text-[10px] font-bold uppercase tracking-widest mb-6 w-fit">
                                2nd Place
                            </div>
                            <h4 className="text-2xl font-heading font-medium text-slate-100 mb-6">1st Runner Up</h4>

                            <ul className="space-y-4 mb-8">
                                <li className="flex gap-2 items-start text-muted text-sm">
                                    <CheckCircle className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                                    <span>Certificate of Excellence</span>
                                </li>
                                <li className="flex gap-2 items-start text-muted text-sm">
                                    <Gift className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                                    <span><strong>Swags & Vasudev AI Tools Early Access</strong></span>
                                </li>
                                <li className="flex gap-2 items-start text-muted text-sm">
                                    <Users className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                                    <span>Group Mentorship Session</span>
                                </li>
                                <li className="flex gap-2 items-start text-muted text-sm">
                                    <Users className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                                    <span><strong>Premium Group Access</strong></span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Winner Card (Gold) - Center, Elevated */}
                    <div className="order-1 md:order-2 md:-translate-y-12 p-8 md:p-10 border border-amber-400/40 bg-gradient-to-b from-amber-400/10 to-transparent rounded-[2.5rem] relative overflow-hidden group hover:shadow-[0_0_60px_-10px_rgba(251,191,36,0.2)] transition-all duration-500 z-10">
                        <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-40 transition-opacity">
                            <Trophy className="w-32 h-32 text-amber-400 rotate-12" />
                        </div>

                        <div className="relative z-10 flex flex-col h-full">
                            <div className="inline-block px-4 py-1.5 rounded-full bg-amber-400/20 border border-amber-400/30 text-amber-300 text-xs font-bold uppercase tracking-widest mb-6 w-fit shadow-[0_0_15px_rgba(251,191,36,0.3)]">
                                1st Place
                            </div>
                            <h4 className="text-3xl font-heading font-medium text-white mb-6">Sprint Winner</h4>

                            <ul className="space-y-4 mb-8 flex-grow">
                                <li className="flex gap-3 items-start text-white/90 text-sm">
                                    <Award className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                                    <span><strong>Digitally Verifiable Certificate</strong></span>
                                </li>
                                <li className="flex gap-3 items-start text-white/90 text-sm">
                                    <Gift className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                                    <span><strong>Swags & Vasudev AI Tools Early Access</strong></span>
                                </li>
                                <li className="flex gap-3 items-start text-white/90 text-sm">
                                    <Rocket className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                                    <span><strong>1:1 Mentorship</strong> (Product & Tech)</span>
                                </li>
                                <li className="flex gap-3 items-start text-white/90 text-sm">
                                    <Briefcase className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                                    <span><strong>Internship Opportunity</strong></span>
                                </li>
                                <li className="flex gap-3 items-start text-white/90 text-sm">
                                    <Users className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                                    <span><strong>Premium Group Access</strong></span>
                                </li>
                                <li className="flex gap-3 items-start text-white/90 text-sm">
                                    <Globe className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                                    <span>Featured on Vasudev AI site</span>
                                </li>
                            </ul>

                            <div className="text-xs text-amber-200/80 font-medium italic mt-auto flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                                This is not a trophy. It’s momentum.
                            </div>
                        </div>
                    </div>

                    {/* 2nd Runner Up Card (Bronze) - Right */}
                    <div className="order-3 md:order-3 p-8 border border-orange-700/30 bg-gradient-to-br from-orange-700/5 to-transparent rounded-[2rem] relative overflow-hidden group hover:border-orange-600/40 transition-colors duration-500">
                        <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                            <Award className="w-24 h-24 text-orange-400 rotate-12" />
                        </div>

                        <div className="relative z-10 flex flex-col h-full">
                            <div className="inline-block px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-[10px] font-bold uppercase tracking-widest mb-6 w-fit">
                                3rd Place
                            </div>
                            <h4 className="text-2xl font-heading font-medium text-white mb-6">2nd Runner Up</h4>

                            <ul className="space-y-4 mb-8">
                                <li className="flex gap-2 items-start text-muted text-sm">
                                    <CheckCircle className="w-4 h-4 text-orange-600/60 shrink-0 mt-0.5" />
                                    <span>Certificate of Merit</span>
                                </li>
                                <li className="flex gap-2 items-start text-muted text-sm">
                                    <Gift className="w-4 h-4 text-orange-600/60 shrink-0 mt-0.5" />
                                    <span><strong>Swags & Vasudev AI Tools Early Access</strong></span>
                                </li>
                                <li className="flex gap-2 items-start text-muted text-sm">
                                    <FileCheck className="w-4 h-4 text-orange-600/60 shrink-0 mt-0.5" />
                                    <span>Judges Feedback Report</span>
                                </li>
                                <li className="flex gap-2 items-start text-muted text-sm">
                                    <Users className="w-4 h-4 text-orange-600/60 shrink-0 mt-0.5" />
                                    <span><strong>Premium Group Access</strong></span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Mobile List Layout */}
                <div className="md:hidden flex flex-col gap-4 mb-12 max-w-[320px] mx-auto text-left">
                    {[
                        { title: "Sprint Winner", prize: "Internship • Premium Group • Feature", icon: "🥇" },
                        { title: "Runner-ups", prize: "Premium Group • Badge • Access", icon: "🥈" },
                        { title: "Builders", prize: "Proof of work", icon: "🥉" }
                    ].map((item, i) => (
                        <div key={i} className="flex items-start gap-4 p-4 border-b border-white/10 last:border-0 hover:bg-white/5 transition-colors rounded-lg">
                            <span className="text-2xl shrink-0">{item.icon}</span>
                            <div>
                                <h4 className="text-white font-bold mb-1">{item.title}</h4>
                                <p className="text-sm text-muted">{item.prize}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Special Categories */}
                <div className="mb-24">
                    <h4 className="text-xl font-heading font-medium text-white mb-8 text-center">Special Category Awards</h4>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                        {[
                            { title: "Best Real-World Impact", icon: <Globe className="w-5 h-5" /> },
                            { title: "Best Simple Solution", icon: <Zap className="w-5 h-5" /> },
                            { title: "Best India-First Product", icon: <Leaf className="w-5 h-5" /> },
                            { title: "Best Problem Validation", icon: <CheckCircle className="w-5 h-5" /> },
                            { title: "Best Solo Builder", icon: <Users className="w-5 h-5" /> },
                        ].map((cat, i) => (
                            <div key={i} className="p-6 border border-border bg-surface/5 rounded-2xl flex flex-col items-center text-center hover:border-primary/40 transition-colors">
                                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-primary mb-3">
                                    {cat.icon}
                                </div>
                                <span className="text-sm font-bold text-white/90">{cat.title}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* All Participants */}
                <div className="p-8 border border-dashed border-white/20 rounded-3xl bg-white/[0.02] text-center">
                    <h4 className="text-lg font-bold text-white mb-4">🎁 For Every Participant</h4>
                    <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-sm text-muted">
                        <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Participation Certificate</span>
                        <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Community Badge</span>
                        <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Access to Future Sprints</span>
                        <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Learning & Feedback</span>
                    </div>
                    <p className="mt-4 text-xs text-muted/60 uppercase tracking-widest font-bold">You don't leave empty-handed.</p>
                </div>

                <div className="mt-16 text-center">
                    <button onClick={onRegister} className="text-sm font-bold text-white hover:text-primary transition-colors border-b border-transparent hover:border-primary pb-0.5 uppercase tracking-widest">
                        Start Your Entry →
                    </button>
                </div>
            </Reveal>
        </section>
    );
};

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border-b border-border py-8">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center text-left group"
            >
                <span className="text-lg md:text-xl font-medium text-white group-hover:text-primary transition-colors">{question}</span>
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    className="text-muted group-hover:text-white"
                >
                    <ChevronDown className="w-6 h-6" />
                </motion.div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                    >
                        <p className="pt-6 text-muted leading-relaxed font-light text-sm">{answer}</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export const FAQ = () => {
    const faqs = [
        {
            question: "How do I track my 30 hours of effort?",
            answer: "We don't use stopwatches. We track effort through 3 mandatory milestones. If your output and progress are visible, your effort is verified. We value results over clocking in."
        },
        {
            question: "Is the window strict?",
            answer: "Yes, the 50-hour window is absolute. You must submit your final link before the timer hits 0. How you split your ~30 hours within that window is up to you."
        },
        {
            question: "What if I am a beginner?",
            answer: "The sprint rewards learning as much as building. 20 points are dedicated specifically to your learning journey and README documentation. Ship something functioning, no matter how small."
        },
        {
            question: "Can I participate in teams?",
            answer: "Yes. Teams of up to 4 are allowed. Solo builders are also welcome. Once the 50-hour window starts, team rosters are locked."
        }
    ];

    return (
        <section className="py-24 md:py-[160px] px-6 md:px-8 max-w-[1120px] mx-auto">
            <Reveal x={-20}>
                <div className="grid md:grid-cols-2 gap-20">
                    <div>
                        <h2 className="text-[11px] font-bold text-primary uppercase tracking-[0.6em] mb-10">Sprint Intelligence</h2>
                        <h3 className="section-headline text-4xl md:text-5xl font-medium text-white">Trust the Process.</h3>
                    </div>
                    <div className="divide-y divide-border">
                        {faqs.map((faq, i) => (
                            <FAQItem key={i} question={faq.question} answer={faq.answer} />
                        ))}
                    </div>
                </div>
            </Reveal>
        </section>
    );
};

export const Community = () => (
    <section className="py-12 md:py-[120px] px-4 md:px-8 relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto relative z-10">
            <div className="relative rounded-[2rem] md:rounded-[3rem] bg-[#5865F2] overflow-hidden group shadow-2xl">

                {/* Background Assets - darker vignette added */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1),rgba(0,0,0,0.4))] pointer-events-none" />
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/10 blur-[120px] rounded-full pointer-events-none mix-blend-overlay" />
                <div className="absolute inset-0 bg-[url('https://assets-global.website-files.com/6257adef93867e56f84d3109/636e0a6a49cf127bf92de1e2_icon_clyde_blur_white_RGB.png')] bg-cover opacity-5 mix-blend-overlay"></div>

                <div className="grid lg:grid-cols-2 gap-8 md:gap-12 p-8 md:p-20 items-center relative z-10">

                    {/* Content Left */}
                    <div className="text-center lg:text-left">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/20 border border-white/10 text-white font-bold text-xs uppercase tracking-widest mb-6 md:mb-8 backdrop-blur-sm">
                            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                            <span>Live Sprint: 124 Builders Online</span>
                        </div>

                        <h2 className="text-4xl md:text-6xl font-black text-white mb-6 md:mb-8 tracking-tight leading-tight">
                            Build Together.<br />
                            <span className="text-white/60">Ship Faster.</span>
                        </h2>

                        <p className="hidden md:block text-white/90 text-lg md:text-xl mb-10 max-w-xl font-medium leading-relaxed">
                            Find teammates, ship fast, and debug at 3 AM with serious builders.
                        </p>
                        <p className="md:hidden text-white/80 text-base mb-8 font-medium">
                            Find teammates, ship fast, and debug at 3 AM.
                        </p>

                        <div className="flex flex-col items-center lg:items-start gap-4">
                            <button onClick={() => window.open('https://discord.gg/t9S8fznbpn', '_blank')} className="bg-white text-[#5865F2] pl-8 pr-2 py-3 rounded-full font-black text-lg hover:shadow-[0_0_40px_rgba(255,255,255,0.4)] hover:scale-105 transition-all flex items-center gap-6 group/btn w-full md:w-auto justify-between md:justify-start">
                                <span>ENTER THE SPRINT</span>
                                <div className="w-12 h-12 rounded-full bg-[#5865F2] text-white flex items-center justify-center -rotate-45 group-hover/btn:rotate-0 transition-transform md:ml-0">
                                    <svg width="24" height="24" viewBox="0 0 127 96" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
                                        <path d="M107.7 8.07001C99.08 4.11001 90.03 1.25001 80.6 0.050009C80.46 0.030009 80.32 0.090009 80.24 0.210009C79.05 2.37001 77.7 5.25001 76.77 7.42001C66.56 5.90001 56.4 5.90001 46.33 7.42001C45.39 5.24001 44.03 2.37001 42.86 0.200009C42.78 0.080009 42.64 0.020009 42.5 0.050009C33.06 1.25001 24.02 4.11001 15.39 8.07001C15.3 8.11001 15.24 8.18001 15.2 8.27001C-2.29004 39.2901 -2.71004 69.4601 5.93996 98.7101C6.00996 98.9301 6.22996 99.0801 6.45996 99.0801C17.93 107.5 29.04 107.5 39.99 107.5H40.04C40.24 107.49 40.42 107.38 40.54 107.21C43.25 103.5 45.69 99.5801 47.78 95.4201C47.92 95.1401 47.78 94.8101 47.48 94.7001C43.49 93.1801 39.7 91.2901 36.1 89.1401C35.8 88.9601 35.77 88.5401 36.05 88.3101C36.85 87.7101 37.63 87.0801 38.39 86.4301C38.56 86.2901 38.8 86.2601 38.99 86.3501C61.46 96.6501 84.7 96.6501 106.87 86.3501C107.06 86.2601 107.3 86.2901 107.47 86.4301C108.23 87.0801 109.02 87.7101 109.81 88.3101C110.09 88.5401 110.07 88.9601 109.76 89.1401C106.16 91.2901 102.36 93.1801 98.37 94.7001C98.07 94.8101 97.94 95.1401 98.07 95.4201C100.16 99.5801 102.61 103.5 105.31 107.21C105.43 107.38 105.62 107.49 105.81 107.5H105.86C116.82 107.5 127.93 107.5 139.4 99.0801C139.63 99.0801 139.85 98.9301 139.92 98.7101C149.37 65.9101 146.43 35.8201 127.86 8.27001C127.82 8.18001 127.76 8.11001 127.67 8.07001ZM42.45 78.4301C35.91 78.4301 30.52 72.4301 30.52 65.0701C30.52 57.7101 35.79 51.7101 42.45 51.7101C49.16 51.7101 54.55 57.7701 54.43 65.0701C54.43 72.4301 49.1 78.4301 42.45 78.4301ZM83.4 78.4301C76.86 78.4301 71.47 72.4301 71.47 65.0701C71.47 57.7101 76.74 51.7101 83.4 51.7101C90.11 51.7101 95.5 57.7701 95.38 65.0701C95.38 72.4301 90.05 78.4301 83.4 78.4301Z" fill="white" />
                                    </svg>
                                </div>
                            </button>
                            <p className="text-[10px] uppercase tracking-widest text-white/50 font-bold">No pitches · No fluff · Just building</p>
                        </div>
                    </div>

                    {/* Visual Right: Live Activity Feed */}
                    <div className="hidden lg:flex relative items-center justify-center lg:h-full py-12 lg:py-0">
                        <div className="relative w-full max-w-sm">
                            <div className="bg-black/20 backdrop-blur-xl rounded-2xl border border-white/10 p-6 shadow-2xl">
                                <div className="flex justify-between items-center mb-6 pb-4 border-b border-white/5">
                                    <span className="text-sm font-bold text-white flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" /> Live Activity</span>
                                    <span className="text-[10px] font-mono text-white/40">LAST 24 HOURS</span>
                                </div>
                                <div className="space-y-4">
                                    <div className="flex gap-4 items-start animate-fade-in transition-all">
                                        <div className="w-8 h-8 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 border border-blue-500/30">
                                            <Code className="w-4 h-4" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-white/90 font-medium">Ayush deployed sprint-v1</p>
                                            <p className="text-xs text-white/40 mt-0.5">2 mins ago · #shipping</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4 items-start">
                                        <div className="w-8 h-8 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center shrink-0 border border-purple-500/30">
                                            <PenTool className="w-4 h-4" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-white/90 font-medium">Team 7 shared MVP demo</p>
                                            <p className="text-xs text-white/40 mt-0.5">15 mins ago · #showcase</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4 items-start">
                                        <div className="w-8 h-8 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 border border-amber-500/30">
                                            <Users className="w-4 h-4" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-white/90 font-medium">Mentor Feedback: "Solid UX"</p>
                                            <p className="text-xs text-white/40 mt-0.5">42 mins ago · #design</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-6 pt-4 border-t border-white/5 text-center">
                                    <div className="inline-block px-3 py-1 rounded-full bg-white/5 text-[10px] text-white/50 uppercase tracking-widest border border-white/5">
                                        Last Sprint: 18 Projects Shipped
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export const MarqueeSection = () => {
    return (
        <section className="relative py-10 overflow-hidden border-y border-white/5 bg-background">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 blur-[100px] pointer-events-none" />

            {/* Gradient Masks */}
            <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-background to-transparent z-10" />
            <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-background to-transparent z-10" />

            <div className="flex relative z-0">
                <motion.div
                    className="flex gap-16 md:gap-32 items-center whitespace-nowrap"
                    animate={{ x: "-50%" }}
                    transition={{ duration: 60, ease: "linear", repeat: Infinity }}
                >
                    {[...Array(2)].map((_, i) => (
                        <div key={i} className="flex gap-16 md:gap-32 items-center">
                            {[
                                "VASUDEV AI", "UTSAVY", "BUILD HARD", "SHIP FAST", "SOLVE PROBLEMS",
                                "JUST CODE", "NO FLUFF", "REAL IMPACT", "50 HOURS SPRINT"
                            ].map((text, j) => (
                                <div key={j} className="flex items-center gap-16 md:gap-32">
                                    <span className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20 select-none hover:to-primary transition-all duration-500 cursor-default pr-4">
                                        {text}
                                    </span>
                                    {/* Decorative Divider */}
                                    <div className="relative w-12 h-12 flex items-center justify-center">
                                        <div className="absolute w-full h-full border border-white/10 rounded-full animate-[spin_10s_linear_infinite]" />
                                        <div className="w-2 h-2 bg-primary rounded-full shadow-[0_0_10px_#6D7CFF]" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

export const WhatToSubmit = () => {
    return (
        <section className="py-16 md:py-24 px-6 md:px-8 max-w-[1280px] mx-auto border-t border-white/5">
            <Reveal x={-20}>
                <div className="mb-12">
                    <h2 className="text-[11px] font-bold text-accentPurple uppercase tracking-[0.6em] mb-4">Requirements</h2>
                    <h3 className="section-headline text-3xl md:text-5xl font-medium text-white mb-4">What to submit?</h3>
                    <p className="text-lg text-muted font-light max-w-2xl leading-relaxed">
                        Your final submission must include these key deliverables to be eligible for evaluation.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                    {/* Prototype */}
                    <div className="p-6 md:p-8 rounded-3xl bg-surface/5 border border-white/10 hover:border-primary transition-all duration-300 group hover:bg-primary hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-1">
                        <h4 className="text-xl font-heading font-medium text-white mb-3 group-hover:text-white transition-colors">Prototype</h4>
                        <p className="text-muted text-sm leading-relaxed group-hover:text-white/90 transition-colors">
                            A functional, working code prototype. We prioritize working software over mockups.
                        </p>
                    </div>

                    {/* Submission Presentation */}
                    <div className="p-6 md:p-8 rounded-3xl bg-surface/5 border border-white/10 hover:border-primary transition-all duration-300 group row-span-2 hover:bg-primary hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-1">
                        <h4 className="text-xl font-heading font-medium text-white mb-3 group-hover:text-white transition-colors">Submission Presentation</h4>
                        <p className="text-muted text-sm mb-4 group-hover:text-white/90 transition-colors">
                            A presentation (Max 10-12 slides) summarizing:
                        </p>
                        <ul className="space-y-2 text-sm text-muted/80 font-light group-hover:text-white/90 transition-colors">
                            <li className="flex gap-2 items-start">
                                <span className="text-primary mt-1 group-hover:text-white transition-colors">•</span>
                                Problem and Solution Overview
                            </li>
                            <li className="flex gap-2 items-start">
                                <span className="text-primary mt-1 group-hover:text-white transition-colors">•</span>
                                Key Features and Differentiators
                            </li>
                            <li className="flex gap-2 items-start">
                                <span className="text-primary mt-1 group-hover:text-white transition-colors">•</span>
                                Tech Stack Utilised
                            </li>
                            <li className="flex gap-2 items-start">
                                <span className="text-primary mt-1 group-hover:text-white transition-colors">•</span>
                                Market Opportunity and Viability
                            </li>
                            <li className="flex gap-2 items-start">
                                <span className="text-primary mt-1 group-hover:text-white transition-colors">•</span>
                                Future Roadmap and Vision
                            </li>
                        </ul>
                    </div>

                    {/* Code Repository */}
                    <div className="p-6 md:p-8 rounded-3xl bg-surface/5 border border-white/10 hover:border-primary transition-all duration-300 group hover:bg-primary hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-1">
                        <h4 className="text-xl font-heading font-medium text-white mb-3 group-hover:text-white transition-colors">Code Repository</h4>
                        <p className="text-muted text-sm leading-relaxed group-hover:text-white/90 transition-colors">
                            Link to your Github repository. Ensure README is well-documented with setup instructions.
                        </p>
                    </div>

                    {/* Video Pitch */}
                    <div className="p-6 md:p-8 rounded-3xl bg-surface/5 border border-white/10 hover:border-primary transition-all duration-300 group md:col-span-2 hover:bg-primary hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-1">
                        <h4 className="text-xl font-heading font-medium text-white mb-3 group-hover:text-white transition-colors">Video Pitch (Max 3 mins)</h4>
                        <p className="text-muted text-sm leading-relaxed group-hover:text-white/90 transition-colors">
                            A concise, engaging video demonstrating the functionality of the prototype, explaining its features, and outlining its impact. Must be uploaded to a public video hosting service (YouTube/Loom/Drive).
                        </p>
                    </div>
                </div>
            </Reveal>
        </section>
    );
};
