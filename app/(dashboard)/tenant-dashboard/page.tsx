/* eslint-disable @typescript-eslint/no-explicit-any */

import { cookies } from "next/headers";

import { getTenantDashboardData } from "@/app/service/tenantService";

export default async function TenantDashboard() {
  const cookieStore = await cookies();

  const token = `Bearer ${cookieStore.get("accessToken")?.value}`;

  const { rentals, payments } = await getTenantDashboardData(token);

  const activeRentals = rentals.filter(
    (rental: any) => rental.status === "ACTIVE",
  ).length;

  const pendingRequests = rentals.filter(
    (rental: any) => rental.status === "PENDING",
  ).length;

  const totalPayments = payments.reduce(
    (sum: number, payment: any) => sum + Number(payment.amount),
    0,
  );

  return (
    <div className="flex">
      <main className="flex-1 p-8 bg-gray-50">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Dashboard Home</h2>
          <p className="text-gray-600 mt-2">Welcome to your tenant dashboard</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {/* Active Rentals Card */}
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm font-medium">
                  Active Rentals
                </p>
                <p className="text-3xl font-bold text-gray-900 mt-2">
                  {activeRentals}
                </p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <span className="text-blue-600 text-xl">🏠</span>
              </div>
            </div>
          </div>

          {/* Pending Requests Card */}
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm font-medium">
                  Pending Requests
                </p>
                <p className="text-3xl font-bold text-gray-900 mt-2">
                  {pendingRequests}
                </p>
              </div>
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                <span className="text-yellow-600 text-xl">⏳</span>
              </div>
            </div>
          </div>

          {/* Total Payments Card */}
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm font-medium">
                  Total Payments
                </p>
                <p className="text-3xl font-bold text-gray-900 mt-2">
                  ৳{totalPayments.toFixed(2)}
                </p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <span className="text-green-600 text-xl">💰</span>
              </div>
            </div>
          </div>

          {/* Recent Requests Card */}
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm font-medium">
                  Recent Requests
                </p>
                <p className="text-3xl font-bold text-gray-900 mt-2">
                  {rentals.length}
                </p>
              </div>
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <span className="text-purple-600 text-xl">📋</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
