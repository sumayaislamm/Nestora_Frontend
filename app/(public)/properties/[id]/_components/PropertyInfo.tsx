import { Bath, BedDouble, MapPin, Square } from "lucide-react";

export default function PropertyInfo({
  property,
// eslint-disable-next-line @typescript-eslint/no-explicit-any
}: any) {
  return (
    <section>

      <h1 className="text-4xl font-bold">
        {property.title}
      </h1>

      <div className="mt-3 flex items-center gap-2 text-muted-foreground">
        <MapPin size={18} />
        {property.location}
      </div>

      <div className="mt-8 grid grid-cols-3 gap-6 rounded-2xl border p-6">

        <div>

          <BedDouble />

          <p>{property.bedrooms} Bedrooms</p>

        </div>

        <div>

          <Bath />

          <p>{property.bathrooms} Bathrooms</p>

        </div>

        <div>

          <Square />

          <p>{property.size} sqft</p>

        </div>

      </div>

      <div className="mt-8">

        <h2 className="text-xl font-semibold">
          Description
        </h2>

        <p className="mt-3 text-muted-foreground leading-7">
          {property.description}
        </p>

      </div>

    </section>
  );
}