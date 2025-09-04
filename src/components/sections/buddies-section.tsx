
'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { buddies, iconMap } from '@/lib/buddies-data';
import { ArrowRight } from 'lucide-react';


export default function BuddiesSection() {
  return (
    <section id="buddies" className="bg-muted/50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Meet Your AI Team
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Six specialized AI companions, each designed to transform a key area of your life.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {buddies.map((buddy) => {
            const IconComponent = iconMap[buddy.icon];
            return (
                <Card
                  key={buddy.title}
                  className="group flex flex-col rounded-2xl bg-background/60 p-8 transition-all duration-300 hover:shadow-2xl hover:border-primary/20 hover:-translate-y-2"
                >
                  <CardContent className="flex flex-col p-0 flex-grow">
                    <div className="mb-6 flex items-center gap-4">
                      <div className="bg-primary/10 text-primary rounded-lg p-3">
                        <IconComponent className="h-8 w-8" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground">{buddy.title}</h3>
                    </div>
                    <p className="text-base text-muted-foreground flex-grow mb-6">{buddy.description}</p>
                    <ul className="space-y-2 text-sm text-muted-foreground mb-8">
                       {buddy.features.slice(0, 2).map(feature => {
                        const FeatureIcon = iconMap[feature.icon];
                         return (
                           <li key={feature.title} className="flex items-center gap-2">
                             <FeatureIcon className="h-4 w-4 text-primary" />
                             <span>{feature.title}</span>
                           </li>
                         );
                       })}
                    </ul>
                  </CardContent>
                  <div className="p-0 mt-auto">
                    <Button 
                        variant="outline"
                        className="w-full rounded-lg group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                        asChild
                    >
                      <Link href={`/buddies/${buddy.slug}`}>
                        Learn More <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </div>
                </Card>
            )
          })}
        </div>
      </div>
    </section>
  );
}

    