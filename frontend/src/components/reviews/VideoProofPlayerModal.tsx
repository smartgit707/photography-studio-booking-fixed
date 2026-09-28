import { useState } from 'react'
import type { VideoProof } from '@/lib/video-proofs'

interface Props {
  isOpen: boolean
  onClose: () => void
  proof: VideoProof | null
}

export function VideoProofPlayerModal({ isOpen, onClose, proof }: Props) {
  const [copiedHash, setCopiedHash] = useState(false)
  const [isMuted, setIsMuted] = useState(true)

  if (!isOpen || !proof) return null

  const handleCopyHash = () => {
    navigator.clipboard?.writeText(proof.verifiedInvoiceHash)
    setCopiedHash(true)
    setTimeout(() => setCopiedHash(false), 3000)
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-ink/90 p-4 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative my-8 w-full max-w-4xl overflow-hidden rounded border border-line bg-paper shadow-2xl text-ink"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between border-b border-line bg-cream px-6 py-3">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-rose-600 animate-pulse" />
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-brass">
              Audited Client Video Proof & BTS Reel
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="rounded bg-emerald-100 text-emerald-800 px-2 py-0.5 text-[10px] font-mono font-semibold">
              ✓ {proof.bookingRef}
            </span>
            <button
              onClick={onClose}
              className="rounded border border-line bg-paper px-2 py-1 text-xs text-mute hover:text-ink transition"
            >
              ✕ Close
            </button>
          </div>
        </div>

        {/* Modal Body: Video + Dossier */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_0.9fr]">
          {/* Left: Video Player */}
          <div className="relative flex flex-col justify-center bg-black">
            <div className="relative aspect-video w-full overflow-hidden bg-black">
              <video
                key={proof.videoUrl}
                src={proof.videoUrl}
                poster={proof.thumbnailUrl}
                controls
                autoPlay
                playsInline
                muted={isMuted}
                className="h-full w-full object-cover"
              >
                Your browser does not support HTML5 video playback.
              </video>

              {/* Sound Toggle Button */}
              <button
                type="button"
                onClick={() => setIsMuted(!isMuted)}
                className="absolute top-3 right-3 rounded bg-black/75 hover:bg-black/90 px-2.5 py-1 text-xs text-cream/90 backdrop-blur-xs flex items-center gap-1.5 transition cursor-pointer border border-white/20"
              >
                <span>{isMuted ? '🔇 Click to Unmute' : '🔊 Sound Active'}</span>
              </button>

              {/* Verified Watermark Overlay */}
              <div className="pointer-events-none absolute bottom-3 left-3 rounded bg-black/70 px-2.5 py-1 text-[9px] font-mono text-cream/90 backdrop-blur-xs">
                NORTHLIGHT VAULT · REF: {proof.bookingRef}
              </div>
            </div>

            <div className="border-t border-line/30 bg-ink px-4 py-2 text-center text-[10px] text-cream/60">
              Recorded on set during official studio commission · Unedited client remarks
            </div>
          </div>

          {/* Right: Client Dossier & Verified Transcript */}
          <div className="flex flex-col justify-between p-6 bg-cream">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-brass text-sm tracking-widest">★★★★★</span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded">
                  ✓ Verified Sitting
                </span>
              </div>

              <h3 className="mt-2 font-display text-2xl text-ink font-semibold">
                {proof.clientNames}
              </h3>
              <p className="text-xs text-mute">
                {proof.clientLocation} · <span className="text-brass font-medium">{proof.packageName}</span>
              </p>

              {/* Spoken Quote */}
              <div className="mt-4 border-l-2 border-brass pl-3 py-1">
                <p className="text-xs italic leading-relaxed text-ink/90">
                  &ldquo;{proof.spokenQuote}&rdquo;
                </p>
                <p className="mt-1 text-[10px] font-semibold text-brass uppercase tracking-wider">
                  — Spoken on-set testimonial
                </p>
              </div>

              {/* Technical Specifications */}
              <div className="mt-4 space-y-1 text-xs">
                <p className="text-[10px] uppercase tracking-wider font-semibold text-mute">
                  Capture Specifications:
                </p>
                <div className="flex flex-wrap gap-1">
                  {proof.technicalDetails.map((tech, idx) => (
                    <span
                      key={idx}
                      className="rounded bg-paper px-2 py-0.5 text-[10px] text-mute border border-line"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Proof Details */}
            <div className="mt-6 border-t border-line pt-4">
              <div className="flex items-center justify-between text-xs">
                <span className="text-mute">Lead Artist:</span>
                <strong className="text-ink">{proof.photographerName}</strong>
              </div>

              <div className="mt-1 flex items-center justify-between text-xs">
                <span className="text-mute">Commission Date:</span>
                <span className="text-ink">{proof.date}</span>
              </div>

              {/* Verification Hash */}
              <div className="mt-3 rounded border border-line bg-paper p-2 font-mono text-[9px]">
                <div className="flex items-center justify-between">
                  <span className="text-mute">PROVENANCE HASH:</span>
                  <button
                    onClick={handleCopyHash}
                    className="text-brass hover:text-ink underline uppercase cursor-pointer"
                  >
                    {copiedHash ? '✓ Copied' : 'Copy'}
                  </button>
                </div>
                <p className="truncate text-ink mt-0.5" title={proof.verifiedInvoiceHash}>
                  {proof.verifiedInvoiceHash}
                </p>
              </div>

              <p className="mt-2 text-center text-[10px] text-mute">
                Audited proof guaranteed against synthetic or AI-generated manipulation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
