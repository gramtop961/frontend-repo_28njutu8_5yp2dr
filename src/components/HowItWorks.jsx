export default function HowItWorks() {
  const steps = [
    { title: 'Answer', desc: '10–15 quick questions about your goals and health.' },
    { title: 'Analyze', desc: 'We map your answers to evidence‑based nutrients only.' },
    { title: 'Get Plan', desc: 'Receive a clean list with dosages, sources, and purchase links.' },
  ]
  return (
    <section id="how" className="bg-white">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center">
          <span className="inline-block rounded-full bg-blue-50 text-blue-700 px-3 py-1 text-xs font-medium">3 easy steps</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-semibold text-slate-900 tracking-tight">How it works</h2>
          <p className="mt-3 text-slate-600">No fluff. Just a simple path from questions to clear actions.</p>
        </div>
        <div className="mt-12 grid sm:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <div key={s.title} className="rounded-2xl border border-slate-200 p-6 hover:shadow-md transition group">
              <div className="text-slate-900 font-medium flex items-center gap-2">
                <span className="h-6 w-6 rounded-full bg-blue-600 text-white grid place-items-center text-xs">{i+1}</span>
                {s.title}
              </div>
              <p className="mt-2 text-slate-600 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
