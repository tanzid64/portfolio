import data from '../../data/portfolio.json'
import { Monitor, Server, Database, Wrench } from 'lucide-react'

const iconMap: Record<string, React.ReactNode> = {
  monitor:  <Monitor  size={22} aria-hidden />,
  server:   <Server   size={22} aria-hidden />,
  database: <Database size={22} aria-hidden />,
  wrench:   <Wrench   size={22} aria-hidden />,
}

export default function Skills() {
  const { skills } = data

  return (
    <section id="skills" className="px-4 py-20">
      <div className="page-wrap">
        {/* Section header */}
        <div className="mb-14 text-center">
          <p className="island-kicker mb-3">What I Know</p>
          <h2 className="display-title text-4xl font-bold text-[var(--sea-ink)] sm:text-5xl">
            My Skills
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-[linear-gradient(90deg,var(--lagoon),#7ed3bf)]" />
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((group) => (
            <div
              key={group.category}
              className="island-shell feature-card rounded-2xl p-6 transition hover:-translate-y-1"
            >
              {/* Icon + category */}
              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[rgba(79,184,178,0.12)] text-[var(--lagoon-deep)]">
                  {iconMap[group.icon] ?? null}
                </span>
                <h3 className="text-base font-semibold text-[var(--sea-ink)]">
                  {group.category}
                </h3>
              </div>

              {/* Skill pills */}
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-[rgba(50,143,151,0.25)] bg-[rgba(79,184,178,0.08)] px-3 py-1 text-xs font-medium text-[var(--lagoon-deep)]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
