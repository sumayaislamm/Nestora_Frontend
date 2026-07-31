import PropertyGallery from "./_components/PropertyGallery";
import PropertyInfo from "./_components/PropertyInfo";
import Amenities from "./_components/Amenities";
import LandlordCard from "./_components/LandlordCard";
import RentSection from "./_components/RentSection";
import { getPropertyById } from "@/app/service/property";


export default async function PropertyDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const property = await getPropertyById(id);

  return (
    <main className="container mx-auto py-10">

      <PropertyGallery property={property} />

      <div className="mt-10 grid gap-10 lg:grid-cols-3">

        <div className="space-y-8 lg:col-span-2">

          <PropertyInfo property={property} />

          <Amenities amenities={property.amenities} />

        </div>

        <div className="space-y-6">

          <LandlordCard landlord={property.landlord} />

          <RentSection property={property} />

        </div>

      </div>

    </main>
  );
}