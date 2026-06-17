import { useState, useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import logo from "../assets/Frame 1 (3).png"
import { Link, useLocation } from 'react-router-dom'
import { Sun, Zap, Battery, Award, Check, ChevronRight, Home, Building2, Wrench } from 'lucide-react'
import { useQuoteModal } from './QuoteModal'

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  {
    label: 'Services',
    href: '/#services',
    children: [

      {
        label: 'Residential Solar',
        href: '/residential/6-6kw',
        children: [
          { label: '6.6kW Solar System', href: '/residential/6-6kw' },
          { label: '10.3kW Solar System', href: '/residential/10-3kw' },
          { label: '13.2kW Solar System', href: '/residential/13-2kw' },
          { label: '20kW Solar System', href: '/residential/20kw' },
          { label: 'Smart EV Charger', href: '/residential/ev-charger' },
        ]
      },
      {
        label: 'Commercial Solar',
        href: '/commercial/30kw',
        children: [
          { label: '30kW Solar System', href: '/commercial/30kw' },
          { label: '50kW Solar System', href: '/commercial/50kw' },
          { label: '100kW Solar System', href: '/commercial/100kw' },
        ]
      },
      {
        label: 'Solar Services',
        href: '/services/installation',
        children: [
          { label: 'Solar Panel Installation', href: '/services/installation' },
          { label: 'Solar Panel Cleaning', href: '/services/cleaning' },
          { label: 'Solar Panel Maintenance', href: '/services/maintenance' },
        ]
      }
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
  { label: 'Our Projects', href: '/projects' },
  { label: 'Contact Us', href: '/contact' },
]

function DropdownMenu({
  items,
  isOpen,
  onClose,
}: {
  items: any[]
  isOpen: boolean
  onClose?: () => void
}) {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)

  return (
    <div
      className={`absolute top-full left-1/2 -translate-x-1/2 mt-3 w-64 bg-white rounded-lg shadow-lg border border-slate-205 z-50 transition-all duration-200 ${isOpen
        ? 'opacity-100 translate-y-0 pointer-events-auto'
        : 'opacity-0 -translate-y-2 pointer-events-none'
        }`}
    >
      {/* Top Arrow Pointer */}
      <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-t border-l border-slate-205 rotate-45 z-10" />

      <div className="relative bg-white rounded-lg overflow-hidden z-20 py-1">
        {items.map((item) => {
          const hasChildren = !!item.children;
          const isHovered = hoveredItem === item.label;

          return (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => {
                if (hasChildren) setHoveredItem(item.label)
              }}
              onMouseLeave={() => {
                if (hasChildren) setHoveredItem(null)
              }}
            >
              {hasChildren ? (
                <div
                  className="w-full flex items-center justify-between px-5 py-3 text-xs font-bold text-slate-705 text-slate-700 hover:bg-[#004093]/5 hover:text-[#004093] transition-all duration-155 cursor-pointer border-b border-slate-50 last:border-b-0"
                >
                  <span>{item.label}</span>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                </div>
              ) : (
                <Link
                  to={item.href}
                  onClick={onClose}
                  className="block px-5 py-3 text-xs font-bold text-slate-705 text-slate-700 hover:bg-[#004093]/5 hover:text-[#004093] transition-all duration-155 border-b border-slate-50 last:border-b-0"
                >
                  {item.label}
                </Link>
              )}

              {/* Sub-sub dropdown menu */}
              {hasChildren && (
                <div
                  className={`absolute left-full top-0 ml-1 w-56 bg-white rounded-lg shadow-lg border border-slate-205 z-50 transition-all duration-200 ${isHovered
                    ? 'opacity-100 translate-x-0 pointer-events-auto'
                    : 'opacity-0 -translate-x-2 pointer-events-none'
                    }`}
                >
                  <div className="py-1">
                    {item.children.map((subItem: any) => (
                      <Link
                        key={subItem.label}
                        to={subItem.href}
                        onClick={() => {
                          if (onClose) onClose();
                          setHoveredItem(null);
                        }}
                        className="block px-5 py-2.5 text-[11px] font-bold text-slate-650 hover:bg-[#004093]/5 hover:text-[#004093] transition-all duration-150 border-b border-slate-50 last:border-b-0"
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

const SERVICES_MAP = {
  "Residential Solar": [
    { name: "6.6kW Solar System", subtitle: "Perfect for couples & small homes", href: "/residential/6-6kw" },
    { name: "10.3kW Solar System", subtitle: "The gold standard for modern families", href: "/residential/10-3kw" },
    { name: "13.2kW Solar System", subtitle: "Zero-compromise energy independence", href: "/residential/13-2kw" },
    { name: "20kW Solar System", subtitle: "Large homes & multi-phase power", href: "/residential/20kw" },
    { name: "Smart EV Charger", subtitle: "Smart vehicle charging integration", href: "/residential/ev-charger" },
  ],
  "Commercial Solar": [
    { name: "30kW Solar System", subtitle: "Ideal for small offices & shops", href: "/commercial/30kw" },
    { name: "50kW Solar System", subtitle: "Perfect for medium commercial builds", href: "/commercial/50kw" },
    { name: "100kW Solar System", subtitle: "Maximum savings for large industries", href: "/commercial/100kw" },
  ],
  "Solar Services": [
    { name: "Solar Panel Installation", subtitle: "CEC-accredited professional installation", href: "/services/installation" },
    { name: "Solar Panel Cleaning", subtitle: "Maximize system efficiency & output", href: "/services/cleaning" },
    { name: "Solar Panel Maintenance", subtitle: "Comprehensive health checks & repair", href: "/services/maintenance" },
  ],
};

function ServicesMegaMenu({
  isOpen,
  onClose,
  onMouseEnter,
  onMouseLeave,
}: {
  isOpen: boolean
  onClose: () => void
  onMouseEnter?: () => void
  onMouseLeave?: () => void
}) {
  const [activeCategory, setActiveCategory] = useState<"Residential Solar" | "Commercial Solar" | "Solar Services">("Residential Solar");
  const { openQuoteModal } = useQuoteModal()

  const getInitialBadge = (name: string) => {
    if (name.includes("6.6kW")) return "6.6";
    if (name.includes("10.3kW")) return "10";
    if (name.includes("13.2kW")) return "13";
    if (name.includes("20kW")) return "20";
    if (name.includes("EV")) return "EV";
    if (name.includes("30kW")) return "30";
    if (name.includes("50kW")) return "50";
    if (name.includes("100kW")) return "100";
    if (name.includes("Installation")) return "IN";
    if (name.includes("Cleaning")) return "CL";
    if (name.includes("Maintenance")) return "MA";
    return "SS";
  };

  const tabs = [
    {
      id: "Residential Solar" as const,
      title: "Residential Solar",
      desc: "5 Package Options",
      icon: <Home className="w-5 h-5" />,
      colorClass: "text-[#FE9900]",
      bgClass: "bg-[#FE9900]/10",
      activeBg: "border-l-4 border-l-[#FE9900]",
    },
    {
      id: "Commercial Solar" as const,
      title: "Commercial Solar",
      desc: "3 System Capacities",
      icon: <Building2 className="w-5 h-5" />,
      colorClass: "text-sky-500",
      bgClass: "bg-sky-500/10",
      activeBg: "border-l-4 border-l-sky-500",
    },
    {
      id: "Solar Services" as const,
      title: "Solar Services",
      desc: "Maintenance & Care",
      icon: <Wrench className="w-5 h-5" />,
      colorClass: "text-emerald-500",
      bgClass: "bg-emerald-500/10",
      activeBg: "border-l-4 border-l-emerald-500",
    },
  ];

  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
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
                      ? "bg-white shadow-lg shadow-black/5 border border-slate-200 " + tab.activeBg
                      : "hover:bg-slate-100/50 border border-transparent"
                      }`}
                  >
                    <div className={`p-2.5 rounded-xl shadow-lg shadow-black/5 ${tab.bgClass} ${tab.colorClass} shrink-0`}>
                      {tab.icon}
                    </div>
                    <div>
                      <h4 className="text-sm font-extrabold text-[#004093]">
                        {tab.title}
                      </h4>
                      <span className="text-[10px] font-bold text-slate-500">
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
              <span>CEC Accredited</span>
            </div>
            <p className="text-[10.5px] leading-relaxed text-slate-500 font-medium">
              Expert energy solutions and lifetime maintenance by CEC-accredited engineers.
            </p>
            <button
              onClick={() => {
                onClose()
                openQuoteModal('Services Mega Menu assessment')
              }}
              className="inline-flex items-center gap-2 text-xs font-black text-[#FE9900] hover:text-[#004093] transition group/btn cursor-pointer bg-transparent border-none p-0"
            >
              Get Free Assessment
              <span className="transform group-hover/btn:translate-x-1 transition-transform">→</span>
            </button>
          </div>
        </div>

        {/* Right Side: Tab Contents (65% width / col-span-8) */}
        <div className="col-span-8 p-6 flex flex-col justify-between">
          <div className="space-y-4">
            {/* Header info */}
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <span className="text-[10px] text-slate-400 font-black uppercase tracking-wider">
                Services & Capacity
              </span>
              <span className="px-2 py-0.5 rounded-full bg-slate-100 text-slate-800 text-[9px] font-black">
                {SERVICES_MAP[activeCategory].length} Options
              </span>
            </div>

            {/* Dynamic Grid */}
            <div className="grid grid-cols-2 pb-10 gap-3 max-h-[300px] overflow-y-auto pr-1">
              {SERVICES_MAP[activeCategory].map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={onClose}
                  className="group flex items-center justify-between p-2.5 bg-slate-50/20 hover:bg-white border border-slate-100 hover:border-slate-200/60 hover:shadow-lg shadow-black/5 rounded-lg transition-all duration-200"
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
                      <span className="block text-[9px] text-slate-450 truncate">
                        {item.subtitle}
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
              <Check className="w-3.5 h-3.5 text-emerald-500" /> 10-Year Workmanship
            </span>
            <span className="flex items-center gap-1">
              <Check className="w-3.5 h-3.5 text-emerald-500" /> CEC Certified Installers
            </span>
            <button
              onClick={() => {
                onClose()
                openQuoteModal('Services Mega Menu assessment')
              }}
              className="text-[#004093] hover:text-[#FE9900] font-black uppercase tracking-wider flex items-center gap-1 transition-colors cursor-pointer bg-transparent border-none p-0"
            >
              Book Free Assessment →
            </button>
          </div>
        </div>

      </div>
    </div>
  );
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
  onMouseEnter,
  onMouseLeave,
}: {
  isOpen: boolean
  onClose: () => void
  onMouseEnter?: () => void
  onMouseLeave?: () => void
}) {
  const [activeCategory, setActiveCategory] = useState<"Solar Panels" | "Solar Inverters" | "Solar Batteries">("Solar Panels");
  const { openQuoteModal } = useQuoteModal()

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
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
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
            <button
              onClick={() => {
                onClose()
                openQuoteModal('Products Mega Menu assessment')
              }}
              className="inline-flex items-center gap-2 text-xs font-black text-[#FE9900] hover:text-[#004093] transition group/btn cursor-pointer bg-transparent border-none p-0"
            >
              Get Free Assessment
              <span className="transform group-hover/btn:translate-x-1 transition-transform">→</span>
            </button>
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
            <button
              onClick={() => {
                onClose()
                openQuoteModal('Products Mega Menu assessment')
              }}
              className="text-[#004093] hover:text-[#FE9900] font-black uppercase tracking-wider flex items-center gap-1 transition-colors cursor-pointer bg-transparent border-none p-0"
            >
              Book Free Assessment →
            </button>
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
  const { openQuoteModal } = useQuoteModal()

  const navRef = useRef<HTMLDivElement>(null)
  const hoverTimeoutRef = useRef<any>(null)

  const handleDropdownOpen = (label: string) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current)
      hoverTimeoutRef.current = null
    }
    setOpenDropdown(label)
  }

  const handleDropdownClose = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current)
    }
    hoverTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null)
    }, 150)
  }

  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current)
      }
    }
  }, [])

  useEffect(() => {
    if (location.pathname === '/about') {
      setActiveLink('About Us')
    } else if (location.pathname === '/projects') {
      setActiveLink('Our Projects')
    } else if (location.pathname === '/contact') {
      setActiveLink('Contact Us')
    } else if (location.pathname === '/') {
      if (location.hash === '#services') {
        setActiveLink('Solar Services')
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
        <div className="flex items-center justify-between h-[74px] px-6 lg:px-4">

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
              <div
                key={link.label}
                className="relative"
                onMouseEnter={(e) => {
                  handleMouseEnter(e);
                  if (link.children) {
                    handleDropdownOpen(link.label);
                  }
                }}
                onMouseLeave={(e) => {
                  handleMouseLeave(e);
                  if (link.children) {
                    handleDropdownClose();
                  }
                }}
              >
                {link.children ? (
                  <button
                    onClick={() => {
                      setActiveLink(link.label)
                      setOpenDropdown(
                        openDropdown === link.label ? null : link.label
                      )
                    }}
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

                {link.children && link.label !== 'Products' && link.label !== 'Services' && (
                  <DropdownMenu
                    items={link.children}
                    isOpen={openDropdown === link.label}
                    onClose={() => setOpenDropdown(null)}
                  />
                )}
              </div>
            ))}
                    {/* CTA */}
          <button
            onClick={() => openQuoteModal('Navbar CTA')}
            className="hidden lg:flex items-center gap-2 bg-[#f5a623] hover:bg-[#e59c15] text-white font-bold px-8 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer"
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
          </button>
          </nav>

  

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

        {/* Services Mega Menu centered to navbar */}
        <ServicesMegaMenu
          isOpen={openDropdown === 'Services'}
          onClose={() => setOpenDropdown(null)}
          onMouseEnter={() => handleDropdownOpen('Services')}
          onMouseLeave={handleDropdownClose}
        />

        {/* Products Mega Menu centered to navbar */}
        <ProductsMegaMenu
          isOpen={openDropdown === 'Products'}
          onClose={() => setOpenDropdown(null)}
          onMouseEnter={() => handleDropdownOpen('Products')}
          onMouseLeave={handleDropdownClose}
        />

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-gray-100 p-5 bg-white max-h-[calc(100vh-100px)] overflow-y-auto rounded-b-2xl shadow-xl">
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
                        <div className="pl-4 border-l-2 border-blue-100 space-y-2">
                          {link.children.map((child: any) => (
                            <div key={child.label}>
                              {child.children ? (
                                <div className="space-y-1 py-1">
                                  <span className="block text-xs font-bold text-slate-800 uppercase tracking-wider">
                                    {child.label}
                                  </span>
                                  <div className="pl-3 border-l border-slate-200 space-y-1">
                                    {child.children.map((subChild: any) => (
                                      <Link
                                        key={subChild.label}
                                        to={subChild.href}
                                        className="block py-1.5 text-xs text-gray-600 hover:text-[#004093] font-semibold"
                                        onClick={() => setMobileOpen(false)}
                                      >
                                        {subChild.label}
                                      </Link>
                                    ))}
                                  </div>
                                </div>
                              ) : (
                                <Link
                                  to={child.href}
                                  className="block py-2 text-sm text-gray-600 font-semibold"
                                  onClick={() => setMobileOpen(false)}
                                >
                                  {child.label}
                                </Link>
                              )}
                            </div>
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

            <button
              className="mt-4 w-full flex items-center justify-center bg-[#f5a623] text-white font-bold py-3 rounded-full cursor-pointer"
              onClick={() => {
                setMobileOpen(false)
                openQuoteModal('Mobile Navbar CTA')
              }}
            >
              Get A Quote →
            </button>
          </div>
        )}
      </div>
    </header>
  )
}