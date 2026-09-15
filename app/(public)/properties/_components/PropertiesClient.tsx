// "use client";

// import { useMemo, useState } from "react";
// import { IProperty } from "@/app/types/property";
// import FilterBar from "./FilterBar";
// import PropertyGrid from "./PropertyGrid";
// import EmptyState from "./EmptyState";

// type Props = {
//   properties: IProperty[];
// };

// type FilterOption = {
//   value: string;
//   label: string;
// };

// export default function PropertiesClient({ properties }: Props) {
//   const [availability, setAvailability] = useState("ALL");
//   const [sort, setSort] = useState("latest");
//   const [location, setLocation] = useState("ALL");
//   const [category, setCategory] = useState("ALL");
//   const [price, setPrice] = useState("ALL");
//   const [amenity, setAmenity] = useState("ALL");

//   const [currentPage, setCurrentPage] = useState(1);

//   const itemsPerPage = 6;

//   // --------------------------------------------------
//   // Dynamic Filter Options
//   // --------------------------------------------------

//   // Availability
//   const availabilityOptions = useMemo<FilterOption[]>(() => {
//     const values = Array.from(
//       new Set(properties.map((property) => property.availability))
//     );

//     return values.map((value) => ({
//       value,
//       label:
//         value.charAt(0) + value.slice(1).toLowerCase(),
//     }));
//   }, [properties]);

//   // Location
//   // Example:
//   // "Gulshan, Dhaka" -> "Dhaka"
//   // "Banani, Dhaka" -> "Dhaka"
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
//           .filter((city): city is string => Boolean(city))
//       )
//     ).sort((a, b) => a.localeCompare(b));

//     return cities.map((city) => ({
//       value: city,
//       label: city,
//     }));
//   }, [properties]);

//   // Category
//   const categoryOptions = useMemo<FilterOption[]>(() => {
//     const categories = Array.from(
//       new Set(
//         properties
//           .map((property) => property.category?.name)
//           .filter((name): name is string => Boolean(name))
//       )
//     ).sort((a, b) => a.localeCompare(b));

//     return categories.map((categoryName) => ({
//       value: categoryName,
//       label: categoryName,
//     }));
//   }, [properties]);

//   // Amenities
//   const amenityOptions = useMemo<FilterOption[]>(() => {
//     const amenities = Array.from(
//       new Set(
//         properties.flatMap((property) => property.amenities)
//       )
//     ).sort((a, b) => a.localeCompare(b));

//     return amenities.map((amenityName) => ({
//       value: amenityName,
//       label: amenityName,
//     }));
//   }, [properties]);

//   // --------------------------------------------------
//   // Filtering + Sorting
//   // --------------------------------------------------

//   const filteredProperties = useMemo(() => {
//     let data = [...properties];

//     // Availability
//     if (availability !== "ALL") {
//       data = data.filter(
//         (item) => item.availability === availability
//       );
//     }

//     // Location
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

//     // Category
//     if (category !== "ALL") {
//       data = data.filter(
//         (item) => item.category?.name === category
//       );
//     }

//     // Price
//     if (price === "0-20000") {
//       data = data.filter(
//         (item) => Number(item.rent) <= 20000
//       );
//     }

//     if (price === "20000-50000") {
//       data = data.filter((item) => {
//         const rent = Number(item.rent);

//         return rent > 20000 && rent <= 50000;
//       });
//     }

//     if (price === "50000-100000") {
//       data = data.filter((item) => {
//         const rent = Number(item.rent);

//         return rent > 50000 && rent <= 100000;
//       });
//     }

//     if (price === "100000+") {
//       data = data.filter(
//         (item) => Number(item.rent) > 100000
//       );
//     }

//     // Amenities
//     if (amenity !== "ALL") {
//       data = data.filter((item) =>
//         item.amenities.includes(amenity)
//       );
//     }

//     // Sorting
//     if (sort === "low") {
//       data.sort(
//         (a, b) => Number(a.rent) - Number(b.rent)
//       );
//     }

//     if (sort === "high") {
//       data.sort(
//         (a, b) => Number(b.rent) - Number(a.rent)
//       );
//     }

//     if (sort === "latest") {
//       data.sort(
//         (a, b) =>
//           new Date(b.createdAt).getTime() -
//           new Date(a.createdAt).getTime()
//       );
//     }

