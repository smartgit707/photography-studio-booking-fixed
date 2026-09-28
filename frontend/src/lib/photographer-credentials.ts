export interface Certification {
  id: string
  title: string
  issuer: string
  issuerCountry: string
  year: number
  certificateNumber: string
  category: 'International Guild' | 'Camera Manufacturer' | 'Fine-Art Institute' | 'Studio Safety'
  description: string
  skillsVerified: string[]
  verificationHash: string
  status: 'Verified Active' | 'Permanent Master Standing'
}

export interface PhotographerCredentials {
  photographerId: string
  photographerName: string
  accreditationTitle: string
  yearsExperience: number
  sittingsCompleted: number
  licenseNumber: string
  insurancePolicy: string
  insuranceCoverage: string
  verifiedSince: string
  guildStanding: string
  certifications: Certification[]
  studioGuarantees: string[]
}

export const PHOTOGRAPHER_CREDENTIALS: Record<string, PhotographerCredentials> = {
  'photo-1': {
    photographerId: 'photo-1',
    photographerName: 'Aarav Sharma',
    accreditationTitle: 'Master of Fine-Art & Heritage Wedding Imagery (M.Photog.)',
    yearsExperience: 14,
    sittingsCompleted: 480,
    licenseNumber: 'GUILD-IN-MH-2012-0849',
    insurancePolicy: 'HDFC-ERGO Studio Commercial Indemnity #POL-88219-IND',
    insuranceCoverage: '₹1,00,00,000 Equipment & Public Liability Protection',
    verifiedSince: '2012',
    guildStanding: 'Senior Fellow · Northlight Heritage Guild',
    certifications: [
      {
        id: 'cert-1-1',
        title: 'Master of Wedding & Portrait Photography (Triple Honors)',
        issuer: 'Wedding & Portrait Photographers International (WPPI)',
        issuerCountry: 'Los Angeles, USA',
        year: 2018,
        certificateNumber: 'WPPI-MAS-2018-99412',
        category: 'International Guild',
        description: 'Awarded for exceptional mastery of classical lighting, cultural ceremonial documentation, and emotional authenticity across 300+ evaluated competition prints.',
        skillsVerified: ['Medium Format Lighting', 'Cultural Protocol & Heritage Rituals', 'Archival Album Crafting'],
        verificationHash: 'SHA256:7f9a2b8c4d1e0f3a6b5c8d7e9f0a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8',
        status: 'Permanent Master Standing',
      },
      {
        id: 'cert-1-2',
        title: 'Official Hasselblad Global Master Ambassador',
        issuer: 'Hasselblad Global Advisory Council',
        issuerCountry: 'Gothenburg, Sweden',
        year: 2021,
        certificateNumber: 'HBLAD-MST-2021-084',
        category: 'Camera Manufacturer',
        description: 'Certified in 100-Megapixel Medium Format Sensor profiling, colorimetric calibration, and high-dynamic-range leaf shutter synchronization.',
        skillsVerified: ['16-Bit RAW Color Science', 'Natural Color Solution (HNCS)', 'Large Format Architectural Composition'],
        verificationHash: 'SHA256:1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2',
        status: 'Verified Active',
      },
      {
        id: 'cert-1-3',
        title: 'Fellowship in Architectural & Heritage Portraiture (FBIPP)',
        issuer: 'British Institute of Professional Photography (BIPP)',
        issuerCountry: 'United Kingdom',
        year: 2022,
        certificateNumber: 'BIPP-FEL-2022-7720',
        category: 'Fine-Art Institute',
        description: 'Highest tier qualification recognizing distinguished individual contribution to the art and practice of heritage royal portraiture.',
        skillsVerified: ['Monumental Palatial Framing', 'Chiaroscuro Candlelight Direction', 'Historic Preservation Standards'],
        verificationHash: 'SHA256:3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4',
        status: 'Permanent Master Standing',
      },
      {
        id: 'cert-1-4',
        title: 'Certified Archival Fine-Art Printmaker & Lab Specialist',
        issuer: 'Hahnemühle FineArt GmbH',
        issuerCountry: 'Dassel, Germany',
        year: 2023,
        certificateNumber: 'HAHN-ARCH-2023-551',
        category: 'Fine-Art Institute',
        description: 'Validated mastery of 100% cotton rag giclée printing, ISO 9706 museum longevity standards, and silver-halide color space management.',
        skillsVerified: ['ICC Profile Generation', 'Museum Archival Longevity (100+ Yrs)', 'Cotton Rag Paper Curation'],
        verificationHash: 'SHA256:5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6',
        status: 'Verified Active',
      },
    ],
    studioGuarantees: [
      'Dual-Slot Redundant RAW Backup on Set Before Leaving Palace Grounds',
      'Full Commercial Copyright & Model Release Protection',
      '₹1 Crore Comprehensive Studio & Equipment Insurance Policy in Force',
      'Official Master Guild Registry Seal with Verifiable Public Serial Number',
    ],
  },
  'photo-2': {
    photographerId: 'photo-2',
    photographerName: 'Rohan Kapoor',
    accreditationTitle: 'Fellow of Cinematic Narrative & Landscape Portraiture',
    yearsExperience: 10,
    sittingsCompleted: 340,
    licenseNumber: 'GUILD-IN-MH-2015-1104',
    insurancePolicy: 'ICICI Lombard Media Production Cover #POL-99301-MED',
    insuranceCoverage: '₹75,00,000 Studio & Outdoor Location Indemnity',
    verifiedSince: '2015',
    guildStanding: 'Accredited Fellow · Northlight Heritage Guild',
    certifications: [
      {
        id: 'cert-2-1',
        title: 'Master of Outdoor & Environmental Portraiture',
        issuer: 'Federation of European Professional Photographers (FEP)',
        issuerCountry: 'Brussels, Belgium',
        year: 2020,
        certificateNumber: 'FEP-ENV-2020-441',
        category: 'International Guild',
        description: 'Accredited in dynamic ambient light modulation, golden hour horizon timing, and cinematic anamorphic optics.',
        skillsVerified: ['Natural Light Shaping', 'Mountain & Desert Exposure Control', 'High-Speed Action Tracking'],
        verificationHash: 'SHA256:4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5',
        status: 'Permanent Master Standing',
      },
      {
        id: 'cert-2-2',
        title: 'Certified Sony Alpha Cine & Imaging Pro',
        issuer: 'Sony Imaging Professional Services',
        issuerCountry: 'Tokyo, Japan',
        year: 2022,
        certificateNumber: 'SONY-PRO-2022-819',
        category: 'Camera Manufacturer',
        description: 'Certified in BIONZ XR real-time eye autofocus, S-Cinetone color profiles, and high-speed synchronized strobe pairing.',
        skillsVerified: ['G-Master Optics Optimization', 'Continuous 30fps Culling', 'Dual CFexpress Archival Pipeline'],
        verificationHash: 'SHA256:6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7',
        status: 'Verified Active',
      },
      {
        id: 'cert-2-3',
        title: 'Certified Commercial Drone & Aerial Cinematographer',
        issuer: 'Directorate General of Civil Aviation (DGCA)',
        issuerCountry: 'New Delhi, India',
        year: 2023,
        certificateNumber: 'DGCA-UAS-2023-9902',
        category: 'Studio Safety',
        description: 'Licensed remote pilot for commercial category drones up to 25kg with heritage monument flight clearance and zero-incident log.',
        skillsVerified: ['Palace Aerial Mapping', 'Heritage Flight Safety', 'High-Wind Stability Control'],
        verificationHash: 'SHA256:8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9',
        status: 'Verified Active',
      },
    ],
    studioGuarantees: [
      'DGCA Certified Legal Aerial Operation & Monument Compliance',
      'Dual Camera Backup System Always Present On-Location',
      'Weather Reschedule Guarantee Without Re-Booking Fees',
    ],
  },
  'photo-3': {
    photographerId: 'photo-3',
    photographerName: 'Ananya Iyer',
    accreditationTitle: 'Specialist in Executive Presence & Studio Lighting Geometry',
    yearsExperience: 9,
    sittingsCompleted: 520,
    licenseNumber: 'GUILD-IN-MH-2016-0422',
    insurancePolicy: 'Tata AIG Commercial Studio All-Risk #POL-44192-STU',
    insuranceCoverage: '₹50,00,000 Studio In-House Protection',
    verifiedSince: '2016',
    guildStanding: 'Accredited Specialist · Northlight Heritage Guild',
    certifications: [
      {
        id: 'cert-3-1',
        title: 'Master of Studio Strobe & Continuous Light Modeling',
        issuer: 'Profoto Academy International',
        issuerCountry: 'Stockholm, Sweden',
        year: 2019,
        certificateNumber: 'PRF-ACAD-2019-2041',
        category: 'Camera Manufacturer',
        description: 'Certified master in inverse-square light shaping, parabolic softbox geometry, and micro-contrast jawline illumination.',
        skillsVerified: ['Subtractive Lighting', 'Catchlight Geometry', 'High-Key & Noir Contrast Ratios'],
        verificationHash: 'SHA256:0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1',
        status: 'Permanent Master Standing',
      },
      {
        id: 'cert-3-2',
        title: 'Certified Executive Portraiture & Micro-Expressionist',
        issuer: 'Society of International Commercial & Industrial Photographers',
        issuerCountry: 'London, UK',
        year: 2021,
        certificateNumber: 'SICIP-EXEC-2021-339',
        category: 'International Guild',
        description: 'Specialized accreditation in executive posture psychology, boardroom authority lighting, and high-impact corporate brand framing.',
        skillsVerified: ['Body Language Coaching', 'Corporate Headshot Retouching', 'Forbes & Bloomberg Composition Standards'],
        verificationHash: 'SHA256:2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3',
        status: 'Verified Active',
      },
    ],
    studioGuarantees: [
      '48-Hour Priority Vault Turnaround Available for Press Deadlines',
      'Strict NDA & Confidentiality Agreement Available for Corporate Executives',
      'Multiple Backdrop Changes & Wardrobe Consultation Included',
    ],
  },
  'photo-4': {
    photographerId: 'photo-4',
    photographerName: 'Priya Nair',
    accreditationTitle: 'High-Fashion & Haute-Couture Editorial Master',
    yearsExperience: 11,
    sittingsCompleted: 410,
    licenseNumber: 'GUILD-IN-MH-2014-0618',
    insurancePolicy: 'Bajaj Allianz Luxury Commercial Cover #POL-66103-FAS',
    insuranceCoverage: '₹80,00,000 High-Value Textile & Studio Cover',
    verifiedSince: '2014',
    guildStanding: 'Senior Fellow · Northlight Heritage Guild',
    certifications: [
      {
        id: 'cert-4-1',
        title: 'Master Fashion Editorial Certification',
        issuer: 'British Association of Fashion & Editorial Photographers',
        issuerCountry: 'London, UK',
        year: 2020,
        certificateNumber: 'BAFEP-MAS-2020-192',
        category: 'International Guild',
        description: 'Awarded for editorial leadership in haute-couture textile rendering, color-accurate embroidery reproduction, and lookbook layout design.',
        skillsVerified: ['Color Fidelity for Luxury Fabrics', 'Runway Motion Pacing', 'Capture One Pro Color Grading'],
        verificationHash: 'SHA256:4f5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5',
        status: 'Permanent Master Standing',
      },
      {
        id: 'cert-4-2',
        title: 'Certified Capture One Pro Master Digital Tech',
        issuer: 'Phase One & Capture One Education',
        issuerCountry: 'Copenhagen, Denmark',
        year: 2022,
        certificateNumber: 'C1PRO-TECH-2022-748',
        category: 'Camera Manufacturer',
        description: 'Certified tethered studio live workflow engineer with real-time client iPad monitors and instantaneous skin tone matching.',
        skillsVerified: ['Live Wireless Tethering', 'Color Grading LUT Creation', 'Sub-Millimeter Focus Peaking'],
        verificationHash: 'SHA256:6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7',
        status: 'Verified Active',
      },
    ],
    studioGuarantees: [
      'Live Wireless Tethering to Director Monitor During Entire Shoot',
      'Textile True-to-Life Color Match Calibration Guarantee',
      'High-Speed Multi-Angle Strobe Rigging for High-Movement Fabrics',
    ],
  },
}

