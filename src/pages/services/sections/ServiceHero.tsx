import { CheckCircle2, Phone, Sparkles, MessageCircle } from 'lucide-react'
import { useQuoteModal } from '../../../components/QuoteModal'

interface ServiceHeroProps {
  title: string
  heroSubtitle: string
  heroImage: string
}

export default function ServiceHero({ title, heroSubtitle, heroImage }: ServiceHeroProps) {
  const { openQuoteModal } = useQuoteModal()
  return (
    <div className="relative bg-[#020813] text-white pt-28 sm:pt-32 pb-16 sm:pb-24 overflow-hidden border-b border-slate-900">
      {/* Dynamic Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center  transition-all duration-700"
        style={{ backgroundImage: `url("${heroImage}")` }}
      />

      {/* Background Gradients & Ambients */}
      <div className="absolute inset-0 bg-linear-to-r from-slate-950 via-slate-950/70 to-transparent z-0" />
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#1B74BB]/15 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-[#FCC200]/5 blur-[120px] pointer-events-none" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-size-[3rem_3rem]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">

        {/* Left Column: Content */}
        <div className="lg:col-span-8 space-y-6 sm:space-y-8">
          <div className="space-y-4">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#FCC200]/12 border border-[#FCC200]/30 rounded-full text-[11px] font-black uppercase tracking-widest text-[#FCC200]">
              <Sparkles className="w-3.5 h-3.5" />
              Professional Solar Service
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black font-serif leading-tight text-white tracking-tight">
              {title}
            </h1>

            <p className="text-xs sm:text-sm md:text-base text-slate-200 font-semibold leading-relaxed max-w-2xl">
              {heroSubtitle}
            </p>
          </div>

          {/* Symmetrical benefits checklist */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-bold text-slate-200 border-t border-white/5 pt-6">
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4.5 h-4.5 text-[#FCC200] shrink-0 mt-0.5" />
              <span> CEC Accredited Solar Installers & Approved Designs</span>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4.5 h-4.5 text-[#FCC200] shrink-0 mt-0.5" />
              <span>Australian Standards Compliant Installation</span>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4.5 h-4.5 text-[#FCC200] shrink-0 mt-0.5" />
              <span>High Wind-Rated Mounting & Safety Systems</span>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4.5 h-4.5 text-[#FCC200] shrink-0 mt-0.5" />
              <span>Performance-Focused System Design & Energy Yield Optimization</span>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
            <button
              onClick={() => openQuoteModal(`Service: ${title}`)}
              className="bg-[#FCC200] hover:bg-[#ffaa22] text-black font-black text-xs uppercase tracking-wider px-8 py-4 rounded-xl transition-all duration-200 text-center shadow-lg shadow-[#FCC200]/10 cursor-pointer border-none"
            >
              Get Free Assessment
            </button>

            <a
              href="tel:61435359431"
              className="inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-black text-xs uppercase tracking-wider px-6 py-4 rounded-xl transition-all duration-200"
            >
              <Phone className="w-4 h-4 text-[#FCC200]" />
              Call +61 435 359 431
            </a>
          </div>
        </div>

        {/* Right Column: Dynamic Consultation Call Block */}
        <div className="lg:col-span-4 flex justify-center lg:justify-end">
          <div className="bg-slate-950/60 backdrop-blur-md border border-white/10 p-6 rounded-2xl max-w-sm w-full space-y-4 shadow-2xl relative overflow-hidden">
            {/* Background blur */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#FCC200]/10 blur-xl pointer-events-none" />

            <div className="flex items-center gap-4 relative z-10">
              <div className="w-12 h-12 rounded-full bg-[#FCC200] flex items-center justify-center text-white shadow-lg shrink-0">
                <MessageCircle className="w-6 h-6 text-black" />
              </div>
              <div>
                <h4 className="text-sm font-black text-white">Need Quick Advice?</h4>
                <p className="text-[10px] text-slate-300 font-semibold">Speak to a certified engineer today.</p>
              </div>
            </div>

            <p className="text-xs text-slate-200 leading-relaxed font-semibold relative z-10">
              Our engineering support line is open Monday through Friday, 8:00 AM to 6:00 PM. We can review your system specs over the phone.
            </p>

            <a
              href="tel:61435359431"
              className="relative z-10 block text-center bg-white hover:bg-[#FCC200] hover:text-black text-[#1B74BB] font-black py-2.5 rounded-xl transition text-xs uppercase tracking-wider shadow-md"
            >
              Call +61 435 359 431
            </a>
          </div>
        </div>

      </div>
    </div>
  )
}
