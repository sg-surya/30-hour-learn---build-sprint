import { motion } from 'framer-motion';
import { Reveal } from './Reveal';

export const Footer = ({ onRegister }: { onRegister: () => void }) => (
    <footer id="footer" className="py-24 md:py-[160px] px-6 md:px-8 max-w-[1120px] mx-auto text-center relative overflow-hidden">
        <Reveal>
            <div className="mb-12 md:mb-24">
                <h2 className="section-headline text-4xl md:text-7xl font-medium text-white mb-6 leading-[1.1] tracking-tighter select-none">
                    Ready to build something real?
                </h2>
            </div>
            <div className="flex flex-col items-center gap-6 mb-32">
                <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="cta-border px-16 py-7 rounded-full text-white font-bold text-2xl tracking-tight group"
                    onClick={onRegister}
                >
                    Enter the Sprint
                    <span className="inline-block transition-transform group-hover:translate-x-2 ml-3">→</span>
                </motion.button>
                <div className="text-[11px] uppercase tracking-[0.2em] text-muted font-bold">
                    Limited slots · No fluff
                </div>
            </div>
            <div className="flex flex-col items-center gap-6">
                <div className="text-[10px] text-muted/30">© 2026 Vasudev AI · Built for Real Builders.</div>
            </div>
        </Reveal>
    </footer>
);
