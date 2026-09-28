import Link from "next/link";
import { site } from "@/content/site";
import { AvailabilityBadge } from "./AvailabilityBadge";

export function Footer() {
  return (
    <footer className="border-t border-line-dark bg-ink text-bone">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 sm:grid-cols-2 md:grid-cols-4">
        <div className="sm:col-span-2 md:col-span-1">
          <p className="font-display text-2xl font-bold">{site.name}</p>
          <p className="mt-2 text-sm text-bone/70">{site.tagline}</p>
          <AvailabilityBadge className="mt-4 text-bone/70" />
        </div>

        <div>
          <p className="text-xs uppercase tracking-wider text-bone/50">Navigate</p>
          <ul className="mt-4 space-y-2">
            {site.nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm hover:text-amber">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs uppercase tracking-wider text-bone/50">Contact</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-amber">
                {site.email}
              </a>
            </li>
            {site.phones.map((phone) => (
              <li key={phone.href}>
                <a href={phone.href} className="hover:text-amber">
                  {phone.number}
                </a>
              </li>
            ))}
            <li className="text-bone/70">{site.location}</li>
          </ul>
        </div>

        <div>
          <p className="text-xs uppercase tracking-wider text-bone/50">Studio practice of</p>
          <p className="mt-4 text-sm">Yuka Gliday</p>
        </div>
      </div>

      <div className="border-t border-line-dark px-6 py-6 text-center text-xs text-bone/50">
        &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
      </div>
    </footer>
  );
}
