// // "use client";

// // import { useMemo, useState } from "react";
// // import { usePathname, useRouter, useSearchParams } from "next/navigation";

// // import { IProperty } from "@/app/types/property";
// // import { PropertyMeta } from "@/app/service/propertyService";

// // import FilterBar from "./FilterBar";
// // import PropertyGrid from "./PropertyGrid";
// // import EmptyState from "./EmptyState";

// // type Props = {
// //   properties: IProperty[];
// //   meta: PropertyMeta;
// // };

// // type FilterOption = {
// //   value: string;
// //   label: string;
// // };

// // export default function PropertiesClient({ properties, meta }: Props) {
// //   const router = useRouter();
// //   const pathname = usePathname();
// //   const searchParams = useSearchParams();

// //   const [availability, setAvailability] = useState(
// //     searchParams.get("availability") ?? "ALL",
// //   );

// //   const [sort, setSort] = useState("latest");

// //   const [location, setLocation] = useState("ALL");

// //   const [category, setCategory] = useState(
// //     searchParams.get("category") ?? "ALL",
// //   );

// //   const [price, setPrice] = useState(() => {
// //     const min = searchParams.get("minRent");
// //     const max = searchParams.get("maxRent");

// //     if (!min && !max) return "ALL";
// //     if (min === "0" && max === "20000") return "0-20000";
// //     if (min === "20000" && max === "50000") return "20000-50000";
// //     if (min === "50000" && max === "100000") return "50000-100000";
// //     if (min === "100000") return "100000+";

// //     return "ALL";
// //   });

// //   const [amenity, setAmenity] = useState("ALL");

// //   // ---------------------------------------
// //   // Dynamic options from current page
// //   // ---------------------------------------

// //   const availabilityOptions = useMemo<FilterOption[]>(() => {
// //     const values = Array.from(
// //       new Set(properties.map((property) => property.availability)),
// //     );

// //     return values.map((value) => ({
// //       value,
// //       label: value.charAt(0) + value.slice(1).toLowerCase(),
// //     }));
// //   }, [properties]);

// //   const locationOptions = useMemo<FilterOption[]>(() => {
// //     const cities = Array.from(
// //       new Set(
// //         properties
// //           .map((property) => {
// //             const parts = property.location
// //               .split(",")
// //               .map((part) => part.trim())
// //               .filter(Boolean);

// //             return parts.at(-1);
// //           })
// //           .filter((city): city is string => Boolean(city)),
// //       ),
// //     ).sort((a, b) => a.localeCompare(b));

// //     return cities.map((city) => ({
// //       value: city,
// //       label: city,
// //     }));
// //   }, [properties]);

// //   const categoryOptions = useMemo<FilterOption[]>(() => {
// //     const categories = Array.from(
// //       new Set(
// //         properties
// //           .map((property) => property.category?.name)
// //           .filter((name): name is string => Boolean(name)),
// //       ),
// //     ).sort((a, b) => a.localeCompare(b));

// //     return categories.map((categoryName) => ({
// //       value: categoryName,
// //       label: categoryName,
// //     }));
// //   }, [properties]);

// //   const amenityOptions = useMemo<FilterOption[]>(() => {
// //     const amenities = Array.from(
// //       new Set(properties.flatMap((property) => property.amenities)),
// //     ).sort((a, b) => a.localeCompare(b));

// //     return amenities.map((amenityName) => ({
// //       value: amenityName,
// //       label: amenityName,
// //     }));
// //   }, [properties]);

// //   // ---------------------------------------
// //   // Client-side filters for current page
// //   // ---------------------------------------

// //   const filteredProperties = useMemo(() => {
// //     let data = [...properties];

// //     if (location !== "ALL") {
// //       data = data.filter((item) => {
// //         const parts = item.location
// //           .split(",")
// //           .map((part) => part.trim())
// //           .filter(Boolean);

// //         const city = parts.at(-1);

// //         return city === location;
// //       });
// //     }

// //     if (amenity !== "ALL") {
// //       data = data.filter((item) => item.amenities.includes(amenity));
// //     }

// //     if (sort === "low") {
// //       data.sort((a, b) => Number(a.rent) - Number(b.rent));
// //     }

// //     if (sort === "high") {
// //       data.sort((a, b) => Number(b.rent) - Number(a.rent));
// //     }

// //     if (sort === "latest") {
// //       data.sort(
// //         (a, b) =>
// //           new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
// //       );
// //     }

// //     return data;
// //   }, [properties, location, amenity, sort]);

// //   // ---------------------------------------
// //   // URL helper
// //   // ---------------------------------------

// //   const updateQuery = (key: string, value: string) => {
// //     const params = new URLSearchParams(searchParams.toString());

