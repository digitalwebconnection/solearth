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
    <div className="bg-white text-slate-800 py-10 relative overflow-hidden border-t border-slate-100">
      {/* Background ambients */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#004093]/3 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-[#FE9900]/3 blur-[120px] pointer-events-none" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.015] bg-[linear-gradient(to_right,#004093_1px,transparent_1px),linear-gradient(to_bottom,#004093_1px,transparent_1px)] bg-size-[3rem_3rem]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 space-y-10">

        {/* ── Section Title ── */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#004093]/8 border border-[#004093]/15 rounded-full text-[11px] font-black uppercase tracking-widest text-[#004093]">
            {trustSection.tagline}
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#004093] leading-tight">
            {trustSection.title}
          </h2>
          <p className="text-sm md:text-base leading-relaxed text-slate-550 font-semibold">
            {trustSection.desc}
          </p>
        </div>

        {/* ── Three-Column Trust & Details Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trustSection.cards.map((card, idx) => {
            const Icon = ICON_MAP[card.iconKey]
            return (
              <div
                key={idx}
                className="space-y-4 p-6 bg-slate-50 rounded-lg shadow-lg shadow-black border border-slate-400 hover:border-slate-200 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-[#004093]/8 flex items-center justify-center">
                  {Icon && <Icon className="w-5 h-5 text-[#FE9900]" />}
                </div>
                <h3 className="text-2xl md:text-3xl font-serif font-semibold text-[#004093]">
                  {card.title}
                </h3>
                <p className="text-sm md:text-base leading-relaxed text-slate-800 font-semibold">
                  {card.desc}
                </p>
                <ul className="space-y-2 pt-2 text-[11px] font-black text-slate-700">
                  {card.points.map((pt, pIdx) => (
                    <li key={pIdx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#004093] shrink-0" />
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
