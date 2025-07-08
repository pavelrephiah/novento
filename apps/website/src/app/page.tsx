'use client';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Principles from '@/components/Principles';
import WhatsNext from '@/components/WhatsNext';
import Connect from '@/components/Connect';
import ThemeToggle from '@/components/ThemeToggle';
import LeftPanel from '@/components/LeftPanel';
import {
    NavigationMenu,
    NavigationMenuList,
    NavigationMenuItem,
    NavigationMenuLink,
} from '@/components/ui/navigation-menu';
import { useEffect, useState, useRef } from 'react';

export const dynamic = 'force-dynamic';

export default function HomePage() {
    // Scrollspy logic for active section
    const [activeSection, setActiveSection] = useState('about');
    const mainContentRef = useRef<HTMLDivElement>(null);
    const [progress, setProgress] = useState(0);
    useEffect(() => {
        const sectionIds = ['my-story', 'principles', 'whats-next'];
        const handleScroll = () => {
            const scrollY = window.scrollY + 120; // offset for nav height
            let current = sectionIds[0];
            for (const id of sectionIds) {
                const el = document.getElementById(id);
                if (el && el.offsetTop <= scrollY) {
                    current = id;
                }
            }
            // If at the bottom of the page, set last section as active
            if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 2) {
                current = sectionIds[sectionIds.length - 1];
            }
            setActiveSection(current);
        };
        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    useEffect(() => {
        const handleScroll = () => {
            const el = mainContentRef.current;
            if (!el) return;
            const rect = el.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            const total = rect.height - windowHeight;
            const scrolled = Math.min(Math.max(-rect.top, 0), total);
            setProgress(total > 0 ? scrolled / total : 0);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    const handleNavClick = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white dark:from-gray-900 dark:to-gray-800">
            <div className="flex flex-col md:flex-row min-h-screen">
                {/* Left panel placeholder (fixed on desktop) */}
                <aside className="w-full md:w-[288px] md:fixed md:inset-y-0 md:left-0 bg-transparent z-10 border-b md:border-b-0 border-gray-200 dark:border-gray-800">
                    <LeftPanel />
                </aside>
                {/* Vertical scroll progress bar */}
                <div aria-hidden="true" className="hidden md:flex md:flex-col md:items-center md:justify-center md:fixed md:inset-y-0 md:left-[288px] z-20 w-4 pointer-events-none">
                    <div className="relative h-full w-px flex items-center">
                        <div className="absolute left-0 w-px h-full rounded-full bg-gray-200 dark:bg-gray-700" />
                        <div className="absolute left-0 w-px rounded-full bg-gradient-to-b from-sky-200 via-sky-400 to-sky-600 transition-all duration-300" style={{ height: `${Math.max(progress * 100, 4)}%`, top: 0 }} />
                    </div>
                </div>
                {/* Right panel: main content, scrollable on desktop */}
                <main ref={mainContentRef} className="flex-1 md:ml-[288px] w-full flex flex-col items-center">
                    <div className="w-full max-w-2xl px-4 md:px-8">
                        <ThemeToggle />
                        <section id="my-story" className="pt-8 md:pt-12 scroll-mt-8 md:scroll-mt-12 min-h-screen md:min-h-[calc(100vh-64px)]">
                            <About />
                        </section>
                        <section id="principles" className="pt-8 md:pt-12 scroll-mt-8 md:scroll-mt-12 min-h-screen md:min-h-[calc(100vh-64px)]">
                            <div className="relative -mx-4 md:-mx-8 lg:-mx-[calc((100vw-288px-100%)/2)]">
                                <Principles />
                            </div>
                        </section>
                        <section id="whats-next" className="pt-8 md:pt-12 scroll-mt-8 md:scroll-mt-12 min-h-screen md:min-h-[calc(100vh-64px)]">
                            <WhatsNext />
                        </section>
                        <section id="connect" className="pt-8 md:pt-12 scroll-mt-8 md:scroll-mt-12">
                            <Connect />
                        </section>
                    </div>
                </main>
            </div>
        </div>
    );
} 