import { useState } from 'react'
import { services } from '../data/constants'

function Services() {
  const [openService, setOpenService] = useState(null)

  const toggleService = (index) => {
    setOpenService(openService === index ? null : index)
  }

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-header">
          <span className="section-icon">🛠</span>
          <h2 className="section-title">Our Services</h2>
        </div>
        <p className="services-intro">
          We offer full-service construction and remodeling, including:
        </p>
        <div className="services-accordion">
          {services.map((service, index) => (
            <div key={index} className="service-item">
              <button
                className={`service-header ${openService === index ? 'active' : ''}`}
                onClick={() => toggleService(index)}
                aria-expanded={openService === index}
              >
                <span className="service-title">{service.title}</span>
                <span className="service-toggle">{openService === index ? '−' : '+'}</span>
              </button>
              {openService === index && (
                <div className="service-content">
                  <p>{service.description}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        <p className="services-note">
          If you don't see your project listed — just ask!
        </p>
      </div>
    </section>
  )
}

export default Services
