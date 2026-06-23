import { Award, ShieldCheck, HeartHandshake, CheckCircle2 } from 'lucide-react'
import type { TrustSection } from '../../../data/commercialData'

const ICON_MAP = {
  Award,
  ShieldCheck,
  HeartHandshake
}

interface CommercialFAQProps {
  trustSection: TrustSection
}

export default function CommercialFAQ({ trustSection }: CommercialFAQProps) {
  return (
    <div className="bg-white text-slate-800 py-12 md:py-20 relative overflow-hidden border-t border-slate-100">
      {/* Background ambients */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#1B74BB]/3 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-[#FCC200]/3 blur-[120px] pointer-events-none" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.015] bg-[linear-gradient(to_right,#1B74BB_1px,transparent_1px),linear-gradient(to_bottom,#1B74BB_1px,transparent_1px)] bg-size-[3rem_3rem]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 space-y-10">

        {/* ── Section Title ── */}
        <div className="text-center  space-y-3">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#1B74BB]/8 border border-[#1B74BB]/15 rounded-full text-[11px] font-black uppercase tracking-widest text-[#1B74BB]">
            {trustSection.tagline}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-5xl max-w-3xl mx-auto font-serif font-bold text-[#1B74BB] leading-tight">
            {trustSection.title}
          </h2>
          <p className="text-xs sm:text-sm md:text-base max-w-6xl mx-auto leading-relaxed text-slate-550 font-semibold">
            {trustSection.desc}
          </p>
        </div>

        {/* ── Three-Column Trust & Details Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {trustSection.cards.map((card, idx) => {
            const Icon = ICON_MAP[card.iconKey]
            return (
              <div
                key={idx}
                className="p-5 sm:p-6 bg-slate-50 rounded-2xl shadow-xl shadow-slate-400/30 border border-slate-200 hover:border-[#1B74BB]/30 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-xl bg-[#1B74BB]/8 flex items-center justify-center">
                    {Icon && <Icon className="w-5 h-5 text-[#FCC200]" />}
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-serif font-semibold text-[#1B74BB] min-h-[48px] sm:min-h-[56px] lg:min-h-[64px] flex items-center">
                    {card.title}
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base leading-relaxed text-slate-800 font-semibold lg:min-h-[120px]">
                    {card.desc}
                  </p>
                </div>
                
                <ul className="space-y-2 pt-4 mt-4 border-t border-slate-400/50 text-xs font-semibold text-slate-700 shrink-0">
                  {card.points.map((pt, pIdx) => (
                    <li key={pIdx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#1B74BB] shrink-0" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>

      </div>
    </div>
  )
}
