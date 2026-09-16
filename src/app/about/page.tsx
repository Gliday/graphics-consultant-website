import type { Metadata } from "next";
import Image from "next/image";
import { bio, experience, additionalHighlights, tools } from "@/content/about";
import { AvailabilityBadge } from "@/components/AvailabilityBadge";
import { projectImages } from "@/content/projects";

export const metadata: Metadata = {
  title: "About",
  description: "Yuka Gliday is a multidisciplinary creative designer specialising in UX/UI, branding and graphic design.",
};

const logofolioImage = projectImages("logofolio")[0];

export default function AboutPage() {
  return (
    <div>
      <div className="bg-ink text-bone">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
          <AvailabilityBadge className="text-bone/70" />
          <h1 className="mt-4 font-display text-4xl font-bold sm:text-6xl">About Yuka</h1>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
        <p className="text-xl leading-relaxed">{bio.intro}</p>
        {bio.body.map((p) => (
          <p key={p} className="mt-6 leading-relaxed text-ink/80">
            {p}
          </p>
        ))}
      </div>

      <div className="border-t border-line-light bg-bone-soft">
        <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
          <h2 className="font-display text-2xl font-bold">Experience</h2>
          <ol className="mt-8 space-y-10">
            {experience.map((entry) => (
              <li key={`${entry.role}-${entry.org}`} className="border-l-2 border-amber pl-6">
                <p className="text-xs uppercase tracking-wider text-ink/50">{entry.period}</p>
                <h3 className="mt-1 font-display text-lg font-bold">{entry.role}</h3>
                <p className="text-ink/70">{entry.org}</p>
                {entry.description && <p className="mt-2 text-sm text-ink/70">{entry.description}</p>}
              </li>
            ))}
          </ol>
          <div className="mt-10">
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-ink/50">
              Additional highlights
            </h3>
            <ul className="mt-3 space-y-1 text-sm text-ink/70">
              {additionalHighlights.map((h) => (
                <li key={h}>&bull; {h}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
        <h2 className="font-display text-2xl font-bold">Tools</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {tools.map((tool) => (
            <span key={tool} className="border border-ink/20 px-3 py-1 text-sm">
              {tool}
            </span>
          ))}
        </div>
      </div>

      {logofolioImage && (
        <div className="border-t border-line-light bg-bone-soft">
          <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
            <h2 className="text-center font-display text-2xl font-bold">Selected clients</h2>
            <div className="relative mx-auto mt-8 aspect-[3/2] max-w-4xl">
              <Image
                src={logofolioImage.src}
                alt="A selection of client logos and marks designed by Yuka Gliday"
                fill
                sizes="(min-width: 1024px) 900px, 100vw"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
