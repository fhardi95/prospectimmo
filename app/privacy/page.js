export const metadata = {
  title: 'Privacy Policy — GotProspect',
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-navy-900">
      <nav className="border-b border-white/[0.06] bg-navy-900/80 backdrop-blur-xl px-6 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-electric flex items-center justify-center">
            <span className="text-white font-mono text-xs font-bold">P</span>
          </div>
          <span className="font-semibold text-white tracking-tight">GotProspect</span>
        </a>
      </nav>

      <div className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-white mb-2">Privacy Policy</h1>
        <p className="text-white/40 text-sm mb-12">Last updated: May 2025</p>

        <div className="flex flex-col gap-10 text-white/70 leading-relaxed">

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">1. Who we are</h2>
            <p>GotProspect ("we", "us", "our") is an automated lead generation platform for real estate agents, operated at <a href="https://gotprospect.com" className="text-electric hover:underline">gotprospect.com</a>. We are committed to protecting your personal information and your right to privacy.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">2. Information we collect</h2>
            <p className="mb-3">We collect the following information when you use our service:</p>
            <ul className="list-disc list-inside flex flex-col gap-2 text-white/60">
              <li>Account information: name, email address, password</li>
              <li>Billing information: processed securely by Stripe (we never store card details)</li>
              <li>Usage data: leads imported, emails sent, campaign activity</li>
              <li>Technical data: IP address, browser type, device information</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">3. How we use your information</h2>
            <ul className="list-disc list-inside flex flex-col gap-2 text-white/60">
              <li>To provide and maintain our service</li>
              <li>To process payments and manage subscriptions</li>
              <li>To send transactional emails (receipts, account updates)</li>
              <li>To improve our platform and user experience</li>
              <li>To comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">4. Data sharing</h2>
            <p>We do not sell your personal data. We share data only with trusted third-party services required to operate our platform:</p>
            <ul className="list-disc list-inside flex flex-col gap-2 text-white/60 mt-3">
              <li>Supabase — database and authentication</li>
              <li>Stripe — payment processing</li>
              <li>Resend — email delivery</li>
              <li>Vercel — hosting and infrastructure</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">5. Data retention</h2>
            <p>We retain your data for as long as your account is active. You may request deletion of your account and associated data at any time by contacting us.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">6. Your rights</h2>
            <p className="mb-3">You have the right to:</p>
            <ul className="list-disc list-inside flex flex-col gap-2 text-white/60">
              <li>Access the personal data we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Withdraw consent at any time</li>
              <li>Lodge a complaint with a supervisory authority</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">7. Cookies</h2>
            <p>We use essential cookies to keep you logged in and ensure the platform functions correctly. We do not use advertising or tracking cookies.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">8. Contact us</h2>
            <p>For any privacy-related questions, please contact us at <a href="mailto:hello@gotprospect.com" className="text-electric hover:underline">hello@gotprospect.com</a>.</p>
          </section>

        </div>
      </div>
    </div>
  )
}
