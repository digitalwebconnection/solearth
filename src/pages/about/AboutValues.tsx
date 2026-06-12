import { motion } from 'framer-motion'
import { Leaf, Zap, HeartHandshake } from 'lucide-react'

export default function AboutValues() {
  const values = [
    {
      id: '01',
      icon: Leaf,
      title: 'Sustainability at Core',
      desc: 'We are committed to reducing the global carbon footprint by empowering everyday Australians to harness the clean, limitless power of the sun.',
      color: 'text-emerald-500 bg-emerald-50 border-emerald-100',
      bgImage: 'https://www.tatapower.com/adobe/dynamicmedia/deliver/dm-aid--2368fbcc-c209-4949-a331-27e88d1aa428/body-1-img.png?preferwebp=true&quality=85'
    },
    {
      id: '02',
      icon: Zap,
      title: 'Innovation & Performance',
      desc: 'We continuously evaluate cutting-edge solar technologies, hybrid battery systems, and smart home solutions to deliver maximum efficiency.',
      color: 'text-amber-500 bg-amber-50 border-amber-100',
      bgImage: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: '03',
      icon: HeartHandshake,
      title: 'Local Integrity',
      desc: 'As a local Australian business, we do not believe in pushy sales tactics. We offer transparent pricing, honest energy projections, and genuine advice.',
      color: 'text-sky-500 bg-sky-50 border-sky-100',
      bgImage: 'https://gb.solar/wp-content/uploads/2024/12/The-Science-Behind-Solar-Panels_-Understanding-Efficiency-and-Durability.jpg'
    },
  ]

  return (
    <section className="bg-white py-10 relative overflow-hidden">
      {/* Decorative ambient background blurs for depth */}
      <div className="absolute top-1/3 left-0 w-96 h-96 rounded-full bg-[#28A8E0]/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-96 h-96 rounded-full bg-[#F8C000]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block text-[#28A8E0] text-xs font-bold tracking-widest uppercase px-4 py-1.5 bg-[#28A8E0]/10 border border-[#28A8E0]/20 rounded-full mb-4"
          >
            Our Values
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0a1f44] mb-4"
          >
            Our Core Principles
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-900 text-lg leading-relaxed"
          >
            The values that drive our team to deliver top-tier solar services every day.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((v, i) => {
            const Icon = v.icon
            return (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                key={v.id}
                className="relative bg-white border-2 border-slate-300 rounded-lg p-8 shadow-lg hover:shadow-xl shadow-black/50 hover:border-[#28A8E0]/30 hover:-translate-y-1.5 transition-all duration-500 group flex flex-col justify-between h-full overflow-hidden"
              >
                {/* Background Image Revealed on Hover */}
                <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out pointer-events-none">
                  <img
                    src={v.bgImage}
                    alt={v.title}
                    className="w-full h-full object-cover transform scale-110 group-hover:scale-100 transition-transform duration-700 ease-out"
                  />
                  {/* Dark slate overlay to guarantee text legibility */}
                  <div className="absolute inset-0 bg-[#0a1f44]/60 mix-blend-multiply" />
                </div>

                {/* Accent line sweep indicator */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-[#28A8E0] to-[#1D6FB8] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 z-10" />
                
                {/* Elegant giant outline number */}
                <div className="absolute right-8 top-6 select-none pointer-events-none text-6xl font-black text-slate-200 group-hover:text-white/60 transition-colors duration-500 z-10">
                  {v.id}
                </div>

                <div className="relative z-10">
                  {/* Icon badge container */}
                  <div className={`inline-flex p-4 rounded-2xl border ${v.color} mb-8 transition-all duration-300 group-hover:bg-white group-hover:border-white group-hover:text-[#0f50c0]`}>
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-2xl font-extrabold text-[#0a1f44] mb-4 group-hover:text-white transition-colors duration-300">
                    {v.title}
                  </h3>
                  
                  <p className="text-gray-900 group-hover:text-white text-sm leading-relaxed text-justify group-hover:text-slate-250 transition-colors duration-300">
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
