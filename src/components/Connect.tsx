
import React from 'react';
import { Github, Linkedin } from 'lucide-react';

const Connect = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-12">
          Connect
        </h2>
        
        <div className="mb-12">
          <a 
            href="mailto:pavel@novento.io"
            className="text-2xl md:text-3xl font-light hover:text-gray-300 transition-colors underline decoration-2 underline-offset-4"
          >
            pavel@novento.io
          </a>
        </div>
        
        <div className="flex justify-center space-x-8 mb-12">
          <a 
            href="https://www.linkedin.com/in/pavel-rephiah/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-white/10 rounded-full hover:bg-white/20 transform hover:scale-110 transition-all duration-300 backdrop-blur-sm"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-8 h-8" />
          </a>
          
          <a 
            href="https://github.com/pavelrephiah"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-white/10 rounded-full hover:bg-white/20 transform hover:scale-110 transition-all duration-300 backdrop-blur-sm"
            aria-label="GitHub Profile"
          >
            <Github className="w-8 h-8" />
          </a>
        </div>
        
        <div className="text-xs text-gray-400">
          © 2025 Novento
        </div>
      </div>
    </section>
  );
};

export default Connect;
