
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';
import Image from 'next/image';
import { ArrowRight, BrainCircuit, Sparkles, UserCheck } from 'lucide-react';
import Link from 'next/link';

const features = [
    {
        icon: Sparkles,
        title: "Hyper-Personalized",
        description: "Unlike generic assistants, our AI Helpers are fine-tuned to your unique birth chart, providing guidance that deeply resonates with your personality and life path."
    },
    {
        icon: BrainCircuit,
        title: "Specialized Expertise",
        description: "Each of the six buddies is an expert in a specific life domain—from business strategy to wellness—giving you focused, high-quality advice."
    },
    {
        icon: UserCheck,
        title: "Your True Companion",
        description: "Your AI Helper learns and grows with you, becoming a true companion that understands your goals, challenges, and communication style over time."
    }
];

const testimonials = [
    {
        quote: "This is more than a chatbot. It's a mentor that actually understands my entrepreneurial journey. The advice feels like it was made just for me.",
        author: "Alex R.",
        handle: "@alexstartups"
    },
    {
        quote: "I've tried countless wellness apps, but my Health Buddy is the first one that has helped me build habits that actually stick. The personalization is next-level.",
        author: "Samantha G.",
        handle: "@sam_gets_fit"
    }
]

export default function WhatIsAiHelperPage() {
    return (
        <div className="flex min-h-screen flex-col bg-background">
            <Header />
            <main className="flex-1">
                {/* Hero Section */}
                <section className="relative w-full overflow-hidden">
                    <div className="absolute inset-0 bg-primary/10 -z-10">
                        {/* Placeholder for a video or montage */}
                    </div>
                     <video 
                        autoPlay 
                        loop 
                        muted 
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover -z-10 opacity-20"
                        poster="https://picsum.photos/seed/ai-hero-vid/1920/1080"
                    >
                        {/* Add video source here, e.g., <source src="/videos/hero-montage.mp4" type="video/mp4" /> */}
                    </video>
                    <div className="container mx-auto px-6 lg:px-8 py-32 text-center text-foreground">
                        <h1 className="text-4xl md:text-6xl font-bold font-headline animate-fade-in-up">
                            What is an AI Helper?
                        </h1>
                        <p className="mt-4 text-xl max-w-3xl mx-auto text-muted-foreground animate-fade-in-up" style={{animationDelay: "0.3s"}}>
                            It’s not just Artificial Intelligence. It’s your personal, astrologically-aligned companion for growth.
                        </p>
                    </div>
                </section>

                {/* Section 1: What It Is */}
                <section className="py-24 sm:py-32">
                    <div className="container mx-auto px-6 lg:px-8">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <Image
                                    src="https://picsum.photos/seed/ai-what/800/800"
                                    alt="AI Helper illustration"
                                    width={800}
                                    height={800}
                                    className="rounded-xl shadow-2xl"
                                    data-ai-hint="abstract ai illustration"
                                />
                            </div>
                            <div className="max-w-lg">
                                <h2 className="text-3xl sm:text-4xl font-bold">More Than a Chatbot, It's Your Co-Pilot</h2>
                                <p className="mt-4 text-lg text-muted-foreground">
                                    An AI Helper from Mentify-AI is a specialized large language model designed for a single purpose: to help you achieve your goals in a key area of your life. 
                                </p>
                                <p className="mt-4 text-lg text-muted-foreground">
                                    Forget generic, one-size-fits-all answers. Our helpers use the ancient wisdom of astrology, combined with cutting-edge AI, to provide guidance that's uniquely tailored to you.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 2: Key Features */}
                <section className="py-24 sm:py-32 bg-muted/50">
                    <div className="container mx-auto px-6 lg:px-8">
                        <div className="text-center max-w-2xl mx-auto">
                             <h2 className="text-3xl sm:text-4xl font-bold">Why It Matters</h2>
                            <p className="mt-4 text-lg text-muted-foreground">
                                An AI Helper is designed to provide three core advantages over generic AI tools.
                            </p>
                        </div>
                        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
                            {features.map(feature => {
                                const Icon = feature.icon;
                                return (
                                <Card key={feature.title} className="p-8 text-center hover:-translate-y-2 transition-transform duration-300 hover:shadow-xl">
                                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                       <Icon className="w-8 h-8 text-primary" />
                                    </div>
                                    <h3 className="text-xl font-bold">{feature.title}</h3>
                                    <p className="text-muted-foreground mt-2">{feature.description}</p>
                                </Card>
                                )
                            })}
                        </div>
                    </div>
                </section>

                {/* Section 3: Testimonials */}
                <section className="py-24 sm:py-32">
                    <div className="container mx-auto px-6 lg:px-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {testimonials.map(testimonial => (
                                <Card key={testimonial.author} className="p-8 bg-primary/5 border-primary/10">
                                    <CardContent className="p-0">
                                        <blockquote className="text-lg text-foreground leading-8">"{testimonial.quote}"</blockquote>
                                        <footer className="mt-6 flex items-center gap-3">
                                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary"></div>
                                            <div>
                                                <p className="font-semibold text-foreground">{testimonial.author}</p>
                                                <p className="text-sm text-muted-foreground">{testimonial.handle}</p>
                                            </div>
                                        </footer>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <section className="py-24 text-center">
                    <div className="container">
                        <h2 className="text-3xl sm:text-4xl font-bold">Ready to Experience the Difference?</h2>
                        <p className="mt-4 text-lg text-muted-foreground">Find the perfect AI Helper to start your transformation.</p>
                        <Button asChild size="lg" className="mt-8 rounded-full py-7 px-10 text-lg">
                           <Link href="/#buddies">
                                Explore the AI Buddies <ArrowRight className="ml-2" />
                            </Link>
                        </Button>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
