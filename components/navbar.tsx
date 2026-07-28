import Link from "next/link";
import { Building2, User, Settings,LogOut, } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

export function Navbar() {
  // User dropdown menu items
  const USER_MENU_ITEMS = [
    { label: "Profile", href: "/profile", icon: User },
    { label: "Settings", href: "/settings", icon: Settings },
  ];
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="relative mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Left: Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 font-semibold text-lg"
        >
          <Building2 className="h-5 w-5 text-primary" />
          Nestora
        </Link>

        {/* Middle: Nav links (absolutely centered) */}
        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-10 md:flex">
          <Link
            href="/"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            About
          </Link>
          <Link
            href="/tenant-dashboard"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Dashboard
          </Link>
          <Link
            href="/properties"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Properties
          </Link>
        </nav>

        {/* Right: Profile icon */}

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="gap-2 flex cursor-pointer">
              <div className="size-8 rounded-full bg-primary/10 flex items-center justify-center">
                <button className="flex h-9 w-9 items-center justify-center rounded-full bg-muted transition-colors hover:bg-muted/80">
                  {/* Profile Icon  */}
                  <User className="h-4.5 w-4.5 text-primary cursor-pointer" />
                </button>
              </div>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48">
            <div className="px-2 py-1.5 text-sm font-medium text-foreground mb-2">
              Name
            </div>
            <div className="px-2 pb-2 text-xs text-muted-foreground">
              Email
            </div>
            <div className="px-2 pb-2 text-xs text-muted-foreground">
              Role
            </div>
            <DropdownMenuSeparator className="mb-2" />
            {USER_MENU_ITEMS.map((item) => {
              const Icon = item.icon;
              return (
                <DropdownMenuItem key={item.href} asChild>
                  <Link
                    href={item.href}
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <Icon className="size-4" />
                    <span>{item.label}</span>
                  </Link>
                </DropdownMenuItem>
              );
            })}
            <DropdownMenuSeparator className="my-2" />
            <DropdownMenuItem
            //   onClick={async () => {
            //     handleUserMenuAction("logout");
            //   }}
              className="gap-2 cursor-pointer text-destructive"
            >
              <LogOut className="size-4" />
              <span>Logout</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
