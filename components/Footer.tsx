import { motion } from 'framer-motion';
import { Reveal } from './Reveal';

export const Footer = ({ onRegister }: { onRegister: () => void }) => (
    <footer id="footer" className="py-[160px] px-8 max-w-[1120px] mx-auto text-center relative overflow-hidden">
        <Reveal>
            <div className="mb-24">
                <h2 className="section-headline text-4xl md:text-7xl font-medium text-white mb-6 leading-[1.1] tracking-tighter select-none">
                    Ready to build something that matters?
                </h2>
                <p className="text-xl text-muted font-light max-w-2xl mx-auto">
                    Take your idea from thought to creation.
                </p>
            </div>
            <div className="flex flex-col items-center gap-8 mb-32">
                <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="cta-border px-16 py-7 rounded-full text-white font-bold text-2xl tracking-tight group"
                    onClick={onRegister}
                >
                    Register Now
                    <span className="inline-block transition-transform group-hover:translate-x-2 ml-3">→</span>
                </motion.button>
                <div className="text-[11px] uppercase tracking-[0.4em] text-primary font-bold">
                    If your solution can work for one real user, it can work for millions.
                </div>
            </div>
            <div className="flex flex-col items-center gap-6">
                <div className="text-[10px] text-muted/30">© 2025 Vasudev AI · Built for Real Builders.</div>
            </div>
        </Reveal>
    </footer>
);
