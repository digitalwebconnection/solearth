export interface SystemDetail {
  title: string
  spec: string
  desc: string
  points: string[]
  image?: string
}

export interface TimelineStep {
  num: string
  title: string
  time: string
  desc: string
  checklist: string[]
}

export interface ResidentialData {
  title: string
  tagline: string
  savings: string
  heroBanner: string
  heroBannerSub: string
  introTitle: string
  introDesc: string
  backgroundImage: string
  timeline: TimelineStep[]
  details: {
    panels: SystemDetail
    inverter: SystemDetail
    battery: SystemDetail
    installation: SystemDetail
  }
}

export interface CommercialData {
  title: string
  tagline: string
  savings: string
  heroTitle: string
  introTitle: string
  introDesc: string
  details: {
    panels: SystemDetail
    inverter: SystemDetail
    battery: SystemDetail
    mounting: SystemDetail
  }
}

export interface ServiceData {
  title: string
  heroSubtitle: string
  introTitle: string
  introDesc: string
  features: {
    title: string
    desc: string
  }[]
  difference: {
    title: string
    desc: string
  }[]
}

const DEFAULT_SOLAR_TIMELINE: TimelineStep[] = [
  {
    num: "01",
    title: "Structural Design & Site Survey",
    time: "Day 1 - 2",
    desc: "Our engineering team maps your roof structure, checks shading angles using satellite data, and models your layout to guarantee maximum efficiency output.",
    checklist: [
      "3D Solar roof layout design",
      "Shading impact analysis",
      "Switchboard space evaluation",
      "Structural rafter safety check"
    ]
  },
  {
    num: "02",
    title: "Grid Connection & Permits",
    time: "Day 3 - 7",
    desc: "We handle all utility grid connection applications and government incentive paperwork for you, securing network pre-approvals without any hassle.",
    checklist: [
      "Distributed Energy Resource (DER) registration",
      "STC Government rebate registration",
      "Network connection pre-approval",
      "Meter upgrade order placement"
    ]
  },
  {
    num: "03",
    title: "Professional Installation",
    time: "Day 8 - 14",
    desc: "Our licensed CEC accredited electricians complete the roof mounting rails, DC isolator wiring, and inverter installation. Standard systems take only 1 day to build.",
    checklist: [
      "CEC certified electrician installation",
      "Waterproof roof penetration seals",
      "High-safety DC isolator enclosure",
      "Smart inverter wall mounting"
    ]
  },
  {
    num: "04",
    title: "Commissioning & Handover",
    time: "Day 15",
    desc: "We perform complete insulation testing, activate your switchboard updates, setup your mobile performance tracking app, and submit connection logs.",
    checklist: [
      "Full-load insulation testing",
      "Smartphone application configuration",
      "System startup verification",
      "CEC certificate of compliance handover"
    ]
  }
]

