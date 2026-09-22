import Link from "next/link";
import {
  ArrowUpRight,
  Building2,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

const EXPLORE_LINKS = [
  { label: "Properties", href: "/properties" },
  { label: "About Nestora", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

const SOCIALS = [
  {
    label: "Facebook",
    href: "https://facebook.com",
    icon: FaFacebookF,
  },
  {
    label: "Instagram",
    href: "https://instagram.com",
    icon: FaInstagram,
  },
  {
    label: "X",
    href: "https://x.com",
    icon: FaXTwitter,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: FaLinkedinIn,
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Main footer */}
        <div className="grid grid-cols-1 gap-12 py-16 md:grid-cols-[1.6fr_1fr_1.2fr] lg:py-20">

          {/* Brand */}
          <div className="max-w-md">
            <Link
              href="/"
              className="group inline-flex items-center gap-2.5"
            >
              <span className="flex size-9 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-sm transition-transform duration-300 group-hover:-translate-y-0.5">
                <Building2 className="size-4.5" />
              </span>

              <span className="font-heading text-xl font-semibold tracking-tight text-foreground">
                Nestora
              </span>
            </Link>

            <p className="mt-6 max-w-sm text-sm leading-7 text-muted-foreground">
              A simpler way to find a place you can call home — connecting
              tenants and landlords directly with clarity and confidence.
            </p>

            {/* Socials */}
            <div className="mt-7 flex items-center gap-2.5">
              {SOCIALS.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex size-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-primary/5 hover:text-primary"
                >
                  <Icon className="size-3.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Explore */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-foreground">
              Explore
            </p>

            <ul className="mt-6 space-y-4">
              {EXPLORE_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors duration-300 hover:text-foreground"
                  >
                    {link.label}
                    <ArrowUpRight className="size-3 opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-foreground">
              Get in touch
            </p>

            <div className="mt-6 space-y-5">

              <a
                href="mailto:support@nestora.com"
                className="group flex items-start gap-3"
              >
                <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-lg bg-secondary text-muted-foreground transition-colors duration-300 group-hover:bg-primary/10 group-hover:text-primary">
                  <Mail className="size-3.5" />
                </span>

                <span>
                  <span className="block text-xs text-muted-foreground">
                    Email
                  </span>
                  <span className="mt-1 block text-sm text-foreground transition-colors group-hover:text-primary">
                    support@nestora.com
                  </span>
                </span>
              </a>

              <a
                href="tel:+8801122334455"
                className="group flex items-start gap-3"
              >
                <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-lg bg-secondary text-muted-foreground transition-colors duration-300 group-hover:bg-primary/10 group-hover:text-primary">
                  <Phone className="size-3.5" />
                </span>

                <span>
                  <span className="block text-xs text-muted-foreground">
                    Phone
                  </span>
                  <span className="mt-1 block text-sm text-foreground transition-colors group-hover:text-primary">
                    +880 1122334455
                  </span>
                </span>
              </a>

              <div className="flex items-start gap-3">
                <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-lg bg-secondary text-muted-foreground">
                  <MapPin className="size-3.5" />
                </span>

                <span>
                  <span className="block text-xs text-muted-foreground">
                    Location
                  </span>
                  <span className="mt-1 block text-sm text-foreground">
                    Dhaka, Bangladesh
                  </span>
                </span>
              </div>

            </div>
          </div>
        </div>

        {/* CTA strip */}
        <div className="mb-10 overflow-hidden rounded-2xl border border-border bg-secondary/40 px-6 py-7 sm:px-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-heading text-base font-medium text-foreground">
                Looking for your next place?
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Explore verified properties on Nestora.
              </p>
            </div>

            <Link
              href="/properties"
              className="group inline-flex w-fit items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
            >
              Browse properties
              <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col gap-4 border-t border-border py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Nestora. All rights reserved.
          </p>

          <div className="flex items-center gap-5">
            <Link
              href="/privacy"
              className="text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              Terms of Service
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
