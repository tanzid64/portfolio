import { useState, type FormEvent } from 'react'
import data from '../../data/portfolio.json'
import { Mail, Phone, MapPin, Send } from 'lucide-react'

export default function Contact() {
  const { contact, social } = data
  const [sent, setSent] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    // Replace this with a real form submission handler (e.g. fetch to a serverless function)
    setSent(true)
  }

  return (
    <section id="contact" className="px-4 py-20">
      <div className="page-wrap">
        {/* Section header */}
        <div className="mb-14 text-center">
          <p className="island-kicker mb-3">Get In Touch</p>
          <h2 className="display-title text-4xl font-bold text-[var(--sea-ink)] sm:text-5xl">
            {contact.heading}
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-[linear-gradient(90deg,var(--lagoon),#7ed3bf)]" />
          <p className="mx-auto mt-5 max-w-lg text-base text-[var(--sea-ink-soft)]">
            {contact.subheading}
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2">
          {/* Contact info */}
          <div className="space-y-6">
            <ContactInfo icon={<Mail size={18} />} label="Email" value={contact.email} href={`mailto:${contact.email}`} />
            <ContactInfo icon={<Phone size={18} />} label="Phone" value={contact.phone} href={`tel:${contact.phone}`} />
            <ContactInfo icon={<MapPin size={18} />} label="Location" value={contact.location} />

            {/* Social links */}
            <div className="pt-4">
              <p className="mb-4 text-sm font-semibold text-[var(--sea-ink)]">Find me on</p>
              <div className="flex gap-3">
                {social.map((s) => (
                  <a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="rounded-xl border border-[var(--chip-line)] bg-[var(--chip-bg)] px-4 py-2 text-sm font-medium text-[var(--sea-ink-soft)] no-underline shadow-sm transition hover:-translate-y-0.5 hover:text-[var(--lagoon-deep)]"
                  >
                    {s.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="island-shell rounded-2xl p-6 sm:p-8">
            {sent ? (
              <div className="flex flex-col items-center justify-center gap-4 py-10 text-center">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[rgba(79,184,178,0.12)] text-[var(--lagoon-deep)]">
                  <Send size={28} />
                </span>
                <p className="text-lg font-semibold text-[var(--sea-ink)]">Message sent!</p>
                <p className="text-sm text-[var(--sea-ink-soft)]">
                  Thanks for reaching out. I'll get back to you soon.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-2 text-sm font-medium text-[var(--lagoon-deep)] underline-offset-2 hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <FormField id="cf-name" label="Your Name" type="text" placeholder="Jane Doe" required />
                <FormField id="cf-email" label="Email Address" type="email" placeholder="jane@example.com" required />
                <div>
                  <label
                    htmlFor="cf-message"
                    className="mb-1.5 block text-sm font-medium text-[var(--sea-ink)]"
                  >
                    Message <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    id="cf-message"
                    name="message"
                    rows={5}
                    required
                    placeholder="Tell me about your project…"
                    className="w-full resize-none rounded-xl border border-[var(--line)] bg-[var(--surface)] px-4 py-3 text-sm text-[var(--sea-ink)] placeholder:text-[var(--sea-ink-soft)] outline-none transition focus:border-[var(--lagoon-deep)] focus:ring-2 focus:ring-[rgba(50,143,151,0.2)]"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[var(--lagoon-deep)] py-3 text-sm font-semibold text-white shadow-[0_4px_18px_rgba(50,143,151,0.3)] transition hover:-translate-y-0.5 hover:bg-[#246f76]"
                >
                  <Send size={15} />
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

function ContactInfo({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode
  label: string
  value: string
  href?: string
}) {
  const content = (
    <div className="flex items-center gap-4">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[rgba(79,184,178,0.1)] text-[var(--lagoon-deep)]">
        {icon}
      </span>
      <div>
        <p className="text-xs text-[var(--sea-ink-soft)]">{label}</p>
        <p className="text-sm font-medium text-[var(--sea-ink)]">{value}</p>
      </div>
    </div>
  )

  if (href) {
    return (
      <a href={href} className="block no-underline transition hover:opacity-80">
        {content}
      </a>
    )
  }
  return <div>{content}</div>
}

function FormField({
  id,
  label,
  type,
  placeholder,
  required,
}: {
  id: string
  label: string
  type: string
  placeholder: string
  required?: boolean
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-[var(--sea-ink)]">
        {label} {required && <span className="text-red-400">*</span>}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-[var(--line)] bg-[var(--surface)] px-4 py-2.5 text-sm text-[var(--sea-ink)] placeholder:text-[var(--sea-ink-soft)] outline-none transition focus:border-[var(--lagoon-deep)] focus:ring-2 focus:ring-[rgba(50,143,151,0.2)]"
      />
    </div>
  )
}
