import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'framer-motion';
import { Trophy, BookOpen, Repeat, Users, FileCheck, MessageSquare, Briefcase, Zap, Fingerprint, ChevronDown, Clock, ShieldCheck, Rocket, Microscope, Scale, Library, Star, Award, Layout, CheckCircle } from 'lucide-react';

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

const Navbar = () => (
  <nav className="fixed top-0 left-0 w-full z-50 px-8 py-8 pointer-events-none">
    <div className="max-w-[1120px] mx-auto flex justify-between items-center pointer-events-auto">
      <div className="font-heading font-bold text-xl tracking-tighter flex items-center gap-3">
        <div className="w-2.5 h-2.5 rounded-full bg-primary shadow-[0_0_15px_#6D7CFF]" />
        VASUDEV AI
      </div>
      <a 
        href="https://forms.gle/your-form-link"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[11px] font-bold text-muted hover:text-white transition-all duration-300 uppercase tracking-[0.3em] border-b border-transparent hover:border-white"
      >
        Join Sprint
      </a>
    </div>
  </nav>
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
    setMousePos({ 
      x: e.clientX - rect.left, 
      y: e.clientY - rect.top 
    });
  };
  
  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex flex-col items-center justify-center px-6 text-center overflow-hidden"
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
          <div className="inline-block px-5 py-2.5 border border-border bg-surface/10 rounded-full text-[10px] font-bold text-primary uppercase tracking-[0.4em] mb-14 backdrop-blur-sm">
            30-HOUR EFFORT · 50-HOUR WINDOW · VASUDEV AI
          </div>
          <h1 className="hero-headline font-semibold mb-10 text-white select-none">
            Build Hard.<br/>
            <span className="text-white/30 italic font-medium hero-title-secondary cursor-default">On Your Schedule.</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted max-w-2xl mx-auto font-light mb-6 leading-relaxed hero-subline cursor-default">
            50 hours to deliver greatness. Commit ~30 hours of real building time whenever you want within the sprint window.
          </p>
          <p className="text-sm text-primary/70 font-medium mb-16 tracking-wide uppercase tracking-[0.2em]">
            Solo or Team (Max 4) • Honest Effort • Elite Recognition
          </p>
          
          <div className="flex flex-col items-center gap-6">
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' })}
              className="cta-border px-14 py-6 rounded-full text-white font-bold text-xl tracking-tight group"
            >
              Enter the Sprint
              <span className="inline-block transition-transform group-hover:translate-x-2 ml-3">→</span>
            </motion.button>
            <div className="flex items-center gap-6 mt-4">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" />
                <span className="text-[10px] text-muted font-bold tracking-[0.2em] uppercase">50h Total Window</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-accentPurple" />
                <span className="text-[10px] text-muted font-bold tracking-[0.2em] uppercase">~30h Effort expected</span>
              </div>
            </div>
          </div>
        </Reveal>
      </motion.div>
    </section>
  );
};

const Manifesto = () => (
  <section className="py-[160px] px-8 max-w-[1120px] mx-auto">
    <Reveal x={-20}>
      <h2 className="section-headline text-4xl md:text-5xl font-medium text-white mb-12">
        The "50:30" Protocol. <br/> Built for Real Builders.
      </h2>
      <div className="grid md:grid-cols-2 gap-20 items-center">
        <div className="space-y-12">
          <div className="manifesto-text text-muted font-light space-y-4">
            <p>Flexible slots.</p>
            <p>Honest progress.</p>
            <p>High stakes delivery.</p>
          </div>
          <p className="text-xl text-gray-500 font-light leading-relaxed max-w-xl">
            We don't track your minutes with a stopwatch. We judge your commitment through daily check-ins and the quality of what you ship. You own your 30 hours of building—anytime during the 50-hour window.
          </p>
        </div>
        <div className="p-10 border border-border bg-surface/20 rounded-[3rem] space-y-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10"><Clock className="w-32 h-32"/></div>
          <h4 className="text-xs font-bold text-primary uppercase tracking-[0.4em]">The Balance</h4>
          <div className="space-y-6">
            <div className="flex justify-between items-end border-b border-border pb-4">
              <span className="text-muted text-sm uppercase tracking-widest">Total Sprint Window</span>
              <span className="text-white text-3xl font-heading font-medium">50H</span>
            </div>
            <div className="flex justify-between items-end border-b border-border pb-4">
              <span className="text-muted text-sm uppercase tracking-widest">Recommended Effort</span>
              <span className="text-primary text-3xl font-heading font-medium">~30H</span>
            </div>
            <p className="text-xs text-muted/60 leading-relaxed font-light italic pt-4">
              *Success is measured by output and progress milestones, not just time logged.
            </p>
          </div>
        </div>
      </div>
    </Reveal>
  </section>
);

