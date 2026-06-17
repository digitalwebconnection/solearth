import { useState } from 'react';
import { Zap, ShieldCheck, DollarSign, Sun, Cpu, Home } from 'lucide-react';
import { motion } from 'framer-motion';
import batteryStorageImg from '../../assets/battery_storage.png';

export default function BatterySection() {
  const [activeMode, setActiveMode] = useState<'grid' | 'battery'>('battery');
  const [hoveredHotspot, setHoveredHotspot] = useState<number | null>(null);

  const hotspots = [
    { id: 1, top: '22%', left: '35%', label: 'Smart Hybrid Inverter', desc: 'Converts DC to AC with 98.4% efficiency' },
    { id: 2, top: '55%', left: '68%', label: 'LiFePO4 Safe Cells', desc: '13.5 kWh scalable storage capacity' },
    { id: 3, top: '78%', left: '32%', label: 'Integrated Gateway', desc: 'Automatic backup transition in <10ms' },
  ];

  return (
    <section id="battery" className="py-10 bg-slate-50 relative overflow-hidden">

      {/* Inline styles for energy flow stroke-dashoffset animation */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes energyFlow {
          to {
            stroke-dashoffset: -20;
          }
        }
        .animate-flow {
          stroke-dasharray: 6, 4;
          animation: energyFlow 1.2s linear infinite;
        }
      `}} />

      {/* Decorative gradients */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#28A8E4]/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#F8C000]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">

          {/* Left Column: Visual Showcase with Interactive Hotspots */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-[480px] aspect-5/5 rounded-3xl overflow-hidden  flex items-center justify-center group/panel ">

              {/* Product Render */}
              <img
                src={batteryStorageImg}
                alt="SolEarth Smart Battery Storage System"
                className="max-h-[75%] object-contain group-hover/panel:scale-[1.02] transition-transform duration-500"
              />

              {/* Dynamic Interactive Hotspots */}
              {hotspots.map((spot) => {
                const isHovered = hoveredHotspot === spot.id;
                return (
                  <div
                    key={spot.id}
                    className="absolute"
                    style={{ top: spot.top, left: spot.left }}
                    onMouseEnter={() => setHoveredHotspot(spot.id)}
                    onMouseLeave={() => setHoveredHotspot(null)}
                  >
                    {/* Glowing ring */}
                    <span className="absolute -inset-2 rounded-full bg-[#1B74BB]/30 animate-ping" />

                    {/* Inner interactive button */}
                    <button
                      className="relative h-5 w-5 rounded-full bg-linear-to-br from-[#28A8E4] to-[#1B74BB] border-2 border-white flex items-center justify-center text-white text-[9px] font-bold shadow-md cursor-pointer hover:scale-110 transition-transform focus:outline-none"
                      aria-label={`Show info for ${spot.label}`}
                    >
                      {spot.id}
                    </button>

                    {/* Tooltip Card */}
                    <div
                      className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-56 bg-slate-900/95 backdrop-blur-md text-white p-3 rounded-2xl shadow-xl transition-all duration-300 z-30 pointer-events-none border border-slate-800 ${isHovered ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-2 scale-95'
                        }`}
                    >
                      <div className="absolute top-full left-1/2 -translate-x-1/2 w-3 h-3 bg-slate-900 border-r border-b border-slate-800 rotate-45 -mt-1.5" />
                      <p className="font-extrabold text-[11px] tracking-wide uppercase text-[#28A8E4]">{spot.label}</p>
                      <p className="text-[10px] text-slate-300 leading-normal mt-0.5">{spot.desc}</p>
                    </div>
                  </div>
                );
              })}

              {/* Hover Helper Tag */}
              <div className="absolute bottom-5 left-1/2 -translate-x-1/2 bg-slate-100/90 backdrop-blur border border-slate-200 px-4 py-1.5 rounded-full shadow-xs">
                <span className="text-[10px] font-black text-slate-800 tracking-wider uppercase">Hover Hotspots to Inspect</span>
              </div>
            </div>
          </div>

          {/* Right Column: Comparative Metrics & Content */}
          <div className="lg:col-span-6 space-y-8 text-left">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <span className="h-0.5 w-8 bg-[#F8C000] rounded-full" />
                <span className="text-xs font-bold text-[#1B74BB] uppercase tracking-widest">Energy Independence</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-serif font-bold leading-tight text-slate-900 tracking-tight">
                Power Your Home Day & Night
              </h2>

            </div>

            {/* Interactive Compare Simulator */}
            <div className="space-y-6 bg-white border border-slate-400 rounded-lg p-6 shadow-lg shadow-black">
              <div className="flex items-center justify-between flex-wrap gap-4 pb-4 border-b border-slate-100">
                <h3 className="text-2xl md:text-3xl font-serif font-semibold text-slate-800 tracking-tight">Compare System Impact</h3>

                {/* Switcher Control */}
                <div className="flex bg-slate-100 p-1 rounded-full border border-slate-200">
                  <button
                    onClick={() => setActiveMode('grid')}
                    className={`px-4 py-1.5 rounded-full text-[10px] font-extrabold transition-all cursor-pointer uppercase tracking-wider ${activeMode === 'grid'
                      ? 'bg-[#1B74BB] text-white shadow-sm'
                      : 'text-slate-500 hover:text-slate-800'
                      }`}
                  >
                    Solar Only
                  </button>
                  <button
                    onClick={() => setActiveMode('battery')}
                    className={`px-4 py-1.5 rounded-full text-[10px] font-extrabold transition-all cursor-pointer uppercase tracking-wider ${activeMode === 'battery'
                      ? 'bg-[#1B74BB] text-white shadow-sm'
                      : 'text-slate-500 hover:text-slate-800'
                      }`}
                  >
                    Solar + Battery
                  </button>
                </div>
              </div>

              {/* Animated Power Flow Diagram */}
              <div className="py-2 bg-slate-50/70 border border-slate-100 rounded-2xl flex items-center justify-center overflow-hidden">
                <svg viewBox="0 0 400 140" className="w-full max-w-sm h-32 text-slate-400 relative z-10">
                  <defs>
                    <linearGradient id="activeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#28A8E4" />
                      <stop offset="100%" stopColor="#10B981" />
                    </linearGradient>
                    <linearGradient id="gridGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#F59E0B" />
                      <stop offset="100%" stopColor="#EF4444" />
                    </linearGradient>
                  </defs>

                  {/* Connection Lines */}
                  {/* Solar -> Battery */}
                  <path
                    d="M 52 45 L 52 85"
                    fill="none"
                    stroke={activeMode === 'battery' ? 'url(#activeGrad)' : '#E2E8F0'}
                    strokeWidth={activeMode === 'battery' ? 3 : 1.5}
                    className={activeMode === 'battery' ? 'animate-flow' : ''}
                  />

                  {/* Solar -> Home */}
                  <path
                    d="M 65 30 L 185 62"
                    fill="none"
                    stroke={activeMode === 'battery' ? 'url(#activeGrad)' : '#E2E8F0'}
                    strokeWidth={activeMode === 'battery' ? 2.5 : 1.5}
                    className={activeMode === 'battery' ? 'animate-flow' : ''}
                  />

                  {/* Battery -> Home */}
                  <path
                    d="M 65 100 L 185 70"
                    fill="none"
                    stroke={activeMode === 'battery' ? 'url(#activeGrad)' : '#E2E8F0'}
                    strokeWidth={activeMode === 'battery' ? 3 : 1.5}
                    className={activeMode === 'battery' ? 'animate-flow' : ''}
                  />

                  {/* Grid -> Home */}
                  <path
                    d="M 330 30 L 215 62"
                    fill="none"
                    stroke={activeMode === 'grid' ? 'url(#gridGrad)' : '#E2E8F0'}
                    strokeWidth={activeMode === 'grid' ? 3 : 1.5}
                    className={activeMode === 'grid' ? 'animate-flow' : ''}
                  />

                  {/* Nodes & Labels */}
                  {/* Solar Node */}
                  <g>
                    <circle cx="52" cy="30" r="18" fill="white" className="stroke-slate-200 shadow-sm" strokeWidth="1" />
                    <foreignObject x="40" y="18" width="24" height="24">
                      <Sun className={`w-6 h-6 ${activeMode === 'battery' ? 'text-amber-500' : 'text-slate-400'}`} />
                    </foreignObject>
                    <text x="52" y="5" textAnchor="middle" className="text-[9px] font-black fill-slate-500 uppercase">Solar Panels</text>
                  </g>

                  {/* Battery Node */}
                  <g>
                    <circle cx="52" cy="100" r="18" fill="white" className="stroke-slate-200 shadow-sm" strokeWidth="1" />
                    <foreignObject x="40" y="88" width="24" height="24">
                      <Zap className={`w-6 h-6 ${activeMode === 'battery' ? 'text-[#1B74BB]' : 'text-slate-350'}`} />
                    </foreignObject>
                    <text x="52" y="128" textAnchor="middle" className="text-[9px] font-black fill-slate-500 uppercase">Smart Battery</text>
                  </g>

                  {/* Grid Node */}
                  <g>
                    <circle cx="342" cy="30" r="18" fill="white" className="stroke-slate-200 shadow-sm" strokeWidth="1" />
                    <foreignObject x="330" y="18" width="24" height="24">
                      <Cpu className={`w-6 h-6 ${activeMode === 'grid' ? 'text-rose-500' : 'text-slate-400'}`} />
                    </foreignObject>
                    <text x="342" y="5" textAnchor="middle" className="text-[9px] font-black fill-slate-500 uppercase">Utility Grid</text>
                  </g>

                  {/* Home Node */}
                  <g>
                    <circle cx="200" cy="66" r="22" fill="white" className="stroke-slate-200 shadow-sm" strokeWidth="1" />
                    <foreignObject x="187" y="53" width="26" height="26">
                      <Home className="w-6 h-6 text-slate-800" />
                    </foreignObject>
                    <text x="200" y="98" textAnchor="middle" className="text-[9px] font-black fill-slate-800 uppercase">Your Home</text>
                  </g>
                </svg>
              </div>

              {/* Dynamic Stats View */}
              <div className="space-y-5">

                {/* Metric 1: Cost */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-bold">
                    <span className="text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                      <DollarSign className="w-4 h-4 text-slate-400" /> Daily Power Bill
                    </span>
                    <motion.span
                      key={activeMode}
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={activeMode === 'battery' ? 'text-emerald-600 font-extrabold' : 'text-rose-500 font-extrabold'}
                    >
                      {activeMode === 'battery' ? '$4.80 / day' : '$15.60 / day'}
                    </motion.span>
                  </div>
                  <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full rounded-full"
                      initial={{ width: 0 }}
                      animate={{
                        width: activeMode === 'battery' ? '30%' : '100%',
                        backgroundColor: activeMode === 'battery' ? '#10B981' : '#F87171'
                      }}
                      transition={{ duration: 0.6, ease: 'easeOut' }}
                    />
                  </div>
                </div>

                {/* Metric 2: Grid Reliance */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-bold">
                    <span className="text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                      <Zap className="w-4 h-4 text-slate-400" /> Grid Reliance
                    </span>
                    <motion.span
                      key={activeMode}
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={activeMode === 'battery' ? 'text-emerald-600 font-extrabold' : 'text-[#1B74BB] font-extrabold'}
                    >
                      {activeMode === 'battery' ? '12% (Virtual Off-Grid)' : '85% (Fossil Fuels)'}
                    </motion.span>
                  </div>
                  <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full rounded-full"
                      initial={{ width: 0 }}
                      animate={{
                        width: activeMode === 'battery' ? '12%' : '85%',
                        backgroundColor: activeMode === 'battery' ? '#10B981' : '#1B74BB'
                      }}
                      transition={{ duration: 0.6, ease: 'easeOut' }}
                    />
                  </div>
                </div>

                {/* Metric 3: Backup Security */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-bold">
                    <span className="text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-slate-400" /> Blackout Protection
                    </span>
                    <motion.span
                      key={activeMode}
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={activeMode === 'battery' ? 'text-emerald-600 font-extrabold' : 'text-slate-400 font-extrabold'}
                    >
                      {activeMode === 'battery' ? '100% Instant Backup' : '0% (No Solar Backup)'}
                    </motion.span>
                  </div>
                  <div className="h-2 w-full bg-slate-150 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full rounded-full"
                      initial={{ width: 0 }}
                      animate={{
                        width: activeMode === 'battery' ? '100%' : '0%',
                        backgroundColor: activeMode === 'battery' ? '#10B981' : '#CBD5E1'
                      }}
                      transition={{ duration: 0.6, ease: 'easeOut' }}
                    />
                  </div>
                </div>

              </div>
            </div>


          </div>

        </div>
      </div>
    </section>
  );
}
