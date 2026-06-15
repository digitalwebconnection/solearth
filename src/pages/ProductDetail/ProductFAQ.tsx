import React, { useState } from "react";
import { ChevronDown, Sparkles } from "lucide-react";
import type { ProductData } from "../../data/products";

interface ProductFAQProps {
  product: ProductData;
}

export const ProductFAQ: React.FC<ProductFAQProps> = ({ product }) => {
  const panelFAQs = [
    {
      q: `What is the efficiency of ${product.brand} Solar Panels?`,
      a: `${product.brand} panels offer top-tier module efficiencies (ranging from 21.5% to 24%), allowing you to capture more energy per square meter, making them perfect for compact or shaded roof layouts.`,
    },
    {
      q: `How long is the warranty, and how is it serviced in Australia?`,
      a: `These modules come with an industry-leading 15 to 25-year product warranty and a 25 to 30-year linear performance warranty. All warranty claims are handled locally through the manufacturer's Australian offices, supported by Solearth Energy.`,
    },
    {
      q: `Are these solar panels storm and hail resistant?`,
      a: `Yes, all ${product.brand} modules are fully certified to withstand high wind loads of up to 2400 Pa and snow/heavy loads of up to 5400 Pa. The front tempered glass is impact-tested to resist large hail stones.`,
    },
    {
      q: `How long does the installation take?`,
      a: `A standard residential installation typically takes 1 to 2 days depending on system size and roof access. Solearth Energy's SAA-accredited installers handle the entire process from structural safety checks to final commissioning.`,
    },
  ];

  const inverterFAQs = [
    {
      q: `Is the ${product.brand} inverter battery-ready (hybrid)?`,
      a: `Yes, many inverters in the ${product.brand} range are fully hybrid or battery-ready, allowing you to add energy storage systems seamlessly at any time without buying a new inverter.`,
    },
    {
      q: `Does this inverter support mobile application monitoring?`,
      a: `Absolutely. You can track your real-time solar generation, home power consumption, and battery charge states anywhere via the dedicated smartphone application.`,
    },
    {
      q: `What is the warranty period for ${product.brand} Inverters?`,
      a: `Inverters generally come with a 5 to 10-year manufacturer warranty. You can easily extend this up to 15 or 20 years.`,
    },
    {
      q: `How does the backup power function work during a blackout?`,
      a: `If you have a hybrid inverter with battery storage, the system switches to backup power mode in under 10-20ms during grid failure.`,
    },
  ];

  const batteryFAQs = [
    {
      q: `What chemistry is used in ${product.brand} Batteries?`,
      a: `These batteries utilize Lithium Iron Phosphate (LiFePO4 or LFP) chemistry, recognized as the safest and most durable lithium chemistry for home energy storage.`,
    },
    {
      q: `Can I expand the storage capacity later?`,
      a: `Yes. The modular stacking design allows you to expand capacity easily as your household energy needs grow.`,
    },
    {
      q: `What is the Depth of Discharge (DoD) of this battery?`,
      a: `These systems support 90% to 100% Depth of Discharge, meaning you can utilize almost all stored energy without shortening battery lifespan.`,
    },
    {
      q: `Are these battery storage systems VPP ready?`,
      a: `Yes, the integrated smart BMS is compatible with major Australian Virtual Power Plant programs.`,
    },
  ];

  const faqs =
    product.category === "Solar Panels"
      ? panelFAQs
      : product.category === "Solar Inverters"
        ? inverterFAQs
        : batteryFAQs;

  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggleFAQ = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-0 border-t border-slate-100">
      <div className="mx-auto max-w-7xl px-6 relative">
        
        {/* Ambient background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#FE9900]/3 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start relative z-10">
          
          {/* LEFT COLUMN: STICKY HEADER & HELP WIDGET */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#004093]/5 rounded-full border border-[#004093]/10 text-[10px] font-black uppercase tracking-wider text-[#004093]">
              <Sparkles size={10} className="text-[#004093]" />
              Help Center
            </span>

            <h2 className="text-3xl md:text-5xl font-black text-[#004093] leading-tight tracking-tight">
              Frequently Asked Questions
            </h2>

            <p className="text-slate-600 text-sm md:text-base leading-relaxed font-medium">
              Everything you need to know about installation, warranty, performance, compatibility, and product support.
            </p>

            <div className="p-6 rounded-[24px] bg-slate-50/50 border border-slate-200/50 space-y-4">
              <h4 className="text-xs font-black text-[#004093] uppercase tracking-wider">
                Still have questions?
              </h4>
              <p className="text-slate-500 text-xs font-semibold leading-relaxed">
                Speak directly with our Sydney-based engineers to get a customized solar assessment for your property.
              </p>
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center bg-[#FE9900] hover:bg-[#e08600] text-white py-3.5 px-6 rounded-xl text-xs font-black uppercase tracking-wider transition-colors duration-200 w-full text-center shadow-xs"
              >
                Contact Support
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN: FLAT LIST ACCORDIONS */}
          <div className="lg:col-span-8 divide-y divide-slate-100">
            {faqs.map((faq, idx) => {
              const isOpen = openIdx === idx;
              
              return (
                <div key={idx} className="py-5 first:pt-0 last:pb-0">
                  <button
                    onClick={() => toggleFAQ(idx)}
                    className="w-full flex items-center justify-between gap-6 py-4 text-left cursor-pointer group"
                  >
                    <span className={`text-base md:text-lg font-black transition-colors duration-200 leading-snug ${
                      isOpen ? "text-[#FE9900]" : "text-[#004093] group-hover:text-[#FE9900]"
                    }`}>
                      {faq.q}
                    </span>
                    
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                      isOpen 
                        ? "bg-[#004093] text-white rotate-180" 
                        : "bg-slate-50 text-slate-400 group-hover:bg-[#004093] group-hover:text-white"
                    }`}>
                      <ChevronDown size={14} className="transition-transform duration-300" />
                    </div>
                  </button>

                  {/* Expandable Panel */}
                  <div
                    className={`grid transition-all duration-300 ease-in-out overflow-hidden ${
                      isOpen 
                        ? "grid-rows-[1fr] opacity-100 mt-2" 
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="pb-4 pr-10 space-y-4">
                        <p className="text-slate-600 text-sm md:text-base font-semibold leading-relaxed">
                          {faq.a}
                        </p>
                        
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#FE9900]/10 rounded-full border border-[#FE9900]/50 text-[9px] font-black uppercase tracking-wider text-[#004093]">
                          <Sparkles size={8} className="text-[#FE9900]" />
                          Solar Expert Answer
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};