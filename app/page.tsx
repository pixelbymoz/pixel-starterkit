import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 flex flex-col items-center justify-center p-4 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-4">
          Pixel Starterkit
        </h1>
        <p className="text-xl text-muted-foreground max-w-[600px] mb-8">
          A complete starter with Better Auth, Neon DB, Drizzle ORM, and shadcn/ui.
        </p>
        <div className="flex gap-4">
           <Button asChild size="lg">
              <Link href="/sign-up">Get Started</Link>
           </Button>
           <Button variant="outline" size="lg" asChild>
              <Link href="https://github.com">GitHub</Link>
           </Button>
        </div>
      </main>
    </div>
  );
}
