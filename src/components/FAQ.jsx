import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const items = [
  {
    q: 'Who can participate?',
    a: 'Students, professionals, and first-time hackers are all welcome. You can join solo or form a team of up to 4.'
  },
  {
    q: 'What should I bring?',
    a: 'Bring your laptop, charger, and any hardware you want to hack with. We\'ll provide Wi‑Fi, snacks, and mentors.'
  },
  {
    q: 'How are projects judged?',
    a: 'Judges evaluate demos based on originality, technical depth, usability, and wow factor. Shipping something that works matters most.'
  },
  {
    q: 'Is there a code of conduct?',
    a: 'Yes. Be kind, be respectful, and help others. Harassment or discrimination of any kind is not tolerated.'
  }
]

function AccordionItem({ q, a, open, onToggle }) {
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden bg-white">
      <button onClick={onToggle} className="w-full flex items-center justify-between gap-4 px-5 py-4">
        <span className="text-left font-medium text-gray-900">{q}</span>
        <ChevronDown className={`h-5 w-5 text-gray-500 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="px-5 pb-5 pt-0 text-gray-600 text-sm leading-relaxed border-t border-gray-100">
          {a}
        </div>
      )}
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)
  return (
    <section id="faq" className="py-20">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 text-center">Frequently asked questions</h2>
        <p className="mt-2 text-gray-600 text-center">Everything you need to know before you hack.</p>
        <div className="mt-8 space-y-3">
          {items.map((it, idx) => (
            <AccordionItem
              key={it.q}
              q={it.q}
              a={it.a}
              open={openIndex === idx}
              onToggle={() => setOpenIndex(openIndex === idx ? -1 : idx)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
