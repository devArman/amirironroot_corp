import { contactInfo } from '../data/constants'

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Contact Us</h2>
        <div className="contact-info">
          <div className="contact-item">
            <strong>Owner:</strong> {contactInfo.owner}
          </div>
          <div className="contact-item">
            <strong>Address:</strong> {contactInfo.address}
          </div>
          <div className="contact-item">
            <strong>Phone:</strong>{' '}
            <a href={`tel:${contactInfo.phone}`}>
              {contactInfo.phone}
            </a>
          </div>
        </div>
        <a href={`tel:${contactInfo.phone}`} className="cta-button">Call for a Free Estimate</a>
      </div>
    </section>
  )
}

export default Contact
