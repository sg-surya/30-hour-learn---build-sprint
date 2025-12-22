import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, Users, FileCheck, Zap, ChevronDown, Clock, Rocket, Star, Award, Layout, CheckCircle, Globe, Leaf, Briefcase, Gift, Code, PenTool, Megaphone } from 'lucide-react';
import { Reveal } from './Reveal';

export const WhatIsSprint = () => (
    <section className="relative py-32 bg-surface/5">
        <div className="px-8 max-w-[800px] mx-auto text-center">
            <Reveal>
                <h2 className="text-sm font-bold text-primary uppercase tracking-[0.4em] mb-8">What is this?</h2>
                <h3 className="text-3xl md:text-5xl font-heading font-medium text-white mb-8 leading-tight">
                    A startup-first build sprint.
                </h3>
                <p className="text-xl text-muted font-light leading-relaxed mb-12">
                    Identify a real-world problem, validate it with users, and build a working solution in 50 hours — without quitting your job or college.
                </p>
                <div className="flex flex-wrap justify-center gap-6 md:gap-12 text-sm font-medium text-white/80">
                    <div className="flex items-center gap-3"><Clock className="w-5 h-5 text-primary" /> 50h Window · ~30h Effort</div>
                    <div className="flex items-center gap-3"><Users className="w-5 h-5 text-primary" /> Solo or Small Teams</div>
                    <div className="flex items-center gap-3"><Rocket className="w-5 h-5 text-primary" /> Build for Impact</div>
                </div>
            </Reveal>
        </div>
    </section>
);

export const HowItWorks = ({ onRegister }: { onRegister: () => void }) => (
    <section className="py-32 px-8 max-w-[1120px] mx-auto">
        <Reveal>
            <div className="mb-24 text-center">
                <h2 className="text-sm font-bold text-accentPurple uppercase tracking-[0.4em] mb-4">Process</h2>
                <h3 className="text-4xl md:text-5xl font-heading font-medium text-white">How It Works</h3>
            </div>

            <div className="grid md:grid-cols-4 gap-8 relative mb-20">
                <div className="hidden md:block absolute top-[2.5rem] left-0 w-full h-px border-t-2 border-dashed border-white/10 -z-10" />

                {[
                    { icon: <Layout className="w-6 h-6" />, step: "01", title: "Choose Domain", desc: "Pick a real-world problem people actually struggle with." },
                    { icon: <Users className="w-6 h-6" />, step: "02", title: "Validate", desc: "Talk to 1-2 real users. Understand the pain first." },
                    { icon: <Zap className="w-6 h-6" />, step: "03", title: "Build", desc: "Spend ~30 hours building a simple, usable solution." },
                    { icon: <Rocket className="w-6 h-6" />, step: "04", title: "Submit", desc: "Show what you built, why it matters, and how it scales." }
                ].map((item, i) => (
                    <div key={i} className="relative grid place-items-center text-center group">
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

            <div className="text-center">
                <div className="inline-flex flex-col md:flex-row items-center gap-6 px-8 py-4 rounded-full bg-surface/10 border border-white/5 backdrop-blur-sm">
                    <p className="text-lg text-white font-medium">We care about progress, not perfection.</p>
                    <div className="hidden md:block h-4 w-px bg-white/10"></div>
                    <button onClick={onRegister} className="text-sm font-bold text-primary hover:text-white transition-colors uppercase tracking-widest">
                        Start Building →
                    </button>
                </div>
            </div>
        </Reveal>
    </section>
);

export const Protocol5030 = () => (
    <section className="relative py-24 bg-surface/5 border-y border-white/5">
        <div className="px-8 max-w-[1120px] mx-auto">
            <Reveal x={-20}>
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-sm font-bold text-primary uppercase tracking-[0.4em] mb-6">The 50:30 Protocol</h2>
                        <h3 className="text-4xl font-heading font-medium text-white mb-8">Built for real builders with real lives.</h3>
                        <div className="space-y-4 text-lg text-muted font-light">
                            <p>Flexible slots. Honest progress. High stakes delivery.</p>
                            <p className="opacity-80">We don't track your minutes with a stopwatch. We judge your commitment through daily check-ins and the quality of what you ship.</p>
                        </div>
                    </div>
                    <div className="p-8 border border-border bg-surface/10 rounded-[2.5rem] relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-8 opacity-5"><Clock className="w-32 h-32" /></div>
                        <h4 className="text-xs font-bold text-white/50 uppercase tracking-[0.2em] mb-8">The Balance</h4>
                        <div className="space-y-8">
                            <div className="flex justify-between items-end border-b border-white/5 pb-4">
                                <span className="text-muted text-sm uppercase tracking-widest">Total Sprint Window</span>
                                <span className="text-white text-4xl font-heading font-bold">50H</span>
                            </div>
                            <div className="flex justify-between items-end border-b border-white/5 pb-4">
                                <span className="text-muted text-sm uppercase tracking-widest">Recommended Effort</span>
                                <span className="text-primary text-4xl font-heading font-bold">~30H</span>
                            </div>
                            <p className="text-xs text-muted/60 italic">
                                *We don't track hours. We evaluate output.
                            </p>
                        </div>
                    </div>
                </div>
            </Reveal>
        </div>
    </section>
);

export const JudgingMindset = () => (
    <section className="py-32 px-8 max-w-[1120px] mx-auto bg-surface/5 rounded-[3rem]">
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
    <section className="py-20 px-8 max-w-[1280px] mx-auto border-t border-white/5">
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
                    <div key={i} className={`p-8 rounded-3xl bg-gradient-to-br ${session.color} border ${session.border} hover:scale-[1.02] transition-transform`}>
                        <div className="mb-6 bg-black/20 w-12 h-12 rounded-xl flex items-center justify-center backdrop-blur-sm">
                            {session.icon}
                        </div>
                        <h4 className="text-xl font-bold text-white mb-2">{session.category}</h4>
                        <p className="text-sm text-white/60 mb-6 leading-relaxed">Mentored by {session.mentors}</p>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/20 border border-white/5 text-[10px] font-bold uppercase tracking-widest text-white/50">
                            <Clock className="w-3 h-3" />
                            <span>TBD</span>
                        </div>
                    </div>
                ))}
            </div>
        </Reveal>
    </section>
);

