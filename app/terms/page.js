import Footer from '@/components/Footer'
import Link from 'next/link'

export const metadata = {
  title: 'Terms of Service — GotProspect',
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-navy-900 flex flex-col">
      <nav className="border-b border-white/[0.06] bg-navy-900/80 backdrop-blur-xl px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-electric flex items-center justify-center">
            <span className="text-white font-mono text-xs font-bold">G</span>
          </div>
          <span className="font-semibold text-white tracking-tight">GotProspect</span>
        </Link>
        <Link href="/signup" className="text-sm bg-electric hover:bg-electric-light transition-colors text-white px-4 py-2 rounded-lg font-medium">Start free</Link>
      </nav>

      <div className="max-w-3xl mx-auto px-6 py-16 flex-1">
        <h1 className="text-4xl font-bold text-white mb-2">Terms of Service</h1>
        <p className="text-white/40 text-sm mb-12">Last updated: May 2025</p>
        <div className="flex flex-col gap-10 text-white/70 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">1. Acceptance of terms</h2>
            <p>By using GotProspect, you agree to be bound by these Terms of Service.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">2. Description of service</h2>
            <p>GotProspect provides an automated lead generation platform for real estate professionals.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">3. User responsibilities</h2>
            <ul className="list-disc list-inside flex flex-col gap-2 text-white/60">
              <li>Use the Service in compliance with all applicable laws</li>
              <li>Comply with anti-spam laws including CAN-SPAM, GDPR, and CASL</li>
              <li>Not use the Service for any illegal or abusive purposes</li>
              <li>Keep your account credentials secure</li>
            </ul>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">4. Subscription and billing</h2>
            <ul className="list-disc list-inside flex flex-col gap-2 text-white/60">
              <li>Subscriptions are billed monthly in advance</li>
              <li>You may cancel at any time</li>
              <li>No refunds for partial months</li>
              <li>Payments processed securely by Stripe</li>
            </ul>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">5. Limitation of liability</h2>
            <p>GotProspect is provided "as is" without warranties. We are not responsible for damages arising from your use of the Service.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">6. Governing law</h2>
            <p>These Terms are governed by the laws of England and Wales.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">7. Contact us</h2>
            <p>For questions: <a href="mailto:hello@gotprospect.com" className="text-electric hover:underline">hello@gotprospect.com</a></p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  )
}
