"use client";

// Ported from Nudgify Index.tsx
import { Button } from "../../../components/ui/button";
import { Card, CardContent } from "../../../components/ui/card";
import ThemeToggle from "../../../components/ThemeToggle";
import { Brain, Bell, MessageSquare, Shield, Zap, Users, CheckCircle, ArrowRight, Sparkles, Heart, Calendar, DollarSign, Lightbulb, Monitor, Sun, Moon } from "lucide-react";
import Image from "next/image";
import "./nudgify.css";
import React from "react";
import { useTheme } from "next-themes";

function NudgifyButton({ variant = "hero", size = "xl", className = "", asChild = false, children, ...props }: { variant?: string, size?: string, className?: string, asChild?: boolean, children: React.ReactNode } & React.ButtonHTMLAttributes<HTMLButtonElement>) {
    // Base classes for all buttons
    let base = "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-lg font-medium h-14 px-10 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";
    // Variant logic
    if (variant === "hero") {
        base += " bg-gradient-hero text-white shadow-button font-semibold transform hover:scale-105 hover:shadow-soft";
    } else if (variant === "outline") {
        base += " border border-input bg-background text-foreground hover:bg-accent hover:text-accent-foreground hover:border-accent";
    }
    // Compose classes
    const classes = `${base} ${className}`.trim();
    if (asChild && React.isValidElement(children)) {
        return React.cloneElement(children as React.ReactElement, {
            className: `${(children as any).props.className || ""} ${classes}`.trim(),
            ...props,
        });
    }
    return <button className={classes} {...props}>{children}</button>;
}

function NudgifyThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    const cycleTheme = () => {
        if (theme === "system") {
            setTheme("light");
        } else if (theme === "light") {
            setTheme("dark");
        } else {
            setTheme("system");
        }
    };

    const getIcon = () => {
        if (!mounted) return <Monitor className="h-5 w-5 text-foreground" />;
        switch (theme) {
            case "light":
                return <Sun className="h-5 w-5 text-foreground" />;
            case "dark":
                return <Moon className="h-5 w-5 text-foreground" />;
            default:
                return <Monitor className="h-5 w-5 text-foreground" />;
        }
    };

    return (
        <button
            onClick={cycleTheme}
            className="inline-flex items-center justify-center h-10 w-10 rounded-md bg-background/80 backdrop-blur-sm border border-border hover:bg-muted transition-colors"
            aria-label="Toggle theme"
        >
            {getIcon()}
        </button>
    );
}