export const JudgesSection = () => (
    <section className="py-[160px] px-8 max-w-[1280px] mx-auto relative cursor-default">
        {/* Background Gradients */}
        <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2" />

        <Reveal x={-20}>
            <div className="mb-24 text-center">
                <h2 className="text-[11px] font-bold text-accentPurple uppercase tracking-[0.6em] mb-6">Mentors & Jury</h2>
                <h3 className="section-headline text-5xl md:text-7xl font-medium text-white mb-8">Built by Builders.</h3>
                <p className="text-xl text-muted font-light max-w-2xl mx-auto leading-relaxed">
                    Our judges are startup builders, domain experts, and product leaders. They prioritize <span className="text-white font-medium">usefulness</span> over complexity.
                </p>
            </div>

            <div className="flex flex-wrap justify-center gap-6">
                {[
                    { name: "Surya Pratap Singh", role: "Jury", title: "Founder, Vasudev AI", focus: "AI & Product Strategy" },
                    { name: "Aman Dangi", role: "Jury", title: "Tech Lead", focus: "Scalability & Systems" },
                    { name: "Ashutosh K. Tripathi", role: "Mentor", title: "Product Leader", focus: "User Experience" },
                    { name: "Bishwajeet Singh", role: "Mentor", title: "Senior Engineer", focus: "Design & Architecture" },
                    {
                        name: "Udayy Sharma",
                        role: "Jury",
                        title: "Angel Investor",
                        focus: "Business Viability",
                        image: "https://indiancreators.com/wp-content/uploads/2025/02/Untitled-design.webp",
                        linkedin: "https://in.linkedin.com/in/udaydotai"
                    },
                    { name: "Agrim Gupta", role: "Jury", title: "Founder", focus: "Product Market Fit" },
                    { name: "Svetlana Hanover", role: "Mentor", title: "Marketing Expert", focus: "Growth & Branding" }
                ].map((person, i) => (
                    <div key={i} className="group relative p-1 rounded-[2rem] bg-gradient-to-b from-white/10 to-transparent hover:from-primary/40 hover:to-primary/5 transition-all duration-500 w-full md:w-[calc(50%-12px)] lg:w-[calc(25%-20px)] min-w-[240px]">
                        <div className="relative h-full p-8 rounded-[1.8rem] bg-[#0A0A0A] border border-white/5 overflow-hidden flex flex-col items-center text-center">

                            {/* Hover Effect Background */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            {/* Avatar */}
                            <div className="relative mb-8">
                                <div className="w-24 h-24 rounded-full bg-surface border border-white/10 flex items-center justify-center text-3xl font-bold text-white/20 group-hover:text-white group-hover:border-primary/50 group-hover:shadow-[0_0_30px_rgba(109,124,255,0.3)] transition-all duration-500 z-10 relative overflow-hidden">
                                    {/* @ts-ignore */}
                                    {person.image ? (
                                        /* @ts-ignore */
                                        <img src={person.image} alt={person.name} className="w-full h-full object-cover" />
                                    ) : (
                                        person.name[0]
                                    )}
                                </div>
                                {/* Decorative Rings */}
                                <div className="absolute inset-0 rounded-full border border-white/5 scale-110 group-hover:scale-125 transition-transform duration-700" />
                                <div className="absolute inset-0 rounded-full border border-dashed border-white/5 scale-125 group-hover:scale-150 transition-transform duration-700 delay-75" />
                            </div>

                            <div className="relative z-10 w-full flex-grow flex flex-col items-center">
                                <div className={`mb-4 px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest border ${person.role === 'Jury' ? 'bg-amber-500/10 border-amber-500/20 text-amber-500' : 'bg-primary/10 border-primary/20 text-primary'}`}>
                                    {person.role}
                                </div>

                                <h4 className="text-xl font-heading font-medium text-white mb-2 group-hover:text-primary transition-colors">{person.name}</h4>
                                <div className="text-sm text-muted mb-6 font-light">{person.title}</div>

                                <div className="mt-auto w-full pt-6 border-t border-white/5 group-hover:border-white/10 transition-colors">
                                    <div className="text-[10px] text-muted/50 uppercase tracking-widest mb-2 font-bold">Focus Area</div>
                                    <div className="text-sm text-white/80">{person.focus}</div>
                                </div>
                            </div>

                            {/* Social Icon Float */}
                            {/* @ts-ignore */}
                            {person.linkedin && (
                                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 z-20">
                                    {/* @ts-ignore */}
                                    <div onClick={() => window.open(person.linkedin, '_blank')} className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#0077b5] flex items-center justify-center text-white transition-colors cursor-pointer border border-white/10 hover:border-transparent">
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </Reveal>
    </section>
);

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
    <section className="py-[160px] px-8 max-w-[1120px] mx-auto">
        <Reveal x={-20}>
            <div className="mb-20">
                <h2 className="text-[11px] font-bold text-accentPurple uppercase tracking-[0.6em] mb-10">Judging Criteria</h2>
                <h3 className="section-headline text-4xl md:text-6xl font-medium text-white mb-10">Usefulness &gt; Complexity</h3>
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

export const AwardsSection = () => {
    return (
        <section className="py-[160px] px-8 max-w-[1120px] mx-auto">
            <Reveal x={-20}>
                <div className="mb-24 text-center">
                    <h2 className="text-[11px] font-bold text-accentPurple uppercase tracking-[0.6em] mb-6">Recognition & Rewards</h2>
                    <h3 className="section-headline text-4xl md:text-6xl font-medium text-white mb-8">We reward builders who ship.</h3>
                    <p className="text-xl text-muted font-light max-w-2xl mx-auto leading-relaxed">
                        This sprint is not about prize money. It’s about building something that deserves to exist.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-4 md:gap-8 items-end mb-24 max-w-5xl mx-auto">

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
                            </ul>
                        </div>
                    </div>
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
                    <button onClick={() => window.open('https://forms.gle/your-form-link', '_blank')} className="text-sm font-bold text-white hover:text-primary transition-colors border-b border-transparent hover:border-primary pb-0.5 uppercase tracking-widest">
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
        <section className="py-[160px] px-8 max-w-[1120px] mx-auto">
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
    <section className="py-[120px] px-8 relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto relative z-10">
            <div className="relative rounded-[3rem] bg-[#5865F2] overflow-hidden group">

                {/* Background Assets */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/10 blur-[120px] rounded-full pointer-events-none mix-blend-overlay" />
                <div className="absolute inset-0 bg-[url('https://assets-global.website-files.com/6257adef93867e56f84d3109/636e0a6a49cf127bf92de1e2_icon_clyde_blur_white_RGB.png')] bg-cover opacity-5 mix-blend-overlay"></div>

                <div className="grid lg:grid-cols-2 gap-12 p-12 md:p-20 items-center relative z-10">

                    {/* Content Left */}
                    <div className="text-center lg:text-left">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white font-bold text-xs uppercase tracking-widest mb-8 backdrop-blur-sm">
                            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                            <span>124 Builders Online</span>
                        </div>

                        <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight leading-tight">
                            Don't Build <br />
                            <span className="text-white/40">In Silos.</span>
                        </h2>

                        <p className="text-white/90 text-lg md:text-xl mb-10 max-w-xl font-medium leading-relaxed">
                            Join the exclusive sprint server. Find teammates, get specific mentor feedback, and debug at 3 AM with 500+ builders.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 items-center lg:justify-start justify-center">
                            <button onClick={() => window.open('https://discord.gg/t9S8fznbpn', '_blank')} className="bg-white text-[#5865F2] pl-8 pr-2 py-2 rounded-full font-black text-lg hover:shadow-[0_0_40px_rgba(255,255,255,0.4)] hover:scale-105 transition-all flex items-center gap-6 group/btn">
                                <span>JOIN DISCORD</span>
                                <div className="w-12 h-12 rounded-full bg-[#5865F2] text-white flex items-center justify-center -rotate-45 group-hover/btn:rotate-0 transition-transform">
                                    <Rocket className="w-5 h-5" />
                                </div>
                            </button>

                            {/* Avatar Stake */}
                            <div className="flex -space-x-3">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className="w-10 h-10 rounded-full border-2 border-[#5865F2] bg-indigo-900/50 backdrop-blur-md flex items-center justify-center text-white text-[10px] font-bold">
                                        <Users className="w-4 h-4 opacity-70" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Visual Right: 3D Mock Interface */}
                    <div className="relative hidden lg:block perspective-1000">
                        {/* Huge Background Text Adjusted */}
                        <div className="absolute -top-20 -right-20 text-[180px] font-black text-black/10 -rotate-12 pointer-events-none select-none whitespace-nowrap z-0">
                            Vasudev AI
                        </div>

                        <motion.div
                            className="relative z-10 bg-[#36393f] rounded-xl border border-white/10 shadow-2xl overflow-hidden max-w-md ml-auto rotate-y-[-10deg] rotate-x-[5deg] hover:rotate-0 transition-all duration-700"
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8 }}
                        >
                            {/* Fake Header */}
                            <div className="h-4 bg-[#202225] flex items-center px-4 gap-1.5 border-b border-black/20">
                                <div className="w-2 h-2 rounded-full bg-red-500" />
                                <div className="w-2 h-2 rounded-full bg-yellow-500" />
                                <div className="w-2 h-2 rounded-full bg-green-500" />
                            </div>

                            {/* Mock Chat Content */}
                            <div className="p-6 space-y-4">
                                <div className="flex gap-4">
                                    <div className="w-10 h-10 rounded-full bg-primary flex-shrink-0" />
                                    <div>
                                        <div className="flex items-baseline gap-2">
                                            <span className="text-white font-bold text-sm">sgsurya</span>
                                            <span className="text-xs text-muted">Today at 2:30 AM</span>
                                        </div>
                                        <div className="text-white/80 text-xs mt-1 bg-[#2f3136] p-2 rounded-r-lg rounded-bl-lg">
                                            Just pushed the deployed link! The mentorship session yesterday really helped clarify the user flow. 🚀
                                        </div>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="w-10 h-10 rounded-full bg-green-500 flex-shrink-0" />
                                    <div>
                                        <div className="flex items-baseline gap-2">
                                            <span className="text-white font-bold text-sm">rahul_dev</span>
                                            <span className="text-xs text-muted">Today at 2:32 AM</span>
                                        </div>
                                        <div className="text-white/80 text-xs mt-1 bg-[#2f3136] p-2 rounded-r-lg rounded-bl-lg">
                                            Whoa, that UI is clean! simple tool ??
                                        </div>
                                    </div>
                                </div>

                                <div className="flex gap-4 opacity-50">
                                    <div className="w-10 h-10 rounded-full bg-purple-500 flex-shrink-0" />
                                    <div className="flex-1 space-y-2">
                                        <div className="h-3 bg-white/10 rounded w-1/4" />
                                        <div className="h-10 bg-white/10 rounded w-full" />
                                    </div>
                                </div>
                            </div>

                            {/* Floating Reaction */}
                            <div className="absolute bottom-10 right-10 bg-[#5865F2] text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg flex items-center gap-1 animate-bounce">
                                <Star className="w-3 h-3 fill-current" />
                                Great work!
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    </section>
)

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
                                "VASUDEV AI", "BUILD HARD", "SHIP FAST", "SOLVE PROBLEMS",
                                "JUST CODE", "NO FLUFF", "REAL IMPACT", "50 HOURS SPRINT"
                            ].map((text, j) => (
                                <div key={j} className="flex items-center gap-16 md:gap-32">
                                    <span className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20 select-none hover:to-primary transition-all duration-500 cursor-default">
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
