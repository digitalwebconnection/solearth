import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Zap, 
  Grid, 
  Shield, 
  Check, 
  X, 
  ArrowRight,
  TrendingUp
} from 'lucide-react';
import { useQuoteModal } from '../../components/QuoteModal';

const packages = [
  {
    name: 'RESIDENTIAL ESSENTIAL',
    size: '6.6kW',
    desc: 'Perfect for couples & small homes.',
    cashPrice: '$3,699',
    financePrice: '$19/wk',
    savings: '~$2.5k/yr',
    rating: 3,
    inverter: '5kW Inverter',
    panels: '15 Panels',
    warranty: '25Y Pro Warranty',
    gradient: 'from-[#28A8E4] to-[#1B74BB]',
    accentColor: 'text-[#28A8E4]',
    circleColor: 'bg-[#28A8E4]',
    btnStyle: 'border-[#1B74BB] text-white bg-transparent hover:bg-[#1B74BB]',
    features: [
      { name: 'Tier-1 Mono Perc Panels', included: true },
      { name: 'Smart WiFi Monitoring', included: true },
      { name: 'Standard Installation', included: true },
      { name: 'Priority Grid Support', included: false },
      { name: 'Advanced AI Analytics', included: false },
    ],
    highlight: false,
  },
  {
    name: 'FAMILY EXECUTIVE',
    size: '10.12kW',
    desc: 'The gold standard for modern families.',
    cashPrice: '$5,699',
    financePrice: '$29/wk',
    savings: '~$4.2k/yr',
    rating: 4,
    inverter: '8kW Inverter',
    panels: '23 Panels',
    warranty: '30Y Pro Warranty',
    gradient: 'from-[#FCC200] to-[#E69B00]',
    accentColor: 'text-[#FCC200]',
    circleColor: 'bg-[#FCC200]',
    btnStyle: 'bg-gradient-to-r from-[#FCC200] to-[#E69B00] text-black hover:opacity-90 border-0',
    features: [
      { name: 'Premium N-Type Cells', included: true },
      { name: 'Battery-Ready Hybrid', included: true },
      { name: 'Priority Grid Support', included: true },
      { name: 'Standard Installation', included: true },
      { name: 'Advanced AI Analytics', included: false },
    ],
    highlight: true,
    badge: 'MOST POPULAR',
  },
  {
    name: 'ESTATE ULTIMATE',
    size: '13.2kW',
    desc: 'Zero-compromise energy independence.',
    cashPrice: '$6,199',
    financePrice: '$35/wk',
    savings: '~$5.5k/yr',
    rating: 5,
    inverter: '10kW Inverter',
    panels: '30 Panels',
    warranty: '30Y Pro Warranty',
    gradient: 'from-[#1B74BB] to-[#4F46E5]',
    accentColor: 'text-[#1B74BB]',
    circleColor: 'bg-[#1B74BB]',
    btnStyle: 'border-[#1B74BB] text-white bg-transparent hover:bg-[#1B74BB]',
    features: [
      { name: 'Max-Efficiency Glass-Glass', included: true },
      { name: 'Advanced AI Analytics', included: true },
      { name: 'Platinum Support', included: true },
      { name: 'Battery-Ready Hybrid', included: true },
      { name: 'Priority Grid Support', included: true },
    ],
    highlight: false,
  },
];

