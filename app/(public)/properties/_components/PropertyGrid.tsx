import { IProperty } from "@/app/types/property";

import PropertyCard from "./PropertyCard";
import EmptyState from "./EmptyState";

type Props = {
  properties: IProperty[];
};

export default function PropertyGrid({ properties }: Props) {
  if (!properties.length) {
    return <EmptyState />;
  }

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
      {properties.map((property) => (
        <PropertyCard
          key={property.id}
          property={property}
        />
      ))}
    </div>
  );
}