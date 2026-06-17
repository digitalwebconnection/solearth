import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Cookie, X, ShieldCheck } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Check if the user has already made a choice
    const consent = localStorage.getItem('solearth_cookie_consent')
    if (!consent) {
      // Show the banner with a slight delay
      const timer = setTimeout(() => {
        setIsVisible(true)
      }, 1500)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('solearth_cookie_consent', 'accepted')
    setIsVisible(false)
  }

  const handleReject = () => {
    localStorage.setItem('solearth_cookie_consent', 'rejected')
    setIsVisible(false)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30, scale: 0.95 }}
          transition={{ type: 'spring', damping: 20, stiffness: 150 }}
          className="fixed bottom-6 right-6 left-6 md:left-auto md:max-w-md z-45 bg-slate-950/85 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl text-white overflow-hidden"
        >
          {/* Decorative glowing ambient orb */}
          <div className="absolute -top-10 -right-10 w-24 h-24 bg-[#FE9900]/10 rounded-full blur-xl pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-[#004093]/20 rounded-full blur-xl pointer-events-none" />

          <div className="relative z-10 space-y-4">
            {/* Header / Title */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-linear-to-br from-[#FE9900] to-[#E28000] flex items-center justify-center shadow-lg shadow-[#FE9900]/20 shrink-0">
                <Cookie className="w-5 h-5 text-black" />
              </div>
              <div className="flex-1">
                <h4 className="text-base font-black tracking-wide font-serif">
                  Cookie Preferences
                </h4>
                <p className="text-[10px] text-[#FE9900] font-black uppercase tracking-wider flex items-center gap-1.5 mt-0.5">
                  <ShieldCheck className="w-3.5 h-3.5" /> Privacy Protected
                </p>
              </div>
              <button
                onClick={handleReject}
                className="text-slate-400 hover:text-white transition-colors cursor-pointer p-1 rounded-lg hover:bg-white/5"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Description */}
            <p className="text-xs text-slate-350 leading-relaxed font-semibold">
              We use cookies to analyze website traffic, customize energy blueprints, and optimize your overall solar journey. You can choose to accept all cookies or proceed with only essential ones. Read our{' '}
              <Link
                to="/privacy-policy"
                className="text-[#FE9900] hover:underline font-bold transition-colors"
              >
                Privacy Policy
              </Link>{' '}
              for details.
            </p>

            {/* Interactive Actions console */}
            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={handleReject}
                className="flex-1 py-2.5 px-4 rounded-xl border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 text-white font-bold text-xs transition-all duration-350 text-center cursor-pointer"
              >
                Reject
              </button>
              <button
                onClick={handleAccept}
                className="flex-1 py-2.5 px-4 rounded-xl bg-[#FE9900] hover:bg-[#ffaa22] text-black font-black text-xs transition-all duration-350 text-center cursor-pointer shadow-lg shadow-[#FE9900]/10 hover:scale-[1.02]"
              >
                Accept All
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
