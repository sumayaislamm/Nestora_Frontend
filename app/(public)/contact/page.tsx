import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="container mx-auto max-w-5xl px-4 py-16">
      <div className="text-center">
        <h1 className="text-4xl font-bold">Contact Us</h1>
        <p className="mt-4 text-muted-foreground">
          We would love to hear from you. Reach out anytime.
        </p>
      </div>

      <div className="grid gap-6 mt-12 md:grid-cols-3">
        <Card>
          <CardContent className="p-6 text-center">
            <Mail className="mx-auto mb-4 h-8 w-8 text-primary" />
            <h2 className="font-semibold">Email</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              support@nestora.com
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 text-center">
            <Phone className="mx-auto mb-4 h-8 w-8 text-primary" />
            <h2 className="font-semibold">Phone</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              +880 1234-567890
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 text-center">
            <MapPin className="mx-auto mb-4 h-8 w-8 text-primary" />
            <h2 className="font-semibold">Address</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Dhaka, Bangladesh
            </p>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}