const features = [
  {
    icon: '⬡',
    title: 'Automatic lead detection',
    desc: 'We find homeowners likely to sell in your target area — before they list anywhere.',
    color: 'text-electric',
  },
  {
    icon: '✉',
    title: 'Personalized outreach',
    desc: 'Emails sent automatically with your name, photo, and local market data.',
    color: 'text-gold',
  },
  {
    icon: '↻',
    title: 'Smart follow-ups',
    desc: 'Automated sequences that nurture leads until they\'re ready to talk.',
    color: 'text-green-400',
  },
  {
    icon: '◈',
    title: 'Live dashboard',
    desc: 'Track open rates, replies, and new mandates in real time from any device.',
    color: 'text-purple-400',
  },
]

export default function Features() {
  return (
    <section id="features" className="py-32 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-xs font-mono text-electric uppercase tracking-widest mb-4">How it works</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gradient">
            Everything you need<br />to grow your listings
          </h2>
          <p className="mt-4 text-white/50 text-lg max-w-xl mx-auto">
            One tool. Zero manual prospecting.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="card-glass rounded-2xl p-8 hover:bg-white/[0.06] transition-colors group"
            >
              <div className={`text-3xl mb-4 ${f.color}`}>{f.icon}</div>
              <h3 className="text-lg font-semibold text-white mb-2">{f.title}</h3>
              <p className="text-white/50 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
