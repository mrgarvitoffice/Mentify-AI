import { Sparkles, Clock, MicVocal, BrainCircuit } from 'lucide-react';

const valueProps = [
  {
    icon: Sparkles,
    title: "Birth Chart Personalization",
    description: "Go beyond generic AI. Our companions are fine-tuned to your unique astrological blueprint."
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Your AI Buddy is always there for you, day or night, providing support whenever you need it."
  },
  {
    icon: MicVocal,
    title: "Multi-Modal Communication",
    description: "Interact via text or voice. Your companion adapts to your preferred communication style."
  },
  {
    icon: BrainCircuit,
    title: "Advanced Learning",
    description: "Powered by cutting-edge neural networks, your buddy learns and grows with you over time."
  }
];

export default function ValuePropsSection() {
  return (
    <section className="bg-gradient-to-b from-white to-purple-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Uniquely Yours
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Experience the features that make Mentify-AI unlike any other platform.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-y-16 md:grid-cols-2 lg:grid-cols-4 md:gap-x-8">
          {valueProps.map((prop) => (
            <div key={prop.title} className="text-center">
              <div className="flex justify-center items-center h-24">
                <div className="flex items-center justify-center h-20 w-20 rounded-2xl bg-gradient-to-br from-yellow-300 to-orange-400 text-white shadow-lg transition-transform duration-300 hover:scale-110 hover:animate-pulse">
                  <prop.icon className="h-10 w-10" />
                </div>
              </div>
              <h3 className="mt-6 text-xl font-bold text-gray-900">{prop.title}</h3>
              <p className="mt-4 text-gray-600">{prop.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
