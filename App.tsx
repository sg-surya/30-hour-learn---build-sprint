import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'framer-motion';
import { Trophy, Users, FileCheck, Zap, ChevronDown, Clock, ShieldCheck, Rocket, Scale, Library, Star, Award, Layout, CheckCircle, Globe, Stethoscope, Leaf, ShoppingBag, Truck, Lock, Heart, Video, Cpu, Building2, X, BookOpen, Briefcase, Gift, Code, PenTool, Megaphone } from 'lucide-react';

const PROBLEM_STATEMENTS = [
  {
    domain: "EdTech",
    icon: <BookOpen className="w-6 h-6" />,
    desc: "Learning, skills, access",
    isPriority: true,
    problems: [
      {
        title: "High Dropout Rates",
        desc: "1.42 crore students drop out annually in India. Schools lack real-time data to identify at-risk students before it's too late.",
        solution: "Build a low-cost SMS/WhatsApp chatbot that tracks attendance/grades and triggers auto-alerts to parents & mentors."
      },
      {
        title: "Workforce Skills Mismatch",
        desc: "Universities teach theory, but industry demands execution. 48% of graduates are deemed unemployable.",
        solution: "Build a 'micro-internship' platform that converts real company backlogs into student-sized projects."
      },
      {
        title: "Teachers Overwhelmed",
        desc: "Teachers spend 40% of their time on admin work (grading, roll calls) instead of actual teaching.",
        solution: "Build an AI grading assistant that scans handwritten sheets or a voice-based lesson planner."
      }
    ]
  },
  {
    domain: "FinTech",
    icon: <Scale className="w-6 h-6" />,
    desc: "Fraud, payments, inclusion",
    isPriority: true,
    problems: [
      {
        title: "Synthetic Identity Fraud",
        desc: "Fraudsters combine real and fake data to create new identities. Standard KYC fails to catch this.",
        solution: "Build a behavioral biometrics tool that analyzes typing speed/mouse movement to distinguish humans from bots."
      },
      {
        title: "Phishing & UPI Fraud",
        desc: "UPI scams are rising, targeting the elderly and less tech-savvy. Recovery is nearly impossible.",
        solution: "Build a 'Check-Before-Pay' overlay app that scans phone numbers against a crowdsourced scammer database."
      },
      {
        title: "Rural Trust Gap",
        desc: "Rural users avoid digital payments due to language barriers and UI complexity.",
        solution: "Build a voice-first vernacular banking interface that works entirely through audio commands."
      }
    ]
  },
  {
    domain: "MedTech",
    icon: <Stethoscope className="w-6 h-6" />,
    desc: "Healthcare access, data",
    isPriority: true,
    problems: [
      {
        title: "Rural Healthcare Access",
        desc: "70% of India's population has limited access to specialized doctors and diagnostics.",
        solution: "Build an offline-first diagnostic guide that helps ASHA workers triage symptoms."
      },
      {
        title: "Maternal Health",
        desc: "High maternal mortality due to lack of timely nutritional and medical tracking.",
        solution: "Build a low-tech SMS tracker for prenatal checkups, nutrition reminders, and emergency transport."
      },
      {
        title: "Data Fragmentation",
        desc: "Medical records are scattered on paper across random clinics, leading to poor diagnosis.",
        solution: "Build a privacy-preserving 'Health Wallet' allowing patients to store records via simple QR scans."
      }
    ]
  },
  {
    domain: "AgriTech",
    icon: <Leaf className="w-6 h-6" />,
    desc: "Small farmers, climate risk",
    isPriority: true,
    problems: [
      {
        title: "Small Farmer Tech",
        desc: "Advanced IoT sensors are too expensive for farmers with <2 acres of land.",
        solution: "Build a ₹500 soil moisture alert system using basic electronics and GSM modules."
      },
      {
        title: "Debt & Middlemen",
        desc: "Farmers lose 30-40% of value to intermediaries and lack access to fair credit.",
        solution: "Build a direct-to-buyer Whatsapp marketplace or a cooperative lending circle manager."
      },
      {
        title: "Climate Risk",
        desc: "Unpredictable micro-climates destroy harvest. Generic weather apps are too broad.",
        solution: "Build a crowdsourced micro-weather network where farmers validate local conditions for rewards."
      }
    ]
  },
  {
    domain: "AI & DeepTech",
    icon: <Cpu className="w-6 h-6" />,
    desc: "Deepfakes, trust, agents",
    isPriority: true,
    problems: [
      {
        title: "Deepfake Misinformation",
        desc: "AI-generated fake content spreads 6x faster than truth, causing social unrest.",
        solution: "Build a browser extension or API that flags AI-generated faces/audio in real-time."
      },
      {
        title: "AI Fraud & Impersonation",
        desc: "Voice cloning is being used to scam families by impersonating distress calls.",
        solution: "Build a 'Family Safe-Word' authenticator that validates caller identity via encrypted tokens."
      },
      {
        title: "AI Literacy Gap",
        desc: "Non-tech employees fear AI will replace them, leading to resistance.",
        solution: "Build a gamified AI literacy benchmarking tool to help teams understand and adopt LLMs."
      }
    ]
  },
  {
    domain: "DevTools",
    icon: <Zap className="w-6 h-6" />,
    desc: "Productivity, automation",
    problems: [
      {
        title: "Context Switching",
        desc: "Developers lose hours switching between Jira, GitHub, Slack, and IDEs.",
        solution: "Build a unified 'Dev-Stream' that aggregates diverse notifications into a single timeline."
      },
      {
        title: "AI Code Quality",
        desc: "AI writes code fast, but often introduces subtle bugs and security holes.",
        solution: "Build a 'Hallucination Checker' that validates LLM-generated code against security standards."
      },
      {
        title: "Developer Burnout",
        desc: "DORA metrics measure speed but ignore developer well-being and flow state.",
        solution: "Build a privacy-first 'Flow State' tracker that blocks interruptions during deep work sessions."
      }
    ]
  },
  {
    domain: "Smart Cities",
    icon: <Building2 className="w-6 h-6" />,
    desc: "Urban infra, sanitation",
    problems: [
      {
        title: "Sewage Crisis",
        desc: "72k MLD of sewage is generated, but treatment capacity is low. Leaks go undetected.",
        solution: "Build a leak detection system using flow rate analysis or IoT pressure sensors."
      },
      {
        title: "Urban Flooding",
        desc: "Annual monsoons paralyze cities. Forecasting is not hyper-local enough.",
        solution: "Build a crowdsourced street-level flood map for real-time safe route navigation."
      },
      {
        title: "Fragmented Systems",
        desc: "City departments (Roads, Water, Power) operate in silos.",
        solution: "Build a unified 'City Dashboard' API that aggregates grievance data for better planning."
      }
    ]
  },
  {
    domain: "ClimateTech",
    icon: <Globe className="w-6 h-6" />,
    desc: "Carbon, energy, waste",
    problems: [
      {
        title: "SME Carbon Accounting",
        desc: "Small businesses can't afford expensive carbon audit consultants.",
        solution: "Build an invoice-based carbon calculator that estimates footprint from spending data."
      },
      {
        title: "Industrial Emissions",
        desc: "Factories waste energy due to inefficient machine scheduling.",
        solution: "Build a peak-load optimizer that suggests optimal run-times for heavy machinery."
      },
      {
        title: "Grid Instability",
        desc: "Renewable energy is intermittent, causing grid stress.",
        solution: "Build a P2P energy trading ledger for rooftop solar owners to share excess power."
      }
    ]
  },
  {
    domain: "E-Commerce",
    icon: <ShoppingBag className="w-6 h-6" />,
    desc: "Retail, logistics, payment",
    problems: [
      {
        title: "Payment Failures",
        desc: "Payment gateway downtimes kill conversion rates for small merchants.",
        solution: "Build a smart-router that automatically switches between different payment gateways on failure."
      },
      {
        title: "Last-Mile Bottleneck",
        desc: "Addresses in India are unstructured, leading to failed deliveries.",
        solution: "Build a 'Landmark-Based' address standardizer that visualizes delivery locations."
      },
      {
        title: "Small Retailer Digitization",
        desc: "Kirana stores rely on manual notebooks and fear complex ERPs.",
        solution: "Build a voice-ledger apps that records inventory/sales via simple speech commands."
      }
    ]
  },
  {
    domain: "Logistics",
    icon: <Truck className="w-6 h-6" />,
    desc: "Supply chain, tracking",
    problems: [
      {
        title: "Invisible Supply Chain",
        desc: "Small fleet owners rely on phone calls to track trucks, leading to delays.",
        solution: "Build a SIM-based triangulation tracker that works without expensive GPS hardware."
      },
      {
        title: "Address Accuracy",
        desc: "Delivery agents waste time finding correct doors.",
        solution: "Build a photo-based proof-of-delivery validator with geo-tagging."
      },
      {
        title: "Warehouse Inefficiency",
        desc: "Warehouse space is often underutilized or overbooked.",
        solution: "Build an 'Airbnb for Warehousing' to aggregate and rent out spare storage capacity."
      }
    ]
  },
  {
    domain: "Cybersecurity",
    icon: <Lock className="w-6 h-6" />,
    desc: "Safety, privacy, fraud",
    problems: [
      {
        title: "Supply Chain Ransomware",
        desc: "Small vendors are the weakest link, often used to attack larger partners.",
        solution: "Build a simplified automated vendor risk scorecard for SMEs."
      },
      {
        title: "Phishing at Scale",
        desc: "AI can generate perfect phishing emails at scale.",
        solution: "Build a stylistic analysis tool that flags email patterns typical of LLMs."
      },
      {
        title: "Cloud Misconfigs",
        desc: "Developers accidentally leave S3 buckets and databases open.",
        solution: "Build a 'One-Click' security scanner for AWS/GCP setups."
      }
    ]
  },
  {
    domain: "Social Impact",
    icon: <Heart className="w-6 h-6" />,
    desc: "Inclusion, livelihood",
    problems: [
      {
        title: "Banking the Unbanked",
        desc: "Millions lack a credit score and cannot get loans.",
        solution: "Build a credit score proxy based on utility bill payments and mobile recharge history."
      },
      {
        title: "Rural Maternal Health",
        desc: "Community health workers rely on paper forms, leading to data loss.",
        solution: "Build a voice-form app for ASHA workers to digitally record health stats."
      },
      {
        title: "Youth Unemployment",
        desc: "Youth lack formal degrees but have practical skills.",
        solution: "Build a skill-verification platform for gig workers (plumbers, electricians)."
      }
    ]
  },
  {
    domain: "Media & Creator",
    icon: <Video className="w-6 h-6" />,
    desc: "IP rights, misinformation",
    problems: [
      {
        title: "AI Misinformation",
        desc: "Fake news travels fast on private messaging channels.",
        solution: "Build a 'Source-Checker' plugin for chat apps."
      },
      {
        title: "Creator IP Theft",
        desc: "Artists' work is scraped by AI training models without consent.",
        solution: "Build a watermark generator that poisons image data for AI scrapers."
      },
      {
        title: "Influencer Fraud",
        desc: "Fake gurus give dangerous financial/health advice.",
        solution: "Build a verification badge system that validates qualifications of influencers."
      }
    ]
  },
  {
    domain: "Open Innovation",
    icon: <Rocket className="w-6 h-6" />,
    desc: "Heritage, governance",
    problems: [
      {
        title: "Heritage Industries",
        desc: "Traditional weavers and artisans are losing to mass production.",
        solution: "Build an AI pattern generator that helps artisans create modern designs."
      },
      {
        title: "Corp-Startup Mismatch",
        desc: "Corporate-Startup pilots often fail due to legal complexity.",
        solution: "Build a standardized MOU generator for quick Proof-of-Concept agreements."
      },
      {
        title: "Privacy Collaboration",
        desc: "Companies cannot share data due to privacy laws.",
        solution: "Build a synthetic data generator that creates safe, shareable datasets."
      }
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
    <section className="relative py-[160px] px-8 max-w-[1400px] mx-auto min-h-screen">
      <Reveal>
        <div className="mb-20 text-center">
          <h2 className="text-[11px] font-bold text-accentPurple uppercase tracking-[0.6em] mb-6">Real World Problems</h2>
          <h3 className="section-headline text-4xl md:text-6xl font-medium text-white mb-8">14 Tech Domains</h3>
          <p className="text-muted max-w-2xl mx-auto">Click on a domain to view detailed problem statements.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-start relative transition-all duration-500">

          {/* Domain List / Sidebar */}
          <div className={`transition-all duration-500 ease-in-out ${selectedDomain !== null ? 'w-full lg:w-[320px] shrink-0' : 'w-full'}`}>
            <div className={`grid gap-4 transition-all duration-500 ${selectedDomain !== null ? 'grid-cols-2 md:grid-cols-3 lg:grid-cols-1' : 'grid-cols-2 md:grid-cols-4 lg:grid-cols-5'}`}>
              {PROBLEM_STATEMENTS.map((item, i) => (
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
                      <div className="text-[10px] text-muted uppercase tracking-wide font-medium leading-tight opacity-70 group-hover:opacity-100 transition-opacity">
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

const MentorSessions = () => (
  <section className="py-20 px-8 max-w-[1280px] mx-auto border-t border-white/5">
    <Reveal>
      <div className="mb-16">
        <h2 className="text-[11px] font-bold text-accentPurple uppercase tracking-[0.6em] mb-6">Live Learning</h2>
        <h3 className="section-headline text-4xl md:text-5xl font-medium text-white mb-6">Mentor Sessions</h3>
        <p className="text-muted max-w-2xl">Interactive sessions across categories during the sprint to help you unblock and accelerate.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          {
            category: "Development",
            icon: <Code className="w-6 h-6 text-blue-400" />,
            mentors: "Aman, Ashutosh, Surya, Bishwajit",
            color: "from-blue-500/20 to-blue-900/10",
            border: "border-blue-500/20"
          },
          {
            category: "Design",
            icon: <PenTool className="w-6 h-6 text-purple-400" />,
            mentors: "Bishwajeet, Surya",
            color: "from-purple-500/20 to-purple-900/10",
            border: "border-purple-500/20"
          },
          {
            category: "Marketing",
            icon: <Megaphone className="w-6 h-6 text-pink-400" />,
            mentors: "Svetlana Hanover",
            color: "from-pink-500/20 to-pink-900/10",
            border: "border-pink-500/20"
          },
          {
            category: "Business",
            icon: <Briefcase className="w-6 h-6 text-amber-400" />,
            mentors: "Agrim Gupta, Svetlana",
            color: "from-amber-500/20 to-amber-900/10",
            border: "border-amber-500/20"
          }
        ].map((session, i) => (
          <div key={i} className={`p-8 rounded-3xl bg-gradient-to-br ${session.color} border ${session.border} hover:scale-[1.02] transition-transform`}>
            <div className="mb-6 bg-black/20 w-12 h-12 rounded-xl flex items-center justify-center backdrop-blur-sm">
              {session.icon}
            </div>
            <h4 className="text-xl font-bold text-white mb-2">{session.category}</h4>
            <p className="text-sm text-white/60 mb-6 leading-relaxed">Mentored by {session.mentors}</p>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/20 border border-white/5 text-[10px] font-bold uppercase tracking-widest text-white/50">
              <Clock className="w-3 h-3" />
              <span>TBD</span>
            </div>
          </div>
        ))}
      </div>
    </Reveal>
  </section>
)

const JudgesSection = () => (
  <section className="py-[160px] px-8 max-w-[1280px] mx-auto relative cursor-default">
    {/* Background Gradients */}
    <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2" />

    <Reveal x={-20}>
      <div className="mb-24 text-center">
        <h2 className="text-[11px] font-bold text-accentPurple uppercase tracking-[0.6em] mb-6">Mentors & Jury</h2>
        <h3 className="section-headline text-5xl md:text-7xl font-medium text-white mb-8">Built by Builders.</h3>
        <p className="text-xl text-muted font-light max-w-2xl mx-auto leading-relaxed">
          Our judges are startup builders, domain experts, and product leaders. They prioritize <span className="text-white font-medium">usefulness</span> over complexity.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-6">
        {[
          { name: "Surya Pratap Singh", role: "Jury", title: "Founder, Vasudev AI", focus: "AI & Product Strategy" },
          { name: "Aman Dangi", role: "Jury", title: "Tech Lead", focus: "Scalability & Systems" },
          { name: "Ashutosh K. Tripathi", role: "Mentor", title: "Product Leader", focus: "User Experience" },
          { name: "Bishwajeet Singh", role: "Mentor", title: "Senior Engineer", focus: "Design & Architecture" },
          {
            name: "Udayy Sharma",
            role: "Jury",
            title: "Angel Investor",
            focus: "Business Viability",
            image: "https://indiancreators.com/wp-content/uploads/2025/02/Untitled-design.webp",
            linkedin: "https://in.linkedin.com/in/udaydotai"
          },
          { name: "Agrim Gupta", role: "Jury", title: "Founder", focus: "Product Market Fit" },
          { name: "Svetlana Hanover", role: "Mentor", title: "Marketing Expert", focus: "Growth & Branding" }
        ].map((person, i) => (
          <div key={i} className="group relative p-1 rounded-[2rem] bg-gradient-to-b from-white/10 to-transparent hover:from-primary/40 hover:to-primary/5 transition-all duration-500 w-full md:w-[calc(50%-12px)] lg:w-[calc(25%-20px)] min-w-[240px]">
            <div className="relative h-full p-8 rounded-[1.8rem] bg-[#0A0A0A] border border-white/5 overflow-hidden flex flex-col items-center text-center">

              {/* Hover Effect Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Avatar */}
              <div className="relative mb-8">
                <div className="w-24 h-24 rounded-full bg-surface border border-white/10 flex items-center justify-center text-3xl font-bold text-white/20 group-hover:text-white group-hover:border-primary/50 group-hover:shadow-[0_0_30px_rgba(109,124,255,0.3)] transition-all duration-500 z-10 relative overflow-hidden">
                  {/* @ts-ignore */}
                  {person.image ? (
                    /* @ts-ignore */
                    <img src={person.image} alt={person.name} className="w-full h-full object-cover" />
                  ) : (
                    person.name[0]
                  )}
                </div>
                {/* Decorative Rings */}
                <div className="absolute inset-0 rounded-full border border-white/5 scale-110 group-hover:scale-125 transition-transform duration-700" />
                <div className="absolute inset-0 rounded-full border border-dashed border-white/5 scale-125 group-hover:scale-150 transition-transform duration-700 delay-75" />
              </div>

              <div className="relative z-10 w-full flex-grow flex flex-col items-center">
                <div className={`mb-4 px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest border ${person.role === 'Jury' ? 'bg-amber-500/10 border-amber-500/20 text-amber-500' : 'bg-primary/10 border-primary/20 text-primary'}`}>
                  {person.role}
                </div>

                <h4 className="text-xl font-heading font-medium text-white mb-2 group-hover:text-primary transition-colors">{person.name}</h4>
                <div className="text-sm text-muted mb-6 font-light">{person.title}</div>

                <div className="mt-auto w-full pt-6 border-t border-white/5 group-hover:border-white/10 transition-colors">
                  <div className="text-[10px] text-muted/50 uppercase tracking-widest mb-2 font-bold">Focus Area</div>
                  <div className="text-sm text-white/80">{person.focus}</div>
                </div>
              </div>

              {/* Social Icon Float */}
              {/* @ts-ignore */}
              {person.linkedin && (
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 z-20">
                  {/* @ts-ignore */}
                  <div onClick={() => window.open(person.linkedin, '_blank')} className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#0077b5] flex items-center justify-center text-white transition-colors cursor-pointer border border-white/10 hover:border-transparent">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                  </div>
                </div>
              )}
            </div>
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

const AwardsSection = () => {
  return (
    <section className="py-[160px] px-8 max-w-[1120px] mx-auto">
      <Reveal x={-20}>
        <div className="mb-24 text-center">
          <h2 className="text-[11px] font-bold text-accentPurple uppercase tracking-[0.6em] mb-6">Recognition & Rewards</h2>
          <h3 className="section-headline text-4xl md:text-6xl font-medium text-white mb-8">We reward builders who ship.</h3>
          <p className="text-xl text-muted font-light max-w-2xl mx-auto leading-relaxed">
            This sprint is not about prize money. It’s about building something that deserves to exist.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 md:gap-8 items-end mb-24 max-w-5xl mx-auto">

          {/* 1st Runner Up Card (Silver) - Left */}
          <div className="order-2 md:order-1 p-8 border border-slate-400/30 bg-gradient-to-br from-slate-400/5 to-transparent rounded-[2rem] relative overflow-hidden group hover:border-slate-400/50 transition-all duration-500">
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
              <Award className="w-24 h-24 text-slate-300 rotate-12" />
            </div>

            <div className="relative z-10 flex flex-col h-full">
              <div className="inline-block px-3 py-1 rounded-full bg-slate-400/10 border border-slate-400/20 text-slate-300 text-[10px] font-bold uppercase tracking-widest mb-6 w-fit">
                2nd Place
              </div>
              <h4 className="text-2xl font-heading font-medium text-slate-100 mb-6">1st Runner Up</h4>

              <ul className="space-y-4 mb-8">
                <li className="flex gap-2 items-start text-muted text-sm">
                  <CheckCircle className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                  <span>Certificate of Excellence</span>
                </li>
                <li className="flex gap-2 items-start text-muted text-sm">
                  <Gift className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                  <span><strong>Swags & Vasudev AI Tools Early Access</strong></span>
                </li>
                <li className="flex gap-2 items-start text-muted text-sm">
                  <Users className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                  <span>Group Mentorship Session</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Winner Card (Gold) - Center, Elevated */}
          <div className="order-1 md:order-2 md:-translate-y-12 p-8 md:p-10 border border-amber-400/40 bg-gradient-to-b from-amber-400/10 to-transparent rounded-[2.5rem] relative overflow-hidden group hover:shadow-[0_0_60px_-10px_rgba(251,191,36,0.2)] transition-all duration-500 z-10">
            <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-40 transition-opacity">
              <Trophy className="w-32 h-32 text-amber-400 rotate-12" />
            </div>

            <div className="relative z-10 flex flex-col h-full">
              <div className="inline-block px-4 py-1.5 rounded-full bg-amber-400/20 border border-amber-400/30 text-amber-300 text-xs font-bold uppercase tracking-widest mb-6 w-fit shadow-[0_0_15px_rgba(251,191,36,0.3)]">
                1st Place
              </div>
              <h4 className="text-3xl font-heading font-medium text-white mb-6">Sprint Winner</h4>

              <ul className="space-y-4 mb-8 flex-grow">
                <li className="flex gap-3 items-start text-white/90 text-sm">
                  <Award className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <span><strong>Digitally Verifiable Certificate</strong></span>
                </li>
                <li className="flex gap-3 items-start text-white/90 text-sm">
                  <Gift className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <span><strong>Swags & Vasudev AI Tools Early Access</strong></span>
                </li>
                <li className="flex gap-3 items-start text-white/90 text-sm">
                  <Rocket className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <span><strong>1:1 Mentorship</strong> (Product & Tech)</span>
                </li>
                <li className="flex gap-3 items-start text-white/90 text-sm">
                  <Globe className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <span>Featured on Vasudev AI site</span>
                </li>
              </ul>

              <div className="text-xs text-amber-200/80 font-medium italic mt-auto flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                This is not a trophy. It’s momentum.
              </div>
            </div>
          </div>

          {/* 2nd Runner Up Card (Bronze) - Right */}
          <div className="order-3 md:order-3 p-8 border border-orange-700/30 bg-gradient-to-br from-orange-700/5 to-transparent rounded-[2rem] relative overflow-hidden group hover:border-orange-600/40 transition-colors duration-500">
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
              <Award className="w-24 h-24 text-orange-400 rotate-12" />
            </div>

            <div className="relative z-10 flex flex-col h-full">
              <div className="inline-block px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-[10px] font-bold uppercase tracking-widest mb-6 w-fit">
                3rd Place
              </div>
              <h4 className="text-2xl font-heading font-medium text-white mb-6">2nd Runner Up</h4>

              <ul className="space-y-4 mb-8">
                <li className="flex gap-2 items-start text-muted text-sm">
                  <CheckCircle className="w-4 h-4 text-orange-600/60 shrink-0 mt-0.5" />
                  <span>Certificate of Merit</span>
                </li>
                <li className="flex gap-2 items-start text-muted text-sm">
                  <Gift className="w-4 h-4 text-orange-600/60 shrink-0 mt-0.5" />
                  <span><strong>Swags & Vasudev AI Tools Early Access</strong></span>
                </li>
                <li className="flex gap-2 items-start text-muted text-sm">
                  <FileCheck className="w-4 h-4 text-orange-600/60 shrink-0 mt-0.5" />
                  <span>Judges Feedback Report</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Special Categories */}
        <div className="mb-24">
          <h4 className="text-xl font-heading font-medium text-white mb-8 text-center">Special Category Awards</h4>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { title: "Best Real-World Impact", icon: <Globe className="w-5 h-5" /> },
              { title: "Best Simple Solution", icon: <Zap className="w-5 h-5" /> },
              { title: "Best India-First Product", icon: <Leaf className="w-5 h-5" /> },
              { title: "Best Problem Validation", icon: <CheckCircle className="w-5 h-5" /> },
              { title: "Best Solo Builder", icon: <Users className="w-5 h-5" /> },
            ].map((cat, i) => (
              <div key={i} className="p-6 border border-border bg-surface/5 rounded-2xl flex flex-col items-center text-center hover:border-primary/40 transition-colors">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-primary mb-3">
                  {cat.icon}
                </div>
                <span className="text-sm font-bold text-white/90">{cat.title}</span>
              </div>
            ))}
          </div>
        </div>

        {/* All Participants */}
        <div className="p-8 border border-dashed border-white/20 rounded-3xl bg-white/[0.02] text-center">
          <h4 className="text-lg font-bold text-white mb-4">🎁 For Every Participant</h4>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-sm text-muted">
            <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Participation Certificate</span>
            <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Community Badge</span>
            <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Access to Future Sprints</span>
            <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Learning & Feedback</span>
          </div>
          <p className="mt-4 text-xs text-muted/60 uppercase tracking-widest font-bold">You don't leave empty-handed.</p>
        </div>

        <div className="mt-16 text-center">
          <button onClick={() => window.open('https://forms.gle/your-form-link', '_blank')} className="text-sm font-bold text-white hover:text-primary transition-colors border-b border-transparent hover:border-primary pb-0.5 uppercase tracking-widest">
            Start Your Entry →
          </button>
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
  <section className="py-[120px] px-8 relative overflow-hidden">
    <div className="max-w-[1200px] mx-auto relative z-10">
      <div className="relative rounded-[3rem] bg-[#5865F2] overflow-hidden group">

        {/* Background Assets */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/10 blur-[120px] rounded-full pointer-events-none mix-blend-overlay" />
        <div className="absolute inset-0 bg-[url('https://assets-global.website-files.com/6257adef93867e56f84d3109/636e0a6a49cf127bf92de1e2_icon_clyde_blur_white_RGB.png')] bg-cover opacity-5 mix-blend-overlay"></div>

        <div className="grid lg:grid-cols-2 gap-12 p-12 md:p-20 items-center relative z-10">

          {/* Content Left */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white font-bold text-xs uppercase tracking-widest mb-8 backdrop-blur-sm">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span>124 Builders Online</span>
            </div>

            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight leading-tight">
              Don't Build <br />
              <span className="text-white/40">In Silos.</span>
            </h2>

            <p className="text-white/90 text-lg md:text-xl mb-10 max-w-xl font-medium leading-relaxed">
              Join the exclusive sprint server. Find teammates, get specific mentor feedback, and debug at 3 AM with 500+ builders.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 items-center lg:justify-start justify-center">
              <button onClick={() => window.open('https://discord.gg/e5uPQDXSSk', '_blank')} className="bg-white text-[#5865F2] pl-8 pr-2 py-2 rounded-full font-black text-lg hover:shadow-[0_0_40px_rgba(255,255,255,0.4)] hover:scale-105 transition-all flex items-center gap-6 group/btn">
                <span>JOIN DISCORD</span>
                <div className="w-12 h-12 rounded-full bg-[#5865F2] text-white flex items-center justify-center -rotate-45 group-hover/btn:rotate-0 transition-transform">
                  <Rocket className="w-5 h-5" />
                </div>
              </button>

              {/* Avatar Stake */}
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-[#5865F2] bg-indigo-900/50 backdrop-blur-md flex items-center justify-center text-white text-[10px] font-bold">
                    <Users className="w-4 h-4 opacity-70" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Visual Right: 3D Mock Interface */}
          <div className="relative hidden lg:block perspective-1000">
            {/* Huge Background Text Adjusted */}
            <div className="absolute -top-20 -right-20 text-[180px] font-black text-black/10 -rotate-12 pointer-events-none select-none whitespace-nowrap z-0">
              Vasudev AI
            </div>

            <motion.div
              className="relative z-10 bg-[#36393f] rounded-xl border border-white/10 shadow-2xl overflow-hidden max-w-md ml-auto rotate-y-[-10deg] rotate-x-[5deg] hover:rotate-0 transition-all duration-700"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              {/* Fake Header */}
              <div className="h-4 bg-[#202225] flex items-center px-4 gap-1.5 border-b border-black/20">
                <div className="w-2 h-2 rounded-full bg-red-500" />
                <div className="w-2 h-2 rounded-full bg-yellow-500" />
                <div className="w-2 h-2 rounded-full bg-green-500" />
              </div>

              {/* Mock Chat Content */}
              <div className="p-6 space-y-4">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary flex-shrink-0" />
                  <div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-white font-bold text-sm">sgsurya</span>
                      <span className="text-xs text-muted">Today at 2:30 AM</span>
                    </div>
                    <div className="text-white/80 text-xs mt-1 bg-[#2f3136] p-2 rounded-r-lg rounded-bl-lg">
                      Just pushed the deployed link! The mentorship session yesterday really helped clarify the user flow. 🚀
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-green-500 flex-shrink-0" />
                  <div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-white font-bold text-sm">rahul_dev</span>
                      <span className="text-xs text-muted">Today at 2:32 AM</span>
                    </div>
                    <div className="text-white/80 text-xs mt-1 bg-[#2f3136] p-2 rounded-r-lg rounded-bl-lg">
                      Whoa, that UI is clean! simple tool ??
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 opacity-50">
                  <div className="w-10 h-10 rounded-full bg-purple-500 flex-shrink-0" />
                  <div className="flex-1 space-y-2">
                    <div className="h-3 bg-white/10 rounded w-1/4" />
                    <div className="h-10 bg-white/10 rounded w-full" />
                  </div>
                </div>
              </div>

              {/* Floating Reaction */}
              <div className="absolute bottom-10 right-10 bg-[#5865F2] text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg flex items-center gap-1 animate-bounce">
                <Star className="w-3 h-3 fill-current" />
                Great work!
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

const MarqueeSection = () => {
  return (
    <section className="relative py-10 overflow-hidden border-y border-white/5 bg-background">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 blur-[100px] pointer-events-none" />

      {/* Gradient Masks */}
      <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-background to-transparent z-10" />

      <div className="flex relative z-0">
        <motion.div
          className="flex gap-16 md:gap-32 items-center whitespace-nowrap"
          animate={{ x: "-50%" }}
          transition={{ duration: 60, ease: "linear", repeat: Infinity }}
        >
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-16 md:gap-32 items-center">
              {[
                "VASUDEV AI", "BUILD HARD", "SHIP FAST", "SOLVE PROBLEMS",
                "JUST CODE", "NO FLUFF", "REAL IMPACT", "50 HOURS SPRINT"
              ].map((text, j) => (
                <div key={j} className="flex items-center gap-16 md:gap-32">
                  <span className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20 select-none hover:to-primary transition-all duration-500 cursor-default">
                    {text}
                  </span>
                  {/* Decorative Divider */}
                  <div className="relative w-12 h-12 flex items-center justify-center">
                    <div className="absolute w-full h-full border border-white/10 rounded-full animate-[spin_10s_linear_infinite]" />
                    <div className="w-2 h-2 bg-primary rounded-full shadow-[0_0_10px_#6D7CFF]" />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default function App() {
  return (
    <div className="relative selection:bg-primary/25 bg-background min-h-screen text-white">
      <Navbar />
      <Hero />
      <MarqueeSection />
      <WhatIsSprint />
      <HowItWorks />
      <Protocol5030 />
      <ProblemExplorer />
      <JudgingMindset />
      <AwardsSection />
      <JudgesSection />
      <FAQ />
      <Community />
      <Footer />
    </div>
  );
}
