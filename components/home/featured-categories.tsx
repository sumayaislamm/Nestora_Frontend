"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import {
  ArrowUpRight,
  Building2,
  Home as HomeIcon,
  Warehouse,
  Building,
  DoorOpen,
  Briefcase,
  Map,
} from "lucide-react";
import { ICategory } from "@/app/types/category";

type Props = {
  categories: ICategory[];
};

const categoryMeta = {
  Apartment: {
    icon: Building2,
    description: "Modern and comfortable apartments",
  },
  "Modern Apartment": {
    icon: Building2,
    description: "Modern and stylish apartments",
  },
  "Family House": {
    icon: HomeIcon,
    description: "Comfortable family homes",
  },
  "Private Home": {
    icon: HomeIcon,
    description: "Private and comfortable homes",
  },
  Studio: {
    icon: DoorOpen,
    description: "Smart compact living spaces",
  },
  Duplex: {
    icon: Building,
    description: "Spacious duplex living",
  },
  Penthouse: {
    icon: Building2,
    description: "Premium elevated living",
  },
  "Luxury Villa": {
    icon: HomeIcon,
    description: "Premium luxury villas",
  },
  Townhouse: {
    icon: HomeIcon,
    description: "Modern townhouse living",
  },
  Condo: {
    icon: Building2,
    description: "Modern condominium living",
  },
  Office: {
    icon: Briefcase,
    description: "Professional workspaces",
  },
  "Commercial Building": {
    icon: Building,
    description: "Commercial property spaces",
  },
  Shop: {
    icon: Briefcase,
    description: "Retail and business spaces",
  },
  Warehouse: {
    icon: Warehouse,
    description: "Storage and business space",
  },
  Land: {
    icon: Map,
    description: "Land for residential or commercial use",
  },
  "Parking & Garage": {
    icon: Warehouse,
    description: "Parking and garage spaces",
  },
  "Residential Flat": {
    icon: Building2,
    description: "Comfortable residential flats",
  },
} as const;

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: "easeOut",
    },
  },
};

export function FeaturedCategories({ categories }: Props) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-secondary/30 p-2">
      {/* Background Decoration */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end"
        >
          <div className="max-w-2xl">
            {/* Eyebrow */}
            <div className="mb-4 flex items-center gap-2">
              <span className="h-px w-8 bg-primary" />

              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Browse by type
              </span>
            </div>

            {/* Heading */}
            <h2 className="font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Find the space that
              <span className="text-primary"> fits your life.</span>
            </h2>

            {/* Description */}
            <p className="mt-4 max-w-xl text-sm leading-6 text-muted-foreground sm:text-base">
              From cozy studios to spacious family homes and professional
              offices, explore properties designed around the way you live and
              work.
            </p>
          </div>

          {/* Browse All */}
          <Link
            href="/properties"
            className="group inline-flex w-fit items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-primary"
          >
            Browse all properties
            <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </motion.div>

        {/* Category Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6"
        >
          {categories.map((category, index) => {
            const meta = categoryMeta[
              category.name as keyof typeof categoryMeta
            ] ?? {
              icon: Building2,
              description: "Explore available properties",
            };

            const Icon = meta.icon;

            return (
              <motion.div
                key={category.id}
                variants={itemVariants}
                whileHover={{ y: -7 }}
                transition={{ duration: 0.3 }}
              >
                <Link
                  href={`/properties?category=${encodeURIComponent(
                    category.name,
                  )}&categoryId=${category.id}&page=1`}
                  className="group relative block h-full overflow-hidden rounded-2xl border border-border/70 bg-card p-5 shadow-sm transition-all duration-500 hover:border-primary/30 hover:shadow-xl"
                >
                  {/* Hover Glow */}
                  <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-primary/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

                  {/* Category Number */}
                  <span className="absolute right-4 top-4 text-[10px] font-semibold tracking-wider text-muted-foreground/50">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.08, rotate: 2 }}
                    transition={{ duration: 0.3 }}
                    className="relative flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground"
                  >
                    <Icon className="size-5" />
                  </motion.div>

                  {/* Content */}
                  <div className="relative mt-5">
                    <h3 className="font-heading text-sm font-semibold text-foreground transition-colors duration-300 group-hover:text-primary">
                      {category.name}
                    </h3>

                    <p className="mt-1.5 min-h-8 text-[11px] leading-4 text-muted-foreground">
                      {meta.description}
                    </p>
                  </div>

                  {/* Bottom */}
                  <div className="relative mt-5 flex items-center justify-between border-t border-border/70 pt-4">
                    <span className="text-xs font-medium text-muted-foreground">
                      Explore listings
                    </span>

                    <span className="flex size-7 items-center justify-center rounded-full bg-muted text-muted-foreground transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                      <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </span>
                  </div>

                  {/* Bottom Accent */}
                  <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-primary transition-all duration-500 group-hover:w-full" />
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25, duration: 0.6 }}
          className="mt-12 flex flex-col items-center justify-between gap-5 border-t border-border/70 pt-8 sm:flex-row"
        >
          {/* Category Icons */}
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              {categories.slice(0, 4).map((category) => {
                const meta = categoryMeta[
                  category.name as keyof typeof categoryMeta
                ] ?? {
                  icon: Building2,
                };

                const Icon = meta.icon;

                return (
                  <div
                    key={category.id}
                    className="flex size-8 items-center justify-center rounded-full border-2 border-background bg-primary/10 text-primary"
                  >
                    <Icon className="size-3.5" />
                  </div>
                );
              })}
            </div>

            <p className="text-xs text-muted-foreground">
              Explore thousands of verified properties
            </p>
          </div>

          {/* Start Exploring */}
          <Link href="/properties">
            <motion.div
              whileHover={{ x: 4 }}
              className="flex items-center gap-2 text-xs font-semibold text-primary"
            >
              Start exploring
              <ArrowUpRight className="size-3.5" />
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
