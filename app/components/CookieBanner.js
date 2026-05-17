'use client'
import { useState, useEffect } from 'react'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const accepted = localStorage.getItem('cookies_accepted')
    if (!accepted) setVisible(true)
  }, [])

  function accept() {
    localStorage.setItem('cookies_accepted', 'true')
    setVisible(false)
  }

  function decline() {
    localStorage.setItem('cookies_accepted', 'false')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div style={{
      position: 'fixed',
      bottom: '24px',
      left: '50%',
      transform: 'translateX(-50%)',
      width: 'calc(100% - 48px)',
      maxWidth: '640px',
      zIndex: 9999,
    }}>
      <div className="card-glass rounded-2xl p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4 border border-white/[0.12]">
        <div className="flex-1">
          <p className="text-white font-medium text-sm mb-1">🍪 We use cookies</p>
          <p className="text-white/50 text-xs leading-relaxed">
            We use essential cookies to keep you logged in and improve your experience. 
            No tracking or advertising cookies. {' '}
            <a href="/privacy" className="text-electric hover:underline">Learn more</a>
          </p>
        </div>
        <div className="flex gap-2 shrink-0">
          <button
            onClick={decline}
            className="text-xs text-white/50 hover:text-white transition-colors px-4 py-2 rounded-xl border border-white/[0.08] hover:border-white/20"
          >
            Decline
          </button>
          <button
            onClick={accept}
            className="text-xs bg-electric hover:bg-electric-light transition-colors text-white px-4 py-2 rounded-xl font-medium"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  )
}
