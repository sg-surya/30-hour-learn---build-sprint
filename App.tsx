import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProblemExplorer } from './components/ProblemExplorer';
import { WhatIsSprint, HowItWorks, Protocol5030, JudgingMindset, MentorSessions, JudgesSection, JudgingSection, AwardsSection, FAQ, Community, MarqueeSection } from './components/LandingSections';
import { RegistrationModal } from './components/RegistrationModal';
import { Footer } from './components/Footer';

export default function App() {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  return (
    <div className="relative selection:bg-primary/25 bg-background min-h-screen text-white">
      <Navbar onRegister={() => setIsRegisterOpen(true)} />
      <Hero onRegister={() => setIsRegisterOpen(true)} />
      <MarqueeSection />
      <WhatIsSprint />
      <HowItWorks onRegister={() => setIsRegisterOpen(true)} />
      <Protocol5030 />
      <ProblemExplorer />
      <JudgingMindset />
      <AwardsSection />
      <MentorSessions />
      <JudgesSection />
      <FAQ />
      <Community />
      <Footer onRegister={() => setIsRegisterOpen(true)} />
      <RegistrationModal isOpen={isRegisterOpen} onClose={() => setIsRegisterOpen(false)} />
    </div>
  );
}
