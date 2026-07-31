// "use client";

// import { useState } from "react";

// import SearchBar from "./SearchBar";
// import PropertyGrid from "./PropertyGrid";
// import { IProperty } from "@/app/types/property";

// type Props = {
//   properties: IProperty[];
// };

// export default function PropertiesClient({ properties }: Props) {
// //   console.log(Array.isArray(properties));
// //   console.log(properties);
//   const [search, setSearch] = useState("");

//   const filteredProperties = properties.filter((property) =>
//     property.title.toLowerCase().includes(search.toLowerCase()),
//   );

//   return (
//     <div className="space-y-6">
//       <SearchBar value={search} onChange={setSearch} />

//       <PropertyGrid properties={filteredProperties} />
//     </div>
//   );
// }


"use client";

import { useMemo, useState } from "react";

import { IProperty } from "@/app/types/property";

import SearchBar from "./SearchBar";
import FilterBar from "./FilterBar";
import PropertyGrid from "./PropertyGrid";

type Props = {
  properties: IProperty[];
};

export default function PropertiesClient({
  properties,
}: Props) {
  const [search, setSearch] = useState("");
  const [availability, setAvailability] = useState("ALL");
  const [sort, setSort] = useState("latest");

  const filteredProperties = useMemo(() => {
    let data = [...properties];

    // Search
    if (search) {
      data = data.filter(
        (item) =>
          item.title
            .toLowerCase()
            .includes(search.toLowerCase()) ||
          item.location
            .toLowerCase()
            .includes(search.toLowerCase())
      );
    }

    // Filter
    if (availability !== "ALL") {
      data = data.filter(
        (item) => item.availability === availability
      );
    }

    // Sort
    if (sort === "low") {
      data.sort((a, b) => a.rent - b.rent);
    }

    if (sort === "high") {
      data.sort((a, b) => b.rent - a.rent);
    }

    if (sort === "latest") {
      data.sort(
        (a, b) =>
          new Date(b.createdAt).getTime() -
          new Date(a.createdAt).getTime()
      );
    }

    return data;
  }, [properties, search, availability, sort]);

  return (
    <>
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        {/* <SearchBar
        /> */}

        <FilterBar
          availability={availability}
          setAvailability={setAvailability}
          sort={sort}
          setSort={setSort}
        />
      </div>

      <PropertyGrid properties={filteredProperties} />
    </>
  );
}