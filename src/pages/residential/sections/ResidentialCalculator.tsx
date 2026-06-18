import { useState } from 'react'
import { Calculator, HelpCircle, ArrowRight, Leaf, ShieldCheck, DollarSign } from 'lucide-react'
import { useQuoteModal } from '../../../components/QuoteModal'

interface ResidentialCalculatorProps {
  systemSizeName: string
}

export default function ResidentialCalculator({ systemSizeName }: ResidentialCalculatorProps) {
  const { openQuoteModal } = useQuoteModal()
  const [bill, setBill] = useState(600) // Default quarterly bill is $600

  // Quick rough solar math
  // Solar offsets 70-85% of power bills if usage is optimized for daytime
  const annualSavings = Math.round(bill * 4 * 0.78)
  const co2Offset = (bill * 4 * 0.0016).toFixed(1) // tons of CO2 offset

  // Dynamic payback calculation based on system type
  let systemPrice = 4500
  if (systemSizeName.includes('10.3kW')) systemPrice = 6200
  if (systemSizeName.includes('13.2kW')) systemPrice = 7800
  if (systemSizeName.includes('20kW')) systemPrice = 11000
  if (systemSizeName.includes('EV')) systemPrice = 2200

  const paybackYears = (systemPrice / (annualSavings || 1)).toFixed(1)

  return (
    <section className="py-24 bg-white text-slate-800 relative">
      <div className="max-w-7xl mx-auto px-6">

        {/* Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-[11px] text-[#FCC200] font-black uppercase tracking-widest block">
            Savings Estimator
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#1B74BB]">
            Calculate Your Solar ROI
          </h2>
          <p className="text-sm md:text-base leading-relaxed text-slate-900 font-semibold">
            See how upgrading to a <strong className="text-[#1B74BB]">{systemSizeName}</strong> impacts your household budget and offsets your carbon emissions.
          </p>
        </div>

        {/* Calculator layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left: Interactive Slider Control */}
          <div className="lg:col-span-6 bg-slate-50 p-8 md:p-10 rounded-3xl border border-slate-200/60 shadow-xl shadow-black/1">
            <div className="space-y-8">

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Calculator className="w-5 h-5 text-[#1B74BB]" />
                  <h3 className="text-2xl md:text-3xl font-serif font-semibold text-[#1B74BB]">Current Energy Spend</h3>
                </div>
                <span className="text-xs font-black bg-slate-200 text-slate-800 px-3 py-1 rounded-full uppercase tracking-wider">
                  Quarterly Bill
                </span>
              </div>

              {/* Bill Display */}
              <div className="text-center py-6 bg-white rounded-2xl border border-slate-200/50 shadow-inner">
                <span className="block text-sm text-slate-900 font-bold">Your Quarterly Electricity Bill</span>
                <span className="text-4xl md:text-5xl font-black text-[#1B74BB] mt-2 block font-serif">
                  ${bill}
                </span>
              </div>

              {/* Slider Input */}
              <div className="space-y-4">
                <input
                  type="range"
                  min="200"
                  max="2500"
                  step="50"
                  value={bill}
                  onChange={(e) => setBill(Number(e.target.value))}
                  className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#FCC200]"
                />
                <div className="flex justify-between text-[11px] font-black text-slate-900 uppercase tracking-wider">
                  <span>Min: $200</span>
                  <span>Max: $2,500+</span>
                </div>
              </div>

              {/* Note */}
              <div className="flex gap-2.5 bg-slate-100 p-4 rounded-xl text-[11px] font-semibold text-slate-900 leading-relaxed">
                <HelpCircle className="w-4 h-4 text-[#FCC200] shrink-0" />
                <span>
                  Estimates are based on average QLD/NSW feed-in tariffs and assume a typical 75% daytime self-consumption offset configuration. Actual performance depends on tilt direction and seasonal shading factors.
                </span>
              </div>

            </div>
          </div>

          {/* Right: Results Outputs */}
          <div className="lg:col-span-6 space-y-6">

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">

              {/* Box 1: Annual Savings */}
              <div className="p-6 bg-emerald-50 rounded-2xl border border-emerald-100 shadow-md flex flex-col justify-between h-[150px]">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-600">
                  <DollarSign className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-black text-emerald-700 uppercase tracking-widest block">Est. Annual Savings</span>
                  <span className="text-2xl font-black text-[#1B74BB] font-serif block mt-1">${annualSavings}</span>
                </div>
              </div>

              {/* Box 2: Payback Period */}
              <div className="p-6 bg-blue-50 rounded-2xl border border-blue-100 shadow-md flex flex-col justify-between h-[150px]">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-600">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-black text-blue-700 uppercase tracking-widest block">Est. Payback Period</span>
                  <span className="text-2xl font-black text-[#1B74BB] font-serif block mt-1">{paybackYears} Years</span>
                </div>
              </div>

              {/* Box 3: CO2 offset */}
              <div className="p-6 bg-amber-50 rounded-2xl border border-amber-100 shadow-md flex flex-col justify-between h-[150px]">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center text-[#FCC200]">
                  <Leaf className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-black text-amber-700 uppercase tracking-widest block">Annual CO2 Offset</span>
                  <span className="text-2xl font-black text-[#1B74BB] font-serif block mt-1">{co2Offset} Tons</span>
                </div>
              </div>

            </div>

            {/* Savings projection card */}
            <div className="bg-[#1B74BB] text-white p-8 rounded-3xl space-y-4 shadow-xl border border-white/10 relative overflow-hidden group">
              <div className="absolute -right-20 -bottom-20 w-52 h-52 bg-white/5 rounded-full blur-2xl group-hover:scale-150 transition-all duration-500"></div>

              <div className="space-y-1 relative z-10">
                <span className="text-[9px] font-black uppercase text-[#FCC200] tracking-widest block">10-Year Cumulative Savings</span>
                <h3 className="text-2xl md:text-3xl font-black font-serif">
                  Save up to ${annualSavings * 10}* over a decade
                </h3>
                <p className="text-xs text-slate-900 font-semibold leading-relaxed">
                  Protect your home against energy pricing index spikes. Solar panels act as a hedge against grid inflation, adding immediate equity and equity value to your property.
                </p>
              </div>

              <div className="pt-2 relative z-10">
                <button
                  onClick={() => openQuoteModal(`Residential Calculator: ${systemSizeName}`)}
                  className="inline-flex items-center gap-2 bg-[#FCC200] hover:bg-white hover:text-[#1B74BB] text-white font-black px-6 py-3 rounded-xl transition text-xs uppercase tracking-wider shadow-lg cursor-pointer border-none"
                >
                  Confirm site compatibility
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
