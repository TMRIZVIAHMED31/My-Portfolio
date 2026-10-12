import { profile } from "@/lib/data"

export function Footer() {
  return (
    <footer className="border-t py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-5 text-sm text-muted-foreground sm:flex-row">
        <p>
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
        <p className="font-mono text-xs">Built with React, Vite, Tailwind CSS &amp; Motion</p>
      </div>
    </footer>
  )
}
