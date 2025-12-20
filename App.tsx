import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'framer-motion';
import { Trophy, Users, FileCheck, Zap, ChevronDown, Clock, ShieldCheck, Rocket, Scale, Library, Star, Award, Layout, CheckCircle, Globe, Stethoscope, Leaf, ShoppingBag, Truck, Lock, Heart, Video, Cpu, Building2, X, BookOpen, Briefcase } from 'lucide-react';

const PROBLEM_STATEMENTS = [
  {
    domain: "EdTech",
    icon: <BookOpen className="w-6 h-6" />,
    problems: [
      { title: "High Dropout Rates", desc: "1.42 crore dropouts. Build low-cost intervention tools (SMS/Chatbot) to identify at-risk students." },
      { title: "Workforce Skills Mismatch", desc: "2.3M AI jobs but only 1.2M pros. Build specific skill-matching or adaptive learning paths." },
      { title: "Teachers Overwhelmed", desc: "Teachers lack training/tools. Build AI cheating detection or micro-lesson training platforms." }
    ]
  },
  {
    domain: "FinTech",
    icon: <Scale className="w-6 h-6" />,
    problems: [
      { title: "Synthetic Identity Fraud", desc: "450% rise in fraud. Build continuous KYC monitoring or behavioral biometrics." },
      { title: "Phishing & UPI Fraud", desc: "38% of frauds are phishing. Build SMS scam detection or UPI fraud reversal bots." },
      { title: "Rural Trust Gap", desc: "<50% rural digital literacy. Build vernacular chatbots or USSD banking apps." }
    ]
  },
  {
    domain: "MedTech",
    icon: <Stethoscope className="w-6 h-6" />,
    problems: [
      { title: "Rural Healthcare Access", desc: "73% lack access. Build low-bandwidth telemedicine or offline diagnostic guides." },
      { title: "Maternal Health", desc: "High mortality. Build low-tech prenatal tracking (SMS-based) or emergency transport recall." },
      { title: "Data Fragmentation", desc: "Records scattered. Build patient data aggregation (ABHA) or health record wallets." }
    ]
  },
  {
    domain: "AgriTech",
    icon: <Leaf className="w-6 h-6" />,
    problems: [
      { title: "Small Farmer Tech", desc: "Farmers can't afford sensors. Build ₹500 sensors or SMS-based advisory." },
      { title: "Debt & Middlemen", desc: "Exploitative interest. Build cooperative lending or direct-to-buyer marketplaces." },
      { title: "Climate Risk", desc: "Harvest failures. Build crowdsourced weather prediction or drought early warning." }
    ]
  },
  {
    domain: "AI & DeepTech",
    icon: <Cpu className="w-6 h-6" />,
    problems: [
      { title: "Deepfake Misinformation", desc: "Spreads 70% faster. Build real-time deepfake detection or blockchain auth." },
      { title: "AI Fraud & Impersonation", desc: "Voice cloning scams. Build voice-call MFA or scam detection chatbots." },
      { title: "AI Literacy Gap", desc: "Workers distrust AI. Build interactive AI literacy tools or risk assessment platforms." }
    ]
  },
  {
    domain: "DevTools",
    icon: <Zap className="w-6 h-6" />,
    problems: [
      { title: "Context Switching", desc: "Devs lose 2.5h/day. Build a context aggregator or AI copilot for docs." },
      { title: "AI Code Quality", desc: "AI code is buggy. Build hallucination detectors or auto-test generators." },
      { title: "Developer Burnout", desc: "Bad metrics. Build DORA dashboards or flow-state detectors." }
    ]
  },
  {
    domain: "Smart Cities",
    icon: <Building2 className="w-6 h-6" />,
    problems: [
      { title: "Sewage Crisis", desc: "72k MLD untreated. Build leak detection or decentralized treatment design tools." },
      { title: "Urban Flooding", desc: "Monsoons paralyze cities. Build hyperlocal flood prediction or smart drainage." },
      { title: "Fragmented Systems", desc: "Silos in services. Build a unified city data API or command dashboard." }
    ]
  },
  {
    domain: "ClimateTech",
    icon: <Globe className="w-6 h-6" />,
    problems: [
      { title: "SME Carbon Accounting", desc: "Too expensive. Build plug-and-play carbon calculators for SMEs." },
      { title: "Industrial Emissions", desc: "Hard to abate. Build AI digital twins for factory efficiency." },
      { title: "Grid Instability", desc: "Renewables intermittent. Build AI demand forecasting or P2P energy trading." }
    ]
  },
  {
    domain: "E-Commerce",
    icon: <ShoppingBag className="w-6 h-6" />,
    problems: [
      { title: "Payment Failures", desc: "Gateways crash. Build payment aggregators with auto-failover." },
      { title: "Last-Mile Bottleneck", desc: "High costs. Build route optimization or address standardization." },
      { title: "Small Retailer Digitization", desc: "Kiranas need tech. Build simple inventory apps (barcode + SMS)." }
    ]
  },
  {
    domain: "Logistics",
    icon: <Truck className="w-6 h-6" />,
    problems: [
      { title: "Invisible Supply Chain", desc: "Manual tracking errors. Build IoT tracking or blockchain ledgers." },
      { title: "Address Accuracy", desc: "Failed deliveries. Build address verification or dynamic ETA systems." },
      { title: "Warehouse Inefficiency", desc: "Space wasted. Build layout optimization or healthy-inventory algos." }
    ]
  },
  {
    domain: "Cybersecurity",
    icon: <Lock className="w-6 h-6" />,
    problems: [
      { title: "Supply Chain Ransomware", desc: "Suppliers targeted. Build vendor risk assessment or early detection." },
      { title: "Phishing at Scale", desc: "AI phishing. Build AI-resistant MFA or email verification." },
      { title: "Cloud Misconfigs", desc: "Data exposure. Build auto-scan tools for misconfigurations." }
    ]
  },
  {
    domain: "Social Impact",
    icon: <Heart className="w-6 h-6" />,
    problems: [
      { title: "Banking the Unbanked", desc: "200M+ excluded. Build USSD banking or alternative credit scoring." },
      { title: "Rural Maternal Health", desc: "No monitoring. Build community health worker apps." },
      { title: "Youth Unemployment", desc: "Skill gap. Build micro-credential platforms or job matching." }
    ]
  },
  {
    domain: "Media & Creator",
    icon: <Video className="w-6 h-6" />,
    problems: [
      { title: "AI Misinformation", desc: "Fake news. Build fact-check APIs or media literacy games." },
      { title: "Creator IP Theft", desc: "AI scraping. Build royalty tracking or content watermarking." },
      { title: "Influencer Fraud", desc: "Fake advice. Build credential verification for finance/health influencers." }
    ]
  },
  {
    domain: "Open Innovation",
    icon: <Rocket className="w-6 h-6" />,
    problems: [
      { title: "Heritage Industries", desc: "Weavers dying out. Build DTC marketplaces or AI design tools." },
      { title: "Corp-Startup Mismatch", desc: "PoCs fail. Build matching platforms or IP governance templates." },
      { title: "Privacy Collaboration", desc: "Data silos. Build federated learning or privacy-preserving compute." }
    ]
  }
];