export const RESIDENTIAL_PAGES_DATA: Record<string, ResidentialData> = {
  "6-6kw": {
    title: "6.6kW Solar System",
    tagline: "Perfect entry-level package for small households & couples",
    savings: "Save up to $1,800 / year*",
    heroBanner: "6.6kW Solar Package Offer",
    heroBannerSub: "Complete system from just $3,990* fully installed",
    introTitle: "Powering Small Australian Homes Efficiently",
    introDesc: "Our 6.6kW solar system is the most popular residential choice across NSW & QLD. It strikes the perfect balance between upfront affordability and maximum household offset, providing clean energy to run standard appliances throughout the day.",
    backgroundImage: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=1600",
    timeline: DEFAULT_SOLAR_TIMELINE,
    details: {
      panels: {
        title: "Tier 1 Solar Panels",
        spec: "15 x Premium Modules",
        desc: "High-efficiency monocrystalline solar panels with exceptional low-light performance.",
        points: ["25-Year Product Warranty", "21.8% Module Efficiency", "Salt-mist & Ammonia resistant"],
        image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=600"
      },
      inverter: {
        title: "Smart Solar Inverter",
        spec: "5kW Single-Phase",
        desc: "Intelligent string inverter with built-in Wi-Fi monitoring and smart export control features.",
        points: ["10-Year Local Warranty", "98.4% Peak Efficiency", "IP66 Protection rating"],
        image: "https://images.unsplash.com/photo-1620038614049-9d97a5f9c996?auto=format&fit=crop&q=80&w=600"
      },
      battery: {
        title: "Battery Ready System",
        spec: "Hybrid Inverter Upgrade",
        desc: "Ready to pair with lead-storage or lithium-ion systems for complete overnight power backup.",
        points: ["Seamless plug-and-play storage", "Backup power routing capability", "VPP (Virtual Power Plant) ready"],
        image: "https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?auto=format&fit=crop&q=80&w=600"
      },
      installation: {
        title: "Premium Installation",
        spec: "CEC Certified Engineers",
        desc: "Professional site survey, wind-rated roof racking, and lifetime workmanship workmanship warranty protection.",
        points: ["10-Year Workmanship Warranty", "Clean Energy Council Approved", "Safety switch integration"],
        image: "https://images.unsplash.com/photo-1542332213-9b5a5a3f3c5b?auto=format&fit=crop&q=80&w=600"
      }
    }
  },
  "10-3kw": {
    title: "10.3kW Solar System",
    tagline: "The gold standard configuration for active families & medium homes",
    savings: "Save up to $2,800 / year*",
    heroBanner: "10.3kW Solar Package Offer",
    heroBannerSub: "Optimized dual-tracker layout from $5,490* installed",
    introTitle: "Maximize Efficiency & Protect Against Rising Tariffs",
    introDesc: "For households running ducted air conditioning, pool pumps, and multiple computer setups, the 10.3kW package delivers substantial daily solar output. Designed to capture early morning and late afternoon sun via multi-string arrays.",
    backgroundImage: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=1600",
    timeline: DEFAULT_SOLAR_TIMELINE,
    details: {
      panels: {
        title: "Tier 1 Solar Panels",
        spec: "23 x Premium Modules",
        desc: "Premium dual-glass solar panels offering enhanced mechanical load stability and PID resistance.",
        points: ["25-Year Product Warranty", "22.2% Module Efficiency", "Anti-soiling surface coating"],
        image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=600"
      },
      inverter: {
        title: "Smart Solar Inverter",
        spec: "8.2kW Smart Inverter",
        desc: "Dual-MPPT tracker inverter designed to handle shadow casting and split roof layouts.",
        points: ["10-Year Local Warranty", "98.6% Peak Efficiency", "Real-time app notifications"],
        image: "https://images.unsplash.com/photo-1620038614049-9d97a5f9c996?auto=format&fit=crop&q=80&w=600"
      },
      battery: {
        title: "Battery Storage System",
        spec: "Optional 5kWh - 10kWh",
        desc: "Easily expandable storage to keep your critical circuits active during blackout conditions.",
        points: ["Lithium Iron Phosphate (LFP)", "6000+ cycle life", "Zero-maintenance cell structure"],
        image: "https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?auto=format&fit=crop&q=80&w=600"
      },
      installation: {
        title: "Premium Installation",
        spec: "CEC Certified Engineers",
        desc: "High-quality switchboard cabling, heavy-duty DC isolators, and complete utility connection filing.",
        points: ["10-Year Workmanship Warranty", "Smart meter verification", "Local utility application handled"],
        image: "https://images.unsplash.com/photo-1542332213-9b5a5a3f3c5b?auto=format&fit=crop&q=80&w=600"
      }
    }
  },
  "13-2kw": {
    title: "13.2kW Solar System",
    tagline: "Zero-compromise energy independence for large homes & high consumers",
    savings: "Save up to $3,800 / year*",
    heroBanner: "13.2kW Premium Package Offer",
    heroBannerSub: "High capacity system with hybrid configuration options",
    introTitle: "Unparalleled Solar Harvest for Heavy Energy Users",
    introDesc: "Maximize your roof space with a high-capacity 13.2kW system. Ideal for homeowners aiming for complete net-zero emissions, electric vehicle charging, or large-scale multi-zone heating and cooling.",
    backgroundImage: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&q=80&w=1600",
    timeline: DEFAULT_SOLAR_TIMELINE,
    details: {
      panels: {
        title: "Tier 1 Solar Panels",
        spec: "30 x Premium Modules",
        desc: "Premium all-black aesthetic modules with advanced N-Type cell structures for premium longevity.",
        points: ["30-Year Linear Output Warranty", "22.5% Module Efficiency", "Excellent heat coefficient"],
        image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=600"
      },
      inverter: {
        title: "Smart Solar Inverter",
        spec: "10kW Three-Phase Inverter",
        desc: "Commercial-grade residential inverter supporting perfectly balanced three-phase household feed.",
        points: ["10-Year Local Warranty", "98.7% Peak Efficiency", "Multi-MPPT optimization"],
        image: "https://images.unsplash.com/photo-1620038614049-9d97a5f9c996?auto=format&fit=crop&q=80&w=600"
      },
      battery: {
        title: "Battery Storage System",
        spec: "VPP Integration Ready",
        desc: "High-voltage hybrid battery compatibility for direct solar self-consumption and battery export profits.",
        points: ["Emergency power reserve mode", "EPS rapid switchover (<10ms)", "App-controlled discharge profiles"],
        image: "https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?auto=format&fit=crop&q=80&w=600"
      },
      installation: {
        title: "Premium Installation",
        spec: "CEC Certified Engineers",
        desc: "Premium structural framing, heavy duty isolator shrouds, and grid-connection pre-approvals.",
        points: ["10-Year Workmanship Warranty", "Switchboard upgrade evaluation", "Full regulatory signoff"],
        image: "https://images.unsplash.com/photo-1542332213-9b5a5a3f3c5b?auto=format&fit=crop&q=80&w=600"
      }
    }
  },
  "20kw": {
    title: "20kW Solar System",
    tagline: "Ultimate residential power package for estates and multi-phase homes",
    savings: "Save up to $5,400 / year*",
    heroBanner: "20kW Residential Power Package",
    heroBannerSub: "Ultimate energy independence with three-phase support",
    introTitle: "Industrial Capacity Tailored for Modern Estates",
    introDesc: "Designed for large multi-generational homes, underfloor heating networks, and multiple EV charging ports. The 20kW system provides commercial-scale energy production to ensure zero reliance on the retail power grid.",
    backgroundImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1600",
    timeline: DEFAULT_SOLAR_TIMELINE,
    details: {
      panels: {
        title: "Tier 1 Solar Panels",
        spec: "45 x Premium Modules",
        desc: "TOPCon high-density cells engineered to deliver maximal output per square meter of roof space.",
        points: ["25-Year Product Warranty", "22.3% Module Efficiency", "Superior low light absorption"],
        image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=600"
      },
      inverter: {
        title: "Smart Solar Inverter",
        spec: "15kW / 20kW Three-Phase",
        desc: "Premium high-power inverter with intelligent active cooling and smart grid interaction systems.",
        points: ["10-Year Local Warranty", "98.8% Peak Efficiency", "Dual configuration setup"],
        image: "https://images.unsplash.com/photo-1620038614049-9d97a5f9c996?auto=format&fit=crop&q=80&w=600"
      },
      battery: {
        title: "Battery Storage System",
        spec: "Large Storage Matrix",
        desc: "Expandable to 30kWh+ to handle peak household consumption entirely off-grid if required.",
        points: ["Scalable modular system", "High-discharge power capabilities", "Smart load shedding integration"],
        image: "https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?auto=format&fit=crop&q=80&w=600"
      },
      installation: {
        title: "Premium Installation",
        spec: "CEC Certified Engineers",
        desc: "Full structural roof assessment, engineering certification, and utility interface mapping.",
        points: ["10-Year Workmanship Warranty", "Structural compliance certificate", "Post-install audit verification"],
        image: "https://images.unsplash.com/photo-1542332213-9b5a5a3f3c5b?auto=format&fit=crop&q=80&w=600"
      }
    }
  },
  "ev-charger": {
    title: "Smart EV Charger",
    tagline: "Eco-friendly fast vehicle charging integrated directly with your solar system",
    savings: "Save up to $1,200 / year on fuel*",
    heroBanner: "Smart EV Charger Integration",
    heroBannerSub: "Charge your EV with 100% free solar power",
    introTitle: "Intelligent Electric Vehicle Charging Solutions",
    introDesc: "Stop exporting your solar surplus to the grid for pennies. Our Smart EV Chargers dynamically adjust charge rate based on real-time solar production, letting you charge your vehicle directly from the sun.",
    backgroundImage: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&q=80&w=1600",
    timeline: [
      {
        num: "01",
        title: "Electrical Survey & Load Check",
        time: "Day 1",
        desc: "Our electricians audit your main switchboard to confirm active single or three-phase space, current limiters, and cable routing paths.",
        checklist: [
          "Switchboard load calculation",
          "Active phase verification",
          "Cable distance mapping",
          "Obstruction pathway survey"
        ]
      },
      {
        num: "02",
        title: "Hardware Mapping",
        time: "Day 2",
        desc: "We select optimal wall or pedestal locations matching your garage space layout, EV charge port position, and solar inverter sync modules.",
        checklist: [
          "Garage wall structure check",
          "EV port alignment planning",
          "Inverter telemetry sync check",
          "Cable pathway sizing"
        ]
      },
      {
        num: "03",
        title: "Physical Installation",
        time: "Day 3 - 5",
        desc: "We mount the charger chassis, run dedicated heavy-duty electrical cables, install individual RCBO safety switches, and complete insulation testing.",
        checklist: [
          "Heavy duty cable routing",
          "Weatherproof chassis install",
          "Dedicated RCBO breaker sync",
          "Insulation & earth testing"
        ]
      },
      {
        num: "04",
        title: "App Sync & Calibration",
        time: "Day 6",
        desc: "We link the charger to your solar monitoring app, configure charging priorities (eco-solar vs. overnight tariff), and complete final safety handover.",
        checklist: [
          "Sync with home monitoring app",
          "Eco-charging mode calibration",
          "Off-peak charging priority setup",
          "Safety card handover"
        ]
      }
    ],
    details: {
      panels: {
        title: "Solar Synergy Mode",
        spec: "Eco-Charging Integration",
        desc: "Monitors home consumption and diverts excess solar generation directly to your vehicle's battery.",
        points: ["Charge only from excess solar", "Scheduled charging times", "Dynamic load balancing"],
        image: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&q=80&w=600"
      },
      inverter: {
        title: "Charger Core Hardware",
        spec: "7.4kW Single / 22kW Three-Phase",
        desc: "Weatherproof sleek charger compatible with all current electric vehicles in the Australian market.",
        points: ["Universal Type 2 socket", "Wi-Fi & Bluetooth app control", "IP65 Weatherproof rating"],
        image: "https://images.unsplash.com/photo-1620038614049-9d97a5f9c996?auto=format&fit=crop&q=80&w=600"
      },
      battery: {
        title: "Battery Storage Synergy",
        spec: "Smart Power Routing",
        desc: "Coordinate EV charging and home battery storage to optimize overnight tariffs and avoid peak rates.",
        points: ["Prioritize home or car storage", "Peak tariff avoidance", "Overnight battery charging override"],
        image: "https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?auto=format&fit=crop&q=80&w=600"
      },
      installation: {
        title: "Premium Installation",
        spec: "Licensed Electricians",
        desc: "Dedicated safety circuit breaker, wall or pedestal mount setup, and complete system testing.",
        points: ["10-Year Workmanship Warranty", "RCBO safety switch included", "User tutorial on handover"],
        image: "https://images.unsplash.com/photo-1542332213-9b5a5a3f3c5b?auto=format&fit=crop&q=80&w=600"
      }
    }
  }
}

