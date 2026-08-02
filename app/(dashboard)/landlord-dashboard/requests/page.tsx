/* eslint-disable @typescript-eslint/no-explicit-any */
import { Badge } from "@/components/ui/badge";
import { getLandlordRequestsAction } from "./_actions/getLandlordRequestsAction";
import ActionButtons from "./_components/ActionButtons";

const badgeClass: Record<string, string> = {
  PENDING: "bg-yellow-500",
  APPROVED: "bg-blue-600",
  REJECTED: "bg-red-600",
  ACTIVE: "bg-green-600",
  COMPLETED: "bg-gray-600",
};

export default async function LandlordRequestsPage() {
  const response = await getLandlordRequestsAction();

  const requests = response.data || [];

  return (
    <main className="p-8">
      <h1 className="mb-6 text-3xl font-bold">
        Rental Requests
      </h1>

      <div className="overflow-hidden rounded-xl border">
        <table className="w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-4 text-left">Tenant</th>
              <th className="p-4 text-left">Property</th>
              <th className="p-4 text-left">Move In</th>
              <th className="p-4 text-left">Status</th>
              <th className="p-4">Action</th>
            </tr>
          </thead>

          <tbody>
            {requests.map((request: any) => (
              <tr key={request.id} className="border-t">
                <td className="p-4">
                  {request.tenant.name}
                </td>

                <td className="p-4">
                  {request.property.title}
                </td>

                <td className="p-4">
                  {new Date(
                    request.moveInDate
                  ).toLocaleDateString()}
                </td>

                <td className="p-4">
                  <Badge
                    className={
                      badgeClass[request.status]
                    }
                  >
                    {request.status}
                  </Badge>
                </td>
                <td className="p-4">
  {request.status === "PENDING" ? (
    <ActionButtons id={request.id} />
  ) : (
    "-"
  )}
</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}