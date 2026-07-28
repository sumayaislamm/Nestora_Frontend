"use client";

import Link from "next/link";
import { useState } from "react";
import { Home, Menu, Bell, Plus, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

// Replace this with your real auth hook (e.g. useSession, useAuth, etc.)
type Role = "guest" | "tenant" | "landlord" | "admin";

interface CurrentUser {
  name: string;
  role: Role;
  avatarUrl?: string;
}

// TEMP: swap with real session data
const useCurrentUser = (): CurrentUser | null => {
  return {
    name: "Tanvir Ahmed",
    role: "tenant",
    avatarUrl: undefined,
  };
};

const initials = (name: string) =>
  name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

const roleLinks: Record<Exclude<Role, "guest">, { href: string; label: string }[]> = {
  tenant: [
    { href: "/properties", label: "Browse" },
    { href: "/dashboard/tenant", label: "Dashboard" },
  ],
  landlord: [
    { href: "/dashboard/landlord", label: "My properties" },
    { href: "/dashboard/landlord/requests", label: "Requests" },
  ],
  admin: [
    { href: "/dashboard/admin", label: "Dashboard" },
    { href: "/dashboard/admin/users", label: "Users" },
    { href: "/dashboard/admin/listings", label: "Listings" },
  ],
};

const roleDashboardHref: Record<Exclude<Role, "guest">, string> = {
  tenant: "/dashboard/tenant",
  landlord: "/dashboard/landlord",
  admin: "/dashboard/admin",
};

export function Navbar() {
  const user = useCurrentUser();
  const [mobileOpen, setMobileOpen] = useState(false);
  const links = user ? roleLinks[user.role as Exclude<Role, "guest">] : [];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-semibold text-lg">
          <Home className="h-5 w-5 text-primary" />
          RentNest
        </Link>

        {/* Desktop nav links */}
        <nav className="hidden md:flex items-center gap-6">
          {(user ? links : [{ href: "/properties", label: "Browse" }]).map(
            (link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        {/* Right side */}
        <div className="hidden md:flex items-center gap-3">
          {!user ? (
            <>
              <Button variant="ghost" asChild>
                <Link href="/auth/login">Log in</Link>
              </Button>
              <Button asChild>
                <Link href="/auth/register">Sign up</Link>
              </Button>
            </>
          ) : (
            <>
              {user.role === "landlord" && (
                <Button asChild size="sm" className="gap-1.5">
                  <Link href="/dashboard/landlord/properties/new">
                    <Plus className="h-4 w-4" />
                    Add property
                  </Link>
                </Button>
              )}

              {user.role !== "admin" && (
                <Button variant="ghost" size="icon" className="relative" asChild>
                  <Link href="/notifications">
                    <Bell className="h-5 w-5" />
                    <Badge className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full p-0" />
                    <span className="sr-only">Notifications</span>
                  </Link>
                </Button>
              )}

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="rounded-full">
                    <Avatar className="h-9 w-9">
                      <AvatarImage src={user.avatarUrl} alt={user.name} />
                      <AvatarFallback>{initials(user.name)}</AvatarFallback>
                    </Avatar>
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuLabel>
                    <p className="text-sm font-medium">{user.name}</p>
                    <p className="text-xs font-normal capitalize text-muted-foreground">
                      {user.role}
                    </p>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link href={roleDashboardHref[user.role as Exclude<Role, "guest">]}>
                      Dashboard
                    </Link>
                  </DropdownMenuItem>
                  {user.role === "tenant" && (
                    <DropdownMenuItem asChild>
                      <Link href="/dashboard/tenant">My requests</Link>
                    </DropdownMenuItem>
                  )}
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="text-destructive focus:text-destructive">
                    Log out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          )}
        </div>

        {/* Mobile menu trigger */}
        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-72">
            <div className="flex items-center justify-between mb-6">
              <span className="font-semibold text-lg flex items-center gap-2">
                <Home className="h-5 w-5 text-primary" />
                RentNest
              </span>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMobileOpen(false)}
              >
                <X className="h-5 w-5" />
              </Button>
            </div>

            <div className="flex flex-col gap-1">
              {(user ? links : [{ href: "/properties", label: "Browse" }]).map(
                (link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="rounded-md px-3 py-2 text-sm font-medium hover:bg-accent"
                  >
                    {link.label}
                  </Link>
                )
              )}
            </div>

            <div className="mt-6 border-t pt-4 flex flex-col gap-2">
              {!user ? (
                <>
                  <Button variant="outline" asChild>
                    <Link href="/auth/login">Log in</Link>
                  </Button>
                  <Button asChild>
                    <Link href="/auth/register">Sign up</Link>
                  </Button>
                </>
              ) : (
                <>
                  {user.role === "landlord" && (
                    <Button asChild className="gap-1.5">
                      <Link href="/dashboard/landlord/properties/new">
                        <Plus className="h-4 w-4" />
                        Add property
                      </Link>
                    </Button>
                  )}
                  <Button variant="ghost" className="justify-start px-3">
                    Log out
                  </Button>
                </>
              )}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}