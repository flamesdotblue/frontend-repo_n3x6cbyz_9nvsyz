import { Rocket, Calendar } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur bg-white/70 border-b border-black/5">
      <nav className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-indigo-600 to-violet-600 text-white grid place-items-center shadow-sm">
            <Rocket className="h-5 w-5" />
          </div>
          <span className="font-semibold text-gray-900">Ignite Hack</span>
        </a>
        <div className="hidden md:flex items-center gap-6 text-sm text-gray-700">
          <a href="#tracks" className="hover:text-indigo-600 transition">Tracks</a>
          <a href="#schedule" className="hover:text-indigo-600 transition">Schedule</a>
          <a href="#faq" className="hover:text-indigo-600 transition">FAQ</a>
        </div>
        <a href="#register" className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm font-medium shadow">
          <Calendar className="h-4 w-4" />
          Register
        </a>
      </nav>
    </header>
  )
}
