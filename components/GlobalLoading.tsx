"use client";

import { useEffect, useState } from "react";
import { Building2, Loader2 } from "lucide-react";

export default function GlobalLoading() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-9999 flex items-center justify-center bg-white">
      <div className="flex flex-col items-center justify-center text-center">
        {/* Logo */}
        <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
          <Building2 className="h-8 w-8 text-primary" />
        </div>

        {/* Brand */}
        <h1 className="font-heading text-3xl font-bold text-primary">
          Nestora
        </h1>

        {/* Message */}
        <p className="mt-2 text-sm text-muted-foreground">
          Finding your next home...
        </p>

        {/* Spinner */}
        <div className="mt-6">
          <Loader2 className="h-7 w-7 animate-spin text-primary" />
        </div>
      </div>
    </div>
  );
}

