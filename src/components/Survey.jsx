import { useMemo, useState } from 'react'

const fields = [
  { key: 'energy', label: 'Energy levels', type: 'scale' },
  { key: 'gut_health', label: 'Gut health', type: 'scale' },
  { key: 'muscle_gain', label: 'Muscle gain', type: 'scale' },
  { key: 'stress', label: 'Stress', type: 'scale' },
  { key: 'sleep', label: 'Sleep quality', type: 'scale' },
  { key: 'allergies', label: 'Allergies (seasonal or perennial)', type: 'scale' },
  { key: 'autoimmune', label: 'Autoimmune issues (eczema, asthma)', type: 'scale' },
  { key: 'skin', label: 'Acne or skin concerns', type: 'scale' },
  { key: 'digestion', label: 'Digestive issues (bloating, irregularity)', type: 'scale' },
  { key: 'country', label: 'Country', type: 'text' },
  { key: 'email', label: 'Email to receive your full plan', type: 'email' },
]

function Scale({ value, onChange }){
  return (
    <div className="flex items-center gap-2">
      {[1,2,3,4,5].map(n => (
        <button
          key={n}
          type="button"
          onClick={() => onChange(n)}
          className={`h-11 w-11 rounded-xl border transition ${value===n? 'bg-blue-600 border-blue-600 text-white':'border-slate-300 text-slate-600 hover:border-blue-400 hover:bg-blue-50'}`}
        >{n}</button>
      ))}
    </div>
  )
}

export default function Survey({ onComplete }){
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState({
    energy: 3, gut_health: 3, muscle_gain: 3, stress: 3, sleep: 3, allergies: 2,
    autoimmune: 2, skin: 2, digestion: 3, country: '', email: ''
  })

  const current = fields[step]
  const total = fields.length

  const canNext = useMemo(() => {
    if(current.type==='text') return answers[current.key].trim().length>1
    if(current.type==='email') return /.+@.+\..+/.test(answers.email)
    return answers[current.key] >= 1
  }, [current, answers])

  function setValue(key, value){ setAnswers(a => ({...a, [key]: value})) }

  async function finish(){
    const payload = {
      energy: answers.energy,
      gut_health: answers.gut_health,
      muscle_gain: answers.muscle_gain,
      stress: answers.stress,
      sleep: answers.sleep,
      allergies: answers.allergies,
      autoimmune: answers.autoimmune,
      skin: answers.skin,
      digestion: answers.digestion,
      country: answers.country,
      email: answers.email || undefined,
    }
    const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/recommend`,{
      method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(payload)
    })
    const data = await res.json()

    if(answers.email){
      fetch(`${import.meta.env.VITE_BACKEND_URL}/send-email`,{
        method:'POST', headers:{'Content-Type':'application/json'},
        body: JSON.stringify({ email: answers.email, recommendations: data.recommendations })
      }).catch(()=>{})
    }

    onComplete({ ...data, email: answers.email })
  }

  return (
    <section className="bg-white">
      <div className="max-w-xl mx-auto px-6 py-12">
        <div className="mb-6 text-sm text-slate-500">Step {step+1} of {total}</div>
        <h2 className="text-2xl font-semibold text-slate-900 tracking-tight">{current.label}</h2>
        <p className="mt-2 text-slate-500 text-sm">Rate 1–5 where 5 means you want the most help.</p>
        <div className="mt-6">
          {current.type==='scale' && (
            <Scale value={answers[current.key]} onChange={v=>setValue(current.key, v)} />
          )}
          {current.type==='text' && (
            <input value={answers.country} onChange={e=>setValue('country', e.target.value)} placeholder="e.g., United Kingdom" className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          )}
          {current.type==='email' && (
            <input type="email" value={answers.email} onChange={e=>setValue('email', e.target.value)} placeholder="you@example.com" className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          )}
        </div>

        <div className="mt-8 flex items-center justify-between">
          <button
            className="px-4 py-2 rounded-full border border-slate-300 text-slate-700 disabled:opacity-50"
            disabled={step===0}
            onClick={()=>setStep(s=>Math.max(0,s-1))}
          >Back</button>

          {step < total-1 ? (
            <button
              className="px-6 py-3 rounded-full bg-blue-600 text-white disabled:opacity-50 shadow-sm hover:shadow"
              disabled={!canNext}
              onClick={()=> canNext && setStep(s=>Math.min(total-1,s+1))}
            >Next</button>
          ):(
            <button
              className="px-6 py-3 rounded-full bg-blue-600 text-white shadow-sm hover:shadow"
              onClick={finish}
            >See my plan</button>
          )}
        </div>
      </div>
    </section>
  )
}
