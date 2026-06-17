import { motion } from 'framer-motion';

// Battery Partners
import battery1 from '../../assets/Battery Partners/1.webp';
import battery2 from '../../assets/Battery Partners/2.webp';
import battery3 from '../../assets/Battery Partners/3.webp';
import battery4 from '../../assets/Battery Partners/4.webp';
import battery5 from '../../assets/Battery Partners/5.webp';

// Inverters
import inverter1 from '../../assets/Inverters/1.webp';
import inverter2 from '../../assets/Inverters/2.webp';
import inverter3 from '../../assets/Inverters/3.webp';
import inverter4 from '../../assets/Inverters/4.webp';
import inverter5 from '../../assets/Inverters/5.webp';

// Panels
import panel1 from '../../assets/Panel/1.webp';
import panel2 from '../../assets/Panel/2.webp';
import panel3 from '../../assets/Panel/3.webp';
import panel4 from '../../assets/Panel/4.webp';
import panel5 from '../../assets/Panel/5.webp';

const BRANDS = [
  {
    category: 'Battery Partners',
    color: '#1B74BB',
    logos: [battery1, battery2, battery3, battery4, battery5],
  },
  {
    category: 'Smart Inverter Brands',
    color: '#059669',
    logos: [inverter1, inverter2, inverter3, inverter4, inverter5],
  },
  {
    category: 'Premium Solar Panels',
    color: '#D97706',
    logos: [panel1, panel2, panel3, panel4, panel5],
  },
];

export default function BrandPartnersSection() {
  return (
    <section className="bg-white py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── TOP TITLE BLOCK ─────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-black uppercase tracking-[0.35em] text-[#1B74BB] mb-4">
            Trusted Technology Partners
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#022D62] leading-tight">
            Powered By{' '}
            <span className="text-[#1B74BB]">Leading Solar Brands</span>
          </h2>
          <p className="text-slate-900 text-sm sm:text-base max-w-2xl mx-auto mt-5 leading-relaxed">
            We partner with globally trusted manufacturers to deliver reliable solar systems built for
            performance, efficiency, and long-term energy savings.
          </p>

          {/* Decorative divider */}
          <div className="flex items-center justify-center gap-3 mt-8">
            <div className="h-px w-16 bg-linear-to-r from-transparent to-[#1B74BB]" />
            <div className="h-2 w-2 rounded-full bg-[#1B74BB]" />
            <div className="h-px w-32 bg-[#1B74BB]/30" />
            <div className="h-2 w-2 rounded-full bg-[#F8C000]" />
            <div className="h-px w-16 bg-linear-to-l from-transparent to-[#F8C000]" />
          </div>
        </motion.div>

        {/* ── BOTTOM LOGOS BLOCK ──────────────────────────────── */}
        <div className="space-y-10">
          {BRANDS.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: gi * 0.12 }}
            >
              {/* Category label row */}
              <div className="flex items-center gap-4 mb-6">
                <span
                  className="text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full border"
                  style={{
                    color: group.color,
                    borderColor: group.color + '40',
                    backgroundColor: group.color + '10',
                  }}
                >
                  Trusted Partner
                </span>
                <span className="font-extrabold text-[#022D62] text-sm sm:text-xl">
                  {group.category}
                </span>
                <div className="flex-1 h-px bg-slate-100" />
              </div>

              {/* Logo cards */}
              <div className="grid grid-cols-3 sm:grid-cols-5 gap-4">
                {group.logos.map((logo, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -5, boxShadow: '0 10px 30px rgba(0,0,0,0.08)' }}
                    transition={{ duration: 0.2 }}
                    className="flex items-center justify-center h-20 sm:h-28 rounded-2xl bg-slate-50 border border-slate-100 hover:border-slate-200 transition-colors "
                  >
                    <img
                      src={logo}
                      alt={`${group.category} logo ${idx + 1}`}
                      className="max-h-20 w-auto object-contain"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── BOTTOM TRUST STRIP ──────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-14 pt-8 border-t border-slate-100"
        >
          <p className="text-xs text-slate-800 font-medium text-center sm:text-left">
            All brands are CEC accredited &amp; certified for Australian residential and commercial installations.
          </p>
          <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-100 text-emerald-700 text-[11px] font-black px-4 py-2 rounded-full whitespace-nowrap uppercase tracking-wider">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            Australian Standards Compliant
          </div>
        </motion.div>

      </div>
    </section>
  );
}