import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { TrendingUp, Heart, Wallet, ShieldPlus, Share2, GraduationCap } from 'lucide-react';
import { cn } from '@/lib/utils';

const buddies = [
  {
    icon: TrendingUp,
    title: "Business Motivator & Mentor",
    description: "Inspires, guides, and explains business strategies. Your 24/7 business coach and motivational partner.",
    features: "Strategy Planning • Goal Setting • Market Analysis • Team Building",
    borderColor: "border-yellow-400/50"
  },
  {
    icon: Heart,
    title: "Relationship & Social Buddy",
    description: "Navigate love, friendship, and emotional connections with confidence and wisdom.",
    features: "Dating Advice • Social Skills • Emotional Support • Communication",
    borderColor: "border-pink-400/50"
  },
  {
    icon: Wallet,
    title: "Finance & Real Estate Buddy",
    description: "Your personal guide for investments, savings, and real estate opportunities.",
    features: "Investment Planning • Portfolio Management • Real Estate • Budgeting",
    borderColor: "border-green-400/50"
  },
  {
    icon: ShieldPlus,
    title: "Health & Wellness Buddy",
    description: "Holistic health advisor for diet, fitness, and complete wellbeing transformation.",
    features: "Fitness Plans • Nutrition Guidance • Mental Health • Sleep Optimization",
    borderColor: "border-teal-400/50"
  },
  {
    icon: Share2,
    title: "Social Media & Branding Buddy",
    description: "Build your online identity, create engaging content, and grow your digital presence.",
    features: "Content Creation • Brand Strategy • Growth Tactics • Analytics",
    borderColor: "border-blue-400/50"
  },
  {
    icon: GraduationCap,
    title: "Problem Solver & Education Buddy",
    description: "Your learning companion for education, skill development, and problem-solving.",
    features: "Learning Paths • Skill Building • Research • Knowledge Retention",
    borderColor: "border-purple-400/50"
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
            Each Buddy designed to transform a specific area of your life
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {buddies.map((buddy) => (
            <Card
              key={buddy.title}
              className={cn(
                "group flex flex-col transform-gpu rounded-3xl p-8 transition-all duration-400 ease-in-out hover:-translate-y-2 hover:shadow-2xl",
                "glass-card hover:shadow-accent/20",
                `border-2 ${buddy.borderColor} hover:${buddy.borderColor.replace('50','80')}`
              )}
            >
              <div className="flex flex-1 flex-col items-center text-center">
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-accent/50 to-secondary/50 text-5xl text-primary-foreground shadow-lg">
                  <buddy.icon className="h-12 w-12 text-primary" />
                </div>
                <h3 className="mt-6 text-2xl font-bold text-foreground">{buddy.title}</h3>
                <p className="mt-4 text-base text-muted-foreground flex-grow">{buddy.description}</p>
                <p className="mt-6 font-semibold text-secondary text-sm">{buddy.features}</p>
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
