"use client";

import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  BadgeCheck,
  Building2,
  Check,
  CircleDollarSign,
  FileText,
  Headphones,
  House,
  MessageCircle,
  Search,
  ShieldCheck,
  UserRound,
  WalletCards,
} from "lucide-react";
import { motion } from "framer-motion";

const tenantServices = [
  {
    number: "01",
    icon: Search,
    title: "Property discovery",
    description:
      "Find properties based on location, price, property type, bedrooms, amenities, and availability.",
  },
  {
    number: "02",
    icon: ShieldCheck,
    title: "Verified listings",
    description:
      "Explore listings with detailed property information designed to give you more confidence.",
  },
  {
    number: "03",
    icon: MessageCircle,
    title: "Direct connection",
    description:
      "Connect directly with landlords instead of going through unnecessary intermediaries.",
  },
  {
    number: "04",
    icon: WalletCards,
    title: "Rental & payment",
    description:
      "Submit rental requests, track their status, and complete approved payments through Nestora.",
  },
];

const landlordServices = [
  {
    icon: Building2,
    title: "List your property",
    description:
      "Create detailed listings and present your property to potential tenants.",
  },
  {
    icon: UserRound,
    title: "Reach tenants",
    description:
      "Connect with people actively searching for rental properties.",
  },
  {
    icon: FileText,
    title: "Manage listings",
    description:
      "Update pricing, information, amenities, images, and availability.",
  },
  {
    icon: Check,
    title: "Manage requests",
    description:
      "Review incoming tenant requests and approve or reject them.",
  },
];

const platformFeatures = [
  {
    title: "Advanced search",
    text: "Find relevant properties with powerful filters.",
  },
  {
    title: "Rental management",
    text: "Track requests and rental activity in one place.",
  },
  {
    title: "Payment tracking",
    text: "Keep payment information organized and accessible.",
  },
  {
    title: "Role-based dashboards",
    text: "Dedicated experiences for tenants, landlords, and admins.",
  },
];

const rentalSteps = [
  {
    number: "01",
    title: "Discover",
    text: "Search properties that match your requirements.",
  },
  {
    number: "02",
    title: "Connect",
    text: "Review the property and connect with the landlord.",
  },
  {
    number: "03",
    title: "Request",
    text: "Submit your rental request through Nestora.",
  },
  {
    number: "04",
    title: "Complete",
    text: "After approval, complete payment and move forward.",
  },
];

const trustPoints = [
  {
    icon: ShieldCheck,
    title: "Verified",
    text: "More confidence in every listing.",
  },
  {
    icon: CircleDollarSign,
    title: "Transparent",
    text: "Clear pricing without hidden brokerage.",
  },
  {
    icon: MessageCircle,
    title: "Direct",
    text: "Tenants connect with landlords.",
  },
  {
    icon: Headphones,
    title: "Supported",
    text: "Help when you need it.",
  },
];

