import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { TrendingUp, Heart, Wallet, ShieldPlus, Share2, GraduationCap } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';

const buddies = [
  {
    icon: TrendingUp,
    title: "Business Motivator & Mentor",
    description: "Inspires, guides, and explains business strategies. Your 24/7 business coach.",
    badgeColor: "bg-yellow-100 text-yellow-800 border-yellow-200"
  },
  {
    icon: Heart,
    title: "Relationship & Social Buddy",
    description: "Navigate love, friendship, and emotional connections with confidence.",
    badgeColor: "bg-pink-100 text-pink-800 border-pink-200"
  },
  {
    icon: Wallet,
    title: "Finance & Real Estate Buddy",
    description: "Your personal guide for investments, savings, and real estate.",
    badgeColor: "bg-green-100 text-green-800 border-green-200"
  },
  {
    icon: ShieldPlus,
    title: "Health & Wellness Buddy",
    description: "Holistic health advisor for diet, fitness, and wellbeing transformation.",
    badgeColor: "bg-teal-100 text-teal-800 border-teal-200"
  },
  {
    icon: Share2,
    title: "Social Media & Branding Buddy",
    description: "Build your online identity and grow your digital presence.",
    badgeColor: "bg-blue-100 text-blue-800 border-blue-200"
  },
  {
    icon: GraduationCap,
    title: "Problem Solver & Education Buddy",
    description: "Your learning companion for skill development and problem-solving.",
    badgeColor: "bg-purple-100 text-purple-800 border-purple-200"
  },
];

export default function BuddiesSection() {
  return (
    <section id="features" className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
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
              className="group flex flex-col transform-gpu rounded-3xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="flex-grow">
                <Badge className={cn("absolute top-4 right-4 border", buddy.badgeColor)}>{buddy.icon && <buddy.icon className="h-4 w-4 mr-2" />}New</Badge>
                <h3 className="mt-6 text-2xl font-bold text-foreground">{buddy.title}</h3>
                <p className="mt-4 text-base text-muted-foreground">{buddy.description}</p>
              </div>
              <Button 
                variant="outline"
                className="mt-8 rounded-full border-2 border-primary/50 bg-transparent px-6 py-3 font-bold text-primary shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-primary/30 hover:bg-primary hover:text-primary-foreground"
              >
                Learn More
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
