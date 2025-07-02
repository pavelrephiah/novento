
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const WhatsNext = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-12">
          What's Next?
        </h2>
        
        <div className="prose prose-lg md:prose-xl max-w-none text-gray-700 dark:text-gray-300 leading-relaxed mb-12">
          <p className="mb-6">
            I've led at scale. Now I'm building at the edge, exploring what it means to lead in a world shaped by AI, speed, and new ways of working.
          </p>
          <p>
            Welcome to Novento. My personal lab for experiments, side projects, tiny products, and lessons that will shape my next epic.
          </p>
        </div>
        
        <Link 
          to="/novento"
          className="inline-flex items-center px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold rounded-full hover:bg-gray-800 dark:hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl group"
        >
          Enter Novento
          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </section>
  );
};

export default WhatsNext;
