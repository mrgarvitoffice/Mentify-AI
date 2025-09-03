import { Button } from '@/components/ui/button';
import AnimatedParticles from '@/components/ui/animated-particles';

export default function CtaSection() {
    return (
        <section className="relative overflow-hidden cosmic-nebula py-24 sm:py-32">
            <AnimatedParticles count={100} />
            <div className="relative z-10 mx-auto max-w-2xl text-center px-4">
                <h2 className="font-headline text-4xl font-black text-white sm:text-5xl">
                    <span className="text-gradient bg-gradient-to-r from-white to-primary">
                        Transform Your Life Today
                    </span>
                </h2>
                <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-white/80">
                    Join 40,000+ users who've discovered their perfect AI companions. Your journey to self-discovery starts now.
                </p>
                <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6">
                    <Button
                        className="w-full sm:w-auto rounded-full bg-gradient-to-r from-primary to-yellow-300 px-8 py-4 text-base font-bold text-primary-foreground shadow-lg shadow-primary/20 transition-transform duration-300 hover:-translate-y-2 hover:shadow-primary/40"
                    >
                        Shop AI Buddies
                    </Button>
                    <Button
                        variant="link"
                        className="text-base font-semibold leading-6 text-secondary"
                    >
                        Start Free Demo <span aria-hidden="true">→</span>
                    </Button>
                </div>
            </div>
        </section>
    );
}
