import { cookies } from "next/headers";

import { getAllProperties } from "@/app/service/adminService";

import PropertyTable from "./_components/PropertyTable";

export default async function ManagePropertiesPage() {
  const cookieStore = await cookies();

  const token = `Bearer ${cookieStore.get("accessToken")?.value}`;

  const result = await getAllProperties(token);

  const properties = result.data.properties;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Manage Properties</h1>

        <p className="text-muted-foreground">
          View all properties listed on RentNest
        </p>
      </div>

      <PropertyTable properties={properties} />
    </div>
  );
}
