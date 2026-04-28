import type { Project } from "@/data/portfolio";

const typeConfig = {
  work: {
    label: "Work Experience",
    color: "bg-violet-50 text-violet-700 border-violet-200",
  },
  academic: {
    label: "Academic Project",
    color: "bg-sky-50 text-sky-700 border-sky-200",
  },
  opensource: {
    label: "Open Source",
    color: "bg-emerald-50 text-emerald-700 border-emerald-200",
  },
} as const;

export default function ProjectCard({ project }: { project: Project }) {
  const hasImage = !!project.image;
  const type =
    typeConfig[project.type as keyof typeof typeConfig] ?? typeConfig.work;

  return (
    <article
      className="group relative flex flex-col bg-white rounded-2xl border border-gray-200/80 overflow-hidden
                 transition-all duration-300 ease-out
                 hover:-translate-y-1.5 hover:border-gray-300 hover:shadow-[0_12px_40px_-8px_rgba(0,0,0,0.12),0_4px_16px_-4px_rgba(0,0,0,0.06)]"
    >
      {/* Subtle top-edge accent that slides in on hover */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-violet-500 via-sky-500 to-emerald-500
                   opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
      />

      {/* Image area — fixed height so any aspect ratio looks consistent */}
      {hasImage ? (
        <div className="relative h-[450px] shrink-0 overflow-hidden bg-gray-100">
          <img
            src={project.image}
            alt={project.title}
            className="absolute inset-0 w-full h-full object-cover
                       transition-transform duration-500 ease-out group-hover:scale-[1.04]"
          />
          {/* Gradient fade at bottom for smooth transition into card body */}
          <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-transparent" />
        </div>
      ) : null}

      {/* Card body */}
      <div className="flex-1 flex flex-col p-5">
        {/* Type badge */}
        <div className="mb-3">
          <span
            className={`inline-block text-[10px] uppercase tracking-[0.08em] font-semibold px-2 py-0.5 rounded-full border ${type.color}`}
          >
            {type.label}
          </span>
        </div>

        {/* Title + Company */}
        <h3 className="text-base font-bold text-gray-900 leading-snug mb-0.5 group-hover:text-gray-700 transition-colors duration-200">
          {project.title}
        </h3>
        {project.company && (
          <p className="text-xs font-medium text-gray-400 mb-2 tracking-wide">
            {project.company}
          </p>
        )}

        {/* Description */}
        <p className="text-sm text-gray-500 leading-relaxed line-clamp-3 mb-4">
          {project.longDescription || project.description}
        </p>

        {/* Footer */}
        <div className="mt-auto space-y-3">
          {/* Tags */}
          {project.tags.length > 0 && (
            <div className="flex flex-wrap gap-x-2 gap-y-1">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] text-gray-400 font-medium"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}

          {/* Link */}
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-gray-700
                         border border-gray-200 rounded-lg px-3 py-1.5 bg-gray-50
                         hover:bg-gray-900 hover:text-white hover:border-gray-900
                         transition-all duration-200 ease-out group/link w-fit"
            >
              Projekt ansehen
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="none"
                className="w-3.5 h-3.5 transition-transform duration-200 group-hover/link:translate-x-0.5"
              >
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
