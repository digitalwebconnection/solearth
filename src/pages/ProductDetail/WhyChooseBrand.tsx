import React, { useState, useEffect, useRef } from "react";
import {
  CheckCircle2,
  ShieldCheck,
  Zap,
  BadgeCheck,
  ArrowRight,
  Sparkles
} from "lucide-react";
import { gsap } from "gsap";

import type { ProductData } from "../../data/products";

interface WhyChooseBrandProps {
  product: ProductData;
}

export const WhyChooseBrand: React.FC<WhyChooseBrandProps> = ({
  product,
}) => {
  const [activeTab, setActiveTab] = useState(0);
  const consoleRef = useRef<HTMLDivElement>(null);

  const icons = [
    <CheckCircle2 size={32} className="text-[#FE9900]" />,
    <ShieldCheck size={32} className="text-[#FE9900]" />,
    <BadgeCheck size={32} className="text-[#FE9900]" />,
    <Zap size={32} className="text-[#FE9900]" />,
    <Sparkles size={32} className="text-[#FE9900]" />
  ];

  // Auto change tab every 4s
  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveTab((prev) => (prev + 1) % product.whyChoose.length);
    }, 4000);
    return () => clearTimeout(timer);
  }, [activeTab, product.whyChoose.length]);

  // GSAP animation on tab change
  useEffect(() => {
    if (!consoleRef.current) return;
    const targets = consoleRef.current.querySelectorAll(".animate-target");
    
    gsap.fromTo(
      targets,
      {
        opacity: 0,
        y: 15,
        filter: "blur(4px)"
      },
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 0.5,
        stagger: 0.08,
        ease: "power2.out"
      }
    );
  }, [activeTab]);

  return (
    <section className="relative mx-auto max-w-7xl px-6 md:px-0 py-0">
      {/* Dynamic Keyframe Style */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes whyChooseProgress {
          0% { width: 0%; }
          100% { width: 100%; }
        }
      `}} />

      {/* BACKGROUND DECORATIONS */}
      <div className="absolute top-1/4 right-0 w-[450px] h-[450px] bg-[#FE9900]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-[#004093]/5 rounded-full blur-3xl pointer-events-none" />

      {/* HEADER */}
      <div className="relative z-10 mb-12">
        <div className="space-y-4 max-w-5xl mx-auto text-center">
          <span className="inline-flex items-center gap-1.5 px-8 py-1 bg-[#004093]/5 rounded-full border border-[#004093]/50 text-[10px] font-black uppercase tracking-wider text-[#004093]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#004093] animate-pulse" />
            Interactive Guide
          </span>

          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-[#004093] leading-tight">
            Why Choose
            <span className="text-[#FE9900]">
              {" "}
              {product.brand}
            </span>
            <br />
            Explore the Core Advantages
          </h2>

          <p className="text-slate-900 text-sm md:text-base leading-relaxed font-medium">
            Hover or tap on the features below to inspect the engineering, safety compliance, and performance highlights of {product.brand}.
          </p>
        </div>
      </div>

      {/* INTERACTIVE CONFIGURATION DASHBOARD */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch relative z-10">
        
        {/* LEFT SELECTOR: Tab List (col-span-5) */}
        <div className="lg:col-span-5 flex flex-col gap-3.5">
          {product.whyChoose.map((point, idx) => {
            const isActive = activeTab === idx;
            return (
              <button
                key={idx}
                onMouseEnter={() => setActiveTab(idx)}
                onClick={() => setActiveTab(idx)}
                className={`w-full text-left p-5 rounded-lg border transition-all duration-300 flex items-center justify-between group cursor-pointer relative overflow-hidden ${
                  isActive
                    ? "bg-[#004093] border-[#004093] text-white shadow-[0_12px_30px_rgba(0,64,147,0.15)] translate-x-2"
                    : "bg-slate-50/50 border-slate-100 hover:border-slate-300 hover:bg-slate-100/50 text-slate-800"
                }`}
              >
                <div className="flex items-center gap-4 truncate">
                  <span className={`text-xs font-black px-2.5 py-1 rounded-lg shrink-0 ${
                    isActive ? "bg-white/10 text-[#FE9900]" : "bg-slate-200/50 text-slate-500"
                  }`}>
                    0{idx + 1}
                  </span>
                  <span className="text-sm md:text-base font-black truncate">
                    {point.title}
                  </span>
                </div>
                
                <ArrowRight 
                  size={18} 
                  className={`transition-transform duration-300 shrink-0 ${
                    isActive ? "translate-x-1 text-[#FE9900]" : "text-slate-400 group-hover:translate-x-1"
                  }`} 
                />

                {/* Loading Progress Bar for Auto-Play */}
                {isActive && (
                  <div 
                    className="absolute bottom-0 left-0 h-[3px] bg-[#FE9900]" 
                    style={{ 
                      animation: "whyChooseProgress 4000ms linear forwards" 
                    }} 
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* RIGHT CONSOLE: Display Panel (col-span-7) */}
        <div className="lg:col-span-7">
          <div 
            ref={consoleRef}
            className="relative overflow-hidden rounded-lg bg-linear-to-br from-[#004093] via-[#002f6b] to-[#001c44] p-8 md:p-10 text-white h-full shadow-[0_20px_50px_rgba(0,64,147,0.2)] flex flex-col justify-between min-h-[380px] group"
          >
            {/* DOTTED GRID BACKGROUND PATTERN */}
            <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#fff_1px,transparent_1px)] bg-size-[16px_16px] pointer-events-none" />

            {/* FLOATING LIGHT GLOWS */}
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-[#FE9900]/15 rounded-full blur-3xl pointer-events-none group-hover:scale-110 transition-transform duration-700" />
            <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

            {/* TOP HEADER */}
            <div className="relative z-10 flex items-center justify-between">
              <span className="inline-flex items-center gap-1 bg-white/10 px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-wider">
                <Sparkles size={10} className="text-[#FE9900]" />
                Feature Highlight 0{activeTab + 1}
              </span>
              
              <span className="text-xs font-bold text-white/50 uppercase tracking-widest">
                {product.brand} Solar
              </span>
            </div>

            {/* MAIN CONTENT CANVAS */}
            <div className="relative z-10 my-8 space-y-6">
              {/* Massive icon ring */}
              <div className="animate-target w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shadow-lg transition-transform duration-500 group-hover:rotate-6">
                {icons[activeTab % icons.length]}
              </div>

              <div className="space-y-3">
                <h3 className="animate-target text-2xl md:text-3xl font-extrabold leading-tight text-white tracking-tight">
                  {product.whyChoose[activeTab].title}
                </h3>
                
                <p className="animate-target text-white/80 text-sm md:text-base leading-relaxed font-medium max-w-xl">
                  {product.whyChoose[activeTab].desc}
                </p>
              </div>
            </div>

            {/* FOOTER BADGE */}
            <div className="relative z-10 pt-6 border-t border-white/10 flex items-center justify-between text-[11px] text-white/60 font-semibold flex-wrap gap-2">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 size={14} className="text-emerald-400" />
                Fully CEC Approved
              </span>
              <span>
                Verified Australian Standards
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};