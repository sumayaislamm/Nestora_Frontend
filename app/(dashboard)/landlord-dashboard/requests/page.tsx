
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
    <main className="mx-auto w-full max-w-7xl p-4 md:p-6 lg:p-8">
      <h1 className="mb-6 text-2xl font-bold md:text-3xl">
        Rental Requests
      </h1>

      {/* Desktop */}
      <div className="hidden overflow-hidden rounded-xl border lg:block">
        <table className="w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-3 text-left">Tenant</th>
              <th className="px-4 py-3 text-left">Property</th>
              <th className="px-4 py-3 text-left">Move In</th>
              <th className="px-4 py-3 text-left">Status</th>
              <th className="px-4 py-3 text-center">Action</th>
            </tr>
          </thead>

          <tbody>
            {requests.map((request: any) => (
              <tr key={request.id} className="border-t">
                <td className="px-4 py-4">
                  {request.tenant.name}
                </td>

                <td className="px-4 py-4">
                  {request.property.title}
                </td>

                <td className="px-4 py-4">
                  {new Date(
                    request.moveInDate
                  ).toLocaleDateString()}
                </td>

                <td className="px-4 py-4">
                  <Badge className={badgeClass[request.status]}>
                    {request.status}
                  </Badge>
                </td>

                <td className="px-4 py-4 text-center">
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

      {/* Mobile & Tablet */}
      <div className="space-y-4 lg:hidden">
        {requests.map((request: any) => (
          <div
            key={request.id}
            className="rounded-xl border bg-white p-4 shadow-sm"
          >
            <h2 className="text-lg font-semibold">
              {request.property.title}
            </h2>

            <div className="mt-4 space-y-2 text-sm">
              <p>
                <span className="font-medium">
                  Tenant:
                </span>{" "}
                {request.tenant.name}
              </p>

              <p>
                <span className="font-medium">
                  Move In:
                </span>{" "}
                {new Date(
                  request.moveInDate
                ).toLocaleDateString()}
              </p>

              <div className="flex items-center gap-2">
                <span className="font-medium">
                  Status:
                </span>

                <Badge className={badgeClass[request.status]}>
                  {request.status}
                </Badge>
              </div>
            </div>

            <div className="mt-4">
              {request.status === "PENDING" ? (
                <ActionButtons id={request.id} />
              ) : (
                <p className="text-sm text-gray-500">
                  No action available
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}