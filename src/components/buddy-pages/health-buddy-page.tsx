
'use client';
import type { Buddy } from '@/lib/buddies-data';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { iconMap } from '@/lib/buddies-data';

export default function HealthBuddyPage({ buddy }: { buddy: Buddy }) {
    const timelineItems = buddy.features; // Assuming features represent the timeline
    const HeroIcon = iconMap[buddy.icon]

    return (
        <>
            {/* Zen Garden Hero */}
            <section className="relative overflow-hidden bg-gradient-to-b from-green-100/50 via-background to-background pt-32 pb-20 sm:pt-40 sm:pb-28 dark:from-green-900/20">
                <div className="absolute inset-0.5 animate-pulse-slow bg-[url('https://www.transparenttextures.com/patterns/zen-waves.png')] opacity-[0.03] dark:opacity-[0.02]"></div>
                <div className="container mx-auto px-6 lg:px-8 text-center">
                    <div className="max-w-4xl mx-auto">
                        <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse-slow">
                           <HeroIcon className="w-12 h-12 text-primary" />
                        </div>
                        <p className="font-semibold text-primary">A Holistic Approach to Wellness</p>
                        <h1 className="font-headline text-5xl sm:text-6xl lg:text-7xl font-black text-foreground mt-4" style={{ lineHeight: 1.1 }}>
                           Find Your Natural Flow
                        </h1>
                        <p className="mt-6 text-lg sm:text-xl max-w-2xl mx-auto text-muted-foreground">
                           {buddy.longDescription}
                        </p>
                        <div className="mt-10">
                            <Button size="lg" className="rounded-full text-lg py-7 px-10 shadow-lg" asChild>
                               <Link href={`/checkout?buddy=${encodeURIComponent(buddy.title)}&price=$300`}>
                                    Begin Your Wellness Journey
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

             {/* Daily Routine Timeline */}
            <section className="py-20 sm:py-28 bg-background">
                 <div className="container mx-auto px-6 lg:px-8">
                     <div className="mx-auto max-w-2xl text-center mb-16">
                        <h2 className="text-base font-semibold leading-7 text-primary">Your Daily Rhythm</h2>
                        <p className="mt-2 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                           A Day in Sync With You
                        </p>
                    </div>
                    <div className="relative mt-12">
                        {/* The vertical line */}
                        <div className="absolute left-1/2 -ml-px w-0.5 h-full bg-border" aria-hidden="true"></div>
                        {timelineItems.map((item, index) => {
                            const Icon = iconMap[item.icon];
                            const isLeft = index % 2 === 0;
                            return (
                                <div key={item.title} className="relative mb-12">
                                    <div className="flex items-center justify-center">
                                        <div className="absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center ring-8 ring-background z-10">
                                            <Icon className="w-5 h-5"/>
                                        </div>
                                    </div>
                                    <div className={`mt-6 sm:mt-0 ${isLeft ? 'sm:mr-auto' : 'sm:ml-auto'} w-full sm:w-1/2 ${isLeft ? 'sm:pr-8' : 'sm:pl-8'}`}>
                                        <Card className={`p-6 shadow-lg hover:shadow-primary/10 transition-shadow duration-300 ${isLeft ? 'text-right' : 'text-left'}`}>
                                            <p className="font-bold text-lg text-primary">{item.title}</p>
                                            <p className="text-muted-foreground mt-2">{item.description}</p>
                                        </Card>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                 </div>
            </section>

             {/* Wellness Wheel */}
             <section className="py-20 sm:py-28 bg-muted/50">
                 <div className="container mx-auto px-6 lg:px-8">
                     <div className="mx-auto max-w-2xl text-center mb-16">
                        <h2 className="text-base font-semibold leading-7 text-primary">Core Pillars</h2>
                        <p className="mt-2 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                           The Wellness Wheel
                        </p>
                        <p className="mt-6 text-lg leading-8 text-muted-foreground">
                            Holistic tools to balance every aspect of your well-being.
                        </p>
                    </div>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                        {buddy.secondaryFeatures.map((feature) => {
                             const Icon = iconMap[feature.icon];
                             return (
                                <Card key={feature.title} className="p-6 text-center group hover:border-primary/30 transition-all bg-background/50 hover:bg-background">
                                    <CardHeader className="p-0 items-center">
                                        <div className="mb-4 bg-primary/10 text-primary rounded-full p-4 w-fit transition-transform duration-300 group-hover:scale-110">
                                            <Icon className="h-8 w-8" />
                                        </div>
                                        <CardTitle>{feature.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent className="p-0 mt-4">
                                         <p className="text-base text-muted-foreground">{feature.description}</p>
                                    </CardContent>
                                </Card>
                            )
                        })}
                    </div>
                 </div>
            </section>

             {/* Final CTA */}
            <section className="py-20 sm:py-28 bg-background">
                <div className="container mx-auto px-6 lg:px-8 text-center">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                            Ready to Feel Your Best?
                        </h2>
                        <p className="mt-6 text-lg leading-8 text-muted-foreground">
                           Start your journey to a healthier, happier you. Your Health & Wellness Buddy is waiting.
                        </p>
                         <div className="mt-10">
                            <Button size="lg" className="rounded-full text-lg py-7 px-10 shadow-lg bg-gradient-to-r from-primary to-green-400 text-primary-foreground" asChild>
                               <Link href={`/checkout?buddy=${encodeURIComponent(buddy.title)}&price=$300`}>
                                    Start Fresh Today
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

    