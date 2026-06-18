import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, Mail, MapPin, Send, CheckCircle2 } from 'lucide-react'
import { useToast } from '../ui/Toast'

interface ContactFormSectionProps {
  selectedSubject?: string;
  setSelectedSubject?: (val: string) => void;
}

export default function ContactFormSection({ selectedSubject, setSelectedSubject }: ContactFormSectionProps) {
  const toast = useToast()
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: selectedSubject || 'Residential Solar',
    message: '',
  })

  useEffect(() => {
    if (selectedSubject) {
      setFormData((prev) => ({ ...prev, subject: selectedSubject }))
    }
  }, [selectedSubject])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (name === 'subject' && setSelectedSubject) {
      setSelectedSubject(value)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate API call
    setTimeout(() => {
      setFormSubmitted(true)
      toast.success("Message sent successfully! Our team will contact you shortly.")
    }, 850)
  }

  return (
    <section id="contact" className="py-12 md:py-20 bg-slate-50 relative overflow-hidden">
      {/* Background patterns */}
      <div
        className="absolute inset-0 opacity-[0.2] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#1B74BB 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-0 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 items-start">

          {/* Left Column: Contact info & Coverage details */}
          <div className="lg:col-span-5 space-y-6 md:space-y-8 text-left">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#1B74BB]/10 border border-[#1B74BB]/20 text-[#1B74BB] text-xs font-black tracking-widest uppercase px-4 py-2 rounded-full mb-4">
                <span className="w-2 h-2 bg-[#FCC200] rounded-full animate-pulse" />
                Connect With Us
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-4">
                How Can We Help You Today?
              </h2>
              <p className="text-xs sm:text-sm md:text-base leading-relaxed text-slate-800 font-semibold">
                Reach out to schedule a site inspection, get a free solar consultation, request support, or ask about solar battery eligibility. Our engineers are ready to help.
              </p>
            </div>

            {/* Info Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
              {/* Card 1: Phone */}
              <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-xs flex items-start gap-4 hover:shadow-md transition-shadow">
                <div className="p-3 bg-[#FCC200]/10 rounded-xl text-[#FCC200] shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-slate-900 text-[10px] font-black uppercase tracking-wider mb-1">Call Hotline</h4>
                  <a href="tel:0435359431" className="text-slate-800 font-extrabold text-sm hover:text-[#1B74BB] transition">
                    0435 359 431
                  </a>
                  <p className="text-slate-900 text-xs mt-0.5 font-semibold">Call us Mon–Fri, closes 5pm</p>
                </div>
              </div>

              {/* Card 2: Email */}
              <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-xs flex items-start gap-4 hover:shadow-md transition-shadow">
                <div className="p-3 bg-blue-500/10 rounded-xl text-blue-500 shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-slate-900 text-[10px] font-black uppercase tracking-wider mb-1">Send Email</h4>
                  <a href="mailto:info@solearth.com.au" className="text-slate-800 font-extrabold text-sm hover:text-[#1B74BB] transition">
                    info@solearth.com.au
                  </a>
                  <p className="text-slate-900 text-xs mt-0.5 font-semibold">Response within 24 hours</p>
                </div>
              </div>

              {/* Card 3: Address */}
              <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-xs flex items-start gap-4 hover:shadow-md transition-shadow">
                <div className="p-3 bg-emerald-500/10 rounded-xl text-emerald-500 shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-slate-900 text-[10px] font-black uppercase tracking-wider mb-1">Head Office — Norwest</h4>
                  <p className="text-slate-800 font-extrabold text-sm leading-tight">
                    Suite 20/1 Maitland Pl
                  </p>
                  <p className="text-slate-600 text-xs mt-0.5 font-semibold">Norwest NSW 2153, Australia</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Modern Contact Form Card */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-8 md:p-12 shadow-xl shadow-slate-200/80 relative overflow-hidden"
            >
              {/* Top accent bar */}
              <div className="absolute top-0 left-0 right-0 h-2 bg-linear-to-r from-[#1B74BB] to-[#FCC200]" />

              <AnimatePresence mode="wait">
                {!formSubmitted ? (
                  <motion.form
                    key="contact-form"
                    onSubmit={handleSubmit}
                    className="space-y-6 text-left"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-black text-slate-900 uppercase tracking-wider">First Name *</label>
                        <input
                          type="text"
                          name="firstName"
                          required
                          value={formData.firstName}
                          onChange={handleInputChange}
                          placeholder="John"
                          className="w-full px-5 py-3.5 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:border-[#1B74BB] focus:ring-4 focus:ring-[#1B74BB]/5 outline-none transition-all duration-200 text-slate-800 font-semibold text-sm placeholder:text-slate-400"
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-black text-slate-900 uppercase tracking-wider">Last Name *</label>
                        <input
                          type="text"
                          name="lastName"
                          required
                          value={formData.lastName}
                          onChange={handleInputChange}
                          placeholder="Doe"
                          className="w-full px-5 py-3.5 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:border-[#1B74BB] focus:ring-4 focus:ring-[#1B74BB]/5 outline-none transition-all duration-200 text-slate-800 font-semibold text-sm placeholder:text-slate-400"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-black text-slate-900 uppercase tracking-wider">Email Address *</label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="johndoe@example.com"
                          className="w-full px-5 py-3.5 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:border-[#1B74BB] focus:ring-4 focus:ring-[#1B74BB]/5 outline-none transition-all duration-200 text-slate-800 font-semibold text-sm placeholder:text-slate-400"
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-black text-slate-900 uppercase tracking-wider">Contact Number *</label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="0400 000 000"
                          className="w-full px-5 py-3.5 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:border-[#1B74BB] focus:ring-4 focus:ring-[#1B74BB]/5 outline-none transition-all duration-200 text-slate-800 font-semibold text-sm placeholder:text-slate-400"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-black text-slate-900 uppercase tracking-wider">Subject / Area of Interest *</label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full px-5 py-3.5 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:border-[#1B74BB] focus:ring-4 focus:ring-[#1B74BB]/5 outline-none transition-all duration-200 text-slate-700 font-semibold text-sm cursor-pointer"
                      >
                        <option value="Residential Solar">Residential Solar Power</option>
                        <option value="Commercial Solar">Commercial & Industrial Solar</option>
                        <option value="Battery Storage">Solar Battery Storage (Tesla, BYD)</option>
                        <option value="System Upgrade">Upgrade / Expand Existing System</option>
                        <option value="Maintenance">Service, Repair or Maintenance</option>
                        <option value="General">General Inquiry</option>
                      </select>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-black text-slate-900 uppercase tracking-wider">Your Message *</label>
                      <textarea
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us about your property, solar goals, or specific questions..."
                        className="w-full px-5 py-4 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:border-[#1B74BB] focus:ring-4 focus:ring-[#1B74BB]/5 outline-none transition-all duration-200 text-slate-800 font-semibold text-sm resize-none placeholder:text-slate-400"
                      />
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full flex items-center justify-center rounded-xl bg-[#1B74BB] hover:bg-[#003375] transition-colors py-4 px-6 text-white font-extrabold text-sm tracking-wider uppercase gap-2 cursor-pointer shadow-md hover:shadow-lg active:scale-[0.99] border-none"
                      >
                        <span>Send Message</span>
                        <Send className="w-4 h-4" />
                      </button>
                    </div>
                  </motion.form>
                ) : (
                  <motion.div
                    key="contact-success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center text-center py-10"
                  >
                    <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-6 shadow-sm border border-emerald-200">
                      <CheckCircle2 className="w-8 h-8 text-emerald-600" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-3">Message Received!</h3>
                    <p className="text-slate-600 max-w-md mb-8 text-sm leading-relaxed font-semibold">
                      Thank you, <span className="font-semibold text-slate-800">{formData.firstName}</span>. Your inquiry regarding <span className="font-semibold text-slate-800">{formData.subject}</span> has been received. We'll get back to you shortly.
                    </p>
                    <button
                      onClick={() => {
                        setFormSubmitted(false)
                        setFormData({
                          firstName: '',
                          lastName: '',
                          email: '',
                          phone: '',
                          subject: 'Residential Solar',
                          message: '',
                        })
                      }}
                      className="px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-extrabold tracking-wider uppercase rounded-xl transition-all cursor-pointer border-none"
                    >
                      Submit Another Message
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}
