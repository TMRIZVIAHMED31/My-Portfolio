import { Reveal } from "@/components/Reveal"

type Props = {
  index: string
  title: string
  subtitle?: string
}

export function SectionHeading({ index, title, subtitle }: Props) {
  return (
    <Reveal className="mb-12 max-w-2xl">
      <p className="mb-3 font-mono text-sm text-primary">{index}</p>
      <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">{title}</h2>
      {subtitle && <p className="mt-3 text-muted-foreground">{subtitle}</p>}
    </Reveal>
  )
}
