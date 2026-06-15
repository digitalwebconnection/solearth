import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, Wrench, Zap, ShieldCheck, ThumbsUp, Headphones, Plus, Minus, Sparkles } from "lucide-react";

export const WhyAussieDifference: React.FC = () => {
  const [openLeft, setOpenLeft] = useState<number | null>(0);
  const [openRight, setOpenRight] = useState<number | null>(0);

  const leftBenefits = [
    {
      title: "Australian Owned & Operated",
      desc: "We understand the local solar environment, offering systems designed specifically for harsh Australian conditions.",
      icon: Award
    },
    {
      title: "Professional Installation",
      desc: "Every solar system is set up by Clean Energy Council (SAA) accredited installers, ensuring safety, compliance, and excellence.",
      icon: Wrench
    },
    {
      title: "Finance Ready Options",
      desc: "Flexible, zero-deposit finance schemes are available so you can start saving on electricity immediately.",
      icon: Zap
    }
  ];

  const rightBenefits = [
    {
      title: "Battery-Ready Systems",
      desc: "We future-proof your installation. All string or micro-inverters are battery compatible for easy storage add-ons.",
      icon: ShieldCheck
    },
    {
      title: "Full Warranty & Local Support",
      desc: "We cover every component with direct manufacturer backed warranties, serviced by our local offices.",
      icon: ThumbsUp
    },
    {
      title: "Get Aussie Customer Service",
      desc: "Speak directly with local customer service agents who resolve queries and provide technical assistance promptly.",
      icon: Headphones
    }
  ];

  return (
    <section className="py-10 md:py-10 bg-white border-t border-slate-100 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 relative">
        
        {/* Soft decorative background blurs */}
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-[#004093]/3 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#FE9900]/3 rounded-full blur-3xl pointer-events-none" />

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#004093]/5 rounded-full border border-[#004093]/10 text-[10px] font-black uppercase tracking-wider text-[#004093]">
            <Sparkles size={10} className="text-[#004093]" />
            Solearth Difference
          </span>
          
          <h2 className="text-3xl md:text-5xl font-black text-[#004093] leading-tight tracking-tight">
            Why More Australians Trust Us?
          </h2>
          
          <p className="text-slate-600 text-sm md:text-base leading-relaxed font-medium">
            Hover or click over our engineering advantages, compliance standards, and support networks below.
          </p>
        </div>

        {/* Double Accordion Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start relative z-10">
          
          {/* COLUMN 1: LEFT ACCORDION */}
          <div className="space-y-4">
            {leftBenefits.map((benefit, idx) => {
              const IconComp = benefit.icon;
              const isOpen = openLeft === idx;
              
              return (
                <div 
                  key={idx}
                  className={`border rounded-2xl transition-all duration-300 ${
                    isOpen 
                      ? "bg-slate-50/50 border-[#004093]/20 shadow-xs" 
                      : "bg-white border-slate-400/60 hover:border-slate-300"
                  }`}
                  onMouseEnter={() => setOpenLeft(idx)}
                >
                  <button
                    onClick={() => setOpenLeft(isOpen ? null : idx)}
                    className="w-full text-left p-5 flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-300 ${
                        isOpen ? "bg-[#004093] text-white" : "bg-[#004093]/5 text-[#004093]"
                      }`}>
                        <IconComp size={18} />
                      </div>
                      
                      <span className="text-sm md:text-base font-black text-[#004093] leading-none">
                        {benefit.title}
                      </span>
                    </div>

                    <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-colors duration-300 ${
                      isOpen ? "bg-white border border-slate-200 text-[#004093]" : "bg-slate-50 text-slate-400"
                    }`}>
                      {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-5 pl-[60px]">
                          <p className="text-slate-600 text-xs md:text-sm font-semibold leading-relaxed">
                            {benefit.desc}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* COLUMN 2: RIGHT ACCORDION */}
          <div className="space-y-4">
            {rightBenefits.map((benefit, idx) => {
              const IconComp = benefit.icon;
              const isOpen = openRight === idx;
              
              return (
                <div 
                  key={idx}
                  className={`border rounded-2xl transition-all duration-300 ${
                    isOpen 
                      ? "bg-slate-50/50 border-[#004093]/20 shadow-xs" 
                      : "bg-white border-slate-400/60 hover:border-slate-300"
                  }`}
                  onMouseEnter={() => setOpenRight(idx)}
                >
                  <button
                    onClick={() => setOpenRight(isOpen ? null : idx)}
                    className="w-full text-left p-5 flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-300 ${
                        isOpen ? "bg-[#004093] text-white" : "bg-[#004093]/5 text-[#004093]"
                      }`}>
                        <IconComp size={18} />
                      </div>
                      
                      <span className="text-sm md:text-base font-black text-[#004093] leading-none">
                        {benefit.title}
                      </span>
                    </div>

                    <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-colors duration-300 ${
                      isOpen ? "bg-white border border-slate-200 text-[#004093]" : "bg-slate-50 text-slate-400"
                    }`}>
                      {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-5 pl-[60px]">
                          <p className="text-slate-600 text-xs md:text-sm font-semibold leading-relaxed">
                            {benefit.desc}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};