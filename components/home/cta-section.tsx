"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import {
  ArrowUpRight,
  CheckCircle2,
  ShieldCheck,
  Users,
} from "lucide-react";

import { Button } from "@/components/ui/button";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export function CtaSection() {
  return (
    <section className="relative overflow-hidden bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={containerVariants}
          className="relative overflow-hidden rounded-[2rem] bg-primary px-6 py-14 shadow-2xl sm:px-12 sm:py-16 lg:px-20 lg:py-20"
        >
          {/* ================= BACKGROUND EFFECTS ================= */}

          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
          >
            {/* Main radial glow */}
            <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-primary-foreground/10 blur-3xl" />

            {/* Right glow */}
            <div className="absolute -bottom-40 -right-20 h-[28rem] w-[28rem] rounded-full bg-primary-foreground/10 blur-3xl" />

            {/* Grid */}
            <div
              className="absolute inset-0 opacity-[0.08]"
              style={{
                backgroundImage:
                  "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
                backgroundSize: "42px 42px",
              }}
            />
          </div>

          {/* ================= FLOATING DECORATION ================= */}

          <motion.div
            aria-hidden
            animate={{
              y: [0, -10, 0],
              rotate: [0, 3, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="pointer-events-none absolute right-10 top-10 hidden size-20 rounded-2xl border border-primary-foreground/10 bg-primary-foreground/5 backdrop-blur-sm lg:block"
          />

          <motion.div
            aria-hidden
            animate={{
              y: [0, 12, 0],
              rotate: [0, -4, 0],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="pointer-events-none absolute bottom-10 left-10 hidden size-14 rounded-full border border-primary-foreground/10 bg-primary-foreground/5 backdrop-blur-sm lg:block"
          />

          {/* ================= CONTENT ================= */}

          <div className="relative z-10 mx-auto max-w-3xl text-center">
            {/* Eyebrow */}

            <motion.div variants={itemVariants}>
              <span className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/15 bg-primary-foreground/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground/90 backdrop-blur-sm">
                <span className="size-1.5 rounded-full bg-primary-foreground" />
                List with Nestora
              </span>
            </motion.div>

            {/* Heading */}

            <motion.h2
              variants={itemVariants}
              className="mt-6 font-heading text-3xl font-semibold tracking-tight text-primary-foreground sm:text-4xl lg:text-5xl"
            >
              Own a property?
              <br />
              <span className="text-primary-foreground/80">
                Turn it into opportunity.
              </span>
            </motion.h2>

            {/* Description */}

            <motion.p
              variants={itemVariants}
              className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-primary-foreground/75 sm:text-base"
            >
              List your property on Nestora, connect directly with serious
              tenants, and manage your listing without unnecessary agent fees.
            </motion.p>

            {/* ================= BENEFITS ================= */}

            <motion.div
              variants={itemVariants}
              className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3"
            >
              <div className="flex items-center gap-2 text-xs font-medium text-primary-foreground/80">
                <CheckCircle2 className="size-4" />
                Free listing
              </div>

              <div className="flex items-center gap-2 text-xs font-medium text-primary-foreground/80">
                <ShieldCheck className="size-4" />
                Trusted platform
              </div>

              <div className="flex items-center gap-2 text-xs font-medium text-primary-foreground/80">
                <Users className="size-4" />
                Direct tenant contact
              </div>
            </motion.div>

            {/* ================= BUTTONS ================= */}

            <motion.div
              variants={itemVariants}
              className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
            >
              <Link href="/register">
                <Button
                  size="lg"
                  variant="secondary"
                  className="group h-12 rounded-full px-6 font-semibold shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
                >
                  List your property
                  <ArrowUpRight className="ml-1.5 size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Button>
              </Link>

              <Link href="/properties">
                <Button
                  size="lg"
                  variant="ghost"
                  className="group h-12 rounded-full px-6 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
                >
                  Browse properties
                  <ArrowUpRight className="ml-1.5 size-4 opacity-70 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Button>
              </Link>
            </motion.div>

            {/* ================= TRUST TEXT ================= */}

            <motion.p
              variants={itemVariants}
              className="mt-6 text-[11px] text-primary-foreground/50"
            >
              No upfront listing fee • You stay in control
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
