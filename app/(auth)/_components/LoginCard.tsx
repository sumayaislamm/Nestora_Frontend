
"use client";

import { useTransition } from "react";
import { motion } from "framer-motion";
import {
  LogIn,
  Users,
  ShieldCheck,
  Building2,
  House,
  ShieldCheck as SecureIcon,
  Heart,
  ArrowUpRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import LoginForm from "./LoginForm";
import { demoLoginAction } from "../_actions/authActions";

const LoginCard = () => {
  const [pending, startTransition] = useTransition();

  const handleDemoLogin = (role: string) => {
    startTransition(async () => {
      try {
        await demoLoginAction(role);
      } catch {
        toast.error("Unable to open the demo account. Please try again.");
      }
    });
  };

  return (
    <main className="relative z-10 mx-auto flex min-h-screen w-full max-w-6xl items-center justify-center px-4 py-8 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="my-auto w-full"
      >
        <div className="grid overflow-hidden rounded-3xl border border-border/60 bg-background shadow-2xl shadow-black/15 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Left branding panel */}
          <section className="relative hidden flex-col justify-between overflow-hidden bg-primary p-8 text-primary-foreground sm:p-10 lg:flex">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border border-white/10"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full border border-white/10"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-white/5 blur-2xl"
            />

            <div className="relative">
              <div className="mb-10 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/15">
                  <House className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-xl font-bold tracking-tight">Nestora</p>
                  <p className="text-xs text-primary-foreground/70">
                    Find a place to call home
                  </p>
                </div>
              </div>

              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-primary-foreground/70">
                Welcome home
              </p>

              <h1 className="max-w-sm text-3xl font-bold leading-tight tracking-tight xl:text-4xl">
                Your next chapter starts with the right space.
              </h1>

              <p className="mt-5 max-w-sm text-sm leading-7 text-primary-foreground/75">
                Sign in to discover properties, manage rental requests, and
                make your next move with confidence.
              </p>

              <div className="mt-9 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10">
                    <SecureIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">A simpler rental journey</p>
                    <p className="mt-1 text-xs text-primary-foreground/70">
                      Keep your rental activity in one place.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10">
                    <Heart className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Find your kind of space</p>
                    <p className="mt-1 text-xs text-primary-foreground/70">
                      Explore options that suit your needs.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Demo accounts */}
            <div className="relative mt-10 border-t border-white/15 pt-6">
              <p className="text-sm font-semibold">Explore Nestora</p>
              <p className="mt-1 text-xs text-primary-foreground/70">
                Choose a demo role to explore the platform.
              </p>

              <div className="mt-4 grid gap-2">
                <Button
                  type="button"
                  variant="outline"
                  disabled={pending}
                  onClick={() => handleDemoLogin("TENANT")}
                  className="h-10 justify-start gap-3 border-white/20 bg-white/5 text-primary-foreground hover:bg-white/15 hover:text-primary-foreground"
                >
                  <Users className="h-4 w-4" />
                  Demo Tenant
                  <ArrowUpRight className="ml-auto h-4 w-4" />
                </Button>

                <Button
                  type="button"
                  variant="outline"
                  disabled={pending}
                  onClick={() => handleDemoLogin("LANDLORD")}
                  className="h-10 justify-start gap-3 border-white/20 bg-white/5 text-primary-foreground hover:bg-white/15 hover:text-primary-foreground"
                >
                  <Building2 className="h-4 w-4" />
                  Demo Landlord
                  <ArrowUpRight className="ml-auto h-4 w-4" />
                </Button>

                <Button
                  type="button"
                  variant="outline"
                  disabled={pending}
                  onClick={() => handleDemoLogin("ADMIN")}
                  className="h-10 justify-start gap-3 border-white/20 bg-white/5 text-primary-foreground hover:bg-white/15 hover:text-primary-foreground"
                >
                  <ShieldCheck className="h-4 w-4" />
                  Demo Admin
                  <ArrowUpRight className="ml-auto h-4 w-4" />
                </Button>
              </div>

              {pending && (
                <p className="mt-3 text-xs text-primary-foreground/70">
                  Opening demo account...
                </p>
              )}
            </div>
          </section>

          {/* Right login panel */}
          <section className="min-w-0 p-5 sm:p-8 lg:p-10">
            <div className="mb-7 lg:hidden">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
                <LogIn className="h-6 w-6 text-primary" />
              </div>
              <p className="text-sm font-semibold text-primary">WELCOME BACK</p>
            </div>

            <div className="mb-7">
              <p className="mb-2 hidden text-xs font-semibold uppercase tracking-[0.2em] text-primary lg:block">
                Welcome back
              </p>
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                Sign in to Nestora
              </h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Enter your details to access your account.
              </p>
            </div>

            <LoginForm />

            {/* Demo accounts on mobile */}
            <div className="mt-7 border-t border-border pt-6 lg:hidden">
              <p className="mb-1 text-sm font-semibold">
                Explore with a demo account
              </p>
              <p className="mb-4 text-xs text-muted-foreground">
                Select a role to explore Nestora.
              </p>

              <div className="grid gap-2 sm:grid-cols-3">
                <Button
                  type="button"
                  variant="outline"
                  disabled={pending}
                  onClick={() => handleDemoLogin("TENANT")}
                  className="gap-2"
                >
                  <Users className="h-4 w-4" />
                  Tenant
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  disabled={pending}
                  onClick={() => handleDemoLogin("LANDLORD")}
                  className="gap-2"
                >
                  <Building2 className="h-4 w-4" />
                  Landlord
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  disabled={pending}
                  onClick={() => handleDemoLogin("ADMIN")}
                  className="gap-2"
                >
                  <ShieldCheck className="h-4 w-4" />
                  Admin
                </Button>
              </div>

              {pending && (
                <p className="mt-3 text-xs text-muted-foreground">
                  Opening demo account...
                </p>
              )}
            </div>

            <p className="mt-8 text-center text-xs text-muted-foreground">
              By continuing, you agree to use Nestora responsibly.
            </p>
          </section>
        </div>

        <p className="mt-5 text-center text-xs text-primary-foreground/75">
          Find your space. Feel at home. <span aria-hidden="true">♥</span>
        </p>
      </motion.div>
    </main>
  );
};

export default LoginCard;