// //     if (!value || value === "ALL") {
// //       params.delete(key);
// //     } else {
// //       params.set(key, value);
// //     }

// //     // Always return to first page
// //     params.set("page", "1");

// //     router.push(`${pathname}?${params.toString()}`);
// //   };

// //   // ---------------------------------------
// //   // Handlers
// //   // ---------------------------------------

// //   const handleAvailabilityChange = (value: string) => {
// //     setAvailability(value);
// //     updateQuery("availability", value);
// //   };

// //   const handleCategoryChange = (value: string) => {
// //     setCategory(value);
// //     updateQuery("category", value);
// //   };

// //   const handlePriceChange = (value: string) => {
// //     setPrice(value);

// //     const params = new URLSearchParams(searchParams.toString());

// //     params.delete("minRent");
// //     params.delete("maxRent");
// //     params.set("page", "1");

// //     if (value === "0-20000") {
// //       params.set("minRent", "0");
// //       params.set("maxRent", "20000");
// //     }

// //     if (value === "20000-50000") {
// //       params.set("minRent", "20000");
// //       params.set("maxRent", "50000");
// //     }

// //     if (value === "50000-100000") {
// //       params.set("minRent", "50000");
// //       params.set("maxRent", "100000");
// //     }

// //     if (value === "100000+") {
// //       params.set("minRent", "100000");
// //     }

// //     router.push(`${pathname}?${params.toString()}`);
// //   };

// //   const handleLocationChange = (value: string) => {
// //     setLocation(value);
// //   };

// //   const handleAmenityChange = (value: string) => {
// //     setAmenity(value);
// //   };

// //   const handleSortChange = (value: string) => {
// //     setSort(value);
// //   };

// //   // ---------------------------------------
// //   // Server pagination
// //   // ---------------------------------------

// //   const totalPages = Math.max(1, Math.ceil(meta.total / meta.limit));

// //   const currentPage = Math.min(meta.page, totalPages);

// //   const goToPage = (page: number) => {
// //     if (page < 1 || page > totalPages || page === currentPage) {
// //       return;
// //     }

// //     const params = new URLSearchParams(searchParams.toString());

// //     params.set("page", String(page));

// //     router.push(`${pathname}?${params.toString()}`);
// //   };

// //   return (
// //     <>
// //       <div className="mb-8 flex flex-col gap-4">
// //         <FilterBar
// //           availability={availability}
// //           setAvailability={handleAvailabilityChange}
// //           sort={sort}
// //           setSort={handleSortChange}
// //           location={location}
// //           setLocation={handleLocationChange}
// //           category={category}
// //           setCategory={handleCategoryChange}
// //           price={price}
// //           setPrice={handlePriceChange}
// //           amenity={amenity}
// //           setAmenity={handleAmenityChange}
// //           availabilityOptions={availabilityOptions}
// //           locationOptions={locationOptions}
// //           categoryOptions={categoryOptions}
// //           amenityOptions={amenityOptions}
// //         />
// //       </div>

// //       {filteredProperties.length === 0 ? (
// //         <EmptyState />
// //       ) : (
// //         <>
// //           <PropertyGrid properties={filteredProperties} />

// //           {totalPages > 1 && (
// //             <div className="mt-10 flex flex-wrap justify-center gap-2">
// //               <button
// //                 onClick={() => goToPage(currentPage - 1)}
// //                 disabled={currentPage === 1}
// //                 className="rounded-md border px-4 py-2 disabled:cursor-not-allowed disabled:opacity-50"
// //               >
// //                 Previous
// //               </button>

// //               {Array.from({ length: totalPages }, (_, index) => index + 1).map(
// //                 (pageNumber) => (
// //                   <button
// //                     key={pageNumber}
// //                     onClick={() => goToPage(pageNumber)}
// //                     className={`rounded-md border px-4 py-2 ${
// //                       currentPage === pageNumber ? "bg-primary text-white" : ""
// //                     }`}
// //                   >
// //                     {pageNumber}
// //                   </button>
// //                 ),
// //               )}

// //               <button
// //                 onClick={() => goToPage(currentPage + 1)}
// //                 disabled={currentPage === totalPages}
// //                 className="rounded-md border px-4 py-2 disabled:cursor-not-allowed disabled:opacity-50"
// //               >
// //                 Next
// //               </button>
// //             </div>
// //           )}

// //           <p className="mt-4 text-center text-sm text-muted-foreground">
// //             Showing page {currentPage} of {totalPages} • {meta.total} properties
// //           </p>
// //         </>
// //       )}
// //     </>
// //   );
// // }

// "use client";

// import { useMemo, useState, useTransition } from "react";
// import { usePathname, useRouter, useSearchParams } from "next/navigation";
// import { Loader2, RotateCcw } from "lucide-react";

