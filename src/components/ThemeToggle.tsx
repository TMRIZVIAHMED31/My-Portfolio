/**
 * MOTION: `AnimatePresence` lets the outgoing sun/moon icon animate OUT before
 * the new one animates in (plain React would just swap them instantly).
 */
import { AnimatePresence, motion } from "motion/react"
import { Moon, Sun } from "lucide-react"

import { Button } from "@/components/ui/button"

type Props = {
  theme: "light" | "dark"
  onToggle: () => void
}

export function ThemeToggle({ theme, onToggle }: Props) {
  const isDark = theme === "dark"

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={onToggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="overflow-hidden"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          initial={{ y: -14, opacity: 0, rotate: -60 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          exit={{ y: 14, opacity: 0, rotate: 60 }}
          transition={{ duration: 0.18 }}
          className="flex"
        >
          {isDark ? <Sun className="size-5" /> : <Moon className="size-5" />}
        </motion.span>
      </AnimatePresence>
    </Button>
  )
}
