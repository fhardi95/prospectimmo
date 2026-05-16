'use client'
import { useEffect, useState } from 'react'
import { createClient } from '@/lib/supabase'
import { useRouter } from 'next/navigation'

const stats = [
  { label: 'Leads this month', value: '0', icon: '◈', color: 'text-electric' },
  { label: 'Emails sent', value: '0', icon: '✉', color: 'text-gold' },
  { label: 'Replies received', value: '0', icon: '↩', color: 'text-green-400' },
  { label: 'Mandates closed', value: '0', icon: '★', color: 'text-purple-400' },
]

export default function DashboardPage() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()
  const supabase = createClient()

  useEffect(() => {
    async function getUser() {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) {
        router.push('/login')
      } else {
        setUser(user)
        setLoading(false)
      }
    }
    getUser()
  }, [])

  async function handleLogout() {
    await supabase.auth.signOut()
    router.push('/')
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-navy-900 flex items-center justify-center">
        <div className="text-white/40 text-sm">Loading...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-navy-900">
      {/* Navbar */}
      <nav className="border-b border-white/[0.06] bg-navy-900/80 backdrop-blur-xl px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-electric flex items-center justify-center">
            <span className="text-white font-mono text-xs font-bold">P</span>
          </div>
          <span className="font-semibold text-white tracking-tight">ProspectImmo</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-xs text-white/40 hidden md:block">{user?.email}</span>
          <button
            onClick={handleLogout}
            className="text-xs text-white/50 hover:text-white transition-colors px-3 py-1.5 rounded-lg border border-white/[0.08] hover:border-white/20"
          >
            Sign out
          </button>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Welcome */}
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-white">Good morning 👋</h1>
          <p className="text-white/40 mt-1 text-sm">Here's what's happening with your leads today.</p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {stats.map((s) => (
            <div key={s.label} className="card-glass rounded-2xl p-6">
              <div className={`text-2xl mb-3 ${s.color}`}>{s.icon}</div>
              <div className="text-3xl font-bold text-white">{s.value}</div>
              <div className="text-xs text-white/40 mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Empty state */}
        <div className="card-glass rounded-2xl p-12 text-center">
          <div className="text-4xl mb-4">⬡</div>
          <h2 className="text-lg font-semibold text-white mb-2">No leads yet</h2>
          <p className="text-white/40 text-sm max-w-sm mx-auto mb-6">
            Set up your first target area to start finding motivated home sellers automatically.
          </p>
          <button className="bg-electric hover:bg-electric-light transition-colors text-white px-6 py-3 rounded-xl font-semibold text-sm">
            Set up my first campaign →
          </button>
        </div>
      </div>
    </div>
  )
}