// import { IProperty } from "@/app/types/property";
// import { PropertyMeta } from "@/app/service/propertyService";

// import FilterBar from "./FilterBar";
// import PropertyGrid from "./PropertyGrid";
// import EmptyState from "./EmptyState";

// type Props = {
//   properties: IProperty[];
//   meta: PropertyMeta;
// };

// type FilterOption = {
//   value: string;
//   label: string;
// };

// export default function PropertiesClient({ properties, meta }: Props) {
//   const router = useRouter();
//   const pathname = usePathname();
//   const searchParams = useSearchParams();

//   const [isPending, startTransition] = useTransition();
//   const [loadingPage, setLoadingPage] = useState<number | null>(null);

//   const [availability, setAvailability] = useState(
//     searchParams.get("availability") ?? "ALL",
//   );

//   const [sort, setSort] = useState("latest");

//   const [location, setLocation] = useState("ALL");

//   const [category, setCategory] = useState(
//     searchParams.get("category") ?? "ALL",
//   );

//   const [price, setPrice] = useState(() => {
//     const min = searchParams.get("minRent");
//     const max = searchParams.get("maxRent");

//     if (!min && !max) return "ALL";
//     if (min === "0" && max === "20000") return "0-20000";
//     if (min === "20000" && max === "50000") return "20000-50000";
//     if (min === "50000" && max === "100000") return "50000-100000";
//     if (min === "100000") return "100000+";

//     return "ALL";
//   });

//   const [amenity, setAmenity] = useState("ALL");

//   // ---------------------------------------
//   // Dynamic filter options
//   // ---------------------------------------

//   const availabilityOptions = useMemo<FilterOption[]>(() => {
//     const values = Array.from(
//       new Set(properties.map((property) => property.availability)),
//     );

//     return values.map((value) => ({
//       value,
//       label: value.charAt(0) + value.slice(1).toLowerCase(),
//     }));
//   }, [properties]);

//   const locationOptions = useMemo<FilterOption[]>(() => {
//     const cities = Array.from(
//       new Set(
//         properties
//           .map((property) => {
//             const parts = property.location
//               .split(",")
//               .map((part) => part.trim())
//               .filter(Boolean);

//             return parts.at(-1);
//           })
//           .filter((city): city is string => Boolean(city)),
//       ),
//     ).sort((a, b) => a.localeCompare(b));

//     return cities.map((city) => ({
//       value: city,
//       label: city,
//     }));
//   }, [properties]);

//   const categoryOptions = useMemo<FilterOption[]>(() => {
//     const categories = Array.from(
//       new Set(
//         properties
//           .map((property) => property.category?.name)
//           .filter((name): name is string => Boolean(name)),
//       ),
//     ).sort((a, b) => a.localeCompare(b));

//     return categories.map((categoryName) => ({
//       value: categoryName,
//       label: categoryName,
//     }));
//   }, [properties]);

//   const amenityOptions = useMemo<FilterOption[]>(() => {
//     const amenities = Array.from(
//       new Set(properties.flatMap((property) => property.amenities)),
//     ).sort((a, b) => a.localeCompare(b));

//     return amenities.map((amenityName) => ({
//       value: amenityName,
//       label: amenityName,
//     }));
//   }, [properties]);

//   // ---------------------------------------
//   // Client-side filters
//   // ---------------------------------------

//   const filteredProperties = useMemo(() => {
//     let data = [...properties];

//     if (location !== "ALL") {
//       data = data.filter((item) => {
//         const parts = item.location
//           .split(",")
//           .map((part) => part.trim())
//           .filter(Boolean);

//         const city = parts.at(-1);

//         return city === location;
//       });
//     }

//     if (amenity !== "ALL") {
//       data = data.filter((item) => item.amenities.includes(amenity));
//     }

//     if (sort === "low") {
//       data.sort((a, b) => Number(a.rent) - Number(b.rent));
//     }

//     if (sort === "high") {
//       data.sort((a, b) => Number(b.rent) - Number(a.rent));
//     }

//     if (sort === "latest") {
//       data.sort(
//         (a, b) =>
//           new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
//       );
//     }

//     return data;
//   }, [properties, location, amenity, sort]);

//   // ---------------------------------------
//   // Navigation helper
//   // ---------------------------------------

//   const navigate = (url: string, page?: number) => {
//     if (page !== undefined) {
//       setLoadingPage(page);
//     }

//     startTransition(() => {
//       router.push(url);
//     });
//   };

//   // ---------------------------------------
//   // Query helper
//   // ---------------------------------------

//   const updateQuery = (key: string, value: string) => {
//     const params = new URLSearchParams(searchParams.toString());

//     if (!value || value === "ALL") {
//       params.delete(key);
//     } else {
//       params.set(key, value);
//     }

