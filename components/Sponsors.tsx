export const Sponsors = () => (
    <section className="relative py-12 border-y border-white/5 bg-white/[0.02]">
        <div className="max-w-[1120px] mx-auto px-8 text-center">
            <p className="text-[10px] font-bold text-primary uppercase tracking-[0.4em] mb-8">Organized By</p>
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-32">
                <div className="group cursor-default">
                    <h3 className="text-2xl md:text-4xl font-black text-white tracking-tighter group-hover:text-cyan-400 transition-colors duration-300 text-shadow-glow">
                        VASUDEV AI
                    </h3>
                </div>
                <div className="h-8 w-px bg-white/10 hidden md:block"></div>
                <div className="group cursor-default">
                    <h3 className="text-2xl md:text-4xl font-black text-white tracking-tighter group-hover:text-blue-400 transition-colors duration-300 text-shadow-glow">
                        UTSAVY
                    </h3>
                </div>
            </div>
        </div>
    </section>
);
