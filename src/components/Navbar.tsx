import { useState, useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import logo from "../assets/Frame 1 (3).png"
import { Link, useLocation } from 'react-router-dom'
import { Sun, Zap, Battery, Award, Check, ChevronRight } from 'lucide-react'

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  {
    label: 'Services',
    href: '/#services',
    children: [
      { label: 'Solar Installation', href: '/#services' },
      { label: 'Battery Storage', href: '/#battery' },
      { label: 'System Maintenance', href: '/#process' },
      { label: 'Energy Audit', href: '/#process' },
    ],
  },
  {
    label: 'Products',
    href: '/#products',
    children: [
      { label: 'Solar Panels', href: '/#products' },
      { label: 'Inverters', href: '/#products' },
      { label: 'Battery Systems', href: '/#battery' },
      { label: 'EV Chargers', href: '/#products' },
    ],
  },
  { label: 'Our Projects', href: '/#process' },
  { label: 'Contact Us', href: '/#contact' },
]

function DropdownMenu({
  items,
  isOpen,
}: {
  items: { label: string; href: string }[]
  isOpen: boolean
}) {
  return (
    <div
      className={`absolute top-full left-0 mt-3 w-56 bg-white  rounded-2xl shadow-xl border border-gray-100 overflow-hidden z-50 transition-all duration-200 ${isOpen
        ? 'opacity-100 translate-y-0 pointer-events-auto'
        : 'opacity-0 -translate-y-2 pointer-events-none'
        }`}
    >
      {items.map((item) => (
        <Link
          key={item.label}
          to={item.href}
          className="block px-5 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-[#28A8E0] font-medium transition-all"
        >
          {item.label}
        </Link>
      ))}
    </div>
  )
}

const PRODUCTS_MAP = {
  "Solar Panels": [
    { name: "Jinko Solar Panels", slug: "jinko-solar-panels" },
    { name: "JA Solar Panels", slug: "ja-solar-panels" },
    { name: "AIKO Solar Panels", slug: "aiko-solar-panels" },
    { name: "Canadian Solar Panels", slug: "canadian-solar-panels" },
    { name: "DAS Solar Panels", slug: "das-solar-panels" },
    { name: "DMEGC Solar Panels", slug: "dmegc-solar-panels" },
    { name: "Eging Solar Panels", slug: "eging-solar-panels" },
    { name: "Risen Solar Panels", slug: "risen-solar-panels" },
    { name: "Trina Solar Panels", slug: "trina-solar-panels" },
    { name: "Longi Solar Panels", slug: "longi-solar-panels" },
  ],
  "Solar Inverters": [
    { name: "GoodWe Inverters", slug: "goodwe-inverters" },
    { name: "Sungrow Inverters", slug: "sungrow-inverters" },
    { name: "Growatt Inverters", slug: "growatt-inverters" },
    { name: "Solis Inverters", slug: "solis-inverters" },
    { name: "SAJ Inverters", slug: "saj-inverters" },
    { name: "Solix Inverters", slug: "solix-inverters" },
  ],
  "Solar Batteries": [
    { name: "FoxESS Battery", slug: "foxess-battery" },
    { name: "Growatt Battery Systems", slug: "growatt-battery-systems" },
    { name: "SAJ Battery Systems", slug: "saj-battery-systems" },
    { name: "Anker Solix Battery Systems", slug: "anker-solix-battery-systems" },
    { name: "Sungrow Battery Systems", slug: "sungrow-battery-systems" },
    { name: "Alpha ESS Battery Systems", slug: "alpha-ess-battery-systems" },
    { name: "Neovolt Battery Systems", slug: "neovolt-battery-systems" },
    { name: "Sigenergy Battery Systems", slug: "sigenergy-battery-systems" },
  ],
};

