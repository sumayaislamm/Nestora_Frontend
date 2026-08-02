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

type Rental = {
  id: string;

  status: string;

  createdAt: string;

  tenant: {
    name: string;
    email: string;
  };

  property: {
    title: string;
    location: string;
  };

  payment?: {
    status: string;
  };
};

export default function RentalTable({ rentals }: { rentals: Rental[] }) {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Tenant</TableHead>

            <TableHead>Property</TableHead>

            <TableHead>Location</TableHead>

            <TableHead>Request Status</TableHead>

            <TableHead>Payment</TableHead>

            <TableHead>Date</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {rentals.map((rental) => (
            <TableRow key={rental.id}>
              <TableCell>
                <div>
                  <p>{rental.tenant.name}</p>

                  <p className="text-xs text-muted-foreground">
                    {rental.tenant.email}
                  </p>
                </div>
              </TableCell>

              <TableCell>{rental.property.title}</TableCell>

              <TableCell>{rental.property.location}</TableCell>

              <TableCell>
                <Badge>{rental.status}</Badge>
              </TableCell>

              <TableCell>
                <Badge>{rental.payment?.status || "UNPAID"}</Badge>
              </TableCell>

              <TableCell>
                {new Date(rental.createdAt).toLocaleDateString()}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
