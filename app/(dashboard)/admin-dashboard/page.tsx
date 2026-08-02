import { cookies } from "next/headers";

import { Users, Building2, ClipboardList } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { getAdminStats } from "@/app/service/adminService";

export default async function AdminDashboard() {
  const cookieStore = await cookies();

  const token = `Bearer ${cookieStore.get("accessToken")?.value}`;

  const stats = await getAdminStats(token);

  const cards = [
    {
      title: "Total Users",
      value: stats.users.length,
      icon: Users,
    },

    {
      title: "Total Properties",
      value: stats.properties.length,
      icon: Building2,
    },

    {
      title: "Rental Requests",
      value: stats.rentals.length,
      icon: ClipboardList,
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>

        <p className="text-muted-foreground">Manage RentNest platform</p>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {cards.map((card) => {
          const Icon = card.icon;

          return (
            <Card key={card.title}>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-sm">{card.title}</CardTitle>

                <Icon className="h-5 w-5" />
              </CardHeader>

              <CardContent>
                <p className="text-3xl font-bold">{card.value}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
