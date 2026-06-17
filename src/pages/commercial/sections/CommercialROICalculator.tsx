import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Check, Landmark, Receipt, CircleDollarSign } from 'lucide-react'
import type { ComparisonColumn, ComparisonRow } from '../../../data/commercialData'

const ICON_MAP = {
  CircleDollarSign,
  Landmark,
  Receipt
}

interface CommercialROICalculatorProps {
  comparisonColumns: ComparisonColumn[]
  comparisonRows: ComparisonRow[]
}

export default function CommercialROICalculator({ comparisonColumns, comparisonRows }: CommercialROICalculatorProps) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className=" text-slate-800 py-10 relative overflow-hidden " ref={ref}>
      {/* Background ambients */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] rounded-full bg-[#004093]/3 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] rounded-full bg-[#FE9900]/3 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-10 space-y-3"
        >
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#004093]/8 border border-[#004093]/15 rounded-full text-[11px] font-black uppercase tracking-widest text-[#004093]">
            Funding Models
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#004093] leading-tight">
            Compare Acquisition Pathways
          </h2>
          <p className="text-sm md:text-base leading-relaxed text-slate-800 font-semibold">
            Evaluate the financial benefits, capital requirements, and ownership models of our commercial solar systems.
          </p>
        </motion.div>

        {/* Comparison Matrix Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="overflow-x-auto bg-white"
        >
          <table className="w-full  border-collapse text-left">
            <thead>
              <tr className="border-b border-slate-600/80 bg-slate-50/50">
                {/* Empty corner header */}
                <th className="p-6 w-[250px] text-xs font-black uppercase tracking-wider text-slate-900">
                  Key Metrics
                </th>
                
                {/* Column Headers */}
                {comparisonColumns.map((col) => {
                  const Icon = ICON_MAP[col.iconKey]
                  return (
                    <th key={col.name} className="p-6 text-left align-top">
                      <div className="space-y-3">
                        <div 
                          className="w-10 h-10 rounded-lg flex items-center justify-center"
                          style={{ backgroundColor: `${col.color}15` }}
                        >
                          {Icon && <Icon className="w-5 h-5" style={{ color: col.color }} />}
                        </div>
                        <div>
                          <h4 className="text-2xl md:text-3xl font-serif font-semibold text-[#004093] leading-tight">
                            {col.name}
                          </h4>
                          <p className="text-[11px] text-slate-800 font-semibold mt-1 leading-relaxed normal-case">
                            {col.desc}
                          </p>
                        </div>
                      </div>
                    </th>
                  )
                })}
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row, rowIdx) => (
                <tr 
                  key={row.label}
                  className="border-b border-slate-100 last:border-b-0 hover:bg-slate-50/35 transition-colors duration-150"
                >
                  {/* Row Label */}
                  <td className="p-6 text-sm font-bold text-slate-800 align-middle">
                    {row.label}
                  </td>
                  
                  {/* Row Values */}
                  {row.values.map((val, colIdx) => (
                    <td key={colIdx} className="p-6 text-xs font-bold text-slate-700 align-middle">
                      {colIdx === 0 && rowIdx === 0 ? (
                        <span className="inline-flex items-center gap-1 text-orange-600">
                          <Check className="w-4 h-4" /> {val}
                        </span>
                      ) : colIdx === 1 && rowIdx === 0 ? (
                        <span className="inline-flex items-center gap-1 text-sky-600">
                          <Check className="w-4 h-4" /> {val}
                        </span>
                      ) : (
                        val
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

 

      </div>
    </section>
  )
}
