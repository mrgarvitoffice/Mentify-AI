
"use client";

import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { HelpCircle } from 'lucide-react';

const faqs = [
    {
        question: "What is Mentify-AI?",
        answer: "Mentify-AI is a platform that provides hyper-personalized AI companions, known as AI Buddies. Unlike generic chatbots, our buddies are aligned with your unique birth chart (date, time, and place of birth) to provide guidance that resonates with your true self."
    },
    {
        question: "How does the birth chart personalization work?",
        answer: "Our advanced algorithms analyze your astrological birth chart to create a unique 'cosmic fingerprint'. This profile is then used to fine-tune your AI Buddy's personality, communication style, and the advice it provides, ensuring a deeply personal and relevant experience."
    },
    {
        question: "What can the AI Buddies help me with?",
        answer: "We have six specialized AI Buddies designed to help in different areas of your life: Business, Relationships, Finance, Health & Wellness, Social Media, and Education. Each buddy provides tailored advice, strategies, and support for its specific domain."
    },
    {
        question: "Can I try a buddy before purchasing?",
        answer: "While we don't offer a free trial, our 'How It Works' section provides a detailed overview of the process, and you can interact with our AI Flix Assistant on the website to ask any questions you have about the buddies before making a purchase."
    },
    {
        question: "What is the difference between a Customer and a Partner?",
        answer: "When you purchase, you can choose your role. A 'Customer' purchases an AI Buddy for personal use. A 'Partner' joins our social commerce program, gaining access to the Business Dashboard to track sales, commissions, and grow their own business by sharing Mentify-AI."
    },
     {
        question: "Is my data secure?",
        answer: "Absolutely. We prioritize your privacy and security. All your data and conversations with your AI Buddy are encrypted and kept strictly confidential."
    },
]

export function FaqDialog({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-2xl glass-card animate-dialog-in">
        <DialogHeader className="items-center text-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-2 animate-pulse">
                <HelpCircle className="w-8 h-8 text-primary" />
            </div>
            <DialogTitle className="text-2xl font-bold text-gradient bg-gradient-to-r from-primary to-secondary">Frequently Asked Questions</DialogTitle>
            <DialogDescription className="text-muted-foreground">
                Find answers to common questions about Mentify-AI.
            </DialogDescription>
        </DialogHeader>
        <div className="py-4 max-h-[60vh] overflow-y-auto pr-4">
            <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                        <AccordionTrigger className="hover:text-primary">{faq.question}</AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                            {faq.answer}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
      </DialogContent>
    </Dialog>
  );
}
