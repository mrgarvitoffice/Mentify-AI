import { Button } from '@/components/ui/button';
import { PlayCircle, Users, BrainCircuit, Clock } from 'lucide-react';
import AnimatedParticles from '@/components/ui/animated-particles';

export default function HeroSection() {
  return (
    <section id="home" className="relative h-screen min-h-[900px] w-full overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#667eea] via-[#764ba2] to-[#667eea]" />
      <AnimatedParticles count={40} />
      <div className="relative z-10 flex h-full flex-col items-center justify-center pt-20 text-center text-white">
        <div className="container px-4">
          <h1 className="animate-fade-in-up font-headline text-5xl font-black md:text-6xl lg:text-7xl">
            <span className="bg-gradient-to-r from-white to-yellow-300 text-gradient">
              AI Companions Aligned to Your Soul
            </span>
          </h1>
          <p
            className="mx-auto mt-6 max-w-3xl animate-fade-in-up text-xl text-white/90 md:text-2xl"
            style={{ animationDelay: '0.4s' }}
          >
            Unlike generic chatbots, our AI Buddies are personalized to your date, time, and place of birth, making them your truest AI companions
          </p>

          <div
            className="relative mx-auto mt-8 h-[400px] w-[320px] animate-fade-in-up rounded-[30px] border border-white/20 bg-white/10 [backdrop-filter:blur(20px)] md:h-[450px] md:w-[400px]"
            style={{ animationDelay: '0.6s' }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative flex h-40 w-40 items-center justify-center md:h-48 md:w-48">
                <div className="absolute inset-0 animate-pulse rounded-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-50 blur-2xl" />
                <div className="absolute inset-[-5px] animate-rotating-border rounded-full bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500" />
                <div className="relative flex h-[95%] w-[95%] animate-pulse items-center justify-center rounded-full bg-black/30 text-8xl md:text-9xl">
                  💖
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 w-full animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
             <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
                 <div className="flex items-center gap-3">
                     <div>
                         <div className="text-3xl md:text-4xl font-bold text-yellow-300">40,000+</div>
                         <div className="text-sm uppercase tracking-widest text-white/80">Users</div>
                     </div>
                 </div>
                 <div className="flex items-center gap-3">
                     <div>
                         <div className="text-3xl md:text-4xl font-bold text-yellow-300">6</div>
                         <div className="text-sm uppercase tracking-widest text-white/80">AI Specialists</div>
                     </div>
                 </div>
                 <div className="flex items-center gap-3">
                     <div>
                         <div className="text-3xl md:text-4xl font-bold text-yellow-300">24/7</div>
                         <div className="text-sm uppercase tracking-widest text-white/80">Available</div>
                     </div>
                 </div>
             </div>
          </div>

          <div
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center animate-fade-in-up"
            style={{ animationDelay: '1.0s' }}
          >
            <Button
              className="w-full rounded-full bg-gradient-to-r from-yellow-400 to-yellow-300 px-8 py-7 text-lg font-bold text-black shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-yellow-400/30 sm:w-auto"
              style={{ background: 'linear-gradient(45deg, #ffd700, #ffed4e)' }}
            >
              Discover Your AI Buddy
            </Button>
            <Button
              variant="outline"
              className="w-full rounded-full border-2 border-white/30 bg-transparent px-8 py-7 text-lg font-bold text-white transition-colors hover:bg-white/10 hover:text-white sm:w-auto"
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
