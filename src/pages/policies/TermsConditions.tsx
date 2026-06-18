import { FileText, Mail, Phone, MapPin } from 'lucide-react'

export default function TermsConditions() {
  return (
    <div className="bg-slate-50 min-h-screen pb-20 font-serif">
      {/* Policy Hero */}
      <div className="bg-linear-to-br from-[#1B74BB] to-[#1B74BB] text-white pt-36 pb-24 px-4 text-center">
        <div className="max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center justify-center p-3 bg-white/10 rounded-full mb-2">
            <FileText className="w-8 h-8 text-[#FCC200]" />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight font-serif">Terms & Conditions</h1>
          <p className="text-xs sm:text-sm md:text-base font-semibold text-slate-200">
            Last Updated: June 16, 2026 • SolEarth Energy Pty Ltd
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-4 sm:mx-6 md:mx-auto -mt-10 bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-150 p-5 sm:p-8 md:p-12 font-sans text-slate-700 space-y-8 leading-relaxed">
        <section className="space-y-3">
          <h2 className="text-lg sm:text-xl md:text-2xl font-black text-[#1B74BB] border-b border-slate-200 pb-2">
            1. Agreement Scope
          </h2>
          <p className="text-xs sm:text-sm md:text-base font-medium">
            These Terms & Conditions govern the supply, engineering design, installation, and commissioning of solar photovoltaic panels, smart batteries, EV chargers, and other electrical equipment by SolEarth Energy Pty Ltd ("we", "us", "our") to you ("the client"). By signing our solar quote or commissioning agreement, you agree to these terms.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg sm:text-xl md:text-2xl font-black text-[#1B74BB] border-b border-slate-200 pb-2">
            2. Site Access & Installation Conditions
          </h2>
          <p className="text-xs sm:text-sm md:text-base font-medium">
            You agree to grant our CEC certified installers and site designers safe access to your designated premises to conduct structural surveys, mount framing, pull cables, and connect solar hardware. It is your responsibility to ensure the roof is free of major structural degradation and that the switchboard is compliant with local utility provider rules.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg sm:text-xl md:text-2xl font-black text-[#1B74BB] border-b border-slate-200 pb-2">
            3. STC Solar Rebates & Government Incentives
          </h2>
          <p className="text-xs sm:text-sm md:text-base font-medium">
            Many quotes rely on the assignment of Small-scale Technology Certificates (STCs) directly to us. By signing, you authorize us to create, trade, and submit these certificates on your behalf. If you choose to retain the STCs yourself, or if you become ineligible due to prior installation claims, you must pay the equivalent point-of-sale discount amount to us.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg sm:text-xl md:text-2xl font-black text-[#1B74BB] border-b border-slate-200 pb-2">
            4. Warranty & Guarantee Policy
          </h2>
          <p className="text-xs sm:text-sm md:text-base font-medium">
            SolEarth systems are built to perform under extreme Australian summer conditions. We stand by our work with:
          </p>
          <ul className="list-disc pl-6 text-xs sm:text-sm md:text-base font-medium space-y-2">
            <li>A comprehensive <strong>10-Year Workmanship Warranty</strong> covering all structural framing, wiring, and panel alignment components.</li>
            <li>Pass-through manufacturer warranties on Tier-1 accredited hardware (e.g. 25 years on Jinko panels, 5-10 years on SAJ/GoodWe inverters).</li>
            <li>Guarantees that meet all statutory customer rights under the Australian Consumer Law (ACL).</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg sm:text-xl md:text-2xl font-black text-[#1B74BB] border-b border-slate-200 pb-2">
            5. Payment Terms & Ownership
          </h2>
          <p className="text-xs sm:text-sm md:text-base font-medium">
            A deposit is required to confirm bookings and initiate engineering surveys. Final payment is due immediately upon the day of successful installation and grid-commissioning. All hardware remains the property of SolEarth Energy Pty Ltd until full invoice settlement is completed.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg sm:text-xl md:text-2xl font-black text-[#1B74BB] border-b border-slate-200 pb-2">
            6. Inquiries and Legal Address
          </h2>
          <p className="text-xs sm:text-sm md:text-base font-medium">
            For questions about our installation terms, billing cycles, or CEC compliance policies, please reach out to our administration desk:
          </p>
          <div className="mt-4 p-4 sm:p-5 bg-slate-50 rounded-xl space-y-3 font-semibold text-xs md:text-sm text-slate-800">
            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-[#FCC200] shrink-0 mt-0.5" />
              <span>SolEarth Energy HQ, Suite 3.01, 45 Clarence Street, Sydney NSW 2000</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-[#FCC200] shrink-0" />
              <span>1300 111 111</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-[#FCC200] shrink-0" />
              <a href="mailto:admin@solearth.com.au" className="hover:underline text-[#1B74BB]">admin@solearth.com.au</a>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
