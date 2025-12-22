import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, User, Mail, MessageSquare } from 'lucide-react';

export const RegistrationPage = ({ onBack }: { onBack: () => void }) => {
    return (
        <div className="min-h-screen bg-black p-[3px] font-sans text-white">
            <div className="w-full min-h-[calc(100vh-6px)] bg-[#0F0F0F] rounded-[20px] border border-white/10 relative overflow-hidden flex flex-col md:flex-row">

                {/* Background Elements */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[100px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accentPurple/5 blur-[100px] rounded-full pointer-events-none translate-y-1/2 -translate-x-1/2" />

                {/* Left Side: Context/Info (Hidden on small screens or reduced) */}
                <div className="hidden md:flex flex-col justify-between p-12 w-1/3 border-r border-white/5 relative z-10 bg-white/[0.02]">
                    <div>
                        <button
                            onClick={onBack}
                            className="flex items-center gap-2 text-muted hover:text-white transition-colors mb-12 group"
                        >
                            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                            <span className="text-sm font-medium uppercase tracking-wider">Back to Home</span>
                        </button>

                        <h1 className="text-3xl font-heading font-medium text-white mb-6">Start Building.</h1>
                        <p className="text-muted leading-relaxed mb-8">
                            You are one step away from joining 500+ builders in a high-intensity sprint. No fluff. Just shipping.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4 text-sm text-white/80">
                                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary"><User className="w-4 h-4" /></div>
                                <span>Solo or Team (Max 4)</span>
                            </div>
                            <div className="flex items-center gap-4 text-sm text-white/80">
                                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary"><Mail className="w-4 h-4" /></div>
                                <span>Get Sprint Updates</span>
                            </div>
                            <div className="flex items-center gap-4 text-sm text-white/80">
                                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary"><MessageSquare className="w-4 h-4" /></div>
                                <span>Join Discord Community</span>
                            </div>
                        </div>
                    </div>

                    <div className="text-[10px] text-muted uppercase tracking-widest font-bold">
                        Vasudev AI Sprint • 2025
                    </div>
                </div>

                {/* Right Side: Form */}
                <div className="flex-1 p-6 md:p-20 overflow-y-auto relative z-10 flex flex-col justify-center items-center">
                    <div className="md:hidden w-full mb-8">
                        <button
                            onClick={onBack}
                            className="flex items-center gap-2 text-muted hover:text-white transition-colors"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            <span className="text-sm font-medium">Back</span>
                        </button>
                    </div>

                    <div className="w-full max-w-lg">
                        <div className="mb-10">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Registration</h2>
                            <p className="text-muted">Fill in your details below. It takes less than a minute.</p>
                        </div>

                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-muted uppercase tracking-wider">First Name</label>
                                    <input
                                        type="text"
                                        placeholder="John"
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-white/20 focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-muted uppercase tracking-wider">Last Name</label>
                                    <input
                                        type="text"
                                        placeholder="Doe"
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-white/20 focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold text-muted uppercase tracking-wider">Email Address</label>
                                <input
                                    type="email"
                                    placeholder="john@example.com"
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-white/20 focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold text-muted uppercase tracking-wider">Discord Username</label>
                                <input
                                    type="text"
                                    placeholder="john#1234"
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-white/20 focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold text-muted uppercase tracking-wider">GitHub URL (Optional)</label>
                                <input
                                    type="url"
                                    placeholder="github.com/johndoe"
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-white/20 focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all"
                                />
                            </div>

                            <div className="pt-6">
                                <button className="w-full bg-white text-black font-bold text-lg py-4 rounded-xl hover:bg-primary hover:text-white hover:scale-[1.01] transition-all shadow-lg active:scale-95 flex items-center justify-center gap-2 group">
                                    <span>Complete Registration</span>
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </button>
                                <p className="text-center text-[11px] text-muted mt-6">
                                    By registering, you agree to the <span className="text-white underline cursor-pointer hover:text-primary">Sprint Rules</span> and <span className="text-white underline cursor-pointer hover:text-primary">Terms</span>.
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};
