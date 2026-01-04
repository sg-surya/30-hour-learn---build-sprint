import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { Reveal } from './Reveal';
import { PROBLEM_STATEMENTS } from '../data/constants';

export const ProblemExplorer = () => {
    const [selectedDomain, setSelectedDomain] = useState<number | null>(null);
    const [showAllDomains, setShowAllDomains] = useState(false);

    return (
        <section className="relative py-24 md:py-[160px] px-6 md:px-8 max-w-[1400px] mx-auto min-h-screen">
            <Reveal>
                <div className="mb-20 text-center">
                    <h2 className="text-[11px] font-bold text-accentPurple uppercase tracking-[0.6em] mb-6">Real World Problems</h2>
                    <h3 className="section-headline text-4xl md:text-6xl font-medium text-white mb-8">14 Tech Domains</h3>
                    <p className="text-muted max-w-2xl mx-auto">Click on a domain to view detailed problem statements.</p>
                </div>

                <div className="relative">
                    {/* Domain Grid - Always full width now */}
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                        {PROBLEM_STATEMENTS.map((item, i) => (
                            <button
                                key={i}
                                onClick={() => setSelectedDomain(i)}
                                className={`group relative text-left rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl w-full p-6 border-border bg-surface/5 hover:bg-primary hover:border-primary hover:shadow-primary/20`}
                            >
                                <div className="flex flex-col gap-4 mb-3">
                                    <div className="text-muted group-hover:text-white transition-colors duration-300">
                                        {item.icon}
                                    </div>
                                    {/* @ts-ignore */}
                                    {item.isPriority && (
                                        <div className="w-1.5 h-1.5 rounded-full bg-accentPurple shadow-[0_0_8px_#A020F0] absolute top-6 right-6" title="High Priority" />
                                    )}
                                </div>

                                <div className="font-bold text-sm text-white group-hover:text-white transition-colors">{item.domain}</div>
                                <div className="hidden md:block text-[10px] text-muted uppercase tracking-wide font-medium leading-tight opacity-70 group-hover:opacity-100 group-hover:text-white/90 transition-all mt-1">
                                    {/* @ts-ignore */}
                                    {item.desc}
                                </div>
                            </button>
                        ))}
                    </div>

                    {/* Modal Overlay */}
                    <AnimatePresence>
                        {selectedDomain !== null && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/60 backdrop-blur-md"
                                onClick={() => setSelectedDomain(null)}
                            >
                                <motion.div
                                    initial={{ scale: 0.9, opacity: 0, y: 20 }}
                                    animate={{ scale: 1, opacity: 1, y: 0 }}
                                    exit={{ scale: 0.9, opacity: 0, y: 20 }}
                                    onClick={(e) => e.stopPropagation()}
                                    className="bg-[#0A0A0A] border border-white/10 rounded-[2rem] w-full max-w-4xl shadow-2xl relative flex flex-col"
                                    style={{ maxHeight: 'calc(100vh - 20px)', margin: '10px' }}
                                >
                                    {/* Scrollable Content */}
                                    <div className="p-8 md:p-12 overflow-y-auto" style={{ maxHeight: 'calc(100vh - 40px)' }}>
                                        {/* Header */}
                                        <div className="flex flex-col md:flex-row md:items-center gap-6 mb-12 border-b border-white/5 pb-8 relative">
                                            <button
                                                onClick={() => setSelectedDomain(null)}
                                                className="absolute top-0 right-0 p-2 text-white/40 hover:text-white hover:bg-white/10 rounded-full transition-all"
                                            >
                                                <X className="w-6 h-6" />
                                            </button>

                                            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 flex items-center justify-center shadow-[0_0_40px_-10px_rgba(109,124,255,0.3)] shrink-0">
                                                <div className="text-primary scale-150">{PROBLEM_STATEMENTS[selectedDomain].icon}</div>
                                            </div>
                                            <div>
                                                <div className="text-xs font-bold text-primary uppercase tracking-[0.2em] mb-2">Selected Domain</div>
                                                <h3 className="text-3xl md:text-5xl font-heading font-medium text-white">{PROBLEM_STATEMENTS[selectedDomain].domain}</h3>
                                                {/* @ts-ignore */}
                                                <p className="text-muted mt-2 max-w-xl">{PROBLEM_STATEMENTS[selectedDomain].desc}</p>
                                            </div>
                                        </div>

                                        {/* Problems Grid */}
                                        <div className="grid md:grid-cols-2 gap-6">
                                            {PROBLEM_STATEMENTS[selectedDomain].problems.map((prob, k) => (
                                                <ProblemCard key={k} prob={prob} index={k} />
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </Reveal>
        </section>
    );
};

interface ProblemCardProps {
    prob: any;
    index: number;
}

const ProblemCard: React.FC<ProblemCardProps> = ({ prob, index }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div
            layout
            onClick={() => setIsOpen(!isOpen)}
            className={`group relative p-6 md:p-8 bg-white/[0.02] hover:bg-white/[0.04] rounded-2xl border border-white/5 hover:border-primary/30 transition-all duration-300 cursor-pointer ${isOpen ? 'ring-1 ring-primary/50 bg-white/[0.04]' : ''}`}
        >
            <motion.div layout="position" className="mb-4 flex justify-between items-start">
                <div className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-[10px] font-bold text-primary uppercase tracking-widest">
                    Problem 0{index + 1}
                </div>
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    className="text-white/40 group-hover:text-white transition-colors"
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                </motion.div>
            </motion.div>

            <motion.h4 layout="position" className="text-xl font-bold text-white mb-2 leading-tight group-hover:text-primary/90 transition-colors">
                {prob.title}
            </motion.h4>

            {!isOpen && (
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-sm text-muted line-clamp-2">
                    {prob.desc}
                </motion.p>
            )}

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden"
                    >
                        <div className="pt-6 mt-4 border-t border-white/5 space-y-6">
                            <div>
                                <div className="text-[10px] uppercase tracking-widest text-muted/50 font-bold mb-2">The Pain Point</div>
                                <p className="text-sm text-muted font-light leading-relaxed">
                                    {prob.desc}
                                </p>
                            </div>

                            <div>
                                <div className="text-[10px] uppercase tracking-widest text-primary/70 font-bold mb-2">Build This</div>
                                {/* @ts-ignore */}
                                <p className="text-sm text-white/90 font-medium leading-relaxed">
                                    {prob.solution}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};