export default function NudgifyLanding() {
    const { resolvedTheme } = useTheme();
    const [mounted, setMounted] = React.useState(false);
    React.useEffect(() => { setMounted(true); }, []);
    // Compute className for .nudgify-root
    const rootClass = `nudgify-root min-h-screen${mounted && resolvedTheme === 'dark' ? ' dark' : ''}`;
    return (
        <div className={rootClass}>
            {/* Navigation */}
            <nav className="nudgify-header">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center space-x-2">
                            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                                <Bell className="w-5 h-5 text-white" />
                            </div>
                            <span className="text-xl font-bold bg-gradient-text bg-clip-text text-transparent">
                                Nudgify
                            </span>
                        </div>
                        <div className="flex items-center gap-3">
                            <NudgifyThemeToggle />
                            <NudgifyButton variant="hero" size="sm" className="nudgify-header-btn" asChild>
                                <a href="https://app.nudgify.novento.io">
                                    Start Nudging Me
                                </a>
                            </NudgifyButton>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="pt-24 pb-16 lg:pt-32 lg:pb-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="text-center lg:text-left animate-fade-in">
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                                Your mind&apos;s{' '}
                                <span className="bg-gradient-text bg-clip-text text-transparent">
                                    gentle assistant
                                </span>
                            </h1>
                            <p className="text-xl text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0">
                                Tell Nudgify what you care about, and it will nudge you when it matters.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                <NudgifyButton variant="hero" size="xl" asChild>
                                    <a href="https://app.nudgify.novento.io" className="group">
                                        Start Nudging Me
                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </a>
                                </NudgifyButton>
                                <NudgifyButton variant="outline" size="xl">Watch Demo</NudgifyButton>
                            </div>
                            <div className="flex items-center justify-center lg:justify-start mt-8 space-x-6 text-sm text-muted-foreground">
                                <div className="flex items-center space-x-2">
                                    <CheckCircle className="w-4 h-4 text-success" />
                                    <span>Free to start</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <CheckCircle className="w-4 h-4 text-success" />
                                    <span>No credit card</span>
                                </div>
                            </div>
                        </div>
                        <div className="relative animate-fade-in">
                            <div className="absolute inset-0 bg-gradient-hero rounded-3xl blur-3xl opacity-20 animate-pulse-soft"></div>
                            <Image
                                src="/nudgify-assets/hero-illustration.jpg"
                                alt="Nudgify illustration showing diverse nudge types"
                                width={800}
                                height={600}
                                className="relative z-10 w-full rounded-3xl shadow-soft animate-float"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Key Benefits Section */}
            <section className="py-16 lg:py-24 bg-muted/30">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                            Why choose <span className="bg-gradient-text bg-clip-text text-transparent">Nudgify</span>?
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            The intelligent way to stay on top of what matters most to you.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Benefits cards */}
                        {[{
                            icon: Brain,
                            title: "Speak naturally",
                            description: "AI understands you",
                            color: "text-primary"
                        }, {
                            icon: Bell,
                            title: "Cross-channel delivery",
                            description: "In-app, email, Telegram",
                            color: "text-accent"
                        }, {
                            icon: Sparkles,
                            title: "One dashboard",
                            description: "Endless possibilities",
                            color: "text-warning"
                        }, {
                            icon: Shield,
                            title: "Private & secure",
                            description: "By design",
                            color: "text-success"
                        }].map((benefit, index) => (
                            <Card key={index} className="group hover:shadow-card transition-all duration-300 hover:-translate-y-1 border-0 bg-gradient-card">
                                <CardContent className="p-6 text-center">
                                    <div className={`w-12 h-12 rounded-lg bg-background shadow-soft mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                                        <benefit.icon className={`w-6 h-6 ${benefit.color}`} />
                                    </div>
                                    <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                                    <p className="text-muted-foreground">{benefit.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works Section */}
            <section className="py-16 lg:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                            How it <span className="bg-gradient-text bg-clip-text text-transparent">works</span>
                        </h2>
                        <p className="text-xl text-muted-foreground">
                            Three simple steps to never forget what matters
                        </p>
                    </div>
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="relative">
                            <Image
                                src="/nudgify-assets/how-it-works.jpg"
                                alt="How Nudgify works - 3 step process"
                                width={800}
                                height={600}
                                className="w-full rounded-3xl shadow-card"
                            />
                        </div>
                        <div className="space-y-8">
                            {/* Steps */}
                            {[{
                                step: "1",
                                title: "Type a request",
                                description: "Just tell Nudgify what you want to remember in plain English. Simple nudges like 'Remind me to drink water every 2 hours' or 'Nudge me about mom's birthday next week', or complex ones like 'Wake me up when Bitcoin goes below 100K' or 'Nudge me 5 min before Barcelona vs Real game starts'",
                                icon: MessageSquare
                            }, {
                                step: "2",
                                title: "AI turns it into a Nudge Card",
                                description: "Our intelligent system understands your intent and creates a beautiful, actionable Nudge Card with the perfect timing and context.",
                                icon: Brain
                            }, {
                                step: "3",
                                title: "Get nudged at the perfect moment",
                                description: "Receive gentle reminders exactly when you need them, through your preferred channels - in-app, email, or Telegram. Critical nudges can even wake you up from sleep mode, like PagerDuty for your personal life.",
                                icon: Bell
                            }].map((step, index) => (
                                <div key={index} className="flex items-start space-x-4">
                                    <div className="flex-shrink-0">
                                        <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-lg">
                                            {step.step}
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex items-center space-x-3 mb-2">
                                            <step.icon className="w-5 h-5 text-primary" />
                                            <h3 className="text-xl font-semibold">{step.title}</h3>
                                        </div>
                                        <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Social Proof Section */}
            <section className="py-16 lg:py-24 bg-muted/30">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                            Loved by <span className="bg-gradient-text bg-clip-text text-transparent">thousands</span>
                        </h2>
                        <p className="text-xl text-muted-foreground">
                            Join the community of mindful productivity enthusiasts
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8 mb-12">
                        {/* Testimonials */}
                        {[
                            {
                                name: "Sarah Chen",
                                role: "Product Manager",
                                content: "Nudgify has transformed how I stay on top of my goals. The AI really understands what I need and when I need it.",
                                avatar: "SC"
                            },
                            {
                                name: "Marcus Johnson",
                                role: "Entrepreneur",
                                content: "Finally, a reminder app that doesn't feel overwhelming. It's like having a gentle, intelligent assistant.",
                                avatar: "MJ"
                            },
                            {
                                name: "Elena Rodriguez",
                                role: "Designer",
                                content: "The interface is beautiful and the nudges actually help me build better habits. Highly recommend!",
                                avatar: "ER"
                            }
                        ].map((testimonial, index) => (
                            <Card key={index} className="border-0 bg-background shadow-card">
                                <CardContent className="p-6">
                                    <p className="text-muted-foreground mb-4 italic">&quot;{testimonial.content}&quot;</p>
                                    <div className="flex items-center space-x-3">
                                        <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center text-white font-semibold text-sm">
                                            {testimonial.avatar}
                                        </div>
                                        <div>
                                            <div className="font-semibold">{testimonial.name}</div>
                                            <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                    <div className="text-center">
                        <p className="text-muted-foreground mb-8">Backed by</p>
                        <div className="flex items-center justify-center space-x-8 opacity-60">
                            <div className="text-lg font-semibold">TechStars</div>
                            <div className="text-lg font-semibold">Y Combinator</div>
                            <div className="text-lg font-semibold">500 Global</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA Section */}
            <section className="py-16 lg:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-gradient-hero rounded-3xl p-8 lg:p-16 text-center text-white relative overflow-hidden">
                        <div className="absolute inset-0 bg-black/10"></div>
                        <div className="relative z-10">
                            <h2 className="text-3xl lg:text-5xl font-bold mb-4">
                                Ready to never forget again?
                            </h2>
                            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                                Join thousands who&apos;ve transformed their productivity with gentle, intelligent nudges.
                            </p>
                            <NudgifyButton variant="secondary" size="xl" asChild className="bg-white text-primary hover:bg-white/90">
                                <a href="https://app.nudgify.novento.io" className="group">
                                    Start Nudging Me
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </a>
                            </NudgifyButton>
                            <p className="text-sm mt-4 opacity-75">Free to start • No credit card required</p>
                        </div>
                        {/* Floating icons */}
                        <div className="absolute top-8 left-8 animate-float">
                            <Heart className="w-8 h-8 text-white/30" />
                        </div>
                        <div className="absolute top-16 right-16 animate-float" style={{ animationDelay: '1s' }}>
                            <Calendar className="w-6 h-6 text-white/30" />
                        </div>
                        <div className="absolute bottom-8 left-16 animate-float" style={{ animationDelay: '2s' }}>
                            <DollarSign className="w-7 h-7 text-white/30" />
                        </div>
                        <div className="absolute bottom-16 right-8 animate-float" style={{ animationDelay: '0.5s' }}>
                            <Lightbulb className="w-6 h-6 text-white/30" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-12 border-t border-border">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row items-center justify-between">
                        <div className="flex items-center space-x-2 mb-4 md:mb-0">
                            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                                <Bell className="w-5 h-5 text-white" />
                            </div>
                            <span className="text-xl font-bold bg-gradient-text bg-clip-text text-transparent">
                                Nudgify
                            </span>
                        </div>
                        <div className="flex items-center space-x-6">
                            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                Privacy
                            </a>
                            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                Terms
                            </a>
                            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                Contact
                            </a>
                        </div>
                    </div>
                    <div className="mt-8 pt-8 border-t border-border text-center text-muted-foreground">
                        <p>&copy; 2025 Nudgify. All rights reserved. Made with ❤️ for mindful productivity.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
} 