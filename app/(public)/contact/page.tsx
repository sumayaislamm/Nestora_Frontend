"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Building2,
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Send,
  ShieldCheck,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
const contactOptions = [
  {
    icon: Mail,
    title: "Email us",
    text: "Have a question or need help? Send us a message.",
    value: "hello@nestora.com",
  },
  {
    icon: MessageCircle,
    title: "General support",
    text: "Questions about properties, rentals, or your account.",
    value: "We are here to help",
  },
  {
    icon: Building2,
    title: "For landlords",
    text: "Want to list your property or learn more about Nestora?",
    value: "List with Nestora",
  },
  {
    icon: Clock3,
    title: "Response time",
    text: "We aim to respond to genuine enquiries as quickly as possible.",
    value: "Within 24–48 hours",
  },
];

const topics = [
  "Finding a property",
  "Listing a property",
  "Rental request",
  "Payment",
];

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  return (
    <main className="overflow-hidden bg-background text-foreground">
      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="relative overflow-hidden border-b border-border">
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="pointer-events-none absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full bg-primary/10 blur-3xl"
        />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.2 }}
          className="pointer-events-none absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-primary/5 blur-3xl"
        />

        <div className="mx-auto grid min-h-[72vh] max-w-7xl items-center gap-16 px-6 py-4 lg:grid-cols-[1fr_0.85fr] lg:px-8">
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
                Contact Nestora
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
              Let&apos;s talk about
              <span className="block text-muted-foreground">
                your next move.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-8 max-w-xl text-base leading-8 text-muted-foreground sm:text-lg"
            >
              Whether you are looking for a home, listing a property, or simply
              have a question, reach out to the Nestora team.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="mt-10"
            >
              <a
                href="#contact-form"
                className="group inline-flex items-center gap-3 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition-all duration-300 hover:gap-4 hover:shadow-lg"
              >
                Send a message
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
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
            className="relative mx-auto w-full max-w-[470px]"
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
              className="relative rounded-[2rem] border border-border bg-background/80 p-5 shadow-2xl backdrop-blur-xl"
            >
              <div className="flex items-center justify-between border-b border-border pb-5">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    Nestora
                  </p>

                  <p className="mt-1 text-lg font-medium">
                    We&apos;re listening
                  </p>
                </div>

                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-border">
                  <MessageCircle className="h-5 w-5" />
                </div>
              </div>

              {/* Message bubbles */}
              <div className="space-y-4 py-7">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                  className="max-w-[80%] rounded-2xl rounded-tl-md bg-muted p-4"
                >
                  <p className="text-sm leading-6">
                    I have a question about a property.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.9, duration: 0.5 }}
                  className="ml-auto max-w-[80%] rounded-2xl rounded-tr-md bg-primary p-4 text-primary-foreground"
                >
                  <p className="text-sm leading-6">
                    We&apos;d be happy to help. Tell us what you need.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.1, duration: 0.5 }}
                  className="max-w-[80%] rounded-2xl rounded-tl-md bg-muted p-4"
                >
                  <p className="text-sm leading-6">
                    Perfect. I&apos;ll send the details now.
                  </p>
                </motion.div>
              </div>

              {/* Status */}
              <div className="flex items-center gap-3 border-t border-border pt-5">
                <motion.span
                  animate={{ scale: [1, 1.15, 1] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="h-2.5 w-2.5 rounded-full bg-emerald-500"
                />

                <span className="text-xs text-muted-foreground">
                  Your message matters
                </span>
              </div>
            </motion.div>

            {/* Floating support badge */}
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                delay: 1.2,
                duration: 0.6,
                ease: "easeOut",
              }}
              className="absolute -right-5 top-[28%] hidden rounded-2xl border border-border bg-background p-4 shadow-xl sm:block"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-muted">
                  <ShieldCheck className="h-4 w-4" />
                </div>

                <div>
                  <p className="text-xs text-muted-foreground">Support</p>

                  <p className="text-sm font-medium">Here to help</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          CONTACT OPTIONS
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
              How can we help?
            </p>

            <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
              Choose the conversation that fits.
            </h2>
          </motion.div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {contactOptions.map((option, index) => {
              const Icon = option.icon;

              return (
                <motion.div
                  key={option.title}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                    ease: "easeOut",
                  }}
                  whileHover={{ y: -7 }}
                  className="group rounded-3xl border border-border p-7 transition-shadow duration-300 hover:shadow-lg"
                >
                  <motion.div
                    whileHover={{ rotate: 8, scale: 1.1 }}
                    transition={{ duration: 0.25 }}
                    className="flex h-11 w-11 items-center justify-center rounded-2xl border border-border"
                  >
                    <Icon className="h-5 w-5" />
                  </motion.div>

                  <h3 className="mt-7 text-xl font-medium">{option.title}</h3>

                  <p className="mt-3 text-sm leading-7 text-muted-foreground">
                    {option.text}
                  </p>

                  <p className="mt-5 text-sm font-medium">{option.value}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          CONTACT FORM
      ====================================================== */}
      <section
        id="contact-form"
        className="border-y border-border bg-muted/20 py-4"
      >
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-[0.7fr_1.3fr] lg:px-8">
          {/* Form intro */}
          <motion.div
            initial={{ opacity: 0, x: -45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Send us a message
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
              Tell us what&apos;s on your mind.
            </h2>

            <p className="mt-6 max-w-md leading-8 text-muted-foreground">
              Give us a few details and we&apos;ll get back to you. The more
              context you provide, the easier it is for us to help.
            </p>

            <div className="mt-10 space-y-5">
              <div className="flex items-start gap-4">
                <MapPin className="mt-1 h-5 w-5 shrink-0" />

                <div>
                  <p className="font-medium">Nestora</p>
                  <p className="mt-1 text-sm leading-6 text-muted-foreground">
                    Connecting tenants and landlords through a simpler rental
                    experience.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="mt-1 h-5 w-5 shrink-0" />

                <div>
                  <p className="font-medium">Email</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    hello@nestora.com
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: 45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="rounded-[2rem] border border-border bg-background p-6 shadow-sm sm:p-8 lg:p-10"
            // onSubmit={(event) => event.preventDefault()}

            // onSubmit={async (event) => {
            //   event.preventDefault();

            //   const form = event.currentTarget;
            //   const formData = new FormData(form);

            //   const payload = {
            //     name: formData.get("name")?.toString().trim(),
            //     email: formData.get("email")?.toString().trim(),
            //     topic: formData.get("topic")?.toString(),
            //     message: formData.get("message")?.toString().trim(),
            //   };

            //   if (
            //     !payload.name ||
            //     !payload.email ||
            //     !payload.topic ||
            //     !payload.message
            //   ) {
            //     alert("Please fill in all fields.");
            //     return;
            //   }

            //   try {
            //     setIsSubmitting(true);

            //     const res = await fetch(
            //       `${process.env.NEXT_PUBLIC_API_URL}/contact`,
            //       {
            //         method: "POST",
            //         headers: {
            //           "Content-Type": "application/json",
            //         },
            //         body: JSON.stringify(payload),
            //       },
            //     );

            //     const result = await res.json();

            //     if (!res.ok || !result.success) {
            //       throw new Error(result.message || "Failed to send message");
            //     }

            //     alert("Your message has been sent successfully!");
            //     form.reset();
            //   } catch (error) {
            //     console.error("Contact form error:", error);
            //     alert("Failed to send your message. Please try again.");
            //   } finally {
            //     setIsSubmitting(false);
            //   }
            // }}

            onSubmit={async (event) => {
              event.preventDefault();

              const form = event.currentTarget;
              const formData = new FormData(form);

              const payload = {
                name: formData.get("name")?.toString().trim(),
                email: formData.get("email")?.toString().trim(),
                topic: formData.get("topic")?.toString(),
                message: formData.get("message")?.toString().trim(),
              };

              if (
                !payload.name ||
                !payload.email ||
                !payload.topic ||
                !payload.message
              ) {
                toast.error("Please complete all fields.", {
                  description:
                    "All fields are required before sending your message.",
                });
                return;
              }

              try {
                setIsSubmitting(true);

                const res = await fetch(
                  `${process.env.NEXT_PUBLIC_API_URL}/contact`,
                  {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify(payload),
                  },
                );

                const result = await res.json();

                if (!res.ok || !result.success) {
                  throw new Error(result.message || "Failed to send message");
                }

                toast.success("Message sent successfully!", {
                  description:
                    "Thank you for reaching out to Nestora. We'll get back to you soon.",
                });

                form.reset();
              } catch (error) {
                console.error("Contact form error:", error);

                toast.error("Unable to send your message.", {
                  description:
                    "Something went wrong. Please try again in a moment.",
                });
              } finally {
                setIsSubmitting(false);
              }
            }}
          >
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="text-sm font-medium">
                  Your name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-all placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/10"
                />
              </div>

              <div>
                <label htmlFor="email" className="text-sm font-medium">
                  Email address
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-all placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/10"
                />
              </div>
            </div>

            <div className="mt-6">
              <label htmlFor="topic" className="text-sm font-medium">
                What can we help with?
              </label>

              <select
                id="topic"
                name="topic"
                defaultValue=""
                className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/10"
              >
                <option value="" disabled>
                  Select a topic
                </option>

                {topics.map((topic) => (
                  <option key={topic} value={topic}>
                    {topic}
                  </option>
                ))}
              </select>
            </div>

            <div className="mt-6">
              <label htmlFor="message" className="text-sm font-medium">
                Message
              </label>

              <textarea
                id="message"
                name="message"
                rows={6}
                placeholder="Tell us how we can help..."
                className="mt-2 w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-all placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/10"
              />
            </div>


            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={isSubmitting}
              className="mt-7 inline-flex items-center gap-3 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition-all duration-300 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSubmitting ? "Sending..." : "Send message"}

              <Send
                className={`h-4 w-4 ${isSubmitting ? "animate-pulse" : ""}`}
              />
            </motion.button>

            <p className="mt-4 text-xs leading-5 text-muted-foreground">
              We&apos;ll review your message and get back to you as soon as
              possible.
            </p>
          </motion.form>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ====================================================== */}
      <section className="px-6 py-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mx-auto max-w-7xl rounded-[2rem] border border-border p-8 sm:p-12 lg:p-20"
        >
          <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
            <div className="max-w-3xl">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
                Still exploring?
              </p>

              <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
                Maybe your next home is already waiting.
              </h2>

              <p className="mt-5 max-w-xl leading-8 text-muted-foreground">
                Browse available properties and discover a simpler way to find
                your next place.
              </p>
            </div>

            <Link
              href="/properties"
              className="group inline-flex shrink-0 items-center gap-3 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition-all duration-300 hover:gap-4 hover:shadow-lg"
            >
              Browse properties
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
