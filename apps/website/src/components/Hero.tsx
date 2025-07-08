"use client";

import React, { useState, useEffect } from 'react';
import { ArrowDown } from 'lucide-react';
import NextImage from 'next/image';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Hide the instant hero and show React version
    const instantHero = document.querySelector('.instant-hero') as HTMLElement;
    if (instantHero) {
      instantHero.style.display = 'none';
    }

    // Trigger animation immediately after component mounts
    setIsLoaded(true);
  }, []);

  const scrollToNext = () => {
    const nextSection = document.getElementById('about');
    nextSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 relative">
      {/* Hero content moved to LeftPanel */}
      <button
        onClick={scrollToNext}
        className={`absolute bottom-12 p-3 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 group transition-all duration-700 delay-300 ${isLoaded ? 'opacity-100 animate-bounce hover:animate-none' : 'opacity-0'
          }`}
        aria-label="Scroll to next section"
      >
        <ArrowDown className="w-6 h-6 text-gray-400 dark:text-gray-500 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors" />
      </button>
    </section>
  );
};

export default Hero;
