import { Building2 } from "lucide-react";

export default function LandlordLoading() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center gap-4 bg-background">
      <div className="relative flex h-16 w-16 items-center justify-center">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/20" />
        <span className="relative flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
          <Building2 className="h-6 w-6 animate-pulse text-primary" />
        </span>
      </div>
      <p className="text-sm font-medium text-muted-foreground">
        Loading Nestora...
      </p>
    </div>
  );
}
