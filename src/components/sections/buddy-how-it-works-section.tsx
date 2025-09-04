
import type { Buddy } from '@/lib/buddies-data';
import { Settings } from 'lucide-react';

export default function BuddyHowItWorksSection({ buddy }: { buddy: Buddy }) {
    return (
        <section className="py-24 sm:py-32 bg-muted/50">
            <div className="container mx-auto px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center mb-16">
                     <div className="flex justify-center mb-4">
                        <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center animate-pulse">
                            <Settings className="w-10 h-10 text-primary" />
                        </div>
                    </div>
                    <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">How It Works</h2>
                    <p className="mt-6 text-lg leading-8 text-muted-foreground">
                        A simple three-step journey to personalized guidance with your {buddy.title.split(' ')[0]} Buddy.
                    </p>
                </div>
                <div className="relative mt-16">
                    <div className="absolute left-1/2 top-4 hidden h-full w-px bg-border md:block" aria-hidden="true"></div>
                    <div className="space-y-12 md:space-y-0">
                        {buddy.howItWorks.map((step, index) => {
                            const isEven = index % 2 === 0;
                            return (
                                <div key={step.title} className="md:grid md:grid-cols-2 md:gap-8 items-center">
                                    <div className={`flex items-center gap-4 ${isEven ? 'md:pr-8' : 'md:pl-8 md:col-start-2'}`}>
                                        <div className="relative">
                                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground ring-8 ring-background">
                                                <step.icon className="h-6 w-6" aria-hidden="true" />
                                            </div>
                                        </div>
                                        <div className="flex-grow">
                                            <h3 className="text-xl font-semibold text-foreground">{step.title}</h3>
                                            <p className="mt-1 text-muted-foreground">{step.description}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
