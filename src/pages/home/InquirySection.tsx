import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import solarPanelImg from '../../assets/solar_panel_render.webp';
import expandingSolarImg from '../../assets/expanding_solar.webp';
import solarBatteryImg from '../../assets/solar_battery_hybrid.webp';
import batteryStorageImg from '../../assets/battery_storage.webp';
import allBatteryNew from '../../assets/downloaded-images/all-battery-new.webp';
import batteryNew from '../../assets/downloaded-images/battery-new.webp';
import smartCubeAllInOne from '../../assets/downloaded-images/smart-cube-all-in-one.webp';

const tabImageMap: Record<string, string> = {
  'new-solar': solarPanelImg,
  'expand-solar': expandingSolarImg,
  'solar-battery': solarBatteryImg,
  'only-battery': batteryStorageImg,
};

const OPTION_TABS = [
  { id: 'new-solar', label: 'New Solar System' },
  { id: 'expand-solar', label: 'Expanding existing Solar System' },
  { id: 'solar-battery', label: 'New Solar System & Solar Battery' },
  { id: 'only-battery', label: 'I Have Solar & Just need Battery' },
];

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
} as const;



const tabVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: 'spring', stiffness: 100, damping: 15 }
  },
} as const;

const formFieldVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { type: 'spring', stiffness: 120, damping: 18 }
  },
} as const;

