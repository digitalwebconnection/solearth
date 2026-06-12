import { useState, useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import logo from "../assets/Frame 1 (3).png"
import { Link, useLocation } from 'react-router-dom'

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
        className="w-[95%] mx-auto bg-white rounded-full border border-gray-200 shadow-[0_8px_30px_rgba(0,0,0,0.08)]"
      >
        <div className="flex items-center justify-between h-[74px] px-6 lg:px-10">

          {/* Logo */}
          <Link to="/" className="flex items-center shrink-0">
            <img
              src={logo}
              alt="Aussie Sun Solar"
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

                {link.children && (
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