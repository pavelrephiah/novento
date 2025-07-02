import React from 'react';
import { Github, Linkedin } from 'lucide-react';

const Connect = () => {
  return (
    <footer className="py-4 px-4 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2 md:gap-4">
        <div className="flex items-center gap-2 md:gap-4">
          <span className="font-bold text-lg">Connect:</span>
          <a
            href="mailto:pavel@novento.io"
            className="hover:text-gray-300 underline underline-offset-2"
          >
            pavel@novento.io
          </a>
          <a
            href="https://www.linkedin.com/in/pavel-rephiah/"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 p-2 bg-white/10 rounded-full hover:bg-white/20 transition-all"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="https://github.com/pavelrephiah"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 p-2 bg-white/10 rounded-full hover:bg-white/20 transition-all"
            aria-label="GitHub Profile"
          >
            <Github className="w-5 h-5" />
          </a>
        </div>
        <div className="text-xs text-gray-400 mt-2 md:mt-0">
          © 2025 Novento
        </div>
      </div>
    </footer>
  );
};

export default Connect;
