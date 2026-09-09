
"use client";

import {
  ShieldCheck,
  HandCoins,
  MessageCircle,
  KeyRound,
  ArrowUpRight,
  Check,
} from "lucide-react";
import { motion, type Variants } from "framer-motion";
import Link from "next/link";

const REASONS = [
  {
    icon: ShieldCheck,
    title: "Every listing is verified",
    description:
      "Landlords confirm ownership before a property goes live, so what you see is what actually exists — no ghost listings, no bait-and-switch.",
    points: ["Ownership verification", "Authentic property details"],
  },
  {
    icon: HandCoins,
    title: "No brokerage, ever",
    description:
      "You deal with the landlord directly. Nestora doesn't take a cut of your rent or add hidden agent fees on top of the price you agreed to.",
    points: ["Direct landlord contact", "Zero brokerage fees"],
  },
  {
    icon: KeyRound,
    title: "Move-in ready information",
    description:
      "Rent, deposit, utilities, and house rules are laid out upfront on every listing, so there are no surprises once you've signed.",
    points: ["Transparent pricing", "Clear house rules"],
  },
  {
    icon: MessageCircle,
    title: "Support that answers back",
    description:
      "Questions about a listing or a payment don't sit in a queue. Our team responds the same day, every day of the week.",
    points: ["Fast response", "Payment assistance"],
  },
];

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
    y: 30,
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

const headerVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -25,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

export function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-background py-20 sm:py-24 lg:py-28">
      {/* Background decoration */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-20 size-80 rounded-full bg-primary/5 blur-3xl"
      />

      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 bottom-0 size-96 rounded-full bg-primary/5 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          {/* Left content */}
          <motion.div
            variants={headerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            className="lg:sticky lg:top-24 lg:self-start"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5">
              <span className="size-1.5 rounded-full bg-primary" />
              <span className="text-xs font-semibold tracking-wide text-primary uppercase">
                Why Nestora
              </span>
            </div>

            <h2 className="mt-5 max-w-xl font-heading text-3xl font-medium leading-tight tracking-tight text-foreground sm:text-4xl lg:text-[2.8rem]">
              Renting should not
              <br className="hidden sm:block" /> feel like a gamble.
            </h2>

            <p className="mt-5 max-w-md text-sm leading-7 text-muted-foreground sm:text-base">
              We built Nestora around the things tenants actually worry about
              when looking for a place — trust, transparency, cost, and getting
              help when you need it.
            </p>

            {/* Trust indicator */}
            <div className="mt-8 flex items-center gap-3">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((item) => (
                  <div
                    key={item}
                    className="flex size-8 items-center justify-center rounded-full border-2 border-background bg-primary/10 text-primary"
                  >
                    <Check className="size-3.5" />
                  </div>
                ))}
              </div>

              <div>
                <p className="text-sm font-medium text-foreground">
                  Built for confident renting
                </p>
                <p className="text-xs text-muted-foreground">
                  Less uncertainty. More clarity.
                </p>
              </div>
            </div>

            {/* Explore link */}
            <div className="mt-8">
              <Link href="/properties"
                className="group inline-flex items-center gap-2 text-sm font-medium text-foreground"
              >
                Explore verified properties
                <span className="flex size-7 items-center justify-center rounded-full border border-border transition-all duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
                  <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </Link>
            </div>
          </motion.div>

          {/* Right feature cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="grid grid-cols-1 gap-4 sm:grid-cols-2"
          >
            {REASONS.map(
              ({ icon: Icon, title, description, points }, index) => (
                <motion.article
                  key={title}
                  variants={itemVariants}
                  className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5"
                >
                  {/* Card number */}
                  <span className="absolute right-5 top-5 text-xs font-semibold tracking-widest text-muted-foreground/40">
                    0{index + 1}
                  </span>

                  {/* Icon */}
                  <div className="relative flex size-12 items-center justify-center overflow-hidden rounded-xl border border-primary/15 bg-primary/10 text-primary transition-all duration-300 group-hover:scale-105 group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="relative z-10 size-5 transition-transform duration-300 group-hover:scale-110" />

                    <div
                      aria-hidden
                      className="absolute inset-0 -translate-x-full bg-primary-foreground/20 transition-transform duration-500 group-hover:translate-x-full"
                    />
                  </div>

                  <h3 className="mt-5 font-heading text-base font-semibold text-foreground">
                    {title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {description}
                  </p>

                  {/* Points */}
                  <div className="mt-5 space-y-2 border-t border-border pt-4">
                    {points.map((point) => (
                      <div
                        key={point}
                        className="flex items-center gap-2 text-xs text-muted-foreground"
                      >
                        <span className="flex size-4 items-center justify-center rounded-full bg-primary/10 text-primary">
                          <Check className="size-2.5" />
                        </span>
                        {point}
                      </div>
                    ))}
                  </div>

                  {/* Bottom accent */}
                  <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-primary transition-all duration-500 group-hover:w-full" />
                </motion.article>
              ),
            )}
          </motion.div>
        </div>

        {/* Bottom trust strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-14 grid grid-cols-2 divide-x divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card sm:grid-cols-4 sm:divide-y-0"
        >
          {[
            ["100%", "Transparent pricing"],
            ["0%", "Brokerage fees"],
            ["24/7", "Listing access"],
            ["1:1", "Direct communication"],
          ].map(([value, label]) => (
            <div
              key={label}
              className="px-5 py-5 text-center transition-colors hover:bg-primary/5"
            >
              <p className="font-heading text-xl font-semibold text-foreground">
                {value}
              </p>
              <p className="mt-1 text-xs text-muted-foreground">{label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
