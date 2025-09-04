
'use client';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';
import { HelpCircle, Search, LifeBuoy } from 'lucide-react';
import React from "react";

const faqs = {
    "General": [
        {
            question: "What is Mentify-AI?",
            answer: "Mentify-AI is a platform that provides hyper-personalized AI companions, known as AI Buddies. Unlike generic chatbots, our buddies are aligned with your unique birth chart (date, time, and place of birth) to provide guidance that resonates with your true self."
        },
        {
            question: "How does the birth chart personalization work?",
            answer: "Our advanced algorithms analyze your astrological birth chart to create a unique 'cosmic fingerprint'. This profile is then used to fine-tune your AI Buddy's personality, communication style, and the advice it provides, ensuring a deeply personal and relevant experience."
        },
    ],
    "Billing": [
        {
            question: "What are the available plans?",
            answer: "We offer several plans, including a Single Buddy plan and a Complete Transformation bundle with all 6 buddies. We also have a premium plan for creators. You can choose between monthly and yearly billing cycles, with a discount for yearly subscriptions."
        },
        {
            question: "What is the difference between a Customer and a Partner?",
            answer: "When you purchase, you can choose your role. A 'Customer' purchases an AI Buddy for personal use. A 'Partner' joins our social commerce program, gaining access to the Business Dashboard to track sales, commissions, and grow their own business by sharing Mentify-AI."
        }
    ],
    "Technical": [
        {
            question: "Is my data secure?",
            answer: "Absolutely. We prioritize your privacy and security. All your data and conversations with your AI Buddy are encrypted and kept strictly confidential."
        },
        {
            question: "Can I access my buddy on multiple devices?",
            answer: "Yes, your Mentify-AI account is accessible from any device with a web browser. Your conversations and buddy's progress are synced across all your devices."
        }
    ]
}

const allFaqs = Object.values(faqs).flat();

export default function FaqPage() {
    const [activeTab, setActiveTab] = React.useState<string>("General");

    return (
        <div className="flex min-h-screen flex-col bg-background">
            <Header />
            <main className="flex-1">
                {/* Hero */}
                <section className="py-24 sm:py-32 text-center bg-muted/30">
                    <div className="container relative z-10">
                        <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
                           <HelpCircle className="w-12 h-12 text-primary" />
                        </div>
                        <h1 className="text-4xl sm:text-6xl font-bold font-headline">Got Questions? We’ve Got Answers.</h1>
                        <p className="mt-4 text-lg max-w-2xl mx-auto text-muted-foreground">
                           Find the information you need about Mentify-AI, our buddies, and your account.
                        </p>
                        <div className="mt-8 max-w-lg mx-auto relative">
                             <Input placeholder="Search questions..." className="pl-12 h-12 rounded-full text-lg" />
                             <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-6 w-6 text-muted-foreground" />
                        </div>
                    </div>
                </section>

                <section className="py-24">
                    <div className="container">
                        <div className="text-center mb-12">
                             {Object.keys(faqs).map(category => (
                                <Button key={category} variant={activeTab === category ? 'default' : 'ghost'} size="lg" className="rounded-full mx-2" onClick={() => setActiveTab(category)}>
                                    {category}
                                </Button>
                            ))}
                        </div>

                        <div className="max-w-3xl mx-auto">
                            <Accordion type="single" collapsible className="w-full">
                                {(faqs[activeTab as keyof typeof faqs] || allFaqs).map((faq, index) => (
                                    <AccordionItem key={index} value={`item-${index}`} className="border-b">
                                        <AccordionTrigger className="text-lg text-left hover:text-primary font-semibold">
                                            {faq.question}
                                        </AccordionTrigger>
                                        <AccordionContent className="text-base text-muted-foreground">
                                            {faq.answer}
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>
                        
                        <div className="text-center mt-20">
                            <h2 className="text-2xl font-bold">Can't find your answer?</h2>
                            <p className="text-muted-foreground mt-2">Our support team is here to help.</p>
                            <Button size="lg" className="mt-4">
                                <LifeBuoy className="mr-2"/>
                                Contact Support
                            </Button>
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </div>
    );
}
