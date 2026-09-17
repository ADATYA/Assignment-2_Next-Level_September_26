import { useEffect } from 'react'
import { stripHtml } from '../api/tvmaze'

const FALLBACK_IMG =
  'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="450"%3E%3Crect width="100%25" height="100%25" fill="%231E2233"/%3E%3C/svg%3E'

export default function MovieModal({ movie, onClose }) {
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  if (!movie) return null

  const backdrop = movie.image?.original || movie.image?.medium || FALLBACK_IMG
  const rating = movie.rating?.average ?? 'N/A'
  const genres = movie.genres?.join(', ') || 'Unspecified'
  const cast = movie._embedded?.cast?.slice(0, 5).map((c) => c.person?.name).filter(Boolean) || []

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${movie.name} details`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="animate-modal-in scrollbar-thin max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-surface ring-1 ring-white/10"
      >
        <div className="relative">
          <img
            src={backdrop}
            alt={movie.name}
            className="h-64 w-full object-cover sm:h-80"
            onError={(e) => {
              e.currentTarget.src = FALLBACK_IMG
            }}
          />
          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-ink/70 text-cream backdrop-blur hover:bg-velvet transition-colors"
          >
            ✕
          </button>
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-surface to-transparent" />
        </div>

        <div className="px-6 pb-8 pt-2 sm:px-8">
          <h2 className="font-display text-2xl font-semibold text-cream sm:text-3xl">{movie.name}</h2>

          <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted">
            <span className="flex items-center gap-1 text-gold">⭐ Rating: {rating}</span>
            <span>📅 Release: {movie.premiered || 'Unknown'}</span>
            <span>🎭 Genre: {genres}</span>
            {movie.network?.name && <span>📺 {movie.network.name}</span>}
          </div>

          <div className="mt-6">
            <h3 className="mb-2 font-display text-lg font-semibold text-cream">Overview</h3>
            <p className="leading-relaxed text-muted">
              {stripHtml(movie.summary) || 'No overview available for this title.'}
            </p>
          </div>

          {cast.length > 0 && (
            <div className="mt-6">
              <h3 className="mb-2 font-display text-lg font-semibold text-cream">Cast</h3>
              <p className="text-muted">{cast.join(', ')}</p>
            </div>
          )}

          <button
            onClick={onClose}
            className="mt-8 w-full rounded-full border border-white/10 py-3 text-sm font-medium text-cream transition-colors hover:bg-velvet hover:border-velvet sm:w-auto sm:px-8"
          >
            ❌ Close
          </button>
        </div>
      </div>
    </div>
  )
}
