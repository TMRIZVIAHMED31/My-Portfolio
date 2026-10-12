/**
 * Experience section: a Tailwind-styled timeline (vertical line + dot) with a
 * <Reveal> (Motion) entrance. Content lives in `src/lib/data.ts`.
 */
import { Briefcase } from "lucide-react"

import { Reveal } from "@/components/Reveal"
import { SectionHeading } from "@/components/SectionHeading"
import { Badge } from "@/components/ui/badge"
import { experience } from "@/lib/data"

export function Experience() {
  return (
    <section id="experience" className="border-y bg-muted/40 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading index="04 / experience" title="Internship experience" />

        <div className="relative pl-8 sm:pl-12">
          <div className="absolute top-2 bottom-0 left-[0.95rem] w-px bg-border sm:left-[1.45rem]" />
          <Reveal>
            <span className="absolute top-1 left-0 grid size-8 place-items-center rounded-full bg-primary text-primary-foreground ring-4 ring-background sm:size-11">
              <Briefcase className="size-4 sm:size-5" />
            </span>

            <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
              <h3 className="text-2xl font-bold">{experience.role}</h3>
              <Badge variant="accent">{experience.mode}</Badge>
            </div>
            <p className="mt-1 text-lg font-semibold text-primary">{experience.company}</p>
            <p className="mt-1 font-mono text-sm text-muted-foreground">{experience.period}</p>

            <ul className="mt-6 space-y-3">
              {experience.points.map((point) => (
                <li key={point} className="flex gap-3 leading-relaxed text-muted-foreground">
                  <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-primary" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
