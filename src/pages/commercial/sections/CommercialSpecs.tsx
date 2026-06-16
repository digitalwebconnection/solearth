import type { SystemDetail } from '../../../data/commercialData'
import { Sparkles, Building, Award } from 'lucide-react'

interface CommercialSpecsProps {
  savings: string
  introTitle: string
  introDesc: string
  details: {
    panels: SystemDetail
    inverter: SystemDetail
    battery: SystemDetail
    mounting: SystemDetail
  }
}

export default function CommercialSpecs({
  savings,
  introTitle,
  introDesc,
  details,
}: CommercialSpecsProps) {
  const components = [
    { key: 'panels', data: details.panels, badge: 'PV', color: 'text-amber-500', bg: 'bg-amber-50' },
    { key: 'inverter', data: details.inverter, badge: 'HZ', color: 'text-blue-500', bg: 'bg-blue-50' },
    { key: 'battery', data: details.battery, badge: 'BT', color: 'text-emerald-500', bg: 'bg-emerald-50' },
    { key: 'mounting', data: details.mounting, badge: 'MT', color: 'text-indigo-500', bg: 'bg-indigo-50' },
  ]

  return (
    <section className="py-20 bg-white text-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Top Header */}
        <div className="space-y-4 max-w-4xl mb-12">
          <span className="text-[11px] text-[#FE9900] font-black uppercase tracking-widest block">
            Solar Power for Businesses
          </span>
          <h2 className="text-3xl md:text-4xl font-black font-serif text-[#004093]">
            {introTitle}
          </h2>
          <p className="text-sm md:text-base font-semibold text-slate-500 leading-relaxed">
            {introDesc}
          </p>
        </div>

        {/* Grid split: Content & Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left: Component Specs Grid */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Savings Banner */}
            <div className="bg-[#004093] text-white px-6 py-4 rounded-xl flex items-center justify-between shadow-lg">
              <span className="text-xs md:text-sm font-black uppercase tracking-wider">
                Corporate Energy Offset
              </span>
              <span className="text-lg md:text-xl font-black text-[#FE9900]">
                {savings}
              </span>
            </div>

            {/* Components Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {components.map((item) => (
                <div 
                  key={item.key} 
                  className="p-6 bg-slate-50 hover:bg-white border border-slate-200/60 hover:shadow-xl hover:border-slate-300/60 rounded-2xl transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-xl ${item.bg} ${item.color} flex items-center justify-center font-black text-sm shadow-md`}>
                        {item.badge}
                      </div>
                      <div>
                        <h4 className="text-sm font-black text-[#004093] group-hover:text-[#FE9900] transition-colors">
                          {item.data.title}
                        </h4>
                        <span className="text-[10px] text-slate-400 font-extrabold uppercase tracking-wide">
                          {item.data.spec}
                        </span>
                      </div>
                    </div>
                    <p className="text-xs text-slate-500 leading-relaxed font-semibold">
                      {item.data.desc}
                    </p>
                  </div>

                  <ul className="mt-5 space-y-2 pt-4 border-t border-slate-200/50">
                    {item.data.points.map((pt, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs font-semibold text-slate-600">
                        <Sparkles className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Sidebar Panel */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Expert Box */}
            <div className="bg-gradient-to-br from-[#FE9900] to-[#E28000] text-white p-8 rounded-2xl shadow-xl space-y-6 border border-[#FE9900]/20">
              <div className="space-y-2">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <Building className="w-5 h-5 text-white fill-current" />
                </div>
                <h4 className="text-xl font-black font-serif">
                  Commercial Feasibility Study
                </h4>
                <p className="text-xs text-white/90 font-medium leading-relaxed">
                  Request a half-hour structural mapping consultation to calculate system layout, local line capacities, and interval data analysis.
                </p>
              </div>

              <div className="space-y-4">
                <a 
                  href="tel:1300111111" 
                  className="block text-center bg-white text-[#E28000] hover:bg-[#004093] hover:text-white font-black py-3 rounded-xl shadow-lg transition-colors duration-300 text-xs uppercase tracking-wider"
                >
                  Call 1300 111 111
                </a>
                <a 
                  href="/#contact" 
                  className="block text-center bg-white/10 hover:bg-white/20 border border-white/30 text-white font-black py-3 rounded-xl transition-all duration-300 text-xs uppercase tracking-wider"
                >
                  Request A Call Back
                </a>
              </div>
            </div>

            {/* Quality Box */}
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/60 space-y-4">
              <div className="flex items-center gap-2 text-blue-500">
                <Award className="w-5 h-5" />
                <span className="text-xs font-black uppercase tracking-wider">Asset Lifespan</span>
              </div>
              <p className="text-[11px] text-slate-500 leading-relaxed font-semibold">
                Our commercial solar structures carry engineered certifications conforming to Australian safety standard AS/NZS 1170.2. Heavy-duty aluminum rails protect modules from warping and wind uplift.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
