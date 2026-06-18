import { Shield, Mail, Phone, MapPin } from 'lucide-react'

export default function PrivacyPolicy() {
  return (
    <div className="bg-slate-50 min-h-screen pb-20 font-serif">
      {/* Policy Hero */}
      <div className="bg-linear-to-br from-[#1B74BB] to-[#1B74BB] text-white pt-36 pb-24 px-4 text-center">
        <div className="max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center justify-center p-3 bg-white/10 rounded-full mb-2">
            <Shield className="w-8 h-8 text-[#FCC200]" />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight font-serif">Privacy Policy</h1>
          <p className="text-xs sm:text-sm md:text-base font-semibold text-slate-200">
            Last Updated: June 16, 2026 • SolEarth Energy Pty Ltd
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-4 sm:mx-6 md:mx-auto -mt-10 bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-150 p-5 sm:p-8 md:p-12 font-sans text-slate-700 space-y-8 leading-relaxed">
        <section className="space-y-3">
          <h2 className="text-lg sm:text-xl md:text-2xl font-black text-[#1B74BB] border-b border-slate-200 pb-2">
            1. Introduction
          </h2>
          <p className="text-xs sm:text-sm md:text-base font-medium">
            At SolEarth Energy Pty Ltd ("we", "us", "our"), we value your privacy and are committed to protecting your personal information. This Privacy Policy details how we collect, use, disclose, and safeguard your data when you visit our website, engage our services, or interact with our teams in New South Wales (NSW) and Queensland (QLD).
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg sm:text-xl md:text-2xl font-black text-[#1B74BB] border-b border-slate-200 pb-2">
            2. Personal Information We Collect
          </h2>
          <p className="text-xs sm:text-sm md:text-base font-medium">
            To provide high-efficiency solar panel installations, CEC assessments, and battery storage services, we collect information including:
          </p>
          <ul className="list-disc pl-6 text-xs sm:text-sm md:text-base font-medium space-y-2">
            <li>Contact details (name, email address, phone number, and physical address).</li>
            <li>Property details relevant to solar engineering (roof type, orientation, shading, and electricity connection data).</li>
            <li>Energy consumption profiles and electricity utility bills.</li>
            <li>Financial or billing information for invoicing and processing STC government solar rebates.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg sm:text-xl md:text-2xl font-black text-[#1B74BB] border-b border-slate-200 pb-2">
            3. How We Use Your Information
          </h2>
          <p className="text-xs sm:text-sm md:text-base font-medium">
            We use your collected personal information strictly to deliver, monitor, and optimize our solar solutions:
          </p>
          <ul className="list-disc pl-6 text-xs sm:text-sm md:text-base font-medium space-y-2">
            <li>Designing, quoting, and installing custom solar PV systems and smart EV chargers.</li>
            <li>Processing Clean Energy Council (CEC) documentation and Small-scale Technology Certificates (STCs).</li>
            <li>Communicating system updates, maintenance schedules, and responding to inquiries.</li>
            <li>Improving our website experience, customer service, and promotional campaigns.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg sm:text-xl md:text-2xl font-black text-[#1B74BB] border-b border-slate-200 pb-2">
            4. Information Disclosure & Security
          </h2>
          <p className="text-xs sm:text-sm md:text-base font-medium">
            We do not sell or rent your personal information to third parties. We may share necessary details with authorized network installers, engineering partners, and regulatory bodies (such as the Clean Energy Regulator) solely to commission your system and apply eligible government rebates. All data is protected with secure server protocols and limited employee access controls.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg sm:text-xl md:text-2xl font-black text-[#1B74BB] border-b border-slate-200 pb-2">
            5. Cookies and Web Analytics
          </h2>
          <p className="text-xs sm:text-sm md:text-base font-medium">
            Our site utilizes cookies and web analytics tools to measure traffic trends and performance. You can choose to disable cookies through your browser settings; however, doing so may affect your ability to use certain features on our site.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg sm:text-xl md:text-2xl font-black text-[#1B74BB] border-b border-slate-200 pb-2">
            6. Contacting Our Privacy Officer
          </h2>
          <p className="text-xs sm:text-sm md:text-base font-medium">
            If you have questions about this policy, want to access or correct your personal data, or wish to file a concern, please contact our team:
          </p>
          <div className="mt-4 p-4 sm:p-5 bg-slate-50 rounded-xl space-y-3 font-semibold text-xs md:text-sm text-slate-800">
            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-[#FCC200] shrink-0 mt-0.5" />
              <span>SolEarth Energy Privacy Desk, Suite 3.01, 45 Clarence Street, Sydney NSW 2000</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-[#FCC200] shrink-0" />
              <span>1300 111 111</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-[#FCC200] shrink-0" />
              <a href="mailto:privacy@solearth.com.au" className="hover:underline text-[#1B74BB]">privacy@solearth.com.au</a>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