export default function ServicesPage() {
  return (
    <main className="overflow-hidden bg-background text-foreground">
      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="relative min-h-[85vh] flex items-center border-b border-border">
        {/* Background glow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="pointer-events-none absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full bg-primary/10 blur-3xl"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, delay: 0.15, ease: "easeOut" }}
          className="pointer-events-none absolute -bottom-40 -left-40 h-[450px] w-[450px] rounded-full bg-primary/5 blur-3xl"
        />

        <div className="mx-auto w-full max-w-7xl px-6 py-4 lg:px-8">
          <div className="max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mb-6 flex items-center gap-3"
            >
              <span className="h-px w-10 bg-primary" />
              <span className="text-sm font-medium uppercase tracking-[0.25em] text-muted-foreground">
                Nestora Services
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 45, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.9, delay: 0.1, ease: "easeOut" }}
              className="max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl lg:text-8xl"
            >
              More than a
              <span className="block text-muted-foreground">
                property listing.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-8 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg"
            >
              Nestora brings property discovery, landlord communication,
              rental requests, payments, and management together in one
              straightforward rental experience.
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
                Explore properties
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center gap-3 rounded-full border border-border px-6 py-3.5 text-sm font-medium transition-all duration-300 hover:bg-muted"
              >
                Talk to us
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-20 flex items-center gap-4 text-sm text-muted-foreground"
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

            Everything in one rental experience
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          RENTAL EXPERIENCE
      ====================================================== */}
      <section className="border-b border-border py-4">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
              The experience
            </p>

            <h2 className="mt-5 max-w-xl text-4xl font-semibold tracking-tight sm:text-5xl">
              A simpler journey from search to move-in.
            </h2>

            <p className="mt-6 max-w-lg leading-8 text-muted-foreground">
              Renting involves more than finding a beautiful property.
              Nestora connects the important steps so you can move through
              the process with less friction.
            </p>
          </motion.div>

          <div className="space-y-0">
            {rentalSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.12,
                  ease: "easeOut",
                }}
                whileHover={{ x: 8 }}
                className="group flex gap-6 border-t border-border py-7 transition-colors duration-300"
              >
                <span className="text-sm font-medium text-muted-foreground">
                  {step.number}
                </span>

                <div>
                  <h3 className="text-xl font-medium">{step.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-muted-foreground">
                    {step.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          TENANT SERVICES
      ====================================================== */}
      <section className="py-4">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
              For tenants
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              Everything you need to rent with confidence.
            </h2>
          </motion.div>

          <div className="mt-14 grid gap-0 border-t border-border sm:grid-cols-2">
            {tenantServices.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.div
                  key={service.number}
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
                      {service.number}
                    </span>
                  </div>

                  <h3 className="mt-8 text-2xl font-medium">
                    {service.title}
                  </h3>

                  <p className="mt-3 max-w-md leading-7 text-muted-foreground">
                    {service.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          LANDLORD SERVICES
      ====================================================== */}
      <section className="bg-muted/30 py-4">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl"
          >
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
              For landlords
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              Turn your property into opportunity.
            </h2>

            <p className="mt-6 leading-8 text-muted-foreground">
              From publishing a listing to handling rental requests, Nestora
              gives landlords the tools to manage their property journey.
            </p>
          </motion.div>

          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {landlordServices.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.65,
                    delay: index * 0.1,
                    ease: "easeOut",
                  }}
                  whileHover={{ y: -8 }}
                  className="rounded-3xl border border-border bg-background p-8 transition-shadow duration-300 hover:shadow-xl lg:p-10"
                >
                  <motion.div
                    whileHover={{ rotate: -8, scale: 1.1 }}
                    transition={{ duration: 0.25 }}
                    className="flex h-12 w-12 items-center justify-center rounded-2xl border border-border"
                  >
                    <Icon className="h-5 w-5" />
                  </motion.div>

                  <h3 className="mt-7 text-2xl font-medium">
                    {service.title}
                  </h3>

                  <p className="mt-3 leading-7 text-muted-foreground">
                    {service.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          PLATFORM FEATURES
      ====================================================== */}
      <section className="py-4">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">
            <motion.div
              initial={{ opacity: 0, x: -45 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
                The platform
              </p>

              <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
                Built around the way rentals actually work.
              </h2>
            </motion.div>

            <div className="grid gap-0 border-t border-border">
              {platformFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: 45 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                    ease: "easeOut",
                  }}
                  whileHover={{ x: 8 }}
                  className="group flex items-center justify-between gap-6 border-b border-border py-7"
                >
                  <div>
                    <h3 className="text-xl font-medium">
                      {feature.title}
                    </h3>

                    <p className="mt-2 text-sm text-muted-foreground">
                      {feature.text}
                    </p>
                  </div>

                  <ArrowRight className="h-5 w-5 shrink-0 text-muted-foreground opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          HOW IT WORKS
      ====================================================== */}
      <section className="border-y border-border py-4">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
              How it works
            </p>

            <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
              From finding a place to making it home.
            </h2>
          </motion.div>

          <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {rentalSteps.map((step, index) => (
              <motion.div
                key={step.number}
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
                  {step.number}
                </span>

                <h3 className="mt-12 text-2xl font-medium">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  {step.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          TRUST
      ====================================================== */}
      <section className="py-4">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-3">
              <BadgeCheck className="h-5 w-5" />
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
                What matters
              </p>
            </div>

            <h2 className="mt-5 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
              The principles behind the experience.
            </h2>
          </motion.div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {trustPoints.map((point, index) => {
              const Icon = point.icon;

              return (
                <motion.div
                  key={point.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                    ease: "easeOut",
                  }}
                  whileHover={{ y: -6 }}
                  className="rounded-3xl border border-border p-7 transition-shadow duration-300 hover:shadow-lg"
                >
                  <motion.div
                    whileHover={{ rotate: 8, scale: 1.1 }}
                    transition={{ duration: 0.25 }}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-border"
                  >
                    <Icon className="h-5 w-5" />
                  </motion.div>

                  <h3 className="mt-7 text-xl font-medium">
                    {point.title}
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-muted-foreground">
                    {point.text}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ====================================================== */}
      <section className="px-6 py-4 lg:px-8">
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
              Your next move
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-6xl">
              Ready to make your next move?
            </h2>

            <p className="mt-6 max-w-xl leading-8 opacity-80">
              Whether you are searching for a home or listing a property,
              Nestora gives you the tools to move forward.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/properties"
                className="group inline-flex items-center gap-3 rounded-full bg-background px-6 py-3.5 text-sm font-medium text-foreground transition-all duration-300 hover:gap-4 hover:shadow-xl"
              >
                Explore properties
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                href="/landlord-dashboard/add-property"
                className="inline-flex items-center gap-3 rounded-full border border-primary-foreground/30 px-6 py-3.5 text-sm font-medium transition-colors duration-300 hover:bg-primary-foreground/10"
              >
                List your property
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
