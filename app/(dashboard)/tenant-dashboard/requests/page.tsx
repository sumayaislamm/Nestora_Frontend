/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getMyRequestsAction } from "../_actions/getMyRequestsAction";

const badgeClass: Record<string, string> = {
  PENDING: "bg-yellow-500 hover:bg-yellow-500",
  APPROVED: "bg-blue-600 hover:bg-blue-600",
  REJECTED: "bg-red-600 hover:bg-red-600",
  ACTIVE: "bg-green-600 hover:bg-green-600",
  COMPLETED: "bg-gray-600 hover:bg-gray-600",
};

export default async function TenantRequestsPage() {
  const response = await getMyRequestsAction();

  const requests = response.data ?? [];

  return (
    <main className="p-8">
      <h1 className="mb-6 text-3xl font-bold">My Rental Requests</h1>

      <div className="overflow-x-auto rounded-xl border bg-white">
        <table className="w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-4 text-left">Property</th>
              <th className="p-4 text-left">Rent</th>
              <th className="p-4 text-left">Status</th>
              <th className="p-4 text-center">Action</th>
            </tr>
          </thead>

          <tbody>
            {requests.length === 0 ? (
              <tr>
                <td colSpan={4} className="p-8 text-center text-gray-500">
                  No rental requests found.
                </td>
              </tr>
            ) : (
              requests.map((request: any) => (
                <tr key={request.id} className="border-t">
                  <td className="p-4">{request.property?.title}</td>

                  <td className="p-4">
                    ৳{Number(request.property?.rent ?? 0).toLocaleString()}
                  </td>

                  <td className="p-4">
                    <Badge
                      className={badgeClass[request.status] ?? "bg-gray-500"}
                    >
                      {request.status}
                    </Badge>
                  </td>

                  <td className="p-4 text-center">
                    {request.status === "APPROVED" ? (
                      <Button asChild>
                        <Link
                          href={`/tenant-dashboard/requests/${request.id}/pay`}
                        >
                          Pay Now
                        </Link>
                      </Button>
                    ) : (
                      "-"
                    )}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </main>
  );
}
