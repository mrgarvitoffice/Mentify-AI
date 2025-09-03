
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
import { TrendingUp, Heart, Wallet, ShieldPlus, Share2, GraduationCap, type LucideIcon } from 'lucide-react';

const icons: { [key: string]: LucideIcon } = {
  TrendingUp,
  Heart,
  Wallet,
  ShieldPlus,
  Share2,
  GraduationCap,
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

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader className="items-center text-center">
          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-accent/80 to-secondary/80 text-white shadow-lg mb-4">
            {IconComponent && <IconComponent className="h-12 w-12 text-primary" />}
          </div>
          <DialogTitle className="text-2xl font-bold">{buddy.title}</DialogTitle>
          <DialogDescription className="text-base text-muted-foreground">
            {buddy.description}
          </DialogDescription>
        </DialogHeader>
        <div className="py-4 text-center text-sm text-foreground">
          <p>
            Our AI, personalized to your unique birth chart, offers unparalleled guidance. Whether you're seeking to grow your business, improve your relationships, or enhance your well-being, your AI Buddy is here to support you 24/7.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