function ProductsMegaMenu({
  isOpen,
  onClose,
}: {
  isOpen: boolean
  onClose: () => void
}) {
  const [activeCategory, setActiveCategory] = useState<"Solar Panels" | "Solar Inverters" | "Solar Batteries">("Solar Panels");

  const getInitialBadge = (name: string) => {
    const cleaned = name
      .replace("Solar Panels", "")
      .replace("Inverters", "")
      .replace("Battery Systems", "")
      .replace("Battery", "")
      .trim();
    const words = cleaned.split(" ");
    if (words.length >= 2) {
      return (words[0][0] + words[1][0]).toUpperCase();
    }
    return cleaned.substring(0, 2).toUpperCase();
  };

  const getBrandSubtitle = (name: string) => {
    if (name.includes("Jinko")) return "Ultra-high efficiency TOPCon";
    if (name.includes("JA Solar")) return "Reliable high-output modules";
    if (name.includes("AIKO")) return "Premium all-back contact cells";
    if (name.includes("Canadian")) return "Bifacial dual-glass modules";
    if (name.includes("DAS")) return "Advanced N-type technology";
    if (name.includes("DMEGC")) return "Premium black aesthetic panels";
    if (name.includes("Eging")) return "Cost-effective high-yield panels";
    if (name.includes("Risen")) return "High-performance mono modules";
    if (name.includes("Trina")) return "Industry leading smart panels";
    if (name.includes("Longi")) return "High-efficiency monocrystalline";

    if (name.includes("GoodWe")) return "Hybrid & grid-tied solutions";
    if (name.includes("Sungrow")) return "World's most efficient inverters";
    if (name.includes("Growatt")) return "Smart residential hybrid brains";
    if (name.includes("Solis")) return "Reliable multi-MPPT inverters";
    if (name.includes("SAJ")) return "Smart energy management systems";
    if (name.includes("Anker")) return "Premium hybrid energy hubs";

    if (name.includes("BYD")) return "Safe LFP blade cell storage";
    if (name.includes("Tesla")) return "Iconic whole-home backup battery";
    if (name.includes("FoxESS")) return "High-voltage stackable storage";
    if (name.includes("Neovolt")) return "Premium Australian battery units";
    if (name.includes("Sigenergy")) return "AI-powered integrated storage";
    if (name.includes("Alpha")) return "Modular lithium-ion storage";

    return "Tier-1 accredited solar hardware";
  };

  const tabs = [
    {
      id: "Solar Panels" as const,
      title: "Solar Panels",
      desc: "10 Premium Brands",
      icon: <Sun className="w-5 h-5" />,
      colorClass: "text-[#FE9900]",
      bgClass: "bg-[#FE9900]/10",
      activeBg: "border-l-4 border-l-[#FE9900]",
    },
    {
      id: "Solar Inverters" as const,
      title: "Inverters",
      desc: "6 Smart brains",
      icon: <Zap className="w-5 h-5" />,
      colorClass: "text-sky-500",
      bgClass: "bg-sky-500/10",
      activeBg: "border-l-4 border-l-sky-500",
    },
    {
      id: "Solar Batteries" as const,
      title: "Batteries",
      desc: "8 Storage systems",
      icon: <Battery className="w-5 h-5" />,
      colorClass: "text-emerald-500",
      bgClass: "bg-emerald-500/10",
      activeBg: "border-l-4 border-l-emerald-500",
    },
  ];

  return (
    <div
      className={`absolute top-full left-1/2 -translate-x-1/2 w-full max-w-4xl mt-3 bg-white/99 backdrop-blur-2xl rounded-lg shadow-[0_30px_80px_rgba(10,31,68,0.22),0_15px_40px_rgba(10,31,68,0.12)] border border-slate-200/50 overflow-hidden z-50 transition-all duration-300 transform origin-top ${isOpen
          ? 'opacity-100 scale-y-100 pointer-events-auto'
          : 'opacity-0 scale-y-95 pointer-events-none'
        }`}
    >
      <div className="grid grid-cols-12 min-h-[420px]">

        {/* Left Side: Category Tabs (35% width / col-span-4) */}
        <div className="col-span-4 bg-slate-50/70 p-6 border-r border-slate-100 flex flex-col justify-between">
          <div className="space-y-3">
            <span className="text-[10px] text-slate-900 font-black uppercase tracking-wider block mb-4">
              Categories
            </span>

            <div className="flex flex-col gap-2">
              {tabs.map((tab) => {
                const isActive = activeCategory === tab.id;
                return (
                  <button
                    key={tab.id}
                    onMouseEnter={() => setActiveCategory(tab.id)}
                    className={`w-full text-left p-3.5 rounded-lg flex items-center gap-4 transition-all duration-200 ${isActive
                        ? `bg-white shadow-lg shadow-black/60 border border-slate-300 ${tab.activeBg}`
                        : "hover:bg-slate-100/50 border border-transparent"
                      }`}
                  >
                    <div className={`p-2.5 rounded-xl shadow-lg shadow-black/30 ${tab.bgClass} ${tab.colorClass} shrink-0`}>
                      {tab.icon}
                    </div>
                    <div>
                      <h4 className="text-sm font-extrabold text-[#004093]">
                        {tab.title}
                      </h4>
                      <span className="text-[10px] font-bold text-slate-900">
                        {tab.desc}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Spotlight banner inside tab list */}
          <div className="mt-8 pt-6 border-t border-slate-200/60 space-y-4">
            <div className="flex items-center gap-1.5 px-2.5 py-1 bg-[#004093]/5 rounded-full w-max text-[9px] font-black uppercase tracking-wider text-[#004093]">
              <Award className="w-3 h-3 text-[#FE9900]" />
              <span>CEC Retailer</span>
            </div>
            <p className="text-[10.5px] leading-relaxed text-slate-900 font-medium">
              SAA-accredited Tier-1 products engineered for severe Australian summer conditions.
            </p>
            <a
              href="/#contact"
              onClick={onClose}
              className="inline-flex items-center gap-2 text-xs font-black text-[#FE9900] hover:text-[#004093] transition group/btn"
            >
              Get Free Assessment
              <span className="transform group-hover/btn:translate-x-1 transition-transform">→</span>
            </a>
          </div>
        </div>

        {/* Right Side: Tab Contents (65% width / col-span-8) */}
        <div className="col-span-8 p-6 flex flex-col justify-between">
          <div className="space-y-4">
            {/* Header info */}
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <span className="text-[10px] text-slate-900 font-black uppercase tracking-wider">
                Accredited Hardware
              </span>
              <span className="px-2 py-0.5 rounded-full bg-slate-100 text-slate-900 text-[9px] font-black">
                {PRODUCTS_MAP[activeCategory].length} Options
              </span>
            </div>

            {/* Dynamic Grid */}
            <div className="grid grid-cols-2 pb-10 gap-3 max-h-[300px] overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-slate-100 hover:scrollbar-thumb-slate-200">
              {PRODUCTS_MAP[activeCategory].map((item) => (
                <Link
                  key={item.slug}
                  to={`/product/${item.slug}`}
                  onClick={onClose}
                  className="group flex items-center justify-between p-2.5 bg-slate-50/20 hover:bg-white border border-slate-300/30 hover:border-slate-200/60 hover:shadow-lg shadow-black/40 rounded-lg transition-all duration-200"
                >
                  <div className="flex items-center gap-3 truncate">
                    {/* Brand Badge */}
                    <div className="w-8 h-8 rounded-xl bg-[#004093]/5 text-[#004093] text-xs font-black flex items-center justify-center shrink-0 group-hover:bg-[#FE9900]/15 group-hover:text-[#FE9900] transition-colors duration-200">
                      {getInitialBadge(item.name)}
                    </div>
                    <div className="truncate">
                      <h5 className="text-xs font-bold text-slate-800 truncate group-hover:text-[#004093] transition-colors duration-200">
                        {item.name}
                      </h5>
                      <span className="block text-[9px] text-slate-400 font-semibold truncate">
                        {getBrandSubtitle(item.name)}
                      </span>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-300 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-200 shrink-0" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick links footer inside content */}
          <div className="pt-4 border-t border-slate-100 flex justify-between items-center text-[10px] text-slate-900 font-semibold">
            <span className="flex items-center gap-1">
              <Check className="w-3.5 h-3.5 text-emerald-500" /> 25-Year Warranties
            </span>
            <span className="flex items-center gap-1">
              <Check className="w-3.5 h-3.5 text-emerald-500" /> CEC Certified
            </span>
            <a
              href="/#contact"
              onClick={onClose}
              className="text-[#004093] hover:text-[#FE9900] font-black uppercase tracking-wider flex items-center gap-1 transition-colors"
            >
              Book Free Assessment →
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}

export default function Navbar() {
  const location = useLocation()
  const [activeLink, setActiveLink] = useState('Home')
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null)

  const navRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (location.pathname === '/about') {
      setActiveLink('About Us')
    } else if (location.pathname === '/') {
      if (location.hash === '#services') {
        setActiveLink('Services')
      } else if (location.hash === '#products') {
        setActiveLink('Products')
      } else if (location.hash === '#contact') {
        setActiveLink('Contact Us')
      } else {
        setActiveLink('Home')
      }
    }
  }, [location.pathname, location.hash])

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenDropdown(null)
        setMobileOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () =>
      document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleMouseEnter = (e: React.MouseEvent<HTMLElement>) => {
    const btn = e.currentTarget
    const label = btn.querySelector('.pill-label')
    const labelHover = btn.querySelector('.pill-label-hover')
    if (label && labelHover) {
      gsap.to(label, { y: -22, duration: 0.3, ease: 'power2.out', overwrite: 'auto' })
      gsap.fromTo(labelHover,
        { y: 22, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.3, ease: 'power2.out', overwrite: 'auto' }
      )
    }
  }

  const handleMouseLeave = (e: React.MouseEvent<HTMLElement>) => {
    const btn = e.currentTarget
    const label = btn.querySelector('.pill-label')
    const labelHover = btn.querySelector('.pill-label-hover')
    if (label && labelHover) {
      gsap.to(label, { y: 0, duration: 0.25, ease: 'power2.out', overwrite: 'auto' })
      gsap.to(labelHover, { y: 22, opacity: 0, duration: 0.25, ease: 'power2.out', overwrite: 'auto' })
    }
  }

  return (
    <header className="fixed top-4 left-0 right-0 z-50 font-serif">
      <div
        ref={navRef}
        className="relative w-[95%] mx-auto bg-white rounded-full border border-gray-200 shadow-[0_8px_30px_rgba(0,0,0,0.08)]"
      >
        <div className="flex items-center justify-between h-[74px] px-6 lg:px-10">

          {/* Logo */}
          <Link to="/" className="flex items-center shrink-0">
            <img
              src={logo}
              alt="Solearth Energy"
              className="h-14 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-3">
            {NAV_LINKS.map((link) => (
              <div key={link.label} className="relative">
                {link.children ? (
                  <button
                    onClick={() => {
                      setActiveLink(link.label)
                      setOpenDropdown(
                        openDropdown === link.label ? null : link.label
                      )
                    }}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    className={`flex items-center gap-1 px-3 py-2 text-[15px] font-semibold transition-all duration-200 overflow-hidden ${activeLink === link.label
                      ? 'text-[#F8C000]'
                      : 'text-[#1D6FB8] hover:text-[#28A8E0]'
                      }`}
                  >
                    <span className="relative inline-block overflow-hidden h-[22px] leading-[22px]">
                      <span className="pill-label block">
                        {link.label}
                      </span>
                      <span className="pill-label-hover absolute left-0 top-0 block text-[#28A8E0] translate-y-[22px] opacity-0">
                        {link.label}
                      </span>
                    </span>

                    <svg
                      className={`w-4 h-4 transition-transform duration-300 ${openDropdown === link.label ? 'rotate-180' : ''
                        }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                ) : (
                  <Link
                    to={link.href}
                    onClick={() => {
                      setActiveLink(link.label)
                      setOpenDropdown(null)
                    }}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    className={`flex items-center gap-1 px-3 py-2 text-[15px] font-semibold transition-all duration-200 overflow-hidden ${activeLink === link.label
                      ? 'text-[#F8C000]'
                      : 'text-[#1D6FB8] hover:text-[#28A8E0]'
                      }`}
                  >
                    <span className="relative inline-block overflow-hidden h-[22px] leading-[22px]">
                      <span className="pill-label block">
                        {link.label}
                      </span>
                      <span className="pill-label-hover absolute left-0 top-0 block text-[#28A8E0] translate-y-[22px] opacity-0">
                        {link.label}
                      </span>
                    </span>
                  </Link>
                )}

                {activeLink === link.label && (
                  <div className="h-[3px] bg-[#F8C000] rounded-full mx-auto w-8" />
                )}

                {link.children && link.label !== 'Products' && (
                  <DropdownMenu
                    items={link.children}
                    isOpen={openDropdown === link.label}
                  />
                )}
              </div>
            ))}
          </nav>

          {/* CTA */}
          <Link
            to="/#contact"
            className="hidden lg:flex items-center gap-2 bg-[#f5a623] hover:bg-[#e59c15] text-white font-bold px-8 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Get A Quote

            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              {mobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Products Mega Menu centered to navbar */}
        <ProductsMegaMenu
          isOpen={openDropdown === 'Products'}
          onClose={() => setOpenDropdown(null)}
        />

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-gray-100 p-5 bg-white">
            {NAV_LINKS.map((link) => (
              <div key={link.label}>
                {link.children ? (
                  <>
                    <button
                      className="w-full flex items-center justify-between py-3 text-left font-semibold text-gray-700"
                      onClick={() => {
                        setMobileExpanded(
                          mobileExpanded === link.label
                            ? null
                            : link.label
                        )
                      }}
                    >
                      <span>{link.label}</span>
                      <svg
                        className={`w-4 h-4 transition-transform ${mobileExpanded === link.label
                          ? 'rotate-180'
                          : ''
                          }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>

                    {mobileExpanded === link.label && (
                      link.label === 'Products' ? (
                        <div className="pl-4 border-l-2 border-blue-100 space-y-4 max-h-[300px] overflow-y-auto mt-2">
                          {Object.entries(PRODUCTS_MAP).map(([category, items]) => (
                            <div key={category} className="space-y-1">
                              <span className="block text-[10px] font-black uppercase tracking-wider text-[#004093]">
                                {category}
                              </span>
                              {items.map((item) => (
                                <Link
                                  key={item.slug}
                                  to={`/product/${item.slug}`}
                                  className="block py-1 text-xs font-semibold text-gray-600 hover:text-[#FE9900]"
                                  onClick={() => setMobileOpen(false)}
                                >
                                  {item.name}
                                </Link>
                              ))}
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="pl-4 border-l-2 border-blue-100">
                          {link.children.map((child) => (
                            <Link
                              key={child.label}
                              to={child.href}
                              className="block py-2 text-sm text-gray-600"
                              onClick={() => setMobileOpen(false)}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )
                    )}
                  </>
                ) : (
                  <Link
                    to={link.href}
                    className="block w-full py-3 text-left font-semibold text-gray-700"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}

            <Link
              to="/#contact"
              className="mt-4 flex items-center justify-center bg-[#f5a623] text-white font-bold py-3 rounded-full"
              onClick={() => setMobileOpen(false)}
            >
              Get A Quote →
            </Link>
          </div>
        )}
      </div>
    </header>
  )
}