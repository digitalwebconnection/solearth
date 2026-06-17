import { Award, ShieldCheck, Check } from 'lucide-react'

export default function ResidentialEducational() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-2 gap-8 border-b border-slate-200/50">
      
      {/* Card 1: Tier-1 Explanation */}
      <div className="bg-white rounded-lg p-8 border border-slate-400/60 shadow-lg  hover:shadow-2xl shadow-black hover:border-[#FE9900]/30 transition-all duration-300 space-y-6 relative overflow-hidden group">
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#FE9900] z-10"></div>
        <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-amber-500/5 rounded-full blur-2xl group-hover:scale-150 transition-all duration-500"></div>
        
        <div className="space-y-3">
          <span className="text-[9px] font-black uppercase text-[#FE9900] tracking-widest block">
            Industry Standard
          </span>
          <h3 className="text-2xl md:text-3xl font-serif font-semibold text-[#004093] flex items-center gap-2.5">
            <Award className="w-6 h-6 text-[#FE9900] shrink-0" />
            What is a Tier-1 Solar Panel System?
          </h3>
        </div>

        <div className="space-y-4 text-sm md:text-base leading-relaxed text-slate-500 font-semibold">
          <p>
            Tier-1 is a classification system created by Bloomberg New Energy Finance (BNEF). It signifies manufacturers that have provided own-brand, own-manufacture products to at least six different projects, financed non-recourse by six different commercial banks, in the past two years.
          </p>
          <p>
            By choosing Tier-1 panels with SolEarth, you guarantee that your modules are made with premium grade silicon, possess advanced thermal performance, and are backed by financially robust manufacturers capable of honoring 25-30 year warranties.
          </p>
        </div>
      </div>

      {/* Card 2: Quality You Can Trust */}
      <div className="bg-white rounded-lg  p-8 border border-slate-400/60 shadow-lg  hover:shadow-2xl shadow-black hover:border-[#004093]/30 transition-all duration-300 space-y-6 relative overflow-hidden group">
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#004093] z-10"></div>
        <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl group-hover:scale-150 transition-all duration-500"></div>

        <div className="space-y-3">
          <span className="text-[9px] font-black uppercase text-[#004093] tracking-widest block">
            SolEarth Guarantee
          </span>
          <h3 className="text-2xl md:text-3xl font-serif font-semibold text-[#004093] flex items-center gap-2.5">
            <ShieldCheck className="w-6 h-6 text-[#FE9900] shrink-0" />
            Quality You Can Trust
          </h3>
        </div>

        <p className="text-sm md:text-base leading-relaxed text-slate-500 font-semibold">
          All solar components deployed by SolEarth Energy undergo strict validation under extreme Australian heat and humidity ratings. We do not source cheap B-grade stock or generic white-label inverters.
        </p>

        <div className="grid grid-cols-2 gap-3 pt-2">
          {[
            'SAA Approved Cabling',
            'Cyclone-Rated Racking',
            'Waterproof Isolators',
            'Smart Monitoring Apps',
          ].map((feature, idx) => (
            <div key={idx} className="flex items-center gap-2 p-3 bg-slate-50 border border-slate-200/50 rounded-xl text-xs font-bold text-slate-700 hover:bg-slate-100 hover:border-slate-300 transition-colors duration-300">
              <Check className="w-4.5 h-4.5 text-emerald-500 shrink-0" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}
