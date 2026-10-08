import { useState } from 'react'
import HeroDeck from './components/HeroDeck.jsx'
import HistorySection from './components/HistorySection.jsx'
import ExperienceSection from './components/ExperienceSection.jsx'
import VenueDetail from './components/VenueDetail.jsx'
import { useHashRoute } from './hooks/useHashRoute.js'
import { CATEGORIES } from './data/venues.js'
import './App.css'

/** Flat lookup so a route id resolves to its venue and its category name. */
function findVenue(id) {
  for (const cat of CATEGORIES) {
    const venue = cat.venues.find((v) => v.id === id)
    if (venue) return { venue, category: cat.title }
  }
  return null
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { venueId } = useHashRoute()
  const hit = venueId ? findVenue(venueId) : null

  return (
    <div className="frame">
      <div className="phone">
        {hit ? (
          <VenueDetail
            venue={hit.venue}
            category={hit.category}
            onBack={() => window.history.back()}
          />
        ) : (
          <>
            <HeroDeck
              menuOpen={menuOpen}
              onToggleMenu={() => setMenuOpen((v) => !v)}
            />
            <main>
              <HistorySection />
              <ExperienceSection />
            </main>
          </>
        )}
      </div>
    </div>
  )
}
