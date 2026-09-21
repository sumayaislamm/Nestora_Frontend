// "use client";

// import Link from "next/link";
// import { motion, type Variants } from "framer-motion";
// import {
//   ArrowUpRight,
//   Bed,
//   Bath,
//   Square,
//   MapPin,
//   Heart,
// } from "lucide-react";

// import { Card } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";

// const FEATURED_PROPERTIES = [
//   {
//     id: "1",
//     title: "Willow Creek Studio",
//     location: "Banani, Dhaka",
//     price: "18,000",
//     beds: 1,
//     baths: 1,
//     area: 480,
//     tag: "New",
//     image:
//       "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=900&q=80",
//   },
//   {
//     id: "2",
//     title: "Riverside 3-Bed Apartment",
//     location: "Dhanmondi, Dhaka",
//     price: "32,500",
//     beds: 3,
//     baths: 2,
//     area: 1150,
//     tag: "Popular",
//     image:
//       "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80",
//   },
//   {
//     id: "3",
//     title: "Garden View Duplex",
//     location: "Gulshan, Dhaka",
//     price: "55,000",
//     beds: 4,
//     baths: 3,
//     area: 2100,
//     tag: "Featured",
//     image:
//       "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=80",
//   },
//   {
//     id: "4",
//     title: "Uttara Family Home",
//     location: "Uttara, Dhaka",
//     price: "27,000",
//     beds: 3,
//     baths: 2,
//     area: 980,
//     tag: "New",
//     image:
//       "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=900&q=80",
//   },
// ];

// const containerVariants: Variants = {
//   hidden: {},
//   visible: {
//     transition: {
//       staggerChildren: 0.12,
//     },
//   },
// };

// const cardVariants: Variants = {
//   hidden: {
//     opacity: 0,
//     y: 35,
//   },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.6,
//       ease: "easeOut",
//     },
//   },
// };

// export function FeaturedProperties() {
//   return (
//     <section className="relative overflow-hidden border-b border-border bg-background pb-3 sm:pt-5">
//       {/* Background Decoration */}
//       <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />

//       <div className="pointer-events-none absolute -right-40 bottom-10 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />

//       <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//         {/* ================= HEADER ================= */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.3 }}
//           transition={{ duration: 0.6 }}
//           className="flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-end"
//         >
//           <div className="max-w-2xl">
//             {/* Small Heading */}
//             <div className="mb-3 flex items-center gap-2">
//               <span className="h-px w-8 bg-primary" />

//               <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
//                 Handpicked for you
//               </span>
//             </div>

//             {/* Main Heading */}
//             <h2 className="font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
//               Find a place you&apos;ll
//               <span className="text-primary"> love to call home.</span>
//             </h2>

//             {/* Description */}
//             <p className="mt-4 max-w-xl text-sm leading-6 text-muted-foreground sm:text-base">
//               Explore our handpicked selection of beautiful homes in some of
//               the most desirable locations.
//             </p>
//           </div>

//           {/* View All Button */}
//           <Link href="/properties">
//             <Button
//               variant="outline"
//               className="group gap-2 rounded-full px-5 transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
//             >
//               View all listings

//               <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
//             </Button>
//           </Link>
//         </motion.div>

//         {/* ================= PROPERTY GRID ================= */}
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.1 }}
//           className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
//         >
//           {FEATURED_PROPERTIES.map((property) => (
//             <motion.div
//               key={property.id}
//               variants={cardVariants}
//               whileHover={{ y: -8 }}
//               transition={{ duration: 0.3 }}
//             >
//               <Link
//                 href={`/properties/${property.id}`}
//                 className="block h-full"
//               >
//                 <Card className="group h-full overflow-hidden rounded-2xl border-border/60 bg-card p-0 shadow-sm transition-shadow duration-500 hover:shadow-2xl">
//                   {/* ================= IMAGE ================= */}
//                   <div className="relative h-60 overflow-hidden">
//                     <motion.img
//                       src={property.image}
//                       alt={property.title}
//                       className="h-full w-full object-cover"
//                       whileHover={{ scale: 1.08 }}
//                       transition={{
//                         duration: 0.6,
//                         ease: "easeOut",
//                       }}
//                     />

