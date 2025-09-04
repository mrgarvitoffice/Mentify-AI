
'use client';

import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from '@/components/ui/dialog';
import { PersonalityQuiz } from './personality-quiz';
import { Sparkles } from 'lucide-react';


export function PersonalityQuizDialog({ children }: { children: React.ReactNode }) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-2xl p-0 animate-dialog-in overflow-hidden !rounded-2xl">
           <div className="relative z-10 p-1 bg-gradient-to-b from-primary/50 to-secondary/50 rounded-xl animate-border-spin">
             <div className="bg-background rounded-lg">
                <DialogHeader className="text-center items-center pt-8">
                    <Sparkles className="w-12 h-12 mx-auto text-primary animate-pulse" />
                    <DialogTitle className="text-3xl font-bold text-gradient bg-gradient-to-r from-primary to-secondary mt-2">
                        Find Your Perfect AI Buddy
                    </DialogTitle>
                    <DialogDescription className="text-muted-foreground">
                        Answer a few questions to get a personalized recommendation.
                    </DialogDescription>
                </DialogHeader>
                <PersonalityQuiz />
             </div>
           </div>
      </DialogContent>
    </Dialog>
  );
}
