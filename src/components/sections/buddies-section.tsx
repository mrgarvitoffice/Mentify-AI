import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const buddies = [
  {
    icon: "💼",
    title: "Business Motivator & Mentor",
    description: "Inspires, guides, and explains business strategies. Your 24/7 business coach and motivational partner.",
    features: "Strategy Planning • Goal Setting • Market Analysis • Team Building",
  },
  {
    icon: "💕",
    title: "Relationship & Social Buddy",
    description: "Navigate love, friendship, and emotional connections with confidence and wisdom.",
    features: "Dating Advice • Social Skills • Emotional Support • Communication",
  },
  {
    icon: "💰",
    title: "Finance & Real Estate Buddy",
    description: "Your personal guide for investments, savings, and real estate opportunities.",
    features: "Investment Planning • Portfolio Management • Real Estate • Budgeting",
  },
  {
    icon: "🏃",
    title: "Health & Wellness Buddy",
    description: "Holistic health advisor for diet, fitness, and complete wellbeing transformation.",
    features: "Fitness Plans • Nutrition Guidance • Mental Health • Sleep Optimization",
  },
  {
    icon: "📱",
    title: "Social Media & Branding Buddy",
    description: "Build your online identity, create engaging content, and grow your digital presence.",
    features: "Content Creation • Brand Strategy • Growth Tactics • Analytics",
  },
  {
    icon: "🎓",
    title: "Problem Solver & Education Buddy",
    description: "Your learning companion for education, skill development, and problem-solving.",
    features: "Learning Paths • Skill Building • Research • Knowledge Retention",
  },
];

export default function BuddiesSection() {
  return (
    <section id="features" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Meet Your 6 AI Specialists
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Each Buddy designed to transform a specific area of your life
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {buddies.map((buddy) => (
            <Card
              key={buddy.title}
              className="group flex flex-col transform-gpu rounded-3xl border-slate-200 bg-white p-8 shadow-lg transition-all duration-400 ease-in-out hover:-translate-y-4 hover:shadow-2xl"
            >
              <div className="flex flex-1 flex-col items-center text-center">
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-purple-100 to-yellow-100 text-5xl">
                  {buddy.icon}
                </div>
                <h3 className="mt-6 text-2xl font-bold text-gray-900">{buddy.title}</h3>
                <p className="mt-4 text-base text-gray-600 flex-grow">{buddy.description}</p>
                <p className="mt-6 font-semibold text-purple-600 text-sm">{buddy.features}</p>
              </div>
              <Button 
                className="mt-8 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-300 px-6 py-3 font-bold text-black shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-yellow-400/30"
                style={{ background: 'linear-gradient(45deg, #ffd700, #ffed4e)' }}
              >
                Learn More
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
