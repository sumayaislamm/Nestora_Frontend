/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useTransition } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { createRentalRequestAction } from "../_actions/createRentalRequestAction";

export default function RentSection({
  property,
}: any) {
  const [isPending, startTransition] =
    useTransition();

  const handleRequest = () => {
    startTransition(async () => {
      const res =
        await createRentalRequestAction(property.id);

      if (res.success) {
        toast.success("Rental request submitted");
      } else {
        toast.error(res.message);
      }
    });
  };

  return (
    <div className="sticky top-24 rounded-2xl border p-6">
      <p className="text-muted-foreground">
        Monthly Rent
      </p>

      <h2 className="mt-2 text-4xl font-bold">
        ৳{Number(property.rent).toLocaleString()}
      </h2>

      <Button
        className="mt-8 w-full"
        disabled={
          property.availability !== "AVAILABLE" ||
          isPending
        }
        onClick={handleRequest}
      >
        {isPending
          ? "Submitting..."
          : property.availability === "AVAILABLE"
            ? "Request Rental"
            : "Already Rented"}
      </Button>
    </div>
  );
}