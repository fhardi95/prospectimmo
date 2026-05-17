'use client'
import { useEffect, useState, useRef } from 'react'
import { createClient } from '@/lib/supabase'
import { useRouter } from 'next/navigation'

const DEFAULT_MESSAGE = `Hi {{name}},

I will keep this short.

I built a tool called GotProspect that automatically finds motivated home sellers in your area and sends personalized emails on your behalf every day.

No more cold calling. No more door knocking.
Just motivated sellers landing in your inbox.

Would you like to try it free for 30 days? No credit card required.

https://gotprospect.com/signup

Any questions? Just reply to this email.

Alex
GotProspect.com`

export default function DashboardPage() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [leads, setLeads] = useState([])
  const [agentName, setAgentName] = useState('Alex')
  const [message, setMessage] = useState(DEFAULT_MESSAGE)
  const [sending, setSending] = useState(false)
  const [result, setResult] = useState(null)
  const [csvError, setCsvError] = useState('')
  const fileRef = useRef()
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

  function handleCSV(e) {
    setCsvError('')
    const file = e.target.files[0]
    if (!file) return

    const reader = new FileReader()
    reader.onload = (ev) => {
      const text = ev.target.result
      const lines = text.split('\n').filter(l => l.trim())
      const headers = lines[0].split(',').map(h => h.trim().toLowerCase())

      const emailIdx = headers.findIndex(h => h.includes('email'))
      const nameIdx = headers.findIndex(h => h.includes('name'))
      const addressIdx = headers.findIndex(h => h.includes('address'))

      if (emailIdx === -1) {
        setCsvError('CSV must have an "email" column.')
        return
      }

      const parsed = lines.slice(1).map(line => {
        const cols = line.split(',').map(c => c.trim())
        return {
          email: cols[emailIdx] || '',
          name: nameIdx !== -1 ? cols[nameIdx] : '',
          address: addressIdx !== -1 ? cols[addressIdx] : '',
        }
      }).filter(l => l.email.includes('@'))

      setLeads(parsed)
    }
    reader.readAsText(file)
  }

  async function handleSend() {
    if (!leads.length) return
    setSending(true)
    setResult(null)

    const res = await fetch('/api/send-emails', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        leads,
        agentName,
        agentEmail: user.email,
        message,
      }),
    })

    const data = await res.json()
    setResult(data)
    setSending(false)
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
      <nav className="border-b border-white/[0.06] bg-navy-900/80 backdrop-blur-xl px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-electric flex items-center justify-center">
            <span className="text-white font-mono text-xs font-bold">G</span>
          </div>
          <span className="font-semibold text-white tracking-tight">GotProspect</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-xs text-white/40 hidden md:block">{user?.email}</span>
          <button onClick={handleLogout} className="text-xs text-white/50 hover:text-white transition-colors px-3 py-1.5 rounded-lg border border-white/[0.08] hover:border-white/20">
            Sign out
          </button>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-6 py-12 flex flex-col gap-8">
        <div>
          <h1 className="text-3xl font-bold text-white">Dashboard</h1>
          <p className="text-white/40 mt-1 text-sm">Import your leads and send personalized emails automatically.</p>
        </div>

        <div className="card-glass rounded-2xl p-8">
          <h2 className="text-lg font-semibold text-white mb-4">Your name</h2>
          <input type="text" value={agentName} onChange={(e) => setAgentName(e.target.value)} placeholder="Your full name" className="w-full bg-white/[0.05] border border-white/[0.08] rounded-xl px-4 py-3 text-white placeholder-white/20 text-sm focus:outline-none focus:border-electric/50 transition-colors" />
        </div>

        <div className="card-glass rounded-2xl p-8">
          <h2 className="text-lg font-semibold text-white mb-2">Import leads (CSV)</h2>
          <p className="text-white/40 text-sm mb-4">Your CSV must have an email column. Optional: name, address.</p>
          <button onClick={() => fileRef.current.click()} className="card-glass hover:bg-white/[0.08] transition-colors text-white/70 hover:text-white px-6 py-3 rounded-xl text-sm font-medium">
            Choose CSV file
          </button>
          <input ref={fileRef} type="file" accept=".csv" onChange={handleCSV} className="hidden" />
          {csvError && <p className="text-red-400 text-sm mt-3">{csvError}</p>}
          {leads.length > 0 && (
            <div className="mt-4">
              <p className="text-green-400 text-sm mb-3">{leads.length} leads loaded</p>
              <div className="bg-white/[0.03] rounded-xl overflow-hidden">
                <table className="w-full text-xs text-white/60">
                  <thead><tr className="border-b border-white/[0.06]"><th className="text-left px-4 py-2">Email</th><th className="text-left px-4 py-2">Name</th><th className="text-left px-4 py-2">Address</th></tr></thead>
                  <tbody>
                    {leads.slice(0, 5).map((l, i) => (
                      <tr key={i} className="border-b border-white/[0.04]">
                        <td className="px-4 py-2">{l.email}</td>
                        <td className="px-4 py-2">{l.name || '-'}</td>
                        <td className="px-4 py-2">{l.address || '-'}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {leads.length > 5 && <p className="text-white/30 text-xs px-4 py-2">+{leads.length - 5} more...</p>}
              </div>
            </div>
          )}
        </div>

        <div className="card-glass rounded-2xl p-8">
          <h2 className="text-lg font-semibold text-white mb-2">Personalize your message</h2>
          <p className="text-white/40 text-sm mb-4">Use name and address for personalization.</p>
          <textarea value={message} onChange={(e) => setMessage(e.target.value)} rows={10} className="w-full bg-white/[0.05] border border-white/[0.08] rounded-xl px-4 py-3 text-white placeholder-white/20 text-sm focus:outline-none focus:border-electric/50 transition-colors resize-none font-mono" />
        </div>

        <div className="card-glass rounded-2xl p-8">
          <h2 className="text-lg font-semibold text-white mb-4">Send emails</h2>
          <button onClick={handleSend} disabled={sending || leads.length === 0} className="bg-electric hover:bg-electric-light disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-white px-8 py-3 rounded-xl font-semibold text-sm">
            {sending ? `Sending to ${leads.length} leads...` : `Send to ${leads.length} leads`}
          </button>
          {result && (
            <div className={`mt-4 rounded-xl px-4 py-3 text-sm ${result.error ? 'bg-red-500/10 border border-red-500/20 text-red-400' : 'bg-green-500/10 border border-green-500/20 text-green-400'}`}>
              {result.error ? `Error: ${result.error}` : `${result.sent} emails sent successfully${result.failed > 0 ? `, ${result.failed} failed` : ''}`}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
