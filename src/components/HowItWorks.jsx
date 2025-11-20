export default function HowItWorks() {
  const steps = [
    { title: 'Answer', desc: '10–15 quick questions about your goals and health.' },
    { title: 'Analyze', desc: 'We map your answers to evidence‑based nutrients only.' },
    { title: 'Get Plan', desc: 'Receive a clean list with dosages, sources, and purchase links.' },
  ]
  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 tracking-tight">How it works</h2>
        <div className="mt-10 grid sm:grid-cols-3 gap-6">
          {steps.map((s) => (
            <div key={s.title} className="rounded-2xl border border-slate-200 p-6 hover:shadow-sm transition">
              <div className="text-slate-900 font-medium">{s.title}</div>
              <p className="mt-2 text-slate-600 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
