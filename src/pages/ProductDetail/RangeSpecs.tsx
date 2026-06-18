import React, { useRef } from "react";
import {
  Zap,
  ShieldCheck,
  BatteryCharging,
  GaugeCircle,
  Cpu,
  Sliders,
  Settings
} from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import type { ProductData } from "../../data/products";

interface RangeSpecsProps {
  product: ProductData;
}

const icons = [
  Zap,
  ShieldCheck,
  BatteryCharging,
  GaugeCircle,
  Cpu,
  Sliders
];

export const RangeSpecs: React.FC<RangeSpecsProps> = ({ product }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Register scroll plugin
      gsap.registerPlugin(ScrollTrigger);

      const container = containerRef.current;
      if (!container) return;

      // 1. Line drawing scroll animations
      const lineBars = container.querySelectorAll(".timeline-line");
      lineBars.forEach((bar) => {
        gsap.fromTo(
          bar,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: {
              trigger: container,
              start: "top 75%",
              end: "bottom 80%",
              scrub: 0.5
            }
          }
        );
      });

      // 2. Row entrance scroll animations
      const rows = container.querySelectorAll(".timeline-row");
      rows.forEach((row) => {
        const bubble = row.querySelector(".timeline-bubble");
        const iconBlock = row.querySelector(".timeline-icon-block");
        const textBlock = row.querySelector(".timeline-text-block");
        const isLeft = row.classList.contains("row-left");

        // Set up ScrollTrigger for each row
        const rowTrigger = {
          trigger: row,
          start: "top 88%",
          toggleActions: "play none none none"
        };

        // Node bubble pop-in
        gsap.fromTo(
          bubble,
          { scale: 0, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.5,
            ease: "back.out(1.8)",
            scrollTrigger: rowTrigger
          }
        );

        // Icon block reveal
        gsap.fromTo(
          iconBlock,
          { scale: 0.8, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: rowTrigger
          }
        );

        // Text detail slide
        gsap.fromTo(
          textBlock,
          { 
            opacity: 0, 
            x: window.innerWidth < 768 ? 20 : (isLeft ? 30 : -30),
            filter: "blur(4px)"
          },
          {
            opacity: 1,
            x: 0,
            filter: "blur(0px)",
            duration: 0.7,
            ease: "power2.out",
            scrollTrigger: rowTrigger
          }
        );
      });
    },
    { scope: containerRef }
  );

return (
  <section ref={containerRef} className="relative mx-auto max-w-6xl px-4 sm:px-6 md:px-0 py-0 md:py-20">
    {/* BACKGROUND DECORATIONS */}
    <div className="absolute top-1/4 right-0 w-[300px] h-[300px] bg-[#FCC200]/3 rounded-full blur-3xl pointer-events-none" />
    <div className="absolute bottom-1/4 left-0 w-[300px] h-[300px] bg-[#1B74BB]/3 rounded-full blur-3xl pointer-events-none" />

    {/* HEADER */}
    <div className="relative z-10 mb-12 md:mb-16 text-center space-y-4">
      <span className="inline-flex items-center gap-1.5 px-8 py-1 bg-[#1B74BB]/5 rounded-full border border-[#1B74BB]/50 text-[10px] font-black uppercase tracking-wider text-[#1B74BB]">
        <Settings size={10} className="text-[#1B74BB] animate-spin-slow" />
        Technical Attributes
      </span>
      
      <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-slate-900 leading-tight tracking-tight">
        {product.rangeTitle}
      </h2>

      <p className="text-slate-900 text-xs sm:text-sm md:text-base leading-relaxed font-medium max-w-2xl mx-auto">
        {product.rangeIntro}
      </p>
    </div>

    {/* ALTERNATING TECHNICAL TIMELINE (NO CARDS, NO BOXES) */}
    <div className="relative z-10">
      
      {/* Desktop Center Timeline Line */}
      <div className="timeline-line origin-top hidden md:block absolute left-1/2 top-2 bottom-2 w-[2px] bg-linear-to-b from-[#1B74BB] via-[#FCC200] to-[#1B74BB] transform -translate-x-1/2 pointer-events-none" />

      {/* Mobile Left Timeline Line */}
      <div className="timeline-line origin-top md:hidden absolute left-[14px] top-2 bottom-2 w-[2px] bg-linear-to-b from-[#1B74BB] via-[#FCC200] to-slate-200" />

      <div className="space-y-10 md:space-y-0 relative">
        {product.rangeSpecs.map((spec, index) => {
          const Icon = icons[index % icons.length];
          const isLeft = index % 2 === 0;

          return (
            <div
              key={index}
              className={`timeline-row group relative flex items-start gap-4 sm:gap-6 pl-10 md:pl-0 pb-0 md:pb-12 last:pb-0 md:w-1/2 ${
                isLeft 
                  ? "row-left md:ml-auto md:pl-12 text-left" 
                  : "row-right md:mr-auto md:pr-12 md:pl-0 md:flex-row-reverse md:text-right"
              }`}
            >
              {/* Node bubble centered on the connection line */}
              <div className={`timeline-bubble absolute top-1.5 w-7 h-7 rounded-full bg-white border border-slate-200 flex items-center justify-center shadow-xs group-hover:border-[#FCC200] group-hover:scale-110 transition-all duration-300 z-10 ${
                isLeft 
                  ? "left-0 md:left-[-14px]" 
                  : "left-0 md:left-auto md:right-[-14px]"
              }`}>
                <div className={`w-2 h-2 rounded-full transition-transform duration-300 group-hover:scale-125 ${
                  isLeft ? "bg-[#FCC200]" : "bg-[#1B74BB]"
                }`} />
              </div>

              {/* Icon Block */}
              <div className="timeline-icon-block w-10 h-10 rounded-xl bg-slate-50 text-slate-800 group-hover:bg-[#1B74BB]/5 group-hover:text-[#1B74BB] flex items-center justify-center transition-all duration-300 shrink-0">
                <Icon size={18} />
              </div>

              {/* Text Details */}
              <div className="timeline-text-block space-y-1 transition-transform duration-300 group-hover:translate-x-1.5 md:group-hover:translate-x-0 md:group-hover:-translate-y-0.5 text-left">
                <span className={`block text-[9px] font-black uppercase tracking-widest transition-colors duration-300 ${
                  isLeft ? "text-[#1B74BB]" : "text-[#FCC200]"
                }`}>
                  Specification 0{index + 1}
                </span>
                <h4 className="text-slate-800 text-xs sm:text-sm md:text-base font-bold leading-relaxed">
                  {spec}
                </h4>
              </div>

            </div>
          );
        })}
      </div>

    </div>
  </section>
  );
};