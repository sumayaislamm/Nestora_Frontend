'use client'

import { Sidebar, tenantSidebarItems } from "../_components/sidebar"


export default function TenantDashboard() {
  return (
    <div className="flex">
      <Sidebar items={tenantSidebarItems} title="Tenant" />
      <main className="flex-1 p-8 bg-gray-50">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Dashboard Home</h2>
          <p className="text-gray-600 mt-2">Welcome to your tenant dashboard</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Active Rentals Card */}
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm font-medium">Active Rentals</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">2</p>
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
                <p className="text-gray-500 text-sm font-medium">Pending Requests</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">1</p>
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
                <p className="text-gray-500 text-sm font-medium">Total Payments</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">$4,500</p>
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
                <p className="text-gray-500 text-sm font-medium">Recent Requests</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">5</p>
              </div>
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <span className="text-purple-600 text-xl">📋</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Current Rentals */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Current Rentals</h3>
            <div className="space-y-4">
              <div className="border rounded-lg p-4">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-semibold text-gray-900">Apartment 101</h4>
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">Active</span>
                </div>
                <p className="text-gray-600 text-sm">123 Main Street, City</p>
                <p className="text-gray-500 text-sm mt-2">Rent: $1,200/month</p>
              </div>
              <div className="border rounded-lg p-4">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-semibold text-gray-900">Studio 205</h4>
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">Active</span>
                </div>
                <p className="text-gray-600 text-sm">456 Oak Avenue, Town</p>
                <p className="text-gray-500 text-sm mt-2">Rent: $900/month</p>
              </div>
            </div>
          </div>

          {/* Upcoming Payments */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Upcoming Payments</h3>
            <div className="space-y-4">
              <div className="border rounded-lg p-4">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-semibold text-gray-900">August Payment</h4>
                  <span className="text-sm text-gray-500">Due: Aug 5</span>
                </div>
                <p className="text-gray-600 text-sm">Apartment 101</p>
                <p className="text-lg font-bold text-gray-900 mt-2">$1,200</p>
              </div>
              <div className="border rounded-lg p-4">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-semibold text-gray-900">August Payment</h4>
                  <span className="text-sm text-gray-500">Due: Aug 5</span>
                </div>
                <p className="text-gray-600 text-sm">Studio 205</p>
                <p className="text-lg font-bold text-gray-900 mt-2">$900</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
