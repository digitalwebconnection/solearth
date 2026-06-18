import { useState, useEffect } from 'react'
import type { TimelineStep } from '../../../data/residentialData'
import { motion, AnimatePresence } from 'framer-motion'
import { FileSearch, FileCheck, CheckCircle2, ClipboardCheck, ArrowRight, Clock, ShieldAlert } from 'lucide-react'

interface ResidentialTimelineProps {
  timeline: TimelineStep[]
}

type StepNum = '01' | '02' | '03' | '04'

export default function ResidentialTimeline({ timeline }: ResidentialTimelineProps) {
  const [activeStep, setActiveStep] = useState<StepNum>('01')

  // Auto-advance timeline steps every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => {
        const steps: StepNum[] = ['01', '02', '03', '04']
        const currIndex = steps.indexOf(prev)
        const nextIndex = (currIndex + 1) % steps.length
        return steps[nextIndex]
      })
    }, 6000)
    return () => clearInterval(interval)
  }, [activeStep])

  // Helper to dynamically match icons to steps
  const getIcon = (num: string, active: boolean) => {
    const color = active ? 'text-white' : 'text-[#1B74BB]'
    switch (num) {
      case '01':
        return <FileSearch className={`w-5 h-5 ${color} transition-colors`} />
      case '02':
        return <FileCheck className={`w-5 h-5 ${color} transition-colors`} />
      case '03':
        return <ClipboardCheck className={`w-5 h-5 ${color} transition-colors`} />
      case '04':
      default:
        return <CheckCircle2 className={`w-5 h-5 ${color} transition-colors`} />
    }
  }

  const activeData = timeline.find((s) => s.num === activeStep) || timeline[0]

  return (
    <section className="py-12 md:py-20 bg-slate-50 text-slate-800 relative overflow-hidden border-t border-slate-200/50">

      {/* Decorative Blur elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-amber-50 rounded-full blur-3xl opacity-60 pointer-events-none"></div>
      <div className="absolute bottom-10 left-0 w-80 h-80 bg-sky-50 rounded-full blur-3xl opacity-60 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">

        {/* Section Header */}
        <div className="max-w-6xl mx-auto text-center mb-10 md:mb-16 space-y-3 sm:space-y-4">
          <span className="text-[10px] sm:text-[11px] text-[#FCC200] font-black uppercase tracking-widest block">
            Installation Journey
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-serif font-bold text-[#1B74BB] leading-tight">
            How We Get You Solar Ready
          </h2>
          <p className="text-xs sm:text-sm md:text-base leading-relaxed text-slate-900 font-semibold max-w-2xl mx-auto">
            We handle all engineering, grid coordination, rebate documentation, and installation. Follow our seamless 4-step deployment process.
          </p>
        </div>

        {/* 2-Column Interactive Showcase Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-stretch">

          {/* Left Column: Vertical Track Selector */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-4 relative">

            {/* Timeline Line (Desktop only) */}
            <div className="hidden lg:block absolute left-[30px] top-6 bottom-6 w-0.5 bg-slate-200 z-0"></div>

            <div className="space-y-3 relative z-10">
              {timeline.map((step) => {
                const isActive = activeStep === step.num
                return (
                  <button
                    key={step.num}
                    onClick={() => setActiveStep(step.num as StepNum)}
                    className={`w-full text-left p-3.5 sm:p-5 rounded-xl border transition-all duration-300 flex items-center gap-4 sm:gap-5 group relative ${isActive
                      ? 'bg-[#1B74BB] border-[#1B74BB] text-white shadow-xl shadow-[#1B74BB]/10 translate-x-1 sm:translate-x-2'
                      : 'bg-white border-slate-400 hover:border-[#1B74BB]/30 text-slate-700 shadow-lg shadow-black hover:bg-white/90'
                      }`}
                  >
                    {/* Active Accent background */}
                    {isActive && (
                      <motion.div
                        layoutId="activeTimelineGlow"
                        className="absolute inset-0 bg-linear-to-r from-[#1B74BB] to-sky-900/10 opacity-100 rounded-xl pointer-events-none z-0"
                      />
                    )}

                    <div className="relative z-10 flex items-center justify-between w-full">
                      <div className="flex items-center gap-3 sm:gap-4">
                        {/* Node number icon sphere */}
                        <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all duration-300 font-bold text-xs shrink-0 ${isActive
                          ? 'bg-[#FCC200] text-white shadow-md'
                          : 'bg-slate-100 text-slate-900 group-hover:bg-[#1B74BB]/10 group-hover:text-[#1B74BB]'
                          }`}>
                          {step.num}
                        </div>

                        <div>
                          <span className={`text-[9px] sm:text-[10px] font-black uppercase tracking-wider block ${isActive ? 'text-slate-900' : 'text-slate-800'
                            }`}>
                            {step.time}
                          </span>
                          <h4 className="text-xs sm:text-sm font-black leading-snug">
                            {step.title}
                          </h4>
                        </div>
                      </div>

                      <ArrowRight className={`w-4 h-4 transition-transform duration-300 ${isActive ? 'text-[#FCC200] translate-x-1' : 'text-slate-900 group-hover:text-[#1B74BB]'
                        }`} />
                    </div>
                  </button>
                )
              })}
            </div>

            {/* Bottom Help Notice */}
            <div className="bg-white p-4 rounded-xl border border-slate-200/60 shadow-lg shadow-black/1 flex items-center gap-3">
              <ShieldAlert className="w-5 h-5 text-amber-500 shrink-0" />
              <p className="text-[10px] text-slate-900 leading-relaxed font-semibold">
                SolEarth manages all building permits and utility connection pre-approvals directly with NSW & QLD networks.
              </p>
            </div>

          </div>

          {/* Right Column: Detailed Interactive Target Card */}
          <div className="lg:col-span-7 flex">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
                className="bg-white rounded-2xl p-5 sm:p-8 border border-slate-400/80 shadow-2xl flex flex-col justify-between w-full"
              >
                <div className="space-y-4">
                  {/* Dynamic Time duration and Icon */}
                  <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                    <div className="flex items-center gap-2 text-slate-900">
                      <Clock className="w-4 h-4 text-[#FCC200]" />
                      <span className="text-xs font-black uppercase tracking-wider text-slate-900">
                        Duration: {activeData.time}
                      </span>
                    </div>

                    <div className="w-10 h-10 rounded-full bg-[#1B74BB] flex items-center justify-center">
                      {getIcon(activeData.num, true)}
                    </div>
                  </div>

                  {/* Detail Body */}
                  <div className="space-y-2">
                    <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-[#FCC200]">
                      Phase {activeData.num} Description
                    </span>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-serif font-semibold text-[#1B74BB] leading-tight">
                      {activeData.title}
                    </h3>
                    <p className="text-xs sm:text-sm md:text-base leading-relaxed text-slate-950 font-semibold">
                      {activeData.desc}
                    </p>
                  </div>

                  {/* Checklist actions */}
                  <div className="space-y-3 pt-5 border-t border-slate-100">
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-900 block">
                      Standard Quality Procedures:
                    </span>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {activeData.checklist.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2.5 p-3 bg-slate-50 rounded-xl border border-slate-400/40">
                          <div className="w-2 h-2 rounded-full bg-emerald-500 shrink-0"></div>
                          <span className="text-xs font-bold text-slate-800 leading-normal">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footnote CTA */}
                <div className="pt-2 mt-5 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-800">
                    SolEarth CEC Approved standard
                  </span>

                  <a
                    href="tel:1300672194"
                    className="bg-[#1B74BB] hover:bg-[#FCC200] text-white text-[10px] font-black uppercase tracking-wider py-2.5 px-5 rounded-lg transition shadow-md w-full sm:w-auto text-center border-none"
                  >
                    Call 1300 672 194
                  </a>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  )
}
