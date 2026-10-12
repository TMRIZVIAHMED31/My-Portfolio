/**
 * App composes the page from section components (React).
 *
 * WHY MOTION FOR REACT?
 * Motion gives smooth, GPU-friendly animations with a tiny API
 * (`<motion.div animate={...} />`). It is used for: hero entrance, scroll
 * reveals, hover lifts, the theme-toggle icon swap, the mobile menu, and the
 * scroll progress bar. <MotionConfig> below applies one global rule to all of them.
 */
import { MotionConfig } from "motion/react"

import { About } from "@/components/About"
import { Contact } from "@/components/Contact"
import { Experience } from "@/components/Experience"
import { Footer } from "@/components/Footer"
import { Hero } from "@/components/Hero"
import { Navbar } from "@/components/Navbar"
import { Projects } from "@/components/Projects"
import { Skills } from "@/components/Skills"
import { useTheme } from "@/hooks/useTheme"

export default function App() {
  const { theme, toggle } = useTheme()

  return (
    // reducedMotion="user" disables transform animations for visitors who prefer reduced motion
    <MotionConfig reducedMotion="user">
      <Navbar theme={theme} onToggleTheme={toggle} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </MotionConfig>
  )
}
