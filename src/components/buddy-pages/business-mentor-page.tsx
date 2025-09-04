
'use client';
import type { Buddy } from '@/lib/buddies-data';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { CheckCircle } from 'lucide-react';
import { iconMap } from '@/lib/buddies-data';

export default function BusinessMentorPage({ buddy }: { buddy: Buddy }) {
    return (
        <>
            {/* Cinematic Hero */}
            <section className="relative overflow-hidden bg-gradient-to-b from-primary/10 via-background to-background pt-32 pb-20 sm:pt-40 sm:pb-28">
                <div className="container mx-auto px-6 lg:px-8 text-center">
                    <div className="max-w-4xl mx-auto">
                        <p className="font-semibold text-primary">For Ambitious Entrepreneurs</p>
                        <h1 className="font-headline text-5xl sm:text-6xl lg:text-7xl font-black text-foreground mt-4" style={{ lineHeight: 1.1 }}>
                           Your AI Co-Founder for Market Domination
                        </h1>
                        <p className="mt-6 text-lg sm:text-xl max-w-2xl mx-auto text-muted-foreground">
                           {buddy.longDescription}
                        </p>
                        <div className="mt-10">
                            <Button size="lg" className="rounded-full text-lg py-7 px-10 shadow-lg" asChild>
                               <Link href={`/checkout?buddy=${encodeURIComponent(buddy.title)}&price=$300`}>
                                    Activate Your Mentor
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

             {/* Strengths Section */}
            <section className="py-20 sm:py-28 bg-background">
                 <div className="container mx-auto px-6 lg:px-8">
                     <div className="mx-auto max-w-2xl text-center mb-16">
                        <h2 className="text-base font-semibold leading-7 text-primary">Core Competencies</h2>
                        <p className="mt-2 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                           Strategic Business Mastery
                        </p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {buddy.strengths.slice(0,8).map((strength) => (
                            <div key={strength} className="flex items-center gap-3">
                                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                                <span className="font-medium text-muted-foreground">{strength}</span>
                            </div>
                        ))}
                    </div>
                 </div>
            </section>


            {/* Secondary Features Section */}
             <section className="py-20 sm:py-28 bg-muted/50">
                 <div className="container mx-auto px-6 lg:px-8">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="max-w-lg">
                             <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                                Go Beyond Advice. Get Actionable Intelligence.
                            </h2>
                            <p className="mt-6 text-lg leading-8 text-muted-foreground">
                                This isn't just a chatbot. It's a powerful analytics and strategy engine designed to give you a competitive edge.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 gap-10">
                            {buddy.secondaryFeatures.map((feature) => {
                                const Icon = iconMap[feature.icon];
                                return (
                                <div key={feature.title} className="relative pl-16">
                                    <dt className="text-lg font-semibold leading-7 text-foreground">
                                        <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                                            <Icon className="h-6 w-6" aria-hidden="true" />
                                        </div>
                                        {feature.title}
                                    </dt>
                                    <dd className="mt-2 text-base leading-7 text-muted-foreground">{feature.description}</dd>
                                </div>
                                )
                            })}
                        </div>
                    </div>
                 </div>
            </section>

             {/* Final CTA */}
            <section className="py-20 sm:py-28 bg-background">
                <div className="container mx-auto px-6 lg:px-8 text-center">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                            Ready to Build Your Empire?
                        </h2>
                        <p className="mt-6 text-lg leading-8 text-muted-foreground">
                           Stop guessing and start executing with a data-driven strategy. Your Business Mentor is ready to join your team.
                        </p>
                         <div className="mt-10">
                            <Button size="lg" className="rounded-full text-lg py-7 px-10 shadow-lg bg-gradient-to-r from-primary to-yellow-400 text-primary-foreground" asChild>
                               <Link href={`/checkout?buddy=${encodeURIComponent(buddy.title)}&price=$300`}>
                                    Get Started Now
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

    