const FlowStep = ({ step, title, desc, icon }: { step: string; title: string; desc: string; icon?: React.ReactNode }) => (
  <div className="group p-8 md:p-12 border border-border bg-surface/20 rounded-3xl transition-all duration-500 hover:border-primary/50 hover:bg-surface/40 h-full">
    <div className="flex justify-between items-start mb-6">
      <div className="text-[11px] font-bold text-primary uppercase tracking-[0.5em]">{step}</div>
      {icon}
    </div>
    <h3 className="text-3xl font-heading font-medium text-white mb-4 group-hover:text-primary transition-colors">{title}</h3>
    <p className="text-muted leading-relaxed font-light text-sm">{desc}</p>
  </div>
);

const Flow = () => (
  <section className="py-[160px] px-8 max-w-[1120px] mx-auto">
    <Reveal x={-20}>
      <div className="mb-24">
        <h2 className="text-[11px] font-bold text-primary uppercase tracking-[0.6em] mb-8">The Timeline</h2>
        <p className="text-3xl md:text-4xl font-light text-muted tracking-tight">Rapid execution within a 50-hour flexible window.</p>
      </div>
    </Reveal>
    <div className="grid md:grid-cols-2 gap-6">
      <Reveal delay={0.1}><FlowStep icon={<ShieldCheck className="w-5 h-5 text-muted/40"/>} step="T - 24h: Setup" title="Lock & Load" desc="Google Form closes. Teams finalized. Ideas locked in #idea-intent. Get your repo and dev environment ready before the clock starts." /></Reveal>
      <Reveal delay={0.2}><FlowStep icon={<Zap className="w-5 h-5 text-muted/40"/>} step="H 00-15: Clarity" title="The Grind Starts" desc="50-hour clock begins. Lock your scope. Dedicate your first 10-hour block to learning and initial scaffolding. Post your Day 1 Check-in." /></Reveal>
      <Reveal delay={0.3}><FlowStep icon={<Rocket className="w-5 h-5 text-muted/40"/>} step="H 15-40: Engine" title="The Build Core" desc="The middle 25 hours. Deliver the core logic. Fix bugs, stabilize, and refine your UX. This is where most of your 30-hour effort happens." /></Reveal>
      <Reveal delay={0.4}><FlowStep icon={<FileCheck className="w-5 h-5 text-muted/40"/>} step="H 40-50: Ship" title="The Final Push" desc="Last 10 hours. No new features. Test flows, record your demo, and submit your project to the Vasudev AI jury." /></Reveal>
    </div>
  </section>
);

