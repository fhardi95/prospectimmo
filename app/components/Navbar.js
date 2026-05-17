'use client'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/[0.06] bg-navy-900/80 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-electric flex items-center justify-center glow-blue">
            <span className="text-white font-mono text-xs font-bold">P</span>
          </div>
          <span className="font-semibold text-white tracking-tight">ProspectImmo</span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm text-white/60">
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
          <a href="#testimonials" className="hover:text-white transition-colors">Reviews</a>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a href="/login" className="text-sm text-white/60 hover:text-white transition-colors px-4 py-2">
            Sign in
          </a>
          <a href="/signup" className="text-sm bg-electric hover:bg-electric-light transition-colors text-white px-4 py-2 rounded-lg font-medium">
            Start free
          </a>
        </div>

        <button
          className="md:hidden text-white/60 hover:text-white"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>
            }
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/[0.06] bg-navy-900/95 px-6 py-4 flex flex-col gap-4 text-sm">
          <a href="#features" className="text-white/60 hover:text-white" onClick={() => setOpen(false)}>Features</a>
          <a href="#pricing" className="text-white/60 hover:text-white" onClick={() => setOpen(false)}>Pricing</a>
          <a href="#testimonials" className="text-white/60 hover:text-white" onClick={() => setOpen(false)}>Reviews</a>
          <a href="/signup" className="bg-electric text-white px-4 py-2 rounded-lg text-center font-medium">Start free</a>
        </div>
      )}
    </nav>
  )
}
