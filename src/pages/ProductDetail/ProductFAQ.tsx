import React, { useState } from "react";
import { ChevronDown, Sparkles } from "lucide-react";
import type { ProductData } from "../../data/products";
import { useQuoteModal } from "../../components/QuoteModal";

interface ProductFAQProps {
  product: ProductData;
}

export const getProductFAQs = (product: ProductData) => {
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

  const dynamicFAQs =
    product.faqSection?.items?.map((item) => ({
      q: item.question,
      a: item.answer,
    })) || [];

  return dynamicFAQs.length > 0
    ? dynamicFAQs
    : product.category === "Solar Panels"
      ? panelFAQs
      : product.category === "Solar Inverters"
        ? inverterFAQs
        : batteryFAQs;
};

export const ProductFAQ: React.FC<ProductFAQProps> = ({ product }) => {
  const { openQuoteModal } = useQuoteModal();
  const faqs = getProductFAQs(product);

  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggleFAQ = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="relative overflow-hidden bg-white py-0 md:py-20 border-t border-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-0 relative">
        {/* Ambient background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#FCC200]/3 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start relative z-10">
          {/* LEFT COLUMN: STICKY HEADER & HELP WIDGET */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-6 text-left">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#1B74BB]/5 rounded-full border border-[#1B74BB]/10 text-[10px] font-black uppercase tracking-wider text-[#1B74BB]">
              <Sparkles size={10} className="text-[#1B74BB]" />
              Help Center
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-[#1B74BB] leading-tight tracking-tight">
              Frequently Asked Questions
            </h2>

            <p className="text-slate-800 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
              Everything you need to know about installation, warranty,
              performance, compatibility, and product support.
            </p>

            <div className="p-5 sm:p-6 rounded-[24px] bg-slate-50/50 border border-slate-200/50 space-y-4">
              <h4 className="text-xs font-black text-[#1B74BB] uppercase tracking-wider">
                Still have questions?
              </h4>
              <p className="text-slate-900 text-xs font-semibold leading-relaxed">
                Speak directly with our Sydney-based engineers to get a
                customized solar assessment for your property.
              </p>
              <button
                onClick={() =>
                  openQuoteModal(
                    `FAQ Support: ${product.brand} ${product.category}`,
                  )
                }
                className="inline-flex items-center justify-center bg-[#FCC200] hover:bg-[#e08600] text-black py-3.5 px-6 rounded-xl text-xs font-black uppercase tracking-wider transition-colors duration-200 w-full text-center shadow-xs cursor-pointer border-none"
              >
                Contact Support
              </button>
            </div>
          </div>

          {/* RIGHT COLUMN: FLAT LIST ACCORDIONS */}
          <div className="lg:col-span-8 divide-y divide-slate-100 text-left">
            {faqs.map((faq, idx) => {
              const isOpen = openIdx === idx;

              return (
                <div key={idx} className="py-5 first:pt-0 last:pb-0">
                  <button
                    onClick={() => toggleFAQ(idx)}
                    className="w-full flex items-center justify-between gap-6 py-4 text-left cursor-pointer group"
                  >
                    <span
                      className={`text-base md:text-lg font-black transition-colors duration-200 leading-snug ${
                        isOpen
                          ? "text-[#FCC200]"
                          : "text-[#1B74BB] group-hover:text-[#FCC200]"
                      }`}
                    >
                      {faq.q}
                    </span>

                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                        isOpen
                          ? "bg-[#1B74BB] text-white rotate-180"
                          : "bg-slate-50 text-slate-900 group-hover:bg-[#1B74BB] group-hover:text-white"
                      }`}
                    >
                      <ChevronDown
                        size={14}
                        className="transition-transform duration-300"
                      />
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
                        <p className="text-slate-800 text-xs sm:text-sm md:text-base font-semibold leading-relaxed">
                          {faq.a}
                        </p>

                        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#FCC200]/10 rounded-full border border-[#FCC200]/50 text-[9px] font-black uppercase tracking-wider text-[#1B74BB]">
                          <Sparkles size={8} className="text-[#FCC200]" />
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
