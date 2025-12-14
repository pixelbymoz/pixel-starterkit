"use client";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { useRouter } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

export function Navbar() {
  const { data: session } = authClient.useSession();
  const router = useRouter();

  return (
    <nav className="border-b bg-background">
      <div className="flex h-16 items-center px-4 container mx-auto">
        <Link href="/" className="font-bold text-xl">
          Pixel Starterkit
        </Link>
        <div className="ml-auto flex items-center gap-4">
          {session ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Avatar className="cursor-pointer">
                  <AvatarImage src={session.user.image || ""} />
                  <AvatarFallback>{session.user.name?.charAt(0) || "U"}</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                    <Link href="/dashboard">Dashboard</Link>
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={async () => {
                    await authClient.signOut();
                    router.push("/");
                  }}
                >
                  Sign Out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className="flex items-center gap-2">
              <Button variant="ghost" asChild>
                <Link href="/sign-in">Sign In</Link>
              </Button>
              <Button asChild>
                <Link href="/sign-up">Sign Up</Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
