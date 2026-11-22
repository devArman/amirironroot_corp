import Header from './components/Header'
import Hero from './components/Hero'
import { About, Area, Contact, Faq, Features, Process, Projects, Services } from './components/Sections'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>
      <Header />
      <main id="main">
        <Hero />
        <Features />
        <About />
        <Services />
        <Process />
        <Projects />
        <Area />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
