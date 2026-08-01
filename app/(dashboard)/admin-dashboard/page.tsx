'use client'

import { adminSidebarItems, Sidebar } from "../_components/sidebar"



export default function AdminDashboard() {
  return (
    <div className="flex">
      <Sidebar items={adminSidebarItems} title="Admin" />
      <main className="flex-1 p-8 bg-gray-50">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Dashboard Home</h2>
          <p className="text-gray-600 mt-2">Welcome to the admin dashboard</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Total Users Card */}
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm font-medium">Total Users</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">1,245</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <span className="text-blue-600 text-xl">👥</span>
              </div>
            </div>
          </div>

          {/* Total Landlords Card */}
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm font-medium">Total Landlords</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">320</p>
              </div>
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <span className="text-purple-600 text-xl">🏘️</span>
              </div>
            </div>
          </div>

          {/* Total Tenants Card */}
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm font-medium">Total Tenants</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">925</p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <span className="text-green-600 text-xl">🔑</span>
              </div>
            </div>
          </div>

          {/* Total Properties Card */}
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm font-medium">Total Properties</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">2,100</p>
              </div>
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                <span className="text-orange-600 text-xl">🏢</span>
              </div>
            </div>
          </div>

          {/* Total Categories Card */}
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm font-medium">Total Categories</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">18</p>
              </div>
              <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center">
                <span className="text-pink-600 text-xl">🏷️</span>
              </div>
            </div>
          </div>

          {/* Pending Requests Card */}
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm font-medium">Pending Requests</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">47</p>
              </div>
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                <span className="text-yellow-600 text-xl">⏳</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Users */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Users</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 border rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">John Doe</p>
                  <p className="text-sm text-gray-500">john@example.com</p>
                </div>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">Landlord</span>
              </div>
              <div className="flex items-center justify-between p-3 border rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">Jane Smith</p>
                  <p className="text-sm text-gray-500">jane@example.com</p>
                </div>
                <span className="px-3 py-1 bg-green-100 text-green-700 text-xs rounded-full">Tenant</span>
              </div>
              <div className="flex items-center justify-between p-3 border rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">Mike Johnson</p>
                  <p className="text-sm text-gray-500">mike@example.com</p>
                </div>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">Landlord</span>
              </div>
            </div>
          </div>

          {/* System Status */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">System Status</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 border rounded-lg">
                <span className="text-gray-700 font-medium">Database</span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span className="text-green-600 text-sm">Operational</span>
                </span>
              </div>
              <div className="flex items-center justify-between p-3 border rounded-lg">
                <span className="text-gray-700 font-medium">API Server</span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span className="text-green-600 text-sm">Operational</span>
                </span>
              </div>
              <div className="flex items-center justify-between p-3 border rounded-lg">
                <span className="text-gray-700 font-medium">Storage</span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                  <span className="text-yellow-600 text-sm">75% Full</span>
                </span>
              </div>
              <div className="flex items-center justify-between p-3 border rounded-lg">
                <span className="text-gray-700 font-medium">Email Service</span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span className="text-green-600 text-sm">Operational</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8 bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <button className="px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium text-sm">
              Create User
            </button>
            <button className="px-4 py-3 bg-gray-200 text-gray-900 rounded-lg hover:bg-gray-300 transition font-medium text-sm">
              Review Properties
            </button>
            <button className="px-4 py-3 bg-gray-200 text-gray-900 rounded-lg hover:bg-gray-300 transition font-medium text-sm">
              View Analytics
            </button>
            <button className="px-4 py-3 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition font-medium text-sm">
              Ban User
            </button>
            <button className="px-4 py-3 bg-gray-200 text-gray-900 rounded-lg hover:bg-gray-300 transition font-medium text-sm">
              Manage Categories
            </button>
            <button className="px-4 py-3 bg-gray-200 text-gray-900 rounded-lg hover:bg-gray-300 transition font-medium text-sm">
              System Settings
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}