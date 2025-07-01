
import React from 'react';

const principlesData = [
  {
    principle: "Build clarity before you build anything else.",
    quote: "Complexity is inevitable, but confusion is optional."
  },
  {
    principle: "Leadership is not authority. It's responsibility.",
    quote: "Trust is earned through consistent action, not granted through title."
  },
  {
    principle: "Accountability builds trust.",
    quote: "Say what you'll do. Do what you said."
  },
  {
    principle: "Small steps. Fast feedback.",
    quote: "Progress compounds when it loops."
  },
  {
    principle: "Agility is a mindset, not a process.",
    quote: "Adapt quickly, decide clearly, recover confidently."
  },
  {
    principle: "Continuous improvement beats delayed perfection.",
    quote: "Ship. Learn. Refactor. Repeat."
  },
  {
    principle: "Good systems scale. Good people grow.",
    quote: "Invest in both."
  },
  {
    principle: "Take care of people, product, and profit: in that order.",
    quote: "(Ben Horowitz)"
  },
  {
    principle: "Think in bets. Move with intent.",
    quote: "Perfect is slow. Progress is power."
  },
  {
    principle: "AI is not just a tool, it's a lens.",
    quote: "The way we think, build, and lead is being rewritten. Start learning now."
  },
  {
    principle: "Stay curious. Stay useful.",
    quote: "The best ideas come from people who are still learning and still shipping."
  }
];

const Principles = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Principles
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 italic">
            These principles guide what I do and how I do it.
          </p>
        </div>
        
        <div className="overflow-x-auto pb-6">
          <div className="flex space-x-6 w-max animate-fade-in-delayed">
            {principlesData.map((item, index) => (
              <div 
                key={index}
                className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl dark:shadow-gray-900/20 transform hover:scale-105 transition-all duration-300 w-80 flex-shrink-0 border border-gray-100 dark:border-gray-700"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 leading-tight">
                  {item.principle}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 italic text-base leading-relaxed">
                  {item.quote}
                </p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="text-center mt-8">
          <p className="text-sm text-gray-500 dark:text-gray-400">← Scroll horizontally to explore →</p>
        </div>
      </div>
    </section>
  );
};

export default Principles;
