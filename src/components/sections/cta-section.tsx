import { Button } from '@/components/ui/button';
import AnimatedParticles from '@/components/ui/animated-particles';
import { Star } from 'lucide-react';

export default function CtaSection() {
    return (
        <section className="relative overflow-hidden beige-gradient py-24 sm:py-32">
            <div className="absolute inset-0 z-0">
                {/* Light theme blobs */}
                <div className="absolute -top-1/4 -left-1/4 h-1/2 w-1/2 rounded-full bg-gradient-to-br from-amber-200/50 to-amber-300/50 blur-3xl animate-gradient-blob dark:hidden"></div>
                <div className="absolute -bottom-1/4 -right-1/4 h-1/2 w-1/2 rounded-full bg-gradient-to-br from-teal-200/50 to-teal-300/50 blur-3xl animate-gradient-blob animation-delay-3000 dark:hidden"></div>
                <div className="absolute top-1/4 -right-1/4 h-1/2 w-1/2 rounded-full bg-gradient-to-br from-fuchsia-200/50 to-fuchsia-300/50 blur-3xl animate-gradient-blob animation-delay-6000 dark:hidden"></div>
                {/* Dark theme nebula glows */}
                <div className="absolute -top-1/4 -left-1/4 h-1/2 w-1/2 rounded-full bg-gradient-to-br from-purple-900/40 to-blue-900/20 blur-3xl animate-gradient-blob"></div>
                <div className="absolute -bottom-1/4 -right-1/4 h-1/2 w-1/2 rounded-full bg-gradient-to-br from-yellow-800/30 to-purple-900/10 blur-3xl animate-gradient-blob animation-delay-3000"></div>
            </div>
            <AnimatedParticles count={50} className="absolute inset-0 z-10 opacity-50" />
            <div className="relative z-20 mx-auto max-w-2xl text-center px-4">
                <Star className="mx-auto h-12 w-12 text-primary animate-pulse mb-4" />
                <h2 className="font-headline text-5xl font-black text-maroon sm:text-6xl animate-fade-in-up">
                    <span className="text-gradient bg-gradient-to-r from-maroon to-primary bg-200% animate-gradient-shimmer">
                        Transform Your Life Today
                    </span>
                </h2>
                <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-neutral-700 dark:text-neutral-300 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                    Join 40,000+ users who’ve discovered their perfect AI companions.
                </p>
                <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                    <Button
                        className="group w-full sm:w-auto rounded-full bg-gradient-to-r from-primary to-yellow-500 text-black dark:text-primary-foreground px-8 py-4 text-base font-bold shadow-lg shadow-amber-500/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-amber-500/40"
                    >
                        <span className="relative flex items-center gap-2">✨ Shop AI Buddies</span>
                    </Button>
                    <Button
                        variant="outline"
                        className="w-full sm:w-auto rounded-full border-2 border-maroon dark:border-maroon bg-transparent px-8 py-4 text-base font-bold text-maroon dark:text-maroon transition-all duration-300 hover:bg-maroon hover:text-primary dark:hover:text-primary hover:shadow-lg hover:shadow-maroon/20 hover:-translate-y-1"
                    >
                        Start Free Demo <span aria-hidden="true">→</span>
                    </Button>
                </div>
            </div>
        </section>
    );
}