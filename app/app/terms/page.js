export const metadata = {
  title: 'Terms of Service — GotProspect',
}

export default function TermsPage() {
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
        <h1 className="text-4xl font-bold text-white mb-2">Terms of Service</h1>
        <p className="text-white/40 text-sm mb-12">Last updated: May 2025</p>

        <div className="flex flex-col gap-10 text-white/70 leading-relaxed">

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">1. Acceptance of terms</h2>
            <p>By accessing or using GotProspect ("Service"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our Service.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">2. Description of service</h2>
            <p>GotProspect provides an automated lead generation platform designed for real estate professionals. The Service allows users to import contact lists and send personalized outreach emails on their behalf.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">3. User responsibilities</h2>
            <p className="mb-3">By using our Service, you agree to:</p>
            <ul className="list-disc list-inside flex flex-col gap-2 text-white/60">
              <li>Use the Service in compliance with all applicable laws and regulations</li>
              <li>Only send emails to contacts who have a legitimate interest in your services</li>
              <li>Comply with anti-spam laws including CAN-SPAM, GDPR, and CASL</li>
              <li>Not use the Service for any illegal, harmful, or abusive purposes</li>
              <li>Keep your account credentials secure and confidential</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">4. Subscription and billing</h2>
            <ul className="list-disc list-inside flex flex-col gap-2 text-white/60">
              <li>Subscriptions are billed monthly in advance</li>
              <li>You may cancel your subscription at any time from your account settings</li>
              <li>No refunds are provided for partial months</li>
              <li>We reserve the right to change pricing with 30 days notice</li>
              <li>Payments are processed securely by Stripe</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">5. Prohibited uses</h2>
            <p className="mb-3">You may not use GotProspect to:</p>
            <ul className="list-disc list-inside flex flex-col gap-2 text-white/60">
              <li>Send spam or unsolicited bulk email</li>
              <li>Harass, threaten, or harm individuals</li>
              <li>Violate any applicable laws or regulations</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Resell or redistribute our Service without permission</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">6. Limitation of liability</h2>
            <p>GotProspect is provided "as is" without warranties of any kind. We are not responsible for any damages arising from your use of the Service, including but not limited to lost profits, data loss, or business interruption.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">7. Account termination</h2>
            <p>We reserve the right to suspend or terminate accounts that violate these Terms of Service, with or without notice. You may also delete your account at any time by contacting us.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">8. Changes to terms</h2>
            <p>We may update these Terms at any time. Continued use of the Service after changes constitutes acceptance of the new Terms. We will notify users of significant changes by email.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">9. Governing law</h2>
            <p>These Terms are governed by the laws of England and Wales. Any disputes shall be resolved in the courts of England and Wales.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">10. Contact us</h2>
            <p>For any questions about these Terms, please contact us at <a href="mailto:hello@gotprospect.com" className="text-electric hover:underline">hello@gotprospect.com</a>.</p>
          </section>

        </div>
      </div>
    </div>
  )
}
