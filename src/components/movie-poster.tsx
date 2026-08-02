'use client';

import { useState } from 'react';

interface MoviePosterProps {
  src: string;
  alt: string;
  className?: string;
  fallbackClassName?: string;
}

const FALLBACK_IMAGE = 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=800&q=80';

export function MoviePoster({
  src,
  alt,
  className,
  fallbackClassName,
}: MoviePosterProps) {
  const [errored, setErrored] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(src);

  if (!src || src === 'N/A' || errored) {
    return (
      <img
        src={currentSrc || FALLBACK_IMAGE}
        alt={alt}
        className={className}
        loading="lazy"
        onError={() => setCurrentSrc(FALLBACK_IMAGE)}
      />
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading="lazy"
      onError={() => {
        setErrored(true);
        setCurrentSrc(FALLBACK_IMAGE);
      }}
    />
  );
}
