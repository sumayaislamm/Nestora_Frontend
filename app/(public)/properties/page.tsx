import { getAllProperties, getAllPropertiesSearch } from "@/app/service/propertyService";
import PropertiesClient from "./_components/PropertiesClient";
import SearchBar from "./_components/SearchBar";


export default async function PropertiesPage({
  searchParams,
}: {
  searchParams: Promise<{
    search?: string;
    category?: string;
    availability?: string;
    minRent?: string;
    maxRent?: string;
  }>;
}) {
  const params = await searchParams;

  const properties = Object.keys(params).length
    ? await getAllPropertiesSearch(params)
    : await getAllProperties();

  return (
    <main className="container mx-auto py-10">
      <h1 className="mb-8 text-3xl font-bold text-primary text-center">
        All Properties
      </h1>

      <SearchBar />

     <PropertiesClient properties={properties} />
    </main>
  );
}