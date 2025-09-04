
'use client';
import type { Buddy } from '@/lib/buddies-data';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { iconMap } from '@/lib/buddies-data';

export default function RelationshipBuddyPage({ buddy }: { buddy: Buddy }) {
    return (
        <>
            {/* Alternating Hero */}
            <section className="relative overflow-hidden bg-background pt-32 pb-20 sm:pt-40 sm:pb-28">
                 <div className="container mx-auto px-6 lg:px-8">
                     <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="text-center lg:text-left">
                            <p className="font-semibold text-primary">For Deeper Connections</p>
                            <h1 className="font-headline text-5xl sm:text-6xl lg:text-7xl font-black text-foreground mt-4" style={{ lineHeight: 1.1 }}>
                                Master the Art of Connection
                            </h1>
                            <p className="mt-6 text-lg sm:text-xl max-w-xl mx-auto lg:mx-0 text-muted-foreground">
                                {buddy.longDescription}
                            </p>
                            <div className="mt-10">
                                <Button size="lg" className="rounded-full text-lg py-7 px-10 shadow-lg" asChild>
                                   <Link href={`/checkout?buddy=${encodeURIComponent(buddy.title)}&price=$300`}>
                                        Start Connecting
                                    </Link>
                                </Button>
                            </div>
                        </div>
                        <div className="relative flex justify-center items-center">
                            <div className="absolute w-[500px] h-[500px] bg-secondary/10 rounded-full blur-3xl -z-10 animate-pulse-slow"></div>
                            <Image
                                src={buddy.heroImage}
                                alt={`${buddy.title} Hero`}
                                width={600}
                                height={600}
                                className="rounded-2xl shadow-2xl"
                                data-ai-hint="happy couple"
                             />
                        </div>
                    </div>
                 </div>
            </section>

             {/* Zig-Zag Features */}
            <section className="py-20 sm:py-28 bg-muted/50">
                <div className="container mx-auto px-6 lg:px-8 space-y-24">
                {buddy.features.map((feature, index) => {
                    const Icon = iconMap[feature.icon];
                    const isReversed = index % 2 !== 0;
                    return (
                        <div key={feature.title} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                            <div className={`relative ${isReversed ? 'md:order-2' : ''}`}>
                                 <div className="absolute -inset-6 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl blur-xl"></div>
                                 <Image
                                    src={`https://picsum.photos/seed/${feature.title}/800/600`}
                                    alt={feature.title}
                                    width={800}
                                    height={600}
                                    className="relative rounded-2xl shadow-xl"
                                    data-ai-hint="people talking"
                                />
                            </div>
                             <div className={`max-w-lg ${isReversed ? 'md:order-1' : ''}`}>
                                <div className="p-3 bg-primary/10 rounded-lg inline-block mb-4">
                                    <Icon className="w-8 h-8 text-primary" />
                                </div>
                                <h3 className="text-3xl font-bold text-foreground">{feature.title}</h3>
                                <p className="mt-4 text-lg text-muted-foreground">{feature.description}</p>
                            </div>
                        </div>
                    );
                })}
                </div>
            </section>
            
            {/* Testimonials */}
             <section className="py-20 sm:py-28 bg-background">
                <div className="container mx-auto px-6 lg:px-8">
                     <div className="mx-auto max-w-2xl text-center mb-16">
                        <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                           Success Stories
                        </h2>
                        <p className="mt-6 text-lg leading-8 text-muted-foreground">
                            See how the {buddy.title} has helped others build meaningful relationships.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                         {buddy.testimonials.map((testimonial) => (
                            <Card key={testimonial.author} className="p-8">
                                <CardContent className="p-0">
                                    <blockquote className="text-lg text-foreground leading-8">"{testimonial.quote}"</blockquote>
                                    <footer className="mt-6">
                                        <p className="font-semibold text-foreground">{testimonial.author}</p>
                                    </footer>
                                </CardContent>
                            </Card>
                         ))}
                    </div>
                </div>
            </section>

             {/* Final CTA */}
             <section className="py-20 sm:py-28 bg-primary/5">
                <div className="container mx-auto px-6 lg:px-8 text-center">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                            Ready to Deepen Your Connections?
                        </h2>
                        <p className="mt-6 text-lg leading-8 text-muted-foreground">
                           Start building the fulfilling relationships you deserve. Your Relationship Buddy is here to guide you.
                        </p>
                         <div className="mt-10">
                            <Button size="lg" className="rounded-full text-lg py-7 px-10 shadow-lg" asChild>
                               <Link href={`/checkout?buddy=${encodeURIComponent(buddy.title)}&price=$300`}>
                                    Start Connecting Now
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
