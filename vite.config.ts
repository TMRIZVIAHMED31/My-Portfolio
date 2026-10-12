/**
 * WHY VITE (+ React)?
 * - Vite is the dev server and bundler: it starts instantly and hot-reloads
 *   edits in milliseconds, so building the portfolio feels fast.
 * - `npm run build` produces a small, optimized static site in `dist/`.
 *
 * WHY VERCEL?
 * - Vercel detects a Vite project automatically (build: `npm run build`,
 *   output: `dist`), so deploying is just "import the GitHub repo".
 * - Every push redeploys, and you get free HTTPS and a global CDN, which keeps
 *   a portfolio fast for recruiters anywhere.
 */
import path from "node:path"
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react" // WHY: enables React JSX + fast refresh in Vite
import tailwindcss from "@tailwindcss/vite" // WHY: Tailwind v4 runs as a Vite plugin, no config file needed

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      // WHY: lets us write `@/components/...` instead of long `../../` paths.
      // shadcn/ui expects this alias too.
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
