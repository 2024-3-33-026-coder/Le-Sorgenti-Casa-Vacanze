export interface RoomType {
  id: string;
  name: string;
  nameEn: string;
  subtitle: string;
  image: string;
  galleryImages: string[];
  capacity: number;
  capacityText: string;
  bedSetup: string;
  bathType: string;
  features: string[];
  description: string;
  descriptionEn: string;
  priceNote: string;
  bookingCode?: string;
}

export interface AmenityItem {
  id: string;
  title: string;
  titleEn: string;
  category: 'comfort' | 'outdoor' | 'service' | 'dining';
  icon: string;
  detail: string;
  detailEn: string;
}

export interface SurroundingPlace {
  id: string;
  name: string;
  distance: string;
  category: string;
  description: string;
  descriptionEn: string;
}

export const PROPERTY_INFO = {
  name: 'Le Sorgenti Casa Vacanze',
  sublabel: 'Altipiani di Arcinazzo · Lazio · Italia',
  address: '12 Via delle Sorgenti, 03010 Altipiani di Arcinazzo, Italy',
  coordinates: {
    lat: 41.8541,
    lng: 13.1972,
  },
  identifiers: {
    codiceStruttura: '060080-AFF-00001',
    cin: 'IT060080B4VX8CDJK9',
  },
  brandStatement: 'RITROVA IL PIACERE DI RALLENTARE.',
  brandStatementEn: 'REDISCOVER THE PLEASURE OF SLOWING DOWN.',
  bookingUrl: 'https://www.booking.com/hotel/it/le-sorgenti-casa-vacanze.html',
  rating: {
    score: 9.2,
    maxScore: 10,
    reviewCount: 30,
    source: 'Booking.com',
    categories: [
      { label: 'Staff & Accoglienza', score: 9.6 },
      { label: 'Pulizia', score: 9.4 },
      { label: 'Comfort', score: 9.3 },
      { label: 'Posizione', score: 9.1 },
      { label: 'Rapporto qualità/prezzo', score: 9.2 },
    ],
  },
  poolStatus: {
    isClosedSeasonally: true,
    closedFrom: '1 Settembre 2026',
    reopeningDate: '1 Giugno 2027',
    noticeText:
      'La piscina stagionale all\'aperto è temporaneamente chiusa per la stagione autunno/inverno. La riapertura è programmata a partire dal 1° giugno 2027, salvo conferma della struttura.',
    noticeTextEn:
      'The seasonal outdoor swimming pool is temporarily closed for the autumn/winter season. Reopening is scheduled from June 1, 2027, subject to confirmation by the property.',
  },
  houseRules: {
    checkIn: '14:00 – 23:00',
    checkOut: '08:00 – 11:00',
    gateClosure: '23:30 – 07:30',
    pets: 'Ammessi su richiesta senza alcun supplemento (bocconcini/ciotole disponibili)',
    petsEn: 'Allowed on request at no extra charge (bowls/basket available)',
    smoking: 'Vietato fumare in tutti gli ambienti chiusi (presente area fumatori dedicata all\'aperto)',
    parties: 'Feste o eventi non sono consentiti per garantire la quiete degli ospiti',
    cribs: 'Culla disponibile su richiesta per bambini 0–3 anni (soggetta a disponibilità)',
  },
  restaurant: {
    name: 'Le Sorgenti 2.0',
    type: 'Cucina tipica italiana & laziale',
    dietary: ['Vegetariano', 'Vegano', 'Senza glutine su richiesta'],
    breakfast: 'Colazione a buffet con selezioni all\'italiana, opzioni vegane e per celiaci',
  },
};

