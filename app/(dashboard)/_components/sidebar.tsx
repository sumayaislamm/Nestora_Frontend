"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  Building2,
  Plus,
  FileText,
  Users,
  Layers,
  Ban,
  BarChart3,
  ClipboardList,
  History,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface SidebarItem {
  label: string;
  href: string;
  icon: React.ReactNode;
}

interface SidebarProps {
  items: SidebarItem[];
  title: string;
}

export function Sidebar({ items, title }: SidebarProps) {
  const pathname = usePathname();

  return (
    <>
      <aside className="h-full w-85 bg-slate-900 p-6 text-white">
        <h1 className="mb-8 text-2xl font-bold">{title}</h1>

        <nav className="space-y-2">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-4 py-3",
                pathname === item.href
                  ? "bg-primary text-white"
                  : "text-gray-300 hover:bg-slate-800",
              )}
            >
              {item.icon}
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>
      </aside>
    </>
  );
}
// Sidebar item definitions for each dashboard

export const landlordSidebarItems: SidebarItem[] = [
  {
    label: "Dashboard Home",
    href: "/landlord-dashboard",
    icon: <Home size={20} />,
  },
  {
    label: "My Properties",
    href: "/landlord-dashboard/my-properties",
    icon: <Building2 size={20} />,
  },
  {
    label: "Add Property",
    href: "/landlord-dashboard/add-property",
    icon: <Plus size={20} />,
  },
  {
    label: "Rental Requests",
    href: "/landlord-dashboard/requests",
    icon: <FileText size={20} />,
  },
];

export const tenantSidebarItems: SidebarItem[] = [
  {
    label: "Dashboard Home",
    href: "/tenant-dashboard",
    icon: <Home size={20} />,
  },
  {
    label: "My Rent Requests",
    href: "/tenant-dashboard/requests",
    icon: <ClipboardList size={20} />,
  },
  {
    label: "Rent Details",
    href: "/tenant-dashboard/reviews",
    icon: <FileText size={20} />,
  },
  {
    label: "Payment History",
    href: "/tenant-dashboard/payments",
    icon: <History size={20} />,
  },
];

export const adminSidebarItems: SidebarItem[] = [
  {
    label: "Dashboard Home",
    href: "/admin-dashboard",
    icon: <Home size={20} />,
  },
  {
    label: "Manage Users",
    href: "/admin-dashboard/manage-users",
    icon: <Users size={20} />,
  },
  {
    label: "Manage Properties",
    href: "/admin-dashboard/manage-properties",
    icon: <Building2 size={20} />,
  },
  {
    label: "Manage Categories",
    href: "/admin-dashboard/manage-categories",
    icon: <Layers size={20} />,
  },
  {
    label: "Ban / Unban Users",
    href: "/admin-dashboard/ban-users",
    icon: <Ban size={20} />,
  },
  {
    label: "Analytics",
    href: "/admin-dashboard/analytics",
    icon: <BarChart3 size={20} />,
  },
];
