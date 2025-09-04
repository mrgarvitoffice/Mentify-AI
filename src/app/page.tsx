
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import HeroSection from '@/components/sections/hero-section';
import BuddiesSection from '@/components/sections/buddies-section';
import ValuePropsSection from '@/components/sections/value-props-section';
import TechHighlightsSection from '@/components/sections/tech-highlights-section';
import CtaSection from '@/components/sections/cta-section';
import TestimonialsSection from '@/components/sections/testimonials-section';
import HowItWorksSectionHome from '@/components/sections/how-it-works-section-home';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <BuddiesSection />
        <ValuePropsSection />
        <HowItWorksSectionHome />
        <TechHighlightsSection />
        <TestimonialsSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
