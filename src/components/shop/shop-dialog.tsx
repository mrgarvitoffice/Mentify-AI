
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
  Sparkles,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { ScrollArea } from '@/components/ui/scroll-area';

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

const colorThemes: { [key: string]: { bg: string, border: string, text: string } } = {
    gold: { bg: 'bg-yellow-400/10 dark:bg-yellow-800/10', border: 'border-yellow-500/50', text: 'text-yellow-500' },
    rose: { bg: 'bg-rose-400/10 dark:bg-rose-800/10', border: 'border-rose-500/50', text: 'text-rose-500' },
    emerald: { bg: 'bg-emerald-400/10 dark:bg-emerald-800/10', border: 'border-emerald-500/50', text: 'text-emerald-500' },
    green: { bg: 'bg-green-400/10 dark:bg-green-800/10', border: 'border-green-500/50', text: 'text-green-500' },
    blue: { bg: 'bg-blue-400/10 dark:bg-blue-800/10', border: 'border-blue-500/50', text: 'text-blue-500' },
    purple: { bg: 'bg-purple-400/10 dark:bg-purple-800/10', border: 'border-purple-500/50', text: 'text-purple-500' },
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
          <DialogContent className="sm:max-w-md p-0 bg-background/90 backdrop-blur-lg border-2 border-primary/20">
            <DialogHeader className="p-6 pb-4 text-center items-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-2 animate-pulse">
                    <Sparkles className="w-8 h-8 text-primary" />
                </div>
                <DialogTitle className="text-2xl font-bold text-gradient bg-gradient-to-r from-primary to-secondary">
                    Choose Your AI Companion
                </DialogTitle>
              <DialogDescription className="text-muted-foreground">
                Select your personalized AI Buddy aligned to your soul.
              </DialogDescription>
            </DialogHeader>

            <ScrollArea className="h-72">
              <div className="space-y-4 p-6 pt-0">
                {buddies.map((buddy) => {
                  const isSelected = selectedBuddy === buddy.title;
                  const theme = colorThemes[buddy.color];
                  return (
                    <div
                      key={buddy.title}
                      className={cn(
                        'relative p-4 rounded-xl border-2 transition-all duration-300 cursor-pointer flex items-center gap-4',
                        isSelected ? `${theme.border} ring-2 ring-primary` : 'border-border/20 hover:border-primary/50',
                        theme.bg
                      )}
                      onClick={() => setSelectedBuddy(buddy.title)}
                    >
                       {isSelected && (
                         <div className="absolute top-2 right-2 text-primary animate-pulse">
                            <CheckCircle2 size={20} />
                         </div>
                      )}
                      <div className={cn('p-3 rounded-full bg-gradient-to-br from-accent/80 to-secondary/80', theme.text)}>
                        <buddy.icon className="w-8 h-8 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold text-md text-foreground">{buddy.title}</h4>
                        <p className="text-sm text-muted-foreground">{buddy.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </ScrollArea>
            
            <DialogFooter className="p-6 bg-background/80 backdrop-blur-sm border-t border-border/20">
                <div className='w-full space-y-4'>
                    <Button
                        onClick={handleBuyNow}
                        disabled={!selectedBuddy}
                        className="w-full group relative rounded-full bg-gradient-to-r from-primary to-yellow-500 px-8 py-4 text-lg font-bold text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-primary/40 disabled:bg-muted disabled:shadow-none disabled:hover:translate-y-0"
                    >
                        <span className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-yellow-400 to-primary opacity-0 transition-opacity duration-500 group-hover:opacity-100 animate-shimmer"></span>
                        <span className="relative flex items-center justify-center gap-2 w-full">
                            <ShoppingCart className="w-5 h-5" />
                            {selectedBuddy ? `Buy ${selectedBuddy.split(' ')[0]} Buddy` : 'Select a Buddy'}
                        </span>
                    </Button>
                    <DialogClose asChild>
                        <Button type="button" variant="ghost" className="w-full rounded-full">
                            Maybe Later
                        </Button>
                    </DialogClose>
                </div>
            </DialogFooter>
          </DialogContent>
        </Dialog>
    );
}
