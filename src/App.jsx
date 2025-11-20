import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import Footer from './components/Footer'
import Survey from './components/Survey'
import { useState } from 'react'
import Results from './components/Results'

function Home({ onStart }){
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="font-semibold tracking-tight">SuppAI</Link>
          <Link to="/survey" className="inline-flex items-center justify-center rounded-full bg-slate-900 text-white px-4 py-2 text-sm">Start Survey</Link>
        </div>
      </header>
      <main className="pt-16">
        <Hero />
        <section className="bg-white">
          <div className="max-w-6xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight">Personalized recommendations. Only from real research.</h2>
              <p className="mt-4 text-slate-600 leading-relaxed">
                Your health isn’t one‑size‑fits‑all. SuppAI creates a supplement plan based solely on university‑level research and meta‑analyses. No fads, no hype—just clear guidance tailored to your goals and region.
              </p>
              <ul className="mt-6 space-y-2 text-slate-700 text-sm">
                <li>• Energy, gut health, muscle gain, stress, sleep, allergies</li>
                <li>• Autoimmune (eczema, asthma), skin, digestion, and your country</li>
                <li>• Smooth mobile experience with a minimal blue‑and‑white interface</li>
              </ul>
              <div className="mt-8">
                <Link to="/survey" className="inline-flex items-center justify-center rounded-full bg-blue-600 text-white px-6 py-3 shadow-sm hover:shadow-md transition-all">Start Survey</Link>
              </div>
            </div>
            <div className="rounded-2xl border border-slate-200 p-6 bg-slate-50">
              <div className="h-64 w-full rounded-xl bg-gradient-to-br from-blue-100 to-blue-50 grid place-items-center text-blue-800">Clean, friendly visuals</div>
            </div>
          </div>
        </section>
        <HowItWorks />
      </main>
      <Footer />
    </div>
  )
}

export default function App(){
  const [result, setResult] = useState(null)
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/survey" element={
          result ? <Results data={result} /> : <Survey onComplete={setResult} />
        } />
      </Routes>
    </BrowserRouter>
  )
}
