import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function ContactHero() {
  const handleScrollDown = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-[72vh] flex items-center justify-center overflow-hidden text-white pt-24 pb-16 md:pt-32 md:pb-24">
      {/* Background Image with Ken Burns zoom entry effect */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9ch6EmPBMN0q42Z5kWaIxF6IGqjVmXNCp7RkoJrCaRZTUgPtkbt7C0nUj&s=10"
          alt="Premium Office Team Building Support"
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1.02, opacity: 0.85 }}
          transition={{ duration: 1.8, ease: 'easeOut' }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* Dark overlay gradients for maximum legibility */}
      <div className="absolute inset-0 z-10 bg-[#0a1f44]/60 md:bg-linear-to-r md:from-[#0a1f44]/85 md:via-[#0a1f44]/65 md:to-[#0a1f44]/30" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 z-10 opacity-10 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-size-[4rem_4rem]" />

      {/* Glowing Ambient Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#2AA9E4]/15 blur-3xl pointer-events-none z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-[#FCC200]/10 blur-3xl pointer-events-none z-10" />

      {/* Hero Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 md:mt-0 relative z-20 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center text-left">
        {/* Left Column: Headline and CTAs */}
        <div className="lg:col-span-9 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-[#FCC200]/20 border border-[#FCC200]/45 text-black text-[10px] sm:text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-6 w-fit"
          >
            <span className="w-2 h-2 bg-[#FCC200] rounded-full animate-pulse" />
            Get In Touch
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 tracking-tight text-white"
          >
            Expert Guidance for Your{' '}
            <span className="text-[#FCC200] relative inline-block">
              Solar Journey Australia 
              <span className="absolute bottom-1 left-0 w-full h-[4px] bg-[#FCC200] rounded-full opacity-60" />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base md:text-lg text-slate-150 mb-8 leading-relaxed max-w-4xl font-medium"
          >
         Start your Solar Journey Australia with expert guidance on solar systems, battery storage, rebates, and Tesla Powerwalls for homes and businesses nationwide.   </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <button
              onClick={handleScrollDown}
              className="group bg-[#FCC200] hover:bg-[#e6af00] text-black font-bold px-6 sm:px-10 py-3.5 rounded-full text-xs sm:text-base transition-all duration-300 shadow-xl hover:shadow-[#FCC200]/25 hover:-translate-y-0.5 flex items-center gap-2 cursor-pointer border-none"
            >
              Get Free Quote
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href="tel:61435359431"
              className="bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold px-6 sm:px-10 py-3.5 rounded-full text-xs sm:text-base backdrop-blur-sm transition-all duration-300 flex items-center justify-center cursor-pointer text-center"
            >
              Call +61 435 359 431
            </a>
          </motion.div>
        </div>
      </div>

      
      {/* Wave bottom separator */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-10">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[60px] fill-white">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C26.9,3,57.05,10.75,85,19.34,166.45,44.53,249,69.9,321.39,56.44Z"></path>
        </svg>
      </div>
    </section>
  )
}
