export interface SystemDetail {
  title: string
  spec: string
  desc: string
  points: string[]
  image?: string
}

export interface CaseStudy {
  id: string
  industry: string
  business: string
  location: string
  systemSize: string
  annualSavings: string
  paybackYears: string
  co2Offset: string
  panelCount: number
  image: string
  highlight: string
  tags: string[]
}

export interface CommercialStat {
  value: string
  label: string
  sub: string
}

export interface SpecsTabConfigData {
  key: string
  label: string
  short: string
  /** Lucide icon name key — mapped to actual component in CommercialSpecs */
  iconKey: 'Sun' | 'Cpu' | 'BatteryCharging' | 'Wrench'
  gradient: string
  glow: string
  accent: string
  ring: string
  bg: string
  textColor: string
  borderActive: string
  image: string
}

export interface ProcessStep {
  /** Lucide icon name key — mapped in CommercialProcess */
  iconKey: 'ClipboardList' | 'ScanSearch' | 'Cpu' | 'HardHat' | 'PlugZap' | 'BarChart3' | 'FileCheck' | 'Lightbulb' | 'Handshake' | 'Settings' | 'Zap' | 'ShieldCheck'
  step: string
  title: string
  desc: string
  stat: string
  statLabel: string
  color: string
  accent: string
}

export interface ComparisonColumn {
  name: string
  iconKey: 'CircleDollarSign' | 'Landmark' | 'Receipt'
  desc: string
  color: string
  bg: string
  accent: string
}

export interface ComparisonRow {
  label: string
  values: string[]
}

export interface TrustCard {
  iconKey: 'Award' | 'ShieldCheck' | 'HeartHandshake'
  title: string
  desc: string
  points: string[]
}

export interface TrustSection {
  tagline: string
  title: string
  desc: string
  cards: TrustCard[]
  videoSubtitle: string
  videoTitle: string
  videoQuote: string
  videoAuthor: string
  videoAuthorTitle: string
  videoAuthorImage: string
  videoPlaceholderImage: string
}

export interface CommercialData {
  title: string
  tagline: string
  savings: string
  heroTitle: string
  introTitle: string
  introDesc: string
  /** Per-page tab visuals for CommercialSpecs */
  specsTabConfig: SpecsTabConfigData[]
  /** Per-page process steps for CommercialProcess */
  processSteps: ProcessStep[]
  comparisonColumns: ComparisonColumn[]
  comparisonRows: ComparisonRow[]
  trustSection: TrustSection
  details: {
    panels: SystemDetail
    inverter: SystemDetail
    battery: SystemDetail
    mounting: SystemDetail
  }
}

export const COMMERCIAL_CASE_STUDIES: CaseStudy[] = [
  {
    id: 'warehouse-sydney',
    industry: 'Logistics & Warehousing',
    business: 'Pacific Freight Logistics',
    location: 'Wetherill Park, NSW',
    systemSize: '100kW',
    annualSavings: '$29,800',
    paybackYears: '3.8 yrs',
    co2Offset: '128 tonnes',
    panelCount: 225,
    image: '/images/solar/commercial-solar-roof.webp',
    highlight: 'Reduced electricity costs by 73% in year one, enabling expansion into second facility.',
    tags: ['100kW System', 'Three-Phase', 'Battery-Ready'],
  },
  {
    id: 'supermarket-qld',
    industry: 'Retail & Grocery',
    business: 'FreshMart Supermarkets',
    location: 'Chermside, QLD',
    systemSize: '50kW',
    annualSavings: '$14,400',
    paybackYears: '4.2 yrs',
    co2Offset: '64 tonnes',
    panelCount: 112,
    image: '/images/solar/solar-commercial-farm.webp',
    highlight: 'Cold-storage and HVAC load fully offset during peak trading hours — a net-zero daytime operation.',
    tags: ['50kW System', 'Cold Storage Offset', 'Demand Reduction'],
  },
  {
    id: 'office-melbourne',
    industry: 'Corporate Office',
    business: 'Meridian Advisory Group',
    location: 'South Melbourne, VIC',
    systemSize: '30kW',
    annualSavings: '$8,900',
    paybackYears: '4.5 yrs',
    co2Offset: '34 tonnes',
    panelCount: 68,
    image: '/images/solar/solar-residential-house.webp',
    highlight: 'Full NABERS energy commitment met in year two, attracting premium corporate tenants.',
    tags: ['30kW System', 'ESG Compliance', 'NABERS Rating'],
  },
]

export const COMMERCIAL_STATS: CommercialStat[] = [
  { value: '5MW+', label: 'Commercial Capacity Installed', sub: 'Across NSW & QLD' },
  { value: '320+', label: 'Commercial Clients', sub: 'Businesses & enterprises' },
  { value: '3–5 yrs', label: 'Average Payback Period', sub: 'Financing available' },
  { value: '98%', label: 'Customer Satisfaction', sub: 'Post-installation surveys' },
]

