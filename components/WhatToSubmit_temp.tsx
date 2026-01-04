import React from 'react';
import { Reveal } from './Reveal';

export const WhatToSubmit = () => {
    return (
        <section className="py-20 md:py-[120px] px-6 md:px-8 max-w-[1280px] mx-auto border-t border-white/5">
            <Reveal x={-20}>
                <div className="mb-16">
                    <h2 className="text-[11px] font-bold text-accentPurple uppercase tracking-[0.6em] mb-6">Requirements</h2>
                    <h3 className="section-headline text-3xl md:text-5xl font-medium text-white mb-6">What to submit?</h3>
                    <p className="text-xl text-muted font-light max-w-2xl leading-relaxed">
                        Your final submission must include these key deliverables to be eligible for evaluation.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    {/* Prototype */}
                    <div className="p-8 md:p-10 rounded-3xl bg-surface/5 border border-white/10 hover:border-primary/30 transition-colors group">
                        <h4 className="text-2xl font-heading font-medium text-white mb-4 group-hover:text-primary transition-colors">Prototype</h4>
                        <p className="text-muted text-sm leading-relaxed">
                            A functional, working code prototype. We prioritize working software over mockups.
                        </p>
                    </div>

                    {/* Submission Presentation */}
                    <div className="p-8 md:p-10 rounded-3xl bg-surface/5 border border-white/10 hover:border-primary/30 transition-colors group row-span-2">
                        <h4 className="text-2xl font-heading font-medium text-white mb-4 group-hover:text-primary transition-colors">Submission Presentation</h4>
                        <p className="text-muted text-sm mb-6">
                            A presentation (Max 10-12 slides) summarizing:
                        </p>
                        <ul className="space-y-3 text-sm text-muted/80 font-light">
                            <li className="flex gap-2 items-start">
                                <span className="text-primary mt-1">•</span>
                                Problem and Solution Overview
                            </li>
                            <li className="flex gap-2 items-start">
                                <span className="text-primary mt-1">•</span>
                                Key Features and Differentiators
                            </li>
                            <li className="flex gap-2 items-start">
                                <span className="text-primary mt-1">•</span>
                                Tech Stack Utilised
                            </li>
                            <li className="flex gap-2 items-start">
                                <span className="text-primary mt-1">•</span>
                                Market Opportunity and Viability
                            </li>
                            <li className="flex gap-2 items-start">
                                <span className="text-primary mt-1">•</span>
                                Future Roadmap and Vision
                            </li>
                        </ul>
                    </div>

                    {/* Code Repository */}
                    <div className="p-8 md:p-10 rounded-3xl bg-surface/5 border border-white/10 hover:border-primary/30 transition-colors group">
                        <h4 className="text-2xl font-heading font-medium text-white mb-4 group-hover:text-primary transition-colors">Code Repository</h4>
                        <p className="text-muted text-sm leading-relaxed">
                            Link to your Github repository. Ensure README is well-documented with setup instructions.
                        </p>
                    </div>

                    {/* Video Pitch */}
                    <div className="p-8 md:p-10 rounded-3xl bg-surface/5 border border-white/10 hover:border-primary/30 transition-colors group md:col-span-2">
                        <h4 className="text-2xl font-heading font-medium text-white mb-4 group-hover:text-primary transition-colors">Video Pitch (Max 3 mins)</h4>
                        <p className="text-muted text-sm leading-relaxed">
                            A concise, engaging video demonstrating the functionality of the prototype, explaining its features, and outlining its impact. Must be uploaded to a public video hosting service (YouTube/Loom/Drive).
                        </p>
                    </div>
                </div>
            </Reveal>
        </section>
    );
};
