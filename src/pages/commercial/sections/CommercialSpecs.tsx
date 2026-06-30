import { useState, useRef, useEffect } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import type { SystemDetail, SpecsTabConfigData } from '../../../data/commercialData'
import type { LucideIcon } from 'lucide-react'
import {
  Sun,
  Cpu,
  BatteryCharging,
  Wrench,
  CheckCircle2,
  Phone,
  ArrowRight,
  Zap,
  Shield,
  TrendingUp,
} from 'lucide-react'
import { useQuoteModal } from '../../../components/QuoteModal'

/** Map iconKey strings from the dataset to actual Lucide components */
const ICON_MAP: Record<string, LucideIcon> = {
  Sun,
  Cpu,
  BatteryCharging,
  Wrench,
}

interface CommercialSpecsProps {
  savings: string
  introTitle: string
  introDesc: string
  specsTabConfig: SpecsTabConfigData[]
  details: {
    panels: SystemDetail
    inverter: SystemDetail
    battery: SystemDetail
    mounting: SystemDetail
  }
}
const TRUST_PILLARS = [
  { icon: Zap, label: 'Rapid ROI', value: '3–5 yr payback' },
  { icon: Shield, label: 'CEC Accredited', value: 'Certified installs' },
  { icon: TrendingUp, label: 'Energy Savings', value: 'Guaranteed offset' },
]

