"use client";

import { useState } from "react";
import Image from "next/image";

type ClientLogoProps = {
  readonly name: string;
  readonly logo?: string;
  readonly sizes?: string;
};

const IGNORED_WORDS = new Set(["&", "de", "of", "the", "y"]);

export const getInitials = (name: string): string => {
  const words = name
    .split(/[\s.,/&+-]+/)
    .filter((word) => word.length > 0 && !IGNORED_WORDS.has(word.toLowerCase()));

  if (words.length === 0) return "?";
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase();

  return words
    .slice(0, 2)
    .map((word) => word.charAt(0).toUpperCase())
    .join("");
};

/**
 * Renders a client logo over a white plate. Falls back to a typographic
 * monogram when no logo is available or the file fails to load, so the grid
 * never shows a broken image.
 */
export default function ClientLogo({ name, logo, sizes = "160px" }: ClientLogoProps) {
  const [hasFailed, setHasFailed] = useState(false);
  const showMonogram = !logo || hasFailed;

  if (showMonogram) {
    return (
      <div
        className="flex h-full w-full items-center justify-center select-none"
        aria-label={name}
        role="img"
      >
        <span className="font-heading text-3xl font-black tracking-tight text-brand-navy/25">
          {getInitials(name)}
        </span>
      </div>
    );
  }

  return (
    <Image
      src={logo}
      alt={`Logotipo de ${name}`}
      fill
      sizes={sizes}
      onError={() => setHasFailed(true)}
      className="object-contain p-1"
    />
  );
}
