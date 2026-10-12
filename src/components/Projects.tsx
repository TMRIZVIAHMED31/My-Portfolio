/**
 * Projects section.
 * MOTION: cards reveal on scroll and use a spring `whileHover` lift, so the
 * motion feels physical rather than a stiff CSS ease.
 * SHADCN/UI: <Card>, <Badge>, <Button asChild> (renders real <a> links for Live Demo / GitHub).
 * Project content comes from `src/lib/data.ts`, so adding a third project is just one new object.
 */
import { motion } from "motion/react"
import { Check, ExternalLink } from "lucide-react"

import { GithubIcon } from "@/components/icons"
import { Reveal } from "@/components/Reveal"
import { SectionHeading } from "@/components/SectionHeading"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { projects } from "@/lib/data"

export function Projects() {
  return (
    <section id="projects" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          index="03 / projects"
          title="Featured projects"
          subtitle="Two full-stack MERN applications, deployed to production."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={i * 0.1} className="h-full">
              <motion.div whileHover={{ y: -4 }} transition={{ type: "spring", stiffness: 300, damping: 24 }} className="h-full">
                <Card className="h-full gap-6 transition-shadow hover:shadow-xl">
                  <CardHeader>
                    <p className="font-mono text-xs text-primary">
                      {String(i + 1).padStart(2, "0")} · {project.subtitle}
                    </p>
                    <CardTitle className="text-2xl">{project.title}</CardTitle>
                    <CardDescription className="pt-1 text-base leading-relaxed">
                      {project.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="flex-1 space-y-5">
                    <ul className="space-y-2.5">
                      {project.highlights.map((h) => (
                        <li key={h} className="flex gap-2.5 text-sm text-muted-foreground">
                          <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-1.5">
                      {project.stack.map((s) => (
                        <Badge key={s} variant="secondary" className="font-mono">
                          {s}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>

                  <CardFooter className="flex-wrap gap-3">
                    <Button asChild>
                      <a href={project.live} target="_blank" rel="noreferrer">
                        <ExternalLink /> Live Demo
                      </a>
                    </Button>
                    <Button asChild variant="outline">
                      <a href={project.github} target="_blank" rel="noreferrer">
                        <GithubIcon /> GitHub
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