//                     {/* Image Overlay */}
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/5 to-transparent" />

//                     {/* Property Badge */}
//                     <Badge className="absolute left-4 top-4 rounded-full border-0 bg-white/90 px-3 py-1 text-xs font-semibold text-foreground shadow-md backdrop-blur">
//                       {property.tag}
//                     </Badge>

//                     {/* Favorite Button */}
//                     <button
//                       type="button"
//                       aria-label="Save property"
//                       onClick={(e) => {
//                         e.preventDefault();
//                         e.stopPropagation();
//                       }}
//                       className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-foreground shadow-md backdrop-blur transition-all duration-300 hover:scale-110 hover:bg-white"
//                     >
//                       <Heart className="size-4 transition-all duration-300 hover:fill-red-500 hover:text-red-500" />
//                     </button>

//                     {/* Location */}
//                     <div className="absolute bottom-4 left-4 flex items-center gap-1.5 text-xs font-medium text-white">
//                       <MapPin className="size-3.5" />

//                       <span>{property.location}</span>
//                     </div>
//                   </div>

//                   {/* ================= CONTENT ================= */}
//                   <div className="flex flex-col gap-4 p-5">
//                     {/* Title */}
//                     <div>
//                       <h3 className="font-heading text-base font-semibold text-foreground transition-colors duration-300 group-hover:text-primary">
//                         {property.title}
//                       </h3>

//                       <p className="mt-1 text-xs text-muted-foreground">
//                         Modern living • Premium location
//                       </p>
//                     </div>

//                     {/* ================= STATS ================= */}
//                     <div className="flex items-center gap-3 border-y border-border/70 py-3 text-xs text-muted-foreground">
//                       <span className="flex items-center gap-1.5">
//                         <Bed className="size-3.5" />
//                         {property.beds} Beds
//                       </span>

//                       <span className="flex items-center gap-1.5">
//                         <Bath className="size-3.5" />
//                         {property.baths} Baths
//                       </span>

//                       <span className="flex items-center gap-1.5">
//                         <Square className="size-3.5" />
//                         {property.area} sqft
//                       </span>
//                     </div>

//                     {/* ================= PRICE ================= */}
//                     <div className="flex items-end justify-between">
//                       <div>
//                         <p className="text-lg font-bold tracking-tight text-primary">
//                           ৳{property.price}

//                           <span className="ml-1 text-xs font-normal text-muted-foreground">
//                             /month
//                           </span>
//                         </p>
//                       </div>

//                       {/* Arrow Circle */}
//                       <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
//                         <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
//                       </div>
//                     </div>
//                   </div>
//                 </Card>
//               </Link>
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* ================= BOTTOM CTA ================= */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.3, duration: 0.6 }}
//           className="mt-12 flex justify-center"
//         >
//           <Link href="/properties">
//             <Button
//               variant="ghost"
//               className="group rounded-full text-sm text-muted-foreground hover:text-primary"
//             >
//               Explore more properties

//               <ArrowUpRight className="ml-1 size-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
//             </Button>
//           </Link>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// After Dynamic

"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { ArrowUpRight, Bed, Bath, Square, MapPin, Heart } from "lucide-react";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { IProperty } from "@/app/types/property";

