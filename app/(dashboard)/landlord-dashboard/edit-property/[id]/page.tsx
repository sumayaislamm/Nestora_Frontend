import { getSingleProperty } from "@/app/service/propertyService";
import EditPropertyForm from "./_components/EditPropertyForm";

export default async function EditPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const property =
    await getSingleProperty(id);

  return (
    <div className="container mx-auto py-8">
      <h1 className="mb-8 text-3xl font-bold">
        Edit Property
      </h1>

      <EditPropertyForm property={property} />
    </div>
  );
}