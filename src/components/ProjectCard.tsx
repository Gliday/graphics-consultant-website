import Image from "next/image";
import Link from "next/link";
import type { Project, ProjectImage } from "@/content/projects";

export function ProjectCard({ project, cover, index = 0 }: { project: Project; cover?: ProjectImage; index?: number }) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="group block"
      aria-label={`View case study: ${project.title}`}
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-ink-soft">
        {cover && (
          <Image
            src={cover.src}
            alt=""
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            priority={index < 3}
          />
        )}
        <div className="absolute inset-x-0 bottom-0 h-px scale-x-0 bg-amber transition-transform duration-300 group-hover:scale-x-100" />
      </div>
      <div className="mt-3 flex items-baseline justify-between gap-4">
        <div>
          <h3 className="font-display text-lg font-bold leading-tight">{project.title}</h3>
          <p className="text-sm text-ink/60">
            {project.client} &middot; {project.year}
          </p>
        </div>
        <span className="shrink-0 text-xs uppercase tracking-wider text-ink/50">{project.category}</span>
      </div>
    </Link>
  );
}
