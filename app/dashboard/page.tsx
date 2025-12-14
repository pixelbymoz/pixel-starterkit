import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { Navbar } from "@/components/navbar";

export default async function Dashboard() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/sign-in");
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
        <p>Welcome back, {session.user.name}!</p>
        <p className="text-muted-foreground">This is a protected page.</p>
      </main>
    </div>
  );
}
