import { CheckSquare, MessageCircle } from 'lucide-react'

interface ServiceHeroProps {
  title: string
  heroSubtitle: string
}

export default function ServiceHero({ title, heroSubtitle }: ServiceHeroProps) {
  return (
    <div className="relative bg-gradient-to-br from-[#004093] to-[#1D6FB8] text-white pt-28 pb-16 overflow-hidden">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-cover bg-center opacity-10 mix-blend-overlay" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1620038614049-9d97a5f9c996?auto=format&fit=crop&q=80&w=1200")' }}></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Side: Service Details */}
        <div className="lg:col-span-8 space-y-6">
          <span className="text-[11px] text-[#FE9900] font-black uppercase tracking-widest block">
            Professional Solar Service
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black font-serif leading-tight">
            {title}
          </h1>

          <p className="text-base md:text-lg text-slate-200 font-semibold leading-relaxed max-w-2xl">
            {heroSubtitle}
          </p>

          {/* Checklist */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 text-xs md:text-sm font-semibold text-slate-100 max-w-3xl">
            <div className="flex items-center gap-3">
              <CheckSquare className="w-5 h-5 text-[#FE9900] shrink-0" />
              <span>Clean Energy Regulator compliant systems</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckSquare className="w-5 h-5 text-[#FE9900] shrink-0" />
              <span>Full compliance & regulatory filings handled</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckSquare className="w-5 h-5 text-[#FE9900] shrink-0" />
              <span>High durability, weather-resistant framing mounts</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckSquare className="w-5 h-5 text-[#FE9900] shrink-0" />
              <span>Maximize system lifespan & energy yield outputs</span>
            </div>
          </div>

          <div className="pt-6">
            <a 
              href="/#contact"
              className="inline-flex items-center gap-2 bg-[#FE9900] hover:bg-white hover:text-[#004093] text-white font-black px-8 py-3.5 rounded-xl transition-all duration-300 shadow-lg"
            >
              Get Free Assessment
            </a>
          </div>
        </div>

        {/* Right Side: Consultation Imagemockup */}
        <div className="lg:col-span-4 flex justify-center lg:justify-end">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl max-w-sm w-full space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#FE9900] flex items-center justify-center text-white shadow-lg shrink-0">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm font-black text-white">Need Quick Advice?</h4>
                <p className="text-[10px] text-slate-300 font-semibold">Speak to a certified engineer today.</p>
              </div>
            </div>
            <p className="text-xs text-slate-200 leading-relaxed font-semibold">
              Our engineering support line is open Monday through Friday, 8:00 AM to 6:00 PM. We can review your system specs over the phone.
            </p>
            <a 
              href="tel:1300111111"
              className="block text-center bg-white text-[#004093] hover:bg-[#FE9900] hover:text-white font-black py-2.5 rounded-xl transition text-xs uppercase tracking-wider shadow-md"
            >
              Call 1300 111 111
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
