// Structured data (schema.org JSON-LD) built from the same content the page shows,
// so Google sees exactly what visitors see. Injected into index.html at build time.
import { company, faq, serviceArea, services, siteUrl } from './data/site'

const abs = (path) => new URL(path, siteUrl).href
const digits = company.phone.replace(/\D/g, '')

export function buildSchema() {
  const business = {
    '@type': 'GeneralContractor',
    '@id': `${siteUrl}#business`,
    name: company.name,
    description:
      'Construction and remodeling contractor in Lakewood, NJ: kitchen and bathroom renovation, basement finishing, flooring, drywall and painting, framing and carpentry, doors and windows, decks and commercial remodeling.',
    url: siteUrl,
    telephone: `+1-${digits.slice(0, 3)}-${digits.slice(3, 6)}-${digits.slice(6)}`,
    email: company.email,
    image: abs('og-image.jpg'),
    logo: abs('icon-512.png'),
    founder: { '@type': 'Person', name: company.owner },
    slogan: 'Quality Construction & Remodeling You Can Trust',
    priceRange: '$$',
    currenciesAccepted: 'USD',
    address: {
      '@type': 'PostalAddress',
      streetAddress: company.street,
      addressLocality: company.city,
      addressRegion: company.state,
      postalCode: company.zip,
      addressCountry: 'US',
    },
    geo: { '@type': 'GeoCoordinates', latitude: 40.0968, longitude: -74.2177 },
    areaServed: serviceArea.map((name) =>
      name.endsWith('County')
        ? { '@type': 'AdministrativeArea', name: `${name}, NJ` }
        : { '@type': 'City', name: `${name}, NJ` },
    ),
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '08:00',
      closes: '18:00',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Construction & Remodeling Services',
      itemListElement: services.map((s) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: s.title,
          description: s.text,
          serviceType: s.title,
          provider: { '@id': `${siteUrl}#business` },
          areaServed: { '@type': 'State', name: 'New Jersey' },
        },
      })),
    },
  }

  const website = {
    '@type': 'WebSite',
    '@id': `${siteUrl}#website`,
    url: siteUrl,
    name: company.name,
    inLanguage: 'en-US',
    publisher: { '@id': `${siteUrl}#business` },
  }

  const faqPage = {
    '@type': 'FAQPage',
    '@id': `${siteUrl}#faq`,
    mainEntity: faq.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  return { '@context': 'https://schema.org', '@graph': [business, website, faqPage] }
}
