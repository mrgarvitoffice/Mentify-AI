
import { Button } from '@/components/ui/button';
import AnimatedParticles from '@/components/ui/animated-particles';
import { Star } from 'lucide-react';
import { ShopDialog } from '../shop/shop-dialog';
import Link from 'next/link';

export default function CtaSection() {
    return (
        <section className="relative overflow-hidden bg-muted/50 py-24 sm:py-32">
             <div className="absolute inset-0 z-0">
                <div className="absolute -top-1/4 -left-1/4 h-1/2 w-1/2 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 blur-3xl animate-gradient-blob dark:from-primary/30 dark:to-secondary/10"></div>
                <div className="absolute -bottom-1/4 -right-1/4 h-1/2 w-1/2 rounded-full bg-gradient-to-br from-accent/20 to-primary/10 blur-3xl animate-gradient-blob animation-delay-3000 dark:from-accent/20 dark:to-primary/5"></div>
            </div>
            <AnimatedParticles count={50} className="absolute inset-0 z-10 opacity-50" />
            <div className="relative z-20 mx-auto max-w-2xl text-center px-4">
                <div className="flex justify-center mb-4">
                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center animate-pulse">
                        <Star className="w-10 h-10 text-primary" />
                    </div>
                </div>
                <h2 className="font-headline text-5xl font-black sm:text-6xl animate-fade-in-up">
                    <span className="text-gradient bg-gradient-to-r from-primary to-secondary bg-200% animate-gradient-shimmer">
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
                            className="w-full sm:w-auto rounded-full bg-gradient-to-r from-primary to-yellow-500 text-primary-foreground px-8 py-4 text-base font-bold shadow-lg shadow-primary/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-primary/40"
                        >
                            <span className="relative flex items-center gap-2">
                                ✨ Get Your AI Buddy
                            </span>
                        </Button>
                    </ShopDialog>
                    <Button
                        size="lg"
                        variant="outline"
                        className="w-full sm:w-auto rounded-full border-2 border-primary/50 bg-transparent px-8 py-4 text-base font-bold text-primary-foreground transition-all duration-300 hover:bg-primary/10 hover:text-primary hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1"
                        asChild
                    >
                        <Link href="/how-it-works">
                            Learn How It Works <span aria-hidden="true">→</span>
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
