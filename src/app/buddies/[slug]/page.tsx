
import { buddies } from '@/lib/buddies-data';
import { notFound } from 'next/navigation';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { CheckCircle2, Star } from 'lucide-react';
import Link from 'next/link';
import BuddyFeaturesSection from '@/components/sections/buddy-features-section';
import BuddyHowItWorksSection from '@/components/sections/buddy-how-it-works-section';
import BuddyTestimonialsSection from '@/components/sections/buddy-testimonials-section';
import BuddyCtaSection from '@/components/sections/buddy-cta-section';

export async function generateStaticParams() {
  return buddies.map((buddy) => ({
    slug: buddy.slug,
  }));
}

export default function BuddyPage({ params }: { params: { slug: string } }) {
  const buddy = buddies.find((b) => b.slug === params.slug);

  if (!buddy) {
    notFound();
  }

  const IconComponent = buddy.icon;

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full overflow-hidden bg-gradient-to-br from-primary/10 via-background to-background">
          <div className="container mx-auto px-4 lg:px-8 py-24 sm:py-32 lg:py-40">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-left animate-fade-in-up">
                <div className="inline-block bg-primary/10 text-primary p-3 rounded-full mb-4">
                  <IconComponent className="w-8 h-8" />
                </div>
                <h1 className="font-headline text-5xl lg:text-6xl font-black text-foreground" style={{ lineHeight: 1.1 }}>
                  {buddy.title}
                </h1>
                <p className="mt-6 text-xl lg:text-2xl max-w-xl mx-auto lg:mx-0 text-muted-foreground">
                  {buddy.tagline}
                </p>
                 <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                    <Button size="lg" className="rounded-lg text-lg py-7 px-8" asChild>
                       <Link href={`/checkout?buddy=${encodeURIComponent(buddy.title)}&price=$300`}>
                            Get Your Buddy
                        </Link>
                    </Button>
                </div>
              </div>
              <div className="relative flex justify-center items-center animate-fade-in-up" style={{animationDelay: '0.3s'}}>
                 <div className="absolute w-[500px] h-[500px] bg-secondary/10 rounded-full blur-3xl -z-10 animate-pulse-slow"></div>
                 <Image
                    src={buddy.heroImage}
                    alt={`${buddy.title} Mockup`}
                    width={600}
                    height={600}
                    className="rounded-2xl shadow-2xl"
                    data-ai-hint={buddy.dataAiHint}
                 />
              </div>
            </div>
          </div>
        </section>

        <BuddyFeaturesSection buddy={buddy} />
        <BuddyHowItWorksSection buddy={buddy} />
        <BuddyTestimonialsSection buddy={buddy} />
        <BuddyCtaSection buddy={buddy} />

      </main>
      <Footer />
    </div>
  );
}
