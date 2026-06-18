import { ClipboardList, Cpu, CheckCircle2 } from 'lucide-react'

interface ServiceProcessProps {
  processSteps: {
    step: string
    title: string
    desc: string
  }[]
}

export default function ServiceProcess({ processSteps }: ServiceProcessProps) {
  const icons = [
    <ClipboardList key="clip" className="w-5 h-5" />,
    <Cpu key="cpu" className="w-5 h-5" />,
    <CheckCircle2 key="check" className="w-5 h-5" />
  ]

  return (
    <section className="bg-slate-50 text-slate-800 py-12 md:py-20 relative overflow-hidden border-t border-slate-200">
      
      {/* Decorative background glows */}
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] rounded-full bg-[#1B74BB]/3 blur-[80px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12 md:space-y-20 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <span className="text-[10px] text-[#FCC200] bg-[#FCC200]/10 border border-[#FCC200]/30 px-3 py-1 rounded-full font-black uppercase tracking-widest inline-block">
            Our Process
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-serif font-bold text-[#1B74BB] tracking-tight leading-tight">
            How We Deliver Excellence
          </h2>
          <p className="text-xs sm:text-sm md:text-base leading-relaxed text-slate-550 font-semibold">
            From initial site auditing to grid commissioning and performance tracking, our phased delivery ensures zero-downtime execution.
          </p>
        </div>

        {/* Horizontal/Vertical Timeline Flow */}
        <div className="relative">
          
          {/* Horizontal Connection Thread Line (Desktop only) */}
          <div className="hidden md:block absolute top-6 left-[12%] right-[12%] h-[2px] bg-slate-200 -z-10" />

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 items-start">
            {processSteps.map((step, idx) => (
              <div 
                key={idx}
                className="text-center space-y-4 group relative"
              >
                {/* Node Sphere with Icon */}
                <div className="w-12 h-12 rounded-full border-2 border-[#1B74BB] bg-white flex items-center justify-center text-[#1B74BB] group-hover:border-[#FCC200] group-hover:bg-[#FCC200] group-hover:text-black transition-all duration-300 mx-auto shadow-md relative z-10">
                  {icons[idx]}
                </div>

                {/* Step Index bubble */}
                <span className="inline-block text-[10px] font-mono font-black text-[#FCC200] bg-[#FCC200]/10 px-2 py-0.5 rounded-md">
                  Step {step.step}
                </span>

                {/* Title & Copy */}
                <div className="space-y-2 max-w-xs mx-auto">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-serif font-semibold text-[#1B74BB] tracking-tight group-hover:text-[#FCC200] transition-colors duration-300">
                    {step.title}
                  </h3>
                  
                  <p className="text-xs sm:text-sm md:text-base leading-relaxed text-slate-600 font-semibold">
                    {step.desc}
                  </p>
                </div>

                {/* Phase complete status */}
                <div className="inline-flex items-center gap-1.5 justify-center text-[9px] font-black uppercase tracking-wider text-slate-800">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  Verified
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  )
}
