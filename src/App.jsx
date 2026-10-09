import { useState } from 'react'
import HeroDeck from './components/HeroDeck.jsx'
import HistorySection from './components/HistorySection.jsx'
import ExperienceSection from './components/ExperienceSection.jsx'
import FaqSection from './components/FaqSection.jsx'
import SiteFooter from './components/SiteFooter.jsx'
import VenueDetail from './components/VenueDetail.jsx'
import MainMenu from './components/MainMenu.jsx'
import LanguagePicker from './components/LanguagePicker.jsx'
import SearchOverlay from './components/SearchOverlay.jsx'
import { useHashRoute } from './hooks/useHashRoute.js'
import { CATEGORIES } from './data/venues.js'
import './App.css'

/** Flat lookup so a route id resolves to its venue. */
function findVenue(id) {
  for (const cat of CATEGORIES) {
    const venue = cat.venues.find((v) => v.id === id)
    if (venue) return venue
  }
  return null
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const { venueId } = useHashRoute()
  const venue = venueId ? findVenue(venueId) : null

  return (
    <div className="frame">
      <div className="phone">
        {venue ? (
          <VenueDetail venue={venue} onBack={() => window.history.back()} />
        ) : (
          <>
            <HeroDeck
              menuOpen={menuOpen}
              onToggleMenu={() => setMenuOpen((v) => !v)}
              onOpenLang={() => setLangOpen(true)}
              onOpenSearch={() => setSearchOpen(true)}
            />
            <main>
              <HistorySection />
              <ExperienceSection />
              <FaqSection />
            </main>
            <SiteFooter />
          </>
        )}
        <MainMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
        <LanguagePicker open={langOpen} onClose={() => setLangOpen(false)} />
        <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
      </div>
    </div>
  )
}
