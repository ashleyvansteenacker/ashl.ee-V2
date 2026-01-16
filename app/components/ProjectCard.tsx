'use client';

import Image from 'next/image';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  link: string;
  image?: string;
}

export default function ProjectCard({
  title,
  description,
  tags,
  link,
  image,
}: ProjectCardProps) {
  return (
    <article
      className="
        project-card group relative overflow-hidden rounded-lg
        transition-all duration-300 hover:-translate-y-2
        bg-black/40 backdrop-blur
        border border-white/5
        h-[520px] sm:h-[540px]   /* 👈 fixed, responsive height */
        flex flex-col
      "
    >
      {/* Image / Visual */}
      <div className="relative h-48 shrink-0 overflow-hidden">
        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            className="
              object-cover
              transition-transform duration-500
              group-hover:scale-105
            "
            sizes="(max-width: 768px) 90vw, 33vw"
          />
        ) : (
          <div className="
            h-full flex items-center justify-center
            bg-gradient-to-br from-orange-500/20 to-orange-600/10
          ">
            <i className="fas fa-lightbulb text-[#FF9546] text-4xl"></i>
          </div>
        )}

        {/* External link */}
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View ${title} project`}
          className="
            absolute top-3 right-3 z-10
            text-white/80 hover:text-[#FF9546]
            transition-colors
          "
        >
          <i className="fas fa-external-link-alt"></i>
        </a>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-[#FF9546] transition-colors">
          {title}
        </h3>

        {/* Description grows but is clamped */}
        <p className="text-gray-400 mb-4 leading-relaxed line-clamp-4">
          {description}
        </p>

        {/* Tags pinned to bottom */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="
                px-3 py-1 text-xs font-medium rounded-full
                bg-orange-500/10 text-[#FF9546]
                border border-orange-500/20
              "
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Hover Glow */}
      <div
        className="
          project-glow absolute inset-0
          opacity-0 group-hover:opacity-100
          transition-opacity duration-300
          pointer-events-none
        "
      />
    </article>
  );
}
