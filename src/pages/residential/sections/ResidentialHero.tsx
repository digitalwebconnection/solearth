import React, { useState } from 'react'
import { CheckCircle2, ShieldCheck, Zap } from 'lucide-react'
import { useToast } from '../../ui/Toast'

interface ResidentialHeroProps {
  title: string
  tagline: string
  heroBanner: string
  heroBannerSub: string
  savings: string
  backgroundImage: string
}

export default function ResidentialHero({
  title,
  tagline,
  heroBanner,
  heroBannerSub,
  savings,
  backgroundImage,
}: ResidentialHeroProps) {
  const toast = useToast()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    bill: 'Under $500',
  })
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      const form = new FormData()
      form.append("access_key", "a7519716-2587-431c-8bdb-7bcfce010f90")
      form.append("name", formData.name)
      form.append("email", formData.email)
      form.append("phone", formData.phone)
      form.append("address", formData.address)
      form.append("bill", formData.bill)
      form.append("subject", "Free Residential Solar Assessment Request")

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: form
      })
      const data = await response.json()
      if (data.success) {
        toast.success('Thank you. Our solar energy consultants will contact you shortly.')
        setFormData({
          name: '',
          email: '',
          phone: '',
          address: '',
          bill: 'Under $500',
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
    <div className="relative text-white pt-28 pb-16 md:pt-32 md:pb-24 overflow-hidden min-h-[90vh] flex items-center">
      {/* Background Graphic overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-700 ease-in-out scale-105"
        style={{ backgroundImage: `url("${backgroundImage}")` }}
      ></div>
      {/* Dark premium gradient masking - responsive direction for mobile vs desktop */}
      <div className="absolute inset-0 bg-linear-to-b lg:bg-linear-to-r from-slate-950 via-slate-950/90 lg:via-slate-950/80 to-slate-950/70 lg:to-transparent z-0"></div>
      <div className="absolute inset-0 bg-linear-to-t from-slate-950/60 via-transparent to-transparent z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full">
        {/* Left Side: EOFY banner / Promotion */}
        <div className="lg:col-span-7 space-y-6 md:space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FCC200]/20 backdrop-blur-md border border-[#FCC200]/40 rounded-full text-[10px] sm:text-xs font-black uppercase tracking-wider text-[#FCC200] self-start">
            <Zap className="w-3.5 h-3.5 fill-current" />
            <span>Premium Residential Offer</span>
          </div>

          <div className="space-y-3 sm:space-y-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-black font-serif leading-tight tracking-tight drop-shadow-md">
              {title}
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-slate-100 font-medium leading-relaxed max-w-2xl drop-shadow-sm">
              {tagline}
            </p>
          </div>

          {/* EOFY Banner Graphic Card */}
          <div className="bg-linear-to-br from-[#FCC200] to-[#E28000] rounded-2xl p-5 sm:p-6 md:p-8 shadow-2xl relative overflow-hidden border border-white/10 group max-w-2xl">
            <div className="absolute -right-10 -bottom-10 w-44 h-44 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
            <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-5 sm:gap-6">
              <div className="space-y-2">
                <span className="bg-white text-[#E28000] text-[9px] sm:text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full">
                  Limited Time Promotion
                </span>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-serif font-semibold text-white leading-tight">
                  {heroBanner}
                </h3>
                <p className="text-[11px] sm:text-xs md:text-sm text-white/90 font-medium">
                  {heroBannerSub}
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-md border border-white/20 px-5 py-3 sm:px-6 sm:py-4 rounded-xl text-center shrink-0">
                <span className="block text-[9px] sm:text-[10px] font-black uppercase tracking-wider opacity-85 text-slate-100">Estimated Output</span>
                <span className="text-xl sm:text-2xl font-black block mt-0.5 text-white">{savings.replace("Save up to ", "").split(" /")[0]}</span>
                <span className="text-[9px] sm:text-[10px] font-extrabold block text-white/95">System Capacity Gain</span>
              </div>
            </div>
          </div>

          {/* Highlights Checklist */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs sm:text-sm font-semibold text-slate-200">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4.5 h-4.5 text-[#FCC200] shrink-0" />
              <span>Clean Energy Council Approved Retailer</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4.5 h-4.5 text-[#FCC200] shrink-0" />
              <span>25-Year Performance Warranty</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4.5 h-4.5 text-[#FCC200] shrink-0" />
              <span>10-Year Local Support & Maintenance</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4.5 h-4.5 text-[#FCC200] shrink-0" />
              <span>NSW & QLD Certified Engineers</span>
            </div>
          </div>
        </div>
        {/* Right Side: Lead Capture Form */}
        <div className="lg:col-span-5 bg-white/95 backdrop-blur-md rounded-2xl p-5 sm:p-6 md:p-8 text-slate-800 shadow-2xl border border-white/20 relative">
          <div className="absolute top-0 right-0 bg-[#FCC200] text-white text-[9px] sm:text-[10px] font-black px-3.5 py-1.5 rounded-tr-2xl uppercase tracking-wider shadow-lg">
            Quick Quote
          </div>

          <div className="mb-5">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-serif font-semibold text-[#1B74BB]">
              Get A Free Solar Assessment
            </h3>
            <p className="text-xs text-slate-900 font-semibold mt-1">
              Find out how much you can save on electricity bills.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-3.5">
            <div>
              <label className="block text-[10px] sm:text-[11px] font-black text-slate-900 uppercase tracking-wider mb-1">
                Full Name
              </label>
              <input
                type="text"
                required
                placeholder="e.g. John Citizen"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3.5 py-2 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#1B74BB]/20 focus:border-[#1B74BB] transition text-xs sm:text-sm font-semibold bg-white"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label className="block text-[10px] sm:text-[11px] font-black text-slate-900 uppercase tracking-wider mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. 0400 000 000"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#1B74BB]/20 focus:border-[#1B74BB] transition text-xs sm:text-sm font-semibold bg-white"
                />
              </div>

              <div>
                <label className="block text-[10px] sm:text-[11px] font-black text-slate-900 uppercase tracking-wider mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="e.g. name@mail.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#1B74BB]/20 focus:border-[#1B74BB] transition text-xs sm:text-sm font-semibold bg-white"
                />
              </div>
            </div>

            <div>
              <label className="block text-[10px] sm:text-[11px] font-black text-slate-900 uppercase tracking-wider mb-1">
                Property Address
              </label>
              <input
                type="text"
                required
                placeholder="e.g. 123 Street Name, NSW"
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                className="w-full px-3.5 py-2 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#1B74BB]/20 focus:border-[#1B74BB] transition text-xs sm:text-sm font-semibold bg-white"
              />
            </div>

            <div>
              <label className="block text-[10px] sm:text-[11px] font-black text-slate-900 uppercase tracking-wider mb-1">
                Quarterly Electricity Bill
              </label>
              <select
                value={formData.bill}
                onChange={(e) => setFormData({ ...formData, bill: e.target.value })}
                className="w-full px-3.5 py-2 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#1B74BB]/20 focus:border-[#1B74BB] transition text-xs sm:text-sm font-semibold"
              >
                <option value="Under $500">Under $500</option>
                <option value="$500 - $800">$500 - $800</option>
                <option value="$800 - $1,200">$800 - $1,200</option>
                <option value="$1,200+">$1,200+</option>
              </select>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#1B74BB] hover:bg-[#FCC200] disabled:bg-slate-300 text-white font-black py-3 rounded-xl shadow-lg transition-colors duration-300 flex items-center justify-center gap-2 text-xs sm:text-sm uppercase tracking-wider mt-2 cursor-pointer border-none"
            >
              {loading ? (
                <span>Processing...</span>
              ) : (
                <>
                  <ShieldCheck className="w-4 h-4" />
                  <span>Request Assessment</span>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
