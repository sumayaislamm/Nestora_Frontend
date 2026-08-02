import { cookies } from "next/headers";

import { getAllRentals } from "@/app/service/adminService";

import RentalTable from "./_components/RentalTable";

export default async function ManageRentalsPage() {
  const cookieStore = await cookies();

  const token = `Bearer ${cookieStore.get("accessToken")?.value}`;

  const result = await getAllRentals(token);

  const rentals = result.data.rentals;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Manage Rental Requests</h1>

        <p className="text-muted-foreground">
          Monitor all rental requests from tenants
        </p>
      </div>

      <RentalTable rentals={rentals} />
    </div>
  );
}
