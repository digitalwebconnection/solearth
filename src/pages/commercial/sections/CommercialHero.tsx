import React, { useState } from 'react'
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      toast.success('Our commercial engineering team will call you back within 1 business day.')
      setFormData({
        businessName: '',
        contactPerson: '',
        email: '',
        phone: '',
        address: '',
        bill: 'Under $1,500',
      })
    }, 1500)
  }

  return (
    <div className="relative bg-[#004093] text-white pt-28 pb-16 overflow-hidden">
      {/* Background Graphic overlay */}
      <div className="absolute inset-0 bg-cover bg-center opacity-10 mix-blend-overlay" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=1200")' }}></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Side: Commercial Bullet Details */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FE9900]/25 border border-[#FE9900]/40 rounded-full text-xs font-black uppercase tracking-wider text-[#FE9900]">
            <Building2 className="w-3.5 h-3.5" />
            <span>Commercial Energy Solutions</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black font-serif leading-tight">
            {heroTitle}
          </h1>

          <p className="text-base md:text-lg text-slate-200 font-semibold leading-relaxed max-w-2xl">
            {tagline}
          </p>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
              <span className="block text-[10px] text-[#FE9900] font-black uppercase tracking-wider">Annual ROI Estimate</span>
              <span className="text-xl md:text-2xl font-black block mt-1">{savings.replace("Save up to ", "").split(" /")[0]}</span>
              <span className="text-[10px] text-slate-300 font-bold block mt-0.5">Offset operational expenses</span>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
              <span className="block text-[10px] text-[#FE9900] font-black uppercase tracking-wider">System Category</span>
              <span className="text-xl md:text-2xl font-black block mt-1">Tier 1 Commercial</span>
              <span className="text-[10px] text-slate-300 font-bold block mt-0.5">Clean Energy Council approved</span>
            </div>
          </div>

          {/* Bullet Points */}
          <div className="space-y-3 pt-2 text-xs md:text-sm font-semibold text-slate-100">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#FE9900]" />
              <span>Full business tax write-off eligibility</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#FE9900]" />
              <span>Grid connection applications and pre-approvals handled</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#FE9900]" />
              <span>Intelligent three-phase commercial inverters with active cooling</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#FE9900]" />
              <span>Zero business downtime during electrical installation</span>
            </div>
          </div>
        </div>

        {/* Right Side: Lead Capture Form */}
        <div className="lg:col-span-5 bg-white rounded-2xl p-6 md:p-8 text-slate-800 shadow-2xl border border-slate-100 relative">
          <div className="absolute top-0 right-8 -translate-y-1/2 bg-[#004093] text-white text-[10px] font-black px-3.5 py-1.5 rounded-full uppercase tracking-wider shadow-lg">
            Commercial
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-black text-[#004093] font-serif">
              Request Commercial Proposal
            </h3>
            <p className="text-xs text-slate-500 font-semibold mt-1">
              Custom engineering appraisal and site financial payback analysis.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-[11px] font-black text-slate-500 uppercase tracking-wider mb-1.5">
                Company Name
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Solar Logistics PTY LTD"
                value={formData.businessName}
                onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#004093]/20 focus:border-[#004093] transition text-sm font-semibold"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-black text-slate-500 uppercase tracking-wider mb-1.5">
                  Contact Person
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Sarah Connor"
                  value={formData.contactPerson}
                  onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#004093]/20 focus:border-[#004093] transition text-sm font-semibold"
                />
              </div>

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
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#004093]/20 focus:border-[#004093] transition text-sm font-semibold"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2">
                <label className="block text-[11px] font-black text-slate-500 uppercase tracking-wider mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="e.g. finance@business.com.au"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#004093]/20 focus:border-[#004093] transition text-sm font-semibold"
                />
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-black text-slate-500 uppercase tracking-wider mb-1.5">
                Installation Address
              </label>
              <input
                type="text"
                required
                placeholder="e.g. 45 Clarence Street, Sydney"
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#004093]/20 focus:border-[#004093] transition text-sm font-semibold"
              />
            </div>

            <div>
              <label className="block text-[11px] font-black text-slate-500 uppercase tracking-wider mb-1.5">
                Quarterly Electricity Spend
              </label>
              <select
                value={formData.bill}
                onChange={(e) => setFormData({ ...formData, bill: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#004093]/20 focus:border-[#004093] transition text-sm font-semibold"
              >
                <option value="Under $1,500">Under $1,500</option>
                <option value="$1,500 - $3,000">$1,500 - $3,000</option>
                <option value="$3,000 - $5,000">$3,000 - $5,000</option>
                <option value="$5,000+">$5,000+</option>
              </select>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#004093] hover:bg-[#FE9900] disabled:bg-slate-300 text-white font-black py-3 rounded-xl shadow-lg transition-colors duration-300 flex items-center justify-center gap-2 text-sm uppercase tracking-wider mt-2"
            >
              {loading ? (
                <span>Generating Proposal...</span>
              ) : (
                <>
                  <ShieldCheck className="w-4 h-4" />
                  <span>Submit Application</span>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
