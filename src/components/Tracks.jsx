import { Code2, Cpu, Globe, Shield, Sparkles } from 'lucide-react'

const tracks = [
  {
    icon: Code2,
    name: 'AI + Productivity',
    desc: 'Build copilots, agents, and tooling that make work 10x faster.'
  },
  {
    icon: Cpu,
    name: 'Hardware + IoT',
    desc: 'Combine sensors, microcontrollers, and software into magical demos.'
  },
  {
    icon: Globe,
    name: 'Web + Mobile',
    desc: 'Ship delightful apps with modern web and native tooling.'
  },
  {
    icon: Shield,
    name: 'Security',
    desc: 'Create tools that keep people and systems safe.'
  }
]

export default function Tracks() {
  return (
    <section id="tracks" className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between gap-6 mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">Choose your track</h2>
            <p className="mt-2 text-gray-600">Pick a direction that excites you. Build solo or with teammates.</p>
          </div>
          <span className="hidden md:inline-flex items-center gap-2 text-indigo-700 bg-indigo-50 border border-indigo-200 px-3 py-1 rounded-full text-sm font-medium">
            <Sparkles className="h-4 w-4" /> Prizes for each track
          </span>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tracks.map(({ icon: Icon, name, desc }) => (
            <div key={name} className="group rounded-2xl border border-gray-200 bg-white hover:border-indigo-300 hover:shadow-lg transition overflow-hidden">
              <div className="p-6">
                <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-indigo-600 to-violet-600 text-white grid place-items-center shadow-sm">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-semibold text-gray-900">{name}</h3>
                <p className="mt-2 text-gray-600 text-sm">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
