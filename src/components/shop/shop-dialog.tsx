
'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogTrigger,
  DialogClose,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import {
  TrendingUp,
  Heart,
  Wallet,
  ShieldPlus,
  Share2,
  GraduationCap,
  ShoppingCart,
  CheckCircle2,
} from 'lucide-react';
import { Badge } from '../ui/badge';
import { cn } from '@/lib/utils';

const buddies = [
  {
    icon: TrendingUp,
    title: 'Business Motivator & Mentor',
    description: 'For scaling your enterprise.',
    color: 'gold',
  },
  {
    icon: Heart,
    title: 'Relationship & Social Buddy',
    description: 'For deepening connections.',
    color: 'rose',
  },
  {
    icon: Wallet,
    title: 'Finance & Real Estate Buddy',
    description: 'For building wealth.',
    color: 'emerald',
  },
  {
    icon: ShieldPlus,
    title: 'Health & Wellness Buddy',
    description: 'For a vibrant life.',
    color: 'green',
  },
  {
    icon: Share2,
    title: 'Social Media & Branding Buddy',
    description: 'For digital influence.',
    color: 'blue',
  },
  {
    icon: GraduationCap,
    title: 'Problem Solver & Education Buddy',
    description: 'For lifelong learning.',
    color: 'purple',
  },
];

const colorThemes: { [key: string]: { bg: string, border: string, shadow: string } } = {
    gold: { bg: 'bg-yellow-500/10', border: 'border-yellow-500', shadow: 'shadow-yellow-500/30' },
    rose: { bg: 'bg-rose-500/10', border: 'border-rose-500', shadow: 'shadow-rose-500/30' },
    emerald: { bg: 'bg-emerald-500/10', border: 'border-emerald-500', shadow: 'shadow-emerald-500/30' },
    green: { bg: 'bg-green-500/10', border: 'border-green-500', shadow: 'shadow-green-500/30' },
    blue: { bg: 'bg-blue-500/10', border: 'border-blue-500', shadow: 'shadow-blue-500/30' },
    purple: { bg: 'bg-purple-500/10', border: 'border-purple-500', shadow: 'shadow-purple-500/30' },
};

export function ShopDialog({ children }: { children: React.ReactNode }) {
    const router = useRouter();
    const [selectedBuddy, setSelectedBuddy] = useState<string | null>(null);
    const [isOpen, setIsOpen] = useState(false);

    const handleBuyNow = () => {
        if (selectedBuddy) {
            router.push(`/checkout?buddy=${encodeURIComponent(selectedBuddy)}`);
            setIsOpen(false);
        }
    };

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>{children}</DialogTrigger>
          <DialogContent className="sm:max-w-4xl p-0 bg-transparent border-none shadow-none">
            <div className="relative bg-background/80 backdrop-blur-2xl rounded-2xl border border-white/10 overflow-hidden animate-dialog-in">
              <DialogHeader className="p-8 text-center flex flex-col items-center">
                <div className="p-3 rounded-full bg-primary/10 mb-4 animate-pulse">
                    <ShoppingCart className="w-10 h-10 text-primary" />
                </div>
                <DialogTitle className="text-4xl font-bold text-gradient bg-gradient-to-r from-primary to-secondary animate-fade-in-up">
                  Choose Your AI Companion
                </DialogTitle>
                <DialogDescription className="text-muted-foreground text-lg animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                  Select your personalized AI Buddy aligned to your soul.
                </DialogDescription>
              </DialogHeader>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-8 max-h-[60vh] overflow-y-auto">
                {buddies.map((buddy, index) => {
                  const isSelected = selectedBuddy === buddy.title;
                  const theme = colorThemes[buddy.color];
                  return (
                    <div
                      key={buddy.title}
                      className={cn(
                        'relative p-6 rounded-2xl border-2 transition-all duration-300 cursor-pointer animate-fade-in-up',
                        isSelected ? `${theme.border} ring-4 ring-primary/50` : 'border-border/50 hover:border-primary/50',
                        theme.bg
                      )}
                      onClick={() => setSelectedBuddy(buddy.title)}
                      style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                    >
                      {isSelected && (
                         <div className="absolute top-3 right-3 text-primary animate-pulse">
                            <CheckCircle2 size={24} />
                         </div>
                      )}
                      <div className="flex flex-col items-center text-center">
                        <div className={`p-4 rounded-full bg-gradient-to-br from-accent/80 to-secondary/80 mb-4`}>
                          <buddy.icon className="w-10 h-10 text-primary" />
                        </div>
                        <h4 className="font-bold text-lg text-foreground">{buddy.title}</h4>
                        <p className="text-sm text-muted-foreground mt-1">{buddy.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
              
              <DialogFooter className="p-8 bg-background/50 backdrop-blur-sm sticky bottom-0">
                  <DialogClose asChild>
                    <Button type="button" variant="ghost" className="rounded-full px-6 py-3">
                        Maybe Later
                    </Button>
                  </DialogClose>
                  <Button
                    onClick={handleBuyNow}
                    disabled={!selectedBuddy}
                    className="group relative rounded-full bg-gradient-to-r from-primary to-yellow-500 px-8 py-4 text-lg font-bold text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-primary/40 disabled:bg-muted disabled:shadow-none disabled:hover:translate-y-0"
                  >
                    <span className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-yellow-400 to-primary opacity-0 transition-opacity duration-500 group-hover:opacity-100 animate-shimmer"></span>
                    <span className="relative flex items-center gap-2">
                        <ShoppingCart className="w-5 h-5" />
                        {selectedBuddy ? `Buy ${selectedBuddy.split(' ')[0]} Buddy` : 'Select a Buddy'}
                    </span>
                  </Button>
              </DialogFooter>
            </div>
          </DialogContent>
        </Dialog>
    );
}
