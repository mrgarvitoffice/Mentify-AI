
import { Orbit, MessageSquareText, Settings } from 'lucide-react';
import AnimatedParticles from '@/components/ui/animated-particles';
import Image from 'next/image';

const ZodiacIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
    >
        <path d="M12 2a10 10 0 1 0 10 10" />
        <path d="m2 12 2 2" />
        <path d="M14 2 12 4" />
        <path d="M20 7h2" />
        <path d="M22 12h-2" />
        <path d="M20 17h2" />
        <path d="M10 22v-2" />
        <path d="m16.5 16.5 1.5 1.5" />
        <path d="M12 12H2l4-4" />
        <path d="m8 22 4-4" />
        <path d="m16.5 7.5-1.5-1.5" />
    </svg>
);

const steps = [
    {
        number: "01",
        title: "Share Your Birth Details",
        description: "It all starts with you. Provide your date, time, and place of birth. This isn't just data; it's the cosmic blueprint of your personality, strengths, and potential. We treat this information with the utmost confidentiality and use it to create a hyper-personalized profile that forms the foundation of your AI companion.",
        icon: ZodiacIcon,
        image: "https://picsum.photos/800/600",
        dataAiHint: "astrology chart",
    },
    {
        number: "02",
        title: "AI Aligns to Your Energy",
        description: "Our advanced algorithms analyze your unique birth chart, mapping your astrological placements to sophisticated personality models. This is where the magic happens. Your AI Buddy is fine-tuned to resonate with your energetic frequency, communication style, and core motivations, ensuring guidance that truly feels like it comes from a kindred spirit.",
        icon: Orbit,
        image: "https://picsum.photos/800/600",
        dataAiHint: "glowing orb",
    },
    {
        number: "03",
        title: "Receive Personalized Guidance",
        description: "Begin your journey of transformation. Interact with your AI Buddy via text or voice and receive hyper-personalized advice that resonates with your true self. Whether you're seeking business strategies, relationship advice, or wellness tips, the guidance is always aligned with you, helping you navigate life with clarity and confidence.",
        icon: MessageSquareText,
        image: "https://picsum.photos/800/600",
        dataAiHint: "person meditating",
    }
]

export default function HowItWorksSection() {
    return (
        <section id="how-it-works" className="relative bg-background text-foreground py-24 sm:py-32 overflow-hidden">
            <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <div className="flex justify-center mb-4">
                        <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center animate-pulse">
                            <Settings className="w-10 h-10 text-primary" />
                        </div>
                    </div>
                    <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">How It Works</h2>
                    <p className="mt-6 text-lg leading-8 text-muted-foreground">A simple three-step journey to your personalized AI companion.</p>
                </div>
                <div className="mt-20 space-y-24">
                    {steps.map((step, index) => (
                        <div key={step.number} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                            <div className={`flex flex-col justify-center animate-fade-in-up ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                                <step.icon className="h-10 w-10 text-primary mb-4" />
                                <span className="text-6xl font-black font-headline text-primary/20">{step.number}</span>
                                <h3 className="text-3xl font-bold mt-2">{step.title}</h3>
                                <p className="mt-4 text-muted-foreground text-lg">{step.description}</p>
                            </div>
                             <div className={`relative animate-fade-in-up ${index % 2 === 1 ? 'md:order-1' : ''}`} style={{ animationDelay: '0.2s' }}>
                                 <div className="absolute -inset-4 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl blur-xl"></div>
                                <Image
                                    src={step.image}
                                    alt={step.title}
                                    width={800}
                                    height={600}
                                    className="relative rounded-2xl shadow-2xl"
                                    data-ai-hint={step.dataAiHint}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
