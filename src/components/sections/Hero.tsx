import data from '../../data/portfolio.json'
import { Github, Linkedin, Twitter, ArrowDown, Download } from 'lucide-react'

const iconMap: Record<string, React.ReactNode> = {
  github:   <Github   size={20} aria-hidden />,
  linkedin: <Linkedin size={20} aria-hidden />,
  twitter:  <Twitter  size={20} aria-hidden />,
}

export default function Hero() {
  const { personal, social } = data

  return (
    <section
      id="home"
      className="relative flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center px-4 py-20 text-center"
    >
      {/* Background blobs */}
      <div className="pointer-events-none absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(79,184,178,0.22),transparent_66%)]" />
      <div className="pointer-events-none absolute -right-32 bottom-1/4 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(47,106,74,0.16),transparent_66%)]" />

      <div className="rise-in relative z-10 max-w-3xl">
        {/* Avatar placeholder */}
        <div className="mx-auto mb-6 flex h-28 w-28 items-center justify-center rounded-full border-2 border-[rgba(79,184,178,0.4)] bg-[linear-gradient(135deg,rgba(79,184,178,0.18),rgba(47,106,74,0.12))] text-4xl font-bold text-[var(--lagoon-deep)] shadow-lg">
          {personal.firstName.charAt(0)}
        </div>

        {/* Greeting */}
        <p className="island-kicker mb-3">Hello, I'm</p>

        {/* Name */}
        <h1 className="display-title mb-4 text-5xl font-bold tracking-tight text-[var(--sea-ink)] sm:text-7xl">
          {personal.fullName}
        </h1>

        {/* Title */}
        <p className="mb-4 text-xl font-semibold text-[var(--lagoon-deep)] sm:text-2xl">
          {personal.title}
        </p>

        {/* Tagline */}
        <p className="mx-auto mb-8 max-w-xl text-base text-[var(--sea-ink-soft)] sm:text-lg">
          {personal.tagline}
        </p>

        {/* CTA Buttons */}
        <div className="mb-10 flex flex-wrap justify-center gap-3">
          <a
            href="#contact"
            className="rounded-full bg-[var(--lagoon-deep)] px-6 py-3 text-sm font-semibold text-white no-underline shadow-[0_4px_18px_rgba(50,143,151,0.35)] transition hover:-translate-y-0.5 hover:bg-[#246f76] hover:shadow-[0_6px_22px_rgba(50,143,151,0.45)]"
          >
            Hire Me
          </a>
          <a
            href={personal.resumeUrl}
            download
            className="inline-flex items-center gap-2 rounded-full border border-[rgba(50,143,151,0.4)] bg-[rgba(79,184,178,0.1)] px-6 py-3 text-sm font-semibold text-[var(--lagoon-deep)] no-underline transition hover:-translate-y-0.5 hover:bg-[rgba(79,184,178,0.2)]"
          >
            <Download size={15} />
            Download CV
          </a>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-3">
          {social.map((s) => (
            <a
              key={s.name}
              href={s.url}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={s.name}
              className="rounded-xl border border-[var(--chip-line)] bg-[var(--chip-bg)] p-2.5 text-[var(--sea-ink-soft)] no-underline shadow-sm transition hover:-translate-y-0.5 hover:border-[rgba(50,143,151,0.4)] hover:text-[var(--lagoon-deep)]"
            >
              {iconMap[s.icon] ?? s.name}
            </a>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-[var(--sea-ink-soft)] no-underline transition hover:text-[var(--lagoon-deep)]"
        aria-label="Scroll to about section"
      >
        <ArrowDown size={22} />
      </a>
    </section>
  )
}
