import Footer from '@/components/Footer'
import Link from 'next/link'

export const metadata = {
  title: 'Privacy Policy — GotProspect',
}

export default function PrivacyPage() {
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
        <h1 className="text-4xl font-bold text-white mb-2">Privacy Policy</h1>
        <p className="text-white/40 text-sm mb-12">Last updated: May 2025</p>
        <div className="flex flex-col gap-10 text-white/70 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">1. Who we are</h2>
            <p>GotProspect is an automated lead generation platform for real estate agents, operated at <a href="https://gotprospect.com" className="text-electric hover:underline">gotprospect.com</a>.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">2. Information we collect</h2>
            <ul className="list-disc list-inside flex flex-col gap-2 text-white/60">
              <li>Account information: name, email address, password</li>
              <li>Billing information: processed securely by Stripe</li>
              <li>Usage data: leads imported, emails sent, campaign activity</li>
              <li>Technical data: IP address, browser type, device information</li>
            </ul>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">3. How we use your information</h2>
            <ul className="list-disc list-inside flex flex-col gap-2 text-white/60">
              <li>To provide and maintain our service</li>
              <li>To process payments and manage subscriptions</li>
              <li>To send transactional emails</li>
              <li>To improve our platform</li>
              <li>To comply with legal obligations</li>
            </ul>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">4. Data sharing</h2>
            <p>We do not sell your personal data. We share data only with: Supabase, Stripe, Resend, and Vercel.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">5. Your rights</h2>
            <ul className="list-disc list-inside flex flex-col gap-2 text-white/60">
              <li>Access the personal data we hold about you</li>
              <li>Request correction or deletion of your data</li>
              <li>Withdraw consent at any time</li>
            </ul>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">6. Contact us</h2>
            <p>For privacy questions: <a href="mailto:hello@gotprospect.com" className="text-electric hover:underline">hello@gotprospect.com</a></p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  )
}
