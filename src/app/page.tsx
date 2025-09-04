
'use client';

import BuddiesSection from '@/components/sections/buddies-section';
import CtaSection from '@/components/sections/cta-section';
import HeroSection from '@/components/sections/hero-section';
import HowItWorksSectionHome from '@/components/sections/how-it-works-section-home';
import TechHighlightsSection from '@/components/sections/tech-highlights-section';
import TestimonialsSection from '@/components/sections/testimonials-section';
import ValuePropsSection from '@/components/sections/value-props-section';

export default function Home() {
  return (
    <>
      <HeroSection />
      <BuddiesSection />
      <ValuePropsSection />
      <HowItWorksSectionHome />
      <TechHighlightsSection />
      <TestimonialsSection />
      <CtaSection />
    </>
  );
}
