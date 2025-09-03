
'use client';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import {
  TrendingUp,
  Heart,
  Wallet,
  ShieldPlus,
  Share2,
  GraduationCap,
  Users,
  ShoppingCart,
} from 'lucide-react';
import { Badge } from '../ui/badge';
import React from 'react';

const buddies = [
  {
    icon: TrendingUp,
    title: 'Business Motivator & Mentor',
    description: 'Inspires, guides, and explains business strategies. Your 24/7 business coach.',
  },
  {
    icon: Heart,
    title: 'Relationship & Social Buddy',
    description: 'Navigate love, friendship, and emotional connections with confidence.',
  },
  {
    icon: Wallet,
    title: 'Finance & Real Estate Buddy',
    description: 'Your personal guide for investments, savings, and real estate.',
  },
  {
    icon: ShieldPlus,
    title: 'Health & Wellness Buddy',
    description: 'Holistic health advisor for diet, fitness, and wellbeing transformation.',
  },
  {
    icon: Share2,
    title: 'Social Media & Branding Buddy',
    description: 'Build your online identity and grow your digital presence.',
  },
  {
    icon: GraduationCap,
    title: 'Problem Solver & Education Buddy',
    description: 'Your learning companion for skill development and problem-solving.',
  },
];

export function ShopDialog({ children }: { children: React.ReactNode }) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-2xl bg-background/90 backdrop-blur-lg">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-2xl font-bold">
            <ShoppingCart className="text-primary" />
            Shop AI Buddies
          </DialogTitle>
          <DialogDescription>
            Choose your personalized AI companions to start your journey of growth.
          </DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4 max-h-[60vh] overflow-y-auto">
          {buddies.map((buddy) => (
            <div key={buddy.title} className="flex items-start gap-4 p-4 rounded-lg border bg-card/50 hover:bg-muted/50 transition-colors">
              <div className="p-2 bg-primary/10 rounded-full">
                <buddy.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground">{buddy.title}</h4>
                <p className="text-sm text-muted-foreground">{buddy.description}</p>
              </div>
            </div>
          ))}
        </div>
        <DialogFooter>
          <Button type="button" variant="secondary">
            Close
          </Button>
          <Button
              className="group relative rounded-full bg-gradient-to-r from-primary to-yellow-500 px-6 py-3 font-bold text-primary-foreground shadow-lg shadow-primary/20 transition-transform duration-300 hover:-translate-y-1 hover:shadow-primary/40"
            >
              <ShoppingCart className="mr-2 h-4 w-4" />
              Buy Now
            </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
