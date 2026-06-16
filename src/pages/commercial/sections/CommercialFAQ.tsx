import BrandPartnersSection from '../../home/BrandPartnersSection'
import TestimonialsSection from '../../home/TestimonialsSection'
import { Award, ShieldCheck, Check } from 'lucide-react'

export default function CommercialFAQ() {
  return (
    <div className="bg-slate-50 text-slate-800 space-y-16">
      
      {/* Educational Columns */}
      <section className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-12 border-b border-slate-200/60">
        <div className="space-y-4">
          <h3 className="text-xl md:text-2xl font-black font-serif text-[#004093] flex items-center gap-2">
            <Award className="w-6 h-6 text-[#FE9900]" />
            Commercial System Sizing & ROI
          </h3>
          <p className="text-xs md:text-sm text-slate-500 leading-relaxed font-semibold">
            Determining the right system size for commercial operations depends heavily on load profile modeling. We analyze your 15-minute interval data to map daily consumption peaks, ensuring that the solar array offsets maximum grid draw without unnecessary over-capitalization.
          </p>
          <p className="text-xs md:text-sm text-slate-500 leading-relaxed font-semibold">
            Typical commercial solar system paybacks in Australia range between 3 to 5 years, with immediate cash-flow improvements when utilizing capital leasing or PPA financing structures.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl md:text-2xl font-black font-serif text-[#004093] flex items-center gap-2">
            <ShieldCheck className="w-6 h-6 text-[#FE9900]" />
            Corporate Safety Compliance
          </h3>
          <p className="text-xs md:text-sm text-slate-500 leading-relaxed font-semibold">
            SolEarth Energy provides full compliance audits and engineering certifications. All installations include integrated grid protection relays, export control features, and commercial-grade grounding systems.
          </p>
          <ul className="grid grid-cols-2 gap-x-6 gap-y-2 text-xs font-bold text-slate-650 pt-2">
            <li className="flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-500" /> Grid Protection Relays
            </li>
            <li className="flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-500" /> AS 3000 compliance
            </li>
            <li className="flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-500" /> Dynamic Export Limiting
            </li>
            <li className="flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-500" /> Structural Certifications
            </li>
          </ul>
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
        <div className="bg-[#004093] text-white rounded-2xl overflow-hidden shadow-2xl border border-white/10 grid grid-cols-1 lg:grid-cols-12">
          
          {/* Text block */}
          <div className="p-8 md:p-12 lg:col-span-6 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <span className="text-[11px] text-[#FE9900] font-black uppercase tracking-widest block">
                Australia's Most Trusted Solar Retailer
              </span>
              <h3 className="text-2xl md:text-3xl font-black font-serif">
                Delivering High-Efficiency Commercial Power
              </h3>
              <p className="text-xs md:text-sm text-slate-200 leading-relaxed font-medium">
                "Our corporate division has designed and commissioned over 5MW of commercial solar systems across NSW and QLD. We coordinate closely with facilities managers and network distributors to deliver zero-downtime integration."
              </p>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-white/10 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=100" 
                  alt="Corporate manager" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <span className="block text-xs font-black">Marcus Vance</span>
                <span className="block text-[10px] text-slate-300 font-extrabold uppercase tracking-wide">Director of Commercial Projects</span>
              </div>
            </div>
          </div>

          {/* Video Mockup Frame */}
          <div className="lg:col-span-6 bg-slate-900 relative min-h-[300px] flex items-center justify-center group">
            <img 
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800" 
              alt="Solearth commercial project video" 
              className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
            
            {/* Play Button */}
            <button className="relative z-10 w-16 h-16 rounded-full bg-[#FE9900] text-white flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300">
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
