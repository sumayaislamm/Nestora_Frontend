import Image from "next/image";

export default function PropertyGallery({
  property,
// eslint-disable-next-line @typescript-eslint/no-explicit-any
}: any) {
  const image =
    property.images?.length > 0
      ? `/${property.images[0]}`
      : "/placeholder.jpg";

  return (
    <div className="relative h-[500px] overflow-hidden rounded-3xl">

      <Image
        src={image}
        alt={property.title}
        fill
        className="object-cover"
      />

    </div>
  );
}