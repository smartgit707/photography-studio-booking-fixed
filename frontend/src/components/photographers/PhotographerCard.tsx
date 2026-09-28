import { Link } from '@tanstack/react-router'
import { portraitForId } from '@/lib/images'
import type { PhotographerListItem } from '@/lib/types'
import { Photo } from '@/components/ui/Photo'
import { TiltCard } from '@/components/ui/TiltCard'
import { getPhotographerCredentials } from '@/lib/photographer-credentials'

export function PhotographerCard({
  photographer,
  portraitUrl,
}: {
  photographer: PhotographerListItem
  portraitUrl?: string
}) {
  const src = portraitUrl || portraitForId(photographer.id, photographer.full_name)
  const creds = getPhotographerCredentials(photographer.id, photographer.full_name)
  return (
    <TiltCard className="h-full">
      <article className="group h-full flex flex-col justify-between rounded border border-line/60 bg-cream/40 p-3 transition-shadow duration-300 hover:shadow-xl hover:border-line">
        <div>
          <Link
            to="/photographers/$photographerId"
            params={{ photographerId: photographer.id }}
            className="img-zoom block aspect-[3/4] overflow-hidden rounded relative"
          >
            <Photo src={src} alt={photographer.full_name} />
            <div className="absolute top-2 left-2 flex items-center gap-1 rounded bg-ink/80 px-2 py-0.5 text-[9px] font-semibold text-cream backdrop-blur-xs">
              <span className="text-emerald-400">✓</span> Verified Guild Artist
            </div>
          </Link>
          <div className="pt-4">
            <div className="flex items-center justify-between">
              <p className="text-[11px] uppercase tracking-[0.2em] text-brass">
                {(Array.isArray(photographer?.specialties) ? photographer.specialties : []).slice(0, 3).join(' · ') || 'Photographer'}
              </p>
            </div>
            <h3 className="mt-1 font-display text-2xl text-ink">
              <Link to="/photographers/$photographerId" params={{ photographerId: photographer.id }} className="hover:text-brass transition-colors">
                {photographer.full_name}
              </Link>
            </h3>

            {/* Credential Badge */}
            <div className="mt-2 flex items-center gap-1.5 text-[10px] text-emerald-800 font-semibold bg-emerald-50 border border-emerald-200/80 rounded px-2 py-0.5 w-fit">
              <span>✓ Guild Master</span>
              <span className="text-emerald-400">·</span>
              <span>{creds.yearsExperience}+ Yrs Practice</span>
            </div>

            <p className="mt-2 line-clamp-3 text-xs leading-relaxed text-mute">
              {photographer.bio || 'A Northlight photographer.'}
            </p>
          </div>
        </div>
        <Link
          to="/photographers/$photographerId"
          params={{ photographerId: photographer.id }}
          className="mt-4 inline-block text-xs uppercase tracking-[0.18em] text-ink underline decoration-line underline-offset-8 hover:decoration-ink"
        >
          View profile
        </Link>
      </article>
    </TiltCard>
  )
}
