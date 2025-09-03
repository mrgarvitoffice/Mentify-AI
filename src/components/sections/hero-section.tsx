import { Button } from '@/components/ui/button';
import { PlayCircle, TrendingUp, Heart, Wallet, ShieldPlus, Share2, GraduationCap } from 'lucide-react';
import AnimatedParticles from '@/components/ui/animated-particles';

export default function HeroSection() {
  return (
    <section id="home" className="relative h-screen min-h-[900px] w-full overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/30 via-background to-secondary/30" />
      <AnimatedParticles count={50} />
      <div className="relative z-10 flex h-full flex-col items-center justify-center pt-20 text-center text-foreground">
        <div className="container px-4">
          <h1 className="animate-fade-in-up font-headline text-5xl font-black md:text-6xl lg:text-7xl">
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent animate-shimmer-slow">
              AI Companions Aligned to Your Soul
            </span>
          </h1>
          <p
            className="mx-auto mt-6 max-w-3xl animate-fade-in-up text-lg text-muted-foreground md:text-xl"
            style={{ animationDelay: '0.4s' }}
          >
            Unlike generic chatbots, our AI Buddies are personalized to your birth chart, making them your truest AI allies.
          </p>

          <div
            className="group relative mx-auto mt-8 h-[300px] w-[300px] animate-fade-in-up"
            style={{ animationDelay: '0.6s' }}
          >
            <div className="absolute inset-0 animate-slow-spin">
              {[TrendingUp, Heart, Wallet, ShieldPlus, Share2, GraduationCap].map((Icon, i) => (
                 <div
                    key={i}
                    className="absolute"
                    style={{
                        transform: `rotate(${i * 60}deg) translateX(150px) rotate(-${i * 60}deg)`,
                    }}
                >
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-card/80 p-2 shadow-lg backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
                       <Icon className="h-8 w-8 text-primary" />
                    </div>
                </div>
              ))}
            </div>
             <div className="absolute inset-1/4 flex items-center justify-center">
                 <div className="relative flex h-full w-full animate-pulse items-center justify-center rounded-full bg-primary/20 shadow-2xl shadow-primary/40 backdrop-blur-xl">
                    <div className="absolute inset-0 rounded-full border-2 border-primary/50 animate-slow-spin-reverse" />
                 </div>
             </div>
          </div>
          
          <div className="mt-12 w-full animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
             <div className="flex flex-col items-center justify-center gap-8 md:flex-row md:gap-16">
                 <div className="text-center">
                     <div className="text-4xl font-bold text-primary">40,000+</div>
                     <div className="text-sm uppercase tracking-wider text-muted-foreground">Users Worldwide</div>
                 </div>
                 <div className="text-center">
                     <div className="text-4xl font-bold text-primary">6</div>
                     <div className="text-sm uppercase tracking-wider text-muted-foreground">AI Specialists</div>
                 </div>
                 <div className="text-center">
                     <div className="text-4xl font-bold text-primary">24/7</div>
                     <div className="text-sm uppercase tracking-wider text-muted-foreground">Available</div>
                 </div>
             </div>
          </div>

          <div
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center animate-fade-in-up"
            style={{ animationDelay: '1.0s' }}
          >
            <Button
              className="w-full rounded-full bg-gradient-to-r from-primary to-accent px-8 py-7 text-lg font-bold text-primary-foreground shadow-lg transition-transform duration-300 hover:-translate-y-2 hover:shadow-primary/30 sm:w-auto"
            >
              Discover Your AI Buddy
            </Button>
            <Button
              variant="outline"
              className="w-full rounded-full border-2 border-border bg-background/50 px-8 py-7 text-lg font-bold text-foreground transition-colors hover:bg-accent hover:text-accent-foreground sm:w-auto"
            >
              <PlayCircle className="mr-2 h-6 w-6" />
              Watch Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
