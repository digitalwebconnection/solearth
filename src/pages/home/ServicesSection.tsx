import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CircularGallery from '../../components/CircularGallery';
import {
  Sun,
  Building2,
  Factory,
  Wrench,
  Droplet,
  ShieldAlert,
  BatteryCharging,
  Cpu,
  RefreshCw,
  Zap,
  MessagesSquare,
  Layout,
  Scale,
  LineChart,
  ArrowUpRight,
  Layers,
  Home,
  Radio,
  Activity,
  Coins,
  ShieldCheck,
  PenTool,
  ClipboardCheck,
  Brain,
  Leaf
} from 'lucide-react';

const SERVICES_LIST = [
  {
     text: 'Residential Solar',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=600&q=80',
    icon: Sun,
    title: 'Residential Solar Installation',
    desc: 'Custom rooftop solar installations tailored to your household energy footprint. Minimize grid dependency and maximize clean energy generation.',
    features: ['Custom design for roofs', 'Premium tier-1 solar panels', 'CEC approved installers'],
  },
  {
    text: 'Commercial Solar',
    image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=600&q=80',
    icon: Building2,
    title: 'Commercial Solar Installation',
    desc: 'Scale up your business with scalable rooftop arrays designed to cut operational electricity expenses and fulfill green corporate objectives.',
    features: ['High capacity arrays', 'Fast ROI & tax benefits', 'Comprehensive grid connection support'],
  },
  {
    text: 'Industrial Solar',
    image: 'https://images.unsplash.com/photo-1548613053-220a29df127b?auto=format&fit=crop&w=600&q=80',
    icon: Factory,
    title: 'Industrial Solar Solutions',
    desc: 'Heavy-duty solar architectures engineered for manufacturing plants, cold stores, and warehouses requiring peak power delivery.',
    features: ['Megawatt-class grids', 'Advanced grid stabilization', 'Power purchase agreements (PPA)'],
  },
  {
    text: 'Panel Maintenance',
    image: 'https://images.unsplash.com/photo-1620000617482-821324eb9a14?auto=format&fit=crop&w=600&q=80',
    icon: Wrench,
    title: 'Solar Panel Maintenance',
    desc: 'Preventative check-ups, electrical testing, and performance optimization to ensure your systems generate maximum power indefinitely.',
    features: ['Routine safety diagnostics', 'Thermal imaging hot-spot checks', 'Performance tuning audits'],
  },
  {
    text: 'Panel Cleaning',
    image: 'https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?auto=format&fit=crop&w=600&q=80',
    icon: Droplet,
    title: 'Solar Panel Cleaning',
    desc: 'Professional dirt, dust, and pollen removal to restore obstructed sunlight absorption and boost conversion rates by up to 25%.',
    features: ['Deionized water wash', 'No harsh chemicals used', 'Safe height-certified staff'],
  },
  {
    text: 'System Inspection',
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=600&q=80',
    icon: ShieldAlert,
    title: 'Solar System Inspection',
    desc: 'Full integrity checks covering wire routing, inverter efficiency, structural racking, and safety switches.',
    features: ['Comprehensive report provided', 'Compliance check with standards', 'Early degradation detection'],
  },
  {
    text: 'Battery Storage',
    image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=600&q=80',
    icon: BatteryCharging,
    title: 'Battery Storage Solutions',
    desc: 'Store surplus solar power generated during peak sun hours for evening operation or blackout protection.',
    features: ['Tesla Powerwall compatible', 'Blackout backup configurations', 'Smart energy management software'],
  },
  {
    text: 'Inverter Installation',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=600&q=80',
    icon: Cpu,
    title: 'Solar Inverter Installation',
    desc: 'Install high-efficiency microinverters or central string inverters that convert DC solar power to household AC safely.',
    features: ['98%+ efficiency ratings', 'Individual module monitoring', '10-25 year warranty options'],
  },
  {
    text: 'Inverter Replacement',
    image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=600&q=80',
    icon: RefreshCw,
    title: 'Solar Inverter Replacement',
    desc: 'Upgrade aging or faulty string inverters to restore your system output and unlock advanced smart home features.',
    features: ['Quick diagnostic assessment', 'Premium replacement brands', 'Grid re-certification'],
  },
  {
    text: 'EV Charging',
    image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=600&q=80',
    icon: Zap,
    title: 'EV Charger Installation',
    desc: 'Integrate a level 2 smart electric vehicle charger that runs directly off your surplus rooftop solar power.',
    features: ['Faster charging rates', 'Solar tracking modes', 'Universal vehicle compatibility'],
  },
  {
    text: 'Energy Consultation',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80',
    icon: MessagesSquare,
    title: 'Solar Energy Consultation',
    desc: 'Personalized bill audit and site compatibility assessment to map out the perfect custom renewable pathway.',
    features: ['Historical usage analysis', 'Shading impact evaluations', 'Accurate financial forecasts'],
  },
  {
    text: 'System Design',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80',
    icon: Layout,
    title: 'Solar System Design',
    desc: 'Precision CAD layout design mapping solar panel locations, string paths, inverter positioning, and conduit routes.',
    features: ['Maximum roof area usage', 'Aesthetic design profiles', 'Wind loading structure tests'],
  },
  {
    text: 'Net Metering Assist',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80',
    icon: Scale,
    title: 'Net Metering Assistance',
    desc: 'Complete handling of grid connection approvals and feed-in tariff enrollment so you get paid for excess solar export.',
    features: ['Retailer comparison service', 'Fast-tracked grid applications', 'Smart meter configuration advice'],
  },
  {
    text: 'Performance Monitor',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80',
    icon: LineChart,
    title: 'Solar Performance Monitoring',
    desc: 'Real-time dashboard tracking solar yield, domestic consumption, grid flows, and module health warnings on your phone.',
    features: ['24/7 automated alerts', 'Cloud analytics integration', 'Mobile application setup'],
  },
  {
    text: 'Upgrades & Expansion',
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=600&q=80',
    icon: ArrowUpRight,
    title: 'Solar Upgrades & Expansion',
    desc: 'Increase your panel capacity or install additional strings to handle growing household power demands from new appliances.',
    features: ['Seamless panel retrofits', 'Inverter overhead verification', 'Hybrid wiring solutions'],
  },
  {
    text: 'Ground-Mounted Solar',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80',
    icon: Layers,
    title: 'Ground-Mounted Solar Systems',
    desc: 'Ideal for rural acreages or commercial land blocks where rooftop space is limited or shaded. Optimized directional orientation.',
    features: ['Fixed tilt & tracking options', 'Heavy-duty steel anchors', 'High wind resistance'],
  },
  {
    text: 'Rooftop Solar Systems',
    image: 'https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?auto=format&fit=crop&w=600&q=80',
    icon: Home,
    title: 'Rooftop Solar Systems',
    desc: 'Standard sloped and flat roof installations utilizing secure, lightweight, corrosion-free racking brackets.',
    features: ['Leak-proof bracket sealing', 'Tile, tin, and slate solutions', 'Low visual impact layouts'],
  },
  {
    text: 'Off-Grid Solutions',
    image: 'https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?auto=format&fit=crop&w=600&q=80',
    icon: Radio,
    title: 'Off-Grid Solar Solutions',
    desc: 'Autonomous solar packages featuring battery banks and backup generators designed for remote locations without grid access.',
    features: ['100% self-sufficient grids', 'Generator auto-start panels', 'Premium battery banks'],
  },
  {
    text: 'Hybrid Solar Systems',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=600&q=80',
    icon: Activity,
    title: 'Hybrid Solar Systems',
    desc: 'The best of both worlds: maintain your grid connection while managing intelligent battery storage to mitigate high-tariff periods.',
    features: ['Smart load shaving algorithms', 'Zero export configuration', 'Grid stability compliance'],
  },
  {
    text: 'Solar Financing',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=600&q=80',
    icon: Coins,
    title: 'Solar Financing Assistance',
    desc: 'Access flexible, green financing plans and interest-free options designed to yield immediate monthly power savings.',
    features: ['Zero deposit structures', 'Flexible pay-back terms', 'Government rebates applied'],
  },
  {
    text: 'Warranty Support',
    image: 'https://images.unsplash.com/photo-1498084393753-b411b2d26b34?auto=format&fit=crop&w=600&q=80',
    icon: ShieldCheck,
    title: 'Solar Warranty Support',
    desc: 'Comprehensive local support covering performance warranties on solar modules, inverters, and our 10-year installation warranty.',
    features: ['Australian support contacts', 'Fast diagnostic resolution', 'No cost equipment swaps'],
  },
  {
    text: 'Solar Repair Services',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80',
    icon: PenTool,
    title: 'Solar Repair Services',
    desc: 'Rapid fault isolation and replacement of broken modules, damaged MC4 connectors, or failed DC isolation switches.',
    features: ['Emergency repair callouts', 'Universal component sourcing', 'System safety compliance checks'],
  },
  {
    text: 'Efficiency Audits',
    image: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=600&q=80',
    icon: ClipboardCheck,
    title: 'Energy Efficiency Audits',
    desc: 'Analyze full building energy profiles to locate heat leakages, parasitic loads, and optimize heavy equipment cycles.',
    features: ['Detailed consumption diagnostics', 'Thermal performance profiling', 'Payback calculation audits'],
  },
  {
    text: 'Smart Management',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80',
    icon: Brain,
    title: 'Smart Energy Management',
    desc: 'AI-driven load orchestration automatically routing solar power to high-consumption devices during peak production hours.',
    features: ['Automated appliance triggers', 'Peak demand price avoidance', 'Home automation integration'],
  },
  {
    text: 'Carbon Consulting',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=600&q=80',
    icon: Leaf,
    title: 'Carbon Footprint Reduction',
    desc: 'Accredit your business under carbon-neutral frameworks. Calculate emission offset credits and plan clean-energy transition models.',
    features: ['Direct carbon offset audits', 'Accredited green reports', 'Corporate sustainability planning'],
  },
];

