import { Button } from "@/components/ui/button";

export default function RentSection({
  property,
// eslint-disable-next-line @typescript-eslint/no-explicit-any
}: any) {
  return (
    <div className="rounded-2xl border p-6 sticky top-24">

      <p className="text-muted-foreground">
        Monthly Rent
      </p>

      <h2 className="mt-2 text-4xl font-bold">

        ৳{Number(property.rent).toLocaleString()}

      </h2>

      <Button
        className="mt-8 w-full"
        disabled={property.availability !== "AVAILABLE"}
      >
        {property.availability === "AVAILABLE"
          ? "Request Rental"
          : "Already Rented"}
      </Button>

    </div>
  );
}