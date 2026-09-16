import type { Metadata } from "next";
import { WorkGrid } from "@/components/WorkGrid";

export const metadata: Metadata = {
  title: "Selected Work",
  description: "Branding, campaign, UX/UI and print work by Yuka Gliday.",
};

export default function WorkPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
      <h1 className="font-display text-4xl font-bold sm:text-6xl">Selected Work</h1>
      <p className="mt-4 max-w-xl text-ink/70">
        Branding, art direction, UX/UI and print &mdash; filter by discipline below.
      </p>
      <div className="mt-12">
        <WorkGrid />
      </div>
    </div>
  );
}
