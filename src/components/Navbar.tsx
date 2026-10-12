/**
 * Sticky navigation bar.
 * REACT: `useState` tracks the mobile menu and whether the page has scrolled.
 * TAILWIND: `md:` classes show the full link row on desktop and a hamburger on mobile.
 * MOTION: `AnimatePresence` animates the mobile menu open/closed, and
 * `useScroll` + `useSpring` drive the thin reading-progress bar at the bottom of the header.
 */
import { useEffect, useState } from "react"
import { AnimatePresence, motion, useScroll, useSpring } from "motion/react"
import { Menu, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/ThemeToggle"
import { navLinks, profile } from "@/lib/data"
import { cn } from "@/lib/utils"

type Props = {
  theme: "light" | "dark"
  onToggleTheme: () => void
}

export function Navbar({ theme, onToggleTheme }: Props) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // MOTION: scrollYProgress goes 0 → 1 as you scroll; useSpring smooths it so the bar glides.
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.3 })

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || open
          ? "border-b bg-background/80 backdrop-blur-lg"
          : "border-b border-transparent"
      )}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#top" className="flex items-center gap-2 font-bold tracking-tight">
          <span className="grid size-8 place-items-center rounded-lg bg-primary font-mono text-sm text-primary-foreground">
            R
          </span>
          <span className="hidden sm:inline">{profile.name}</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <Button asChild size="sm" className="ml-1 hidden md:inline-flex">
            <a href={profile.resume} target="_blank" rel="noreferrer">
              Resume
            </a>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="overflow-hidden md:hidden"
          >
            <ul className="mx-auto flex max-w-6xl flex-col gap-1 px-5 pb-5">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-md px-3 py-3 text-base font-medium hover:bg-accent"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <Button asChild className="w-full">
                  <a href={profile.resume} target="_blank" rel="noreferrer">
                    Resume
                  </a>
                </Button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Reading-progress bar (scaleX is GPU-accelerated, so it stays smooth) */}
      <motion.div
        aria-hidden
        style={{ scaleX: progress }}
        className="absolute inset-x-0 bottom-0 h-0.5 origin-left bg-primary"
      />
    </header>
  )
}
