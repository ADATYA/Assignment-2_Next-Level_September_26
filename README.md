# 🎬 MovieExplorer

A responsive movie explorer built with React, Vite, and Tailwind CSS. Browse shows, search by title, and view details in an interactive modal — powered by the free [TVMaze API](https://www.tvmaze.com/api).

## Features

- **Home page** — hero banner with a CTA into the listing page, plus a features section
- **Movie listing page** — live search (debounced) over the full TVMaze catalog
- **Movie cards** — poster, title, rating, release year, and a "See details" button
- **Details modal** — backdrop image, rating, release date, genre, overview, and cast; closable via the ✕ button or by clicking the backdrop
- Fully responsive: single column on mobile, up to 4 columns on desktop
- Loading skeletons and graceful error/empty states

## Tech stack

- React 18 + React Router
- Vite
- Tailwind CSS
- TVMaze API (no key required)

## Getting started

```bash
npm install
npm run dev
```

The app runs at `http://localhost:5173`.

### Build for production

```bash
npm run build
npm run preview
```

## Project structure

```
src/
  api/tvmaze.js        # API calls (search, list, details)
  components/          # Navbar, Footer, Hero, SearchBar, MovieCard, MovieModal, SkeletonCard
  pages/                # Home, MovieListing
  App.jsx               # Routes
  main.jsx              # Entry point
```

## Deploying to Vercel

1. Push this project to a GitHub repository.
2. Go to [vercel.com](https://vercel.com) → **New Project** → import the repo.
3. Framework preset: **Vite** (auto-detected). Build command `npm run build`, output directory `dist`.
4. Deploy — Vercel will give you a live URL.

The included `vercel.json` handles client-side routing so refreshing `/movies` doesn't 404.

## Notes

TVMaze is a TV show database rather than a movie-only database, but its free, key-less API matches the assignment's required endpoints (`/shows`, `/search/shows?q=`) and is used here as the "Free Movie Database API".
