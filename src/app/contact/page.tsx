import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch to start a project with Yuka Gliday.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto grid max-w-6xl gap-16 px-6 py-20 sm:py-28 lg:grid-cols-[1fr_1.2fr]">
      <div>
        <h1 className="font-display text-4xl font-bold sm:text-5xl">Let&rsquo;s talk</h1>
        <p className="mt-4 text-ink/70">
          Tell me a bit about your project and I&rsquo;ll get back to you with next steps and a clear quote.
        </p>
        <dl className="mt-10 space-y-4 text-sm">
          <div>
            <dt className="uppercase tracking-wider text-ink/50">Email</dt>
            <dd>
              <a href={`mailto:${site.email}`} className="hover:text-amber">
                {site.email}
              </a>
            </dd>
          </div>
          <div>
            <dt className="uppercase tracking-wider text-ink/50">Phone</dt>
            <dd>
              <a href={site.phoneHref} className="hover:text-amber">
                {site.phone}
              </a>
            </dd>
          </div>
          <div>
            <dt className="uppercase tracking-wider text-ink/50">Based in</dt>
            <dd>{site.location}</dd>
          </div>
        </dl>
      </div>
      <ContactForm />
    </div>
  );
}
