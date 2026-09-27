import Link from "next/link";
import type { Project, ProjectImage } from "@/content/projects";
import { LivingCover } from "./LivingCover";

export function ProjectCard({
  project,
  images,
  index = 0,
}: {
  project: Project;
  images: ProjectImage[];
  index?: number;
}) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="group block"
      aria-label={`View case study: ${project.title}`}
    >
      <LivingCover
        images={images}
        offset={index}
        priority={index < 2}
        sizes="(min-width: 1024px) 50vw, 100vw"
        className="aspect-[16/11] bg-ink-soft"
      />
      <div className="mt-3 flex items-baseline justify-between gap-4">
        <div>
          <h3 className="font-display text-xl font-bold leading-tight sm:text-2xl">{project.title}</h3>
          <p className="text-sm text-ink/60">
            {project.client} &middot; {project.year}
          </p>
        </div>
        <span className="shrink-0 text-xs uppercase tracking-wider text-ink/50">{project.category}</span>
      </div>
    </Link>
  );
}
