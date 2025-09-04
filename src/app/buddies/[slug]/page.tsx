
import { buddies } from '@/lib/buddies-data';
import { notFound } from 'next/navigation';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { CheckCircle2, Star } from 'lucide-react';
import Link from 'next/link';

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
                  {buddy.description}
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
                    src={`https://picsum.photos/600/600?random=${buddy.slug}`}
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

        {/* Features Section */}
        <section className="py-24 sm:py-32 bg-muted/50">
            <div className="container mx-auto px-6 lg:px-8">
                 <div className="mx-auto max-w-2xl text-center">
                    <div className="flex justify-center mb-4">
                        <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center animate-pulse">
                            <Star className="w-10 h-10 text-primary" />
                        </div>
                    </div>
                  <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                    Key Capabilities
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-muted-foreground">
                    Discover how the {buddy.title} can help you achieve your goals.
                  </p>
                </div>
                <div className="mt-16 max-w-4xl mx-auto">
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                        {buddy.strengths.map((strength) => (
                            <li key={strength} className="flex items-center gap-3 p-4 rounded-lg hover:bg-background/80 transition-colors">
                                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                                <span className="text-lg text-muted-foreground">{strength}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