const Collective = () => (
  <section className="py-[160px] px-8 max-w-[1120px] mx-auto">
    <Reveal x={-20}>
      <div className="mb-20">
        <h2 className="text-[11px] font-bold text-primary uppercase tracking-[0.6em] mb-10">Mentors & Jury</h2>
        <h3 className="section-headline text-4xl md:text-6xl font-medium text-white mb-10">Learn from the ones who build.</h3>
        <p className="text-xl text-muted font-light max-w-2xl leading-relaxed">
          The sprint is overseen by founders and industry engineers who value discipline and code stability over marketing fluff.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {[
          { name: "Vasudev AI Core Team", role: "Logic & Strategy Jury", focus: "Architecture & Deployment", icon: <Layout className="w-6 h-6"/> },
          { name: "Industry Founders", role: "Product Mentors", focus: "Market Fit & UX", icon: <Star className="w-6 h-6"/> },
          { name: "Senior Engineers", role: "Technical Jury", focus: "Code Stability & Security", icon: <Library className="w-6 h-6"/> }
        ].map((person, i) => (
          <div key={i} className="p-8 border border-border bg-surface/10 rounded-3xl hover:border-primary/40 transition-all duration-300">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6 text-primary">
              {person.icon}
            </div>
            <h4 className="text-xl font-heading font-medium text-white mb-1">{person.name}</h4>
            <div className="text-primary text-xs font-bold uppercase tracking-wider mb-4">{person.role}</div>
            <div className="text-muted text-sm font-light">Expertise: {person.focus}</div>
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

const EvaluationDetailed = () => (
  <section className="py-[160px] px-8 max-w-[1120px] mx-auto">
    <Reveal x={-20}>
      <div className="mb-20">
        <h2 className="text-[11px] font-bold text-accentPurple uppercase tracking-[0.6em] mb-10">Judging Protocol</h2>
        <h3 className="section-headline text-4xl md:text-6xl font-medium text-white mb-10">How you'll be measured.</h3>
        <p className="text-xl text-muted font-light max-w-2xl leading-relaxed">
          Total 100 points. We judge what you ship and the discipline you showed during the 50-hour window.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        <RubricItem 
          title="Execution & Logic" 
          pts={35} 
          criteria={[
            "Finished product status (Does it ship?)",
            "Handling of edge cases and stability",
            "Stability of the deployed build/link",
            "Originality of the logic approach"
          ]}
        />
        <RubricItem 
          title="Build Quality & UX" 
          pts={25} 
          criteria={[
            "Cleanliness and readability of code structure",
            "UI intuitive flow and basic responsiveness",
            "Performance and output accuracy",
            "Minimalist yet professional presentation"
          ]}
        />
        <RubricItem 
          title="Learning Journey" 
          pts={20} 
          criteria={[
            "Clarity of Hour 1-3 learning outcomes",
            "Visible application of new skills in build",
            "README documentation quality",
            "Problem-to-solution narrative depth"
          ]}
        />
        <RubricItem 
          title="Discipline & Check-ins" 
          pts={20} 
          criteria={[
            "Punctuality of 3 main milestone updates",
            "Honesty in progress logging and blockers",
            "Discord engagement with the builder pool",
            "Adherence to phase-wise milestones"
          ]}
        />
      </div>
    </Reveal>
  </section>
);

const PrizePool = () => {
  const rewards = [
    { icon: <Award className="w-6 h-6 text-primary" />, title: "The Elite Credential", desc: "Vasudev AI Verified Sprint Certificate + Alpha Builder Badge. Recognized by industry partners." },
    { icon: <Rocket className="w-6 h-6 text-primary" />, title: "Pipeline Priority", desc: "Direct access to paid builder collaborations and future high-stakes Vasudev AI projects." },
    { icon: <Users className="w-6 h-6 text-primary" />, title: "Mentorship Pass", desc: "Exclusive 1:1 session with the core team to roadmap your career or project for scaling." },
    { icon: <Star className="w-6 h-6 text-primary" />, title: "Public Spotlight", desc: "Your project showcased on the official Vasudev AI website to an audience of active builders." },
    { icon: <Zap className="w-6 h-6 text-primary" />, title: "Elite Discord Tier", desc: "Permanent 'Alpha Builder' role in Discord, unlocking private networking and resources." }
  ];

  return (
    <section className="py-[160px] px-8 max-w-[1120px] mx-auto">
      <Reveal x={-20}>
        <div className="mb-24">
          <h2 className="section-headline text-4xl md:text-6xl font-medium text-white mb-8">The Opportunity Pool</h2>
          <p className="text-xl text-muted font-light max-w-2xl leading-relaxed">
            There are no cash prizes—only career-changing recognition and access to a high-signal network.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rewards.map((reward, i) => (
            <div key={i} className="group p-10 bg-surface/10 border border-border rounded-[2rem] hover:bg-surface/30 hover:border-primary/30 transition-all duration-500">
              <div className="mb-8">{reward.icon}</div>
              <h4 className="text-xl font-medium text-white mb-4 group-hover:text-primary transition-colors">{reward.title}</h4>
              <p className="text-muted text-sm font-light leading-relaxed">{reward.desc}</p>
            </div>
          ))}
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
          50 hours to build. <br className="hidden md:block"/> 30 hours to transform.
        </h2>
      </div>
      <div className="flex flex-col items-center gap-8 mb-32">
        <motion.button 
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="cta-border px-16 py-7 rounded-full text-white font-bold text-2xl tracking-tight group"
          onClick={() => window.open('https://forms.gle/your-form-link', '_blank')}
        >
          Join the Build Sprint
          <span className="inline-block transition-transform group-hover:translate-x-2 ml-3">→</span>
        </motion.button>
        <div className="text-[11px] uppercase tracking-[0.4em] text-primary font-bold">
          Free to join · Proof of building only · Limited Slots
        </div>
      </div>
      <div className="flex flex-col items-center gap-6">
        <div className="text-[11px] font-bold text-muted uppercase tracking-[0.6em] select-none opacity-50 flex items-center gap-4">
           50:30 Model <span className="w-1 h-1 rounded-full bg-border"></span> Shipped.
        </div>
        <div className="text-[10px] text-muted/30">© 2025 Vasudev AI · Built for Real Builders.</div>
      </div>
    </Reveal>
  </footer>
);

export default function App() {
  return (
    <div className="relative selection:bg-primary/25 bg-background min-h-screen text-white">
      <Navbar />
      <Hero />
      <Manifesto />
      <Flow />
      <Collective />
      <EvaluationDetailed />
      <PrizePool />
      <FAQ />
      <Footer />
    </div>
  );
}