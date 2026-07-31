"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Props = {
  availability: string;
  setAvailability: (value: string) => void;

  sort: string;
  setSort: (value: string) => void;
};

export default function FilterBar({
  availability,
  setAvailability,
  sort,
  setSort,
}: Props) {
  return (
    <div className="flex gap-4">
      <Select
        value={availability}
        onValueChange={setAvailability}
      >
        <SelectTrigger className="w-[170px]">
          <SelectValue placeholder="Availability" />
        </SelectTrigger>

        <SelectContent>
          <SelectItem value="ALL">
            All
          </SelectItem>

          <SelectItem value="AVAILABLE">
            Available
          </SelectItem>

          <SelectItem value="RENTED">
            Rented
          </SelectItem>
        </SelectContent>
      </Select>

      <Select value={sort} onValueChange={setSort}>
        <SelectTrigger className="w-[170px]">
          <SelectValue placeholder="Sort" />
        </SelectTrigger>

        <SelectContent>
          <SelectItem value="latest">
            Latest
          </SelectItem>

          <SelectItem value="low">
            Rent Low → High
          </SelectItem>

          <SelectItem value="high">
            Rent High → Low
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}