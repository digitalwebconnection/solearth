import { useState } from 'react';
import { motion } from 'framer-motion';
import { Sun, CloudSun, Cloud, TreePine, Sparkles, DollarSign, Percent, Clock, ArrowRight } from 'lucide-react';
import Counter from '../../components/Counter';

interface StateData {
  code: string;
  name: string;
  rate: number; // Retail rate $/kWh
  fit: number;  // Feed-in tariff $/kWh
}

export default function SolarCalculator() {
  const [selectedState, setSelectedState] = useState<string>('QLD');
  const [monthlyBill, setMonthlyBill] = useState<number>(350);
  const [sunHours, setSunHours] = useState<number>(4.5);
  const [batteryCapacity, setBatteryCapacity] = useState<number>(10);

  const statesData: StateData[] = [
    { code: 'QLD', name: 'Queensland', rate: 0.30, fit: 0.08 },
    { code: 'NSW', name: 'New South Wales', rate: 0.33, fit: 0.07 },
    { code: 'VIC', name: 'Victoria', rate: 0.28, fit: 0.05 },
    { code: 'SA', name: 'South Australia', rate: 0.38, fit: 0.09 },
    { code: 'WA', name: 'Western Australia', rate: 0.29, fit: 0.06 }
  ];

  const currentState = statesData.find(s => s.code === selectedState) || statesData[0];

  // Mathematical modeling of bill & solar output
  const dailyUsageKwh = monthlyBill / (currentState.rate * 30.4);
  const recommendedSystemSizeKw = Math.min(15, Math.max(3.3, parseFloat(((dailyUsageKwh * 1.25) / sunHours).toFixed(1))));
  
  // Savings Model
  const selfConsumptionFactor = batteryCapacity > 0 
    ? Math.min(0.95, 0.65 + (batteryCapacity * 0.025)) 
    : 0.35;

  const exportFactor = 1 - selfConsumptionFactor;
  const solarGenDailyKwh = recommendedSystemSizeKw * sunHours * 0.82; // 82% efficiency factor

  // Calculations
  const dailyOffsetValue = Math.min(dailyUsageKwh, solarGenDailyKwh) * selfConsumptionFactor * currentState.rate;
  const dailyExportValue = Math.max(0, solarGenDailyKwh - dailyUsageKwh) * exportFactor * currentState.fit;
  const dailySavings = dailyOffsetValue + dailyExportValue;

  const annualSavings = Math.round(Math.min(monthlyBill * 12 * 0.95, dailySavings * 365));
  const reductionPercent = Math.round((annualSavings / (monthlyBill * 12)) * 100);

  // Payback estimation
  const systemCost = (recommendedSystemSizeKw * 950) + (batteryCapacity * 850);
  const federalRebate = recommendedSystemSizeKw * 380;
  const netInvestment = Math.max(2500, systemCost - federalRebate);
  const paybackYears = parseFloat((netInvestment / annualSavings).toFixed(1));
  
  const treesSaved = Math.round(annualSavings * 0.016);

  // SVG Circular progress details
  const radius = 75;
  const strokeWidth = 10;
  const normalizedRadius = radius - strokeWidth * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (reductionPercent / 100) * circumference;

  return (
    <section id="calculator" aria-label="Interactive Solar Savings Calculator" className="py-24 bg-slate-50 relative overflow-hidden">
      
      {/* Inline styles for energy flow stroke-dashoffset animation */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes radialSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .glowing-bg-circle {
          animation: radialSpin 20s linear infinite;
        }
      `}} />

      {/* Decorative ambient background glows */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#28A8E4]/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2 glowing-bg-circle" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#F8C000]/5 rounded-full blur-3xl pointer-events-none glowing-bg-circle" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header section */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="flex items-center justify-center space-x-2.5">
            <span className="h-0.5 w-8 bg-[#F8C000] rounded-full" />
            <span className="text-xs font-bold text-[#1B74BB] uppercase tracking-widest">Interactive Yield Model</span>
            <span className="h-0.5 w-8 bg-[#F8C000] rounded-full" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black leading-tight text-slate-900 tracking-tight">
            Calculate Your Solar ROI
          </h2>
          <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
            Enter your exact energy billing details to model system yield, savings speedometers, and solar investment viability in your region.
          </p>
        </div>

        {/* Outer grid with entry animation */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start"
        >
          
          {/* Left Column: Input Panel */}
          <div className="lg:col-span-6 space-y-10">
            
            {/* Input 1: State Selection */}
            <div className="space-y-3 text-left">
              <label className="text-xs font-extrabold text-slate-800 uppercase tracking-wider block">Your State / Territory</label>
              <div className="flex flex-wrap gap-2.5">
                {statesData.map((s) => (
                  <button
                    key={s.code}
                    onClick={() => setSelectedState(s.code)}
                    className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all cursor-pointer border ${
                      selectedState === s.code
                        ? 'bg-[#1B74BB] border-transparent text-white shadow-md scale-105'
                        : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300'
                    }`}
                  >
                    {s.code}
                  </button>
                ))}
              </div>
              <span className="text-[10px] text-slate-400 font-semibold block">
                Calculations adjusted for {currentState.name} rates ({Math.round(currentState.rate * 100)}¢/kWh tariff & {Math.round(currentState.fit * 100)}¢/kWh feed-in)
              </span>
            </div>

            {/* Input 2: Type/Input or Slide Bill */}
            <div className="space-y-4 text-left">
              <div className="flex justify-between items-center">
                <div>
                  <label className="text-xs font-extrabold text-slate-800 uppercase tracking-wider block">Average Monthly Bill</label>
                  <span className="text-xs text-slate-400 font-semibold block mt-0.5">Type or slide your billing amount</span>
                </div>
                
                {/* Numeric Input Field */}
                <div className="relative flex items-center">
                  <span className="absolute left-3 text-slate-400 font-bold text-lg">$</span>
                  <input
                    type="number"
                    min="50"
                    max="3000"
                    value={monthlyBill || ''}
                    onChange={(e) => {
                      const val = parseInt(e.target.value);
                      setMonthlyBill(isNaN(val) ? 0 : val);
                    }}
                    className="w-32 pl-7 pr-3 py-2 bg-white border border-slate-300 focus:border-[#1B74BB] focus:ring-1 focus:ring-[#1B74BB] rounded-xl text-lg font-black text-slate-900 outline-none text-right shadow-xs"
                    placeholder="350"
                  />
                </div>
              </div>

              {/* Range Slider */}
              <div className="relative pt-2">
                <input
                  type="range"
                  min="100"
                  max="1200"
                  step="50"
                  value={monthlyBill || 350}
                  onChange={(e) => setMonthlyBill(parseInt(e.target.value))}
                  className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#1B74BB]"
                  style={{
                    background: `linear-gradient(to right, #1B74BB 0%, #1B74BB ${((monthlyBill || 350) - 100) / 1100 * 100}%, #e2e8f0 ${((monthlyBill || 350) - 100) / 1100 * 100}%, #e2e8f0 100%)`
                  }}
                />
                <div className="flex justify-between text-[10px] text-slate-400 font-extrabold pt-2">
                  <span>$100</span>
                  <span>$600</span>
                  <span>$1,200+</span>
                </div>
              </div>
            </div>

            {/* Input 3: Battery capacity */}
            <div className="space-y-4 text-left">
              <div className="flex justify-between items-center">
                <div>
                  <label className="text-xs font-extrabold text-slate-800 uppercase tracking-wider block">Home Battery capacity</label>
                  <span className="text-xs text-slate-400 font-semibold block mt-0.5">Increases night energy coverage</span>
                </div>
                
                {/* Numeric Input for Battery */}
                <div className="relative flex items-center">
                  <input
                    type="number"
                    min="0"
                    max="40"
                    value={batteryCapacity || 0}
                    onChange={(e) => {
                      const val = parseInt(e.target.value);
                      setBatteryCapacity(isNaN(val) ? 0 : Math.min(40, val));
                    }}
                    className="w-24 px-3 py-2 bg-white border border-slate-300 focus:border-[#1B74BB] focus:ring-1 focus:ring-[#1B74BB] rounded-xl text-lg font-black text-slate-900 outline-none text-right shadow-xs"
                  />
                  <span className="ml-2 text-xs font-extrabold text-slate-500">kWh</span>
                </div>
              </div>

              {/* Slider for Battery */}
              <div className="relative pt-2">
                <input
                  type="range"
                  min="0"
                  max="20"
                  step="5"
                  value={batteryCapacity || 0}
                  onChange={(e) => setBatteryCapacity(parseInt(e.target.value))}
                  className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#28A8E4]"
                  style={{
                    background: `linear-gradient(to right, #28A8E4 0%, #28A8E4 ${batteryCapacity / 20 * 100}%, #e2e8f0 ${batteryCapacity / 20 * 100}%, #e2e8f0 100%)`
                  }}
                />
                <div className="flex justify-between text-[10px] text-slate-400 font-extrabold pt-2">
                  <span>0 kWh (Solar Only)</span>
                  <span>10 kWh</span>
                  <span>20 kWh</span>
                </div>
              </div>
            </div>

            {/* Input 4: Sunlight Conditions */}
            <div className="space-y-4 text-left">
              <div>
                <label className="text-xs font-extrabold text-slate-800 uppercase tracking-wider block">Sunlight exposure</label>
                <span className="text-xs text-slate-400 font-semibold block mt-0.5">Average solar peak sun hours</span>
              </div>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { hours: 3, label: 'High Shade', desc: '3 hrs sunlight', icon: Cloud },
                  { hours: 4.5, label: 'Moderate', desc: '4.5 hrs sunlight', icon: CloudSun },
                  { hours: 6, label: 'Full Sunlight', desc: '6+ hrs sunlight', icon: Sun },
                ].map((option) => {
                  const IconComponent = option.icon;
                  const isSelected = sunHours === option.hours;
                  return (
                    <button
                      key={option.hours}
                      onClick={() => setSunHours(option.hours)}
                      className={`flex flex-col items-center justify-center p-4 rounded-2xl border transition-all cursor-pointer text-center ${
                        isSelected 
                          ? 'border-[#1B74BB] bg-[#1B74BB]/5 text-[#1B74BB] shadow-sm scale-[1.02]' 
                          : 'border-slate-200 bg-white text-slate-600 hover:border-slate-350'
                      }`}
                    >
                      <IconComponent className={`w-6 h-6 mb-2 ${isSelected ? 'text-[#1B74BB]' : 'text-slate-400'}`} />
                      <span className="text-xs font-extrabold block">{option.label}</span>
                      <span className="text-[10px] font-semibold text-slate-400 block mt-0.5">{option.desc}</span>
                    </button>
                  );
                })}
              </div>
            </div>

     

          </div>

          {/* Right Column: Live Savings Dashboard */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-10 items-start">
            
            {/* Top Left: Radial Gauge with Orbit Ring */}
            <div className="flex flex-col items-center sm:items-start text-center sm:text-left space-y-3">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
                <Percent className="w-3.5 h-3.5 text-slate-400" /> Bill Reduction Index
              </span>
              <div className="relative flex items-center justify-center">
                {/* Orbit path ring */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 10, ease: 'linear' }}
                  className="absolute w-[164px] h-[164px] border border-dashed border-[#1B74BB]/20 rounded-full pointer-events-none"
                />
                
                {/* SVG Radial Gauge */}
                <svg height={radius * 2} width={radius * 2} className="-rotate-90 relative z-10">
                  <circle
                    stroke="#e2e8f0"
                    fill="transparent"
                    strokeWidth={strokeWidth}
                    r={normalizedRadius}
                    cx={radius}
                    cy={radius}
                  />
                  <motion.circle
                    stroke={reductionPercent > 70 ? '#10B981' : '#1B74BB'}
                    fill="transparent"
                    strokeWidth={strokeWidth}
                    strokeDasharray={circumference}
                    animate={{ strokeDashoffset }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    r={normalizedRadius}
                    cx={radius}
                    cy={radius}
                    strokeLinecap="round"
                    style={{ filter: `drop-shadow(0 0 5px ${reductionPercent > 70 ? '#10B981' : '#1B74BB'}35)` }}
                  />
                </svg>
                {/* Text centered inside circular gauge */}
                <div className="absolute flex flex-col items-center z-20">
                  <div className="flex items-baseline font-black text-slate-900">
                    <Counter
                      value={reductionPercent}
                      fontSize={30}
                      textColor="#0f172a"
                      fontWeight={900}
                      horizontalPadding={0}
                      gap={1}
                    />
                    <span className="text-sm font-black">%</span>
                  </div>
                  <span className="text-[8px] font-extrabold text-slate-400 uppercase tracking-wider">Offset</span>
                </div>
              </div>
            </div>

            {/* Top Right: Estimated Annual Savings */}
            <div className="space-y-3 text-left">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
                <DollarSign className="w-3.5 h-3.5 text-slate-400" /> Projected Savings
              </span>
              <div className="pt-1">
                <div className="flex items-baseline font-black text-emerald-650 tracking-tight leading-none">
                  <span className="text-3xl mr-0.5 font-black">$</span>
                  <Counter
                    value={annualSavings}
                    fontSize={44}
                    textColor="#059669"
                    fontWeight={900}
                    horizontalPadding={0}
                    gap={1.5}
                  />
                </div>
                <p className="text-[10px] font-extrabold text-slate-450 uppercase tracking-wider mt-2">
                  Estimated Annual Offset
                </p>
              </div>
              <p className="text-slate-500 text-xs leading-relaxed">
                Aggregates daytime solar consumption and night-time battery drawing values.
              </p>
            </div>

            {/* Payback period */}
            <div className="space-y-2 text-left pt-6 border-t border-slate-200 sm:col-span-1">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-slate-400" /> Payback Period
              </span>
              <div className="pt-1">
                <div className="flex items-baseline font-black text-slate-900 tracking-tight">
                  <Counter
                    value={paybackYears}
                    fontSize={32}
                    textColor="#0f172a"
                    fontWeight={900}
                    horizontalPadding={0}
                    gap={1.5}
                  />
                  <span className="text-sm font-extrabold text-slate-400 ml-1.5">Years</span>
                </div>
              </div>
              <p className="text-slate-500 text-xs leading-relaxed">
                Initial installation recoup timeline based on local STC certificates and state tariffs.
              </p>
            </div>

            {/* Environmental Impact with staggered tree springs */}
            <div className="space-y-2 text-left pt-6 border-t border-slate-200 sm:col-span-1">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
                <TreePine className="w-3.5 h-3.5 text-emerald-600" /> Environmental Impact
              </span>
              <div className="pt-1">
                <div className="flex items-baseline font-black text-slate-900 tracking-tight">
                  <Counter
                    value={treesSaved}
                    fontSize={32}
                    textColor="#0f172a"
                    fontWeight={900}
                    horizontalPadding={0}
                    gap={1.5}
                  />
                  <span className="text-xs font-extrabold text-slate-400 ml-1.5">Trees / yr</span>
                </div>
              </div>
              
              {/* Dynamic tree count visualizer with staggered spring motion */}
              <div className="flex gap-1 flex-wrap pt-2 min-h-[24px]">
                {Array.from({ length: Math.min(15, Math.max(2, Math.round(treesSaved / 8))) }).map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0, y: 6 }}
                    animate={{ scale: 1, y: 0 }}
                    transition={{ type: 'spring', stiffness: 260, damping: 14, delay: i * 0.03 }}
                  >
                    <TreePine className="w-4 h-4 text-emerald-500 shrink-0" />
                  </motion.div>
                ))}
                {treesSaved > 96 && (
                  <motion.span 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-[10px] font-extrabold text-emerald-500 shrink-0 mt-0.5"
                  >
                    +
                  </motion.span>
                )}
              </div>
            </div>

            {/* Recommendation block */}
            <div className="sm:col-span-2 pt-8 border-t border-slate-200 flex items-center justify-between gap-4 flex-wrap">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-[#1B74BB]/10 text-[#1B74BB] flex items-center justify-center shadow-xs">
                  <Sparkles className="w-5 h-5 text-[#1B74BB]" />
                </div>
                <div className="text-left">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Recommended System</span>
                  <span className="text-sm font-black text-slate-800">
                    {recommendedSystemSizeKw} kW Panels {batteryCapacity > 0 ? `+ ${batteryCapacity} kWh Battery` : ''}
                  </span>
                </div>
              </div>
              
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-linear-to-r from-[#1B74BB] to-[#28A8E4] text-white font-extrabold text-xs rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer hover:scale-[1.01]"
              >
                <span>Request Custom Blueprint</span>
                <ArrowRight className="w-4 h-4" />
              </a>  
            </div>

          </div>

        </motion.div>
      </div>
    </section>
  );
}
