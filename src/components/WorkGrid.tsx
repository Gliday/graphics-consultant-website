"use client";

import { useState } from "react";
import clsx from "clsx";
import { ProjectCard } from "./ProjectCard";
import { categories, projects, projectImages, type Category } from "@/content/projects";

export function WorkGrid() {
  const [active, setActive] = useState<Category | "All">("All");
  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <div>
      <div className="flex flex-wrap gap-3">
        {(["All", ...categories] as const).map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActive(cat)}
            aria-pressed={active === cat}
            className={clsx(
              "border px-4 py-2 text-sm uppercase tracking-wider transition-colors",
              active === cat
                ? "border-ink bg-ink text-bone"
                : "border-ink/20 text-ink/70 hover:border-ink"
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project, i) => (
          <ProjectCard key={project.slug} project={project} cover={projectImages(project.slug)[0]} index={i} />
        ))}
      </div>
    </div>
  );
}
