# Novento Monorepo

A **pnpm + Turborepo** workspace that hosts all first‑party Novento applications, shared packages, and infra‑as‑code in one place. The goal is to keep UI generated in **Lovable**, business logic and tests in **Cursor**, and deploy everything painlessly to **Vercel** & **Supabase**.

> **Why a monorepo?** Faster local setup, single lock‑file for reproducible builds, atomic PRs that touch multiple apps, shared ESLint/TS configs, and one CI pipeline.

---

\## 🔍 Repository Layout

| Path                  | What lives here                    | Notes                                         |
| --------------------- | ---------------------------------- | --------------------------------------------- |
| `apps/website`        | Public marketing site (Next.js 15) | Tailwind + shadcn/ui. Has its **own** README. |
| `apps/nudgify`        | (Planned) SaaS pet project & auth    | Next.js + Supabase Auth.                      |
| `packages/ui`         | (Planned) Shared React components  | Published as `@novento/ui`.                   |
| `packages/config/*`   | Shared ESLint, Prettier, tsconfig  | Consumed by all apps.                         |
| `infra/`              | IaC & DB migrations                | Supabase CLI & migration files.               |
| `turbo.json`          | Turborepo pipeline                 | Build / test / lint caching.                  |
| `pnpm-workspace.yaml` | Workspace graph                    | Tells pnpm what is **in‑repo**.               |

---

\## 🚀 Quick Start (Local Dev)

```bash
# 1. Clone & enter
$ git clone git@github.com:pavelrephiah/novento.git
$ cd novento

# 2. Install (single lock‑file!)
$ pnpm install

# 3. Run the Website app
$ pnpm dev --filter=@novento/website...
```

**Prerequisites**

* Node >= 22 (LTS recommended)
* pnpm >= 9 (`corepack enable && corepack prepare pnpm@latest --activate`)
* Supabase CLI (if you plan to run the Nudgify DB locally later)

---

\## 🏗️ Build Commands

| Task                  | Command                                 |
| --------------------- | --------------------------------------- |
| Build *one* app       | `pnpm build --filter=@novento/<app>...` |
| Build everything (CI) | `pnpm turbo run build`                  |
| Lint all packages     | `pnpm turbo run lint`                   |
| Vitest unit tests     | `pnpm turbo run test`                   |

> Turborepo automatically caches build & test artefacts → repeat runs are lightning‑fast.

---

\## 🌐 Deploying to Vercel (monorepo pattern)

| App                | Vercel Build Command                      | Output Dir           |
| ------------------ | ----------------------------------------- | -------------------- |
| `@novento/website` | `pnpm build --filter=@novento/website...` | `apps/website/.next` |
| `@novento/nudgify` | `pnpm build --filter=@novento/nudgify...` | `apps/nudgify/.next` |

Project settings (per Vercel project):

```
Root Directory  = (leave blank)
Node Version    =22.x
Build Command   = <from table above>
Output Directory = <from table above>
```

The **`novento`** Vercel project currently deploys the website. A second project (same repo) will deploy Nudgify using the same pattern.

---

\## ✍️ Contributing / Branch Strategy

1. Create a feature branch (`git checkout -b feat/<something>`) off **main**.
2. Keep PRs scoped; CI runs `lint + build + test`.
3. Once the preview deploy is green, request review and **squash‑merge**.
4. Merges to **main** auto‑deploy to production via Vercel.

> **Protected Branches**
>
> * `main` – PR‑only. No force‑pushes.

---

\## 📚 App‑Specific Docs

Each app should ship its own README for deep dives:

* [`apps/website/README.md`](./apps/website/README.md) – tech stack, content model, design tokens.
* (`apps/nudgify/README.md` coming soon)

---

\## 🛠 Tooling Reference

* **Lovable** – Rapid UI scaffolding
* **Cursor / VS Code** – Custom logic, tests, OpenAI calls
* **Supabase** – Auth & DB (RLS on all tables)
* **Stripe** – Billing (upcoming)
* **Playwright** – E2E (planned)

---

\## License

MIT © Novento 2025
