
'use client';

import React, { useState, useTransition } from 'react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import {
  recommendBuddy,
  type PersonalityQuizOutput,
} from '@/ai/flows/personality-quiz-flow';
import { Loader2, Sparkles, CheckCircle } from 'lucide-react';
import { ShopDialog } from './shop-dialog';
import { Card, CardContent } from '../ui/card';

const questions = [
  {
    question: "What's your primary goal right now?",
    options: [
      'Scaling my business or side hustle.',
      'Improving my relationships with others.',
      'Building my personal brand online.',
      'Learning a new skill or solving a complex problem.',
      'Getting my finances in order.',
      'Focusing on my health and wellness.',
    ],
  },
  {
    question: 'How do you prefer to spend your free time?',
    options: [
      'Networking and brainstorming new ideas.',
      'Spending quality time with loved ones.',
      'Creating content and engaging with my online community.',
      'Reading, taking courses, or working on a challenging puzzle.',
      'Analyzing market trends or planning investments.',
      'Exercising, meal prepping, or meditating.',
    ],
  },
  {
    question: 'Which of these best describes your personality?',
    options: [
      'Ambitious and results-driven.',
      'Empathetic and a great listener.',
      'Creative and expressive.',
      'Curious and analytical.',
      'Practical and organized.',
      'Disciplined and mindful.',
    ],
  },
];

export function PersonalityQuiz() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [isPending, startTransition] = useTransition();
  const [result, setResult] = useState<PersonalityQuizOutput | null>(null);

  const progress = ((currentStep + 1) / (questions.length + 1)) * 100;

  const handleAnswer = (answer: string) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      startTransition(async () => {
        const res = await recommendBuddy({ answers: newAnswers });
        setResult(res);
        setCurrentStep(currentStep + 1);
      });
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setAnswers([]);
    setResult(null);
  };

  return (
    <Card className="max-w-2xl mx-auto p-6 sm:p-8 lg:p-12 glass-card animate-dialog-in">
        <CardContent className="p-0">
            <div className="text-center mb-8">
                <Sparkles className="w-12 h-12 mx-auto text-primary animate-pulse" />
                <h2 className="text-3xl font-bold text-gradient bg-gradient-to-r from-primary to-secondary mt-2">
                    Find Your Perfect AI Buddy
                </h2>
                <p className="text-muted-foreground">
                    Answer a few questions to get a personalized recommendation.
                </p>
            </div>

            <div className="space-y-6">
                <Progress value={progress} className="w-full h-2 bg-primary/20" />
                
                {currentStep < questions.length ? (
                    <div className="min-h-[250px]">
                    <h4 className="font-bold text-lg mb-4 text-center">
                        {questions[currentStep].question}
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {questions[currentStep].options.map((option) => (
                        <Button
                            key={option}
                            variant="outline"
                            className="h-auto py-3 whitespace-normal hover:bg-primary/10 hover:border-primary transition-all duration-300"
                            onClick={() => handleAnswer(option)}
                        >
                            {option}
                        </Button>
                        ))}
                    </div>
                    </div>
                ) : (
                    <div className="text-center min-h-[250px] flex flex-col items-center justify-center">
                    {isPending && (
                        <>
                        <Loader2 className="w-16 h-16 text-primary animate-spin" />
                        <p className="mt-4 text-muted-foreground">Analyzing your answers...</p>
                        </>
                    )}
                    {result && (
                        <div className="animate-fade-in-up">
                            <CheckCircle className="w-16 h-16 text-green-500 mx-auto" />
                            <h3 className="mt-4 text-xl font-bold">We recommend the...</h3>
                            <h2 className="text-3xl font-bold text-gradient bg-gradient-to-r from-primary to-secondary my-2">{result.recommendedBuddy}</h2>
                            <p className="text-muted-foreground">{result.reasoning}</p>
                            <div className='mt-8 w-full flex flex-col sm:flex-row gap-2 justify-center'>
                                <Button onClick={handleReset} variant="outline" className="">
                                    Retake Quiz
                                </Button>
                                <ShopDialog initialBuddy={result.recommendedBuddy}>
                                    <Button className="group relative rounded-md bg-gradient-to-r from-primary to-yellow-500 font-bold text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-primary/40">
                                        <span className="relative">Shop Buddies</span>
                                    </Button>
                                </ShopDialog>
                            </div>
                        </div>
                    )}
                    </div>
                )}
            </div>
        </CardContent>
    </Card>
  );
}
