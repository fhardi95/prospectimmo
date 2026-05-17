import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-12 mt-auto">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Top row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 rounded-lg bg-electric flex items-center justify-center">
                <span className="text-white font-mono text-xs font-bold">G</span>
              </div>
              <span className="font-semibold text-white tracking-tight">GotProspect</span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed max-w-[200px]">
              Automated lead generation for real estate agents worldwide.
            </p>
          </div>

          {/* Product */}
          <div>
            <p className="text-xs font-mono text-white/30 uppercase tracking-widest mb-4">Product</p>
            <ul className="flex flex-col gap-3">
              <li><Link href="/#features" className="text-sm text-white/50 hover:text-white transition-colors">Features</Link></li>
              <li><Link href="/pricing" className="text-sm text-white/50 hover:text-white transition-colors">Pricing</Link></li>
              <li><Link href="/#testimonials" className="text-sm text-white/50 hover:text-white transition-colors">Reviews</Link></li>
              <li><Link href="/dashboard" className="text-sm text-white/50 hover:text-white transition-colors">Dashboard</Link></li>
            </ul>
          </div>

          {/* Account */}
          <div>
            <p className="text-xs font-mono text-white/30 uppercase tracking-widest mb-4">Account</p>
            <ul className="flex flex-col gap-3">
              <li><Link href="/signup" className="text-sm text-white/50 hover:text-white transition-colors">Sign up free</Link></li>
              <li><Link href="/login" className="text-sm text-white/50 hover:text-white transition-colors">Sign in</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <p className="text-xs font-mono text-white/30 uppercase tracking-widest mb-4">Legal</p>
            <ul className="flex flex-col gap-3">
              <li><Link href="/privacy" className="text-sm text-white/50 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-sm text-white/50 hover:text-white transition-colors">Terms of Service</Link></li>
              <li><a href="mailto:hello@gotprospect.com" className="text-sm text-white/50 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom row */}
        <div className="border-t border-white/[0.06] pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/20">© 2025 GotProspect. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="mailto:hello@gotprospect.com" className="text-xs text-white/30 hover:text-white/60 transition-colors">hello@gotprospect.com</a>
            <a href="https://gotprospect.com" className="text-xs text-white/30 hover:text-white/60 transition-colors">gotprospect.com</a>
          </div>
        </div>

      </div>
    </footer>
  )
}