export const ROOMS: RoomType[] = [
  {
    id: 'spa-bath',
    name: 'Camera Matrimoniale con Spa',
    nameEn: 'Queen Room with Spa Bath',
    subtitle: 'Vasca idromassaggio ad angolo privata & massima intimità',
    image: '/images/le-sorgenti/le-sorgenti-spa-bath.jpg',
    galleryImages: [
      '/images/le-sorgenti/le-sorgenti-spa-bath.jpg',
      '/images/le-sorgenti/le-sorgenti-bedroom.jpg',
      '/images/le-sorgenti/le-sorgenti-bathroom.jpg',
    ],
    capacity: 2,
    capacityText: '2 Ospiti · Letto Queen Size',
    bedSetup: '1 letto matrimoniale queen size',
    bathType: 'Bagno privato con vasca idromassaggio',
    features: [
      'Vasca idromassaggio idro-relax',
      'Aria condizionata & riscaldamento autonomo',
      'TV a schermo piatto',
      'Set cortesia & asciugacapelli',
      'Insonorizzazione',
      'Vista sul verde',
    ],
    description:
      'La camera più esclusiva della struttura, dotata di un\'ampia vasca idromassaggio angolare privata nel bagno, perfetta per rigenerarsi dopo una passeggiata tra i boschi degli Altipiani.',
    descriptionEn:
      'The most exclusive room in the retreat, featuring a private corner spa whirlpool bath in the bathroom, ideal for unwinding after a day exploring the mountains.',
    priceNote: 'Tariffe e disponibilità in tempo reale confermate su Booking.com',
  },
  {
    id: 'deluxe-double',
    name: 'Camera Matrimoniale Deluxe',
    nameEn: 'Deluxe Double Room',
    subtitle: 'Calore montano, pavimenti in legno & comfort moderno',
    image: '/images/le-sorgenti/le-sorgenti-deluxe-room.jpg',
    galleryImages: [
      '/images/le-sorgenti/le-sorgenti-deluxe-room.jpg',
      '/images/le-sorgenti/le-sorgenti-room-wood.jpg',
      '/images/le-sorgenti/gallery-617959719.jpg',
    ],
    capacity: 2,
    capacityText: '2 Ospiti · Letto Matrimoniale Large',
    bedSetup: '1 grande letto matrimoniale',
    bathType: 'Bagno privato con doccia e bidet',
    features: [
      'Bagno privato con doccia spaziosa',
      'Climatizzazione autonoma',
      'TV a schermo piatto',
      'Scrivania da lavoro',
      'Biancheria di pregio inclusa',
      'Armadio & appendiabiti',
    ],
    description:
      'Atmosfera calda e riposante, arredata con cura con finiture in legno e dettagli confortevoli. Progettata per garantire un sonno profondo e sereno immersi nel silenzio della campagna laziale.',
    descriptionEn:
      'Warm and soothing atmosphere with wood finishes and curated comforts. Tailored for deep and silent restorative sleep in the Lazio countryside.',
    priceNote: 'Tariffe e disponibilità in tempo reale confermate su Booking.com',
  },
  {
    id: 'quadruple-garden',
    name: 'Camera Quadrupla con Vista Giardino',
    nameEn: 'Quadruple Room with Garden View',
    subtitle: 'Ampio spazio per famiglie o gruppi con vista sul prato',
    image: '/images/le-sorgenti/le-sorgenti-quadruple-room.jpg',
    galleryImages: [
      '/images/le-sorgenti/le-sorgenti-quadruple-room.jpg',
      '/images/le-sorgenti/gallery-617959723.jpg',
      '/images/le-sorgenti/gallery-617959727.jpg',
    ],
    capacity: 4,
    capacityText: 'Fino a 4 Ospiti · Famiglie & Piccoli Gruppi',
    bedSetup: '1 letto matrimoniale + 2 letti singoli in stile chalet',
    bathType: 'Bagno privato con box doccia',
    features: [
      'Vista panoramica sul giardino',
      'Rivestimenti caldi in legno montano',
      'Climatizzatore & riscaldamento',
      'TV a schermo piatto',
      'Bagno privato con asciugacapelli',
      'Spazi generosi per bagagli',
    ],
    description:
      'Generosa camera per quattro ospiti caratterizzata da suggestive pareti in perlinato di legno in stile baita e grandi finestre aperte sul giardino. Perfetta per vacanze in famiglia.',
    descriptionEn:
      'Generous room accommodating up to four guests with cozy log cabin-style timber walls and large windows looking onto the grass garden. Ideal for families.',
    priceNote: 'Tariffe e disponibilità in tempo reale confermate su Booking.com',
  },
];

