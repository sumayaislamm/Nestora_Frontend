import { Search, MapPin, Home as HomeIcon, Bed, Bath, Square } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const STATS = [
  { value: "2,400+", label: "Listings live" },
  { value: "38", label: "Cities covered" },
  { value: "0%", label: "Brokerage fee" },
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-background">
      {/* Ambient backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_60%_at_75%_-10%,color-mix(in_oklch,var(--primary),transparent_84%),transparent)]"
      />

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-4 py-20 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:py-28 lg:px-8">
        {/* Left: thesis */}
        <div>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary px-3 py-1 text-[0.7rem] font-medium tracking-wide text-secondary-foreground uppercase">
            Renting, without the runaround
          </span>

          <h1 className="mt-6 font-heading text-4xl leading-[1.05] font-medium text-foreground sm:text-5xl lg:text-6xl">
            Find a place that
            <br />
            actually feels like{" "}
            <span className="italic text-primary">home.</span>
          </h1>

          <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
            Nestora connects tenants directly with landlords — verified
            listings, transparent pricing, and no middleman fees getting in
            the way of your next move.
          </p>

          {/* Search bar — the hero's single characteristic action */}
          <div className="mt-8 flex flex-col gap-2 rounded-xl border border-border bg-card p-2 shadow-sm sm:flex-row sm:items-center">
            <div className="flex flex-1 items-center gap-2 px-2 py-1.5">
              <MapPin className="size-4 shrink-0 text-muted-foreground" />
              <Input
                placeholder="Search by city or neighborhood"
                className="h-auto border-none bg-transparent p-0 text-sm shadow-none focus-visible:ring-0"
              />
            </div>
            <div className="hidden h-6 w-px bg-border sm:block" />
            <div className="flex items-center gap-2 px-2 py-1.5 sm:w-44">
              <HomeIcon className="size-4 shrink-0 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Any property type</span>
            </div>
            <Button size="lg" className="gap-1.5 sm:w-auto">
              <Search className="size-4" />
              Search
            </Button>
          </div>

          {/* Stats */}
          <dl className="mt-10 flex flex-wrap gap-x-10 gap-y-4">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <dt className="font-heading text-2xl font-medium text-foreground">
                  {stat.value}
                </dt>
                <dd className="text-xs text-muted-foreground">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Right: signature — a fanned stack of listing cards, Nestora's visual thumbprint */}
        <div className="relative mx-auto hidden h-105 w-full max-w-md lg:block">
          <ListingCard
            className="absolute left-2 top-14 w-64 -rotate-6"
            title="Willow Creek Studio"
            location="Banani, Dhaka"
            price="৳18,000"
            beds={1}
            baths={1}
            area={480}
          />
          <ListingCard
            className="absolute right-0 top-0 w-64 rotate-3"
            title="Riverside Apartment"
            location="Dhanmondi, Dhaka"
            price="৳32,500"
            beds={3}
            baths={2}
            area={1150}
          />
          <ListingCard
            className="absolute bottom-2 left-14 w-64 rotate-1"
            title="Garden View Duplex"
            location="Gul shan, Dhaka"
            price="৳55,000"
            beds={4}
            baths={3}
            area={2100}
          />
        </div>
      </div>
    </section>
  );
}

function ListingCard({
  className,
  title,
  location,
  price,
  beds,
  baths,
  area,
}: {
  className?: string;
  title: string;
  location: string;
  price: string;
  beds: number;
  baths: number;
  area: number;
}) {
  return (
    <div
      className={`rounded-xl border border-border bg-card p-3 shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:rotate-0 ${className}`}
    >
      <div className="mb-3 flex h-24 items-center justify-center rounded-lg bg-[linear-gradient(135deg,color-mix(in_oklch,var(--primary),transparent_82%),color-mix(in_oklch,var(--primary),transparent_94%))]">
        <HomeIcon className="size-7 text-primary/60" />
      </div>
      <p className="font-heading text-sm font-medium text-foreground">{title}</p>
      <p className="mt-0.5 flex items-center gap-1 text-xs text-muted-foreground">
        <MapPin className="size-3" /> {location}
      </p>
      <div className="mt-2 flex items-center gap-3 text-[0.7rem] text-muted-foreground">
        <span className="flex items-center gap-1"><Bed className="size-3" /> {beds}</span>
        <span className="flex items-center gap-1"><Bath className="size-3" /> {baths}</span>
        <span className="flex items-center gap-1"><Square className="size-3" /> {area} sqft</span>
      </div>
      <p className="mt-2 text-sm font-semibold text-primary">{price}<span className="text-xs font-normal text-muted-foreground">/mo</span></p>
    </div>
  );
}