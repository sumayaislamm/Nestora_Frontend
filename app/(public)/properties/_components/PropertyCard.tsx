import Image from "next/image";
import Link from "next/link";
import {
  Bath,
  BedDouble,
  Heart,
  MapPin,
  Square,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

import { IProperty } from "@/app/types/property";

type Props = {
  property: IProperty;
};

export default function PropertyCard({ property }: Props) {
  const image =
    property.images?.length > 0
      ? property.images[0].startsWith("http")
        ? property.images[0]
        : `/${property.images[0]}`
      : "/placeholder.jpg";

  return (
    <Card className="group overflow-hidden rounded-2xl border py-0 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Image */}
      <div className="relative h-60 overflow-hidden">
        <Image
          src={image}
          alt={property.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

        <Button
          size="icon"
          variant="secondary"
          className="absolute right-3 top-3 rounded-full"
        >
          <Heart className="h-4 w-4" />
        </Button>

        <Badge
          className={`absolute bottom-3 left-3 ${
            property.availability === "AVAILABLE"
              ? "bg-green-600 hover:bg-green-600"
              : "bg-red-600 hover:bg-red-600"
          }`}
        >
          {property.availability}
        </Badge>

        {property.category && (
          <Badge
            variant="secondary"
            className="absolute bottom-3 right-3"
          >
            {property.category.name}
          </Badge>
        )}
      </div>

      <CardContent className="space-y-5 p-5">
        <div>
          <h2 className="line-clamp-1 text-xl font-bold">
            {property.title}
          </h2>

          <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin size={15} />
            {property.location}
          </div>
        </div>

        <div className="grid grid-cols-3 rounded-xl bg-muted/50 p-3 text-sm">
          <div className="flex flex-col items-center gap-1">
            <BedDouble className="h-5 w-5" />
            <span>{property.bedrooms}</span>
          </div>

          <div className="flex flex-col items-center gap-1">
            <Bath className="h-5 w-5" />
            <span>{property.bathrooms}</span>
          </div>

          <div className="flex flex-col items-center gap-1">
            <Square className="h-5 w-5" />
            <span>{property.size ?? "--"} sqft</span>
          </div>
        </div>

        {property.amenities?.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {property.amenities.slice(0, 3).map((item) => (
              <Badge
                key={item}
                variant="outline"
              >
                {item}
              </Badge>
            ))}

            {property.amenities.length > 3 && (
              <Badge variant="outline">
                +{property.amenities.length - 3}
              </Badge>
            )}
          </div>
        )}

        <div className="flex items-end justify-between">
          <div>
            <p className="text-xs text-muted-foreground">
              Monthly Rent
            </p>

            <h3 className="text-2xl font-bold text-primary">
              ৳{Number(property.rent).toLocaleString()}
            </h3>
          </div>

          {property.landlord && (
            <div className="text-right">
              <p className="text-xs text-muted-foreground">
                Landlord
              </p>

              <p className="text-sm font-medium">
                {property.landlord.name}
              </p>
            </div>
          )}
        </div>
      </CardContent>

      <CardFooter className="pb-5">
        <Button asChild className="w-full rounded-xl">
          <Link href={`/properties/${property.id}`}>
            View Details
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}