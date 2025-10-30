import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Tracks from './components/Tracks'
import FAQ from './components/FAQ'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Tracks />
        <section id="schedule" className="py-20 bg-gradient-to-b from-white to-gray-50">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Weekend schedule</h2>
            <p className="mt-2 text-gray-600">Plan your sprint from kickoff to demo day.</p>
            <div className="mt-8 grid md:grid-cols-3 gap-6">
              <div className="rounded-2xl border border-gray-200 bg-white p-6">
                <h3 className="font-semibold text-gray-900">Day 1 — Kickoff</h3>
                <ul className="mt-3 text-sm text-gray-600 space-y-1">
                  <li>5:00 PM — Check-in & team formation</li>
                  <li>6:00 PM — Opening ceremony</li>
                  <li>7:00 PM — Hacking begins</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-gray-200 bg-white p-6">
                <h3 className="font-semibold text-gray-900">Day 2 — Build</h3>
                <ul className="mt-3 text-sm text-gray-600 space-y-1">
                  <li>Mentor office hours all day</li>
                  <li>Workshops and checkpoints</li>
                  <li>Midnight snack run</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-gray-200 bg-white p-6">
                <h3 className="font-semibold text-gray-900">Day 3 — Demo day</h3>
                <ul className="mt-3 text-sm text-gray-600 space-y-1">
                  <li>10:00 AM — Code freeze</li>
                  <li>1:00 PM — Demos & judging</li>
                  <li>4:00 PM — Awards & closing</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <FAQ />
      </main>
      <footer className="border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600">© {new Date().getFullYear()} Ignite Hack. All rights reserved.</p>
          <a href="#register" className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm font-medium shadow">Join the hackathon</a>
        </div>
      </footer>
    </div>
  )
}

export default App
