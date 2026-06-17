import PixelTransition from '../../components/PixelTransition';
import { Award, FileText, Zap, Handshake, CheckCircle2, Map } from 'lucide-react';

const reasons = [
  {
    title: 'CEC Accredited Installers',
    desc: 'All our engineers are Clean Energy Council accredited, ensuring the highest installation standards.',
    icon: Award,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbiHj6oGG1ciRu1l1txSzsOzPn6ph2W-vyrg&s'
  },
  {
    title: 'Government Rebates Applied',
    desc: 'We handle all the paperwork so you automatically receive maximum STC government rebates.',
    icon: FileText,
    image: '/images/solar/solar-residential-house.jpg'
  },
  {
    title: 'Premium Tier-1 Panels',
    desc: 'We only install Tier-1 bankable solar panels with proven performance and longevity.',
    icon: Zap,
    image: '/images/solar/solar-panel-rooftop.jpg'
  },
  {
    title: 'After-Sales Support',
    desc: 'Our dedicated support team is available 7 days a week for monitoring, servicing and advice.',
    icon: Handshake,
    image: '/images/solar/solar-engineer-panel.jpg'
  },
  {
    title: 'Transparent Pricing',
    desc: 'No hidden fees. What you see in our quote is exactly what you pay — guaranteed.',
    icon: CheckCircle2,
    image: 'https://gb.solar/wp-content/uploads/2024/12/The-Science-Behind-Solar-Panels_-Understanding-Efficiency-and-Durability.jpg'
  },
  {
    title: 'Local Australian Company',
    desc: 'Proudly Australian-owned and operated with offices in NSW and QLD.',
    icon: Map,
    image: '/images/solar/solar-aerial-farm.jpg'
  }
];

export default function WhyUsSection() {
  return (
    <section id="why-us" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-16 space-y-4">
          <div className="flex items-center justify-center space-x-2.5">
            <span className="h-0.5 w-8 bg-[#F8C000] rounded-full" />
            <span className="text-xs font-bold text-[#1B74BB] uppercase tracking-widest">Our Advantage</span>
            <span className="h-0.5 w-8 bg-[#F8C000] rounded-full" />
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-bold leading-tight text-[#0a1f44] tracking-tight">
            Why Australians Choose SolEarth
          </h2>
          <p className="text-sm md:text-base leading-relaxed text-slate-900 max-w-7xl mx-auto">
            We're committed to making your switch to solar seamless, affordable, and rewarding for decades to come.
          </p>
        </div>

        {/* Reasons Grid with Pixel Transition Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((r) => (
            <PixelTransition
              key={r.title}
              gridSize={20}
              pixelColor="#1B74BB"
              animationStepDuration={0.4}
              aspectRatio="75%"
              className="w-full rounded-lg border border-slate-300 shadow-lg shadow-black hover:shadow-xl hover:border-[#1B74BB]/35 transition-all duration-300 overflow-hidden bg-slate-900"
              firstContent={
                <div className="relative w-full h-full group overflow-hidden">
                  {/* Dark gradient tint overlay */}
                  <div className="absolute inset-0 bg-slate-950/40 transition-colors duration-300 group-hover:bg-slate-950/25 z-10" />
                  <img
                    src={r.image}
                    alt={r.title}
                    className="w-full h-full object-cover transition-transform duration-700 scale-105 group-hover:scale-100"
                  />
                  {/* Title overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-linear-to-t from-slate-950/90 via-slate-950/40 to-transparent text-left z-20">
                    <div className="flex items-center gap-3">
                      <span className="p-2 bg-white/10 rounded-xl backdrop-blur-xs text-[#F8C000] filter drop-shadow-md">
                        <r.icon className="w-6 h-6 stroke-2" />
                      </span>
                      <h3 className="text-2xl md:text-3xl font-serif font-semibold text-white tracking-tight filter drop-shadow-md">
                        {r.title}
                      </h3>
                    </div>
                  </div>
                </div>
              }
              secondContent={
                <div className="w-full h-full p-6 bg-linear-to-br from-[#0a1f44] to-[#122e60] text-left flex flex-col justify-between border-2 border-[#1B74BB]/30 rounded-3xl relative overflow-hidden">
                  {/* Subtle technical grid background line pattern */}
                  <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-size-[14px_24px]" />
                  
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="p-2.5 bg-white/5 border border-white/10 rounded-2xl text-[#F8C000]">
                        <r.icon className="w-8 h-8 stroke-[1.75]" />
                      </span>
                      <span className="h-1.5 w-6 bg-[#F8C000] rounded-full animate-pulse" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-serif font-semibold text-white tracking-tight mb-2">
                      {r.title}
                    </h3>
                    <p className="text-sm md:text-base leading-relaxed text-slate-300">
                      {r.desc}
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-1.5 text-[#28A8E4] text-[10px] font-black uppercase tracking-wider mt-4">
                    <span>SolEarth Certified</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F8C000]" />
                  </div>
                </div>
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}
