import { getProperties } from "@/app/service/propertyService";
import PropertiesClient from "./_components/PropertiesClient";
import SearchBar from "./_components/SearchBar";

type SearchParams = {
  search?: string;
  category?: string;
  availability?: string;
  minRent?: string;
  maxRent?: string;
  page?: string;
};

export default async function PropertiesPage({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const params = await searchParams;

  const page = Number(params.page ?? 1);

  const { properties, meta } = await getProperties({
    page: page > 0 ? page : 1,
    limit: 30,
    search: params.search,
    category: params.category,
    availability: params.availability,
    minRent: params.minRent,
    maxRent: params.maxRent,
  });

  return (
    <main className="container mx-auto px-20 py-10">
      <h1 className="mb-2 text-center text-3xl font-bold text-primary">
        All Properties
      </h1>

      <p className="mb-8 text-center text-sm text-muted-foreground">
        <span className="font-semibold text-primary">{meta.total}</span>{" "}
        properties available
      </p>

      <SearchBar />

      <PropertiesClient properties={properties} meta={meta} />
    </main>
  );
}
