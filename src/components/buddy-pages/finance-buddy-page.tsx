
'use client';
import type { Buddy } from '@/lib/buddies-data';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ArrowUpRight, Check } from 'lucide-react';
import { iconMap } from '@/lib/buddies-data';

export default function FinanceBuddyPage({ buddy }: { buddy: Buddy }) {
    return (
        <>
            {/* Luxury Hero */}
            <section className="relative overflow-hidden bg-background pt-32 pb-20 sm:pt-40 sm:pb-28">
                <div className="absolute inset-0 bg-grid-slate-900/[0.04] bg-[bottom_1px_center] dark:bg-grid-slate-400/[0.05] dark:bg-bottom mask-gradient"></div>
                 <div className="container mx-auto px-6 lg:px-8 text-center">
                    <div className="max-w-4xl mx-auto">
                         <p className="font-semibold text-primary">For Wealth Builders</p>
                         <h1 className="font-headline text-5xl sm:text-6xl lg:text-7xl font-black text-foreground mt-4" style={{ lineHeight: 1.1 }}>
                           Clarity and Confidence for Your Financial Future
                        </h1>
                        <p className="mt-6 text-lg sm:text-xl max-w-2xl mx-auto text-muted-foreground">
                           {buddy.longDescription}
                        </p>
                         <div className="mt-10">
                            <Button size="lg" className="rounded-full text-lg py-7 px-10 shadow-lg" asChild>
                               <Link href={`/checkout?buddy=${encodeURIComponent(buddy.title)}&price=$300`}>
                                    Start Building Wealth
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

             {/* Glassmorphism Cards */}
            <section className="py-20 sm:py-28 bg-muted/30">
                <div className="container mx-auto px-6 lg:px-8">
                     <div className="mx-auto max-w-2xl text-center mb-16">
                        <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                           A Smarter Way to Manage Your Money
                        </h2>
                        <p className="mt-6 text-lg leading-8 text-muted-foreground">
                            Personalized tools and insights to help you achieve your financial goals.
                        </p>
                    </div>
                     <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                        {buddy.features.map((feature) => {
                            const Icon = iconMap[feature.icon];
                             return (
                                <Card key={feature.title} className="p-6 group hover:border-primary/30 transition-all glass-card">
                                    <CardHeader className="p-0">
                                        <div className="mb-4 bg-primary/10 text-primary rounded-lg p-3 w-fit">
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

            {/* Strengths Section */}
            <section className="py-20 sm:py-28 bg-background">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                             <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                                Your All-in-One Financial Command Center
                            </h2>
                            <p className="mt-6 text-lg leading-8 text-muted-foreground">
                                From daily budgeting to long-term retirement planning, get a clear view of your entire financial life and make decisions with confidence.
                            </p>
                        </div>
                         <div className="flex flex-col gap-4">
                            {buddy.strengths.slice(0, 4).map((strength) => (
                                <div key={strength} className="flex items-center gap-3 p-4 rounded-lg bg-muted/50">
                                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                                    <span className="font-medium text-foreground">{strength}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

             {/* Final CTA */}
             <section className="py-20 sm:py-28 bg-muted/30">
                <div className="container mx-auto px-6 lg:px-8 text-center">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                            Ready to Take Control of Your Finances?
                        </h2>
                        <p className="mt-6 text-lg leading-8 text-muted-foreground">
                           Stop worrying about money and start building the life you want. Your Finance Buddy is ready to help.
                        </p>
                         <div className="mt-10">
                            <Button size="lg" className="rounded-full text-lg py-7 px-10 shadow-lg" asChild>
                               <Link href={`/checkout?buddy=${encodeURIComponent(buddy.title)}&price=$300`}>
                                    Start Your Financial Journey
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
