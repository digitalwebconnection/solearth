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
    <ClipboardList className="w-5 h-5" />,
    <Cpu className="w-5 h-5" />,
    <CheckCircle2 className="w-5 h-5" />
  ]

  return (
    <section className="bg-slate-50 text-slate-800 py-10 relative overflow-hidden border-t border-slate-200">
      
      {/* Decorative background glows */}
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] rounded-full bg-[#004093]/3 blur-[80px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 space-y-20 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <span className="text-[10px] text-[#FE9900] bg-[#FE9900]/10 border border-[#FE9900]/30 px-3 py-1 rounded-full font-black uppercase tracking-widest inline-block">
            Our Process
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#004093] tracking-tight leading-tight">
            How We Deliver Excellence
          </h2>
          <p className="text-sm md:text-base leading-relaxed text-slate-550 font-semibold">
            From initial site auditing to grid commissioning and performance tracking, our phased delivery ensures zero-downtime execution.
          </p>
        </div>

        {/* Horizontal Timeline Flow */}
        <div className="relative">
          
          {/* Horizontal Connection Thread Line (Desktop only) */}
          <div className="hidden md:block absolute top-6 left-[12%] right-[12%] h-[2px] bg-slate-200 -z-10" />

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 items-start">
            {processSteps.map((step, idx) => (
              <div 
                key={idx}
                className="text-center space-y-4 group relative"
              >
                {/* Node Sphere with Icon */}
                <div className="w-12 h-12 rounded-full border-2 border-[#004093] bg-white flex items-center justify-center text-[#004093] group-hover:border-[#FE9900] group-hover:bg-[#FE9900] group-hover:text-black transition-all duration-300 mx-auto shadow-md relative z-10">
                  {icons[idx]}
                </div>

                {/* Step Index bubble */}
                <span className="inline-block text-[10px] font-mono font-black text-[#FE9900] bg-[#FE9900]/10 px-2 py-0.5 rounded-md">
                  Step {step.step}
                </span>

                {/* Title & Copy */}
                <div className="space-y-2 max-w-xs mx-auto">
                  <h3 className="text-2xl md:text-3xl font-serif font-semibold text-[#004093] tracking-tight group-hover:text-[#FE9900] transition-colors duration-300">
                    {step.title}
                  </h3>
                  
                  <p className="text-sm md:text-base leading-relaxed text-slate-900 font-semibold">
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
