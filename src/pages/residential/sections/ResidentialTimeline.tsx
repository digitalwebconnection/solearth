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
    const color = active ? 'text-white' : 'text-[#004093]'
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
    <section className="py-24 bg-slate-50 text-slate-800 relative overflow-hidden border-t border-slate-200/50">
      
      {/* Decorative Blur elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-amber-50 rounded-full blur-3xl opacity-60 pointer-events-none"></div>
      <div className="absolute bottom-10 left-0 w-80 h-80 bg-sky-50 rounded-full blur-3xl opacity-60 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <span className="text-[11px] text-[#FE9900] font-black uppercase tracking-widest block">
            Installation Journey
          </span>
          <h2 className="text-3xl md:text-5xl font-black font-serif text-[#004093] leading-tight">
            How We Get You Solar Ready
          </h2>
          <p className="text-sm md:text-base font-semibold text-slate-500 leading-relaxed">
            We handle all engineering, grid coordination, rebate documentation, and installation. Follow our seamless 4-step deployment process.
          </p>
        </div>

        {/* 2-Column Interactive Showcase Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Vertical Track Selector */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4 relative">
            
            {/* Timeline Line (Desktop only) */}
            <div className="hidden lg:block absolute left-[30px] top-6 bottom-6 w-0.5 bg-slate-200 z-0"></div>

            <div className="space-y-4 relative z-10">
              {timeline.map((step) => {
                const isActive = activeStep === step.num
                return (
                  <button
                    key={step.num}
                    onClick={() => setActiveStep(step.num as StepNum)}
                    className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 flex items-center gap-5 group relative ${
                      isActive 
                        ? 'bg-[#004093] border-[#004093] text-white shadow-xl shadow-[#004093]/10 translate-x-2'
                        : 'bg-white border-slate-200 hover:border-[#004093]/30 text-slate-700 hover:bg-white/90'
                    }`}
                  >
                    {/* Active Accent background */}
                    {isActive && (
                      <motion.div 
                        layoutId="activeTimelineGlow"
                        className="absolute inset-0 bg-gradient-to-r from-[#004093] to-sky-900/10 opacity-100 rounded-2xl pointer-events-none z-0"
                      />
                    )}

                    <div className="relative z-10 flex items-center justify-between w-full">
                      <div className="flex items-center gap-4">
                        {/* Node number icon sphere */}
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 font-bold text-xs shrink-0 ${
                          isActive 
                            ? 'bg-[#FE9900] text-white shadow-md' 
                            : 'bg-slate-100 text-slate-400 group-hover:bg-[#004093]/10 group-hover:text-[#004093]'
                        }`}>
                          {step.num}
                        </div>
                        
                        <div>
                          <span className={`text-[10px] font-black uppercase tracking-wider block ${
                            isActive ? 'text-slate-300' : 'text-slate-400'
                          }`}>
                            {step.time}
                          </span>
                          <h4 className="text-sm font-black leading-snug">
                            {step.title}
                          </h4>
                        </div>
                      </div>

                      <ArrowRight className={`w-4 h-4 transition-transform duration-300 ${
                        isActive ? 'text-[#FE9900] translate-x-1' : 'text-slate-300 group-hover:text-[#004093]'
                      }`} />
                    </div>
                  </button>
                )
              })}
            </div>

            {/* Bottom Help Notice */}
            <div className="bg-white p-5 rounded-2xl border border-slate-200/60 shadow-lg shadow-black/[0.01] flex items-center gap-3">
              <ShieldAlert className="w-5 h-5 text-amber-500 shrink-0" />
              <p className="text-[10px] text-slate-500 leading-relaxed font-semibold">
                SolEarth manages all building permits and utility connection pre-approvals directly with NSW & QLD networks.
              </p>
            </div>

          </div>

          {/* Right Column: Detailed Interactive Target Card */}
          <div className="lg:col-span-7 flex">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35 }}
                className="bg-white rounded-3xl p-8 md:p-10 border border-slate-200/80 shadow-2xl flex flex-col justify-between w-full"
              >
                <div className="space-y-6">
                  {/* Dynamic Time duration and Icon */}
                  <div className="flex items-center justify-between border-b border-slate-100 pb-5">
                    <div className="flex items-center gap-2 text-slate-500">
                      <Clock className="w-4 h-4 text-[#FE9900]" />
                      <span className="text-xs font-black uppercase tracking-wider text-slate-400">
                        Duration: {activeData.time}
                      </span>
                    </div>

                    <div className="w-10 h-10 rounded-full bg-[#004093] flex items-center justify-center">
                      {getIcon(activeData.num, true)}
                    </div>
                  </div>

                  {/* Detail Body */}
                  <div className="space-y-3">
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#FE9900]">
                      Phase {activeData.num} Description
                    </span>
                    <h3 className="text-2xl font-black text-[#004093] font-serif">
                      {activeData.title}
                    </h3>
                    <p className="text-xs md:text-sm text-slate-500 font-semibold leading-relaxed">
                      {activeData.desc}
                    </p>
                  </div>

                  {/* Checklist actions */}
                  <div className="space-y-3 pt-6 border-t border-slate-100">
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 block">
                      Standard Quality Procedures:
                    </span>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {activeData.checklist.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2.5 p-3 bg-slate-50 rounded-xl border border-slate-200/40">
                          <div className="w-2 h-2 rounded-full bg-emerald-500 shrink-0"></div>
                          <span className="text-xs font-black text-slate-600">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footnote CTA */}
                <div className="pt-8 mt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                    SolEarth CEC Approved standard
                  </span>
                  
                  <a 
                    href="tel:1300111111"
                    className="bg-[#004093] hover:bg-[#FE9900] text-white text-[10px] font-black uppercase tracking-wider py-2.5 px-5 rounded-xl transition shadow-md w-full sm:w-auto text-center"
                  >
                    Call 1300 111 111
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