export default function InquirySection() {
  const [selectedTab, setSelectedTab] = useState('new-solar');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
  });

  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <section id="inquiry" className="py-10 md:py-24 bg-linear-to-b from-[#fafbfc] to-white relative overflow-hidden">
      {/* Subtle Dotted Grid Background */}
      <div 
        className="absolute inset-0 opacity-[0.25] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#28A8E4 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      {/* Subtle Floating Gradients */}
      <motion.div
        animate={{
          x: [0, 40, -40, 0],
          y: [0, -40, 40, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-12 left-10 w-[300px] h-[300px] bg-[#28A8E4]/5 rounded-full blur-[90px] pointer-events-none"
      />
      <motion.div
        animate={{
          x: [0, -50, 50, 0],
          y: [0, 50, -50, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute bottom-12 right-10 w-[400px] h-[400px] bg-[#1B74BB]/5 rounded-full blur-[110px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Title */}
        <div className="text-center mb-10">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 80, damping: 15 }}
            className="text-3xl md:text-5xl font-extrabold text-[#0a1f44] tracking-tight relative inline-block text-center"
          >
            What are you looking for?
            {/* Animated Bottom Line */}
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: '80%' }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-1 bg-linear-to-r from-[#28A8E4] to-[#1B74BB] mx-auto mt-4 rounded-full"
            />
          </motion.h2>
        </div>

        {/* Categories Tab Selector with Staggered Entrance & Thumbnails */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center font-serif gap-3 md:gap-4 mb-10"
        >
          {OPTION_TABS.map((tab) => {
            const isActive = selectedTab === tab.id;
            return (
              <motion.button
                key={tab.id}
                variants={tabVariants}
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedTab(tab.id)}
                className={`px-5 py-3 rounded-xl text-xs md:text-sm font-bold border transition-all duration-300 relative overflow-hidden cursor-pointer flex items-center gap-2.5 ${
                  isActive
                    ? 'bg-[#1B74BB] text-white border-[#1B74BB] shadow-lg shadow-[#1B74BB]/20'
                    : 'bg-white text-gray-700 border-gray-400 hover:border-[#28A8E4] hover:text-[#1B74BB] hover:shadow-md'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeTabOutline"
                    className="absolute inset-0 bg-[#1B74BB] -z-10"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
                {/* Small Thumbnail image */}
                <span className={`w-6 h-6 rounded-lg overflow-hidden flex items-center justify-center shrink-0 border transition-all duration-300 ${isActive ? 'border-white/20 bg-white/10' : 'border-gray-200 bg-gray-50'}`}>
                  <img src={tabImageMap[tab.id]} className="w-full h-full object-cover scale-110" alt="" />
                </span>
                <span className="relative z-10">{tab.label}</span>
              </motion.button>
            );
          })}
        </motion.div>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          
          {/* Left Column (Desktop) / Top Column (Mobile): Inquiry Form Card with stagger fields */}
          <div className="lg:col-span-7 lg:order-1 order-first">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              onMouseMove={handleMouseMove}
              className="bg-white rounded-lg border border-gray-300 p-8 md:p-10 shadow-xl shadow-gray-700/70 hover:shadow-2xl  hover:shadow-gray-600/50 transition-all duration-300 relative overflow-hidden group"
            >
              {/* Spotlight Radial Glow */}
              <div 
                className="absolute pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
                style={{
                  width: '500px',
                  height: '500px',
                  background: 'radial-gradient(circle, rgba(40,168,228,0.08) 0%, rgba(27,116,187,0.03) 60%, transparent 100%)',
                  left: `${coords.x - 250}px`,
                  top: `${coords.y - 250}px`,
                  transform: 'translate3d(0, 0, 0)',
                }}
              />

              {/* Highlight accent border line on form card */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-linear-to-r from-[#28A8E4] to-[#1B74BB] z-10" />

              <AnimatePresence mode="wait">
                {!formSubmitted ? (
                  <motion.form
                    key={selectedTab} // re-animate fields slightly when category tab changes
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-6 relative z-10"
                  >
                    <motion.div variants={formFieldVariants} className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        className="w-full px-5 py-3.5 rounded-xl border border-gray-200 bg-gray-50/50 focus:bg-white focus:border-[#1B74BB] focus:ring-4 focus:ring-[#1B74BB]/5 outline-none transition-all duration-200 text-gray-800 font-medium placeholder:text-gray-400"
                      />
                    </motion.div>

                    <motion.div variants={formFieldVariants} className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="johndoe@example.com"
                        className="w-full px-5 py-3.5 rounded-xl border border-gray-200 bg-gray-50/50 focus:bg-white focus:border-[#1B74BB] focus:ring-4 focus:ring-[#1B74BB]/5 outline-none transition-all duration-200 text-gray-800 font-medium placeholder:text-gray-400"
                      />
                    </motion.div>

                    <motion.div variants={formFieldVariants} className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Contact Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+61 400 000 000"
                        className="w-full px-5 py-3.5 rounded-xl border border-gray-200 bg-gray-50/50 focus:bg-white focus:border-[#1B74BB] focus:ring-4 focus:ring-[#1B74BB]/5 outline-none transition-all duration-200 text-gray-800 font-medium placeholder:text-gray-400"
                      />
                    </motion.div>

                    <motion.div variants={formFieldVariants} className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Installation Address *</label>
                      <input
                        type="text"
                        name="address"
                        required
                        value={formData.address}
                        onChange={handleInputChange}
                        placeholder="123 Renewable Ave, Brisbane QLD 4000"
                        className="w-full px-5 py-3.5 rounded-xl border border-gray-200 bg-gray-50/50 focus:bg-white focus:border-[#1B74BB] focus:ring-4 focus:ring-[#1B74BB]/5 outline-none transition-all duration-200 text-gray-800 font-medium placeholder:text-gray-400"
                      />
                    </motion.div>

                    <motion.div variants={formFieldVariants} className="mt-4 flex justify-center md:justify-start">
                      <button
                        type="submit"
                        className="flex items-center rounded-xl overflow-hidden bg-linear-to-r from-[#28A8E4] to-[#1B74BB] hover:opacity-95 transition-all duration-300 shadow-lg shadow-[#1B74BB]/15 hover:shadow-xl text-white group cursor-pointer"
                      >
                        <span className="px-6 py-3.5 font-extrabold text-xs tracking-wider uppercase">Send Message</span>
                        <span className="bg-[#0e4875] px-4 py-3.5 flex items-center justify-center self-stretch border-l border-white/10 group-hover:pl-5 group-hover:pr-3 transition-all duration-350">
                          <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1.5 transition-transform duration-300" />
                        </span>
                      </button>
                    </motion.div>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col items-center justify-center text-center py-12 relative z-10"
                  >
                    <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-6 shadow-md border border-emerald-200 animate-bounce">
                      <Check className="w-8 h-8 text-emerald-600 stroke-3" />
                    </div>
                    <h3 className="text-2xl font-extrabold text-[#0a1f44] mb-3">Quote Request Sent!</h3>
                    <p className="text-gray-500 max-w-md mb-8 text-sm leading-relaxed">
                      Thank you, <span className="font-semibold text-gray-800">{formData.name}</span>. We've received your request for a <span className="font-semibold text-gray-800">{OPTION_TABS.find(t => t.id === selectedTab)?.label}</span>. One of our CEC-accredited solar engineers will analyze your property profile and call you shortly.
                    </p>
                    <button
                      onClick={() => {
                        setFormSubmitted(false);
                        setFormData({ name: '', email: '', phone: '', address: '' });
                      }}
                      className="px-6 py-2.5 bg-gray-100 hover:bg-gray-250 text-gray-700 text-xs font-bold tracking-wider uppercase rounded-xl transition-all duration-200 cursor-pointer"
                    >
                      Submit Another Request
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>

          {/* Right Column (Desktop) / Bottom Column (Mobile): Solar Panel Image with Parallax Particles */}
          <div className="lg:col-span-5 lg:order-2 order-last flex justify-center relative mt-8 lg:mt-0">
            {/* Floating light particles */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  y: [0, -30 - i * 5, 0],
                  x: [0, Math.sin(i) * 20, 0],
                  opacity: [0.15, 0.45, 0.15],
                }}
                transition={{
                  duration: 5 + i * 1.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: i * 0.4,
                }}
                className="absolute rounded-full bg-[#28A8E4] pointer-events-none z-0"
                style={{
                  width: `${6 + i * 2}px`,
                  height: `${6 + i * 2}px`,
                  left: `${20 + i * 12}%`,
                  top: `${25 + i * 10}%`,
                  filter: 'blur(0.5px)',
                }}
              />
            ))}

            <div className="relative max-w-[340px] md:max-w-[480px] w-full min-h-[350px] flex items-center justify-center">
              {/* Decorative behind glow */}
              <div className="absolute inset-0 bg-linear-to-tr from-[#28A8E4]/10 to-[#1B74BB]/5 " />
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedTab}
                  initial={{ opacity: 0, scale: 0.8, y: 15 }}
                  animate={{ 
                    opacity: 1, 
                    scale: 1, 
                    y: 0,
                  }}
                  exit={{ opacity: 0, scale: 0.8, y: -15 }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                  className="w-full flex justify-center relative z-10"
                >
                  <motion.img
                    animate={{
                      y: [0, -10, 0],
                      rotateY: [0, 5, 0, -5, 0],
                    }}
                    transition={{
                      y: {
                        duration: 6,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      },
                      rotateY: {
                        duration: 12,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }
                    }}
                    src={tabImageMap[selectedTab]}
                    alt="Premium Solar System component"
                    className="w-full h-auto max-h-[420px] object-contain relative z-10 "
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>


        </div>

        {/* Premium Compatible Batteries Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-20 relative max-w-7xl mx-auto  overflow-hidden flex flex-col items-center justify-center text-center group"
        >
          {/* Subtle Glowing Background Spots */}
          <div className="absolute inset-0 bg-linear-to-tr from-[#28A8E4]/5 to-[#1B74BB]/5 opacity-60 z-0 pointer-events-none" />
          
          <h4 className="text-2xl font-extrabold text-gray-900 tracking-wider mb-6 relative z-10">
            Compatible with Premium Battery Systems & Inverters
          </h4>
          
          <motion.div
            animate={{
              y: [0, -8, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-full max-w-7xl flex relative z-10  justify-between"
          >
             <img 
              src={allBatteryNew} 
              alt="Premium Compatible Batteries" 
              className="w-full h-auto max-h-[200px] object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.08)] group-hover:scale-[1.02] transition-transform duration-500"
            />
            <img 
              src={batteryNew} 
              alt="Premium Compatible Batteries" 
              className="w-full h-auto max-h-[200px] object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.08)] group-hover:scale-[1.02] transition-transform duration-500"
            />
            <img 
              src={smartCubeAllInOne} 
              alt="Premium Compatible Batteries" 
              className="w-full h-auto max-h-[200px] object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.08)] group-hover:scale-[1.02] transition-transform duration-500"
            />
          </motion.div>
          
          {/* 3D Pedestal Shadow Effect */}
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[80%] h-[20px] bg-[#1B74BB]/10 blur-xl rounded-full pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
}
