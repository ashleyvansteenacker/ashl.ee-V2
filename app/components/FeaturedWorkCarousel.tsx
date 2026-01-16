'use client';

import React, { useEffect, useRef } from 'react';
import ProjectCard from '@/app/components/ProjectCard';

type Project = {
  title: string;
  description: string;
  tags: string[];
  link: string;
};

export default function FeaturedWorkCarousel({ projects }: { projects: Project[] }) {
  const scrollerRef = useRef<HTMLDivElement | null>(null);

  const scrollByAmount = (direction: 'left' | 'right') => {
    const el = scrollerRef.current;
    if (!el) return;

    // Scroll by ~90% of the visible width (feels like "one card")
    const amount = Math.round(el.clientWidth * 0.9) * (direction === 'left' ? -1 : 1);
    el.scrollBy({ left: amount, behavior: 'smooth' });
  };

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    // Make mouse wheel scroll horizontally (desktop friendly)
    const onWheel = (e: WheelEvent) => {
      // Only if the user is doing a vertical scroll gesture
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        e.preventDefault();
        el.scrollBy({ left: e.deltaY, behavior: 'auto' });
      }
    };

    el.addEventListener('wheel', onWheel, { passive: false });
    return () => el.removeEventListener('wheel', onWheel);
  }, []);

  return (
    <div className="relative">
      {/* Buttons (desktop friendly) */}
      <button
        type="button"
        onClick={() => scrollByAmount('left')}
        className="
          hidden md:flex items-center justify-center
          absolute left-0 top-1/2 -translate-y-1/2 z-10
          h-10 w-10 rounded-full
          bg-black/40 hover:bg-black/60
          border border-white/10
          text-white
          backdrop-blur
        "
        aria-label="Scroll left"
      >
        ‹
      </button>

      <button
        type="button"
        onClick={() => scrollByAmount('right')}
        className="
          hidden md:flex items-center justify-center
          absolute right-0 top-1/2 -translate-y-1/2 z-10
          h-10 w-10 rounded-full
          bg-black/40 hover:bg-black/60
          border border-white/10
          text-white
          backdrop-blur
        "
        aria-label="Scroll right"
      >
        ›
      </button>

      {/* Carousel */}
      <div className="-mx-6 px-6">
        <div
          ref={scrollerRef}
          className="
            no-scrollbar
            flex gap-6 overflow-x-auto pb-4
            snap-x snap-mandatory
          "
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="
                snap-start
                min-w-[85%]
                sm:min-w-[60%]
                md:min-w-[45%]
                lg:min-w-[32%]
              "
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
