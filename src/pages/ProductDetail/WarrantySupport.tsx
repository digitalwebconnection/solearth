import React from "react";
import { BadgeCheck, ArrowUpRight, Sparkles } from "lucide-react";
import type { ProductData } from "../../data/products";

interface WarrantySupportProps {
  product: ProductData;
}

export const WarrantySupport: React.FC<WarrantySupportProps> = ({
  product,
}) => {
  // Utility to parse key metrics from warranty strings (e.g. "12 Years" or "25 Years")
  const parseWarranty = (text: string) => {
    const yearsMatch = text.match(/(\d+\s*Years|\d+\s*Year|\d+\s*day)/i);
    if (yearsMatch) {
      const highlight = yearsMatch[0];
      const detail = text.replace(yearsMatch[0], "").replace(/:\s*$/, "").trim();
      return { highlight, detail };
    }
    return { highlight: "Direct", detail: text };
  };

  return (
    <section className="relative mx-auto max-w-7xl overflow-hidden bg-white py-0 md:py-20 px-4 sm:px-6 md:px-0 border-t border-slate-100">

      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#1B74BB]/3 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 space-y-12 md:space-y-16">

        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#1B74BB]/5 rounded-full border border-[#1B74BB]/10 text-[10px] font-black uppercase tracking-wider text-[#1B74BB]">
            <Sparkles size={10} className="text-[#1B74BB]" />
            Solearth Guarantee
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-[#1B74BB] leading-tight tracking-tight">
            Warranty & Direct Support
          </h2>

          <p className="text-slate-800 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            Advanced manufacturer coverage and dependable local assistance designed to ensure maximum confidence and performance.
          </p>
        </div>

        {/* Metric Callout Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto text-left">
          {product.warranty.map((item, idx) => {
            const { highlight, detail } = parseWarranty(item);

            return (
              <div
                key={idx}
                className="group relative bg-slate-50/50 p-6 sm:p-8 rounded-2xl shadow-xl shadow-slate-100 border border-slate-200 hover:bg-white hover:border-[#1B74BB]/20 hover:shadow-2xl hover:shadow-[#1B74BB]/5 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between min-h-[200px] sm:min-h-[220px] cursor-default"
              >
                {/* Horizontal Indicator accent line */}
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#FCC200] rounded-t-3xl scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                <div className="space-y-4">
                  {/* Highlight Metric value */}
                  <div className="text-3xl sm:text-4xl md:text-5.5xl font-black text-[#1B74BB] group-hover:text-[#FCC200] transition-colors duration-300 tracking-tight leading-none">
                    {highlight}
                  </div>

                  {/* Subtle Separator */}
                  <div className="w-10 h-[2px] bg-slate-200 group-hover:bg-[#1B74BB]/20 transition-colors duration-300" />
                </div>

                <div className="space-y-2 pt-6">
                  <div className="flex items-center gap-2">
                    <BadgeCheck size={14} className="text-[#1B74BB]" />
                    <span className="text-[10px] font-black text-slate-900 uppercase tracking-widest">
                      GUARANTEED COVER
                    </span>
                  </div>
                  <p className="text-slate-700 text-xs sm:text-sm md:text-base font-bold leading-relaxed">
                    {detail || item}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* EXPERT RECOMMENDATION BANNER */}
        <div className="relative bg-slate-50/50 p-5 sm:p-8 rounded-3xl border border-slate-200/65 overflow-hidden max-w-7xl mx-auto text-left">
          {/* Accent vertical line */}
          <div className="absolute top-0 left-0 bottom-0 w-[5px] bg-[#FCC200]" />

          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-6xl">
              <span className="text-[10px] font-black text-[#1B74BB] uppercase tracking-wider block">
                EXPERT RECOMMENDATION
              </span>
              <p className="text-slate-800 text-sm sm:text-base md:text-lg italic font-bold leading-relaxed">
                “{product.recommendation}”
              </p>
            </div>

            <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-[#1B74BB] shadow-xs shrink-0">
              <ArrowUpRight size={20} />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};