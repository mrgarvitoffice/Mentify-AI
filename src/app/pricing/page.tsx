
'use client';

import { Button } from '@/components/ui/button';
import { Check, Gem, Crown, Rocket, Star } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import AnimatedParticles from '@/components/ui/animated-particles';
import Link from 'next/link';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { useState } from 'react';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

const plans = [
    {
        icon: Gem,
        name: "Single Buddy",
        priceMonthly: "$30",
        priceYearly: "$300",
        description: "Perfect for trying one specialist.",
        features: ["1 AI Buddy Access", "Birth Chart Personalization", "Text & Voice Interaction", "Standard Support"],
        isFeatured: false,
        cta: "Get Started",
    },
    {
        icon: Crown,
        name: "Complete Transformation",
        priceMonthly: "$180",
        priceYearly: "$1800",
        description: "The complete AI ecosystem for holistic life transformation.",
        features: ["All 6 AI Buddies", "Birth Chart Personalization", "Text, Voice & Video", "Priority Support", "Advanced Learning"],
        isFeatured: true,
        cta: "Choose Bundle",
    },
    {
        icon: Rocket,
        name: "Premium Creator",
        priceMonthly: "$380",
        priceYearly: "$3800",
        description: "For creators who want to build and monetize their own AI.",
        features: ["All 6 AI Buddies", "Create Your Own Buddy", "Monetization Tools", "Dedicated Support", "API Access"],
        isFeatured: false,
        cta: "Go Premium",
    }
];

export default function PricingPage() {
    const [isYearly, setIsYearly] = useState(true);

    return (
        <div className="flex min-h-screen flex-col bg-background">
        <Header />
        <main className="flex-1">
        <section id="pricing" className="relative bg-background text-foreground py-24 sm:py-32 overflow-hidden">
            <AnimatedParticles count={50} className="opacity-20" />
            <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <div className="flex justify-center mb-4">
                        <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center animate-pulse">
                            <Rocket className="w-10 h-10 text-primary" />
                        </div>
                    </div>
                    <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">Choose Your Transformation Plan</h2>
                    <p className="mt-6 text-lg leading-8 text-muted-foreground">From individual guidance to complete life transformation. Flexible plans that grow with you.</p>
                </div>

                <div className="flex justify-center mt-10 items-center space-x-4">
                    <Label htmlFor="billing-cycle" className={cn("font-medium", !isYearly && "text-primary")}>Monthly</Label>
                    <Switch
                        id="billing-cycle"
                        checked={isYearly}
                        onCheckedChange={setIsYearly}
                    />
                    <Label htmlFor="billing-cycle" className={cn("font-medium", isYearly && "text-primary")}>Yearly</Label>
                    <Badge variant="secondary" className="bg-amber-400/20 text-amber-600 border-amber-400/30">Save 2 months</Badge>
                </div>

                <div className="isolate mt-16 grid grid-cols-1 gap-y-16 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
                    {plans.map((plan) => (
                        <div key={plan.name} className={cn(
                            "relative flex flex-col rounded-3xl p-8 transition-transform duration-300",
                            plan.isFeatured ? "lg:scale-110 ring-2 ring-primary z-10 shadow-2xl shadow-primary/30" : "hover:scale-105",
                            "glass-card"
                        )}>
                            {plan.isFeatured && <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground font-bold">Most Popular</Badge>}
                            <div className="flex-1 text-center">
                                <plan.icon className="h-12 w-12 text-primary mx-auto mb-6" />
                                <h3 className="text-2xl font-semibold">{plan.name}</h3>
                                <p className="mt-4 flex items-baseline justify-center gap-x-2">
                                    <span className="text-5xl font-bold tracking-tight">{isYearly ? plan.priceYearly : plan.priceMonthly}</span>
                                    <span className="text-muted-foreground">{isYearly ? '/year' : '/month'}</span>
                                </p>
                                <p className="mt-6 text-muted-foreground">{plan.description}</p>
                                <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-left">
                                    {plan.features.map((feature) => (
                                        <li key={feature} className="flex gap-x-3">
                                            <Check className="h-6 w-5 flex-none text-primary" aria-hidden="true" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <Button 
                                asChild
                                className={cn(
                                    "mt-8 w-full rounded-full font-bold py-3 text-lg",
                                    plan.isFeatured 
                                        ? "bg-gradient-to-r from-primary to-yellow-300 text-primary-foreground hover:shadow-primary/40 hover:-translate-y-1 transition-all"
                                        : "bg-secondary text-secondary-foreground hover:bg-secondary/90"
                            )}>
                                <Link href={`/checkout?plan=${encodeURIComponent(plan.name)}&price=${encodeURIComponent(isYearly ? plan.priceYearly : plan.priceMonthly)}`}>
                                    {plan.cta}
                                </Link>
                            </Button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
        </main>
      <Footer />
    </div>
    )
}
