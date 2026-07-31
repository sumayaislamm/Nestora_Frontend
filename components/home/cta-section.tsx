import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CtaSection() {
  return (
    <section className="bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl bg-primary px-8 py-14 text-center sm:px-16 sm:py-20">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_20%_0%,color-mix(in_oklch,var(--primary-foreground),transparent_88%),transparent)]"
          />
          <h2 className="font-heading text-3xl font-medium text-primary-foreground sm:text-4xl">
            Own a property? Put it on Nestora.
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-primary-foreground/80">
            List for free, set your own price, and talk to tenants directly —
            no agent fees eating into your rent.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/register">
              <Button
                size="lg"
                variant="secondary"
                className="gap-1.5"
              >
                List your property <ArrowUpRight className="size-3.5" />
              </Button>
            </Link>
            <Link href="/properties">
              <Button
                size="lg"
                variant="ghost"
                className="text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              >
                Browse properties instead
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}