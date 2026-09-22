
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  BadgeCheck,
  Building2,
  CircleDollarSign,
  HeartHandshake,
  House,
  MessageCircle,
  Search,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

const values = [
  {
    number: "01",
    icon: ShieldCheck,
    title: "Trust first",
    text: "Clear property information and a straightforward rental experience.",
  },
  {
    number: "02",
    icon: CircleDollarSign,
    title: "Transparency",
    text: "Simple pricing and no unnecessary brokerage between tenants and landlords.",
  },
  {
    number: "03",
    icon: Users,
    title: "Direct connection",
    text: "Helping tenants and landlords communicate without unnecessary middlemen.",
  },
  {
    number: "04",
    icon: HeartHandshake,
    title: "Human experience",
    text: "Technology should make renting easier, not make people feel lost.",
  },
];

const platformPillars = [
  {
    icon: Search,
    title: "Discover",
    text: "Search and filter properties around the things that actually matter to you.",
  },
  {
    icon: BadgeCheck,
    title: "Understand",
    text: "Get the information you need before making a rental decision.",
  },
  {
    icon: MessageCircle,
    title: "Connect",
    text: "Communicate directly with landlords throughout the rental journey.",
  },
  {
    icon: Building2,
    title: "Manage",
    text: "Keep listings, requests, rentals, and payments organized in one platform.",
  },
];

const differences = [
  {
    number: "01",
    title: "No unnecessary complexity",
    text: "The platform is designed around the actual rental journey instead of adding friction to it.",
  },
  {
    number: "02",
    title: "One connected experience",
    text: "Property discovery, communication, requests, and payments work together.",
  },
  {
    number: "03",
    title: "Built for both sides",
    text: "Tenants and landlords each get tools designed around their own needs.",
  },
  {
    number: "04",
    title: "Designed to scale",
    text: "Nestora is being built as a modern rental platform that can grow with its community.",
  },
];

const journey = [
  {
    number: "01",
    title: "Find",
    text: "Explore properties that fit your lifestyle and budget.",
  },
  {
    number: "02",
    title: "Connect",
    text: "Build a direct connection between tenant and landlord.",
  },
  {
    number: "03",
    title: "Request",
    text: "Move from interest to an organized rental request.",
  },
  {
    number: "04",
    title: "Move",
    text: "Complete the necessary steps and move forward with confidence.",
  },
];

