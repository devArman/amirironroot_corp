import { useEffect, useState } from 'react'
import { company, phoneHref } from '../data/site'
import { Icon } from './ui'

const links = [
  ['about', 'About'],
  ['services', 'Services'],
  ['process', 'Process'],
  ['projects', 'Projects'],
  ['faq', 'FAQ'],
  ['contact', 'Contact'],
]

export function Logo() {
  return (
    <span className="logo">
      <svg viewBox="0 0 40 40" className="logo-mark" aria-hidden="true">
        <rect width="40" height="40" rx="9" fill="var(--accent)" />
        {/* I-beam over a root line: "iron" + "root" */}
        <path d="M11 11h18M11 19.5h18M20 11v8.5" stroke="var(--on-accent)" strokeWidth="3" strokeLinecap="square" />
        <path d="M20 19.5v5.5M20 25l-6 5M20 25l6 5M20 25v6" stroke="var(--on-accent)" strokeWidth="2.2" strokeLinecap="round" />
      </svg>
      <span className="logo-text">
        AMIRIRONROOT <small>CORP</small>
      </span>
    </span>
  )
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.classList.toggle('menu-open', open)
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className={`header ${scrolled ? 'is-scrolled' : ''} ${open ? 'is-open' : ''}`}>
      <div className="container header-row">
        <a href="#home" className="logo-link" aria-label={`${company.name} home`} onClick={() => setOpen(false)}>
          <Logo />
        </a>

        <nav className="nav" aria-label="Main">
          {links.map(([id, label]) => (
            <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
          <a href={phoneHref} className="btn btn--sm btn--accent nav-call">
            <Icon name="Phone" size={16} /> {company.phone}
          </a>
        </nav>

        <a href={phoneHref} className="header-call" aria-label={`Call ${company.phone}`}>
          <Icon name="Phone" size={18} />
        </a>
        <button
          className="burger"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}
