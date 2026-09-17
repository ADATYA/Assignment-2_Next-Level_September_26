import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="grain relative overflow-hidden border-b border-white/5">
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(circle at 15% 20%, rgba(228,179,67,0.12), transparent 45%), radial-gradient(circle at 85% 80%, rgba(193,68,59,0.14), transparent 50%), #0D0F1C',
        }}
      />
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-24 sm:py-32 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div className="max-w-prose">
          <p className="mb-4 text-sm font-medium text-gold">Now streaming your curiosity</p>
          <h1 className="font-display text-5xl font-semibold leading-[1.05] text-cream sm:text-6xl">
            Discover movies
            <br />
            worth your evening
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted">
            Explore thousands of titles from around the world, search for old favorites,
            and find your next watch — all in one place.
          </p>
          <Link
            to="/movies"
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 font-medium text-ink transition-transform hover:scale-[1.03] active:scale-[0.98]"
          >
            Explore now
          </Link>
        </div>

        <div className="relative hidden lg:block">
          <div className="grid grid-cols-2 gap-4">
            <div className="mt-10 aspect-[2/3] rounded-2xl bg-surface2 shadow-2xl ring-1 ring-white/5" />
            <div className="aspect-[2/3] rounded-2xl bg-surface2 shadow-2xl ring-1 ring-white/5" />
          </div>
          <div className="pointer-events-none absolute -bottom-6 -left-10 h-40 w-40 rounded-full bg-velvet/20 blur-3xl" />
        </div>
      </div>
    </section>
  )
}
