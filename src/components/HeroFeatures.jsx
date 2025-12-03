import { features } from '../data/constants'

function HeroFeatures() {
  return (
    <div className="hero-features-section">
      <div className="container">
        <div className="hero-features">
          {features.map((feature, index) => (
            <div key={index} className="feature-item">
              <span className="feature-icon">✅</span>
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default HeroFeatures
