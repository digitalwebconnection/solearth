import { useRef } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import { Compass, Zap, ShieldCheck, BatteryCharging, Sparkles } from 'lucide-react'

export default function AboutTimeline() {
  const containerRef = useRef<HTMLDivElement>(null)
  
  // Track scroll position of the timeline container to animate the progress line
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end end']
  })
  
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  const events = [
    {
      year: '2016',
      title: 'Our Inception',
      desc: 'SolEarth was founded in Sydney with a team of just three engineers wanting to make home solar simple, affordable, and durable.',
      icon: Compass,
      color: 'text-amber-500 bg-amber-50 border-amber-100'
    },
    {
      year: '2018',
      title: '1,000+ Installations',
      desc: 'Expanded operations to Newcastle and Wollongong, achieving a major milestone of 1,000 residential solar installations.',
      icon: Zap,
      color: 'text-[#2AA9E4] bg-sky-50 border-sky-100'
    },
    {
      year: '2021',
      title: 'CEC Approved Retailer Status',
      desc: 'Recognized by the Clean Energy Council as an Approved Retailer, highlighting our commitment to consumer protection and engineering excellence.',
      icon: ShieldCheck,
      color: 'text-emerald-500 bg-emerald-50 border-emerald-100'
    },
    {
      year: '2023',
      title: 'Battery Storage Boom',
      desc: 'Launched specialized home hybrid battery packages, helping Australians transition to 24/7 solar independence.',
      icon: BatteryCharging,
      color: 'text-blue-500 bg-blue-50 border-blue-100'
    },
    {
      year: '2026',
      title: 'Next-Gen Renewable Hub',
      desc: 'Operating nationwide offices, offering AI-optimized smart energy audits, and celebrating over 12,000 happy customers.',
      icon: Sparkles,
      color: 'text-purple-500 bg-purple-50 border-purple-100'
    },
  ]

  return (
    <section ref={containerRef} className="py-12 md:py-20 bg-slate-50 bg-[radial-gradient(#e2e8f0_1.5px,transparent_1.5px)] bg-size-[32px_32px] relative overflow-hidden">
      {/* Dynamic drifting background ambient blobs */}
      <motion.div
        animate={{
          scale: [1, 1.1, 0.9, 1],
          x: [0, 40, -30, 0],
          y: [0, -30, 40, 0]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/4 left-1/4 w-180 h-180 rounded-full bg-[#2AA9E4]/5 blur-[130px] pointer-events-none"
      />
      <motion.div
        animate={{
          scale: [1, 0.9, 1.1, 1],
          x: [0, -40, 30, 0],
          y: [0, 40, -30, 0]
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-1/4 right-1/4 w-180 h-180 rounded-full bg-[#FCC200]/4 blur-[130px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block text-[#2AA9E4] text-xs font-bold tracking-widest uppercase px-4 py-1.5 bg-[#2AA9E4]/10 border border-[#2AA9E4]/20 rounded-full mb-4"
          >
            Our Journey
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-5xl font-serif font-bold text-[#0a1f44] mb-4"
          >
            Our Journey So Far
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm md:text-base leading-relaxed text-gray-900"
          >
            A look back at how we built one of Australia\'s leading solar installation networks.
          </motion.p>
        </div>

        {/* Timeline Axis Container */}
        <div className="relative max-w-7xl mx-auto">
          {/* Base timeline track line */}
          <div className="absolute left-3 sm:left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 -translate-x-1/2 pointer-events-none" />
          
          {/* Scroll-driven progress line */}
          <motion.div 
            style={{ scaleY, originY: 0 }}
            className="absolute left-3 sm:left-4 md:left-1/2 top-0 bottom-0 w-[3px] bg-linear-to-b from-[#2AA9E4] via-[#1B74BB] to-[#FCC200] -translate-x-1/2 origin-top pointer-events-none"
          />

          {events.map((event, i) => {
            const Icon = event.icon
            const isEven = i % 2 === 0
            
            return (
              <div 
                key={event.year} 
                className={`relative flex flex-col md:flex-row items-start ${isEven ? 'md:flex-row-reverse' : ''} mb-8 md:mb-12 last:mb-0 group`}
              >
                {/* Central Circle Pin Indicator with Ping Animation */}
                <motion.div 
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ type: 'spring', stiffness: 180, delay: 0.15 }}
                  className="absolute left-3 sm:left-4 md:left-1/2 top-8 md:top-12 -translate-x-1/2 -translate-y-1/2 z-20"
                >
                  <div className="relative flex items-center justify-center">
                    {/* Ring ping wave */}
                    <div className="absolute inset-0 w-8 h-8 rounded-full bg-[#1B74BB]/20 animate-ping pointer-events-none" />
                    
                    <div className="w-8 h-8 rounded-full bg-white border-4 border-[#1B74BB] flex items-center justify-center shadow-md group-hover:border-[#FCC200] group-hover:scale-110 transition-all duration-300">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#0a1f44] group-hover:bg-[#FCC200] transition-colors duration-300" />
                    </div>
                  </div>
                </motion.div>

                {/* Content card side */}
                <div className="w-full md:w-[calc(50%-1.5rem)] pl-8 sm:pl-10 md:pl-0">
                  <motion.div
                    initial={{ opacity: 0, y: 25, x: isEven ? 15 : -15 }}
                    whileInView={{ opacity: 1, y: 0, x: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="relative bg-white border-2 border-slate-300 rounded-lg p-5 sm:p-8 shadow-lg hover:shadow-xl hover:border-[#2AA9E4]/30 hover:-translate-y-2 transition-all duration-500 overflow-hidden"
                  >
                    {/* Subtle glow reveal overlay */}
                    <div className="absolute -bottom-8 -right-8 w-28 h-28 rounded-full bg-slate-50 opacity-0 group-hover:opacity-100 group-hover:bg-[#2AA9E4]/5 transition-all duration-500" />

                    {/* Giant Watermark Year text in the card background */}
                    <div className="absolute right-6 -bottom-6 select-none pointer-events-none text-7xl font-black text-slate-100/60 group-hover:text-[#2AA9E4]/5 group-hover:scale-105 transition-all duration-500">
                      {event.year}
                    </div>

                    {/* Timeline card Header */}
                    <div className="flex items-center justify-between mb-4 sm:mb-6 relative z-10">
                      <div className="inline-flex px-4 py-1 text-sm font-black text-white bg-linear-to-r from-[#2AA9E4] to-[#1B74BB] rounded-full shadow-sm">
                        {event.year}
                      </div>
                      
                      {/* Icon */}
                      <div className={`p-2.5 rounded-xl border ${event.color} group-hover:bg-[#0a1f44] group-hover:text-white group-hover:border-[#0a1f44] transition-all duration-300`}>
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    <h3 className="text-xl sm:text-2xl md:text-3xl font-serif font-semibold text-[#0a1f44] mb-3 group-hover:text-[#2AA9E4] transition-colors duration-300 relative z-10">
                      {event.title}
                    </h3>
                    
                    <p className="text-gray-500 text-sm leading-relaxed relative z-10 text-left">
                      {event.desc}
                    </p>
                  </motion.div>
                </div>

                {/* Empty side for layout centering balance */}
                <div className="hidden md:block w-[calc(50%-2.5rem)]" />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
