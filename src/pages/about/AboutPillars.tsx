import { useState } from 'react'
import { motion } from 'framer-motion'
import { Shield, Sun, Users, Award } from 'lucide-react'

export default function AboutPillars() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const pillars = [
    {
      id: '01',
      icon: Sun,
      title: 'Premium Engineering',
      desc: 'We install high-performance Tier-1 panels and state-of-the-art inverters designed to maximize clean energy output, even in harsh Australian heat.',
      img: '/images/solar/solar-residential-house.webp',
      color: 'from-amber-500/20 to-amber-600/20 border-amber-500/30 text-amber-400'
    },
    {
      id: '02',
      icon: Shield,
      title: 'Uncompromised Safety',
      desc: 'Safety is at our core. Every single technician is a fully certified, CEC-accredited installer working to strict safety guidelines and Australian electrical regulations.',
      img: '/images/solar/solar-engineer-panel.webp',
      color: 'from-sky-500/20 to-sky-600/20 border-[#2AA9E4]/30 text-sky-400'
    },
    {
      id: '03',
      icon: Users,
      title: 'Customer-First Approach',
      desc: 'We make transitioning to solar easy. Our domestic customer care and engineering teams guide you through every design, rebate filing, and maintenance phase.',
      img: '/images/solar/solar-tech-worker.webp',
      color: 'from-blue-500/20 to-blue-600/20 border-blue-500/30 text-blue-400'
    },
    {
      id: '04',
      icon: Award,
      title: 'Industry Warranties',
      desc: 'Rest easy with warranties that protect your pocket. Enjoy a 25-year panel performance warranty and a 10-year workmanship warranty on our professional installations.',
      img: '/images/solar/solar-smart-home.webp',
      color: 'from-emerald-500/20 to-emerald-600/20 border-emerald-500/30 text-emerald-400'
    }
  ]

  return (
    <section className="py-10 bg-slate-950 relative overflow-hidden">
      {/* Animated glow effects for background depth */}
      <motion.div
        animate={{
          scale: [1, 1.15, 0.95, 1.1, 1],
          x: [0, 60, -30, 40, 0],
          y: [0, -40, 50, -30, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 left-0 w-200 h-200 rounded-full bg-[#2AA9E4]/10 blur-[150px] pointer-events-none"
      />
      <motion.div
        animate={{
          scale: [1, 1.1, 1.2, 0.95, 1],
          x: [0, -50, 40, -60, 0],
          y: [0, 50, -40, 30, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-1/4 right-0 w-200 h-200 rounded-full bg-[#FCC200]/5 blur-[150px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-10 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block text-[#2AA9E4] text-xs font-bold tracking-widest uppercase px-4 py-1.5 bg-[#2AA9E4]/10 border border-[#2AA9E4]/20 rounded-full mb-4"
          >
            How We Deliver Excellence
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-5xl font-serif font-bold text-white mb-4 leading-tight"
          >
 Trusted Standards. Proven Results. 
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm md:text-base leading-relaxed text-white"
          >
          Our success is built on quality workmanship, engineering excellence and complete transparency. </motion.p>
        </div>

        {/* Desktop View: Horizontal Expandable Flex Accordion */}
        <div className="hidden lg:flex gap-4 h-[580px] w-full overflow-hidden">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon
            const isHovered = hoveredIndex === i
            const isAnyHovered = hoveredIndex !== null

            // If another item is hovered, reduce this item's flex scale and opacity
            const flexClass = isHovered
              ? 'flex-[2.8] border-[#2AA9E4]/40 shadow-2xl'
              : isAnyHovered
                ? 'flex-[0.7] opacity-65 border-white/5'
                : 'flex-1 border-white/10'

            return (
              <div
                key={pillar.id}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`relative rounded-lg overflow-hidden border bg-slate-900 transition-all duration-700 ease-out cursor-pointer group flex flex-col justify-end p-8 ${flexClass}`}
              >
                {/* Background Image */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <img
                    src={pillar.img}
                    alt={pillar.title}
                    className="absolute inset-0 w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-1000 ease-out"
                  />
                  {/* Tailwind CSS v4 gradient overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/60 to-slate-950/15 opacity-90 z-10" />
                </div>

                {/* Card Content */}
                <div className="relative z-20 w-full flex flex-col items-start transition-all duration-500">
                  {/* Top-Right Badge: Pillar Number */}
                  <div className="absolute top-[-380px] right-0 select-none text-7xl font-black text-white/5 group-hover:text-[#2AA9E4]/15 transition-colors duration-500">
                    {pillar.id}
                  </div>

                  {/* Icon */}
                  <div className={`p-4 rounded-2xl border bg-slate-950/80 backdrop-blur-md transition-all duration-500 mb-6 ${pillar.color} border-white/10 group-hover:bg-[#0a1f44] group-hover:border-[#0a1f44] group-hover:text-white`}>
                    <Icon className="w-8 h-8" />
                  </div>

                  {/* Pillar Number Label */}
                  <span className="text-xs font-bold uppercase tracking-widest text-[#2AA9E4] mb-2">
                    Pillar {pillar.id}
                  </span>

                  {/* Title */}
                  <h3 className="text-2xl md:text-3xl font-serif font-semibold text-white mb-2 leading-tight">
                    {pillar.title}
                  </h3>

                  {/* Expandable Description */}
                  <div
                    className={`transition-all duration-700 ease-in-out overflow-hidden ${isHovered ? 'max-h-[180px] opacity-100 mt-3' : 'max-h-0 opacity-0'
                      }`}
                  >
                    <p className="text-white text-[14px] leading-relaxed mb-6">
                      {pillar.desc}
                    </p>

                    {/* Learn More Indicator */}
                    <div className="flex items-center gap-2 text-[#2AA9E4] text-xs font-bold uppercase tracking-wider">
                      <span>Learn More</span>
                      <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Accent bottom-line glow */}
                <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-linear-to-r from-transparent via-[#2AA9E4] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </div>
            )
          })}
        </div>

        {/* Mobile & Tablet View: Stack of Visual Cards */}
        <div className="lg:hidden grid grid-cols-1 md:grid-cols-2 gap-6">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon
            const isActive = hoveredIndex === i

            return (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                key={pillar.id}
                onClick={() => setHoveredIndex(isActive ? null : i)}
                className={`relative rounded-3xl overflow-hidden border bg-slate-900 flex flex-col justify-end p-6 sm:p-8 min-h-[300px] sm:min-h-[340px] cursor-pointer shadow-xl transition-all duration-500 ease-out select-none ${
                  isActive 
                    ? 'border-[#2AA9E4] scale-[1.03] shadow-[#2AA9E4]/10 shadow-2xl' 
                    : 'border-white/10 scale-100'
                }`}
              >
                {/* Background Image */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <img
                    src={pillar.img}
                    alt={pillar.title}
                    className={`w-full h-full object-cover transition-transform duration-700 ease-out ${
                      isActive ? 'scale-105' : 'scale-100'
                    }`}
                  />
                  {/* Tailwind CSS v4 gradient overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/80 to-transparent opacity-90 z-10" />
                </div>

                {/* Content */}
                <div className="relative z-10 w-full text-left">
                  <div className={`inline-flex p-2.5 rounded-xl border bg-slate-950/80 backdrop-blur-md mb-3 ${pillar.color}`}>
                    <Icon className="w-5.5 h-5.5" />
                  </div>
                  <span className="block text-xs font-bold uppercase tracking-widest text-[#2AA9E4] mb-1">
                    Pillar {pillar.id}
                  </span>
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl sm:text-2xl font-serif font-semibold text-white leading-tight">
                      {pillar.title}
                    </h3>
                    {/* Expand/Collapse chevron indicator */}
                    <span className="text-[#2AA9E4] shrink-0 ml-4">
                      <svg
                        className={`w-5 h-5 transform transition-transform duration-300 ${isActive ? 'rotate-180' : 'rotate-0'}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2.5"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </div>

                  {/* Expandable description body */}
                  <div
                    className={`transition-all duration-500 ease-in-out overflow-hidden ${
                      isActive ? 'max-h-[140px] opacity-100 mt-3.5' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <p className="text-slate-200 text-xs sm:text-sm leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
                
                {/* Accent bottom-line glow */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-[#2AA9E4] to-transparent transition-transform duration-500 ${
                  isActive ? 'scale-x-100' : 'scale-x-0'
                }`} />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

