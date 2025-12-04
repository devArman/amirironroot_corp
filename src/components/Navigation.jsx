import { useState, useEffect } from 'react'

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const handleScrollToSection = (e, id) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    closeMenu()
  }

  // Close menu when clicking on a link
  useEffect(() => {
    const links = document.querySelectorAll('.nav-link')
    links.forEach(link => {
      link.addEventListener('click', closeMenu)
    })
    return () => {
      links.forEach(link => {
        link.removeEventListener('click', closeMenu)
      })
    }
  }, [])

  // Close menu on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (isMenuOpen) {
        setIsMenuOpen(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isMenuOpen])

  return (
    <nav className="navbar" id="navbar">
      <div className="nav-container">
        <a href="#home" className="logo" onClick={(e) => handleScrollToSection(e, 'home')}>AMIRIRONROOT CORP</a>
        
        {/* Hamburger Button */}
        <button 
          className={`mobile-menu-toggle ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Desktop Menu */}
        <ul className={`nav-menu ${isMenuOpen ? 'mobile-open' : ''}`}>
          <li>
            <a href="#home" className="nav-link" onClick={(e) => handleScrollToSection(e, 'home')}>Home</a>
          </li>
          <li>
            <a href="#about" className="nav-link" onClick={(e) => handleScrollToSection(e, 'about')}>About Us</a>
          </li>
          <li>
            <a href="#services" className="nav-link" onClick={(e) => handleScrollToSection(e, 'services')}>Services</a>
          </li>
          <li>
            <a href="#contact" className="nav-link" onClick={(e) => handleScrollToSection(e, 'contact')}>Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navigation
