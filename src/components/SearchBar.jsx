export default function SearchBar({ value, onChange }) {
  return (
    <div className="relative">
      <svg
        className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <circle cx="11" cy="11" r="7" />
        <path d="m21 21-4.3-4.3" />
      </svg>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search for a movie..."
        aria-label="Search for a movie"
        className="w-full rounded-full border border-white/10 bg-surface py-4 pl-12 pr-5 text-cream placeholder:text-muted focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
      />
    </div>
  )
}
