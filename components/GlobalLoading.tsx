"use client";

import { useEffect, useState } from "react";
import { Building2 } from "lucide-react";

export default function GlobalLoading() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-gradient-to-b from-blue-100 via-blue-50 to-white">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/yznthkkx/image/upload/v1787329664/loading-image.jpg')",
        }}
      >
        {/* Background overlay */}
       <div className="absolute inset-0 bg-black/40" />

        {/* Soft glow */}
        <div className="absolute left-1/2 top-1/4 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-200/30 blur-3xl" />

        {/* Buildings */}
        <div className="absolute bottom-24 left-[8%] h-32 w-20 rounded-t-md bg-blue-200/40" />

        <div className="absolute bottom-24 left-[18%] h-44 w-24 rounded-t-md bg-blue-300/30" />

        <div className="absolute bottom-24 right-[18%] h-40 w-24 rounded-t-md bg-blue-200/40" />

        <div className="absolute bottom-24 right-[7%] h-28 w-20 rounded-t-md bg-blue-300/30" />

        {/* Road */}
        <div className="absolute bottom-0 h-24 w-full bg-slate-800/90" />

        {/* Road lines */}
        <div className="absolute bottom-11 left-0 flex w-full justify-around">
          <span className="h-1 w-20 rounded-full bg-white/70" />
          <span className="h-1 w-20 rounded-full bg-white/70" />
          <span className="h-1 w-20 rounded-full bg-white/70" />
          <span className="h-1 w-20 rounded-full bg-white/70" />
          <span className="h-1 w-20 rounded-full bg-white/70" />
        </div>
      </div>

      {/* Car */}
      <div className="car-loader absolute bottom-16 left-0">
        <div className="relative">
          {/* Car body */}
          <div className="relative h-10 w-24 rounded-lg bg-primary shadow-lg">
            {/* Windows */}
            <div className="absolute left-5 top-1 h-5 w-7 rounded-t-md bg-blue-100/80" />

            <div className="absolute right-5 top-1 h-5 w-7 rounded-t-md bg-blue-100/80" />

            {/* Wheels */}
            <span className="absolute -bottom-2 left-4 h-5 w-5 rounded-full border-2 border-slate-400 bg-slate-900" />

            <span className="absolute -bottom-2 right-4 h-5 w-5 rounded-full border-2 border-slate-400 bg-slate-900" />
          </div>

          {/* Headlight */}
          <span className="absolute right-0 top-3 h-2 w-2 rounded-full bg-yellow-200 shadow-[0_0_12px_rgba(253,224,71,0.9)]" />
        </div>
      </div>

      {/* Loading content */}
      <div className="relative z-10 mb-36 text-center">
        {/* Logo */}
        <div className="mb-4 flex justify-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/80 shadow-lg backdrop-blur">
            <Building2 className="h-7 w-7 text-primary" />
          </div>
        </div>

        {/* Brand */}
        <h1 className="font-heading text-2xl font-semibold text-primary sm:text-3xl md:text-4xl bg-accent/20 px-4 py-2 rounded-lg shadow-md">
          Nestora
        </h1>

        {/* Message */}
        <p className="mt-2 text-sm text-primary-foreground">
          Finding your next home...
        </p>

        {/* Progress dots */}
        <div className="mt-4 flex justify-center gap-1.5">
          <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-primary [animation-delay:0ms]" />

          <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-primary [animation-delay:150ms]" />

          <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-primary [animation-delay:300ms]" />
        </div>
      </div>
    </div>
  );
}