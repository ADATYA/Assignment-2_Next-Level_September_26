import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-ink/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2 font-display text-lg font-semibold tracking-tight text-cream">
          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-gold text-gold">
            ●
          </span>
          MovieExplorer
        </Link>

        <div className="flex items-center gap-6">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `hidden text-sm sm:block ${isActive ? 'text-gold' : 'text-muted hover:text-cream'} transition-colors`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/movies"
            className={({ isActive }) =>
              `rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                isActive
                  ? 'bg-gold text-ink'
                  : 'border border-gold/40 text-gold hover:bg-gold hover:text-ink'
              }`
            }
          >
            Movies
          </NavLink>
        </div>
      </nav>
    </header>
  )
}
