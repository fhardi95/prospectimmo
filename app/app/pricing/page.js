'use client'
import { useState } from 'react'
import { createClient } from '@/lib/supabase'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

const plans = [
  {
    id: 'free',
    name: 'Free',
    price: '$0',
    desc: 'Try it out',
    features: ['10 leads / month', '1 target area', 'Manual emails'],
    cta: 'Get started free',
    featured: false,
  },
  {
    id: 'pro',
    name: 'Pro',
    price: '$49',
    desc: 'For active agents',
    features: ['500 leads / month', '3 target areas', 'Automated emails', 'Smart follow-ups', 'Analytics dashboard'],
    cta: 'Start Pro',
    featured: true,
  },
  {
    id: 'agency',
    name: 'Agency',
    price: '$149',
    desc: 'For teams',
    features: ['Unlimited leads', 'Unlimited areas', 'Multi-agent access', 'API access', 'Priority support'],
    cta: 'Start Agency',
    featured: false,
  },
]

export default function PricingPage() {
  const [loading, setLoading] = useState(null)
  const router = useRouter()
  const supabase = createClient()

  async function handlePlan(planId) {
    if (planId === 'free') {
      router.push('/signup')
      return
    }

    setLoading(planId)

    const { data: { user } } = await supabase.auth.getUser()

    const res = await fetch('/api/stripe', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        plan: planId,
        email: user?.email || '',
      }),
    })

    const data = await res.json()

    if (data.url) {
      window.location.href = data.url
    } else {
      alert('Something went wrong. Please try again.')
      setLoading(null)
    }
  }

  return (
    <div className="min-h-screen bg-navy-900">
      {/* Navbar */}
      <nav className="border-b border-white/[0.06] bg-navy-900/80 backdrop-blur-xl px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-electric flex items-center justify-center">
            <span className="text-white font-mono text-xs font-bold">P</span>
          </div>
          <span className="font-semibold text-white tracking-tight">ProspectImmo</span>
        </Link>
        <Link href="/login" className="text-sm text-white/50 hover:text-white transition-colors">
          Sign in
        </Link>
      </nav>

      <div className="max-w-5xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gradient mb-4">Simple pricing</h1>
          <p className="text-white/50 text-lg">No contracts. Cancel anytime.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 items-start">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`rounded-2xl p-8 flex flex-col gap-6 ${
                plan.featured
                  ? 'bg-electric/10 border border-electric/30 glow-blue'
                  : 'card-glass'
              }`}
            >
              {plan.featured && (
                <div className="text-xs font-mono text-electric uppercase tracking-widest">
                  Most popular
                </div>
              )}
              <div>
                <div className="text-white/60 text-sm mb-1">{plan.name}</div>
                <div className="text-4xl font-bold text-white">
                  {plan.price}
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

              <button
                onClick={() => handlePlan(plan.id)}
                disabled={loading === plan.id}
                className={`mt-auto text-center py-3 px-6 rounded-xl font-semibold text-sm transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${
                  plan.featured
                    ? 'bg-electric hover:bg-electric-light text-white'
                    : 'card-glass hover:bg-white/[0.08] text-white/80 hover:text-white'
                }`}
              >
                {loading === plan.id ? 'Redirecting...' : `${plan.cta} →`}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
