import { useState, useEffect, useRef } from 'react';
import { Award, FileText, Sun, Zap, Battery, Car } from 'lucide-react';
import { Link } from 'react-router-dom';
import CardSwap, { Card } from './CardSwap';

interface ProductTab {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  subtitle: string;
  image: string;
  accent: string;
  specs: { label: string; value: string }[];
  features: string[];
  brands?: { name: string; slug: string }[];
}

export default function Products() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const tabs: ProductTab[] = [
    {
      id: 'panels',
      label: 'Solar Panels',
      icon: Sun,
      accent: '#f5a623',
      title: 'N-Type TOPCon High-Efficiency Solar Panels',
      subtitle: 'Generate more power per square metre with next-generation TOPCon cells — engineered for Australian rooftops with intense sun exposure and limited space.',
      image: 'https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?auto=format&fit=crop&w=800&q=80',
      specs: [
        { label: 'Cell Technology', value: 'N-Type TOPCon' },
        { label: 'Max Power Output', value: '440W – 475W' },
        { label: 'Module Efficiency', value: 'Up to 22.8%' },
        { label: 'Product Warranty', value: '25 Years (Product + Power)' },
      ],
      features: [
        'Superior performance in overcast & low-light conditions',
        'Bifacial design captures reflected ground light',
        'Anti-PID technology for long-term cell stability',
        'Wind & snow load rated: 2400 Pa / 5400 Pa',
        'Temperature coefficient: –0.30%/°C (best-in-class)',
        'All-black & silver frame options available',
      ],
      brands: [
        { name: 'Jinko Solar', slug: 'jinko-solar-panels' },
        { name: 'JA Solar', slug: 'ja-solar-panels' },
        { name: 'AIKO Solar', slug: 'aiko-solar-panels' },
        { name: 'Trina Solar', slug: 'trina-solar-panels' },
        { name: 'LONGi Solar', slug: 'longi-solar-panels' },
      ],
    },
    {
      id: 'inverters',
      label: 'Hybrid Inverters',
      icon: Zap,
      accent: '#38bdf8',
      title: 'Hybrid Solar Inverters — Single & Three Phase',
      subtitle: 'The intelligent brain of your solar system. Manages solar generation, battery charging, grid export and home consumption seamlessly in one compact unit.',
      image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=800&q=80',
      specs: [
        { label: 'Inverter Type', value: 'Hybrid (Solar + Battery + Grid)' },
        { label: 'Max Efficiency', value: 'Up to 98.6%' },
        { label: 'Phase Options', value: 'Single & Three Phase' },
        { label: 'Warranty', value: '10 Years (Extendable to 15)' },
      ],
      features: [
        'Dual MPPT tracking — maximises every hour of sunshine',
        'Zero-export & feed-in tariff configuration',
        'Built-in arc fault (AFCI) protection standard',
        'Wi-Fi & 4G live monitoring via mobile app',
        'Fanless silent cooling — no moving parts to fail',
        'IP65 rated — suitable for outdoor wall installation',
      ],
      brands: [
        { name: 'GoodWe', slug: 'goodwe-inverters' },
        { name: 'Sungrow', slug: 'sungrow-inverters' },
        { name: 'Growatt', slug: 'growatt-inverters' },
        { name: 'Solis', slug: 'solis-inverters' },
      ],
    },
    {
      id: 'batteries',
      label: 'Solar Batteries',
      icon: Battery,
      accent: '#4ade80',
      title: 'LFP Home Battery Storage — Power Day & Night',
      subtitle: 'Store excess solar energy during daylight and power your entire home through the night. Cobalt-free LFP chemistry for safe, long-lasting residential backup.',
      image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=800&q=80',
      specs: [
        { label: 'Battery Chemistry', value: 'LiFePO4 — Cobalt Free' },
        { label: 'Usable Capacity', value: '5 kWh – 30 kWh (Stackable)' },
        { label: 'Cycle Life', value: '6,000+ Cycles @ 90% DoD' },
        { label: 'Blackout Switchover', value: '< 20ms Automatic' },
      ],
      features: [
        'Whole-home blackout protection (EPS mode)',
        'Modular — add extra battery modules anytime',
        'Time-of-Use scheduling: charge off-peak, sell at peak',
        'Integrated BMS with thermal runaway prevention',
        'Compatible with all major hybrid inverter brands',
        '10-Year product warranty — Australian backed',
      ],
      brands: [
        { name: 'FoxESS', slug: 'foxess-battery' },
        { name: 'Growatt', slug: 'growatt-battery-systems' },
        { name: 'Anker Solix', slug: 'anker-solix-battery-systems' },
        { name: 'Alpha ESS', slug: 'alpha-ess-battery-systems' },
      ],
    },
    {
      id: 'chargers',
      label: 'EV Chargers',
      icon: Car,
      accent: '#a78bfa',
      title: 'Smart Solar-Integrated EV Charging Stations',
      subtitle: 'Charge your EV using 100% free rooftop solar energy. Our smart chargers automatically prioritise surplus solar — so your car charges before energy goes to the grid.',
      image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=800&q=80',
      specs: [
        { label: 'Charging Power', value: '7.4 kW – 22 kW AC' },
        { label: 'Connector Type', value: 'Type 2 Tethered (Universal)' },
        { label: 'Solar Charging Modes', value: 'Eco / Eco+ / Fast / Scheduled' },
        { label: 'Warranty', value: '3 Years Replacement Guarantee' },
      ],
      features: [
        'Solar surplus matching — charge with free energy first',
        'Dynamic load balancing protects home circuit breakers',
        'RFID card & mobile app access & usage tracking',
        'Off-peak scheduling for cheapest grid electricity rates',
        'Compatible with all major EV brands & models',
        'Weatherproof IP54 — outdoor wall-mount installation',
      ],
    },
  ];

  const goTo = (index: number) => {
    const next = ((index % tabs.length) + tabs.length) % tabs.length;
    if (next === activeIndex) return;
    setIsAnimating(true);
    setTimeout(() => { setActiveIndex(next); setIsAnimating(false); }, 300);
  };

  const startInterval = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActiveIndex(prev => {
        const next = (prev + 1) % tabs.length;
        setIsAnimating(true);
        setTimeout(() => setIsAnimating(false), 300);
        return next;
      });
    }, 5000);
  };

  useEffect(() => {
    if (!isHovered) startInterval();
    else if (intervalRef.current) clearInterval(intervalRef.current);
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [isHovered]);

  const currentTab = tabs[activeIndex];

  return (
    <section
      id="products"
      aria-label="Solar Products Catalog"
      className="relative py-10 overflow-hidden bg-white"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <style>{`
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .product-animate { animation: fadeSlideIn 0.35s ease forwards; }
        .product-exit    { opacity: 0; transform: translateY(20px); transition: opacity .3s ease, transform .3s ease; }
        @keyframes tabProgress {
          from { width: 0%; }
          to   { width: 100%; }
        }
      `}</style>

      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full opacity-5 blur-3xl pointer-events-none"
        style={{ background: '#f5a623', transform: 'translate(-40%, -40%)' }} />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full opacity-5 blur-3xl pointer-events-none"
        style={{ background: '#1a6fc4', transform: 'translate(40%, 40%)' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="h-px w-8 bg-[#f5a623]" />
            <span className="text-[#f5a623] text-xs font-bold tracking-[0.2em] uppercase">Premium Hardware</span>
            <span className="h-px w-8 bg-[#f5a623]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0a1f44] leading-tight mb-4">
            Engineered For{' '}
            <span style={{ color: '#f5a623' }}>Performance</span>{' '}
            &amp; Durability
          </h2>

        </div>

        {/* Tab Pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {tabs.map((tab, i) => (
            <button
              key={tab.id}
              onClick={() => goTo(i)}
              className={`relative flex items-center gap-2 px-10 py-2 text-sm font-bold rounded-full transition-all duration-300 overflow-hidden ${activeIndex === i
                ? 'text-white shadow-xl'
                : 'bg-gray-100 text-gray-900 hover:bg-gray-200 border border-gray-200'
                }`}
              style={activeIndex === i ? { background: `linear-gradient(135deg, #1a6fc4, ${tab.accent})`, boxShadow: `0 8px 30px ${tab.accent}55` } : {}}
            >
              <tab.icon className="w-4 h-4 shrink-0" />
              <span>{tab.label}</span>
              {activeIndex === i && !isHovered && (
                <span
                  key={`prog-${activeIndex}`}
                  className="absolute bottom-0 left-0 h-[3px] bg-black/20 rounded-full"
                  style={{ animation: 'tabProgress 5s linear forwards' }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6 items-center">

          {/* LEFT – CardSwap */}
          <div className="lg:col-span-5 relative flex items-center justify-center min-h-[440px]">
            <CardSwap
              activeIndex={activeIndex}
              width={320}
              height={320}
              cardDistance={28}
              verticalDistance={28}
              skewAmount={3}
              easing="elastic"
              onCardClick={(idx) => goTo(idx)}
            >
              {tabs.map((tab, i) => (
                <Card
                  key={tab.id}
                  style={{
                    backgroundImage: `url(${tab.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                  {/* Badge */}
                  <div
                    className="absolute top-4 left-4 z-20 px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider flex items-center gap-1 shadow-md"
                    style={{ background: tab.accent, color: '#0a1f44' }}
                  >
                    <Award className="h-3 w-3" />
                    <span>Tier-1</span>
                  </div>

                  {/* Bottom label overlay */}
                  <div style={{
                    position: 'absolute', inset: 0,
                    background: 'linear-gradient(to top, rgba(10,31,68,0.96) 35%, transparent)',
                    borderRadius: 'inherit',
                    display: 'flex', alignItems: 'flex-end', padding: '20px',
                  }}>
                    <div>
                      <div className="flex items-center gap-1.5 mb-1.5" style={{ color: tab.accent, fontSize: 10, fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                        <tab.icon className="w-3.5 h-3.5 shrink-0" />
                        <span>{tab.label}</span>
                      </div>
                      <p style={{ color: '#fff', fontSize: 13, fontWeight: 700, lineHeight: 1.45, maxWidth: 250 }}>
                        {tab.title}
                      </p>
                    </div>
                  </div>

                  {/* Active glow ring */}
                  {i === activeIndex && (
                    <div style={{
                      position: 'absolute', inset: 0, borderRadius: 'inherit',
                      boxShadow: `0 0 0 3px ${tab.accent}, 0 0 35px ${tab.accent}44`,
                    }} />
                  )}
                </Card>
              ))}
            </CardSwap>
          </div>

          {/* RIGHT – Details */}
          <div
            key={currentTab.id}
            className={`lg:col-span-7 ${isAnimating ? 'product-exit' : 'product-animate'}`}
          >
            {/* Label + Title */}
            <div className="mb-6">
              <div
                className="inline-flex items-center gap-2 text-xs font-extrabold tracking-widest uppercase px-8 py-1.5 rounded-full mb-3"
                style={{ background: '#f5a62322', color: '#000000', border: '2px solid #f5a62344' }}
              >
                <currentTab.icon className="w-4 h-4 text-[#f5a623] shrink-0" />
                <span>{currentTab.label}</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-extrabold text-[#0a1f44] leading-snug mb-3">
                {currentTab.title}
              </h3>
              <p className="text-gray-900 text-sm md:text-base leading-relaxed">
                {currentTab.subtitle}
              </p>
            </div>

            {/* Specs table */}
            <div className="rounded-2xl overflow-hidden mb-6"
            >
              {currentTab.specs.map((spec, i) => (
                <div
                  key={i}
                  className={`flex items-center justify-between px-5 py-3.5 ${i < currentTab.specs.length - 1 ? 'border-b border-gray-300' : ''
                    }`}
                >
                  <span className="text-gray-900 text-sm font-medium">{spec.label}</span>
                  <span
                    className="text-sm font-extrabold px-3 py-1 rounded-lg"
                    style={{ background: '#f5a62318', color: '#f5a623' }}
                  >
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Featured Brands Links */}
            {currentTab.brands && (
              <div className="mb-6">
                <span className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2.5">
                  Explore Featured Brands:
                </span>
                <div className="flex flex-wrap gap-2">
                  {currentTab.brands.map((brand) => (
                    <Link
                      key={brand.slug}
                      to={`/product/${brand.slug}`}
                      className="px-4 py-1.5 bg-gray-50 border border-gray-200 hover:border-[#f5a623] hover:text-[#f5a623] text-xs font-bold text-gray-700 rounded-full transition duration-300"
                    >
                      {brand.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-10 py-2 text-sm font-extrabold rounded-full text-[#0a1f44] transition-all duration-200 shadow-xl hover:-translate-y-0.5"
                style={{ background: '#f5a623', boxShadow: '0 8px 24px #f5a62355' }}
              >
                Request Pricing →
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-10 py-2 text-sm font-bold rounded-full text-gray-700 bg-gray-100 hover:bg-gray-200 border border-gray-200 transition-all duration-200"
              >
                <FileText className="h-4 w-4 text-gray-400" />
                Download Brochure
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
