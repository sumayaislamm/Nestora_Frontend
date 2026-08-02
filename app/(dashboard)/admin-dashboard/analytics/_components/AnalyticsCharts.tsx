"use client";

type BarItem = {
  label: string;
  value: number;
  color: string;
};

function BarChart({ title, data }: { title: string; data: BarItem[] }) {
  const max = Math.max(...data.map((d) => d.value), 1);

  return (
    <div className="rounded-2xl border p-6">
      <h3 className="mb-5 text-lg font-semibold">{title}</h3>

      <div className="space-y-4">
        {data.map((item) => (
          <div key={item.label}>
            <div className="mb-1 flex items-center justify-between text-sm">
              <span className="text-muted-foreground">{item.label}</span>
              <span className="font-medium">{item.value}</span>
            </div>

            <div className="h-3 w-full overflow-hidden rounded-full bg-muted">
              <div
                className="h-full rounded-full transition-all"
                style={{
                  width: `${(item.value / max) * 100}%`,
                  backgroundColor: item.color,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function AnalyticsCharts({
  usersByRole,
  rentalsByStatus,
  propertiesByAvailability,
}: {
  usersByRole: BarItem[];
  rentalsByStatus: BarItem[];
  propertiesByAvailability: BarItem[];
}) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <BarChart title="Users by Role" data={usersByRole} />
      <BarChart
        title="Properties by Availability"
        data={propertiesByAvailability}
      />
      <div className="md:col-span-2">
        <BarChart title="Rental Requests by Status" data={rentalsByStatus} />
      </div>
    </div>
  );
}
