import { useState } from 'react'
import HeroDeck from './components/HeroDeck.jsx'
import './App.css'

/**
 * Section 1 of the redesign. Remaining sections are being specified one at a
 * time; the earlier scroll-as-ascent components (AltitudeRail, StatBand,
 * TierList, VisitPanel, BookingBar, TowerSilhouette) are kept in
 * src/components/ but are not mounted.
 */
export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="frame">
      <div className="phone">
        <HeroDeck
          menuOpen={menuOpen}
          onToggleMenu={() => setMenuOpen((v) => !v)}
        />
      </div>
    </div>
  )
}
