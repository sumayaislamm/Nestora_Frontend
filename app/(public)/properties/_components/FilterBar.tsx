"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type FilterOption = {
  value: string;
  label: string;
};

type Props = {
  availability: string;
  setAvailability: (value: string) => void;

  sort: string;
  setSort: (value: string) => void;

  location: string;
  setLocation: (value: string) => void;

  category: string;
  setCategory: (value: string) => void;

  price: string;
  setPrice: (value: string) => void;

  amenity: string;
  setAmenity: (value: string) => void;

  availabilityOptions: FilterOption[];
  locationOptions: FilterOption[];
  categoryOptions: FilterOption[];
  amenityOptions: FilterOption[];
};

export default function FilterBar({
  availability,
  setAvailability,
  sort,
  setSort,
  location,
  setLocation,
  category,
  setCategory,
  price,
  setPrice,
  amenity,
  setAmenity,
  availabilityOptions,
  locationOptions,
  categoryOptions,
  amenityOptions,
}: Props) {
  return (
    <div className="flex flex-wrap gap-4">
      {/* Availability */}
      <Select value={availability} onValueChange={setAvailability}>
        <SelectTrigger className="w-42.5">
          <SelectValue placeholder="Availability" />
        </SelectTrigger>

        <SelectContent>
          <SelectItem value="ALL">All</SelectItem>

          {availabilityOptions.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {/* Location */}
      <Select value={location} onValueChange={setLocation}>
        <SelectTrigger className="w-42.5">
          <SelectValue placeholder="Location" />
        </SelectTrigger>

        <SelectContent>
          <SelectItem value="ALL">All Locations</SelectItem>

          {locationOptions.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {/* Property Type */}
      <Select value={category} onValueChange={setCategory}>
        <SelectTrigger className="w-42.5">
          <SelectValue placeholder="Property Type" />
        </SelectTrigger>

        <SelectContent>
          <SelectItem value="ALL">All Types</SelectItem>

          {categoryOptions.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {/* Price */}
      <Select value={price} onValueChange={setPrice}>
        <SelectTrigger className="w-42.5">
          <SelectValue placeholder="Price" />
        </SelectTrigger>

        <SelectContent>
          <SelectItem value="ALL">All Prices</SelectItem>
          <SelectItem value="0-20000">Below 20k</SelectItem>
          <SelectItem value="20000-50000">20k - 50k</SelectItem>
          <SelectItem value="50000-100000">50k - 100k</SelectItem>
          <SelectItem value="100000+">100k+</SelectItem>
        </SelectContent>
      </Select>

      {/* Sort */}
      <Select value={sort} onValueChange={setSort}>
        <SelectTrigger className="w-42.5">
          <SelectValue placeholder="Sort" />
        </SelectTrigger>

        <SelectContent>
          <SelectItem value="latest">Latest</SelectItem>
          <SelectItem value="low">Rent Low → High</SelectItem>
          <SelectItem value="high">Rent High → Low</SelectItem>
        </SelectContent>
      </Select>

      {/* Amenities */}
      <Select value={amenity} onValueChange={setAmenity}>
        <SelectTrigger className="w-42.5">
          <SelectValue placeholder="Amenities" />
        </SelectTrigger>

        <SelectContent>
          <SelectItem value="ALL">All Amenities</SelectItem>

          {amenityOptions.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
