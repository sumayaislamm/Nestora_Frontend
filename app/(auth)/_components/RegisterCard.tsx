
"use client";

import { motion } from "framer-motion";
import RegisterForm from "./RegisterForm";

const RegisterCard = () => {
  return (
    <main className="relative z-10 flex min-h-screen items-center justify-center px-4 py-10 sm:px-6 lg:px-10">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="my-auto w-full max-w-5xl"
      >
        <div className="grid overflow-hidden rounded-3xl border border-border/60 bg-background shadow-2xl shadow-black/10 lg:grid-cols-[0.8fr_1.2fr]">
          {/* Left branding panel */}
          <section className="relative hidden flex-col justify-between overflow-hidden bg-primary p-10 text-primary-foreground lg:flex">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full border border-current/15" />
            <div className="absolute -right-10 -top-10 h-44 w-44 rounded-full border border-current/15" />
            <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full border border-current/10" />

            <div className="relative z-10">
              <p className="text-sm font-semibold tracking-[0.25em]">
                NESTORA
              </p>

              <div className="mt-20">
                <p className="text-sm font-medium text-primary-foreground/70">
                  YOUR SPACE. YOUR STORY.
                </p>

                <h2 className="mt-4 max-w-sm text-4xl font-bold leading-tight">
                  Find a place that feels like home.
                </h2>

                <p className="mt-5 max-w-sm text-sm leading-7 text-primary-foreground/80">
                  Discover rental spaces and connect directly
                  with property owners through a simpler
                  rental experience.
                </p>
              </div>
            </div>

            <p className="relative z-10 text-xs text-primary-foreground/70">
              A better way to find your next space.
            </p>
          </section>

          {/* Registration panel */}
          <section className="min-w-0 p-5 sm:p-8 lg:p-10">
            <div className="mb-7">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                Welcome to Nestora
              </p>

              <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Create your account
              </h1>

              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                Enter your details to get started.
              </p>
            </div>

            <RegisterForm />
          </section>
        </div>

        <p className="mt-5 text-center text-xs text-muted-foreground">
          Your next space starts here.
        </p>
      </motion.div>
    </main>
  );
};

export default RegisterCard;
