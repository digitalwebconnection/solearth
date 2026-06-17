import { motion } from 'framer-motion'
import { CheckCircle2, Zap } from 'lucide-react'

export default function AboutStory() {
  const benefits = [
    'Custom System Designs',
    'Tailored Energy Analysis',
    'CEC Accredited Installers',
    'Lifetime Support Support',
    'Government Rebate Filing',
    'Post-Install Monitoring',
  ]

  return (
    <section id="our-story" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image/Graphics block */}
          <div className="relative pt-12 lg:pt-0">
            {/* Main Big Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative w-[90%] ml-auto z-10"
            >
              <div className="absolute inset-0 bg-[#28A8E0]/10 rounded-3xl transform rotate-2 scale-102" />
              <img
                src="/images/solar/solar-panel-rooftop.jpg"
                alt="Solar Panels Installation"
                className="relative z-10 rounded-3xl shadow-xl w-full h-[400px] object-cover"
              />
            </motion.div>

            {/* Overlapping Small Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: -30 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute -top-6 left-0 z-20 w-[50%] h-[150px] sm:h-[200px] lg:h-[220px]"
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
              className="absolute -bottom-12 -right-10 z-20 bg-white border border-gray-100 rounded-2xl p-6 shadow-2xl flex items-center gap-4 max-w-xs cursor-default transition-all duration-300 hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)]"
            >
              <div className="p-3 bg-[#F8C000]/10 rounded-xl">
                <Zap className="w-8 h-8 text-[#F8C000]" />
              </div>
              <div>
                <h4 className="text-2xl font-bold text-[#0a1f44]">CEC Approved</h4>
                <p className="text-xs text-gray-500 font-medium uppercase mt-0.5">Accredited Retailer</p>
              </div>
            </motion.div>
          </div>

          {/* Content block */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#0a1f44] mb-6 leading-tight">
              Our Mission is to Bring Clean, Cost-Effective Energy to Every Australian Home
            </h2>
            <p className="text-sm md:text-base leading-relaxed text-gray-600 mb-6">
              Founded with a vision of accelerating Australia's transition to decentralized renewable energy, SolEarth Energy has grown to become one of the country's most trusted solar installers.
            </p>

            {/* List of benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#28A8E0] shrink-0" />
                  <span className="font-semibold text-gray-700 text-[15px]">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
