# Pavel Rephiah - Website

A Next.js 15 application built with TypeScript, Tailwind CSS, and shadcn/ui components.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **State Management**: TanStack Query
- **Theme**: next-themes
- **Icons**: Lucide React

## Project Structure

```
src/
├── app/                 # Next.js App Router
│   ├── globals.css     # Global styles and design system
│   ├── layout.tsx      # Root layout with providers
│   ├── page.tsx        # Home page
│   ├── providers.tsx   # Client-side providers (QueryClient)
│   ├── novento/        # Novento page route
│   └── not-found.tsx   # 404 page
├── components/         # Reusable components
│   ├── ui/            # shadcn/ui components
│   ├── Hero.tsx       # Landing page sections
│   ├── About.tsx
│   ├── Principles.tsx
│   ├── WhatsNext.tsx
│   ├── Connect.tsx
│   ├── ThemeProvider.tsx
│   └── ThemeToggle.tsx
├── hooks/             # Custom React hooks
├── lib/               # Utility functions
└── public/            # Static assets
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (as this is part of a pnpm workspace)

### Installation

```bash
# Install dependencies (from the monorepo root)
pnpm install

# Or from this directory
pnpm install
```

### Development

```bash
# Start development server
pnpm dev

# The app will be available at http://localhost:3000
```

### Building

```bash
# Build for production
pnpm build

# Start production server
pnpm start
```

### Linting

```bash
# Run ESLint
pnpm lint
```

## Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Dark Mode**: System/manual theme switching with next-themes
- **Modern UI**: shadcn/ui components with consistent design system
- **Server Components**: Leverages Next.js 15 App Router for optimal performance
- **TypeScript**: Full type safety throughout the application
- **SEO Friendly**: Proper meta tags and semantic HTML

## Routes

- `/` - Home page (Pavel Rephiah profile)
- `/novento` - Novento digital lab page
- `*` - 404 Not Found page

## Deployment

This application is optimized for deployment on Vercel:

1. Connect your repository to Vercel
2. Set the root directory to `apps/website`
3. Vercel will automatically detect the Next.js configuration
4. Deploy!

The build output is compatible with any Node.js hosting platform that supports Next.js.

## Design System

The application uses a comprehensive design system defined in `src/app/globals.css`:

- **CSS Variables**: HSL-based color system for consistent theming
- **Custom Animations**: Fade-in effects and micro-interactions
- **Responsive Breakpoints**: Mobile-first responsive design
- **Dark Mode**: Automatic system theme detection with manual override

## Development Notes

- All components requiring client-side interactivity are marked with `"use client"`
- Server components are used by default for optimal performance
- The app uses Next.js 15's latest features including improved App Router
- shadcn/ui components are configured for React Server Components (RSC)

## Migration Notes

This project was migrated from Vite + React Router to Next.js 15:

- React Router navigation replaced with Next.js `<Link>` and App Router
- Vite build system replaced with Next.js built-in bundling
- Client/server component architecture implemented
- All routing converted to file-based App Router structure
