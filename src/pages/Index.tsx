
import React, { useEffect, useState } from 'react';
import { ArrowDown } from 'lucide-react';
import Hero from '../components/Hero';
import About from '../components/About';
import Principles from '../components/Principles';
import WhatsNext from '../components/WhatsNext';
import Connect from '../components/Connect';
import ThemeToggle from '../components/ThemeToggle';

const Index = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    
    // Remove initial load state after a brief delay to ensure smooth rendering
    const timer = setTimeout(() => {
      setIsInitialLoad(false);
    }, 150);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className={`min-h-screen bg-gradient-to-br from-slate-50 to-white dark:from-gray-900 dark:to-gray-800 transition-all duration-500 ${
      isInitialLoad ? 'opacity-0' : 'opacity-100'
    }`}>
      <ThemeToggle />
      <Hero />
      <About />
      <Principles />
      <WhatsNext />
      <Connect />
    </div>
  );
};

export default Index;
