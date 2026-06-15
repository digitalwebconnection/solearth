import React, { useState, useEffect } from "react";
import { Zap, Shield, Award, Sparkles, Download, CheckCircle, ArrowRight } from "lucide-react";
import type { ProductData } from "../../data/products";

interface ProductGalleryAndStatsProps {
  product: ProductData;
}

export const ProductGalleryAndStats: React.FC<ProductGalleryAndStatsProps> = ({
  product,
}) => {
  const images = product.productImages || [];
  const [activeImage, setActiveImage] = useState(images[0] || "");

  useEffect(() => {
    if (images.length > 0) {
      setActiveImage(images[0]);
    } else {
      setActiveImage("");
    }
  }, [product.productImages]);

  const leftOverviewStats = (() => {
    const category = product.category || "";
    const brand = product.brand || "";
    if (category.includes("Panel")) {
      return [
        { name: "Brand Partner", value: brand, icon: <Award size={14} />, color: "text-[#FE9900] bg-[#FE9900]/10" },
        { name: "Power Output", value: "Up to 475W", icon: <Zap size={14} />, color: "text-[#FE9900] bg-[#FE9900]/10" },
        { name: "Cell Configuration", value: "Monocrystalline", icon: <Sparkles size={14} />, color: "text-purple-500 bg-purple-500/10" },
        { name: "Aesthetic Profile", value: "Black Frame / Silver", icon: <Shield size={14} />, color: "text-slate-500 bg-slate-500/10" },
        { name: "Performance Tier", value: "Tier 1 Bloomberg", icon: <CheckCircle size={14} />, color: "text-emerald-500 bg-emerald-500/10" }
      ];
    } else if (category.includes("Inverter")) {
      return [
        { name: "Brand Partner", value: brand, icon: <Award size={14} />, color: "text-sky-500 bg-sky-500/10" },
        { name: "Output Voltage", value: "230V / 400V", icon: <Zap size={14} />, color: "text-[#FE9900] bg-[#FE9900]/10" },
        { name: "Inverter Type", value: "Hybrid / Grid-Tied", icon: <Sparkles size={14} />, color: "text-indigo-500 bg-indigo-500/10" },
        { name: "MPPT Channels", value: "Dual MPPT input", icon: <Shield size={14} />, color: "text-rose-500 bg-rose-500/10" },
        { name: "Enclosure Class", value: "IP66 Protection", icon: <CheckCircle size={14} />, color: "text-emerald-500 bg-emerald-500/10" }
      ];
    } else {
      return [
        { name: "Brand Partner", value: brand, icon: <Award size={14} />, color: "text-teal-500 bg-teal-500/10" },
        { name: "Cell Type", value: "LiFePO4 Lithium", icon: <Zap size={14} />, color: "text-[#FE9900] bg-[#FE9900]/10" },
        { name: "Nominal Capacity", value: "5.0kWh - 15.0kWh", icon: <Sparkles size={14} />, color: "text-emerald-500 bg-emerald-500/10" },
        { name: "Scalability", value: "Stackable Modules", icon: <Shield size={14} />, color: "text-indigo-500 bg-indigo-500/10" },
        { name: "Monitoring", value: "Wi-Fi Smart App", icon: <CheckCircle size={14} />, color: "text-sky-500 bg-sky-500/10" }
      ];
    }
  })();

  const rightKeyStats = (() => {
    const category = product.category || "";
    if (category.includes("Panel")) {
      return [
        { label: "Warranty", value: "25 Years", icon: <Shield size={16} />, color: "text-emerald-500 bg-emerald-500/10" },
        { label: "Cell Tech", value: "N-Type TOPCon", icon: <Zap size={16} />, color: "text-[#FE9900] bg-[#FE9900]/10" }
      ];
    } else if (category.includes("Inverter")) {
      return [
        { label: "Warranty", value: "10 Years", icon: <Shield size={16} />, color: "text-emerald-500 bg-emerald-500/10" },
        { label: "Max Efficiency", value: "98.4%", icon: <Zap size={16} />, color: "text-[#FE9900] bg-[#FE9900]/10" }
      ];
    } else {
      return [
        { label: "Cycles", value: "10,000+ Cycles", icon: <Sparkles size={16} />, color: "text-teal-500 bg-teal-500/10" },
        { label: "Warranty", value: "10 Years", icon: <Shield size={16} />, color: "text-emerald-500 bg-emerald-500/10" }
      ];
    }
  })();

  const datasheetLink = product.pdfUrls?.[0]?.url || "https://www.cleanenergycouncil.org.au/";
  const datasheetLabel = product.pdfUrls?.[0]?.label || "Datasheet PDF";

  return (
    <div className="bg-white mx-auto max-w-7xl px-6 md:px-0 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
        
        {/* LEFT COLUMN: Technical Credentials Sidebar (col-span-3) */}
        <div className="lg:col-span-3 bg-slate-50/70 border border-slate-100/85 rounded-[32px] p-6 flex flex-col justify-between gap-6 self-stretch">
          <div className="space-y-5">
            <div>
              <span className="text-[10px] text-slate-800 font-black uppercase tracking-[0.2em] block mb-1">
                Specifications
              </span>
              <h4 className="text-sm font-black text-[#004093] uppercase tracking-wider border-b border-slate-200/50 pb-2">
                Hardware Overview
              </h4>
            </div>
            
            <div className="space-y-3">
              {leftOverviewStats.map((item, idx) => (
                <div 
                  key={idx} 
                  className="flex items-center gap-3 p-3 bg-white border border-slate-200/60 rounded-xl shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 hover:border-slate-300"
                >
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${item.color}`}>
                    {item.icon}
                  </div>
                  <div className="truncate">
                    <span className="block text-[8px] text-slate-400 font-bold uppercase tracking-wider">
                      {item.name}
                    </span>
                    <span className="block text-xs font-black text-slate-800 truncate">
                      {item.value}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="pt-4 border-t border-slate-200/60 space-y-2.5">
            <div className="flex items-center gap-2 text-[10px] text-slate-500 font-bold uppercase tracking-wider">
              <CheckCircle size={14} className="text-emerald-500 shrink-0" />
              <span>CEC Listed Hardware</span>
            </div>
            <div className="flex items-center gap-2 text-[10px] text-slate-500 font-bold uppercase tracking-wider">
              <CheckCircle size={14} className="text-emerald-500 shrink-0" />
              <span>SAA Safety Compliant</span>
            </div>
          </div>
        </div>

        {/* CENTER COLUMN: Product Showcase Canvas & Vertical Thumbnails (col-span-5) */}
        <div className="lg:col-span-5 flex flex-col sm:flex-row gap-4 items-stretch">
          
          {/* Thumbnails (Horizontal on small screens, Vertical on desktop) */}
          {images.length > 1 && (
            <div className="flex sm:flex-col gap-3 overflow-x-auto sm:overflow-x-visible pb-2 sm:pb-0 shrink-0 justify-start">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(img)}
                  className={`w-16 h-20 rounded-2xl overflow-hidden border-2 transition-all duration-300 p-2 bg-slate-50/50 shrink-0 ${
                    activeImage === img 
                      ? "border-[#004093] scale-95 shadow-md bg-white" 
                      : "border-slate-100 hover:border-slate-300/80"
                  }`}
                >
                  <img src={img} alt="thumbnail" className="w-full h-full object-contain" />
                </button>
              ))}
            </div>
          )}

          {/* Main Showcase Canvas */}
          <div className="flex-1 relative overflow-hidden bg-slate-50/30 border border-slate-100 rounded-[32px] flex items-center justify-center p-6 shadow-[0_20px_50px_rgba(10,31,68,0.05)] group">
            <img
              src={activeImage}
              alt={product.name}
              className="object-contain max-w-full max-h-[380px] transition duration-700 group-hover:scale-108 group-hover:rotate-1"
            />
            {/* Floating tags */}
            <div className="absolute top-4 left-4 bg-[#004093] text-white text-[9px] font-black uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-sm">
              {product.category}
            </div>
            
            <div className="absolute top-4 right-4 bg-emerald-500/10 text-emerald-600 border border-emerald-500/20 text-[8px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md shadow-xs">
              CEC Certified
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN: Brand Details, Description & CTA (col-span-4) */}
        <div className="lg:col-span-4 flex flex-col justify-between gap-6 self-stretch">
          
          <div className="space-y-4">
            {/* Brand logo / header */}
            <div className="flex items-center gap-3">
              {product.logoUrl ? (
                <div className="h-25 bg-white rounded-xl flex items-center justify-center ">
                  <img
                    src={product.logoUrl}
                    alt={`${product.brand} logo`}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              ) : (
                <div className="flex items-center gap-1.5">
                  <div
                    className="w-2 h-4 rounded-xs"
                    style={{ backgroundColor: product.brandColor }}
                  />
                  <span className="text-base font-black tracking-tighter text-[#004093]">
                    {product.logoText}
                  </span>
                </div>
              )}
              
              <div className="flex items-center gap-1.5 px-2.5 py-1 bg-[#004093]/5 rounded-full border border-[#004093]/10">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[9px] font-black text-[#004093] uppercase tracking-wider">
                  Partner
                </span>
              </div>
            </div>

            {/* Title & subtitle */}
            <div className="space-y-1">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
                {product.tagline}
              </h2>
              <p className="text-[10px] font-black uppercase tracking-widest text-[#FE9900]">
                {product.subtitle}
              </p>
            </div>

            {/* Intro text */}
            <div className="space-y-3 text-slate-600 text-xs md:text-sm leading-relaxed font-medium">
              {product.intro.split('\n\n').map((paragraph, index) => (
                <p key={index}>
                  {paragraph.trim()}
                </p>
              ))}
            </div>
          </div>

          <div className="space-y-4 mt-auto">
            {/* 2-Card Metrics */}
            <div className="grid grid-cols-2 gap-3">
              {rightKeyStats.map((stat, idx) => (
                <div 
                  key={idx} 
                  className="bg-slate-50/40 border border-slate-100/60 rounded-2xl p-3 flex items-center gap-3 transition-all duration-300 hover:bg-white hover:shadow-md hover:border-slate-200"
                >
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${stat.color}`}>
                    {stat.icon}
                  </div>
                  <div className="truncate">
                    <p className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">{stat.label}</p>
                    <p className="text-xs font-black text-slate-800 truncate">{stat.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTAs Stack */}
            <div className="space-y-2.5">
              <a
                href="#quote-section"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("quote-section")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="w-full inline-flex items-center justify-center gap-2 bg-linear-to-r from-[#FE9900] to-[#ffb13b] hover:from-[#e08600] hover:to-[#fe9900] text-white px-6 py-4 rounded-xl font-black transition-all duration-300 shadow-[0_8px_25px_rgba(254,153,0,0.2)] hover:shadow-[0_12px_35px_rgba(254,153,0,0.35)] text-center hover:scale-[1.02] active:scale-98 uppercase tracking-widest text-xs cursor-pointer"
              >
                Get Free Quote
                <ArrowRight size={16} />
              </a>

              <a
                href={datasheetLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 border border-slate-200 hover:border-[#004093] text-slate-700 hover:text-[#004093] hover:bg-[#004093]/5 px-6 py-3.5 rounded-xl font-extrabold transition-all duration-300 text-center text-xs cursor-pointer"
              >
                <Download size={16} className="text-slate-500" />
                {datasheetLabel}
              </a>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
