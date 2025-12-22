import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const Navbar = ({ onRegister }: { onRegister: () => void }) => {
    const [isScrolled, setIsScrolled] = useState(false);

    React.useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4 md:py-6 pointer-events-none transition-all duration-300">
            <div className={`absolute inset-0 transition-opacity duration-500 pointer-events-auto ${isScrolled ? 'bg-background/80 backdrop-blur-md border-b border-white/5 opacity-100' : 'opacity-0'}`} />
            <div className="max-w-[1120px] mx-auto flex justify-between items-center relative pointer-events-auto">
                <div className="font-heading font-bold text-xl tracking-tighter flex items-center gap-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-primary shadow-[0_0_15px_#6D7CFF]" />
                    VASUDEV AI
                </div>
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={onRegister}
                    className="px-6 py-2.5 rounded-full bg-white text-black text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-primary hover:text-white transition-colors shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                >
                    Join Sprint
                </motion.button>
            </div>
        </nav>
    );
};
