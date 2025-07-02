
import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Principles from '../components/Principles';
import WhatsNext from '../components/WhatsNext';
import Connect from '../components/Connect';
import ThemeToggle from '../components/ThemeToggle';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white dark:from-gray-900 dark:to-gray-800">
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
