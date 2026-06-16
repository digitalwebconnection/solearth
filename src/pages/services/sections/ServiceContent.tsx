import { Award, Sparkles } from 'lucide-react'

interface ServiceContentProps {
  introTitle: string
  introDesc: string
  features: {
    title: string
    desc: string
  }[]
}

export default function ServiceContent({
  introTitle,
  introDesc,
  features,
}: ServiceContentProps) {
  return (
    <section className="py-20 bg-white text-slate-800">
      <div className="max-w-7xl mx-auto px-6 space-y-16">
        
        {/* Top Intro Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 space-y-4">
            <h2 className="text-3xl md:text-4xl font-black font-serif text-[#004093]">
              {introTitle}
            </h2>
            <p className="text-sm md:text-base font-semibold text-slate-500 leading-relaxed">
              {introDesc}
            </p>
          </div>

          <div className="lg:col-span-5 bg-slate-50 p-6 rounded-2xl border border-slate-200/60 space-y-4">
            <h4 className="text-sm font-black text-[#004093] uppercase tracking-wider flex items-center gap-2">
              <Award className="w-5 h-5 text-[#FE9900]" />
              What is an SAA accredited installer?
            </h4>
            <p className="text-xs text-slate-500 leading-relaxed font-semibold">
              Standards Australia (SAA) regulates electrical wiring codes. SAA accreditation ensures that your installer is a licensed electrician specifically certified in high-voltage DC solar cabling, battery system isolations, and switchboard safety upgrades.
            </p>
          </div>
        </div>

        {/* Feature Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
          {features.map((feat, idx) => (
            <div key={idx} className="p-6 bg-slate-50 rounded-2xl border border-slate-200/50 space-y-3">
              <h4 className="text-sm font-black text-[#004093] flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#FE9900] shrink-0" />
                {feat.title}
              </h4>
              <p className="text-xs text-slate-500 leading-relaxed font-semibold">
                {feat.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Trust Highlight Bar */}
        <div className="bg-[#004093] text-white rounded-2xl py-8 px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center shadow-xl">
          <div className="space-y-1 md:border-r md:border-white/10 last:border-0 pr-4">
            <span className="block text-3xl font-black text-[#FE9900]">10,000+</span>
            <span className="block text-xs font-black uppercase tracking-wider text-slate-200">Happy Reviews</span>
            <span className="block text-[10px] text-slate-400 font-semibold mt-1">Across Google & Trustpilot</span>
          </div>

          <div className="space-y-1 md:border-r md:border-white/10 last:border-0 px-4">
            <span className="block text-3xl font-black text-[#FE9900]">Most Trusted</span>
            <span className="block text-xs font-black uppercase tracking-wider text-slate-200">Solar Retailer</span>
            <span className="block text-[10px] text-slate-400 font-semibold mt-1">Clean Energy Council approved</span>
          </div>

          <div className="space-y-1 last:border-0 pl-4">
            <span className="block text-3xl font-black text-[#FE9900]">Zero Deposit</span>
            <span className="block text-xs font-black uppercase tracking-wider text-slate-200">Payment Options</span>
            <span className="block text-[10px] text-slate-400 font-semibold mt-1">Flexible payment plans available</span>
          </div>
        </div>

      </div>
    </section>
  )
}
