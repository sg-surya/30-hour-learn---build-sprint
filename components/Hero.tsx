import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Clock, Zap, Users } from 'lucide-react';
import { Reveal } from './Reveal';
import { TextReveal } from './VisualEffects';

export const Hero = ({ onRegister }: { onRegister: () => void }) => {
    const containerRef = useRef<HTMLElement>(null);
    const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
    const { scrollY } = useScroll();
    const blobY = useTransform(scrollY, [0, 1000], [0, 250]);
    const textY = useTransform(scrollY, [0, 500], [0, 100]);
    const opacity = useTransform(scrollY, [0, 400], [1, 0]);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    return (
        <section
            ref={containerRef}
            onMouseMove={handleMouseMove}
            className="relative min-h-[70vh] md:min-h-[85vh] flex flex-col items-center justify-center px-4 md:px-6 text-center overflow-hidden pt-8 md:pt-24 pb-12"
        >
            <div
                className="absolute inset-0 pointer-events-none z-0 opacity-40 transition-opacity duration-1000"
                style={{
                    background: `radial-gradient(800px at ${mousePos.x}px ${mousePos.y}px, rgba(109, 124, 255, 0.12), transparent 70%)`
                }}
            />
            <motion.div
                style={{ y: blobY }}
                className="absolute inset-0 -z-10 pointer-events-none overflow-hidden"
            >
                <div className="absolute top-[30%] left-1/2 w-[85vw] h-[85vw] bg-primary/5 blur-[120px] rounded-full animate-fluid-blob" />
                <div className="absolute top-[40%] left-[45%] w-[65vw] h-[65vw] bg-accentPurple/5 blur-[150px] rounded-full animate-fluid-blob" />
            </motion.div>

            <motion.div style={{ y: textY, opacity }} className="max-w-[1120px] mx-auto z-10">
                <Reveal>
                    <div className="md:hidden inline-block px-4 py-1.5 border border-white/20 bg-white/5 rounded-full text-[10px] font-bold text-white uppercase tracking-[0.2em] mb-6 backdrop-blur-sm">
                        BUILD SPRINT · NO FLUFF
                    </div>
                    <div className="hidden md:inline-block px-5 py-2 border border-border bg-surface/10 rounded-full text-[10px] font-bold text-primary uppercase tracking-[0.4em] mb-8 backdrop-blur-sm">
                        50 Hours Build Sprint · 30-Hour Effort · Vasudev AI
                    </div>
                </Reveal>

                <div className="flex flex-col items-center">
                    <TextReveal className="hero-headline font-semibold mb-2 text-white select-none text-center justify-center">
                        Build Hard.
                    </TextReveal>
                    <TextReveal className="text-xl md:text-3xl text-white/40 italic font-medium hero-title-secondary cursor-default mb-6 text-center justify-center" delay={0.3}>
                        On Your Schedule.
                    </TextReveal>
                </div>

                <Reveal>
                    <p className="hidden md:block text-xl md:text-2xl text-muted max-w-2xl mx-auto font-light mb-8 leading-relaxed hero-subline cursor-default">
                        50 hours to turn a real problem into a working solution.<br />
                        Commit ~30 hours of honest building, whenever it fits your schedule.
                    </p>
                    <p className="md:hidden text-lg text-muted max-w-[90%] mx-auto font-light mb-8 leading-relaxed hero-subline cursor-default">
                        A startup-first sprint to build real solutions in 30 hours.
                    </p>
                    <p className="hidden md:block text-sm text-primary/70 font-medium mb-10 tracking-wide uppercase tracking-[0.2em]">
                        Solo or Team (Max 4) · Real Work · Meaningful Recognition
                    </p>

                    <div className="flex flex-col items-center gap-4">
                        <motion.button
                            whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(109, 124, 255, 0.4)" }}
                            whileTap={{ scale: 0.98 }}
                            onClick={onRegister}
                            className="cta-border px-16 py-6 rounded-full text-white font-bold text-xl tracking-tight group shadow-[0_0_20px_rgba(109,124,255,0.2)]"
                        >
                            Enter the Sprint
                            <span className="inline-block transition-transform group-hover:translate-x-2 ml-3">→</span>
                        </motion.button>

                        <div className="md:hidden mt-4 text-[11px] font-bold text-muted uppercase tracking-widest">
                            50H sprint · 30H active build
                        </div>

                        <div className="hidden md:flex items-center gap-3 px-6 py-2 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-sm mt-4">
                            <div className="w-2 h-2 rounded-full bg-accentPurple animate-pulse shadow-[0_0_10px_#9f7aea]" />
                            <span className="text-sm font-bold text-white tracking-[0.2em] uppercase">Date Reveal Soon</span>
                        </div>

                        <span className="hidden md:block text-[10px] text-muted/50 font-medium tracking-widest uppercase">Takes less than 2 minutes</span>

                        <div className="hidden md:flex flex-col md:flex-row items-center gap-6 mt-6">
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4 text-primary" />
                                <span className="text-[10px] text-muted font-bold tracking-[0.2em] uppercase">50h Duration</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Zap className="w-4 h-4 text-accentPurple" />
                                <span className="text-[10px] text-muted font-bold tracking-[0.2em] uppercase">Online Sprint</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Users className="w-4 h-4 text-white" />
                                <span className="text-[10px] text-muted font-bold tracking-[0.2em] uppercase">Solo or Team (Max 4)</span>
                            </div>
                        </div>
                    </div>
                </Reveal>
            </motion.div>
        </section>
    );
};