export default function CommercialSpecs({
  introTitle,
  introDesc,
  specsTabConfig,
  details,
}: CommercialSpecsProps) {
  const { openQuoteModal } = useQuoteModal()
  const [activeTab, setActiveTab] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  /** Build resolved TAB_CONFIG from the per-page prop */
  const TAB_CONFIG = specsTabConfig.map((entry) => ({
    ...entry,
    Icon: ICON_MAP[entry.iconKey],
  }))

  /** Auto-cycle tabs every 5 seconds, pause on hover */
  useEffect(() => {
    if (isPaused) return
    const timer = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % TAB_CONFIG.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [activeTab, isPaused, TAB_CONFIG.length])

  const handleTabClick = (idx: number) => {
    setActiveTab(idx)
    // brief pause then resume auto-cycle
    setIsPaused(true)
    setTimeout(() => setIsPaused(false), 8000)
  }

  const tab = TAB_CONFIG[activeTab]
  const data: SystemDetail = details[tab.key as keyof typeof details]

  return (
    <section className="relative bg-white py-8 md:py-20 overflow-hidden" ref={ref}>
      {/* Progress bar keyframe animation */}
      <style>{`
        @keyframes tabProgress {
          from { width: 0% }
          to   { width: 100% }
        }
        .tab-progress {
          animation: tabProgress 5s linear forwards;
        }
      `}</style>
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.025] bg-[linear-gradient(to_right,#1B74BB_1px,transparent_1px),linear-gradient(to_bottom,#1B74BB_1px,transparent_1px)] bg-size-[4rem_4rem]" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#1B74BB]/4 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 relative z-10 space-y-10 md:space-y-14">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className=" "
        >
          <div className=" space-y-4">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#FCC200]/12 border border-[#FCC200]/30 rounded-full text-[11px] font-black uppercase tracking-widest text-black">
              Commercial System Components
            </span>
            <h2 className="text-xl sm:text-3xl max-w-5xl mx-auto md:text-5xl font-serif font-bold text-[#1B74BB] leading-tight">
              {introTitle}
            </h2>
            <p className="text-xs sm:text-sm md:text-base leading-relaxed text-slate-800 max-w-7xl mx-auto font-semibold text-justify md:text-center">
              {introDesc}
            </p>
          </div>

        </motion.div>

        {/* ── Tab Selector Row ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {TAB_CONFIG.map((t, idx) => {
            const Icon = t.Icon
            const isActive = idx === activeTab
            return (
              <button
                key={t.key}
                onClick={() => handleTabClick(idx)}
                className={`group relative rounded-xl sm:rounded-2xl border-2 p-3 sm:p-4 text-left transition-all duration-300 overflow-hidden cursor-pointer ${isActive
                  ? `bg-linear-to-br ${t.gradient} border-transparent shadow-xl ${t.glow} text-white`
                  : 'bg-slate-50 border-slate-400/80 hover:border-slate-300 text-slate-700 hover:bg-white hover:shadow-md'
                  }`}
              >
                {isActive && (
                  <div className="absolute inset-0 opacity-20 bg-[linear-gradient(135deg,rgba(255,255,255,0.3)_0%,transparent_60%)]" />
                )}
                <div className={`w-8 h-8 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl flex items-center justify-center mb-3 transition-all ${isActive ? 'bg-white/25' : t.bg}`}>
                  <Icon className={`w-4 h-4 sm:w-5 sm:h-5 transition-colors ${isActive ? 'text-white' : t.textColor}`} />
                </div>
                <span className={`block text-[10px] sm:text-xs font-black uppercase tracking-wider ${isActive ? 'text-white/80' : 'text-slate-900'}`}>
                  {t.short}
                </span>
                <span className={`block text-xs sm:text-sm font-black mt-0.5 ${isActive ? 'text-white' : 'text-slate-700'}`}>
                  {t.label}
                </span>

                {/* Auto-progress bar at bottom of active tab */}
                <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-white/15 rounded-t-full overflow-hidden">
                  {isActive && !isPaused && (
                    <div
                      key={`${activeTab}-progress`}
                      className="tab-progress h-full bg-white/70 rounded-t-full"
                    />
                  )}
                  {isActive && isPaused && (
                    <div className="h-full bg-white/30 w-full rounded-t-full" />
                  )}
                </div>
              </button>
            )
          })}
        </motion.div>

        {/* ── Main Content Panel ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-6"
          >
            {/* Left: Visual Panel */}
            <div className="lg:col-span-5 relative rounded-2xl overflow-hidden shadow-2xl group min-h-[280px] sm:min-h-[340px]">
              <img
                src={tab.image}
                alt={tab.label}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-transparent to-transparent" />

              {/* Floating spec badge */}
              <div className="absolute top-4 left-4 bg-white/10 backdrop-blur-md border border-white/25 rounded-xl px-3 sm:px-4 py-2 sm:py-3">
                <span className="block text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-white/70">Specification</span>
                <span className="block text-xs sm:text-sm font-black text-white mt-0.5">{data.spec}</span>
              </div>

              {/* Bottom overlay content */}
              <div className="absolute bottom-5 left-5 right-5 text-left">
                <div className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-linear-to-r ${tab.gradient} mb-3`}>
                  <tab.Icon className="w-3.5 h-3.5 text-white" />
                  <span className="text-[10px] font-black uppercase tracking-wider text-white">{tab.short}</span>
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-serif font-semibold text-white leading-tight">{data.title}</h3>
              </div>
            </div>

            {/* Right: Details Panel */}
            <div className="lg:col-span-7 flex flex-col gap-6 text-left">
              {/* Description card */}
              <div className=" space-y-4">
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl bg-linear-to-br ${tab.gradient} flex items-center justify-center shadow-lg shrink-0`}>
                    <tab.Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl sm:text-2xl md:text-3xl font-serif font-semibold text-[#1B74BB]">{data.title}</h4>
                    <span className="text-[11px] font-black uppercase tracking-widest text-slate-900">{data.spec}</span>
                  </div>
                </div>
                <p className="text-xs sm:text-sm md:text-base leading-relaxed text-slate-800 font-semibold border-t border-slate-200 pt-4">
                  {data.desc}
                </p>
              </div>

              {/* Feature Points */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {data.points.map((pt, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.08, duration: 0.35 }}
                    className={`relative rounded-xl border-2 ${tab.borderActive} p-4 bg-white shadow-sm overflow-hidden group hover:shadow-md transition-all duration-300`}
                  >
                    <div className={`absolute top-0 right-0 w-16 h-16 rounded-full bg-linear-to-br ${tab.gradient} opacity-5 -translate-y-4 translate-x-4`} />
                    <CheckCircle2 className="w-5 h-5 mb-2" style={{ color: tab.accent }} />
                    <span className="block text-xs font-black text-slate-700 leading-snug">{pt}</span>
                  </motion.div>
                ))}
              </div>

              {/* Trust Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {TRUST_PILLARS.map((pillar) => {
                  const PillarIcon = pillar.icon
                  return (
                    <div key={pillar.label} className="bg-[#1B74BB] text-white rounded-xl px-4 py-3.5 flex flex-col gap-1.5 shadow-sm hover:shadow-md transition-all duration-300">
                      <PillarIcon className="w-4 h-4 text-[#FCC200]" />
                      <span className="text-[10px] font-black uppercase tracking-wider text-slate-200">{pillar.label}</span>
                      <span className="text-xs font-black">{pillar.value}</span>
                    </div>
                  )
                })}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* ── Bottom CTA Strip ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="relative bg-linear-to-r from-[#FCC200] via-[#f5a623] to-[#E28000] rounded-2xl p-5 sm:p-7 md:p-8 overflow-hidden text-left"
        >
          {/* Decorative circles */}
          <div className="absolute -top-8 -right-8 w-40 h-40 rounded-full bg-white/10 pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-52 h-52 rounded-full bg-black/8 pointer-events-none" />

          <div className="relative flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center lg:text-left">
              <h3 className="text-lg sm:text-xl md:text-2xl font-black text-black font-serif">
                Ready for a Commercial Feasibility Study?
              </h3>
              <p className="text-xs sm:text-sm text-black/70 font-semibold leading-relaxed max-w-xl">
                Our CEC-accredited commercial engineers will assess your load profile, roof structure, and grid connection — at no upfront cost.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 shrink-0 w-full sm:w-auto">
              <a
                href="tel:61435359431"
                className="group inline-flex items-center justify-center gap-2 bg-black text-white hover:bg-[#1B74BB] font-black text-xs uppercase tracking-wider px-7 py-3.5 rounded-xl shadow-lg transition-all duration-300"
              >
                <Phone className="w-4 h-4" />
                Call +61 435 359 431
              </a>
              <button
                onClick={() => openQuoteModal('Commercial Specs Feasibility')}
                className="group inline-flex items-center justify-center gap-2 bg-white text-black hover:bg-[#1B74BB] hover:text-white font-black text-xs uppercase tracking-wider px-7 py-3.5 rounded-xl shadow-lg transition-all duration-300 cursor-pointer border-none"
              >
                Get a Free Proposal
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
