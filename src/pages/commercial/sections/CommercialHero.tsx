import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2, ShieldCheck, Building2 } from 'lucide-react'
import { useToast } from '../../ui/Toast'

interface CommercialHeroProps {
  tagline: string
  heroTitle: string
  savings: string
}

export default function CommercialHero({
  tagline,
  heroTitle,
  savings,
}: CommercialHeroProps) {
  const toast = useToast()
  const [formData, setFormData] = useState({
    businessName: '',
    contactPerson: '',
    email: '',
    phone: '',
    address: '',
    bill: 'Under $1,500',
  })
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      const form = new FormData()
      form.append("access_key", "a7519716-2587-431c-8bdb-7bcfce010f90")
      form.append("businessName", formData.businessName)
      form.append("contactPerson", formData.contactPerson)
      form.append("email", formData.email)
      form.append("phone", formData.phone)
      form.append("address", formData.address)
      form.append("bill", formData.bill)
      form.append("subject", `Commercial Proposal Request from ${formData.businessName}`)

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: form
      })
      const data = await response.json()
      if (data.success) {
        toast.success('Our commercial engineering team will call you back within 1 business day.')
        setFormData({
          businessName: '',
          contactPerson: '',
          email: '',
          phone: '',
          address: '',
          bill: 'Under $1,500',
        })
      } else {
        toast.error('Something went wrong. Please try again.')
      }
    } catch (err) {
      toast.error('Network error. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="relative text-white pt-28 sm:pt-32 pb-12 sm:pb-20 overflow-hidden bg-[#071329] min-h-[90vh] flex items-center">
      {/* Background Graphic overlay with Ken Burns entry zoom */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.img
          src="/images/solar/solar-residential-house.jpg"
          alt="Commercial Solar Panels"
          initial={{ scale: 1.15, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.22 }}
          transition={{ duration: 2.2, ease: 'easeOut' }}
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        {/* Glowing Ambient Aura Effects */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-[#1B74BB]/25 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-[#FCC200]/12 blur-[100px] pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full">
        {/* Left Side: Commercial Bullet Details */}
        <div className="lg:col-span-7 space-y-5">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#FCC200]/20 border border-[#FCC200]/40 rounded-full text-xs font-black uppercase tracking-wider text-[#FCC200]"
          >
            <Building2 className="w-3.5 h-3.5 animate-pulse" />
            <span>Commercial Energy Solutions</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black font-serif leading-tight drop-shadow-lg text-white"
          >
            {heroTitle}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-sm sm:text-base md:text-lg text-slate-200 font-semibold leading-relaxed max-w-2xl"
          >
            {tagline}
          </motion.p>

          {/* Quick Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            <motion.div
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 rounded-2xl p-4 sm:p-5 transition-colors"
            >
              <span className="block text-[10px] text-[#FCC200] font-black uppercase tracking-wider">Annual ROI Estimate</span>
              <span className="text-xl md:text-2xl font-black block mt-1">{savings.replace("Save up to ", "").split(" /")[0]}</span>
              <span className="text-[10px] text-slate-350 font-bold block mt-0.5">Offset operational expenses</span>
            </motion.div>

            <motion.div
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 rounded-2xl p-4 sm:p-5 transition-colors"
            >
              <span className="block text-[10px] text-[#FCC200] font-black uppercase tracking-wider">System Category</span>
              <span className="text-xl md:text-2xl font-black block mt-1">Tier 1 Commercial</span>
              <span className="text-[10px] text-slate-350 font-bold block mt-0.5">Clean Energy Council approved</span>
            </motion.div>
          </motion.div>

          {/* Bullet Points */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="space-y-3 pt-2 text-xs md:text-sm font-semibold text-slate-100"
          >
            {[
              "Full business tax write-off eligibility",
              "Grid connection applications and pre-approvals handled",
              "Intelligent three-phase commercial inverters with active cooling",
              "Zero business downtime during electrical installation"
            ].map((bullet, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + idx * 0.1, duration: 0.4 }}
                className="flex items-center gap-2.5"
              >
                <CheckCircle2 className="w-4.5 h-4.5 text-[#FCC200] shrink-0" />
                <span>{bullet}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Right Side: Lead Capture Form */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="lg:col-span-5 bg-white/10 backdrop-blur-md rounded-2xl p-5 sm:p-8 text-white shadow-2xl border border-white/20 relative overflow-hidden"
        >
          {/* Internal gradients inside card */}
          <div className="absolute -top-12 -right-12 w-36 h-36 rounded-full bg-[#FCC200]/15 blur-2xl pointer-events-none" />
          <div className="absolute -bottom-12 -left-12 w-36 h-36 rounded-full bg-[#1B74BB]/35 blur-2xl pointer-events-none" />

          <div className="absolute top-0 right-0 bg-[#FCC200] text-black text-[10px] font-black px-3.5 py-1.5 rounded-tr-lg uppercase tracking-wider shadow-lg">
            Commercial Proposal
          </div>

          <div className="mb-6 relative z-10">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-serif font-semibold text-white tracking-wide">
              Request Appraisal
            </h3>
            <p className="text-xs text-slate-350 font-semibold mt-1">
              Custom engineering appraisal and site financial payback analysis.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
            <div>
              <label className="block text-[11px] font-black text-[#FCC200] uppercase tracking-wider mb-1.5">
                Business Name
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Acme Corporation Pty Ltd"
                value={formData.businessName}
                onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-white/20 bg-white/5 focus:bg-white/10 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#FCC200]/50 focus:border-[#FCC200] transition-all duration-300 text-sm font-semibold"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-black text-[#FCC200] uppercase tracking-wider mb-1.5">
                  Contact Person
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Sarah Connor"
                  value={formData.contactPerson}
                  onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-white/20 bg-white/5 focus:bg-white/10 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#FCC200]/50 focus:border-[#FCC200] transition-all duration-300 text-sm font-semibold"
                />
              </div>

              <div>
                <label className="block text-[11px] font-black text-[#FCC200] uppercase tracking-wider mb-1.5">
                  Phone Number
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. 0400 000 000"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-white/20 bg-white/5 focus:bg-white/10 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#FCC200]/50 focus:border-[#FCC200] transition-all duration-300 text-sm font-semibold"
                />
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-black text-[#FCC200] uppercase tracking-wider mb-1.5">
                Email Address
              </label>
              <input
                type="email"
                required
                placeholder="e.g. finance@business.com.au"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-white/20 bg-white/5 focus:bg-white/10 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#FCC200]/50 focus:border-[#FCC200] transition-all duration-300 text-sm font-semibold"
              />
            </div>

            <div>
              <label className="block text-[11px] font-black text-[#FCC200] uppercase tracking-wider mb-1.5">
                Installation Address
              </label>
              <input
                type="text"
                required
                placeholder="e.g. 45 Clarence Street, Sydney"
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-white/20 bg-white/5 focus:bg-white/10 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#FCC200]/50 focus:border-[#FCC200] transition-all duration-300 text-sm font-semibold"
              />
            </div>

            <div>
              <label className="block text-[11px] font-black text-[#FCC200] uppercase tracking-wider mb-1.5">
                Quarterly Electricity Spend
              </label>
              <select
                value={formData.bill}
                onChange={(e) => setFormData({ ...formData, bill: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-white/20 bg-white/5 focus:bg-white/10 text-white focus:outline-none focus:ring-2 focus:ring-[#FCC200]/50 focus:border-[#FCC200] transition-all duration-300 text-sm font-semibold [&>option]:text-slate-800"
              >
                <option value="Under $1,500">Under $1,500</option>
                <option value="$1,500 - $3,000">$1,500 - $3,000</option>
                <option value="$3,000 - $5,000">$3,000 - $5,000</option>
                <option value="$5,000+">$5,000+</option>
              </select>
            </div>

            <motion.button
              type="submit"
              disabled={loading}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-[#FCC200] hover:bg-[#ffaa22] disabled:bg-slate-500 text-black font-black py-3 rounded-xl shadow-lg transition-colors duration-300 flex items-center justify-center gap-2 text-sm uppercase tracking-wider mt-4 cursor-pointer"
            >
              {loading ? (
                <span>Generating Proposal...</span>
              ) : (
                <>
                  <ShieldCheck className="w-4 h-4" />
                  <span>Submit Application</span>
                </>
              )}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  )
}
