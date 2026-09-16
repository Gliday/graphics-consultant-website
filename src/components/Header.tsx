"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import clsx from "clsx";
import { site } from "@/content/site";
import { AvailabilityBadge } from "./AvailabilityBadge";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line-dark bg-ink/95 text-bone backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-display text-xl font-bold tracking-tight" onClick={() => setOpen(false)}>
          {site.name}
          <span className="ml-2 hidden text-xs font-normal text-bone/60 sm:inline">{site.byline}</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={clsx(
                "text-sm uppercase tracking-wider transition-colors hover:text-amber",
                pathname === item.href || pathname.startsWith(item.href + "/")
                  ? "text-amber"
                  : "text-bone"
              )}
            >
              {item.label}
            </Link>
          ))}
          <AvailabilityBadge className="text-bone/70" />
        </nav>

        <button
          type="button"
          className="text-sm uppercase tracking-wider md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open && (
        <nav id="mobile-nav" className="border-t border-line-dark px-6 py-4 md:hidden">
          <ul className="flex flex-col gap-4">
            {site.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-base uppercase tracking-wider"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <AvailabilityBadge className="mt-4 text-bone/70" />
        </nav>
      )}
    </header>
  );
}
