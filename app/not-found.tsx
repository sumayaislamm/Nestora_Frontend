import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Compass } from "lucide-react";

export default function NotFound() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background px-4">
      {/* Ambient drifting glow — the one signature motion element */}
      <div
        aria-hidden
        className="pointer-events-none absolute h-128 w-lg rounded-full bg-primary/10 blur-3xl animate-drift"
      />

      <div className="relative z-10 flex flex-col items-center text-center">
        <span className="text-sm font-medium tracking-widest text-muted-foreground">
          ERROR 404
        </span>

        <h1 className="mt-4 text-7xl font-bold tracking-tight text-foreground sm:text-8xl">
          Lost the trail
        </h1>

        <p className="mt-4 max-w-md text-balance text-muted-foreground">
          The page you&apos;re looking for doesn&apos;t exist, or it moved
          somewhere we haven&apos;t mapped yet.
        </p>

        <Button asChild size="lg" className="mt-8 gap-2">
          <Link href="/">
            <Compass className="h-4 w-4" />
            Back to safety
          </Link>
        </Button>
      </div>

      <style>{`
        @keyframes drift {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(40px, -30px) scale(1.1); }
          66% { transform: translate(-30px, 20px) scale(0.95); }
        }
        .animate-drift {
          animation: drift 12s ease-in-out infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-drift {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}