import { Mail, Phone, User } from "lucide-react";

export default function LandlordCard({
  landlord,
// eslint-disable-next-line @typescript-eslint/no-explicit-any
}: any) {
  return (
    <div className="rounded-2xl border p-6">

      <h2 className="mb-6 text-xl font-bold">
        Landlord
      </h2>

      <div className="space-y-4">

        <div className="flex items-center gap-3">

          <User />

          {landlord.name}

        </div>

        <div className="flex items-center gap-3">

          <Mail />

          {landlord.email}

        </div>

        <div className="flex items-center gap-3">

          <Phone />

          {landlord.phone}

        </div>

      </div>

    </div>
  );
}