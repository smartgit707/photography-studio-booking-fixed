import { useState } from 'react'
import type { Certification } from '@/lib/photographer-credentials'
import { Button } from '@/components/ui/Button'

interface Props {
  isOpen: boolean
  onClose: () => void
  certification: Certification | null
  photographerName: string
  licenseNumber: string
  guildStanding: string
}

export function PhotographerCertificateModal({
  isOpen,
  onClose,
  certification,
  photographerName,
  licenseNumber,
  guildStanding,
}: Props) {
  const [copiedHash, setCopiedHash] = useState(false)

  if (!isOpen || !certification) return null

  const handleCopyHash = () => {
    navigator.clipboard?.writeText(certification.verificationHash)
    setCopiedHash(true)
    setTimeout(() => setCopiedHash(false), 3000)
  }

  const handlePrint = () => {
    window.print()
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-ink/80 p-4 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative my-8 w-full max-w-3xl overflow-hidden rounded border-2 border-brass/70 bg-[#faf8f3] p-8 shadow-2xl transition-all md:p-12 text-ink print:m-0 print:border-none print:p-4 print:shadow-none"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Controls (Hidden on Print) */}
        <div className="mb-6 flex items-center justify-between border-b border-line pb-4 print:hidden">
          <div className="flex items-center gap-2">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-600 animate-pulse" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brass">
              Official Registry Authenticated Document
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Button variant="secondary" size="sm" onClick={handlePrint} className="text-xs">
              ⎙ Print / Export PDF
            </Button>
            <button
              onClick={onClose}
              className="rounded border border-line bg-cream p-1.5 text-xs text-mute hover:border-ink hover:text-ink transition"
              aria-label="Close"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Certificate Border Frame */}
        <div className="relative border-4 border-double border-brass/50 bg-[#fffdf9] p-8 md:p-12 text-center shadow-inner">
          {/* Corner Flourishes */}
          <div className="absolute top-2 left-2 text-brass/40 text-lg font-serif">❖</div>
          <div className="absolute top-2 right-2 text-brass/40 text-lg font-serif">❖</div>
          <div className="absolute bottom-2 left-2 text-brass/40 text-lg font-serif">❖</div>
          <div className="absolute bottom-2 right-2 text-brass/40 text-lg font-serif">❖</div>

          {/* Crest & Header */}
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border-2 border-brass bg-cream text-brass shadow-sm">
            <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 21l-8-4.5V7.5L12 3l8 4.5v9L12 21z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 12l8-4.5M12 12v9M12 12L4 7.5" />
            </svg>
          </div>

          <p className="mt-4 text-[10px] uppercase tracking-[0.28em] text-brass font-bold">
            Northlight Heritage Studio Guild · Registry of Accredited Masters
          </p>

          <h2 className="mt-2 font-display text-2xl md:text-3xl tracking-tight text-ink uppercase">
            Certificate of Professional Mastery
          </h2>
          <p className="text-xs italic text-mute">
            Issued in Recognition of Consummate Artistic Craft & Optical Rigor
          </p>

          <div className="my-6 mx-auto h-px w-24 bg-brass/60" />

          {/* Conferred to */}
          <p className="text-xs uppercase tracking-[0.2em] text-mute">This is to officially certify that</p>
          <h3 className="mt-2 font-display text-4xl md:text-5xl text-ink font-semibold tracking-wide">
            {photographerName}
          </h3>

          <p className="mt-2 text-sm text-brass font-medium italic">
            {guildStanding} · License {licenseNumber}
          </p>

          {/* Certification Subject */}
          <div className="my-6 rounded border border-brass/20 bg-cream/70 p-4 md:p-6 text-left">
            <p className="text-[10px] uppercase tracking-[0.2em] text-mute font-semibold">
              Accreditation Awarded:
            </p>
            <p className="mt-1 font-display text-xl md:text-2xl text-ink font-semibold">
              {certification.title}
            </p>
            <p className="mt-1 text-xs text-brass font-medium">
              Conferred by: <span className="text-ink">{certification.issuer}</span> ({certification.issuerCountry}) · Class of {certification.year}
            </p>

            <p className="mt-3 text-xs leading-relaxed text-mute">
              {certification.description}
            </p>

            {/* Verified Skills */}
            <div className="mt-4 flex flex-wrap items-center gap-2 pt-3 border-t border-line/50">
              <span className="text-[10px] uppercase tracking-wider text-mute font-bold">
                Audited Competencies:
              </span>
              {certification.skillsVerified.map((skill, idx) => (
                <span
                  key={idx}
                  className="rounded-full bg-brass/10 border border-brass/30 px-2.5 py-0.5 text-[10px] font-medium text-brass"
                >
                  ✓ {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Seals, Signatures & Hash Footer */}
          <div className="mt-8 grid grid-cols-1 gap-6 border-t border-line/60 pt-6 sm:grid-cols-3 sm:items-end text-center">
            {/* Signature 1 */}
            <div>
              <div className="mx-auto h-9 w-28 border-b border-ink/40 font-serif italic text-base text-ink flex items-end justify-center pb-1">
                A. de Villiers
              </div>
              <p className="mt-1 text-[10px] uppercase tracking-wider font-semibold text-ink">
                Lord Alistair de Villiers
              </p>
              <p className="text-[9px] text-mute">Dean of Visual Accreditations</p>
            </div>

            {/* Golden Wax Seal */}
            <div className="flex flex-col items-center">
              <div className="relative flex h-20 w-20 items-center justify-center rounded-full border-4 border-brass bg-gradient-to-tr from-[#9b7631] via-[#d4af37] to-[#f9e596] shadow-lg text-cream">
                <div className="text-center">
                  <span className="block text-[8px] font-black uppercase tracking-widest text-ink">OFFICIAL</span>
                  <span className="block text-base font-serif text-ink">★</span>
                  <span className="block text-[8px] font-bold text-ink">SEAL</span>
                </div>
              </div>
              <span className="mt-2 text-[10px] font-semibold text-emerald-800 uppercase tracking-wider">
                ● {certification.status}
              </span>
            </div>

            {/* Signature 2 */}
            <div>
              <div className="mx-auto h-9 w-28 border-b border-ink/40 font-serif italic text-base text-ink flex items-end justify-center pb-1">
                K. Sen-Gupta
              </div>
              <p className="mt-1 text-[10px] uppercase tracking-wider font-semibold text-ink">
                Dr. Kalyani Sen-Gupta
              </p>
              <p className="text-[9px] text-mute">Registrar General of Guild</p>
            </div>
          </div>

          {/* Certificate Registration & Hash Bar */}
          <div className="mt-8 rounded bg-cream/90 p-3 text-left border border-line text-[10px] font-mono flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <div>
              <span className="text-mute">REGISTRATION NO: </span>
              <strong className="text-ink">{certification.certificateNumber}</strong>
            </div>

            <div className="flex items-center gap-2">
              <span className="truncate max-w-[200px] text-mute" title={certification.verificationHash}>
                {certification.verificationHash.slice(0, 24)}...
              </span>
              <button
                onClick={handleCopyHash}
                className="rounded border border-line bg-paper px-2 py-0.5 text-[9px] text-ink hover:bg-cream transition font-sans"
              >
                {copiedHash ? '✓ Copied Hash' : 'Copy Hash'}
              </button>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <p className="mt-4 text-center text-[10px] text-mute print:hidden">
          Official Northlight Master Credential. Non-revocable and verifiable on public industry registry.
        </p>
      </div>
    </div>
  )
}
