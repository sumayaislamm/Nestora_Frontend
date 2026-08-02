import { landlordSidebarItems, Sidebar } from "../_components/sidebar";

export default async function LandlordLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen md:flex">
      <Sidebar items={landlordSidebarItems} title="Landlord" />

     
        {children}

    </div>
  );
}
