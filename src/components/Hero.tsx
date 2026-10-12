/**
 * Hero section.
 * MOTION: `variants` + `staggerChildren` make the headline, role, intro, and
 * buttons appear one after another (a polished first impression). The photo
 * scales in, the glow "breathes", and the stack chip floats, all with
 * Motion's `animate` + `transition`, no CSS keyframes needed.
 * TAILWIND: the two-column layout collapses to one column on small screens (`lg:grid-cols-...`).
 * SHADCN/UI: <Button> and <Badge> for the calls to action and status pill.
 */
import { motion } from "motion/react"
import { ArrowDown, Download, MapPin } from "lucide-react"

import profilePhoto from "@/assets/profile.jpg"
import { GithubIcon, LinkedinIcon } from "@/components/icons"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { profile, socials } from "@/lib/data"

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
}

const item = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28">
      <div className="bg-grid pointer-events-none absolute inset-0 -z-10" />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-24 right-[-10%] -z-10 size-[28rem] rounded-full bg-primary/20 blur-3xl"
        animate={{ scale: [1, 1.08, 1], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-[1.25fr_0.75fr]">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div variants={item}>
            <Badge variant="accent" className="gap-2 px-3 py-1.5 text-sm">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-60" />
                <span className="relative inline-flex size-2 rounded-full bg-primary" />
              </span>
              Open to entry-level software roles
            </Badge>
          </motion.div>

          <motion.p variants={item} className="mt-7 font-mono text-sm text-muted-foreground">
            Hi, my name is
          </motion.p>
          <motion.h1
            variants={item}
            className="mt-2 text-5xl leading-[1.05] font-extrabold tracking-tight sm:text-6xl lg:text-7xl"
          >
            {profile.name}
          </motion.h1>
          <motion.h2
            variants={item}
            className="mt-3 text-2xl font-bold tracking-tight text-primary sm:text-3xl"
          >
            {profile.role}
          </motion.h2>
          <motion.p variants={item} className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            {profile.intro}
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-3">
            <Button asChild size="lg">
              <a href={profile.resume} download="Rizvi_Ahmed_CV.pdf">
                <Download /> Download Resume
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="#projects">
                View Projects <ArrowDown />
              </a>
            </Button>
          </motion.div>

          <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-5 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="size-4" /> {profile.location}
            </span>
            <a
              href={socials.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground"
            >
              <GithubIcon className="size-4" /> GitHub
            </a>
            <a
              href={socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground"
            >
              <LinkedinIcon className="size-4" /> LinkedIn
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92, rotate: 2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-xs lg:max-w-sm"
        >
          <div className="absolute -inset-3 rotate-3 rounded-[2rem] border border-primary/40" />
          <div className="relative overflow-hidden rounded-[1.75rem] border bg-card shadow-xl">
            <img
              src={profilePhoto}
              alt={`Portrait of ${profile.name}`}
              width={640}
              height={853}
              className="aspect-[4/5] w-full object-cover object-top"
            />
          </div>
          <motion.div
            className="absolute -bottom-5 -left-4 rounded-xl border bg-card px-4 py-3 shadow-lg"
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <p className="font-mono text-xs text-muted-foreground">stack</p>
            <p className="text-sm font-bold">MongoDB · Express · React · Node</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