export default function AboutPage() {
  return (
    <main className="overflow-hidden bg-background text-foreground">
      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="relative min-h-[88vh] overflow-hidden border-b border-border">
        {/* Ambient background */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.3, ease: "easeOut" }}
          className="pointer-events-none absolute -right-40 -top-40 h-[650px] w-[650px] rounded-full bg-primary/10 blur-3xl"
        />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="pointer-events-none absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-primary/5 blur-3xl"
        />

        <div className="mx-auto grid min-h-[88vh] max-w-7xl items-center gap-16 px-6 py-4 lg:grid-cols-[1fr_0.85fr] lg:px-8">
          {/* Left */}
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mb-6 flex items-center gap-3"
            >
              <span className="h-px w-10 bg-primary" />

              <span className="text-sm font-medium uppercase tracking-[0.25em] text-muted-foreground">
                About Nestora
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 45, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{
                duration: 0.9,
                delay: 0.1,
                ease: "easeOut",
              }}
              className="max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl xl:text-8xl"
            >
              Renting should feel
              <span className="block text-muted-foreground">
                simple.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-8 max-w-xl text-base leading-8 text-muted-foreground sm:text-lg"
            >
              Nestora is a modern rental platform built to make finding,
              listing, and managing properties more transparent, direct,
              and human.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Link
                href="/properties"
                className="group inline-flex items-center gap-3 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition-all duration-300 hover:gap-4 hover:shadow-lg"
              >
                Explore Nestora
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center gap-3 rounded-full border border-border px-6 py-3.5 text-sm font-medium transition-all duration-300 hover:bg-muted"
              >
                Our services
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="mt-16 flex items-center gap-4 text-sm text-muted-foreground"
            >
              <motion.div
                animate={{ y: [0, 7, 0] }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <ArrowDown className="h-4 w-4" />
              </motion.div>

              Discover what Nestora stands for
            </motion.div>
          </div>

          {/* Right visual */}
          <motion.div
            initial={{ opacity: 0, x: 60, scale: 0.94 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{
              duration: 1,
              delay: 0.25,
              ease: "easeOut",
            }}
            className="relative mx-auto w-full max-w-[480px]"
          >
            {/* Grid */}
            <div className="pointer-events-none absolute inset-0 -z-10 opacity-30">
              <div
                className="h-full w-full"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
                  backgroundSize: "40px 40px",
                }}
              />
            </div>

            {/* Main card */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative overflow-hidden rounded-[2rem] border border-border bg-background/80 p-5 shadow-2xl backdrop-blur-xl"
            >
              {/* Header */}
              <div className="flex items-center justify-between border-b border-border pb-5">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    Our idea
                  </p>

                  <p className="mt-1 text-lg font-medium">
                    A better rental journey
                  </p>
                </div>

                <motion.div
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="flex h-11 w-11 items-center justify-center rounded-2xl border border-border"
                >
                  <House className="h-5 w-5" />
                </motion.div>
              </div>

              {/* Central visual */}
              <div className="relative my-5 flex h-[260px] items-center justify-center overflow-hidden rounded-2xl bg-muted">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-muted-foreground/10" />

                {/* House */}
                <motion.div
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.7,
                    duration: 0.7,
                    ease: "easeOut",
                  }}
                  className="relative"
                >
                  <div className="relative h-32 w-40 rounded-b-xl border border-border bg-background shadow-xl">
                    <div className="absolute -top-16 left-1/2 h-32 w-32 -translate-x-1/2 rotate-45 rounded-tl-2xl border-l border-t border-border bg-background" />

                    <div className="absolute bottom-0 left-1/2 h-14 w-10 -translate-x-1/2 rounded-t-lg border border-border bg-muted" />

                    <div className="absolute left-5 top-6 h-8 w-8 rounded-md border border-border bg-muted" />

                    <div className="absolute right-5 top-6 h-8 w-8 rounded-md border border-border bg-muted" />
                  </div>
                </motion.div>

                {/* Floating icon */}
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 4, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute left-5 top-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-border bg-background shadow-lg"
                >
                  <Sparkles className="h-5 w-5" />
                </motion.div>

                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute bottom-5 right-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-border bg-background shadow-lg"
                >
                  <HeartHandshake className="h-5 w-5" />
                </motion.div>
              </div>

              {/* Bottom statement */}
              <div className="rounded-2xl border border-border p-5">
                <p className="text-sm leading-7 text-muted-foreground">
                  Better technology should make the rental experience
                  clearer, not more complicated.
                </p>
              </div>
            </motion.div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                delay: 1.1,
                duration: 0.6,
                ease: "easeOut",
              }}
              className="absolute -right-5 top-[25%] hidden rounded-2xl border border-border bg-background p-4 shadow-xl sm:block"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-muted">
                  <ShieldCheck className="h-4 w-4" />
                </div>

                <div>
                  <p className="text-xs text-muted-foreground">
                    Built around
                  </p>
                  <p className="text-sm font-medium">
                    Trust
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          STORY
      ====================================================== */}
      <section className="py-4">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Why Nestora exists
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
              Because finding a place to live should not feel like a maze.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6 text-base leading-8 text-muted-foreground"
          >
            <p>
              Property rental can involve searching through endless
              listings, unclear information, unnecessary intermediaries,
              scattered communication, and disconnected processes.
            </p>

            <p>
              Nestora was built around a simpler idea: bring the important
              parts of the rental journey into one modern platform and
              make the relationship between tenants and landlords more
              direct.
            </p>

            <p>
              We are building Nestora to make property discovery easier,
              communication clearer, and rental management more organized
              for everyone involved.
            </p>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          VALUES
      ====================================================== */}
      <section className="border-y border-border bg-muted/20 py-4">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
              What we believe
            </p>

            <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
              Four principles behind everything we build.
            </h2>
          </motion.div>

          <div className="mt-14 grid gap-0 border-t border-border sm:grid-cols-2">
            {values.map((value, index) => {
              const Icon = value.icon;

              return (
                <motion.div
                  key={value.number}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.65,
                    delay: index * 0.1,
                    ease: "easeOut",
                  }}
                  whileHover={{ y: -5 }}
                  className="group border-b border-border p-8 transition-all duration-300 sm:[&:nth-child(odd)]:border-r lg:p-10"
                >
                  <div className="flex items-start justify-between">
                    <motion.div
                      whileHover={{ rotate: 8, scale: 1.1 }}
                      transition={{ duration: 0.25 }}
                      className="flex h-12 w-12 items-center justify-center rounded-full border border-border"
                    >
                      <Icon className="h-5 w-5" />
                    </motion.div>

                    <span className="text-sm text-muted-foreground">
                      {value.number}
                    </span>
                  </div>

                  <h3 className="mt-8 text-2xl font-medium">
                    {value.title}
                  </h3>

                  <p className="mt-3 max-w-md leading-7 text-muted-foreground">
                    {value.text}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          PLATFORM
      ====================================================== */}
      <section className="py-4">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-[0.75fr_1.25fr]">
            <motion.div
              initial={{ opacity: 0, x: -45 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
                The Nestora approach
              </p>

              <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
                One platform. Four essential steps.
              </h2>

              <p className="mt-6 max-w-md leading-8 text-muted-foreground">
                Every part of Nestora is connected around the core journey
                of finding, understanding, connecting, and managing a
                property.
              </p>
            </motion.div>

            <div className="grid gap-4 sm:grid-cols-2">
              {platformPillars.map((pillar, index) => {
                const Icon = pillar.icon;

                return (
                  <motion.div
                    key={pillar.title}
                    initial={{ opacity: 0, y: 35 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.1,
                      ease: "easeOut",
                    }}
                    whileHover={{ y: -7 }}
                    className="rounded-3xl border border-border p-7 transition-shadow duration-300 hover:shadow-lg"
                  >
                    <motion.div
                      whileHover={{ rotate: -8, scale: 1.1 }}
                      transition={{ duration: 0.25 }}
                      className="flex h-11 w-11 items-center justify-center rounded-2xl border border-border"
                    >
                      <Icon className="h-5 w-5" />
                    </motion.div>

                    <h3 className="mt-7 text-xl font-medium">
                      {pillar.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-muted-foreground">
                      {pillar.text}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          DIFFERENCE
      ====================================================== */}
      <section className="border-y border-border py-4">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
              What makes Nestora different
            </p>

            <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
              Less friction. More clarity.
            </h2>
          </motion.div>

          <div className="mt-14 border-t border-border">
            {differences.map((item, index) => (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                whileHover={{ x: 8 }}
                className="group grid gap-5 border-b border-border py-8 transition-all duration-300 md:grid-cols-[80px_1fr_1fr] md:items-center"
              >
                <span className="text-sm text-muted-foreground">
                  {item.number}
                </span>

                <h3 className="text-xl font-medium">
                  {item.title}
                </h3>

                <p className="text-sm leading-7 text-muted-foreground">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          JOURNEY
      ====================================================== */}
      <section className="py-4">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
              The journey
            </p>

            <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
              From searching to settling in.
            </h2>
          </motion.div>

          <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {journey.map((item, index) => (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                whileHover={{ y: -8 }}
                className="rounded-3xl border border-border p-7 transition-shadow duration-300 hover:shadow-lg"
              >
                <span className="text-sm text-muted-foreground">
                  {item.number}
                </span>

                <h3 className="mt-12 text-2xl font-medium">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ====================================================== */}
      <section className="px-6 py-4 lg:px-8 ">
        <motion.div
          initial={{ opacity: 0, y: 45, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-primary px-7 py-16 text-primary-foreground sm:px-12 lg:px-20 lg:py-24"
        >
          <motion.div
            animate={{
              y: [0, -8, 0],
              rotate: [0, 3, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute right-10 top-10 hidden opacity-20 sm:block"
          >
            <House className="h-24 w-24" strokeWidth={1} />
          </motion.div>

          <div className="relative max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.2em] opacity-70">
              Start exploring
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-6xl">
              Your next place starts here.
            </h2>

            <p className="mt-6 max-w-xl leading-8 opacity-80">
              Explore properties, discover a simpler rental experience,
              and take the next step with Nestora.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/properties"
                className="group inline-flex items-center gap-3 rounded-full bg-background px-6 py-3.5 text-sm font-medium text-foreground transition-all duration-300 hover:gap-4 hover:shadow-xl"
              >
                Browse properties
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center gap-3 rounded-full border border-primary-foreground/30 px-6 py-3.5 text-sm font-medium transition-colors duration-300 hover:bg-primary-foreground/10"
              >
                Contact Nestora
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
