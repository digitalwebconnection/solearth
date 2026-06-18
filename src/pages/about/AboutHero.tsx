import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useQuoteModal } from '../../components/QuoteModal'

export default function AboutHero() {
  const { openQuoteModal } = useQuoteModal()
  const handleScrollDown = () => {
    const element = document.getElementById('our-story')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-[#0a1f44] text-white pt-18 pb-10">
      {/* Static Background Image with Ken Burns zoom entry effect */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.img
          src="/images/solar/solar-panel-rooftop.jpg"
          alt="Premium Solar Panels Close Up"
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1.02, opacity: 1 }}
          transition={{ duration: 1.8, ease: 'easeOut' }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* Modern High-Contrast Overlay Gradients for Extreme Legibility */}
      <div className="absolute inset-0 z-10 bg-[#0a1f44]/30 md:bg-linear-to-r md:from-[#0a1f44]/80 md:via-[#0a1f44]/60 md:to-[#0a1f44]/20" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 z-10 opacity-10 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-size-[4rem_4rem]" />

      {/* Glowing Ambient Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#2AA9E4]/15 blur-3xl pointer-events-none z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-[#FCC200]/10 blur-3xl pointer-events-none z-10" />

      {/* Hero Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 md:mt-0 relative z-20 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Mission Wording & CTAs */}
        <div className="lg:col-span-9 text-left flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-[#FCC200]/20 border border-[#FCC200]/45 text-[#FCC200] text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-6 w-fit"
          >
            <span className="w-2 h-2 bg-[#FCC200] rounded-full animate-pulse" />
            Our Vision & Journey
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 tracking-tight text-white"
          >
            Empowering Australia with{' '}
            <span className="text-[#FCC200] relative inline-block">
              Smart Clean Energy
              <span className="absolute bottom-1 left-0 w-full h-[4px] bg-[#FCC200] rounded-full opacity-60" />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-slate-150 mb-8 leading-relaxed max-w-5xl font-medium"
          >
            SolEarth Energy is dedicated to providing premium-tier solar and battery storage solutions across Australia. We help households and commercial properties transition to self-reliant, sustainable solar energy.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <button
              onClick={handleScrollDown}
              className="group bg-[#FCC200] hover:bg-[#e6af00] text-black font-bold px-10 py-2 rounded-full text-base transition-all duration-300 shadow-xl hover:shadow-[#FCC200]/25 hover:-translate-y-0.5 flex items-center gap-2 cursor-pointer"
            >
              Read Our Story
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => openQuoteModal('About Page Hero')}
              className="bg-white/10 hover:bg-white/20 border-2 border-white/30 text-white font-bold px-10 py-2 rounded-full text-base backdrop-blur-sm transition-all duration-300 flex items-center justify-center cursor-pointer border-none"
            >
              Get a Free Quote
            </button>
          </motion.div>
        </div>

      
      </div>

     

      {/* Bottom Wave to Transition to Next Section */}
      <div className="absolute -bottom-1 left-0 right-0 z-10 w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative block w-full h-[40px] lg:h-[80px]"
        >
          <path
            d="M0 80L60 66.7C120 53.3 240 26.7 360 20C480 13.3 600 26.7 720 33.3C840 40 960 40 1080 36.7C1200 33.3 1320 26.7 1380 23.3L1440 20V80H1380C1320 80 1200 80 1080 80C960 80 840 80 720 80C600 80 480 80 360 80C240 80 120 80 60 80H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  )
}
