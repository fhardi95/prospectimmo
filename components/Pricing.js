const plans = [
  {
    name: 'Free',
    price: '$0',
    desc: 'Try it out',
    features: ['10 leads / month', '1 target area', 'Manual emails'],
    cta: 'Get started',
    href: '/signup',
    featured: false,
  },
  {
    name: 'Pro',
    price: '$49',
    desc: 'For active agents',
    features: ['500 leads / month', '3 target areas', 'Automated emails', 'Smart follow-ups', 'Analytics dashboard'],
    cta: 'Start Pro',
    href: '/signup?plan=pro',
    featured: true,
  },
  {
    name: 'Agency',
    price: '$149',
    desc: 'For teams',
    features: ['Unlimited leads', 'Unlimited areas', 'Multi-agent access', 'API access', 'Priority support'],
    cta: 'Start Agency',
    href: '/signup?plan=agency',
    featured: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-xs font-mono text-electric uppercase tracking-widest mb-4">Pricing</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gradient">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-white/50 text-lg">No contracts. Cancel anytime.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 items-start">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-8 flex flex-col gap-6 ${
                plan.featured
                  ? 'bg-electric/10 border border-electric/30 glow-blue'
                  : 'card-glass'
              }`}
            >
              {plan.featured && (
                <div className="inline-block text-xs font-mono text-electric uppercase tracking-widest">
                  Most popular
                </div>
              )}
              <div>
                <div className="text-white/60 text-sm mb-1">{plan.name}</div>
                <div className="text-4xl font-bold text-white">{plan.price}
                  <span className="text-base font-normal text-white/40"> / mo</span>
                </div>
                <div className="text-sm text-white/40 mt-1">{plan.desc}</div>
              </div>

              <ul className="flex flex-col gap-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-white/70">
                    <span className="text-green-400 text-xs">✓</span>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href={plan.href}
                className={`mt-auto text-center py-3 px-6 rounded-xl font-semibold text-sm transition-colors ${
                  plan.featured
                    ? 'bg-electric hover:bg-electric-light text-white'
                    : 'card-glass hover:bg-white/[0.08] text-white/80 hover:text-white'
                }`}
              >
                {plan.cta} →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
