/**
 * About section: shadcn/ui <Card>s for education and certification, Tailwind for
 * the responsive two-column layout, and <Reveal> (Motion) for the scroll-in effect.
 */
import { Award, GraduationCap } from "lucide-react"

import { Reveal } from "@/components/Reveal"
import { SectionHeading } from "@/components/SectionHeading"
import { Card, CardContent } from "@/components/ui/card"
import { certification, education, profile } from "@/lib/data"

export function About() {
  return (
    <section id="about" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading index="01 / about" title="About me" />

        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <Reveal className="space-y-5 text-lg leading-relaxed text-muted-foreground">
            {profile.about.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </Reveal>

          <div className="space-y-4">
            <Reveal delay={0.1}>
              <Card className="py-5">
                <CardContent className="flex gap-4">
                  <span className="grid size-11 shrink-0 place-items-center rounded-lg bg-accent text-accent-foreground">
                    <GraduationCap className="size-5" />
                  </span>
                  <div>
                    <p className="font-bold">{education.school}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{education.degree}</p>
                    <p className="mt-2 font-mono text-xs text-primary">
                      {education.period} · {education.place}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </Reveal>

            <Reveal delay={0.2}>
              <Card className="py-5">
                <CardContent className="flex gap-4">
                  <span className="grid size-11 shrink-0 place-items-center rounded-lg bg-accent text-accent-foreground">
                    <Award className="size-5" />
                  </span>
                  <div>
                    <p className="font-bold">{certification.title}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{certification.issuer}</p>
                    <p className="mt-2 font-mono text-xs text-primary">
                      Issued {certification.issued}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
