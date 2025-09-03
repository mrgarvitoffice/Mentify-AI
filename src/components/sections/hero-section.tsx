import { Button } from '@/components/ui/button';
import { PlayCircle, TrendingUp, Heart, Wallet, ShieldPlus, Share2, GraduationCap } from 'lucide-react';
import AnimatedParticles from '@/components/ui/animated-particles';
import { ShopDialog } from '../shop/shop-dialog';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section id="home" className="relative h-screen min-h-[900px] w-full overflow-hidden light-background">
      <AnimatedParticles count={50} className="opacity-50" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center pt-20 text-center text-foreground">
        <div className="container px-4">
          <h1 className="animate-fade-in-up font-headline text-5xl font-black md:text-6xl lg:text-7xl">
            Discover <span className="text-gradient bg-gradient-to-r from-primary to-secondary">AI Buddies</span>, Designed Just for You
          </h1>
          <p
            className="mx-auto mt-6 max-w-3xl animate-fade-in-up text-lg text-muted-foreground md:text-xl"
            style={{ animationDelay: '0.2s' }}
          >
            Unlike generic chatbots, our AI Buddies are personalized to your birth chart, making them your truest AI allies.
          </p>

          <div
            className="group relative mx-auto mt-10 h-[320px] w-[320px] animate-fade-in-up"
            style={{ animationDelay: '0.4s' }}
          >
            {/* Orbiter icons */}
            {[TrendingUp, Heart, Wallet, ShieldPlus, Share2, GraduationCap].map((Icon, i) => (
                 <div
                    key={i}
                    className="absolute"
                    style={{
                        transform: `rotate(${i * 60}deg) translateX(160px) rotate(-${i * 60}deg)`,
                    }}
                >
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-background/60 p-2 shadow-lg backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:shadow-primary/20">
                       <Icon className="h-8 w-8 text-primary transition-colors group-hover:text-secondary" />
                    </div>
                </div>
            ))}
            {/* Central orb */}
            <div className="absolute inset-1/4 flex items-center justify-center">
                 <div className="relative flex h-full w-full animate-pulse-slow items-center justify-center rounded-full bg-accent/20 shadow-2xl shadow-accent/30 backdrop-blur-xl transition-all duration-500 group-hover:bg-accent/30">
                    <div className="absolute inset-0 rounded-full border-2 border-accent/50 animate-slow-spin-reverse" />
                    <div className="text-5xl animate-pulse">🔮</div>
                 </div>
            </div>
          </div>
          
          <div className="mt-12 w-full animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
             <div className="flex flex-col items-center justify-center gap-8 md:flex-row md:gap-16">
                 <div className="text-center">
                     <div className="text-4xl font-bold text-primary animate-number-up">40,000+</div>
                     <div className="text-sm uppercase tracking-wider text-muted-foreground">Users Worldwide</div>
                 </div>
                 <div className="text-center">
                     <div className="text-4xl font-bold text-primary animate-number-up">6</div>
                     <div className="text-sm uppercase tracking-wider text-muted-foreground">AI Specialists</div>
                 </div>
                 <div className="text-center">
                     <div className="text-4xl font-bold text-primary animate-number-up">24/7</div>
                     <div className="text-sm uppercase tracking-wider text-muted-foreground">Available</div>
                 </div>
             </div>
          </div>

          <div
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center animate-fade-in-up"
            style={{ animationDelay: '0.8s' }}
          >
            <ShopDialog>
              <Button
                className="w-full rounded-full bg-gradient-to-r from-primary to-yellow-500 px-8 py-7 text-lg font-bold text-primary-foreground shadow-lg shadow-primary/20 transition-transform duration-300 hover:-translate-y-2 hover:shadow-primary/40 sm:w-auto"
              >
                Discover Your AI Buddy
              </Button>
            </ShopDialog>
            <Button
              variant="outline"
              className="w-full rounded-full border-2 border-secondary/50 bg-background/50 px-8 py-7 text-lg font-bold text-secondary transition-colors hover:bg-secondary hover:text-secondary-foreground hover:border-secondary sm:w-auto"
              asChild
            >
              <Link href="#how-it-works">
                <PlayCircle className="mr-2 h-6 w-6" />
                Watch Demo
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
