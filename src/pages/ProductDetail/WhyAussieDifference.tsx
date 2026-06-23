import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, Wrench, Zap, ShieldCheck, ThumbsUp, Headphones, Plus, Minus, Sparkles } from "lucide-react";
import type { ProductData } from "../../data/products";

interface WhyAussieDifferenceProps {
  product: ProductData;
}

export const WhyAussieDifference: React.FC<WhyAussieDifferenceProps> = ({ product }) => {
  const [openLeft, setOpenLeft] = useState<number | null>(0);
  const [openRight, setOpenRight] = useState<number | null>(0);

  const escapeRegExp = (str: string) => {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  };

  const renderHighlightedTitle = (text: string) => {
    if (text.includes('{') && text.includes('}')) {
      const parts = text.split(/(\{.*?\})/g);
      return parts.map((part, index) => {
        if (part.startsWith('{') && part.endsWith('}')) {
          return (
            <span key={index} className="text-[#FCC200]">
              {part.slice(1, -1)}
            </span>
          );
        }
        return part;
      });
    }

    const brandName = "Solearth Energy";
    if (text.toLowerCase().includes(brandName.toLowerCase())) {
      const regex = new RegExp(`(${escapeRegExp(brandName)})`, 'gi');
      const parts = text.split(regex);
      return parts.map((part, index) => {
        if (part.toLowerCase() === brandName.toLowerCase()) {
          return (
            <span key={index} className="text-[#FCC200]">
              {part}
            </span>
          );
        }
        return part;
      });
    }

    return text;
  };

  const cards = product.trustSection?.cards || [];
  const mid = Math.ceil(cards.length / 2);
  const dynamicLeft = cards.slice(0, mid).map((card, idx) => ({
    title: card.title,
    desc: card.description,
    icon: [Award, Wrench, Zap][idx % 3]
  }));
  const dynamicRight = cards.slice(mid).map((card, idx) => ({
    title: card.title,
    desc: card.description,
    icon: [ShieldCheck, ThumbsUp, Headphones][idx % 3]
  }));

  const leftBenefits = dynamicLeft.length > 0 ? dynamicLeft : [
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

  const rightBenefits = dynamicRight.length > 0 ? dynamicRight : [
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

  const defaultTitle = "Why Australians Trust {Solearth Energy} for Solar Solutions";
  const defaultDesc = "Learn why more Australians trust Solearth Energy for reliable solar and battery solutions engineered for long-term performance.";

  return (
    <section className=" bg-white border-t border-slate-100 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-0 relative">

        {/* Soft decorative background blurs */}
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-[#1B74BB]/3 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#FCC200]/3 rounded-full blur-3xl pointer-events-none" />

        {/* Section Header */}
        <div className="text-center max-w-6xl mx-auto mb-12 md:mb-16 space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#1B74BB]/5 rounded-full border border-[#1B74BB]/10 text-[10px] font-black uppercase tracking-wider text-[#1B74BB]">
            <Sparkles size={10} className="text-[#1B74BB]" />
            Solearth Difference
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-5xl max-w-3xl mx-auto font-black text-[#1B74BB] leading-tight tracking-tight">
            {product.trustSection?.title ? renderHighlightedTitle(product.trustSection.title) : renderHighlightedTitle(defaultTitle)}
          </h2>

          <p className="text-slate-800 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            {product.trustSection?.description ? product.trustSection.description : defaultDesc}
          </p>
        </div>

        {/* Double Accordion Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-start relative z-10">

          {/* COLUMN 1: LEFT ACCORDION */}
          <div className="space-y-3.5">
            {leftBenefits.map((benefit, idx) => {
              const IconComp = benefit.icon;
              const isOpen = openLeft === idx;

              return (
                <div
                  key={idx}
                  className={`border rounded-2xl transition-all duration-300 ${isOpen
                    ? "bg-slate-50/50 border-[#1B74BB]/20 shadow-xs"
                    : "bg-white border-slate-200 hover:border-slate-300"
                    }`}
                  onMouseEnter={() => {
                    if (window.innerWidth >= 1024) setOpenLeft(idx);
                  }}
                >
                  <button
                    onClick={() => setOpenLeft(isOpen ? null : idx)}
                    className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-300 ${isOpen ? "bg-[#1B74BB] text-white" : "bg-[#1B74BB]/5 text-[#1B74BB]"
                        }`}>
                        <IconComp size={18} />
                      </div>

                      <span className="text-sm md:text-base font-black text-[#1B74BB] leading-snug">
                        {benefit.title}
                      </span>
                    </div>

                    <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-colors duration-300 ${isOpen ? "bg-white border border-slate-200 text-[#1B74BB]" : "bg-slate-50 text-slate-900"
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
                        <div className="px-4 pb-4 sm:px-5 sm:pb-5 pl-[56px] sm:pl-[60px] text-left">
                          <p className="text-slate-800 text-xs md:text-sm font-semibold leading-relaxed">
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
          <div className="space-y-3.5">
            {rightBenefits.map((benefit, idx) => {
              const IconComp = benefit.icon;
              const isOpen = openRight === idx;

              return (
                <div
                  key={idx}
                  className={`border rounded-2xl transition-all duration-300 ${isOpen
                    ? "bg-slate-50/50 border-[#1B74BB]/20 shadow-xs"
                    : "bg-white border-slate-200 hover:border-slate-300"
                    }`}
                  onMouseEnter={() => {
                    if (window.innerWidth >= 1024) setOpenRight(idx);
                  }}
                >
                  <button
                    onClick={() => setOpenRight(isOpen ? null : idx)}
                    className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-300 ${isOpen ? "bg-[#1B74BB] text-white" : "bg-[#1B74BB]/5 text-[#1B74BB]"
                        }`}>
                        <IconComp size={18} />
                      </div>

                      <span className="text-sm md:text-base font-black text-[#1B74BB] leading-snug">
                        {benefit.title}
                      </span>
                    </div>

                    <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-colors duration-300 ${isOpen ? "bg-white border border-slate-200 text-[#1B74BB]" : "bg-slate-50 text-slate-900"
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
                        <div className="px-4 pb-4 sm:px-5 sm:pb-5 pl-[56px] sm:pl-[60px] text-left">
                          <p className="text-slate-800 text-xs md:text-sm font-semibold leading-relaxed">
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