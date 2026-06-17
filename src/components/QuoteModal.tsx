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
    document.body.style.overflow = 'hidden' // Lock background scrolling
  }

  const closeQuoteModal = () => {
    setIsOpen(false)
    document.body.style.overflow = 'unset' // Restore scrolling
  }

  // Handle Escape key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        closeQuoteModal()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen])

  // Form State
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')
  const [systemType, setSystemType] = useState('residential')
  const [billRange, setBillRange] = useState('$200-$400')
  const [message, setMessage] = useState('')

  // UI state
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Simple validation
    if (!name.trim() || !email.trim() || !phone.trim()) {
      toast.error('Please fill in all required fields.')
      return
    }

    setIsSubmitting(true)

    // Simulate API Submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)
      toast.success('Quote request submitted successfully!')

      // Reset form fields after brief delay and close
      setTimeout(() => {
        setIsSuccess(false)
        setName('')
        setEmail('')
        setPhone('')
        setAddress('')
        setSystemType('residential')
        setBillRange('$200-$400')
        setMessage('')
        closeQuoteModal()
      }, 1500)
    }, 1800)
  }

  return (
    <QuoteModalContext.Provider value={{ openQuoteModal, closeQuoteModal, isOpen, source }}>
      {children}

      {/* Modal Portal Element */}
      {isOpen && (
        <div className="fixed inset-0 z-9990 flex items-center justify-center p-4 overflow-y-auto select-none">
          {/* Backdrop Blur */}
          <div 
            onClick={closeQuoteModal}
            className="fixed inset-0 bg-[#02050e]/85 backdrop-blur-md transition-opacity duration-300"
          />

          {/* Modal Box */}
          <div className="relative w-full max-w-lg bg-[#070b14]/90 border border-slate-800/80 rounded-2xl p-6 md:p-8 shadow-2xl backdrop-blur-lg transform scale-100 transition-all duration-300 z-9991 flex flex-col">
            
            {/* Header Glowing Accent */}
            <div className="absolute top-0 left-1/4 right-1/4 h-px bg-linear-to-r from-transparent via-amber-500 to-transparent" />

            {/* Close Button */}
            <button 
              onClick={closeQuoteModal}
              className="absolute top-4 right-4 p-1.5 rounded-lg border border-slate-800/60 bg-slate-900/30 text-slate-400 hover:text-white hover:border-slate-700 transition-all cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Title / Header */}
            <div className="flex items-center gap-2 mb-2">
              <Zap className="w-5 h-5 text-amber-500 animate-pulse" />
              <span className="font-mono text-[9px] text-amber-500 tracking-[0.2em] font-bold uppercase">
                SOLAR GRID ESTIMATION
              </span>
            </div>
            
            <h2 className="text-xl md:text-2xl font-extrabold tracking-tight text-white mb-1">
              Request a Free Quote
            </h2>
            <p className="text-xs text-slate-400 mb-6">
              Fill out the details below to receive a custom performance audit and tailored pricing.
            </p>

            {/* Success Animation */}
            {isSuccess ? (
              <div className="py-12 flex flex-col items-center justify-center text-center animate-fade-in">
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mb-4 text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.2)]">
                  <CheckCircle className="w-8 h-8 animate-bounce" />
                </div>
                <h3 className="text-lg font-bold text-white mb-1">Request Received</h3>
                <p className="text-xs text-slate-400 max-w-xs leading-relaxed">
                  Our system architects are calculating your solar savings. We will connect with you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div>
                  <label className="block text-[10px] font-mono text-slate-400 uppercase tracking-widest mb-1.5">
                    Your Name <span className="text-amber-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="John Doe"
                    className="w-full bg-[#0a0f1d] border border-slate-800 focus:border-amber-500/50 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none transition-all"
                  />
                </div>

                {/* Email & Phone side-by-side */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-mono text-slate-400 uppercase tracking-widest mb-1.5">
                      Email Address <span className="text-amber-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="john@example.com"
                      className="w-full bg-[#0a0f1d] border border-slate-800 focus:border-amber-500/50 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono text-slate-400 uppercase tracking-widest mb-1.5">
                      Phone Number <span className="text-amber-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="0400 000 000"
                      className="w-full bg-[#0a0f1d] border border-slate-800 focus:border-amber-500/50 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Suburb/Address */}
                <div>
                  <label className="block text-[10px] font-mono text-slate-400 uppercase tracking-widest mb-1.5">
                    Installation Suburb or Postcode
                  </label>
                  <input
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Chermside, QLD 4032"
                    className="w-full bg-[#0a0f1d] border border-slate-800 focus:border-amber-500/50 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none transition-all"
                  />
                </div>

                {/* System Interest & Bill Range */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-mono text-slate-400 uppercase tracking-widest mb-1.5">
                      System Type
                    </label>
                    <select
                      value={systemType}
                      onChange={(e) => setSystemType(e.target.value)}
                      className="w-full bg-[#0a0f1d] border border-slate-800 focus:border-amber-500/50 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none transition-all select-none"
                    >
                      <option value="residential">Residential Solar</option>
                      <option value="commercial">Commercial Solar</option>
                      <option value="battery">Battery Storage</option>
                      <option value="hybrid">Smart Energy Hybrid</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono text-slate-400 uppercase tracking-widest mb-1.5">
                      Average Bill (Monthly)
                    </label>
                    <select
                      value={billRange}
                      onChange={(e) => setBillRange(e.target.value)}
                      className="w-full bg-[#0a0f1d] border border-slate-800 focus:border-amber-500/50 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none transition-all select-none"
                    >
                      <option value="<$200">Under $200</option>
                      <option value="$200-$400">$200 to $400</option>
                      <option value="$400-$800">$400 to $800</option>
                      <option value="$800+">Above $800</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-[10px] font-mono text-slate-400 uppercase tracking-widest mb-1.5">
                    Additional details (Optional)
                  </label>
                  <textarea
                    rows={2}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="E.g., double storey tile roof, shade issue..."
                    className="w-full bg-[#0a0f1d] border border-slate-800 focus:border-amber-500/50 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none transition-all resize-none"
                  />
                </div>

                {/* Trigger metadata check */}
                <div className="text-[9px] font-mono text-slate-500 tracking-wider text-right">
                  INQUIRY SOURCE: {source.toUpperCase()}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-11 bg-linear-to-r from-amber-600 via-amber-500 to-orange-500 hover:from-amber-700 hover:to-orange-600 text-white font-semibold rounded-xl text-sm transition-all duration-300 shadow-lg hover:shadow-amber-500/10 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed mt-4"
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      <span>TRANSMITTING DATA GRID...</span>
                    </div>
                  ) : (
                    <>
                      <span>SUBMIT ESTIMATE REQUEST</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </QuoteModalContext.Provider>
  )
}

export const useQuoteModal = () => {
  const context = useContext(QuoteModalContext)
  if (!context) {
    throw new Error('useQuoteModal must be used within a QuoteModalProvider')
  }
  return context
}
