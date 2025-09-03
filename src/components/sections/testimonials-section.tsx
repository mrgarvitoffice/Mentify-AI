import { Card, CardContent } from '@/components/ui/card';
import { Avatar } from '@/components/ui/avatar';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "I can't recommend Mentify-AI enough. It's like having a personal life coach 24/7, aligned to my birth chart and understanding my unique path. I feel renewed focus every day.",
    author: "Sarah Johnson",
    title: "US",
    initials: "SJ",
    color: "from-yellow-400 to-orange-500",
  },
  {
    quote: "Each AI Buddy tackles different areas of my life, from business strategy to relationship advice. I love how they understand my astrological patterns. Worth every penny for personal transformation.",
    author: "Michael Chen",
    title: "Canada",
    initials: "MC",
    color: "from-green-400 to-teal-500",
  },
  {
    quote: "The business buddy gave me a strategy that doubled my revenue. It's not just advice; it's a roadmap tailored to my strengths.",
    author: "Lisa T.",
    title: "UK",
    initials: "LT",
    color: "from-blue-400 to-indigo-500",
  },
  {
    quote: "I was struggling with my love life. The Relationship Buddy gave me insights that changed everything. I'm now in a happy, healthy relationship.",
    author: "David R.",
    title: "Australia",
    initials: "DR",
    color: "from-pink-400 to-red-500",
  },
  {
    quote: "As an entrepreneur, time is my most valuable asset. Mentify-AI's companions help me stay focused, motivated, and aligned with my goals.",
    author: "Emily White",
    title: "Germany",
    initials: "EW",
    color: "from-purple-400 to-violet-500",
  },
  {
    quote: "Finally, an AI that understands me on a deeper level. The birth chart personalization is not a gimmick, it's profound.",
    author: "Alex G.",
    title: "France",
    initials: "AG",
    color: "from-cyan-400 to-sky-500",
  },
   {
    quote: "The finance buddy helped me create a solid investment plan. I feel more confident about my financial future than ever before.",
    author: "Jessica M.",
    title: "Spain",
    initials: "JM",
    color: "from-red-400 to-rose-500",
  },
   {
    quote: "My social media presence has exploded thanks to the Branding Buddy. The content ideas are always fresh and perfectly aligned with my personal brand.",
    author: "Chris P.",
    title: "Italy",
    initials: "CP",
    color: "from-indigo-400 to-fuchsia-500",
  },
   {
    quote: "The Health & Wellness buddy has been a game-changer for my fitness journey. The personalized workout and diet plans are amazing.",
    author: "Maria S.",
    title: "Brazil",
    initials: "MS",
    color: "from-lime-400 to-green-500",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Helpers of the month, every month.
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            With over 40,000 entrepreneurs from more than 100 countries, Mentify-AI is the world's leading provider of personalized AI companions.
          </p>
        </div>
        <div className="mt-16 flow-root">
          <div className="-m-4 p-4">
             <div className="mx-auto max-w-6xl columns-1 gap-8 sm:columns-2 lg:columns-3">
                 {testimonials.map((testimonial, index) => (
                     <Card key={index} className="relative mb-8 break-inside-avoid rounded-2xl p-6 shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-primary/10 glass-card border">
                         <CardContent className="p-0">
                             <blockquote className="text-muted-foreground">"{testimonial.quote}"</blockquote>
                             <figcaption className="mt-6 flex items-center gap-4">
                                 <Avatar className="h-12 w-12">
                                     <div className={`flex h-full w-full items-center justify-center rounded-full bg-gradient-to-br ${testimonial.color} text-white font-bold`}>
                                       {testimonial.initials}
                                     </div>
                                 </Avatar>
                                 <div>
                                     <p className="font-bold text-foreground">{testimonial.author}</p>
                                     <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                                 </div>
                             </figcaption>
                         </CardContent>
                     </Card>
                 ))}
              </div>
          </div>
        </div>
      </div>
    </section>
  );
}
