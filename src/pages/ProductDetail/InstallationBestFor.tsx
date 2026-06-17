import React, { useEffect, useRef } from "react";
import { Wrench, ThumbsUp, Check, ShieldCheck, Sparkles } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { ProductData } from "../../data/products";

interface InstallationBestForProps {
  product: ProductData;
}

export const InstallationBestFor: React.FC<InstallationBestForProps> = ({
  product,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const container = containerRef.current;
    if (!container) return;

    // Slide up grid columns
    const columns = container.querySelectorAll(".grid-column");
    gsap.fromTo(
      columns,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: container,
          start: "top 85%",
          toggleActions: "play none none none"
        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((st) => {
        if (st.trigger === container || container.contains(st.trigger as Node)) {
          st.kill();
        }
      });
    };
  }, []);

  return (
    <section ref={containerRef} className="relative bg-white py-8 md:py-0 px-6 md:px-0 border-t border-slate-100">

      {/* Background Graphic elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-[#004093]/3 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#FE9900]/3 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

          {/* COLUMN 1: VISUAL BRAND BADGE CARD */}
          <div className="grid-column lg:col-span-4 relative overflow-hidden rounded-lg bg-linear-to-br from-[#004093] to-[#001b40] text-white p-8 md:p-10 shadow-[0_20px_50px_rgba(0,64,147,0.15)] flex flex-col justify-between min-h-[380px] group">
            {/* Technical grid paper backdrop */}
            <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-size-[32px_32px] pointer-events-none" />

            {/* Ambient orange glow */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#FE9900]/15 rounded-full blur-2xl pointer-events-none group-hover:scale-110 transition-transform duration-700" />

            <div className="relative z-10 space-y-6">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/10 rounded-full text-[9px] font-black uppercase tracking-wider text-emerald-400 border border-white/5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  CEC Certified
                </span>

                <Sparkles size={14} className="text-[#FE9900] animate-spin" style={{ animationDuration: "8s" }} />
              </div>

              <h3 className="text-2xl md:text-3.5xl font-black tracking-tight leading-tight">
                Accredited <br />Equipment Standards
              </h3>

              <p className="text-white/80 text-xs md:text-sm leading-relaxed font-medium">
                Tested to comply with local weather variations and SAA electrical connection protocols for residential deployment.
              </p>
            </div>

            <div className="relative z-10 mt-8 pt-6 border-t border-white/5 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center border border-white/10 shrink-0">
                <ShieldCheck size={18} className="text-[#FE9900]" />
              </div>
              <div>
                <span className="text-[9px] font-black text-white/50 uppercase tracking-widest block">Accreditation</span>
                <span className="text-xs font-bold text-white block">100% Quality Checked</span>
              </div>
            </div>
          </div>

          {/* COLUMN 2: INSTALLATION GUIDELINES */}
          <div className="grid-column lg:col-span-4 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#FE9900]/10 text-[#FE9900] flex items-center justify-center shrink-0">
                  <Wrench size={16} />
                </div>
                <div>
                  <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest block">01 / CALIBRATION</span>
                  <h4 className="text-lg font-black text-[#004093] leading-none">Installation Guide</h4>
                </div>
              </div>

              <div className="space-y-3">
                {product.installation.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-5 bg-slate-50/50 hover:bg-white border border-slate-500/60 hover:border-[#FE9900]/20 rounded-lg shadow-lg shadow-black/40 transition duration-200 flex items-start gap-4 group"
                  >
                    <div className="w-5 h-5 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                      <Check size={10} className="stroke-3" />
                    </div>

                    <p className="text-slate-800 text-xs md:text-sm font-semibold leading-relaxed font-sans">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* COLUMN 3: WHO IT'S BEST FOR */}
          <div className="grid-column lg:col-span-4 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#004093]/5 text-[#004093] flex items-center justify-center shrink-0">
                  <ThumbsUp size={16} />
                </div>
                <div>
                  <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest block">02 / FITMENT</span>
                  <h4 className="text-lg font-black text-[#004093] leading-none">Who It’s Best For</h4>
                </div>
              </div>

              <div className="space-y-6">
                {product.bestFor.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-5 bg-slate-50/50 hover:bg-white border border-slate-400/60 hover:border-[#004093]/20 rounded-lg shadow-lg shadow-black/40 transition duration-200 flex items-start gap-4 group"
                  >
                    <div className="w-5 h-5 rounded-full bg-[#004093]/5 text-[#004093] flex items-center justify-center shrink-0 mt-0.5 font-black text-[9px] shadow-xs select-none">
                      0{idx + 1}
                    </div>

                    <p className="text-slate-800 text-xs md:text-sm font-semibold leading-relaxed font-sans">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};