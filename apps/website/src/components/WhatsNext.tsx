import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const WhatsNext = () => {
  const [staggerKey, setStaggerKey] = useState(0); // for looping
  const text = 'Welcome to Novento.';
  const words = text.split(' ');

  // Animation variants
  const wordStagger = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };
  const wordVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 100 } },
  };

  // Loop the staggered animation
  useEffect(() => {
    const totalDuration = 0.15 * words.length + 1; // stagger + a little buffer
    const timer = setTimeout(() => {
      setStaggerKey((k) => k + 1);
    }, totalDuration * 1000 + 3000); // animation duration + 3s pause
    return () => clearTimeout(timer);
  }, [staggerKey, words.length]);

  return (
    <section className="pb-20 px-6">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-12 text-center">
        What&apos;s Next?
      </h2>
      <div className="max-w-4xl mx-auto animate-fade-in-up">
        <div className="prose prose-lg md:prose-xl max-w-none text-gray-700 dark:text-gray-300 leading-relaxed mb-12">
          <p className="mb-8 flex justify-center items-center min-h-[3.5rem]">
            <AnimatePresence mode="wait">
              <motion.span
                key={staggerKey}
                className="font-bold text-2xl text-blue-700 dark:text-cyan-400 block text-center"
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={wordStagger}
                style={{ display: 'inline-block' }}
              >
                {words.map((word, i) => (
                  <motion.span
                    key={word + i}
                    variants={wordVariant}
                    style={{ display: 'inline-block', marginRight: '0.25em' }}
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.span>
            </AnimatePresence>
          </p>
          <p className="mb-6">
            My digital lab where ideas take shape, code gets messy, and experiments get shipped. It&apos;s not polished. It&apos;s in motion.
          </p>
          <p>
            Here I build side projects, ship tiny products, and capture lessons that will shape my next epic. This is where I explore how AI transforms the way we think, build, and lead—accelerating my leadership for what&apos;s coming next.
          </p>
        </div>

        <div className="text-center mt-16">
          <div className="inline-block p-8 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-gray-700 animate-fade-in">
            <div className="text-6xl mb-4">🚧</div>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Lab experiments coming soon...
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatsNext;