//     return data;
//   }, [
//     properties,
//     availability,
//     location,
//     category,
//     price,
//     amenity,
//     sort,
//   ]);

//   // --------------------------------------------------
//   // Pagination
//   // --------------------------------------------------

//   const totalPages = Math.max(
//     1,
//     Math.ceil(filteredProperties.length / itemsPerPage)
//   );

//   // Make sure current page never exceeds available pages
//   const safeCurrentPage = Math.min(
//     currentPage,
//     totalPages
//   );

//   const paginatedProperties = filteredProperties.slice(
//     (safeCurrentPage - 1) * itemsPerPage,
//     safeCurrentPage * itemsPerPage
//   );

//   // --------------------------------------------------
//   // Reset Pagination When Filters Change
//   // --------------------------------------------------

//   const handleAvailabilityChange = (value: string) => {
//     setAvailability(value);
//     setCurrentPage(1);
//   };

//   const handleLocationChange = (value: string) => {
//     setLocation(value);
//     setCurrentPage(1);
//   };

//   const handleCategoryChange = (value: string) => {
//     setCategory(value);
//     setCurrentPage(1);
//   };

//   const handlePriceChange = (value: string) => {
//     setPrice(value);
//     setCurrentPage(1);
//   };

//   const handleAmenityChange = (value: string) => {
//     setAmenity(value);
//     setCurrentPage(1);
//   };

//   const handleSortChange = (value: string) => {
//     setSort(value);
//     setCurrentPage(1);
//   };

//   // --------------------------------------------------
//   // Render
//   // --------------------------------------------------

//   return (
//     <>
//       <div className="mb-8 flex flex-col gap-4">
//         <FilterBar
//           availability={availability}
//           setAvailability={handleAvailabilityChange}
//           sort={sort}
//           setSort={handleSortChange}
//           location={location}
//           setLocation={handleLocationChange}
//           category={category}
//           setCategory={handleCategoryChange}
//           price={price}
//           setPrice={handlePriceChange}
//           amenity={amenity}
//           setAmenity={handleAmenityChange}
//           availabilityOptions={availabilityOptions}
//           locationOptions={locationOptions}
//           categoryOptions={categoryOptions}
//           amenityOptions={amenityOptions}
//         />
//       </div>

//       {filteredProperties.length === 0 ? (
//         <EmptyState />
//       ) : (
//         <>
//           <PropertyGrid properties={paginatedProperties} />

//           {totalPages > 1 && (
//             <div className="mt-10 flex flex-wrap justify-center gap-2">
//               {/* Previous */}
//               <button
//                 onClick={() =>
//                   setCurrentPage((page) =>
//                     Math.max(page - 1, 1)
//                   )
//                 }
//                 disabled={safeCurrentPage === 1}
//                 className="rounded-md border px-4 py-2 disabled:cursor-not-allowed disabled:opacity-50"
//               >
//                 Previous
//               </button>

//               {/* Page Numbers */}
//               {Array.from({ length: totalPages }).map(
//                 (_, index) => {
//                   const pageNumber = index + 1;

//                   return (
//                     <button
//                       key={pageNumber}
//                       onClick={() =>
//                         setCurrentPage(pageNumber)
//                       }
//                       className={`rounded-md border px-4 py-2 ${
//                         safeCurrentPage === pageNumber
//                           ? "bg-primary text-white"
//                           : ""
//                       }`}
//                     >
//                       {pageNumber}
//                     </button>
//                   );
//                 }
//               )}

//               {/* Next */}
//               <button
//                 onClick={() =>
//                   setCurrentPage((page) =>
//                     Math.min(page + 1, totalPages)
//                   )
//                 }
//                 disabled={safeCurrentPage === totalPages}
//                 className="rounded-md border px-4 py-2 disabled:cursor-not-allowed disabled:opacity-50"
//               >
//                 Next
//               </button>
//             </div>
//           )}
//         </>
//       )}
//     </>
//   );
// }

"use client";