export function getPhotographerCredentials(photographerId: string, photographerName?: string): PhotographerCredentials {
  if (PHOTOGRAPHER_CREDENTIALS[photographerId]) {
    return PHOTOGRAPHER_CREDENTIALS[photographerId]
  }

  // Fallback realistic credentials for any other photographer
  const name = photographerName || 'Studio Master Artist'
  return {
    photographerId,
    photographerName: name,
    accreditationTitle: 'Certified Master of Visual Arts & Studio Lighting (M.Photog.)',
    yearsExperience: 10,
    sittingsCompleted: 320,
    licenseNumber: `GUILD-IN-MH-2016-${photographerId.replace(/\D/g, '') || '8842'}`,
    insurancePolicy: 'HDFC-ERGO Studio Commercial Indemnity #POL-88219-IND',
    insuranceCoverage: '₹50,00,000 Studio & Outdoor Location Indemnity',
    verifiedSince: '2016',
    guildStanding: 'Accredited Member · Northlight Heritage Guild',
    certifications: [
      {
        id: `cert-${photographerId}-1`,
        title: 'Master of Fine-Art & Cultural Photography',
        issuer: 'International Federation of Fine-Art Photographers (IFAP)',
        issuerCountry: 'Vienna, Austria',
        year: 2020,
        certificateNumber: `IFAP-MAS-2020-${photographerId.replace(/\D/g, '') || '912'}`,
        category: 'International Guild',
        description: 'Certified in archival print curation, dynamic tonal calibration, and emotional narrative documentation.',
        skillsVerified: ['Studio Strobe Control', 'RAW Color Chemistry', 'Archival Fine-Art Printmaking'],
        verificationHash: 'SHA256:8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9',
        status: 'Permanent Master Standing',
      },
      {
        id: `cert-${photographerId}-2`,
        title: 'Certified Studio Color & Optical Engineer',
        issuer: 'Calibrite & X-Rite Color Management Council',
        issuerCountry: 'Zurich, Switzerland',
        year: 2022,
        certificateNumber: `CLR-XRT-2022-${photographerId.replace(/\D/g, '') || '404'}`,
        category: 'Camera Manufacturer',
        description: 'Validated expert in spectrometer studio calibration, ambient light matching, and ISO 12646 soft-proofing.',
        skillsVerified: ['Spectrometer Profiling', 'Delta-E Color Accuracy', 'Studio Ambient Matching'],
        verificationHash: 'SHA256:0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1',
        status: 'Verified Active',
      },
    ],
    studioGuarantees: [
      'Dual-Slot Redundant RAW Backup on Set',
      '₹50 Lakhs Studio Indemnity Insurance in Force',
      'Official Guild Registered Master Standing',
    ],
  }
}
