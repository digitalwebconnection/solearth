import React, { createContext, useContext, useState, useEffect } from 'react'
import { X, Send, Zap, CheckCircle } from 'lucide-react'
import { useToast } from '../pages/ui/Toast'

interface QuoteModalContextType {
  openQuoteModal: (source?: string) => void
  closeQuoteModal: () => void
  isOpen: boolean
  source: string
}

const QuoteModalContext = createContext<QuoteModalContextType | undefined>(undefined)

export const QuoteModalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [source, setSource] = useState('')
  const toast = useToast()

  const openQuoteModal = (triggerSource?: string) => {
    setSource(triggerSource || 'General Inquiries')
    setIsOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const closeQuoteModal = () => {
    setIsOpen(false)
    document.body.style.overflow = 'unset'
  }

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape' && isOpen) closeQuoteModal() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [isOpen])

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [suburb, setSuburb] = useState('')
  const [systemType, setSystemType] = useState('residential')
  const [billRange, setBillRange] = useState('$200-$400')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const reset = () => { setName(''); setEmail(''); setPhone(''); setSuburb(''); setSystemType('residential'); setBillRange('$200-$400') }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!name.trim() || !email.trim() || !phone.trim()) { toast.error('Please fill in all required fields.'); return }
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false); setIsSuccess(true)
      toast.success('Quote request submitted successfully!')
      setTimeout(() => { setIsSuccess(false); reset(); closeQuoteModal() }, 1500)
    }, 1800)
  }

  // Compact shared styles
  const inp = "w-full min-w-0 bg-[#0d1321] border border-slate-700 focus:border-amber-500 rounded-lg px-3 py-2 text-[13px] text-white placeholder-slate-500 focus:outline-none transition-colors"
  const lbl = "block text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1"

  return (
    <QuoteModalContext.Provider value={{ openQuoteModal, closeQuoteModal, isOpen, source }}>
      {children}

      {isOpen && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px' }}>

          {/* Backdrop */}
          <div onClick={closeQuoteModal}
            style={{ position: 'fixed', inset: 0, zIndex: 0, background: 'rgba(0,0,0,0.82)' }}
            className="backdrop-blur-sm" />

          {/* Panel */}
          <div style={{ position: 'relative', zIndex: 1, width: '100%', maxHeight: 'min(95svh, 680px)' }}
            className="max-w-lg bg-[#070d1a] border border-slate-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden">

            {/* ── HEADER ── */}
            <div className="shrink-0 px-4 pt-3 pb-2.5 border-b border-slate-800">

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-amber-400 animate-pulse shrink-0" />
                  <span className="text-[9px] font-bold text-amber-400 tracking-[0.15em] uppercase">Solar Grid Estimation</span>
                </div>
                <button onClick={closeQuoteModal} aria-label="Close"
                  className="p-1.5 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors cursor-pointer">
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
              <h2 className="text-base font-extrabold text-white mt-1.5 leading-tight">Request a Free Quote</h2>
              <p className="text-[11px] text-slate-400 mt-0.5">Get a tailored solar quote — takes 30 seconds.</p>
            </div>

            {/* ── BODY ── */}
            <div className="flex-1 overflow-y-auto overscroll-contain px-4 py-3">
              {isSuccess ? (
                <div className="flex flex-col items-center justify-center text-center py-8">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mb-3 text-emerald-400">
                    <CheckCircle className="w-7 h-7 animate-bounce" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-1">Request Received!</h3>
                  <p className="text-xs text-slate-400 max-w-xs leading-relaxed">Our team will send your personalised solar quote shortly.</p>
                </div>
              ) : (
                <form id="qf" onSubmit={handleSubmit}>
                  <div className="space-y-2.5">

                    {/* Full Name */}
                    <div>
                      <label className={lbl}>Full Name <span className="text-amber-400">*</span></label>
                      <input type="text" required value={name} onChange={e => setName(e.target.value)} placeholder="John Doe" className={inp} />
                    </div>

                    {/* Email + Phone — always 2-col */}
                    <div className="grid grid-cols-2 gap-2">
                      <div className="min-w-0">
                        <label className={lbl}>Email <span className="text-amber-400">*</span></label>
                        <input type="email" required value={email} onChange={e => setEmail(e.target.value)} placeholder="john@email.com" className={inp} />
                      </div>
                      <div className="min-w-0">
                        <label className={lbl}>Phone <span className="text-amber-400">*</span></label>
                        <input type="tel" required value={phone} onChange={e => setPhone(e.target.value)} placeholder="0400 000 000" className={inp} />
                      </div>
                    </div>

                    {/* Suburb */}
                    <div>
                      <label className={lbl}>Suburb / Postcode</label>
                      <input type="text" value={suburb} onChange={e => setSuburb(e.target.value)} placeholder="Norwest, NSW 2153" className={inp} />
                    </div>

                    {/* System + Bill — always 2-col */}
                    <div className="grid grid-cols-2 gap-2">
                      <div className="min-w-0">
                        <label className={lbl}>System</label>
                        <select value={systemType} onChange={e => setSystemType(e.target.value)} className={inp}>
                          <option value="residential">Residential</option>
                          <option value="commercial">Commercial</option>
                          <option value="battery">Battery</option>
                          <option value="hybrid">Hybrid</option>
                        </select>
                      </div>
                      <div className="min-w-0">
                        <label className={lbl}>Monthly Bill</label>
                        <select value={billRange} onChange={e => setBillRange(e.target.value)} className={inp}>
                          <option value="<$200">Under $200</option>
                          <option value="$200-$400">$200–$400</option>
                          <option value="$400-$800">$400–$800</option>
                          <option value="$800+">$800+</option>
                        </select>
                      </div>
                    </div>

                    {/* Source tag */}
                    <p className="text-right text-[8px] text-slate-600 font-mono tracking-wider">
                      SRC: {source.toUpperCase()}
                    </p>
                  </div>
                </form>
              )}
            </div>

            {/* ── FOOTER / SUBMIT ── */}
            {!isSuccess && (
              <div className="shrink-0 px-4 pb-5 pt-2.5 border-t border-slate-800 bg-[#070d1a]">
                <button type="submit" form="qf" disabled={isSubmitting}
                  className="w-full h-11 flex items-center justify-center gap-2 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-amber-600 via-amber-500 to-orange-500 hover:from-amber-700 hover:to-orange-600 active:scale-[0.98] transition-all duration-200 shadow-lg disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer">
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      <span>Submitting…</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Quote Request</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </QuoteModalContext.Provider>
  )
}

export const useQuoteModal = () => {
  const context = useContext(QuoteModalContext)
  if (!context) throw new Error('useQuoteModal must be used within a QuoteModalProvider')
  return context
}
