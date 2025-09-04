
'use client';

import { useState, useEffect } from 'react';
import LoginPage from './login/page';
import BuddiesSection from '@/components/sections/buddies-section';
import CtaSection from '@/components/sections/cta-section';
import HeroSection from '@/components/sections/hero-section';
import HowItWorksSectionHome from '@/components/sections/how-it-works-section-home';
import TechHighlightsSection from '@/components/sections/tech-highlights-section';
import TestimonialsSection from '@/components/sections/testimonials-section';
import ValuePropsSection from '@/components/sections/value-props-section';

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAuthenticating, setIsAuthenticating] = useState(true);

  useEffect(() => {
    // Simulate checking auth status on page load
    const authStatus = sessionStorage.getItem('isAuthenticated');
    if (authStatus === 'true') {
      setIsAuthenticated(true);
    }
    setIsAuthenticating(false);
  }, []);

  const handleLogin = () => {
    sessionStorage.setItem('isAuthenticated', 'true');
    setIsAuthenticated(true);
  };
  
  const handleLogout = () => {
    sessionStorage.removeItem('isAuthenticated');
    setIsAuthenticated(false);
  }

  if (isAuthenticating) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>; // Or a proper splash screen
  }

  if (!isAuthenticated) {
    return <LoginPage onLogin={handleLogin} />;
  }

  return (
    <>
      <HeroSection />
      <BuddiesSection />
      <ValuePropsSection />
      <HowItWorksSectionHome />
      <TechHighlightsSection />
      <TestimonialsSection />
      <CtaSection />
      {/* You can add a logout button somewhere in your main app UI */}
      {/* <button onClick={handleLogout}>Logout</button> */}
    </>
  );
}
