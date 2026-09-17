import Hero from '../components/Hero'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
      <Hero />
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-8 sm:grid-cols-3">
          {[
            { title: 'Browse freely', desc: 'Scroll through a constantly updated catalog of shows and films from every genre.' },
            { title: 'Search instantly', desc: 'Find exactly what you\u2019re looking for the moment you start typing.' },
            { title: 'Dig into details', desc: 'Ratings, summaries, and cast — everything you need before you press play.' },
          ].map((f) => (
            <div key={f.title} className="rounded-xl border border-white/5 bg-surface p-6">
              <h3 className="font-display text-lg font-semibold text-cream">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{f.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center gap-4 rounded-2xl bg-surface px-6 py-12 text-center ring-1 ring-white/5">
          <h2 className="font-display text-2xl font-semibold text-cream sm:text-3xl">
            Ready to find your next watch?
          </h2>
          <p className="max-w-prose text-muted">
            Head to the listing page to browse the full catalog or search for a specific title.
          </p>
          <Link
            to="/movies"
            className="mt-2 inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3 font-medium text-ink transition-transform hover:scale-[1.03] active:scale-[0.98]"
          >
            Browse movies
          </Link>
        </div>
      </section>
    </>
  )
}
