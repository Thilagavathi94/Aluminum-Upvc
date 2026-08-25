// Seed / default data for VETRI. This is what ships on first load,
// and is then copied into localStorage so the admin panel can edit it.

const img = (id, w = 1200, h = 800) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&h=${h}&q=90&fm=webp`

const serviceAsset = (name) => `/assets/services/${name}.png`

export const defaultServices = [
  {
    id: 'svc-1',
    name: 'Aluminium Windows',
    icon: 'window',
    category: 'Home Solutions',
    tagline: 'Strong, stylish & low-maintenance windows.',
    description:
      'Slim aluminium windows for Tamil Nadu homes, built with powder-coated profiles, toughened glass and neat site-finished installation for everyday durability.',
    features: ['Corrosion resistant', 'Slim sightlines', 'Secure locking', 'Custom colours'],
    designs: ['Sliding', 'Casement', 'Fixed', 'Ventilator'],
    benefits: ['Low maintenance', 'Long lifespan', 'Modern home look', 'Easy to clean'],
    image: serviceAsset('south-indian-aluminium-windows'),
    status: 'Published',
  },
  {
    id: 'svc-2',
    name: 'Aluminium Doors',
    icon: 'door',
    category: 'Home Solutions',
    tagline: 'Modern, durable & secure doors.',
    description:
      'Durable aluminium doors for entrances, balconies and utility spaces, designed for smooth use, security and a clean contemporary finish.',
    features: ['Reinforced frame', 'Weather sealed', 'Premium handles', 'Secure locks'],
    designs: ['Hinged', 'Sliding', 'French door', 'Balcony door'],
    benefits: ['High security', 'Smooth daily operation', 'Elegant slim frames', 'Custom sizing'],
    image: serviceAsset('south-indian-aluminium-doors'),
    status: 'Published',
  },
  {
    id: 'svc-3',
    name: 'uPVC Windows',
    icon: 'window',
    category: 'Home Solutions',
    tagline: 'Energy-efficient, weather-resistant windows.',
    description:
      'uPVC window systems made for heat, monsoon and dust protection, with insulated profiles that help keep rooms quieter and cooler.',
    features: ['Thermal insulation', 'Sound dampening', 'UV stable', 'No rust or rot'],
    designs: ['Casement', 'Sliding', 'Tilt & turn', 'Fixed'],
    benefits: ['Lower energy bills', 'Quieter interiors', 'Long-lasting finish', 'Easy to clean'],
    image: serviceAsset('south-indian-upvc-windows-doors'),
    status: 'Published',
  },
  {
    id: 'svc-4',
    name: 'uPVC Doors',
    icon: 'door',
    category: 'Home Solutions',
    tagline: 'Durable doors with excellent insulation.',
    description:
      'Weather-resistant uPVC balcony and utility doors that perform well in coastal and humid conditions while improving insulation.',
    features: ['Weatherproof seal', 'Impact resistant', 'Multi-point lock', 'Fade resistant'],
    designs: ['Sliding', 'Hinged', 'French door', 'Balcony door'],
    benefits: ['Better insulation', 'Minimal upkeep', 'Rust-free performance', 'Smooth operation'],
    image: serviceAsset('south-indian-upvc-windows-doors'),
    status: 'Published',
  },
  {
    id: 'svc-5',
    name: 'Sliding Doors & Windows',
    icon: 'sliding',
    category: 'Home Solutions',
    tagline: 'Space-saving solutions for modern homes.',
    description:
      'Smooth sliding systems for balconies, living rooms and large openings where homeowners need light, ventilation and more usable floor space.',
    features: ['Heavy-duty rollers', 'Slim interlock', 'Mesh track option', 'Large panel support'],
    designs: ['2-track', '3-track', 'Lift & slide', 'Window sliders'],
    benefits: ['Saves floor space', 'Easy movement', 'Wide outdoor views', 'Ideal for balconies'],
    image: serviceAsset('south-indian-aluminium-doors'),
    status: 'Published',
  },
  {
    id: 'svc-6',
    name: 'Kitchen Cabinets',
    icon: 'kitchen',
    category: 'Home Solutions',
    tagline: 'Moisture-resistant aluminium kitchen cabinets.',
    description:
      'Aluminium modular kitchen cabinets that resist moisture, stains and termites, making them practical for daily South Indian cooking.',
    features: ['Water resistant', 'Termite proof', 'Easy-clean panels', 'Custom storage'],
    designs: ['Base cabinets', 'Wall cabinets', 'Loft storage', 'Tall units'],
    benefits: ['Easy maintenance', 'Long-lasting finish', 'Hygienic storage', 'Modern kitchen look'],
    image: serviceAsset('south-indian-aluminium-kitchen-cabinets'),
    status: 'Published',
  },
  {
    id: 'svc-7',
    name: 'Aluminium Wardrobes',
    icon: 'wardrobe',
    category: 'Home Solutions',
    tagline: 'Durable, termite-resistant wardrobe solutions.',
    description:
      'Clean, durable aluminium wardrobe systems for bedrooms and storage areas, with sliding shutters and custom internal layouts.',
    features: ['Termite resistant', 'Moisture resistant', 'Sliding shutters', 'Custom compartments'],
    designs: ['Sliding wardrobe', 'Hinged wardrobe', 'Loft unit', 'Walk-in storage'],
    benefits: ['No wood swelling', 'Long service life', 'Space efficient', 'Easy to wipe clean'],
    image: serviceAsset('south-indian-aluminium-wardrobes'),
    status: 'Published',
  },
  {
    id: 'svc-8',
    name: 'Bathroom Solutions',
    icon: 'bathroom',
    category: 'Home Solutions',
    tagline: 'Windows, ventilators and partitions for bathrooms.',
    description:
      'Moisture-safe uPVC and aluminium bathroom windows, ventilators and glass partitions that keep bathrooms bright, private and easy to maintain.',
    features: ['Frosted glass option', 'Ventilator designs', 'Rust-free frames', 'Shower partitions'],
    designs: ['Top-hung ventilator', 'Sliding window', 'Frosted fixed glass', 'Shower partition'],
    benefits: ['Better ventilation', 'Privacy', 'Moisture resistance', 'Clean finish'],
    image: serviceAsset('south-indian-bathroom-solutions'),
    status: 'Published',
  },
  {
    id: 'svc-9',
    name: 'Mosquito Mesh Windows',
    icon: 'mesh',
    category: 'Home Solutions',
    tagline: 'Fresh air with protection from insects.',
    description:
      'Neatly integrated mosquito mesh systems for aluminium and uPVC windows, ideal for warm evenings and naturally ventilated homes.',
    features: ['Fine mesh screen', 'Sliding mesh track', 'Easy removal', 'Custom sizing'],
    designs: ['Sliding mesh', 'Pleated mesh', 'Fixed mesh', 'Door mesh'],
    benefits: ['Fresh airflow', 'Insect protection', 'Low maintenance', 'Child-friendly comfort'],
    image: serviceAsset('south-indian-mesh-balcony'),
    status: 'Published',
  },
  {
    id: 'svc-10',
    name: 'Glass & Balcony Solutions',
    icon: 'balcony',
    category: 'Home Solutions',
    tagline: 'Glass railings, partitions and balcony enclosures.',
    description:
      'Stylish toughened-glass railings, balcony enclosures and home partitions that add safety without blocking light or views.',
    features: ['Toughened glass', 'Stainless fittings', 'Weather-safe sealing', 'Custom height'],
    designs: ['Glass railing', 'Balcony enclosure', 'Home partition', 'Terrace glass'],
    benefits: ['Clear views', 'Improved safety', 'Premium finish', 'Low maintenance'],
    image: serviceAsset('south-indian-mesh-balcony'),
    status: 'Published',
  },
  {
    id: 'svc-11',
    name: 'Glass Facades',
    icon: 'facade',
    category: 'Commercial Solutions',
    tagline: 'Modern commercial appearance.',
    description:
      'Structural glazing and facade systems for showrooms, offices and commercial buildings that need a professional glass-front elevation.',
    features: ['Structural glazing', 'Performance glass options', 'Custom mullion patterns'],
    designs: ['Spider glazing', 'Stick system', 'Shopfront glazing'],
    benefits: ['Professional frontage', 'Better daylighting', 'Improved thermal performance'],
    image: serviceAsset('south-indian-aluminium-windows'),
    status: 'Published',
  },
  {
    id: 'svc-12',
    name: 'Glass Partitions',
    icon: 'partition',
    category: 'Commercial Solutions',
    tagline: 'Clean office and showroom divisions.',
    description:
      'Framed and frameless glass partitions for offices, clinics and showrooms, installed with clean lines and practical privacy options.',
    features: ['Frameless options', 'Acoustic interlayers', 'Frosted film ready'],
    designs: ['Single glazed', 'Double glazed acoustic', 'Sliding partition'],
    benefits: ['Keeps spaces bright', 'Improves acoustics', 'Fast installation'],
    image: serviceAsset('south-indian-bathroom-solutions'),
    status: 'Published',
  },
  {
    id: 'svc-13',
    name: 'Curtain Walls',
    icon: 'curtain',
    category: 'Commercial Solutions',
    tagline: 'Large-format architectural glazing.',
    description:
      'Curtain wall systems for larger commercial and institutional buildings, planned for daylight, wind load and long-term performance.',
    features: ['Thermal break profiles', 'High wind-load rating', 'Modular installation'],
    designs: ['Unitised', 'Semi-unitised', 'Stick-built'],
    benefits: ['Maximises natural light', 'Engineered for tall structures', 'Consistent facade grid'],
    image: serviceAsset('south-indian-aluminium-windows'),
    status: 'Published',
  },
  {
    id: 'svc-14',
    name: 'Glass Railings',
    icon: 'railing',
    category: 'Commercial Solutions',
    tagline: 'Safe, stylish railing systems.',
    description:
      'Toughened-glass railing systems for staircases, balconies and terraces in homes and commercial spaces.',
    features: ['Toughened safety glass', 'Stainless steel fittings', 'Custom height options'],
    designs: ['Frameless', 'Post-and-rail', 'Standoff mounted'],
    benefits: ['Unobstructed views', 'Safety code alignment', 'Low-maintenance finish'],
    image: serviceAsset('south-indian-mesh-balcony'),
    status: 'Published',
  },
  {
    id: 'svc-15',
    name: 'Skylights',
    icon: 'skylight',
    category: 'Commercial Solutions',
    tagline: 'Natural light for larger spaces.',
    description:
      'Custom skylight systems for courtyards, atriums and larger spaces that need daylight with a watertight finish.',
    features: ['Watertight flashing', 'UV-filtering glass', 'Custom shapes'],
    designs: ['Fixed dome', 'Flat glass', 'Pyramid'],
    benefits: ['Reduces daytime lighting cost', 'Brightens interiors', 'Weatherproof seal'],
    image: serviceAsset('south-indian-bathroom-solutions'),
    status: 'Published',
  },
]

export const defaultProjects = [
  {
    id: 'P001',
    name: 'Modern Villa',
    category: 'Residential',
    location: 'Coimbatore',
    year: '2026',
    client: 'Mr. Raghav',
    area: '4200 Sq.ft',
    products: 'Aluminium Windows, Sliding Doors, Balcony Glass',
    status: 'Completed',
    description:
      'This project showcases a perfect blend of modern design and premium aluminium openings. Large glazed openings, natural light and sleek finishes make this home elegant from every angle.',
    image: serviceAsset('south-indian-aluminium-windows'),
    gallery: [
      serviceAsset('south-indian-aluminium-doors'),
      serviceAsset('south-indian-mesh-balcony'),
      serviceAsset('south-indian-upvc-windows-doors'),
    ],
  },
  {
    id: 'P002',
    name: 'Home Kitchen Upgrade',
    category: 'Residential',
    location: 'Chennai',
    year: '2024',
    client: 'Mrs. Kavitha',
    area: '650 Sq.ft',
    products: 'Kitchen Cabinets, Aluminium Storage',
    status: 'Completed',
    description:
      'A moisture-resistant aluminium kitchen cabinet installation designed for daily cooking, easy cleaning and long-term durability in Chennai humidity.',
    image: serviceAsset('south-indian-aluminium-kitchen-cabinets'),
    gallery: [
      serviceAsset('south-indian-aluminium-kitchen-cabinets'),
      serviceAsset('south-indian-aluminium-wardrobes'),
      serviceAsset('south-indian-bathroom-solutions'),
    ],
  },
  {
    id: 'P003',
    name: 'Luxury Apartment',
    category: 'Residential',
    location: 'Bangalore',
    year: '2024',
    client: 'Mrs. Anitha Reddy',
    area: '3100 Sq.ft',
    products: 'uPVC Windows, Sliding Doors',
    status: 'Completed',
    description:
      'Energy-efficient uPVC windows keep this high-rise apartment quiet and comfortable, with slim sightlines that preserve the skyline views.',
    image: serviceAsset('south-indian-upvc-windows-doors'),
    gallery: [
      serviceAsset('south-indian-upvc-windows-doors'),
      serviceAsset('south-indian-mesh-balcony'),
      serviceAsset('south-indian-aluminium-doors'),
    ],
  },
  {
    id: 'P004',
    name: 'Bedroom Wardrobe System',
    category: 'Residential',
    location: 'Madurai',
    year: '2023',
    client: 'Mr. Narayanan',
    area: '240 Sq.ft',
    products: 'Aluminium Wardrobes',
    status: 'Completed',
    description:
      'A full-wall aluminium wardrobe installation with sliding shutters, practical loft storage and a termite-resistant finish.',
    image: serviceAsset('south-indian-aluminium-wardrobes'),
    gallery: [
      serviceAsset('south-indian-aluminium-wardrobes'),
      serviceAsset('south-indian-aluminium-windows'),
      serviceAsset('south-indian-upvc-windows-doors'),
    ],
  },
  {
    id: 'P005',
    name: 'Sliding Door System',
    category: 'Residential',
    location: 'Coimbatore',
    year: '2024',
    client: 'Mr. Vikram Das',
    area: '2800 Sq.ft',
    products: 'Sliding Doors, Mosquito Mesh, Balcony Glass',
    status: 'In Progress',
    description:
      'A lift-and-slide door system opens the living room fully onto the terrace, blurring the line between indoor and outdoor living.',
    image: serviceAsset('south-indian-mesh-balcony'),
    gallery: [
      serviceAsset('south-indian-aluminium-doors'),
      serviceAsset('south-indian-mesh-balcony'),
      serviceAsset('south-indian-aluminium-windows'),
    ],
  },
  {
    id: 'P006',
    name: 'uPVC Windows',
    category: 'Residential',
    location: 'Coimbatore',
    year: '2023',
    client: 'Renovation Client',
    area: '1900 Sq.ft',
    products: 'uPVC Casement Windows',
    status: 'Completed',
    description:
      'A full renovation replacing ageing steel windows with insulated uPVC casements, cutting noise and improving comfort.',
    image: serviceAsset('south-indian-upvc-windows-doors'),
    gallery: [
      serviceAsset('south-indian-upvc-windows-doors'),
      serviceAsset('south-indian-bathroom-solutions'),
      serviceAsset('south-indian-mesh-balcony'),
    ],
  },
]

export const defaultGallery = [
  { id: 'g1', title: 'Tamil Nadu Home Windows', category: 'Residential', image: serviceAsset('south-indian-aluminium-windows'), description: 'Aluminium window installation' },
  { id: 'g2', title: 'Secure Aluminium Door', category: 'Residential', image: serviceAsset('south-indian-aluminium-doors'), description: 'Modern aluminium door and slider' },
  { id: 'g3', title: 'uPVC Balcony Openings', category: 'Residential', image: serviceAsset('south-indian-upvc-windows-doors'), description: 'uPVC windows and balcony door' },
  { id: 'g4', title: 'Aluminium Kitchen Cabinets', category: 'Residential', image: serviceAsset('south-indian-aluminium-kitchen-cabinets'), description: 'Moisture-resistant kitchen cabinets' },
  { id: 'g5', title: 'Aluminium Wardrobes', category: 'Residential', image: serviceAsset('south-indian-aluminium-wardrobes'), description: 'Termite-resistant wardrobe system' },
  { id: 'g6', title: 'Bathroom Ventilator & Partition', category: 'Residential', image: serviceAsset('south-indian-bathroom-solutions'), description: 'Bathroom window and shower partition' },
  { id: 'g7', title: 'Mosquito Mesh Window', category: 'Residential', image: serviceAsset('south-indian-mesh-balcony'), description: 'Mesh with balcony glass solution' },
  { id: 'g8', title: 'Balcony Glass Solution', category: 'Residential', image: serviceAsset('south-indian-mesh-balcony'), description: 'Glass railing and enclosure' },
  { id: 'g9', title: 'Home Sliding System', category: 'Residential', image: serviceAsset('south-indian-aluminium-doors'), description: 'Space-saving sliding system' },
]

export const defaultTestimonials = [
  { id: 't1', name: 'Ramesh Kumar', project: 'Modern Villa, Coimbatore', review: 'VETRI transformed our home with beautiful, durable aluminium windows. The team was professional from quote to installation.', rating: 5, status: 'Published', photo: img('1507003211169-0a1dd7228f2d', 200, 200) },
  { id: 't2', name: 'Sangeetha R', project: 'Luxury Apartment, Bangalore', review: 'Excellent uPVC window installation. Our apartment is noticeably quieter and cooler now. Highly recommend.', rating: 5, status: 'Published', photo: img('1494790108377-be9c29b29330', 200, 200) },
  { id: 't3', name: 'Arvind Menon', project: 'Office Building, Chennai', review: 'The glass facade work was completed on schedule and looks stunning. Great communication throughout the project.', rating: 4, status: 'Published', photo: img('1472099645785-5658abf4ff4e', 200, 200) },
  { id: 't4', name: 'Karthik S', project: 'Sliding Door System', review: 'Very happy with the sliding door system, smooth operation and great finish quality.', rating: 5, status: 'Hidden', photo: img('1438761681033-6461ffad8d80', 200, 200) },
]

export const defaultTeam = [
  { id: 'm1', name: 'S. Raghavan', designation: 'Founder & CEO', experience: '18+ years', photo: img('1507003211169-0a1dd7228f2d', 300, 300), social: { linkedin: '#', instagram: '#' } },
  { id: 'm2', name: 'Priya Natarajan', designation: 'Head of Projects', experience: '12+ years', photo: img('1544005313-94ddf0286df2', 300, 300), social: { linkedin: '#', instagram: '#' } },
  { id: 'm3', name: 'Mohammed Faizal', designation: 'Lead Installation Engineer', experience: '10+ years', photo: img('1552058544-f2b08422138a', 300, 300), social: { linkedin: '#', instagram: '#' } },
]

export const defaultWebsiteContent = {
  companyName: 'VETRI',
  logoText: 'VETRI',
  heroTitle: 'Aluminium & uPVC Home Solutions for South Indian Homes',
  heroDescription: 'We design, fabricate and install aluminium and uPVC windows, doors, sliding systems, kitchen cabinets, wardrobes, bathroom solutions and balcony glass for homes across Tamil Nadu.',
  heroServices: ['Aluminium Windows', 'uPVC Windows', 'Sliding Systems', 'Kitchen Cabinets'],
  aboutContent:
    'We specialise in high-quality aluminium and uPVC home solutions, including windows, doors, sliding systems, kitchen cabinets, wardrobes, bathroom ventilators and balcony glass. With 10+ years of experience, we deliver products that combine strength, style and practical performance for homes across South India.',
  phone: '+91 98765 43210',
  whatsapp: '+91 98765 43210',
  email: 'info@vetri.com',
  address: '123, VETRI Solutions, Coimbatore - 641001, Tamil Nadu, India',
  mapEmbed: '',
  social: { facebook: '#', instagram: '#', youtube: '#', linkedin: '#', whatsapp: '#' },
  stats: { years: '10+', projects: '500+', clients: '300+', quality: '100%' },
  seo: { title: 'VETRI | Aluminium & uPVC Home Solutions in Tamil Nadu', description: 'Premium aluminium and uPVC windows, doors, sliding systems, kitchen cabinets, wardrobes, bathroom and balcony solutions for modern South Indian homes.' },
  heroImages: [
    serviceAsset('south-indian-aluminium-windows'),
    serviceAsset('south-indian-upvc-windows-doors'),
    serviceAsset('south-indian-aluminium-kitchen-cabinets'),
    serviceAsset('south-indian-mesh-balcony'),
  ],
  showcaseVideo: 'https://videos.pexels.com/video-files/7331407/7331407-hd_1920_1080_25fps.mp4',
}

export const whyChooseUs = [
  { title: 'Best Quality', description: 'We use premium materials.', icon: 'shield' },
  { title: 'Custom Solutions', description: 'Tailored designs for every need.', icon: 'ruler' },
  { title: 'Expert Team', description: 'Skilled & experienced professionals.', icon: 'team' },
  { title: 'After Sales Support', description: 'We are always with you.', icon: 'support' },
]

export const processSteps = [
  { step: 1, title: 'Consultation', description: 'We understand your space, needs and budget.' },
  { step: 2, title: 'Design & Quote', description: 'A tailored design with transparent pricing.' },
  { step: 3, title: 'Fabrication', description: 'Precision fabrication in our own workshop.' },
  { step: 4, title: 'Installation', description: 'Clean, professional on-site installation.' },
  { step: 5, title: 'After-Sales Support', description: 'We stay available after handover.' },
]

export const projectTypeOptions = [
  'Aluminium Windows',
  'Aluminium Doors',
  'uPVC Windows',
  'uPVC Doors',
  'Sliding Systems',
  'Kitchen Cabinets',
  'Aluminium Wardrobes',
  'Bathroom Solutions',
  'Mosquito Mesh Windows',
  'Glass & Balcony Solutions',
  'Other',
]

export const enquiryStatusOptions = ['New', 'Contacted', 'In Progress', 'Quoted', 'Completed', 'Closed']

export const defaultEnquiries = [
  { id: 'e1', name: 'Ramesh Kumar', phone: '9876543210', email: 'ramesh@example.com', projectType: 'Residential Project', location: 'Coimbatore', budget: '', message: 'Interested in aluminium windows for a new villa.', date: '2026-05-18', status: 'New' },
  { id: 'e2', name: 'Sangeetha R', phone: '9123456780', email: 'sangeetha@example.com', projectType: 'Commercial Project', location: 'Chennai', budget: '', message: 'Need a quote for office glass partitions.', date: '2026-05-06', status: 'Contacted' },
  { id: 'e3', name: 'Arvind Menon', phone: '9888760065', email: 'arvind@example.com', projectType: 'uPVC Windows', location: 'Hyderabad', budget: '', message: 'Looking to replace old windows with uPVC.', date: '2026-05-17', status: 'New' },
  { id: 'e4', name: 'Karthik S', phone: '9012345678', email: 'karthik@example.com', projectType: 'Doors', location: 'Coimbatore', budget: '', message: 'Sliding door quote for balcony renovation.', date: '2026-03-05', status: 'In Progress' },
  { id: 'e5', name: 'Divya M', phone: '9345678123', email: 'divya@example.com', projectType: 'Partition', location: 'Coimbatore', budget: '', message: 'Office cabin partitions - quoted already.', date: '2026-05-16', status: 'Quoted' },
  { id: 'e6', name: 'Pradesh V', phone: '9667890123', email: 'pradesh@example.com', projectType: 'Renovation', location: 'Bangalore', budget: '', message: 'Full home window renovation enquiry.', date: '2026-05-16', status: 'New' },
]

export const ADMIN_CREDENTIALS = { email: 'admin@alupro.com', password: 'alupro123' }
