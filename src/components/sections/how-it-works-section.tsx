import { Orbit, MessageSquareText } from 'lucide-react';
import AnimatedParticles from '@/components/ui/animated-particles';

const ZodiacIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
    >
        <path d="M12 2a10 10 0 1 0 10 10" />
        <path d="m2 12 2 2" />
        <path d="M14 2 12 4" />
        <path d="M20 7h2" />
        <path d="M22 12h-2" />
        <path d="M20 17h2" />
        <path d="M10 22v-2" />
        <path d="m16.5 16.5 1.5 1.5" />
        <path d="M12 12H2l4-4" />
        <path d="m8 22 4-4" />
        <path d="m16.5 7.5-1.5-1.5" />
    </svg>
);

const steps = [
    {
        number: "01",
        title: "Share Your Birth Details",
        description: "Provide your date, time, and place of birth to create your unique astrological profile.",
        icon: ZodiacIcon
    },
    {
        number: "02",
        title: "AI Aligns to Your Energy",
        description: "Our advanced algorithms analyze your birth chart to sync your AI Buddy with your cosmic fingerprint.",
        icon: Orbit
    },
    {
        number: "03",
        title: "Get Personalized Guidance",
        description: "Start receiving hyper-personalized advice and insights that resonate with your true self.",
        icon: MessageSquareText
    }
]

export default function HowItWorksSection() {
    return (
        <section id="how-it-works" className="relative cosmic-nebula text-foreground py-24 sm:py-32 overflow-hidden">
            <AnimatedParticles count={50} className="opacity-30" />
            <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">How It Works</h2>
                    <p className="mt-6 text-lg leading-8 text-muted-foreground">A simple three-step journey to your personalized AI companion.</p>
                </div>
                <div className="mt-20 grid grid-cols-1 gap-16 md:grid-cols-3">
                    {steps.map((step) => (
                        <div key={step.number} className="text-center">
                            <div className="relative flex justify-center items-center">
                                <span className="font-headline text-9xl font-black text-gradient bg-gradient-to-br from-foreground/10 to-foreground/5">
                                    {step.number}
                                </span>
                                <div className="absolute">
                                    <step.icon className="h-20 w-20 text-primary animate-pulse-slow" />
                                </div>
                            </div>
                            <h3 className="mt-6 text-2xl font-bold">{step.title}</h3>
                            <p className="mt-4 text-muted-foreground">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
