import { CheckCircle2 } from "lucide-react";

export default function Amenities({
  amenities,
}: {
  amenities: string[];
}) {
  return (
    <section>

      <h2 className="mb-6 text-2xl font-bold">
        Amenities
      </h2>

      <div className="grid grid-cols-2 gap-4">

        {amenities.map((item) => (
          <div
            key={item}
            className="flex items-center gap-3 rounded-xl border p-4"
          >
            <CheckCircle2 className="text-green-600" />

            {item}

          </div>
        ))}

      </div>

    </section>
  );
}