export default function PackagesSection() {
  const [billing, setBilling] = useState<'cash' | 'finance'>('cash');
  const { openQuoteModal } = useQuoteModal();

  return (
    <section id="packages" className="py-14 bg-[#070b16] relative overflow-hidden">
      {/* Animated Background Blobs */}
      <motion.div
        animate={{
          x: [0, 80, -40, 0],
          y: [0, -60, 40, 0],
          scale: [1, 1.15, 0.9, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#1B74BB]/8 rounded-full blur-[120px] pointer-events-none z-0"
      />
      <motion.div
        animate={{
          x: [0, -100, 60, 0],
          y: [0, 80, -50, 0],
          scale: [1, 0.85, 1.1, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-[#FCC200]/5 rounded-full blur-[140px] pointer-events-none z-0"
      />
      <motion.div
        animate={{
          x: [0, 50, -50, 0],
          y: [0, 100, -100, 0],
          scale: [1, 1.2, 0.8, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/3 left-10 w-[400px] h-[400px] bg-[#28A8E4]/6 rounded-full blur-[100px] pointer-events-none z-0"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 mb-3"
          >
            <span className="h-px w-8 bg-[#FCC200]" />
            <span className="text-[#FCC200] text-xs font-bold tracking-[0.2em] uppercase">Tailored For You</span>
          </motion.div>

          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4 tracking-tight">Solar Packages</h2>
          <p className="text-sm md:text-base leading-relaxed text-gray-400 max-w-xl mx-auto">
            All prices include government STC rebates and full installation by CEC-accredited installers.
          </p>

          {/* Toggle */}
          <div className="inline-flex items-center bg-[#121829] border border-gray-800 rounded-full p-1 mt-8 shadow-inner">
            {(['cash', 'finance'] as const).map((t) => (
              <button
                key={t}
                onClick={() => setBilling(t)}
                className={`px-6 py-2 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-300 ${
                  billing === t 
                    ? 'bg-[#2AA9E4] text-white shadow-lg shadow-[#2AA9E4]/20' 
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {t === 'cash' ? 'Pay Cash' : 'Finance'}
              </button>
            ))}
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {packages.map((pkg) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={`relative bg-[#121829] rounded-lg overflow-hidden shadow-2xl transition-all duration-300 border border-gray-800 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(248,192,0,0.05)] flex flex-col ${
                pkg.highlight ? 'md:scale-[1.03] md:-translate-y-1 border-[#00cc88]/40' : ''
              }`}
            >
              {/* Top Gradient Header */}
              <div className={`relative pt-10 pb-14 px-6 text-center bg-linear-to-br ${pkg.gradient} flex flex-col items-center justify-center`}>
                {pkg.badge && (
                  <span className="absolute top-4 right-4 bg-black/40 backdrop-blur-md text-[#00cc88] text-[9px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full border border-[#00cc88]/30">
                    {pkg.badge}
                  </span>
                )}

                <h3 className="text-xs font-bold tracking-[0.2em] text-white/90 uppercase mb-2">{pkg.name}</h3>

                {/* Rating Stars */}
                <div className="flex gap-0.5 mb-3">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span
                      key={star}
                      className={`text-sm select-none ${
                        star <= pkg.rating ? 'text-[#FCC200]' : 'text-white/20'
                      }`}
                    >
                      ★
                    </span>
                  ))}
                </div>

                {/* Size/Capacity */}
                <div className="flex items-baseline justify-center text-black/90 font-black tracking-tight select-none">
                  <span className="text-5xl font-black">{pkg.size}</span>
                  <span className="text-[#FCC200] text-3xl font-black ml-0.5">.</span>
                </div>

                <span className="text-[10px] font-bold text-white/80 uppercase tracking-widest mt-1">
                  SYSTEM CAPACITY
                </span>

                {/* Wavy bottom divider */}
                <svg
                  viewBox="0 0 500 150"
                  preserveAspectRatio="none"
                  className="absolute bottom-0 left-0 w-full h-12 text-[#121829] fill-current"
                >
                  <path d="M0,100 C150,160 350,40 500,100 L500,150 L0,150 Z" />
                </svg>
              </div>

              {/* Card Body */}
              <div className="p-6 pt-2 flex flex-col flex-1 text-white">
                <p className="text-center text-gray-400 text-xs italic mb-4">{pkg.desc}</p>

                {/* Investment Details */}
                <div className="bg-black/20 rounded-2xl p-4 border border-gray-800/40 mb-6 grid grid-cols-2 gap-4 text-center">
                  <div>
                    <span className="text-[9px] text-gray-400 uppercase tracking-widest block mb-1">
                      Investment
                    </span>
                    <span className="text-xl font-bold text-white">
                      {billing === 'cash' ? pkg.cashPrice : pkg.financePrice}
                    </span>
                  </div>
                  <div className="border-l border-gray-850 border-gray-800/60">
                    <span className="text-[9px] text-[#FCC200] uppercase tracking-widest block mb-1">
                      Est. Savings
                    </span>
                    <span className="text-sm font-extrabold text-[#FCC200] flex items-center justify-center gap-1">
                      <TrendingUp className="w-3.5 h-3.5" />
                      {pkg.savings}
                    </span>
                  </div>
                </div>

                {/* Technical Specs Stats Row */}
                <div className="grid grid-cols-3 gap-2 py-3 border-y border-gray-850 border-gray-800/50 mb-6 text-center text-gray-300">
                  <div className="flex flex-col items-center justify-center gap-1">
                    <Zap className="w-4 h-4 text-[#FCC200]" />
                    <span className="text-[10px] font-semibold tracking-tight">{pkg.inverter}</span>
                  </div>
                  <div className="flex flex-col items-center justify-center gap-1 border-x border-gray-800/45">
                    <Grid className="w-4 h-4 text-blue-400" />
                    <span className="text-[10px] font-semibold tracking-tight">{pkg.panels}</span>
                  </div>
                  <div className="flex flex-col items-center justify-center gap-1">
                    <Shield className="w-4 h-4 text-emerald-400" />
                    <span className="text-[10px] font-semibold tracking-tight">{pkg.warranty}</span>
                  </div>
                </div>

                {/* Features List */}
                <ul className="flex flex-col gap-3.5 mb-8 flex-1">
                  {pkg.features.map((feat, i) => (
                    <li key={i} className={`flex items-center gap-3 text-xs ${feat.included ? 'text-gray-200' : 'text-gray-500 line-through'}`}>
                      {feat.included ? (
                        <span className={`w-5 h-5 rounded-full ${pkg.circleColor} flex items-center justify-center text-white shrink-0`}>
                          <Check className="w-3.5 h-3.5 stroke-3" />
                        </span>
                      ) : (
                        <span className="w-5 h-5 rounded-full bg-red-950/40 border border-red-900/30 flex items-center justify-center text-red-500 shrink-0">
                          <X className="w-3.5 h-3.5 stroke-3" />
                        </span>
                      )}
                      <span>{feat.name}</span>
                    </li>
                  ))}
                </ul>

                {/* Button */}
                <button
                  onClick={() => openQuoteModal('Package: ' + pkg.name)}
                  className={`w-full py-3 rounded-full text-center text-xs font-bold tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer ${pkg.btnStyle}`}
                >
                  <span>Configure System</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Disclaimer */}
        <p className="text-center text-gray-100 text-xs mt-12">
          * Prices include government STC rebates. Subject to standard site conditions and connection approval. Terms & conditions apply.
        </p>
      </div>
    </section>
  );
}
