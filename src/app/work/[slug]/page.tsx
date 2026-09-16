import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects, projectImages, getProject } from "@/content/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/work/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function CaseStudyPage({ params }: PageProps<"/work/[slug]">) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const images = projectImages(slug);
  const cover = images[0];
  const gallery = images.slice(1);

  const index = projects.findIndex((p) => p.slug === slug);
  const prev = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];

  return (
    <article>
      <header className="bg-ink text-bone">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
          <p className="text-xs uppercase tracking-wider text-amber">{project.category}</p>
          <h1 className="mt-3 font-display text-4xl font-bold sm:text-6xl">{project.title}</h1>
          <dl className="mt-8 flex flex-wrap gap-x-10 gap-y-3 text-sm">
            <div>
              <dt className="text-bone/50">Client</dt>
              <dd>{project.client}</dd>
            </div>
            <div>
              <dt className="text-bone/50">Year</dt>
              <dd>{project.year}</dd>
            </div>
            {project.tools && (
              <div>
                <dt className="text-bone/50">Tools</dt>
                <dd>{project.tools.join(", ")}</dd>
              </div>
            )}
          </dl>
        </div>
      </header>

      {cover && (
        <div className="relative aspect-[16/10] w-full sm:aspect-[16/8]">
          <Image
            src={cover.src}
            alt={`${project.title} — cover image`}
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
        </div>
      )}

      <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
        {project.challenge && (
          <section className="mb-12">
            <h2 className="font-display text-sm font-bold uppercase tracking-wider text-ink/50">Challenge</h2>
            <p className="mt-3 text-lg leading-relaxed">{project.challenge}</p>
          </section>
        )}
        {project.approach && (
          <section className="mb-12">
            <h2 className="font-display text-sm font-bold uppercase tracking-wider text-ink/50">Approach</h2>
            <p className="mt-3 text-lg leading-relaxed">{project.approach}</p>
          </section>
        )}
        {!project.challenge && (
          <section className="mb-12">
            <p className="text-lg leading-relaxed">{project.summary}</p>
          </section>
        )}
      </div>

      {gallery.length > 0 && (
        <div className="mx-auto max-w-6xl px-6 pb-16 sm:pb-24">
          <div className="grid gap-6 sm:grid-cols-2">
            {gallery.map((img, i) => (
              <div key={img.src} className="relative aspect-[4/3] overflow-hidden bg-ink-soft">
                <Image
                  src={img.src}
                  alt={`${project.title} — detail ${i + 2}`}
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {project.outcome && (
        <div className="border-t border-line-light bg-bone-soft">
          <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
            <h2 className="font-display text-sm font-bold uppercase tracking-wider text-ink/50">Outcome</h2>
            <p className="mt-3 text-lg leading-relaxed">{project.outcome}</p>
          </div>
        </div>
      )}

      <div className="border-t border-line-light">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-16 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex gap-8 text-sm">
            <Link href={`/work/${prev.slug}`} className="hover:text-amber">
              &larr; {prev.title}
            </Link>
            <Link href={`/work/${next.slug}`} className="hover:text-amber">
              {next.title} &rarr;
            </Link>
          </div>
          <Link
            href="/contact"
            className="inline-block bg-ink px-6 py-3 text-center font-display text-sm font-bold uppercase tracking-wider text-bone hover:bg-ink-soft"
          >
            Start a project like this
          </Link>
        </div>
      </div>
    </article>
  );
}
