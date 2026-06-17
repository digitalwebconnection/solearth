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
  savings,
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
      icon: <Wrench className="w-6 h-6 text-sky-500 transition-colors duration-300 group-hover:text-white" />,
      colorClass: 'from-sky-500 to-sky-600',
      borderClass: 'border-sky-500/20 hover:border-sky-500/50',
      glowClass: 'group-hover:shadow-sky-500/10',
      tagBg: 'bg-sky-50 text-sky-700 border-sky-200',
    },
  ]

  const featuredSolarPanelImage = details.panels.image || "/images/solar/solar-panel-rooftop.jpg"

  return (
    <section className="py-10 bg-slate-50 text-slate-800 relative overflow-hidden">
      {/* Soft background light spots */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2  bg-[#004093]/5  pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 space-y-10">

        {/* Header Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8 space-y-4">

            <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#004093] leading-tight">
              {introTitle}
            </h2>
            <p className="text-sm md:text-base leading-relaxed text-slate-900 max-w-3xl">
              {introDesc}
            </p>
          </div>

          {/* Savings & Yield Highlight */}
          <div className="lg:col-span-4 flex lg:justify-end">
            <div className="bg-[#004093] text-white px-5 py-5 rounded-lg flex items-center justify-between shadow-xl shadow-[#004093]/10 w-full lg:max-w-xs border border-white/10">
              <div className="space-y-0.5">
                <span className="block text-[9px] font-black uppercase tracking-widest text-[#FE9900]">
                  Target Yield
                </span>
                <span className="block text-xs font-bold text-slate-100">Annual Return Offset</span>
              </div>
              <span className="text-xl font-black text-white">
                {savings}
              </span>
            </div>
          </div>
        </div>

        {/* 1. Wide Cinematic Panoramic Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative rounded-lg overflow-hidden shadow-2xl border border-slate-200/80 group h-[300px] md:h-[450px]"
        >
          <img
            src={featuredSolarPanelImage}
            alt="Solar Panel System Panoramic View"
            className="w-full h-full object-cover transition-transform duration-6000 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-linear-to-t from-slate-950/70 via-transparent to-transparent"></div>

          {/* Badge & Caption overlays */}
          <div className="absolute bottom-6 left-6 right-6 flex flex-col md:flex-row md:items-end justify-between gap-4 text-white">
            <div className="space-y-1">
              <span className="text-[10px] uppercase font-black tracking-widest text-[#FE9900] block">
                SolEarth Installation
              </span>
              <h3 className="text-2xl md:text-3xl font-serif font-semibold">
                Clean Energy Council Accredited Standard
              </h3>
              <p className="text-xs text-slate-200 font-medium max-w-2xl">
                Rigorous structural mounting conforming to local wind load standards AS/NZS 1170.2.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-xl text-center self-start md:self-auto">
              <span className="text-[9px] uppercase font-black tracking-wider block text-slate-300">Compliance</span>
              <span className="text-xs font-black text-white">100% SAA Certified</span>
            </div>
          </div>
        </motion.div>

        {/* 2. Technical details - Bottom 4-Column Grid with hover-color effects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {components.map((item, idx) => (
            <motion.div
              key={item.key}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`bg-white rounded-lg p-6 border ${item.borderClass} shadow-lg shadow-black  hover:shadow-xl transition-all duration-500 relative overflow-hidden group flex flex-col justify-between min-h-[350px] ${item.glowClass}`}
            >
              {/* Color Box Animation on hover (slides up from bottom behind content) */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r ${item.colorClass} group-hover:h-full transition-all duration-500 ease-out z-0 opacity-0 group-hover:opacity-100`}></div>

              <div className="space-y-5 relative z-10 transition-colors duration-500 group-hover:text-white">
                {/* Header row: Icon box and tag */}
                <div className="flex items-center justify-between gap-3">
                  <div className={`w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center transition-all duration-500 group-hover:bg-white/15`}>
                    {item.icon}
                  </div>
                  <span className={`px-2.5 py-0.5 rounded-full text-[9px] font-black border uppercase tracking-wider transition-colors duration-500 group-hover:bg-white/20 group-hover:text-white group-hover:border-white/20 ${item.tagBg}`}>
                    {item.data.spec}
                  </span>
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <span className="text-[9px] font-black uppercase tracking-wider text-[#FE9900] group-hover:text-amber-200 transition-colors">
                    {item.label}
                  </span>
                  <h4 className="text-2xl md:text-3xl font-serif font-semibold text-[#004093] group-hover:text-white transition-colors">
                    {item.data.title}
                  </h4>
                  <p className="text-sm md:text-base leading-relaxed text-slate-500 group-hover:text-slate-100 transition-colors font-semibold">
                    {item.data.desc}
                  </p>
                </div>
              </div>

              {/* Bullet Points */}
              <ul className="space-y-2 pt-4 border-t border-slate-100 group-hover:border-white/10 relative z-10 transition-colors duration-500 mt-6">
                {item.data.points.map((pt, ptIdx) => (
                  <li key={ptIdx} className="flex items-center gap-2 text-xs font-semibold text-slate-800 group-hover:text-slate-100 transition-colors">
                    <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0 group-hover:text-white" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Helper Warning & Call back triggers */}
        <div className="grid grid-cols-1 lg:grid-cols-12  ">
          <div className="lg:col-span-8 bg-white p-6 rounded-l-lg shadow-black border border-slate-400/60 shadow-lg flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-red-50 text-red-500 flex items-center justify-center shrink-0">
              <ShieldAlert className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h5 className="text-xs font-black text-slate-700 uppercase tracking-wider">Installer Safety Notice</h5>
              <p className="text-[11px] text-slate-500 leading-relaxed font-semibold">
                Australian safety standards require all external DC isolators to have protective shrouds and water-tight seals. SolEarth Energy uses only premium enclosures engineered to withstand severe storms.
              </p>
            </div>
          </div>

          <div className="lg:col-span-4 bg-linear-to-br from-[#FE9900] to-[#E28000] text-white p-6 rounded-r-lg shadow-lg shadow-black flex items-center justify-between gap-4">
            <div className="space-y-1">
              <h5 className="text-xs font-black">Need Technical Support?</h5>
              <p className="text-[10px] text-slate-100/90 font-medium">Chat directly with a certified CEC engineer</p>
            </div>
            <a
              href="tel:1300672194"
              className="bg-white text-[#E28000] hover:bg-[#004093] hover:text-white text-xs font-black uppercase tracking-wider py-2.5 px-4 rounded-lg transition shadow-md shadow-black shrink-0"
            >
              Call 1300 672 194
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}
