/**
 * Skills section.
 * SHADCN/UI: <Card> per category and <Badge> per skill. TAILWIND: the grid goes
 * 1 → 2 → 3 columns across breakpoints. MOTION: each card reveals on scroll
 * (staggered by index) and each badge lifts slightly on hover.
 */
import { motion } from "motion/react"

import { Reveal } from "@/components/Reveal"
import { SectionHeading } from "@/components/SectionHeading"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { skillGroups } from "@/lib/data"

export function Skills() {
  return (
    <section id="skills" className="border-y bg-muted/40 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          index="02 / skills"
          title="Technical skills"
          subtitle="The languages, frameworks and tools I use to design, build and ship."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <Reveal key={group.title} delay={i * 0.06} className={i === 0 ? "lg:col-span-1" : ""}>
              <Card className="h-full transition-shadow hover:shadow-md">
                <CardHeader>
                  <CardTitle className="font-mono text-sm tracking-wide text-primary uppercase">
                    {group.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <motion.span key={skill} whileHover={{ y: -2 }} className="inline-flex">
                      <Badge variant="outline" className="px-3 py-1 text-sm">
                        {skill}
                      </Badge>
                    </motion.span>
                  ))}
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
