import { Award, ShieldCheck, Check } from 'lucide-react'
import type { EducationalCard } from '../../../data/residentialData'

interface ResidentialEducationalProps {
  educational: {
    card1: EducationalCard
    card2: EducationalCard
  }
}

export default function ResidentialEducational({ educational }: ResidentialEducationalProps) {
  const { card1, card2 } = educational

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 border-b border-slate-200/50">

      {/* Card 1: Educational Topic */}
      <div className="bg-white rounded-2xl p-5 sm:p-8 border border-slate-400/60 shadow-lg hover:shadow-2xl hover:border-[#FCC200]/30 transition-all duration-300 flex flex-col justify-between relative overflow-hidden group">
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#FCC200] z-10"></div>
        <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-amber-500/5 rounded-full blur-2xl group-hover:scale-150 transition-all duration-500"></div>

        <div className="space-y-6 flex-1 flex flex-col justify-start">
          <div className="space-y-3">
            <span className="text-[9px] font-black uppercase text-[#FCC200] tracking-widest block">
              {card1.badge}
            </span>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-serif font-semibold text-[#1B74BB] flex items-center gap-2.5 min-h-[60px] md:min-h-[80px] lg:min-h-[90px]">
              <Award className="w-5.5 h-5.5 text-[#FCC200] shrink-0" />
              <span>{card1.title}</span>
            </h3>
          </div>

          <div className="space-y-4 text-xs sm:text-sm md:text-base leading-relaxed text-slate-900 font-semibold lg:min-h-[160px]">
            {card1.paragraphs.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>
        </div>

        {card1.checklist && card1.checklist.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-6 border-t border-slate-100 mt-6 shrink-0">
            {card1.checklist.map((feature, idx) => (
              <div key={idx} className="flex items-center gap-2 p-3 bg-slate-50 border border-slate-500/50 rounded-xl text-xs font-bold text-slate-700 hover:bg-slate-100 hover:border-slate-300 transition-colors duration-300">
                <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Card 2: Guarantee or Secondary Topic */}
      <div className="bg-white rounded-2xl p-5 sm:p-8 border border-slate-400/60 shadow-lg hover:shadow-2xl hover:border-[#1B74BB]/30 transition-all duration-300 flex flex-col justify-between relative overflow-hidden group">
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#1B74BB] z-10"></div>
        <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl group-hover:scale-150 transition-all duration-500"></div>

        <div className="space-y-6 flex-1 flex flex-col justify-start">
          <div className="space-y-3">
            <span className="text-[9px] font-black uppercase text-[#1B74BB] tracking-widest block">
              {card2.badge}
            </span>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-serif font-semibold text-[#1B74BB] flex items-center gap-2.5 min-h-[60px] md:min-h-[80px] lg:min-h-[90px]">
              <ShieldCheck className="w-5.5 h-5.5 text-[#FCC200] shrink-0" />
              <span>{card2.title}</span>
            </h3>
          </div>

          <div className="space-y-4 text-xs sm:text-sm md:text-base leading-relaxed text-slate-900 font-semibold lg:min-h-[160px]">
            {card2.paragraphs.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>
        </div>

        {card2.checklist && card2.checklist.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-6 border-t border-slate-100 mt-6 shrink-0">
            {card2.checklist.map((feature, idx) => (
              <div key={idx} className="flex items-center gap-2 p-3 bg-slate-50 border border-slate-500/50 rounded-xl text-xs font-bold text-slate-700 hover:bg-slate-100 hover:border-slate-300 transition-colors duration-300">
                <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        )}
      </div>

    </section>
  )
}