export const COMMERCIAL_PAGES_DATA: Record<string, CommercialData> = {
  "30kw": {
    title: "30kW Commercial Solar",
    tagline: "A reliable commercial solar solution designed to lower electricity bills and maximize long-term business savings.",
    savings: "Save up to $8,500 / year*",
    heroTitle: "30kW Solar Panel System for Commercial Properties",
    introTitle: "Reduce Business Electricity Costs with Commercial Solar Installation Australia",
    introDesc: "A Commercial Solar Installation Australia solution helps businesses lower operating expenses, reduce dependence on rising electricity prices, and maximize energy savings during peak daytime operations. Ideal for warehouses, offices, manufacturing facilities, and retail businesses, commercial solar systems deliver long-term returns and improved energy efficiency. For larger energy requirements and future business expansion, consider a 50kW Solar System to generate even greater solar power and cost savings.",
    specsTabConfig: [
      {
        key: 'panels',
        label: 'Solar Panels',
        short: '68 Modules',
        iconKey: 'Sun',
        gradient: 'from-amber-500 to-orange-500',
        glow: 'shadow-amber-500/25',
        accent: '#F59E0B',
        ring: 'ring-amber-400/40',
        bg: 'bg-amber-50',
        textColor: 'text-amber-600',
        borderActive: 'border-amber-400',
        image: '/images/solar/solar-panel-rooftop.webp',
      },
      {
        key: 'inverter',
        label: 'Smart Inverter',
        short: '25kW Three-Phase',
        iconKey: 'Cpu',
        gradient: 'from-blue-500 to-indigo-600',
        glow: 'shadow-blue-500/25',
        accent: '#3B82F6',
        ring: 'ring-blue-400/40',
        bg: 'bg-blue-50',
        textColor: 'text-blue-600',
        borderActive: 'border-blue-400',
        image: '/images/solar/solar-sunset-array.webp',
      },
      {
        key: 'battery',
        label: 'Battery Storage',
        short: 'Expandable Grid',
        iconKey: 'BatteryCharging',
        gradient: 'from-emerald-500 to-teal-600',
        glow: 'shadow-emerald-500/25',
        accent: '#10B981',
        ring: 'ring-emerald-400/40',
        bg: 'bg-emerald-50',
        textColor: 'text-emerald-600',
        borderActive: 'border-emerald-400',
        image: '/images/solar/solar-residential-house.webp',
      },
      {
        key: 'mounting',
        label: 'Mounting System',
        short: 'Flat Roof Racking',
        iconKey: 'Wrench',
        gradient: 'from-violet-500 to-purple-700',
        glow: 'shadow-violet-500/25',
        accent: '#8B5CF6',
        ring: 'ring-violet-400/40',
        bg: 'bg-violet-50',
        textColor: 'text-violet-600',
        borderActive: 'border-violet-400',
        image: '/images/solar/solar-panel-detail.webp',
      },
    ],
    processSteps: [
      { iconKey: 'ClipboardList', step: '01', title: 'Free Energy Audit', desc: 'We review your last 12 months of electricity bills to map peak usage windows and calculate the exact system size needed to offset your daytime corporate tariff.', stat: '30min', statLabel: 'avg audit time', color: 'from-blue-500 to-blue-700', accent: '#60A5FA' },
      { iconKey: 'ScanSearch', step: '02', title: 'Roof & Site Survey', desc: 'A CEC-accredited engineer visits your premises to assess roof structure, orientation, shading obstructions, and switchboard capacity for the 30kW installation.', stat: '1 day', statLabel: 'survey turnaround', color: 'from-amber-500 to-orange-600', accent: '#FBBF24' },
      { iconKey: 'FileCheck', step: '03', title: 'Custom Proposal', desc: 'You receive a full system proposal with string layout diagrams, 25-year yield forecasts, ROI timeline, and all applicable government incentive calculations.', stat: '48hrs', statLabel: 'proposal delivery', color: 'from-violet-500 to-purple-700', accent: '#A78BFA' },
      { iconKey: 'PlugZap', step: '04', title: 'Grid Connection & Install', desc: 'We handle the DNSP export application and schedule your installation in a single-day crew deployment — zero disruption to your business during the workday.', stat: '1 day', statLabel: 'install completion', color: 'from-emerald-500 to-teal-600', accent: '#34D399' },
      { iconKey: 'BarChart3', step: '05', title: 'Live Monitoring', desc: 'Your personalised dashboard shows real-time generation, savings, and CO₂ offset data. Our aftercare team proactively flags any underperformance within 24 hours.', stat: '24/7', statLabel: 'performance tracking', color: 'from-sky-500 to-cyan-600', accent: '#38BDF8' },
    ],
    comparisonColumns: [
      { name: 'Power Purchase Agreement (PPA)', iconKey: 'CircleDollarSign', desc: 'Pay only for solar energy generated, with no capital outlay.', color: '#FB923C', bg: 'bg-orange-500/5', accent: '#FB923C' },
      { name: 'Solar Lease / Rent-to-Own', iconKey: 'Landmark', desc: 'Finance over 5-7 years. Savings offset monthly repayments.', color: '#38BDF8', bg: 'bg-[#2AA9E4]/5', accent: '#38BDF8' },
      { name: 'Outright Purchase (CAPEX)', iconKey: 'Receipt', desc: 'Purchase the system upfront to maximize lifetime return.', color: '#34D399', bg: 'bg-emerald-500/5', accent: '#34D399' }
    ],
    comparisonRows: [
      { label: 'Upfront Capital Required', values: ['$0 (Zero Capital)', '$0 (Zero Capital)', '$22,000 - $28,000 est.'] },
      { label: 'System Ownership', values: ['Third-Party Provider', 'Lender (until buyout)', 'Your Company'] },
      { label: 'O&M Responsibility', values: ['Included by Provider', 'Your Responsibility', 'Your Responsibility'] },
      { label: 'Balance Sheet Treatment', values: ['Operating Expense', 'Operating or Capital Lease', 'Asset Capitalization'] },
      { label: 'Primary Tax Benefit', values: ['100% expensable payments', 'Deductible rental payments', 'Instant asset depreciation'] },
      { label: 'Estimated Payback', values: ['Immediate (Day 1)', 'Immediate Cashflow Positive', '4.5 Years'] },
      { label: 'Best Suited For', values: ['Tenants / Small Offices', 'Preserving working capital', 'Maximum lifetime yield'] }
    ],
    trustSection: {
      tagline: "Trust & Quality",
      title: "Commercial Solar System Design, Compliance & Performance",
      desc: "Every commercial solar installation is engineered for maximum energy savings, regulatory compliance, and long-term system performance. Our expert team ensures your solar investment delivers reliable energy generation, reduced operating costs, and complete peace of mind.",
    cards: [
  {
    iconKey: "Award",
    title: "Energy Usage Analysis",
    desc: "We assess your business electricity consumption patterns to design a commercial solar system that maximizes solar energy production, reduces electricity costs, and improves return on investment.",
    points: [
      "Detailed Energy Consumption Analysis",
      "Optimized Solar System Sizing"
    ]
  },
  {
    iconKey: "ShieldCheck",
    title: "Compliance & Safety Standards",
    desc: "Our Commercial Solar Installation Australia solutions are designed to meet Australian electrical, structural, and safety regulations, ensuring reliable operation and long-term asset protection.",
    points: [
      "Australian Standards Compliant",
      "Certified Electrical & Structural Safety"
    ]
  },
  {
    iconKey: "HeartHandshake",
    title: "Smart Performance Monitoring",
    desc: "Monitor your commercial solar power system in real time with advanced performance tracking, energy reporting, and automated alerts to maximize system efficiency and energy savings.",
    points: [
      "24/7 Solar System Monitoring",
      "Automated Performance Alerts"
    ]
  }
],
      videoSubtitle: "Australia's Most Trusted Solar Retailer",
      videoTitle: "Delivering High-Efficiency Commercial Power",
      videoQuote: "Our corporate division has designed and commissioned over 5MW of commercial solar systems across NSW and QLD. We coordinate closely with facilities managers and network distributors to deliver zero-downtime integration.",
      videoAuthor: "Marcus Vance",
      videoAuthorTitle: "Director of Commercial Projects",
      videoAuthorImage: "/images/solar/solar-tech-worker.webp",
      videoPlaceholderImage: "/images/solar/solar-aerial-farm.webp"
    },
    details: {
      panels: {
        title: "Tier 1 Solar Panels",
        spec: "68 × High-Efficiency Commercial Solar Panels",
        desc: "Premium Tier 1 solar panels engineered for maximum energy generation, long-term reliability, and superior performance in Australian conditions. Designed for commercial solar installations, these high-output modules help businesses reduce electricity costs, improve energy efficiency, and maximize rooftop solar production.",
        points: [
          "High-Efficiency Commercial Solar Panels",
          "Excellent Low-Light Energy Performance",
          "Wind & Weather Resistant Design",
          "Ideal for Offices, Warehouses & Commercial Buildings"
        ]
      },
   inverter: {
  title: "Commercial Inverter",
  spec: "25kW Three-Phase Core",
  desc: "High-performance commercial solar inverter designed to maximize solar energy production, improve system efficiency, and support reliable grid-connected operation for Australian businesses. Ideal for commercial solar installations, offices, warehouses, and retail facilities seeking lower electricity costs and long-term energy savings.",
  points: [
    "25kW Three-Phase Commercial Inverter",
    "High Solar Energy Production",
    "Reliable Grid-Connected Operation",
    "Ideal for Offices, Warehouses & Retail Facilities"
  ]
},

battery: {
  title: "Commercial Battery Ready",
  spec: "Expandable Smart Grid",
  desc: "Designed for future energy storage integration, this solution allows businesses to add commercial battery systems, increase energy independence, and maximize the value of their solar panels Australia investment. Pre-configured battery compatibility helps reduce future upgrade costs while supporting backup power and smarter energy management.",
  points: [
    "Commercial Battery Storage Ready",
    "Future Energy Storage Integration",
    "Backup Power Compatible",
    "Smarter Energy Management"
  ]
},

mounting: {
  title: "Commercial Mounts",
  spec: "Penetration-Free Racking",
  desc: "Premium commercial solar mounting systems designed for maximum durability, structural integrity, and long-term performance. Compatible with warehouses, factories, office buildings, and industrial facilities, these mounting solutions ensure secure installation of solar panels Australia while maximizing rooftop energy generation.",
  points: [
    "Engineered Roof Mounting Solutions",
    "Compatible with Commercial & Industrial Buildings",
    "Maximum Structural Integrity",
    "Long-Term Performance & Durability"
  ]
}
    }
  },



  "50kw": {
    title: "50kW Commercial Solar",
    tagline: "High-performance 50kW Solar Panel Systems designed to reduce business electricity costs, maximize solar energy generation, and deliver long-term savings for warehouses, factories, schools, supermarkets, and commercial facilities.",
    savings: "Save up to $14,000 / year*",
    heroTitle: "50kW Solar Panel Systems for Australian Businesses",
    introTitle: "Reduce Energy Costs with a Commercial Solar Panel System ",
    introDesc: "A Commercial Solar Panel System helps businesses reduce electricity costs, improve energy efficiency, and generate reliable renewable energy. For smaller commercial operations, a 30kW Solar System offers a cost-effective solution with strong long-term energy savings.",
    specsTabConfig: [
      {
        key: 'panels',
        label: 'Solar Panels',
        short: '112 Bifacial Modules',
        iconKey: 'Sun',
        gradient: 'from-orange-500 to-red-500',
        glow: 'shadow-orange-500/25',
        accent: '#F97316',
        ring: 'ring-orange-400/40',
        bg: 'bg-orange-50',
        textColor: 'text-orange-600',
        borderActive: 'border-orange-400',
        image: '/images/solar/solar-residential-house.webp',
      },
      {
        key: 'inverter',
        label: 'Multi-String Inverter',
        short: '50kW Multi-String',
        iconKey: 'Cpu',
        gradient: 'from-sky-500 to-blue-700',
        glow: 'shadow-sky-500/25',
        accent: '#0EA5E9',
        ring: 'ring-sky-400/40',
        bg: 'bg-sky-50',
        textColor: 'text-sky-600',
        borderActive: 'border-sky-400',
        image: '/images/solar/solar-sunset-array.webp',
      },
      {
        key: 'battery',
        label: 'Battery Storage',
        short: 'High Voltage Ready',
        iconKey: 'BatteryCharging',
        gradient: 'from-teal-500 to-cyan-600',
        glow: 'shadow-teal-500/25',
        accent: '#14B8A6',
        ring: 'ring-teal-400/40',
        bg: 'bg-teal-50',
        textColor: 'text-teal-600',
        borderActive: 'border-teal-400',
        image: '/images/solar/solar-commercial-farm.webp',
      },
      {
        key: 'mounting',
        label: 'Mounting System',
        short: 'Wind-Rated Framing',
        iconKey: 'Wrench',
        gradient: 'from-rose-500 to-pink-600',
        glow: 'shadow-rose-500/25',
        accent: '#F43F5E',
        ring: 'ring-rose-400/40',
        bg: 'bg-rose-50',
        textColor: 'text-rose-600',
        borderActive: 'border-rose-400',
        image: '/images/solar/solar-ground-mounted.webp',
      },
    ],
    processSteps: [
      { iconKey: 'Lightbulb', step: '01', title: 'Load Profile Analysis', desc: 'We model your supermarket or school energy usage by hour, identifying cold-storage peaks, HVAC cycles, and lighting loads to optimally size the 50kW system.', stat: '1hr', statLabel: 'detailed analysis', color: 'from-orange-500 to-amber-600', accent: '#FB923C' },
      { iconKey: 'ScanSearch', step: '02', title: 'Engineering Site Survey', desc: 'Structural engineers assess your roof load ratings, calculate wind uplift forces, and evaluate the DNSP export limit for a 50kW three-phase commercial connection.', stat: '1 day', statLabel: 'on-site assessment', color: 'from-sky-500 to-blue-600', accent: '#38BDF8' },
      { iconKey: 'Cpu', step: '03', title: 'Bifacial Array Design', desc: 'Our engineers produce string-optimized N-Type bifacial panel layouts, maximizing east-west exposure and eliminating inter-row shading losses across large roof areas.', stat: '5 days', statLabel: 'design completion', color: 'from-violet-500 to-indigo-600', accent: '#A78BFA' },
      { iconKey: 'HardHat', step: '04', title: 'Permits & Multi-Phase Install', desc: 'All permits are managed in-house. Our multi-crew installation team completes the 50kW array in 2–3 days with zero disruption to retail trading hours.', stat: '2–3 days', statLabel: 'install duration', color: 'from-teal-500 to-emerald-600', accent: '#2DD4BF' },
      { iconKey: 'ShieldCheck', step: '05', title: 'Commissioning & Aftercare', desc: 'Our CEC-accredited electricians commission the full grid-connected system, issue compliance certificates, and set up your live monitoring portal with performance guarantees.', stat: '10yr', statLabel: 'inverter warranty', color: 'from-rose-500 to-pink-600', accent: '#FB7185' },
    ],
    comparisonColumns: [
      { name: 'Power Purchase Agreement (PPA)', iconKey: 'CircleDollarSign', desc: 'Pay only for solar energy generated, with no capital outlay.', color: '#FB923C', bg: 'bg-orange-500/5', accent: '#FB923C' },
      { name: 'Solar Lease / Rent-to-Own', iconKey: 'Landmark', desc: 'Finance over 5-7 years. Savings offset monthly repayments.', color: '#38BDF8', bg: 'bg-[#2AA9E4]/5', accent: '#38BDF8' },
      { name: 'Outright Purchase (CAPEX)', iconKey: 'Receipt', desc: 'Purchase the system upfront to maximize lifetime return.', color: '#34D399', bg: 'bg-emerald-500/5', accent: '#34D399' }
    ],
    comparisonRows: [
      { label: 'Upfront Capital Required', values: ['$0 (Zero Capital)', '$0 (Zero Capital)', '$38,000 - $48,000 est.'] },
      { label: 'System Ownership', values: ['Third-Party Provider', 'Lender (until buyout)', 'Your Company'] },
      { label: 'O&M Responsibility', values: ['Included by Provider', 'Your Responsibility', 'Your Responsibility'] },
      { label: 'Balance Sheet Treatment', values: ['Operating Expense', 'Operating or Capital Lease', 'Asset Capitalization'] },
      { label: 'Primary Tax Benefit', values: ['100% expensable payments', 'Deductible rental payments', 'Instant asset depreciation'] },
      { label: 'Estimated Payback', values: ['Immediate (Day 1)', 'Immediate Cashflow Positive', '4.2 Years'] },
      { label: 'Best Suited For', values: ['Supermarkets & Retail', 'Preserving working capital', 'Maximum lifetime yield'] }
    ],
    trustSection: {
      tagline: "Medium Enterprise Trust",
      title: "Commercial Solar System Design, Compliance & Performance",
      desc: "Every commercial solar panel system is engineered for maximum energy savings, grid compliance, and long-term reliability, helping businesses reduce electricity costs and improve operational efficiency.",
    cards: [
  {
    iconKey: "Award",
    title: "Energy Consumption Analysis",
    desc: "We evaluate your business energy usage to optimize system sizing, maximize solar generation, and reduce peak demand charges for greater commercial energy savings.",
    points: [
      "Energy Usage Assessment",
      "Peak Demand Reduction Strategy"
    ]
  },
  {
    iconKey: "ShieldCheck",
    title: "Compliance & Safety Standards",
    desc: "Our commercial solar installation solutions meet Australian electrical, structural, and grid connection requirements, ensuring safe and reliable long-term operation.",
    points: [
      "Australian Standards Compliant",
      "Grid Connection & Safety Approved"
    ]
  },
  {
    iconKey: "HeartHandshake",
    title: "Smart Performance Monitoring",
    desc: "Advanced monitoring tools provide real-time visibility into solar energy production, system health, and performance trends to maximize return on investment.",
    points: [
      "24/7 System Monitoring",
      "Automated Performance Alerts"
    ]
  }
],
      videoSubtitle: "Enterprise Integration",
      videoTitle: "Powering Supermarkets and Schools Reliably",
      videoQuote: "For 50kW installations, we perform zero-disruption structural mounting integrations, guaranteeing that your roof structural integrity is certified and retail trading hours remain completely unaffected.",
      videoAuthor: "Sarah Jenkins",
      videoAuthorTitle: "Senior Grid Integration Lead",
      videoAuthorImage: "/images/solar/solar-engineer-panel.webp",
      videoPlaceholderImage: "/images/solar/solar-installation-crew.webp"
    },
 details: {
  panels: {
    title: "Tier 1 Solar Panels",
    spec: "112 x High Output Modules",
    desc: "Premium Tier 1 Solar Panels engineered for maximum energy generation, helping businesses reduce electricity costs and improve long-term solar performance. Designed for commercial solar panel systems, these advanced bifacial modules capture direct and reflected sunlight to increase energy output across large-scale commercial rooftops.",
    points: [
      "High-Efficiency N-Type Bifacial Solar Panels",
      "Maximum Energy Generation",
      "Reduced Electricity Costs",
      "Enhanced Bifacial Energy Output"
    ]
  },

  inverter: {
    title: "Commercial Inverters",
    spec: "50kW Multi-String Inverter",
    desc: "High-performance commercial solar inverter designed to maximize energy generation, improve system efficiency, and deliver reliable power for commercial solar panel systems. Featuring advanced monitoring and smart energy management, it helps businesses reduce electricity costs and optimize solar performance.",
    points: [
      "50kW Smart Commercial Inverter",
      "Advanced Performance Monitoring",
      "Smart Energy Management",
      "Reliable Commercial Power Output"
    ]
  },

  battery: {
    title: "Battery Storage Ready",
    spec: "High Voltage Ready",
    desc: "Built for modern commercial solar panel systems, this battery-ready solution enables businesses to maximize solar self-consumption, lower electricity costs, and maintain uninterrupted operations during power outages.",
    points: [
      "Commercial Energy Storage Ready",
      "Maximize Solar Self-Consumption",
      "Lower Electricity Costs",
      "Backup Power Capability"
    ]
  },

  mounting: {
    title: "Commercial Mounts",
    spec: "Wind-Rated Heavy Framing",
    desc: "Premium mounting systems designed for commercial solar installations, delivering secure panel support, improved system longevity, and reliable performance in high-wind environments. Ideal for businesses seeking maximum rooftop solar efficiency and long-term energy savings.",
    points: [
      "Heavy-Duty Solar Racking Solutions",
      "Secure Panel Support",
      "High-Wind Performance",
      "Long-Term System Durability"
    ]
  }
}
  },





  "100kw": {
    title: "100kW Commercial Solar",
    tagline: "A powerful commercial solar solution for businesses seeking lower operating costs, greater energy independence, and improved sustainability. ",
    savings: "Save up to $30,000 / year*",
    heroTitle: "100kW Solar Panel Systems in Australia ",
    introTitle: "Maximize Energy Savings with Industrial Solar Power ",
    introDesc: "A 100kW Solar Panel System helps large businesses reduce electricity costs, increase energy efficiency, and generate reliable renewable energy at scale. For smaller commercial facilities, a 30kW Solar System offers a cost-effective solution with strong energy savings and long-term performance. ",
    specsTabConfig: [
      {
        key: 'panels',
        label: 'Solar Panels',
        short: '225 Mono Modules',
        iconKey: 'Sun',
        gradient: 'from-yellow-500 to-amber-600',
        glow: 'shadow-yellow-500/25',
        accent: '#EAB308',
        ring: 'ring-yellow-400/40',
        bg: 'bg-yellow-50',
        textColor: 'text-yellow-600',
        borderActive: 'border-yellow-400',
        image: '/images/solar/solar-sunset-array.webp',
      },
      {
        key: 'inverter',
        label: 'Central Inverter Hub',
        short: '100kW Core Hub',
        iconKey: 'Cpu',
        gradient: 'from-indigo-500 to-blue-800',
        glow: 'shadow-indigo-500/25',
        accent: '#6366F1',
        ring: 'ring-indigo-400/40',
        bg: 'bg-indigo-50',
        textColor: 'text-indigo-600',
        borderActive: 'border-indigo-400',
        image: '/images/solar/solar-inverter-tech.webp',
      },
      {
        key: 'battery',
        label: 'Industrial Battery',
        short: 'Energy Matrix',
        iconKey: 'BatteryCharging',
        gradient: 'from-green-600 to-emerald-700',
        glow: 'shadow-green-500/25',
        accent: '#16A34A',
        ring: 'ring-green-400/40',
        bg: 'bg-green-50',
        textColor: 'text-green-600',
        borderActive: 'border-green-500',
        image: '/images/solar/commercial-solar-roof.webp',
      },
      {
        key: 'mounting',
        label: 'Mounting System',
        short: 'Bracket Rail System',
        iconKey: 'Wrench',
        gradient: 'from-slate-600 to-slate-800',
        glow: 'shadow-slate-500/25',
        accent: '#475569',
        ring: 'ring-slate-400/40',
        bg: 'bg-slate-100',
        textColor: 'text-slate-800',
        borderActive: 'border-slate-400',
        image: '/images/solar/solar-aerial-farm.webp',
      },
    ],
    processSteps: [
      { iconKey: 'Handshake', step: '01', title: 'Industrial Energy Audit', desc: 'Our commercial engineers analyse your 12-month interval data and demand tariff structure to build a business case showing exact payback period for the 100kW deployment.', stat: '48hrs', statLabel: 'report delivery', color: 'from-yellow-500 to-amber-600', accent: '#FCD34D' },
      { iconKey: 'ScanSearch', step: '02', title: 'Structural Engineering Survey', desc: 'Licensed structural engineers assess your factory or warehouse roof for AS/NZS 1170.2 wind load compliance, and prepare certified drawings for council submission.', stat: '2 days', statLabel: 'full site survey', color: 'from-blue-600 to-indigo-700', accent: '#818CF8' },
      { iconKey: 'Settings', step: '03', title: 'Industrial System Design', desc: 'We design a 225-module monocrystalline array with central inverter hub, integrated DC isolators, and SCADA-ready monitoring infrastructure for industrial-grade oversight.', stat: '7 days', statLabel: 'design & drawings', color: 'from-emerald-600 to-teal-700', accent: '#34D399' },
      { iconKey: 'HardHat', step: '04', title: 'Multi-Stage Installation', desc: 'A full commercial installation crew completes work across 5–7 days in planned phases to avoid disrupting production lines, cold stores, or logistics dock operations.', stat: '5–7 days', statLabel: 'staged install', color: 'from-rose-600 to-pink-700', accent: '#FB7185' },
      { iconKey: 'Zap', step: '05', title: 'Grid Commissioning & SCADA', desc: 'Full commissioning with your electricity retailer, DNSP export connection, and live SCADA dashboard providing plant-level energy performance visibility 24/7.', stat: '25yr', statLabel: 'system lifespan', color: 'from-sky-500 to-cyan-600', accent: '#38BDF8' },
    ],
    comparisonColumns: [
      { name: 'Power Purchase Agreement (PPA)', iconKey: 'CircleDollarSign', desc: 'Pay only for solar energy generated, with no capital outlay.', color: '#FB923C', bg: 'bg-orange-500/5', accent: '#FB923C' },
      { name: 'Solar Lease / Rent-to-Own', iconKey: 'Landmark', desc: 'Finance over 5-7 years. Savings offset monthly repayments.', color: '#38BDF8', bg: 'bg-[#2AA9E4]/5', accent: '#38BDF8' },
      { name: 'Outright Purchase (CAPEX)', iconKey: 'Receipt', desc: 'Purchase the system upfront to maximize lifetime return.', color: '#34D399', bg: 'bg-emerald-500/5', accent: '#34D399' }
    ],
    comparisonRows: [
      { label: 'Upfront Capital Required', values: ['$0 (Zero Capital)', '$0 (Zero Capital)', '$75,000 - $95,000 est.'] },
      { label: 'System Ownership', values: ['Third-Party Provider', 'Lender (until buyout)', 'Your Company'] },
      { label: 'O&M Responsibility', values: ['Included by Provider', 'Your Responsibility', 'Your Responsibility'] },
      { label: 'Balance Sheet Treatment', values: ['Operating Expense', 'Operating or Capital Lease', 'Asset Capitalization'] },
      { label: 'Primary Tax Benefit', values: ['100% expensable payments', 'Deductible rental payments', 'Instant asset depreciation'] },
      { label: 'Estimated Payback', values: ['Immediate (Day 1)', 'Immediate Cashflow Positive', '3.8 Years'] },
      { label: 'Best Suited For', values: ['Cold Storage & Factories', 'Preserving working capital', 'Maximum lifetime yield'] }
    ],
    trustSection: {
      tagline: "Industrial Scale Assurance",
      title: "Advanced Commercial Solar Monitoring & Grid Compliance",
      desc: "Our commercial solar power systems combine real-time performance monitoring, grid protection technology, and advanced safety controls to maximize energy generation, system reliability, and long-term business savings.",
     cards: [
  {
    iconKey: "Award",
    title: "Smart Solar Monitoring",
    desc: "Monitor your commercial solar panel system with advanced energy analytics, real-time performance tracking, and automated reporting to optimize solar energy production and operational efficiency.",
    points: [
      "Real-Time Solar Performance Monitoring",
      "Energy Usage & Production Analytics"
    ]
  },
  {
    iconKey: "ShieldCheck",
    title: "Grid Compliance & Electrical Safety",
    desc: "Designed to meet Australian standards, our commercial solar installations include advanced grid protection, electrical safety systems, and compliance documentation for reliable long-term operation.",
    points: [
      "Australian Standards Compliant",
      "Grid Protection & Safety Controls"
    ]
  },
  {
    iconKey: "HeartHandshake",
    title: "System Performance Protection",
    desc: "Protect your solar investment with proactive monitoring, automated alerts, and preventive maintenance insights that help maximize energy yield and system lifespan.",
    points: [
      "Automated Fault Detection & Alerts",
      "Long-Term Solar Performance Optimization"
    ]
  }
],
      videoSubtitle: "Heavy Industrial Delivery",
      videoTitle: "Zero-Downtime Industrial Integration",
      videoQuote: "We understand that manufacturing and cold-storage operations cannot afford a minute of downtime. Our staged installation procedures guarantee zero impact on your production operations.",
      videoAuthor: "David Chen",
      videoAuthorTitle: "Chief Industrial Engineer",
      videoAuthorImage: "/images/solar/solar-engineer-panel.webp",
      videoPlaceholderImage: "/images/solar/solar-tech-worker.webp"
    },
details: {
  panels: {
    title: "Tier 1 Solar Panels",
    spec: "225 x High Output Modules",
    desc: "Premium Tier 1 Solar Panels engineered for maximum energy generation and long-term reliability in demanding industrial environments. Designed for 100kW Solar Panel Systems, these high-performance modules help factories, warehouses, and manufacturing facilities reduce electricity costs while maximizing rooftop solar output.",
    points: [
      "225 × High-Efficiency Industrial Solar Panels",
      "Maximum Energy Generation",
      "Long-Term Industrial Reliability",
      "Ideal for Factories, Warehouses & Manufacturing Facilities"
    ]
  },

  inverter: {
    title: "Commercial Inverters",
    spec: "100kW Core Inverter Hub",
    desc: "Advanced commercial solar inverter designed to maximize energy generation, improve system efficiency, and deliver reliable performance for large-scale industrial and commercial solar installations. Equipped with intelligent monitoring and smart energy management to help businesses reduce electricity costs and optimize solar output.",
    points: [
      "100kW High-Performance Commercial Inverter",
      "Intelligent Monitoring System",
      "Smart Energy Management",
      "Optimized Solar Output"
    ]
  },

  battery: {
    title: "Commercial Battery Ready",
    spec: "Industrial Energy Matrix",
    desc: "Built for large-scale commercial solar power systems, this battery-ready solution enables businesses to maximize solar self-consumption, lower electricity costs, and maintain uninterrupted operations during outages or peak demand periods.",
    points: [
      "Smart Industrial Energy Management",
      "Maximize Solar Self-Consumption",
      "Lower Electricity Costs",
      "Backup Power During Outages"
    ]
  },

  mounting: {
    title: "Commercial Mounts",
    spec: "Engineered Bracket Rails",
    desc: "Premium mounting solutions engineered for commercial solar installations, delivering secure panel support, enhanced system longevity, and reliable performance across large-scale industrial and commercial rooftops.",
    points: [
      "Heavy-Duty Industrial Solar Structures",
      "Secure Panel Support",
      "Enhanced System Longevity",
      "Reliable Large-Scale Performance"
    ]
  }
}
  }
}

