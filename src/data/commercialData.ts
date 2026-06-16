export interface SystemDetail {
  title: string
  spec: string
  desc: string
  points: string[]
  image?: string
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
