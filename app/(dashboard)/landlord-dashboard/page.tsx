'use client'

import Link from "next/link"

export default function LandlordDashboard() {
  return (
    <div className="flex">
      <main className="flex-1 p-8 bg-gray-50">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Dashboard Home</h2>
          <p className="text-gray-600 mt-2">Welcome to your landlord dashboard</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Total Properties Card */}
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm font-medium">Total Properties</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">12</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <span className="text-primary text-xl">🏠</span>
              </div>
            </div>
          </div>

          {/* Available Properties Card */}
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm font-medium">Available Properties</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">5</p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <span className="text-green-600 text-xl">✓</span>
              </div>
            </div>
          </div>

          {/* Rented Properties Card */}
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm font-medium">Rented Properties</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">7</p>
              </div>
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <span className="text-purple-600 text-xl">📋</span>
              </div>
            </div>
          </div>

          {/* Pending Requests Card */}
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm font-medium">Pending Requests</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">3</p>
              </div>
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                <span className="text-orange-600 text-xl">⏳</span>
              </div>
            </div>
          </div>
        </div>

          {/* Quick Actions */}
          <div className="bg-white p-6 rounded-lg shadow mt-4">
            <h3 className="text-lg font-semibold text-center text-primary mb-4">Quick Actions</h3>
            <div className="flex flex-col gap-4">
              <Link className="w-full" href="/landlord-dashboard/add-property">
              <button className="w-full px-4 py-3 bg-gray-200 text-gray-900 rounded-lg hover:bg-primary transition font-medium">
                Add New Property
              </button>
              </Link>
              <Link href="/landlord-dashboard/my-properties">
                <button className="w-full px-4 py-3 bg-gray-200 text-gray-900 rounded-lg hover:bg-primary transition font-medium">
                  View All Properties
                </button>
              </Link>
              <Link href="/landlord-dashboard/rental-requests">
                <button className="w-full px-4 py-3 bg-gray-200 text-gray-900 rounded-lg hover:bg-primary transition font-medium">
                  Review Requests
                </button>
              </Link>
            </div>
          </div>
      </main>
    </div>
  )
}