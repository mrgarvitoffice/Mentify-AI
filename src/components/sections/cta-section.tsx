import { Button } from '@/components/ui/button';
import AnimatedParticles from '@/components/ui/animated-particles';
import { Star } from 'lucide-react';
import { ShopDialog } from '../shop/shop-dialog';
import Link from 'next/link';

export default function CtaSection() {
    return (
        <section className="relative overflow-hidden bg-background py-24 sm:py-32">
            <AnimatedParticles count={50} className="absolute inset-0 z-10 opacity-50" />
            <div className="relative z-20 mx-auto max-w-2xl text-center px-4">
                <div className="flex justify-center mb-4">
                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center animate-pulse">
                        <Star className="w-10 h-10 text-primary" />
                    </div>
                </div>
                <h2 className="font-headline text-5xl font-black text-foreground sm:text-6xl animate-fade-in-up">
                    <span className="text-gradient bg-gradient-to-r from-primary to-secondary">
                        Transform Your Life Today
                    </span>
                </h2>
                <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-muted-foreground animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                    Join 40,000+ users who’ve discovered their perfect AI companions.
                </p>
                <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                    <ShopDialog>
                        <Button
                            size="lg"
                            className="group w-full sm:w-auto rounded-full bg-primary text-primary-foreground font-bold shadow-lg shadow-primary/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-primary/40"
                        >
                            Get Your AI Buddies
                        </Button>
                    </ShopDialog>
                    <Button
                        size="lg"
                        variant="outline"
                        className="w-full sm:w-auto rounded-full font-bold"
                        asChild
                    >
                        <Link href="#how-it-works">
                            Learn How <span aria-hidden="true">→</span>
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
