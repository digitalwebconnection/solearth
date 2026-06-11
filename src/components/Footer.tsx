const QUICK_LINKS = [
  { label: 'Home', href: '#' },
  { label: 'Products', href: '#' },
  { label: 'About Us', href: '#' },
  { label: 'Our Projects', href: '#' },
  { label: 'Contact Us', href: '#' },
]
import logo from "../assets/Frame 1 (3).png"

const OFFICES = [
  {
    state: 'New South Wales',
    address: 'address line 1',
    address2: 'address line 2',
  },
  {
    state: 'Queensland',
    address: 'address line 1',
    address2: 'address line 2',
  },
]

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-auto">

      {/* ── Main Footer ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Col 1 – Brand */}
          <div className="flex flex-col gap-4">
            {/* Logo block */}
            <div className="flex items-center justify-center gap-2">
              <img
                src={logo}
                alt="SolEarth Energy"
                className="h-24 w-auto object-contain"
                onError={(e) => { e.currentTarget.style.display = 'none' }}
              />

            </div>
            <p className="text-gray-900 text-sm leading-relaxed">
              Australia's trusted partner in renewable energy. We provide high‑efficiency solar panels and battery systems tailored for your needs.
            </p>
          </div>

          {/* Col 2 – Contact Us */}
          <div>
            <h3 className="text-[#1D6FB8] font-bold text-lg mb-5 flex items-center gap-2">
              <span className="w-1 h-6 bg-[#F8C000] rounded-full inline-block"></span>
              Contact Us
            </h3>
            <div className="flex flex-col gap-4">
              {/* Phone */}
              <a
                href="tel:1300672194"
                className="flex items-center gap-3   px-4 py-3 transition-colors group w-fit"
              >
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] font-semibold tracking-widest uppercase opacity-80">Call Us</p>
                  <p className="text-sm font-bold">1300 111 111</p>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:info@solearth.com.au"
                className="flex items-center gap-3   px-4 py-3 transition-colors group w-fit"
              >
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] font-semibold tracking-widest uppercase opacity-80">Email Us</p>
                  <p className="text-sm font-bold">info@solearth.com.au</p>
                </div>
              </a>
            </div>
          </div>

          {/* Col 3 – Our Offices */}
          <div>
            <h3 className="text-[#1D6FB8] font-bold text-lg mb-5 flex items-center gap-2">
              <span className="w-1 h-6 bg-[#F8C000] rounded-full inline-block"></span>
              Our Offices
            </h3>
            <div className="flex flex-col gap-5">
              {OFFICES.map((office) => (
                <div key={office.state} className="flex gap-3">
                  <svg className="w-5 h-5 text-[#F8C000] shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                  <div>
                    <p className="text-[#1D6FB8] font-bold text-sm">{office.state}</p>
                    <p className="text-gray-500 text-sm leading-relaxed">{office.address}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Col 4 – Quick Links */}
          <div>
            <h3 className="text-[#1D6FB8] font-bold text-lg mb-5 flex items-center gap-2">
              <span className="w-1 h-6 bg-[#F8C000] rounded-full inline-block"></span>
              Quick Links
            </h3>
            <ul className="flex flex-col gap-2">
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-600 text-sm hover:text-[#1D6FB8] font-medium transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* ── Smart Energy Council Bar ── */}
      <div className="border-t border-gray-200 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-wrap items-center justify-between gap-4">
          {/* SEC Badge */}
          <div className="flex items-center gap-3">
            <img src="https://aussiesunsolar.com.au/assets/sec-logo-D0BGLpHg.svg" alt="" />
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            {/* Instagram */}
            <a
              href="#"
              className="w-9 h-9 rounded-full border-2 border-gray-300 flex items-center justify-center text-gray-500 hover:border-[#28A8E0] hover:text-[#28A8E0] transition-colors"
              aria-label="Instagram"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            {/* Facebook */}
            <a
              href="#"
              className="w-9 h-9 rounded-full border-2 border-gray-300 flex items-center justify-center text-gray-500 hover:border-[#28A8E0] hover:text-[#28A8E0] transition-colors"
              aria-label="Facebook"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            {/* YouTube */}
            <a
              href="#"
              className="w-9 h-9 rounded-full border-2 border-gray-300 flex items-center justify-center text-gray-500 hover:border-[#28A8E0] hover:text-[#28A8E0] transition-colors"
              aria-label="YouTube"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* ── Policy Bar ── */}
      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-4">
            <a href="#" className="text-gray-500 text-xs hover:text-[#28A8E0] font-medium transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 text-xs hover:text-[#28A8E0] font-medium transition-colors">Terms & Conditions</a>
            <a href="#" className="text-gray-500 text-xs hover:text-[#28A8E0] font-medium transition-colors">Complaints Handling Policy</a>
          </div>
          <p className="text-gray-500 text-xs">
            ©2026 <strong className="text-gray-700">SOLEARTH ENERGY PTY LTD</strong> ABN 11 111 111 111
          </p>
        </div>
      </div>

      {/* ── Disclaimer Bar ── */}
      <div className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-wrap items-end justify-between gap-3">
          <p className="text-xs text-[#1D6FB8] leading-relaxed max-w-3xl">
            This Solar System Promotion is available for standard metropolitan based installations only.{' '}
            <span className="text-gray-500">
              Price is after Small Scale Technology Certificates (STCs) have been assigned to SolEarth Energy Pty Ltd or its agents. Any additional extras including but not limited to double storey, roof type, meter box upgrades or three phase power, may attract additional charges. Price beat offer applies to local competitor advertised quotes only and must be for identical goods.
            </span>
          </p>
          <div className="flex flex-col items-end gap-1 shrink-0">
            <p className="text-xs text-gray-500 font-semibold italic">*Terms and conditions apply.</p>
            <p className="text-xs text-gray-400">
              {'<>'} Developed by{' '}
              <a href="#" className="text-[#1D6FB8] font-semibold hover:underline">Digital Web Connection</a>
            </p>
          </div>
        </div>
      </div>

    </footer>
  )
}
