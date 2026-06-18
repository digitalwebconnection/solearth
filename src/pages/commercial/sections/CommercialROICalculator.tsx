import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Check, Landmark, Receipt, CircleDollarSign, ChevronDown, ChevronUp } from 'lucide-react'
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
  const [expandedCol, setExpandedCol] = useState<number | null>(0)

  return (
    <section className="text-slate-800 py-12 md:py-20 relative overflow-hidden" ref={ref}>
      {/* Background ambients */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] rounded-full bg-[#1B74BB]/3 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] rounded-full bg-[#FCC200]/3 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-10 space-y-3"
        >
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#1B74BB]/8 border border-[#1B74BB]/15 rounded-full text-[11px] font-black uppercase tracking-widest text-[#1B74BB]">
            Funding Models
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-serif font-bold text-[#1B74BB] leading-tight">
            Compare Acquisition Pathways
          </h2>
          <p className="text-xs sm:text-sm md:text-base leading-relaxed text-slate-800 font-semibold">
            Evaluate the financial benefits, capital requirements, and ownership models of our commercial solar systems.
          </p>
        </motion.div>

        {/* ── Mobile View: Accordion Accordion-style Details (FAQ-like Cards) ── */}
        <div className="block md:hidden space-y-4">
          {comparisonColumns.map((col, colIdx) => {
            const Icon = ICON_MAP[col.iconKey]
            const isExpanded = expandedCol === colIdx
            return (
              <div
                key={col.name}
                className="bg-white border border-slate-200 rounded-2xl p-5 shadow-md shadow-slate-100/50 transition-all duration-300"
              >
                <button
                  onClick={() => setExpandedCol(isExpanded ? null : colIdx)}
                  className="w-full flex items-center justify-between gap-4 text-left cursor-pointer border-none bg-transparent p-0"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                      style={{ backgroundColor: `${col.color}15` }}
                    >
                      {Icon && <Icon className="w-5 h-5" style={{ color: col.color }} />}
                    </div>
                    <div>
                      <h4 className="text-lg font-serif font-black text-[#1B74BB]">
                        {col.name}
                      </h4>
                      <p className="text-[11px] text-slate-500 font-semibold mt-0.5 leading-tight">
                        {col.desc}
                      </p>
                    </div>
                  </div>
                  <div className="text-slate-400 shrink-0">
                    {isExpanded ? (
                      <ChevronUp className="w-5 h-5" />
                    ) : (
                      <ChevronDown className="w-5 h-5" />
                    )}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="mt-5 pt-4 border-t border-slate-100 space-y-4">
                        {comparisonRows.map((row, rowIdx) => (
                          <div
                            key={row.label}
                            className="flex justify-between items-center py-2 border-b border-slate-50 last:border-b-0"
                          >
                            <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider">
                              {row.label}
                            </span>
                            <span className="text-xs font-bold text-slate-800 text-right pl-4">
                              {colIdx === 0 && rowIdx === 0 ? (
                                <span className="inline-flex items-center gap-1 text-orange-600">
                                  <Check className="w-3.5 h-3.5" /> {row.values[colIdx]}
                                </span>
                              ) : colIdx === 1 && rowIdx === 0 ? (
                                <span className="inline-flex items-center gap-1 text-sky-600">
                                  <Check className="w-3.5 h-3.5" /> {row.values[colIdx]}
                                </span>
                              ) : (
                                row.values[colIdx]
                              )}
                            </span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>

        {/* ── Desktop View: Comparison Matrix Table ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="hidden md:block overflow-x-auto bg-white border border-slate-200 rounded-2xl shadow-xl shadow-slate-100 overflow-hidden scrollbar-thin scrollbar-thumb-slate-200"
        >
          <table className="w-full border-collapse text-left min-w-[700px]">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50/50">
                {/* Empty corner header */}
                <th className="p-4 sm:p-5 md:p-6 w-[160px] sm:w-[200px] md:w-[250px] text-xs font-black uppercase tracking-wider text-slate-900">
                  Key Metrics
                </th>
                
                {/* Column Headers */}
                {comparisonColumns.map((col) => {
                  const Icon = ICON_MAP[col.iconKey]
                  return (
                    <th key={col.name} className="p-4 sm:p-5 md:p-6 text-left align-top">
                      <div className="space-y-3">
                        <div 
                          className="w-10 h-10 rounded-lg flex items-center justify-center"
                          style={{ backgroundColor: `${col.color}15` }}
                        >
                          {Icon && <Icon className="w-5 h-5" style={{ color: col.color }} />}
                        </div>
                        <div>
                          <h4 className="text-base sm:text-xl md:text-2xl font-serif font-semibold text-[#1B74BB] leading-tight">
                            {col.name}
                          </h4>
                          <p className="text-[10px] sm:text-[11px] text-slate-800 font-semibold mt-1 leading-relaxed normal-case">
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
                  <td className="p-4 sm:p-5 md:p-6 text-xs sm:text-sm font-bold text-slate-800 align-middle">
                    {row.label}
                  </td>
                  
                  {/* Row Values */}
                  {row.values.map((val, colIdx) => (
                    <td key={colIdx} className="p-4 sm:p-5 md:p-6 text-[11px] sm:text-xs font-bold text-slate-700 align-middle">
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