//     params.set("page", "1");

//     navigate(`${pathname}?${params.toString()}`, 1);
//   };

//   // ---------------------------------------
//   // Filter handlers
//   // ---------------------------------------

//   const handleAvailabilityChange = (value: string) => {
//     setAvailability(value);
//     updateQuery("availability", value);
//   };

//   const handleCategoryChange = (value: string) => {
//     setCategory(value);
//     updateQuery("category", value);
//   };

//   const handlePriceChange = (value: string) => {
//     setPrice(value);

//     const params = new URLSearchParams(searchParams.toString());

//     params.delete("minRent");
//     params.delete("maxRent");
//     params.set("page", "1");

//     if (value === "0-20000") {
//       params.set("minRent", "0");
//       params.set("maxRent", "20000");
//     }

//     if (value === "20000-50000") {
//       params.set("minRent", "20000");
//       params.set("maxRent", "50000");
//     }

//     if (value === "50000-100000") {
//       params.set("minRent", "50000");
//       params.set("maxRent", "100000");
//     }

//     if (value === "100000+") {
//       params.set("minRent", "100000");
//     }

//     navigate(`${pathname}?${params.toString()}`, 1);
//   };

//   const handleLocationChange = (value: string) => {
//     setLocation(value);
//   };

//   const handleAmenityChange = (value: string) => {
//     setAmenity(value);
//   };

//   const handleSortChange = (value: string) => {
//     setSort(value);
//   };

//   // ---------------------------------------
//   // Clear all filters
//   // ---------------------------------------

//   const hasActiveFilters =
//     availability !== "ALL" ||
//     category !== "ALL" ||
//     price !== "ALL" ||
//     location !== "ALL" ||
//     amenity !== "ALL" ||
//     sort !== "latest" ||
//     Boolean(searchParams.get("search"));

//   const clearFilters = () => {
//     setAvailability("ALL");
//     setCategory("ALL");
//     setPrice("ALL");
//     setLocation("ALL");
//     setAmenity("ALL");
//     setSort("latest");

//     navigate(pathname, 1);
//   };

//   // ---------------------------------------
//   // Server pagination
//   // ---------------------------------------

//   const totalPages = Math.max(1, Math.ceil(meta.total / meta.limit));

//   const currentPage = Math.min(meta.page, totalPages);

//   const goToPage = (page: number) => {
//     if (page < 1 || page > totalPages || page === currentPage || isPending) {
//       return;
//     }

//     const params = new URLSearchParams(searchParams.toString());

//     params.set("page", String(page));

//     navigate(`${pathname}?${params.toString()}`, page);
//   };

//   // ---------------------------------------
//   // Smart pagination numbers
//   // ---------------------------------------

//   const paginationItems = useMemo<(number | "ellipsis")[]>(() => {
//     if (totalPages <= 7) {
//       return Array.from({ length: totalPages }, (_, index) => index + 1);
//     }

//     const items: (number | "ellipsis")[] = [1];

//     if (currentPage > 4) {
//       items.push("ellipsis");
//     }

//     const start = Math.max(2, currentPage - 1);
//     const end = Math.min(totalPages - 1, currentPage + 1);

//     for (let page = start; page <= end; page++) {
//       items.push(page);
//     }

//     if (currentPage < totalPages - 3) {
//       items.push("ellipsis");
//     }

//     items.push(totalPages);

//     return items;
//   }, [currentPage, totalPages]);

//   return (
//     <div className="relative">
//       {/* Navigation Loading Overlay */}
//       {isPending && (
//         <div className="fixed inset-0 z-50 flex items-start justify-center bg-background/60 pt-24 backdrop-blur-[2px]">
//           <div className="flex items-center gap-3 rounded-full border bg-background px-5 py-3 text-sm font-medium shadow-lg">
//             <Loader2 className="h-4 w-4 animate-spin text-primary" />
//             Loading properties...
//           </div>
//         </div>
//       )}

//       {/* Filters */}
//       <div className="mb-8 flex flex-col gap-4">
//         <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
//           <FilterBar
//             availability={availability}
//             setAvailability={handleAvailabilityChange}
//             sort={sort}
//             setSort={handleSortChange}
//             location={location}
//             setLocation={handleLocationChange}
//             category={category}
//             setCategory={handleCategoryChange}
//             price={price}
//             setPrice={handlePriceChange}
//             amenity={amenity}
//             setAmenity={handleAmenityChange}
//             availabilityOptions={availabilityOptions}
//             locationOptions={locationOptions}
//             categoryOptions={categoryOptions}
//             amenityOptions={amenityOptions}
//           />

