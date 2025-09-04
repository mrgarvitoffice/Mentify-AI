
'use client';

import React, { useState } from 'react';
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
  const [isOpen, setIsOpen] = useState(false);
  
  const trigger = React.isValidElement(children)
    ? React.cloneElement(children, { onClick: () => setIsOpen(true) } as React.HTMLAttributes<HTMLElement>)
    : null;

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      {trigger && <DialogTrigger asChild>{trigger}</DialogTrigger>}
      <DialogContent className="sm:max-w-2xl p-0 cosmic-nebula glass-card animate-dialog-in border-0">
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
      </DialogContent>
    </Dialog>
  );
}
