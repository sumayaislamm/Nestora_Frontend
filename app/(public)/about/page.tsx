import { Card, CardContent } from "@/components/ui/card";
import { Building2, ShieldCheck, Users } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="container mx-auto max-w-6xl px-4 py-16">
      <div className="text-center">
        <h1 className="text-4xl font-bold">About Nestora</h1>
        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
          Nestora is a modern rental property management platform connecting
          tenants and landlords through a secure, fast and user-friendly
          experience.
        </p>
      </div>

      <div className="grid gap-6 mt-12 md:grid-cols-3">
        <Card>
          <CardContent className="p-6 text-center">
            <Building2 className="mx-auto mb-4 h-10 w-10 text-primary" />
            <h2 className="font-semibold text-xl">Property Management</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Easily list, manage and update rental properties with a clean
              dashboard.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 text-center">
            <Users className="mx-auto mb-4 h-10 w-10 text-primary" />
            <h2 className="font-semibold text-xl">For Everyone</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Built for tenants, landlords and administrators with dedicated
              dashboards.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 text-center">
            <ShieldCheck className="mx-auto mb-4 h-10 w-10 text-primary" />
            <h2 className="font-semibold text-xl">Secure Platform</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              JWT authentication, protected routes and role-based access ensure
              secure usage.
            </p>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}