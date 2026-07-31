import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Home, SearchX } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-muted/30 px-4">
      <Card className="w-full max-w-lg border-none shadow-xl">
        <CardContent className="flex flex-col items-center py-12 text-center">
          <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
            <SearchX className="h-10 w-10 text-primary" />
          </div>

          <span className="text-sm font-medium uppercase tracking-[0.3em] text-muted-foreground">
            Error 404
          </span>

          <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
            Page Not Found
          </h1>

          <p className="mt-4 max-w-md text-sm text-muted-foreground md:text-base">
            Sorry, the page you are looking for does not exist or has been moved.
            Please return to the homepage and continue browsing.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/">
                <Home className="mr-2 h-4 w-4" />
                Go Home
              </Link>
            </Button>

            <Button asChild variant="outline" size="lg">
              <Link href="/properties">
                Browse Properties
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}