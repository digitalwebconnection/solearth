import { ShieldCheck, HeartHandshake, Smile } from 'lucide-react'

interface ServiceDifferenceProps {
  difference: {
    title: string
    desc: string
  }[]
}

export default function ServiceDifference({ difference }: ServiceDifferenceProps) {
  const icons = [
    <HeartHandshake className="w-5 h-5 text-[#FE9900]" />,
    <Smile className="w-5 h-5 text-[#FE9900]" />,
    <ShieldCheck className="w-5 h-5 text-[#FE9900]" />,
  ]

  return (
    <div className="bg-slate-50 text-slate-800 py-10 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 space-y-5">
        
        {/* ── 2-Column Split Difference Layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Sticky Editorial Statement */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 space-y-6">
            <span className="text-[10px] text-[#FE9900] bg-[#FE9900]/10 border border-[#FE9900]/30 px-3 py-1 rounded-full font-black uppercase tracking-widest inline-block">
              Why Choose SolEarth?
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#004093] leading-tight tracking-tight">
              Setting the Standard in Australian Solar
            </h2>
            <p className="text-sm md:text-base leading-relaxed text-slate-550 font-semibold">
              We coordinate engineering blueprints, safety checks, and grid telemetry to ensure your system operates at peak capacity.
            </p>
          </div>

          {/* Right Column: Spaced, Cardless List of Difference Points */}
          <div className="lg:col-span-7 space-y-10 lg:pl-6">
            {difference.map((item, idx) => (
              <div 
                key={idx} 
                className="group flex gap-5 border-b border-slate-200/80 pb-8 last:border-0 last:pb-0"
              >
                {/* Clean, compact icon bubble */}
                <div className="w-10 h-10 rounded-lg bg-white border border-slate-200/60 flex items-center justify-center shrink-0 shadow-sm group-hover:border-[#FE9900] transition-colors duration-300">
                  {icons[idx] || <ShieldCheck className="w-5 h-5 text-[#FE9900]" />}
                </div>

                <div className="space-y-1.5">
                  <h3 className="text-2xl md:text-3xl font-serif font-semibold text-[#004093] tracking-tight group-hover:text-[#FE9900] transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed text-slate-550 font-semibold">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

       

      </div>
     
    </div>
  )
}
