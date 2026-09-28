export interface VideoProof {
  id: string
  clientNames: string
  clientLocation: string
  sessionTitle: string
  packageName: string
  photographerName: string
  photographerId: string
  date: string
  duration: string
  bookingRef: string
  thumbnailUrl: string
  videoUrl: string
  spokenQuote: string
  rating: number
  verifiedInvoiceHash: string
  technicalDetails: string[]
}

export const CLIENT_VIDEO_PROOFS: VideoProof[] = [
  {
    id: 'proof-1',
    clientNames: 'Maharani Gayatri & Vikramaditya',
    clientLocation: 'Udaipur, Rajasthan',
    sessionTitle: 'The Grand Royal Palace Ceremony',
    packageName: 'The Grand Royal Wedding',
    photographerName: 'Aarav Sharma',
    photographerId: 'photo-1',
    date: 'August 2026',
    duration: '1:42',
    bookingRef: 'BK-ROYAL-8942-VERIFIED',
    thumbnailUrl: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=80',
    videoUrl: 'https://vjs.zencdn.net/v/oceans.mp4',
    spokenQuote:
      'When Aarav showed us the raw back of the Hasselblad during our evening courtyard phere, my mother literally cried tears of joy. The respect, calmness, and optical clarity exceeded anything we envisioned.',
    rating: 5,
    verifiedInvoiceHash: 'SHA256:88f1e29c0a34b9e812d45c678a90123b45c67d89e012f345a67b89c012d34e5f',
    technicalDetails: ['100MP Hasselblad Medium Format', 'Natural Ambient & Rim Strobe', 'Dual Formatted CFexpress'],
  },
  {
    id: 'proof-2',
    clientNames: 'Rohit Kulkarni',
    clientLocation: 'Bandra, Mumbai',
    sessionTitle: 'Executive Presence & Boardroom Portfolio',
    packageName: 'Executive Editorial Headshot',
    photographerName: 'Ananya Iyer',
    photographerId: 'photo-3',
    date: 'September 2026',
    duration: '1:15',
    bookingRef: 'BK-EXEC-4412-VERIFIED',
    thumbnailUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1200&q=80',
    videoUrl: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/friday.mp4',
    spokenQuote:
      'I needed portraits ahead of our Series B announcement in Singapore. Ananya guided every angle with microscopic precision. Having the priority vault delivered in 36 hours gave our PR team exactly what Forbes requested.',
    rating: 5,
    verifiedInvoiceHash: 'SHA256:1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b',
    technicalDetails: ['Profoto Parabolic Softbox', '50mm Leica Optical Calibration', '48-Hour Priority Vault Ingest'],
  },
  {
    id: 'proof-3',
    clientNames: 'Dr. Siddharth & Rhea Kapoor',
    clientLocation: 'Pune, Maharashtra',
    sessionTitle: 'Sunset Dunes Pre-Wedding Narrative',
    packageName: 'Couples Golden Hour Portrait',
    photographerName: 'Rohan Kapoor',
    photographerId: 'photo-2',
    date: 'July 2026',
    duration: '2:04',
    bookingRef: 'BK-SUNSET-9910-VERIFIED',
    thumbnailUrl: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=1200&q=80',
    videoUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4',
    spokenQuote:
      'The booking system’s Golden Hour calculator was spot on. Rohan captured us on the sand dunes right as the sun hit 14 degrees. Seeing our moving video reel alongside the leather album is something our grandchildren will cherish.',
    rating: 5,
    verifiedInvoiceHash: 'SHA256:7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d',
    technicalDetails: ['Sony Alpha Cine Profile', 'DGCA Licensed Aerial Drone Reel', 'Italian Linen Presentation Box'],
  },
  {
    id: 'proof-4',
    clientNames: 'Devika Singhania & Creative Team',
    clientLocation: 'Colaba, Mumbai',
    sessionTitle: 'Haute-Couture Bridal Lookbook',
    packageName: 'Fashion & Haute Couture Lookbook',
    photographerName: 'Priya Nair',
    photographerId: 'photo-4',
    date: 'June 2026',
    duration: '1:30',
    bookingRef: 'BK-COUTURE-7104-VERIFIED',
    thumbnailUrl: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=1200&q=80',
    videoUrl: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
    spokenQuote:
      'For our festive Banarasi collection, fabric color accuracy was paramount. Priya tethered directly to our creative director’s iPad. The gold zardozi fidelity on 100% archival paper matched our physical weaves flawlessly.',
    rating: 5,
    verifiedInvoiceHash: 'SHA256:3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2c3d4e',
    technicalDetails: ['Phase One Wireless Tethering', 'Spectrometer Color Calibration', 'Hahnemühle 308gsm Cotton Rag'],
  },
]

export function getVideoProofsForPhotographer(photographerId?: string): VideoProof[] {
  if (!photographerId) return CLIENT_VIDEO_PROOFS
  const filtered = CLIENT_VIDEO_PROOFS.filter((p) => p.photographerId === photographerId)
  return filtered.length > 0 ? filtered : CLIENT_VIDEO_PROOFS.slice(0, 2)
}