export const GALLERY_ITEMS = [
  {
    id: 'g-hero',
    title: 'La Struttura & Il Parco',
    category: 'Esterni',
    image: '/images/le-sorgenti/le-sorgenti-hero.jpg',
    alt: 'La casa bianca di Le Sorgenti con ampio prato ad Altipiani di Arcinazzo',
  },
  {
    id: 'g-pool',
    title: 'Piscina Stagionale all\'Aperto',
    category: 'Piscina (Stagionale)',
    image: '/images/le-sorgenti/le-sorgenti-pool.jpg',
    alt: 'La piscina all\'aperto immersa nella quiete del giardino di Le Sorgenti',
  },
  {
    id: 'g-spa',
    title: 'Vasca Idromassaggio Privata',
    category: 'Relax & Spa',
    image: '/images/le-sorgenti/le-sorgenti-spa-bath.jpg',
    alt: 'Vasca idromassaggio ad angolo nel bagno privato della camera spa',
  },
  {
    id: 'g-kitchen',
    title: 'La Cucina & Sala Colazioni',
    category: 'Ristorazione',
    image: '/images/le-sorgenti/le-sorgenti-kitchen.jpg',
    alt: 'La cucina con tavolo imbandito per la colazione a Le Sorgenti',
  },
  {
    id: 'g-deluxe',
    title: 'Camera Matrimoniale Deluxe',
    category: 'Camere',
    image: '/images/le-sorgenti/le-sorgenti-deluxe-room.jpg',
    alt: 'Camera da letto con letto matrimoniale, finestre e finiture in legno',
  },
  {
    id: 'g-quad',
    title: 'Camera con Pareti in Legno',
    category: 'Camere',
    image: '/images/le-sorgenti/le-sorgenti-quadruple-room.jpg',
    alt: 'Camera familiare con letti singoli e pareti in legno stile chalet',
  },
  {
    id: 'g-winter',
    title: 'Scorcio Invernale Innevato',
    category: 'Stagioni',
    image: '/images/le-sorgenti/le-sorgenti-winter.jpg',
    alt: 'La proprietà immersa nel paesaggio innevato degli Altipiani di Arcinazzo',
  },
  {
    id: 'g-bath',
    title: 'Bagno Privato Curato',
    category: 'Comfort',
    image: '/images/le-sorgenti/le-sorgenti-bathroom.jpg',
    alt: 'Bagno luminoso con sanitari, box e accessori cortesia',
  },
  {
    id: 'g-wood',
    title: 'Particolare Arredo Montano',
    category: 'Dettagli',
    image: '/images/le-sorgenti/le-sorgenti-room-wood.jpg',
    alt: 'Dettaglio dell\'atmosfera montano-rustica nelle camere di Le Sorgenti',
  },
];

export const AMENITIES: AmenityItem[] = [
  {
    id: 'parking',
    title: 'Parcheggio Privato Gratuito',
    titleEn: 'Free Private Parking',
    category: 'service',
    icon: 'Car',
    detail: 'Posto auto custodito all\'interno della proprietà senza prenotazione necessaria.',
    detailEn: 'Complimentary private parking on site, no prior reservation needed.',
  },
  {
    id: 'wifi',
    title: 'Wi-Fi Gratuito',
    titleEn: 'Free Wi-Fi',
    category: 'service',
    icon: 'Wifi',
    detail: 'Connessione Wi-Fi gratuita disponibile negli spazi comuni e zone relax.',
    detailEn: 'Complimentary Wi-Fi available in public and shared lounge areas.',
  },
  {
    id: 'restaurant',
    title: 'Ristorante "Le Sorgenti 2.0"',
    titleEn: 'On-site Restaurant',
    category: 'dining',
    icon: 'Utensils',
    detail: 'Specialità italiane con alternative vegetariane, vegane e per celiaci.',
    detailEn: 'Italian culinary dining with vegetarian, vegan, and gluten-free choices.',
  },
  {
    id: 'breakfast',
    title: 'Colazione a Buffet',
    titleEn: 'Buffet Breakfast',
    category: 'dining',
    icon: 'Coffee',
    detail: 'Buffet mattutino con dolci fatti in casa, caffetteria italiana e prodotti freschi.',
    detailEn: 'Morning buffet with Italian pastries, artisanal coffee, and fresh items.',
  },
  {
    id: 'pool',
    title: 'Piscina Stagionale',
    titleEn: 'Seasonal Swimming Pool',
    category: 'outdoor',
    icon: 'Waves',
    detail: 'Aperta nei mesi estivi (chiusa dal 1° settembre 2026 al 1° giugno 2027).',
    detailEn: 'Open in the summer months (closed Sept 1, 2026 – June 1, 2027).',
  },
  {
    id: 'spa',
    title: 'Vasca Idromassaggio',
    titleEn: 'Spa Whirlpool Tub',
    category: 'comfort',
    icon: 'Sparkles',
    detail: 'Disponibile nella riservata Camera Matrimoniale con Spa per il massimo relax.',
    detailEn: 'Featured in the dedicated Queen Room with Spa Bath for ultimate unwind.',
  },
  {
    id: 'garden',
    title: 'Giardino & Terrazza Solarium',
    titleEn: 'Garden & Sun Terrace',
    category: 'outdoor',
    icon: 'Trees',
    detail: 'Vasto prato pianeggiante con lettini, panche e aria pulita d\'alta quota.',
    detailEn: 'Expansive grassy garden with loungers, benches, and crisp mountain air.',
  },
  {
    id: 'bikes',
    title: 'Biciclette Gratuite',
    titleEn: 'Free Bicycle Use',
    category: 'outdoor',
    icon: 'Bike',
    detail: 'Biciclette messe a disposizione degli ospiti per pedalare lungo gli altipiani.',
    detailEn: 'Complimentary bikes provided to explore paths across the plateau.',
  },
  {
    id: 'pets',
    title: 'Animali Ammessi Gratuitamente',
    titleEn: 'Pet Friendly (No Extra Fee)',
    category: 'service',
    icon: 'HeartHandshake',
    detail: 'I vostri compagni a quattro zampe sono i benvenuti su richiesta senza sovrapprezzo.',
    detailEn: 'Four-legged friends are warmly welcomed upon advance request at no fee.',
  },
  {
    id: 'family',
    title: 'Spazi Famiglia & Giochi',
    titleEn: 'Family Rooms & Play Area',
    category: 'comfort',
    icon: 'Gamepad2',
    detail: 'Sala giochi comune, aree ludiche all\'aperto e culle disponibili per neonati.',
    detailEn: 'Shared games room, outdoor play spaces, and baby cribs upon request.',
  },
  {
    id: 'aircon',
    title: 'Aria Condizionata & Termo',
    titleEn: 'Climate Control',
    category: 'comfort',
    icon: 'Thermometer',
    detail: 'Climatizzazione regolabile autonomamente in camera per ogni stagione.',
    detailEn: 'Individually controlled air conditioning and heating in guest rooms.',
  },
  {
    id: 'reception',
    title: 'Accoglienza & Assistenza',
    titleEn: 'Hospitality & Support',
    category: 'service',
    icon: 'Clock',
    detail: 'Check-in dedicato dalle 14:00 alle 23:00 con personale attento e cordiale.',
    detailEn: 'Dedicated check-in from 14:00 to 23:00 with warm local Italian hospitality.',
  },
];