//           {hasActiveFilters && (
//             <button
//               type="button"
//               onClick={clearFilters}
//               disabled={isPending}
//               className="inline-flex shrink-0 cursor-pointer items-center justify-center gap-2 rounded-md border px-4 py-2 text-sm font-medium transition-colors hover:bg-muted disabled:cursor-not-allowed disabled:opacity-50"
//             >
//               {isPending ? (
//                 <Loader2 className="h-4 w-4 animate-spin" />
//               ) : (
//                 <RotateCcw className="h-4 w-4" />
//               )}
//               Clear filters
//             </button>
//           )}
//         </div>
//       </div>

//       {/* Properties */}
//       {filteredProperties.length === 0 ? (
//         <EmptyState />
//       ) : (
//         <>
//           <PropertyGrid properties={filteredProperties} />

//           {/* Pagination */}
//           {totalPages > 1 && (
//             <div className="mt-12 flex flex-col items-center gap-4">
//               <div className="flex flex-wrap items-center justify-center gap-2">
//                 {/* Previous */}
//                 <button
//                   type="button"
//                   onClick={() => goToPage(currentPage - 1)}
//                   disabled={currentPage === 1 || isPending}
//                   className="cursor-pointer rounded-md border px-4 py-2 text-sm font-medium transition-colors hover:bg-muted disabled:cursor-not-allowed disabled:opacity-50"
//                 >
//                   {isPending && loadingPage === currentPage - 1 ? (
//                     <Loader2 className="mx-2 h-4 w-4 animate-spin" />
//                   ) : (
//                     "Previous"
//                   )}
//                 </button>

//                 {/* Page numbers */}
//                 {paginationItems.map((item, index) => {
//                   if (item === "ellipsis") {
//                     return (
//                       <span
//                         key={`ellipsis-${index}`}
//                         className="px-2 text-muted-foreground"
//                       >
//                         …
//                       </span>
//                     );
//                   }

//                   const isCurrent = currentPage === item;
//                   const isLoading = isPending && loadingPage === item;

//                   return (
//                     <button
//                       key={item}
//                       type="button"
//                       onClick={() => goToPage(item)}
//                       disabled={isCurrent || isPending}
//                       aria-current={isCurrent ? "page" : undefined}
//                       className={`flex h-10 min-w-10 cursor-pointer items-center justify-center rounded-md border px-3 text-sm font-medium transition-all disabled:cursor-not-allowed ${
//                         isCurrent
//                           ? "border-primary bg-primary text-primary-foreground shadow-sm"
//                           : "hover:bg-muted"
//                       }`}
//                     >
//                       {isLoading ? (
//                         <Loader2 className="h-4 w-4 animate-spin" />
//                       ) : (
//                         item
//                       )}
//                     </button>
//                   );
//                 })}

//                 {/* Next */}
//                 <button
//                   type="button"
//                   onClick={() => goToPage(currentPage + 1)}
//                   disabled={currentPage === totalPages || isPending}
//                   className="cursor-pointer rounded-md border px-4 py-2 text-sm font-medium transition-colors hover:bg-muted disabled:cursor-not-allowed disabled:opacity-50"
//                 >
//                   {isPending && loadingPage === currentPage + 1 ? (
//                     <Loader2 className="mx-2 h-4 w-4 animate-spin" />
//                   ) : (
//                     "Next"
//                   )}
//                 </button>
//               </div>

//               {/* Page information */}
//               <p className="text-center text-sm text-muted-foreground">
//                 Showing page{" "}
//                 <span className="font-medium text-foreground">
//                   {currentPage}
//                 </span>{" "}
//                 of{" "}
//                 <span className="font-medium text-foreground">
//                   {totalPages}
//                 </span>{" "}
//                 •{" "}
//                 <span className="font-medium text-foreground">
//                   {meta.total}
//                 </span>{" "}
//                 properties
//               </p>
//             </div>
//           )}
//         </>
//       )}
//     </div>
//   );
// }

"use client";

