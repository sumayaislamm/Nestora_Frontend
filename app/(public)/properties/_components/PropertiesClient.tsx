"use client";

import { useState } from "react";

import SearchBar from "./SearchBar";
import PropertyGrid from "./PropertyGrid";
import { IProperty } from "@/app/types/property";

type Props = {
  properties: IProperty[];
};

export default function PropertiesClient({ properties }: Props) {
//   console.log(Array.isArray(properties));
//   console.log(properties);
  const [search, setSearch] = useState("");

  const filteredProperties = properties.filter((property) =>
    property.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="space-y-6">
      <SearchBar value={search} onChange={setSearch} />

      <PropertyGrid properties={filteredProperties} />
    </div>
  );
}
