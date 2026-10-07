import TowerSilhouette from './TowerSilhouette.jsx'
import { TOWER } from '../data/tower.js'

export default function Hero({ progress, onBook }) {
  return (
    <header className="hero">
      <TowerSilhouette climb={progress} className="hero__tower" />

      <div className="hero__copy">
        <p className="eyebrow">Downtown Dubai</p>
        <h1 className="hero__title">
          Burj
          <br />
          Khalifa
        </h1>
        <p className="hero__lede">
          {TOWER.heightM} metres. {TOWER.floors} floors. Keep scrolling — you
          are climbing it.
        </p>
        <button type="button" className="btn btn--primary" onClick={onBook}>
          Choose your ascent
        </button>
      </div>

      <p className="hero__scroll-hint">Scroll to ascend ↓</p>
    </header>
  )
}
