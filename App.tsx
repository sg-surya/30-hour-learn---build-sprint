import React, { useState } from 'react';

import { Hero } from './components/Hero';
import { Sponsors } from './components/Sponsors';
import { ProblemExplorer } from './components/ProblemExplorer';
import { WhatIsSprint, HowItWorks, SprintRoadmap, Protocol5030, JudgingMindset, MentorSessions, JudgesSection, JudgingSection, AwardsSection, FAQ, Community, MarqueeSection, WhatToSubmit } from './components/LandingSections';
import { RegistrationPage } from './components/RegistrationPage';
import { PPTSubmissionPage } from './components/PPTSubmissionPage';
import { Footer } from './components/Footer';
import { GrainOverlay, ScrollProgress, ParallaxBackground, SpotlightCursor } from './components/VisualEffects';
import Lenis from 'lenis';
import { useEffect } from 'react';

export default function App() {
  const [showRegistration, setShowRegistration] = useState(false);
  const [showPPTSubmission, setShowPPTSubmission] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('view') === 'register') {
      setShowRegistration(true);
    } else if (params.get('view') === 'submit-ppt') {
      setShowPPTSubmission(true);
    }
  }, []);

  const handleShowRegistration = (show: boolean) => {
    setShowRegistration(show);
    if (show) {
      window.history.pushState({}, '', '?view=register');
    } else {
      window.history.pushState({}, '', '/');
    }
  };

  const handleShowPPTSubmission = (show: boolean) => {
    setShowPPTSubmission(show);
    if (show) {
      window.history.pushState({}, '', '?view=submit-ppt');
    } else {
      window.history.pushState({}, '', '/');
    }
  };

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  if (showRegistration) {
    return <RegistrationPage onBack={() => handleShowRegistration(false)} />;
  }

  if (showPPTSubmission) {
    return <PPTSubmissionPage onBack={() => handleShowPPTSubmission(false)} />;
  }

  return (
    <div className="relative selection:bg-primary/25 bg-background min-h-screen text-white">
      <SpotlightCursor />
      <GrainOverlay />
      <ScrollProgress />
      <ParallaxBackground />

      <Hero onRegister={() => handleShowRegistration(true)} onSubmitPPT={() => handleShowPPTSubmission(true)} />
      <Sponsors />
      <MarqueeSection />
      <WhatIsSprint />
      <HowItWorks onRegister={() => handleShowRegistration(true)} />
      <SprintRoadmap />
      <Protocol5030 />
      <ProblemExplorer />
      <WhatToSubmit onSubmitPPT={() => handleShowPPTSubmission(true)} />
      <JudgingMindset />
      <AwardsSection onRegister={() => handleShowRegistration(true)} />
      <MentorSessions />
      <JudgesSection />
      <FAQ />
      <Community />
      <Footer onRegister={() => handleShowRegistration(true)} />


    </div>
  );
}
