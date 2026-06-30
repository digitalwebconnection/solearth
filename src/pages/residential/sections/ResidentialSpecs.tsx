import type { SystemDetail } from '../../../data/residentialData'
import { motion } from 'framer-motion'
import { ShieldAlert, Zap, Cpu, BatteryCharging, Wrench, ShieldCheck } from 'lucide-react'

interface ResidentialSpecsProps {
  savings: string
  introTitle: string
  introDesc: string
  details: {
    panels: SystemDetail
    inverter: SystemDetail
    battery: SystemDetail
    installation: SystemDetail
  }
}

export default function ResidentialSpecs({
  introTitle,
  introDesc,
  details,
}: ResidentialSpecsProps) {
  const components = [
    {
      key: 'panels',
      data: details.panels,
      badge: 'PV',
      label: 'Solar Panels',
      icon: <Zap className="w-6 h-6 text-amber-500 transition-colors duration-300 group-hover:text-white" />,
      colorClass: 'from-amber-500 to-amber-600',
      borderClass: 'border-amber-500/20 hover:border-amber-500/50',
      glowClass: 'group-hover:shadow-amber-500/10',
      tagBg: 'bg-amber-50 text-amber-700 border-amber-200',
    },
    {
      key: 'inverter',
      data: details.inverter,
      badge: 'HZ',
      label: 'Smart Inverter',
      icon: <Cpu className="w-6 h-6 text-blue-500 transition-colors duration-300 group-hover:text-white" />,
      colorClass: 'from-blue-500 to-blue-600',
      borderClass: 'border-blue-500/20 hover:border-blue-500/50',
      glowClass: 'group-hover:shadow-blue-500/10',
      tagBg: 'bg-blue-50 text-blue-700 border-blue-200',
    },
    {
      key: 'battery',
      data: details.battery,
      badge: 'BT',
      label: 'Battery Storage',
      icon: <BatteryCharging className="w-6 h-6 text-emerald-500 transition-colors duration-300 group-hover:text-white" />,
      colorClass: 'from-emerald-500 to-emerald-600',
      borderClass: 'border-emerald-500/20 hover:border-emerald-500/50',
      glowClass: 'group-hover:shadow-emerald-500/10',
      tagBg: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    },
    {
      key: 'installation',
      data: details.installation,
      badge: 'IN',
      label: 'Installation',
      icon: <Wrench className="w-6 h-6 text-[#2AA9E4] transition-colors duration-300 group-hover:text-white" />,
      colorClass: 'from-sky-500 to-sky-600',
      borderClass: 'border-[#2AA9E4]/20 hover:border-[#2AA9E4]/50',
      glowClass: 'group-hover:shadow-sky-500/10',
      tagBg: 'bg-sky-50 text-sky-700 border-sky-200',
    },
  ]

  const featuredSolarPanelImage = details.panels.image || "/images/solar/solar-panel-rooftop.jpg"

  return (
    <section className="py-12 md:py-10 bg-slate-50 text-slate-800 relative overflow-hidden">
      {/* Soft background light spots */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2  bg-[#1B74BB]/5  pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 space-y-8 md:space-y-10">

        {/* Header Block */}
        <div className="text-center">
          <div className="">

            <h2 className="text-2xl sm:text-3xl md:text-5xl font-serif font-bold text-[#1B74BB] leading-tight max-w-5xl mx-auto">
              {introTitle}
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-justify md:text-center leading-relaxed text-slate-900 max-w-7xl mx-auto">
              {introDesc}
            </p>
          </div>

        </div>

        {/* 1. Wide Cinematic Panoramic Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200/80 group h-[220px] sm:h-[300px] md:h-[450px]"
        >
          <img
            src={featuredSolarPanelImage}
            alt="Solar Panel System Panoramic View"
            className="w-full h-full object-cover transition-transform duration-6000 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-slate-950/25 to-transparent"></div>

          {/* Badge & Caption overlays */}
          <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 flex flex-col md:flex-row md:items-end justify-between gap-4 text-white">
            <div className="space-y-1">
              <span className="text-[9px] sm:text-[10px] uppercase font-black tracking-widest text-[#FCC200] block">
                SolEarth Installation
              </span>
              <h3 className="text-lg sm:text-2xl md:text-3xl font-serif font-semibold leading-tight">
                Clean Energy Council Accredited Standard
              </h3>
              <p className="text-[10px] sm:text-xs text-slate-200 font-medium max-w-2xl">
                Rigorous structural mounting conforming to local wind load standards AS/NZS 1170.2.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md border border-white/20 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-xl text-center self-start md:self-auto shrink-0">
              <span className="text-[8px] sm:text-[9px] uppercase font-black tracking-wider block text-slate-100">Compliance</span>
              <span className="text-[10px] sm:text-xs font-black text-white">100% SAA Certified</span>
            </div>
          </div>
        </motion.div>

        {/* 2. Technical details - Bottom 4-Column Grid with hover-color effects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {components.map((item, idx) => (
            <motion.div
              key={item.key}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`bg-white rounded-lg p-3 sm:p-4 border ${item.borderClass} shadow-lg hover:shadow-xl shadow-black transition-all duration-500 relative overflow-hidden group flex flex-col justify-between min-h-[340px] ${item.glowClass}`}
            >
              {/* Color Box Animation on hover (slides up from bottom behind content) */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r ${item.colorClass} group-hover:h-full transition-all duration-500 ease-out z-0 opacity-0 group-hover:opacity-100`}></div>

              <div className="space-y-4 relative z-10 transition-colors duration-500 group-hover:text-white">
                {/* Header row: Icon box and tag */}
                <div className="flex items-center justify-between gap-3">
                  <div className={`w-11 h-11 rounded-xl bg-slate-50 flex items-center justify-center transition-all duration-500 group-hover:bg-white/15`}>
                    {item.icon}
                  </div>
                  <span className={`px-2.5 py-0.5 rounded-full text-[9px] font-black border uppercase tracking-wider transition-colors duration-500 group-hover:bg-white/20 group-hover:text-white group-hover:border-white/20 ${item.tagBg}`}>
                    {item.data.spec}
                  </span>
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <span className="text-[9px] font-black uppercase tracking-wider text-[#FCC200] group-hover:text-amber-200 transition-colors">
                    {item.label}
                  </span>
                  <h4 className="text-lg sm:text-xl font-serif font-semibold text-[#1B74BB] group-hover:text-white transition-colors">
                    {item.data.title}
                  </h4>
                  <p className="text-xs sm:text-sm leading-relaxed text-slate-800 group-hover:text-slate-100 transition-colors font-semibold">
                    {item.data.desc}
                  </p>
                </div>
              </div>

              {/* Bullet Points */}
              <ul className="space-y-2 pt-4 border-t border-slate-100 group-hover:border-white/10 relative z-10 transition-colors duration-500 mt-5">
                {item.data.points.map((pt, ptIdx) => (
                  <li key={ptIdx} className="flex items-center gap-2 text-xs font-semibold text-slate-850 group-hover:text-slate-100 transition-colors">
                    <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0 group-hover:text-white" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Helper Warning & Call back triggers */}
        <div className="grid grid-cols-1 lg:grid-cols-12 rounded-2xl overflow-hidden shadow-lg border border-slate-200">
          <div className="lg:col-span-8 bg-white p-5 sm:p-6 flex items-start sm:items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-red-50 text-red-500 flex items-center justify-center shrink-0">
              <ShieldAlert className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h5 className="text-xs font-black text-slate-700 uppercase tracking-wider">Installer Safety Notice</h5>
              <p className="text-[11px] text-slate-900 leading-relaxed font-semibold">
                Australian safety standards require all external DC isolators to have protective shrouds and water-tight seals. SolEarth Energy uses only premium enclosures engineered to withstand severe storms.
              </p>
            </div>
          </div>

          <div className="lg:col-span-4 bg-linear-to-br from-[#FCC200] to-[#E28000] text-white p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <h5 className="text-xs font-black">Need Technical Support?</h5>
              <p className="text-[10px] text-slate-100/90 font-medium">Chat directly with a certified CEC engineer</p>
            </div>
            <a
              href="tel:61435359431"
              className="bg-white text-[#E28000] hover:bg-[#1B74BB] hover:text-white text-xs font-black uppercase tracking-wider py-2.5 px-4 rounded-lg transition shrink-0 text-center"
            >
              Call +61 435 359 431
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}
