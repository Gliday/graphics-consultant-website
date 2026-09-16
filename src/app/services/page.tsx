import type { Metadata } from "next";
import Link from "next/link";
import { services, process } from "@/content/services";

export const metadata: Metadata = {
  title: "Services",
  description: "Branding, art direction, UX/UI and print design services offered by Yuka Gliday.",
};

export default function ServicesPage() {
  return (
    <div>
      <div className="bg-ink text-bone">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
          <h1 className="font-display text-4xl font-bold sm:text-6xl">Services</h1>
          <p className="mt-4 max-w-xl text-bone/75">
            Four disciplines, one point of view. Every project starts with a brief, not a template.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <div className="grid gap-12 sm:grid-cols-2">
          {services.map((service) => (
            <div key={service.title} className="border-t border-ink/15 pt-6">
              <h2 className="font-display text-2xl font-bold">{service.title}</h2>
              <p className="mt-3 text-ink/70">{service.description}</p>
              <ul className="mt-4 space-y-1 text-sm text-ink/60">
                {service.deliverables.map((d) => (
                  <li key={d}>&bull; {d}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-line-light bg-bone-soft">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">How a project runs</h2>
          <ol className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((step, i) => (
              <li key={step.step}>
                <span className="font-display text-3xl font-bold text-amber">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-2 font-display text-lg font-bold">{step.step}</h3>
                <p className="mt-2 text-sm text-ink/70">{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 py-20 text-center sm:py-28">
        <h2 className="font-display text-3xl font-bold sm:text-4xl">Rates depend on scope</h2>
        <p className="mx-auto mt-4 max-w-xl text-ink/70">
          Every brief is different, so pricing is quoted per project rather than off a fixed card &mdash; tell me
          what you&rsquo;re working on and I&rsquo;ll get back to you with a clear estimate.
        </p>
        <Link
          href="/contact"
          className="mt-8 inline-block bg-ink px-8 py-4 font-display text-sm font-bold uppercase tracking-wider text-bone hover:bg-ink-soft"
        >
          Request a quote
        </Link>
      </div>
    </div>
  );
}
