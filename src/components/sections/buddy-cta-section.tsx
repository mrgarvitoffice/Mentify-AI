
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Star } from 'lucide-react';
import type { Buddy } from '@/lib/buddies-data';

export default function BuddyCtaSection({ buddy }: { buddy: Buddy }) {
    return (
        <section className="relative overflow-hidden bg-primary/5 py-20 sm:py-28">
            <div className="container relative z-10 mx-auto max-w-2xl text-center px-4">
                <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center animate-pulse">
                        <Star className="w-8 h-8 text-primary" />
                    </div>
                </div>
                <h2 className="font-headline text-4xl font-black text-foreground sm:text-5xl">
                    Ready to Transform Your Life?
                </h2>
                <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-muted-foreground">
                    Your personalized AI companion is just a click away. Start your journey with the {buddy.title} today.
                </p>
                <div className="mt-10">
                    <Button size="lg" className="rounded-lg text-lg py-7 px-8" asChild>
                        <Link href={`/checkout?buddy=${encodeURIComponent(buddy.title)}&price=$300`}>
                            Get Your AI Buddy Now
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
