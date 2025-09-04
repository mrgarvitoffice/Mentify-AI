'use client';

import type { Buddy } from '@/lib/buddies-data';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export default function EducationBuddyPage({ buddy }: { buddy: Buddy }) {
    return (
        <>
            {/* Chalkboard Hero */}
            <section className="relative overflow-hidden bg-[#2c3e50] text-white pt-32 pb-20 sm:pt-40 sm:pb-28">
                 <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/subtle-grunge.png')]"></div>
                 <div className="container mx-auto px-6 lg:px-8 text-center">
                    <div className="max-w-4xl mx-auto">
                        <p className="font-semibold text-primary/80">Your Personal AI Tutor</p>
                         <h1 className="font-headline text-5xl sm:text-6xl lg:text-7xl font-black mt-4" style={{ lineHeight: 1.1, fontFamily: "'Caveat', cursive" }}>
                           What problem do you want to solve today?
                        </h1>
                        <p className="mt-6 text-lg sm:text-xl max-w-2xl mx-auto text-white/80">
                           {buddy.longDescription}
                        </p>
                         <div className="mt-10">
                            <Button size="lg" variant="outline" className="rounded-full text-lg py-7 px-10 shadow-lg text-white border-white/50 hover:bg-white hover:text-black" asChild>
                               <Link href={`/checkout?buddy=${encodeURIComponent(buddy.title)}&price=$300`}>
                                    Start Learning
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Learning Paths */}
            <section className="py-20 sm:py-28 bg-background">
                <div className="container mx-auto px-6 lg:px-8">
                     <div className="mx-auto max-w-2xl text-center mb-16">
                        <h2 className="text-base font-semibold leading-7 text-primary">Curriculum</h2>
                        <p className="mt-2 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                           Personalized Learning Paths
                        </p>
                        <p className="mt-6 text-lg leading-8 text-muted-foreground">
                            Master any skill with a curriculum that adapts to your learning style and pace.
                        </p>
                    </div>
                     <div className="relative mt-12">
                         <div className="absolute left-4 top-0 h-full w-px bg-border" aria-hidden="true"></div>
                         <div className="relative flex flex-col gap-8">
                            {buddy.features.map((feature, index) => {
                                const Icon = feature.icon;
                                return (
                                 <div key={feature.title} className="relative pl-12">
                                     <div className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground ring-8 ring-background">
                                         <Icon className="h-4 w-4" aria-hidden="true" />
                                     </div>
                                     <div className="pl-4">
                                         <h3 className="text-xl font-semibold text-foreground">{feature.title}</h3>
                                         <p className="mt-1 text-muted-foreground">{feature.description}</p>
                                     </div>
                                 </div>
                                )
                            })}
                         </div>
                    </div>
                </div>
            </section>

             {/* Knowledge Hub Accordion */}
             <section className="py-20 sm:py-28 bg-muted/50">
                 <div className="container mx-auto px-6 lg:px-8">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="max-w-lg">
                             <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                                Your Knowledge Hub
                            </h2>
                            <p className="mt-6 text-lg leading-8 text-muted-foreground">
                                From creative brainstorming to critical thinking, sharpen your mind with our toolkit.
                            </p>
                        </div>
                        <div className="rounded-lg border bg-background p-4 shadow-lg">
                           <Accordion type="single" collapsible className="w-full">
                                {buddy.secondaryFeatures.map((feature, index) => {
                                    const Icon = feature.icon
                                    return (
                                     <AccordionItem key={feature.title} value={`item-${index}`}>
                                         <AccordionTrigger className="hover:text-primary font-semibold text-lg">
                                             <div className="flex items-center gap-3">
                                                 <Icon className="w-5 h-5 text-primary" />
                                                 {feature.title}
                                             </div>
                                         </AccordionTrigger>
                                         <AccordionContent className="text-muted-foreground pl-8">
                                             {feature.description}
                                         </AccordionContent>
                                     </AccordionItem>
                                    )
                                })}
                            </Accordion>
                        </div>
                    </div>
                 </div>
            </section>

             {/* Final CTA */}
            <section className="py-20 sm:py-28 bg-background">
                <div className="container mx-auto px-6 lg:px-8 text-center">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                           Ready to Unlock Your Potential?
                        </h2>
                        <p className="mt-6 text-lg leading-8 text-muted-foreground">
                          Stop wondering and start knowing. Your Education Buddy is ready to guide you.
                        </p>
                         <div className="mt-10">
                            <Button size="lg" className="rounded-full text-lg py-7 px-10 shadow-lg" asChild>
                               <Link href={`/checkout?buddy=${encodeURIComponent(buddy.title)}&price=$300`}>
                                    Start Your First Lesson
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
            {/* Add Caveat font for the chalkboard effect */}
            <style jsx global>{`
              @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap');
            `}</style>
        </>
    );
}
