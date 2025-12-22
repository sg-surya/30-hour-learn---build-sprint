import React, { useState } from 'react';

import { Hero } from './components/Hero';
import { ProblemExplorer } from './components/ProblemExplorer';
import { WhatIsSprint, HowItWorks, Protocol5030, JudgingMindset, MentorSessions, JudgesSection, JudgingSection, AwardsSection, FAQ, Community, MarqueeSection } from './components/LandingSections';
import { RegistrationPage } from './components/RegistrationPage';
import { Footer } from './components/Footer';

export default function App() {
  const [showRegistration, setShowRegistration] = useState(false);

  if (showRegistration) {
    return <RegistrationPage onBack={() => setShowRegistration(false)} />;
  }

  return (
    <div className="relative selection:bg-primary/25 bg-background min-h-screen text-white">

      <Hero onRegister={() => setShowRegistration(true)} />
      <MarqueeSection />
      <WhatIsSprint />
      <HowItWorks onRegister={() => setShowRegistration(true)} />
      <Protocol5030 />
      <ProblemExplorer />
      <JudgingMindset />
      <AwardsSection onRegister={() => setShowRegistration(true)} />
      <MentorSessions />
      <JudgesSection />
      <FAQ />
      <Community />
      <Footer onRegister={() => setShowRegistration(true)} />


    </div>
  );
}
