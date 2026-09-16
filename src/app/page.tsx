import Image from "next/image";
import Link from "next/link";
import { GridBackdrop } from "@/components/GridBackdrop";
import { Reveal } from "@/components/Reveal";
import { ProjectCard } from "@/components/ProjectCard";
import { AvailabilityBadge } from "@/components/AvailabilityBadge";
import { projects, projectImages } from "@/content/projects";
import { services } from "@/content/services";
import { site } from "@/content/site";

const featured = projects.filter((p) => p.featured).slice(0, 6);
const logofolioImage = projectImages("logofolio")[0];

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink text-bone">
        <GridBackdrop />
        <div className="relative mx-auto max-w-6xl px-6 py-28 sm:py-36">
          <Reveal>
            <AvailabilityBadge className="text-bone/70" />
          </Reveal>
          <Reveal index={1}>
            <h1 className="mt-6 font-display text-[13vw] font-extrabold leading-[0.92] tracking-tight sm:text-7xl md:text-8xl">
              Design with a
              <br />
              <span className="text-amber">point of view.</span>
            </h1>
          </Reveal>
          <Reveal index={2}>
            <p className="mt-8 max-w-xl text-lg text-bone/80">
              {site.name} is the multidisciplinary design studio of Yuka Gliday &mdash; branding, art direction,
              UX/UI and graphic design for brands who want work that holds up.
            </p>
          </Reveal>
          <Reveal index={3}>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/work"
                className="bg-amber px-6 py-3 font-display text-sm font-bold uppercase tracking-wider text-ink transition-colors hover:bg-amber-soft"
              >
                See the work
              </Link>
              <Link
                href="/contact"
                className="border border-bone/30 px-6 py-3 text-sm font-bold uppercase tracking-wider transition-colors hover:border-amber hover:text-amber"
              >
                Start a project
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <Reveal>
          <div className="flex items-end justify-between gap-4">
            <h2 className="font-display text-3xl font-bold sm:text-4xl">Selected work</h2>
            <Link href="/work" className="text-sm uppercase tracking-wider text-ink/60 hover:text-amber">
              View all &rarr;
            </Link>
          </div>
        </Reveal>
        <div className="mt-10 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((project, i) => (
            <Reveal key={project.slug} index={i}>
              <ProjectCard project={project} cover={projectImages(project.slug)[0]} index={i} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden bg-ink text-bone">
        <GridBackdrop broken={false} />
        <div className="relative mx-auto max-w-6xl px-6 py-20 sm:py-28">
          <Reveal>
            <h2 className="font-display text-3xl font-bold sm:text-4xl">What I do</h2>
          </Reveal>
          <div className="mt-10 grid gap-8 sm:grid-cols-2">
            {services.map((service, i) => (
              <Reveal key={service.title} index={i}>
                <div className="border-t border-line-dark pt-6">
                  <h3 className="font-display text-xl font-bold text-amber">{service.title}</h3>
                  <p className="mt-3 text-bone/75">{service.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal index={4}>
            <Link
              href="/services"
              className="mt-10 inline-block text-sm uppercase tracking-wider text-amber hover:text-amber-soft"
            >
              More on how I work &rarr;
            </Link>
          </Reveal>
        </div>
      </section>

      {logofolioImage && (
        <section className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
          <Reveal>
            <p className="text-center text-xs uppercase tracking-wider text-ink/50">Trusted by</p>
          </Reveal>
          <Reveal index={1}>
            <div className="relative mx-auto mt-8 aspect-[3/2] max-w-4xl">
              <Image
                src={logofolioImage.src}
                alt="A selection of client logos and marks designed by Yuka Gliday"
                fill
                sizes="(min-width: 1024px) 900px, 100vw"
                className="object-contain"
              />
            </div>
          </Reveal>
        </section>
      )}

      <section className="border-t border-line-light bg-bone-soft">
        <div className="mx-auto max-w-6xl px-6 py-24 text-center">
          <Reveal>
            <h2 className="font-display text-3xl font-bold sm:text-5xl">
              Have a brief? Let&rsquo;s make something worth remembering.
            </h2>
          </Reveal>
          <Reveal index={1}>
            <Link
              href="/contact"
              className="mt-8 inline-block bg-ink px-8 py-4 font-display text-sm font-bold uppercase tracking-wider text-bone transition-colors hover:bg-ink-soft"
            >
              Request a quote
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
