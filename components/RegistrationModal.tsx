import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight } from 'lucide-react';

export const RegistrationModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                    />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="relative w-full max-w-lg bg-[#0F0F0F] border border-white/10 rounded-[2rem] p-8 md:p-10 shadow-2xl overflow-hidden"
                    >
                        {/* Cool Background */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[80px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/2" />

                        <button onClick={onClose} className="absolute top-6 right-6 p-2 rounded-full hover:bg-white/5 transition-colors text-white/50 hover:text-white z-10">
                            <X className="w-6 h-6" />
                        </button>

                        <div className="mb-8 relative z-10">
                            <h3 className="text-2xl font-bold text-white mb-2">Join the Sprint</h3>
                            <p className="text-muted text-sm">Fill in your details to register. It takes 30 seconds.</p>
                        </div>

                        <form className="space-y-5 relative z-10" onSubmit={(e) => e.preventDefault()}>
                            <div className="space-y-1.5">
                                <label className="text-[11px] font-bold text-muted uppercase tracking-wider">Full Name</label>
                                <input type="text" placeholder="e.g. Surya Pratap" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all" />
                            </div>

                            <div className="space-y-1.5">
                                <label className="text-[11px] font-bold text-muted uppercase tracking-wider">Email Address</label>
                                <input type="email" placeholder="you@example.com" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all" />
                            </div>

                            <div className="space-y-1.5">
                                <label className="text-[11px] font-bold text-muted uppercase tracking-wider">Discord Username</label>
                                <input type="text" placeholder="e.g. surya#1234" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all" />
                            </div>

                            <div className="pt-4">
                                <button type="submit" className="w-full bg-white text-black font-bold text-lg py-4 rounded-xl hover:bg-primary hover:text-white hover:scale-[1.02] transition-all shadow-lg active:scale-95 flex items-center justify-center gap-2">
                                    <span>Complete Registration</span>
                                    <ArrowRight className="w-5 h-5" />
                                </button>
                                <p className="text-center text-[10px] text-muted mt-4">
                                    By joining, you agree to our <span className="text-white underline cursor-pointer">Rules</span> & <span className="text-white underline cursor-pointer">Code of Conduct</span>.
                                </p>
                            </div>
                        </form>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};
