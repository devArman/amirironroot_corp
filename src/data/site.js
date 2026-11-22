// All page content lives here: components and the JSON-LD (src/seo.js) both read from it.
const img = (id) => `${import.meta.env.BASE_URL}images/photo-${id}.jpg`

export const siteUrl = 'https://www.amirironroot.com/'

export const company = {
  name: 'AMIRIRONROOT CORP',
  owner: 'Farrukh Ismativ',
  street: '139 E Kennedy Blvd Apt 17',
  city: 'Lakewood',
  state: 'NJ',
  zip: '08701',
  phone: '848-313-3778',
  email: 'info@amirironroot.com',
  hours: 'Mon–Sat · 8:00\u00a0AM\u00a0–\u00a06:00\u00a0PM',
  goal: 'Do the job right, on time, and within budget.',
}

export const phoneHref = `tel:+1${company.phone.replace(/\D/g, '')}`
export const smsHref = `sms:+1${company.phone.replace(/\D/g, '')}`
export const mailHref = `mailto:${company.email}`

// Hero slider — kept from the original site, now with real project photography.
export const slides = [
  { image: img('1600585154340-be6161a56a0c'), label: 'New construction', alt: 'Modern two-story home with large windows at dusk' },
  { image: img('1565183928294-7063f23ce0f8'), label: 'Kitchen renovation', alt: 'Renovated kitchen with white cabinets and a dark island' },
  { image: img('1584622650111-993a426fbf0a'), label: 'Bathroom remodeling', alt: 'Remodeled bathroom with glass shower and vanity' },
  { image: img('1600607687939-ce8a6c25118c'), label: 'Home remodeling', alt: 'Open living room with wood wall paneling after a remodel' },
  { image: img('1773430272653-375174373c4f'), label: 'Decks & framing', alt: 'Crew framing a new wooden deck behind a house' },
]

export const features = [
  { icon: 'ShieldCheck', title: 'Licensed & Insured', text: 'Fully covered on every job' },
  { icon: 'BadgeDollarSign', title: 'Honest Pricing', text: 'Clear quotes, no surprises' },
  { icon: 'CalendarCheck', title: 'On-Time Completion', text: 'We keep the schedule' },
  { icon: 'Sparkles', title: 'Clean & Professional', text: 'Tidy site, every day' },
]

// First six carry a photo; the rest render as compact tiles.
export const services = [
  {
    icon: 'CookingPot',
    title: 'Kitchen Renovation',
    text: 'Full kitchen remodeling including cabinets, countertops, flooring, and appliances.',
    image: img('1609347744403-2306e8a9ae27'),
    alt: 'Bright renovated kitchen with a marble island and wood stools',
  },
  {
    icon: 'Bath',
    title: 'Bathroom Renovation',
    text: 'Bathroom remodeling with modern fixtures, tiling, plumbing, and lighting.',
    image: img('1584622650111-993a426fbf0a'),
    alt: 'Modern bathroom with walk-in glass shower',
  },
  {
    icon: 'Layers',
    title: 'Basement Finishing',
    text: 'Transform your basement into a functional living space with proper insulation and finishing.',
    image: img('1646592491963-07ff7e7c31f7'),
    alt: 'Finished basement with built-in desk and wood floors',
  },
  {
    icon: 'Grid3x3',
    title: 'Flooring Installation',
    text: 'Tile, hardwood, and laminate flooring installation for any room in your home.',
    image: img('1624574470112-46944be68409'),
    alt: 'Installer laying new flooring in an empty room',
  },
  {
    icon: 'Fence',
    title: 'Decks & Outdoor Structures',
    text: 'Custom deck building and outdoor structure construction for your backyard.',
    image: img('1574120583586-de8847ae992c'),
    alt: 'Wooden deck with railings along a house',
  },
  {
    icon: 'Hammer',
    title: 'Framing & Carpentry',
    text: 'Custom framing and carpentry work for new construction and renovations.',
    image: img('1773430272653-375174373c4f'),
    alt: 'Carpenters framing a deck structure',
  },
  { icon: 'Home', title: 'Home Remodeling', text: 'Complete home transformation services to update and modernize your living space.' },
  { icon: 'PaintRoller', title: 'Drywall & Painting', text: 'Professional drywall installation, repair, and interior/exterior painting services.' },
  { icon: 'DoorOpen', title: 'Doors & Windows Installation', text: 'Expert installation of doors and windows to improve energy efficiency and aesthetics.' },
  { icon: 'Wrench', title: 'General Repairs & Maintenance', text: 'Reliable repair and maintenance services to keep your property in top condition.' },
  { icon: 'Building2', title: 'Commercial Remodeling', text: 'Commercial space remodeling and renovation for businesses and offices.' },
]

export const about = {
  images: [
    { src: img('1772442198624-4fc4d7281e89'), alt: 'Contractor reviewing blueprints on site' },
    { src: img('1517581177682-a085bb7ffb15'), alt: 'Interior renovation in progress with exposed brick' },
  ],
  points: ['Residential & light commercial', 'Free on-site estimates', 'Licensed & insured in New Jersey', 'Based in Lakewood, NJ'],
}

export const steps = [
  { title: 'Call for a free estimate', text: 'Tell us about your project. We answer questions on the spot and set a time to visit.' },
  { title: 'On-site visit & clear quote', text: 'We measure, listen and recommend smart options — then give you a written quote you can understand.' },
  { title: 'We build it right', text: 'Skilled work on a schedule you can plan around, with a clean and safe job site every day.' },
  { title: 'Final walkthrough', text: 'We walk the finished work together and don’t call it done until you’re happy with it.' },
]

export const gallery = [
  { src: img('1600566753086-00f18fb6b3ea'), alt: 'Open-plan living room with floating staircase' },
  { src: img('1600566753190-17f0baa2a6c3'), alt: 'Modern home exterior with timber cladding' },
  { src: img('1565183928294-7063f23ce0f8'), alt: 'Kitchen with island and stainless steel appliances' },
  { src: img('1595844730298-b960ff98fee0'), alt: 'Contractor with tool belt on a job site' },
]

export const serviceArea = [
  'Lakewood', 'Toms River', 'Jackson', 'Howell', 'Brick', 'Freehold',
  'Manchester', 'Point Pleasant', 'Wall', 'Ocean County', 'Monmouth County',
]

export const faq = [
  {
    q: 'Do you offer free estimates?',
    a: 'Yes. Call 848-313-3778 and we’ll schedule a free, no-obligation visit to look at your project and give you a clear written quote.',
  },
  {
    q: 'Are you licensed and insured?',
    a: 'Yes. AMIRIRONROOT CORP is a licensed and insured construction and remodeling contractor based in Lakewood, New Jersey.',
  },
  {
    q: 'What areas do you serve?',
    a: 'We’re based in Lakewood, NJ and work across Ocean and Monmouth counties, including Toms River, Jackson, Howell, Brick, Freehold and nearby towns.',
  },
  {
    q: 'Do you take on small jobs and repairs?',
    a: 'Yes. Along with full kitchen, bathroom and basement renovations we handle drywall, painting, doors, windows and general repairs and maintenance.',
  },
  {
    q: 'Do you work on commercial properties?',
    a: 'Yes. We remodel offices, stores and other commercial spaces in addition to residential homes.',
  },
]
