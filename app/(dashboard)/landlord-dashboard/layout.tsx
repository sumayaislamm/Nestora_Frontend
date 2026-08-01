import { getMe } from "@/app/service/getMe";
import { landlordSidebarItems, Sidebar } from "../_components/sidebar";

export default async function LandlordLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <div className="flex min-h-screen">
      <Sidebar items={landlordSidebarItems} title="Landlord" />

      <main className="flex-1 bg-gray-50 p-8 overflow-y-auto">{children}</main>
    </div>
  );
}
