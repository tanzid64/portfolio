import { useState } from 'react'
import data from '../../data/portfolio.json'
import { ExternalLink, Github } from 'lucide-react'

export default function Projects() {
  const { projects } = data
  const [showAll, setShowAll] = useState(false)

  const visible = showAll ? projects : projects.filter((p) => p.featured)

  return (
    <section id="projects" className="px-4 py-20">
      <div className="page-wrap">
        {/* Section header */}
        <div className="mb-14 text-center">
          <p className="island-kicker mb-3">What I've Built</p>
          <h2 className="display-title text-4xl font-bold text-[var(--sea-ink)] sm:text-5xl">
            Projects
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-[linear-gradient(90deg,var(--lagoon),#7ed3bf)]" />
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((project) => (
            <article
              key={project.id}
              className="island-shell feature-card flex flex-col overflow-hidden rounded-2xl transition hover:-translate-y-1"
            >
              {/* Image placeholder */}
              <div className="flex h-44 items-center justify-center bg-[linear-gradient(135deg,rgba(79,184,178,0.12),rgba(47,106,74,0.08))]">
                {project.image ? (
                  <img src={project.image} alt={project.title} className="h-full w-full object-cover" />
                ) : (
                  <span className="text-5xl font-bold text-[rgba(79,184,178,0.3)]">
                    {project.title.charAt(0)}
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-6">
                <h3 className="mb-2 text-lg font-semibold text-[var(--sea-ink)]">
                  {project.title}
                </h3>
                <p className="mb-4 flex-1 text-sm leading-6 text-[var(--sea-ink-soft)]">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="mb-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[rgba(50,143,151,0.25)] bg-[rgba(79,184,178,0.08)] px-2.5 py-0.5 text-xs font-medium text-[var(--lagoon-deep)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--lagoon-deep)] no-underline transition hover:underline"
                  >
                    <ExternalLink size={13} />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--sea-ink-soft)] no-underline transition hover:text-[var(--sea-ink)] hover:underline"
                  >
                    <Github size={13} />
                    Source
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Show more / less toggle */}
        {projects.length > visible.length || showAll ? (
          <div className="mt-10 text-center">
            <button
              onClick={() => setShowAll((prev) => !prev)}
              className="rounded-full border border-[rgba(50,143,151,0.4)] bg-[rgba(79,184,178,0.1)] px-6 py-2.5 text-sm font-semibold text-[var(--lagoon-deep)] transition hover:-translate-y-0.5 hover:bg-[rgba(79,184,178,0.2)]"
            >
              {showAll ? 'Show Less' : `Show All ${projects.length} Projects`}
            </button>
          </div>
        ) : null}
      </div>
    </section>
  )
}
