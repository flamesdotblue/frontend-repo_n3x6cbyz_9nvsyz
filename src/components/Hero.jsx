import { Rocket, MapPin, Clock } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="relative pt-28 md:pt-32">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-0 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.15),transparent_60%)]" />
      <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 text-indigo-700 px-3 py-1 text-xs font-medium mb-5">
            <Rocket className="h-4 w-4" />
            36-hour student hackathon
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900">
            Build Bold. Ship Fast. Win Big.
          </h1>
          <p className="mt-4 text-lg text-gray-600 leading-relaxed">
            Join hundreds of makers for a weekend of building, learning, and shipping. Form a team, pick a track, and create something remarkable.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-gray-700">
            <span className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-lg px-3 py-2">
              <MapPin className="h-4 w-4 text-indigo-600" />
              San Francisco + Online
            </span>
            <span className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-lg px-3 py-2">
              <Clock className="h-4 w-4 text-indigo-600" />
              May 24–26, 2025
            </span>
          </div>
          <div className="mt-8 flex gap-3">
            <a href="#register" className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-5 py-3 text-white font-semibold shadow hover:bg-indigo-700">
              Register now
            </a>
            <a href="#tracks" className="inline-flex items-center justify-center rounded-lg bg-white px-5 py-3 text-gray-900 font-semibold border border-gray-200 hover:bg-gray-50">
              Explore tracks
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[4/3] w-full rounded-2xl bg-gradient-to-br from-indigo-500 via-violet-500 to-fuchsia-500 p-1 shadow-lg">
            <div className="h-full w-full rounded-2xl bg-white grid place-items-center text-center p-10">
              <div className="mx-auto max-w-md">
                <div className="text-7xl">🚀</div>
                <p className="mt-4 text-gray-800 text-lg font-semibold">Hack. Collaborate. Launch.</p>
                <p className="text-gray-600">Prototype with AI, ship a demo, and wow the judges.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
