import { useEffect, useState } from 'react'
import { company, phoneHref, slides } from '../data/site'
import { Icon } from './ui'

const AUTO_MS = 6000

export default function Hero() {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)

  // Auto-advance; the timer restarts on every slide change, including manual ones.
  useEffect(() => {
    if (paused) return
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return
    const t = setTimeout(() => setCurrent((i) => (i + 1) % slides.length), AUTO_MS)
    return () => clearTimeout(t)
  }, [current, paused])

  const go = (i) => setCurrent((i + slides.length) % slides.length)

  return (
    <section
      id="home"
      className="hero"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="hero-bg" aria-hidden="true">
        {slides.map((s, i) => (
          <div
            key={s.image}
            className={`hero-img ${i === current ? 'is-active' : ''}`}
            style={{ backgroundImage: `url(${s.image})` }}
          />
        ))}
        <div className="hero-shade" />
        <div className="hero-grid-lines" />
      </div>

      <div className="container hero-inner">
        <div className="hero-copy">
          <span className="hero-kicker">
            <span className="dot" /> Construction &amp; Remodeling · {company.city}, {company.state}
          </span>

          <h1 className="hero-title">
            <span className="hero-brand">{company.name}</span>
            Quality Construction &amp; Remodeling <em>You Can Trust</em>
          </h1>

          <p className="hero-lead">
            We provide reliable, high-quality construction and remodeling services for homes and businesses. From
            small updates to full renovations, we bring your vision to life with precision, transparency, and care.
          </p>

          <div className="hero-ctas">
            <a href={phoneHref} className="btn btn--accent btn--lg">
              <Icon name="Phone" size={18} /> Call {company.phone}
            </a>
            <a href="#contact" className="btn btn--ghost btn--lg">
              Get a free estimate <Icon name="ArrowRight" size={18} />
            </a>
          </div>
        </div>

        <div className="hero-slider" aria-label="Recent work">
          <div className="hero-slider-top">
            <span className="hero-counter">
              <b>{String(current + 1).padStart(2, '0')}</b> / {String(slides.length).padStart(2, '0')}
            </span>
            <span className="hero-label" key={current}>{slides[current].label}</span>
            <span className="hero-arrows">
              <button type="button" onClick={() => go(current - 1)} aria-label="Previous slide">
                <Icon name="ChevronLeft" size={18} />
              </button>
              <button type="button" onClick={() => go(current + 1)} aria-label="Next slide">
                <Icon name="ChevronRight" size={18} />
              </button>
            </span>
          </div>
          <div className="hero-thumbs">
            {slides.map((s, i) => (
              <button
                type="button"
                key={s.image}
                className={`hero-thumb ${i === current ? 'is-active' : ''}`}
                onClick={() => go(i)}
                aria-label={`Show slide ${i + 1}: ${s.label}`}
                aria-current={i === current}
              >
                <img src={s.image} alt={s.alt} width="320" height="220" />
                <span
                  className="hero-thumb-bar"
                  key={i === current ? `run-${current}` : 'idle'}
                  style={{ animationDuration: `${AUTO_MS}ms`, animationPlayState: paused ? 'paused' : 'running' }}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
