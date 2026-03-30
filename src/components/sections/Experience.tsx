import data from '../../data/portfolio.json'
import { Briefcase, GraduationCap, MapPin, Calendar } from 'lucide-react'

export default function Experience() {
  const { experience } = data

  return (
    <section id="experience" className="px-4 py-20">
      <div className="page-wrap">
        {/* Section header */}
        <div className="mb-14 text-center">
          <p className="island-kicker mb-3">My Journey</p>
          <h2 className="display-title text-4xl font-bold text-[var(--sea-ink)] sm:text-5xl">
            Experience
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-[linear-gradient(90deg,var(--lagoon),#7ed3bf)]" />
        </div>

        {/* Timeline */}
        <div className="relative mx-auto max-w-2xl">
          {/* Vertical line */}
          <div className="absolute left-5 top-0 h-full w-0.5 bg-[linear-gradient(to_bottom,transparent,var(--lagoon),transparent)] sm:left-1/2 sm:-translate-x-px" />

          <div className="space-y-10">
            {experience.map((item, index) => (
              <div
                key={item.id}
                className={`relative flex gap-6 sm:gap-10 ${
                  index % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
                }`}
              >
                {/* Dot */}
                <div className="absolute left-5 top-5 z-10 flex h-3 w-3 -translate-x-1/2 items-center justify-center sm:left-1/2">
                  <span className="h-3 w-3 rounded-full border-2 border-[var(--lagoon-deep)] bg-[var(--bg-base)]" />
                </div>

                {/* Card – always on the right on mobile, alternating on desktop */}
                <div className="island-shell ml-12 flex-1 rounded-2xl p-6 sm:ml-0 sm:max-w-[calc(50%-2rem)]">
                  {/* Type badge */}
                  <span className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-[rgba(79,184,178,0.1)] px-3 py-1 text-xs font-semibold text-[var(--lagoon-deep)]">
                    {item.type === 'work' ? (
                      <Briefcase size={12} aria-hidden />
                    ) : (
                      <GraduationCap size={12} aria-hidden />
                    )}
                    {item.type === 'work' ? 'Work' : 'Education'}
                  </span>

                  <h3 className="mb-1 text-base font-semibold text-[var(--sea-ink)]">
                    {item.role}
                  </h3>
                  <p className="mb-2 text-sm font-medium text-[var(--lagoon-deep)]">
                    {item.company}
                  </p>

                  <div className="mb-3 flex flex-wrap gap-3 text-xs text-[var(--sea-ink-soft)]">
                    <span className="inline-flex items-center gap-1">
                      <Calendar size={11} aria-hidden />
                      {item.period}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <MapPin size={11} aria-hidden />
                      {item.location}
                    </span>
                  </div>

                  <p className="mb-4 text-sm leading-6 text-[var(--sea-ink-soft)]">
                    {item.description}
                  </p>

                  <ul className="space-y-1.5">
                    {item.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2 text-xs text-[var(--sea-ink-soft)]">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--lagoon)]" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
