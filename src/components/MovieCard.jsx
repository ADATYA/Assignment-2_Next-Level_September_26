const FALLBACK_IMG =
  'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="300" height="450"%3E%3Crect width="100%25" height="100%25" fill="%231E2233"/%3E%3C/svg%3E'

export default function MovieCard({ movie, onSeeDetails }) {
  const poster = movie.image?.medium || movie.image?.original || FALLBACK_IMG
  const year = movie.premiered ? movie.premiered.slice(0, 4) : '—'
  const rating = movie.rating?.average ?? null

  return (
    <div className="group flex flex-col overflow-hidden rounded-xl bg-surface ring-1 ring-white/5 transition-transform duration-200 hover:-translate-y-1 hover:ring-gold/30">
      <div className="aspect-[2/3] w-full overflow-hidden bg-surface2">
        <img
          src={poster}
          alt={movie.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          onError={(e) => {
            e.currentTarget.src = FALLBACK_IMG
          }}
        />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-4">
        <h3 className="font-display text-base font-semibold leading-snug text-cream line-clamp-2">
          {movie.name}
        </h3>
        <div className="flex items-center gap-3 text-sm text-muted">
          <span className="flex items-center gap-1 text-gold">
            ⭐ {rating ?? 'N/A'}
          </span>
          <span>•</span>
          <span>📅 {year}</span>
        </div>
        <button
          onClick={() => onSeeDetails(movie)}
          className="mt-auto w-full rounded-full border border-gold/40 py-2 text-sm font-medium text-gold transition-colors hover:bg-gold hover:text-ink"
        >
          See details
        </button>
      </div>
    </div>
  )
}
