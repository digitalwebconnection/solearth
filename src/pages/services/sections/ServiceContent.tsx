import { Zap, Sliders, ShieldCheck, Check, Sparkles } from 'lucide-react'

interface ServiceContentProps {
  introTitle: string
  introDesc: string
  features: {
    title: string
    desc: string
  }[]
}

const FEATURE_ICONS = [Sliders, Zap, ShieldCheck]
const FEATURE_TAGS = ['System Optimization', 'Quality Standards', 'Grid Connection']

export default function ServiceContent({ introTitle, features }: ServiceContentProps) {
  return (
    <section className="py-12 md:py-20 bg-slate-50/50 text-slate-800 relative overflow-hidden">

      {/* Decorative vector grid backing */}
      <div className="absolute inset-0 opacity-[0.015] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-size-[2.5rem_2.5rem] pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-[450px] h-[450px] rounded-full bg-[#1B74BB]/3 blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10 md:space-y-16 relative z-10">

        <div className="max-w-5xl mx-auto text-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#FCC200]/10 border border-[#FCC200]/30 rounded-full text-[10px] font-black uppercase tracking-widest text-[#FCC200]">
            <Sparkles className="w-3.5 h-3.5" />
            Accredited Engineering
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-serif font-bold text-[#1B74BB] leading-tight tracking-tight mt-2">
            {introTitle}
          </h2>
        </div>

        {/* ── Feature Cards Grid: Ultra-Premium Design ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {features.map((feat, idx) => {
            const Icon = FEATURE_ICONS[idx % FEATURE_ICONS.length]
            const tag = FEATURE_TAGS[idx % FEATURE_TAGS.length]

            return (
              <div
                key={idx}
                className="bg-white border border-slate-400 p-6 sm:p-8 rounded-xl relative overflow-hidden shadow-xl shadow-slate-500/80 hover:border-[#1B74BB]/30 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between min-h-[340px]"
              >
                {/* Gold top accent line */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#1B74BB] group-hover:bg-[#FCC200] transition-colors duration-300" />

                <div className="space-y-6">
                  {/* Icon & Index Header */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-[#1B74BB]/5 flex items-center justify-center text-[#1B74BB] group-hover:bg-[#1B74BB]/10 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono font-black text-slate-350">
                      [ 0{idx + 1} ]
                    </span>
                  </div>

                  {/* Title & Tag */}
                  <div className="space-y-1">
                    <span className="block text-[9px] font-black uppercase tracking-wider text-[#FCC200]">
                      {tag}
                    </span>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-serif font-semibold text-[#1B74BB] tracking-tight leading-snug">
                      {feat.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm md:text-base leading-relaxed text-slate-600 font-semibold">
                    {feat.desc}
                  </p>
                </div>

                {/* Sub specifications checklist */}
                <div className="border-t border-slate-100 pt-5 mt-6 flex items-center justify-between text-[10px] font-black uppercase tracking-wider text-slate-700">
                  <span className="flex items-center gap-1.5 text-slate-700">
                    <Check className="w-3.5 h-3.5 text-emerald-500" />
                    CEC Standards Met
                  </span>
                  <span>Verified</span>
                </div>
              </div>
            )
          })}
        </div>

      </div>

      {/* ── Symmetrical Statistics Ribbon ── */}
      <div className="bg-[#1B74BB] text-white mt-12 p-8 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 text-center shadow-xl border border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-size-[2rem_2rem] pointer-events-none" />

        <div className="space-y-1 border-b md:border-b-0 md:border-r border-white/20 pb-6 md:pb-0 pr-0 md:pr-4 last:border-0 relative z-10">
          <span className="block text-2xl font-black text-[#FCC200] tracking-tight">10,000+</span>
          <span className="block text-[10px] font-black uppercase tracking-wider text-white/90">Client Reviews</span>
          <span className="block text-[10px] text-white/70 font-semibold mt-0.5">Google & Trustpilot rating</span>
        </div>

        <div className="space-y-1 border-b md:border-b-0 md:border-r border-white/20 pb-6 md:pb-0 px-0 md:px-4 last:border-0 relative z-10">
          <span className="block text-2xl font-black text-[#FCC200] tracking-tight">CEC Certified</span>
          <span className="block text-[10px] font-black uppercase tracking-wider text-white/90">Accredited Retailer</span>
          <span className="block text-[10px] text-white/70 font-semibold mt-0.5">Strict compliance codes met</span>
        </div>

        <div className="space-y-1 last:border-0 pl-0 md:pl-4 relative z-10">
          <span className="block text-2xl font-black text-[#FCC200] tracking-tight">10-Year</span>
          <span className="block text-[10px] font-black uppercase tracking-wider text-white/90">Workmanship Warranty</span>
          <span className="block text-[10px] text-white/70 font-semibold mt-0.5">Full coverage on all actions</span>
        </div>
      </div>
    </section>
  )
}
