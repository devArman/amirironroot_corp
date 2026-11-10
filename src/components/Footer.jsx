import { contactInfo } from '../data/constants'

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} AMIRIRONROOT CORP. All rights reserved.</p>
        <p>Licensed & Insured | Lakewood, NJ</p>
        <p>
          <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
        </p>
      </div>
    </footer>
  )
}

export default Footer
