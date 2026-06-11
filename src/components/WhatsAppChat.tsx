import { useState, useEffect, useRef } from 'react'
import { X, Send } from 'lucide-react'

// Constants for WhatsApp integration
const WHATSAPP_NUMBER = '61400000000' // Replace with your actual WhatsApp business number
const AGENT_NAME = 'SolEarth Support'
const WELCOME_MESSAGE = 'Hi there! Welcome to SolEarth Energy. How can we help you power your home with clean energy today?'

interface WhatsAppChatProps {
  isSiteReady?: boolean
}

export default function WhatsAppChat({ isSiteReady = true }: WhatsAppChatProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState('')
  const [hasOpenedOnce, setHasOpenedOnce] = useState(false)
  const [showNotification, setShowNotification] = useState(false)
  const chatEndRef = useRef<HTMLDivElement>(null)

  // Auto-open chat after 3 seconds when the website is ready
  useEffect(() => {
    if (!isSiteReady) return

    const timer = setTimeout(() => {
      // Only auto-open if the user hasn't opened/interacted with it yet
      setIsOpen((prev) => {
        if (!prev && !hasOpenedOnce) {
          setHasOpenedOnce(true)
          return true
        }
        return prev
      })
    }, 3000)

    // Also trigger notification badge slightly before opening or if closed
    const badgeTimer = setTimeout(() => {
      setShowNotification((prev) => !isOpen ? true : prev)
    }, 1500)

    return () => {
      clearTimeout(timer)
      clearTimeout(badgeTimer)
    }
  }, [isSiteReady, hasOpenedOnce, isOpen])

  // Scroll to bottom when chat opens
  useEffect(() => {
    if (isOpen) {
      chatEndRef.current?.scrollIntoView({ behavior: 'smooth' })
      setShowNotification(false)
    }
  }, [isOpen])

  const handleOpenToggle = () => {
    setIsOpen(!isOpen)
    if (!isOpen) {
      setHasOpenedOnce(true)
    }
  }

  const handleSendMessage = (textToSend?: string) => {
    const text = textToSend || message
    if (!text.trim()) return

    // Create the WhatsApp redirect URL
    const encodedText = encodeURIComponent(text)
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedText}`

    // Redirect in a new tab
    window.open(whatsappUrl, '_blank')
    setMessage('')
  }



  return (
    <div className="fixed bottom-6 right-6 z-9999 font-sans">
      {/* ── Chat Window Box ── */}
      <div
        className={`absolute bottom-20 right-0 w-80 sm:w-[350px] bg-[#0c1317] border border-emerald-500/20 rounded-2xl shadow-2xl flex flex-col transition-all duration-300 transform origin-bottom-right ${isOpen
            ? 'scale-100 opacity-100 translate-y-0  pointer-events-auto'
            : 'scale-75 opacity-0  translate-y-8 pointer-events-none'
          }`}
      >
        {/* Header */}
        <div className="bg-linear-to-r rounded-t-2xl from-emerald-600 to-teal-700 p-4 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Agent Status Circle */}
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-emerald-900 border border-emerald-400/30 flex items-center justify-center text-emerald-100 font-bold font-mono">
                SE
              </div>
              <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-400 border-2 border-[#0c1317] rounded-full animate-pulse" />
            </div>
            <div>
              <h4 className="font-bold text-sm leading-tight">{AGENT_NAME}</h4>
              <p className="text-[10px] text-emerald-100/80 flex items-center gap-1">
                <span>●</span> Online • Typically replies instantly
              </p>
            </div>
          </div>
          {/* Close button */}
          <button
            onClick={handleOpenToggle}
            className="p-1.5 rounded-full hover:bg-white/10 text-emerald-100 transition-colors cursor-pointer"
            aria-label="Close chat"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Message Log Area */}
        <div
          className="flex-1 p-4 max-h-[300px] overflow-y-auto space-y-4 bg-opacity-30"
          style={{
            backgroundImage: 'radial-gradient(rgba(16, 185, 129, 0.05) 1px, transparent 1px)',
            backgroundSize: '16px 16px'
          }}
        >
          {/* Agent welcome message */}
          <div className="flex gap-2 max-w-[85%]">
            <div className="bg-[#202c33] text-[#e9edef] text-sm p-3 rounded-2xl rounded-tl-none shadow-md border border-white/5">
              <p className="leading-relaxed">{WELCOME_MESSAGE}</p>
              <span className="block text-[9px] text-[#8696a0] text-right mt-1.5">Just now</span>
            </div>
          </div>

          <div ref={chatEndRef} />
        </div>

        {/* Chat input footer */}
        <div className="p-3 bg-[#1f2c34] flex items-center rounded-b-2xl gap-2 border-t border-white/5">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
            placeholder="Type a message..."
            className="flex-1 bg-[#2a3942] text-sm text-[#e9edef] placeholder-[#8696a0] rounded-full px-4 py-2 focus:outline-none focus:ring-1 focus:ring-emerald-500 border border-transparent"
          />
          <button
            onClick={() => handleSendMessage()}
            className="w-9 h-9 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white flex items-center justify-center shadow-md transition-all shrink-0 cursor-pointer hover:scale-105 active:scale-95"
            aria-label="Send message to WhatsApp"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* ── Floating Launcher Trigger Button ── */}
      <button
        onClick={handleOpenToggle}
        className="relative w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white flex items-center justify-center shadow-[0_4px_20px_rgba(16,185,129,0.5)] transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer group"
        aria-label="Open WhatsApp chat support"
      >
        {/* Pulsing outer boundary */}
        <span className="absolute inset-0 rounded-full border border-emerald-400 animate-ping opacity-30 group-hover:opacity-40" />

        {/* Notification badge */}
        {showNotification && !isOpen && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white font-mono text-[9px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-[#070b13] animate-bounce">
            1
          </span>
        )}

        {/* Switch logo/close icon based on open state */}
        {isOpen ? (
          <X className="w-6 h-6 transition-transform duration-300 rotate-90" />
        ) : (
          <svg className="w-7 h-7 fill-current transition-transform duration-300 hover:rotate-12" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.498 1.45 5.441 1.451 5.378 0 9.754-4.379 9.757-9.761.002-2.607-1.011-5.059-2.855-6.903-1.843-1.844-4.29-2.859-6.899-2.86-5.385 0-9.76 4.379-9.763 9.762-.001 1.986.518 3.926 1.503 5.64l-.99 3.618 3.706-.972zm12.308-4.708c-.332-.167-1.968-.972-2.271-1.082-.303-.11-.524-.167-.744.167-.22.333-.852 1.082-1.045 1.303-.193.222-.387.248-.719.082-1.865-.935-3.118-1.636-4.377-3.799-.332-.57.332-.529.95-1.77.103-.207.052-.387-.026-.554-.077-.167-.744-1.79-1.018-2.454-.27-.648-.54-.56-.744-.57-.193-.01-.414-.011-.635-.011-.22 0-.58.082-.883.414-.303.333-1.157 1.13-1.157 2.753 0 1.623 1.182 3.193 1.348 3.414.166.222 2.328 3.555 5.639 4.986.788.341 1.403.544 1.883.697.792.251 1.512.215 2.081.129.635-.096 1.968-.804 2.244-1.58.277-.775.277-1.44.193-1.58-.083-.14-.303-.223-.635-.39z" />
          </svg>
        )}
      </button>
    </div>
  )
}
