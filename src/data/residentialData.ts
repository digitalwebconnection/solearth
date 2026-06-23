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

export interface EducationalCard {
  badge: string
  title: string
  paragraphs: string[]
  checklist?: string[]
}

export interface TimelineHeader {
  badge: string
  title: string
  desc: string
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
  timelineHeader: TimelineHeader
  details: {
    panels: SystemDetail
    inverter: SystemDetail
    battery: SystemDetail
    installation: SystemDetail
  }
  educational: {
    card1: EducationalCard
    card2: EducationalCard
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
    title: "6.6 kw solar system in australia",
    tagline: "Reduce electricity bills with a high-performance 6.6kW system. ",
    savings: "Save up to $1,800 / year*",
    heroBanner: "6.6kW Solar Package Offer",
    heroBannerSub: "Complete system from just $3,990* fully installed",
    introTitle: "Power Your Home with High-Performance Residential Solar Systems ",
    introDesc: "Our residential solar systems are designed to help Australian homeowners reduce electricity bills, increase energy independence, and enjoy reliable clean energy. Whether you're upgrading your home's energy efficiency or considering a larger 20kW solar system, we provide tailored solar solutions for every household. ",
    backgroundImage: "/images/solar/solar-panel-rooftop.jpg",
    timeline: DEFAULT_SOLAR_TIMELINE,
    timelineHeader: {
      badge: "Installation Journey",
      title: "How Does Our Solar Installation Process Work? ",
      desc: "We simplify solar adoption by managing system engineering, utility approvals, government rebate applications, solar panel installation, and final system activation. "
    },
    details: {
      panels: {
        title: "15 × Tier 1 Monocrystalline Solar Panels",
        spec: "15 x Premium Modules",
        desc: "High-performance Tier 1 solar panels designed to maximize solar energy generation, reduce electricity bills, and deliver reliable power in Australian conditions.",
        points: [
          "25-Year Performance Warranty",
          "High-Efficiency Monocrystalline Technology",
          "Excellent Low-Light Energy Production",
          "Salt-Mist & Corrosion Resistant"
        ],
        image: "/images/solar/solar-panel-rooftop.jpg"
      },
      inverter: {
        title: "5kW Wi-Fi Enabled Solar Inverter",
        spec: "5kW Single-Phase",
        desc: "Advanced solar inverter that converts solar energy into usable electricity while providing real-time system monitoring and smart export control.",
        points: [
          "98.4% Peak Conversion Efficiency",
          "Built-In Wi-Fi Monitoring App",
          "IP66 Weather Protection Rating",
          "10-Year Manufacturer Warranty"
        ],
        image: "/images/solar/solar-inverter-tech.jpg"
      },
      battery: {
        title: "Hybrid Solar & Battery Compatible",
        spec: "Hybrid Inverter Upgrade",
        desc: "Future-proof solar system designed for seamless battery integration, allowing homeowners to store excess solar power and increase energy independence.",
        points: [
          "Compatible with Lithium & Hybrid Batteries",
          "Backup Power Ready for Outages",
          "Smart Energy Management Features",
          "Virtual Power Plant (VPP) Compatible"
        ],
        image: "/images/solar/solar-inverter-tech.jpg"
      },
      installation: {
        title: "CEC Accredited Solar Installation",
        spec: "CEC Certified Engineers",
        desc: "Professional solar installation by Clean Energy Council accredited installers, ensuring safety, compliance, and long-term system performance.",
        points: [
          "CEC Certified Solar Installers",
          "Wind-Rated Mounting System",
          "Safety Switch & Compliance Checks",
          "10-Year Workmanship Warranty"
        ],
        image: "/images/solar/solar-installation-crew.jpg"
      }
    },
    educational: {
      card1: {
        badge: "Industry-Leading Solar Technology",
        title: "Why Choose Tier-1 Solar Panels?",
        paragraphs: [
          "Tier-1 solar panels are manufactured by globally recognized solar brands with proven performance, strong financial stability, and a track record of delivering reliable solar energy solutions worldwide.",
          "These premium solar panels offer higher energy output, improved durability, and long-term performance, making them the preferred choice for residential and commercial solar installations."
        ],
        checklist: [
          "Higher Solar Energy Production",
          "Better Performance in Low-Light Conditions",
          "Enhanced Reliability & Durability",
          "25+ Year Performance Warranty",
          "Trusted by Leading Solar Installers"
        ]
      },

      card2: {
        badge: "SolarEarth Quality Promise",
        title: "Premium Solar Components Built for Australian Conditions",
        paragraphs: [
          "Every SolarEarth solar power system is designed using high-quality solar panels, advanced inverter technology, and industry-compliant installation practices to ensure maximum performance, safety, and long-term reliability.",
          "Our systems are engineered to withstand Australia's harsh climate while delivering consistent energy savings and dependable solar power generation."
        ],
        checklist: [
          "Australian Standards Compliant Components",
          "Cyclone & Wind-Rated Mounting Systems",
          "Weather-Resistant Electrical Protection",
          "Real-Time Solar Monitoring Technology",
          "Premium Cabling & Safety Equipment",
          "Expert Installation & Quality Assurance"
        ]
      }
    }
  },
  "10-3kw": {
    title: "Premium 10.3kW Solar Power System in Australia ",
    tagline: "Engineered for Australian conditions with Tier-1 solar panels, smart inverter technology, and professional CEC-accredited installation. ",
    savings: "Save up to $2,800 / year*",
    heroBanner: "10.3kW Solar Package Offer",
    heroBannerSub: "Optimized dual-tracker layout from $5,490* installed",
    introTitle: "Maximize Solar Savings & Reduce Rising Electricity Costs ",
    introDesc: "A 10.3kW Solar Power System in Australia is ideal for medium to large households looking to lower electricity bills and generate more solar energy. For higher power needs, homeowners can upgrade to a 13kW Solar System or a 20kW Solar System for greater energy production, increased savings, and enhanced energy independence. ",
    backgroundImage: "/images/solar/solar-residential-house.jpg",
    timeline: DEFAULT_SOLAR_TIMELINE,
    timelineHeader: {
      badge: "System Setup",
      title: "How Does the Solar Installation Process Work? ",
      desc: "Our team takes care of site assessment, system design, utility approvals, rebate paperwork, and installation. This end-to-end approach ensures your solar power system is installed safely, efficiently, and ready to deliver reliable renewable energy for years to come. "
    },
    details: {
      panels: {
        title: "23 × Tier 1 Solar Panels",
        spec: "23 x Premium Modules",
        desc: "High-efficiency Tier 1 solar panels designed to maximize energy generation and deliver reliable performance in Australian weather conditions.",
        points: [
          "25-Year Product & Performance Warranty",
          "Up to 22.2% Module Efficiency",
          "Low-Light & High-Temperature Performance",
          "Anti-Soiling & Corrosion Resistant"
        ],
        image: "/images/solar/solar-residential-house.jpg"
      },
      inverter: {
        title: "8.2kW Smart Solar Inverter",
        spec: "8.2kW Smart Inverter",
        desc: "Advanced solar inverter with dual MPPT technology for improved energy production across multiple roof orientations and shading conditions.",
        points: [
          "98.6% Peak Conversion Efficiency",
          "Real-Time Solar Monitoring App",
          "Dual MPPT for Maximum Energy Yield",
          "10-Year Manufacturer Warranty"
        ],
        image: "/images/solar/solar-inverter-tech.jpg"
      },
      battery: {
        title: "Solar Battery Compatible System",
        spec: "Optional 5kWh - 10kWh",
        desc: "Future-ready solar power system designed for seamless battery integration, helping homeowners increase energy independence and reduce grid reliance.",
        points: [
          "Compatible with 5kWh–10kWh Battery Storage",
          "Backup Power Ready Options",
          "Long-Life Lithium Battery Support",
          "Smart Energy Management Features"
        ],
        image: "/images/solar/solar-inverter-tech.jpg"
      },
      installation: {
        title: "CEC Accredited Solar Installation",
        spec: "CEC Certified Engineers",
        desc: "Professional installation completed by CEC-certified solar installers using premium components and Australian-compliant electrical standards.",
        points: [
          "10-Year Workmanship Warranty",
          "Smart Meter & Grid Connection Included",
          "Premium Cabling & Safety Protection",
          "Utility Application & Approval Managed"
        ],
        image: "/images/solar/solar-installation-crew.jpg"
      }
    },
    educational: {
      card1: {
        badge: "Industry-Leading Solar Technology",
        title: "Why Choose Tier 1 Solar Panels?",
        paragraphs: [
          "Tier 1 Solar Panels are manufactured by globally recognized solar brands with a proven track record of quality, reliability, and long-term performance. These panels are produced using advanced solar cell technology and are trusted worldwide for residential and commercial solar installations.",
          "By choosing premium Tier 1 solar panels, homeowners benefit from higher energy generation, improved durability, better low-light performance, and industry-leading warranties that help maximize long-term solar savings."
        ],
        checklist: [
          "Higher Solar Energy Output",
          "Improved Low-Light Performance",
          "Enhanced Durability & Reliability",
          "25+ Year Performance Warranty"
        ]
      },

      card2: {
        badge: "Premium Quality Guarantee",
        title: "Trusted Solar Components for Long-Term Performance",
        paragraphs: [
          "Every solar power system is built using premium-quality components designed to perform reliably in harsh Australian conditions. From high-efficiency solar panels to advanced inverter technology and professional installation practices, every element is selected to maximize system performance, safety, and energy savings.",
          "Our commitment to quality ensures homeowners receive a durable, efficient, and future-ready solar solution backed by trusted products and expert workmanship."
        ],
        checklist: [
          "Australian Standards Compliant Components",
          "Cyclone & Wind-Rated Mounting Systems",
          "Weather-Resistant Electrical Protection",
          "Real-Time Solar Monitoring Technology"
        ]
      }
    }
  },
  "13-2kw": {
    title: "Premium 13.2kW Solar Panel System in Australia ",
    tagline: "Built with Tier 1 solar panels, smart inverter technology, and professional installation to deliver maximum energy generation and long-term performance in Australian conditions. ",
    savings: "Save up to $3,800 / year*",
    heroBanner: "13.2kW Premium Package Offer",
    heroBannerSub: "High capacity system with hybrid configuration options",
    introTitle: "Premium Solar Panels for Home with Maximum Energy Generation",
    introDesc: "Get more from your rooftop with premium solar panels for home, designed to deliver higher energy output, lower electricity bills, and greater energy independence. Ideal for households with high power consumption, electric vehicles, and all-electric lifestyles, this high-performance solution helps maximize solar savings and long-term value. For larger energy requirements, explore our 20kW Solar System options, engineered for maximum solar generation, battery compatibility, and future-ready energy solutions. ",
    backgroundImage: "/images/solar/solar-hero-wide.jpg",
    timeline: DEFAULT_SOLAR_TIMELINE,
    timelineHeader: {
      badge: "Project Delivery",
      title: "How Does the Solar Installation Process Work? ",
      desc: "Our solar experts handle site assessment, system design, utility approvals, rebate documentation, and installation to ensure a smooth transition to clean, renewable energy. Every project is completed to Australian standards for maximum safety, efficiency, and performance. "
    },
    details: {
      panels: {
        title: "30 × Tier 1 N-Type Solar Panels",
        spec: "30 x Premium Modules",
        desc: "High-efficiency Tier 1 solar panels engineered to maximize solar energy production, lower electricity costs, and deliver reliable performance for large Australian homes and businesses.",
        points: [
          "30-Year Performance Warranty",
          "Up to 22.5% Module Efficiency",
          "Advanced N-Type Cell Technology",
          "Superior Low-Light Performance"
        ],
        image: "/images/solar/solar-panel-rooftop.jpg"
      },
      inverter: {
        title: "10kW Three-Phase Solar Inverter",
        spec: "10kW Three-Phase Inverter",
        desc: "Advanced three-phase solar inverter designed to optimize energy generation, improve system efficiency, and support high-consumption properties.",
        points: [
          "98.7% Peak Conversion Efficiency",
          "Multi-MPPT Energy Optimization",
          "Real-Time Solar Monitoring",
          "10-Year Manufacturer Warranty"
        ],
        image: "/images/solar/solar-inverter-tech.jpg"
      },
      battery: {
        title: "Hybrid Solar Battery Storage System",
        spec: "VPP Integration Ready",
        desc: "Future-ready solar battery storage solution that helps homeowners store excess solar energy, increase energy independence, and maximize self-consumption.",
        points: [
          "Battery Backup Ready",
          "Virtual Power Plant (VPP) Compatible",
          "Smart Energy Management",
          "App-Based Battery Monitoring"
        ],
        image: "/images/solar/solar-inverter-tech.jpg"
      },
      installation: {
        title: "CEC Accredited Solar Installation",
        spec: "CEC Certified Engineers",
        desc: "Professional installation completed by CEC-certified solar installers using premium components and Australian-compliant electrical standards.",
        points: [
          "10-Year Workmanship Warranty",
          "Grid Connection & Approval Support",
          "Switchboard & Safety Assessment",
          "Australian Standards Compliant"
        ],
        image: "/images/solar/solar-installation-crew.jpg"
      }
    },
    educational: {
      card1: {
        badge: "Industry-Leading Solar Technology",
        title: "Why Choose Tier 1 Solar Panels?",
        paragraphs: [
          "Tier 1 Solar Panels are manufactured by globally recognized solar brands known for quality, reliability, and long-term performance. These high-efficiency solar panels are trusted worldwide for residential and commercial solar installations, delivering greater energy production and dependable results in Australian conditions.",
          "Choosing premium Tier 1 solar panels helps maximize solar savings, improve system efficiency, and provide peace of mind with industry-leading warranties and proven durability."
        ],
        checklist: [
          "Higher Solar Energy Generation",
          "Excellent Low-Light Performance",
          "Long-Term Reliability & Durability",
          "25+ Year Performance Warranty"
        ]
      },

      card2: {
        badge: "Premium Quality Guarantee",
        title: "Quality Solar Components You Can Trust",
        paragraphs: [
          "Every solar power system is built using premium components that meet Australian standards for safety, efficiency, and long-term performance. From advanced solar panels and smart inverters to professional installation practices, every component is selected to maximize energy output and system reliability.",
          "Our commitment to quality helps homeowners reduce electricity bills, increase energy independence, and enjoy dependable solar performance for years to come."
        ],
        checklist: [
          "Australian Standards Approved Components",
          "Cyclone & Wind-Rated Mounting Systems",
          "Weather-Resistant Electrical Protection",
          "Real-Time Solar Monitoring Technology"
        ]
      }
    }
  },
  "20kw": {
    title: "20kW Solar Power System in Australia ",
    tagline: "A high-performance 20kW Solar Power System in Australia designed for large homes, acreage properties, and high-energy households seeking lower electricity bills, greater energy independence, and maximum solar savings. ",
    savings: "Save up to $5,400 / year*",
    heroBanner: "20kW Residential Power Package",
    heroBannerSub: "Ultimate energy independence with three-phase support",
    introTitle: "Power More with a 20kW Solar Power System in Australia ",
    introDesc: "A 20kW Solar Power System in Australia is ideal for large homes, acreage properties, and high-energy households seeking maximum energy generation and lower electricity bills. Designed to support EV charging, air conditioning, pools, and all-electric lifestyles, it delivers exceptional long-term savings and energy independence. For smaller households, a 6.6kW Solar System may be a suitable alternative, offering reliable solar performance and cost-effective energy savings.",
    backgroundImage: "/images/solar/solar-smart-home.jpg",
    timeline: DEFAULT_SOLAR_TIMELINE,
    timelineHeader: {
      badge: "EPC Timeline",
      title: "How Does Solar Installation Work?",
      desc: "Our experts handle site assessment, custom system design, utility approvals, rebate documentation, and installation, making the switch to clean energy simple and hassle-free."
    },
    details: {
      panels: {
        title: "45 × Tier 1 TOPCon Solar Panels",
        spec: "45 x Premium Modules",
        desc: "High-efficiency Tier 1 solar panels designed to maximize solar energy generation, reduce electricity bills, and deliver reliable performance in Australian conditions.",
        points: [
          "25-Year Product & Performance Warranty",
          "22.3% Module Efficiency",
          "Excellent Low-Light Performance",
          "Advanced TOPCon Cell Technology"
        ],
        image: "/images/solar/solar-residential-house.jpg"
      },
      inverter: {
        title: "15kW / 20kW Three-Phase Solar Inverter",
        spec: "15kW / 20kW Three-Phase",
        desc: "Advanced solar inverter technology engineered to optimize energy production, improve system efficiency, and support high-consumption households.",
        points: [
          "98.8% Peak Conversion Efficiency",
          "Smart Energy Monitoring App",
          "Multi-MPPT Performance Optimization",
          "10-Year Manufacturer Warranty"
        ],
        image: "/images/solar/solar-inverter-tech.jpg"
      },
      battery: {
        title: "Battery Storage Ready System",
        spec: "Large Storage Matrix",
        desc: "Future-ready solar battery storage solution designed to increase energy independence, store excess solar power, and provide backup energy when needed.",
        points: [
          "Expandable Up to 30kWh+ Storage",
          "Battery Backup Ready",
          "Smart Energy Management",
          "Virtual Power Plant (VPP) Compatible"
        ],
        image: "/images/solar/solar-inverter-tech.jpg"
      },
      installation: {
        title: "CEC Accredited Solar Installation",
        spec: "CEC Certified Engineers",
        desc: "Professional installation completed by certified solar experts using premium components and Australian-compliant installation standards.",
        points: [
          "10-Year Workmanship Warranty",
          "Grid Connection & Compliance Included",
          "Structural & Electrical Safety Checks",
          "End-to-End Project Management"
        ],
        image: "/images/solar/solar-installation-crew.jpg"
      }
    },
    educational: {
      card1: {
        badge: "Premium Solar Technology",
        title: "Why Choose Tier 1 Solar Panels?",
        paragraphs: [
          "Tier 1 Solar Panels are manufactured by globally recognized solar brands with proven reliability, high efficiency, and long-term performance. Designed to maximize solar energy generation, these panels deliver greater electricity savings, superior durability, and consistent output in Australian weather conditions.",
          "By investing in premium Tier 1 solar panels, homeowners benefit from higher energy production, improved low-light performance, and industry-leading warranties backed by trusted manufacturers."
        ],
        checklist: [
          "Higher Solar Energy Output",
          "Better Performance in Low-Light Conditions",
          "Long-Term Reliability & Durability",
          "25+ Year Performance Warranty"
        ]
      },

      card2: {
        badge: "Solar Quality Guarantee",
        title: "Premium Components. Proven Performance.",
        paragraphs: [
          "Every solar power system is built using carefully selected components that meet Australian quality and safety standards. From high-efficiency solar panels and advanced solar inverters to premium mounting systems and electrical protection, every component is chosen to maximize performance and long-term reliability.",
          "Our commitment to quality helps homeowners reduce electricity bills, increase energy independence, and achieve greater returns from their solar investment."
        ],
        checklist: [
          "Australian Standards Approved Components",
          "Cyclone & Wind-Rated Mounting Systems",
          "Weatherproof Electrical Protection",
          "Smart Solar Monitoring Technology"
        ]
      }
    }
  },
  "ev-charger": {
    title: "EV Charger Installation for Homes & Businesses ",
    tagline: "Professional EV Charger Installation integrated with your solar power system, helping you charge your electric vehicle faster, reduce charging costs, and maximize solar energy usage. ",
    savings: "Save up to $1,200 / year on fuel*",
    heroBanner: "Smart EV Charger Integration",
    heroBannerSub: "Charge your EV with 100% free solar power",
    introTitle: "EV Charging Station for Home Powered by Solar ",
    introDesc: " Charge your electric vehicle smarter with an EV Charging Station for Home that integrates seamlessly with your solar power system. Use excess solar energy to power your EV, reduce charging costs, and increase energy independence while maximizing your renewable energy investment. Pair your charger with a 13.2kW Solar Panel System for higher solar generation, faster EV charging, and greater long-term savings. ",
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
    timelineHeader: {
      badge: "Setup Steps",
      title: "How Does Solar Installation Work?",
      desc: "Our experts handle site assessments, solar system design, utility approvals, rebate documentation, and installation, making the switch to renewable energy simple, efficient, and hassle-free."
    },
    details: {
      panels: {
        title: "Solar-Powered EV Charging",
        spec: "Eco-Charging Integration",
        desc: "Use excess solar energy to power your electric vehicle and reduce charging costs with intelligent solar EV charging technology.",
        points: [
          "Charge Your EV with Solar Energy",
          "Smart Charging Schedules",
          "Dynamic Load Management",
          "Lower Electricity Bills"
        ],
        image: "/images/solar/ev-charging-solar.jpg"
      },
      inverter: {
        title: "Smart EV Charger Installation",
        spec: "7.4kW Single / 22kW Three-Phase",
        desc: "High-performance EV charging station for home compatible with leading electric vehicle brands, delivering fast, safe, and reliable charging.",
        points: [
          "Universal Type 2 Compatibility",
          "Wi-Fi & Mobile App Control",
          "IP65 Weatherproof Protection",
          "Real-Time Energy Monitoring"
        ],
        image: "/images/solar/solar-inverter-tech.jpg"
      },
      battery: {
        title: "Solar Battery Storage Integration",
        spec: "Smart Power Routing",
        desc: "Connect your EV charger with solar battery storage to maximize self-consumption, reduce grid reliance, and optimize energy usage.",
        points: [
          "Smart Energy Management",
          "Peak Tariff Reduction",
          "Solar Battery Compatibility",
          "Priority Charging Controls"
        ],
        image: "/images/solar/solar-inverter-tech.jpg"
      },
      installation: {
        title: "Licensed EV Charger Installation",
        spec: "Licensed Electricians",
        desc: "Professional installation by qualified electricians, ensuring compliance, safety, and seamless integration with your solar power system.",
        points: [
          "Dedicated Safety Protection",
          "Home EV Charger Setup",
          "System Testing & Commissioning",
          "Installation Warranty Included"
        ],
        image: "/images/solar/solar-installation-crew.jpg"
      }
    },
    educational: {
      card1: {
        badge: "Premium Solar Technology",
        title: "Why Are Tier 1 Solar Panels the Best Choice?",
        paragraphs: [
          "Tier 1 Solar Panels are produced by globally recognized manufacturers with a proven track record of quality, financial stability, and long-term performance. These high-efficiency solar panels are designed to generate more solar energy, deliver better reliability, and provide consistent power output in Australian conditions.",
          "By choosing premium Tier 1 solar panels, homeowners benefit from higher energy savings, improved low-light performance, and industry-leading warranties backed by trusted solar brands."
        ],
        checklist: [
          "Higher Solar Energy Generation",
          "Greater Energy Efficiency",
          "Superior Low-Light Performance",
          "25+ Year Performance Warranty"
        ]
      },

      card2: {
        badge: "Quality & Performance Guarantee",
        title: "Premium Solar Components Built to Last",
        paragraphs: [
          "Every solar power system is designed using premium-quality components that meet Australian safety and performance standards. From advanced solar panels and smart inverter technology to durable mounting systems and electrical protection, every component is selected to maximize energy production and long-term reliability.",
          "Our quality-first approach helps homeowners reduce electricity bills, increase energy independence, and achieve stronger returns from their solar investment."
        ],
        checklist: [
          "Australian Standards Approved Components",
          "Cyclone & Weather-Rated Mounting Systems",
          "Waterproof Electrical Protection",
          "Real-Time Solar Monitoring Technology"
        ]
      }
    }
  }
}
