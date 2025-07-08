import NextImage from 'next/image';
import { Github, Linkedin, Mail } from 'lucide-react';
import { useEffect, useState } from 'react';

const navItems = [
    { id: 'my-story', label: 'My Story' },
    { id: 'principles', label: 'Principles' },
    { id: 'whats-next', label: "What's Next?" },
];

export default function LeftPanel() {
    const [activeSection, setActiveSection] = useState('my-story');
    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY + 120;
            let current = navItems[0].id;
            for (const item of navItems) {
                const el = document.getElementById(item.id);
                if (el && el.offsetTop <= scrollY) {
                    current = item.id;
                }
            }
            setActiveSection(current);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    const handleNavClick = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <div className="flex flex-col items-center px-8 py-12 md:py-16 w-full h-full md:min-h-screen md:justify-between">
            <div className="flex flex-col items-center w-full">
                <NextImage
                    src="/pavel.jpg"
                    alt="Pavel Rephiah"
                    width={96}
                    height={96}
                    className="w-24 h-24 rounded-full mb-8 shadow-lg ring-4 ring-white dark:ring-gray-900 mx-auto"
                    priority
                />
                <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-50 mb-2 tracking-tight text-center">Pavel Rephiah</h1>
                <p className="text-base text-gray-600 dark:text-gray-300 font-light italic mb-8 text-center">Engineering leader. Builder. Ready for what&apos;s next.</p>
                {/* Sidebar nav */}
                <nav className="w-full mt-6 mb-10">
                    <ul className="flex flex-col gap-2">
                        {navItems.map((item) => (
                            <li key={item.id}>
                                <button
                                    className={`group flex items-center w-full px-2 py-2 text-left transition-all duration-200 rounded-md
                    ${activeSection === item.id
                                            ? 'font-bold text-gray-900 dark:text-sky-300 bg-white/60 dark:bg-gray-900/40 pl-6 shadow-sm relative'
                                            : 'font-normal text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-sky-200 hover:font-semibold hover:pl-6 pl-4'}
                  `}
                                    style={{ position: 'relative' }}
                                    onClick={() => handleNavClick(item.id)}
                                    aria-current={activeSection === item.id ? 'page' : undefined}
                                >
                                    {/* Left accent bar */}
                                    <span
                                        className={`absolute left-0 top-1/2 -translate-y-1/2 h-6 w-1 rounded bg-sky-300 transition-all duration-200
                      ${activeSection === item.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-60'}
                    `}
                                    />
                                    <span className="relative z-10">{item.label}</span>
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div className="flex gap-4 mt-2 justify-center w-full">
                    <a
                        href="mailto:pavel@novento.io"
                        className="p-2 rounded-full hover:bg-sky-100 dark:hover:bg-sky-900 transition-colors"
                        aria-label="Email Pavel"
                    >
                        <Mail className="w-5 h-5 text-sky-500" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/pavel-rephiah/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full hover:bg-sky-100 dark:hover:bg-sky-900 transition-colors"
                        aria-label="LinkedIn Profile"
                    >
                        <Linkedin className="w-5 h-5 text-sky-500" />
                    </a>
                    <a
                        href="https://github.com/pavelrephiah"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full hover:bg-sky-100 dark:hover:bg-sky-900 transition-colors"
                        aria-label="GitHub Profile"
                    >
                        <Github className="w-5 h-5 text-sky-500" />
                    </a>
                </div>
            </div>
        </div>
    );
} 