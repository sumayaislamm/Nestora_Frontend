"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Bath,
  BedDouble,
  Heart,
  MapPin,
  Maximize,
  ShieldCheck,
} from "lucide-react";
import { useState } from "react";

import { IProperty } from "@/app/types/property";

type Props = {
  property: IProperty;
};

export default function PropertyCard({ property }: Props) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [imageError, setImageError] = useState(false);

  const {
    id,
    title,
    location,
    rent,
    bedrooms,
    bathrooms,
    size,
    amenities = [],
    images = [],
    availability,
    category,
    landlord,
  } = property;

  const imageUrl = images?.[0];
  const hasImage = Boolean(imageUrl) && !imageError;

  const visibleAmenities = amenities.slice(0, 3);
  const remainingAmenities = Math.max(amenities.length - 3, 0);

  const formattedRent = new Intl.NumberFormat("en-BD").format(
    Number(rent) || 0,
  );

  const availabilityLabel =
    availability === "AVAILABLE" ? "Available" : "Rented";

  const availabilityStyles =
    availability === "AVAILABLE"
      ? "bg-emerald-500/95 text-white"
      : "bg-rose-500/95 text-white";

  const initials =
    landlord?.name
      ?.split(" ")
      .filter(Boolean)
      .slice(0, 2)
      .map((word) => word[0]?.toUpperCase())
      .join("") || "N";

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -6 }}
      transition={{
        duration: 0.35,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border/60 bg-card shadow-sm transition-shadow duration-300 hover:shadow-xl"
    >
      {/* =========================
          IMAGE SECTION
      ========================== */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted">
        {hasImage ? (
          <Image
            src={imageUrl}
            alt={title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            onError={() => setImageError(true)}
            priority={false}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-muted to-muted/60">
            <div className="text-center">
              <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-background/70">
                <Maximize className="h-5 w-5 text-muted-foreground" />
              </div>

              <p className="text-sm font-medium text-muted-foreground">
                Property image unavailable
              </p>
            </div>
          </div>
        )}

        {/* Image gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/5 to-transparent" />

        {/* Top badges */}
        <div className="absolute left-4 right-4 top-4 flex items-start justify-between gap-3">
          <div className="flex flex-wrap gap-2">
            {category?.name && (
              <span className="rounded-full bg-background/90 px-3 py-1.5 text-xs font-semibold text-foreground shadow-sm backdrop-blur-md">
                {category.name}
              </span>
            )}

            <span
              className={`rounded-full px-3 py-1.5 text-xs font-semibold shadow-sm backdrop-blur-md ${availabilityStyles}`}
            >
              {availabilityLabel}
            </span>
          </div>

          {/* Favorite */}
          <motion.button
            type="button"
            aria-label={
              isFavorite
                ? `Remove ${title} from favorites`
                : `Add ${title} to favorites`
            }
            aria-pressed={isFavorite}
            whileTap={{ scale: 0.85 }}
            onClick={() => setIsFavorite((prev) => !prev)}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-background/90 text-foreground shadow-md backdrop-blur-md transition-colors hover:bg-background"
          >
            <motion.div
              animate={{
                scale: isFavorite ? [1, 1.25, 1] : 1,
              }}
              transition={{ duration: 0.25 }}
            >
              <Heart
                className={`h-5 w-5 transition-all duration-200 ${
                  isFavorite
                    ? "fill-current text-red-500"
                    : "text-foreground"
                }`}
              />
            </motion.div>
          </motion.button>
        </div>

        {/* Bottom image information */}
        <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-4">
          <div className="min-w-0 text-white">
            <div className="mb-1 flex items-center gap-1.5 text-sm font-medium text-white/90">
              <MapPin className="h-4 w-4 shrink-0" />
              <span className="truncate">{location || "Location unavailable"}</span>
            </div>
          </div>

          <div className="shrink-0 rounded-xl bg-background/95 px-3 py-2 text-foreground shadow-lg backdrop-blur-md">
            <div className="flex items-baseline gap-1">
              <span className="text-lg font-bold tracking-tight">
                ৳{formattedRent}
              </span>
              <span className="text-xs font-medium text-muted-foreground">
                /month
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* =========================
          CONTENT SECTION
      ========================== */}
      <div className="flex flex-1 flex-col p-5">
        {/* Title */}
        <div className="mb-4">
          <Link
            href={`/properties/${id}`}
            className="block focus:outline-none"
          >
            <h2 className="line-clamp-2 min-h-[3.5rem] text-lg font-bold leading-7 tracking-tight text-foreground transition-colors duration-200 group-hover:text-primary">
              {title}
            </h2>
          </Link>
        </div>

        {/* Property stats */}
        <div className="mb-5 grid grid-cols-3 divide-x rounded-xl border border-border/60 bg-muted/30 py-3">
          <div className="flex flex-col items-center gap-1 px-2 text-center">
            <BedDouble className="h-4 w-4 text-primary" />
            <span className="text-sm font-semibold text-foreground">
              {bedrooms ?? 0}
            </span>
            <span className="text-[11px] text-muted-foreground">
              {bedrooms === 1 ? "Bedroom" : "Bedrooms"}
            </span>
          </div>

          <div className="flex flex-col items-center gap-1 px-2 text-center">
            <Bath className="h-4 w-4 text-primary" />
            <span className="text-sm font-semibold text-foreground">
              {bathrooms ?? 0}
            </span>
            <span className="text-[11px] text-muted-foreground">
              {bathrooms === 1 ? "Bathroom" : "Bathrooms"}
            </span>
          </div>

          <div className="flex flex-col items-center gap-1 px-2 text-center">
            <Maximize className="h-4 w-4 text-primary" />
            <span className="text-sm font-semibold text-foreground">
              {size ? size.toLocaleString() : "—"}
            </span>
            <span className="text-[11px] text-muted-foreground">
              {size ? "sq ft" : "Area"}
            </span>
          </div>
        </div>

        {/* Amenities */}
        {visibleAmenities.length > 0 && (
          <div className="mb-5">
            <div className="flex flex-wrap gap-2">
              {visibleAmenities.map((amenity) => (
                <span
                  key={amenity}
                  className="rounded-full border border-border/70 bg-background px-2.5 py-1 text-xs font-medium text-muted-foreground transition-colors group-hover:border-primary/20 group-hover:text-foreground"
                >
                  {amenity}
                </span>
              ))}

              {remainingAmenities > 0 && (
                <span className="rounded-full border border-border/70 bg-muted/40 px-2.5 py-1 text-xs font-semibold text-muted-foreground">
                  +{remainingAmenities}
                </span>
              )}
            </div>
          </div>
        )}

        {/* Divider */}
        <div className="mt-auto border-t border-border/60 pt-4">
          <div className="flex items-center justify-between gap-3">
            {/* Landlord */}
            <div className="flex min-w-0 items-center gap-3">
              {landlord?.profileImage ? (
                <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-full border border-border">
                  <Image
                    src={landlord.profileImage}
                    alt={landlord.name || "Landlord"}
                    fill
                    sizes="36px"
                    className="object-cover"
                  />
                </div>
              ) : (
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                  {initials}
                </div>
              )}

              <div className="min-w-0">
                <div className="flex items-center gap-1">
                  <p className="truncate text-sm font-semibold text-foreground">
                    {landlord?.name || "Property Owner"}
                  </p>

                  {landlord && (
                    <ShieldCheck
                      className="h-3.5 w-3.5 shrink-0 text-primary"
                      aria-label="Verified landlord"
                    />
                  )}
                </div>

                <p className="text-xs text-muted-foreground">
                  Property owner
                </p>
              </div>
            </div>

            {/* CTA */}
            <Link
              href={`/properties/${id}`}
              aria-label={`View details for ${title}`}
              className="group/cta inline-flex shrink-0 items-center gap-1.5 rounded-xl bg-primary px-3.5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2"
            >
              <span className="hidden sm:inline">View Details</span>
              <span className="sm:hidden">View</span>

              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover/cta:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </motion.article>
  );
}