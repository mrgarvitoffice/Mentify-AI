import { Card, CardContent } from '@/components/ui/card';
import { Avatar } from '@/components/ui/avatar';

const testimonials = [
  {
    quote: "My Business Buddy increased my revenue by 200% in 6 months. It's like having a world-class consultant in my pocket.",
    author: "Sarah Johnson",
    title: "Entrepreneur",
    initials: "SJ",
    color: "from-yellow-400 to-orange-500",
  },
  {
    quote: "The Health Buddy created my perfect workout plan based on my birth chart. I've never felt more aligned and energetic!",
    author: "Michael Chen",
    title: "Software Engineer",
    initials: "MC",
    color: "from-green-400 to-teal-500",
  },
  {
    quote: "Social Media Buddy grew my following from 500 to 50K followers in just three months. The brand strategy was pure genius.",
    author: "Lisa Thompson",
    title: "Influencer",
    initials: "LT",
    color: "from-blue-400 to-indigo-500",
  },
  {
    quote: "I was struggling with my love life. The Relationship Buddy gave me insights that changed everything. I'm now in a happy, healthy relationship.",
    author: "David R.",
    title: "Graphic Designer",
    initials: "DR",
    color: "from-pink-400 to-red-500",
  },
  {
    quote: "The Education Buddy helped me learn Python in a month. The personalized learning path was a game-changer.",
    author: "Emily White",
    title: "Student",
    initials: "EW",
    color: "from-purple-400 to-violet-500",
  },
  {
    quote: "Finally, an AI that understands me on a deeper level. The birth chart personalization is not a gimmick, it's profound.",
    author: "Alex G.",
    title: "Astrology Enthusiast",
    initials: "AG",
    color: "from-cyan-400 to-sky-500",
  }
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Loved by Thousands
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Don't just take our word for it. Here's what our users are saying.
          </p>
        </div>
        <div className="mt-16 flow-root">
          <div className="-m-4 p-4">
             <div className="mx-auto max-w-6xl columns-1 gap-8 sm:columns-2 lg:columns-3">
                 {testimonials.map((testimonial, index) => (
                     <Card key={index} className="mb-8 break-inside-avoid rounded-2xl p-6 shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-accent/20 glass-card">
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
