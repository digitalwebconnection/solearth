import { Zap, Sun, BatteryCharging, MapPin, DollarSign, Leaf } from 'lucide-react'

const items = [
  { icon: Zap, text: 'Cheaper Home Batteries Program (May 2026)', link: 'Learn More' },
  { icon: Sun, text: 'Government Solar Rebates — Up To $2,500 Off', link: 'Check Eligibility' },
  { icon: BatteryCharging, text: 'Tesla Powerwall 3 Now Available', link: 'View Details' },
  { icon: MapPin, text: 'CEC Accredited Installers Across NSW & QLD', link: 'Our Team' },
  { icon: DollarSign, text: '0% Interest Finance — No Repayments For 6 Months', link: 'Apply Now' },
  { icon: Leaf, text: 'Go Green & Save — Free Energy Audit With Every Quote', link: 'Book Now' },
]

// Duplicate for seamless infinite loop
const marqueeItems = [...items, ...items]

export default function MarqueeBelt() {
  return (
    <div className="relative bg-linear-to-r from-[#0a1f44] via-[#1a3a6b] to-[#0a1f44] overflow-hidden py-3.5 border-y border-[#F8C000]/20">

      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-linear-to-r from-[#0a1f44] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-linear-to-l from-[#0a1f44] to-transparent z-10 pointer-events-none" />

      {/* Scrolling track */}
      <div className="flex w-max animate-marquee gap-0">
        {marqueeItems.map((item, i) => {
          const Icon = item.icon
          return (
            <div
              key={i}
              className="flex items-center gap-2.5 px-6 whitespace-nowrap"
            >
              {/* Icon */}
              <Icon className="w-4 h-4 text-[#F8C000] shrink-0" />

              {/* Text */}
              <span className="text-white/90 text-sm font-medium">{item.text}</span>

              {/* Link pill */}
              <a
                href="#"
                className="text-[10px] font-bold tracking-widest uppercase bg-[#F8C000] text-white px-3 py-1 rounded-full hover:bg-[#e0ad00] transition-colors duration-200 ml-1"
              >
                {item.link} →
              </a>

              {/* Divider dot */}
              <span className="w-1.5 h-1.5 rounded-full bg-[#F8C000]/40 ml-4 shrink-0" />
            </div>
          )
        })}
      </div>

      {/* Tailwind v4 keyframe injection */}
      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 35s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  )
}
