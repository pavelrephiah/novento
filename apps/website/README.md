# Novento Website (`apps/website`)

**Landing for [novento.io](https://novento.io)** — personal homepage of **Pavel Rephiah** and a hub showcasing his portfolio & pet‑projects. Built with **Next.js 15**, Tailwind CSS, and shadcn/ui, deployed from a pnpm + Turborepo monorepo to Vercel.

---

## 🛠 Tech Stack

* **Framework**  Next.js 15 (App Router, React Server Components)
* **Language**  TypeScript
* **Styling**  Tailwind CSS
* **UI Components**  shadcn/ui (+ custom wrappers)
* **State / Data**  TanStack Query
* **Theming**  next‑themes (dark / light)
* **Icons**  Lucide React
* **Animations**  Framer Motion (lightweight)
* **Tooling**  pnpm · Turborepo · ESLint · Prettier · Vitest / Playwright (planned)

---

## 🗂 Project Structure

```text
apps/website
├── src/
│   ├── app/             # Next.js App Router
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── globals.css
│   │   ├── novento/     # /novento route
│   │   └── not-found.tsx
│   ├── components/
│   │   ├── ui/          # shadcn/ui components
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Principles.tsx
│   │   ├── WhatsNext.tsx
│   │   ├── Connect.tsx
│   │   └── ThemeToggle.tsx
│   ├── hooks/
│   ├── lib/
│   └── public/
```

---

## ✨ Key Features

* **Responsive split‑panel layout** on desktop, stacked on mobile.
* **Dark / Light mode** with system preference & manual toggle.
* **Type‑safe** end‑to‑end using strict TypeScript.
* **Server + Client Components** for optimal performance.
* **SEO‑ready**: dynamic meta + upcoming OG image generation.
* **Zero‑config CI/CD** via Vercel & Turborepo caching.

---

## ⚙️ Local Development

From the **monorepo root**

```bash
pnpm install                       # one lock‑file for all packages
pnpm dev --filter=@novento/website # http://localhost:3000
```

From the **app directory** (`apps/website`)

```bash
pnpm install  # optional; uses same lock‑file
pnpm dev
```

Production‑style build & start

```bash
pnpm build --filter=@novento/website
pnpm start --filter=@novento/website
```

Lint

```bash
pnpm lint --filter=@novento/website
```

---

## 🌍 Routes

| Path       | Purpose                  |
| ---------- | ------------------------ |
| `/`        | Home (about Pavel)       |
| `/novento` | Novento digital lab page |
| `*`        | Custom 404               |

---

## 🚀 Deployment (Vercel – Monorepo Pattern)

| Setting          | Value                                     |
| ---------------- | ----------------------------------------- |
| Root Directory   | *(blank — repo root)*                     |
| Build Command    | `pnpm build --filter=@novento/website...` |
| Output Directory | `apps/website/.next`                      |
| Node Version     | 18.x                                      |

Domain **novento.io** is attached to the **novento** Vercel project. Merges to `main` auto‑deploy.

---

## 🛣 Roadmap

1. **Facelift v1.1** — adopt split‑panel + smooth section scroll / active link.
2. OG image generation with Satori / Vercel OG.
3. Dark‑mode persistence via cookies.
4. Playwright smoke suite in CI.

---

## 🔖 License

MIT © Pavel Rephiah 2025