const Reveal = ({ children, delay = 0, x = 0 }: { children?: React.ReactNode; delay?: number; x?: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30, x }}
      animate={isInView ? { opacity: 1, y: 0, x: 0 } : {}}
      transition={{ duration: 1.2, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
};

const Navbar = () => {
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
          onClick={() => window.open('https://forms.gle/your-form-link', '_blank')}
          className="px-6 py-2.5 rounded-full bg-white text-black text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-primary hover:text-white transition-colors shadow-[0_0_20px_rgba(255,255,255,0.2)]"
        >
          Join Sprint
        </motion.button>
      </div>
    </nav>
  );
};

const WaveSeparator = ({ position = 'bottom', invert = false }: { position?: 'top' | 'bottom', invert?: boolean }) => (
  <div className={`absolute left-0 w-full overflow-hidden leading-0 z-10 ${position === 'top' ? 'top-0 -translate-y-[98%]' : 'bottom-0 translate-y-[98%]'}`}>
    <svg className={`relative block w-[calc(100%+1.3px)] h-[60px] md:h-[120px] ${invert ? 'rotate-180' : ''}`} data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
      <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-background"></path>
    </svg>
  </div>
);

const Hero = () => {
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
      className="relative min-h-[85vh] flex flex-col items-center justify-center px-6 text-center overflow-hidden pt-24 pb-12"
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
          <div className="inline-block px-5 py-2 border border-border bg-surface/10 rounded-full text-[10px] font-bold text-primary uppercase tracking-[0.4em] mb-8 backdrop-blur-sm">
            50 Hours Build Sprint · 30-Hour Effort · Vasudev AI
          </div>
          <h1 className="hero-headline font-semibold mb-6 text-white select-none">
            Build Hard.<br />
            <span className="text-white/40 italic font-medium hero-title-secondary cursor-default text-[0.85em]">On Your Schedule.</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted max-w-2xl mx-auto font-light mb-8 leading-relaxed hero-subline cursor-default">
            50 hours to turn a real problem into a working solution.<br className="hidden md:block" />
            Commit ~30 hours of honest building, whenever it fits your schedule.
          </p>
          <p className="text-sm text-primary/70 font-medium mb-10 tracking-wide uppercase tracking-[0.2em]">
            Solo or Team (Max 4) · Real Work · Meaningful Recognition
          </p>

          <div className="flex flex-col items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(109, 124, 255, 0.4)" }}
              whileTap={{ scale: 0.98 }}
              onClick={() => document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' })}
              className="cta-border px-16 py-6 rounded-full text-white font-bold text-xl tracking-tight group shadow-[0_0_20px_rgba(109,124,255,0.2)]"
            >
              Enter the Sprint
              <span className="inline-block transition-transform group-hover:translate-x-2 ml-3">→</span>
            </motion.button>

            <span className="text-[10px] text-muted/50 font-medium tracking-widest uppercase">Takes less than 2 minutes</span>

            <div className="flex flex-col md:flex-row items-center gap-6 mt-6">
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

const WhatIsSprint = () => (
  <section className="relative py-32 bg-surface/5">
    <div className="px-8 max-w-[800px] mx-auto text-center">
      <Reveal>
        <h2 className="text-sm font-bold text-primary uppercase tracking-[0.4em] mb-8">What is this?</h2>
        <h3 className="text-3xl md:text-5xl font-heading font-medium text-white mb-8 leading-tight">
          A startup-first build sprint.
        </h3>
        <p className="text-xl text-muted font-light leading-relaxed mb-12">
          Identify a real-world problem, validate it with users, and build a working solution in 50 hours — without quitting your job or college.
        </p>
        <div className="flex flex-wrap justify-center gap-6 md:gap-12 text-sm font-medium text-white/80">
          <div className="flex items-center gap-3"><Clock className="w-5 h-5 text-primary" /> 50h Window · ~30h Effort</div>
          <div className="flex items-center gap-3"><Users className="w-5 h-5 text-primary" /> Solo or Small Teams</div>
          <div className="flex items-center gap-3"><Rocket className="w-5 h-5 text-primary" /> Build for Impact</div>
        </div>
      </Reveal>
    </div>
  </section>
);

const HowItWorks = () => (
  <section className="py-32 px-8 max-w-[1120px] mx-auto">
    <Reveal>
      <div className="mb-24 text-center">
        <h2 className="text-sm font-bold text-accentPurple uppercase tracking-[0.4em] mb-4">Process</h2>
        <h3 className="text-4xl md:text-5xl font-heading font-medium text-white">How It Works</h3>
      </div>

      <div className="grid md:grid-cols-4 gap-8 relative mb-20">
        {/* Connector Line */}
        <div className="hidden md:block absolute top-[2.5rem] left-0 w-full h-px border-t-2 border-dashed border-white/10 -z-10" />

        {[
          { icon: <Layout className="w-6 h-6" />, step: "01", title: "Choose Domain", desc: "Pick a real-world problem people actually struggle with." },
          { icon: <Users className="w-6 h-6" />, step: "02", title: "Validate", desc: "Talk to 1-2 real users. Understand the pain first." },
          { icon: <Zap className="w-6 h-6" />, step: "03", title: "Build", desc: "Spend ~30 hours building a simple, usable solution." },
          { icon: <Rocket className="w-6 h-6" />, step: "04", title: "Submit", desc: "Show what you built, why it matters, and how it scales." }
        ].map((item, i) => (
          <div key={i} className="relative grid place-items-center text-center group">
            <div className="w-20 h-20 bg-background border border-border rounded-3xl flex items-center justify-center text-muted group-hover:text-primary group-hover:border-primary/50 group-hover:shadow-[0_0_30px_-10px_rgba(109,124,255,0.3)] transition-all duration-500 mb-6 bg-gradient-to-br from-surface/50 to-background z-10 box-border">
              {item.icon}
            </div>

            <div className="space-y-3">
              <div className="text-[10px] font-bold text-accentPurple uppercase tracking-[0.2em] opacity-80">Step {item.step}</div>
              <h4 className="text-xl font-bold text-white">{item.title}</h4>
              <p className="text-sm text-muted font-light leading-relaxed max-w-[200px] mx-auto">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center">
        <div className="inline-flex flex-col md:flex-row items-center gap-6 px-8 py-4 rounded-full bg-surface/10 border border-white/5 backdrop-blur-sm">
          <p className="text-lg text-white font-medium">We care about progress, not perfection.</p>
          <div className="hidden md:block h-4 w-px bg-white/10"></div>
          <button onClick={() => document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' })} className="text-sm font-bold text-primary hover:text-white transition-colors uppercase tracking-widest">
            Start Building →
          </button>
        </div>
      </div>
    </Reveal>
  </section>
);

const Protocol5030 = () => (
  <section className="relative py-24 bg-surface/5 border-y border-white/5">
    <div className="px-8 max-w-[1120px] mx-auto">
      <Reveal x={-20}>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-sm font-bold text-primary uppercase tracking-[0.4em] mb-6">The 50:30 Protocol</h2>
            <h3 className="text-4xl font-heading font-medium text-white mb-8">Built for real builders with real lives.</h3>
            <div className="space-y-4 text-lg text-muted font-light">
              <p>Flexible slots. Honest progress. High stakes delivery.</p>
              <p className="opacity-80">We don't track your minutes with a stopwatch. We judge your commitment through daily check-ins and the quality of what you ship.</p>
            </div>
          </div>
          <div className="p-8 border border-border bg-surface/10 rounded-[2.5rem] relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-5"><Clock className="w-32 h-32" /></div>
            <h4 className="text-xs font-bold text-white/50 uppercase tracking-[0.2em] mb-8">The Balance</h4>
            <div className="space-y-8">
              <div className="flex justify-between items-end border-b border-white/5 pb-4">
                <span className="text-muted text-sm uppercase tracking-widest">Total Sprint Window</span>
                <span className="text-white text-4xl font-heading font-bold">50H</span>
              </div>
              <div className="flex justify-between items-end border-b border-white/5 pb-4">
                <span className="text-muted text-sm uppercase tracking-widest">Recommended Effort</span>
                <span className="text-primary text-4xl font-heading font-bold">~30H</span>
              </div>
              <p className="text-xs text-muted/60 italic">
                *We don't track hours. We evaluate output.
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);

const BenefitRow = ({ icon, title }: { icon: any, title: string }) => (
  <div className="flex items-center gap-4 p-4 border border-border/50 bg-background/40 rounded-xl">
    {icon}
    <span className="font-medium text-white/90">{title}</span>
  </div>
);

const ProblemExplorer = () => {
  const [selectedDomain, setSelectedDomain] = useState<number | null>(null);

  return (
    <section className="relative py-[160px] px-8 max-w-[1120px] mx-auto">
      <Reveal>
        <div className="mb-20 text-center">
          <h2 className="text-[11px] font-bold text-accentPurple uppercase tracking-[0.6em] mb-6">Real Worl Problems</h2>
          <h3 className="section-headline text-4xl md:text-6xl font-medium text-white mb-8">14 Tech Domains</h3>
          <p className="text-muted max-w-2xl mx-auto">Click on a domain to view detailed problem statements.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {PROBLEM_STATEMENTS.map((item, i) => (
            <button
              key={i}
              onClick={() => setSelectedDomain(selectedDomain === i ? null : i)}
              className={`p-6 text-left rounded-2xl border transition-all duration-300 hover:scale-105 ${selectedDomain === i ? 'border-primary bg-primary/20' : 'border-border bg-surface/5 hover:border-primary/50'}`}
            >
              <div className={`mb-3 ${selectedDomain === i ? 'text-primary' : 'text-muted'}`}>{item.icon}</div>
              <div className="font-bold text-sm text-white">{item.domain}</div>
            </button>
          ))}
        </div>

        <AnimatePresence>
          {selectedDomain !== null && (
            <motion.div
              initial={{ opacity: 0, y: 20, height: 0 }}
              animate={{ opacity: 1, y: 0, height: 'auto' }}
              exit={{ opacity: 0, y: 20, height: 0 }}
              className="overflow-hidden mt-8"
            >
              <div className="bg-surface/10 border border-border rounded-3xl p-8 md:p-12 relative">
                <button onClick={() => setSelectedDomain(null)} className="absolute top-6 right-6 p-2 text-muted hover:text-white"><X className="w-6 h-6" /></button>
                <div className="flex items-center gap-4 mb-8">
                  <div className="text-primary">{PROBLEM_STATEMENTS[selectedDomain].icon}</div>
                  <h3 className="text-3xl font-heading font-medium text-white">{PROBLEM_STATEMENTS[selectedDomain].domain} Problems</h3>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                  {PROBLEM_STATEMENTS[selectedDomain].problems.map((prob, k) => (
                    <div key={k} className="p-6 bg-background/50 rounded-2xl border border-white/5">
                      <div className="text-xs font-bold text-primary mb-2 uppercase tracking-widest">Problem {k + 1}</div>
                      <h4 className="text-lg font-bold text-white mb-3">{prob.title}</h4>
                      <p className="text-sm text-muted font-light leading-relaxed">{prob.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Reveal>
    </section>
  );
};

const FlowStep = ({ time, title, desc, icon }: { time: string; title: string; desc: string; icon?: React.ReactNode }) => (
  <div className="relative pl-12 md:pl-0">
    {/* Mobile Timeline Line */}
    <div className="md:hidden absolute left-[19px] top-14 bottom-[-40px] w-0.5 bg-border"></div>

    <div className="grid md:grid-cols-[1fr_auto_1fr] gap-8 items-start group">
      <div className="hidden md:block text-right pt-6 pr-8">
        <div className="text-2xl font-bold text-white mb-2 font-heading">{time}</div>
        <div className="text-xs font-bold text-muted uppercase tracking-wider">Milestone</div>
      </div>

      <div className="relative z-10 flex flex-col items-center">
        <div className="w-10 h-10 rounded-full bg-surface border border-border group-hover:border-primary group-hover:bg-primary/20 transition-all duration-500 flex items-center justify-center text-muted group-hover:text-primary mb-4 md:mb-0">
          {icon}
        </div>
        <div className="hidden md:block w-px h-[180px] bg-border group-last:hidden"></div>
      </div>

      <div className="p-8 border border-border bg-surface/10 rounded-3xl group-hover:border-primary/40 group-hover:bg-surface/20 transition-all duration-500 relative">
        <div className="md:hidden text-xs font-bold text-muted uppercase tracking-wider mb-2">{time}</div>
        <h3 className="text-2xl font-heading font-medium text-white mb-3 group-hover:text-primary transition-colors">{title}</h3>
        <p className="text-muted leading-relaxed font-light text-sm">{desc}</p>
      </div>
    </div>
  </div>
);

const JudgingMindset = () => (
  <section className="py-32 px-8 max-w-[1120px] mx-auto bg-surface/5 rounded-[3rem]">
    <Reveal>
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-sm font-bold text-accentPurple uppercase tracking-[0.4em] mb-8">What we're looking for</h2>
          <h3 className="text-4xl md:text-5xl font-heading font-medium text-white mb-8">
            Usefulness over Complexity.
          </h3>
          <p className="text-xl text-muted font-light leading-relaxed mb-8">
            We don't care about your tech stack. We care if it works for a real user.
          </p>
          <ul className="space-y-6">
            <li className="flex gap-4 items-start">
              <div className="w-6 h-6 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center shrink-0 mt-0.5"><CheckCircle className="w-4 h-4" /></div>
              <span className="text-white/90">Solves a real problem faced by real people</span>
            </li>
            <li className="flex gap-4 items-start">
              <div className="w-6 h-6 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center shrink-0 mt-0.5"><CheckCircle className="w-4 h-4" /></div>
              <span className="text-white/90">Simple, usable solution (not over-engineered)</span>
            </li>
            <li className="flex gap-4 items-start">
              <div className="w-6 h-6 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center shrink-0 mt-0.5"><CheckCircle className="w-4 h-4" /></div>
              <span className="text-white/90">Works in Indian constraints (cost, access)</span>
            </li>
          </ul>
        </div>
        <div className="p-10 border border-border bg-background rounded-[2rem] relative">
          <h4 className="text-xl font-bold text-white mb-6">Evaluation Criteria</h4>
          <div className="space-y-6">
            <div>
              <div className="flex justify-between mb-2 text-sm text-muted"><span>Usefulness & Simplicity</span> <span className="text-primary font-bold">40%</span></div>
              <div className="h-1.5 bg-surface rounded-full overflow-hidden"><div className="h-full bg-primary w-[40%]" /></div>
            </div>
            <div>
              <div className="flex justify-between mb-2 text-sm text-muted"><span>Problem Relevance</span> <span className="text-primary font-bold">30%</span></div>
              <div className="h-1.5 bg-surface rounded-full overflow-hidden"><div className="h-full bg-primary w-[30%]" /></div>
            </div>
            <div>
              <div className="flex justify-between mb-2 text-sm text-muted"><span>Startup Potential</span> <span className="text-primary font-bold">20%</span></div>
              <div className="h-1.5 bg-surface rounded-full overflow-hidden"><div className="h-full bg-primary w-[20%]" /></div>
            </div>
            <div>
              <div className="flex justify-between mb-2 text-sm text-muted"><span>Technical Execution</span> <span className="text-primary font-bold">10%</span></div>
              <div className="h-1.5 bg-surface rounded-full overflow-hidden"><div className="h-full bg-primary w-[10%]" /></div>
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  </section>
);

const JudgesSection = () => (
  <section className="py-[160px] px-8 max-w-[1120px] mx-auto">
    <Reveal x={-20}>
      <div className="mb-20">
        <h2 className="text-[11px] font-bold text-primary uppercase tracking-[0.6em] mb-10">Mentors & Jury</h2>
        <h3 className="section-headline text-4xl md:text-6xl font-medium text-white mb-10">Built by Builders.</h3>
        <p className="text-xl text-muted font-light max-w-2xl leading-relaxed">
          Our judges are startup builders, domain experts, and product leaders. They prioritize usefulness over complexity.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {[
          { name: "Startup Builders", role: "Jury", focus: "Can this realistically become a startup?", icon: <Rocket className="w-6 h-6" /> },
          { name: "Domain Experts", role: "Mentors", focus: "Does this solve the real problem?", icon: <Briefcase className="w-6 h-6" /> },
          { name: "Product Leaders", role: "Jury", focus: "Would users actually use this?", icon: <Users className="w-6 h-6" /> }
        ].map((person, i) => (
          <div key={i} className="p-8 border border-border bg-surface/10 rounded-3xl hover:border-primary/40 transition-all duration-300">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6 text-primary">
              {person.icon}
            </div>
            <h4 className="text-xl font-heading font-medium text-white mb-1">{person.name}</h4>
            <div className="text-primary text-xs font-bold uppercase tracking-wider mb-4">{person.role}</div>
            <div className="text-muted text-sm font-light">{person.focus}</div>
          </div>
        ))}
      </div>
    </Reveal>
  </section>
);

const RubricItem = ({ title, pts, criteria }: { title: string, pts: number, criteria: string[] }) => (
  <div className="p-8 md:p-10 border border-border bg-surface/5 rounded-3xl">
    <div className="flex justify-between items-center mb-6">
      <h4 className="text-2xl font-heading font-medium text-white">{title}</h4>
      <div className="px-4 py-1.5 rounded-full bg-primary/20 border border-primary/30 text-primary text-xs font-bold">{pts} PTS</div>
    </div>
    <ul className="space-y-3">
      {criteria.map((c, i) => (
        <li key={i} className="flex gap-3 text-muted text-sm font-light leading-relaxed">
          <span className="text-primary mt-1 opacity-50">•</span>
          {c}
        </li>
      ))}
    </ul>
  </div>
);

const JudgingSection = () => (
  <section className="py-[160px] px-8 max-w-[1120px] mx-auto">
    <Reveal x={-20}>
      <div className="mb-20">
        <h2 className="text-[11px] font-bold text-accentPurple uppercase tracking-[0.6em] mb-10">Judging Criteria</h2>
        <h3 className="section-headline text-4xl md:text-6xl font-medium text-white mb-10">Usefulness &gt; Complexity</h3>
        <p className="text-xl text-muted font-light max-w-2xl leading-relaxed">
          We reward solutions that can survive in the real world. Complex tech is optional. Real impact is mandatory.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        <RubricItem
          title="Real-World Relevance"
          pts={30}
          criteria={["Does this solve a real problem?", "Have you validated with real users?", "Is the target user clearly defined?"]}
        />
        <RubricItem
          title="Effectiveness & Simplicity"
          pts={25}
          criteria={["Does it actually work?", "Is it simple enough to be adopted?", "Avoids over-engineering?"]}
        />
        <RubricItem
          title="Startup Potential"
          pts={25}
          criteria={["Can it scale beyond the hackathon?", "Is there a vision for growth?", "Financial feasibility?"]}
        />
        <RubricItem
          title="Technical Execution"
          pts={20}
          criteria={["Working MVP / Prototype", "Handling of edge cases", "Clarity of vision & presentation"]}
        />
      </div>
    </Reveal>
  </section>
);

const BeyondHackathon = () => {
  return (
    <section className="py-[160px] px-8 max-w-[1120px] mx-auto">
      <Reveal x={-20}>
        <div className="mb-24 text-center md:text-left">
          <h2 className="section-headline text-4xl md:text-6xl font-medium text-white mb-8">Beyond The Hackathon</h2>
          <p className="text-xl text-muted font-light max-w-2xl leading-relaxed">
            This sprint doesn't end at submission. It starts something bigger.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-8 border border-border bg-surface/5 rounded-3xl">
            <Rocket className="w-10 h-10 text-primary mb-6" />
            <h3 className="text-2xl font-bold text-white mb-4">Mentorship Support</h3>
            <p className="text-muted">guidance to continue building post-event.</p>
          </div>
          <div className="p-8 border border-border bg-surface/5 rounded-3xl">
            <Briefcase className="w-10 h-10 text-primary mb-6" />
            <h3 className="text-2xl font-bold text-white mb-4">Incubation</h3>
            <p className="text-muted">Startup incubation discussions for top teams.</p>
          </div>
          <div className="p-8 border border-border bg-surface/5 rounded-3xl">
            <Users className="w-10 h-10 text-primary mb-6" />
            <h3 className="text-2xl font-bold text-white mb-4">Community</h3>
            <p className="text-muted">Long-term ecosystem backing & networking.</p>
          </div>
        </div>
      </Reveal>
    </section>
  );
};

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-border py-8">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left group"
      >
        <span className="text-lg md:text-xl font-medium text-white group-hover:text-primary transition-colors">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          className="text-muted group-hover:text-white"
        >
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="pt-6 text-muted leading-relaxed font-light text-sm">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  const faqs = [
    {
      question: "How do I track my 30 hours of effort?",
      answer: "We don't use stopwatches. We track effort through 3 mandatory milestones. If your output and progress are visible, your effort is verified. We value results over clocking in."
    },
    {
      question: "Is the window strict?",
      answer: "Yes, the 50-hour window is absolute. You must submit your final link before the timer hits 0. How you split your ~30 hours within that window is up to you."
    },
    {
      question: "What if I am a beginner?",
      answer: "The sprint rewards learning as much as building. 20 points are dedicated specifically to your learning journey and README documentation. Ship something functioning, no matter how small."
    },
    {
      question: "Can I participate in teams?",
      answer: "Yes. Teams of up to 4 are allowed. Solo builders are also welcome. Once the 50-hour window starts, team rosters are locked."
    }
  ];

  return (
    <section className="py-[160px] px-8 max-w-[1120px] mx-auto">
      <Reveal x={-20}>
        <div className="grid md:grid-cols-2 gap-20">
          <div>
            <h2 className="text-[11px] font-bold text-primary uppercase tracking-[0.6em] mb-10">Sprint Intelligence</h2>
            <h3 className="section-headline text-4xl md:text-5xl font-medium text-white">Trust the Process.</h3>
          </div>
          <div className="divide-y divide-border">
            {faqs.map((faq, i) => (
              <FAQItem key={i} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
};

const Footer = () => (
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
          onClick={() => window.open('https://forms.gle/your-form-link', '_blank')}
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

const Sponsors = () => {
  return (
    <section className="relative py-[100px] border-y border-border/40 bg-white/[0.02]">
      <div className="max-w-[1120px] mx-auto px-8 text-center">
        <p className="text-[10px] font-bold text-muted uppercase tracking-[0.4em] mb-12">Powered By</p>
        <div className="flex flex-wrap justify-center gap-16 md:gap-24 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">CLOUD PARTNER</div>
          <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">API GIANT</div>
          <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">DEV TOOLS</div>
          <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">VC FUND</div>
        </div>
      </div>
    </section>
  )
}

const Community = () => (
  <section className="py-[120px] px-8">
    <div className="max-w-4xl mx-auto p-12 rounded-[3rem] bg-gradient-to-br from-[#5865F2] to-[#404EED] text-center relative overflow-hidden group">
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://assets-global.website-files.com/6257adef93867e56f84d3109/636e0a6a49cf127bf92de1e2_icon_clyde_blur_white_RGB.png')] bg-cover opacity-10 mix-blend-overlay"></div>
      <Reveal>
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Don't Build Alone.</h2>
        <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto">Join 500+ builders in the exclusive discord. Find teammates, get mentor feedback, and just vibe.</p>
        <button onClick={() => window.open('https://discord.gg/your-link', '_blank')} className="bg-white text-[#5865F2] px-10 py-4 rounded-full font-bold text-lg hover:shadow-xl hover:scale-105 transition-all">
          Join the Discord
        </button>
      </Reveal>
    </div>
  </section>
)

export default function App() {
  return (
    <div className="relative selection:bg-primary/25 bg-background min-h-screen text-white">
      <Navbar />
      <Hero />
      <WhatIsSprint />
      <HowItWorks />
      <Protocol5030 />
      <ProblemExplorer />
      <JudgingMindset />
      <BeyondHackathon />
      <JudgesSection />
      <FAQ />
      <Community />
      <Footer />
    </div>
  );
}
