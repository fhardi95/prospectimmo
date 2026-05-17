export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-electric flex items-center justify-center">
            <span className="text-white font-mono text-xs font-bold">P</span>
          </div>
          <span className="text-white/60 text-sm font-medium">ProspectImmo</span>
        </div>

        <div className="flex gap-6 text-xs text-white/30">
          <a href="/privacy" className="hover:text-white/60 transition-colors">Privacy</a>
          <a href="/terms" className="hover:text-white/60 transition-colors">Terms</a>
          <a href="mailto:hello@prospectimmo.com" className="hover:text-white/60 transition-colors">Contact</a>
        </div>

        <p className="text-xs text-white/20">© 2025 ProspectImmo. All rights reserved.</p>
      </div>
    </footer>
  )
}
