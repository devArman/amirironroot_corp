import { useState } from 'react'
import {
  about, company, faq, features, gallery, mailHref, phoneHref, serviceArea, services, smsHref, steps,
} from '../data/site'
import { Icon, Reveal, SectionHead } from './ui'

const pad = (n) => String(n).padStart(2, '0')

export function Features() {
  return (
    <section className="features" aria-label="Why choose us">
      <div className="container features-grid">
        {features.map((f, i) => (
          <Reveal key={f.title} className="feature" delay={i * 80}>
            <span className="feature-icon"><Icon name={f.icon} size={20} /></span>
            <span>
              <strong>{f.title}</strong>
              <small>{f.text}</small>
            </span>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

export function About() {
  return (
    <section id="about" className="section about">
      <div className="container about-grid">
        <div className="about-media">
          <Reveal className="about-img about-img--a">
            <img src={about.images[0].src} alt={about.images[0].alt} loading="lazy" width="900" height="1100" />
          </Reveal>
          <Reveal className="about-img about-img--b" delay={120}>
            <img src={about.images[1].src} alt={about.images[1].alt} loading="lazy" width="900" height="700" />
          </Reveal>
          <Reveal className="about-badge" delay={220}>
            <Icon name="Ruler" size={20} />
            <span>Measured twice.<br />Built once.</span>
          </Reveal>
        </div>

        <div className="about-copy">
          <SectionHead
            index="01"
            eyebrow="About us"
            title={<>Strong workmanship, <em>straight answers</em></>}
          />
          <Reveal className="about-text">
            <p>
              <strong>{company.name}</strong> is a professional construction and remodeling company dedicated to
              delivering strong workmanship and excellent customer service. With years of hands-on experience, we
              specialize in residential and light commercial projects.
            </p>
            <blockquote className="about-goal">
              <span>Our goal is simple:</span> {company.goal}
            </blockquote>
            <p>
              We work closely with every client to understand their needs, offer smart solutions, and deliver results
              that last.
            </p>
            <ul className="about-points">
              {about.points.map((p) => (
                <li key={p}><Icon name="Check" size={16} /> {p}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export function Services() {
  const featured = services.filter((s) => s.image)
  const compact = services.filter((s) => !s.image)
  return (
    <section id="services" className="section services">
      <div className="container">
        <SectionHead
          index="02"
          eyebrow="Our services"
          title={<>Full-service construction <em>&amp; remodeling</em></>}
          text="From a single repair to a complete renovation — one accountable team, start to finish."
        />

        <div className="svc-grid">
          {featured.map((s, i) => (
            <Reveal as="article" key={s.title} delay={(i % 3) * 90} className="svc-card">
              <div className="svc-media">
                <img src={s.image} alt={s.alt} loading="lazy" width="900" height="650" />
              </div>
              <div className="svc-body">
                <span className="svc-num">{pad(i + 1)}</span>
                <h3><Icon name={s.icon} size={20} /> {s.title}</h3>
                <p>{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="svc-list">
          {compact.map((s, i) => (
            <Reveal as="article" key={s.title} delay={(i % 3) * 80} className="svc-tile">
              <span className="svc-tile-icon"><Icon name={s.icon} size={22} /></span>
              <div>
                <h3><span className="svc-num">{pad(featured.length + i + 1)}</span>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            </Reveal>
          ))}
          <Reveal className="svc-tile svc-tile--cta" delay={160}>
            <p>If you don’t see your project listed — <strong>just ask!</strong></p>
            <a href={phoneHref} className="btn btn--accent btn--sm">
              <Icon name="Phone" size={16} /> {company.phone}
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export function Process() {
  return (
    <section id="process" className="section process">
      <div className="container">
        <SectionHead
          index="03"
          eyebrow="How we work"
          title={<>Simple, from the <em>first call</em></>}
          text="No runaround and no pressure. Here’s what working with us looks like."
          align="center"
        />
        <ol className="steps">
          {steps.map((s, i) => (
            <Reveal as="li" key={s.title} delay={i * 100} className="step">
              <span className="step-num">{pad(i + 1)}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}

export function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="container">
        <SectionHead
          index="04"
          eyebrow="Projects"
          title={<>Built to <em>last</em></>}
          text="Kitchens, baths, basements, decks and full remodels across Ocean and Monmouth counties."
        />
        <div className="gallery">
          {gallery.map((g, i) => (
            <Reveal key={g.src} delay={i * 80} className={`gallery-item gallery-item--${i}`}>
              <img src={g.src} alt={g.alt} loading="lazy" width="1200" height="900" />
            </Reveal>
          ))}
          <Reveal delay={200} className="gallery-quote">
            <Icon name="Quote" size={26} />
            <p>{company.goal}</p>
            <span>— {company.owner}, owner</span>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export function Area() {
  return (
    <section className="section area">
      <div className="container area-grid">
        <SectionHead
          index="05"
          eyebrow="Service area"
          title={<>Serving <em>Lakewood</em> &amp; the Jersey Shore</>}
          text={`Based in ${company.city}, ${company.state}. Not sure we cover your town? Just call — we’ll tell you right away.`}
        />
        <Reveal className="chips">
          {serviceArea.map((t) => (
            <span key={t} className="chip"><Icon name="MapPin" size={14} /> {t}</span>
          ))}
        </Reveal>
      </div>
      <div className="container">
        <Reveal className="area-seo">
          <h3>Construction &amp; remodeling contractor near you in New Jersey</h3>
          <p>
            {company.name} is a local general contractor in {company.city}, {company.state}. We handle{' '}
            <strong>kitchen remodeling</strong>, <strong>bathroom renovation</strong>,{' '}
            <strong>basement finishing</strong>, <strong>home remodeling</strong> and additions,{' '}
            <strong>drywall</strong> and <strong>interior &amp; exterior painting</strong>,{' '}
            <strong>tile, hardwood and laminate flooring</strong>, <strong>framing and carpentry</strong>,{' '}
            <strong>door and window installation</strong>, <strong>deck building</strong>, general{' '}
            <strong>home repairs</strong> and <strong>commercial remodeling</strong>.
          </p>
          <p>
            We work with homeowners, landlords and businesses in {serviceArea.slice(0, -2).join(', ')} and across Ocean
            County and Monmouth County, NJ. Looking for a licensed remodeling contractor near you? Call{' '}
            <a href={phoneHref}>{company.phone}</a> for a free estimate.
          </p>
        </Reveal>
      </div>
    </section>
  )
}

export function Faq() {
  const [open, setOpen] = useState(0)
  return (
    <section id="faq" className="section faq">
      <div className="container faq-grid">
        <SectionHead
          index="06"
          eyebrow="FAQ"
          title="Questions, answered"
          text="Don’t see yours? Call or text — you’ll talk to a real person."
        />
        <div className="faq-list">
          {faq.map((f, i) => {
            const isOpen = open === i
            return (
              <Reveal key={f.q} delay={i * 60} className={`faq-item ${isOpen ? 'is-open' : ''}`}>
                <button
                  className="faq-q"
                  aria-expanded={isOpen}
                  aria-controls={`faq-a-${i}`}
                  onClick={() => setOpen(isOpen ? -1 : i)}
                >
                  {f.q}
                  <Icon name="ChevronDown" size={20} />
                </button>
                <div className="faq-a" id={`faq-a-${i}`} role="region">
                  <div><p>{f.a}</p></div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export function Contact() {
  const [copied, setCopied] = useState(false)
  const copyPhone = async () => {
    try {
      await navigator.clipboard.writeText(company.phone)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      /* clipboard unavailable — the number is still selectable text */
    }
  }

  const rows = [
    { icon: 'Phone', label: 'Phone', value: company.phone, href: phoneHref, copy: true },
    { icon: 'Mail', label: 'Email', value: company.email, href: mailHref },
    { icon: 'MapPin', label: 'Address', value: `${company.street}, ${company.city}, ${company.state} ${company.zip}` },
    { icon: 'Clock', label: 'Hours', value: company.hours },
    { icon: 'User', label: 'Owner', value: company.owner },
  ]

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="contact-card">
          <Reveal className="contact-copy">
            <span className="eyebrow"><b>07</b>Free estimate</span>
            <h2 className="section-title">Ready to start your <em>project?</em></h2>
            <p className="section-text">
              Call or text us and we’ll schedule a free, no-obligation estimate. Clear quote, honest advice, clean work.
            </p>
            <div className="contact-ctas">
              <a href={phoneHref} className="btn btn--accent btn--lg">
                <Icon name="Phone" size={18} /> Call for a free estimate
              </a>
              <a href={smsHref} className="btn btn--ghost btn--lg">
                <Icon name="MessageSquare" size={18} /> Text us
              </a>
            </div>
          </Reveal>

          <Reveal as="address" delay={120} className="contact-info">
            <h3>Contact {company.name}</h3>
            <ul>
              {rows.map((r) => (
                <li key={r.label}>
                  <span className="contact-icon"><Icon name={r.icon} size={19} /></span>
                  <span className="contact-text">
                    <small>{r.label}</small>
                    {r.href ? <a href={r.href}>{r.value}</a> : <span>{r.value}</span>}
                  </span>
                  {r.copy && (
                    <button type="button" className="copy-btn" onClick={copyPhone} aria-live="polite">
                      <Icon name={copied ? 'Check' : 'Copy'} size={16} />
                      <span className="copy-label">{copied ? 'Copied' : 'Copy'}</span>
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
