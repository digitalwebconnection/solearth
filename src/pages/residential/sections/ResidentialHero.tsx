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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      toast.success('Thank you. Our solar energy consultants will contact you shortly.')
      setFormData({
        name: '',
        email: '',
        phone: '',
        address: '',
        bill: 'Under $500',
      })
    }, 1500)
  }

  return (
    <div className="relative text-white pt-32 pb-24 overflow-hidden min-h-[90vh] flex items-center">
      {/* Background Graphic overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-all duration-700 ease-in-out scale-105" 
        style={{ backgroundImage: `url("${backgroundImage}")` }}
      ></div>
      {/* Dark premium gradient masking */}
      <div className="absolute inset-0 bg-linear-to-r from-slate-950 via-slate-950/80 to-transparent z-0"></div>
      <div className="absolute inset-0 bg-linear-to-t from-slate-950/40 via-transparent to-transparent z-0"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
        {/* Left Side: EOFY banner / Promotion */}
        <div className="lg:col-span-7 space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FE9900]/20 backdrop-blur-md border border-[#FE9900]/40 rounded-full text-xs font-black uppercase tracking-wider text-[#FE9900]">
            <Zap className="w-3.5 h-3.5 fill-current" />
            <span>Premium Residential Offer</span>
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black font-serif leading-tight tracking-tight drop-shadow-md">
              {title}
            </h1>
            <p className="text-base md:text-lg text-slate-300 font-semibold leading-relaxed max-w-2xl drop-shadow-sm">
              {tagline}
            </p>
          </div>

          {/* EOFY Banner Graphic Card */}
          <div className="bg-linear-to-br from-[#FE9900] to-[#E28000] rounded-2xl p-6 md:p-8 shadow-2xl relative overflow-hidden border border-white/10 group max-w-2xl">
            <div className="absolute -right-10 -bottom-10 w-44 h-44 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
            <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div className="space-y-2">
                <span className="bg-white text-[#E28000] text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full">
                  Limited Time Promotion
                </span>
                <h3 className="text-2xl md:text-3xl font-serif font-semibold text-white">
                  {heroBanner}
                </h3>
                <p className="text-xs md:text-sm text-white/90 font-medium">
                  {heroBannerSub}
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-md border border-white/20 px-6 py-4 rounded-xl text-center shrink-0">
                <span className="block text-[10px] font-black uppercase tracking-wider opacity-85 text-slate-100">Estimated Output</span>
                <span className="text-2xl font-black block mt-0.5 text-white">{savings.replace("Save up to ", "").split(" /")[0]}</span>
                <span className="text-[10px] font-extrabold block text-white/95">System Capacity Gain</span>
              </div>
            </div>
          </div>

          {/* Highlights Checklist */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2 text-xs md:text-sm font-semibold text-slate-200">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#FE9900]" />
              <span>Clean Energy Council Approved Retailer</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#FE9900]" />
              <span>25-Year Performance Warranty</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#FE9900]" />
              <span>10-Year Local Support & Maintenance</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#FE9900]" />
              <span>NSW & QLD Certified Engineers</span>
            </div>
          </div>
        </div>

        {/* Right Side: Lead Capture Form */}
        <div className="lg:col-span-5 bg-white/90 backdrop-blur-md rounded-2xl p-6 md:p-8 text-slate-800 shadow-2xl border border-white/20 relative">
          <div className="absolute top-0 right-0  bg-[#FE9900] text-white text-[10px] font-black px-3.5 py-1.5 rounded-tr-2xl uppercase tracking-wider shadow-lg">
            Quick Quote
          </div>

          <div className="mb-6">
            <h3 className="text-2xl md:text-3xl font-serif font-semibold text-[#004093]">
              Get A Free Solar Assessment
            </h3>
            <p className="text-xs text-slate-500 font-semibold mt-1">
              Find out how much you can save on electricity bills.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-[11px] font-black text-slate-500 uppercase tracking-wider mb-1.5">
                Full Name
              </label>
              <input
                type="text"
                required
                placeholder="e.g. John Citizen"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#004093]/20 focus:border-[#004093] transition text-sm font-semibold bg-white/85"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-black text-slate-500 uppercase tracking-wider mb-1.5">
                  Phone Number
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. 0400 000 000"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#004093]/20 focus:border-[#004093] transition text-sm font-semibold bg-white/85"
                />
              </div>

              <div>
                <label className="block text-[11px] font-black text-slate-500 uppercase tracking-wider mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="e.g. name@mail.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#004093]/20 focus:border-[#004093] transition text-sm font-semibold bg-white/85"
                />
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-black text-slate-500 uppercase tracking-wider mb-1.5">
                Property Address
              </label>
              <input
                type="text"
                required
                placeholder="e.g. 123 Street Name, NSW"
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#004093]/20 focus:border-[#004093] transition text-sm font-semibold bg-white/85"
              />
            </div>

            <div>
              <label className="block text-[11px] font-black text-slate-500 uppercase tracking-wider mb-1.5">
                Quarterly Electricity Bill
              </label>
              <select
                value={formData.bill}
                onChange={(e) => setFormData({ ...formData, bill: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white/85 focus:outline-none focus:ring-2 focus:ring-[#004093]/20 focus:border-[#004093] transition text-sm font-semibold"
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
              className="w-full bg-[#004093] hover:bg-[#FE9900] disabled:bg-slate-300 text-white font-black py-3 rounded-xl shadow-lg transition-colors duration-300 flex items-center justify-center gap-2 text-sm uppercase tracking-wider mt-2"
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
