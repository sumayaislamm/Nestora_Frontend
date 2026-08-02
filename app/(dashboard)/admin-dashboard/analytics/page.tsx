import { cookies } from "next/headers";
import { getAdminStats } from "@/app/service/adminService";
import AnalyticsCharts from "./_components/AnalyticsCharts";

export default async function AnalyticsPage() {
  const cookieStore = await cookies();
  const token = `Bearer ${cookieStore.get("accessToken")?.value}`;

  const stats = await getAdminStats(token);

  // Users by role
  const roleColors: Record<string, string> = {
    TENANT: "#3b82f6",
    LANDLORD: "#f59e0b",
    ADMIN: "#8b5cf6",
  };

  const roleCounts: Record<string, number> = {};
  stats.users.forEach((user: { role: string }) => {
    roleCounts[user.role] = (roleCounts[user.role] || 0) + 1;
  });

  const usersByRole = Object.entries(roleCounts).map(([label, value]) => ({
    label,
    value,
    color: roleColors[label] || "#94a3b8",
  }));

  // Rentals by status
  const statusColors: Record<string, string> = {
    PENDING: "#f59e0b",
    APPROVED: "#3b82f6",
    REJECTED: "#ef4444",
    ACTIVE: "#22c55e",
    COMPLETED: "#64748b",
  };

  const statusCounts: Record<string, number> = {};
  stats.rentals.forEach((rental: { status: string }) => {
    statusCounts[rental.status] = (statusCounts[rental.status] || 0) + 1;
  });

  const rentalsByStatus = Object.entries(statusCounts).map(
    ([label, value]) => ({
      label,
      value,
      color: statusColors[label] || "#94a3b8",
    }),
  );

  // Properties by availability
  const availColors: Record<string, string> = {
    AVAILABLE: "#22c55e",
    RENTED: "#ef4444",
  };

  const availCounts: Record<string, number> = {};
  stats.properties.forEach((property: { availability: string }) => {
    availCounts[property.availability] =
      (availCounts[property.availability] || 0) + 1;
  });

  const propertiesByAvailability = Object.entries(availCounts).map(
    ([label, value]) => ({
      label,
      value,
      color: availColors[label] || "#94a3b8",
    }),
  );

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Analytics</h1>
        <p className="text-muted-foreground">
          Platform-wide statistics and breakdowns
        </p>
      </div>

      <AnalyticsCharts
        usersByRole={usersByRole}
        rentalsByStatus={rentalsByStatus}
        propertiesByAvailability={propertiesByAvailability}
      />
    </div>
  );
}
