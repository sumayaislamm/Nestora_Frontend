import Link from "next/link";
import {
  Building2,
  Home as HomeIcon,
  Warehouse,
  Building,
  DoorOpen,
  Briefcase,
} from "lucide-react";

// TODO: replace counts with a real fetch (e.g. GET /api/properties/categories)
const CATEGORIES = [
  { label: "Apartments", count: 860, icon: Building2 },
  { label: "Houses", count: 412, icon: HomeIcon },
  { label: "Studios", count: 205, icon: DoorOpen },
  { label: "Duplexes", count: 96, icon: Building },
  { label: "Offices", count: 74, icon: Briefcase },
  { label: "Warehouses", count: 21, icon: Warehouse },
];

export function FeaturedCategories() {
  return (
    <section className="border-b border-border bg-secondary/40 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <span className="text-xs font-medium tracking-wide text-primary uppercase">
          Browse by type
        </span>
        <h2 className="mt-2 font-heading text-3xl font-medium text-foreground sm:text-4xl">
          Whatever you are looking for
        </h2>
        <p className="mt-3 max-w-lg text-sm leading-relaxed text-muted-foreground">
          From a single-room studio to a full office floor — every listing on
          Nestora is sorted so you only browse what fits.
        </p>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {CATEGORIES.map(({ label, count, icon: Icon }) => (
            <Link
              key={label}
              href={`/properties?category=${label.toLowerCase()}`}
              className="group flex flex-col items-center gap-3 rounded-xl border border-border bg-card px-4 py-8 text-center transition-colors hover:border-primary/40 hover:bg-primary/5"
            >
              <span className="flex size-11 items-center justify-center rounded-full bg-primary/10 text-primary transition-transform group-hover:scale-105">
                <Icon className="size-5" />
              </span>
              <span className="text-sm font-medium text-foreground">
                {label}
              </span>
              <span className="text-xs text-muted-foreground">
                {count} listings
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}