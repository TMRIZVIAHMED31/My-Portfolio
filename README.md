# Rizvi Ahmed — Portfolio

React + Vite + TypeScript, Tailwind CSS v4, shadcn/ui-style components, and Motion for React.

## Why this stack

| Tool | Why it's used here |
| --- | --- |
| **React + Vite** | React builds the page from reusable components and data; Vite gives an instant dev server and a fast, optimized production build. |
| **Tailwind CSS** | Responsive layouts and dark mode with utility classes, no separate stylesheets to maintain. |
| **shadcn/ui** | Clean, accessible components (Button, Card, Badge, Input…) that live in your own code so you can restyle them freely. |
| **Motion for React** | Smooth entrance, scroll-reveal, hover, and menu animations, plus the scroll-progress bar. |
| **Vercel** | One-click deploys from GitHub with free HTTPS and a global CDN, so the portfolio loads fast anywhere. |

Each source file also has a comment at the top explaining which of these it uses and why.

## Run it

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # typecheck + production build into dist/
npm run preview    # serve the production build locally
```

## Before you publish — replace these placeholders

Open `src/lib/data.ts` and update every line marked `REPLACE`:

- `socials.github` — your GitHub profile URL
- `projects[0].live` / `projects[0].github` — E-Commerce live URL and repo
- `projects[1].live` / `projects[1].github` — Chat app live URL and repo

Everything else (intro, skills, experience, contact details) comes from your CV and is edited in the same file.

## Contact form

By default the form opens the visitor's email app addressed to you. To receive messages directly:

1. Create a free form at https://formspree.io and copy its ID.
2. Copy `.env.example` to `.env` and set `VITE_FORMSPREE_ID` to your Formspree form ID.
3. On Vercel, add the same variable under Project Settings → Environment Variables.

The local `.env` is configured for the current Formspree form. Do not commit it; use `.env.example` as the template for other environments.

## Other notes

- Resume button serves `public/Rizvi_Ahmed_CV.pdf`. Replace that file when you update your CV.
- Hero photo is `src/assets/profile.jpg` (cropped from your CV photo) — swap it for a better one if you like.
- Dark mode follows the visitor's system setting on first visit, then remembers their choice.
- Animations are disabled automatically for visitors who prefer reduced motion.
- Add more shadcn/ui components any time with `npx shadcn@latest add <component>` (`components.json` is already set up).

## Deploy

Push to GitHub and import the repo on Vercel — the Vite preset works with no extra configuration.
