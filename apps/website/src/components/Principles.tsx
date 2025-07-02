"use client";

import React, { useCallback, useEffect, useState, useRef } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import type { CarouselApi } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';

const principlesData = [
  {
    principle: "Build clarity before you build anything else.",
    quote: "Complexity is inevitable, but confusion is optional.",
    gradient: "from-blue-500 to-blue-600"
  },
  {
    principle: "Leadership is not authority. It's responsibility.",
    quote: "Trust is earned through consistent action, not granted through title.",
    gradient: "from-purple-500 to-purple-600"
  },
  {
    principle: "Accountability builds trust.",
    quote: "Say what you'll do. Do what you said.",
    gradient: "from-indigo-500 to-indigo-600"
  },
  {
    principle: "Small steps. Fast feedback.",
    quote: "Progress compounds when it loops.",
    gradient: "from-slate-500 to-slate-600"
  },
  {
    principle: "Agility is a mindset, not a process.",
    quote: "Adapt quickly, decide clearly, recover confidently.",
    gradient: "from-teal-500 to-teal-600"
  },
  {
    principle: "Continuous improvement beats delayed perfection.",
    quote: "Ship. Learn. Refactor. Repeat.",
    gradient: "from-cyan-500 to-cyan-600"
  },
  {
    principle: "Good systems scale. Good people grow.",
    quote: "Invest in both.",
    gradient: "from-emerald-500 to-emerald-600"
  },
  {
    principle: "Take care of people, product, and profit: in that order.",
    quote: "(Ben Horowitz)",
    gradient: "from-gray-500 to-gray-600"
  },
  {
    principle: "Think in bets. Move with intent.",
    quote: "Perfect is slow. Progress is power.",
    gradient: "from-blue-600 to-purple-600"
  },
  {
    principle: "AI is not just a tool, it's a lens.",
    quote: "The way we think, build, and lead is being rewritten. Start learning now.",
    gradient: "from-violet-500 to-violet-600"
  },
  {
    principle: "Stay curious. Stay useful.",
    quote: "The best ideas come from people who are still learning and still shipping.",
    gradient: "from-indigo-600 to-purple-600"
  }
];

const Principles = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const autoplay = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });

    // Progress tracking
    const updateProgress = () => {
      const progress = ((current - 1) / (count - 1)) * 100;
      setProgress(progress);
    };

    updateProgress();
  }, [api, current, count]);

  const scrollTo = useCallback((index: number) => {
    api?.scrollTo(index);
  }, [api]);

  const handleMouseEnter = () => {
    autoplay.current.stop();
    setIsPlaying(false);
  };

  const handleMouseLeave = () => {
    autoplay.current.play();
    setIsPlaying(true);
  };

  return (
    <section className="py-20 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Principles
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 italic">
            These principles guide what I do and how I do it.
          </p>
        </div>

        <div
          className="relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Carousel
            setApi={setApi}
            className="w-full max-w-6xl mx-auto"
            opts={{
              align: "center",
              loop: true,
              skipSnaps: false,
              dragFree: false,
            }}
            plugins={[autoplay.current]}
          >
            <CarouselContent className="-ml-4">
              {principlesData.map((item, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="h-full p-1">
                    <div
                      className={`
                        relative h-full bg-gradient-to-br ${item.gradient} 
                        rounded-2xl p-6 shadow-xl hover:shadow-2xl
                        transform transition-all duration-500 hover:scale-105
                        border border-white/20 dark:border-gray-700/50
                        backdrop-blur-sm
                        group cursor-pointer
                      `}
                      style={{
                        animationDelay: `${index * 0.1}s`,
                        minHeight: '140px'
                      }}
                    >
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-2xl"></div>

                      {/* Glow Effect */}
                      <div className="absolute -inset-1 bg-gradient-to-r from-white/20 to-transparent rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                      {/* Content */}
                      <div className="relative z-10 flex flex-col h-full">
                        <h3 className="text-base font-semibold text-white mb-3 leading-tight">
                          {item.principle}
                        </h3>
                        <p className="text-white/90 italic text-sm leading-relaxed mt-auto">
                          {item.quote}
                        </p>
                      </div>

                      {/* Shine Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000 rounded-2xl"></div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious className="hidden md:flex -left-16 h-12 w-12 border-2 hover:scale-110 transition-all duration-300 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm shadow-lg" />
            <CarouselNext className="hidden md:flex -right-16 h-12 w-12 border-2 hover:scale-110 transition-all duration-300 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm shadow-lg" />
          </Carousel>

          {/* Progress Bar */}
          <div className="mt-8 mx-auto max-w-md">
            <div className="h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {Array.from({ length: count }).map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={`
                  w-3 h-3 rounded-full transition-all duration-300 transform hover:scale-125
                  ${index === current - 1
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg'
                    : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                  }
                `}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Play/Pause Indicator */}
          <div className="flex justify-center mt-4">
            <div className={`
              w-2 h-2 rounded-full transition-all duration-300
              ${isPlaying ? 'bg-green-500 animate-pulse' : 'bg-gray-400'}
            `}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Principles;
