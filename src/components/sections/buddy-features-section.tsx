
import type { Buddy } from '@/lib/buddies-data';

export default function BuddyFeaturesSection({ buddy }: { buddy: Buddy }) {
    return (
        <section className="py-24 sm:py-32 bg-background">
            <div className="container mx-auto px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center mb-16">
                    <h2 className="text-base font-semibold leading-7 text-primary">Features</h2>
                    <p className="mt-2 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                        What the {buddy.title} Can Do For You
                    </p>
                    <p className="mt-6 text-lg leading-8 text-muted-foreground">
                        Unlock your potential with a suite of powerful, personalized tools.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-12 gap-y-10">
                    {buddy.features.map((feature) => {
                        const IconComponent = feature.icon;
                        return (
                            <div key={feature.title} className="relative pl-16">
                                <dt className="text-lg font-semibold leading-7 text-foreground">
                                    <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                                        <IconComponent className="h-6 w-6" aria-hidden="true" />
                                    </div>
                                    {feature.title}
                                </dt>
                                <dd className="mt-2 text-base leading-7 text-muted-foreground">{feature.description}</dd>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    );
}
