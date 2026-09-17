import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import MovieListing from './pages/MovieListing'

export default function App() {
  return (
    <div className="flex min-h-screen flex-col bg-ink text-cream">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<MovieListing />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
