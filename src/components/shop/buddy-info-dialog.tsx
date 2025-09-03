
"use client";

import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
  DialogFooter,
} from '@/components/ui/dialog';
import { TrendingUp, Heart, Wallet, ShieldPlus, Share2, GraduationCap, CheckCircle2, type LucideIcon } from 'lucide-react';

const icons: { [key: string]: LucideIcon } = {
  TrendingUp,
  Heart,
  Wallet,
  ShieldPlus,
  Share2,
  GraduationCap,
};

const buddyDetails: { [key: string]: { strengths: string[] } } = {
    "Business Motivator & Mentor": { strengths: ["Strategic Planning", "Sales Coaching", "Motivation Boost", "Business Plan Explanations"] },
    "Relationship & Social Buddy": { strengths: ["Communication Skills", "Empathy Development", "Dating & Friendship Advice", "Conflict Resolution"] },
    "Finance & Real Estate Buddy": { strengths: ["Investment Insights", "Savings Strategies", "Real Estate Market Analysis", "Budgeting Help"] },
    "Health & Wellness Buddy": { strengths: ["Custom Fitness Plans", "Holistic Diet Advice", "Mindfulness Practices", "Wellness Tracking"] },
    "Social Media & Branding Buddy": { strengths: ["Content Creation", "Brand Voice Development", "Audience Growth Strategies", "Viral Trend Analysis"] },
    "Problem Solver & Education Buddy": { strengths: ["Skill Acquisition", "Complex Problem-Solving", "Personalized Learning Paths", "Sales Training"] },
};


type Buddy = {
  icon: string;
  title: string;
  description: string;
};

export function BuddyInfoDialog({
  children,
  buddy,
}: {
  children: React.ReactNode;
  buddy: Buddy;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const IconComponent = icons[buddy.icon];
  const details = buddyDetails[buddy.title];

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-lg glass-card border-primary/20">
        <DialogHeader className="items-center text-center p-6 bg-gradient-to-br from-primary/10 to-transparent rounded-t-lg">
          <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-accent/80 to-secondary/80 text-white shadow-lg mb-4">
            {IconComponent && <IconComponent className="h-12 w-12 text-primary" />}
             <div className="absolute -bottom-2 -right-2 bg-background p-1 rounded-full shadow-md">
                <CheckCircle2 className="h-6 w-6 text-green-500" />
            </div>
          </div>
          <DialogTitle className="text-2xl font-bold">{buddy.title}</DialogTitle>
          <DialogDescription className="text-base text-muted-foreground px-4">
            {buddy.description}
          </DialogDescription>
        </DialogHeader>
        <div className="px-6 py-4">
            <h4 className="font-bold text-lg mb-3 text-center">Key Strengths</h4>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm">
                {details.strengths.map(strength => (
                    <li key={strength} className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary/80 flex-shrink-0" />
                        <span className="text-muted-foreground">{strength}</span>
                    </li>
                ))}
            </ul>
        </div>
         <DialogFooter className="p-6 text-center text-xs text-muted-foreground bg-muted/50 rounded-b-lg">
            <p className="w-full">Good to know: All our AI Buddies are hyper-personalized to your birth chart for a truly unique and aligned experience.</p>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
