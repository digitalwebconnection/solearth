import React, { useRef } from "react";
import {
  Cpu,
  ShieldCheck,
  TrendingUp,
  Wrench,
  Sparkles,
  ArrowUpRight
} from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import type { ProductData } from "../../data/products";

interface TechnicalAdvantagesProps {
  product: ProductData;
}

const icons = [
  Cpu,
  ShieldCheck,
  TrendingUp,
  Wrench,
  Sparkles
];

export const TechnicalAdvantages: React.FC<TechnicalAdvantagesProps> = ({
  product,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      const container = containerRef.current;
      if (!container) return;

      const cards = container.querySelectorAll(".advantage-card");
      gsap.fromTo(
        cards,
        {
          opacity: 0,
          y: 30,
          scale: 0.98
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: container,
            start: "top 85%",
            toggleActions: "play none none none"
          }
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <section ref={containerRef} className="relative overflow-hidden bg-white py-6 md:py-10">
      {/* Background Design */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-0 w-[450px] h-[450px] bg-[#1B74BB]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-[#FCC200]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-0">

        {/* Heading */}
        <div className="max-w-7xl mx-auto text-center mb-8 space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#1B74BB]/5 rounded-full border border-[#1B74BB]/10 text-[10px] font-black uppercase tracking-wider text-[#1B74BB]">
            <Sparkles size={10} className="text-[#1B74BB]" />
            Premium Design Advantages
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-5xl max-w-3xl mx-auto font-black text-[#1B74BB] leading-tight tracking-tight">
            {product.advantagesSection.title}
          </h2>

          <p className="text-slate-900 text-xs sm:text-sm max-w-6xl mx-auto md:text-base leading-relaxed font-medium">
            {product.advantagesSection.dec} 
          </p>
        </div>

        {/* Premium Bento-Style Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {product.advantagesSection.advantages.map((adv, index) => {
            const parts = adv.split(":");
            const title = parts[0];
            const desc = parts.slice(1).join(":");
            const Icon = icons[index % icons.length];

            return (
              <div
                key={index}
                className="advantage-card group relative overflow-hidden rounded-xl bg-slate-50/30 border border-slate-400 p-5 sm:p-6 md:p-8 hover:bg-white hover:border-[#1B74BB]/20 hover:shadow-2xl shadow-xl shadow-slate-500/80 transition-all duration-300 flex flex-col justify-between min-h-[200px] sm:min-h-[220px]"
              >
                {/* Subtle gradient light background */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-linear-to-br from-[#1B74BB]/1 via-transparent to-[#FCC200]/1" />

                <div className="space-y-4 relative z-10 text-left">
                  {/* Top Row: Icon & Tag */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-lg bg-white border border-slate-200 text-[#1B74BB] flex items-center justify-center shadow-xs group-hover:bg-[#1B74BB] group-hover:text-white group-hover:border-[#1B74BB] transition-all duration-300">
                      <Icon size={20} />
                    </div>

                    <span className="text-[9px] font-black text-[#FCC200] bg-[#FCC200]/10 px-2.5 py-1 rounded-md uppercase tracking-wider">
                      Advantage 0{index + 1}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="space-y-2">
                    <h3 className="text-lg sm:text-xl font-extrabold text-[#1B74BB] tracking-tight group-hover:text-[#FCC200] transition-colors duration-300">
                      {title}
                    </h3>

                    {desc && (
                      <p className="text-slate-800 text-xs sm:text-sm leading-relaxed font-medium">
                        {desc.trim()}
                      </p>
                    )}
                  </div>
                </div>

                {/* Bottom Row: Accent Link */}
                <div className="relative z-10 mt-6 pt-4 border-t border-slate-100/50 flex items-center justify-between text-[11px] font-bold text-slate-900 group-hover:text-[#1B74BB] transition-colors duration-300">
                  <span>Technical Feature Details</span>
                  <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Micro Border Progress Accent */}
                <div className="absolute bottom-0 left-0 w-0 h-[3px] bg-linear-to-r from-[#1B74BB] to-[#FCC200] transition-all duration-300 group-hover:w-full" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};