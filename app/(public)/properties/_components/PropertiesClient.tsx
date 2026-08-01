"use client";

import { useMemo, useState } from "react";
import { IProperty } from "@/app/types/property";

import FilterBar from "./FilterBar";
import PropertyGrid from "./PropertyGrid";

type Props = {
  properties: IProperty[];
};

export default function PropertiesClient({ properties }: Props) {
  const [availability, setAvailability] = useState("ALL");
  const [sort, setSort] = useState("latest");

  const filteredProperties = useMemo(() => {
    let data = [...properties];

    if (availability !== "ALL") {
      data = data.filter(
        (item) => item.availability === availability
      );
    }

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
  }, [properties, availability, sort]);

  return (
    <>
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
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