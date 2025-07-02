
import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import ThemeToggle from '../components/ThemeToggle';

const Novento = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <ThemeToggle />
      
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <Link 
            to="/"
            className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white mb-12 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Pavel Rephiah
          </Link>
          
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-8">
              Novento
            </h1>
            
            <div className="prose prose-lg md:prose-xl max-w-none text-gray-700 dark:text-gray-300 leading-relaxed">
              <p>
                This is my digital lab: where ideas take shape, code gets messy, and experiments get shipped. It's not polished. It's in motion.
              </p>
            </div>
          </div>
          
          <div className="text-center">
            <div className="inline-block p-8 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-gray-700">
              <div className="text-6xl mb-4">🚧</div>
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                Lab experiments coming soon...
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Novento;
