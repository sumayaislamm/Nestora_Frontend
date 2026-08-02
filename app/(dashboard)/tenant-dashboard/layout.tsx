"use client";

import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Sidebar, tenantSidebarItems } from "../_components/sidebar";

export default function TenantLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
      {/* Mobile Header */}
      <header className="flex items-center justify-between border-b p-4 lg:hidden">
        <h1 className="text-xl font-bold">Tenant</h1>

        <Sheet>
          <SheetTrigger className="p-2 rounded-md bg-gray-200 hover:bg-gray-300 transition">
            <Menu className="h-6 " />
          </SheetTrigger>

          <SheetContent side="left" className="max-w-40">
            <Sidebar items={tenantSidebarItems} title="Tenant" />
          </SheetContent>
        </Sheet>
      </header>

      <div className="flex min-h-screen">
        {/* Desktop Sidebar */}
        <div className="hidden lg:block">
          <Sidebar items={tenantSidebarItems} title="Tenant" />
        </div>

        <main className="flex-1 p-4 lg:p-8">{children}</main>
      </div>
    </div>
  );
}
