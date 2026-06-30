import { useEffect, useState } from 'react'
import { useQuoteModal } from '../../components/QuoteModal'

const slides = [
  {
    img: '/images/solar/solar-panel-rooftop.jpg',
    headline: 'Solar Installation in Australia for a Brighter Future ',
    sub: 'Save up to $2,500 a year with expert solar installation in Australia from Australia\'s trusted solar specialists.',
  },
  {
    img: '/images/solar/solar-workers-roof.jpg',
    headline: 'Premium Solar Panels & Solar Power Systems in Australia',
    sub: 'High-efficiency solar solutions designed to reduce electricity bills, maximize energy savings, and increase energy independence.',
  },
  {
    img: '/images/solar/solar-sunset-array.jpg',
    headline: 'Australia\'s Trusted Solar Power Solutions',
    sub: 'Premium solar panels, battery storage, and expert installation for long-term energy savings.',
  },
]

export default function   HeroSection() {
  const [current, setCurrent] = useState(0)
  const [animating, setAnimating] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setAnimating(true)
      setTimeout(() => {
        setCurrent((c) => (c + 1) % slides.length)
        setAnimating(false)
      }, 500)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const { openQuoteModal } = useQuoteModal()
  const slide = slides[current]

  return (
    <section className="relative h-full md:h-[88vh] min-h-[600px] overflow-hidden">
      {/* Background image */}
      {slides.map((s, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{ opacity: i === current ? 1 : 0 }}
        >
          <img
            src={s.img}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      {/* Dark overlay gradient */}
      <div className="absolute inset-0 bg-linear-to-r from-[#0a1f44]/90 via-[#0a1f44]/70 to-transparent" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center my-25 md:my-0 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0  w-full">
          <div className="max-w-4xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[#FCC200]/20 border border-[#FCC200]/40 text-[#FCC200] text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-2">
              <span className="w-2 h-2 bg-[#FCC200] rounded-full animate-pulse" />
              Trusted By 12,000+ Australians
            </div>

            {/* Headline */}
            <h1
              className={`text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold text-white leading-tight mb-6 transition-all duration-500 ${animating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
                }`}
              style={{ whiteSpace: 'pre-line' }}
            >
              {slide.headline}
            </h1>

            <p
              className={`text-sm sm:text-base md:text-lg text-gray-200 mb-8 leading-relaxed transition-all duration-500 delay-100 ${animating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
                }`}
            >
              {slide.sub}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#packages"
                className="bg-[#FCC200] hover:bg-[#e6af00] text-black font-bold px-10 py-2 rounded-full text-base transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-0.5"
              >
                View Solar Packages →
              </a>
              <button
                onClick={() => openQuoteModal('Homepage Hero')}
                className="bg-white/10 hover:bg-white/20 border-2 border-white/20 text-white font-bold px-10 py-2 rounded-full text-base backdrop-blur-sm transition-all duration-300 cursor-pointer"
              >
                Get Free Quote
              </button>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-5 md:gap-10 mt-10">
              {[
                { val: '12K+', label: 'Installations' },
                { val: '10yr', label: 'Warranty' },
                { val: '$2.5K', label: 'Avg Savings/yr' },
                { val: '4.9★', label: 'Google Rating' },
              ].map((b) => (
                <div key={b.label} className="flex flex-col">
                  <span className="text-2xl font-extrabold text-[#FCC200]">{b.val}</span>
                  <span className="text-gray-300 text-xs font-medium">{b.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${i === current ? 'w-8 bg-[#FCC200]' : 'w-2 bg-white/40'
              }`}
          />
        ))}
      </div>

      {/* Bottom wave */}
      <div className="absolute -bottom-px left-0 right-0 z-10 w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative block w-full h-[40px] lg:h-[80px]"
        >
          <path
            d="M0 80L60 66.7C120 53.3 240 26.7 360 20C480 13.3 600 26.7 720 33.3C840 40 960 40 1080 36.7C1200 33.3 1320 26.7 1380 23.3L1440 20V80H1380C1320 80 1200 80 1080 80C960 80 840 80 720 80C600 80 480 80 360 80C240 80 120 80 60 80H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  )
}
