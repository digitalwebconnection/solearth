import { useState } from 'react'
import { motion } from 'framer-motion'
import { Leaf, Zap, HeartHandshake } from 'lucide-react'
import sustainabilityCore from '../../assets/downloaded-images/sustainability-core.webp';
import scienceBehindSolar from '../../assets/downloaded-images/science-behind-solar.webp';

export default function AboutValues() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const values = [
    {
      id: '01',
      icon: Leaf,
      title: 'Sustainability at Core',
      desc: 'We are committed to reducing the global carbon footprint by empowering everyday Australians to harness the clean, limitless power of the sun.',
      color: 'text-emerald-500 bg-emerald-55 border-emerald-100',
      bgImage: sustainabilityCore
    },
    {
      id: '02',
      icon: Zap,
      title: 'Innovation & Performance',
      desc: 'We continuously evaluate cutting-edge solar technologies, hybrid battery systems, and smart home solutions to deliver maximum efficiency.',
      color: 'text-amber-500 bg-amber-55 border-amber-100',
      bgImage: '/images/solar/solar-residential-house.jpg'
    },
    {
      id: '03',
      icon: HeartHandshake,
      title: 'Local Integrity',
      desc: 'As a local Australian business, we do not believe in pushy sales tactics. We offer transparent pricing, honest energy projections, and genuine advice.',
      color: 'text-[#2AA9E4] bg-sky-55 border-sky-100',
      bgImage: scienceBehindSolar
    },
  ]

  return (
    <section className="bg-white py-10 relative overflow-hidden">
      {/* Decorative ambient background blurs for depth */}
      <div className="absolute top-1/3 left-0 w-96 h-96 rounded-full bg-[#2AA9E4]/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-96 h-96 rounded-full bg-[#FCC200]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block text-[#2AA9E4] text-xs font-bold tracking-widest uppercase px-4 py-1.5 bg-[#2AA9E4]/10 border border-[#2AA9E4]/20 rounded-full mb-4"
          >
            Our Values
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-5xl font-serif font-bold text-[#0a1f44] mb-4"
          >
            Guided by Values, Driven by Excellence
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm md:text-base leading-relaxed text-gray-900"
          >
            Our core values guide every project, ensuring quality, transparency and exceptional solar solutions. 
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((v, i) => {
            const Icon = v.icon
            const isActive = activeIndex === i

            return (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                key={v.id}
                onClick={() => setActiveIndex(isActive ? null : i)}
                className={`relative bg-white border-2 rounded-lg p-8 shadow-lg hover:shadow-xl shadow-black/30 hover:border-[#2AA9E4]/30 hover:-translate-y-1.5 transition-all duration-500 group flex flex-col justify-between h-full overflow-hidden cursor-pointer select-none ${
                  isActive ? 'border-[#2AA9E4]/60 -translate-y-1.5' : 'border-slate-300'
                }`}
              >
                {/* Background Image Revealed on Hover or Active (Click) */}
                <div className={`absolute inset-0 z-0 transition-opacity duration-700 ease-out pointer-events-none ${
                  isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                }`}>
                  <img
                    src={v.bgImage}
                    alt={v.title}
                    className={`w-full h-full object-cover transform transition-transform duration-700 ease-out ${
                      isActive ? 'scale-100' : 'scale-110 group-hover:scale-100'
                    }`}
                  />
                  {/* Dark slate overlay to guarantee text legibility */}
                  <div className="absolute inset-0 bg-[#0a1f44]/65 mix-blend-multiply" />
                </div>

                {/* Accent line sweep indicator */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-[#2AA9E4] to-[#1B74BB] transition-transform duration-500 z-10 ${
                  isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`} />
                
                {/* Elegant giant outline number */}
                <div className={`absolute right-8 top-6 select-none pointer-events-none text-6xl font-black transition-colors duration-500 z-10 ${
                  isActive ? 'text-white/60' : 'text-slate-250 group-hover:text-white/60'
                }`}>
                  {v.id}
                </div>

                <div className="relative z-10">
                  {/* Icon badge container */}
                  <div className={`inline-flex p-4 rounded-2xl border mb-8 transition-all duration-300 ${
                    isActive 
                      ? 'bg-white border-white text-[#0f50c0]' 
                      : `${v.color} group-hover:bg-white group-hover:border-white group-hover:text-[#0f50c0]`
                  }`}>
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className={`text-2xl md:text-3xl font-serif font-semibold mb-4 transition-colors duration-300 ${
                    isActive ? 'text-white' : 'text-[#0a1f44] group-hover:text-white'
                  }`}>
                    {v.title}
                  </h3>
                  
                  <p className={`text-sm md:text-base leading-relaxed text-justify transition-colors duration-300 ${
                    isActive ? 'text-white/90' : 'text-gray-900 group-hover:text-white/90'
                  }`}>
                    {v.desc}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

