
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Novento = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <Link 
              to="/"
              className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors mb-8 group"
            >
              <ArrowRight className="w-4 h-4 mr-2 rotate-180 group-hover:-translate-x-1 transition-transform" />
              Back to Pavel Rephiah
            </Link>
            
            <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-8 tracking-tight">
              Novento
            </h1>
            
            <div className="prose prose-lg md:prose-xl max-w-none text-gray-700 leading-relaxed">
              <p className="text-xl md:text-2xl font-light mb-8">
                This is my digital lab: where ideas take shape, code gets messy, and experiments get shipped. It's not polished. It's in motion.
              </p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Coming Soon
              </h3>
              <p className="text-gray-600 mb-6">
                Experiments and projects are taking shape. Check back soon to see what's brewing.
              </p>
              <div className="w-full h-2 bg-gray-200 rounded-full">
                <div className="w-1/3 h-2 bg-gray-400 rounded-full"></div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                AI Tools Lab
              </h3>
              <p className="text-gray-600 mb-6">
                Building and testing AI-first tools for engineering leaders and teams.
              </p>
              <div className="w-full h-2 bg-gray-200 rounded-full">
                <div className="w-2/3 h-2 bg-gray-600 rounded-full"></div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Leadership Notes
              </h3>
              <p className="text-gray-600 mb-6">
                Lessons learned, patterns observed, and frameworks tested in the field.
              </p>
              <div className="w-full h-2 bg-gray-200 rounded-full">
                <div className="w-1/4 h-2 bg-gray-300 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Novento;
