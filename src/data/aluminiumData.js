// Seed / default data for AluPro. This is what ships on first load,
// and is then copied into localStorage so the admin panel can edit it.

const img = (id, w = 1200, h = 800) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&h=${h}&q=90&fm=webp`

export const defaultServices = [
  {
    id: 'svc-1',
    name: 'Aluminium Windows',
    icon: 'window',
    tagline: 'Strong, durable and low-maintenance.',
    description:
      'Slim-profile aluminium window systems engineered for strength and a clean, modern look. Powder-coated finishes resist corrosion and hold colour for years, and multi-point locking keeps every opening secure.',
    features: ['Corrosion resistant', 'Slim sightlines', 'Multi-point locking', 'Custom RAL colours'],
    designs: ['Casement', 'Sliding', 'Fixed picture window', 'Louvered'],
    benefits: ['Low maintenance', 'Long lifespan', 'Excellent strength-to-weight ratio', 'Wide colour range'],
    image: img('1600585154340-be6161a56a0c'),
    status: 'Published',
  },
  {
    id: 'svc-2',
    name: 'Aluminium Doors',
    icon: 'door',
    tagline: 'Secure and elegant.',
    description:
      'From slim sliding doors to bold pivot entrances, our aluminium door systems combine architectural presence with everyday security for homes and commercial spaces alike.',
    features: ['Reinforced frame', 'Weather sealed', 'Smooth glide track', 'Fingerprint-resistant handles'],
    designs: ['Sliding', 'Hinged', 'Pivot entrance', 'Bi-fold'],
    benefits: ['High security', 'Smooth daily operation', 'Elegant slim frames', 'Custom sizing'],
    image: img('1560448204-e02f11c3d0e2'),
    status: 'Published',
  },
  {
    id: 'svc-3',
    name: 'UPVC Windows',
    icon: 'window',
    tagline: 'Energy efficient and low maintenance.',
    description:
      'UPVC window systems built for insulation and quiet interiors. Multi-chambered profiles cut heat transfer and outside noise, so rooms stay comfortable through every season.',
    features: ['Thermal insulation', 'Sound dampening', 'UV stable', 'Zero rust or rot'],
    designs: ['Casement', 'Sliding', 'Tilt & turn', 'Fixed'],
    benefits: ['Lower energy bills', 'Quieter interiors', 'Long-lasting finish', 'Easy to clean'],
    image: img('1487958449943-2429e8be8625'),
    status: 'Published',
  },
  {
    id: 'svc-4',
    name: 'UPVC Doors',
    icon: 'door',
    tagline: 'Weather resistant and durable.',
    description:
      'UPVC doors that stand up to sun, rain and daily use without warping or fading, backed by multi-point locking for reliable security.',
    features: ['Weatherproof seal', 'Impact resistant', 'Multi-point lock', 'Fade resistant'],
    designs: ['Sliding', 'Hinged', 'French door'],
    benefits: ['Withstands harsh weather', 'Minimal upkeep', 'Consistent performance for years'],
    image: img('1613977257363-707ba9348227'),
    status: 'Published',
  },
  {
    id: 'svc-5',
    name: 'Glass Facades',
    icon: 'facade',
    tagline: 'Modern commercial appearance.',
    description:
      'Structural glazing systems that give commercial buildings a striking street presence while managing heat gain with performance glass.',
    features: ['Structural glazing', 'Performance glass options', 'Custom mullion patterns'],
    designs: ['Unitised curtain wall', 'Stick system', 'Spider glazing'],
    benefits: ['Bold architectural statement', 'Better daylighting', 'Improved thermal performance'],
    image: img('1486406146926-c627a92ad1ab'),
    status: 'Published',
  },
  {
    id: 'svc-6',
    name: 'Glass Partitions',
    icon: 'partition',
    tagline: 'Professional office interiors.',
    description:
      'Frameless and framed glass partitions that divide office space without losing light, ideal for cabins, meeting rooms and reception areas.',
    features: ['Frameless options', 'Acoustic interlayers', 'Manifestation film ready'],
    designs: ['Single glazed', 'Double glazed acoustic', 'Sliding partition'],
    benefits: ['Keeps spaces bright and open', 'Improves acoustics', 'Fast installation'],
    image: img('1497366754035-f200968a6e72'),
    status: 'Published',
  },
  {
    id: 'svc-7',
    name: 'Sliding Systems',
    icon: 'sliding',
    tagline: 'Space-saving doors and windows.',
    description:
      'Smooth-running sliding systems for balconies, terraces and large openings, engineered to save floor space and glide effortlessly.',
    features: ['Heavy-duty rollers', 'Slim interlock', 'Large panel capability'],
    designs: ['2-track', '3-track', 'Lift & slide'],
    benefits: ['Saves usable floor space', 'Effortless operation', 'Large uninterrupted views'],
    image: img('1560185127-6ed189bf02f4'),
    status: 'Published',
  },
  {
    id: 'svc-8',
    name: 'Curtain Walls',
    icon: 'curtain',
    tagline: 'Modern architectural solutions.',
    description:
      'Full-height curtain wall systems for commercial and institutional buildings that balance daylight, ventilation and structural performance.',
    features: ['Thermal break profiles', 'High wind-load rating', 'Modular installation'],
    designs: ['Unitised', 'Semi-unitised', 'Stick-built'],
    benefits: ['Maximises natural light', 'Engineered for tall structures', 'Consistent façade grid'],
    image: img('1497366811353-6870744d04b2'),
    status: 'Published',
  },
  {
    id: 'svc-9',
    name: 'Glass Railings',
    icon: 'railing',
    tagline: 'Safe and stylish.',
    description:
      'Toughened-glass railing systems for staircases, balconies and terraces that keep sightlines open while meeting safety standards.',
    features: ['Toughened safety glass', 'Stainless steel fittings', 'Custom height options'],
    designs: ['Frameless', 'Post-and-rail', 'Standoff mounted'],
    benefits: ['Unobstructed views', 'Meets safety codes', 'Low-maintenance finish'],
    image: img('1560184897-ae75f418493e'),
    status: 'Published',
  },
  {
    id: 'svc-10',
    name: 'Skylights',
    icon: 'skylight',
    tagline: 'Natural light solutions.',
    description:
      'Custom skylight systems that flood interiors with daylight while staying watertight and thermally efficient.',
    features: ['Watertight flashing', 'UV-filtering glass', 'Custom shapes'],
    designs: ['Fixed dome', 'Flat glass', 'Pyramid'],
    benefits: ['Reduces daytime lighting cost', 'Brightens interior spaces', 'Weatherproof seal'],
    image: img('1449844908441-8829872d2607'),
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
    products: 'Aluminium Windows, Sliding Doors, Glass Railing',
    status: 'Completed',
    description:
      'This project showcases a perfect blend of modern design and premium aluminium openings. Large glazed openings, natural light and sleek finishes make this home elegant from every angle.',
    image: img('1600607687939-ce8a6c25118c', 1000, 700),
    gallery: [
      img('1600566753086-00f18fb6b3ea', 500, 400),
      img('1600585152220-90363fe7e115', 500, 400),
      img('1600210492486-724fe5c67fb0', 500, 400),
    ],
  },
  {
    id: 'P002',
    name: 'Office Building',
    category: 'Commercial',
    location: 'Chennai',
    year: '2024',
    client: 'Nexora Pvt Ltd',
    area: '18,000 Sq.ft',
    products: 'Glass Facade, Curtain Wall, Partitions',
    status: 'Completed',
    description:
      'A full-height glass facade and curtain wall system gives this commercial tower a striking, contemporary presence while performance glass keeps interiors cool.',
    image: img('1497366216548-37526070297c', 1000, 700),
    gallery: [
      img('1497215728101-856f4ea42174', 500, 400),
      img('1524758631624-e2822e304c36', 500, 400),
      img('1493397212122-2b85dda8106b', 500, 400),
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
    products: 'UPVC Windows, Sliding Doors',
    status: 'Completed',
    description:
      'Energy-efficient UPVC windows keep this high-rise apartment quiet and comfortable, with slim sightlines that preserve the skyline views.',
    image: img('1600047509807-ba8f99d2cdde', 1000, 700),
    gallery: [
      img('1600566752355-35792bedcfea', 500, 400),
      img('1519974719765-e6559eac2575', 500, 400),
      img('1502005229762-cf1b2da7c5d6', 500, 400),
    ],
  },
  {
    id: 'P004',
    name: 'Glass Facade',
    category: 'Commercial',
    location: 'Hyderabad',
    year: '2023',
    client: 'Meridian Corp',
    area: '25,000 Sq.ft',
    products: 'Structural Glazing, Spider Fittings',
    status: 'Completed',
    description:
      'Spider-glazed structural facade with minimal framing for a fully transparent street-level frontage.',
    image: img('1512917774080-9991f1c4c750', 1000, 700),
    gallery: [
      img('1449844908441-8829872d2607', 500, 400),
      img('1486406146926-c627a92ad1ab', 500, 400),
      img('1600596542815-ffad4c1539a9', 500, 400),
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
    products: 'Lift & Slide Doors, Glass Railing',
    status: 'In Progress',
    description:
      'A lift-and-slide door system opens the living room fully onto the terrace, blurring the line between indoor and outdoor living.',
    image: img('1560185127-6ed189bf02f4', 1000, 700),
    gallery: [
      img('1613977257363-707ba9348227', 500, 400),
      img('1615874959474-d609969a20ed', 500, 400),
      img('1600210491892-03d54c0aaf87', 500, 400),
    ],
  },
  {
    id: 'P006',
    name: 'UPVC Windows',
    category: 'Residential',
    location: 'Coimbatore',
    year: '2023',
    client: 'Renovation Client',
    area: '1900 Sq.ft',
    products: 'UPVC Casement Windows',
    status: 'Completed',
    description:
      'A full renovation replacing ageing steel windows with insulated UPVC casements, cutting noise and improving comfort.',
    image: img('1487958449943-2429e8be8625', 1000, 700),
    gallery: [
      img('1600585154340-be6161a56a0c', 500, 400),
      img('1600607687644-aac4c3eac7f4', 500, 400),
      img('1560448204-e02f11c3d0e2', 500, 400),
    ],
  },
]

export const defaultGallery = [
  { id: 'g1', title: 'Modern Villa Frontage', category: 'Residential', image: img('1600607687939-ce8a6c25118c', 700, 700), description: 'Aluminium window facade' },
  { id: 'g2', title: 'Office Reception', category: 'Office', image: img('1497366754035-f200968a6e72', 700, 700), description: 'Glass partition cabins' },
  { id: 'g3', title: 'Luxury Apartment Balcony', category: 'Residential', image: img('1560185127-6ed189bf02f4', 700, 700), description: 'Sliding glass door' },
  { id: 'g4', title: 'Commercial Tower', category: 'Commercial', image: img('1497366216548-37526070297c', 700, 700), description: 'Curtain wall facade' },
  { id: 'g5', title: 'Skylight Atrium', category: 'Other', image: img('1449844908441-8829872d2607', 700, 700), description: 'Pyramid skylight' },
  { id: 'g6', title: 'Staircase Railing', category: 'Residential', image: img('1560184897-ae75f418493e', 700, 700), description: 'Frameless glass railing' },
  { id: 'g7', title: 'Boardroom Partition', category: 'Office', image: img('1497366811353-6870744d04b2', 700, 700), description: 'Acoustic glass partition' },
  { id: 'g8', title: 'Villa Sliding Doors', category: 'Residential', image: img('1613977257363-707ba9348227', 700, 700), description: 'Lift & slide doors' },
  { id: 'g9', title: 'Retail Storefront', category: 'Commercial', image: img('1486406146926-c627a92ad1ab', 700, 700), description: 'Structural glazing' },
]

export const defaultTestimonials = [
  { id: 't1', name: 'Ramesh Kumar', project: 'Modern Villa, Coimbatore', review: 'AluPro transformed our home with beautiful, durable aluminium windows. The team was professional from quote to installation.', rating: 5, status: 'Published', photo: img('1507003211169-0a1dd7228f2d', 200, 200) },
  { id: 't2', name: 'Sangeetha R', project: 'Luxury Apartment, Bangalore', review: 'Excellent UPVC window installation. Our apartment is noticeably quieter and cooler now. Highly recommend.', rating: 5, status: 'Published', photo: img('1494790108377-be9c29b29330', 200, 200) },
  { id: 't3', name: 'Arvind Menon', project: 'Office Building, Chennai', review: 'The glass facade work was completed on schedule and looks stunning. Great communication throughout the project.', rating: 4, status: 'Published', photo: img('1472099645785-5658abf4ff4e', 200, 200) },
  { id: 't4', name: 'Karthik S', project: 'Sliding Door System', review: 'Very happy with the sliding door system, smooth operation and great finish quality.', rating: 5, status: 'Hidden', photo: img('1438761681033-6461ffad8d80', 200, 200) },
]

export const defaultTeam = [
  { id: 'm1', name: 'S. Raghavan', designation: 'Founder & CEO', experience: '18+ years', photo: img('1507003211169-0a1dd7228f2d', 300, 300), social: { linkedin: '#', instagram: '#' } },
  { id: 'm2', name: 'Priya Natarajan', designation: 'Head of Projects', experience: '12+ years', photo: img('1544005313-94ddf0286df2', 300, 300), social: { linkedin: '#', instagram: '#' } },
  { id: 'm3', name: 'Mohammed Faizal', designation: 'Lead Installation Engineer', experience: '10+ years', photo: img('1552058544-f2b08422138a', 300, 300), social: { linkedin: '#', instagram: '#' } },
]

export const defaultWebsiteContent = {
  companyName: 'AluPro',
  logoText: 'AluPro',
  heroTitle: 'Aluminium & UPVC Windows, Doors and Facades — Designed, Made and Installed by Us.',
  heroDescription: 'We design, fabricate and install aluminium and UPVC windows, doors, partitions and glass facades for homes and businesses — from a single window to a full commercial building.',
  heroServices: ['Windows', 'Doors', 'Glass Facades', 'Partitions'],
  aboutContent:
    'We specialise in high-quality Aluminium and UPVC doors, windows, partitions and glazing solutions. With 10+ years of experience, we deliver products that combine strength, style and performance for homes and businesses across South India.',
  phone: '+91 98765 43210',
  whatsapp: '+91 98765 43210',
  email: 'info@alupro.com',
  address: '123, AluPro Solutions, Coimbatore - 641001, Tamil Nadu, India',
  mapEmbed: '',
  social: { facebook: '#', instagram: '#', youtube: '#', linkedin: '#', whatsapp: '#' },
  stats: { years: '10+', projects: '500+', clients: '300+', quality: '100%' },
  seo: { title: 'AluPro | Aluminium & UPVC Doors, Windows & Glazing', description: 'Premium aluminium and UPVC doors, windows, partitions and glazing solutions for modern homes and commercial spaces.' },
  heroImages: [
    img('1600607687939-ce8a6c25118c', 1920, 1080),
    img('1497366216548-37526070297c', 1920, 1080),
    img('1512917774080-9991f1c4c750', 1920, 1080),
    img('1560185127-6ed189bf02f4', 1920, 1080),
  ],
  showcaseVideo: 'https://videos.pexels.com/video-files/7578547/7578547-uhd_2560_1440_30fps.mp4',
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
  'UPVC Windows',
  'UPVC Doors',
  'Glass Facade',
  'Glass Partition',
  'Sliding Systems',
  'Other',
]

export const enquiryStatusOptions = ['New', 'Contacted', 'In Progress', 'Quoted', 'Completed', 'Closed']

export const defaultEnquiries = [
  { id: 'e1', name: 'Ramesh Kumar', phone: '9876543210', email: 'ramesh@example.com', projectType: 'Residential Project', location: 'Coimbatore', budget: '', message: 'Interested in aluminium windows for a new villa.', date: '2026-05-18', status: 'New' },
  { id: 'e2', name: 'Sangeetha R', phone: '9123456780', email: 'sangeetha@example.com', projectType: 'Commercial Project', location: 'Chennai', budget: '', message: 'Need a quote for office glass partitions.', date: '2026-05-06', status: 'Contacted' },
  { id: 'e3', name: 'Arvind Menon', phone: '9888760065', email: 'arvind@example.com', projectType: 'UPVC Windows', location: 'Hyderabad', budget: '', message: 'Looking to replace old windows with UPVC.', date: '2026-05-17', status: 'New' },
  { id: 'e4', name: 'Karthik S', phone: '9012345678', email: 'karthik@example.com', projectType: 'Doors', location: 'Coimbatore', budget: '', message: 'Sliding door quote for balcony renovation.', date: '2026-03-05', status: 'In Progress' },
  { id: 'e5', name: 'Divya M', phone: '9345678123', email: 'divya@example.com', projectType: 'Partition', location: 'Coimbatore', budget: '', message: 'Office cabin partitions - quoted already.', date: '2026-05-16', status: 'Quoted' },
  { id: 'e6', name: 'Pradesh V', phone: '9667890123', email: 'pradesh@example.com', projectType: 'Renovation', location: 'Bangalore', budget: '', message: 'Full home window renovation enquiry.', date: '2026-05-16', status: 'New' },
]

export const ADMIN_CREDENTIALS = { email: 'admin@alupro.com', password: 'alupro123' }