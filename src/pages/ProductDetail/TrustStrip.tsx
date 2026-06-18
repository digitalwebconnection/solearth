import React, { useRef } from "react";
import { Award, Zap, ShieldCheck, CheckCircle2, Leaf } from "lucide-react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

export const TrustStrip: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const badges = [
    {
      label: "Clean Energy Council",
      desc: "Approved Retailer",
      icon: <Award size={24} />,
      colorClass: "text-[#FCC200] bg-[#FCC200]/10"
    },
    {
      label: "Tier 1 Bloomberg",
      desc: "Solar Standard",
      icon: <Zap size={24} />,
      colorClass: "text-[#1B74BB] bg-[#1B74BB]/10"
    },
    {
      label: "25-Year Warranty",
      desc: "Product Guarantee",
      icon: <ShieldCheck size={24} />,
      colorClass: "text-emerald-500 bg-emerald-500/10"
    },
    {
      label: "SAA Accredited",
      desc: "Safety Certified",
      icon: <CheckCircle2 size={24} />,
      colorClass: "text-[#2AA9E4] bg-[#2AA9E4]/10"
    },
    {
      label: "100% Carbon Offset",
      desc: "Clean Energy",
      icon: <Leaf size={24} />,
      colorClass: "text-teal-500 bg-teal-500/10"
    }
  ];

  useGSAP(
    () => {
      if (!containerRef.current) return;
      const cards = containerRef.current.querySelectorAll(".trust-card");

      gsap.fromTo(
        cards,
        {
          opacity: 0,
          y: 80,
          filter: "blur(8px)"
        },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out"
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <section className="relative bg-[#fafbfe] py-12 md:py-20 overflow-hidden">
      {/* Decorative background grid and blurs */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] bg-size-[16px_16px] opacity-40" />
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-72 h-72 bg-[#1B74BB]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-72 h-72 bg-[#FCC200]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-12">
          <p className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-[#FCC200]">
            Quality Assurance
          </p>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-[#1B74BB] mt-2 tracking-tight">
            Australian Standards & Compliance Guarantee
          </h3>
          <div className="w-12 h-1 bg-[#FCC200] mx-auto mt-4 rounded-full" />
        </div>

        <div
          ref={containerRef}
          className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-5 gap-4 lg:gap-6 items-stretch"
        >
          {badges.map((badge, idx) => (
            <div
              key={idx}
              className={`trust-card opacity-0 group flex flex-col items-center text-center bg-white border border-slate-300 hover:border-[#1B74BB]/30 p-4 sm:p-5 rounded-xl shadow-xl shadow-slate-300 hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 ${
                idx === 4 ? "col-span-2 md:col-span-1" : "col-span-1"
              }`}
            >
              {/* Icon Container */}
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 shadow-xs ${badge.colorClass}`}>
                {badge.icon}
              </div>

              {/* Title & Description */}
              <h4 className="text-xs md:text-sm font-black text-slate-800 tracking-tight leading-snug">
                {badge.label}
              </h4>
              <span className="text-[9px] md:text-[10px] font-bold text-slate-900 mt-1 uppercase tracking-wider block">
                {badge.desc}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
