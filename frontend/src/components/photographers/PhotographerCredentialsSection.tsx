import { useState } from 'react'
import {
  getPhotographerCredentials,
  type Certification,
  type PhotographerCredentials,
} from '@/lib/photographer-credentials'
import { PhotographerCertificateModal } from './PhotographerCertificateModal'
import { Button } from '@/components/ui/Button'

interface Props {
  photographerId: string
  photographerName: string
}

export function PhotographerCredentialsSection({ photographerId, photographerName }: Props) {
  const creds: PhotographerCredentials = getPhotographerCredentials(photographerId, photographerName)
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleInspect = (cert: Certification) => {
    setSelectedCert(cert)
    setIsModalOpen(true)
  }

  return (
    <section className="mt-20 border-t border-line pt-16">
      {/* Header Banner */}
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-brass/40 bg-brass/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-brass">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-600" />
            Verified Professional Credentials & Accreditation
          </div>
          <h2 className="mt-2 font-display text-4xl text-ink">
            Master Standing & Official Certifications
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-mute">
            Every Northlight artist undergoes strict background vetting, guild certification audits, and equipment calibration benchmarks before undertaking private client commissions.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <div className="rounded border border-emerald-300 bg-emerald-50 px-3.5 py-2 text-right">
            <span className="block text-[10px] font-bold uppercase tracking-wider text-emerald-900">
              Licensing Status
            </span>
            <span className="font-mono text-xs font-semibold text-emerald-800">
              Active · {creds.licenseNumber}
            </span>
          </div>
        </div>
      </div>

      {/* 4-Column Vetted Metrics */}
      <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
        <div className="border border-line bg-cream p-5">
          <p className="text-[10px] uppercase tracking-[0.18em] text-mute">Experience Benchmarks</p>
          <p className="mt-2 font-display text-3xl text-ink font-semibold">{creds.yearsExperience}+ Years</p>
          <p className="mt-1 text-[11px] text-brass">Verified Continuous Practice</p>
        </div>

        <div className="border border-line bg-cream p-5">
          <p className="text-[10px] uppercase tracking-[0.18em] text-mute">Client Commissions</p>
          <p className="mt-2 font-display text-3xl text-ink font-semibold">{creds.sittingsCompleted}+</p>
          <p className="mt-1 text-[11px] text-brass">Completed & Vault-Archived</p>
        </div>

        <div className="border border-line bg-cream p-5">
          <p className="text-[10px] uppercase tracking-[0.18em] text-mute">Commercial Insurance</p>
          <p className="mt-2 font-display text-2xl text-ink font-semibold">₹1 Crore</p>
          <p className="mt-1 text-[11px] text-brass">Public & Equipment Indemnity</p>
        </div>

        <div className="border border-line bg-cream p-5">
          <p className="text-[10px] uppercase tracking-[0.18em] text-mute">Guild Accreditation</p>
          <p className="mt-2 font-display text-2xl text-ink font-semibold">Master Standing</p>
          <p className="mt-1 text-[11px] text-brass">Verified Since {creds.verifiedSince}</p>
        </div>
      </div>

      {/* Official Certifications Grid */}
      <div className="mt-8 space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="font-display text-2xl text-ink">Conferred International & Technical Accreditations</h3>
          <span className="text-xs text-mute">Click any certificate to inspect official guild seal</span>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {creds.certifications.map((cert) => {
            const categoryBadge = {
              'International Guild': 'bg-indigo-50 text-indigo-900 border-indigo-200',
              'Camera Manufacturer': 'bg-amber-50 text-amber-900 border-amber-200',
              'Fine-Art Institute': 'bg-rose-50 text-rose-900 border-rose-200',
              'Studio Safety': 'bg-emerald-50 text-emerald-900 border-emerald-200',
            }[cert.category]

            return (
              <div
                key={cert.id}
                className="group relative flex flex-col justify-between border border-line bg-cream p-6 transition-all hover:border-ink/60 hover:shadow-md"
              >
                <div>
                  <div className="flex items-start justify-between gap-2">
                    <span
                      className={`inline-block rounded border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${categoryBadge}`}
                    >
                      {cert.category}
                    </span>

                    <span className="flex items-center gap-1 text-[11px] font-semibold text-emerald-700">
                      <span>✓</span> {cert.status}
                    </span>
                  </div>

                  <h4 className="mt-3 font-display text-xl text-ink font-medium leading-snug group-hover:text-brass transition-colors">
                    {cert.title}
                  </h4>

                  <p className="mt-1 text-xs text-brass font-medium">
                    {cert.issuer} · {cert.issuerCountry} ({cert.year})
                  </p>

                  <p className="mt-3 text-xs leading-relaxed text-mute line-clamp-3">
                    {cert.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {cert.skillsVerified.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="rounded bg-paper px-2 py-0.5 text-[10px] text-mute border border-line/60"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-line/50 pt-4">
                  <span className="font-mono text-[10px] text-mute">
                    ID: {cert.certificateNumber}
                  </span>

                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={() => handleInspect(cert)}
                    className="text-xs"
                  >
                    Inspect Certificate ↗
                  </Button>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Studio Provenance & Authenticity Commitments */}
      <div className="mt-8 rounded border border-brass/40 bg-gradient-to-r from-cream via-[#fbf8f2] to-[#f4ede0] p-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl">
            <span className="text-[10px] uppercase tracking-[0.24em] text-brass font-bold">
              Trust & Provenance Guarantee
            </span>
            <h4 className="font-display text-xl text-ink font-semibold mt-0.5">
              Zero Unverified Reviews · Guaranteed File Integrity
            </h4>
            <p className="mt-1 text-xs text-mute leading-relaxed">
              We uphold strict photographic ethics. Reviews are restricted solely to confirmed booking references, and all camera bodies utilize simultaneous dual-slot capture.
            </p>
          </div>

          <ul className="space-y-1.5 text-xs text-ink/90">
            {creds.studioGuarantees.map((g, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <span className="text-emerald-700 font-bold">✓</span>
                <span>{g}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Certificate Modal */}
      <PhotographerCertificateModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        certification={selectedCert}
        photographerName={photographerName}
        licenseNumber={creds.licenseNumber}
        guildStanding={creds.guildStanding}
      />
    </section>
  )
}
