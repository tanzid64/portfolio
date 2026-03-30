import data from '../data/portfolio.json'

export default function Footer() {
  const year = new Date().getFullYear()
  const { personal, social, navigation } = data

  return (
    <footer className="mt-20 border-t border-[var(--line)] px-4 pb-14 pt-10 text-[var(--sea-ink-soft)]">
      <div className="page-wrap">
        {/* Top row */}
        <div className="flex flex-col items-center gap-8 text-center sm:flex-row sm:items-start sm:justify-between sm:text-left">
          {/* Brand */}
          <div className="max-w-xs">
            <p className="mb-2 text-base font-semibold text-[var(--sea-ink)]">{personal.fullName}</p>
            <p className="text-sm leading-6">{personal.tagline}</p>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer navigation">
            <p className="island-kicker mb-3">Navigation</p>
            <ul className="space-y-2 text-sm">
              {navigation.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="text-[var(--sea-ink-soft)] no-underline transition hover:text-[var(--sea-ink)]">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social */}
          <div>
            <p className="island-kicker mb-3">Connect</p>
            <div className="flex justify-center gap-3 sm:justify-start">
              {social.map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.name}
                  className="rounded-xl border border-[var(--chip-line)] bg-[var(--chip-bg)] p-2 text-[var(--sea-ink-soft)] no-underline transition hover:-translate-y-0.5 hover:text-[var(--lagoon-deep)]"
                >
                  <SocialIcon name={s.icon} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-10 border-t border-[var(--line)] pt-6 text-center text-xs">
          &copy; {year} {personal.fullName}. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

function SocialIcon({ name }: { name: string }) {
  if (name === 'github') {
    return (
      <svg viewBox="0 0 16 16" aria-hidden="true" width="20" height="20">
        <path
          fill="currentColor"
          d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
        />
      </svg>
    )
  }
  if (name === 'linkedin') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" width="20" height="20">
        <path
          fill="currentColor"
          d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
        />
      </svg>
    )
  }
  if (name === 'twitter') {
    return (
      <svg viewBox="0 0 16 16" aria-hidden="true" width="20" height="20">
        <path
          fill="currentColor"
          d="M12.6 1h2.2L10 6.48 15.64 15h-4.41L7.78 9.82 3.23 15H1l5.14-5.84L.72 1h4.52l3.12 4.73L12.6 1zm-.77 12.67h1.22L4.57 2.26H3.26l8.57 11.41z"
        />
      </svg>
    )
  }
  return null
}
