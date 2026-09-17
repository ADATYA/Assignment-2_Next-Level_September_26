export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display text-base font-semibold text-cream">MovieExplorer</p>
          <p className="mt-1 text-sm text-muted">© 2026 MovieExplorer. All rights reserved.</p>
        </div>
        <div className="flex gap-5 text-sm text-muted">
          <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-gold transition-colors">
            GitHub
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-gold transition-colors">
            Twitter
          </a>
          <a href="mailto:hello@movieexplorer.app" className="hover:text-gold transition-colors">
            Contact
          </a>
        </div>
      </div>
    </footer>
  )
}
