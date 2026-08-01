import { cookies } from "next/headers";

import { getMyProperties } from "@/app/service/propertyService";

import MyPropertiesTable from "./MyPropertiesTable";

export default async function MyPropertiesPage() {
  const cookieStore = await cookies();

  const token =
    cookieStore.get("accessToken")?.value || "";

  const properties = await getMyProperties(token);

  return (
    <div className="space-y-8">

      <div>

        <h1 className="text-3xl font-bold">
          My Properties
        </h1>

        <p className="text-muted-foreground">
          Manage your listed properties.
        </p>

      </div>

      <MyPropertiesTable
        properties={properties}
      />

    </div>
  );
}