import { useMemo, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { IProperty } from "@/app/types/property";
import { PropertyMeta } from "@/app/service/propertyService";

import FilterBar from "./FilterBar";
import PropertyGrid from "./PropertyGrid";
import EmptyState from "./EmptyState";

type Props = {
  properties: IProperty[];
  meta: PropertyMeta;
};

type FilterOption = {
  value: string;
  label: string;
};

export default function PropertiesClient({
  properties,
  meta,
}: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [availability, setAvailability] = useState(
    searchParams.get("availability") ?? "ALL",
  );

  const [sort, setSort] = useState("latest");

  const [location, setLocation] = useState("ALL");

  const [category, setCategory] = useState(
    searchParams.get("category") ?? "ALL",
  );

  const [price, setPrice] = useState(() => {
    const min = searchParams.get("minRent");
    const max = searchParams.get("maxRent");

    if (!min && !max) return "ALL";
    if (min === "0" && max === "20000") return "0-20000";
    if (min === "20000" && max === "50000") return "20000-50000";
    if (min === "50000" && max === "100000") return "50000-100000";
    if (min === "100000") return "100000+";

    return "ALL";
  });

  const [amenity, setAmenity] = useState("ALL");

  // ---------------------------------------
  // Dynamic options from current page
  // ---------------------------------------

  const availabilityOptions = useMemo<FilterOption[]>(() => {
    const values = Array.from(
      new Set(
        properties.map(
          (property) => property.availability,
        ),
      ),
    );

    return values.map((value) => ({
      value,
      label:
        value.charAt(0) +
        value.slice(1).toLowerCase(),
    }));
  }, [properties]);

  const locationOptions = useMemo<FilterOption[]>(() => {
    const cities = Array.from(
      new Set(
        properties
          .map((property) => {
            const parts = property.location
              .split(",")
              .map((part) => part.trim())
              .filter(Boolean);

            return parts.at(-1);
          })
          .filter(
            (city): city is string =>
              Boolean(city),
          ),
      ),
    ).sort((a, b) => a.localeCompare(b));

    return cities.map((city) => ({
      value: city,
      label: city,
    }));
  }, [properties]);

  const categoryOptions = useMemo<FilterOption[]>(() => {
    const categories = Array.from(
      new Set(
        properties
          .map(
            (property) =>
              property.category?.name,
          )
          .filter(
            (name): name is string =>
              Boolean(name),
          ),
      ),
    ).sort((a, b) => a.localeCompare(b));

    return categories.map((categoryName) => ({
      value: categoryName,
      label: categoryName,
    }));
  }, [properties]);

  const amenityOptions = useMemo<FilterOption[]>(() => {
    const amenities = Array.from(
      new Set(
        properties.flatMap(
          (property) => property.amenities,
        ),
      ),
    ).sort((a, b) => a.localeCompare(b));

    return amenities.map((amenityName) => ({
      value: amenityName,
      label: amenityName,
    }));
  }, [properties]);

  // ---------------------------------------
  // Client-side filters for current page
  // ---------------------------------------

  const filteredProperties = useMemo(() => {
    let data = [...properties];

    if (location !== "ALL") {
      data = data.filter((item) => {
        const parts = item.location
          .split(",")
          .map((part) => part.trim())
          .filter(Boolean);

        const city = parts.at(-1);

        return city === location;
      });
    }

    if (amenity !== "ALL") {
      data = data.filter((item) =>
        item.amenities.includes(amenity),
      );
    }

    if (sort === "low") {
      data.sort(
        (a, b) =>
          Number(a.rent) -
          Number(b.rent),
      );
    }

    if (sort === "high") {
      data.sort(
        (a, b) =>
          Number(b.rent) -
          Number(a.rent),
      );
    }

    if (sort === "latest") {
      data.sort(
        (a, b) =>
          new Date(b.createdAt).getTime() -
          new Date(a.createdAt).getTime(),
      );
    }

    return data;
  }, [
    properties,
    location,
    amenity,
    sort,
  ]);

  // ---------------------------------------
  // URL helper
  // ---------------------------------------

  const updateQuery = (
    key: string,
    value: string,
  ) => {
    const params = new URLSearchParams(
      searchParams.toString(),
    );

    if (!value || value === "ALL") {
      params.delete(key);
    } else {
      params.set(key, value);
    }

    // Always return to first page
    params.set("page", "1");

    router.push(
      `${pathname}?${params.toString()}`,
    );
  };

  // ---------------------------------------
  // Handlers
  // ---------------------------------------

  const handleAvailabilityChange = (
    value: string,
  ) => {
    setAvailability(value);
    updateQuery("availability", value);
  };

  const handleCategoryChange = (
    value: string,
  ) => {
    setCategory(value);
    updateQuery("category", value);
  };

  const handlePriceChange = (
    value: string,
  ) => {
    setPrice(value);

    const params = new URLSearchParams(
      searchParams.toString(),
    );

    params.delete("minRent");
    params.delete("maxRent");
    params.set("page", "1");

    if (value === "0-20000") {
      params.set("minRent", "0");
      params.set("maxRent", "20000");
    }

    if (value === "20000-50000") {
      params.set("minRent", "20000");
      params.set("maxRent", "50000");
    }

    if (value === "50000-100000") {
      params.set("minRent", "50000");
      params.set("maxRent", "100000");
    }

    if (value === "100000+") {
      params.set("minRent", "100000");
    }

    router.push(
      `${pathname}?${params.toString()}`,
    );
  };

  const handleLocationChange = (
    value: string,
  ) => {
    setLocation(value);
  };

  const handleAmenityChange = (
    value: string,
  ) => {
    setAmenity(value);
  };

  const handleSortChange = (
    value: string,
  ) => {
    setSort(value);
  };

  // ---------------------------------------
  // Server pagination
  // ---------------------------------------

  const totalPages = Math.max(
    1,
    Math.ceil(
      meta.total / meta.limit,
    ),
  );

  const currentPage = Math.min(
    meta.page,
    totalPages,
  );

  const goToPage = (page: number) => {
    if (
      page < 1 ||
      page > totalPages ||
      page === currentPage
    ) {
      return;
    }

    const params = new URLSearchParams(
      searchParams.toString(),
    );

    params.set(
      "page",
      String(page),
    );

    router.push(
      `${pathname}?${params.toString()}`,
    );
  };

  return (
    <>
      <div className="mb-8 flex flex-col gap-4">
        <FilterBar
          availability={availability}
          setAvailability={
            handleAvailabilityChange
          }
          sort={sort}
          setSort={handleSortChange}
          location={location}
          setLocation={
            handleLocationChange
          }
          category={category}
          setCategory={
            handleCategoryChange
          }
          price={price}
          setPrice={handlePriceChange}
          amenity={amenity}
          setAmenity={
            handleAmenityChange
          }
          availabilityOptions={
            availabilityOptions
          }
          locationOptions={
            locationOptions
          }
          categoryOptions={
            categoryOptions
          }
          amenityOptions={
            amenityOptions
          }
        />
      </div>

      {filteredProperties.length === 0 ? (
        <EmptyState />
      ) : (
        <>
          <PropertyGrid
            properties={filteredProperties}
          />

          {totalPages > 1 && (
            <div className="mt-10 flex flex-wrap justify-center gap-2">
              <button
                onClick={() =>
                  goToPage(
                    currentPage - 1,
                  )
                }
                disabled={
                  currentPage === 1
                }
                className="rounded-md border px-4 py-2 disabled:cursor-not-allowed disabled:opacity-50"
              >
                Previous
              </button>

              {Array.from(
                { length: totalPages },
                (_, index) =>
                  index + 1,
              ).map((pageNumber) => (
                <button
                  key={pageNumber}
                  onClick={() =>
                    goToPage(pageNumber)
                  }
                  className={`rounded-md border px-4 py-2 ${
                    currentPage ===
                    pageNumber
                      ? "bg-primary text-white"
                      : ""
                  }`}
                >
                  {pageNumber}
                </button>
              ))}

              <button
                onClick={() =>
                  goToPage(
                    currentPage + 1,
                  )
                }
                disabled={
                  currentPage ===
                  totalPages
                }
                className="rounded-md border px-4 py-2 disabled:cursor-not-allowed disabled:opacity-50"
              >
                Next
              </button>
            </div>
          )}

          <p className="mt-4 text-center text-sm text-muted-foreground">
            Showing page {currentPage} of{" "}
            {totalPages} • {meta.total}{" "}
            properties
          </p>
        </>
      )}
    </>
  );
}