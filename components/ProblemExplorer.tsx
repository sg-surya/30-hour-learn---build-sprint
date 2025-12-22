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

                <div className="flex flex-col lg:flex-row gap-8 items-start relative transition-all duration-500">

                    {/* Domain List / Sidebar */}
                    <div className={`transition-all duration-500 ease-in-out ${selectedDomain !== null ? 'w-full lg:w-[320px] shrink-0' : 'w-full'}`}>
                        {/* Mobile: Show only first 6 unless expanded. Desktop: Show all. */}
                        <div className={`grid gap-4 transition-all duration-500 ${selectedDomain !== null ? 'grid-cols-2 md:grid-cols-3 lg:grid-cols-1' : 'grid-cols-2 md:grid-cols-4 lg:grid-cols-5'}`}>
                            {PROBLEM_STATEMENTS.slice(0, (window.innerWidth < 768 && !showAllDomains && selectedDomain === null) ? 6 : PROBLEM_STATEMENTS.length).map((item, i) => (
                                <button
                                    key={i}
                                    onClick={() => setSelectedDomain(selectedDomain === i ? null : i)}
                                    className={`group relative text-left rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl w-full
                    ${selectedDomain === i
                                            ? 'border-primary bg-primary/20 shadow-[0_0_30px_rgba(109,124,255,0.2)] p-6 z-10 scale-105 lg:scale-100'
                                            : selectedDomain !== null
                                                ? 'p-4 border-white/5 bg-white/[0.02] hover:bg-white/[0.05] grayscale hover:grayscale-0 opacity-60 hover:opacity-100'
                                                : 'p-6 border-border bg-surface/5 hover:border-primary/30'
                                        }
                    ${ // @ts-ignore
                                        item.isPriority && selectedDomain !== i ? 'border-primary/20' : ''
                                        }
                  `}
                                >
                                    <div className={`flex items-center gap-4 ${selectedDomain !== i && selectedDomain !== null ? 'mb-0' : 'mb-3 gap-0 justify-between items-start'}`}>
                                        {/* @ts-ignore */}
                                        <div className={`${selectedDomain === i ? 'text-primary' : item.isPriority ? 'text-white' : 'text-muted'} group-hover:text-primary transition-colors duration-300`}>
                                            {item.icon}
                                        </div>
                                        {/* @ts-ignore */}
                                        {item.isPriority && (
                                            <div className={`w-1.5 h-1.5 rounded-full bg-accentPurple shadow-[0_0_8px_#A020F0] ${selectedDomain !== null && selectedDomain !== i ? 'hidden' : ''}`} title="High Priority" />
                                        )}

                                        {selectedDomain !== null && selectedDomain !== i && (
                                            <div className="font-bold text-sm text-white group-hover:text-primary transition-colors">{item.domain}</div>
                                        )}
                                    </div>

                                    {(selectedDomain === null || selectedDomain === i) && (
                                        <>
                                            <div className="font-bold text-sm text-white mb-1 group-hover:text-white transition-colors">{item.domain}</div>
                                            <div className="hidden md:block text-[10px] text-muted uppercase tracking-wide font-medium leading-tight opacity-70 group-hover:opacity-100 transition-opacity">
                                                {/* @ts-ignore */}
                                                {item.desc}
                                            </div>
                                        </>
                                    )}

                                    {/* Hover Overlay Hint (Only in Grid Mode) */}
                                    {selectedDomain === null && (
                                        <div className="hidden md:flex absolute inset-0 bg-background/90 backdrop-blur-sm items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl border border-primary/20">
                                            <span className="text-xs font-bold text-primary flex items-center gap-1">
                                                View Problems <span className="text-[10px]">→</span>
                                            </span>
                                        </div>
                                    )}
                                </button>
                            ))}
                        </div>

                        {/* Mobile "Show More" Button */}
                        {!showAllDomains && selectedDomain === null && (
                            <div className="md:hidden mt-8 text-center">
                                <button
                                    onClick={() => setShowAllDomains(true)}
                                    className="px-8 py-3 rounded-full bg-surface/10 border border-white/10 text-sm font-bold text-white hover:bg-surface/20 transition-all uppercase tracking-widest"
                                >
                                    + View All {PROBLEM_STATEMENTS.length} Domains
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Expanded Content Area */}
                    <AnimatePresence mode="wait">
                        {selectedDomain !== null && (
                            <motion.div
                                id="problems-view"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                                className="flex-1 w-full overflow-hidden"
                            >
                                <div className="relative rounded-[2rem] p-1 bg-gradient-to-br from-primary/30 to-transparent sticky top-8">
                                    <div className="bg-background border border-white/5 rounded-[1.8rem] p-8 md:p-12 relative overflow-hidden min-h-[600px] flex flex-col">
                                        {/* Background decoration */}
                                        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[100px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/2" />

                                        <div className="flex flex-col md:flex-row md:items-center gap-6 mb-12 relative z-10 border-b border-white/5 pb-8">
                                            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 flex items-center justify-center shadow-[0_0_40px_-10px_rgba(109,124,255,0.3)] shrink-0">
                                                <div className="text-primary scale-150">{PROBLEM_STATEMENTS[selectedDomain].icon}</div>
                                            </div>
                                            <div>
                                                <div className="text-xs font-bold text-primary uppercase tracking-[0.2em] mb-2">Selected Domain</div>
                                                <h3 className="text-3xl md:text-5xl font-heading font-medium text-white">{PROBLEM_STATEMENTS[selectedDomain].domain}</h3>
                                                {/* @ts-ignore */}
                                                <p className="text-muted mt-2 max-w-xl">{PROBLEM_STATEMENTS[selectedDomain].desc}</p>
                                            </div>

                                            <button onClick={() => setSelectedDomain(null)} className="md:ml-auto p-3 text-white/40 hover:text-white hover:bg-white/10 rounded-full transition-all z-10"><X className="w-6 h-6" /></button>
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-6 relative z-10 content-start">
                                            {PROBLEM_STATEMENTS[selectedDomain].problems.map((prob, k) => (
                                                <div key={k} className="group relative p-8 bg-white/[0.02] hover:bg-white/[0.04] rounded-2xl border border-white/5 hover:border-primary/30 transition-all duration-300 flex flex-col h-full hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-1">
                                                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/0 via-primary/50 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                                    <div className="mb-6 flex justify-between items-start">
                                                        <div className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-[10px] font-bold text-primary uppercase tracking-widest">
                                                            Problem 0{k + 1}
                                                        </div>
                                                    </div>

                                                    <h4 className="text-xl font-bold text-white mb-6 leading-tight group-hover:text-primary/90 transition-colors">{prob.title}</h4>

                                                    <div className="flex-grow space-y-6">
                                                        <div>
                                                            <div className="text-[10px] uppercase tracking-widest text-muted/50 font-bold mb-2">The Pain Point</div>
                                                            <p className="text-sm text-muted font-light leading-relaxed opacity-90 group-hover:opacity-100 transition-opacity">
                                                                {prob.desc}
                                                            </p>
                                                        </div>

                                                        <div className="pt-6 border-t border-white/5">
                                                            <div className="text-[10px] uppercase tracking-widest text-primary/70 font-bold mb-2">Build This</div>
                                                            {/* @ts-ignore */}
                                                            <p className="text-sm text-white/90 font-medium leading-relaxed">
                                                                {prob.solution}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </Reveal>
        </section>
    );
};
