
'use client';

import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { TrendingUp, Heart, Wallet, ShieldPlus, Share2, GraduationCap, Users } from 'lucide-react';
import { ShopDialog } from '../shop/shop-dialog';

const buddies = [
  {
    icon: TrendingUp,
    title: "Business Motivator & Mentor",
    description: "Inspires, guides, and explains business strategies. Your 24/7 business coach.",
  },
  {
    icon: Heart,
    title: "Relationship & Social Buddy",
    description: "Navigate love, friendship, and emotional connections with confidence.",
  },
  {
    icon: Wallet,
    title: "Finance & Real Estate Buddy",
    description: "Your personal guide for investments, savings, and real estate.",
  },
  {
    icon: ShieldPlus,
    title: "Health & Wellness Buddy",
    description: "Holistic health advisor for diet, fitness, and wellbeing transformation.",
  },
  {
    icon: Share2,
    title: "Social Media & Branding Buddy",
    description: "Build your online identity and grow your digital presence.",
  },
  {
    icon: GraduationCap,
    title: "Problem Solver & Education Buddy",
    description: "Your learning companion for skill development and problem-solving.",
  },
];

export default function BuddiesSection() {
  return (
    <section id="features" className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
            <div className="flex justify-center mb-4">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center animate-pulse">
                    <Users className="w-10 h-10 text-primary" />
                </div>
            </div>
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Meet Your 6 AI Specialists
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Each Buddy designed to transform a specific area of your life.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {buddies.map((buddy) => (
            <Card
              key={buddy.title}
              className="group flex flex-col items-center text-center transform-gpu rounded-3xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl glass-card"
            >
              <CardHeader className="p-0 mb-6">
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-accent/80 to-secondary/80 text-white shadow-lg shadow-accent/20 transition-all duration-300 group-hover:scale-110 group-hover:shadow-accent/40">
                  <buddy.icon className="h-12 w-12 text-primary" />
                </div>
              </CardHeader>
              <CardContent className="flex-grow pt-0">
                <h3 className="text-2xl font-bold text-foreground">{buddy.title}</h3>
                <p className="mt-4 text-base text-muted-foreground">{buddy.description}</p>
              </CardContent>
              <CardFooter className="p-0">
                <ShopDialog initialBuddy={buddy.title}>
                  <Button 
                    variant="outline"
                    className="w-full rounded-full border-2 border-primary/50 bg-transparent px-6 py-3 font-bold text-primary shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-primary/30 hover:bg-primary hover:text-primary-foreground"
                  >
                    Buy Now
                  </Button>
                </ShopDialog>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
