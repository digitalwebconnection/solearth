import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, X, ArrowRight } from 'lucide-react'
import SplitText from '../../components/SplitText'
import { useQuoteModal } from '../../components/QuoteModal'

export default function AboutExpertise() {
  const { openQuoteModal } = useQuoteModal()
  const [selectedSolution, setSelectedSolution] = useState<number | null>(null)

  // Disable background body scroll when the modal is active
  useEffect(() => {
    if (selectedSolution !== null) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [selectedSolution])

  const solutions = [
    {
      id: 1,
      title: 'Sustainable Residential Energy',
      shortDesc: 'Transition your household to high-performance, future-ready solar energy. Reduce electricity bills and secure energy independence.',
      detailedDesc: 'Transition your household to high-performance, future-ready solar energy. Our residential systems are engineered specifically for the harsh Australian climate, utilizing Tier-1 solar panels, intelligent hybrid battery storage, and advanced smart-home monitoring tools. Enjoy reduced power bills from day one with complete peace of mind.',
      tagline: 'Empowering Australian homes with solar independence.',
      img: '/images/solar/solar-panel-rooftop.jpg',
      tag: 'Residential Solar',
      color: 'bg-emerald-500 border-emerald-100 text-emerald-600',
      features: [
        'Tier-1 high-efficiency panels (min. 21.8% efficiency rating)',
        'Next-generation hybrid battery storage (Tesla & Sigenergy partners)',
        'Smart mobile application tracking for real-time generation metrics',
        'Comprehensive government rebate handling and CEC certified installations',
        '25-year manufacturer performance warranty & 10-year workmanship warranty'
      ]
    },
    {
      id: 2,
      title: 'Commercial Solar Architecture',
      shortDesc: 'Unlock massive operational savings and future-proof your business against volatile energy prices with bespoke commercial solar installations.',
      detailedDesc: 'Unlock massive operational savings and future-proof your business against volatile energy prices. We design and construct bespoke commercial solar installations for offices, retail hubs, agricultural sites, and logistics warehouses. Our engineering team handles the entire process—including energy audits, financial feasibility modeling, and grid-connection approvals.',
      tagline: 'Offsetting operational costs through sustainable commercial design.',
      img: '/images/solar/solar-residential-house.jpg',
      tag: 'Commercial Solar',
      color: 'bg-amber-500 border-amber-100 text-amber-600',
      features: [
        'Commercial grade microinverter systems for maximum panel-level performance',
        'Advanced commercial power purchase agreements (PPA) and financing options',
        'Zero-export control, net metering, and complex grid integration engineering',
        'Detailed ROI analyses, commercial tax depreciation projections, and solar savings reports',
        'Full post-installation preventative maintenance and system health monitoring'
      ]
    },
    {
      id: 3,
      title: 'Industrial Renewable Infrastructure',
      shortDesc: 'Powering heavy machinery, factories, and logistics fleets with utility-scale solar arrays. Complete EPC project management.',
      detailedDesc: 'Powering heavy machinery, factories, and logistics fleets with utility-scale solar arrays. Our industrial EPC team delivers robust high-voltage projects designed to meet massive energy demands. We integrate cutting-edge solar technologies with commercial battery systems to stabilize voltage, cut peak demand charges, and achieve corporate ESG sustainability targets.',
      tagline: 'Mega-watt scale solar engineering for heavy industrial assets.',
      img: '/images/solar/solar-ground-mounted.jpg',
      tag: 'Industrial EPC',
      color: 'bg-[#2AA9E4] border-sky-100 text-sky-600',
      features: [
        'Mega-watt scale engineering with customized heavy structural mounting arrays',
        'High-voltage substation and commercial containerized battery integration',
        'Peak-shaving algorithms to lower high-demand grid utility charges',
        'Full turnkey EPC project management, design modeling, and civil works',
        'SCADA remote system monitoring and ongoing preventative testing'
      ]
    }
  ]

  return (
    <section className="py-12 md:py-20 bg-white relative overflow-hidden">
      {/* Decorative background glow elements */}
      <div className="absolute top-1/4 right-0 w-160 h-160 rounded-full bg-[#2AA9E4]/3 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-160 h-160 rounded-full bg-[#FCC200]/3 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-5xl mx-auto mb-10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block text-[#2AA9E4] text-xs font-bold tracking-widest uppercase px-5 py-2 bg-[#2AA9E4]/10 border border-[#2AA9E4]/20 rounded-full mb-4"
          >
            Solar Expertise
          </motion.div>

          <SplitText
            text="Complete Solar Solutions"
            tag="h2"
            className="text-2xl sm:text-3xl md:text-5xl font-serif font-bold text-[#0a1f44] mb-4 tracking-tight leading-tight"
            delay={50}
            duration={0.8}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 25 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-80px"
            textAlign="center"
          />

          <SplitText
            text="Discover how we engineer, deploy, and maintain leading clean energy systems across Australia."
            tag="p"
            className="text-xs sm:text-sm md:text-base leading-relaxed text-gray-950 max-w-2xl mx-auto"
            delay={25}
            duration={0.8}
            ease="power2.out"
            splitType="words"
            from={{ opacity: 0, y: 15 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-80px"
            textAlign="center"
          />
        </div>

        {/* 3-Column Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {solutions.map((solution, i) => (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              key={solution.id}
              className="bg-white border-2 border-slate-200 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-2 hover:border-[#2AA9E4]/30 transition-all duration-500 flex flex-col justify-between overflow-hidden group"
            >
              {/* Image Block */}
              <div className="relative h-48 sm:h-56 lg:h-64 overflow-hidden shrink-0">
                <img
                  src={solution.img}
                  alt={solution.title}
                  className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-950/30 to-transparent opacity-80" />

                {/* Category Pill Tag */}
                <div className="absolute top-4 left-4 px-3 py-1 bg-white/95 backdrop-blur-xs border border-slate-100 rounded-full text-[10px] font-bold text-slate-800 tracking-wider flex items-center gap-1.5 uppercase shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  {solution.tag}
                </div>
              </div>

              {/* Text Block */}
              <div className="p-5 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#0a1f44] mb-3 group-hover:text-[#2AA9E4] transition-colors duration-300">
                    {solution.title}
                  </h3>
                  <p className="text-gray-500 text-[13px] sm:text-[14px] leading-relaxed mb-6">
                    {solution.shortDesc}
                  </p>
                </div>

                {/* Read More Action Button */}
                <button
                  onClick={() => setSelectedSolution(i)}
                  className="inline-flex items-center gap-2 text-[#2AA9E4] hover:text-[#1d6fb8] font-bold text-xs sm:text-sm tracking-wider transition-colors duration-300 group/btn self-start cursor-pointer"
                >
                  <span>Read More</span>
                  <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal Popup for Solution Details */}
      <AnimatePresence>
        {selectedSolution !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Dark Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedSolution(null)}
              className="absolute inset-0 bg-slate-950/70 backdrop-blur-sm"
            />

            {/* Modal Dialog Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ type: 'spring', duration: 0.5 }}
              className="relative bg-white border border-slate-100 max-w-4xl w-full rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row h-[85vh] max-h-[620px] md:h-[550px] z-10"
            >
              {/* Floating Close Button in Top-Right */}
              <button
                onClick={() => setSelectedSolution(null)}
                className="absolute top-4 right-4 z-30 p-2 rounded-lg bg-white/95 backdrop-blur-md border border-slate-200 shadow-md hover:bg-slate-50 hover:text-red-500 hover:rotate-90 transition-all duration-300 cursor-pointer"
              >
                <X className="w-4.5 h-4.5" />
              </button>

              {/* Left Column: Image Area (Desktop) */}
              <div className="md:w-5/12 h-36 sm:h-48 md:h-full relative overflow-hidden shrink-0">
                <img
                  src={solutions[selectedSolution].img}
                  alt={solutions[selectedSolution].title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

                {/* Category Pill Tag inside Modal */}
                <div className="absolute top-4 left-4 px-4 py-1 bg-white/95 border border-slate-100 rounded-full text-[10px] font-bold text-slate-800 tracking-wider flex items-center gap-1.5 uppercase shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  {solutions[selectedSolution].tag}
                </div>
              </div>

              {/* Right Column: Detailed Text Content Area */}
              <div className="md:w-7/12 flex flex-col h-full overflow-hidden">
                {/* Scrollable Body Content */}
                <div className="flex-1 overflow-y-auto p-5 sm:p-8 space-y-5">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#2AA9E4]">
                      Solution Profile
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#0a1f44] leading-tight pr-6">
                    {solutions[selectedSolution].title}
                  </h3>

                  <p className="text-xs sm:text-sm font-semibold text-slate-800 italic leading-normal border-l-2 border-[#2AA9E4] pl-3">
                    "{solutions[selectedSolution].tagline}"
                  </p>

                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                    {solutions[selectedSolution].detailedDesc}
                  </p>

                  {/* Bullet Spec Highlights */}
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#0a1f44] mb-3">
                      Technical Deliverables
                    </h4>
                    <ul className="space-y-3">
                      {solutions[selectedSolution].features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <div className="shrink-0 w-4.5 h-4.5 rounded bg-[#0a1f44] text-white flex items-center justify-center mr-2.5 mt-0.5 shadow-sm">
                            <Check className="w-3.5 h-3.5 stroke-3" />
                          </div>
                          <span className="text-slate-700 text-xs sm:text-sm leading-normal">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Sticky/Fixed Footer Action Button Area */}
                <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-100 shrink-0">
                  <button
                    onClick={() => {
                      setSelectedSolution(null)
                      openQuoteModal(`Solution: ${solutions[selectedSolution].title}`)
                    }}
                    className="w-full py-3.5 px-6 rounded-xl text-center text-xs sm:text-sm font-extrabold text-white bg-[#0a1f44] hover:bg-[#2AA9E4] transition-colors duration-300 shadow-md flex items-center justify-center gap-2 cursor-pointer border-none"
                  >
                    <span>Request Free Consultation</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  )
}