export interface FAQItem {
  question: string
  answer: string
}

export const COMMERCIAL_FAQ_DATA: FAQItem[] = [
  {
    question: "How long does a commercial solar installation take?",
    answer: "For a 30kW system, the physical installation is typically completed in 1 to 2 days. 50kW and 100kW systems take between 3 to 7 days depending on roof access and complexity. We plan and execute all work in phases to ensure zero disruption to your daily business operations."
  },
  {
    question: "Are there government rebates or incentives for commercial solar in Australia?",
    answer: "Yes. Systems up to 100kW qualify for Small-scale Technology Certificates (STCs), which act as an upfront discount on the system cost. Systems larger than 100kW generate Large-scale Generation Certificates (LGCs), providing ongoing quarterly revenue. Additionally, businesses can leverage instant asset write-offs and local state-based clean energy grants."
  },
  {
    question: "How does commercial solar financing (PPA vs. Leasing) work?",
    answer: "A Power Purchase Agreement (PPA) allows you to install solar with $0 upfront capital; a provider owns the system and sells you the generated power at a lower rate than your current retailer. A capital lease or chattel mortgage allows you to own the system immediately, paying it off via monthly payments that are often lower than the energy savings generated, resulting in a positive cash-flow investment from day one."
  },
  {
    question: "How do you calculate ROI and payback periods for our business?",
    answer: "We analyze your 12-month interval meter data (15-minute or 30-minute electricity grid logs) to match your real-time consumption with a simulated solar generation curve. By factoring in your current retail tariffs, demand charges, and solar export limits, we establish an accurate payback window—typically between 3 to 5 years for Australian commercial enterprises."
  },
  {
    question: "Can we install commercial solar if we lease our premises?",
    answer: "Yes. Many landlords welcome solar as it increases the property's value and ESG rating. We help structure green leases where the tenant pays a reduced rate for solar power, offsetting the installation costs for the landlord, or we can assist in negotiating lease terms where the solar assets are transferable."
  }
]
