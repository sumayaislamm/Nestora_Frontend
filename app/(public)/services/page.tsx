import { Card, CardContent } from "@/components/ui/card";
import {
  Home,
  CreditCard,
  Search,
  ClipboardCheck,
} from "lucide-react";

const services = [
  {
    title: "Property Listing",
    description: "Landlords can publish and manage rental properties.",
    icon: Home,
  },
  {
    title: "Rental Requests",
    description: "Tenants can request properties online.",
    icon: Search,
  },
  {
    title: "Secure Payments",
    description: "Pay rent safely using integrated payment methods.",
    icon: CreditCard,
  },
  {
    title: "Application Tracking",
    description: "Track approval and rental request status easily.",
    icon: ClipboardCheck,
  },
];

export default function ServicesPage() {
  return (
    <main className="container mx-auto max-w-6xl px-4 py-16">
      <div className="text-center">
        <h1 className="text-4xl font-bold">Our Services</h1>
        <p className="mt-4 text-muted-foreground">
          Everything you need to manage rental properties in one place.
        </p>
      </div>

      <div className="grid gap-6 mt-12 md:grid-cols-2">
        {services.map((service) => {
          const Icon = service.icon;

          return (
            <Card key={service.title}>
              <CardContent className="flex gap-4 p-6">
                <div className="rounded-lg bg-primary/10 p-3">
                  <Icon className="h-6 w-6 text-primary" />
                </div>

                <div>
                  <h2 className="font-semibold">{service.title}</h2>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {service.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </main>
  );
}