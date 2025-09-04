
import type { Buddy } from '@/lib/buddies-data';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';

export default function BrandingBuddyPage({ buddy }: { buddy: Buddy }) {
    return (
        <>
            {/* Kinetic Typography Hero */}
            <section className="relative overflow-hidden bg-background pt-32 pb-20 sm:pt-40 sm:pb-28">
                 <div className="absolute inset-0 z-0">
                    <div className="absolute -top-1/4 -left-1/4 h-1/2 w-1/2 rounded-full bg-gradient-to-br from-blue-500/30 to-purple-500/30 blur-3xl animate-gradient-blob dark:from-blue-900/40 dark:to-purple-900/20"></div>
                    <div className="absolute -bottom-1/4 -right-1/4 h-1/2 w-1/2 rounded-full bg-gradient-to-br from-pink-500/30 to-red-500/30 blur-3xl animate-gradient-blob animation-delay-3000 dark:from-pink-900/30 dark:to-red-900/10"></div>
                </div>
                 <div className="container relative z-10 mx-auto px-6 lg:px-8 text-center">
                    <div className="max-w-4xl mx-auto">
                        <Badge variant="secondary" className="bg-primary/10 text-primary mb-4">Go Viral. Go Big.</Badge>
                         <h1 className="font-headline text-5xl sm:text-6xl lg:text-8xl font-black text-foreground mt-4" style={{ lineHeight: 1.1 }}>
                           <span className="text-gradient bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-200% animate-gradient-shimmer">
                           Build a Brand
                           </span>
                           <br/>
                           That Gets Noticed.
                        </h1>
                        <p className="mt-6 text-lg sm:text-xl max-w-2xl mx-auto text-muted-foreground">
                           {buddy.longDescription}
                        </p>
                         <div className="mt-10">
                            <Button size="lg" className="rounded-full text-lg py-7 px-10 shadow-lg" asChild>
                               <Link href={`/checkout?buddy=${encodeURIComponent(buddy.title)}&price=$300`}>
                                    Start Building Your Brand
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

             {/* "Trending Now" Feed */}
            <section className="py-20 sm:py-28 bg-muted/50">
                <div className="container mx-auto px-6 lg:px-8">
                     <div className="mx-auto max-w-2xl text-center mb-16">
                        <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                           Your Personal Content Machine
                        </h2>
                        <p className="mt-6 text-lg leading-8 text-muted-foreground">
                            From viral trends to authentic storytelling, get the tools to create content that connects and converts.
                        </p>
                    </div>
                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
                        {buddy.features.map((feature, index) => {
                            const Icon = feature.icon;
                             return (
                                <Card key={feature.title} className="p-6 group hover:-translate-y-2 transition-transform duration-300">
                                     <div className="mb-4 bg-primary/10 text-primary rounded-lg p-3 w-fit">
                                         <Icon className="h-8 w-8" />
                                     </div>
                                     <h3 className="text-xl font-bold">{feature.title}</h3>
                                     <p className="text-base text-muted-foreground mt-2">{feature.description}</p>
                                </Card>
                            )
                        })}
                    </div>
                </div>
            </section>
            
            {/* Before & After Showcase */}
             <section className="py-20 sm:py-28 bg-background">
                <div className="container mx-auto px-6 lg:px-8">
                     <div className="mx-auto max-w-2xl text-center mb-16">
                        <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                           Total Brand Transformation
                        </h2>
                        <p className="mt-6 text-lg leading-8 text-muted-foreground">
                            See how we help creators and businesses build unforgettable brands.
                        </p>
                    </div>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                       <div className="space-y-4">
                           <h3 className="text-3xl font-bold">From Generic to Genius</h3>
                           <p className="text-muted-foreground">Our AI analyzes your unique energy to craft a brand identity that's not just beautiful, but also authentic and magnetic. We'll help you with everything from logos and color palettes to your core messaging.</p>
                           {buddy.secondaryFeatures.map((feature) => {
                                const Icon = feature.icon;
                                return (
                                <div key={feature.title} className="flex items-start gap-4">
                                     <div className="flex-shrink-0 mt-1 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                                         <Icon className="w-5 h-5"/>
                                     </div>
                                     <div>
                                         <p className="font-semibold">{feature.title}</p>
                                         <p className="text-sm text-muted-foreground">{feature.description}</p>
                                     </div>
                                 </div>
                                )
                           })}
                       </div>
                        <div className="relative">
                           <div className="absolute -inset-6 bg-gradient-to-br from-blue-500/10 to-pink-500/10 rounded-3xl blur-xl -z-10"></div>
                           <Image 
                             src="https://picsum.photos/seed/brand-morph/800/600"
                             alt="Brand transformation"
                             width={800}
                             height={600}
                             className="relative rounded-2xl shadow-xl"
                             data-ai-hint="logo design portfolio"
                           />
                        </div>
                    </div>
                </div>
            </section>

             {/* Final CTA */}
             <section className="py-20 sm:py-28 bg-muted/50">
                <div className="container mx-auto px-6 lg:px-8 text-center">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                            Ready to Go Viral?
                        </h2>
                        <p className="mt-6 text-lg leading-8 text-muted-foreground">
                           Stop blending in. Start standing out. Your audience is waiting.
                        </p>
                         <div className="mt-10">
                            <Button size="lg" className="rounded-full text-lg py-7 px-10 shadow-lg" asChild>
                               <Link href={`/checkout?buddy=${encodeURIComponent(buddy.title)}&price=$300`}>
                                    Claim Your Spotlight
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

    