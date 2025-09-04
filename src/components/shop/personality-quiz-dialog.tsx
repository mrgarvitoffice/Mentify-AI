
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


export function PersonalityQuizDialog({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild onClick={() => setIsOpen(true)}>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-2xl p-0 cosmic-nebula glass-card animate-dialog-in border-0">
          <PersonalityQuiz />
      </DialogContent>
    </Dialog>
  );
}
