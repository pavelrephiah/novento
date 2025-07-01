
import React, { useEffect, useState } from 'react';
import { ArrowDown } from 'lucide-react';
import Hero from '../components/Hero';
import About from '../components/About';
import Principles from '../components/Principles';
import WhatsNext from '../components/WhatsNext';
import Connect from '../components/Connect';

const Index = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      <Hero />
      <About />
      <Principles />
      <WhatsNext />
      <Connect />
    </div>
  );
};

export default Index;
