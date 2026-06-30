import { MessageSquare, Mail, Phone, MapPin } from 'lucide-react'

export default function ComplaintsPolicy() {
  return (
    <div className="bg-slate-50 min-h-screen pb-20 font-serif">
      {/* Policy Hero */}
      <div className="bg-linear-to-br from-[#1B74BB] to-[#1B74BB] text-white pt-36 pb-24 px-4 text-center">
        <div className="max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center justify-center p-3 bg-white/10 rounded-full mb-2">
            <MessageSquare className="w-8 h-8 text-[#FCC200]" />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight font-serif">Complaints Policy</h1>
          <p className="text-xs sm:text-sm md:text-base font-semibold text-slate-200">
            Last Updated: June 16, 2026 • SolEarth Energy Pty Ltd
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-4 sm:mx-6 md:mx-auto -mt-10 bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-150 p-5 sm:p-8 md:p-12 font-sans text-slate-700 space-y-8 leading-relaxed">
        <section className="space-y-3">
          <h2 className="text-lg sm:text-xl md:text-2xl font-black text-[#1B74BB] border-b border-slate-200 pb-2">
            1. Our Commitment to Feedback
          </h2>
          <p className="text-xs sm:text-sm md:text-base font-medium">
            At SolEarth Energy Pty Ltd, we pride ourselves on maintaining exceptional customer satisfaction ratings. We are committed to a transparent, fair, and prompt complaint handling process. If you are dissatisfied with our sales representatives, system design, hardware performance, or the installation process, we want to hear from you.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg sm:text-xl md:text-2xl font-black text-[#1B74BB] border-b border-slate-200 pb-2">
            2. How to Lodge a Complaint
          </h2>
          <p className="text-xs sm:text-sm md:text-base font-medium">
            You can lodge a complaint through any of the following channels:
          </p>
          <ul className="list-disc pl-6 text-xs sm:text-sm md:text-base font-medium space-y-2">
            <li><strong>Email:</strong> Send an email with your project ID and a description of the issue to <a href="mailto:info@solearthenergy.com.au" className="text-[#1B74BB] hover:underline font-bold">info@solearthenergy.com.au</a>.</li>
            <li><strong>Phone:</strong> Call our hotline at <strong>+61 435 359 431</strong> and request to speak with a Customer Service Supervisor.</li>
            <li><strong>Post:</strong> Write to our compliance team at Suite 3.01, 45 Clarence Street, Sydney NSW 2000.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg sm:text-xl md:text-2xl font-black text-[#1B74BB] border-b border-slate-200 pb-2">
            3. Our Complaint Handling Process
          </h2>
          <p className="text-xs sm:text-sm md:text-base font-medium">
            Once a complaint is received, we apply a structured resolution timeline:
          </p>
          <ul className="list-decimal pl-6 text-xs sm:text-sm md:text-base font-medium space-y-2">
            <li><strong>Acknowledgement:</strong> We will acknowledge receipt of your complaint within 24-48 business hours.</li>
            <li><strong>Investigation:</strong> Our compliance team will review your project layout, sensor data, and inverter logs (if connected to network monitoring) and consult the installers.</li>
            <li><strong>Resolution Proposal:</strong> We aim to provide a detailed resolution response (including repair plans, hardware replacements, or compensation if warranted) within 15 business days.</li>
            <li><strong>Escalation:</strong> If you are not satisfied with our proposal, you can request a review by our senior management team or escalate to consumer protection bodies.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg sm:text-xl md:text-2xl font-black text-[#1B74BB] border-b border-slate-200 pb-2">
            4. External Escalation Options
          </h2>
          <p className="text-xs sm:text-sm md:text-base font-medium">
            If we are unable to resolve your complaint to your satisfaction, you may escalate the issue to the following external agencies:
          </p>
          <ul className="list-disc pl-6 text-xs sm:text-sm md:text-base font-medium space-y-2">
            <li><strong>NSW:</strong> NSW Fair Trading (13 32 20) or Energy & Water Ombudsman NSW (EWON).</li>
            <li><strong>QLD:</strong> Office of Fair Trading Queensland (13 74 68) or Energy and Water Ombudsman Queensland (EWOQ).</li>
            <li><strong>Clean Energy Council:</strong> The CEC (for compliance with the Approved Solar Retailer code of conduct).</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg sm:text-xl md:text-2xl font-black text-[#1B74BB] border-b border-slate-200 pb-2">
            5. Complaints Desk Contact
          </h2>
          <div className="mt-4 p-4 sm:p-5 bg-slate-50 rounded-xl space-y-3 font-semibold text-xs md:text-sm text-slate-800">
            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-[#FCC200] shrink-0 mt-0.5" />
              <span>SolEarth Energy Complaints Division, Suite 3.01, 45 Clarence Street, Sydney NSW 2000</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-[#FCC200] shrink-0" />
              <span>+61 435 359 431</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-[#FCC200] shrink-0" />
              <a href="mailto:info@solearthenergy.com.au" className="hover:underline text-[#1B74BB]">info@solearthenergy.com.au</a>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
