import Link from "next/link";
import { ArrowUpRight, Bed, Bath, Square, MapPin, Home as HomeIcon } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

// TODO: replace with a real fetch from the backend (e.g. GET /api/properties?featured=true)
const FEATURED_PROPERTIES = [
  {
    id: "1",
    title: "Willow Creek Studio",
    location: "Banani, Dhaka",
    price: "18,000",
    beds: 1,
    baths: 1,
    area: 480,
    tag: "New",
  },
  {
    id: "2",
    title: "Riverside 3-Bed Apartment",
    location: "Dhanmondi, Dhaka",
    price: "32,500",
    beds: 3,
    baths: 2,
    area: 1150,
    tag: "Popular",
  },
  {
    id: "3",
    title: "Garden View Duplex",
    location: "Gulshan, Dhaka",
    price: "55,000",
    beds: 4,
    baths: 3,
    area: 2100,
    tag: "Featured",
  },
  {
    id: "4",
    title: "Uttara Family Home",
    location: "Uttara, Dhaka",
    price: "27,000",
    beds: 3,
    baths: 2,
    area: 980,
    tag: "New",
  },
];

export function FeaturedProperties() {
  return (
    <section className="border-b border-border bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <span className="text-xs font-medium tracking-wide text-primary uppercase">
              Handpicked for you
            </span>
            <h2 className="mt-2 font-heading text-3xl font-medium text-foreground sm:text-4xl">
              Featured properties
            </h2>
          </div>
          <Link href="/properties">
            <Button variant="outline" className="gap-1.5">
              View all listings <ArrowUpRight className="size-3.5" />
            </Button>
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURED_PROPERTIES.map((property) => (
            <Link key={property.id} href={`/properties/${property.id}`}>
              <Card className="group h-full gap-0 p-0 transition-shadow hover:shadow-md">
                <div className="relative flex h-36 items-center justify-center bg-[linear-gradient(135deg,color-mix(in_oklch,var(--primary),transparent_82%),color-mix(in_oklch,var(--primary),transparent_94%))]">
                  <HomeIcon className="size-8 text-primary/50" />
                  <Badge className="absolute left-3 top-3">{property.tag}</Badge>
                </div>
                <div className="flex flex-col gap-2 p-4">
                  <p className="font-heading text-sm font-medium text-foreground">
                    {property.title}
                  </p>
                  <p className="flex items-center gap-1 text-xs text-muted-foreground">
                    <MapPin className="size-3" /> {property.location}
                  </p>
                  <div className="flex items-center gap-3 border-t border-border pt-2 text-[0.7rem] text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Bed className="size-3" /> {property.beds}
                    </span>
                    <span className="flex items-center gap-1">
                      <Bath className="size-3" /> {property.baths}
                    </span>
                    <span className="flex items-center gap-1">
                      <Square className="size-3" /> {property.area} sqft
                    </span>
                  </div>
                  <p className="text-sm font-semibold text-primary">
                    ৳{property.price}
                    <span className="text-xs font-normal text-muted-foreground">/mo</span>
                  </p>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}