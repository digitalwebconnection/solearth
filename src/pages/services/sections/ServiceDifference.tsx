import { ShieldCheck, HeartHandshake, Smile, PhoneCall } from 'lucide-react'

interface ServiceDifferenceProps {
  difference: {
    title: string
    desc: string
  }[]
}

export default function ServiceDifference({ difference }: ServiceDifferenceProps) {
  const icons = [
    <HeartHandshake className="w-6 h-6 text-[#FE9900]" />,
    <Smile className="w-6 h-6 text-[#FE9900]" />,
    <ShieldCheck className="w-6 h-6 text-[#FE9900]" />,
  ]

  return (
    <div className="bg-slate-50 text-slate-800 space-y-16 pb-20">
      
      {/* Difference Grid */}
      <section className="max-w-7xl mx-auto px-6 pt-16 space-y-12">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="text-[11px] text-[#FE9900] font-black uppercase tracking-widest block">
            Why Choose SolEarth?
          </span>
          <h2 className="text-3xl md:text-4xl font-black font-serif text-[#004093]">
            The SolEarth Difference
          </h2>
          <p className="text-sm md:text-base font-semibold text-slate-500 leading-relaxed">
            We provide simple and transparent processes backed by full-service support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {difference.map((item, idx) => (
            <div key={idx} className="p-8 bg-white rounded-2xl border border-slate-200/60 shadow-lg shadow-black/5 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#FE9900]/10 flex items-center justify-center">
                  {icons[idx] || <ShieldCheck className="w-6 h-6 text-[#FE9900]" />}
                </div>
                <h4 className="text-base font-black text-[#004093]">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed font-semibold">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Speak to an Expert Callout Block */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="bg-[#004093] text-white rounded-2xl p-8 md:p-12 shadow-2xl border border-white/10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl">
            <h3 className="text-2xl md:text-3xl font-black font-serif">
              Speak to a Solar Service Expert
            </h3>
            <p className="text-xs md:text-sm text-slate-200 leading-relaxed font-semibold">
              Have questions about panel cleanup cycles, system compatibility, or switchboard repairs? Request a call back today to discuss with our technical support team.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 shrink-0 w-full sm:w-auto">
            <a 
              href="/#contact"
              className="inline-flex items-center justify-center gap-2 bg-[#FE9900] hover:bg-white hover:text-[#004093] text-white font-black px-6 py-3.5 rounded-xl transition shadow-lg text-xs uppercase tracking-wider"
            >
              <PhoneCall className="w-4 h-4" />
              Request call
            </a>
            <a 
              href="tel:1300111111"
              className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 border border-white/20 text-white font-black px-6 py-3.5 rounded-xl transition text-xs uppercase tracking-wider"
            >
              1300 111 111
            </a>
          </div>
        </div>
      </section>

    </div>
  )
}