export default function ServicesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const scrolled = -rect.top;
      const totalScrollable = rect.height - window.innerHeight;
      if (totalScrollable <= 0) return;
      const progress = Math.min(Math.max(0, scrolled / totalScrollable), 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const activeIndex = Math.min(
    Math.max(0, Math.round(scrollProgress * (SERVICES_LIST.length - 1))),
    SERVICES_LIST.length - 1
  );

  const currentService = SERVICES_LIST[activeIndex] || SERVICES_LIST[0];
  const IconComponent = currentService.icon;

  return (
    <section ref={containerRef} id="services" className="relative h-[600vh] bg-white">
      <div className="sticky top-0 h-screen w-full flex flex-col justify-between py-10 overflow-hidden text-[#0a1f44]">
        {/* Background Soft Gradients */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-linear-to-tr from-blue-50/60 to-amber-50/60 rounded-full blur-[120px] pointer-events-none z-0" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50/40 rounded-full blur-[80px] pointer-events-none z-0" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-50/40 rounded-full blur-[80px] pointer-events-none z-0" />

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[radial-gradient(#0a1f44_1px,transparent_1px)] bg-size-[16px_16px] z-0" />

        {/* Top Header */}
        <div className="relative z-10 px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center max-w-7xl mx-auto flex flex-col items-center justify-center">
            <div className="max-w-5xl">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-3 mb-3"
              >
                <span className="h-px w-8 bg-[#F8C000]" />
                <span className="text-[#F8C000] text-xs font-bold tracking-[0.2em] uppercase">Our Capabilities</span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="text-3xl md:text-4xl font-extrabold tracking-tight mb-2 bg-linear-to-r from-[#0a1f44] to-[#1D6FB8] bg-clip-text text-transparent"
              >
                Comprehensive Solar Solutions
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.25 }}
                className="text-gray-500 text-xs md:text-sm max-w-2xl mx-auto"
              >
                Scroll down the page normally to rotate horizontally step-by-step through our 25 capability systems.
              </motion.p>
            </div>
          </div>
        </div>

        {/* Middle Gallery */}
        <div className="relative z-10 px-4 sm:px-6 lg:px-8 w-full flex-1 flex items-center justify-center min-h-[360px] max-h-[420px]">
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-full w-full  sverflow-hidden"
          >
            {/* Subtle HUD Layout */}
            <div className="absolute top-4 left-6 pointer-events-none font-mono text-[9px] text-gray-400 tracking-wider z-20">
              [ ROTATING PORTFOLIO / {SERVICES_LIST.length} SYSTEMS ]
            </div>
            <div className="absolute top-4 right-6 pointer-events-none font-mono text-[9px] text-[#F8C000] flex items-center gap-2 z-20">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F8C000] animate-ping" />
              <span>SCROLL-LINKED TRACK ACTIVE</span>
            </div>

            <CircularGallery
              items={SERVICES_LIST}
              bend={3}
              textColor="#0a1f44"
              borderRadius={0.06}
              scrollEase={0.05}
              scrollSpeed={2.2}
              fontUrl="https://fonts.googleapis.com/css2?family=Outfit:wght@600;800&display=swap"
              font="bold 24px Outfit"
              scrollProgress={scrollProgress}
            />
          </motion.div>
        </div>

        {/* Bottom Details Card */}
        <div className="relative z-10 px-4 sm:px-6 lg:px-8 w-full">
          <div className="w-full max-w-4xl mx-auto z-20">
            <div className="relative min-h-[140px] p-5 rounded-2xl border border-gray-300 bg-white/80 backdrop-blur-xl shadow-lg shadow-black overflow-hidden transition-all duration-300">
              {/* Highlight accent background gradient */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-br from-[#F8C000]/5 to-[#1D6FB8]/5 rounded-full blur-2xl pointer-events-none" />

              <AnimatePresence mode="wait">
                <motion.div
                  key={currentService.title}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.25 }}
                  className="flex flex-col md:flex-row items-center md:items-start gap-4"
                >
                  {/* Left part: icon & title */}
                  <div className="flex items-center gap-3 min-w-[260px] md:border-r border-gray-100 pr-4">
                    <span className="text-3xl filter drop-shadow-md select-none text-[#F8C000]">
                      <IconComponent className="w-8 h-8 stroke-[1.75]" />
                    </span>
                    <div>
                      <span className="text-[10px] font-bold tracking-widest text-[#F8C000] uppercase">ACTIVE CAPABILITY</span>
                      <h3 className="text-lg font-extrabold tracking-tight text-[#0a1f44]">{currentService.title}</h3>
                    </div>
                  </div>

                  {/* Right part: description & features */}
                  <div className="flex-1 flex flex-col gap-2">
                    <p className="text-gray-600 text-xs md:text-sm leading-relaxed text-center md:text-left">
                      {currentService.desc}
                    </p>

                    <div className="flex flex-wrap justify-center md:justify-start gap-x-4 gap-y-1 mt-1 pt-2 border-t border-gray-100">
                      {currentService.features.map((feat, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <span className="w-1 h-1 rounded-full bg-[#F8C000]" />
                          <span className="text-[11px] font-medium text-gray-500">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
