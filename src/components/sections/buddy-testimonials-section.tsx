
import { Card, CardContent } from '@/components/ui/card';
import type { Buddy } from '@/lib/buddies-data';
import { Quote } from 'lucide-react';

export default function BuddyTestimonialsSection({ buddy }: { buddy: Buddy }) {
    return (
        <section className="bg-background py-24 sm:py-32">
            <div className="container mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                        Success Stories
                    </h2>
                    <p className="mt-6 text-lg leading-8 text-muted-foreground">
                        See how the {buddy.title} has helped others achieve their goals.
                    </p>
                </div>
                <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    {buddy.testimonials.map((testimonial) => (
                        <Card key={testimonial.author} className="group flex flex-col transform-gpu rounded-2xl p-8 transition-all duration-300 hover:shadow-xl bg-muted/50 border-transparent hover:border-primary/20">
                            <CardContent className="p-0 flex-grow">
                                <Quote className="h-8 w-8 text-primary/50 mb-4" />
                                <blockquote className="text-lg text-foreground leading-8">"{testimonial.quote}"</blockquote>
                            </CardContent>
                            <footer className="mt-6">
                                <p className="font-semibold text-foreground">{testimonial.author}</p>
                            </footer>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
