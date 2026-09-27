"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { ProjectImage } from "@/content/projects";

const CYCLE_MS = 2800;

/**
 * An auto-cycling, Ken-Burns-zooming stack of a project's own imagery --
 * built from real project photos (no stock/fabricated video), designed to
 * read as "alive" the way a GIF or muted video loop would. Freezes on the
 * first frame for prefers-reduced-motion.
 */
export function LivingCover({
  images,
  alt = "",
  sizes,
  priority = false,
  offset = 0,
  className,
}: {
  images: ProjectImage[];
  alt?: string;
  sizes: string;
  priority?: boolean;
  offset?: number;
  className?: string;
}) {
  const [active, setActive] = useState(0);
  const reduceMotion = useRef(false);

  useEffect(() => {
    reduceMotion.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion.current || images.length < 2) return;

    const startDelay = (offset % images.length) * (CYCLE_MS / images.length);
    let interval: ReturnType<typeof setInterval>;
    const timeout = setTimeout(() => {
      setActive((offset % images.length));
      interval = setInterval(() => {
        setActive((i) => (i + 1) % images.length);
      }, CYCLE_MS);
    }, startDelay);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [images.length, offset]);

  return (
    <div className={className ? `relative overflow-hidden ${className}` : "relative overflow-hidden"}>
      {images.map((img, i) => (
        <div
          key={img.src}
          aria-hidden={i !== active}
          className="absolute inset-0 transition-opacity ease-in-out"
          style={{
            opacity: i === active ? 1 : 0,
            transitionDuration: "900ms",
          }}
        >
          <div
            className="absolute inset-0 motion-safe:animate-[kenburns_14s_ease-in-out_infinite_alternate]"
            style={{ animationDelay: `${(i % 3) * -3.5}s` }}
          >
            <Image
              src={img.src}
              alt={i === 0 ? alt : ""}
              fill
              sizes={sizes}
              className="object-cover"
              priority={priority && i === 0}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
