import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import HeroSection from '@/components/sections/hero-section';
import BuddiesSection from '@/components/sections/buddies-section';
import HowItWorksSection from '@/components/sections/how-it-works-section';
import ValuePropsSection from '@/components/sections/value-props-section';
import TestimonialsSection from '@/components/sections/testimonials-section';
import TechHighlightsSection from '@/components/sections/tech-highlights-section';
import PricingSection from '@/components/sections/pricing-section';
import CtaSection from '@/components/sections/cta-section';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main>
        <HeroSection />
        <BuddiesSection />
        <HowItWorksSection />
        <ValuePropsSection />
        <TestimonialsSection />
        <TechHighlightsSection />
        <PricingSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
