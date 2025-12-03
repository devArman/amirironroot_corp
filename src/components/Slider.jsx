import { useState, useEffect } from 'react'
import { sliderImages } from '../data/constants'

function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)
    return () => clearInterval(interval)
  }, [currentSlide])

  const goToSlide = (index) => {
    if (index === currentSlide || isTransitioning) return
    setIsTransitioning(true)
    setCurrentSlide(index)
    setTimeout(() => setIsTransitioning(false), 600)
  }

  const nextSlide = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentSlide((prev) => (prev + 1) % sliderImages.length)
    setTimeout(() => setIsTransitioning(false), 600)
  }

  const prevSlide = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentSlide((prev) => (prev - 1 + sliderImages.length) % sliderImages.length)
    setTimeout(() => setIsTransitioning(false), 600)
  }

  return (
    <section id="home" className="hero-slider-section">
      <div className="hero-slider-container">
        {/* Main Slide */}
        <div className="hero-main-slide">
          {sliderImages.map((image, index) => (
            <div
              key={index}
              className={`hero-slide ${index === currentSlide ? 'active' : ''} ${index < currentSlide ? 'prev' : 'next'}`}
              style={{ backgroundImage: `url(${image.url})` }}
            >
              <div className="hero-slide-overlay"></div>
              <div className="hero-slide-content">
                <div className="hero-content-wrapper">
                  <h1 className="hero-main-title">Quality Construction & Remodeling You Can Trust</h1>
                  <p className="hero-main-subtitle">
                    We provide reliable, high-quality construction and remodeling services for homes and businesses.
                    From small updates to full renovations, we bring your vision to life with precision, transparency, and care.
                  </p>
                  <a href="tel:848-313-3778" className="hero-cta-btn">
                    <span>Call today for a free estimate!</span>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M4 10H16M16 10L12 6M16 10L12 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button 
          className="hero-nav-btn hero-nav-prev" 
          onClick={prevSlide}
          aria-label="Previous slide"
          disabled={isTransitioning}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <button 
          className="hero-nav-btn hero-nav-next" 
          onClick={nextSlide}
          aria-label="Next slide"
          disabled={isTransitioning}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        {/* Thumbnail Navigation */}
        <div className="hero-thumbnails">
          {sliderImages.map((image, index) => (
            <div
              key={index}
              className={`hero-thumbnail ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              style={{ backgroundImage: `url(${image.url})` }}
            >
              <div className="hero-thumbnail-overlay"></div>
              <div className="hero-thumbnail-number">{index + 1}</div>
            </div>
          ))}
        </div>

        {/* Progress Bar */}
        <div className="hero-progress-bar">
          <div 
            className="hero-progress-fill"
            style={{ 
              width: `${((currentSlide + 1) / sliderImages.length) * 100}%`,
              transition: 'width 0.3s ease'
            }}
          ></div>
        </div>
      </div>
    </section>
  )
}

export default Slider
