import { motion } from 'framer-motion'
import { CheckCircle2, Zap } from 'lucide-react'

export default function AboutStory() {
  const benefits = [
    'Custom System Designs',
    'Tailored Energy Analysis',
    'CEC Accredited Installers',
    'Lifetime Support',
    'Government Rebate Filing',
    'Post-Install Monitoring',
  ]

  return (
    <section id="our-story" className="py-12 md:py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image/Graphics block */}
          <div className="relative pt-12 pb-8 lg:py-0">
            {/* Main Big Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative w-[90%] ml-auto z-10"
            >
              <div className="absolute inset-0 bg-[#2AA9E4]/10 rounded-3xl transform rotate-2 scale-102" />
              <img
                src="/images/solar/solar-panel-rooftop.jpg"
                alt="Solar Panels Installation"
                className="relative z-10 rounded-3xl shadow-xl w-full h-[250px] sm:h-[350px] lg:h-[400px] object-cover"
              />
            </motion.div>

            {/* Overlapping Small Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: -30 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute -top-4 left-0 z-20 w-[45%] h-[120px] sm:h-[180px] lg:h-[220px]"
            >
              <motion.div
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="w-full h-full rounded-2xl border-4 border-white shadow-2xl overflow-hidden"
              >
                <img
                  src="/images/solar/solar-engineer-panel.jpg"
                  alt="Solar Technical Installation"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </motion.div>

            {/* Overlay Stat Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              className="absolute -bottom-6 right-2 sm:-bottom-8 sm:right-0 lg:-bottom-12 lg:-right-6 z-20 bg-white border border-gray-150 rounded-2xl p-4 sm:p-5 shadow-2xl flex items-center gap-3 sm:gap-4 max-w-[240px] sm:max-w-xs cursor-default transition-all duration-300 hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)]"
            >
              <div className="p-2 sm:p-3 bg-[#FCC200]/10 rounded-xl shrink-0">
                <Zap className="w-6 h-6 sm:w-8 sm:h-8 text-[#FCC200]" />
              </div>
              <div>
                <h4 className="text-lg sm:text-2xl font-bold text-[#0a1f44] leading-tight">CEC Approved</h4>
                <p className="text-[10px] sm:text-xs text-gray-500 font-semibold uppercase mt-0.5">Accredited Retailer</p>
              </div>
            </motion.div>
          </div>

          {/* Content block */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 text-left"
          >
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-serif font-bold text-[#0a1f44] leading-tight">
              Our Mission is to Bring Clean, Cost-Effective Energy to Every Australian Home
            </h2>
            <p className="text-sm md:text-base leading-relaxed text-gray-650">
              Founded with a vision of accelerating Australia's transition to decentralized renewable energy, SolEarth Energy has grown to become one of the country's most trusted solar installers.
            </p>

            {/* List of benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              {benefits.map((item, i) => (
                <div key={i} className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#2AA9E4] shrink-0" />
                  <span className="font-semibold text-gray-700 text-[14px] sm:text-[15px]">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

