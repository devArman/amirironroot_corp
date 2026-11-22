import { company, mailHref, phoneHref, smsHref } from '../data/site'
import { Logo } from './Header'
import { Icon } from './ui'

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container footer-grid">
          <div>
            <Logo />
            <p className="footer-slogan">Quality construction &amp; remodeling you can trust.</p>
          </div>
          <div className="footer-col">
            <h4>Contact</h4>
            <a href={phoneHref}><Icon name="Phone" size={16} /> {company.phone}</a>
            <a href={mailHref}><Icon name="Mail" size={16} /> {company.email}</a>
            <span><Icon name="MapPin" size={16} /> {company.city}, {company.state} {company.zip}</span>
            <span><Icon name="Clock" size={16} /> {company.hours}</span>
          </div>
          <div className="footer-col">
            <h4>Explore</h4>
            <a href="#about">About us</a>
            <a href="#services">Services</a>
            <a href="#process">How we work</a>
            <a href="#projects">Projects</a>
            <a href="#faq">FAQ</a>
          </div>
        </div>
        <div className="container footer-bottom">
          <span>© {new Date().getFullYear()} {company.name}. All rights reserved.</span>
          <span>Licensed &amp; Insured · {company.city}, NJ</span>
        </div>
      </footer>

      <div className="mobile-bar">
        <a href={phoneHref} className="btn btn--accent"><Icon name="Phone" size={18} /> Call now</a>
        <a href={smsHref} className="btn btn--ghost"><Icon name="MessageSquare" size={18} /> Text us</a>
      </div>
    </>
  )
}
