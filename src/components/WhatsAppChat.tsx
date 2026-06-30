import { useState, useEffect, useRef } from 'react'
import { X, Send, Sparkles, MessageCircle } from 'lucide-react'

// Constants for WhatsApp integration
const WHATSAPP_NUMBER = '61435359431' // Replace with your actual WhatsApp business number
const AGENT_NAME = 'SolEarth Assistant'

const QUICK_OPTIONS = [
  { label: '☀️ Get Free Quote', message: 'Hi, I would like to request a free solar quote for my home.' },
  { label: '🔋 Battery Storage', message: 'Hello, I want to find out more about your solar battery systems.' },
  { label: '💰 Check Rebates', message: 'Hi, I would like to check my eligibility for government solar rebates.' },
  { label: '📞 Request Call', message: 'Hello, I would like to request a callback from a solar specialist.' },
]

interface Message {
  id: string
  sender: 'bot' | 'user'
  text: string
  time: string
}

export default function WhatsAppChat({ isSiteReady = true }: { isSiteReady?: boolean }) {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState<Message[]>([])
  const [isTyping, setIsTyping] = useState(false)
  const [hasOpenedOnce, setHasOpenedOnce] = useState(false)
  const [showNotification, setShowNotification] = useState(false)
  const chatEndRef = useRef<HTMLDivElement>(null)

  // Auto-open chat after 4 seconds when the website is ready
  useEffect(() => {
    if (!isSiteReady) return

    const openTimer = setTimeout(() => {
      setIsOpen((prev) => {
        if (!prev && !hasOpenedOnce) {
          setHasOpenedOnce(true)
          return true
        }
        return prev
      })
    }, 4000)

    // Trigger notification badge slightly before opening
    const badgeTimer = setTimeout(() => {
      setShowNotification((prev) => (!isOpen ? true : prev))
    }, 2000)

    return () => {
      clearTimeout(openTimer)
      clearTimeout(badgeTimer)
    }
  }, [isSiteReady, hasOpenedOnce, isOpen])

  // Simulated initial message typing timeline when chat window is first opened
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setHasOpenedOnce(true)
      setShowNotification(false)
      setIsTyping(true)

      const timer1 = setTimeout(() => {
        setIsTyping(false)
        const timeNow = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        setMessages([
          {
            id: 'init-1',
            sender: 'bot',
            text: 'Hi there! Welcome to SolEarth Energy. ☀️',
            time: timeNow,
          },
        ])

        const timer2 = setTimeout(() => {
          setIsTyping(true)
          const timer3 = setTimeout(() => {
            setIsTyping(false)
            setMessages((prev) => [
              ...prev,
              {
                id: 'init-2',
                sender: 'bot',
                text: 'How can we help you power your home with clean energy today? You can select a quick option below or type a message.',
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
              },
            ])
          }, 1400)
          return () => clearTimeout(timer3)
        }, 650)

        return () => clearTimeout(timer2)
      }, 1100)

      return () => clearTimeout(timer1)
    }
  }, [isOpen, messages.length])

  // Scroll to bottom when messages list or typing state changes
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, isTyping])

  const handleOpenToggle = () => {
    setIsOpen(!isOpen)
    if (!isOpen) {
      setHasOpenedOnce(true)
      setShowNotification(false)
    }
  }

  const handleSendMessage = (textToSend?: string) => {
    const text = textToSend || message
    if (!text.trim()) return

    const timeNow = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    const userMsg: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: text,
      time: timeNow,
    }

    setMessages((prev) => [...prev, userMsg])
    setMessage('')
    setIsTyping(true)

    // Simulate bot thinking/typing response before redirecting
    setTimeout(() => {
      setIsTyping(false)
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'bot',
        text: 'Perfect! Redirecting you to WhatsApp for secure messaging with a specialist...',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      }
      setMessages((prev) => [...prev, botResponse])

      // Redirect to WhatsApp after message confirmation
      setTimeout(() => {
        const encodedText = encodeURIComponent(text)
        const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedText}`
        window.open(whatsappUrl, '_blank')
      }, 900)
    }, 1300)
  }

  return (
    <>
      {/* Mobile backdrop overlay */}
      {isOpen && (
        <div
          onClick={handleOpenToggle}
          className="fixed inset-0 bg-black/40 backdrop-blur-xs z-9998 sm:hidden transition-opacity duration-300"
        />
      )}

      {/* ── Chat Window Box ── */}
      <div
        className={`fixed z-9999 transition-all duration-300 ease-out transform bottom-4 left-4 right-4 mx-auto max-w-md h-[70vh] rounded-2xl border border-slate-200/50 shadow-2xl flex flex-col origin-bottom sm:bottom-24 sm:left-auto sm:right-6 sm:w-[360px] sm:h-[450px] sm:origin-bottom-right ${isOpen
            ? 'translate-y-0 opacity-100 scale-100 pointer-events-auto'
            : 'translate-y-full opacity-0 scale-95 pointer-events-none sm:translate-y-8 sm:opacity-0 sm:scale-75'
          }`}
      >
        {/* Header */}
        <div className="bg-linear-to-r rounded-t-2xl from-[#075e54] to-[#128c7e] p-4 text-white flex items-center justify-between shadow-md relative shrink-0">

          <div className="flex items-center gap-3">
            {/* Agent Status Circle */}
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-emerald-950/40 border border-white/20 flex items-center justify-center text-white font-extrabold text-sm tracking-wider font-sans shadow-inner">
                SE
              </div>
              <span className="absolute bottom-0 right-0 w-3 h-3 bg-[#25d366] border-2 border-[#128c7e] rounded-full animate-pulse" />
            </div>
            <div>
              <h4 className="font-extrabold text-[15px] leading-tight text-white">{AGENT_NAME}</h4>
              <p className="text-[11px] text-[#d1f4e0] font-semibold flex items-center gap-1 mt-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#25d366] inline-block animate-ping" />
                Online • Replies instantly
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
          className="flex-1 p-4 overflow-y-auto space-y-3 bg-[#efeae2]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cg fill='%239C92AC' fill-opacity='0.04'%3E%3Cpath d='M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10zm10 8c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm40 40c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        >
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex flex-col max-w-[85%] ${msg.sender === 'user' ? 'ml-auto items-end' : 'mr-auto items-start'
                }`}
            >
              <div
                className={`p-3 rounded-2xl text-xs md:text-sm shadow-xs border ${msg.sender === 'user'
                    ? 'bg-[#d9fdd3] text-slate-800 rounded-tr-none border-[#b1e8a9]'
                    : 'bg-white text-slate-800 rounded-tl-none border-slate-200/40'
                  }`}
              >
                <p className="leading-relaxed whitespace-pre-line font-medium">{msg.text}</p>
                <span
                  className={`block text-[9px] text-right mt-1 font-semibold ${msg.sender === 'user' ? 'text-slate-500' : 'text-slate-400'
                    }`}
                >
                  {msg.time}
                </span>
              </div>
            </div>
          ))}

          {/* Typing Indicator */}
          {isTyping && (
            <div className="flex flex-col max-w-[85%] mr-auto items-start">
              <div className="py-2.5 px-4 bg-white border border-slate-200/40 rounded-2xl rounded-tl-none shadow-xs flex gap-1 items-center">
                <span className="w-1.5 h-1.5 bg-[#075e54]/50 rounded-full animate-bounce [animation-delay:-0.3s]" />
                <span className="w-1.5 h-1.5 bg-[#075e54]/50 rounded-full animate-bounce [animation-delay:-0.15s]" />
                <span className="w-1.5 h-1.5 bg-[#075e54]/50 rounded-full animate-bounce" />
              </div>
            </div>
          )}

          {/* Quick Option Chips (Visible only when user hasn't typed anything yet) */}
          {messages.length >= 2 && !isTyping && messages.filter((m) => m.sender === 'user').length === 0 && (
            <div className="pt-2 flex flex-col gap-2 relative z-10 font-sans">
              <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider pl-1">
                Frequently Asked:
              </span>
              <div className="grid grid-cols-2 gap-2">
                {QUICK_OPTIONS.map((opt) => (
                  <button
                    key={opt.label}
                    onClick={() => handleSendMessage(opt.message)}
                    className="p-2 bg-white/90 backdrop-blur-xs hover:bg-emerald-50 text-left border border-slate-200 hover:border-emerald-300 rounded-xl text-[11px] font-bold text-slate-700 hover:text-emerald-800 shadow-xs hover:shadow-sm transition-all cursor-pointer flex items-center gap-1.5"
                  >
                    <Sparkles className="w-3 h-3 text-[#25d366] shrink-0" />
                    <span className="line-clamp-2">{opt.label}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          <div ref={chatEndRef} />
        </div>

        {/* Chat input footer */}
        <div className="p-3 bg-[#f0f2f5] flex items-center rounded-b-2xl gap-2 border-t border-slate-200/50 pb-3">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
            placeholder="Type a message..."
            className="flex-1 bg-white text-base sm:text-sm text-slate-800 placeholder-slate-400 rounded-full px-4 py-2.5 focus:outline-none focus:ring-1 focus:ring-[#128c7e] border border-slate-200"
          />
          <button
            onClick={() => handleSendMessage()}
            className="w-10 h-10 rounded-full bg-[#128c7e] hover:bg-[#075e54] text-white flex items-center justify-center shadow-md transition-all shrink-0 cursor-pointer hover:scale-105 active:scale-95"
            aria-label="Send message to WhatsApp"
          >
            <Send className="w-4.5 h-4.5" />
          </button>
        </div>
      </div>

      {/* ── Floating Launcher Trigger Button ── */}
      <div className={`fixed bottom-6 right-6 z-9999 font-sans transition-all duration-300 ${isOpen ? 'hidden sm:block' : 'block'}`}>
        <button
          onClick={handleOpenToggle}
          className="relative w-14 h-14 rounded-full bg-[#25d366] hover:bg-[#20ba5a] text-white flex items-center justify-center shadow-[0_5px_25px_rgba(37,211,102,0.4)] transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer group"
          aria-label="Open WhatsApp chat support"
        >
          {/* Pulsing outer boundary */}
          <span className="absolute inset-0 rounded-full border border-[#25d366] animate-ping opacity-35 group-hover:opacity-45" />

          {/* Notification badge */}
          {showNotification && !isOpen && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white font-mono text-[9px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white animate-bounce shadow-md">
              1
            </span>
          )}

          {/* Switch logo/close icon based on open state */}
          {isOpen ? (
            <X className="w-6 h-6 transition-transform duration-300 rotate-90" />
          ) : (
            <MessageCircle className="w-7 h-7 stroke-2 fill-white text-[#25d366]" />
          )}
        </button>
      </div>
    </>
  )
}
