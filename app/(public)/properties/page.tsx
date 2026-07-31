import { getAllProperties } from "@/app/service/propertyService";
import { getPropertiesAction } from "../_actions/propertyActions";
import PropertiesClient from "./_components/PropertiesClient";
import PropertyGrid from "./_components/PropertyGrid";

export default async function PropertiesPage() {
  const properties = await getAllProperties();
  // console.log("Prooooooo", properties)

  // console.log("PAGE", Array.isArray(properties));
  // console.log(properties);

  return (
    <main className="container mx-auto py-10">
      <h1 className="mb-8 text-3xl font-bold">All Properties</h1>
      <PropertiesClient properties={properties} />
    </main>
  );
}
