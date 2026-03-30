import data from '../../data/portfolio.json'
import { CheckCircle } from 'lucide-react'

export default function About() {
  const { personal, about } = data

  return (
    <section id="about" className="px-4 py-20">
      <div className="page-wrap">
        {/* Section header */}
        <div className="mb-14 text-center">
          <p className="island-kicker mb-3">Get To Know Me</p>
          <h2 className="display-title text-4xl font-bold text-[var(--sea-ink)] sm:text-5xl">
            About Me
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-[linear-gradient(90deg,var(--lagoon),#7ed3bf)]" />
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Avatar / visual side */}
          <div className="flex justify-center">
            <div className="island-shell relative flex h-72 w-72 items-center justify-center rounded-3xl sm:h-80 sm:w-80">
              <div className="absolute -inset-3 rounded-3xl border border-[rgba(79,184,178,0.2)] bg-[rgba(79,184,178,0.05)]" />
              <span className="relative text-8xl font-bold text-[var(--lagoon-deep)]">
                {personal.firstName.charAt(0)}
              </span>
            </div>
          </div>

          {/* Text side */}
          <div>
            <h3 className="mb-4 text-2xl font-bold text-[var(--sea-ink)]">
              {personal.title}
            </h3>
            <p className="mb-6 text-base leading-8 text-[var(--sea-ink-soft)]">
              {about.description}
            </p>

            {/* Highlights */}
            <ul className="mb-8 space-y-3">
              {about.highlights.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-[var(--sea-ink-soft)]">
                  <CheckCircle size={16} className="mt-0.5 shrink-0 text-[var(--lagoon-deep)]" />
                  {item}
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className="inline-block rounded-full bg-[var(--lagoon-deep)] px-6 py-3 text-sm font-semibold text-white no-underline shadow-[0_4px_18px_rgba(50,143,151,0.3)] transition hover:-translate-y-0.5 hover:bg-[#246f76]"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {about.stats.map((stat) => (
            <div
              key={stat.label}
              className="island-shell rounded-2xl p-6 text-center"
            >
              <p className="display-title text-3xl font-bold text-[var(--lagoon-deep)]">
                {stat.value}
              </p>
              <p className="mt-1 text-xs text-[var(--sea-ink-soft)]">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
