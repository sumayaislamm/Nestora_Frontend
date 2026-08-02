"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Badge } from "@/components/ui/badge";

type Property = {
  id: string;
  title: string;
  location: string;
  rent: number;
  availability: string;
  category?: {
    name: string;
  };

  landlord?: {
    name: string;
    email: string;
  };
};

export default function PropertyTable({
  properties,
}: {
  properties: Property[];
}) {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>

            <TableHead>Location</TableHead>

            <TableHead>Price</TableHead>

            <TableHead>Category</TableHead>

            <TableHead>Landlord</TableHead>

            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {properties.map((property) => (
            <TableRow key={property.id}>
              <TableCell>{property.title}</TableCell>

              <TableCell>{property.location}</TableCell>

              <TableCell>৳ {property.rent}</TableCell>

              <TableCell>
                <Badge>{property.category?.name || "N/A"}</Badge>
              </TableCell>

              <TableCell>
                <div>
                  <p>{property.landlord?.name}</p>

                  <p className="text-xs text-muted-foreground">
                    {property.landlord?.email}
                  </p>
                </div>
              </TableCell>

              <TableCell>
                <Badge>{property.availability}</Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
