import { useEffect, useRef, useState } from 'react'
import {
  ArrowRight, ArrowUpRight, BadgeDollarSign, Bath, Building2, CalendarCheck, Check, ChevronDown, ChevronLeft,
  ChevronRight, Circle, Clock, CookingPot, Copy, DoorOpen, Fence, Grid3x3, Hammer, Home, Layers, Mail, MapPin,
  MessageSquare, PaintRoller, Phone, Quote, Ruler, ShieldCheck, Sparkles, User, Wrench,
} from 'lucide-react'

// Explicit map keeps the bundle to the icons we actually use.
const Icons = {
  ArrowRight, ArrowUpRight, BadgeDollarSign, Bath, Building2, CalendarCheck, Check, ChevronDown, ChevronLeft,
  ChevronRight, Circle, Clock, CookingPot, Copy, DoorOpen, Fence, Grid3x3, Hammer, Home, Layers, Mail, MapPin,
  MessageSquare, PaintRoller, Phone, Quote, Ruler, ShieldCheck, Sparkles, User, Wrench,
}

export function Icon({ name, size = 22, ...props }) {
  const Cmp = Icons[name] ?? Circle
  return <Cmp size={size} strokeWidth={1.75} aria-hidden="true" {...props} />
}

// Adds .is-visible once the element scrolls into view.
export function Reveal({ as = 'div', className = '', delay = 0, children, ...rest }) {
  const Tag = as
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          io.disconnect()
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`}
      style={{ '--delay': `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  )
}

export function SectionHead({ index, eyebrow, title, text, align = 'left' }) {
  return (
    <Reveal className={`section-head section-head--${align}`}>
      <span className="eyebrow">
        {index && <b>{index}</b>}
        {eyebrow}
      </span>
      <h2 className="section-title">{title}</h2>
      {text && <p className="section-text">{text}</p>}
    </Reveal>
  )
}
