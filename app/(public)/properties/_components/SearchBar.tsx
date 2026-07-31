"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function SearchBar() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSearch = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (value) {
      params.set("search", value);
    } else {
      params.delete("search");
    }

    router.push(`/properties?${params.toString()}`);
  };

  return (
    <div className="relative mb-8 max-w-md">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />

      <Input
        placeholder="Search properties..."
        defaultValue={searchParams.get("search") ?? ""}
        className="pl-10"
        onChange={(e) => handleSearch(e.target.value)}
      />
    </div>
  );
}