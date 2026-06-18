import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import type { ProcessStep } from '../../../data/commercialData'
import type { LucideIcon } from 'lucide-react'
import {
  ClipboardList, ScanSearch, Cpu, HardHat, PlugZap, BarChart3,
  FileCheck, Lightbulb, Handshake, Settings, Zap, ShieldCheck,
} from 'lucide-react'

const ICON_MAP: Record<string, LucideIcon> = {
  ClipboardList, ScanSearch, Cpu, HardHat, PlugZap, BarChart3,
  FileCheck, Lightbulb, Handshake, Settings, Zap, ShieldCheck,
}

interface CommercialProcessProps {
  processSteps: ProcessStep[]
  systemSize: string
}

export default function CommercialProcess({ processSteps, systemSize }: CommercialProcessProps) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null)

  return (
    <section className="bg-[#060f1e] text-white py-12 md:py-20 relative overflow-hidden" ref={ref}>
      {/* Background radial glows */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-[#1B74BB]/10 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full bg-[#FCC200]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12 md:mb-20 space-y-3"
        >
          <span className="inline-block px-3.5 py-1.5 bg-[#FCC200]/12 border border-[#FCC200]/30 rounded-full text-[11px] font-black uppercase tracking-widest text-[#FCC200]">
            {systemSize} — Process Flow
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-serif font-bold leading-tight">
            Our 5-Stage Delivery
          </h2>
          <p className="text-xs sm:text-sm md:text-base leading-relaxed text-slate-300 font-medium">
            A clean, transparent roadmap guiding your commercial project from initial audit to final connection.
          </p>
        </motion.div>

        {/* ── Typographic Borderless Column Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6">
          {processSteps.map((step, idx) => {
            const Icon = ICON_MAP[step.iconKey]
            const isHovered = hoveredIdx === idx
            const isAnyHovered = hoveredIdx !== null

            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                className={`relative flex flex-col justify-between transition-all duration-300 ${isAnyHovered && !isHovered ? 'opacity-50' : 'opacity-100'
                  }`}
              >
                <div>
                  {/* Step Number with Accent Color */}
                  <div className="flex items-baseline gap-4 mb-4">
                    <span
                      className="text-5xl md:text-6xl font-black tracking-tighter leading-none"
                      style={{ color: step.accent }}
                    >
                      {step.step}
                    </span>
                    {Icon && <Icon className="w-5 h-5 opacity-40" style={{ color: step.accent }} />}
                  </div>

                  {/* Minimal Line Indicator */}
                  <div className="h-[2px] bg-white/10 w-full relative mb-6">
                    <motion.div
                      className="absolute left-0 top-0 bottom-0 h-full"
                      style={{ backgroundColor: step.accent }}
                      initial={{ width: '0%' }}
                      animate={isHovered ? { width: '100%' } : { width: '15%' }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>

                  {/* Text Content */}
                  <h3 className={`text-lg sm:text-xl md:text-2xl font-serif font-semibold transition-colors duration-300 ${isHovered ? 'text-white' : 'text-slate-200'
                    }`}>
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base leading-relaxed text-slate-300 font-medium mt-3">
                    {step.desc}
                  </p>
                </div>

                {/* Milestone Stat Block */}
                <div className="mt-8 pt-4 border-t border-white/5">
                  <span className="block text-[10px] font-black uppercase tracking-widest text-slate-400">
                    {step.statLabel}
                  </span>
                  <span className="block text-base font-black mt-0.5" style={{ color: step.accent }}>
                    {step.stat}
                  </span>
                </div>
              </motion.div>
            )
          })}
        </div>


      </div>
    </section>
  )
}
