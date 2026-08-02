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
    <>
      {/* Desktop */}
      <div className="hidden overflow-hidden rounded-xl border lg:block">
        <table className="w-full">
          <thead className="bg-muted">
            <tr>
              <th className="px-4 py-3 text-left">Title</th>
              <th className="px-4 py-3 text-left">Rent</th>
              <th className="px-4 py-3 text-left">Status</th>
              <th className="px-4 py-3 text-left">Actions</th>
            </tr>
          </thead>

          <tbody>
            {properties.map((property) => (
              <tr key={property.id} className="border-t">
                <td className="px-4 py-4">
                  {property.title}
                </td>

                <td className="px-4 py-4">
                  ৳{property.rent}
                </td>

                <td className="px-4 py-4">
                  {property.availability}
                </td>

                <td className="px-4 py-4">
                  <div className="flex gap-2">
                    <Link
                      href={`/landlord-dashboard/edit-property/${property.id}`}
                    >
                      <Button size="sm">
                        Edit
                      </Button>
                    </Link>

                    <DeletePropertyButton
                      id={property.id}
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile & Tablet */}
      <div className="space-y-4 lg:hidden">
        {properties.map((property) => (
          <div
            key={property.id}
            className="rounded-xl border bg-white p-4 shadow-sm"
          >
            <h2 className="text-lg font-semibold">
              {property.title}
            </h2>

            <div className="mt-3 space-y-2 text-sm">
              <p>
                <span className="font-medium">
                  Rent:
                </span>{" "}
                ৳{property.rent}
              </p>

              <p>
                <span className="font-medium">
                  Status:
                </span>{" "}
                {property.availability}
              </p>
            </div>

            <div className="mt-4 flex gap-2">
              <Link
                href={`/landlord-dashboard/edit-property/${property.id}`}
                className="flex-1"
              >
                <Button className="w-full">
                  Edit
                </Button>
              </Link>

              <DeletePropertyButton
                id={property.id}
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}