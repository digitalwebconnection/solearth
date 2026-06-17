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
    backgroundImage: "/images/solar/solar-panel-rooftop.jpg",
    timeline: DEFAULT_SOLAR_TIMELINE,
    details: {
      panels: {
        title: "Tier 1 Solar Panels",
        spec: "15 x Premium Modules",
        desc: "High-efficiency monocrystalline solar panels with exceptional low-light performance.",
        points: ["25-Year Product Warranty", "21.8% Module Efficiency", "Salt-mist & Ammonia resistant"],
        image: "/images/solar/solar-panel-rooftop.jpg"
      },
      inverter: {
        title: "Smart Solar Inverter",
        spec: "5kW Single-Phase",
        desc: "Intelligent string inverter with built-in Wi-Fi monitoring and smart export control features.",
        points: ["10-Year Local Warranty", "98.4% Peak Efficiency", "IP66 Protection rating"],
        image: "/images/solar/solar-inverter-tech.jpg"
      },
      battery: {
        title: "Battery Ready System",
        spec: "Hybrid Inverter Upgrade",
        desc: "Ready to pair with lead-storage or lithium-ion systems for complete overnight power backup.",
        points: ["Seamless plug-and-play storage", "Backup power routing capability", "VPP (Virtual Power Plant) ready"],
        image: "/images/solar/solar-inverter-tech.jpg"
      },
      installation: {
        title: "Premium Installation",
        spec: "CEC Certified Engineers",
        desc: "Professional site survey, wind-rated roof racking, and lifetime workmanship warranty protection.",
        points: ["10-Year Workmanship Warranty", "Clean Energy Council Approved", "Safety switch integration"],
        image: "/images/solar/solar-installation-crew.jpg"
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
    backgroundImage: "/images/solar/solar-residential-house.jpg",
    timeline: DEFAULT_SOLAR_TIMELINE,
    details: {
      panels: {
        title: "Tier 1 Solar Panels",
        spec: "23 x Premium Modules",
        desc: "Premium dual-glass solar panels offering enhanced mechanical load stability and PID resistance.",
        points: ["25-Year Product Warranty", "22.2% Module Efficiency", "Anti-soiling surface coating"],
        image: "/images/solar/solar-residential-house.jpg"
      },
      inverter: {
        title: "Smart Solar Inverter",
        spec: "8.2kW Smart Inverter",
        desc: "Dual-MPPT tracker inverter designed to handle shadow casting and split roof layouts.",
        points: ["10-Year Local Warranty", "98.6% Peak Efficiency", "Real-time app notifications"],
        image: "/images/solar/solar-inverter-tech.jpg"
      },
      battery: {
        title: "Battery Storage System",
        spec: "Optional 5kWh - 10kWh",
        desc: "Easily expandable storage to keep your critical circuits active during blackout conditions.",
        points: ["Lithium Iron Phosphate (LFP)", "6000+ cycle life", "Zero-maintenance cell structure"],
        image: "/images/solar/solar-inverter-tech.jpg"
      },
      installation: {
        title: "Premium Installation",
        spec: "CEC Certified Engineers",
        desc: "High-quality switchboard cabling, heavy-duty DC isolators, and complete utility connection filing.",
        points: ["10-Year Workmanship Warranty", "Smart meter verification", "Local utility application handled"],
        image: "/images/solar/solar-installation-crew.jpg"
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
    backgroundImage: "/images/solar/solar-hero-wide.jpg",
    timeline: DEFAULT_SOLAR_TIMELINE,
    details: {
      panels: {
        title: "Tier 1 Solar Panels",
        spec: "30 x Premium Modules",
        desc: "Premium all-black aesthetic modules with advanced N-Type cell structures for premium longevity.",
        points: ["30-Year Linear Output Warranty", "22.5% Module Efficiency", "Excellent heat coefficient"],
        image: "/images/solar/solar-panel-rooftop.jpg"
      },
      inverter: {
        title: "Smart Solar Inverter",
        spec: "10kW Three-Phase Inverter",
        desc: "Commercial-grade residential inverter supporting perfectly balanced three-phase household feed.",
        points: ["10-Year Local Warranty", "98.7% Peak Efficiency", "Multi-MPPT optimization"],
        image: "/images/solar/solar-inverter-tech.jpg"
      },
      battery: {
        title: "Battery Storage System",
        spec: "VPP Integration Ready",
        desc: "High-voltage hybrid battery compatibility for direct solar self-consumption and battery export profits.",
        points: ["Emergency power reserve mode", "EPS rapid switchover (<10ms)", "App-controlled discharge profiles"],
        image: "/images/solar/solar-inverter-tech.jpg"
      },
      installation: {
        title: "Premium Installation",
        spec: "CEC Certified Engineers",
        desc: "Premium structural framing, heavy duty isolator shrouds, and grid-connection pre-approvals.",
        points: ["10-Year Workmanship Warranty", "Switchboard upgrade evaluation", "Full regulatory signoff"],
        image: "/images/solar/solar-installation-crew.jpg"
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
    backgroundImage: "/images/solar/solar-smart-home.jpg",
    timeline: DEFAULT_SOLAR_TIMELINE,
    details: {
      panels: {
        title: "Tier 1 Solar Panels",
        spec: "45 x Premium Modules",
        desc: "TOPCon high-density cells engineered to deliver maximal output per square meter of roof space.",
        points: ["25-Year Product Warranty", "22.3% Module Efficiency", "Superior low light absorption"],
        image: "/images/solar/solar-residential-house.jpg"
      },
      inverter: {
        title: "Smart Solar Inverter",
        spec: "15kW / 20kW Three-Phase",
        desc: "Premium high-power inverter with intelligent active cooling and smart grid interaction systems.",
        points: ["10-Year Local Warranty", "98.8% Peak Efficiency", "Dual configuration setup"],
        image: "/images/solar/solar-inverter-tech.jpg"
      },
      battery: {
        title: "Battery Storage System",
        spec: "Large Storage Matrix",
        desc: "Expandable to 30kWh+ to handle peak household consumption entirely off-grid if required.",
        points: ["Scalable modular system", "High-discharge power capabilities", "Smart load shedding integration"],
        image: "/images/solar/solar-inverter-tech.jpg"
      },
      installation: {
        title: "Premium Installation",
        spec: "CEC Certified Engineers",
        desc: "Full structural roof assessment, engineering certification, and utility interface mapping.",
        points: ["10-Year Workmanship Warranty", "Structural compliance certificate", "Post-install audit verification"],
        image: "/images/solar/solar-installation-crew.jpg"
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
    backgroundImage: "/images/solar/ev-charging-solar.jpg",
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
        image: "/images/solar/ev-charging-solar.jpg"
      },
      inverter: {
        title: "Charger Core Hardware",
        spec: "7.4kW Single / 22kW Three-Phase",
        desc: "Weatherproof sleek charger compatible with all current electric vehicles in the Australian market.",
        points: ["Universal Type 2 socket", "Wi-Fi & Bluetooth app control", "IP65 Weatherproof rating"],
        image: "/images/solar/solar-inverter-tech.jpg"
      },
      battery: {
        title: "Battery Storage Synergy",
        spec: "Smart Power Routing",
        desc: "Coordinate EV charging and home battery storage to optimize overnight tariffs and avoid peak rates.",
        points: ["Prioritize home or car storage", "Peak tariff avoidance", "Overnight battery charging override"],
        image: "/images/solar/solar-inverter-tech.jpg"
      },
      installation: {
        title: "Premium Installation",
        spec: "Licensed Electricians",
        desc: "Dedicated safety circuit breaker, wall or pedestal mount setup, and complete system testing.",
        points: ["10-Year Workmanship Warranty", "RCBO safety switch included", "User tutorial on handover"],
        image: "/images/solar/solar-installation-crew.jpg"
      }
    }
  }
}