type Props = {
  properties: IProperty[];
};

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export function FeaturedProperties({ properties }: Props) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-background pb-3 sm:pt-5">
      {/* Background Decoration */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-10 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-end"
        >
          <div className="max-w-2xl">
            <div className="mb-3 flex items-center gap-2">
              <span className="h-px w-8 bg-primary" />

              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Latest listings
              </span>
            </div>

            <h2 className="font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Find a place you&apos;ll
              <span className="text-primary"> love to call home.</span>
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-6 text-muted-foreground sm:text-base">
              Discover the latest properties added to Nestora, from modern
              apartments to comfortable family homes.
            </p>
          </div>

          {/* View All */}
          <Link href="/properties">
            <Button
              variant="outline"
              className="group gap-2 rounded-full px-5 transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
            >
              View all listings
              <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Button>
          </Link>
        </motion.div>

        {/* ================= PROPERTY GRID ================= */}
        {properties.length > 0 ? (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {properties.map((property) => {
              const image =
                property.images?.[0] || "/images/property-placeholder.jpg";

              return (
                <motion.div
                  key={property.id}
                  variants={cardVariants}
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  <Link
                    href={`/properties/${property.id}`}
                    className="block h-full"
                  >
                    <Card className="group h-full overflow-hidden rounded-2xl border-border/60 bg-card p-0 shadow-sm transition-shadow duration-500 hover:shadow-2xl">
                      {/* ================= IMAGE ================= */}
                      <div className="relative h-60 overflow-hidden">
                        <motion.img
                          src={image}
                          alt={property.title}
                          className="h-full w-full object-cover"
                          whileHover={{ scale: 1.08 }}
                          transition={{
                            duration: 0.6,
                            ease: "easeOut",
                          }}
                        />

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/5 to-transparent" />

                        {/* Availability */}
                        <Badge
                          className={`absolute left-4 top-4 rounded-full border-0 px-3 py-1 text-xs font-semibold shadow-md backdrop-blur ${
                            property.availability === "AVAILABLE"
                              ? "bg-white/90 text-foreground"
                              : "bg-black/70 text-white"
                          }`}
                        >
                          {property.availability === "AVAILABLE"
                            ? "Available"
                            : "Rented"}
                        </Badge>

                        {/* Favorite */}
                        <button
                          type="button"
                          aria-label="Save property"
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                          }}
                          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-foreground shadow-md backdrop-blur transition-all duration-300 hover:scale-110 hover:bg-white"
                        >
                          <Heart className="size-4 transition-all duration-300 hover:fill-red-500 hover:text-red-500" />
                        </button>

                        {/* Location */}
                        <div className="absolute bottom-4 left-4 flex items-center gap-1.5 text-xs font-medium text-white">
                          <MapPin className="size-3.5" />

                          <span>{property.location}</span>
                        </div>
                      </div>

                      {/* ================= CONTENT ================= */}
                      <div className="flex flex-col gap-4 p-5">
                        {/* Title */}
                        <div>
                          <h3 className="line-clamp-1 font-heading text-base font-semibold text-foreground transition-colors duration-300 group-hover:text-primary">
                            {property.title}
                          </h3>

                          <p className="mt-1 line-clamp-1 text-xs text-muted-foreground">
                            {property.category?.name || "Property"}
                            {" • "}
                            {property.availability === "AVAILABLE"
                              ? "Available now"
                              : "Currently rented"}
                          </p>
                        </div>

                        {/* ================= STATS ================= */}
                        <div className="flex items-center gap-3 border-y border-border/70 py-3 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1.5">
                            <Bed className="size-3.5" />
                            {property.bedrooms} Beds
                          </span>

                          <span className="flex items-center gap-1.5">
                            <Bath className="size-3.5" />
                            {property.bathrooms} Baths
                          </span>

                          <span className="flex items-center gap-1.5">
                            <Square className="size-3.5" />
                            {property.size ?? "—"} sqft
                          </span>
                        </div>

                        {/* ================= PRICE ================= */}
                        <div className="flex items-end justify-between">
                          <div>
                            <p className="text-lg font-bold tracking-tight text-primary">
                              ৳{property.rent.toLocaleString("en-BD")}
                              <span className="ml-1 text-xs font-normal text-muted-foreground">
                                /month
                              </span>
                            </p>
                          </div>

                          {/* Arrow */}
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                            <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                          </div>
                        </div>
                      </div>
                    </Card>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        ) : (
          <div className="mt-12 flex min-h-60 items-center justify-center rounded-2xl border border-dashed border-border">
            <p className="text-sm text-muted-foreground">
              No properties available right now.
            </p>
          </div>
        )}

        {/* ================= BOTTOM CTA ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-12 flex justify-center"
        >
          <Link href="/properties">
            <Button
              variant="ghost"
              className="group rounded-full text-sm text-muted-foreground hover:text-primary"
            >
              Explore more properties
              <ArrowUpRight className="ml-1 size-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
