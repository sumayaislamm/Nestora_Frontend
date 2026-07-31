import { getPropertiesAction } from "../_actions/propertyActions";


export default async function PropertiesPage() {
  const properties = await getPropertiesAction();

  return (
    <main className="container mx-auto py-10">
      <h1 className="mb-8 text-3xl font-bold">
        All Properties
      </h1>

      <pre>{JSON.stringify(properties, null, 2)}</pre>
    </main>
  );
}