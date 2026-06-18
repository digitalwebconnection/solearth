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
    image: '/images/solar/commercial-solar-roof.jpg',
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
    image: '/images/solar/solar-commercial-farm.jpg',
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
    image: '/images/solar/solar-residential-house.jpg',
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
    tagline: "Perfect capacity for small businesses, offices, and local retail outlets",
    savings: "Save up to $8,500 / year*",
    heroTitle: "Premium 30kW Commercial Systems",
    introTitle: "Optimize Your Daytime Operational Expenses",
    introDesc: "Small offices, warehouses, and medical clinics run primarily during daylight hours. A 30kW commercial system directly offsets expensive peak corporate tariffs, yielding immediate payback and protection against energy cost volatility.",
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
        image: '/images/solar/solar-panel-rooftop.jpg',
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
        image: '/images/solar/solar-sunset-array.jpg',
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
        image: '/images/solar/solar-residential-house.jpg',
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
        image: '/images/solar/solar-panel-detail.jpg',
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
      title: "Compliance, Design & Protection",
      desc: "We provide full system accountability, CEC-accredited design documentation, and structural safety guarantees for 30kW systems.",
      cards: [
        {
          iconKey: "Award",
          title: "Load Profile Sizing",
          desc: "We model your 12-month interval data to size the commercial array precisely, ensuring maximum daytime offset without over-capitalising on grid exports.",
          points: ["15-minute interval logging", "Solar generation overlays"]
        },
        {
          iconKey: "ShieldCheck",
          title: "Standards & Safety",
          desc: "Full AS/NZS 1170.2 wind loading certificates, CEC compliance audits, dynamic export controls, and secondary grid protection relays are standard.",
          points: ["Region C cyclone ratings", "AS 3000 electrical compliance"]
        },
        {
          iconKey: "HeartHandshake",
          title: "Active Management",
          desc: "Live plant monitoring tracks string performance and issues automated alerts. Full system performance warranties protect your return on investment.",
          points: ["24/7 telemetry monitoring", "Underperformance warnings"]
        }
      ],
      videoSubtitle: "Australia's Most Trusted Solar Retailer",
      videoTitle: "Delivering High-Efficiency Commercial Power",
      videoQuote: "Our corporate division has designed and commissioned over 5MW of commercial solar systems across NSW and QLD. We coordinate closely with facilities managers and network distributors to deliver zero-downtime integration.",
      videoAuthor: "Marcus Vance",
      videoAuthorTitle: "Director of Commercial Projects",
      videoAuthorImage: "/images/solar/solar-tech-worker.jpg",
      videoPlaceholderImage: "/images/solar/solar-aerial-farm.jpg"
    },
    details: {
      panels: {
        title: "Tier 1 Solar Panels",
        spec: "68 x High Output Modules",
        desc: "Commercial-grade glass-glass modules built to withstand harsh coastal and inland wind ratings. Ideal for small to medium office rooftops with limited installation footprint.",
        points: ["25-Year Warranty", "21.9% Module Efficiency", "Optimized temperature coefficient"]
      },
      inverter: {
        title: "Commercial Inverter",
        spec: "25kW Three-Phase Core",
        desc: "Sleek commercial-grade multi-MPPT inverter featuring integrated surge protection devices (SPDs). Perfectly sized for single-phase small business grid connections.",
        points: ["10-Year Local Warranty", "98.5% Conversion Efficiency", "Active heat management"]
      },
      battery: {
        title: "Commercial Battery Ready",
        spec: "Expandable Smart Grid",
        desc: "Fully compliant with commercial battery setups for overnight security lighting and server backups. Pre-wired battery connection points reduce future upgrade costs.",
        points: ["Grid peak-shaving ready", "Scalable commercial design", "Emergency power options"]
      },
      mounting: {
        title: "Commercial Mounts",
        spec: "Penetration-Free Racking",
        desc: "Premium tilt and klip-lok mounts engineered for flat roof and corrugated iron factory structures. Fully compatible with existing roof membranes — no penetrations required.",
        points: ["10-Year Structural Warranty", "Wind-tunnel tested design", "Corrosion resistant anodized alloy"]
      }
    }
  },
  "50kw": {
    title: "50kW Commercial Solar",
    tagline: "Ideal system configuration for manufacturing plants, supermarkets, and schools",
    savings: "Save up to $14,000 / year*",
    heroTitle: "Premium 50kW Commercial Systems",
    introTitle: "High-Capacity Clean Power for Medium Enterprises",
    introDesc: "With a 50kW solar footprint, businesses can drastically lower their scope 2 carbon emissions. Suitable for supermarkets with constant cold-storage draw and schools running multi-classroom heating networks.",
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
        image: '/images/solar/solar-residential-house.jpg',
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
        image: '/images/solar/solar-sunset-array.jpg',
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
        image: '/images/solar/solar-commercial-farm.jpg',
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
        image: '/images/solar/solar-ground-mounted.jpg',
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
      title: "Grid Compliance & Wind Sizing",
      desc: "Engineered safety matrices, structural roof reinforcements, and grid protection systems customized for 50kW commercial designs.",
      cards: [
        {
          iconKey: "Award",
          title: "Peak Shaving Modeling",
          desc: "We analyze high-resolution 15-minute energy spikes to optimize the 50kW system, keeping your demand charges consistently low.",
          points: ["Spike-offset optimization", "Daily peak clipping audits"]
        },
        {
          iconKey: "ShieldCheck",
          title: "Commercial Certification",
          desc: "Fully certified structures engineered to withstand local cyclone ratings, coupled with complete grid connection compliance approvals.",
          points: ["Wind uplift certifications", "DNSP connection validation"]
        },
        {
          iconKey: "HeartHandshake",
          title: "Uptime Guarantees",
          desc: "Active remote monitoring combined with rapid local dispatch technicians to maintain consistent generation performance year-round.",
          points: ["98% system uptime pledge", "Fast-response service crews"]
        }
      ],
      videoSubtitle: "Enterprise Integration",
      videoTitle: "Powering Supermarkets and Schools Reliably",
      videoQuote: "For 50kW installations, we perform zero-disruption structural mounting integrations, guaranteeing that your roof structural integrity is certified and retail trading hours remain completely unaffected.",
      videoAuthor: "Sarah Jenkins",
      videoAuthorTitle: "Senior Grid Integration Lead",
      videoAuthorImage: "/images/solar/solar-engineer-panel.jpg",
      videoPlaceholderImage: "/images/solar/solar-installation-crew.jpg"
    },
    details: {
      panels: {
        title: "Tier 1 Solar Panels",
        spec: "112 x High Output Modules",
        desc: "Advanced N-Type bifacial solar panels capturing additional power reflection from roof surfaces. Designed for medium-scale commercial rooftops with wide open exposure — maximizing bifacial gain from light albedo.",
        points: ["30-Year Performance Warranty", "22.2% Module Efficiency", "Bifacial energy gain up to 15%"]
      },
      inverter: {
        title: "Commercial Inverters",
        spec: "50kW Multi-String Inverter",
        desc: "Industrial grade inverter featuring string-level monitoring, AFCI safety protection, and active grid cooling. Designed for supermarkets and high-draw medium commercial environments.",
        points: ["10-Year Local Warranty", "98.7% Peak Conversion", "Built-in Type II DC/AC SPDs"]
      },
      battery: {
        title: "Battery Storage Ready",
        spec: "High Voltage Ready",
        desc: "Seamless integration with heavy-duty smart industrial batteries to control demand tariff thresholds. Perfect for cold storage facilities that require stable after-hours backup supply.",
        points: ["Peak-shaving configuration", "Backup power for server arrays", "Flexible energy management"]
      },
      mounting: {
        title: "Commercial Mounts",
        spec: "Wind-Rated Heavy Framing",
        desc: "Custom-engineered mounting brackets and frames certified for high wind loads (Region C compliant). Designed specifically for large supermarket and school rooftop installations.",
        points: ["10-Year Structural Warranty", "Australian-sourced raw aluminum", "Klip-Lok sheet compatibility"]
      }
    }
  },
  "100kw": {
    title: "100kW Commercial Solar",
    tagline: "Maximum capacity offset for large-scale factories, cold storage, and logistics hubs",
    savings: "Save up to $30,000 / year*",
    heroTitle: "Premium 100kW Commercial Systems",
    introTitle: "Unlocking Zero-Emission Industrial Scale Operations",
    introDesc: "For heavy industrial operators, agricultural pack houses, and large-scale manufacturing facilities, the 100kW configuration represents a highly cashflow-positive investment. Protects operations against tariff penalties.",
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
        image: '/images/solar/solar-sunset-array.jpg',
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
        image: '/images/solar/solar-inverter-tech.jpg',
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
        image: '/images/solar/commercial-solar-roof.jpg',
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
        image: '/images/solar/solar-aerial-farm.jpg',
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
      title: "SCADA Control & High-Voltage Safety",
      desc: "Full SCADA control capabilities, industrial protection relays, and AS/NZS 1170.2 certified installations for 100kW heavy power needs.",
      cards: [
        {
          iconKey: "Award",
          title: "SCADA Data Integration",
          desc: "Industrial-grade monitoring links with your plant SCADA or BMS system, providing comprehensive line-level telemetry logs.",
          points: ["SCADA/BMS direct support", "Modbus & Ethernet telemetry"]
        },
        {
          iconKey: "ShieldCheck",
          title: "Heavy-Industry Compliance",
          desc: "Integrated grid protection relays and certified structural support structures approved for heavy wind shear on industrial rooftops.",
          points: ["Industrial relay control", "Region D cyclonic certification"]
        },
        {
          iconKey: "HeartHandshake",
          title: "Yield & Asset Protection",
          desc: "Proactive remote string diagnostics and annual thermal scans guarantee total system safety and maximum operational lifetime yield.",
          points: ["Annual thermal imaging scans", "Remote string fault alerts"]
        }
      ],
      videoSubtitle: "Heavy Industrial Delivery",
      videoTitle: "Zero-Downtime Industrial Integration",
      videoQuote: "We understand that manufacturing and cold-storage operations cannot afford a minute of downtime. Our staged installation procedures guarantee zero impact on your production operations.",
      videoAuthor: "David Chen",
      videoAuthorTitle: "Chief Industrial Engineer",
      videoAuthorImage: "/images/solar/solar-engineer-panel.jpg",
      videoPlaceholderImage: "/images/solar/solar-tech-worker.jpg"
    },
    details: {
      panels: {
        title: "Tier 1 Solar Panels",
        spec: "225 x High Output Modules",
        desc: "High-density monocrystalline panels optimized to maintain stable output even in high-temperature factory environments. Certified for industrial rooftop mounting with superior PID resistance.",
        points: ["25-Year Product Warranty", "22.4% Module Efficiency", "Excellent light absorption profiles"]
      },
      inverter: {
        title: "Commercial Inverters",
        spec: "100kW Core Inverter Hub",
        desc: "Premium commercial central inverter system with remote string monitoring and automated diagnostic alerts. Built for heavy industrial environments with advanced fault isolation and IP65 weatherproofing.",
        points: ["10-Year Local Warranty", "98.9% High Efficiency", "Smart cooling technology"]
      },
      battery: {
        title: "Commercial Battery Ready",
        spec: "Industrial Energy Matrix",
        desc: "Designed for commercial energy storage coupling, shielding factory motors from load startup voltage spikes. Full micro-grid capability for critical manufacturing lines requiring uninterrupted power.",
        points: ["Demand charge reduction", "Micro-grid configurations", "Blackout protection for critical load"]
      },
      mounting: {
        title: "Commercial Mounts",
        spec: "Engineered Bracket Rails",
        desc: "Fully certified roof clamps, aluminum structural channels, and marine-grade stainless hardware. Engineered to AS/NZS 1170.2 for all Australian cyclone and wind loading regions.",
        points: ["10-Year Structural Warranty", "Full AS/NZS 1170.2 certification", "Optimal pitch framing options"]
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