export const SURROUNDINGS: SurroundingPlace[] = [
  {
    id: 'altipiani',
    name: 'Altipiani di Arcinazzo',
    distance: 'In loco (850m s.l.m.)',
    category: 'Natura & Trekking',
    description:
      'Altopiano carsico tra le province di Frosinone e Roma, famoso per la frescura estiva, i boschi di conifere e i sentieri da percorrere a piedi o in bicicletta.',
    descriptionEn:
      'Karstic plateau at 850m elevation known for cool summer air, pine forests, and scenic walking or cycling routes.',
  },
  {
    id: 'traiano',
    name: 'Villa di Traiano',
    distance: '~3 km',
    category: 'Archeologia',
    description:
      'Importante residenza di caccia dell\'imperatore romano Traiano, con resti di terme, mosaici e museo archeologico immerso nel bosco.',
    descriptionEn:
      'Imperial hunting residence of Roman Emperor Trajan featuring thermal baths, mosaics, and an archaeological site in the forest.',
  },
  {
    id: 'trevi',
    name: 'Cascata di Trevi nel Lazio',
    distance: '~12 km',
    category: 'Natura & Acqua',
    description:
      'Spettacolare salto d\'acqua del fiume Aniene nel cuore del Parco Naturale Regionale dei Monti Simbruini.',
    descriptionEn:
      'Dramatic waterfall along the Aniene River in the heart of the Monti Simbruini Regional Park.',
  },
  {
    id: 'subiaco',
    name: 'Monastero di San Benedetto a Subiaco',
    distance: '~18 km',
    category: 'Cultura & Spiritualità',
    description:
      'Monastero del Sacro Speco abbarbicato alla roccia, culla del monachesimo benedettino occidentale con affreschi medievali straordinari.',
    descriptionEn:
      'The dramatic cliffside monastery of Sacro Speco, cradle of Western Benedictine monasticism with extraordinary medieval frescoes.',
  },
  {
    id: 'fiuggi',
    name: 'Fonte Bonifacio VIII & Terme di Fiuggi',
    distance: '~15 km',
    category: 'Benessere Termale',
    description:
      'Celebri sorgenti termali storiche immerse in parchi secolari, note per le proprietà depurative e terapeutiche dell\'acqua.',
    descriptionEn:
      'Historic spa springs nestled in centenary parks, renowned across Europe for their natural restorative properties.',
  },
  {
    id: 'magicland',
    name: 'Rainbow MagicLand & Valmontone Outlet',
    distance: '~32 km',
    category: 'Divertimento & Shopping',
    description:
      'Parco a tema per grandi e piccini con oltre 35 attrazioni e grande centro shopping outlet.',
    descriptionEn:
      'Major theme park with over 35 attractions alongside the Valmontone Outlet shopping village.',
  },
];