export const COMMERCIAL_PAGES_DATA: Record<string, CommercialData> = {
  "30kw": {
    title: "30kW Commercial Solar",
    tagline: "Perfect capacity for small businesses, offices, and local retail outlets",
    savings: "Save up to $8,500 / year*",
    heroTitle: "Premium 30kW Commercial Systems",
    introTitle: "Optimize Your Daytime Operational Expenses",
    introDesc: "Small offices, warehouses, and medical clinics run primarily during daylight hours. A 30kW commercial system directly offsets expensive peak corporate tariffs, yielding immediate payback and protection against energy cost volatility.",
    details: {
      panels: {
        title: "Tier 1 Solar Panels",
        spec: "68 x High Output Modules",
        desc: "Commercial-grade glass-glass modules built to withstand harsh coastal and inland wind ratings.",
        points: ["25-Year Warranty", "21.9% Module Efficiency", "Optimized temperature coefficient"]
      },
      inverter: {
        title: "Commercial Inverter",
        spec: "25kW Three-Phase Core",
        desc: "Sleek commercial-grade multi-MPPT inverter featuring integrated surge protection devices (SPDs).",
        points: ["10-Year Local Warranty", "98.5% Conversion Efficiency", "Active heat management"]
      },
      battery: {
        title: "Commercial Battery ready",
        spec: "Expandable Smart Grid",
        desc: "Fully compliant with commercial battery setups for overnight security lighting and server backups.",
        points: ["Grid peak-shaving ready", "Scalable commercial design", "Emergency power options"]
      },
      mounting: {
        title: "Commercial Mounts",
        spec: "Penetration-Free Racking",
        desc: "Premium tilt and klip-lok mounts engineered for flat roof and corrugated iron factory structures.",
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
    details: {
      panels: {
        title: "Tier 1 Solar Panels",
        spec: "112 x High Output Modules",
        desc: "Advanced N-Type bifacial solar panels capturing additional power reflection from roof surfaces.",
        points: ["30-Year Performance Warranty", "22.2% Module Efficiency", "Bifacial energy gain up to 15%"]
      },
      inverter: {
        title: "Commercial Inverters",
        spec: "50kW Multi-String Inverter",
        desc: "Industrial grade inverter featuring string-level monitoring, AFCI safety protection, and active grid cooling.",
        points: ["10-Year Local Warranty", "98.7% Peak Conversion", "Built-in Type II DC/AC SPDs"]
      },
      battery: {
        title: "Battery Storage ready",
        spec: "High Voltage Ready",
        desc: "Seamless integration with heavy-duty smart industrial batteries to control demand tariff thresholds.",
        points: ["Peak-shaving configuration", "Backup power for server arrays", "Flexible energy management"]
      },
      mounting: {
        title: "Commercial Mounts",
        spec: "Wind-Rated Heavy Framing",
        desc: "Custom-engineered mounting brackets and frames certified for high wind loads (Region C compliant).",
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
    details: {
      panels: {
        title: "Tier 1 Solar Panels",
        spec: "225 x High Output Modules",
        desc: "High-density monocrystalline panels optimized to maintain stable output even in high-temperature environments.",
        points: ["25-Year Product Warranty", "22.4% Module Efficiency", "Excellent light absorption profiles"]
      },
      inverter: {
        title: "Commercial Inverters",
        spec: "100kW Core Inverter Hub",
        desc: "Premium commercial central inverter system with remote string monitoring and automated diagnostic alerts.",
        points: ["10-Year Local Warranty", "98.9% High Efficiency", "Smart cooling technology"]
      },
      battery: {
        title: "Commercial Battery ready",
        spec: "Industrial Energy Matrix",
        desc: "Designed for commercial energy storage coupling, shielding factory motors from load startup voltage spikes.",
        points: ["Demand charge reduction", "Micro-grid configurations", "Blackout protection for critical load"]
      },
      mounting: {
        title: "Commercial Mounts",
        spec: "Engineered Bracket Rails",
        desc: "Fully certified roof clamps, aluminum structural channels, and marine-grade stainless hardware.",
        points: ["10-Year Structural Warranty", "Full AS/NZS 1170.2 certification", "Optimal pitch framing options"]
      }
    }
  }
}

export const SERVICES_PAGES_DATA: Record<string, ServiceData> = {
  "installation": {
    title: "Solar Panel Installation",
    heroSubtitle: "Clean Energy Council (CEC) Accredited Solar Engineering & Integration",
    introTitle: "Professional Installation Engineered for Australian Conditions",
    introDesc: "SolEarth Energy provides full end-to-end solar design and installation. Our licensed, CEC-accredited electrical engineers ensure that your solar array, string wiring, and smart inverters are set up safely to yield maximum power output for decades.",
    features: [
      {
        title: "Site Survey & Engineering Design",
        desc: "We analyze your roof pitch, shading angles, and electrical load parameters to custom-tailor a solar layout that maximizes sun exposure."
      },
      {
        title: "CEC Accredited Workmanship",
        desc: "Our installers are highly certified professionals who follow all Australian safety standards, ensuring a robust, waterproof roof mounting setup."
      },
      {
        title: "Grid Connection & Smart Meters",
        desc: "We handle the entire application and inspection process with your local distribution network to get your smart meter configured and online."
      }
    ],
    difference: [
      {
        title: "10-Year Workmanship Warranty",
        desc: "We fully guarantee the quality of our wiring, framing mounts, and penetrations. Any issues are addressed at zero cost to you."
      },
      {
        title: "Approved Solar Retailer",
        desc: "We strictly adhere to the Clean Energy Council Approved Code of Conduct, ensuring fair sales representation and complete consumer protection."
      },
      {
        title: "Zero Down Financing Available",
        desc: "Upgrade your property to solar today with zero upfront cost using our highly competitive, flexible repayment partners."
      }
    ]
  },
  "cleaning": {
    title: "Solar Panel Cleaning",
    heroSubtitle: "Restore System Performance & Maximize Daily Clean Energy Yield",
    introTitle: "Why Professional Cleaning Matters for Your Investment",
    introDesc: "Dust, leaves, salt-mist, and bird droppings build up over time and create localized hot spots, reducing your solar panel output by up to 20%. Professional cleaning removes this layer safely without scratching the delicate anti-reflective glass coatings.",
    features: [
      {
        title: "Pure Water Washing Systems",
        desc: "We use specialized de-ionized pure water filtration systems that clean panels cleanly without leaving streaks or mineral scale residue."
      },
      {
        title: "Anti-Scratch Solar Brushes",
        desc: "Our technicians utilize heavy-duty, ultra-soft rotating carbon brushes specifically designed not to micro-scratch solar glass coatings."
      },
      {
        title: "Safety Rigging & Roof Harnesses",
        desc: "All technicians are fully trained in working at heights, using professional roof harness anchors, ropes, and scaffolding setup."
      }
    ],
    difference: [
      {
        title: "Immediate Efficiency Restored",
        desc: "Clean panels capture more photons, resulting in an immediate boost in daily kilowatt-hour generation and lower utility bills."
      },
      {
        title: "Inverter and String Inspection",
        desc: "During cleaning, we perform a visual inspection of your framing rails, cable ties, and glass junctions to identify early wear."
      },
      {
        title: "Scheduled Maintenance Contracts",
        desc: "Keep your system clean year-round with our discounted semi-annual or annual scheduled cleaning maintenance plans."
      }
    ]
  },
  "maintenance": {
    title: "Solar Panel Maintenance & Repairs",
    heroSubtitle: "Diagnostic Testing, Compliance Audits, and Inverter System Repairs",
    introTitle: "Professional System Health Audits & Fault Rectification",
    introDesc: "Is your inverter displaying a red warning light, or has your power generation dropped unexpectedly? SolEarth Energy's maintenance engineers conduct diagnostic testing to locate ground faults, hot spots, or wiring issues.",
    features: [
      {
        title: "Inverter Diagnostic & Replacements",
        desc: "We perform full diagnostics on GoodWe, Sungrow, Solis, and other leading inverter brands, managing warranty replacements when needed."
      },
      {
        title: "Thermal Imaging Inspections",
        desc: "Using advanced thermal imaging cameras, we locate micro-cracks and hot-spot cells that could lead to panel degradation or safety hazards."
      },
      {
        title: "Compliance & Safety Audits",
        desc: "We audit older systems to ensure they comply with updated AS/NZS 5033 standards, upgrading isolators and conduit routing where needed."
      }
    ],
    difference: [
      {
        title: "Licensed Solar Electricians",
        desc: "All maintenance work is executed by fully licensed, Clean Energy Council accredited technicians specializing in high-voltage DC arrays."
      },
      {
        title: "Comprehensive Report Provided",
        desc: "Upon completion, you receive a detailed compliance report, thermal scan images, inverter logs, and performance metrics."
      },
      {
        title: "Rapid Response Dispatch",
        desc: "For system faults or grid isolation issues, our support coordinators dispatch service vehicles quickly across Sydney and Brisbane metro areas."
      }
    ]
  }
}
