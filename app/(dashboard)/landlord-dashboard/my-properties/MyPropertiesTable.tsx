"use client";

import Link from "next/link";

import { IProperty } from "@/app/types/property";

import { Button } from "@/components/ui/button";

import DeletePropertyButton from "./DeletePropertyButton";

export default function MyPropertiesTable({
  properties,
}: {
  properties: IProperty[];
}) {
  return (
    <div className="rounded-xl border overflow-hidden">
      <table className="w-full">
        <thead className="bg-muted">
          <tr>
            <th className="p-4 text-left">Title</th>

            <th className="p-4">Rent</th>

            <th className="p-4">Status</th>

            <th className="p-4">Actions</th>
          </tr>
        </thead>

        <tbody>
          {properties.map((property) => (
            <tr key={property.id} className="border-t">
              <td className="p-4">{property.title}</td>

              <td className="p-4">৳{property.rent}</td>

              <td className="p-4">{property.availability}</td>

              <td className="p-4 flex gap-2">
                {/* <Link
                  href={`/landlord-dashboard/edit-property/${property.id}`}
                >
                  <Button
                    size="sm"
                    variant="outline"
                  >
                    Edit
                  </Button>
                </Link> */}
                <Link href={`/landlord-dashboard/edit-property/${property.id}`}>
                  <Button>Edit</Button>
                </Link>

                <DeletePropertyButton id={property.id} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
