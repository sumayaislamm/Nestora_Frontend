"use client";

import { useMemo, useState } from "react";

import { IProperty } from "@/app/types/property";

import FilterBar from "./FilterBar";
import PropertyGrid from "./PropertyGrid";
import EmptyState from "./EmptyState";

type Props = {
  properties: IProperty[];
};

export default function PropertiesClient({
  properties,
}: Props) {
  const [availability, setAvailability] = useState("ALL");
  const [sort, setSort] = useState("latest");
  const [location, setLocation] = useState("ALL");
  const [category, setCategory] = useState("ALL");
  const [price, setPrice] = useState("ALL");
  const [amenity, setAmenity] = useState("ALL");

  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 6;
  const filteredProperties = useMemo(() => {
    let data = [...properties];

    // Availability
    if (availability !== "ALL") {
      data = data.filter(
        (item) => item.availability === availability
      );
    }

    // Location
    if (location !== "ALL") {
      data = data.filter(
        (item) => item.location === location
      );
    }

    // Category
    if (category !== "ALL") {
      data = data.filter(
        (item) => item.category?.name === category
      );
    }

    // Price
    if (price === "0-20000") {
      data = data.filter(
        (item) => Number(item.rent) <= 20000
      );
    }

    if (price === "20000-50000") {
      data = data.filter((item) => {
        const rent = Number(item.rent);
        return rent > 20000 && rent <= 50000;
      });
    }

    if (price === "50000-100000") {
      data = data.filter((item) => {
        const rent = Number(item.rent);
        return rent > 50000 && rent <= 100000;
      });
    }

    if (price === "100000+") {
      data = data.filter(
        (item) => Number(item.rent) > 100000
      );
    }

    // Amenities
    if (amenity !== "ALL") {
      data = data.filter((item) =>
        item.amenities.includes(amenity)
      );
    }

    // Sorting
    if (sort === "low") {
      data.sort(
        (a, b) => Number(a.rent) - Number(b.rent)
      );
    }

    if (sort === "high") {
      data.sort(
        (a, b) => Number(b.rent) - Number(a.rent)
      );
    }

    if (sort === "latest") {
      data.sort(
        (a, b) =>
          new Date(b.createdAt).getTime() -
          new Date(a.createdAt).getTime()
      );
    }

    return data;
  }, [
    properties,
    availability,
    location,
    category,
    price,
    amenity,
    sort,
  ]);


  const totalPages = Math.max(
    1,
    Math.ceil(filteredProperties.length / itemsPerPage)
  );

  const paginatedProperties = filteredProperties.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <>
      <div className="mb-8 flex flex-col gap-4">
        <FilterBar
          availability={availability}
          setAvailability={setAvailability}
          sort={sort}
          setSort={setSort}
          location={location}
          setLocation={setLocation}
          category={category}
          setCategory={setCategory}
          price={price}
          setPrice={setPrice}
          amenity={amenity}
          setAmenity={setAmenity}
        />
      </div>

      {filteredProperties.length === 0 ? (
 
        <EmptyState></EmptyState>
      ) : (
        <>
          <PropertyGrid
            properties={paginatedProperties}
          />

          <div className="mt-10 flex justify-center gap-2">
            <button
              onClick={() =>
                setCurrentPage((page) =>
                  Math.max(page - 1, 1)
                )
              }
              disabled={currentPage === 1}
              className="rounded-md border px-4 py-2 disabled:opacity-50"
            >
              Previous
            </button>

            {Array.from({
              length: totalPages,
            }).map((_, index) => (
              <button
                key={index}
                onClick={() =>
                  setCurrentPage(index + 1)
                }
                className={`rounded-md border px-4 py-2 ${
                  currentPage === index + 1
                    ? "bg-primary text-white"
                    : ""
                }`}
              >
                {index + 1}
              </button>
            ))}

            <button
              onClick={() =>
                setCurrentPage((page) =>
                  Math.min(page + 1, totalPages)
                )
              }
              disabled={currentPage === totalPages}
              className="rounded-md border px-4 py-2 disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </>
      )}
    </>
  );
}