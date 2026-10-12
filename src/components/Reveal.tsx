/**
 * WHY MOTION HERE?
 * `whileInView` animates an element the first time it scrolls into view, so
 * sections fade up gently as you read down the page. `once: true` means it
 * plays a single time (no distracting re-animation when scrolling back up).
 */
import type { ReactNode } from "react"
import { motion } from "motion/react"

type RevealProps = {
  children: ReactNode
  delay?: number
  y?: number
  className?: string
}

/** Fades and lifts its children into view once, when scrolled into the viewport. */
export function Reveal({ children, delay = 0, y = 20, className }: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}
