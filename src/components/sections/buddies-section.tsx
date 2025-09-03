
'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { TrendingUp, Heart, Wallet, ShieldPlus, Share2, GraduationCap, Briefcase, Brain, HeartHandshake, LandPlot, MonitorSmartphone, BookOpen } from 'lucide-react';
import { BuddyInfoDialog } from '../shop/buddy-info-dialog';

const buddies = [
  {
    icon: Briefcase,
    title: "Business Motivator & Mentor",
    description: "Your 24/7 business coach for strategy, motivation, and growth guidance aligned to your entrepreneurial stars.",
    features: "Strategy Planning • Goal Setting • Market Analysis • Team Building"
  },
  {
    icon: HeartHandshake,
    title: "Relationship & Social Buddy",
    description: "Navigate love, friendship, and social connections with cosmic wisdom tailored to your relational patterns.",
    features: "Dating Advice • Social Skills • Emotional Support • Communication"
  },
  {
    icon: LandPlot,
    title: "Finance & Real Estate Buddy",
    description: "Your personal wealth advisor for investments, savings, and property decisions based on your financial stars.",
    features: "Investment Planning • Portfolio Management • Real Estate • Budgeting"
  },
  {
    icon: ShieldPlus,
    title: "Health & Wellness Buddy",
    description: "Holistic health guidance for body, mind, and spirit aligned to your wellness potential and energy cycles.",
    features: "Fitness Plans • Nutrition Guidance • Mental Health • Sleep Optimization"
  },
  {
    icon: MonitorSmartphone,
    title: "Social Media & Branding Buddy",
    description: "Build your online presence and personal brand with content strategies aligned to your authentic self.",
    features: "Content Creation • Brand Strategy • Growth Tactics • Analytics"
  },
  {
    icon: BookOpen,
    title: "Problem Solver & Education Buddy",
    description: "Your learning companion for skill development and problem-solving aligned to your intellectual strengths.",
    features: "Learning Paths • Skill Building • Research • Knowledge Retention"
  },
];

const icons: { [key: string]: React.ElementType } = {
    Briefcase,
    HeartHandshake,
    LandPlot,
    ShieldPlus,
    MonitorSmartphone,
    BookOpen,
};


export default function BuddiesSection() {
  return (
    <section id="buddies" className="bg-muted/50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Buddies of the month, every month.
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            With over 40,000+ users worldwide, Mentify-AI is the leading provider of personalized AI companions for life transformation.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {buddies.map((buddy, index) => {
            const IconComponent = buddy.icon;
            return (
                <Card
                key={buddy.title}
                className="group flex flex-col transform-gpu rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl bg-background"
                >
                    <CardContent className="p-0 flex-grow">
                        <IconComponent className="h-10 w-10 text-primary mb-4" />
                        <h3 className="text-xl font-bold text-foreground mb-2">{buddy.title}</h3>
                        <p className="text-base text-muted-foreground mb-4">{buddy.description}</p>
                        <p className="text-sm font-semibold text-primary">{buddy.features}</p>
                    </CardContent>
                    <div className="p-0 mt-6">
                        <BuddyInfoDialog buddy={{ ...buddy, icon: buddy.icon.displayName || `Icon${index}` }}>
                            <Button 
                                variant="outline"
                                className="w-full rounded-lg"
                            >
                                Learn More
                            </Button>
                        </BuddyInfoDialog>
                    </div>
                </Card>
            )
          })}
        </div>
      </div>
    </section>
  );
}
