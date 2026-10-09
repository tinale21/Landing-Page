import { useEffect, useState } from 'react'
import HeroDeck from './components/HeroDeck.jsx'
import HistorySection from './components/HistorySection.jsx'
import ExperienceSection from './components/ExperienceSection.jsx'
import FaqSection from './components/FaqSection.jsx'
import SiteFooter from './components/SiteFooter.jsx'
import VenueDetail from './components/VenueDetail.jsx'
import MainMenu from './components/MainMenu.jsx'
import LanguagePicker from './components/LanguagePicker.jsx'
import SearchOverlay from './components/SearchOverlay.jsx'
import PlanPage from './components/PlanPage.jsx'
import AboutPage from './components/AboutPage.jsx'
import TicketsPage from './components/TicketsPage.jsx'
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
  const { venueId, page, section } = useHashRoute()
  const venue = venueId ? findVenue(venueId) : null

  // A bare hash such as #history routes home. The browser's own scroll-to-
  // anchor fires before this renders, so do it once the section exists.
  useEffect(() => {
    if (!section) return
    requestAnimationFrame(() => {
      document.getElementById(section)?.scrollIntoView({
        behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches
          ? 'auto'
          : 'smooth',
        block: 'start',
      })
    })
  }, [section])

  return (
    <div className="frame">
      <div className="phone">
        {page === 'tickets' ? (
          <TicketsPage onBack={() => window.history.back()} />
        ) : page === 'about' ? (
          <AboutPage onBack={() => window.history.back()} />
        ) : page === 'plan' ? (
          <PlanPage onBack={() => window.history.back()} />
        ) : venue ? (
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
          </>
        )}

        {/* Outside the route branch: every page gets the footer. */}
        <SiteFooter />

        <MainMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
        <LanguagePicker open={langOpen} onClose={() => setLangOpen(false)} />
        <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
      </div>
    </div>
  )
}
