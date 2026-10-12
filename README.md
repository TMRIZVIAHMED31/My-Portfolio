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

## Deploy to Vercel

This project is ready to deploy on Vercel using the Vite preset.

### 1. Push the project to GitHub

Make sure the latest project files are pushed to a GitHub repository. This project is available at:

https://github.com/TMRIZVIAHMED31/My-Portfolio

### 2. Import the repository into Vercel

1. Open https://vercel.com and sign in.
2. From the dashboard, select **Add New…** → **Project**.
3. Under **Import Git Repository**, find `TMRIZVIAHMED31/My-Portfolio`.
4. Select **Import**.
5. If GitHub is not listed, select **Adjust GitHub App Permissions** and grant Vercel access to the repository.

### 3. Configure the project

On the project configuration screen, use these settings:

| Setting | Value |
| --- | --- |
| Framework Preset | `Vite` |
| Root Directory | `./` |
| Build Command | `npm run build` |
| Output Directory | `dist` |
| Install Command | `npm install` |

Vercel normally detects all of these settings automatically. Only change them if Vercel does not detect the Vite project correctly.

### 4. Add the Formspree environment variable

Before deploying, expand **Environment Variables** and add:

| Name | Value | Environments |
| --- | --- | --- |
| `VITE_FORMSPREE_ID` | `mppqlnnr` | Production, Preview, Development |

This enables the contact form to send messages through Formspree. The value is safe to expose in the browser because it is a public form ID, not a private API key.

Do not upload `.env` to GitHub. It is ignored by `.gitignore`. Use `.env.example` as the configuration template for local development.

### 5. Deploy

1. Select **Deploy**.
2. Wait for the build to finish.
3. Select **Continue to Dashboard**.
4. Open the generated `vercel.app` URL to test the portfolio.

To test the contact form, submit a test message and confirm that it appears in the Formspree dashboard or arrives at the configured email address.

### 6. Deploy future changes

Vercel automatically creates a new deployment whenever you push to the connected GitHub branch:

```bash
git add .
git commit -m "Describe your change"
git push origin main
```

Pull requests and non-production branches create Preview deployments. Changes merged into `main` create a Production deployment.

You can also redeploy manually:

1. Open the project in the Vercel dashboard.
2. Select the **Deployments** tab.
3. Open the deployment menu (`...`).
4. Select **Redeploy**.

### 7. Add a custom domain (optional)

1. Open the project in Vercel.
2. Select **Settings** → **Domains**.
3. Enter your domain and select **Add**.
4. Follow Vercel's DNS instructions at your domain provider.
5. Wait for DNS verification and HTTPS certificate provisioning.

### Troubleshooting

- **Contact form opens an email app:** Confirm `VITE_FORMSPREE_ID` is set in Vercel for the deployment environment, then redeploy. Vite environment variables are applied at build time.
- **Environment variable changes have no effect:** Create a new deployment after changing the variable; existing builds do not automatically rebuild.
- **Build fails:** Confirm the repository root contains `package.json`, run `npm install`, and verify locally with `npm run build`.
- **A 404 appears after deployment:** Confirm the Vercel framework preset is `Vite`, the output directory is `dist`, and the root directory is `./`.
- **The CV or profile image is missing:** Confirm `public/Rizvi_Ahmed_CV.pdf` and `src/assets/profile.jpg` are committed to GitHub.
