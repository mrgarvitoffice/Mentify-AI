import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlayCircle } from 'lucide-react';
import { PersonalityQuizDialog } from '../shop/personality-quiz-dialog';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section id="home" className="relative w-full bg-background overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 py-24 sm:py-32 lg:py-40">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="text-center lg:text-left">
                    <h1 className="font-headline text-5xl lg:text-6xl font-black text-foreground"
                        style={{ lineHeight: 1.1 }}>
                        Your companions that never sleep.
                    </h1>
                    <p className="mt-6 text-xl lg:text-2xl max-w-xl mx-auto lg:mx-0 text-muted-foreground">
                        Build, grow, and scale your life with a team of AI Buddies.
                    </p>
                    <p className="mt-4 text-lg max-w-lg mx-auto lg:mx-0 text-muted-foreground/80">
                        Mentify-AI. World's first AI companions, personalized for your birth chart. Making personal growth feel like magic.
                    </p>
                    <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                        <PersonalityQuizDialog>
                            <Button size="lg" className="rounded-lg text-lg py-7 px-8">
                                Discover Your AI Buddy
                            </Button>
                        </PersonalityQuizDialog>
                        <Button variant="outline" size="lg" className="rounded-lg text-lg py-7 px-8" asChild>
                            <Link href="#how-it-works">
                                <PlayCircle className="mr-2 h-5 w-5"/>
                                Watch Demo
                            </Link>
                        </Button>
                    </div>
                </div>
                <div className="relative flex justify-center items-center">
                    <div className="absolute w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl -z-10 animate-pulse-slow"></div>
                    <Image 
                        src="https://picsum.photos/600/600"
                        alt="AI Buddy Interface Mockup"
                        width={600}
                        height={600}
                        className="rounded-2xl shadow-2xl animate-fade-in-up"
                        data-ai-hint="AI app interface"
                    />
                </div>
            </div>
        </div>
    </section>
  );
}
