/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import { getMyPaymentsAction } from "./_actions/getMyPaymentsAction";
import Link from "next/link";

export default async function PaymentsPage() {
  const response = await getMyPaymentsAction();

  console.log(response);
  const payments = response.data?.payments ?? [];

  return (
    <main className="p-8">
      <h1 className="mb-6 text-3xl font-bold">My Payments</h1>

      <div className="overflow-x-auto rounded-xl border bg-white">
        <table className="w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-4 text-left">Property</th>
              <th className="p-4 text-left">Amount</th>
              <th className="p-4 text-left">Provider</th>
              <th className="p-4 text-left">Status</th>
              <th className="p-4 text-left">Paid At</th>
              <th className="p-4 text-center">Action</th>
            </tr>
          </thead>

          <tbody>
            {payments.length === 0 ? (
              <tr>
                <td colSpan={5} className="p-8 text-center">
                  No payments found.
                </td>
              </tr>
            ) : (
              payments.map((payment: any) => (
                <tr key={payment.id} className="border-t">
                  <td className="p-4">
                    {payment.rentalRequest.property.title}
                  </td>

                  <td className="p-4">
                    ৳{Number(payment.amount).toLocaleString()}
                  </td>

                  <td className="p-4">{payment.provider}</td>

                  <td className="p-4">{payment.status}</td>

                  <td className="p-4">
                    {payment.paidAt
                      ? new Date(payment.paidAt).toLocaleDateString()
                      : "-"}
                  </td>
                  <td className="p-4 text-center">
                    <Button asChild>
                      <Link href={`/tenant-dashboard/payments/${payment.id}`}>
                        View
                      </Link>
                    </Button>
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
