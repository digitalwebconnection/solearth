import { useState, useEffect, useRef } from 'react'
import { motion, useInView, animate } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, Sun, Shield, Zap, ArrowRight } from 'lucide-react'

/* ── Animated counter hook ─────────────────────────────── */
function useCounter(end: number, duration = 1.8, inView: boolean) {
  const [value, setValue] = useState(0)
  useEffect(() => {
    if (!inView) return
    const controls = animate(0, end, {
      duration,
      ease: 'easeOut',
      onUpdate: (v) => setValue(Math.round(v)),
    })
    return controls.stop
  }, [inView, end, duration])
  return value
}

/* ── Floating particle dot ─────────────────────────────── */
function Particle({ x, y, delay, size }: { x: string; y: string; delay: number; size: number }) {
  return (
    <motion.div
      className="absolute rounded-full bg-[#1B74BB] pointer-events-none"
      style={{ left: x, top: y, width: size, height: size }}
      animate={{ y: [0, -20, 0], opacity: [0.15, 0.5, 0.15] }}
      transition={{ duration: 4 + delay, repeat: Infinity, delay, ease: 'easeInOut' }}
    />
  )
}

export default function ContactSection() {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', address: '', interest: 'Residential Solar',
  })
  const [sent, setSent] = useState(false)

  const statsRef = useRef<HTMLDivElement>(null)
  const statsInView = useInView(statsRef, { once: true })
  const installs = useCounter(12000, 1.8, statsInView)
  const rating = useCounter(49, 1.5, statsInView)  // 49 → displays as 4.9
  const warranty = useCounter(25, 1.2, statsInView)

  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setSent(true) }

  const inputCls = "w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder-white/35 focus:outline-none focus:border-[#F8A800]/70 focus:bg-white/8 transition-all duration-300"
  const labelCls = "block text-[10px] font-black uppercase tracking-widest text-white/50 mb-2"

  const particles = [
    { x: '8%', y: '15%', delay: 0, size: 4 },
    { x: '18%', y: '70%', delay: 1.2, size: 3 },
    { x: '35%', y: '40%', delay: 0.6, size: 5 },
    { x: '60%', y: '20%', delay: 2, size: 3 },
    { x: '75%', y: '65%', delay: 0.3, size: 4 },
    { x: '88%', y: '35%', delay: 1.7, size: 3 },
    { x: '92%', y: '80%', delay: 0.9, size: 5 },
    { x: '48%', y: '85%', delay: 1.5, size: 3 },
  ]

  return (
    <section id="contact" className="relative bg-[#06101f] text-white overflow-hidden">

      {/* ── ANIMATED DRIFTING ORBS ────────────────────────── */}
      <motion.div
        className="absolute top-0 left-1/4 w-[600px] h-[400px] bg-[#1B74BB]/12 blur-[120px] rounded-full pointer-events-none"
        animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-0 right-1/4 w-[500px] h-[350px] bg-[#F8A800]/10 blur-[100px] rounded-full pointer-events-none"
        animate={{ x: [0, -30, 0], y: [0, -25, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[400px] h-[300px] bg-[#10B981]/5 blur-[100px] rounded-full pointer-events-none"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />

      {/* ── FLOATING PARTICLES ───────────────────────────── */}
      {particles.map((p, i) => <Particle key={i} {...p} />)}

      {/* ── GRID OVERLAY ──────────────────────────────────── */}
      <div className="absolute inset-0 opacity-[0.025] bg-[linear-gradient(rgba(255,255,255,0.4)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.4)_1px,transparent_1px)] bg-size-[50px_50px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 relative z-10">

        {/* ── TOP HEADING ─────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.35em] text-[#F8A800] mb-5"
          >
            <motion.span
              className="h-px bg-[#F8A800] inline-block"
              initial={{ width: 0 }}
              whileInView={{ width: 32 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            />
            Start Your Solar Journey
            <motion.span
              className="h-px bg-[#F8A800] inline-block"
              initial={{ width: 0 }}
              whileInView={{ width: 32 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            />
          </motion.span>

          <h2 className="text-5xl sm:text-6xl font-black text-white leading-tight tracking-tight">
            Let's Build Your<br />
            <motion.span
              className="text-transparent bg-clip-text bg-linear-to-r from-[#1B74BB] to-[#28A8E4] inline-block"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25, duration: 0.5 }}
            >
              Solar Future
            </motion.span>
          </h2>
          <p className="text-slate-100 text-base mt-5 max-w-7xl mx-auto leading-relaxed">
            Get a free, no-obligation quote from our expert team. We'll design a system tailored to your home and energy needs.
          </p>
        </motion.div>

        {/* ── MAIN GRID ────────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* LEFT INFO */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="space-y-5"
          >

            {/* Animated stat strip */}
            <div ref={statsRef} className="grid grid-cols-3 gap-4 mb-8">
              {[
                { value: installs, suffix: '+', label: 'Installations' },
                { value: (rating / 10).toFixed(1), suffix: '★', label: 'Google Rating' },
                { value: warranty, suffix: 'yr', label: 'Warranty' },
              ].map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: 1.05, borderColor: 'rgba(248,168,0,0.4)' }}
                  className="bg-white/5 border border-white/8 rounded-2xl py-5 text-center transition-colors"
                >
                  <div className="text-xl font-black text-[#F8A800]">
                    {typeof s.value === 'number' ? s.value.toLocaleString() : s.value}{s.suffix}
                  </div>
                  <div className="text-[10px] font-bold text-white/45 uppercase tracking-wider mt-1">{s.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Benefit cards with icon pulse */}
            {[
              { icon: Sun, title: 'Premium Solar Systems', desc: 'Tier 1 panels and inverters sized for your exact roof and energy usage.', color: '#F8A800' },
              { icon: Shield, title: 'CEC Accredited Installers', desc: 'All installations carried out by licensed Australian electricians.', color: '#28A8E4' },
              { icon: Zap, title: 'Same-Day Fast Quotes', desc: 'Receive a detailed proposal within 24 hours of your enquiry.', color: '#10B981' },
            ].map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 + 0.2 }}
                whileHover={{ x: 4, backgroundColor: 'rgba(255,255,255,0.07)' }}
                className="flex items-start gap-4 bg-white/4 border border-white/8 rounded-2xl p-5 transition-colors duration-300 cursor-default"
              >
                <motion.div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                  style={{ backgroundColor: b.color + '20' }}
                  animate={{ boxShadow: [`0 0 0px ${b.color}00`, `0 0 12px ${b.color}55`, `0 0 0px ${b.color}00`] }}
                  transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.8 }}
                >
                  <b.icon className="w-5 h-5" style={{ color: b.color }} />
                </motion.div>
                <div>
                  <div className="font-extrabold text-white text-sm mb-1">{b.title}</div>
                  <div className="text-xs text-white leading-relaxed">{b.desc}</div>
                </div>
              </motion.div>
            ))}

            {/* Contact chips */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
              {[
                { href: 'tel:1300672194', icon: Phone, label: 'Call Free', value: '1300 672 194', bg: '#1B74BB', hoverBorder: '#28A8E4' },
                { href: 'mailto:info@solearth.com.au', icon: Mail, label: 'Email Us', value: 'info@solearth.com.au', bg: '#F8A800', hoverBorder: '#F8A800' },
                { href: '#', icon: MapPin, label: 'Office', value: 'Chermside, QLD 4032', bg: '#10B981', hoverBorder: '#10B981' },
              ].map((c, i) => (
                <motion.a
                  key={c.label}
                  href={c.href}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 + 0.4 }}
                  whileHover={{ y: -2 }}
                  className="group flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl p-4 transition-all duration-200"
                >
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: c.bg + '22' }}>
                    <c.icon className="w-4 h-4" style={{ color: c.bg === '#1B74BB' ? '#28A8E4' : c.bg }} />
                  </div>
                  <div>
                    <div className="text-[9px] font-black text-white/40 uppercase tracking-wider">{c.label}</div>
                    <div className="text-sm font-extrabold text-white group-hover:text-[#28A8E4] transition-colors">{c.value}</div>
                  </div>
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.56 }}
                className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl p-4"
              >
                <div className="w-9 h-9 rounded-xl bg-violet-500/20 flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4 text-violet-400" />
                </div>
                <div>
                  <div className="text-[9px] font-black text-white/40 uppercase tracking-wider">Hours</div>
                  <div className="text-sm font-extrabold text-white">Mon–Fri 8am–6pm</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* RIGHT: Form card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="relative"
          >
            {/* Animated glow ring */}
            <motion.div
              className="absolute inset-[-3px] rounded-lg pointer-events-none"
              style={{
                background: 'linear-gradient(135deg, #1B74BB55, #F8A80033, #28A8E455, #F8A80033, #1B74BB55)',
                backgroundSize: '300% 300%',
              }}
              animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
            />
            <div className="absolute -inset-2 bg-linear-to-br from-[#1B74BB]/20 to-[#F8A800]/15 rounded-lg blur-xl pointer-events-none" />

            <div className="relative bg-white/6 backdrop-blur-xl border border-white/12 rounded-lg p-8 sm:p-10 overflow-hidden">
              {/* Animated top accent line */}
              <motion.div
                className="absolute top-0 left-0 right-0 h-[2px] bg-linear-to-r from-transparent via-[#1B74BB] to-transparent"
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 3, repeat: Infinity }}
              />

              {/* Inner shine sweep */}
              <motion.div
                className="absolute top-0 -left-full w-1/2 h-full bg-linear-to-r from-transparent via-white/3 to-transparent pointer-events-none skew-x-[-20deg]"
                animate={{ left: ['−100%', '200%'] }}
                transition={{ duration: 4, repeat: Infinity, repeatDelay: 3, ease: 'easeInOut' }}
              />

              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: 'spring', stiffness: 200 }}
                  className="flex flex-col items-center justify-center py-16 text-center"
                >
                  <motion.div
                    className="w-16 h-16 bg-emerald-500/15 rounded-full flex items-center justify-center mb-5"
                    animate={{ scale: [1, 1.1, 1], boxShadow: ['0 0 0 0 #10B98140', '0 0 0 16px #10B98100'] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <svg className="w-8 h-8 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </motion.div>
                  <h3 className="text-2xl font-black text-white mb-2">Quote Sent! 🎉</h3>
                  <p className="text-white text-sm">Our team will reach out within 24 hours.</p>
                </motion.div>
              ) : (
                <>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="mb-8"
                  >
                    <h3 className="text-2xl font-black text-white">Get Free Quote</h3>
                    <p className="text-white text-sm mt-1">We'll respond within 24 hours.</p>
                  </motion.div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    {[
                      {
                        grid: true, fields: [
                          { label: 'Full Name', type: 'text', placeholder: 'John Smith', key: 'name' },
                          { label: 'Phone', type: 'tel', placeholder: '04xx xxx xxx', key: 'phone' },
                        ]
                      },
                    ].map((row, ri) => (
                      <div key={ri} className={row.grid ? 'grid grid-cols-2 gap-4' : ''}>
                        {row.fields.map((f, fi) => (
                          <motion.div
                            key={f.key}
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: ri * 0.1 + fi * 0.05 + 0.4 }}
                          >
                            <label className={labelCls}>{f.label}</label>
                            <input
                              required type={f.type} placeholder={f.placeholder}
                              value={form[f.key as keyof typeof form]}
                              onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
                              className={inputCls}
                            />
                          </motion.div>
                        ))}
                      </div>
                    ))}

                    {[
                      { label: 'Email Address', type: 'email', placeholder: 'john@example.com', key: 'email', delay: 0.5 },
                      { label: 'Address / Suburb', type: 'text', placeholder: 'e.g. Kellyville, NSW 2155', key: 'address', delay: 0.55 },
                    ].map((f) => (
                      <motion.div key={f.key} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: f.delay }}>
                        <label className={labelCls}>{f.label}</label>
                        <input
                          type={f.type} placeholder={f.placeholder}
                          value={form[f.key as keyof typeof form]}
                          onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
                          className={inputCls}
                        />
                      </motion.div>
                    ))}

                    <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
                      <label className={labelCls}>Interested In</label>
                      <select
                        value={form.interest}
                        onChange={(e) => setForm({ ...form, interest: e.target.value })}
                        className={inputCls + ' appearance-none cursor-pointer'}
                      >
                        <option>Residential Solar</option>
                        <option>Commercial Solar</option>
                        <option>Battery Storage</option>
                        <option>EV Charger</option>
                        <option>Solar + Battery Package</option>
                      </select>
                    </motion.div>

                    <motion.button
                      type="submit"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.65 }}
                      whileHover={{ scale: 1.02, boxShadow: '0 0 35px rgba(27,116,187,0.55)' }}
                      whileTap={{ scale: 0.98 }}
                      className="group w-full mt-2 flex items-center justify-center gap-3 bg-linear-to-r from-[#1B74BB] to-[#28A8E4] text-white font-extrabold py-4 rounded-2xl transition-all duration-300 shadow-lg text-sm uppercase tracking-wider relative overflow-hidden"
                    >
                      {/* Button shine sweep */}
                      <motion.span
                        className="absolute inset-0 bg-linear-to-r from-transparent via-white/15 to-transparent -skew-x-12 pointer-events-none"
                        initial={{ x: '-100%' }}
                        whileHover={{ x: '200%' }}
                        transition={{ duration: 0.6 }}
                      />
                      <span className="relative z-10">Get My Free Quote</span>
                      <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
                    </motion.button>

                    <p className="text-center text-[10px] text-white/30 pt-1">
                      🔒 100% secure — your details are never shared.
                    </p>
                  </form>
                </>
              )}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
