export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Blue glow blobs */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-electric/10 blur-[100px] pointer-events-none" />
      <div className="absolute top-2/3 left-1/4 w-[300px] h-[300px] rounded-full bg-gold/5 blur-[80px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 card-glass rounded-full px-4 py-1.5 text-xs text-white/60 mb-8 animate-fade-in">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse-slow" />
          340+ real estate agents already using ProspectImmo
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-bold leading-[1.08] tracking-tight mb-6 animate-fade-up opacity-0-start">
          Find motivated{' '}
          <span className="text-gradient-gold">home sellers</span>
          <br />automatically.
        </h1>

        <p className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up opacity-0-start animate-delay-100">
          ProspectImmo identifies homeowners ready to sell and reaches out on your behalf — with personalized messages, automated follow-ups, and a live dashboard.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center animate-fade-up opacity-0-start animate-delay-200">
          <a
            href="/signup"
            className="bg-electric hover:bg-electric-light glow-blue transition-all text-white px-8 py-4 rounded-xl font-semibold text-base"
          >
            Start for free →
          </a>
          <a
            href="#features"
            className="card-glass hover:bg-white/[0.07] transition-colors text-white/70 hover:text-white px-8 py-4 rounded-xl font-medium text-base"
          >
            See how it works
          </a>
        </div>

        {/* Stats row */}
        <div className="mt-20 grid grid-cols-3 gap-6 max-w-lg mx-auto animate-fade-up opacity-0-start animate-delay-300">
          {[
            { value: '340+', label: 'Active agents' },
            { value: '12k', label: 'Leads generated' },
            { value: '$49', label: 'Starting at / mo' },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-2xl font-bold text-white">{s.value}</div>
              <div className="text-xs text-white/40 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
