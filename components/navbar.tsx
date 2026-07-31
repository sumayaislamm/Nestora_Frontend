"use client"

import Link from "next/link";
import { Building2, User, Settings,LogOut, } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { usePathname, useRouter } from "next/navigation";
import { toast } from "sonner";
import { Button } from "./ui/button";

 const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

  // User dropdown menu items
  const USER_MENU_ITEMS = [
    { label: "Profile", href: "/profile", icon: User },
    { label: "Settings", href: "/settings", icon: Settings },
  ];



type IUser = {
  success: boolean;
  message: string;
  data: {
    profile: {          
      id: string;
      name: string;
      email: string;
      phone: string | null;
      profileImage: string | null;
      role: string;
      status: string;
      createdAt: string;
      updatedAt: string;
    };
  };
};



type NavbarProps = {
  user?: IUser | null;
};


export function Navbar({ user }: NavbarProps) {
  const pathname = usePathname();
  const router = useRouter();
  const handleUserMenuAction = async (action: string) => {
    console.log(`User menu action: ${action}`);
    if (action === "logout") {
      // await logOut();
      toast.success("User Logged Out Successfully!");
      router.push("/login");
    }
  };

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
          {/* <Link
            href="/"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Home
          </Link> */}
               {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-accent"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right: Profile icon */}
 {user?.success ? (
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
              {user?.data?.profile?.name || "Name"}
            </div>
            <div className="px-2 pb-2 text-xs text-muted-foreground">
             {user?.data?.profile?.email || "Email"}
            </div>
            <div className="px-2 pb-2 text-xs text-muted-foreground">
              {user?.data?.profile?.role || "Role"}
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
              onClick={async () => {
                handleUserMenuAction("logout");
              }}
              className="gap-2 cursor-pointer text-destructive"
            >
              <LogOut className="size-4" />
              <span>Logout</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

         ) : pathname === "/login" ? (
          <Link href="/register">
            <Button className="cursor-pointer">Register</Button>
          </Link>
        ) : (
          <Link href="/login">
            <Button className="cursor-pointer">Login</Button>
          </Link>
        )}
      
      </div>
    </header>
  );
}
