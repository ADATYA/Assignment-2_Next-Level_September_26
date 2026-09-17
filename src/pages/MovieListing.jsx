import { useEffect, useMemo, useState } from 'react'
import SearchBar from '../components/SearchBar'
import MovieCard from '../components/MovieCard'
import MovieModal from '../components/MovieModal'
import SkeletonCard from '../components/SkeletonCard'
import { fetchAllShows, searchShows, fetchShowDetails } from '../api/tvmaze'

export default function MovieListing() {
  const [allShows, setAllShows] = useState([])
  const [query, setQuery] = useState('')
  const [searchResults, setSearchResults] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [selectedMovie, setSelectedMovie] = useState(null)
  const [modalLoading, setModalLoading] = useState(false)

  // Initial load of the full catalog
  useEffect(() => {
    let cancelled = false
    setLoading(true)
    fetchAllShows()
      .then((data) => {
        if (!cancelled) setAllShows(data)
      })
      .catch(() => {
        if (!cancelled) setError('Could not load movies right now. Please try again shortly.')
      })
      .finally(() => {
        if (!cancelled) setLoading(false)
      })
    return () => {
      cancelled = true
    }
  }, [])

  // Debounced search
  useEffect(() => {
    if (!query.trim()) {
      setSearchResults(null)
      return
    }
    const handle = setTimeout(() => {
      setLoading(true)
      searchShows(query)
        .then((data) => setSearchResults(data))
        .catch(() => setError('Search failed. Please try again.'))
        .finally(() => setLoading(false))
    }, 350)
    return () => clearTimeout(handle)
  }, [query])

  const moviesToShow = useMemo(() => {
    return searchResults !== null ? searchResults : allShows
  }, [searchResults, allShows])

  const handleSeeDetails = async (movie) => {
    setModalLoading(true)
    setSelectedMovie(movie)
    try {
      const full = await fetchShowDetails(movie.id)
      setSelectedMovie(full)
    } catch {
      // fall back to the summary data already shown
    } finally {
      setModalLoading(false)
    }
  }

  return (
    <section className="mx-auto max-w-6xl px-6 py-12">
      <h1 className="font-display text-3xl font-semibold text-cream sm:text-4xl">Browse movies</h1>
      <p className="mt-2 text-muted">Search by title or scroll through the full catalog.</p>

      <div className="mt-8 max-w-xl">
        <SearchBar value={query} onChange={setQuery} />
      </div>

      {error && (
        <p className="mt-8 rounded-lg border border-velvet/40 bg-velvet/10 px-4 py-3 text-sm text-cream">
          {error}
        </p>
      )}

      {!error && !loading && moviesToShow.length === 0 && (
        <div className="mt-16 text-center text-muted">
          <p className="font-display text-xl text-cream">No movies found</p>
          <p className="mt-2">Try a different title or check the spelling.</p>
        </div>
      )}

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {loading
          ? Array.from({ length: 8 }).map((_, i) => <SkeletonCard key={i} />)
          : moviesToShow.map((movie) => (
              <MovieCard key={movie.id} movie={movie} onSeeDetails={handleSeeDetails} />
            ))}
      </div>

      {selectedMovie && (
        <MovieModal
          movie={selectedMovie}
          onClose={() => setSelectedMovie(null)}
          loading={modalLoading}
        />
      )}
    </section>
  )
}
