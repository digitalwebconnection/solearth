import { Award, Zap, Trees, Smile } from 'lucide-react'
import { motion } from 'framer-motion'
import CountUp from '../../components/CountUp'

export default function ProjectsStats() {
  const stats = [
    {
      value: 4.8,
      suffix: ' MW+',
      label: 'Installed Capacity',
      description: 'Clean energy generation capability',
      icon: Zap,
      color: 'text-[#FE9900]',
    },
    {
      value: 1550,
      suffix: '+',
      label: 'Completed Systems',
      description: 'Residential & commercial installs',
      icon: Award,
      color: 'text-[#004093]',
    },
    {
      value: 6240,
      suffix: ' Tons',
      label: 'CO2 Offset Annually',
      description: 'Equivalent to 103k trees planted',
      icon: Trees,
      color: 'text-emerald-600',
    },
    {
      value: 1200,
      suffix: '+',
      label: 'Happy Families',
      description: 'Secured lower electricity bills',
      icon: Smile,
      color: 'text-sky-500',
    },
  ]

  return (
    <section className="py-12  relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-10 lg:gap-y-0 divide-y sm:divide-y-0 lg:divide-x divide-slate-300 text-center">
          {stats.map((stat, idx) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="px-6 flex flex-col items-center pt-8 first:pt-0 sm:pt-4 lg:pt-0"
              >
                {/* Icon */}
                <div className={`mb-3 ${stat.color} hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-7 h-7 stroke-2" />
                </div>

                {/* Value */}
                <div className="flex items-baseline justify-center mb-1">
                  <CountUp
                    from={0}
                    to={stat.value}
                    separator=","
                    duration={1.8}
                    className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight"
                  />
                  <span className="text-lg font-black text-slate-800 ml-1">
                    {stat.suffix}
                  </span>
                </div>

                {/* Label */}
                <h4 className="text-xs font-black uppercase tracking-wider text-[#004093] mb-1">
                  {stat.label}
                </h4>

                {/* Description */}
                <p className="text-[11px] text-slate-500 font-semibold max-w-[200px] leading-relaxed">
                  {stat.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
