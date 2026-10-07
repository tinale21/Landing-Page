import { useCallback, useState } from 'react'
import { useScrollAscent } from './hooks/useScrollAscent.js'
import AltitudeRail from './components/AltitudeRail.jsx'
import Hero from './components/Hero.jsx'
import StatBand from './components/StatBand.jsx'
import TierList from './components/TierList.jsx'
import VisitPanel from './components/VisitPanel.jsx'
import BookingBar from './components/BookingBar.jsx'
import { TOWER } from './data/tower.js'
import './App.css'

export default function App() {
  const { progress, metres } = useScrollAscent(TOWER.heightM)
  const [selected, setSelected] = useState(null)

  const scrollToTickets = useCallback(() => {
    document.getElementById('tickets')?.scrollIntoView({
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches
        ? 'auto'
        : 'smooth',
      block: 'start',
    })
  }, [])

  const select = useCallback((id) => {
    setSelected((prev) => (prev === id ? null : id))
  }, [])

  return (
    <div className="frame">
      <div className="phone">
        <AltitudeRail progress={progress} />

        <Hero progress={progress} onBook={scrollToTickets} />

        <main>
          <StatBand />
          <TierList selected={selected} onSelect={select} />
          <VisitPanel />
        </main>

        <footer className="foot">
          <p>
            Student redesign concept. Not affiliated with Emaar Properties or
            Burj Khalifa.
          </p>
        </footer>

        <BookingBar
          selected={selected}
          metres={metres}
          onOpenTickets={scrollToTickets}
        />
      </div>
    </div>
  )
}
