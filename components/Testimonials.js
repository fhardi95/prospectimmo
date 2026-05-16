const testimonials = [
  {
    quote: "I got 3 new mandates in my first month. I used to spend hours cold calling — now it runs on its own.",
    name: "James Mitchell",
    role: "Agent, London",
    initials: "JM",
  },
  {
    quote: "Finally a tool built for agents, not generic marketers. Setup took 10 minutes and leads started coming in.",
    name: "Sofia Reyes",
    role: "Agent, Miami",
    initials: "SR",
  },
  {
    quote: "The ROI is insane. One closed deal pays for a full year of the Pro plan.",
    name: "Ahmed Karim",
    role: "Agency owner, Dubai",
    initials: "AK",
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-xs font-mono text-electric uppercase tracking-widest mb-4">Reviews</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gradient">
            What agents are saying
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {testimonials.map((t) => (
            <div key={t.name} className="card-glass rounded-2xl p-8 flex flex-col gap-6">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-gold text-sm">★</span>
                ))}
              </div>
              <p className="text-white/70 leading-relaxed italic flex-1">"{t.quote}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-electric/20 border border-electric/30 flex items-center justify-center text-xs font-bold text-electric-light">
                  {t.initials}
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">{t.name}</div>
                  <div className="text-xs text-white/40">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
