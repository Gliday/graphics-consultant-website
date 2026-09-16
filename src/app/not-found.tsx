import Link from "next/link";
import { GridBackdrop } from "@/components/GridBackdrop";

export default function NotFound() {
  return (
    <div className="relative overflow-hidden bg-ink text-bone">
      <GridBackdrop />
      <div className="relative mx-auto flex min-h-[70vh] max-w-6xl flex-col items-start justify-center px-6 py-28">
        <p className="font-display text-sm uppercase tracking-wider text-amber">404</p>
        <h1 className="mt-4 font-display text-4xl font-bold sm:text-6xl">This grid has a gap.</h1>
        <p className="mt-4 max-w-md text-bone/75">
          The page you&rsquo;re looking for doesn&rsquo;t exist &mdash; or moved. Let&rsquo;s get you back on track.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/"
            className="bg-amber px-6 py-3 font-display text-sm font-bold uppercase tracking-wider text-ink hover:bg-amber-soft"
          >
            Back home
          </Link>
          <Link
            href="/work"
            className="border border-bone/30 px-6 py-3 text-sm font-bold uppercase tracking-wider hover:border-amber hover:text-amber"
          >
            See the work
          </Link>
        </div>
      </div>
    </div>
  );
}
