import { motion } from 'framer-motion'
import CountUp from '../../components/CountUp'

export default function AboutStats() {
  const stats = [
    { value: 12, suffix: 'K+', label: 'Happy Homeowners' },
    { value: 15, suffix: 'MW+', label: 'Total Capacity Installed' },
    { value: 10, suffix: '+', label: 'Years of Experience' },
    { value: 98, suffix: '%', label: 'Customer Satisfaction' },
  ]

  return (
    <section className="bg-slate-50 py-4 md:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0">
        <div className="grid grid-cols-2 lg:grid-cols-4 md:gap-20 gap-4">
          {stats.map((stat, i) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              key={i}
              className="text-center  p-8 "
            >
              <div className="text-4xl sm:text-5xl font-black text-[#0a1f44] mb-2 flex items-center justify-center">
                <CountUp 
                  from={0} 
                  to={stat.value} 
                  duration={2} 
                />
                <span className="text-[#2AA9E4] font-black">{stat.suffix}</span>
              </div>
              <div className="text-sm text-gray-900 font-semibold uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
