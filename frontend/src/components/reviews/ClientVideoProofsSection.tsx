import { useState } from 'react'
import {
  getVideoProofsForPhotographer,
  type VideoProof,
} from '@/lib/video-proofs'
import { VideoProofPlayerModal } from './VideoProofPlayerModal'
import { Photo } from '@/components/ui/Photo'

interface Props {
  photographerId?: string
  title?: string
  subtitle?: string
}

export function ClientVideoProofsSection({
  photographerId,
  title = 'Verified Customer Video Proofs & On-Set BTS',
  subtitle = 'Authentic on-set video recordings and reflections from real patrons. Every clip is cryptographically bound to an audited booking ID to guarantee zero fake reviews.',
}: Props) {
  const proofs = getVideoProofsForPhotographer(photographerId)
  const [selectedProof, setSelectedProof] = useState<VideoProof | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleWatch = (proof: VideoProof) => {
    setSelectedProof(proof)
    setIsModalOpen(true)
  }

  return (
    <section className="mt-20 border-t border-line pt-16">
      {/* Section Header */}
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-brass/40 bg-brass/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-brass">
            <span className="inline-block h-2 w-2 rounded-full bg-rose-600 animate-pulse" />
            Zero-Fake Review Guarantee · Video Proofs
          </div>
          <h2 className="mt-2 font-display text-4xl text-ink md:text-5xl">{title}</h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-mute">{subtitle}</p>
        </div>

        <div className="flex items-center gap-3">
          <div className="rounded border border-emerald-300 bg-emerald-50 px-3 py-2 text-right">
            <span className="block text-[10px] font-bold uppercase tracking-wider text-emerald-900">
              Audit Standard
            </span>
            <span className="text-xs font-semibold text-emerald-800">
              100% Watermarked Video Provenance
            </span>
          </div>
        </div>
      </div>

      {/* Trust Highlights Bar */}
      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3 border border-line bg-cream p-4">
        <div className="flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 text-emerald-800 text-sm font-bold">
            ✓
          </span>
          <div>
            <p className="text-xs font-semibold text-ink">Booking Reference Verified</p>
            <p className="text-[11px] text-mute">Bound to real studio invoices</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brass/15 text-brass text-sm font-bold">
            ✦
          </span>
          <div>
            <p className="text-xs font-semibold text-ink">Live Unedited On-Set Audio</p>
            <p className="text-[11px] text-mute">Spoken client reactions during shoot</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-100 text-indigo-800 text-sm font-bold">
            ⬡
          </span>
          <div>
            <p className="text-xs font-semibold text-ink">Zero Synthetic / AI Content</p>
            <p className="text-[11px] text-mute">Audited against stock or fake testimonials</p>
          </div>
        </div>
      </div>

      {/* Video Proofs Grid */}
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {proofs.map((proof) => (
          <div
            key={proof.id}
            onClick={() => handleWatch(proof)}
            className="group cursor-pointer flex flex-col justify-between border border-line bg-cream transition-all hover:border-ink hover:shadow-xl"
          >
            {/* Thumbnail with Overlay & Play Icon */}
            <div className="relative aspect-video w-full overflow-hidden bg-black sm:aspect-[4/3]">
              <Photo
                src={proof.thumbnailUrl}
                alt={proof.clientNames}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-ink/30 transition-opacity group-hover:bg-ink/15" />

              {/* Glowing Play Icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cream/90 text-ink shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:bg-white">
                  <svg className="ml-0.5 h-5 w-5 fill-current text-ink" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>

              {/* Video Duration Pill */}
              <div className="absolute bottom-2 right-2 rounded bg-black/80 px-2 py-0.5 text-[10px] font-mono text-white">
                {proof.duration}
              </div>

              {/* Booking Ref Pill */}
              <div className="absolute top-2 left-2 rounded bg-emerald-900/80 px-2 py-0.5 text-[9px] font-mono text-emerald-200 backdrop-blur-xs">
                {proof.bookingRef}
              </div>
            </div>

            {/* Video Card Content */}
            <div className="flex flex-col justify-between p-4 grow">
              <div>
                <div className="flex items-center gap-1 text-brass text-xs">
                  ★★★★★
                  <span className="text-[10px] font-semibold text-mute ml-1">5.0</span>
                </div>

                <h3 className="mt-1 font-display text-lg text-ink font-semibold group-hover:text-brass transition-colors">
                  {proof.clientNames}
                </h3>
                <p className="text-[11px] text-mute">
                  {proof.clientLocation} · <span className="text-ink font-medium">{proof.packageName}</span>
                </p>

                <p className="mt-2 text-xs italic leading-relaxed text-ink/80 line-clamp-3">
                  &ldquo;{proof.spokenQuote}&rdquo;
                </p>
              </div>

              <div className="mt-4 border-t border-line/60 pt-3">
                <div className="flex items-center justify-between text-[11px]">
                  <span className="text-mute">By {proof.photographerName}</span>
                  <span className="font-semibold text-brass group-hover:underline">
                    Watch Proof ▶
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Video Proof Modal */}
      <VideoProofPlayerModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        proof={selectedProof}
      />
    </section>
  )
}