import { useMemo, useState, useTransition } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {
  ArrowDownAZ,
  ArrowUpAZ,
  ChevronLeft,
  ChevronRight,
  Filter,
  RotateCcw,
  Search,
  SlidersHorizontal,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import PropertyCard from "./PropertyCard";
import { IProperty } from "@/app/types/property";
import type { PropertyMeta } from "@/app/service/propertyService";

type Props = {
  properties: IProperty[];
  meta: PropertyMeta;
};

export default function PropertiesClient({ properties, meta }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  /* ----------------------------- URL values ----------------------------- */

  const search = searchParams.get("search") ?? "";
  const categoryIdFromUrl = searchParams.get("categoryId") ?? "";
  const availabilityFromUrl = searchParams.get("availability") ?? "";
  const minRentFromUrl = searchParams.get("minRent") ?? "";
  const maxRentFromUrl = searchParams.get("maxRent") ?? "";
  const locationFromUrl = searchParams.get("location") ?? "";
  const amenityFromUrl = searchParams.get("amenity") ?? "";
  const sortByFromUrl = searchParams.get("sortBy") ?? "createdAt";
  const sortOrderFromUrl = searchParams.get("sortOrder") ?? "desc";

  const currentPage = Math.max(1, Number(searchParams.get("page") ?? 1));

  /* ----------------------------- Local state ----------------------------- */

  const [availability, setAvailability] = useState(availabilityFromUrl);

  const [categoryId, setCategoryId] = useState(categoryIdFromUrl);

  const [minRent, setMinRent] = useState(minRentFromUrl);
  const [maxRent, setMaxRent] = useState(maxRentFromUrl);

  const [location, setLocation] = useState(locationFromUrl);
  const [amenity, setAmenity] = useState(amenityFromUrl);

  const [sort, setSort] = useState(() => {
    if (sortByFromUrl === "rent" && sortOrderFromUrl === "asc") {
      return "low";
    }

    if (sortByFromUrl === "rent" && sortOrderFromUrl === "desc") {
      return "high";
    }

    return "latest";
  });

  const [isPending, startTransition] = useTransition();

  /* --------------------------- Update URL helper -------------------------- */

  const updateQuery = (key: string, value: string, resetPage = true) => {
    const params = new URLSearchParams(searchParams.toString());

    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }

    if (resetPage) {
      params.set("page", "1");
    }

    startTransition(() => {
      router.push(`${pathname}?${params.toString()}`);
    });
  };

  /* --------------------------- Filter options ---------------------------- */

  const availabilityOptions = useMemo(() => {
    const values = Array.from(
      new Set(
        properties.map((property) => property.availability).filter(Boolean),
      ),
    );

    return values.sort();
  }, [properties]);

  const categoryOptions = useMemo(() => {
 
    const categories = Array.from(
      new Map(
        properties
          .filter((property) => property.category)
          .map((property) => [property.category!.id, property.category!]),
      ).values(),
    ).sort((a, b) => a.name.localeCompare(b.name));

    return categories;
  }, [properties]);

  const locationOptions = useMemo(() => {
    const locations = Array.from(
      new Set(
        properties
          .map((property) => {
            if (!property.location) return "";

            const parts = property.location
              .split(",")
              .map((part) => part.trim())
              .filter(Boolean);

            return parts.length > 0
              ? parts[parts.length - 1]
              : property.location;
          })
          .filter(Boolean),
      ),
    );

    return locations.sort((a, b) => a.localeCompare(b));
  }, [properties]);

  const amenityOptions = useMemo(() => {
    const amenities = Array.from(
      new Set(
        properties
          .flatMap((property) => property.amenities ?? [])
          .filter(Boolean),
      ),
    );

    return amenities.sort((a, b) => a.localeCompare(b));
  }, [properties]);

  /* ----------------------------- Filters -------------------------------- */

  const handleAvailabilityChange = (value: string) => {
    setAvailability(value);
    updateQuery("availability", value);
  };

  const handleCategoryChange = (value: string) => {
    setCategoryId(value);
    updateQuery("categoryId", value);
  };

  const handleLocationChange = (value: string) => {
    setLocation(value);
    updateQuery("location", value);
  };

  const handleAmenityChange = (value: string) => {
    setAmenity(value);
    updateQuery("amenity", value);
  };

  const handleMinRentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    setMinRent(value);
  };

  const handleMaxRentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    setMaxRent(value);
  };

  const applyPriceFilter = () => {
    const params = new URLSearchParams(searchParams.toString());

    if (minRent) {
      params.set("minRent", minRent);
    } else {
      params.delete("minRent");
    }

    if (maxRent) {
      params.set("maxRent", maxRent);
    } else {
      params.delete("maxRent");
    }

    params.set("page", "1");

 startTransition(() => {
  router.push(`${pathname}?${params.toString()}`);
});
  };

  /* ------------------------------- Sort --------------------------------- */

  const handleSortChange = (value: string) => {
    setSort(value);

    const params = new URLSearchParams(searchParams.toString());

    if (value === "low") {
      params.set("sortBy", "rent");
      params.set("sortOrder", "asc");
    } else if (value === "high") {
      params.set("sortBy", "rent");
      params.set("sortOrder", "desc");
    } else {
      params.set("sortBy", "createdAt");
      params.set("sortOrder", "desc");
    }

    params.set("page", "1");

    startTransition(() => {
  router.push(`${pathname}?${params.toString()}`);
});
  };

  /* ---------------------------- Clear filters ----------------------------- */

  const hasActiveFilters =
    Boolean(search) ||
    Boolean(availability) ||
    Boolean(categoryId) ||
    Boolean(minRent) ||
    Boolean(maxRent) ||
    Boolean(location) ||
    Boolean(amenity);

  const clearFilters = () => {
    setAvailability("");
    setCategoryId("");
    setMinRent("");
    setMaxRent("");
    setLocation("");
    setAmenity("");
    setSort("latest");

    startTransition(() => {
      router.push(pathname);
    });
  };

  /* ----------------------------- Pagination ------------------------------ */

  const totalPages = Math.max(1, Math.ceil(meta.total / meta.limit));

  const goToPage = (page: number) => {
    if (page < 1 || page > totalPages || page === currentPage) {
      return;
    }

    const params = new URLSearchParams(searchParams.toString());

    params.set("page", String(page));

    startTransition(() => {
      router.push(`${pathname}?${params.toString()}`);
    });
  };

  const pageNumbers = useMemo(() => {
    const pages: (number | "...")[] = [];

    if (totalPages <= 7) {
      for (let page = 1; page <= totalPages; page++) {
        pages.push(page);
      }

      return pages;
    }

    pages.push(1);

    if (currentPage > 3) {
      pages.push("...");
    }

    const start = Math.max(2, currentPage - 1);
    const end = Math.min(totalPages - 1, currentPage + 1);

    for (let page = start; page <= end; page++) {
      pages.push(page);
    }

    if (currentPage < totalPages - 2) {
      pages.push("...");
    }

    pages.push(totalPages);

    return pages;
  }, [currentPage, totalPages]);

  /* ----------------------------- Result range ----------------------------- */

  const resultStart = meta.total === 0 ? 0 : (meta.page - 1) * meta.limit + 1;

  const resultEnd =
    meta.total === 0 ? 0 : Math.min(meta.page * meta.limit, meta.total);

  /* -------------------------------- JSX --------------------------------- */

  return (
    <section className="relative">
      {/* Loading overlay */}

      {isPending && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/60 backdrop-blur-sm">
          <div className="flex items-center gap-3 rounded-xl border bg-background px-5 py-4 shadow-lg">
            <div className="h-5 w-5 animate-spin rounded-full border-2 border-primary border-t-transparent" />

            <span className="text-sm font-medium">Updating properties...</span>
          </div>
        </div>
      )}

      {/* Filter header */}

      <div className="mb-8 rounded-2xl border bg-card p-5 shadow-sm">
        <div className="mb-5 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-2">
            <SlidersHorizontal className="h-5 w-5 text-primary" />

            <div>
              <h2 className="text-lg font-semibold">Find Your Property</h2>

              <p className="text-sm text-muted-foreground">
                Filter and sort properties to find the right place.
              </p>
            </div>
          </div>

          {hasActiveFilters && (
            <Button
              variant="outline"
              size="sm"
              onClick={clearFilters}
              className="w-fit"
            >
              <RotateCcw className="mr-2 h-4 w-4" />
              Clear Filters
            </Button>
          )}
        </div>

        {/* Filters */}

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {/* Availability */}

          <div>
            <label className="mb-2 block text-sm font-medium">
              Availability
            </label>

            <Select
              value={availability || "all"}
              onValueChange={(value) =>
                handleAvailabilityChange(value === "all" ? "" : value)
              }
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="All availability" />
              </SelectTrigger>

              <SelectContent>
                <SelectItem value="all">All Availability</SelectItem>

                {availabilityOptions.map((value) => (
                  <SelectItem key={value} value={value}>
                    {value}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Category */}

          <div>
            <label className="mb-2 block text-sm font-medium">Category</label>

            <Select
              value={categoryId || "all"}
              onValueChange={(value) =>
                handleCategoryChange(value === "all" ? "" : value)
              }
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="All categories" />
              </SelectTrigger>

              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>

                {categoryOptions.map((category) => (
                  <SelectItem key={category.id} value={category.id}>
                    {category.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Location */}

          <div>
            <label className="mb-2 block text-sm font-medium">Location</label>

            <Select
              value={location || "all"}
              onValueChange={(value) =>
                handleLocationChange(value === "all" ? "" : value)
              }
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="All locations" />
              </SelectTrigger>

              <SelectContent>
                <SelectItem value="all">All Locations</SelectItem>

                {locationOptions.map((value) => (
                  <SelectItem key={value} value={value}>
                    {value}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Amenity */}

          <div>
            <label className="mb-2 block text-sm font-medium">Amenity</label>

            <Select
              value={amenity || "all"}
              onValueChange={(value) =>
                handleAmenityChange(value === "all" ? "" : value)
              }
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="All amenities" />
              </SelectTrigger>

              <SelectContent>
                <SelectItem value="all">All Amenities</SelectItem>

                {amenityOptions.map((value) => (
                  <SelectItem key={value} value={value}>
                    {value}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Price + Sort */}

        <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {/* Min price */}

          <div>
            <label className="mb-2 block text-sm font-medium">
              Minimum Rent
            </label>

            <input
              type="number"
              min="0"
              value={minRent}
              onChange={handleMinRentChange}
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  applyPriceFilter();
                }
              }}
              placeholder="e.g. 10000"
              className="h-10 w-full rounded-md border bg-background px-3 text-sm outline-none transition focus:border-primary focus:ring-1 focus:ring-primary"
            />
          </div>

          {/* Max price */}

          <div>
            <label className="mb-2 block text-sm font-medium">
              Maximum Rent
            </label>

            <input
              type="number"
              min="0"
              value={maxRent}
              onChange={handleMaxRentChange}
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  applyPriceFilter();
                }
              }}
              placeholder="e.g. 100000"
              className="h-10 w-full rounded-md border bg-background px-3 text-sm outline-none transition focus:border-primary focus:ring-1 focus:ring-primary"
            />
          </div>

          {/* Apply price */}

          <div className="flex items-end">
            <Button onClick={applyPriceFilter} className="h-10 w-full">
              <Search className="mr-2 h-4 w-4" />
              Apply Price
            </Button>
          </div>

          {/* Sort */}

          <div>
            <label className="mb-2 block text-sm font-medium">Sort By</label>

            <Select value={sort} onValueChange={handleSortChange}>
              <SelectTrigger className="w-full">
                <SelectValue />
              </SelectTrigger>

              <SelectContent>
                <SelectItem value="latest">
                  <span className="flex items-center gap-2">
                    <ArrowDownAZ className="h-4 w-4" />
                    Latest
                  </span>
                </SelectItem>

                <SelectItem value="low">
                  <span className="flex items-center gap-2">
                    <ArrowUpAZ className="h-4 w-4" />
                    Price: Low to High
                  </span>
                </SelectItem>

                <SelectItem value="high">
                  <span className="flex items-center gap-2">
                    <ArrowDownAZ className="h-4 w-4" />
                    Price: High to Low
                  </span>
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Results header */}

      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-muted-foreground">
            Showing{" "}
            <span className="font-semibold text-foreground">{resultStart}</span>{" "}
            – <span className="font-semibold text-foreground">{resultEnd}</span>{" "}
            of{" "}
            <span className="font-semibold text-foreground">{meta.total}</span>{" "}
            properties
          </p>

          {hasActiveFilters && (
            <p className="mt-1 text-xs text-muted-foreground">
              Filtered results
            </p>
          )}
        </div>

        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Filter className="h-4 w-4" />

          <span>
            Page {meta.page} of {totalPages}
          </span>
        </div>
      </div>

      {/* Empty state */}

      {properties.length === 0 ? (
        <div className="flex min-h-[350px] flex-col items-center justify-center rounded-2xl border border-dashed bg-card px-6 text-center">
          <div className="mb-4 rounded-full bg-muted p-4">
            <Search className="h-7 w-7 text-muted-foreground" />
          </div>

          <h3 className="text-xl font-semibold">No properties found</h3>

          <p className="mt-2 max-w-md text-sm text-muted-foreground">
            We couldn&apos;t find any properties matching your current filters.
            Try changing or clearing some filters.
          </p>

          {hasActiveFilters && (
            <Button variant="outline" onClick={clearFilters} className="mt-5">
              <RotateCcw className="mr-2 h-4 w-4" />
              Clear Filters
            </Button>
          )}
        </div>
      ) : (
        <>
          {/* Property grid */}

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {properties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>

          {/* Pagination */}

          {totalPages > 1 && (
            <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t pt-6 sm:flex-row">
              {/* Previous */}

              <Button
                variant="outline"
                disabled={currentPage <= 1}
                onClick={() => goToPage(currentPage - 1)}
              >
                <ChevronLeft className="mr-1 h-4 w-4" />
                Previous
              </Button>

              {/* Page numbers */}

              <div className="flex items-center gap-1">
                {pageNumbers.map((page, index) => {
                  if (page === "...") {
                    return (
                      <span
                        key={`ellipsis-${index}`}
                        className="px-2 text-sm text-muted-foreground"
                      >
                        ...
                      </span>
                    );
                  }

                  const isActive = page === currentPage;

                  return (
                    <Button
                      key={page}
                      variant={isActive ? "default" : "outline"}
                      size="sm"
                      className="h-9 w-9 p-0"
                      onClick={() => goToPage(page)}
                    >
                      {page}
                    </Button>
                  );
                })}
              </div>

              {/* Next */}

              <Button
                variant="outline"
                disabled={currentPage >= totalPages}
                onClick={() => goToPage(currentPage + 1)}
              >
                Next
                <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
          )}
        </>
      )}
    </section>
  );
}
