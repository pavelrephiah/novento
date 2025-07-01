
import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToNext = () => {
    const nextSection = document.getElementById('about');
    nextSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 relative">
      <div className="text-center max-w-4xl mx-auto animate-fade-in">
        <div className="mb-8">
          <img 
            src="/placeholder.svg" 
            alt="Pavel Rephiah" 
            className="w-20 h-20 rounded-full mx-auto mb-6 shadow-lg ring-4 ring-white hover:scale-105 transition-transform duration-300"
          />
        </div>
        
        <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-6 tracking-tight">
          Pavel Rephiah
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 font-light italic mb-12 max-w-2xl mx-auto">
          "Engineering leader. Builder. Ready for what's next."
        </p>
      </div>
      
      <button 
        onClick={scrollToNext}
        className="absolute bottom-12 animate-bounce hover:animate-none transition-all duration-300 p-3 rounded-full hover:bg-gray-100 group"
        aria-label="Scroll to next section"
      >
        <ArrowDown className="w-6 h-6 text-gray-400 group-hover:text-gray-600 transition-colors" />
      </button>
    </section>
  );
};

export default Hero;
