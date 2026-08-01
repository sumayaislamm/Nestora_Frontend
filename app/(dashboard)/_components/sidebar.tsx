'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  Home,
  Building2,
  Plus,
  Edit,
  Trash2,
  FileText, 
  CheckCircle,
  Users,
  Layers,
  Ban,
  BarChart3,
  ClipboardList,
  DollarSign,
  History,
  User,
} from 'lucide-react'
import { cn } from '@/lib/utils'

interface SidebarItem {
  label: string
  href: string
  icon: React.ReactNode
}

interface SidebarProps {
  items: SidebarItem[]
  title: string
}

export function Sidebar({ items, title }: SidebarProps) {
  const pathname = usePathname()

  return (
    <aside className="w-64 bg-slate-900 text-white min-h-screen p-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold">{title}</h1>
      </div>
      <nav className="space-y-2">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              'flex items-center gap-3 px-4 py-3 rounded-lg transition-colors',
              pathname === item.href
                ? 'bg-primary text-white'
                : 'text-gray-300 hover:bg-slate-800'
            )}
          >
            <span className="w-5 h-5">{item.icon}</span>
            <span className="text-sm font-medium">{item.label}</span>
          </Link>
        ))}
      </nav>
    </aside>
  )
}

// Sidebar item definitions for each dashboard

export const landlordSidebarItems: SidebarItem[] = [
  {
    label: 'Dashboard Home',
    href: '/landlord-dashboard',
    icon: <Home size={20} />,
  },
  {
    label: 'My Properties',
    href: '/landlord-dashboard/my-properties',
    icon: <Building2 size={20} />,
  },
  {
    label: 'Add Property',
    href: '/landlord-dashboard/add-property',
    icon: <Plus size={20} />,
  },
  {
    label: 'Rental Requests',
    href: '/landlord-dashboard/rental-requests',
    icon: <FileText size={20} />,
  }
]

export const tenantSidebarItems: SidebarItem[] = [
  {
    label: 'Dashboard Home',
    href: '/tenant-dashboard',
    icon: <Home size={20} />,
  },
  {
    label: 'My Rent Requests',
    href: '/tenant-dashboard/rent-requests',
    icon: <ClipboardList size={20} />,
  },
  {
    label: 'Rent Details',
    href: '/tenant-dashboard/rent-details',
    icon: <FileText size={20} />,
  },
  {
    label: 'Payment',
    href: '/tenant-dashboard/payment',
    icon: <DollarSign size={20} />,
  },
  {
    label: 'Payment History',
    href: '/tenant-dashboard/payment-history',
    icon: <History size={20} />,
  },
  {
    label: 'Profile',
    href: '/tenant-dashboard/profile',
    icon: <User size={20} />,
  },
]

export const adminSidebarItems: SidebarItem[] = [
  {
    label: 'Dashboard Home',
    href: '/admin-dashboard',
    icon: <Home size={20} />,
  },
  {
    label: 'Manage Users',
    href: '/admin-dashboard/manage-users',
    icon: <Users size={20} />,
  },
  {
    label: 'Manage Properties',
    href: '/admin-dashboard/manage-properties',
    icon: <Building2 size={20} />,
  },
  {
    label: 'Manage Categories',
    href: '/admin-dashboard/manage-categories',
    icon: <Layers size={20} />,
  },
  {
    label: 'Ban / Unban Users',
    href: '/admin-dashboard/ban-users',
    icon: <Ban size={20} />,
  },
  {
    label: 'Analytics',
    href: '/admin-dashboard/analytics',
    icon: <BarChart3 size={20} />,
  },
]
