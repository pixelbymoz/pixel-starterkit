import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  ArrowUpRight,
  Database,
  Instagram,
  Layers,
  ShieldCheck,
  Sparkles,
  Linkedin,
  Wand2,
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />
      <main className="relative flex-1 overflow-hidden">
        <div className="pointer-events-none absolute inset-x-0 top-[-320px] -z-10 h-[620px] bg-[radial-gradient(circle_at_20%_20%,rgba(99,102,241,0.24),transparent_35%),radial-gradient(circle_at_80%_15%,rgba(16,185,129,0.2),transparent_32%),radial-gradient(circle_at_50%_80%,rgba(59,130,246,0.18),transparent_28%)]" />

        <section className="container px-6 pb-16 pt-14 lg:pt-24">
          <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-card px-3 py-1 text-sm shadow-sm backdrop-blur">
                <Sparkles className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">Production-ready SaaS starter</span>
              </div>
              <div className="space-y-4">
                <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                  Launch faster with a pixel-perfect starter kit.
                </h1>
                <p className="max-w-2xl text-lg text-muted-foreground sm:text-xl">
                  Pixel Starterkit pairs auth, database, and a refined component system so you can
                  go from idea to polished product without wrestling boilerplate.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <Button size="lg" className="gap-2" asChild>
                  <Link href="/sign-up">
                    Get started
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="gap-2" asChild>
                  <Link href="https://github.com/pixelbymoz/pixel-starterkit" target="_blank">
                    View on GitHub
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </Button>
                <span className="text-sm text-muted-foreground">Better Auth · Neon DB · Drizzle ORM · shadcn/ui</span>
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  { label: "Auth & sessions", detail: "Better Auth wired up with UI flows", icon: ShieldCheck },
                  { label: "Data layer", detail: "Neon PostgreSQL + Drizzle migrations", icon: Database },
                  { label: "UI system", detail: "Composable components & theming", icon: Layers },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="group rounded-2xl border border-border/60 bg-card/80 p-4 shadow-sm transition hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg"
                  >
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <item.icon className="h-5 w-5" />
                      </span>
                      <div>
                        <p className="font-semibold">{item.label}</p>
                        <p className="text-sm text-muted-foreground">{item.detail}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 -z-10 translate-y-6 scale-95 rounded-3xl bg-gradient-to-br from-primary/30 via-primary/10 to-foreground/10 blur-3xl" />
              <div className="rounded-3xl border border-border/60 bg-card/80 p-6 shadow-2xl backdrop-blur">
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Deploy-ready stack</p>
                    <p className="text-xl font-semibold">What you get out of the box</p>
                  </div>
                  <Wand2 className="h-5 w-5 text-primary" />
                </div>
                <div className="space-y-4">
                  {[
                    "Role-based auth with email flows and protected routes.",
                    "Optimized database layer powered by Neon Serverless + Drizzle ORM.",
                    "Pre-built dashboard shell, navbar, and UI primitives.",
                    "Type-safe APIs and sane defaults for linting and DX.",
                  ].map((line) => (
                    <div
                      key={line}
                      className="flex items-start gap-3 rounded-2xl border border-border/60 bg-background/40 px-4 py-3"
                    >
                      <div className="mt-1 h-2 w-2 rounded-full bg-primary" />
                      <p className="text-sm text-muted-foreground">{line}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl border border-border/60 bg-background/40 px-4 py-3">
                    <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground">Setup time</p>
                    <p className="text-xl font-semibold">Under 5 minutes</p>
                  </div>
                  <div className="rounded-2xl border border-border/60 bg-background/40 px-4 py-3">
                    <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground">Design system</p>
                    <p className="text-xl font-semibold">shadcn/ui + Tailwind</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container px-6 pb-12">
          <div className="mx-auto max-w-5xl space-y-8 rounded-3xl border border-border/60 bg-card/70 p-8 shadow-xl backdrop-blur">
            <div className="flex items-center justify-between gap-6">
              <div>
                <p className="text-sm text-muted-foreground">Opinionated yet flexible</p>
                <h2 className="text-3xl font-bold tracking-tight">Build features, not scaffolding.</h2>
              </div>
              <Link
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary underline-offset-4 hover:underline"
                href="https://github.com"
              >
                Explore the repo <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Authentication",
                  description: "Email/password, sessions, and secure routes powered by Better Auth.",
                  icon: ShieldCheck,
                },
                {
                  title: "Data & Migrations",
                  description: "Neon + Drizzle with ready-to-run scripts and typed queries.",
                  icon: Database,
                },
                {
                  title: "UI Components",
                  description: "Curated shadcn/ui set for forms, navigation, and dashboards.",
                  icon: Layers,
                },
                {
                  title: "DX defaults",
                  description: "ESLint, TypeScript strictness, and sensible folder structure.",
                  icon: Sparkles,
                },
                {
                  title: "Production ready",
                  description: "Edge-ready Next.js with caching-conscious patterns.",
                  icon: Wand2,
                },
                {
                  title: "Extend easily",
                  description: "Add features without rewiring the stack; conventions keep you fast.",
                  icon: ArrowUpRight,
                },
              ].map((feature) => (
                <div
                  key={feature.title}
                  className="group rounded-2xl border border-border/60 bg-background/50 p-5 shadow-sm transition hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg"
                >
                  <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <feature.icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="container px-6 pb-20">
          <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.2em] text-primary">Fast onboarding</p>
              <h2 className="text-3xl font-bold tracking-tight">Plug in credentials and ship.</h2>
              <p className="text-muted-foreground">
                Drop in your Neon connection string, run Drizzle migrations, and roll out auth in
                minutes. The starter keeps configuration obvious and documented so you stay focused
                on product behavior.
              </p>
              <div className="space-y-3 rounded-3xl border border-border/60 bg-card/70 p-5 shadow-lg">
                {[
                  "Install dependencies & copy .env.example to configure auth + database.",
                  "Run `drizzle-kit push` to sync schema to Neon serverless Postgres.",
                  "Use the prebuilt dashboard shell to add pages and routes with confidence.",
                ].map((step, idx) => (
                  <div key={step} className="flex gap-3">
                    <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-background">
                      {idx + 1}
                    </div>
                    <p className="text-sm text-muted-foreground">{step}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-4 rounded-3xl border border-border/60 bg-gradient-to-br from-primary/10 via-background to-background p-6 shadow-xl">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Made for shipping</p>
                  <p className="text-xl font-semibold">Your roadmap accelerator</p>
                </div>
                <Sparkles className="h-5 w-5 text-primary" />
              </div>
              <div className="rounded-2xl border border-border/60 bg-card/70 p-4">
                <p className="text-sm uppercase tracking-[0.16em] text-muted-foreground">Instant CTA</p>
                <p className="text-2xl font-bold">Ready to roll?</p>
                <p className="text-sm text-muted-foreground">
                  Create your account and land on a secure dashboard scaffold with auth, data, and UI
                  ready to customize.
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <Button asChild>
                    <Link href="/sign-up">Start for free</Link>
                  </Button>
                  <Button asChild variant="ghost" className="gap-2">
                    <Link href="/sign-in">
                      Sign in
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-border/60 bg-background/60 px-4 py-3">
                  <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Integrations</p>
                  <p className="text-lg font-semibold">Neon · Better Auth · Drizzle · Next 16</p>
                </div>
                <div className="rounded-2xl border border-border/60 bg-background/60 px-4 py-3">
                  <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Performance</p>
                  <p className="text-lg font-semibold">Edge-ready & optimized</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t bg-card/60 backdrop-blur">
        <div className="container flex flex-col gap-3 px-6 py-6 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p className="text-foreground">Built by Mochamad Rizky.</p>
          <div className="flex items-center gap-4">
            <Link
              href="https://www.linkedin.com/in/mochamad-rizky-4b07031a2/" target="_blank"
              className="inline-flex items-center gap-2 hover:text-primary"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </Link>
            <Link
              href="https://www.instagram.com/pixelbymoz/" target="_blank"
              className="inline-flex items-center gap-2 hover:text-primary"
            >
              <Instagram className="h-4 w-4" />
              Instagram
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
