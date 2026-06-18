import BlurText from '../../components/BlurText'
import { CheckCircle2, Zap, ShieldCheck } from 'lucide-react'

const stats = [
  { value: '10+', label: 'Years of Experience', sub: 'In Solar Energy' },
  { value: '12K+', label: 'Installations Done', sub: 'Across Australia' },
  { value: '4.9★', label: 'Google Rating', sub: 'From 1,240+ Reviews' },
  { value: '100%', label: 'CEC Accredited', sub: 'Certified Engineers' },
]

export default function ExpertsBanner() {
  return (
    <section className="bg-white py-10 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* ── Left – Headline block ── */}
          <div className="relative">
            {/* Accent bar */}
            <div className="flex items-center gap-3 mb-4">
              <div className="h-1 w-10 bg-[#FCC200] rounded-full" />
              <span className="text-[#000000] font-bold text-sm tracking-widest uppercase">
                SolEarth Energy
              </span>
            </div>

            <BlurText
              text="Built by Experts. Chosen by Thousands."
              delay={120}
              animateBy="words"
              direction="top"
              stepDuration={0.4}
              className="text-3xl lg:text-5xl font-serif font-extrabold text-[#0a1f44] leading-tight mb-5"
            />

            <BlurText
              text="Powering homes and businesses across NSW, QLD & SA with trusted solar, battery, EV and electrical solutions — engineered for performance, delivered with precision."
              delay={60}
              animateBy="words"
              direction="bottom"
              stepDuration={0.3}
              className="text-gray-800 text-base leading-relaxed max-w-lg mb-8"
            />

            {/* Feature pills */}
            <div className="flex flex-wrap gap-3">
              {[
                { label: 'CEC Accredited', icon: CheckCircle2, color: 'text-emerald-500' },
                { label: 'Tier-1 Panels', icon: Zap, color: 'text-amber-500' },
                { label: '10yr Warranty', icon: ShieldCheck, color: 'text-blue-500' },
              ].map((pill) => (
                <span
                  key={pill.label}
                  className="bg-[#f7f9fc] font-serif border border-gray-400 text-gray-800 text-sm font-semibold px-4 py-2 rounded-full inline-flex items-center gap-2"
                >
                  <pill.icon className={`w-4 h-4 ${pill.color}`} />
                  {pill.label}
                </span>
              ))}
            </div>
          </div>

          {/* ── Right – Stats grid ── */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={`relative rounded-xl shadow-black/60 shadow-lg p-6 overflow-hidden ${
                  i === 0
                    ? 'bg-linear-to-br from-[#0a1f44] shadow-black/60 shadow-lg to-[#1a3a6b] text-white'
                    : i === 1
                    ? 'bg-linear-to-br from-[#FCC200] to-[#e6af00] text-white'
                    : 'bg-[#f7f9fc] border border-gray-400 text-[#0a1f44]'
                }`}
              >
                {/* Decorative circle */}
                <div
                  className={`absolute -top-4 -right-4 w-20 h-20 rounded-full opacity-30 ${
                    i === 0 || i === 1 ? 'bg-white' : 'bg-[#2AA9E4]'
                  }`}
                />

                <div
                  className={`text-4xl font-extrabold mb-1 ${
                    i === 2 || i === 3 ? 'text-[#1B74BB]' : ''
                  }`}
                >
                  {s.value}
                </div>
                <div
                  className={`font-bold font-serif text-sm mb-0.5 ${
                    i === 0 || i === 1 ? 'text-white' : 'text-[#0a1f44]'
                  }`}
                >
                  {s.label}
                </div>
                <div
                  className={`text-xs ${
                    i === 0 || i === 1 ? 'text-white/70' : 'text-gray-400'
                  }`}
                >
                  {s.sub}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
