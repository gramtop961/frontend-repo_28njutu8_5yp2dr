import { Link } from 'react-router-dom'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative h-[70vh] min-h-[560px] w-full overflow-hidden bg-blue-600">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/5EwoDiC2tChvmy4K/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 via-blue-800/40 to-blue-700/20 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto h-full px-6 flex flex-col justify-end pb-16">
        <div className="max-w-2xl">
          <h1 className="text-white text-4xl sm:text-5xl font-semibold leading-tight tracking-tight">
            SuppAI — Smart, research‑backed supplement plans
          </h1>
          <p className="mt-4 text-blue-100/95 text-lg">
            Answer a quick survey and receive a personalized supplement pack grounded in university‑level research. Clear, minimal, and made for you.
          </p>
          <div className="mt-8">
            <Link
              to="/survey"
              className="inline-flex items-center justify-center rounded-full bg-white text-blue-900 font-medium px-6 py-3 shadow-sm hover:shadow-md transition-all"
            >
              Start Survey
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
