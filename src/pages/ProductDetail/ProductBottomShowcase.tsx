import React, { useState } from "react";
import { useToast } from "../ui/Toast";
import { MessageSquare, Mail, ShieldCheck, Zap, Award, CheckCircle } from "lucide-react";
import type { ProductData } from "../../data/products";
import solarRoof1 from '../../assets/downloaded-images/solar-roof-1.jpg';

interface ProductBottomShowcaseProps {
  product: ProductData;
}

export const ProductBottomShowcase: React.FC<ProductBottomShowcaseProps> = ({ product }) => {
  const toast = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(event.target as HTMLFormElement);
    formData.append("access_key", "f3cef460-e2ec-49da-adab-5f4180bdf046");
    const response = await fetch("https://api.web3forms.com/submit", { method: "POST", body: formData });
    const data = await response.json();
    setIsSubmitting(false);
    if (data.success) { toast.success("Request sent successfully! We'll be in touch shortly."); (event.target as HTMLFormElement).reset(); }
    else { toast.error("Something went wrong. Please try again."); }
  };

  return (
    <div className="relative overflow-hidden bg-slate-950 text-white  border border-slate-800 shadow-2xl shadow-slate-950/20 mt-12">
      {/* Background Image of Solar Panels with Dark Overlay */}
      <div className="absolute inset-0 z-0 opacity-20">
        <img
          src={solarRoof1}
          alt="Solar Panels Showcase"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-radial-to-t from-slate-950 via-slate-950/90 to-slate-900" />
      </div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 p-8 md:p-12 items-center">

        {/* LEFT COLUMN: Solar Panel Showcase Details */}
        <div className="lg:col-span-6 flex flex-col justify-center">
          <div className="inline-flex items-center gap-2 bg-[#FE9900]/15 border border-[#FE9900]/30 rounded-full px-4 py-1.5 w-fit mb-6">
            <Zap size={14} className="text-[#FE9900] animate-pulse" />
            <span className="text-[11px] font-black uppercase tracking-widest text-[#FE9900]">
              Tier 1 Solar Integration
            </span>
          </div>

          <h3 className="text-3xl md:text-5xl font-serif font-bold tracking-tight leading-tight mb-4">
            Maximize Energy Yields With {product.brand}
          </h3>

          <p className="text-slate-400 text-sm md:text-base mb-8 leading-relaxed font-medium">
            Ready to upgrade your property? Solearth Energy configures custom systems utilizing {product.brand} solar technology to optimize power generation and lower utility bills.
          </p>

          {/* Interactive Showcase Points */}
          <div className="space-y-4 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                <CheckCircle size={18} />
              </div>
              <span className="text-sm font-bold text-slate-200">SAA Approved Clean Energy Technology</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#004093]/30 flex items-center justify-center text-blue-400">
                <ShieldCheck size={18} />
              </div>
              <span className="text-sm font-bold text-slate-200">Up to 25-Year Full Performance Warranty</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#FE9900]/10 flex items-center justify-center text-[#FE9900]">
                <Award size={18} />
              </div>
              <span className="text-sm font-bold text-slate-200">100% Backed by Local Australian Support</span>
            </div>
          </div>

          {/* Solar Panel Showcase Image Card */}
          <div className="relative overflow-hidden rounded-2xl border border-white/5 bg-white/5 p-4 flex items-center gap-4 hover:border-white/10 transition group">
            <div className="w-20 h-20 rounded-xl overflow-hidden shrink-0 border border-white/10">
              <img
                src={solarRoof1}
                alt="Solar Panel Close Up"
                className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white mb-1">
                Monocrystalline Panel Showcase
              </h4>
              <p className="text-xs text-slate-400 font-semibold leading-relaxed">
                Refined anti-reflective coatings and zero-gap cell structures maximize irradiance conversion.
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Glassmorphic Callback Form */}
        <div className="lg:col-span-6">
          <div className="backdrop-blur-md bg-white/5 border border-white/10 p-6 md:p-8 rounded-3xl shadow-2xl relative">
            <h4 className="text-lg font-bold mb-1 flex items-center gap-2 text-white">
              <MessageSquare size={20} className="text-[#FE9900]" />
              Book Callback Request
            </h4>
            <p className="text-xs text-slate-400 font-bold mb-6">
              Our accredited engineers will review your energy load profile and call you back.
            </p>

            <form
              onSubmit={onSubmit}
              className="space-y-4"
            >
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Full Name"
                  required
                  className="w-full px-4 py-3 text-xs font-semibold rounded-xl bg-slate-900/60 border border-white/10 text-white placeholder-slate-500 focus:outline-hidden focus:border-[#FE9900] focus:ring-1 focus:ring-[#FE9900] transition"
                />
              </div>

              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Best Contact Number"
                  required
                  className="w-full px-4 py-3 text-xs font-semibold rounded-xl bg-slate-900/60 border border-white/10 text-white placeholder-slate-500 focus:outline-hidden focus:border-[#FE9900] focus:ring-1 focus:ring-[#FE9900] transition"
                />
              </div>

              <div>
                <select
                  name="category"
                  required
                  className="w-full px-4 py-3 text-xs font-semibold rounded-xl bg-slate-900/60 border border-white/10 text-slate-400 focus:outline-hidden focus:border-[#FE9900] focus:ring-1 focus:ring-[#FE9900] transition"
                >
                  <option value="" disabled className="bg-slate-950">Select solar category...</option>
                  <option value="Solar Panels" className="bg-slate-950 text-white">Solar Panels</option>
                  <option value="Inverters" className="bg-slate-950 text-white">Solar Inverters</option>
                  <option value="Batteries" className="bg-slate-950 text-white">Battery Storage</option>
                  <option value="Full System" className="bg-slate-950 text-white">Full System Design</option>
                </select>
              </div>




              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#FE9900] hover:bg-[#e08600] text-white py-3.5 rounded-xl text-xs font-black tracking-wider uppercase transition-all duration-300 shadow-lg shadow-[#FE9900]/20 hover:scale-[1.01] disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send Request"}
              </button>
            </form>

            {/* Direct Support Pill-shaped details */}
            <div className="mt-8 pt-6 border-t border-white/5 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* <a
                href="tel:1300672194"
                className="flex items-center gap-3 p-3 bg-white/5 border border-white/5 rounded-xl hover:bg-white/10 transition group"
              >
                <div className="w-8 h-8 rounded-lg bg-[#FE9900]/10 flex items-center justify-center text-[#FE9900]">
                  <Phone size={14} />
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 font-bold uppercase">Call Hotline</p>
                  <p className="text-xs font-black text-white group-hover:text-[#FE9900] transition">1300 672 194</p>
                </div>
              </a> */}

              <a
                href="mailto:info@aussiesunsolar.com.au"
                className="flex items-center gap-3 p-3 bg-white/5 border border-white/5 rounded-xl hover:bg-white/10 transition group"
              >
                <div className="w-8 h-8 rounded-lg bg-[#004093]/30 flex items-center justify-center text-blue-400">
                  <Mail size={14} />
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 font-bold uppercase">Send Email</p>
                  <p className="text-xs font-black text-white group-hover:text-blue-400 transition break-all">info@aussie...</p>
                </div>
              </a>
            </div>

            <div className="mt-4 text-center text-[10px] text-slate-500 font-semibold">
              🔐 Your information is secure and managed locally.
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
