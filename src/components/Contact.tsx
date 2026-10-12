/**
 * Contact section.
 * REACT: `useState` tracks the form status (idle / sending / sent / error).
 * SHADCN/UI: <Input>, <Textarea>, <Label>, <Button>, <Card> for an accessible form.
 * MOTION: `AnimatePresence` fades the success/error message in and out.
 */
import { useState, type FormEvent } from "react"
import { AnimatePresence, motion } from "motion/react"
import { CheckCircle2, Mail, MessageCircle, Send } from "lucide-react"

import { GithubIcon, LinkedinIcon } from "@/components/icons"
import { Reveal } from "@/components/Reveal"
import { SectionHeading } from "@/components/SectionHeading"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { profile, socials } from "@/lib/data"

/**
 * Optional: create a free form at https://formspree.io and put its ID in a
 * `.env` file as  VITE_FORMSPREE_ID=xxxxxxx  to receive messages by email.
 * Without it, the form falls back to opening the visitor's email app.
 */
const FORMSPREE_ID = import.meta.env.VITE_FORMSPREE_ID as string | undefined

type Status = "idle" | "sending" | "sent" | "error"

const links = [
  { label: "Email", href: socials.email, icon: Mail, text: profile.email },
  { label: "LinkedIn", href: socials.linkedin, icon: LinkedinIcon, text: "t-m-rizvi-ahmed" },
  { label: "GitHub", href: socials.github, icon: GithubIcon, text: "GitHub profile" },
  { label: "WhatsApp", href: socials.whatsapp, icon: MessageCircle, text: profile.phone },
]

export function Contact() {
  const [status, setStatus] = useState<Status>("idle")

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const name = String(data.get("name") ?? "")
    const email = String(data.get("email") ?? "")
    const message = String(data.get("message") ?? "")

    if (!FORMSPREE_ID) {
      const subject = encodeURIComponent(`Portfolio message from ${name}`)
      const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`)
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
      return
    }

    setStatus("sending")
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      })
      if (!res.ok) throw new Error("Request failed")
      form.reset()
      setStatus("sent")
    } catch {
      setStatus("error")
    }
  }

  return (
    <section id="contact" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          index="05 / contact"
          title="Let's work together"
          subtitle="I'm looking for an entry-level software engineering role. Send a message and I'll get back to you."
        />

        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal className="space-y-3">
            {links.map(({ label, href, icon: Icon, text }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="group flex items-center gap-4 rounded-xl border bg-card p-4 transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:shadow-md"
              >
                <span className="grid size-11 place-items-center rounded-lg bg-accent text-accent-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="size-5" />
                </span>
                <span className="min-w-0">
                  <span className="block text-sm font-semibold">{label}</span>
                  <span className="block truncate text-sm text-muted-foreground">{text}</span>
                </span>
              </a>
            ))}
          </Reveal>

          <Reveal delay={0.1}>
            <Card>
              <CardContent>
                <form onSubmit={onSubmit} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" name="name" placeholder="Your name" required autoComplete="name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="you@example.com"
                        required
                        autoComplete="email"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" name="message" placeholder="Tell me about the role or project…" required />
                  </div>

                  <div className="flex flex-wrap items-center gap-4">
                    <Button type="submit" size="lg" disabled={status === "sending"}>
                      <Send /> {status === "sending" ? "Sending…" : "Send message"}
                    </Button>
                    <AnimatePresence mode="wait">
                      {status === "sent" && (
                        <motion.p
                          key="sent"
                          initial={{ opacity: 0, x: -8 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0 }}
                          role="status"
                          className="flex items-center gap-2 text-sm font-medium text-primary"
                        >
                          <CheckCircle2 className="size-4" /> Thanks! Your message was sent.
                        </motion.p>
                      )}
                      {status === "error" && (
                        <motion.p
                          key="error"
                          initial={{ opacity: 0, x: -8 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0 }}
                          role="alert"
                          className="text-sm font-medium text-destructive"
                        >
                          Something went wrong. Please email me directly instead.
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                </form>
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
