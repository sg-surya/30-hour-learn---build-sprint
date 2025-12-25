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
            className="relative h-[100dvh] w-full flex flex-col items-center justify-center px-4 md:px-6 text-center overflow-hidden"
        >
            <div
                className="absolute inset-0 pointer-events-none z-0 opacity-40 transition-opacity duration-1000"
                style={{
                    background: `radial-gradient(800px at ${mousePos.x}px ${mousePos.y}px, rgba(109, 124, 255, 0.08), transparent 70%)`
                }}
            />
            {/* Winter Theme Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0A0B10] via-[#0f111a] to-[#0A0B10] -z-20" />
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] -z-10 mix-blend-overlay" />

            <motion.div
                style={{ y: blobY }}
                className="absolute inset-0 -z-10 pointer-events-none overflow-hidden"
            >
                {/* Subtle Winter Glows */}
                <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[80vw] h-[40vw] bg-blue-500/5 blur-[100px] rounded-full" />
                <div className="absolute top-[40%] left-[20%] w-[40vw] h-[40vw] bg-cyan-500/5 blur-[120px] rounded-full" />
            </motion.div>

            <motion.div style={{ y: textY, opacity }} className="max-w-[1120px] mx-auto z-10 relative">
                <Reveal>
                    {/* Event Identity Badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-cyan-500/15 bg-cyan-950/10 rounded-full text-[10px] font-bold text-cyan-100 uppercase tracking-[0.2em] mb-3 backdrop-blur-md shadow-[0_0_20px_-5px_rgba(34,211,238,0.15)]">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_rgba(34,211,238,0.6)]" />
                        VASUDEV WINTER HACK · 50H Build Sprint
                    </div>
                </Reveal>

                <div className="flex flex-col items-center">
                    <TextReveal className="hero-headline font-extrabold mb-1 text-white select-none text-center justify-center leading-[0.9]">
                        Build Real.
                    </TextReveal>
                    <TextReveal className="hero-headline font-extrabold mb-2 text-white select-none text-center justify-center leading-[0.9]">
                        This Winter.
                    </TextReveal>
                    <TextReveal className="text-xl md:text-3xl text-white/50 italic font-light hero-title-secondary cursor-default mb-4 text-center justify-center font-serif" delay={0.3}>
                        On Your Schedule.
                    </TextReveal>
                </div>

                <Reveal>
                    <div className="max-w-3xl mx-auto mb-5">
                        <p className="text-lg md:text-xl text-muted font-light mb-2 leading-relaxed hero-subline cursor-default">
                            50 hours to turn a real problem into a working solution.<br className="hidden md:block" />
                            <span className="text-white/80">You decide how and when to spend ~30 hours building.</span>
                        </p>
                        <p className="inline-block text-xs md:text-sm text-cyan-200/70 font-medium tracking-widest uppercase border-b border-cyan-500/10 pb-1">
                            Beginner-friendly · Advanced-approved · Mentor-supported
                        </p>
                    </div>

                    <div className="flex flex-col items-center gap-4">
                        {/* Mentor Hint */}
                        <div className="flex items-center gap-2 text-[10px] md:text-xs text-muted/60 font-medium mb-1">
                            <Users className="w-3.5 h-3.5 text-cyan-400/70" />
                            <span>Live mentor sessions during the sprint (1–2 hrs)</span>
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.02, boxShadow: "0 0 40px rgba(34, 211, 238, 0.3)" }}
                            whileTap={{ scale: 0.98 }}
                            onClick={onRegister}
                            className="relative group bg-gradient-to-br from-[#0A0B10] to-[#131620] border border-cyan-500/30 px-12 py-5 rounded-full overflow-hidden transition-all duration-300"
                        >
                            <div className="absolute inset-0 bg-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
                            <div className="relative z-10 flex items-center gap-3 text-white font-bold text-lg tracking-tight">
                                Enter the Sprint
                                <span className="inline-block transition-transform group-hover:translate-x-2">→</span>
                            </div>
                            {/* Inner Glow Border */}
                            <div className="absolute inset-0 rounded-full border border-cyan-500/20 opacity-50 group-hover:opacity-100 transition-opacity" />
                        </motion.button>

                        <div className="flex flex-col items-center gap-2 mt-1">
                            <span className="text-xs font-bold text-white tracking-[0.2em] uppercase text-shadow-glow">Winter Dates Revealing Soon</span>
                        </div>

                        <div className="hidden md:flex flex-col md:flex-row items-center gap-6 mt-4 opacity-60 hover:opacity-100 transition-opacity duration-300">
                            <div className="flex items-center gap-2">
                                <Clock className="w-3.5 h-3.5 text-cyan-400" />
                                <span className="text-[9px] text-muted font-bold tracking-[0.2em] uppercase">50H Window</span>
                            </div>
                            <div className="w-0.5 h-3 bg-white/20" />
                            <div className="flex items-center gap-2">
                                <Zap className="w-3.5 h-3.5 text-cyan-400" />
                                <span className="text-[9px] text-muted font-bold tracking-[0.2em] uppercase">Online</span>
                            </div>
                            <div className="w-0.5 h-3 bg-white/20" />
                            <div className="flex items-center gap-2">
                                <Users className="w-3.5 h-3.5 text-cyan-400" />
                                <span className="text-[9px] text-muted font-bold tracking-[0.2em] uppercase">Solo or Team (Max 4)</span>
                            </div>
                        </div>
                    </div>
                </Reveal>
            </motion.div>
        </section>
    );
};
