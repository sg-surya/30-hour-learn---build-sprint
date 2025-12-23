import React, { useState } from 'react';

import { Hero } from './components/Hero';
import { Sponsors } from './components/Sponsors';
import { ProblemExplorer } from './components/ProblemExplorer';
import { WhatIsSprint, HowItWorks, SprintRoadmap, Protocol5030, JudgingMindset, MentorSessions, JudgesSection, JudgingSection, AwardsSection, FAQ, Community, MarqueeSection, WhatToSubmit } from './components/LandingSections';
import { RegistrationPage } from './components/RegistrationPage';
import { Footer } from './components/Footer';
import { GrainOverlay, ScrollProgress, ParallaxBackground, SpotlightCursor } from './components/VisualEffects';

export default function App() {
  const [showRegistration, setShowRegistration] = useState(false);

  if (showRegistration) {
    return <RegistrationPage onBack={() => setShowRegistration(false)} />;
  }

  return (
    <div className="relative selection:bg-primary/25 bg-background min-h-screen text-white">
      <SpotlightCursor />
      <GrainOverlay />
      <ScrollProgress />
      <ParallaxBackground />

      <Hero onRegister={() => setShowRegistration(true)} />
      <Sponsors />
      <MarqueeSection />
      <WhatIsSprint />
      <HowItWorks onRegister={() => setShowRegistration(true)} />
      <SprintRoadmap />
      <Protocol5030 />
      <ProblemExplorer />
      <WhatToSubmit />
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
