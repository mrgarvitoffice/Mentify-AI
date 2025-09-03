import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import AnimatedParticles from '@/components/ui/animated-particles';

const plans = [
    {
        name: "Single Buddy",
        price: "$300",
        frequency: "/year",
        description: "Perfect for trying one specialist.",
        features: ["1 AI Buddy Access", "Birth Chart Personalization", "Text & Voice Interaction", "Standard Support"],
        isFeatured: false,
        cta: "Get Started"
    },
    {
        name: "6 Buddies Bundle",
        price: "$1,800",
        frequency: "/year",
        description: "The complete AI ecosystem for holistic life transformation.",
        features: ["All 6 AI Buddies", "Birth Chart Personalization", "Text, Voice & Video", "Priority Support", "Advanced Learning"],
        isFeatured: true,
        cta: "Choose Bundle"
    },
    {
        name: "Premium + Personal Creation",
        price: "$3,800",
        frequency: "/year",
        description: "For creators who want to build and monetize their own AI.",
        features: ["All 6 AI Buddies", "Create Your Own Buddy", "Monetization Tools", "Dedicated Support", "API Access"],
        isFeatured: false,
        cta: "Go Premium"
    }
];

export default function PricingSection() {
    return (
        <section id="pricing" className="relative bg-background text-foreground py-24 sm:py-32 overflow-hidden">
            <AnimatedParticles count={200} className="opacity-20" />
            <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">Choose Your AI Companion Plan</h2>
                    <p className="mt-6 text-lg leading-8 text-muted-foreground">Flexible plans that grow with you. Start your journey today.</p>
                </div>
                <div className="isolate mt-16 grid grid-cols-1 gap-y-16 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
                    {plans.map((plan) => (
                        <div key={plan.name} className={cn(
                            "relative flex flex-col rounded-3xl border border-border bg-card p-8 transition-transform duration-300",
                            plan.isFeatured ? "lg:scale-110 ring-2 ring-primary [backdrop-filter:blur(30px)] z-10" : "hover:scale-105"
                        )}>
                            {plan.isFeatured && <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground font-bold">Most Popular</Badge>}
                            <div className="flex-1">
                                <h3 className="text-2xl font-semibold">{plan.name}</h3>
                                <p className="mt-4 flex items-baseline gap-x-2">
                                    <span className="text-5xl font-bold tracking-tight">{plan.price}</span>
                                    <span className="text-muted-foreground">{plan.frequency}</span>
                                </p>
                                <p className="mt-6 text-muted-foreground">{plan.description}</p>
                                <ul role="list" className="mt-8 space-y-3 text-sm leading-6">
                                    {plan.features.map((feature) => (
                                        <li key={feature} className="flex gap-x-3">
                                            <Check className="h-6 w-5 flex-none text-primary" aria-hidden="true" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <Button className={cn(
                                "mt-8 w-full rounded-md font-bold",
                                plan.isFeatured 
                                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                                    : "bg-secondary text-secondary-foreground hover:bg-secondary/90"
                            )}>
                                {plan.cta}
                            </Button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
