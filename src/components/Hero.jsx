import { Link } from 'react-router-dom'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative h-[72vh] min-h-[560px] w-full overflow-hidden bg-blue-600">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/5EwoDiC2tChvmy4K/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 via-blue-900/50 to-blue-700/20 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto h-full px-6 flex flex-col justify-end pb-16">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 ring-1 ring-white/30 px-3 py-1 text-white/90 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            Live demo • Research‑backed picks only
          </div>
          <h1 className="mt-4 text-white text-4xl sm:text-5xl font-semibold leading-tight tracking-tight">
            Smarter supplement plans, designed around you
          </h1>
          <p className="mt-4 text-blue-100/95 text-lg">
            A quick survey turns into a clean, personalized stack with dosages, reasons, and sources. Minimal, mobile‑first, and clear.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/survey"
              className="inline-flex items-center justify-center rounded-full bg-white text-blue-900 font-medium px-6 py-3 shadow-sm hover:shadow-md transition-all"
            >
              Start survey
            </Link>
            <a
              href="#how"
              className="inline-flex items-center justify-center rounded-full bg-blue-500/20 text-white ring-1 ring-white/30 px-6 py-3 hover:bg-blue-500/30 transition"
            >
              How it works
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
