import { BrainCircuit, Languages, ShieldCheck, Waves } from 'lucide-react';

const techFeatures = [
    {
        icon: BrainCircuit,
        title: "Advanced RAG Technology",
        description: "Our retrieval-augmented generation ensures responses are relevant, accurate, and context-aware."
    },
    {
        icon: Waves,
        title: "Real-time Voice Agents",
        description: "Engage in natural, seamless conversations with our low-latency voice-enabled AI buddies."
    },
    {
        icon: Languages,
        title: "100+ Languages Supported",
        description: "Communicate with your AI companion in your native tongue, no matter where you are from."
    },
    {
        icon: ShieldCheck,
        title: "Secure & Private",
        description: "Your data is encrypted and your conversations are confidential. Your privacy is our priority."
    }
];

export default function TechHighlightsSection() {
    return (
        <section className="cosmic-nebula py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                        Powered by Future-Proof Tech
                    </h2>
                    <p className="mt-6 text-lg leading-8 text-muted-foreground">
                        We use the latest advancements in AI to deliver an unparalleled experience.
                    </p>
                </div>
                <div className="mt-16 grid grid-cols-1 gap-y-12 sm:grid-cols-2 lg:grid-cols-4 sm:gap-x-8 sm:gap-y-16">
                    {techFeatures.map((feature) => (
                        <div key={feature.title} className="flex flex-col items-center text-center">
                           <div className="flex items-center justify-center h-20 w-20 rounded-full bg-gradient-to-br from-accent/80 to-secondary/80 text-primary-foreground shadow-lg shadow-accent/20 animate-pulse-slow">
                              <feature.icon className="h-10 w-10 text-primary" />
                           </div>
                           <h3 className="mt-5 text-lg font-semibold text-foreground">{feature.title}</h3>
                           <p className="mt-2 text-base text-muted-foreground">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
