import BrandPartnersSection from '../../home/BrandPartnersSection'
import TestimonialsSection from '../../home/TestimonialsSection'
import { Award, ShieldCheck, Check } from 'lucide-react'

export default function ResidentialFAQ() {
  return (
    <div className="bg-slate-50 text-slate-800 space-y-16">

      {/* Educational Columns */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-8 border-b border-slate-200/50">

        {/* Card 1: Tier-1 Explanation */}
        <div className="bg-white rounded-3xl p-8 border border-slate-200/60 shadow-xl shadow-slate-100/50 hover:shadow-2xl hover:border-[#FCC200]/30 transition-all duration-300 space-y-6 relative overflow-hidden group">
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#FCC200] z-10"></div>
          <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-amber-500/5 rounded-full blur-2xl group-hover:scale-150 transition-all duration-500"></div>

          <div className="space-y-3">
            <span className="text-[9px] font-black uppercase text-[#FCC200] tracking-widest block">
              Industry Standard
            </span>
            <h3 className="text-2xl md:text-3xl font-serif font-semibold text-[#1B74BB] flex items-center gap-2.5">
              <Award className="w-6 h-6 text-[#FCC200] shrink-0" />
              What is a Tier-1 Solar Panel System?
            </h3>
          </div>

          <div className="space-y-4 text-sm md:text-base leading-relaxed text-slate-900 font-semibold">
            <p>
              Tier-1 is a classification system created by Bloomberg New Energy Finance (BNEF). It signifies manufacturers that have provided own-brand, own-manufacture products to at least six different projects, financed non-recourse by six different commercial banks, in the past two years.
            </p>
            <p>
              By choosing Tier-1 panels with SolEarth, you guarantee that your modules are made with premium grade silicon, possess advanced thermal performance, and are backed by financially robust manufacturers capable of honoring 25-30 year warranties.
            </p>
          </div>
        </div>

        {/* Card 2: Quality You Can Trust */}
        <div className="bg-white rounded-3xl p-8 border border-slate-200/60 shadow-xl shadow-slate-100/50 hover:shadow-2xl hover:border-[#1B74BB]/30 transition-all duration-300 space-y-6 relative overflow-hidden group">
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#1B74BB] z-10"></div>
          <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl group-hover:scale-150 transition-all duration-500"></div>

          <div className="space-y-3">
            <span className="text-[9px] font-black uppercase text-[#1B74BB] tracking-widest block">
              SolEarth Guarantee
            </span>
            <h3 className="text-2xl md:text-3xl font-serif font-semibold text-[#1B74BB] flex items-center gap-2.5">
              <ShieldCheck className="w-6 h-6 text-[#FCC200] shrink-0" />
              Quality You Can Trust
            </h3>
          </div>

          <p className="text-sm md:text-base leading-relaxed text-slate-900 font-semibold">
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

      {/* Brand Partners */}
      <div className="bg-white py-4 border-y border-slate-200/60">
        <BrandPartnersSection />
      </div>

      {/* Testimonials */}
      <div>
        <TestimonialsSection />
      </div>

      {/* Video / Most Trusted Solar Retailer Block */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="bg-[#1B74BB] text-white rounded-2xl overflow-hidden shadow-2xl border border-white/10 grid grid-cols-1 lg:grid-cols-12">

          {/* Text block */}
          <div className="p-8 md:p-12 lg:col-span-6 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <span className="text-[11px] text-[#FCC200] font-black uppercase tracking-widest block">
                Australia's Most Trusted Solar Retailer
              </span>
              <h3 className="text-2xl md:text-3xl font-serif font-semibold">
                Delivering Premium Energy Solutions Since 2018
              </h3>
              <p className="text-sm md:text-base leading-relaxed text-slate-200 font-semibold">
                "Our mission is to help home and business owners take back control of their energy bills. By combining high-efficiency solar modules with intelligent battery management, we insulate our customers from soaring utility grid costs."
              </p>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-white/10 overflow-hidden">
                <img
                  src="/images/solar/solar-engineer-panel.jpg"
                  alt="Customer advisor"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <span className="block text-xs font-black">Sarah Jenkins</span>
                <span className="block text-[10px] text-slate-900 font-extrabold uppercase tracking-wide">Head of Customer Operations</span>
              </div>
            </div>
          </div>

          {/* Video Mockup Frame */}
          <div className="lg:col-span-6 bg-slate-900 relative min-h-[300px] flex items-center justify-center group">
            <img
              src="/images/solar/solar-aerial-farm.jpg"
              alt="Solearth installation video preview"
              className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-transparent to-transparent"></div>

            {/* Play Button */}
            <button className="relative z-10 w-16 h-16 rounded-full bg-[#FCC200] text-white flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300">
              <svg className="w-6 h-6 fill-current ml-1" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
          </div>

        </div>
      </section>

    </div>
  )
}
