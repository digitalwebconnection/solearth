import { useState } from 'react'
import { X, Sparkles, MapPin, ShieldCheck, Info } from 'lucide-react'
import img1 from '../../assets/HeroImages/1.webp'
import img2 from '../../assets/HeroImages/2.webp'
import img3 from '../../assets/HeroImages/3.webp'
import img4 from '../../assets/HeroImages/4.webp'
import img5 from '../../assets/HeroImages/5.webp'
import img6 from '../../assets/HeroImages/6.webp'


interface Project {
  id: number
  title: string
  category: 'residential' | 'commercial' | 'off-grid' | 'battery'
  categoryLabel: string
  location: string
  size: string
  image: string
  panels: string
  inverter: string
  battery?: string
  dailyYield: string
  annualSavings: string
  commissionDate: string
  description: string
  challenge: string
  solution: string
  testimonial: {
    quote: string
    author: string
    role: string
  }
}

export default function ProjectsGrid() {
  const [activeTab, setActiveTab] = useState<string>('all')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const projects: Project[] = [
    {
      id: 1,
      title: 'Modern Eco-Home Solar & Battery System',
      category: 'residential',
      categoryLabel: 'Residential Solar',
      location: 'Chermside, QLD',
      size: '13.2kW Solar + 15kWh Battery',
      image: img1,
      panels: 'AIKO 440W All-Black Panels (30 units)',
      inverter: 'GoodWe 10kW Hybrid Inverter',
      battery: 'FoxESS 15.2kWh Lithium Battery',
      dailyYield: '58 kWh Avg.',
      annualSavings: '$3,800+',
      commissionDate: 'March 2026',
      description: 'A cutting-edge residential installation combining premium black aesthetic panels with a high-capacity smart battery system for 90% energy independence.',
      challenge: 'The client had a complex multi-gabled roof with partial shading from mature surrounding trees, making traditional series string configurations highly inefficient.',
      solution: 'We engineered a system using AIKO all-back contact panels, leveraging their superior partial-shading performance. Coupled with dual-MPPT GoodWe hybrid inverters and Tigo optimizers on shadowed areas, we maximized generation and integrated a FoxESS high-voltage battery stack.',
      testimonial: {
        quote: 'Solearth designed a beautiful system that fits our slate roof perfectly. Our electricity bills dropped from $1,200 a quarter to a credit of $45.',
        author: 'Sarah & David K.',
        role: 'Homeowners'
      }
    },
    {
      id: 2,
      title: 'Commercial Manufacturing Warehouse',
      category: 'commercial',
      categoryLabel: 'Commercial & Industrial',
      location: 'Wacol, QLD',
      size: '120kW Commercial Rooftop',
      image: img2,
      panels: 'Jinko Solar 475W Tiger Neo TOPCon (252 units)',
      inverter: 'Sungrow 110kW Commercial Inverter',
      dailyYield: '490 kWh Avg.',
      annualSavings: '$28,500+',
      commissionDate: 'November 2025',
      description: 'Large-scale commercial roof design engineered to offset daytime peak manufacturing loads, drastically reducing operational overheads.',
      challenge: 'High operational daytime loads and strict grid export limits enforced by Energex meant the system had to be carefully managed to avoid feeding back to the grid.',
      solution: 'We deployed a 120kW array with zero-export grid limiting meters. The layout was optimized for eastern and western orientations to widen the solar generation curve and match the warehouse daily operating hours.',
      testimonial: {
        quote: 'The return on investment was clear from day one. Solearth handled all network negotiations and structural engineering approvals seamlessly.',
        author: 'Robert Vance',
        role: 'Operations Director, Wacol Manufacturing'
      }
    },
    {
      id: 3,
      title: 'Self-Sustaining Rural Farm Estate',
      category: 'off-grid',
      categoryLabel: 'Off-Grid / Hybrid',
      location: 'Ipswich Outskirts, QLD',
      size: '25kW Off-Grid Microgrid',
      image: img3,
      panels: 'Canadian Solar 445W Bifacial (56 units)',
      inverter: 'Selectronic SP PRO 20kVA + Fronius Symo',
      battery: 'Sigenergy 40kWh Stackable LFP Battery',
      dailyYield: '115 kWh Avg.',
      annualSavings: 'Off-Grid (Saved $45k connection fee)',
      commissionDate: 'January 2026',
      description: 'A completely independent off-grid microgrid supplying power to a luxury farmstead, electric farm machinery, and deep well pumps.',
      challenge: 'The utility grid connection fee was quoted at $45,000. The estate required high surge current to run farm pumps and machinery without voltage drops.',
      solution: 'We built a custom ground-mount array with bifacial Canadian Solar panels to capture reflected light from the soil. The system is anchored by a Selectronic SP PRO interactive inverter and a stackable Sigenergy LFP battery system with a back-up auto-start diesel generator.',
      testimonial: {
        quote: 'We have complete energy security. Even in storms, we have lights, hot water, and a running farm. Highly recommend the off-grid engineering team.',
        author: 'Gregory & Helen M.',
        role: 'Property Owners'
      }
    },
    {
      id: 4,
      title: 'Suburban Smart Solar Installation',
      category: 'residential',
      categoryLabel: 'Residential Solar',
      location: 'Aspley, QLD',
      size: '8.8kW Residential Array',
      image: img4,
      panels: 'Trina Solar Vertex S+ 430W (20 units)',
      inverter: 'Fronius Primo 8.2kW Smart Inverter',
      dailyYield: '38 kWh Avg.',
      annualSavings: '$2,400+',
      commissionDate: 'February 2026',
      description: 'An elegant residential solar layout optimizing a north-facing roof for maximum early morning and late afternoon generation.',
      challenge: 'Strict budget constraints combined with high expectations for component lifespan and warranty backing.',
      solution: 'We installed Trina Solar double-glass N-Type modules, which carry a 25-year product and 30-year performance warranty, matched with a European-made Fronius inverter for reliable long-term performance and app tracking.',
      testimonial: {
        quote: 'The team completed the job in 6 hours. Zero mess left behind. The app tracking is addictive, we love watching our solar output.',
        author: 'Mark Benson',
        role: 'Resident'
      }
    },
    {
      id: 5,
      title: 'Commercial Office Center & EV Hub',
      category: 'commercial',
      categoryLabel: 'Commercial & Industrial',
      location: 'Chermside Business District, QLD',
      size: '80kW Solar + 60kWh Battery Storage',
      image: img5,
      panels: 'DAS Solar 435W Double-Glass Panels (184 units)',
      inverter: 'Sungrow 50kW Hybrid + Commercial Battery System',
      battery: 'Sungrow ST60 Liquid-Cooled LFP Battery',
      dailyYield: '330 kWh Avg.',
      annualSavings: '$19,200+',
      commissionDate: 'October 2025',
      description: 'A combined solar array and battery storage project supplying an office complex and powering 4 rapid EV charging bays.',
      challenge: 'Unpredictable EV charging spikes created peak demand charges from the retail provider. The office complex required backup capability for key servers.',
      solution: 'We integrated an 80kW PV system with a Sungrow ST60 commercial storage unit. The system uses smart peak-shaving software to discharge the battery during EV charge spikes, avoiding peak energy costs.',
      testimonial: {
        quote: 'Our tenants love the carbon-neutral EV charging, and our server room has a bulletproof backup system. Fantastic commercial design.',
        author: 'Linda Sterling',
        role: 'Property Manager'
      }
    },
    {
      id: 6,
      title: 'High-Capacity Home Battery Retrofit',
      category: 'battery',
      categoryLabel: 'Battery Storage',
      location: 'Kedron, QLD',
      size: 'Tesla Powerwall 3 Retrofit',
      image: img6,
      panels: 'Existing Solar System (6.6kW)',
      inverter: 'Tesla Integrated Gateway 2',
      battery: 'Tesla Powerwall 3 (13.5kWh)',
      dailyYield: '13.5 kWh Storage Capacity',
      annualSavings: 'Additional $1,100+',
      commissionDate: 'April 2026',
      description: 'A clean addition of a Tesla Powerwall 3 to a client’s existing solar array, enabling full home backup during storms and peak tariff avoidance.',
      challenge: 'The client had an older solar inverter system that did not support battery communication protocols natively.',
      solution: 'We retrofitted the Tesla Powerwall 3 using AC-coupling via the Tesla Gateway 2. This isolates the grid during power outages and enables storm watch backup activation automatically.',
      testimonial: {
        quote: 'Having the Powerwall kicks in automatically during blackouts. We did not even notice the last storm outage until we looked outside.',
        author: 'Thomas R.',
        role: 'Retired Architect'
      }
    },
  ]

  const filteredProjects = activeTab === 'all'
    ? projects
    : projects.filter(p => p.category === activeTab)

  const tabs = [
    { id: 'all', label: 'All Projects' },
    { id: 'residential', label: 'Residential Solar' },
    { id: 'commercial', label: 'Commercial & Industrial' },
    { id: 'off-grid', label: 'Off-Grid / Hybrid' },
    { id: 'battery', label: 'Battery Storage' }
  ]

  return (
    <section className="py-12 md:py-20 bg-white" id="portfolio">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-0">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12 space-y-4">
          <div className="flex items-center justify-center space-x-2.5">
            <span className="h-0.5 w-8 bg-[#FCC200] rounded-full" />
            <span className="text-xs font-bold text-[#1B74BB] uppercase tracking-widest">Completed Works</span>
            <span className="h-0.5 w-8 bg-[#FCC200] rounded-full" />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
           Solar Panel Project Showcase 
          </h2>
          <p className="text-xs sm:text-sm md:text-base leading-relaxed text-slate-900 font-semibold">
        View our Solar Panel Project Showcase of completed solar and battery projects across Australia, highlighting engineering excellence and long-term energy performance.  </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10 md:mb-12 border-b border-slate-250 pb-6">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 sm:px-5 py-2.5 rounded-full text-xs font-black tracking-wider uppercase transition-all duration-200 cursor-pointer ${activeTab === tab.id
                ? 'bg-[#1B74BB] text-white shadow-lg shadow-blue-500/20'
                : 'bg-slate-50 hover:bg-slate-100 text-slate-800 hover:text-slate-900 border border-slate-400'
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-2xl border border-slate-400 hover:border-[#1B74BB]/30 shadow-xl shadow-slate-400 hover:shadow-2xl overflow-hidden flex flex-col justify-between hover:-translate-y-1 transition-all duration-350"
            >
              <div>
                {/* Image Wrap */}
                <div className="relative h-60 overflow-hidden bg-slate-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-transparent to-transparent" />

                  {/* Category Tag */}
                  <span className="absolute top-4 left-4 bg-white/95 backdrop-blur-md text-[#1B74BB] text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full shadow-sm">
                    {project.categoryLabel}
                  </span>
                </div>

                {/* Card Content */}
                <div className="p-5 sm:p-6 text-left">
                  <h3 className="text-base sm:text-lg font-black text-slate-900 leading-snug group-hover:text-[#1B74BB] transition-colors line-clamp-2">
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Read More button */}
              <div className="px-5 pb-5 sm:px-6 sm:pb-6">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="w-full py-2.5 bg-slate-50 hover:bg-[#1B74BB] hover:text-white text-slate-700 font-extrabold text-xs uppercase tracking-wider rounded-xl border border-slate-200 transition-all cursor-pointer text-center block"
                >
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20 bg-slate-50 rounded-2xl border border-dashed border-slate-200">
            <Info className="w-12 h-12 text-slate-900 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-slate-700">No projects found</h3>
            <p className="text-xs text-slate-900 font-semibold mt-1">We are updating this category soon.</p>
          </div>
        )}

      </div>

      {/* Case Study Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-slate-950/75 backdrop-blur-md transition-opacity"
            onClick={() => setSelectedProject(null)}
          />

          {/* Modal Container */}
          <div className="relative bg-white rounded-2xl shadow-2xl max-w-5xl w-full max-h-[90vh] md:max-h-[85vh] flex flex-col md:grid md:grid-cols-12 border border-slate-250 overflow-hidden z-10 animate-in fade-in zoom-in-95 duration-200">

            {/* Top accent bar */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-linear-to-r from-[#1B74BB] via-[#FCC200] to-[#2AA9E4] z-30" />

            {/* Close button on absolute top-right of container */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-30 p-2 rounded-full bg-slate-100/90 text-slate-750 hover:bg-slate-200 hover:text-slate-900 transition-all cursor-pointer shadow-sm"
            >
              <X className="h-4.5 w-4.5" />
            </button>

            {/* Left Column: Image Banner */}
            <div className="relative h-48 sm:h-60 md:h-auto md:col-span-5 bg-slate-950 flex flex-col justify-end shrink-0">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="absolute inset-0 w-full h-full object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/20 to-transparent" />

              <div className="relative p-6 text-white text-left space-y-2 z-10">
                <span className="bg-[#FCC200] text-slate-950 text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full w-fit block">
                  {selectedProject.categoryLabel}
                </span>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight leading-tight">
                  {selectedProject.title}
                </h3>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-white/80 text-xs font-semibold">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#2AA9E4]" />
                    {selectedProject.location}
                  </span>
                  <span>• Commissioned: {selectedProject.commissionDate}</span>
                </div>
              </div>
            </div>

            {/* Right Column: Scrollable Body Details */}
            <div className="md:col-span-7 flex flex-col overflow-y-auto max-h-[50vh] md:max-h-[85vh] pt-4 md:pt-8">
              <div className="p-5 sm:p-8 space-y-6 text-left">

                {/* Specs Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <div className="space-y-0.5">
                    <span className="block text-[9px] font-black uppercase tracking-wider text-slate-900">System Size</span>
                    <span className="text-xs sm:text-sm font-extrabold text-[#1B74BB]">{selectedProject.size}</span>
                  </div>
                  <div className="space-y-0.5">
                    <span className="block text-[9px] font-black uppercase tracking-wider text-slate-900">Daily Gen</span>
                    <span className="text-xs sm:text-sm font-extrabold text-[#1B74BB]">{selectedProject.dailyYield}</span>
                  </div>
                  <div className="space-y-0.5">
                    <span className="block text-[9px] font-black uppercase tracking-wider text-slate-900">Annual Savings</span>
                    <span className="text-xs sm:text-sm font-extrabold text-emerald-600">{selectedProject.annualSavings}</span>
                  </div>
                  <div className="space-y-0.5">
                    <span className="block text-[9px] font-black uppercase tracking-wider text-slate-900">Compliance</span>
                    <span className="text-[10px] sm:text-xs font-extrabold text-[#1B74BB] flex items-center gap-1">
                      <ShieldCheck className="w-4 h-4 text-emerald-500" />
                      CEC Accredited
                    </span>
                  </div>
                </div>

                {/* Description */}
                <div className="space-y-2">
                  <h4 className="text-xs font-black uppercase tracking-wider text-slate-800 flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-[#FCC200] fill-[#FCC200]" />
                    Project Overview
                  </h4>
                  <p className="text-slate-800 text-xs sm:text-sm leading-relaxed font-semibold">
                    {selectedProject.description}
                  </p>
                </div>

                {/* Challenge vs Solution */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-100">
                  <div className="space-y-1">
                    <h5 className="text-[10px] font-black uppercase tracking-widest text-red-500">The Challenge</h5>
                    <p className="text-slate-800 text-xs leading-relaxed font-medium bg-red-50/50 p-3 rounded-lg border border-red-100/50">
                      {selectedProject.challenge}
                    </p>
                  </div>
                  <div className="space-y-1">
                    <h5 className="text-[10px] font-black uppercase tracking-widest text-emerald-600">The Solution</h5>
                    <p className="text-slate-800 text-xs leading-relaxed font-medium bg-emerald-50/50 p-3 rounded-lg border border-emerald-100/50">
                      {selectedProject.solution}
                    </p>
                  </div>
                </div>

                {/* Equipment & Materials */}
                <div className="pt-4 border-t border-slate-100 space-y-3">
                  <h4 className="text-xs font-black uppercase tracking-wider text-slate-800">Installed Equipment Specs</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-100">
                      <span className="block text-[8px] font-black text-slate-900 uppercase tracking-wider">Solar Panels</span>
                      <span className="text-[10px] font-bold text-slate-700 mt-0.5 block">{selectedProject.panels}</span>
                    </div>
                    <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-100">
                      <span className="block text-[8px] font-black text-slate-900 uppercase tracking-wider">Inverter</span>
                      <span className="text-[10px] font-bold text-slate-700 mt-0.5 block">{selectedProject.inverter}</span>
                    </div>
                    <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-100">
                      <span className="block text-[8px] font-black text-slate-900 uppercase tracking-wider">Battery</span>
                      <span className="text-[10px] font-bold text-slate-700 mt-0.5 block">
                        {selectedProject.battery || 'No Battery Configured'}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Testimonial */}
                <div className="bg-[#1B74BB]/5 p-4 sm:p-5 rounded-2xl border border-[#1B74BB]/10 relative">
                  <span className="absolute -top-3 left-4 text-3xl text-[#FCC200] font-serif">“</span>
                  <p className="italic text-slate-700 text-xs sm:text-sm leading-relaxed font-semibold relative z-10 pl-2">
                    {selectedProject.testimonial.quote}
                  </p>
                  <div className="mt-3 pt-2.5 border-t border-slate-200/50 flex items-center justify-between text-xs font-bold text-slate-800">
                    <span>{selectedProject.testimonial.author}</span>
                    <span className="text-slate-900 font-extrabold uppercase tracking-wider text-[9px]">
                      {selectedProject.testimonial.role}
                    </span>
                  </div>
                </div>

                {/* Action Button */}
                <div className="flex justify-end pt-2">
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-750 font-extrabold text-xs uppercase tracking-wider rounded-xl transition-all cursor-pointer border-none"
                  >
                    Close Details
                  </button>
                </div>

              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
