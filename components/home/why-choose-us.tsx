import { ShieldCheck, HandCoins, MessageCircle, KeyRound } from "lucide-react";

const REASONS = [
  {
    icon: ShieldCheck,
    title: "Every listing is verified",
    description:
      "Landlords confirm ownership before a property goes live, so what you see is what actually exists — no ghost listings, no bait-and-switch.",
  },
  {
    icon: HandCoins,
    title: "No brokerage, ever",
    description:
      "You deal with the landlord directly. Nestora doesn't take a cut of your rent or add hidden agent fees on top of the price you agreed to.",
  },
  {
    icon: KeyRound,
    title: "Move-in ready information",
    description:
      "Rent, deposit, utilities, and house rules are laid out upfront on every listing, so there are no surprises once you've signed.",
  },
  {
    icon: MessageCircle,
    title: "Support that answers back",
    description:
      "Questions about a listing or a payment don't sit in a queue. Our team responds the same day, every day of the week.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="border-b border-border bg-background py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 lg:px-8">
        {/* Sticky headline */}
        <div className="lg:sticky lg:top-24 lg:self-start">
          <span className="text-xs font-medium tracking-wide text-primary uppercase">
            Why Nestora
          </span>
          <h2 className="mt-2 font-heading text-3xl font-medium text-foreground sm:text-4xl">
            Renting should not
            <br />
            feel like a gamble.
          </h2>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
            We built Nestora around the four things tenants told us they
            actually worry about when looking for a place.
          </p>
        </div>

        {/* Feature rows */}
        <ul className="flex flex-col divide-y divide-border border-t border-border">
          {REASONS.map(({ icon: Icon, title, description }) => (
            <li key={title} className="flex gap-5 py-7">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Icon className="size-5" />
              </span>
              <div>
                <h3 className="font-heading text-base font-medium text-foreground">
                  {title}
                </h3>
                <p className="mt-1.5 max-w-md text-sm leading-relaxed text-muted-foreground">
                  {description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}