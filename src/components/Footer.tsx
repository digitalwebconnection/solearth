import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ChevronRight, Clock } from 'lucide-react';
import logo from "../assets/Frame 1 (3).webp";
import secLogo from "../assets/downloaded-images/sec-logo.svg";

const QUICK_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Products', href: '/#products' },
  { label: 'About Us', href: '/about' },
  { label: 'Our Projects', href: '/projects' },
  { label: 'Contact Us', href: '/contact' },
];

const OFFICES = [
  {
    state: 'Head Office — Norwest',
    address: 'Suite 20/1 Maitland Pl',
    address2: 'Norwest NSW 2153',
  },
];

export default function Footer() {
  return (
    <footer className="bg-white text-slate-800 font-serif border-t border-slate-200 mt-auto pt-10 md:pt-16">

      {/* ── Main Footer Grid ── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

          {/* Column 1: Brand & Socials */}
          <div className="flex flex-col gap-6 items-center lg:items-start text-center lg:text-left lg:border-r lg:border-slate-100 lg:pr-8">
            <div className="flex items-center gap-2">
              <img
                src={logo}
                alt="SolEarth Energy"
                className="h-20 md:h-24 w-auto object-contain"
                onError={(e) => { e.currentTarget.style.display = 'none' }}
              />
            </div>
            <p className="text-slate-900 text-xs md:text-sm font-semibold leading-relaxed">
              Australia's trusted partner in renewable energy. We deliver high-efficiency solar panel integration and premium battery backup systems across NSW & QLD.
            </p>

          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col lg:border-r lg:border-slate-100 lg:pl-4 lg:pr-8">
            <h4 className="text-[#1B74BB] font-black text-xs uppercase tracking-widest mb-6 flex items-center gap-2">
              <span className="w-1.5 h-3 bg-[#FCC200] rounded-sm"></span>
              Explore Menu
            </h4>
            <ul className="flex flex-col gap-3">
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-slate-900 text-xs md:text-sm font-semibold hover:text-[#1B74BB] transition-colors duration-200 flex items-center gap-1 group"
                  >
                    <ChevronRight size={12} className="text-slate-900 group-hover:text-[#FCC200] transition-colors shrink-0" />
                    <span className="group-hover:translate-x-0.5 transition-transform duration-200">{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Details */}
          <div className="flex flex-col lg:border-r lg:border-slate-100 lg:pl-4 lg:pr-8">
            <h4 className="text-[#1B74BB] font-black text-xs uppercase tracking-widest mb-6 flex items-center gap-2">
              <span className="w-1.5 h-3 bg-[#FCC200] rounded-sm"></span>
              Contact Us
            </h4>
            <ul className="flex flex-col gap-4">
              <li className="flex gap-3 items-start">
                <div className="w-5 h-5 text-[#FCC200] shrink-0 mt-0.5">
                  <Phone size={15} />
                </div>
                <div>
                  <h5 className="text-slate-900 text-[10px] font-black uppercase tracking-wider">Call Us</h5>
                  <a href="tel:0435359431" className="text-slate-800 text-xs md:text-sm font-black hover:text-[#1B74BB] transition">
                    0435 359 431
                  </a>
                </div>
              </li>

              <li className="flex gap-3 items-start">
                <div className="w-5 h-5 text-blue-500 shrink-0 mt-0.5">
                  <Mail size={15} />
                </div>
                <div>
                  <h5 className="text-slate-900 text-[10px] font-black uppercase tracking-wider">Send Email</h5>
                  <a href="mailto:info@solearth.com.au" className="text-slate-800 text-xs md:text-sm font-black hover:text-[#1B74BB] transition break-all">
                    info@solearth.com.au
                  </a>
                </div>
              </li>

              <li className="flex gap-3 items-start">
                <div className="w-5 h-5 text-slate-900 shrink-0 mt-0.5">
                  <Clock size={15} />
                </div>
                <div>
                  <h5 className="text-slate-900 text-[10px] font-black uppercase tracking-wider">Business Hours</h5>
                  <p className="text-slate-800 text-xs md:text-sm font-black">
                    Mon - Fri: 8am - 6pm
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Column 4: Local Offices */}
          <div className="flex flex-col lg:pl-4">
            <h4 className="text-[#1B74BB] font-black text-xs uppercase tracking-widest mb-6 flex items-center gap-2">
              <span className="w-1.5 h-3 bg-[#FCC200] rounded-sm"></span>
              Local Offices
            </h4>
            <div className="flex flex-col gap-5">
              {OFFICES.map((office) => (
                <div key={office.state} className="flex gap-3 items-start">
                  <div className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5">
                    <MapPin size={15} />
                  </div>
                  <div>
                    <h5 className="text-slate-800 font-extrabold text-xs mb-0.5 uppercase tracking-wider">{office.state}</h5>
                    <p className="text-slate-900 text-xs leading-relaxed font-semibold">{office.address}</p>
                    <p className="text-slate-900 text-xs leading-relaxed font-semibold">{office.address2}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* ── Smart Energy Council & Accreditations ── */}
      <div className="border-t border-slate-200 bg-[#fafbfe]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <img
              src={secLogo}
              alt="Smart Energy Council Logo"
              className="h-9 w-auto object-contain opacity-85 hover:opacity-100 transition"
            />
          </div>

          <p className="text-xs font-bold text-slate-900 flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-500 inline-block animate-pulse"></span>
            Clean Energy Council Approved Solar Seller
          </p>
        </div>
      </div>

      {/* ── Policies & Copyright Bar ── */}
      <div className="border-t border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-6 gap-y-2">
            <Link to="/privacy-policy" className="text-slate-800 text-xs hover:text-[#1B74BB] font-semibold transition-colors">Privacy Policy</Link>
            <Link to="/terms-conditions" className="text-slate-800 text-xs hover:text-[#1B74BB] font-semibold transition-colors">Terms & Conditions</Link>
            <Link to="/complaints-policy" className="text-slate-800 text-xs hover:text-[#1B74BB] font-semibold transition-colors">Complaints Policy</Link>
          </div>
          <p className="text-slate-900 text-xs font-semibold">
            ©2026 <strong className="text-slate-800">SOLEARTH ENERGY PTY LTD</strong> ABN 11 111 111 111
          </p>
        </div>
      </div>

      {/* ── Disclaimer Bar ── */}
      <div className="bg-[#fafbfe] border-t border-slate-200/60">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5 flex flex-col md:flex-row items-center md:items-end justify-between gap-6 text-center md:text-left">
          <p className="text-[10px] text-slate-800 leading-relaxed max-w-4xl font-semibold">
            <span className="text-slate-900 font-bold">Disclaimer:</span> This Solar Promotion is valid for standard metro grid-connected installations only. Pricing accounts for Small Scale Technology Certificates (STCs) assigned directly to SolEarth Energy or its partners. Custom layout factors (double-storey, tile/tin roofs, power phases, or switchboard upgrades) may incur charges. Price match guarantees apply to CEC certified quotes for identical hardware.
          </p>
          {/* <div className="flex flex-col items-center md:items-end gap-1.5 shrink-0 text-center md:text-right">
            <p className="text-[10px] text-slate-900 font-semibold italic">*Terms & conditions apply.</p>
            <p className="text-[10px] text-slate-900 font-semibold">
              Developed by{' '}
              <a href="#" className="text-[#1B74BB] hover:underline font-bold">Digital Web Connection</a>
            </p>
          </div> */}
        </div>
      </div>

    </footer>
  );
}
