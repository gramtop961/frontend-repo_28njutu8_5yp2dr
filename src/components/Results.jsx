export default function Results({ data }){
  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-sm">
            <img src={data.package_image_url} alt="Personalized supplement pack" className="w-full h-full object-cover" />
          </div>
          <div>
            <h3 className="text-3xl font-semibold text-slate-900 tracking-tight">Your recommended stack</h3>
            <p className="mt-2 text-slate-600">Tailored picks with clear doses and sources. Save or purchase when ready.</p>
            <ul className="mt-6 space-y-5">
              {data.recommendations.map((r)=> (
                <li key={r.name} className="rounded-2xl border border-slate-200 p-5 hover:shadow-sm transition">
                  <div className="flex items-baseline justify-between gap-4">
                    <div>
                      <div className="font-medium text-slate-900">{r.name}</div>
                      {r.dosage && <div className="text-sm text-slate-500">{r.dosage}</div>}
                    </div>
                    <div className="space-x-2">
                      <a href="https://www.iherb.com/" target="_blank" className="px-3 py-1.5 rounded-full border border-slate-300 text-slate-700 hover:bg-slate-50">iHerb</a>
                      <a href="https://www.amazon.com/" target="_blank" className="px-3 py-1.5 rounded-full bg-slate-900 text-white hover:bg-black">Amazon</a>
                    </div>
                  </div>
                  <p className="mt-2 text-slate-600 text-sm leading-relaxed">{r.reason}</p>
                  {r.sources?.length>0 && (
                    <div className="mt-3 text-xs text-slate-500">
                      Sources: {r.sources.join(' • ')}
                    </div>
                  )}
                </li>
              ))}
            </ul>

            {data.email ? (
              <div className="mt-8 rounded-xl bg-blue-50 text-blue-900 px-4 py-3 border border-blue-200">
                We just sent your full plan to {data.email}.
              </div>
            ) : (
              <div className="mt-8 rounded-xl bg-slate-50 text-slate-700 px-4 py-3 border border-slate-200">
                Tip: add your email in the last step to receive a copy automatically.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
