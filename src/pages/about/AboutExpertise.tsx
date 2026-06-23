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
      title: 'Smart Residential Solar Solutions for Energy Independence',
      shortDesc: 'Power your home with premium Residential Solar Installation in Australia designed to reduce electricity bills and maximize long-term energy savings.',
      detailedDesc: ' Power your home with premium Residential Solar Installation in Australia designed to reduce electricity bills and maximize long-term energy savings. Our CEC-certified solar experts install high-performance solar systems tailored for Australian homes, delivering reliable renewable energy, battery storage integration, and smart energy monitoring.',
      tagline: 'Empowering Australian homes with solar independence.',
      img: '/images/solar/solar-panel-rooftop.jpg',
      tag: 'Residential Solar',
      color: 'bg-emerald-500 border-emerald-100 text-emerald-600',
      features: [
        'Tier-1 Solar Panels with up to 21.8% efficiency for maximum power generation',
        'Advanced Solar Battery Storage Solutions compatible with Tesla and Sigenergy systems',
        'Smart Solar Monitoring App for real-time energy production and consumption tracking',
        'Complete Government Solar Rebate Assistance and CEC-Certified Installation',
        '25-Year Solar Panel Performance Warranty and 10-Year Workmanship Guarantee',
        'Customized Solar Energy Solutions for Australian households'
      ]
    },
    {
      id: 2,
      title: 'Commercial Solar Installation Solutions',
      shortDesc: 'Reduce operating costs and future-proof your business with industry-leading Commercial Solar Installation in Australia.',
      detailedDesc: 'Reduce operating costs and future-proof your business with industry-leading Commercial Solar Installation in Australia. We design and install high-performance solar energy systems for offices, warehouses, manufacturing facilities, retail centres, farms, and industrial properties. Our CEC-accredited team delivers tailored commercial solar solutions that help businesses lower electricity expenses, improve sustainability, and maximize long-term ROI.',
      tagline: 'Offsetting operational costs through sustainable commercial design.',
      img: '/images/solar/solar-residential-house.jpg',
      tag: 'Commercial Solar',
      color: 'bg-amber-500 border-amber-100 text-amber-600',
      features: [
        'High-efficiency commercial solar panels and advanced inverter technology for maximum energy output',
        'Commercial solar battery storage solutions to reduce peak demand charges and increase energy independence',
        'Flexible solar financing, Power Purchase Agreements (PPA), and tailored business energy solutions',
        'Grid integration, net metering, and export management for optimized energy performance',
        'Detailed solar ROI analysis, energy savings forecasts, and business case reporting',
        'Ongoing system monitoring, preventive maintenance, and performance optimization'
      ]
    },
    {
      id: 3,
      title: 'Industrial Solar Engineering & Construction',
      shortDesc: 'Powering heavy machinery, factories, and logistics fleets with utility-scale solar arrays. Complete EPC project management.',
      detailedDesc: 'Power large-scale industrial operations with advanced Industrial Solar EPC Solutions in Australia. Our turnkey Engineering, Procurement, and Construction (EPC) services help factories, manufacturing plants, warehouses, mining facilities, and logistics hubs reduce energy costs, improve operational efficiency, and achieve sustainability goals. We deliver end-to-end industrial solar projects designed for maximum performance, reliability, and long-term ROI.',
      tagline: 'Mega-watt scale solar engineering for heavy industrial assets.',
      img: '/images/solar/solar-ground-mounted.jpg',
      tag: 'Industrial EPC',
      color: 'bg-[#2AA9E4] border-sky-100 text-sky-600',
      features: [
        'Utility-scale solar engineering and custom industrial system design solutions',
        'High-voltage infrastructure, substation integration, and grid connectivity expertise',
        'Commercial Battery Energy Storage Systems (BESS) for peak demand reduction and energy resilience',
        'Turnkey EPC project management including procurement, construction, and commissioning',
        'Advanced energy monitoring, SCADA integration, and performance optimization services',
        'Comprehensive feasibility studies, ROI analysis, and energy savings forecasting'
      ]
    }
  ]

  return (
    <section className="py-12 md:py-20 bg-white relative overflow-hidden">
      {/* Decorative background glow elements */}
      <div className="absolute top-1/4 right-0 w-160 h-160 rounded-full bg-[#2AA9E4]/3 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-160 h-160 rounded-full bg-[#FCC200]/3 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex justify-center mb-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block text-[#2AA9E4] text-xs font-bold tracking-widest uppercase px-5 py-2 bg-[#2AA9E4]/10 border border-[#2AA9E4]/20 rounded-full"
          >
            Solar Expertise
          </motion.div>
        </div>

        <div className="text-center max-w-3xl mx-auto mb-10">

          <SplitText
            text="End-to-End Solar Solutions Built for Performance "
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
            text="Expertly engineered solar solutions delivering reliable clean energy across Australia. "
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
              className="bg-white border-2 border-slate-300 rounded-lg shadow-lg  shadow-black   hover:shadow-xl hover:-translate-y-2 hover:border-[#2AA9E4]/30 transition-all duration-500 flex flex-col justify-between overflow-hidden group"
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
                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#0a1f44] mb-3 group-hover:text-[#2AA9E4] transition-colors duration-300 lg:min-h-[90px] flex items-start">
                    {solution.title}
                  </h3>
                  <p className="text-gray-800 text-[13px] sm:text-[14px] leading-relaxed mb-6 lg:min-h-[115px]">
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

