
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';
import Image from 'next/image';
import { ArrowUpRight, CheckCircle, BarChart, Rocket, TrendingUp, Users } from 'lucide-react';
import React from 'react';

const caseStudies = [
    {
        client: "Stellar Solutions Inc.",
        title: "Boosting Productivity by 40% with the Business Mentor Buddy",
        problem: "Stellar Solutions was facing a productivity plateau. Their teams were working hard but not smart, leading to burnout and missed deadlines.",
        solution: "We deployed the Business Motivator & Mentor buddy. It provided personalized productivity hacks, optimized workflows based on individual strengths (identified via their birth charts), and delivered daily strategic motivation.",
        results: [
            { metric: "40%", label: "Increase in Team Productivity", icon: TrendingUp },
            { metric: "25%", label: "Reduction in Project Overruns", icon: BarChart },
            { metric: "95%", label: "Leadership Confidence Score", icon: Rocket },
        ],
        image: "https://picsum.photos/seed/case-1/1200/800",
        dataAiHint: "team working office"
    },
    {
        client: "ConnectWell Corp.",
        title: "Transforming Company Culture with the Relationship Buddy",
        problem: "ConnectWell's internal communication was suffering, leading to low morale and high employee turnover. Cross-departmental collaboration was almost non-existent.",
        solution: "The Relationship & Social Buddy was introduced to all employees. It provided tools for empathy development, communication coaching, and conflict resolution, fostering a more connected and positive work environment.",
        results: [
            { metric: "50%", label: "Decrease in Employee Turnover", icon: Users },
            { metric: "80%", label: "Improvement in Inter-Team Collaboration", icon: Users },
            { metric: "9.2/10", label: "Employee Satisfaction Score", icon: Users },
        ],
        image: "https://picsum.photos/seed/case-2/1200/800",
        dataAiHint: "happy diverse team"
    }
];

const AnimatedCounter = ({ to, icon: Icon }: { to: string, icon: React.ElementType }) => {
    // This is a placeholder. A real implementation would use a library like react-countup.
    return (
        <div className="text-center p-6 bg-background rounded-lg shadow-inner">
            <Icon className="h-12 w-12 text-primary mx-auto mb-4" />
            <div className="text-5xl font-bold text-primary">{to}</div>
            <p className="text-muted-foreground mt-2">{/* Label is rendered outside */}</p>
        </div>
    );
};

export default function CaseStudiesPage() {
    return (
        <div className="flex min-h-screen flex-col bg-background">
            <Header />
            <main className="flex-1">
                {/* Hero */}
                <section className="py-24 sm:py-32 text-center bg-muted/50">
                    <div className="container">
                        <h1 className="text-4xl sm:text-6xl font-bold font-headline">Success Stories</h1>
                        <p className="mt-4 text-lg max-w-2xl mx-auto text-muted-foreground">
                            See how Mentify-AI is making a real-world impact for our clients.
                        </p>
                    </div>
                </section>

                {caseStudies.map((study, index) => (
                    <section key={study.title} className={index % 2 === 0 ? "py-24 bg-background" : "py-24 bg-muted/50"}>
                        <div className="container mx-auto px-6 lg:px-8">
                            <div className="grid lg:grid-cols-2 gap-12 items-center">
                                <div className={index % 2 === 0 ? "lg:order-2" : ""}>
                                    <Image
                                        src={study.image}
                                        alt={study.title}
                                        width={1200}
                                        height={800}
                                        className="rounded-xl shadow-2xl object-cover"
                                        data-ai-hint={study.dataAiHint}
                                    />
                                </div>
                                <div className={index % 2 === 0 ? "lg:order-1" : ""}>
                                    <p className="font-semibold text-primary">{study.client}</p>
                                    <h2 className="text-3xl font-bold mt-2">{study.title}</h2>
                                    
                                    <div className="mt-8 space-y-6">
                                        <div>
                                            <h3 className="font-bold text-xl mb-2">The Problem</h3>
                                            <p className="text-muted-foreground">{study.problem}</p>
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-xl mb-2">Our Solution</h3>
                                            <p className="text-muted-foreground">{study.solution}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Results Section */}
                            <div className="mt-16">
                                <h3 className="text-3xl font-bold text-center mb-8">Results</h3>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                    {study.results.map(result => (
                                        <Card key={result.label} className="text-center p-6 border-primary/20 hover:bg-primary/5 transition-colors">
                                            <result.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                                            <p className="text-5xl font-bold text-primary">{result.metric}</p>
                                            <p className="text-muted-foreground mt-2">{result.label}</p>
                                        </Card>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>
                ))}
            </main>
            <Footer />
        </div>
    );
}
