export default function ResidentialTrust() {
  return (
    <section className=" ">
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
  )
}
