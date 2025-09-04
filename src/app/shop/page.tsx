
import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';
import BuddiesSection from '@/components/sections/buddies-section';
import { PersonalityQuiz } from '@/components/shop/personality-quiz';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import Link from 'next/link';

export default function ShopPage() {
    return (
        <div className="flex min-h-screen flex-col bg-background">
            <Header />
            <main className="flex-1">
                {/* Hero Section */}
                <section className="relative w-full bg-gradient-to-br from-primary/10 via-background to-background py-24 sm:py-32 lg:py-40 text-center">
                    <div className="container mx-auto px-4 lg:px-8">
                        <h1 className="font-headline text-5xl lg:text-7xl font-black text-foreground" style={{ lineHeight: 1.1 }}>
                            Find Your Perfect AI Team
                        </h1>
                        <p className="mt-6 text-xl lg:text-2xl max-w-3xl mx-auto text-muted-foreground">
                            Take our quick personality quiz to discover which AI Buddy is perfectly aligned with your goals and energetic blueprint.
                        </p>
                         <div className="mt-10">
                            <Button size="lg" className="rounded-full text-lg py-7 px-8" asChild>
                               <Link href="#quiz">
                                    Take the Quiz
                                    <ArrowDown className="ml-2 h-5 w-5"/>
                                </Link>
                            </Button>
                        </div>
                    </div>
                </section>
                
                {/* Personality Quiz Section */}
                <section id="quiz" className="py-24 sm:py-32 bg-muted/50">
                    <div className="container mx-auto px-4 lg:px-8">
                         <PersonalityQuiz />
                    </div>
                </section>

                {/* Buddies Grid Section */}
                <BuddiesSection />

            </main>
            <Footer />
        </div>
    );
}
