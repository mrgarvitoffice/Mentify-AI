"use client";

import { useState } from 'react';
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
import { ShopDialog } from './shop-dialog';
import type { LucideIcon } from 'lucide-react';

type Buddy = {
  icon: LucideIcon;
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

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader className="items-center text-center">
          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-accent/80 to-secondary/80 text-white shadow-lg mb-4">
            <buddy.icon className="h-12 w-12 text-primary" />
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
        <DialogFooter>
          <ShopDialog initialBuddy={buddy.title}>
            <Button
              onClick={() => setIsOpen(false)}
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold"
            >
              Buy Now
            </Button>
          </ShopDialog>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
