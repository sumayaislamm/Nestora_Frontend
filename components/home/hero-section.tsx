import { MapPin, Home as HomeIcon, Bed, Bath, Square } from "lucide-react";
import Image from "next/image";

const STATS = [
  { value: "2,400+", label: "Listings live" },
  { value: "38", label: "Cities covered" },
  { value: "0%", label: "Brokerage fee" },
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <video
        className="absolute inset-0 z-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source
          src="https://res.cloudinary.com/yznthkkx/video/upload/v1787327957/16528749_3840_2160_24fps.mp4"
          type="video/mp4"
        />
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 z-10 bg-black/50" />

      {/* Ambient backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_60%_at_75%_-10%,color-mix(in_oklch,var(--primary),transparent_84%),transparent)]"
      />

      <div className="relative z-20 mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-4 py-20 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:py-28 lg:px-8">
        {/* Left: thesis */}
        <div>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary px-3 py-1 text-[0.7rem] font-medium tracking-wide text-secondary-foreground uppercase">
            Renting, without the runaround
          </span>

          <h1 className="mt-6 font-heading text-4xl leading-[1.05] font-medium text-white sm:text-5xl lg:text-6xl">
            Find a place that
            <br />
            actually feels like{" "}
            <span className="italic text-blue-500">home.</span>
          </h1>

          <p className="mt-6 max-w-md text-blue-300 leading-relaxed ">
            Nestora connects tenants directly with landlords — verified
            listings, transparent pricing, and no middleman fees getting in the
            way of your next move.
          </p>

          {/* Stats */}
          <dl className="card-flip-up mt-10 flex w-92 flex-wrap gap-x-10 rounded-lg bg-gradient-to-br from-white via-blue-50 to-blue-500 p-5 shadow-sm">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <dt className="font-heading text-2xl font-medium text-base-foreground">
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
            className="card-from-left absolute left-2 top-14 w-64 -rotate-6"
            title="Willow Creek Studio"
            location="Banani, Dhaka"
            price="৳18,000"
            beds={1}
            baths={1}
            area={480}
            image="https://res.cloudinary.com/yznthkkx/image/upload/v1787328510/pexels-brayan-ramirez-1648892253-34478703.jpg"
          />
          <ListingCard
            className="card-from-top absolute right-0 top-0 w-64 rotate-3"
            title="Riverside Apartment"
            location="Dhanmondi, Dhaka"
            price="৳32,500"
            beds={3}
            baths={2}
            area={1150}
            image="https://res.cloudinary.com/yznthkkx/image/upload/v1787328508/pexels-egorkomarov-12061813.jpg"
          />
          <ListingCard
            className="card-from-right absolute bottom-2 left-14 w-64 rotate-1"
            title="Garden View Duplex"
            location="Gul shan, Dhaka"
            price="৳55,000"
            beds={4}
            baths={3}
            area={2100}
            image="https://res.cloudinary.com/yznthkkx/image/upload/v1787328507/pexels-valeria-drozdova-2148646707-38934658.jpg"
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
  image,
}: {
  className?: string;
  title: string;
  location: string;
  price: string;
  beds: number;
  baths: number;
  area: number;
  image?: string;
}) {
  return (
    <div
      className={`rounded-xl border border-border bg-card p-3 shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:rotate-0 ${className}`}
    >
 
      <div className="relative mb-3 h-24 overflow-hidden rounded-lg bg-[linear-gradient(135deg,color-mix(in_oklch,var(--primary),transparent_82%),color-mix(in_oklch,var(--primary),transparent_94%))]">
        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            sizes="256px"
            quality={75}
            className="object-cover"
          />
        ) : (
          <HomeIcon className="size-7 text-primary/60" />
        )}
      </div>
      <p className="font-heading text-sm font-medium text-foreground">
        {title}
      </p>
      <p className="mt-0.5 flex items-center gap-1 text-xs text-muted-foreground">
        <MapPin className="size-3" /> {location}
      </p>
      <div className="mt-2 flex items-center gap-3 text-[0.7rem] text-muted-foreground">
        <span className="flex items-center gap-1">
          <Bed className="size-3" /> {beds}
        </span>
        <span className="flex items-center gap-1">
          <Bath className="size-3" /> {baths}
        </span>
        <span className="flex items-center gap-1">
          <Square className="size-3" /> {area} sqft
        </span>
      </div>
      <p className="mt-2 text-sm font-semibold text-primary">
        {price}
        <span className="text-xs font-normal text-muted-foreground">/mo</span>
      </p>
    </div>
  );
}
