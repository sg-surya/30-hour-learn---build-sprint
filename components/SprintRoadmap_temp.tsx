
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, Users, FileCheck, Zap, ChevronDown, Clock, Rocket, Star, Award, Layout, CheckCircle, Globe, Leaf, Briefcase, Gift, Code, PenTool, Megaphone, Flag, MapPin, Calendar } from 'lucide-react';
import { Reveal } from './Reveal';

// ... existing components ...

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
        <section className="py-24 md:py-[120px] px-6 md:px-8 max-w-[1280px] mx-auto border-t border-white/5">
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
